import React from 'react';

const MbtiPage = ({match}) => {
  const param = match.params;
  return (
    <p>MbtiPage {param.mbti}</p>
  )
}

export default MbtiPage;