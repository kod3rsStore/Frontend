import React from 'react';
import './banner.css';

function Banner({name}) {
  return (
  <div className="BannerAtom"><p>{name}</p></div>
  );
}

export default Banner;