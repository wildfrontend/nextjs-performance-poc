'use client';

import React, { Suspense } from 'react';

import FieldArrayForm from '@/components/antd/field-array/form';

const Page: React.FC = () => {
  return (
    <Suspense>
      <div style={{ padding: '16px' }}>
        <h1>Field Array </h1>
        <FieldArrayForm />
      </div>
    </Suspense>
  );
};

export default Page;
