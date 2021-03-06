import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import MbtiUser from './MbtiUser';
import moment from 'moment';
import ReactTooltip from 'react-tooltip';

const User = ({match}) => {
  const param = match.params;
  const userId = param.name;
  const url = "http://api.yatchacha.com/mbti/user?allow_tw_info=true&tw_id=" + userId;
  const [isUserSet, setUserSet] = useState(0);
  const [user, setUser] = useState({});
  const [sameMbti, setSameMbti] = useState({});
  const [sameMbtiNum, setSameMbtiNum] = useState(0);
  const [twInfo, setTwInfo] = useState({});
  const titleStyle = {
    fontSize: '24px',
    display: 'flex',
    alignItems: 'center'
  };

  useEffect(() => {
    loadUserData(true);
  }, [param])

  useEffect(() => {
    ReactTooltip.rebuild();
  });

  function loadUserData(isInit = false) {
    let userMbti = '';

    // BASIC INIT
    axios
      .get(url)
      .then((Response)=>{
        if (Response.data.result === 'success') {
          if (Response.data.data[0].rows !== 0 &&
            Response.data.data[0].data[0].twitch_info !== null) {
              setUser(Response.data.data[0].data[0]);
              setTwInfo(Response.data.data[0].data[0].twitch_info);
              setUserSet(1);
              userMbti = Response.data.data[0].data[0].mbti;
          } else {
            setUserSet(-1);
          }
        } else {
          setUserSet(-1);
        }
      })
      .catch((Error) => {
        console.log(Error);
        if (isInit) loadUserData();
      })
      .then(() => {
        // Same MBTI
        const sameUrl = "http://api.yatchacha.com/mbti/user?allow_tw_info=true&mbti=" + userMbti;
        axios
          .get(sameUrl)
          .then((Response)=>{
            if (Response.data.result === 'success') {
              setSameMbti(Response.data.data[0].data);
              setSameMbtiNum(Response.data.data[0].rows - 1);
            }
          })
          .catch((Error) => {
            console.log(Error);
          });
      })
  }
  const isMobile = /Mobi|Android/i.test(navigator.userAgent)

  if (isUserSet === -1) {
    return (
      <p className="jua">
        ??????! ????????? ?????? ??? ?????????!<br /><br />
        <Link to="/" style={{fontSize: '14px'}}>??? ????????????</Link>
      </p>
    );
  } else if (isUserSet === 0) {
    return (
      <p className="jua">?????? ???...</p>
    );
  } else {
    return (
      <>
        <div className="totalWrapper">
          <div style={{marginTop: '20px', textAlign: 'left', display: 'flex', justifyContent:'space-between'}}>
            <Link className="noto" style={{fontSize: '14px', fontWeight: 500, marginLeft: '10px'}} to="/"><i className="fas fa-chevron-left"></i> ???</Link>
            <span style={titleStyle}>
              {user.tw_name}
              <a href={"https://twitch.tv/" + user.tw_id} target="_blank" rel="noopener noreferrer" style={{marginLeft: '10px', fontSize: '12px'}}>
                <i className="fas fa-external-link-alt"></i>
              </a>
            </span>
            <span className="noto" style={{visibility: 'hidden'}}><i className="fas fa-chevron-left"></i> ???</span>
          </div>
          <div>
            <p style={{margin: '10px'}}>{twInfo.bio}</p>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
              <img src={twInfo.logo} alt="??????" className="logo" style={{width: '200px'}} />
              <div>
                <span style={{fontSize: '30px'}}>{user.mbti}</span><br /><br />
                <div style={{lineHeight: '15px'}}>
                  <span style={{fontSize: '12px'}}>?????? ?????????</span><br />
                  <span style={{fontSize: '15px'}}>{moment(twInfo.created_at).format('YYYY-MM-DD hh:mm:ss')}</span>
                </div>
                {/* <span>?????? ????????? : 2021-12-21</span> */}
              </div>
            </div>
            <div style={{marginTop: '40px'}}>
              <p>??? ?????? {user.mbti}??? ????????????????</p>
              <div>
                {/* {sameMbti[0].tw_id} */}
                {sameMbtiNum ? sameMbti.map((user) => {
                  if (userId === user.tw_id) { return ''; }
                  const userLogo = (user.twitch_info !== null) ? user.twitch_info.logo : 'https://img.favpng.com/18/1/17/twitch-computer-icons-logo-png-favpng-Gpj6D8W7NPubLhPvTbefsX9ym.jpg';
                  return <MbtiUser userName={user.tw_name} userId={user.tw_id} userLogo={userLogo} key={user.id} />
                }) : <p style={{fontSize: '12px'}}>???????????? ?????? {user.mbti}??? ?????? ????????? ????????? ??????</p>}
              </div>
            </div>
          </div>
          <ReactTooltip id="tooltipComp" globalEventOff={isMobile ? 'click' : undefined} />
        </div>
      </>
    );
  }


}

export default User;