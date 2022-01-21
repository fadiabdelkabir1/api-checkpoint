import React from 'react';
import './Itemcard.css'
import Mapcompo from './mapcompo';


function Itemcard({fakedata}) {
    
    return (
                <div className="cardform" >
                    <img className="card-top" src="https://www.presse-citron.net/app/uploads/2021/10/demon-slayer-anime.jpg" alt="error"/>
                    <div className="card-body">
                        <h5 className="card-title">{fakedata.name}</h5>
                        <p className="card-text">{fakedata.company.name}</p>
                        <p className="card-text">{fakedata.company.catchPhrase}</p>
                        <p className="card-text" >{fakedata.company.bs}</p>
                    </div>
                    
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{fakedata.email}</li>
                        <li className="list-group-item">{fakedata.phone}</li>
                        <li className="list-group-item">{fakedata.website}</li>
                    </ul>
                    <Mapcompo adress={fakedata.address.geo}/>
                </div>
    );
}

export default Itemcard;
