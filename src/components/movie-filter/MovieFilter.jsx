import { useState, useEffect } from 'react';
import movieService from '../../service/movieServie';
import { useNavigate } from 'react-router-dom';
import Star from '../../assets/star.svg';

const MovieFilter = ({ searchQuery }) => {
  const navigate = useNavigate();
  const [activeBtn, setActiveBtn] = useState(null);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const filterNames = ['All', 'Movies', 'TV Shows'];

  useEffect(() => {
    fetchMovies(filterNames[0]);
    setActiveBtn(filterNames[0]);
  }, []);

  const fetchMovies = (item) => {
    setIsLoading(true);

    if (item === 'All') {
      movieService.fetchNewMovie().then((res) => {
        setMovies(res.results);
        setIsLoading(false);
      });
    } else if (item === 'Movies') {
      movieService.fetchPopularMovies().then((res) => {
        setMovies(res.results);
        setIsLoading(false);
      });
    } else if (item === 'TV Shows') {
      movieService.fetchMovieTopRated().then((res) => {
        setMovies(res.results);
        setIsLoading(false);
      });
    }
  };

  const handleOnClick = (item) => {
    setActiveBtn(item);
    fetchMovies(item);
  };

  const formatVoteAverage = (voteAverage) => {
    return voteAverage.toFixed(1);
  };

  const filteredMovies = movies.filter((film) =>
    film.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-[80px] pb-[160px] app-container">
      <div className="w-[330px] flex gap-4 p-2 rounded-xl bg-[#00000033] text-white">
        {filterNames.map((item, index) => {
          const isActive = item === activeBtn;
          return (
            <p
              onClick={() => handleOnClick(item)}
              className={`cursor-pointer px-6 py-3 rounded-lg transition-all ${isActive ? 'bg-[#7D5CFA] text-white' : 'text-[#A0A0A0]'}`}
              key={index}
            >
              {item}
            </p>
          );
        })}
      </div>

      <div className="app-container pt-20 relative">
        {isLoading ? (
          <h3 className="text-white">Loading...</h3>
        ) : (
          <div className="flex flex-wrap gap-4">
            {filteredMovies.map((film) => {
              const imgUrl = 'https://image.tmdb.org/t/p/original/';
              return (         
                <div
                  key={film.id}
                  onClick={() => {
                    navigate(`/movie-detail/${film.id}`);
                  }}
                  className="flex flex-col items-center justify-center cursor-pointer"
                >
                  <button
                    className="w-[60px] h-[40px] p-[4px_8px] absolute rounded-[8px] text-[#FFBD6D] bg-[#000000A6] flex items-center gap-1 mr-[195px] mb-[404px]"
                  >
                    <img src={Star} alt="" />
                    {formatVoteAverage(film.vote_average)}
                  </button>

                  <div className="w-[282px] h-[480px] rounded-[12px] bg-[#20283ECC]">
                    <img
                      className="rounded-[8px] ml-[8px] mt-[8px]"
                      width="266"
                      height="400"
                      src={imgUrl + film.poster_path}
                      alt={film.title}
                    />
                    <h2 className="line-clamp-1 text-[#EBEEF5] mt-6 text-[18px] font-semibold ml-[16px]">
                      {film.title ? film.title.slice(0, 20) : ''}
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieFilter;
