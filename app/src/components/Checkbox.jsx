export default function Checkbox({ type = "checkbox", id, name, children, disabled = false, className = '', ...props }) {
  return (
    <label htmlFor={id} className={`checkbox ${className}`}>
      <input type={type} id={id} name={name} disabled={disabled} {...props} />
      <span className={`text-sm ${disabled ? 'text-slate-400' : ''}`}>{children}</span>
    </label>
  );
}