import React from 'react';
import Navbar from './components/NavBar/NavBar';
import Tile from './components/Tile/Tile'; // Correct import path
import TypeWriter from './components/Helper/Typewriter'; // Correct import path
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="home">
        <h1>Welcome to My Portfolio</h1>
        <h1>Aditya Singh</h1>
      <TypeWriter
      text={["Web Developer", "Designer", "Freelancer"]}
      typingSpeed={100}
      deletingSpeed={50}
duration={2000}
      
       />
      </section>
      <section id="about">
        <h1>About Me</h1>
        <p>This is the about section.</p>
      </section>
      <section id="projects">
        <h1>My Projects</h1>
        <div className="tiles-container">
          <Tile 
            header="Project One" 
            subHeader="A great project" 
            img="https://via.placeholder.com/150" 
            text="This is a brief description of my project." 
            link="https://example.com" 
            linkText="View Project" 
            position="left" 
          />
          <Tile 
            header="Project Two" 
            subHeader="Another great project" 
            img="https://via.placeholder.com/150" 
            text="This is another brief description of my project." 
            link="https://example.com" 
            linkText="View Project" 
            position="right" 
          />
          <Tile 
            header="Project Three" 
            subHeader="Yet another great project" 
            img="https://via.placeholder.com/150" 
            text="This is yet another brief description of my project." 
            link="https://example.com" 
            linkText="View Project" 
            position="center" 
          />
        </div>
      </section>
      <section id="contact">
        <h1>Contact Me</h1>
        <p>This is the contact section.</p>
      </section>
    </div>
  );
}

export default App;
