import React from 'react'

const Header = ({Title,Subtitle}:any) => {
  return (
    <div>
    <div>{Title}</div>
    <div>{Subtitle}</div>
    </div>
  )
}

export default Header