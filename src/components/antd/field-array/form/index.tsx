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
  QueryFormValues,
  QueryKey,
  SizeField,
  StatusField,
} from '../types/value';
import { formatFormValues, formatToQueryParams, getValidationRule, parseQueryParamsToFormValue } from '../utils/validate';
import useQueryParams from '@/hooks/query-params';

const FieldArrayForm: React.FC = () => {
  const [result, setResult] = useState<any>();
  const [isOpen, setOpen] = useState(false);

  const { urlSearchParams, setQueryParams, removeQueryParams } =
    useQueryParams();

  const { control, watch, setValue, reset, handleSubmit } =
    useForm<QueryFormValues>({
      defaultValues: { filters: [{ key: undefined, value: undefined }] },
    });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'filters',
  });

  const filters = watch('filters');

  const onSubmit = handleSubmit((data) => {
    const result = formatFormValues(data);
    setResult(result);
    setQueryParams({ filters: formatToQueryParams(result.filters) });
  });

  return (
    <>
      <Button
        icon={<FilterOutlined />}
        onClick={() => {
          setOpen(true);
          const defaultValue = urlSearchParams.get('filters')
          if (defaultValue) {
            setValue(
              'filters',
              parseQueryParamsToFormValue(defaultValue)
            );
          }

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
              setResult(undefined)
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
        <Form layout="vertical">
          <DevTool control={control} />
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
                      const componentMap: Record<string, JSX.Element> = {
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
                          {selectedKey ? (
                            componentMap[selectedKey]
                          ) : (
                            <Select
                              disabled
                              placeholder="Select"
                              style={{ width: '100%' }}
                            />
                          )}
                        </Form.Item>
                      );
                    }}
                    rules={getValidationRule(selectedKey)}
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
          {/* Debugging Output */}
          <Form.Item noStyle>
            <Typography>
              <pre>{JSON.stringify(filters, null, 2)}</pre>
            </Typography>
          </Form.Item>
          {result && (
            <Form.Item noStyle>
              <Typography>
                <pre>{JSON.stringify(result, null, 2)}</pre>
              </Typography>
            </Form.Item>
          )}
        </Form>
        <Divider />
      </Modal>
    </>
  );
};

export default FieldArrayForm;
