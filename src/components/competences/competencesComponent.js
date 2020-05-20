import React, {Component} from "react";
import {withTranslation} from 'react-i18next';
import {NavHashLink as Link} from "react-router-hash-link";

class CompetencesComponent extends Component {
    render() {

        const {t} = this.props;
        const competences = [
            {
                name: t("competences.backend_dev.title"),
                descr: t("competences.backend_dev.descr"),
                info: ["Django", "Spring boot", "Phoenix"]
            },
            {
                name: t("competences.frontend_dev.title"),
                descr: t("competences.frontend_dev.descr"),
                info: ["React", "Angular", "HTML", "CSS"]
            },
            {
                name: t("competences.app_dev.title"),
                descr: t("competences.app_dev.descr"),
                info: ["Flutter", "Xamarin"]
            },
            {
                name: t("competences.algo.title"),
                descr: t("competences.algo.descr"),
                info: [t("competences.algo.second_place")]
            },
            {
                name: t('competences.databases.title'),
                descr: t('competences.databases.descr'),
                info: ["PostgreSQL", "MySQL"]
            }
        ];

        return (
            <React.Fragment>
                <article>
                    <span id="competences" className="link"/>
                    <h2>{t("competences.title")}</h2>
                    <Link className="link-matrix" to="/competences-matrix">{t("competences.matrix")}</Link>
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
                    <h3>{t("competences.level")}</h3>
                    <p>{this.props.descr}</p>
                    <h3>{t("competences.exp")}</h3>
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