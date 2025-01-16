import React from 'react'
/* import wallpaper from '../image/Header.jpg' */

const Header = () => {
  return (
    <>
      <div className="header-container">
        {/* <img src={wallpaper} alt="wallpaper" className='wallpaper'/> */}
        <div className="text-container">
          <h1>¡Pizzería Mamma Mía!</h1>
          <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
        </div>
      </div>
    </>
  )
}

export default Header