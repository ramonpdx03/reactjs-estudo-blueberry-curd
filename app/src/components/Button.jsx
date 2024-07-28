export default function Button({type = 'primary', onClick, className, children, ...props}) {
  let buttonType = {
    'primary': 'btn-primary',
    'secondary': 'btn-secondary',
  };

  return (
    <button
      className={`btn ${buttonType[type]} ${className ?? ''}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}