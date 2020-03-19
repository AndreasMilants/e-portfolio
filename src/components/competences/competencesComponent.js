import React, {Component} from "react";

class CompetencesComponent extends Component {
    render() {
        const competences = [
            {
                name: "Backend webontwikkeling",
                info: ["Django", "Spring boot", "Phoenix"]
            },
            {
                name: "Frontend webontwikkeling",
                info: ["React", "Angular", "HTML", "CSS"]
            },
            {
                name: "App-ontwikkeling",
                info: ["Flutter", "Xamarin"]
            },
            {
                name: "Algoritmen & Datastructuren",
                info: ["Tweede plaats Vlaamse Programmeerwedstrijd"]
            },
            {
                name: "Databanken",
                info: ["PostgreSQL", "MySQL"]
            }
        ];
        return (
            <React.Fragment>
                <article>
                    <span id="competences" className="link"/>
                    <h2>Competenties</h2>
                    <ul id="competences-list">
                        {competences.map(c => <CompetenceComponent {...c}/>)}
                    </ul>
                </article>
            </React.Fragment>
        );
    }
}

class CompetenceComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    render() {
        return (
            <li>
                <div onClick={this.state.open ? this.closeThis : this.openThis}
                     className={this.state.open ? "open" : ""}>
                    <span>{this.props.name}</span>
                    <span className="material-icons">{this.state.open ? "arrow_drop_up" : "arrow_drop_down"}</span>
                </div>
                <ul className={this.state.open ? "open" : ""}>
                    {this.props.info.map(i => this.competenceInfo(i))}
                </ul>
            </li>
        );
    }

    openThis = (event) => {
        this.setState({...this.state, open: true});
    };

    closeThis = (event) => {
        this.setState({...this.state, open: false});
    };

    competenceInfo(info) {
        return (
            <li>
                {info}
            </li>
        );
    }
}

export default CompetencesComponent;