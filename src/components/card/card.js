import React from 'react';
import PropTypes from 'prop-types';

import STATUSES from '../../constants/statuses';
const { BOOKED } = STATUSES;
import Label from '../label/label';
import Placeholder from '../placeholder/placeholder';
import FancyButton from '../fancyButton/fancyButton';
import Checkmark from '../checkmark/checkmark';

const Card = (props) => {

  const renderActionable = () => {
    return props.booked ? 
      <Checkmark>{props.actionLabel}</Checkmark> : 
      <FancyButton themeColor={props.actionColor}>{props.actionLabel}</FancyButton>
  }

  return (
    <article className="card">
      <div className="card__header">
        <Placeholder />
        <Label themeColor={props.labelColor}>{props.labelText}</Label>
        <img className="card__image" src={props.image} />
      </div>
      <div className="card__content">
        <small className="card__detail">Id: {props.id}</small>
        <p className="card__name">{props.name}</p>
        { renderActionable() }
      </div>
    </article>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  bookable: PropTypes.bool.isRequired,
  booked: PropTypes.number.isRequired,
  labelColor: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  actionColor: PropTypes.string.isRequired,
  actionLabel: PropTypes.string.isRequired,
}

export default Card;