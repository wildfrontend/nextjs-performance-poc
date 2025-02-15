'use client';

import { DevTool } from '@hookform/devtools';
import { Form } from 'antd';
import { useForm } from 'react-hook-form';

const FieldArrayForm: React.FC = () => {
  const { control, setValue, watch } = useForm({
    defaultValues: {
      keys: [],
    },
  });
  return (
    <>
      <DevTool control={control} />
      <Form layout="vertical"></Form>
    </>
  );
};

export default FieldArrayForm;
