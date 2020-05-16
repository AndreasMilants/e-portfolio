import React, {Component} from "react";
import {withTranslation} from "react-i18next";

class MainComponent extends Component {
    render() {
        const {t} = this.props;
        const educations = [
            {
                title: t("resume.edu.ti.title"),
                institution: "UC Leuven-Limburg",
                date: t("resume.edu.ti.date"),
                extra: t("resume.edu.ti.extra"),
                skills: ["Java", "Python", "JavaScript", "C#", "C++", "Elixir", "Spring", "Phoenix", "PostgreSQL",
                    "Windows", "Linux", t("resume.skills.prot"), t("resume.skills.alg"), t("resume.skills.datas"), "HTML", "CSS"]
            },
            {
                title: t("resume.edu.fys.title"),
                institution: "KU Leuven",
                date: t("resume.edu.fys.date"),
                extra: t("resume.edu.fys.extra"),
                skills: ["Python", "Numpy", "SciPy", t("resume.skills.math")]
            }
        ];
        const work = [
            {
                title: "TicketGang",
                date: t("resume.work.ticketgang.date"),
                description: t("resume.work.ticketgang.description"),
                skills: ["Xamarin", "C#", ".NET"]
            }
        ];
        const extracurricular = [
            {
                title: "IBM Hackathon",
                date: t("resume.ex_cur.ibm_hack.date"),
                description: t("resume.ex_cur.ibm_hack.description"),
                skills: ["IBM Cloud", "Watson API", "Python", "Django", "Xamarin", "C#", ".NET"]
            },
            {
                title: t("resume.ex_cur.progr_comp.title"),
                date: t("resume.ex_cur.progr_comp.date"),
                description: t("resume.ex_cur.progr_comp.description"),
                skills: ["Python", t("resume.skills.alg"), t("resume.skills.datas")]
            },
            {
                title: t("resume.ex_cur.teach.title"),
                date: "2019-2020",
                description: t("resume.ex_cur.teach.description"),
                skills: [t("resume.skills.teach")]
            },
            {
                title: "Chiro Nemas Binkom",
                date: t("resume.ex_cur.chiro.date"),
                description: t("resume.ex_cur.chiro.description"),
                skills: [t("resume.skills.leader")]
            }
        ];
        return (
            <section className="main">
                <section>
                    <h3>{t("resume.edu.title")}</h3>
                    <ul>
                        {educations.map(education => {
                            return this.educationComponent(education)
                        })}
                    </ul>
                </section>
                <section>
                    <h3>{t("resume.work.title")}</h3>
                    <ul>
                        {work.map(c => {
                            return this.getComponent(c)
                        })}
                    </ul>
                </section>
                <section>
                    <h3>{t("resume.ex_cur.title")}</h3>
                    <ul>
                        {extracurricular.map(c => {
                            return this.getComponent(c)
                        })}
                    </ul>
                </section>
            </section>
        );
    }

    educationComponent(education) {
        return (
            <li key={education.title}>
                <h4>{education.title}</h4>
                <div>
                    <span className="institution">{education.institution}</span>
                    <span className="date">{education.date}</span>
                    <span className="extra">{education.extra}</span>
                </div>
                <ul>
                    {education.skills.map(skill => {
                        return <li key={skill}>{skill}</li>
                    })}
                </ul>
            </li>
        );
    }

    getComponent(component) {
        return (
            <li key={component.title}>
                <h4>{component.title}</h4>
                <span className="date">{component.date}</span>
                <p>{component.description}</p>
                <ul>
                    {component.skills.map(skill => {
                        return <li key={skill}>{skill}</li>
                    })}
                </ul>
            </li>
        );
    }
}

export default withTranslation()(MainComponent);