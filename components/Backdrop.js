import { useRef, useEffect } from 'react';

const Backdrop = (props) => {

  const ref = useRef();
  const { onClick, children } = props;

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      onClick && onClick();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  if (!children) {
    return null;
  }

  return (
    <div ref={ref}>
      {children}
    </div>
  );
}

export default Backdrop;

