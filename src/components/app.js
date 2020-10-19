import React from 'react';

import Card from './card/card';
import data from '../data/mock-house.json';
import STATUSES from '../constants/statuses';
import COLORS from '../constants/colors';

const App = () => {

  const getActionLabel = ({ bookable, booked }) => {
    if (booked) return `Booked for ${booked} days`;
    return bookable ? 'Book' : 'Not Bookable';
  };

  const getActionColor = ({ bookable }) => {
    return bookable ? COLORS.GREEN : COLORS.GRAY;
  };

  const getLabelText = ({ bookable, booked }) => {
    if (booked) return STATUSES.BOOKED;
    return bookable ? STATUSES.AVAILABLE : STATUSES.UNAVAILABLE;
  };

  const getLabelColor = ({ bookable, booked }) => {
    if (booked) return COLORS.BLUE;
    return bookable ? COLORS.GREEN : COLORS.RED;
  };

  const formatData = (house) => ({
    ...house,
    labelColor: getLabelColor(house),
    labelText: getLabelText(house),
    actionColor: getActionColor(house),
    actionLabel: getActionLabel(house)
  });

  const renderCard = (house) => (
    <Card {...house} key={house.id} />
  );

  return (
    <section className="app">
      { data
          .map(formatData)
          .map(renderCard)
      }
    </section>
  );
};

export default App;