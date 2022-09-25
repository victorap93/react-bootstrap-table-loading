import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as TableLoading } from "../stories/TableLoading.stories";

describe('TableLoading', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TableLoading
      columns={[
        { min: 2, max: 6 },
        { min: 3, max: 10 },
        { min: 4, max: 12 },
        { min: 3, max: 8 }
      ]}
      lines={4}
    />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
