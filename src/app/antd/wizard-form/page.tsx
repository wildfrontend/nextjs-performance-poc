'use client';

import React from 'react';

import ArticleForm, { ArticleFormMode } from '@/components/antd/wizard/form';

const Page: React.FC = () => {
  return (
    <div style={{ padding: '16px' }}>
      <ArticleForm
        formMode={ArticleFormMode.create}
        onCancel={() => {
          console.log('cancel');
        }}
        onSuccess={(value) => {
          console.log('success');
        }}
      />
    </div>
  );
};

export default Page;
