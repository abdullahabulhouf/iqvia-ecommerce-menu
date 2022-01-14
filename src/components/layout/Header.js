import React from 'react'
function Header() {
    return (
      <header id="header" className="header">
          <img src={process.env.PUBLIC_URL+'/logo192.png'} className="app-logo float-start"/>
          <div className="app-logo-title float-start">Logo</div>
          <div className="clearfix"></div>
      </header>
    );
  }
  
  export default Header;
  