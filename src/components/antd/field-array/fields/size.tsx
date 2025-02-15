import { InputNumber, Select } from 'antd';
import React, { useEffect, useState } from 'react';

import { Operator } from '../types/value';

const RangeSelect: React.FC<{
  onChange: (value: string) => void;
  value: string;
}> = ({ onChange, value }) => {
  return (
    <Select
      onChange={(v) => {
        onChange(v);
      }}
      options={[
        { label: '≥', value: Operator.ge },
        { label: '≤', value: Operator.le },
      ]}
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
      onChange={(v) => {
        onChange(v);
      }}
      options={[
        { label: 'MiB', value: 10 ** 6 },
        { label: 'GiB', value: 10 ** 9 },
        { label: 'TiB', value: 10 ** 12 },
        { label: 'PiB', value: 10 ** 15 },
      ]}

      value={value}
    />
  );
};

const SizeInput: React.FC = () => {
  const [unit, setUnit] = useState(1000_000);
  const [operator, setOperator] = useState<string>(Operator.ge);

  const [size, setSize] = useState(0);

  useEffect(() => {
    console.log(size * unit); //value
  }, [unit, size]);

  return (
    <InputNumber
      style={{ width: '100%' }}
      addonAfter={
        <UnitSelect
          onChange={(value) => {
            setUnit(value);
          }}
          value={unit}
        />
      }
      addonBefore={
        <RangeSelect
          onChange={(value) => {
            setOperator(value);
          }}
          value={operator}
        />
      }
      min={0}
      onChange={(value) => {
        if (value) {
          setSize(value);
        }
      }}
      value={size}
    />
  );
};

export default SizeInput;
