import { queryOptions } from '@tanstack/react-query';

import { GetRandomTodoResponse } from '@/types/apis/dummyjson/todo';
import { dummyjsonAxios } from '@/utils/axios';

export const getRandomTodoOptions = queryOptions({
  queryKey: ['todos', 'random'],
  queryFn: async ({ signal }) => {
    const response = await dummyjsonAxios.get<GetRandomTodoResponse>(
      `/todos/random`,
      {
        signal,
      }
    );
    return response.data;
  },
});
