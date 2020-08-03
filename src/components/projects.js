import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import PasswordImg from "../images/generator.png"
import BurgerImg from "../images/burger.png"
import NBAdImg from "../images/nba.png"
// import MacbookImg from "../images/macbook.jpg"


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${PasswordImg}) center / cover`}} > </CardTitle>
            <CardText>
                  Password Generator
            </CardText>
            <CardActions border>
              <a href="https://github.com/Williewill824/gettist" colored>Link</a>

            </CardActions>
           
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${NBAdImg}) center / cover`}} ></CardTitle>
            <CardText>
              NBA Team Builder
            </CardText>
            <CardActions border>
              <a href="https://github.com/skylar112/Project-2-NBA-Team-Builder" colored>Link</a>
          
            </CardActions>

          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${BurgerImg}) center / cover`}} > </CardTitle>
            <CardText>
              Burger App
            </CardText>
            <CardActions border>
              <a href="https://github.com/Williewill824/burger" colored>Link</a>
          
            </CardActions>
           
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is Javascript</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is Nodejs</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is React</h1></div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Projects</Tab>
          {/* <Tab>Javascript</Tab>
          <Tab>Nodejs</Tab>
          <Tab>React</Tab> */}
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
