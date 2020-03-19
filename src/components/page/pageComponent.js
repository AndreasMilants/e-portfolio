import React, {Component} from "react";
import NavigationComponent from "../navigation/navigationComponent";
import AppbarComponent from "../navigation/appbarComponent";
import AboutComponent from "../about/aboutComponent";
import CompetencesComponent from "../competences/competencesComponent";
import ProjectsComponent from "../projects/projectsComponent";
import ResumeComponent from "../resume/resumeComponent";
import {Route, Switch} from "react-router";
import {HashRouter} from "react-router-dom";
import ArnecrushComponent from "../projects/arnecrushComponent";
import SnakeComponent from "../projects/snakeComponent";
import AbcCookingComponent from "../projects/abcCookingComponent";
import NovemComponent from "../projects/novemComponent";
import TicketgangComponent from "../projects/ticketgangComponent";
import StarsComponent from "../projects/starsComponent";

class PageComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigationOpen: false,
        };
    }

    openAndCloseNav = (open) => {
        console.log(open);
        this.setState({...this.state, navigationOpen: open});
    };

    render() {
        return (
            <React.Fragment>
                <HashRouter basename={process.env.PUBLIC_URL}>
                    <section id="content">
                        <Switch>
                            <Route exact path="/resume">
                                <ResumeComponent/>
                            </Route>
                            <Route exact path="/snake">
                                <SnakeComponent/>
                            </Route>
                            <Route exact path="/arnecrush">
                                <ArnecrushComponent/>
                            </Route>
                            <Route exact path="/abc-cooking">
                                <AbcCookingComponent/>
                            </Route>
                            <Route exact path="/novem">
                                <NovemComponent/>
                            </Route>
                            <Route exact path="/ticketgang">
                                <TicketgangComponent/>
                            </Route>
                            <Route exact path="/stars">
                                <StarsComponent/>
                            </Route>
                            <Route path="">
                                <AboutComponent/>
                                <CompetencesComponent/>
                                <ProjectsComponent/>
                            </Route>
                        </Switch>
                    </section>
                    <AppbarComponent openAndCloseNav={this.openAndCloseNav} navigationOpen={this.state.navigationOpen}/>
                    <NavigationComponent open={this.state.navigationOpen} openAndClose={this.openAndCloseNav}/>
                </HashRouter>
            </React.Fragment>
        );
    }
}

export default PageComponent;