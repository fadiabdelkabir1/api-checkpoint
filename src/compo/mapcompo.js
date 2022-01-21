import React from 'react';
import GoogleMapReact from 'google-map-react'
import { FaMapMarkerAlt } from 'react-icons/fa';

const toFixed=(num, fixed)=> {
    var re = new RegExp('^-?\\d+(?:.\\d{0,' + (fixed || -1) + '})?')
    return num.toString().match(re)[0]}

function  Mapcompo({adress}) {
    const AnyReactComponent = () => <div><FaMapMarkerAlt style={{width:15,height:15}}/></div>;
    let lat =Number(toFixed(adress.lat,2))
    let lng =Number(toFixed(adress.lng,2))
    const ccenter={
    lat: lat,
    lng: lng
    }
    let zoomm=0
    return (
    <div>
        <div style={{ height: '200px', width: '200px' }}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyAZ45ndgwbpH_mtzaDo1UqB5r-6hjieTe0' }}
            defaultCenter={            ccenter          }
            defaultZoom={zoomm}
            >
            <AnyReactComponent
                lat={adress.lat}
                lng={adress.lng}
                text="My Marker"
            />
            </GoogleMapReact>
        </div>
    </div>);
}

export default  Mapcompo;
