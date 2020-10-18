import React from 'react';
import App from './components/App/App';
import ReactDOM from 'react-dom';
import offers from "./mocks/offers.json";

ReactDOM.render(
    <App
      availableOffersCount={234}
      offers={offers}
    />,
    document.getElementById(`root`)
);
