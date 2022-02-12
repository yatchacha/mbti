import React, { useState, useEffect } from 'react';
import TemplateHeader from './Template/Header.js';
import TemplateFooter from './Template/Footer.js';
import Mbti from './Mbti.js';
import MbtiUser from './MbtiUser.js';
import axios from 'axios';
import ReactTooltip from 'react-tooltip';
import '../Style/Home.css';

const Home = () => {

  const [users, setUsers] = useState(null);
  // const [titleName, setTitle]
  const mbtiPreset = [
    [ 'ISTJ', 'ISFJ', 'INFJ', 'INTJ' ],
    [ 'ISTP', 'ISFP', 'INFP', 'INTP' ],
    [ 'ESTP', 'ESFP', 'ENFP', 'ENTP' ],
    [ 'ESTJ', 'ESFJ', 'ENFJ', 'ENTJ' ]
  ];

  useEffect(() => {
    loadMbti(true);
  }, [])

  useEffect(() => {
    ReactTooltip.rebuild();
  });

  function loadMbti(isInit = false, twInfo = true) {
    const base_url = (twInfo) ? "https://api.yatchacha.com/mbti/user?allow_tw_info=true"
     : "https://api.yatchacha.com/mbti/user";
    
    axios
      .get(base_url)
      .then((Response)=>{
        if (Response.data.result === 'success') {
          setUsers(Response.data.data[0].data);
        }
      })
      .catch((Error) => {
        console.log(Error);
        if (isInit) loadMbti();
      });
  }
  const isMobile = /Mobi|Android/i.test(navigator.userAgent)
  
  return (
    <div className="totalWrapper">
      <TemplateHeader />
      {/* <button onClick={loadMbti}>Reload</button> */}
      <div className="wrapperOuter">
        {
          mbtiPreset.map((mbtiLine) => {
            return (
              <div className="mbtiWrapper">
                {
                  mbtiLine.map((mbtiEach) => {
                    return (
                      <Mbti mbti={mbtiEach}>
                        {users && users.map((user) => {
                          const userLogo = (user.twitch_info !== null) ? user.twitch_info.logo : 'https://img.favpng.com/18/1/17/twitch-computer-icons-logo-png-favpng-Gpj6D8W7NPubLhPvTbefsX9ym.jpg';
                          return (user.mbti === mbtiEach) && <MbtiUser userName={user.tw_name} userId={user.tw_id} userLogo={userLogo} key={user.id} />
                        })}
                      </Mbti>
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
      <ReactTooltip id="tooltipComp" globalEventOff={isMobile ? 'click' : undefined} />
      <TemplateFooter />
    </div>
  );
}

export default Home;
