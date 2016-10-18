'use strict';

import React, { PropTypes } from 'react';

export const InputShortText = () => (
  <div className="content has-text-centered">
    <p>
      <input className="input is-medium formInput" type="text" placeholder="Question" />
    </p>
    <p>
      <input className="input formInput" type="text" placeholder="Short-answer-text" disabled/>
    </p>
  </div>
);

export const InputLongText = () => (
  <div className="content has-text-centered">
    <p>
      <input className="input is-medium formInput" type="text" placeholder="Question" />
    </p>
    <p>
      <textarea className="textarea formDescription" placeholder="Long-answer-text" disabled></textarea>
    </p>
  </div>
);

// TODO: email, input number
