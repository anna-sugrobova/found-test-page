import logo from '../../assets/logo.png';
import './SideBar.scss';
import { useState } from 'react';
import { ReactComponent as Chevron } from '../../assets/Chevron.svg';
import { ReactComponent as Home } from '../../assets/Home.svg';
import { ReactComponent as Megaphone } from '../../assets/Megaphone.svg';
import { ReactComponent as BroadActivityFeed } from '../../assets/BoroadActivityFeed.svg';
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
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Drawer from '@mui/material/Drawer';

function SideBar() {
  const [state, setState] = useState<{
    Marketing?: boolean;
    Advertising?: boolean;
  }>({ Marketing: true, Advertising: false });

  const handleClick = (item: string) => {
    setState({ [item]: !state[item as keyof typeof state] });
  };

  type MenuItem = {
    name: string;
    url: string;
    icon: JSX.Element;
    children?: MenuItem[];
    bold?: boolean;
  };

  const menuItems: { data: MenuItem[] } = {
    data: [
      {
        name: 'Dashboard',
        url: '/dashboard',
        icon: <Home className="dashboardIcon" />,
      },
      {
        name: 'Marketing',
        url: '/marketing',
        icon: <Megaphone className="megaphoneIcon" />,
        children: [
          {
            name: 'Create pages',
            url: '/create-pages',
            icon: <BroadActivityFeed className="broadActivityFeedIcon" />,
          },
          {
            name: 'Edit links/pages',
            url: '/edit-links-pages',
            icon: <LinkIcon className="linkIcon" />,
          },
          {
            name: 'Email capture',
            url: '/email-capture',
            icon: <Mail className="megaphoneIcon" />,
          },
          {
            name: 'Bulk uploader',
            url: '/bulk-uploader',
            icon: <DatabaseArrowUp className="databaseArrowUpIcon" />,
          },
          {
            name: 'Custom domains',
            url: '/custom-domains',
            icon: <DesktopKeyboard className="megaphoneIcon" />,
            bold: true,
          },
          {
            name: 'Embeddable widgets',
            url: '/embeddable-widgets',
            icon: <DesktopFlow className="megaphoneIcon" />,
          },
        ],
      },
      {
        name: 'Advertising',
        url: '/advertising',
        icon: <MyLocation className="advertisingIcon" />,
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
        url: '/audiences',
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

  const serviceMenuItems: { data: MenuItem[] } = {
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

  const handler = (children: MenuItem[]) => {
    return children.map((subOption) => {
      if (!subOption?.children) {
        return (
          <div key={subOption.name}>
            <ListItemButton
              key={subOption.name}
              className={`${
                state[subOption.name as keyof typeof state] && 'primary'
              } ${subOption.bold && 'bold'}`}
            >
              {subOption.icon}
              <Link to={subOption.url}>
                <ListItemText inset primary={subOption.name} />
              </Link>
            </ListItemButton>
          </div>
        );
      }
      return (
        <div key={subOption.name}>
          <ListItemButton
            onClick={() => handleClick(subOption.name)}
            className={`${
              state[subOption.name as keyof typeof state] && 'primary'
            } ${subOption.bold && 'bold'}`}
          >
            {subOption.icon}
            <ListItemText inset primary={subOption.name} />
            {state[subOption.name as keyof typeof state] ? (
              <Chevron className="chevron down" />
            ) : (
              <Chevron className="chevron" />
            )}
          </ListItemButton>
          <Collapse
            in={state[subOption.name as keyof typeof state]}
            timeout="auto"
            unmountOnExit
          >
            {handler(subOption.children)}
          </Collapse>
        </div>
      );
    });
  };

  return (
    <div className="sideBar">
      <img className="logo" src={logo} alt="Site logo" />
      <button className="launch">
        quick launch
        <Chevron />
      </button>

      <div className="drawerContainer">
        <Drawer variant="persistent" open hideBackdrop>
          <div>
            <List>{handler(menuItems.data)}</List>
          </div>
        </Drawer>
      </div>

      <div className="drawerContainerBottom">
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
