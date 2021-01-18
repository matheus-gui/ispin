import GoogleMapReact from 'google-map-react';
import './styles.css';

const Map = () =>{
    return (
        <div className="container-map">
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyBH5XRc2SPGmzxp5nKkB_Fm1slOrruIuUs'}}
                center={{
                    lat:-8.066363653708999, 
                    lng:-34.881222621243765
                }}
                defaultZoom={15}
            >
            </GoogleMapReact>
        </div>
    )
}

export default Map;