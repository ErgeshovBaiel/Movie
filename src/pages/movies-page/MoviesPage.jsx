import React, { useState } from 'react';
import Movies from '../../components/movies/Movies';
import Category from '../../components/category/Category';
import Search from '../../components/search/Search';

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <Movies />
      <Search onSearch={setSearchQuery} />
      <Category searchQuery={searchQuery} />
    </div>
  );
};

export default MoviesPage;
