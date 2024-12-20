function NavBar(props){
    return(
              <nav 
                className={props.darkMode ? "dark": ""}
              >
              <img 
                className='nav--logo'
                src="react_logo.png" 
              />
              <h3 className="nav--logo_text">ReactFacts</h3>
              
              <div
                 className="toggler"
              > 
                <p className="toggler--light">Light</p>
                <div
                   className="toggler--slide"
                   onClick={props.toggleDarkMode}
                > 
                <div className="toggler--slider--circle"></div>
                </div>
              <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}

export default NavBar
