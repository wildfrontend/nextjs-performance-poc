import { InputNumber, Select } from 'antd';
import React, { useEffect, useState } from 'react';

import { Operator } from '../types/value';

const RangeSelect: React.FC<{
  onChange: (value: string) => void;
  value: string;
}> = ({ onChange, value }) => {
  return (
    <Select
      options={[
        { label: '≥', value: Operator.ge },
        { label: '≤', value: Operator.le },
      ]}
      onChange={(v) => {
        onChange(v);
      }}
      value={value}
    />
  );
};

const UnitSelect: React.FC<{
  onChange: (value: number) => void;
  value: number;
}> = ({ onChange, value }) => {
  return (
    <Select
      options={[
        { label: 'MiB', value: 10 ** 6 },
        { label: 'GiB', value: 10 ** 9 },
        { label: 'TiB', value: 10 ** 12 },
        { label: 'PiB', value: 10 ** 15 },
      ]}
      value={value}
      onChange={(v) => {
        onChange(v);
      }}
    />
  );
};

const SizeInput: React.FC = () => {
  const [unit, setUnit] = useState(1000_000);
  const [operator, setOperator] = useState<string>(Operator.ge);

  const [size, setSize] = useState(0);

  useEffect(() => {
    console.log(size * unit)//value
  }, [unit, size])

  return (
    <InputNumber
      onChange={(value) => {
        if (value) {
          setSize(value);
        }
      }}
      value={size}
      min={0}
      addonBefore={
        <RangeSelect
          value={operator}
          onChange={(value) => {
            setOperator(value);
          }}
        />
      }
      addonAfter={
        <UnitSelect
          value={unit}
          onChange={(value) => {
            setUnit(value);
          }}
        />
      }
    />
  );
};

export default SizeInput;
