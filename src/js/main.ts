import { ILocation, initMap } from './maps/maps';
import {getCrimes} from './police/police';
import {nightStyle} from './maps/maps-data';
import {} from 'googlemaps';


// start game

const start = () => {
  document.getElementById("start-pg").style.display = "none";
  document.getElementById("main").style.display = "block";
}

document.getElementById("start-button").addEventListener("click", start);

const crime1: ILocation = {lat: 51.471322, lng: -0.142862};

let marker;

getCrimes(crime1.lat, crime1.lng).then((data) => {

  let crimeLocation = crime1;

  var map: google.maps.Map = new google.maps.Map(
    document.getElementById('map'), 
      { zoom: 18, 
        center: crimeLocation,
        styles: [
          {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
          {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
          {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
          {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{color: '#263c3f'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{color: '#6b9a76'}]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{color: '#38414e'}]
          },
          {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{color: '#212a37'}]
          },
          {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{color: '#9ca5b3'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{color: '#746855'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{color: '#1f2835'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{color: '#f3d19c'}]
          },
          {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{color: '#2f3948'}]
          },
          {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{color: '#17263c'}]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{color: '#515c6d'}]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [{color: '#17263c'}]
          }
        ]
      }

    );
    const marker: google.maps.Marker = new google.maps.Marker({position: crime1, map: map});
    
    const icon = {
      url: "./../assets/run-man.gif",
      scaledSize: new google.maps.Size(60, 60), 
      origin: new google.maps.Point(0,0), 
      anchor: new google.maps.Point(0, 0) 
    };

    document.getElementById("next-crime").addEventListener("click", () => {
      let i = Math.floor(Math.random()*data.length);
      crimeLocation = {lat: Number(data[i].location.latitude), lng: Number(data[i].location.longitude)};
      let newMarker = new google.maps.Marker({
        map: map,
        position: crimeLocation, 
        animation: google.maps.Animation.DROP,
        icon: icon
      })
      map.panTo(crimeLocation);
      document.getElementById("captions").innerHTML = `${data[i].category} spotted ${data[i].location.street.name}`;
    }
  )      
})




