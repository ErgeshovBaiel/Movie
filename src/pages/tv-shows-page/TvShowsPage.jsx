import React, { useState } from 'react'
import Search from '../../components/search/Search'
import TvShows from '../../components/tvshows/TvShows'
import TvShowsFilter from '../../components/tv-shows-filter/TvShowsFilter'

const TvShowsPage = () => {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div>
      <TvShows />
      <Search  onSearch={setSearchQuery} />
      <TvShowsFilter searchQuery={searchQuery} />
    </div>
  )
}

export default TvShowsPage

