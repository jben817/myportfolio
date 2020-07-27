import React from "react"
 
function About(props) {
  return (
    <div>
      <h1>About Me</h1>

      <div className="row">
            <div className="col">
                <img src="pics\oregon pic.jpg" alt="photo in oregon"></img>
                                  <div id="nameDiv">Jaime Bennett, BSN-RN</div>
            </div>
            <div className="col">
                <p id="aboutMe">

                    Graduated from Seton Hall University with a degree in Communications and worked for Dorf Feature
                    Services which covered local high school sports for The Star-Ledger and NJ.com for about 10 years.
                    Returned to Seton Hall in 2010 and received a second degree in Nursing where I have been working for
                    the last eight years. I specialize in inpatient psych and in the last year became a travel nurse working in Oregon, Utah and Vermont before settling back in New Jersey. Currently enrolled in Rutgers Coding Bootcamp.

                </p>
            </div>
        </div>
        <div id="links" className="row">
            <div className="col">
                 <a href="https://github.com/jben817">GitHub</a>
            </div>
            <div className="col">
                <a href="pics\JB resume.pdf">Resume</a>
            </div>
            <div className="col">
               <a href="https://www.linkedin.com/in/jaime-bennett-30057b53/">Linkedin</a>
            </div>
        </div>
    </div>



    
  )
}
 
export default About;