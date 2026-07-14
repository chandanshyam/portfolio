import React from 'react';
import PropTypes from 'prop-types';
// import dayjs from 'dayjs';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3>
          {data.link ? (
            <a href={data.link} target="_blank" rel="noopener noreferrer">{data.title}</a>
          ) : (
            data.title
          )}
        </h3>
        {data.subtitle && <p className="subtitle"><em>{data.subtitle}</em></p>}
      </header>
      <div className="description">
        <p>{data.desc}</p>
        {(data.link || data.demo) && (
          <p className="links">
            {data.link && (
              <a href={data.link} target="_blank" rel="noopener noreferrer">Source</a>
            )}
            {data.link && data.demo && ' · '}
            {data.demo && (
              <a href={data.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
            )}
          </p>
        )}
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    link: PropTypes.string,
    demo: PropTypes.string,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
