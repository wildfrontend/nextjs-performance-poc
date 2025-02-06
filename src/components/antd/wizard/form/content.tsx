import { Form, Input, Space, Typography } from 'antd';
import React from 'react';
import { Controller } from 'react-hook-form';

import { useArticleFormContext } from '.';
import Editor from '../fields/ckeditor';
import ImageUpload from '../fields/upload-image';

const ContentForm: React.FC = () => {
  const {
    control,
    initialValues,
    isEdit,
    watch,
    formMode,
    setError,
    clearErrors,
    setValue,
    formState: { isSubmitting },
  } = useArticleFormContext();

  const removeImage = () => {
    setValue('headlineImgFile', undefined);
  };

  return (
    <Form layout="vertical">
      <Controller
        control={control}
        name="title"
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          return (
            <Form.Item
              help={
                <div style={{ display: 'flow-root' }}>
                  {error?.message && <span>{error?.message}</span>}
                  <Typography.Text style={{ float: 'right' }} type="secondary">
                    ({value?.length || 0} out of 100 characters)
                  </Typography.Text>
                </div>
              }
              label="Title"
              required
              validateStatus={error && 'error'}
            >
              <Input
                disabled={isSubmitting}
                onChange={onChange}
                value={value}
              />
            </Form.Item>
          );
        }}
        rules={{
          required: 'Please input title',
          maxLength: { value: 100, message: '100 characters maximum limited' },
        }}
      />
      {/* headlineImage */}
      <Controller
        control={control}
        name="headlineImgFile"
        render={({ field: { value, onChange }, fieldState: { error } }) => {
          return (
            <Form.Item
              help={error?.message}
              label="Headline Image"
              tooltip={
                <Space direction="vertical">
                  <Typography.Text>JPG, PNG or WEBP.</Typography.Text>
                  <Typography.Text>Maximum file size: 500 KB.</Typography.Text>
                  <Typography.Text>
                    Minimum dimensions: 1200 x 675px.
                  </Typography.Text>
                </Space>
              }
              validateStatus={error && 'error'}
            >
              <ImageUpload
                clearErrors={() => clearErrors('headlineImgFile')}
                cropper={{
                  cropBoxMaxHeight: 563,
                  cropBoxMaxWidth: 1000,
                  resultHeight: 675,
                  resultWidth: 1280,
                  aspectRatio: 2 / 1,
                  convertSize: 300_000,
                  modalWidth: 1200,
                }}
                disabled={isSubmitting}
                onChange={onChange}
                setError={(message: string) => {
                  setError('headlineImgFile', { message: message });
                }}
                value={value}
              />
            </Form.Item>
          );
        }}
      />
      <Controller
        control={control}
        name="headlineImageText"
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          if (
            isEdit
              ? !initialValues?.headlineImgPreview && !watch().headlineImgFile
              : !watch().headlineImgFile
          ) {
            return <></>;
          }
          return (
            <Form.Item
              help={error?.message}
              label="Headline image alt"
              required={
                isEdit
                  ? !!initialValues?.headlineImgPreview ||
                    !!watch()?.headlineImgFile
                  : !!watch()?.headlineImgFile
              }
              validateStatus={error && 'error'}
            >
              <Input onChange={onChange} value={value} />
            </Form.Item>
          );
        }}
        rules={{
          required: {
            value: isEdit
              ? !!initialValues?.headlineImgPreview ||
                !!watch()?.headlineImgFile
              : !!watch()?.headlineImgFile,
            message: 'Please input headline image alt',
          },
          maxLength: {
            value: 125,
            message: '125 characters maximum limited',
          },
        }}
        shouldUnregister={
          isEdit
            ? !initialValues?.headlineImgPreview && !watch().headlineImgFile
            : !watch().headlineImgFile
        }
      />
      <Controller
        control={control}
        name="content"
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          return (
            <Form.Item
              help={error?.message}
              label="Content"
              required
              validateStatus={error && 'error'}
            >
              <Editor
                disabled={isSubmitting}
                onChange={onChange}
                value={value}
              />
            </Form.Item>
          );
        }}
        rules={{
          required: 'Please edit content',
          maxLength: {
            value: 2147483647,
            message: 'Over content length limited',
          },
        }}
      />
    </Form>
  );
};

export default ContentForm;
