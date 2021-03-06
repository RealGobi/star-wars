import React, { useState } from 'react'

export default function Toggle({ toggle, content }) {
  const [isShown, setIsShown] = useState(false);
  const hide = () => setIsShown(false);
  const show = () => setIsShown(true);

  // toggle for modal
  // using render props
  return (
    <>
      {toggle(show)}
      {isShown && content(hide)}
    </>
  )
}
