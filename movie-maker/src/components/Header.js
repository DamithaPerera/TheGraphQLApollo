import React from 'react';

const Header = () => {
  render(
    <div className="topnav">
      <a className="logo" href="/">Movie Maker</a>
      <div className="search-container">
            <form>
                <a href='/'>Add Movie</a>
                <input type="text" placeholder="Search..." name="search" />
                <button type="submit">Submit</button>
            </form>
      </div>
    </div>
  ) 
}

export default Header;