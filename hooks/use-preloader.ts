import { useState, useEffect } from "react";

export function usePreloaderFinished() {
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check if preloader has already finished
      if ((window as any).__preloaderFinished) {
        setIsFinished(true);
        return;
      }

      const handleFinished = () => {
        setIsFinished(true);
      };

      window.addEventListener("preloaderFinished", handleFinished);
      return () => window.removeEventListener("preloaderFinished", handleFinished);
    }
  }, []);

  return isFinished;
}
