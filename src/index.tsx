import React, { useEffect, useState } from 'react';
import { Placeholder } from 'react-bootstrap';

type QtdColumn = Array<number>

type RealLines = Array<QtdColumn>

export type Column = {
  min: number,
  max: number
}

export type TableLoadingProps = {
  columns: Array<Column>,
  lines: number
}

export const TableLoading: React.FC<TableLoadingProps> = ({ columns, lines }) => {

  const [real_lines, setRealLines] = useState<RealLines>([]);

  useEffect(() => {
    let real_lines: RealLines = [];
    for (let x = 0; x < lines; x++) {
      let qtd_column: QtdColumn = []
      columns.map(({ min, max }: Column) => {
        qtd_column.push(Math.floor(Math.random() * (max - min)) + min)
      })
      real_lines.push(qtd_column)
    }
    setRealLines(real_lines)
  }, []);

  return (
    <tbody>
      {real_lines.map((real_line, real_line_index) => {
        return <tr key={real_line_index + 1}>
          {real_line.map((qtd_column, qtd_column_index) => {
            return <td style={{ cursor: "wait" }} key={qtd_column_index}>
              <Placeholder as="div" animation="glow">
                <Placeholder xs={qtd_column} />
              </Placeholder>
            </td>
          })}
        </tr>
      })}
    </tbody>
  );
}