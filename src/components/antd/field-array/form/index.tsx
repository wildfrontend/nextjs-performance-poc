'use client';

import {
  DeleteOutlined,
  FilterOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { DevTool } from '@hookform/devtools';
import { Filter1Outlined } from '@mui/icons-material';
import {
  Button,
  Col,
  Divider,
  Form,
  Modal,
  Row,
  Select,
  Typography,
} from 'antd';
import { JSX, useState } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';

import ActiveSelect from '../fields/active';
import ParentIdSelect from '../fields/parent-id';
import QueryKeySelect from '../fields/query-key';
import SizeInput from '../fields/size';
import StatusSelects from '../fields/status';
import {
  ActivatedField,
  ParentIdField,
  QueryKey,
  SizeField,
  StatusField,
} from '../types/value';

type FilterField =
  | SizeField
  | ActivatedField
  | ParentIdField
  | StatusField
  | { key: QueryKey | undefined; value: any | undefined };

type FormValues = {
  filters: FilterField[];
};

const FieldArrayForm: React.FC = () => {
  const { control, watch, setValue, reset, handleSubmit } = useForm<FormValues>(
    {
      defaultValues: { filters: [{ key: undefined, value: undefined }] },
    }
  );

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'filters',
  });

  const filters = watch('filters');

  const [isOpen, setOpen] = useState(false);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <>
      <Button
        onClick={() => {
          setOpen(true);
        }}
        icon={<FilterOutlined />}
      />
      <Modal
        closeIcon={false}
        destroyOnClose
        open={isOpen}
        footer={[
          <Button
            onClick={() => {
              reset();
            }}
          >
            Clear all
          </Button>,
          <Button
            onClick={() => {
              reset();
              setOpen(false);
            }}
          >
            Cancel
          </Button>,
          <Button onClick={onSubmit} type="primary">
            Confirm
          </Button>,
        ]}
      >
        <Form layout="vertical" style={{ padding: '8px' }}>
          <DevTool control={control} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {fields.map((field, index) => {
              const selectedKey = filters[index]?.key;
              return (
                <Row key={field.id} gutter={[4, 4]}>
                  {/* Key Select */}
                  <Col span={6}>
                    <Controller
                      control={control}
                      name={`filters.${index}.key`}
                      render={({
                        field: { onChange, value },
                        fieldState: { error },
                      }) => (
                        <Form.Item>
                          <QueryKeySelect
                            onChange={(newValue) => {
                              onChange(newValue);
                              setValue(`filters.${index}.value`, undefined);
                            }}
                            value={value}
                            selectKeys={filters.map((item) => item.key)}
                          />
                        </Form.Item>
                      )}
                    />
                  </Col>
                  {/* Dynamic Value Input */}
                  <Col span={16}>
                    <Controller
                      control={control}
                      name={`filters.${index}.value`}
                      rules={{
                        required: 'Please input value or remove field',
                      }}
                      render={({
                        field: { onChange, value },
                        fieldState: { error },
                      }) => {
                        const componentMap: Record<QueryKey, JSX.Element> = {
                          [QueryKey.size]: (
                            <SizeInput
                              onChange={(val) => onChange(val)}
                              value={value as SizeField['value']}
                            />
                          ),
                          [QueryKey.activated]: (
                            <ActiveSelect
                              onChange={(val) => onChange(val)}
                              value={value as ActivatedField['value']}
                            />
                          ),
                          [QueryKey.parent_id]: (
                            <ParentIdSelect
                              onChange={(val) => onChange(val)}
                              value={value as ParentIdField['value']}
                            />
                          ),
                          [QueryKey.status]: (
                            <StatusSelects
                              onChange={(val) => onChange(val)}
                              value={value as StatusField['value']}
                            />
                          ),
                        };
                        return (
                          <Form.Item
                            help={error?.message}
                            validateStatus={error && 'error'}
                          >
                            {componentMap[selectedKey!] || (
                              <Select
                                disabled
                                placeholder="Select"
                                style={{ width: '100%' }}
                              />
                            )}
                          </Form.Item>
                        );
                      }}
                    />
                  </Col>

                  {/* Remove Button */}
                  <Col span={2}>
                    <Button
                      onClick={() => remove(index)}
                      icon={<DeleteOutlined />}
                      color="danger"
                      type="text"
                    />
                  </Col>
                </Row>
              );
            })}

            {/* Add Filter Button */}
            <Row>
              <Col>
                <Button
                  icon={<PlusOutlined />}
                  type="link"
                  hidden={filters.length >= Object.keys(QueryKey).length}
                  onClick={() => append({ key: undefined, value: undefined })}
                  block
                >
                  Add filter
                </Button>
              </Col>
            </Row>
          </div>

          {/* Debugging Output */}
          <Form.Item noStyle>
            <Typography>
              <pre>{JSON.stringify(filters, null, 2)}</pre>
            </Typography>
          </Form.Item>
        </Form>
        <Divider />
      </Modal>
    </>
  );
};

export default FieldArrayForm;
