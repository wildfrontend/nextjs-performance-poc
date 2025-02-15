import { Select } from 'antd';

const ActiveSelect: React.FC<{}> = ({ }) => {
  return (
    <Select
      options={[
        { label: 'On', value: true },
        { label: 'Off', value: false },
      ]}
    />
  );
};

export default ActiveSelect;
