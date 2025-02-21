import { Select, Tag } from 'antd';
import { SelectProps } from 'antd/es/select';
import React from 'react';
import { ParentIdField } from '../types/value';

const options = [
  { label: 'P-0', value: 'p-0' },
  { label: 'P-1', value: 'p-1' },
  { label: 'P-2', value: 'p-2' },
];

type TagRender = SelectProps['tagRender'];

const tagRender: TagRender = (props) => {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      closable={closable}
      color="blue"
      onClose={onClose}
      onMouseDown={onPreventMouseDown}
      style={{ marginInlineEnd: 4 }}
    >
      {label}
    </Tag>
  );
};

const ParentIdSelect: React.FC<{
  onChange: (...event: any[]) => void;
  value: ParentIdField['value'];
}> = ({ onChange, value }) => {
  return (
    <Select
      onChange={onChange}
      value={value}
      mode="multiple"
      options={options}
      placeholder="Filter"
      style={{ width: '100%' }}
      tagRender={tagRender}
    />
  );
};

export default ParentIdSelect;
