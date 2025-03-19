import { useQuery } from '@tanstack/react-query';

import { getRandomTodoOptions } from './query-options';

export const useFetchRandomTodo = () => {
  const query = useQuery(getRandomTodoOptions);
  return query;
};
