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

      // const template = [
      //   '<?xml version="1.0"?>',
      //   '<svg width="26px" height="26px" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">',
      //   '<circle stroke="#222" fill="{{ color }}" cx="50" cy="50" r="35"/>',
      //   '</svg>',
      // ].join('\n');

      // const svg = template.replace('{{ color }}', '#800');

      const markers = locations.map((location, i) => {
        return new google.maps.Marker({
          position: location,
          label: labels[i % labels.length],
          icon: { url: '../../img/location.png' },
          // scaledSize: new google.maps.Size(20, 20),
          // optimized: false,
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
