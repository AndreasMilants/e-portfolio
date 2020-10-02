import React, {Component} from "react";
import {withTranslation} from "react-i18next";

class ResumeSidebarComponent extends Component {
    render() {
        const {t} = this.props;
        const languages = [
            {name: t("resume.lang.nl"), level: 5},
            {name: t("resume.lang.en"), level: 5},
            {name: t("resume.lang.fr"), level: 3},
        ];

        const programmingLang = [
            {name: "Python", level: 5},
            {name: "Java", level: 4},
            {name: "JavaScript", level: 4},
            {name: "C#", level: 3},
            {name: "C++", level: 2},
            {name: "Elixir", level: 2},
        ];

        const frameworks = [
            {name: "Django", level: 5},
            {name: "React JS", level: 4},
            {name: ".NET", level: 3},
            {name: "Spring Boot", level: 3},
        ];
        return (
            <section className="side-bar">
                <section>
                    <h4>{t("resume.contact.title")}</h4>
                    <ul>
                        <li><a href="andreas.milants@gmail.com">andreas.milants@gmail.com</a></li>
                        <li>+32476 67 50 50</li>
                        <li>Binkomstraat 133, 3211 Binkom, {t("resume.contact.belg")}</li>
                        <li><a href="https://linkedin.com/in/andreasmilants">linkedin.com/in/andreasmilants</a></li>
                        <li><a href="https://andreasmilants.github.io/e-portfolio">andreasmilants.github.io/e-portfolio</a></li>
                    </ul>
                </section>
                <section>
                    <h4>{t("resume.lang.title")}</h4>
                    <ul>
                        {languages.map(l => {
                            return this.getSkill(l)
                        })}
                    </ul>
                </section>
                <section>
                    <h4>{t("resume.progr_lang.title")}</h4>
                    <ul>
                        {programmingLang.map(l => {
                            return this.getSkill(l)
                        })}
                    </ul>
                </section>
                <section>
                    <h4>{t("resume.fram.title")}</h4>
                    <ul>
                        {frameworks.map(l => {
                            return this.getSkill(l)
                        })}
                    </ul>
                </section>
            </section>
        );
    }

    getSkill(skill) {
        const numbers = [1, 2, 3, 4, 5];
        return (
            <li key={skill.name}>
                <span>{skill.name}</span>
                <ul className="level">
                    {numbers.map(num => {
                        return (<li key={num} className={num <= skill.level ? "filled" : ""}/>)
                    })}
                </ul>
            </li>
        );
    }
}

export default withTranslation()(ResumeSidebarComponent);
