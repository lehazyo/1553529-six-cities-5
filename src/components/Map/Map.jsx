import React from "react";
import PropTypes from "prop-types";
import "leaflet/dist/leaflet.css";
import leaflet from "leaflet";
import {connect} from "react-redux";

class Map extends React.Component {
  initializeMap() {
    this.zoom = 12;
    this.icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [27, 39]
    });

    this.map = leaflet.map(`map`, {
      center: this.props.selectedCityCoords,
      zoom: this.zoom,
      zoomControl: false,
      marker: true
    });
    
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);
  }

  componentDidMount() {
    this.initializeMap();

    this.refreshMap();
  }

  componentDidUpdate() {
    this.map.remove();

    this.initializeMap();

    this.refreshMap();
  }

  refreshMap() {
    this.map.setView(this.props.selectedCityCoords, this.zoom);

    this.props.selectedCityOffers.forEach((offer) => {
      const coords = [offer.location.latitude, offer.location.longitude];
      leaflet
        .marker(coords, {icon: this.icon})
        .addTo(this.map);
    });
  }

  render() {
    return <div id="map" style={{width: this.props.width, height: this.props.height, overflow: `hidden`}} />;
  }
}

Map.propTypes = {
  offers: PropTypes.array
};

const mapStateToProps = (state) => ({
  selectedCityCoords: state.selectedCityCoords,
  selectedCityOffers: state.selectedCityOffers
});

export {Map};
export default connect(mapStateToProps)(Map);
