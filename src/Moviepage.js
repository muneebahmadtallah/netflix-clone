import React from 'react';
import Movie from './movieData';
import Post from './post';

function ncards(val) {
  return(
    <Post movieImg= {val.movieImg}
            movieTitle ={val.movieTitle}
            movieLink ={val.movieLink}/>
  );
}

export default function Moviepage() {
  return <><div className='container'>
    <div className='row'>
      <h1 className='text-center text-danger my-4'>Top 10 Netflix Series</h1>
     {/* this is normal way to show data by using props in array */}
      {/* <Post movieImg= {Movie[0].movieImg}
            movieTitle ={Movie[0].movieTitle}
            movieLink ={Movie[0].movieLink}/>
      <Post movieImg= {Movie[1].movieImg}
            movieTitle ={Movie[1].movieTitle}
            movieLink ={Movie[1].movieLink}/>
      <Post movieImg= {Movie[2].movieImg}
            movieTitle ={Movie[2].movieTitle}
            movieLink ={Movie[2].movieLink}/>
      <Post movieImg= {Movie[3].movieImg}
            movieTitle ={Movie[3].movieTitle}
            movieLink ={Movie[3].movieLink}/>
      <Post movieImg= {Movie[4].movieImg}
            movieTitle ={Movie[4].movieTitle}
            movieLink ={Movie[4].movieLink}/>
      <Post movieImg= {Movie[5].movieImg}
            movieTitle ={Movie[5].movieTitle}
            movieLink ={Movie[5].movieLink}/>
      <Post movieImg= {Movie[6].movieImg}
            movieTitle ={Movie[6].movieTitle}
            movieLink ={Movie[6].movieLink}/>
      <Post movieImg= {Movie[7].movieImg}
            movieTitle ={Movie[7].movieTitle}
            movieLink ={Movie[7].movieLink}/> */}

            {/* this is alternate method for array.,, using map function */}
            {Movie.map(ncards)}
              {/* by this single line we can display all the objects in an array */}
    </div>
    </div>
   </>
}
