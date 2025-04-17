import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login.jsx'
import { Squares } from './squares/squares';
import { About } from './about/about';
import { AuthState } from './login/authState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

export default function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);
  
  return ( 
  <BrowserRouter>
   <div className="body bg-dark text-light">
      <header className="container-fluid">
        <nav className="navbar fixed-top navbar-dark">
          <a className="navbar-brand" href="#">startup<sup>&reg;</sup></a>
          <menu className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="squares">
                Squares
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="about">
                About
              </NavLink>
            </li>
          </menu>
        </nav>
      </header>

      <Routes>
        {/* <Route path='/' element={<Login />} exact /> */}
        <Route
          path='/'
          element={
            <Login
              userName={userName}
              authState={authState}
              onAuthChange={(userName, authState) => {
                setAuthState(authState);
                setUserName(userName);
              }}
            />
          }
          exact
        />
        <Route
          path='/squares'
          element={
            <SquaresWrapper />
          }
        />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <footer className="text-white-50">
        <div className="container-fluid">
          <span className="text-reset">Micah Mangrum</span>
          <a className="text-reset" href="https://github.com/Ice-Shackleton/startup/tree/main">Github</a>
        </div>
      </footer>
    </div>
  </BrowserRouter>
  );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}

function SquaresWrapper() {
  const [authState, setAuthState] = React.useState(AuthState.Unknown);
  const [userName, setUserName] = React.useState('');

  return (
    <Squares
      userName={userName}
      authState={authState}
      onAuthChange={(userName, authState) => {
        setUserName(userName);
        setAuthState(authState);
      }}
    />
  );
}
