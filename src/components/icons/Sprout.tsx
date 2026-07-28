export default function Sprout({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role="img"
      aria-label="Organically grown"
    >
      <path d="M12 21V11" />
      <path d="M12 11C12 11 12 4.5 5.5 4.5C5.5 4.5 5.2 11 12 11Z" />
      <path d="M12 11C12 11 12 4.5 18.5 4.5C18.5 4.5 18.8 11 12 11Z" />
      <path d="M4.5 21H19.5" />
    </svg>
  );
}
