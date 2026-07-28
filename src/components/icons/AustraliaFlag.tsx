const STAR = "0,-10 2.245,-3.09 9.51,-3.09 3.632,1.181 5.88,8.09 0,3.82 -5.88,8.09 -3.632,1.181 -9.51,-3.09 -2.245,-3.09";

function Star({ x, y, s, fill = "#fff" }: { x: number; y: number; s: number; fill?: string }) {
  return <polygon points={STAR} fill={fill} transform={`translate(${x} ${y}) scale(${s})`} />;
}

export default function AustraliaFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 30" className={className} role="img" aria-label="Australian flag">
      <defs>
        <clipPath id="au-flag-clip">
          <rect x="0" y="0" width="60" height="30" rx="2.5" />
        </clipPath>
        <clipPath id="au-canton-clip">
          <rect x="0" y="0" width="30" height="15" />
        </clipPath>
      </defs>

      <g clipPath="url(#au-flag-clip)">
        <rect x="0" y="0" width="60" height="30" fill="#00247d" />

        <g clipPath="url(#au-canton-clip)">
          <line x1="0" y1="0" x2="30" y2="15" stroke="#fff" strokeWidth="4" />
          <line x1="30" y1="0" x2="0" y2="15" stroke="#fff" strokeWidth="4" />
          <line x1="0" y1="0" x2="30" y2="15" stroke="#cf142b" strokeWidth="1.6" />
          <line x1="30" y1="0" x2="0" y2="15" stroke="#cf142b" strokeWidth="1.6" />
          <line x1="15" y1="0" x2="15" y2="15" stroke="#fff" strokeWidth="6" />
          <line x1="0" y1="7.5" x2="30" y2="7.5" stroke="#fff" strokeWidth="6" />
          <line x1="15" y1="0" x2="15" y2="15" stroke="#cf142b" strokeWidth="3" />
          <line x1="0" y1="7.5" x2="30" y2="7.5" stroke="#cf142b" strokeWidth="3" />
        </g>

        <Star x={15} y={22.5} s={0.42} />

        <Star x={45.5} y={6.5} s={0.34} />
        <Star x={37} y={14.5} s={0.3} />
        <Star x={45.5} y={26} s={0.34} />
        <Star x={52.5} y={13.5} s={0.3} />
        <Star x={48} y={19} s={0.18} />
      </g>
    </svg>
  );
}
