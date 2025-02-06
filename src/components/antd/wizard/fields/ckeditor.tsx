'use client';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
  AutoLink,
  Autosave,
  Bold,
  ClassicEditor,
  Essentials,
  Italic,
  Link,
  Paragraph,
} from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';
import { useEffect, useRef, useState } from 'react';

const Editor: React.FC<{
  onChange: (...event: any[]) => void;
  value?: string;
  disabled: boolean;
}> = ({ onChange, value, disabled }) => {
  const editorContainerRef = useRef(null);
  const editorRef = useRef(null);
  const [isLayoutReady, setIsLayoutReady] = useState(false);

  useEffect(() => {
    setIsLayoutReady(true);
    return () => setIsLayoutReady(false);
  }, []);

  return (
    <div className="main-container">
      <div
        className="editor-container editor-container_classic-editor"
        ref={editorContainerRef}
      >
        <div className="editor-container__editor">
          <div ref={editorRef}>
            {isLayoutReady && (
              <CKEditor
                config={{
                  toolbar: {
                    items: ['bold', 'italic', '|', 'link'],
                    shouldNotGroupWhenFull: false,
                  },
                  plugins: [
                    AutoLink,
                    Autosave,
                    Bold,
                    Essentials,
                    Italic,
                    Link,
                    Paragraph,
                  ],
                  licenseKey: 'GPL',
                  link: {
                    addTargetToExternalLinks: true,
                    defaultProtocol: 'https://',
                    decorators: {
                      toggleDownloadable: {
                        mode: 'manual',
                        label: 'Downloadable',
                        attributes: {
                          download: 'file',
                        },
                      },
                    },
                  },
                  placeholder: 'Type or paste your content here!',
                }}
                data={value}
                disabled={disabled}
                editor={ClassicEditor}
                onBlur={(event, editor) => {
                  console.log('Blur.', editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  onChange(data);
                  console.log({ event, editor, data });
                }}
                onFocus={(event, editor) => {
                  console.log('Focus.', editor);
                }}
                onReady={(editor) => {
                  // You can store the "editor" and use when it is needed.
                  console.log('Editor is ready to use!', editor);
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
