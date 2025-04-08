import { useState } from 'react';
import { IoChevronDownOutline } from '@react-icons/all-files/io5/IoChevronDownOutline';
import { IoChevronUpOutline } from '@react-icons/all-files/io5/IoChevronUpOutline';

import { mergeStyle } from '../../../utils/style';
import { useOutsideClick } from '../../../hooks';

type SelectOption = { value: string; label: string };

interface SelectProps {
  placeholder?: string;
  defaultOption?: SelectOption | string | null;
  options: SelectOption[] | string[];
  className?: Tailwind.ClassNames;
  onChange?: (value: string) => void;
}

const Select = ({
  placeholder = 'select',
  defaultOption = null,
  options,
  className,
  onChange,
}: SelectProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<SelectOption | string | null>(defaultOption);

  const ref = useOutsideClick(() => setIsOpen(false));

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleOptionSelect = (option: SelectOption | string) => {
    setSelected(option);
    toggleDropdown();

    if (onChange) {
      const value = typeof option === 'string' ? option : option.value;
      onChange(value);
    }
  };

  const getDisplayLabel = () => {
    if (!selected) return placeholder;
    return typeof selected === 'string' ? selected : selected.label;
  };

  const isOptionSelected = (option: SelectOption | string) => {
    if (typeof option === 'string') {
      return selected === option;
    }
    return typeof selected === 'object' && selected?.value === option.value;
  };

  return (
    <div className={mergeStyle('relative flex-1 cursor-pointer', className)} ref={ref}>
      <button
        className={`flex h-[44px] w-full items-center justify-between rounded border-[1px] border-solid px-12 ${isOpen ? 'border-dark-3' : 'border-gray-3'}`}
        onClick={toggleDropdown}
      >
        <p className={`${selected ? 'text-dark-8' : 'text-gray-5'}`}>{getDisplayLabel()}</p>
        {isOpen ? (
          <IoChevronUpOutline size={16} className="ml-8 text-dark-5" />
        ) : (
          <IoChevronDownOutline size={16} className="ml-8 text-gray-5" />
        )}
      </button>

      {isOpen && (
        <ul className="absolute z-40 mt-2 flex max-h-200 w-full animate-fadein flex-col overflow-y-scroll rounded-lg border-1 border-gray-1 bg-white p-4 shadow-lg">
          {options.map((option) => {
            const optionKey = typeof option === 'string' ? option : option.value;
            const optionLabel = typeof option === 'string' ? option : option.label;

            return (
              <li
                className={`flex rounded-lg px-12 hover:bg-gray-0 ${isOptionSelected(option) ? 'bg-gray-1 font-semibold' : 'bg-white'}`}
                key={optionKey}
              >
                <button
                  className="w-full overflow-x-hidden text-ellipsis py-12 text-left"
                  onClick={() => handleOptionSelect(option)}
                >
                  {optionLabel}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Select;
