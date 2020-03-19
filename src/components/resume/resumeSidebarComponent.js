import React, {Component} from "react";

class ResumeSidebarComponent extends Component {
    render() {
        const languages = [
            {name: "Nederlands (Moedertaal)", level: 5},
            {name: "Engels", level: 5},
            {name: "Frans", level: 2},
        ];

        const programmingLang = [
            {name: "Python", level: 5},
            {name: "Java", level: 4},
            {name: "JavaScript", level: 4},
            {name: "C#", level: 3},
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
                    <h4>Contact Informatie</h4>
                    <ul>
                        <li><a href="andreas.milants@gmail.com">andreas.milants@gmail.com</a></li>
                        <li>+32476 67 50 50</li>
                        <li>Binkomstraat 133, 3211 Binkom, België</li>
                        <li><a href="https://linkedin.com/in/andreasmilants">linkedin.com/in/andreasmilants</a></li>
                        <li><a href="https://andreasmilants.github.io">andreasmilants.github.io</a></li>
                    </ul>
                </section>
                <section>
                    <h4>Talen</h4>
                    <ul>
                        {languages.map(l => {
                            return this.getSkill(l)
                        })}
                    </ul>
                </section>
                <section>
                    <h4>Programmeertalen</h4>
                    <ul>
                        {programmingLang.map(l => {
                            return this.getSkill(l)
                        })}
                    </ul>
                </section>
                <section>
                    <h4>Frameworks en Libraries</h4>
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
            <li>
                <span>{skill.name}</span>
                <ul className="level">
                    {numbers.map(num => {
                        return (<li className={num <= skill.level ? "filled" : ""}></li>)
                    })}
                </ul>
            </li>
        );
    }
}

export default ResumeSidebarComponent;