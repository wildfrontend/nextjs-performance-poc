import { InputNumber, Select } from 'antd';
import React, { useEffect, useState } from 'react';

import { Operator, SizeField, SizeUnit } from '../types/value';

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
        { label: 'MiB', value: SizeUnit.MiB }, // 1,048,576 Bytes
        { label: 'GiB', value: SizeUnit.GiB }, // 1,073,741,824 Bytes
        { label: 'TiB', value: SizeUnit.TiB }, // 1,099,511,627,776 Bytes
        { label: 'PiB', value: SizeUnit.PiB }, // 1,125,899,906,842,624 Bytes
      ]}
      value={value}
    />
  );
};

const SizeInput: React.FC<{
  onChange: (...event: any[]) => void;
  value: SizeField['value'];
}> = ({ onChange, value }) => {
  const [unit, setUnit] = useState(SizeUnit.MiB);
  const [operator, setOperator] = useState<string>(Operator.ge);

  const [size, setSize] = useState(1);

  useEffect(() => {
    onChange({
      operator,
      value: size * unit,
    });
  }, [unit, size, operator]);

  return (
    <InputNumber
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
      style={{ width: '100%' }}
      value={size}
    />
  );
};

export default SizeInput;
