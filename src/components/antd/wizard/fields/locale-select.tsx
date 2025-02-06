import { Select } from 'antd';
import 'cropperjs/dist/cropper.min.css';
import React from 'react';
import { ControllerRenderProps } from 'react-hook-form';

export const emptyLocaleId = -1;
/**
 * ANCHOR Frontend Locale Select
 */

const options = [
  {
    id: 4,
    name: 'English (India)',
  },
  {
    id: 5,
    name: 'Bangla (India)',
  },
  {
    id: 6,
    name: 'Hindi (India)',
  },
  {
    id: 7,
    name: 'Marathi (India)',
  },
  {
    id: 8,
    name: 'Tamil (India)',
  },
  {
    id: 9,
    name: 'Telugu (India)',
  },
];
const LocaleSelect: React.FC<{
  onChange: (...event: any[]) => void;
  value: number;
  disabled?: boolean;
}> = ({ onChange, value, disabled }) => {
  return (
    <Select
      options={options.map((item) => {
        return {
          label: item.name,
          value: item.id,
        };
      })}
      disabled={disabled}
      onChange={onChange}
      placeholder="Please select"
      value={value === emptyLocaleId ? null : value}
    />
  );
};

export default LocaleSelect;
