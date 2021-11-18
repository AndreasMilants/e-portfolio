import React, {Component} from "react";
import NavigationComponent from "../navigation/navigationComponent";
import AppbarComponent from "../navigation/appbarComponent";
import AboutComponent from "../about/aboutComponent";
import CompetencesComponent from "../competences/competencesComponent";
import ProjectsComponent from "../projects/projectsComponent";
import ResumeComponent from "../resume/resumeComponent";
import {Route, Switch} from "react-router";
import {BrowserRouter as Router} from "react-router-dom";
import ArnecrushComponent from "../projects/projects/arnecrushComponent";
import SnakeComponent from "../projects/projects/snakeComponent";
import AbcCookingComponent from "../projects/projects/abcCookingComponent";
import NovemComponent from "../projects/projects/novemComponent";
import TicketgangComponent from "../projects/projects/ticketgangComponent";
import StarsComponent from "../projects/projects/starsComponent";
import CnbComponent from "../projects/projects/cnbComponent";
import AbcCooking2Component from "../projects/projects/abcCooking2Component";
import StratvisionComponent from "../projects/projects/stratvisionComponent";
import ScrabbleComponent from "../projects/projects/scrabble/scrabbleComponent";

class PageComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigationOpen: false,
        };
    }

    openAndCloseNav = (open) => {
        this.setState({...this.state, navigationOpen: open});
    };

    render() {
        return (
            <React.Fragment>
                <span id="top"/>
                <Router>
                    <section id="content">
                        <Switch>
                            <Route exact path="/resume">
                                <ResumeComponent/>
                            </Route>
                            <Route exact path="/snake">
                                <SnakeComponent/>
                            </Route>
                            <Route exact path="/stratvision">
                                <StratvisionComponent/>
                            </Route>
                            <Route exact path="/cnb">
                                <CnbComponent/>
                            </Route>
                            <Route exact path="/arnecrush">
                                <ArnecrushComponent/>
                            </Route>
                            <Route exact path="/abc-cooking">
                                <AbcCookingComponent/>
                            </Route>
                            <Route exact path="/abc-cooking-mobile">
                                <AbcCooking2Component/>
                            </Route>
                            <Route exact path="/novem">
                                <NovemComponent/>
                            </Route>
                            <Route exact path="/ticketgang">
                                <TicketgangComponent/>
                            </Route>
                            {/*I'll keep this here for the moment, but no visible link remains*/}
                            <Route exact path="/stars">
                                <StarsComponent/>
                            </Route>
                            <Route exact path="/scrabble">
                                <ScrabbleComponent dimensions={15}/>
                            </Route>
                            <Route path="">
                                <AboutComponent/>
                                <CompetencesComponent/>
                                <ProjectsComponent/>
                            </Route>
                        </Switch>
                    </section>
                    <NavigationComponent open={this.state.navigationOpen} openAndClose={this.openAndCloseNav}/>
                    <AppbarComponent openAndCloseNav={this.openAndCloseNav} navigationOpen={this.state.navigationOpen}/>
                </Router>
            </React.Fragment>
        );
    }
}

export default PageComponent;