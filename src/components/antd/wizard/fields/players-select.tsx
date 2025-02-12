import { Select, Spin } from 'antd';
import type { SelectProps } from 'antd';
import debounce from 'lodash/debounce';
import React, { useMemo, useRef, useState } from 'react';

interface UserValue {
  label: string;
  value: string;
}

export interface DebounceSelectProps<ValueType = any>
  extends Omit<SelectProps<ValueType | ValueType[]>, 'options' | 'children'> {
  fetchOptions: (search: string) => Promise<ValueType[]>;
  debounceTimeout?: number;
}

async function fetchUserList(username: string): Promise<UserValue[]> {
  console.log('fetching user', username);
  return fetch('https://randomuser.me/api/?results=5')
    .then((response) => response.json())
    .then((body) =>
      body.results.map(
        (user: {
          name: { first: string; last: string };
          login: { username: string };
        }) => ({
          label: `${user.name.first} ${user.name.last}`,
          value: user.login.username,
        })
      )
    );
}

const PlayersSelect: React.FC<{
  onChange: (...event: any[]) => void;
  value?: number[];
  disabled?: boolean;
}> = ({ onChange, value }) => {
  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState<UserValue[]>([]);
  const fetchRef = useRef(0);

  const debounceFetcher = useMemo(() => {
    const loadOptions = (value: string) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setOptions([]);
      setFetching(true);
      fetchUserList(value).then((newOptions) => {
        if (fetchId !== fetchRef.current) {
          // for fetch callback order
          return;
        }

        setOptions(newOptions);
        setFetching(false);
      });
    };
    return debounce(loadOptions, 500);
  }, []);

  return (
    <Select
      filterOption={false}
      labelInValue
      mode="multiple"
      notFoundContent={fetching ? <Spin size="small" /> : null}
      onChange={onChange}
      onSearch={debounceFetcher}
      options={options}
      placeholder="Select users"
      style={{ width: '100%' }}
      value={value}
    />
  );
};

export default PlayersSelect;
