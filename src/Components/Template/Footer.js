import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
        <p style={{textAlign: 'center', fontWeight: 100}}>
            <span>본 웹사이트의 정보는 사실과 다를 수 있습니다</span>
            <span><a href="https://github.com/yatchacha/mbti" target="_blank" rel="noopener noreferrer">소스코드</a></span>
            <span><a href="http://api.yatchacha.com/docs" target="_blank" rel="noopener noreferrer">Open API</a></span>
            <span><a href="mailto:hyeonwoo5342@gmail.com" target="_blank" rel="noopener noreferrer">개인정보 처리 문의</a></span>
        </p>
    </div>
  );
};

export default Footer;