import React from 'react';

interface SpinnerProps {
  size?: number;
}

const Spinner: React.FC<SpinnerProps> = ({ size = 50 }) => {

  return (
    <div className="flex items-center justify-center">
      <div
        className="spinner dark:border-white border-black"
        style={{
          width: `${size}px`,
          aspectRatio: '1',
          borderRadius: '50%',
          border: `${size * 0.16}px solid `,
          animation: 'l20-1 0.8s infinite linear alternate, l20-2 1.6s infinite linear',
        }}
      >
        <span className="sr-only">Loading...</span>
      </div>
      <style jsx>{`
        @keyframes l20-1 {
          0%    {clip-path: polygon(50% 50%,0       0,  50%   0%,  50%    0%, 50%    0%, 50%    0%, 50%    0% )}
          12.5% {clip-path: polygon(50% 50%,0       0,  50%   0%,  100%   0%, 100%   0%, 100%   0%, 100%   0% )}
          25%   {clip-path: polygon(50% 50%,0       0,  50%   0%,  100%   0%, 100% 100%, 100% 100%, 100% 100% )}
          50%   {clip-path: polygon(50% 50%,0       0,  50%   0%,  100%   0%, 100% 100%, 50%  100%, 0%   100% )}
          62.5% {clip-path: polygon(50% 50%,100%    0, 100%   0%,  100%   0%, 100% 100%, 50%  100%, 0%   100% )}
          75%   {clip-path: polygon(50% 50%,100% 100%, 100% 100%,  100% 100%, 100% 100%, 50%  100%, 0%   100% )}
          100%  {clip-path: polygon(50% 50%,50%  100%,  50% 100%,   50% 100%,  50% 100%, 50%  100%, 0%   100% )}
        }
        @keyframes l20-2 { 
          0%    {transform:scaleY(1)  rotate(0deg)}
          49.99%{transform:scaleY(1)  rotate(135deg)}
          50%   {transform:scaleY(-1) rotate(0deg)}
          100%  {transform:scaleY(-1) rotate(-135deg)}
        }
      `}</style>
    </div>
  );
};

export default Spinner;
