import { useEffect, useRef } from 'react';

const useOutsideClick = <T extends Element>(callback: () => Promise<void> | void) => {
  const ref = useRef<T>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref && !ref.current?.contains(event.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return { ref };
};

export default useOutsideClick;
