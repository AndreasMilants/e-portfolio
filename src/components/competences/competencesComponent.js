import React, {Component} from "react";
import {withTranslation} from 'react-i18next';

class CompetencesComponent extends Component {
    render() {

        const {t} = this.props;
        const competences = [
            {
                name: t("competences.backend_dev.title"),
                info: ["Django", "Spring boot", "Phoenix"]
            },
            {
                name: t("competences.frontend_dev.title"),
                info: ["Vue", "React", "HTML", "CSS", "JQuery"]
            },
            {
                name: t("competences.app_dev.title"),
                info: ["Flutter", "Xamarin"]
            },
            {
                name: t("competences.algo.title"),
                info: [t("competences.algo.second_place")]
            },
            {
                name: t('competences.databases.title'),
                info: ["PostgreSQL", "Neo4j", "MySQL"]
            },
            {
                name: t('competences.other.title'),
                info: ["AWS", "Plotly Dash", "Pandas"]
            }
        ];

        return (
            <React.Fragment>
                <article>
                    <span id="competences" className="link"/>
                    <h2>{t("competences.title")}</h2>
                    <ul id="competences-list">
                        {competences.map(c => <CompetenceComponent key={c.name} {...c} {...this.props}/>)}
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
        const {t} = this.props;

        return (
            <li>
                <div onClick={this.state.open ? this.closeThis : this.openThis}
                     className={this.state.open ? "open" : ""}>
                    <span>{this.props.name}</span>
                    <span className="material-icons">{this.state.open ? "arrow_drop_up" : "arrow_drop_down"}</span>
                </div>
                <div className={this.state.open ? "open" : ""}>
                    <ul>
                        {this.props.info.map(i => this.competenceInfo(i))}
                    </ul>
                </div>
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
            <li key={info}>
                {info}
            </li>
        );
    }
}

export default withTranslation()(CompetencesComponent);