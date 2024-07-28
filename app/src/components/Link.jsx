export default function Link({ children, to, className, ...props }) {
  return (
    <a
      href={to}
      className={`text-indigo-400 hover:text-indigo-300 underline ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
