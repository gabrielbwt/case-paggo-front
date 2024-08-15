import { useState, useEffect } from 'react';

interface ProgressBarProps {
  isLoading: boolean;
}

function ProgressBar({isLoading}: ProgressBarProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <div className="w-full">
      <span id="ProgressLabel" className="sr-only">Loading</span>
    
      <span
        role="progressbar"
        aria-labelledby="ProgressLabel"
        aria-valuenow={progress}
        className="relative block rounded-full bg-gray-700"
      >
        <span className="absolute inset-0 flex items-center justify-center text-[10px]/4">
          <span className="font-bold text-white">{`${progress}%`}</span>
        </span>
    
        <span
          className="block h-4 rounded-full bg-blue-600 text-center transition-width duration-100"
          style={{ width: `${progress}%` }}
        > 
        </span>
      </span>
    </div>
  );
}

export default ProgressBar;
