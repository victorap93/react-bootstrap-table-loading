import React, { useEffect, useState } from 'react';
import { Placeholder } from 'react-bootstrap';

type Td = number[]

type Tr = Td[]

export type Column = {
  min: number,
  max: number
}

export type TableLoadingProps = {
  columns: Column[] | number,
  lines: number,
  tbody?: boolean,
  tbodyProps?: object
}

export const TableLoading = ({ columns, lines, tbody = true, tbodyProps = {} }: TableLoadingProps) => {

  const [trs, setTrs] = useState<Tr>([]);

  useEffect(() => {
    let trs: Tr = [];
    for (let x = 0; x < lines; x++) {
      let tds: Td = [];
      (
        Array.isArray(columns)
          ? columns
          : Array.from({ length: columns }, () => { return { min: 4, max: 12 } })
      ).map(({ min, max }: Column) => {
        tds.push(Math.floor(Math.random() * (max - min)) + min)
      })
      trs.push(tds)
    }
    setTrs(trs)
  }, [columns, lines]);

  const bodyRender = (component: JSX.Element[]) => {
    return tbody
      ? <tbody {... tbodyProps}>{component}</tbody>
      : <>{component}</>
  }

  return bodyRender(
    trs.map((tds, trIndex) => {
      return <tr key={trIndex + 1}>
        {tds.map((td, tdIndex) => {
          return <td style={{ cursor: "wait" }} key={tdIndex}>
            <Placeholder as="div" animation="glow">
              <Placeholder xs={td} />
            </Placeholder>
          </td>
        })}
      </tr>
    })
  )
}