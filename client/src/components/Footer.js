import * as React from 'react';
import brownMossy from '../images/Brown-Circle-Book-Icon-Mossy.png'
import brownToad from '../images/Brown-Circle-Book-Icon-Toad.png';
import greenMossy from '../images/Green-Circle-Book-Icon-Mossy.png'
import greenToad from '../images/Green-Circle-Book-Icon-Toad.png'

// Getting an error when importing these pngs that they aren't supported if they fall outside the src directory

const Footer = () => {
  return (
    <div>
      <img src={brownMossy}/>
      <img src={brownToad}/>
      <img src={greenMossy}/>
      <img src={greenToad}/>
    </div>
  )
}

export default Footer;