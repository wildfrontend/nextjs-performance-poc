import { Select } from 'antd';
import React from 'react';

const sections = [
  {
    id: 9,
    name: 'Dota 2',
  },
  {
    id: 10,
    name: 'LoL',
  },
  {
    id: 13,
    name: 'CS2',
  },
  {
    id: 20,
    name: 'PUBG Mobile',
  },
  {
    id: 21,
    name: 'Valorant',
  },
  {
    id: 22,
    name: 'Wild Rift',
  },
  {
    id: 23,
    name: 'Mobile Legends',
  },
  {
    id: 25,
    name: 'Entertainment',
  },
];

const SiteSectionsSelect: React.FC<{
  onChange: (...event: any[]) => void;
  value?: number[];
  disabled?: boolean;
}> = ({ onChange, value, disabled }) => {
  return (
    <Select
      allowClear
      defaultValue={value}
      disabled={disabled}
      mode="multiple"
      onChange={onChange}
      optionFilterProp="children"
      placeholder="Please select site sections"
      style={{ width: '100%' }}
      value={value}
      options={sections.map((item) => {
        return {
          label: item.name,
          value: item.id,
        };
      })}
    />
  );
};

export default SiteSectionsSelect;
