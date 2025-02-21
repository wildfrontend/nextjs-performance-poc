'use client';

import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { DevTool } from '@hookform/devtools';
import { Button, Col, Form, Row, Select, Typography } from 'antd';
import {
  Controller,
  FormProvider,
  useFieldArray,
  useForm,
} from 'react-hook-form';

import ActiveSelect from '../fields/active';
import ParentIdSelect from '../fields/parent-id';
import QueryKeySelect from '../fields/query-key';
import SizeInput from '../fields/size';
import StatusSelects from '../fields/status';
import {
  ActivatedField,
  Operator,
  ParentIdField,
  QueryKey,
  SizeField,
  StatusField,
} from '../types/value';

type FormValues = {
  filters: { key: QueryKey | undefined; value: any | undefined }[];
};

export const useQueryForm = () => {
  return useForm();
};

const FieldArrayForm: React.FC = () => {
  const { control, watch, setValue } = useForm<FormValues>({
    defaultValues: {
      filters: [{}],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'filters',
  });

  return (
    <Form layout="vertical" style={{ maxWidth: '800px' }}>
      <DevTool control={control} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {fields.map((field, index) => {
          return (
            <Row key={index} gutter={[4, 4]}>
              <Col span={6}>
                <Controller
                  control={control}
                  name={`filters.${index}.key`}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => {
                    const selectKeys = watch('filters')?.map(
                      (item) => item.key
                    );
                    return (
                      <Form.Item>
                        <QueryKeySelect
                          onChange={(value) => {
                            onChange(value);
                            setValue(`filters.${index}.value`, undefined);
                          }}
                          value={value}
                          selectKeys={selectKeys}
                        />
                      </Form.Item>
                    );
                  }}
                />
              </Col>
              <Col span={16}>
                <Controller
                  control={control}
                  name={`filters.${index}.value`}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => {
                    switch (watch(`filters.${index}.key`)) {
                      case QueryKey.size: {
                        return (
                          <SizeInput
                            onChange={(value) => {
                              onChange(value);
                            }}
                            value={value as SizeField['value']}
                          />
                        );
                      }
                      case QueryKey.activated: {
                        return (
                          <ActiveSelect
                            onChange={(value) => {
                              onChange(value);
                            }}
                            value={value as ActivatedField['value']}
                          />
                        );
                      }
                      case QueryKey.parent_id: {
                        return (
                          <ParentIdSelect
                            onChange={(value) => {
                              onChange(value);
                            }}
                            value={value as ParentIdField['value']}
                          />
                        );
                      }
                      case QueryKey.status: {
                        return (
                          <StatusSelects
                            onChange={(value) => {
                              onChange(value);
                            }}
                            value={value as StatusField['value']}
                          />
                        );
                      }
                      default: {
                        return (
                          <Select
                            disabled
                            placeholder="Select"
                            style={{ width: '100%' }}
                          />
                        );
                      }
                    }
                  }}
                />
              </Col>
              <Col span={2}>
                <Button
                  onClick={() => {
                    remove(index);
                  }}
                  icon={<DeleteOutlined />}
                  color="danger"
                  type="text"
                />
              </Col>
            </Row>
          );
        })}
        <Row>
          <Col>
            <Button
              icon={<PlusOutlined />}
              type="link"
              hidden={watch().filters.length >= Object.keys(QueryKey).length}
              onClick={() => {
                append({ key: undefined, value: undefined });
              }}
              block
            >
              Add filter
            </Button>
          </Col>
        </Row>
      </div>
      <Form.Item noStyle>
        <Typography>
          <pre>{JSON.stringify(watch(), null, 2)}</pre>
        </Typography>
      </Form.Item>
    </Form>
  );
};

export default FieldArrayForm;
