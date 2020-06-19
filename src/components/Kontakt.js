import React, {useState} from 'react'

function Kontakt() {
    const [name, setName] = useState({firstName: ''})
    const [phoneNumber, setPhoneNumber] = useState();
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    return (
        <div className="kontakt-page">
            <h4 className="kontakt-name">KONTAKT <br/> 
            <div className="kontakt-line"></div>
            </h4>
            
            <p className="kontakt-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
            sed diam nonumy eirmod tempor invidunt</p>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-4">
                    <div className="kontakt-form">
                    <img src="/images/aequo_logo_color.svg" alt="logo"/>   
                <br/> 
            <input type="text"
            className="form-control"
             placeholder="Name, Vorname"
             value={name.firstName}
             onChange={e => setName(e.target.value)}
             />
             <br/>
            <input type="text"
            className="form-control"
             placeholder="Telefon nummer"
             value={phoneNumber}
             onChange={e => setPhoneNumber(e.target.value)}
             />
             <br/>
            <input type="email"
             className="form-control"
             placeholder="Email"
             value={email}
             onChange={e => setEmail(e.target.value)}
             />
             <br/>
            <textarea className="form-control" placeholder="Mitteilung / Interesen*"
             value={description}
             onChange={e=> setDescription(e.target.value)}></textarea>
             <br/>
                </div>
                    </div>
                
                <div className="col-4">
                    <div className="kontakt-info">
                    <br/><br/>
                        <p>
                        <img src="/images/phone_icon.svg" alt="phone"/>  Phone +41 777 324 55 
                       <br/><br/>
                       <img src="/images/mail_icon.svg" alt="email"/> Email  Info@aequo.com
                       <br/>
                       <br/>
                       <img src="/images/location_icon.svg" alt="location"/> My Address  2837 Test address, Luzern, Shweiz
                        </p>
                    </div>
                </div>
                <div className="col-2"></div>

            </div>
            


        </div>
    )
}

export default Kontakt
