import React from 'react';
import BasicTable from './basic';
import SelectTable from './select';

const TableExample: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <BasicTable />
      <SelectTable />
    </div>
  );
};

export default TableExample;
