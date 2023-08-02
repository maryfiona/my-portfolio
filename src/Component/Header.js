import React from 'react';
import './Header.css';


const Header = () => {
  // const [dropdownVisibl, ] = useState(false);

  // function show() {
  //   setDropdownVisible(prevState => !prevState);
  // }

  return (
    <header>
        <div className="html-container">
      <div className="html-section">
        <div className="html-project">
          <div className="navigation">
            <nav>
              <ul className="nav-type">
                
                <li><a href="/" target="_blank" className="active1">About</a></li>
                <li><a href="/" target="_blank" className="active2">Contact</a></li>
                <li><a href="/" target="_blank" className="active3">Skills</a></li>
                <li><a href="/" target="_blank" className="active3">Projects</a></li>
                
                {/* <div className="line"></div> */}
                  {/* <li><a href="/"><i className="fa fa-search" onClick={show}></i></a></li> */}
                </ul>
            </nav>
          </div>
        </div>
      </div>
      <noscript>
      <div className="first-line">
        <div className="linear">
          <div className="line-w5">
            
          </div>
        </div>
      </div>
      </noscript>
<template>
      <div className="flash-fluid">
        <div className="flash-time">
          <div className="flash-GIF">
            
          </div>
        </div>
       </div>
</template>
<noscript>     
      <div className="cyrcle-center">
        <div className="radial-cyrcle">
          
        </div>
      </div>
</noscript>
    </div>
<template>   
    <div className="text-className">
      <div className="text-container">
        <div className="text-content-fluid" id="chinese-text" data-text-type="chinese">
          <div className="chinese-text">設</div>
          <div className="chinese-text2">計</div>
          <div className="chinese-text3">和</div>
          <div className="chinese-text4">開</div>
          <div className="chinese-text5">發</div>
        </div>
      </div>
    </div>
</template>  
    
{/* <div className={`dropdown ${dropdownVisible ? 'Active' : ''}`} id="anotherFunction">
     <div className="drop1">HTML</div>
      <div className="drop2">CSS</div>
      <div className="drop3">Javascript</div>
      <div className="drop4">Sass</div>
    </div> */}
     


    </header>
  );
}

export default Header;
