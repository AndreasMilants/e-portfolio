import React, {Component} from "react";

class MainComponent extends Component {
    render() {
        const educations = [
            {
                title: "Bachelor in de Toegepaste Informatica",
                institution: "UC Leuven-Limburg",
                date: "2018 - Nu",
                extra: "Gewogen gemiddelde: 83.7%",
                skills: ["Java", "Python", "JavaScript", "C#", "C++", "Elixir", "Spring", "Phoenix", "PostgreSQL",
                    "Windows", "Linux", "Netwerkprotocollen", "Algoritmen", "Datastructuren", "HTML", "CSS"]
            },
            {
                title: "Bachelor in de Fysica",
                institution: "KU Leuven",
                date: "2016 - 2018",
                extra: "Gestopt",
                skills: ["Python", "Numpy", "SciPy", "Wiskunde"]
            }
        ];
        const work = [
            {
                title: "TicketGang",
                date: "Augustus 2019",
                description: "Had een maand om een cross-platform app te maken samen met een andere student. De app " +
                    "kon gebruikt worden om scan-profielen en -crews te beheren, en om bar- en QR-codes te scannen aan" +
                    "de ingang van evenementen. Alle data moest met behulp van een API naar de server gestuurd worden.",
                skills: ["Xamarin", "C#", ".NET"]
            }
        ];
        const extracurricular = [
            {
                title: "IBM Hackathon",
                date: "Oktober 2019",
                description: "Deelgenomen aan een hackathon, georganiseerd door IBM.  The business case was om een " +
                    "standalone app te maken voor de Apple Watch. We hebben een app gebouwd waarbij je kon spreken " +
                    "tegen je horloge om ingrediënten voor een gerecht te ontdekken, live instructies kreeg tijdens " +
                    "het koken en online ingrediënten kon bestellen.",
                skills: ["IBM Cloud", "Watson API", "Python", "Django", "Xamarin", "C#", ".NET"]
            },
            {
                title: "Vlaamse Programmeerwedstrijd",
                date: "Maart 2019",
                description: "Tweede plaats op de \"Vlaamse Programmeerwedstrijd\".",
                skills: ["Python", "Algoritmen", "Datastructuren"]
            },
            {
                title: "Monitoraat lessen",
                date: "2019",
                description: "Een monitoraat gegeven over assembly voor studenten in het jaar onder mij. Dit semester " +
                    "zal ik nog 4 van deze monitoraten geven over andere vakken.",
                skills: ["Lesgeven"]
            },
            {
                title: "Chiro Nemas Binkom",
                date: "2015 - Nu",
                description: "Groepsleiding en leiding bij Chiro Nemas Binkom",
                skills: ["Leiderschap"]
            }
        ];
        return (
            <section className="main">
                <section>
                    <h3>Opleiding</h3>
                    <ul>
                        {educations.map(education => {
                            return this.educationComponent(education)
                        })}
                    </ul>
                </section>
                <section>
                    <h3>Werkervaring</h3>
                    <ul>
                        {work.map(c => {
                            return this.getComponent(c)
                        })}
                    </ul>
                </section>
                <section>
                    <h3>Buitenschoolse activiteiten</h3>
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
            <li>
                <h4>{education.title}</h4>
                <div>
                    <span className="institution">{education.institution}</span>
                    <span className="date">{education.date}</span>
                    <span className="extra">{education.extra}</span>
                </div>
                <ul>
                    {education.skills.map(skill => {
                        return <li>{skill}</li>
                    })}
                </ul>
            </li>
        );
    }

    getComponent(component) {
        return (
            <li>
                <h4>{component.title}</h4>
                <span className="date">{component.date}</span>
                <p>{component.description}</p>
                <ul>
                    {component.skills.map(skill => {
                        return <li>{skill}</li>
                    })}
                </ul>
            </li>
        );
    }
}

export default MainComponent;