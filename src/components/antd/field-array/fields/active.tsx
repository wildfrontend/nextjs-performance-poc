import { Select } from 'antd';
import { ActivatedField } from '../types/value';

const ActiveSelect: React.FC<{
  onChange: (...event: any[]) => void;
  value: ActivatedField['value'];
}> = ({ onChange, value }) => {
  return (
    <Select
      onChange={onChange}
      value={value}
      options={[
        { label: 'On', value: true },
        { label: 'Off', value: false },
      ]}
      style={{ width: '100%' }}
    />
  );
};

export default ActiveSelect;
