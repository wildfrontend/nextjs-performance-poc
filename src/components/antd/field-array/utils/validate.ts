import QueryString from 'query-string';

import { QueryFormValues, QueryKey, ResultValues } from '../types/value';

export const getValidationRule = (selectedKey: string | undefined) => {
  // 依據 selectedKey 設定不同的驗證規則
  switch (selectedKey) {
    case QueryKey.activated:
      return {
        required: 'Please select activation status',
      };
    case QueryKey.size:
      return {
        required: 'Please input size',
        validate: (value: any) => {
          console.log(value);
          return value && value.value > 0
            ? true
            : 'Size must be greater than 0';
        },
      };
    case QueryKey.parent_id:
      return {
        required: 'Please select parent ID',
      };
    case QueryKey.status:
      return {
        required: 'Please select status',
      };
    default:
      return {
        required: 'Please select type or remove it',
      };
  }
};

export const formatFormValues = (data: QueryFormValues) => {
  return {
    filters: data.filters.reduce((acc, { key, value }) => {
      const isSize = key === QueryKey.size;
      const values = Array.isArray(value) ? value : [value?.value ?? value];
      if (key) {
        acc[key] = {
          operator: isSize ? value?.operator : 'in',
          values,
        };
      }
      return acc;
    }, {} as ResultValues),
  };
};

export const formatToQueryParams = (data: ResultValues) => {
  const flattened = Object.entries(data).reduce(
    (acc, [key, { operator, values }]) => {
      acc[`${key}[operator]`] = operator;
      acc[`${key}[values]`] = values;
      return acc;
    },
    {} as Record<string, string | string[]>
  );
  console.log(flattened);
  return QueryString.stringify(flattened, { arrayFormat: 'bracket' }); // 選擇 `bracket` 格式
};

export const parseQueryParamsToFormValue = (queryString: string) => {
  const parsed = QueryString.parse(queryString, {
    arrayFormat: 'bracket',
    types: {
      ['size[values]']: 'number[]',
    },
  });
  const parseValue = Object.entries(parsed).reduce((acc, [key, value]) => {
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
  return revertToArrayFormat(parseValue);
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
