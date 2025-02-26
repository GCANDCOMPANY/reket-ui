import { useState } from 'react';
import { IoChevronDownOutline } from '@react-icons/all-files/io5/IoChevronDownOutline';
import { IoChevronUpOutline } from '@react-icons/all-files/io5/IoChevronUpOutline';

import { mergeStyle } from '../../utils/style';
import { useOutsideClick } from '../../hooks';

interface Props {
  placeholder?: string;
  defaultOption?: { label: string; value: string } | null;
  options: {
    value: string;
    label: string;
  }[];
  className?: string;
  onChange?: (value: string) => void;
}

const Select = ({
  placeholder = '선택',
  defaultOption = null,
  options,
  className,
  onChange,
}: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<{ label: string; value: string } | null>(defaultOption);
  const containerClass = mergeStyle(`relative cursor-pointer flex-1`, className);
  const height = 44;
  const labelColor = selected ? 'text-dark-8' : 'text-gray-5';
  const borderColor = isOpen ? 'border-dark-3' : 'border-gray-3';
  const ref = useOutsideClick(() => {
    setIsOpen(false);
  });

  return (
    <div className={containerClass} ref={ref}>
      <button
        className={`h-[${height}px] flex w-full items-center justify-between rounded border-[1px] border-solid px-12 ${borderColor}`}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <p className={`${labelColor}`}>{!!selected ? selected?.label : placeholder}</p>
        {isOpen ? (
          <IoChevronUpOutline size={16} className="ml-8 text-dark-5" />
        ) : (
          <IoChevronDownOutline size={16} className="ml-8 text-gray-5" />
        )}
      </button>
      {isOpen && (
        <ul className="absolute z-40 mt-2 flex max-h-200 w-full animate-fadein flex-col overflow-y-scroll rounded-lg border-1 border-gray-1 bg-white p-4 shadow-lg">
          {options.map((option) => (
            <li
              className={`flex h-[${height}px] rounded-lg px-12 hover:bg-gray-0 ${selected?.value === option.value ? 'bg-gray-1 font-semibold' : 'bg-white'}`}
              key={option.value}
            >
              <button
                className="w-full overflow-x-hidden text-ellipsis py-12 text-left
                "
                onClick={() => {
                  setSelected(option);
                  setIsOpen((prev) => !prev);

                  if (onChange) onChange(option.value);
                }}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
