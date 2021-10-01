import Container from '../container/container';
import Heading from '../heading/heading';

import { Loader } from '@googlemaps/js-api-loader';
import { MarkerClusterer } from '@googlemaps/markerclusterer';
import { useEffect } from 'react';

import './map.scss';

const loader = new Loader({
  apiKey: '',
});

const locations = [
  { lat: 55.7558, lng: 37.6173 },
  { lat: 55.796391, lng: 49.108891 },
  { lat: 42.968, lng: 129.8437 },
  { lat: 51.5462, lng: 46.0154 },
  { lat: 54.9914, lng: 73.3645 },
];

const Map = () => {
  useEffect(() => {
    loader.load().then((google) => {
      const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: { lat: 55.7558, lng: 37.6173 },
      });

      const labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

      const markers = locations.map((location, i) => {
        return new google.maps.Marker({
          position: location,
          label: labels[i % labels.length],
        });
      });

      new MarkerClusterer({ markers, map });
    });
  }, []);

  return (
    <section>
      <Container>
        <Heading className="map__heading" secondary>
          Отделения Лига Банка
        </Heading>
        <div className="map" id="map"></div>
      </Container>
    </section>
  );
};

export default Map;
