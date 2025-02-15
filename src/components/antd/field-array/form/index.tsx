'use client';

import { DeleteOutlined } from '@ant-design/icons';
import { Button, Col, Form, Row } from 'antd';
import { useState } from 'react';

import ControlSelect from '../fields/control';
import QueryKeySelect from '../fields/query-key';
import { QueryKey } from '../types/value';

const Field: React.FC = () => {
  const [queryKey, setQueryKey] = useState<QueryKey | undefined>();
  return (
    <Row gutter={[4, 4]}>
      <Col span={3}>
        <QueryKeySelect
          onChange={(value) => {
            setQueryKey(value);
          }}
        />
      </Col>
      <Col span={8}>
        <ControlSelect queryKey={queryKey} />
      </Col>
      <Col span={1}>
        <Button icon={<DeleteOutlined />} color="danger" type="text" />
      </Col>
    </Row>
  );
};

const FieldArrayForm: React.FC = () => {
  return (
    <>
      <Form layout="vertical" name="filter">
        <Field />
      </Form>
    </>
  );
};

export default FieldArrayForm;
