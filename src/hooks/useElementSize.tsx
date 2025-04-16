import { RefObject, useCallback, useEffect, useState } from "react";

interface Size {
  width: number;
  height: number;
}

export const useElementSize = (elementRef: RefObject<HTMLElement | null>) => {
  const [dimensions, setDimensions] = useState<Size>({ width: 0, height: 0 });

  const measure = useCallback(() => {
    if (elementRef.current) {
      setDimensions({
        width: elementRef.current.offsetWidth,
        height: elementRef.current.offsetHeight,
      });
    }
  }, [elementRef]);

  useEffect(() => {
    measure();

    window.addEventListener("resize", measure);

    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  return dimensions;
};
