'use client';

import {
  DeleteOutlined,
  FilterOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { DevTool } from '@hookform/devtools';
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
import QueryString from 'query-string';
import { JSX, useState } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';

import useQueryParams from '@/hooks/query-params';

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

export enum Operator {
  ge = 'ge',
  le = 'le',
  default = 'in',
}



type ResultValues = Record<QueryKey, { operator: string; values: any[] }>;

//https://jsfiddle.net/y8em9Lu0/1/
const formatFormValue = (data: FilterField[]) => {
  return data.reduce((acc, { key, value }) => {
    const isSize = key === 'size';
    const values = Array.isArray(value) ? value : [value?.value ?? value];
    if (key) {
      acc[key] = {
        operator: isSize ? value?.operator : 'in',
        values,
      };
    }
    return acc;
  }, {} as ResultValues);
};

const formatToQueryParams = (data: ResultValues) => {
  const flattened = Object.entries(data).reduce(
    (acc, [key, { operator, values }]) => {
      acc[`${key}[operator]`] = operator;
      acc[`${key}[values]`] = values;
      return acc;
    },
    {} as Record<string, string | string[]>
  );

  return QueryString.stringify(flattened, { arrayFormat: 'bracket' }); // 選擇 `bracket` 格式
};

const parseQueryParams = (queryString: string) => {
  const parsed = QueryString.parse(queryString, {
    arrayFormat: 'bracket',
    types: {
      ['size[values]']: 'number[]',
    },
  });
  return Object.entries(parsed).reduce((acc, [key, value]) => {
    const match = key.match(/(.*)\[(operator|values)\]/);
    if (!match) return acc;
    const field = match[1];
    const type = match[2];
    acc[field] = acc[field] || { operator: 'in', values: [] };
    if (type === 'operator') {
      acc[field].operator = value;
    } else if (type === 'values') {
      acc[field].values = Array.isArray(value) ? value : [value];
    }
    return acc;
  }, {} as any);
};

const revertToArrayFormat = (data: ResultValues) => {
  return Object.entries(data).map(([key, { operator, values }]) => {
    if (key === 'size') {
      return { key, value: { operator, value: values[0] } };
    } else if (key === 'activated') {
      return { key, value: values[0] };
    }
    return { key, value: values };
  });
};

const FieldArrayForm: React.FC = () => {
  const [result, setResult] = useState<any>();
  const { urlSearchParams, setQueryParams, removeQueryParams } =
    useQueryParams();

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
    const result = formatFormValue(data.filters);
    setResult(result);
    setQueryParams({ filters: formatToQueryParams(result) });
  });

  return (
    <>
      <Button
        icon={<FilterOutlined />}
        onClick={() => {
          setOpen(true);
          setValue(
            'filters',
            revertToArrayFormat(
              parseQueryParams(urlSearchParams.get('filters') ?? '')
            )
          );
        }}
      />
      <Modal
        closeIcon={false}
        destroyOnClose
        footer={[
          <Button
            key="clear"
            onClick={() => {
              reset();
              removeQueryParams('filters');
            }}
          >
            Clear all
          </Button>,
          <Button
            key="cancel"
            onClick={() => {
              reset();
              removeQueryParams('filters');
              setOpen(false);
            }}
          >
            Cancel
          </Button>,
          <Button key="confirm" onClick={onSubmit} type="primary">
            Confirm
          </Button>,
        ]}
        open={isOpen}
      >
        <Form layout="vertical" style={{ padding: '8px' }}>
          <DevTool control={control} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {fields.map((field, index) => {
              const selectedKey = filters[index]?.key;
              return (
                <Row gutter={[4, 4]} key={field.id}>
                  {/* Key Select */}
                  <Col span={6}>
                    <Controller
                      control={control}
                      name={`filters.${index}.key`}
                      render={({
                        field: { onChange, value },
                        fieldState: { error },
                      }) => {
                        return (
                          <Form.Item>
                            <QueryKeySelect
                              onChange={(newValue) => {
                                onChange(newValue);
                                setValue(`filters.${index}.value`, undefined);
                              }}
                              selectKeys={filters.map((item) => item.key)}
                              value={value}
                            />
                          </Form.Item>
                        );
                      }}
                    />
                  </Col>
                  {/* Dynamic Value Input */}
                  <Col span={16}>
                    <Controller
                      control={control}
                      name={`filters.${index}.value`}
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
                      rules={{
                        required: 'Please input value or remove field',
                      }}
                    />
                  </Col>

                  {/* Remove Button */}
                  <Col span={2}>
                    <Button
                      color="danger"
                      icon={<DeleteOutlined />}
                      onClick={() => remove(index)}
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
                  block
                  hidden={filters.length >= Object.keys(QueryKey).length}
                  icon={<PlusOutlined />}
                  onClick={() => append({ key: undefined, value: undefined })}
                  type="link"
                >
                  Add filter
                </Button>
              </Col>
            </Row>
          </div>

          {/* Debugging Output */}
          <Form.Item noStyle>
            <Typography>
              <pre>{JSON.stringify(result ? result : filters, null, 2)}</pre>
            </Typography>
          </Form.Item>
        </Form>
        <Divider />
      </Modal>
    </>
  );
};

export default FieldArrayForm;
