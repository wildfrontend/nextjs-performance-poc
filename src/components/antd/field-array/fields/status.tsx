import { Select, SelectProps, Tag, TagProps } from 'antd';
import React from 'react';

import { StatusField } from '../types/value';

type TagRender = SelectProps['tagRender'];

const options: SelectProps['options'] = [
  { label: 'Online', value: 'online' },
  { label: 'Offline', value: 'offline' },
  { label: 'Rebuild', value: 'rebuild' },
  { label: 'Failed', value: 'failed' },
  { label: 'Missing', value: 'missing' },
];

const tagColor: Record<string, TagProps['color']> = {
  ['online']: 'success',
  ['offline']: 'warning',
  ['rebuild']: 'blue',
  ['failed']: 'error',
  ['missing']: 'error',
};

const tagRender: TagRender = (props) => {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      closable={closable}
      color={tagColor[value]}
      onClose={onClose}
      onMouseDown={onPreventMouseDown}
      style={{ marginInlineEnd: 4 }}
    >
      {label}
    </Tag>
  );
};
const StatusSelects: React.FC<{
  onChange: (...event: any[]) => void;
  value: StatusField['value'];
}> = ({ onChange, value }) => {
  return (
    <Select
      mode="multiple"
      onChange={onChange}
      options={options}
      style={{ width: '100%' }}
      tagRender={tagRender}
      value={value}
    />
  );
};

export default StatusSelects;
