import React from 'react';
import './about.css';

export function About() {
  return (
    <main className="container-fluid text-center">
      <div>
        <div id="picture" className="picture-box"><img src="temporary.jpg" alt="the-first-mockup" /></div>

        <p>
          Hello! This is the work of one Micah Mangrum, currently a college student 
          struggling by on too much caffenie and not enough sleep.
        </p>

        <p>
          This website was made as part of his college's Computer Science program!
        </p>

        {/* <div id="quote" className="quote-box bg-light text-dark">
          <p className="quote">Words are cheap. Show me the code.</p>
          <p className="author">Linus Torvalds</p>
        </div> */}
      </div>
    </main>
  );
}