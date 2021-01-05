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
import { useStateValue } from '../StateProvider';

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <SidebarRow
        src={user.photoURL}
        title={user.displayName}
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
