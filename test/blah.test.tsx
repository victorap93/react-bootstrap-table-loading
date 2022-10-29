import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as TableLoading } from "../stories/TableLoading.stories";

describe('TableLoading', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TableLoading
      columns={4}
      lines={4}
    />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
