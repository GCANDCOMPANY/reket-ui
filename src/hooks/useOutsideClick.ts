import { useRef, useEffect, useCallback } from 'react';

const useOutsideClick = (onClickOutside: () => void) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (!ref || !ref.current) return;

      const inside = ref.current?.contains?.(event.target);
      if (!inside) onClickOutside();
    },
    [onClickOutside, ref],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return ref;
};

export default useOutsideClick;
