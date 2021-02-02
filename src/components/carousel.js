import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class CarouselComponent extends Component {
    render() {
        let multiplier = this.props.multiplier === undefined ? 1 : this.props.multiplier;
        let i = 0;
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 3500,
            slidesToShow: 2 * multiplier,
            arrows: true,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: multiplier,
                    }
                }
            ]
        }
        return (
            <Slider {...settings}>
                {this.props.media.map(media => {
                    return <div key={i++}>{media}</div>
                })}
            </Slider>
        );
    }
}

export default CarouselComponent