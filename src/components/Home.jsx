import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCards from './Card';
// import './Home.css'; // CSS file for styling

const Home = () => {
  return (
    <div className="home-container"> 
      <div className="animation-background"></div> {/* Background animation */}
      <div className="content">
        <ProjectCards />
      </div>
    </div>
  );
}

export default Home;
