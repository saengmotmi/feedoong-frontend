import React from 'react'

interface Props {
  color?: string
}

const ToastIcon = ({ color }: Props) => {
  return (
    <svg
      width="15"
      height="11"
      viewBox="0 0 15 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.09922 10.2001C5.79922 10.2001 5.49922 10.1001 5.29922 9.8001L0.699219 5.2001C0.199219 4.7001 0.199219 4.0001 0.699219 3.5001C1.19922 3.0001 1.89922 3.0001 2.39922 3.5001L6.09922 7.2001L12.6992 0.600098C13.1992 0.100098 13.8992 0.100098 14.3992 0.600098C14.8992 1.1001 14.8992 1.8001 14.3992 2.3001L6.99922 9.7001C6.69922 10.1001 6.39922 10.2001 6.09922 10.2001Z"
        fill={color ?? '#423C3F'}
      />
    </svg>
  )
}

export default ToastIcon
