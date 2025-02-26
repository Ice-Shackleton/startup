import React from 'react';
import './main.css';

export function Login() {
  return (
    <main class="container-fluid text-center text-white-50">
      <div>
        <h1>Coolsquares Launchpad</h1>
        <form method="get" action="squares.html">
          <div class="input-group mb-3">
            <input class="form-control" type="text" placeholder="your@email.com" />
          </div>
          <div class="input-group mb-3">
            <input class="form-control" type="password" placeholder="password" />
          </div>
          <button type="submit" class="submit">Login</button>
          <button type="submit" class="submit">Create</button>
        </form>
      </div>
    </main>
  );
}