import {} from 'googlemaps';
import { styles } from './maps-data';

export interface ILocation {
  lat: number,
  lng: number
}

// Styles currently not included pending investigation

export const initMap = (coordinates: ILocation): google.maps.Map => {
  var map: google.maps.Map = new google.maps.Map(
    document.getElementById('map'), 
    { zoom: 16, 
      center: coordinates
    }
  );
  // var marker: google.maps.Marker = new google.maps.Marker({position: coordinates, map: map});
  return map;
}

