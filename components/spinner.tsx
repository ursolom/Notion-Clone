import React from 'react';

interface SpinnerProps {
  size?: number;
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ size = 40, color = 'currentColor' }) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`animate-spin rounded-full border-t-2 border-b-2 border-${color}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;

