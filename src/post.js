import React from 'react';

export default function Post(props) {
  return( 
  <div className='col col-sm-6 col-md-4 col-lg-3 my-4 justify-content-md-center'>
  <div className='card container-fluid center' style={{width: "15rem", height:"18rem"}}>
      <img src={props.movieImg} class="card-img-top"/>
  <div class="card-body">
    <h5 class="card-title">{props.movieTitle}</h5>
    <p class="card-text text-secondary">Netflix Original Series.</p>
    <a href="/" class="btn btn-primary" href ={props.movieLink}> Watch Now</a>
  </div>
      </div>
      </div>
  );
}
