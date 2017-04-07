import React from 'react';
import ReactDOM from 'react-dom';
import { Spinner } from "@blueprintjs/core";

require('normalize.css');
require('@blueprintjs/core/dist/blueprint.css');

const container = (
  <div>
    <h1>This is JSX!</h1>
    <Spinner className="pt-intent-primary pt-small" />
  </div>
);

ReactDOM.render(
  container,
  document.getElementById('stage')
);