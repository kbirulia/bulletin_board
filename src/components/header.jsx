import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="row justify-content-center">
          <h1>
              <a href="/">
                  <img src="/img/logo.png" alt="Bulletin Board" />
              </a>
          </h1>
      </header>
    );
  }
}

export default Header;
