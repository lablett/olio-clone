import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line object-curly-newline
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import LoadingAnimation from '../common/LoadingAnimation';

import 'leaflet/dist/leaflet.css';


const Icon = L.Icon.extend({
  options: {},
});

const redIcon = new Icon({
  iconUrl: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FE7569',
});

const greenIcon = new Icon({
  iconUrl: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|008b8b',
});


const ArticleMap = ({
  articleList,
  viewedArticles,
  onClickHandler,
  setCurrentTab,
}) => {
  let mapCentre;

  if (articleList.length > 0) {
    const sumArray = articleList.reduce((acc, curr) => {
      const loc = curr.user.location;
      acc[0] += loc.latitude;
      acc[1] += loc.longitude;
      return acc;
    }, [0, 0]);

    mapCentre = [sumArray[0] / articleList.length, sumArray[1] / articleList.length];
  }

  if (!articleList || !mapCentre) {
    return <LoadingAnimation />;
  }

  const markerList = articleList.map((article) => {
    const location = article.user.location;
    const isViewed = viewedArticles.includes(article.id);

    return (
      <Marker
        key={article.id}
        position={[location.latitude, location.longitude]}
        icon={isViewed ? greenIcon : redIcon}
        eventHandlers={{
          click: () => {
            onClickHandler(article.id);
          },
        }}
      >
        <Popup className={article.card}>
          {article.title}
          <button type="button" onClick={() => setCurrentTab(0)}>More Info</button>
        </Popup>
      </Marker>
    );
  });

  return (
    <MapContainer center={mapCentre} zoom={11} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markerList}
    </MapContainer>
  );
};

ArticleMap.propTypes = {
  articleList: PropTypes.array.isRequired,
  viewedArticles: PropTypes.array.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  setCurrentTab: PropTypes.func.isRequired,
};

export default ArticleMap;
