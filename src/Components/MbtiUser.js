import React from 'react';
import { Link } from 'react-router-dom';

const MbtiUser = ({userName, userId, userLogo}) => {
  const link = "/user/" + userId;
  const logoStyle = {
    width: '26px',
    margin: '1px',
    borderRadius: '24px'
  }

  return (
    <>
      <Link to={link}>
        <img data-for="tooltipComp" data-tip={userName} data-type="info" style={logoStyle} src={userLogo} alt={userName} />
      </Link>
    </>
  )
}

export default MbtiUser;