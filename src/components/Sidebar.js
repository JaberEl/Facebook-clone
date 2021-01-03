import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import GroupIcon from '@material-ui/icons/Group';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded';
import EventAvailableRoundedIcon from '@material-ui/icons/EventAvailableRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';

function Sidebar() {
  return (
    <div>
      <SidebarRow
        src="https://cdn.dribbble.com/users/4188520/avatars/normal/9900dca40da904199c378fc64ed92c87.jpg?1580805196"
        title="Jaber EL FERKH"
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={SupervisedUserCircleRoundedIcon} title="Groups" />
      <SidebarRow Icon={GroupIcon} title="Friends" />
      <SidebarRow Icon={EqualizerIcon} title="Ads Manager" />
      <SidebarRow Icon={EventAvailableRoundedIcon} title="Events" />
      <SidebarRow Icon={StarRoundedIcon} title="Favourites" />
      <SidebarRow Icon={ArrowDropDownRoundedIcon} title="More" />
    </div>
  );
}

export default Sidebar;
