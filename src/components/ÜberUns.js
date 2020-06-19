import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


let persons =[
    {
        name:"ERICK MUSTER",
        position: "Client Advisor",
        desc:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.",
        src: "/images/erick_muster_image.png"
    },
    {
        name:"MARK MUSTER",
        position: "Client Advisor",
        desc:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.",
        src: "/images/mark_muster_image.png"
    },
    {
        name:"ELISA MUSTER",
        position: "Client Advisor",
        desc:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.",
        src: "/images/elisamuster_image_main.png"
    }
]

let settings = {
   
    infinite: true,
    speed: 1000,
    arrows:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
}

function ÜberUns() {
    return (
        <div className="überuns-page">
            <p className="überuns-title">ÜBER UNS</p>
            
            <p className="überuns-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
             sed diam nonumy eirmod tempor invidunt <br/>
            ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>

            <div className="slider-container">
            <Slider {...settings}>
                {persons.map(person=>(
                        <div className="out" >
                            <div className="card">
                                <img className="rounded-circle" alt={"users here"} src={person.src} height={56} width={56} />
                                <div className="card-body">
                                    <h5 className="card-title">{person.name}</h5>
                                    <small className="card-text text-sm-center text-muted">{person.position}</small>
                                    <br/>
                                    <small className="card-text text-sm-center text-muted">{person.desc}</small>
                                  


                                 
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

         
                    
            
                   
                
                    
              

           
            
        </div>
    )
}

export default ÜberUns
