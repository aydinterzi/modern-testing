function Button({ children, variant = "primary" }) {
  return <button variant={variant}>{children}</button>;
}

export { Button };
