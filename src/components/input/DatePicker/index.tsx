import React, { useState } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { StyledButton } from 'src/components/button';
import { useOutsideClick } from 'src/hooks';
import dayjs, { Dayjs } from 'dayjs';
import Dates from './Dates';

interface DatePickerProps {
  value?: string;
  onDateClick?: (date: Dayjs) => Promise<void> | void;
  format?: string;
}

const DatePicker = ({
  value,
  onDateClick = () => {},
  format = 'YYYY-MM-DD',
}: DatePickerProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [current, setCurrent] = useState<Dayjs>(dayjs(value));
  const [selected, setSelected] = useState<Dayjs>(dayjs(value));
  const { ref } = useOutsideClick<HTMLDivElement>(() => {
    setIsOpen(false);
  });

  const changeCurrent = (date: Dayjs) => {
    setCurrent(date);
  };

  const onDateSelect = (date: Dayjs) => {
    setSelected(date);
    onDateClick(date);
  };

  return (
    <div className="relative" ref={ref}>
      <StyledButton
        className="flex items-center"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <FaRegCalendarAlt className="mr-8 text-16" />
        <p className="text-16 max-md:text-14">
          {value ? dayjs(value).format(format) : selected.format(format)}
        </p>
      </StyledButton>
      {isOpen && (
        <div className="absolute right-0 z-10 mt-8 animate-fadein rounded-lg border-1 border-gray-1 bg-white p-16 shadow-lg">
          <div className="mb-16 flex justify-between">
            <StyledButton
              aria-label="button"
              className="whitespace-nowrap px-8 py-6"
              onClick={() => {
                changeCurrent(current.subtract(1, 'month'));
              }}
            >
              <FaAngleLeft className="text-center text-18" />
            </StyledButton>
            <div className="flex">
              <StyledButton className="whitespace-nowrap px-8 py-6 font-semibold">
                {current.year().toString()}년
              </StyledButton>
              <StyledButton className="whitespace-nowrap px-8 py-6 font-semibold">
                {current.month() + 1}월
              </StyledButton>
            </div>
            <StyledButton
              aria-label="button"
              className="whitespace-nowrap px-8 py-6"
              onClick={() => {
                changeCurrent(current.add(1, 'month'));
              }}
            >
              <FaAngleRight className="text-center text-18" />
            </StyledButton>
          </div>
          <Dates
            onDateSelect={onDateSelect}
            selected={value ? dayjs(value) : selected}
            current={current}
            changeCurrent={changeCurrent}
          />
        </div>
      )}
    </div>
  );
};

export default DatePicker;
