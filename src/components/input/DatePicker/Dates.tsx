import dayjs, { Dayjs } from 'dayjs';
import _ from 'lodash';
import React, { useCallback } from 'react';
import { StyledButton } from 'src/components/button';

interface DatesProps {
  current: Dayjs;
  selected: Dayjs;
  onDateSelect: (date: Dayjs) => void;
  changeCurrent: (date: Dayjs) => void;
}

const Dates = ({ current, selected, onDateSelect, changeCurrent }: DatesProps) => {
  const today = dayjs();

  const generateCalendar = useCallback((value: Dayjs) => {
    const startDay = value.startOf('month').startOf('week');
    const endDay = value.endOf('month').endOf('week');
    const diff = endDay.diff(startDay, 'days') + 1;
    const calendar = _.chunk(
      Array(diff)
        .fill(1)
        .map((arr, i) => startDay.add(i, 'day')),
      7,
    );

    return calendar;
  }, []);

  const table = generateCalendar(current);

  return (
    <>
      <div className="flex h-32">
        {WEEKS.map((week) => (
          <p
            key={week}
            className={`align-center flex-1 text-center font-semibold text-gray-7 ${
              week === '일' ? 'text-red-4' : ''
            } ${week === '토' ? 'text-indigo-5' : ''}`}
          >
            {week}
          </p>
        ))}
      </div>
      {table.map((week, weekIndex) => (
        <div key={weekIndex} className="flex">
          {week.map((day, index) => {
            const isCurrentMonth = day.month() === current.month() && day.year() === current.year();
            const isSelected = selected.startOf('day').isSame(day.startOf('day'));

            return (
              <button
                key={index}
                className={`m-3 h-32 w-32 rounded p-0 px-0 py-0 hover:bg-black hover:bg-opacity-5 ${
                  isSelected ? 'hover:bg-opacity-700 bg-black hover:bg-opacity-70' : ''
                }`}
                onClick={() => {
                  onDateSelect(day);
                }}
              >
                <p
                  className={`${isSelected && 'text-white'} ${
                    isCurrentMonth ? 'text-gray-8' : 'text-gray-5'
                  }`}
                >
                  {day.format('D')}
                </p>
              </button>
            );
          })}
        </div>
      ))}
    </>
  );
};

export default Dates;

const WEEKS = ['일', '월', '화', '수', '목', '금', '토'];
