'use strict';

import { __ } from '../../locale';
import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker, SearchBox } from "react-google-maps";

require('styles/event/Location.sass');

export default class EventLocation extends Component {

  static inputStyle = {
    border: '1px solid transparent',
    borderRadius: '1px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
    boxSizing: 'border-box',
    MozBoxSizing: 'border-box',
    fontSize: '14px',
    height: '32px',
    marginTop: '27px',
    outline: 'none',
    padding: '0 12px',
    textOverflow: 'ellipses',
    width: '400px'
  }

  static mapCenter = { lat: -34.5575695, lng: -58.4688808 }

  state = {
    bounds: null,
    center: EventLocation.mapCenter,
    markers: []
  }

  handleBoundsChanged() {
    this.setState({
      bounds: this.refs.map.getBounds(),
      center: this.refs.map.getCenter()
    });
  }

  handlePlacesChanged() {
    const places = this.refs.searchBox.getPlaces();
    const markers = [];

    // Add a marker for each place returned from search bar
    places.forEach(function (place) {
      markers.push({
        position: place.geometry.location
      });
    });

    // Set markers; set map center to first search result
    const mapCenter = markers.length > 0 ? markers[0].position : this.state.center;

    this.setState({
      center: mapCenter,
      markers
    });
  }

  render() {
    let props = this.props || {};

    return (
      <section style={{height: "500px"}}>
        <GoogleMapLoader
         containerElement={
           <div {...props.containerElementProps} style={{ height: "100%"}}/>
         }
         googleMapElement={
           <GoogleMap
             ref="map"
             defaultZoom={15}
             center={this.state.center}
             onBoundsChanged={::this.handleBoundsChanged}
             onClick={props.onMapClick} >

             <SearchBox
               bounds={this.state.bounds}
               controlPosition={google.maps.ControlPosition.TOP_LEFT}
               onPlacesChanged={::this.handlePlacesChanged}
               ref="searchBox"
               placeholder="Customized your placeholder"
               style={EventLocation.inputStyle}/>

             {this.state.markers.map((marker, index) => (
               <Marker position={marker.position} key={index} />
             ))}

           </GoogleMap>
         }/>
     </section>
    );
  }
}

EventLocation.displayName = 'EventLocation';
EventLocation.propTypes = { };
