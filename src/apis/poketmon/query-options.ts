import { queryOptions } from '@tanstack/react-query';

import axios from '@/utils/axios';

export const pokemonOptions = queryOptions({
  queryKey: ['pokemon'],
  queryFn: async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/25');
    return response.data;
  },
});
