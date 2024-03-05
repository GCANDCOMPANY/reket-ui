import { useCallback, useEffect, useState } from 'react';

interface WindowDemensions {
  width: number;
  height: number;
}

interface Device {
  isMobile: boolean;
  platform: string | null;
  isPcEnvironment: boolean;
}

const useDevice = (): Device => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDemensions>({
    width: 0,
    height: 0,
  });
  const [platform, setPlatform] = useState<string | null>(null);

  const getPlatfromInfo = useCallback((userAgent: string) => {
    if (userAgent.indexOf(PLATFORM.android) > -1) {
      setPlatform(PLATFORM.android);
    } else if (
      userAgent.indexOf(PLATFORM.iphone) > -1 ||
      userAgent.indexOf(PLATFORM.ipad) > -1 ||
      userAgent.indexOf(PLATFORM.ipod) > -1
    ) {
      setPlatform(PLATFORM.ios);
    } else {
      setPlatform(PLATFORM.pc);
    }
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  useEffect(() => {
    const userAgent = navigator?.userAgent?.toLowerCase();
    getPlatfromInfo(userAgent);
  }, [getPlatfromInfo]);

  return {
    isMobile: windowDimensions.width <= 768,
    platform,
    isPcEnvironment: platform === PLATFORM.pc,
  };
};

export default useDevice;

const PLATFORM = {
  android: 'android',
  iphone: 'iphone',
  ipad: 'ipad',
  ipod: 'ipod',
  ios: 'ios',
  pc: 'pc',
};
