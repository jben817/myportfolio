import React from "react"
import Thumbnail from './Thumbnail.js';

 
function Projects (props) {
  return (
    <div>
      <h1>Projects</h1>
      <Thumbnail
        deployedlink="https://mjb527.github.io/NYME/"
        image="../scr/NYME project photo.png"
        title="NYME Project"
        gitlink="https://github.com/mjb527/NYME"
      />
       <Thumbnail
        link="https://jben817.github.io/Homework3/"
        image="./generator website.png"
        title="Password Generator"
        gitlink="https://github.com/jben817/Homework3"

      />
       <Thumbnail
        link="https://mjb527.github.io/NYME/"
        image="../scr/NYME project photo.png"
        title="NYME Project"
        gitlink="https://github.com/jben817/Homework4"

      />
       <Thumbnail
        link="https://mjb527.github.io/NYME/"
        image="../scr/NYME project photo.png"
        title="Social Streaming"
        gitlink="https://github.com/jben817/Homework4"

      />
       <Thumbnail
        link="https://mjb527.github.io/NYME/"
        image="../scr/NYME project photo.png"
        title="Readmd Generator"
        gitlink="https://github.com/jben817/Homework9"

      />
       <Thumbnail
        link="https://jben817.github.io/Homework4/"
        image=""
        title="Javascript Quiz"
        gitlink="https://github.com/jben817/Homework4"
      />

      
    </div>
  )
}
 
export default Projects;