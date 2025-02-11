import { NavLink, useParams } from 'react-router'
import { useEffect, useState } from 'react'
import movieService from '../../service/movieServie'
import Star from '../../assets/star.svg'

const MovieDetailPage = () => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState({})

  useEffect(() => {
    movieService.fetchMovieById(movieId).then(data => {
      console.log(data)
      setMovie(data)
    })
  }, [movieId])

  if (Object.keys(movie).length === 0) {
    return (
      <div className='flex justify-center'>
        <h1 className='text-white'>Loading...</h1>
      </div>
    )
  }

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text
  }

  const formatBudget = budget => {
    if (budget >= 1000000) {
      return (
        <>
          {(budget / 1000000).toFixed(0)}
          <span className='text-sm'>M</span>
        </>
      )
    }
    return budget
  }

  const countryNames = {
    US: 'USA',
    CA: 'Canada',
    GB: 'United Kingdom',
    FR: 'France',
    DE: 'Germany',
    IT: 'Italy'
  }

  const formatCountry = countryCode => {
    return countryNames[countryCode] || countryCode
  }

  const imgUrl = 'https://image.tmdb.org/t/p/original/'

  const formatVoteAverage = voteAverage => {
    return voteAverage.toFixed(1)
  }

  return (
    <div>
      <div>
        <div
          className='bg-cover bg-center bg-no-repeat w-[1200px] h-[480px] mt-[120px] rounded-[40px] m-auto'
          style={{
            backgroundImage: `linear-gradient(to top right, rgba(54, 44, 146, 0.4), rgba(18, 98, 151, 0.4)), url(${
              imgUrl + movie.backdrop_path
            })`
          }}
        ></div>

        <div
          className='w-[560px] h-[144px] my-container m-auto relative bottom-[70px] right-[230px] 
          p-10 gap-2.5 rounded-3xl bg-[#20283E]'
        >
          <div className="flex gap-[22px]">
          <NavLink to={'/'}>
          <p className="w-[85px] h-[16px] text-[#BEB7FB] font-normal text-xs leading-4 font-[Poppins]">MaileHereko</p>
          </NavLink>

           <NavLink to={'/movies'}>
           <p className="w-[42px] h-[16px]  text-xs leading-4 font-normal font-[Poppins] text-[#BEB7FB]">Movies</p>
           </NavLink>

           <NavLink to={'/tv shows'}>
           <p className="w-[57px] h-[16px]  text-xs leading-4 font-normal font-[Poppins] text-[#BEB7FB]">TV Shows</p>
           </NavLink>

          </div>
          <h3 className='line-clamp-1 text-3xl font-medium text-white font-[Poppins] my-4'>
            {movie.title}
          </h3>
        </div>

        <div
        className='w-[993px] m-auto pt-[50px] flex justify-between items-center'>
          <div>
            <img
              className='w-[480px] h-[720px]   rounded-[24px]'
              src={imgUrl + movie.poster_path}
              alt={movie.title}
            />
          </div>

          <div 
          className='w-[480px] h-[688px] relative top-[400px] left-[60px] space-y-[24px]'>

            <h3
              className='line-clamp-1 mt-[-400px] w-[346px] h-[32px] font-[Poppins]
               text-[24px] font-bold leading-[32px] text-[#EBEEF5]'
            >
              {movie.tagline}
            </h3>

            <p 
            className='line-clamp-6 font-[Poppins] text-[20px] font-normal leading-[32px] text-[#8E95A9]'>
              {truncateText(movie.overview)}
            </p>

            <div className='pt-[20px]'>
              <button
                className='w-[60px] h-[40px]  p-[4px_8px] rounded-[8px]
             text-[#FFBD6D] bg-[#000000A6] flex items-center gap-1'
              >
                <img src={Star} alt='' className='pb-[2px]' />
                {formatVoteAverage(movie.vote_average)}
              </button>
            </div>

            <div className=' pt-[20px]'>
              <span
                className=' mt-[50px] w-[115px] h-[32px] font-[Poppins] text-[20px]
              font-normal leading-[32px] text-[#C3C8D4]'
              >
                {movie.release_date}
              </span>
            </div>

            <h4 className='mt-[100px] w-[100px] h-[32px] font-[Poppins] text-[20px]  leading-[32px] font-normal text-[#C3C8D4]'>
              {movie.runtime} min
            </h4>

            <div className='pt-[20px]'>
              <div className='flex gap-5 w-[890px] text-[20px]  leading-[32px] font-[Poppins]  font-normal my-5 text-[#C3C8D4]'>
                <p>{formatBudget(movie.budget)}</p>
                <p>{formatCountry(movie.origin_country)}</p>
              </div>
            </div>

            <div  className="pt-[40px] w-[600px]">
              <p 
              className='flex gap-5  font-[Poppins] text-[20px] font-normal leading-[32px] text-[#C3C8D4]'>

                {movie.genres.map((genre, index) => (
                  <span key={index}>
                    {genre.name}
                    {index < movie.genres.length - 1 && ', '}
                  </span>
                ))}
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default MovieDetailPage
