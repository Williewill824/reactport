import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
// import images from './images/williewill.png'

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="../images/williewill.jpg"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>William Gomez Jr</h2>
            <h4 style={{color: 'grey'}}>Full Stack Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>lorem</p>
            <h5>Phone</h5>
            <p>(551) 223-8530</p>
            <h5>Email</h5>
            <p>willie.gomezjr12@gmail.com</p>
            <h5>Github</h5>
            <p>https://github.com/Williewill824</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2004}
              endYear={2007}
              schoolName="Teaneck High School"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
               />

               <Education
                 startYear={2020}
                 endYear={2020}
                 schoolName="Rutgers Coding Bootcamp"
                 schoolDescription="Full Stack Web Development"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2009}
              endYear={2020}
              jobName="The Good BarberShop"
              jobDescription="Barber"
              />
               <Experience
              startYear={2014}
              endYear={2017}
              jobName="CCNA"
              jobDescription="Cisco Certified Network Associate"
              />

              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={70}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={70}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={60}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;