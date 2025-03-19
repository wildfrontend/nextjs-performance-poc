import { queryOptions } from '@tanstack/react-query';

import { GetRandomTodoResponse } from '@/types/apis/todo';
import axios from '@/utils/axios';

export const getRandomTodoOptions = queryOptions({
  queryKey: ['todos', 'random'],
  queryFn: async ({ signal }) => {
    const response = await axios.get<GetRandomTodoResponse>(`/todos/random`, {
      signal,
    });
    return response.data;
  },
});
