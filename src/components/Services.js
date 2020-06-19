import React from 'react'

function Services() {
    return (
        <div className="services-page">
            <h4 className="service-name">Services</h4>
            <p className="service-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                invidunt ut<br/> labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                <div className="service-container">
                <div className="berater">
                        <img src="/images/berater_icon.svg" alt="berater"/><br/>
                        <p className="berater-title">Ihr Persönlicher Berater</p>
                        <p className="berater-text">Unsere Versicherungsexperten wissen die richtige
                        Antwort auf die Frage nach sinnvollen Versicherungen</p>
                    </div>
                    <div className="icon">
                    <img src="/images/24_icon.svg" alt="24icon"/><br/>
                        <p className="berater-title">24h Support</p>
                        <p className="berater-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                         sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
                    </div>
                    <div className="dotedmap">
                    <img src="/images/doted_map_switzerland.svg" alt="dotedmap"/><br/>
                        <p className="berater-title">Schweizweit</p>
                        <p className="berater-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                         sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
                    </div>
                    <div className="cicero">
                    <img src="/images/cicero_certified_logo.png" alt="cicero"/><br/>
                        <p className="berater-title">Kompetent</p>
                        <p className="berater-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                         sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
                    </div>
                  
                </div>
                
                
           
        </div>
    )
}

export default Services
