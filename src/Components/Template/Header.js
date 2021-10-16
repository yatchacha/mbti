import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const titleStyle = {
    fontSize: '24px',
    display: 'flex',
    alignItems: 'center'
  };
  
  return (
    <div className="headerWrapper">      
      <span className="hederTitle" style={titleStyle}>
        <Link to="/">달차네 칭구칭긔 MBTI</Link>
        {/* <i className="headerTitleBtn fas fa-question-circle" data-toggle="tooltip" data-placement="bottom" title="MBTI를 누르면 16 Personalities 사이트로, 닉네임을 누르면 트위치 사이트로 이동합니다!"></i> */}
      </span>
    </div>
  );
};

export default Header;