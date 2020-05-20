import React, {Component} from "react";
import {withTranslation} from 'react-i18next';

class CompetencesMatrixComponent extends Component {
    constructor(props) {
        super(props);

        const {t} = this.props;

        let competences = [
            {
                name: "dataHandle",
                rows: [
                    {
                        name: "collect",
                        level: "gr",
                    },
                    {
                        name: "model",
                        level: "in",
                    },
                    {
                        name: "connect",
                        level: "in",
                    },
                    {
                        name: "save",
                        level: "gr",
                    },
                    {
                        name: "access",
                        level: "gr",
                    },
                ]
            },
            {
                name: "analyze",
                rows: [
                    {
                        name: "identify",
                        level: "in",
                    },
                    {
                        name: "translate",
                        level: "in",
                    },
                    {
                        name: "formulate",
                        level: "el",
                    },
                    {
                        name: "eval",
                        level: "el",
                    },
                    {
                        name: "test",
                        level: "in",
                    },
                ]
            },
            {
                name: "solve",
                rows: [
                    {
                        name: "progr",
                        level: "in",
                    },
                    {
                        name: "impl",
                        level: "in",
                    },
                    {
                        name: "doc",
                        level: "el",
                    },
                    {
                        name: "test",
                        level: "gr",
                    }
                ]
            },
            {
                name: "manage",
                rows: [
                    {
                        name: "conf",
                        level: "gr",
                    }
                ]
            },
            {
                name: "project",
                rows: [
                    {
                        name: "split",
                        level: "el",
                    },
                    {
                        name: "plan",
                        level: "el",
                    },
                    {
                        name: "fol",
                        level: "el",
                    },
                    {
                        name: "mul",
                        level: "el",
                    }
                ]
            },
            {
                name: "comm",
                rows: [
                    {
                        name: "comm",
                        level: "in",
                    },
                    {
                        name: "suit",
                        level: "in",
                    },
                    {
                        name: "par",
                        level: "ex",
                    },
                    {
                        name: "teach",
                        level: "gr",
                    }
                ]
            },
            {
                name: "adapt",
                rows: [
                    {
                        name: "eval",
                        level: "in",
                    },
                    {
                        name: "act",
                        level: "in",
                    },
                    {
                        name: "cre",
                        level: "ex",
                    },
                    {
                        name: "ass",
                        level: "in",
                    },
                    {
                        name: "stress",
                        level: "ex",
                    },
                    {
                        name: "ext",
                        level: "gr",
                    },
                    {
                        name: "learn",
                        level: "in",
                    },
                ]
            },
            {
                name: "qual",
                rows: [
                    {
                        name: "build",
                        level: "in",
                    },
                    {
                        name: "perf",
                        level: "in",
                    },
                    {
                        name: "sol",
                        level: "gr",
                    },
                    {
                        name: "conf",
                        level: "gr",
                    },
                    {
                        name: "cont",
                        level: "el",
                    },
                    {
                        name: "qual",
                        level: "el",
                    }
                ]
            }
        ];

        this.state = {
            competences: competences,
            current: 0,
        };
    }

    buildCompetences(competences, t) {
        let ret = [];
        for (let i = 0; i < competences.length; i++) {
            let c = competences[i];
            let single = {
                id: i,
                name: t("competencesMatrix.competences." + c.name + ".name"),
                rows: [],
            };
            for (let j = 0; j < c.rows.length; j++) {
                let r = c.rows[j];
                let row = {
                    name: t("competencesMatrix.competences." + c.name + ".rows." + r.name + ".name"),
                    level: t('competencesMatrix.levels.' + r.level),
                    info: t("competencesMatrix.competences." + c.name + ".rows." + r.name + ".info"),
                };
                single.rows.push(row);
            }
            ret.push(single);
        }
        return ret;
    }

    render() {
        const {t} = this.props;

        const comp = this.buildCompetences(this.state.competences, t);

        return (
            <React.Fragment>
                <article id="matrix">
                    <span id="competences" className="link"/>
                    <h2>{t("competences.title")}</h2>
                    <p className="hide-big">{t("competencesMatrix.smallScreen")}</p>
                    <ul id="competences-matrix-list">
                        {comp.map(c => <button
                            onClick={() => this.setCurrent(c.id)}>{c.name}</button>)}
                    </ul>
                    {<CompetenceMatrix {...this.getCurrent(comp)} t={t}/>}
                </article>
            </React.Fragment>
        );
    }


    setCurrent = (id) => {
        this.setState({
            ...this.state,
            current: id
        })
    };

    getCurrent = (comp) => {
        for (let i = 0; i < comp.length; i++) {
            if (comp[i].id === this.state.current) {
                return comp[i];
            }
        }
    }
}

class CompetenceMatrix extends Component {
    render() {
        const {t} = this.props;
        return (
            <React.Fragment>
                <h3>
                    {this.props.name}
                </h3>
                <div className="table">
                    <div className="row head">
                        <div></div>
                        <div>{t("competencesMatrix.level")}</div>
                        <div>{t("competencesMatrix.info")}</div>
                    </div>
                    {this.props.rows.map(r => <RowComponent key={r.name} {...r} />)}
                </div>
            </React.Fragment>
        );
    }
}

class RowComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="head">{this.props.name}</div>
                    <div>{this.props.level}</div>
                    <div className="info">{this.props.info}</div>
                </div>
            </React.Fragment>
        );
    }
}

export default withTranslation()(CompetencesMatrixComponent);