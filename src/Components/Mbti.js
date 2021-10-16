import React from 'react';
// import { Link } from 'react-router-dom';

const Mbti = ({mbti, children}) => {
  const mbtiUrl = "https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-" + mbti;
  return (
    <div id={mbti} className="mbti">
      {/* <Link to={"/mbti/" + mbti} className="mbtiTitle">{mbti}</Link> */}
      <a href={mbtiUrl} className="mbtiTitle" target="_blank" rel="noopener noreferrer">{mbti}</a>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        { children }
      </div>
    </div>
  );
}

export default Mbti;