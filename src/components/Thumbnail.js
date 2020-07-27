import React from 'react';
import { Link } from 'react-router-dom';

function Thumbnail(props) {
  return (
    <div className="project">
      <Link to={props.link}></Link>
        <div className="project-image">
          <img src={props.image} alt="Project Image" />
        </div>
        <div className="project-title">{props.title}</div>
      
    </div>
  );
}

export default Thumbnail;
