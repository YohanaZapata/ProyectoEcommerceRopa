import { useState } from 'react';

export function useSearch() {
  const [searchTerm, setSearchTerm] = useState('');

  const search = (value) => {
    setSearchTerm(value);
  };

  return {
    searchTerm,
    setSearchTerm,
    search,
  };
}
