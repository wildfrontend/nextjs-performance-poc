import { DeleteOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Image, Modal, Space, Typography, Upload } from 'antd';
import { RcFile, UploadFile } from 'antd/es/upload';
import Compressor from 'compressorjs';
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.min.css';
import React, { useCallback, useRef, useState } from 'react';
import ReactCropper from 'react-cropper';
import { imageConverter } from 'upload-images-converter';

const UploadCropper: React.FC<{
  isOpen: boolean;
  cropperImg?: string;
  onConfirm: (img: Blob) => void;
  onCancel: () => void;
  cropper: {
    cropBoxMaxHeight: number;
    cropBoxMaxWidth: number;
    resultHeight: number;
    resultWidth: number;
    aspectRatio: number;
    convertSize: number;
    modalWidth: number;
  };
  isDeleteable?: boolean;
}> = ({ isOpen, cropperImg, onCancel, onConfirm, cropper }) => {
  const cropperRef = useRef<(HTMLImageElement & { cropper?: Cropper }) | null>(
    null
  );
  const cropImage = useCallback(() => {
    cropperRef.current?.cropper?.crop();
    cropperRef.current?.cropper
      ?.getCroppedCanvas({
        width: cropper.resultWidth,
        height: cropper.resultHeight,
      })
      .toBlob((blob) => {
        if (!blob) {
          console.log('Crop Image Failed');
          return;
        }
        new Compressor(blob, {
          quality: 0.8,
          convertSize: cropper.convertSize,
          success: (file) => {
            onConfirm(file);
          },
          error: (error) => {
            console.log('Compressor Image Failed', error);
          },
        });
      });
  }, [
    onConfirm,
    cropper.convertSize,
    cropper.resultHeight,
    cropper.resultWidth,
  ]);

  return (
    <Modal
      destroyOnClose
      footer={
        <Space>
          <Button
            onClick={() => {
              cropperRef?.current?.cropper?.reset();
            }}
          >
            Reset
          </Button>
          <Button onClick={cropImage} type="primary">
            Confirm
          </Button>
        </Space>
      }
      onCancel={onCancel}
      open={isOpen}
      width={cropper.modalWidth}
    >
      <div
        style={{
          margin: '0 auto',
          width: cropper.cropBoxMaxWidth,
          height: cropper.cropBoxMaxHeight,
        }}
      >
        <ReactCropper
          cropBoxResizable={false}
          initialAspectRatio={cropper.aspectRatio}
          minCropBoxHeight={cropper.cropBoxMaxHeight}
          minCropBoxWidth={cropper.cropBoxMaxWidth}
          ref={cropperRef}
          responsive={false}
          src={cropperImg}
          style={{
            width: cropper.cropBoxMaxWidth,
            height: cropper.cropBoxMaxHeight,
          }}
          zoomable={true}
        />
      </div>
    </Modal>
  );
};

const PreDisplayImage: React.FC<{
  preview: string;
  onDeleteImage: () => void;
  isDeleteable?: boolean;
  previewSize:
    | {
        width: number;
        height: number;
      }
    | undefined;
}> = ({ preview, onDeleteImage, isDeleteable, previewSize }) => {
  return (
    <Space>
      <Image
        className="object-contain"
        height={previewSize?.height ?? 337}
        src={preview}
        width={previewSize?.width ?? 600}
      />
      {isDeleteable && (
        <Button
          danger
          icon={<DeleteOutlined />}
          onClick={onDeleteImage}
          shape="circle"
          type="primary"
        ></Button>
      )}
    </Space>
  );
};

type ImageUploadProps = {
  value: Blob | undefined;
  onChange: (...event: any[]) => void;
  preview?: string | null;
  setError: (message: string) => void;
  clearErrors: () => void;
  disabled: boolean;
  cropper: {
    cropBoxMaxHeight: number;
    cropBoxMaxWidth: number;
    resultHeight: number;
    resultWidth: number;
    aspectRatio: number;
    convertSize: number;
    modalWidth: number;
  };
  isDeleteable?: boolean;
  onDelete?: () => void;
  previewSize?: {
    width: number;
    height: number;
  };
  fileSize?: number;
};

const getImageDimension = (file: RcFile | Blob): Promise<number[]> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener('load', (event) => {
      const _loadedImageUrl = event.target?.result;
      const image = document.createElement('img');
      image.src = _loadedImageUrl as string;

      image.addEventListener('load', () => {
        const { width, height } = image;
        resolve([width, height]);
      });
    });
  });
};

const ImageUpload: React.FC<ImageUploadProps> = ({
  onChange,
  value,
  preview,
  setError,
  clearErrors,
  disabled,
  cropper,
  isDeleteable,
  onDelete,
  previewSize,
  fileSize,
}) => {
  const result = useRef<Blob | undefined>(undefined);
  const [cropperImg, setCropperImg] = useState<string | undefined>(undefined);

  const [previewImage, setPreviewImage] = useState(preview);

  const deleteImage = () => {
    setPreviewImage(null);
    if (onDelete) {
      onDelete();
    }
  };

  return (
    <Space direction="vertical">
      <UploadCropper
        cropper={cropper}
        cropperImg={cropperImg}
        isOpen={!!cropperImg}
        onCancel={() => {
          setCropperImg(undefined);
        }}
        onConfirm={async (cropimg) => {
          try {
            const imageWidth = await getImageDimension(cropimg);
            const image = await imageConverter({
              files: [cropimg],
              format: 'image/webp',
              width: imageWidth?.[0],
              height: imageWidth?.[1],
            });
            result.current = image?.[0];
            setCropperImg(undefined);
          } catch (error) {
            console.log('Error', error);
          }
        }}
      />
      <Upload
        accept=".png, .jpeg, .jpg, .webp"
        beforeUpload={(file) => {
          const acceptedTypes = [
            'image/jpeg',
            'image/png',
            'image/jpg',
            'image/webp',
          ];
          if (!acceptedTypes.includes(file.type)) {
            setError('Only jpeg, jpg, png and webp are accepted');
            return Upload.LIST_IGNORE;
          }
          if (file.size / 1000 > (fileSize ?? 500)) {
            setError(`This file should be under ${fileSize ?? 500}KB`);
            return Upload.LIST_IGNORE;
          }
          clearErrors();
          setCropperImg(URL.createObjectURL(file));
          return new Promise(
            (
              resolve: (value: typeof file) => void,
              reject: (value: string) => void
            ) => {
              let cropping = window.setInterval(() => {
                if (result.current) {
                  let cropfile = new File([result.current], file.name, {
                    type: file.type,
                    lastModified: Date.now(),
                  }) as RcFile;
                  cropfile.uid = file.uid;
                  window.clearInterval(cropping);
                  resolve(cropfile);
                }
              }, 300);
            }
          );
        }}
        customRequest={(request) => {
          request?.onSuccess?.('file uploaded');
        }}
        disabled={disabled}
        itemRender={(originNode, file, fileList, action) => {
          return (
            <Space style={{ padding: '8px 0px' }}>
              <Image
                className="object-contain"
                height={previewSize?.height ?? 45}
                src={
                  result.current &&
                  URL.createObjectURL(result.current as Blob | MediaSource)
                }
                width={previewSize?.width ?? 80}
              />
              <Typography.Text>{file.name}</Typography.Text>
              <Button
                danger
                icon={<DeleteOutlined />}
                onClick={() => {
                  action.remove();
                  setTimeout(() => {
                    result.current = undefined;
                  }, 200);
                }}
                shape="circle"
                size="small"
              />
            </Space>
          );
        }}
        maxCount={1}
        onChange={(file: { file: UploadFile; fileList: UploadFile[] }) => {
          if (file.file.status === 'done') {
            if (!previewImage) {
              onChange(file.fileList?.[0]?.originFileObj ?? null);
            } else {
              onChange(file.fileList?.[0]?.originFileObj);
            }
          }
        }}
        onRemove={() => {
          onChange(null);
          if (onDelete) {
            onDelete();
          }
        }}
      >
        <Button block icon={<UploadOutlined />}>
          Click to upload
        </Button>
      </Upload>
      {!value && previewImage && (
        <PreDisplayImage
          isDeleteable={isDeleteable}
          onDeleteImage={deleteImage}
          preview={previewImage}
          previewSize={previewSize}
        />
      )}
    </Space>
  );
};

export default ImageUpload;
