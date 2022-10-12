# React Bootstrap Table Loading

This component create a ramdom size placeholder.

## Install

```bash
npm install react-bootstrap-table-loading
```

## Usage

This example show a complete component usage.

![TableLoading](https://github.com/victorap93/react-bootstrap-table-loading/blob/main/attachments/TableLoading.gif?raw=true)

```typescript
import 'bootstrap/dist/css/bootstrap.min.css';

import { Table } from 'react-bootstrap';
import { TableLoading } from 'react-bootstrap-table-loading';

export default () => {
  return <Table striped bordered>
    <thead>
      <tr>
        <th>First column</th>
        <th>Second column</th>
        <th>Third column</th>
      </tr>
    </thead>
    <TableLoading
      columns={[
        { min: 2, max: 6 },
        { min: 3, max: 10 },
        { min: 3, max: 8 }
      ]}
      lines={4}
    />
  </Table>
}
```

## Props

All these props are required.

| Name     | Type            | Default | Description                                                                   |
| -------- | --------------- | ------- | ----------------------------------------------------------------------------- |
| columns  | Array \| number | -       | **Required**. Array with `Column` object type values or numeric column number |
| lines    | number          | -       | **Required**. Number of lines                                                 |
| body     | boolean         | true    | Render with `<tbody>` element                                                 |

## License
MIT