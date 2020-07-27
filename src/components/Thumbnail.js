import React from 'react';
import { Link } from 'react-router-dom';

function Thumbnail(props) {
  return (
    <div className="project">
      <div className="card">
        <div className="img-container">
          <img alt={props.title} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <strong>Project Title:</strong> {props.title}
            
            <strong>GitHub Link:</strong> {props.gitlink}
            
            <strong>Deployed Link:</strong> {props.deployedlink}
          </ul>
        </div>
      </div>

    </div>
  );
}

export default Thumbnail;
