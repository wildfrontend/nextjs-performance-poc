import { ComponentsProps } from '@mui/material';
import { Select } from 'antd';
import { DefaultOptionType } from 'antd/es/select';
import React from 'react';

const options = [
  { label: 'Status', value: 'status' },
  { label: 'Parent ID', value: 'parent_id' },
  { label: 'Size', value: 'size' },
  { label: 'Activated', value: 'activated' },
];

const KeySelect: React.FC<{
  selected?: string[];
}> = ({ selected }) => {
  return (
    <Select
      placeholder="Filter"
      options={options.map((item) => {
        return {
          ...item,
          disabled: selected?.some((select) => select === item.value),
        };
      })}
    />
  );
};

export default KeySelect;
