import { useRef, useEffect, useCallback } from 'react';

const useOutsideClick = (onClickOutside: () => void) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);

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
