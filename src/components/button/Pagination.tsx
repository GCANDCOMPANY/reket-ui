import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight, FaAnglesLeft, FaAnglesRight } from 'react-icons/fa6';

interface PaginationProps {
  current: number;
  total?: number;
  size?: number;
  onClickNumber: (targetNumber: number) => Promise<void> | void;
}

const Pagination = ({
  current,
  total = 0,
  size = 10,
  onClickNumber,
}: PaginationProps): JSX.Element | null => {
  const [range, setRange] = useState<number>(0);
  const totalPage = Math.ceil(total / size);
  const paginatedTotal = Math.ceil(totalPage / 5) - 1;
  const pages = _.chunk(_.range(1, totalPage + 1), 5);

  useEffect(() => {
    setRange(() => Math.floor((current - 1) / 5));
  }, [current]);

  return total ? (
    <div className="flex-center">
      {range > 0 && (
        <>
          <button
            onClick={() => {
              setRange(0);
            }}
            aria-label="button"
            className="h-32 w-32 rounded hover:bg-gray-3"
          >
            <FaAnglesLeft className="w-full text-center text-18" />
          </button>
          <button
            onClick={() => {
              setRange((prev) => prev - 1);
            }}
            aria-label="button"
            className="h-32 w-32 rounded hover:bg-gray-3"
          >
            <FaAngleLeft className="w-full text-center text-18" />
          </button>
        </>
      )}
      {total &&
        pages[range].map((el) => (
          <button
            className="group min-w-32 rounded px-8 py-4 hover:bg-gray-3"
            key={el}
            onClick={() => {
              onClickNumber(el);
            }}
          >
            <span
              className={`${
                current === el ? 'font-bold text-black' : 'text-gray-6'
              } decoration-2 underline-offset-2 group-hover:underline`}
            >
              {el}
            </span>
          </button>
        ))}
      {range < paginatedTotal && (
        <>
          <button
            onClick={() => {
              setRange((prev) => prev + 1);
            }}
            aria-label="button"
            className="h-32 w-32 rounded hover:bg-gray-3"
          >
            <FaAngleRight className="w-full text-center text-18" />
          </button>
          <button
            onClick={() => {
              setRange(paginatedTotal);
            }}
            aria-label="button"
            className="h-32 w-32 rounded hover:bg-gray-3"
          >
            <FaAnglesRight className="w-full text-center text-18" />
          </button>
        </>
      )}
    </div>
  ) : null;
};

export default Pagination;
