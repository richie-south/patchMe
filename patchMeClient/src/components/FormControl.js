'use strict';

import React, { PropTypes } from 'react';

const FormControl = ({ Element }) => (
  <div className="notification formControl">
    <article className="media">
      <div className="media-left">
        <nav className="level">
          <div className="level-left">
            <a className="level-item">
              <span className="icon is-small is-success"><i className="fa fa-arrow-down" aria-hidden="true"></i></span>
            </a>
            <a className="level-item">
              <span className="icon is-small"><i className="fa fa-arrow-up" aria-hidden="true"></i></span>
            </a>
          </div>
        </nav>
      </div>
      <div className="media-content">
        <Element />
      </div>
      <div className="media-right">
        <button className="delete"></button>
      </div>
    </article>
  </div>
);

FormControl.propTypes = {
  Element: PropTypes.element.isRequired
}
export default FormControl;
