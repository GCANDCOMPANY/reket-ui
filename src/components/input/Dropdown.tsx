import React, { ButtonHTMLAttributes, useState } from 'react';
import { VscChevronDown } from 'react-icons/vsc';
import { useOutsideClick } from 'src/hooks';
import { mergeStyle } from 'src/utils/style';
import { StyledButton } from '../button';

interface DropdownProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string | number | JSX.Element;
  list: {
    value: string | number | JSX.Element;
    onClick: () => Promise<void> | void;
  }[];
  divide?: number[];
}

const Dropdown = ({ label, className, list, divide }: DropdownProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { ref } = useOutsideClick<HTMLDivElement>(() => {
    setIsOpen(false);
  });
  const divideSet = new Set(divide);

  return (
    <div className="relative" ref={ref}>
      <StyledButton
        type="button"
        className={mergeStyle('flex items-center', className)}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <p>{label}</p>
        <VscChevronDown size={16} color="black" className="mb-2 ml-4" />
      </StyledButton>
      {isOpen && (
        <ul className="absolute right-0 z-10 mt-8 flex min-w-128 animate-fadein flex-col rounded-lg border-1 border-gray-1 bg-white py-4 shadow-lg">
          {list.map((el, index) => (
            <li key={index}>
              <button
                className={`w-full py-12 pl-16 pr-32 text-left hover:bg-gray-1 ${
                  divideSet.has(index) ? 'border-b-1 border-gray-2' : ''
                }`}
                onClick={el.onClick}
              >
                {el.value}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
