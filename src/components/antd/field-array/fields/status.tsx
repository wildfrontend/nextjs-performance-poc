import { Select, SelectProps, Tag, TagProps } from 'antd';
import React from 'react';

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
      color={tagColor[value]}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginInlineEnd: 4 }}
    >
      {label}
    </Tag>
  );
};
const StatusSelects: React.FC = () => {
  return <Select tagRender={tagRender} options={options} mode="multiple" />;
};

export default StatusSelects