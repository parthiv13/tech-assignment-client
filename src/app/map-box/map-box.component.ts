import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer, icon, marker, polyline, popup } from 'leaflet';
import { maps190909, maps190908, maps191010, maps191111 } from '../maps/map-2019-09-09';
import * as $ from 'jquery';

@Component({
  selector: 'app-map-box',
  templateUrl: './map-box.component.html',
  styleUrls: ['./map-box.component.css']
})
export class MapBoxComponent implements OnInit {

  streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
  wMaps = tileLayer('http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
  
  dates = ['2019-10-11', '2019-10-10', '2019-09-09', '2019-09-08'];
  markers = maps190909;
  
  // Layers control object with our two base layers and the three overlay layers
  layersControl = {
    baseLayers: {
      'Street Maps': this.streetMaps,
      'Wikimedia Maps': this.wMaps
    }
  };


  options = {
    layers: [
      this.streetMaps
    ],
    zoom: 4,
    center: latLng([ 5.0406, 18.4945 ])
  };

  constructor() { }

  ngOnInit() {
    
  }

  getSelectedValue(id) {
    return $("#" + id).find("dt a span.value").html();
  }

  ok(param) {
    if(param === '2019-09-08') {
      this.markers = maps190908;
    } else if(param === '2019-09-09') this.markers = maps190909;
    else if(param === '2019-10-10') this.markers = maps191010;
    else if(param === '2019-10-11') this.markers = maps191111;
  }
}
