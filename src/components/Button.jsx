import React from 'react'
import PropTypes from "prop-types"

function Button({label,styles,size,onClick}) {
  let scaling;
  if(size==="sm") scaling = "0.8";
  if(size==="md") scaling = "1.0";
  if(size==="lg") scaling = "1.2";
  return (
    <>
    <button style={{...styles,scale: scaling}}>{label}</button>
    </>
  )
}

Button.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    styles: PropTypes.object
}

export default Button