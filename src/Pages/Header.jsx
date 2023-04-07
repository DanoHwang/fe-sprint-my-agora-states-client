import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__top">
        <a
          href="https://urclass.codestates.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="logo"
            src="../../images/logo.png"
            alt="유어클래스 로고 이미지"
          />
        </a>
        <div className="header__menu">
          <a
            href="https://www.notion.so/codestates/SEB-FE-44-Students-e3463fd9bdba4b05998bbab2b3076f1c"
            target="_blank"
            rel="noopener noreferrer"
          >
            SEB 44 Notion Page
          </a>
          <a
            href="https://github.com/DanoHwang/fe-sprint-my-agora-states"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
        <button className="discussion__question-button">질문하기</button>
      </div>
    </header>
  );
};

export default Header;
