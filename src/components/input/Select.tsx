import React, { ButtonHTMLAttributes, useState } from 'react';
import { mergeStyle } from 'src/utils/style';
import { VscChevronDown } from 'react-icons/vsc';
import { useOutsideClick } from 'src/hooks';
import { StyledButton } from '../button';

interface SelectProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  current: string | number;
  className?: ButtonHTMLAttributes<HTMLButtonElement>['className'];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  list: { label: string | number; value: any }[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: (value: any, label: any) => Promise<void> | void;
}

const Select = ({ current, className, list, onChange = () => {} }: SelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { ref } = useOutsideClick<HTMLDivElement>(() => {
    setIsOpen(false);
  });

  return (
    <div className="relative" ref={ref}>
      <StyledButton
        type="button"
        className={mergeStyle(
          'flex w-128 items-center justify-between border-1 border-gray-3 text-gray-7',
          className,
        )}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <span className="flex-1 shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-left text-14">
          {current}
        </span>
        <VscChevronDown size={16} color="black" className="mb-2 ml-4" />
      </StyledButton>
      {isOpen && (
        <ul className="absolute right-0 z-10 mt-2 flex min-w-128 animate-fadein flex-col rounded-lg border-1 border-gray-1 bg-white py-4 shadow-lg">
          {list.map((el, index) => (
            <li key={index}>
              <button
                onClick={() => {
                  onChange(el.value, el.label);
                  setIsOpen(false);
                }}
                className="w-full px-12 py-8 text-left text-14 text-gray-7 hover:bg-gray-1"
              >
                {el.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
