import { Select } from 'antd';
import React from 'react';

import { QueryKey } from '../types/value';
import ActiveSelect from './active';
import ParentIdSelect from './parent-id';
import SizeInput from './size';
import StatusSelects from './status';

const ControlSelect: React.FC<{ queryKey?: QueryKey }> = ({ queryKey }) => {
  switch (queryKey) {
    case QueryKey.size: {
      return <SizeInput />;
    }
    case QueryKey.activated: {
      return <ActiveSelect />;
    }
    case QueryKey.parent_id: {
      return <ParentIdSelect />;
    }
    case QueryKey.status: {
      return <StatusSelects />;
    }
    default: {
      return <Select disabled placeholder="Select" style={{ width: '100%' }} />;
    }
  }
};

export default ControlSelect;
