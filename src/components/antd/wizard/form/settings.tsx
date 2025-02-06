import { Form } from 'antd';
import React from 'react';
import { Controller } from 'react-hook-form';

import { useArticleFormContext } from '.';
import LocaleSelect from '../fields/locale-select';
import PlayersSelect from '../fields/players-select';
import SiteSectionsSelect from '../fields/site-section-select';

const SettingsForm: React.FC = () => {
  const {
    control,
    formState: { isSubmitting },
  } = useArticleFormContext();
  return (
    <Form layout="vertical">
      <Controller
        control={control}
        name="localeId"
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          return (
            <Form.Item
              help={error?.message}
              label="Locale"
              required
              rules={[
                {
                  required: !!error?.types?.required,
                  message: error?.message,
                },
              ]}
              validateStatus={error && 'error'}
            >
              <LocaleSelect
                disabled={isSubmitting}
                onChange={onChange}
                value={value}
              />
            </Form.Item>
          );
        }}
        rules={{ required: 'Please select a frontend locale' }}
      />
      <Controller
        control={control}
        name="siteSectionIds"
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          return (
            <Form.Item
              help={error?.message}
              label="Site sections"
              required
              validateStatus={error && 'error'}
            >
              <SiteSectionsSelect onChange={onChange} value={value} />
            </Form.Item>
          );
        }}
        rules={{ required: 'Please select a site section' }}
      />
      <Controller
        control={control}
        name="playerIds"
        render={({ field: { onChange, value } }) => {
          return (
            <Form.Item label="Players">
              <PlayersSelect
                disabled={isSubmitting}
                onChange={(e, items) => {
                  onChange(e);
                }}
                value={value}
              />
            </Form.Item>
          );
        }}
      />
    </Form>
  );
};

export default SettingsForm;
