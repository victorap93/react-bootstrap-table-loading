import React, { useEffect, useState } from 'react';
import { Placeholder } from 'react-bootstrap';

type QtdColumn = number[]

type RealLines = QtdColumn[]

export type Column = {
  min: number,
  max: number
}

export type TableLoadingProps = {
  columns: Column[] | number,
  lines: number,
  body?: boolean
}

export const TableLoading = ({ columns, lines, body = true }: TableLoadingProps) => {

  const [real_lines, setRealLines] = useState<RealLines>([]);

  useEffect(() => {
    let real_lines: RealLines = [];
    for (let x = 0; x < lines; x++) {
      let qtd_column: QtdColumn = [];
      (
        Array.isArray(columns)
          ? columns
          : Array.from({ length: columns }, () => { return { min: 4, max: 12 } })
      ).map(({ min, max }: Column) => {
        qtd_column.push(Math.floor(Math.random() * (max - min)) + min)
      })
      real_lines.push(qtd_column)
    }
    setRealLines(real_lines)
  }, [columns, lines]);

  const bodyRender = (component: JSX.Element[]) => {
    return body
      ? <tbody>{component}</tbody>
      : <>{component}</>
  }

  return bodyRender(
    real_lines.map((real_line, real_line_index) => {
      return <tr key={real_line_index + 1}>
        {real_line.map((qtd_column, qtd_column_index) => {
          return <td style={{ cursor: "wait" }} key={qtd_column_index}>
            <Placeholder as="div" animation="glow">
              <Placeholder xs={qtd_column} />
            </Placeholder>
          </td>
        })}
      </tr>
    })
  )
}