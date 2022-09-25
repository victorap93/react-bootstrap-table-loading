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
        <th>First col</th>
        <th>Second col</th>
        <th>Third col</th>
        <th>cd</th>
      </tr>
    </thead>
    <TableLoading
      columns={[
        { min: 2, max: 6 },
        { min: 3, max: 10 },
        { min: 4, max: 12 },
        { min: 3, max: 8 }
      ]}
      lines={4}
    />
  </Table>
}
```

## Props

All these props are required.

| Name    | Type   | Default | Description                            |
|---------|--------|---------|----------------------------------------|
| columns | Array  | -       | Array with `Column` object type values |
| lines   | number | -       | Number of lines                        |

## License
MIT