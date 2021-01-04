import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AddIcon from '@material-ui/icons/Add';
import QuestionAnswerRoundedIcon from '@material-ui/icons/QuestionAnswerRounded';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import { Avatar, IconButton } from '@material-ui/core';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://vtpkb4cbz742mpwjg43ich01-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/Facebook-Logo.png"
          alt=""
        />

        <div className="header__input">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>

      <div className="header__middle">
        <div className="header__option header__option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <EmojiFlagsIcon fontSize="large" />
        </div>
        <div className="header__option">
          <OndemandVideoIcon fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <Avatar />
          <h4>Jaber</h4>
        </div>

        <IconButton>
          <AddIcon />
        </IconButton>

        <IconButton>
          <QuestionAnswerRoundedIcon />
        </IconButton>

        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>

        <IconButton>
          <ArrowDropDownRoundedIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
