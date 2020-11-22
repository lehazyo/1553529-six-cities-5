import React from "react";
import PropTypes from "prop-types";
import "leaflet/dist/leaflet.css";
import leaflet from "leaflet";
import {connect} from "react-redux";

class Map extends React.Component {
  _initializeMap() {
    const zoom = 12;

    this.map = leaflet.map(`map`, {
      center: this.props.selectedCity.coords,
      zoom,
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
    this._initializeMap();

    this.refreshMap();
  }

  componentDidUpdate() {
    this.map.remove();

    this._initializeMap();

    this.refreshMap();
  }

  refreshMap() {
    const zoom = 12;
    const icon = leaflet.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [27, 39]
    });

    this.map.setView(this.props.selectedCity.coords, zoom);

    this.props.selectedCity.offers.forEach((offer) => {
      const coords = [offer.location.latitude, offer.location.longitude];
      leaflet
        .marker(coords, {icon})
        .addTo(this.map);
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return <div id="map" style={{width: this.props.width, height: this.props.height, overflow: `hidden`}} />;
  }
}

Map.propTypes = {
  selectedCity: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    offers: PropTypes.arrayOf(PropTypes.shape({
      city: PropTypes.shape({
        name: PropTypes.string,
        location: PropTypes.shape({
          latitude: PropTypes.number,
          longitude: PropTypes.number
        }),
        zoom: PropTypes.number
      }),
      previewImage: PropTypes.string,
      images: PropTypes.arrayOf(PropTypes.string),
      title: PropTypes.string,
      isFavorite: PropTypes.bool,
      isPremium: PropTypes.bool,
      rating: PropTypes.number,
      type: PropTypes.oneOf([`house`, `room`, `apartment`, `hotel`]),
      bedrooms: PropTypes.number,
      maxAdults: PropTypes.number,
      price: PropTypes.number,
      goods: PropTypes.arrayOf(PropTypes.string),
      host: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        isPro: PropTypes.bool,
        avatarUrl: PropTypes.string
      }),
      description: PropTypes.string,
      location: PropTypes.shape({
        latitude: PropTypes.number,
        londitude: PropTypes.number,
        zoom: PropTypes.number
      }),
      id: PropTypes.number
    })),
    coords: PropTypes.arrayOf(PropTypes.number)
  }),
  width: PropTypes.string,
  height: PropTypes.string
};

const mapStateToProps = (state) => ({
  selectedCity: state.selectedCity,
});

export {Map};
export default connect(mapStateToProps)(Map);
