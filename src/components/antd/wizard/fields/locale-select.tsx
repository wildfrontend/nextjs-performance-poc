import { Select } from 'antd';
import 'cropperjs/dist/cropper.min.css';
import React from 'react';

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
      disabled={disabled}
      onChange={onChange}
      options={options.map((item) => {
        return {
          label: item.name,
          value: item.id,
        };
      })}
      placeholder="Please select"
      value={value === emptyLocaleId ? null : value}
    />
  );
};

export default LocaleSelect;
