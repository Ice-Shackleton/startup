import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

export default function App() {
  return ( 
   <div className="body bg-dark text-light">
      <header className="container-fluid">
        <nav className="navbar fixed-top navbar-dark">
          <a className="navbar-brand" href="#">startup<sup>&reg;</sup></a>
          <menu className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="login.html">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="squares.html">Squares</a>
            </li>
          </menu>
        </nav>
      </header>

      <main>App components go here.</main>

      <footer className="text-white-50">
        <div className="container-fluid">
          <span className="text-reset">Micah Mangrum</span>
          <a className="text-reset" href="https://github.com/Ice-Shackleton/startup/tree/main">Github</a>
        </div>
      </footer>
    </div>

  );
}