//@ts-nocheck
import logo from '../../assets/logo.png';
import './SideBar.scss';
import { useState } from 'react';
import { ReactComponent as Chevron } from '../../assets/Chevron.svg';
import { ReactComponent as Home } from '../../assets/Home.svg';
import { ReactComponent as Megaphone } from '../../assets/Megaphone.svg';
import { ReactComponent as BoroadActivityFeed } from '../../assets/BoroadActivityFeed.svg';
import { ReactComponent as LinkIcon } from '../../assets/Link.svg';

import { ReactComponent as Mail } from '../../assets/Mail.svg';
import { ReactComponent as DatabaseArrowUp } from '../../assets/DatabaseArrowUp.svg';
import { ReactComponent as DesktopKeyboard } from '../../assets/DesktopKeyboard.svg';
import { ReactComponent as DesktopFlow } from '../../assets/DesktopFlow.svg';
import { ReactComponent as MyLocation } from '../../assets/MyLocation.svg';
import { ReactComponent as GlobePerson } from '../../assets/GlobePerson.svg';
import { ReactComponent as Settings } from '../../assets/Settings.svg';
import { ReactComponent as Permissions } from '../../assets/Permissions.svg';
import { ReactComponent as Help } from '../../assets/Help.svg';
import { ReactComponent as Logout } from '../../assets/Logout.svg';

import List from '@mui/material/List';
import { Link } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Drawer from '@mui/material/Drawer';

function SideBar() {
  const [state, setState] = useState({ Marketing: true });

  const handleClick = (item) => {
    setState({ [item]: !state[item] });
  };

  const menuItems = {
    data: [
      {
        name: 'Dashboard',
        url: '/dashboard',
        icon: <Home />,
      },
      {
        name: 'Marketing',
        icon: <Megaphone />,
        children: [
          {
            name: 'Create pages',
            url: '/create-pages',
            icon: <BoroadActivityFeed />,
          },
          {
            name: 'Edit links/pages',
            url: '/edit-links-pages',
            icon: <LinkIcon />,
          },
          {
            name: 'Email capture',
            url: '/email-capture',
            icon: <Mail />,
          },
          {
            name: 'Bulk uploader',
            url: '/bulk-uploader',
            icon: <DatabaseArrowUp />,
          },
          {
            name: 'Custom domains',
            url: '/custom-domains',
            icon: <DesktopKeyboard />,
            bold: true,
          },
          {
            name: 'Embeddable widgets',
            url: '/embeddable-widgets',
            icon: <DesktopFlow />,
          },
        ],
      },
      {
        name: 'Advertising',
        icon: <MyLocation />,
        children: [
          {
            name: 'Advertising 1',
            url: '/advertising-1',
            icon: <MyLocation />,
          },
          {
            name: 'Advertising 2',
            url: '/advertising-2',
            icon: <MyLocation />,
          },
        ],
      },
      {
        name: 'Audiences',
        icon: <GlobePerson />,
        children: [
          {
            name: 'Audiences 1',
            url: '/audiences-1',
            icon: <GlobePerson />,
          },
          {
            name: 'Audiences 2',
            url: '/audiences-2',
            icon: <GlobePerson />,
          },
        ],
      },
    ],
  };

  const serviceMenuItems = {
    data: [
      {
        name: 'Account settings',
        url: '/account-settings',
        icon: <Settings />,
      },
      {
        name: 'Permissions',
        url: '/permissions',
        icon: <Permissions />,
      },
      {
        name: 'Help',
        url: '/help',
        icon: <Help />,
      },
      {
        name: 'Logout',
        url: '/logout',
        icon: <Logout />,
      },
    ],
  };

  const handler = (children) => {
    return children.map((subOption) => {
      if (!subOption.children) {
        return (
          <div key={subOption.name}>
            <ListItem
              button
              key={subOption.name}
              className={`${state[subOption.name] && 'primary'} ${
                subOption.bold && 'bold'
              }`}
            >
              {subOption.icon}
              <Link to={subOption.url}>
                <ListItemText inset primary={subOption.name} />
              </Link>
            </ListItem>
          </div>
        );
      }
      return (
        <div key={subOption.name}>
          <ListItem
            button
            onClick={() => handleClick(subOption.name)}
            className={`${state[subOption.name] && 'primary'} ${
              subOption.bold && 'bold'
            }`}
          >
            {subOption.icon}
            <ListItemText inset primary={subOption.name} />
            {state[subOption.name] ? (
              <Chevron className="chevron down" />
            ) : (
              <Chevron className="chevron" />
            )}
          </ListItem>
          <Collapse in={state[subOption.name]} timeout="auto" unmountOnExit>
            {handler(subOption.children)}
          </Collapse>
        </div>
      );
    });
  };

  return (
    <div className="side-bar">
      <img className="logo" src={logo} alt="Site logo" />
      <button className="launch">
        quick launch
        <Chevron />
      </button>

      <div className="drawer-container">
        <Drawer variant="persistent" open hideBackdrop>
          <div>
            <List>{handler(menuItems.data)}</List>
          </div>
        </Drawer>
      </div>

      <div className="drawer-container bottom">
        <Drawer variant="persistent" open hideBackdrop>
          <div>
            <List>{handler(serviceMenuItems.data)}</List>
          </div>
        </Drawer>
      </div>
    </div>
  );
}

export { SideBar };
