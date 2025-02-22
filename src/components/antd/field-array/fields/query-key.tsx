import { Select } from 'antd';
import React from 'react';

import { QueryField, QueryKey } from '../types/value';

const options = [
  { label: 'Status', value: QueryKey.status },
  { label: 'Parent ID', value: QueryKey.parent_id },
  { label: 'Size', value: QueryKey.size },
  { label: 'Activated', value: QueryKey.activated },
];

const QueryKeySelect: React.FC<{
  onChange: (value: string) => void;
  value?: string;
  selectKeys?: QueryField['key'][];
}> = ({ onChange, selectKeys, value }) => {
  return (
    <Select
      onChange={(value) => {
        onChange(value);
      }}
      options={options.map((item) => {
        return {
          ...item,
          disabled: selectKeys?.some((select) => select === item.value),
        };
      })}
      placeholder="Filter"
      style={{ width: '100%' }}
      value={value}
    />
  );
};

export default QueryKeySelect;
