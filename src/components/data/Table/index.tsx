import React from 'react';
import { mergeStyle } from 'src/utils/style';

export interface TableColumns {
  dataIndex: string;
  title?: string | number;
  Element?: () => string | number | JSX.Element;
  className?: Tailwind.ClassNames;
}

export interface TableData {
  [key: string]: {
    content?: string | number;
    Element?: () => string | number | JSX.Element;
    className?: Tailwind.ClassNames;
  };
}

interface TableProps {
  columns: TableColumns[];
  data: TableData[];
}

const Table = ({ columns, data }: TableProps) => {
  return (
    <table className="w-full">
      <thead className="bg-[#f1f1f1]">
        <tr>
          {columns.map(({ title, dataIndex, Element, className }) => (
            <th
              key={dataIndex || title}
              className={mergeStyle(
                'whitespace-nowrap p-8 text-left text-12 font-semibold text-[#606060]',
                className,
              )}
            >
              {Element ? Element() : title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="[&>*:last-child]:border-none [&>*]:border-b-1 [&>*]:border-b-gray-1">
        {data.map((row, index) => (
          <tr key={index}>
            {Object.entries(row).map(([key, value]) => (
              <td key={key} className={mergeStyle('p-4 md:p-12', value.className)} aria-label="row">
                {value.Element ? value.Element() : value.content}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
