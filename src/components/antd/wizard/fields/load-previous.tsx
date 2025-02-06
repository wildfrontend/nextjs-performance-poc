import { Button } from 'antd';
import React from 'react';
import { useArticleFormContext } from '../form';

const LoadPreviousButton: React.FC = () => {
  const {
    formState: { isSubmitting },
    hasPreviousValues,
    loadPreviousValues,
  } = useArticleFormContext();

  if (hasPreviousValues) {
    return (
      <Button loading={isSubmitting} onClick={loadPreviousValues}>
        Load previous contents
      </Button>
    );
  }
  return <></>;
};

export default LoadPreviousButton;
