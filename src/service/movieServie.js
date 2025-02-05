import axios from '../axios'

class MovieService {
  async fetchAllMovies(en) {
    try {
      const { data, status } = await axios.get(`discover/movie?language=${en}`);
      if (status !== 200) {
        throw new Error('Failed fetching movie data');
      }
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  async fetchMovieById(id, en) {
    try {
      const { data, status } = await axios.get(`/movie/${id}?language=${en}`);
      if (status !== 200) {
        throw new Error('Failed fetching movie info');
      }
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  async fetchMovieByName(movieName) {
    try {
      const { data, status } = await axios.get('search/movie', {
        params: {
          query: movieName,
          language: 'en',
        },
      });
      if (status !== 200) {
        throw new Error('Error fetching movie by name');
      }
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  async fetchMovieGenreList(en) {
    try {
      const { data, status } = await axios.get(`genre/movie/list?language=${en}`);
      if (status !== 200) {
        throw new Error('Failed fetching movie genre list');
      }
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  async fetchNewMovie(en) {
    try {
      const { data, status } = await axios.get('trending/movie/week', {
        params: { language: en },
      });
      if (status !== 200) {
        throw new Error('Error fetching new movies');
      }
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  async fetchPopularMovies(en) {
    try {
      const { data, status } = await axios.get('movie/popular', {
        params: { language: en },
      });
      if (status !== 200) {
        throw new Error('Error fetching popular movies');
      }
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  async fetchMovieNowWatching(en) {
    try {
      const { data, status } = await axios.get('movie/now_playing', {
        params: { language: en },
      });
      if (status !== 200) {
        throw new Error('Error fetching now-watching movies');
      }
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  async fetchMovieTopRated(en) {
    try {
      const { data, status } = await axios.get('movie/top_rated', {
        params: { language: en },
      });
      if (status !== 200) {
        throw new Error('Error fetching top-rated movies');
      }
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  async fetchMovieUpComing(en) {
    try {
      const { data, status } = await axios.get('movie/upcoming', {
        params: { language: en },
      });
      if (status !== 200) {
        throw new Error('Error fetching upcoming movies');
      }
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  async fetchMovieTrailers(id) {
    try {
      const { data, status } = await axios.get(`movie/${id}/videos`, {
        params: { language: 'en' },
      });
      if (status !== 200) {
        throw new Error('Error fetching movie trailers');
      }
      return data;
    } catch (err) {
      console.error(err);
    }
  }
}

const movieService = new MovieService();
export default movieService;
