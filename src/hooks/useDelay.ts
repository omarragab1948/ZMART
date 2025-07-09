import { useEffect, useState } from "react";

export const useDelay = (active: boolean, delay: number = 300): boolean => {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (active) {
      timeout = setTimeout(() => setIsReady(true), delay);
    } else {
      setIsReady(false);
    }
    return () => clearTimeout(timeout);
  }, [active, delay]);

  return isReady;
};

export default useDelay;
