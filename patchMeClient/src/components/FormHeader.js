'use strict';
import React, { PropTypes } from 'react';

// TODO: implement backClick
const FormHeader = ({ backClick }) => (
  <section className="hero is-success is-small newFormHader">
    <div className="hero-head">
      <header className="nav">
        <div className="container">
          <div className="nav-left">
            <a onClick={backClick} className="nav-item">
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </a>
          </div>
          <div className="nav-center nav-menu nav-menu-form-header">
            <a className="nav-item">
              Save
            </a>
          </div>
        </div>
      </header>
    </div>
  </section>
);

FormHeader.propTypes = {
  backClick: PropTypes.func,
}

export default FormHeader;
