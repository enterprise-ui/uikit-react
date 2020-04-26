import * as React from 'react'

export interface IButtonProps {
  className?: string
}

export const Button: React.FC<IButtonProps> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>
}
