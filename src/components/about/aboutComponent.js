import React, {Component} from "react";

class AboutComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <article id="about-me">
                    <span id="about" className="link"/>
                    <h2>Over mij</h2>
                    <div>
                        <img src={process.env.PUBLIC_URL + "/profiel_foto.jpg"} alt="Andreas Milants"/>
                        <div>
                            <p>Ik ben Andreas Milants en ik ben een student Toegepaste Informatica aan University
                                College
                                Leuven-Limburg.</p>
                            <p>In mijn vrije tijd besteed ik de meeste tijd aan het maken van verschillende applicaties.
                                Deze
                                gaan van het maken van een eenvoudige website tot het uitwerken van Neural Networks.</p>
                            <p>De tijd die ik dan nog over heb, spendeer ik aan mijn twee hobby's. Chiro en voetbal. Ik
                                ben
                                leiding in Chiro Nemas Binkom sinds 2015 en sinds 2018 ben ik er ook groepsleiding.</p>
                        </div>
                    </div>
                </article>
            </React.Fragment>
        );
    }
}

export default AboutComponent;