import React from 'react';
import PropTypes from 'prop-types';

function Produce(props) {
  return (
    <div>
      <style jsx>{`

      `}</style>
      <div>
        <h2>{props.month}</h2>
        <h4><em>{props.selection.map((produces, index) => 
          <p key={index}>{produces}</p>)}</em></h4>

        <br />
      </div>
      <hr />
    </div>
  );
}

Produce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired,
};

export default Produce;