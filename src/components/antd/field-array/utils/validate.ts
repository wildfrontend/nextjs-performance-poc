import { QueryKey } from '../types/value';

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
