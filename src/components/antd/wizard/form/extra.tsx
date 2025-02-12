import { Form, Input, Typography } from 'antd';
import React from 'react';
import { Controller } from 'react-hook-form';

import { useArticleFormContext } from '.';

const ExtraForm: React.FC = () => {
  const {
    control,
    formMode,
    initialValues,
    setValue,
    getValues,
    watch,
    formState: { isSubmitting },
  } = useArticleFormContext();

  const isQuickPollReqired = [
    watch('quickpoll.question'),
    watch('quickpoll.options.0'),
    watch('quickpoll.options.1'),
  ].some((item) => !!item);

  return (
    <Form layout="vertical">
      <Typography.Title level={5}>Quick poll</Typography.Title>
      <Controller
        control={control}
        name="quickpoll.question"
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          return (
            <Form.Item
              help={
                <div className="flow-root">
                  {error?.message && <span>{error?.message}</span>}
                  <Typography.Text className="float-right" type="secondary">
                    ({value?.length || 0} out of 255 characters)
                  </Typography.Text>
                </div>
              }
              label="Question"
              required={isQuickPollReqired}
              validateStatus={error && 'error'}
            >
              <Input.TextArea onChange={onChange} rows={6} value={value} />
            </Form.Item>
          );
        }}
        rules={{
          required: {
            value: isQuickPollReqired,
            message: 'Please Input QuickPoll Question',
          },
          maxLength: {
            value: 255,
            message: '255 characters maximum limited',
          },
        }}
      />
      <Controller
        control={control}
        name="quickpoll.options.0"
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          return (
            <Form.Item
              help={
                <div style={{ display: 'flow-root' }}>
                  {error?.message && <span>{error?.message}</span>}
                  <Typography.Text style={{ float: 'right' }} type="secondary">
                    ({value?.length || 0} out of 255 characters)
                  </Typography.Text>
                </div>
              }
              label="Option 1"
              required={isQuickPollReqired}
              validateStatus={error && 'error'}
            >
              <Input onChange={onChange} value={value} />
            </Form.Item>
          );
        }}
        rules={{
          required: {
            value: isQuickPollReqired,
            message: 'Please Input QuickPoll Option 1',
          },
          maxLength: {
            value: 255,
            message: '255 characters maximum limited',
          },
        }}
      />
      <Controller
        control={control}
        name="quickpoll.options.1"
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          return (
            <Form.Item
              help={
                <div style={{ display: 'flow-root' }}>
                  {error?.message && <span>{error?.message}</span>}
                  <Typography.Text style={{ float: 'right' }} type="secondary">
                    ({value?.length || 0} out of 255 characters)
                  </Typography.Text>
                </div>
              }
              label="Option 2"
              required={isQuickPollReqired}
              validateStatus={error && 'error'}
            >
              <Input onChange={onChange} value={value} />
            </Form.Item>
          );
        }}
        rules={{
          required: {
            value: isQuickPollReqired,
            message: 'Please Input QuickPoll Option 2',
          },
          maxLength: {
            value: 255,
            message: '255 characters maximum limited',
          },
        }}
      />
    </Form>
  );
};

export default ExtraForm;
