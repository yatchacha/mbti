import React from 'react';

const Mbti = ({mbti, users}) => {
  return (
    <div id={mbti} className="mbti">
      <span className="mbti-title">{mbti}</span>
      
    </div>
  );
}

export default Mbti;