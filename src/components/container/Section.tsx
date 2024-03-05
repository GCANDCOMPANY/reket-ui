import React, { ReactElement, useState } from 'react';
import { VscChevronDown, VscChevronUp } from 'react-icons/vsc';
import { mergeStyle } from 'src/utils/style';

interface SectionProps extends Omit<React.ComponentProps<'div'>, 'title'> {
  children:
    | (JSX.Element | string | number | ReactElement)
    | (JSX.Element | string | number | ReactElement)[];
  title?: string | JSX.Element | number;
  HeaderComponent?: JSX.Element;
  collapse?: boolean;
  className?: React.ComponentProps<'div'>['className'];
}

const Section = ({
  children,
  title,
  HeaderComponent,
  collapse = false,
  className = '',
  ...props
}: SectionProps): JSX.Element => {
  const [isCollapseOpen, setIsCollapseOpen] = useState<boolean>(true);
  const containerClass = mergeStyle(
    'relative mb-16 w-full rounded-lg bg-white p-16 shadow max-md:px-8',
    className,
  );

  return (
    <div className={containerClass} {...props}>
      {(title || HeaderComponent) && (
        <div className="border-b-1 border-gray-3">
          <div className="flex items-center justify-between pb-8">
            {title ? <h1 className="w-full text-18 font-[500]">{title}</h1> : <div />}
            {collapse && (
              <button
                onClick={() => {
                  setIsCollapseOpen((prev) => !prev);
                }}
              >
                {isCollapseOpen ? (
                  <VscChevronUp size={24} color="black" />
                ) : (
                  <VscChevronDown size={24} color="black" />
                )}
              </button>
            )}
          </div>
          {HeaderComponent}
        </div>
      )}
      {isCollapseOpen && children}
    </div>
  );
};

export default Section;
