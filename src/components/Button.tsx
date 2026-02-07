import React from "react";

type Variant = "primary" | "secondary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  as?: "button" | "a";
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  as = "button",
  href,
  className,
  children,
  ...rest
}) => {
  const baseClass = variant === "primary" ? "btn-primary" : "btn-secondary";
  const classes = [baseClass, className].filter(Boolean).join(" ");

  if (as === "a" && href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};
