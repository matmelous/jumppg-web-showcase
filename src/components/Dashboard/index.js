/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import {
  Wrapper,
  Sidebar,
  Content,
  Footer,
  Close,
  Open,
  SidebarWrapper,
} from './styles';
import logo from '../../assets/logo-white.png';

import AppsIcon from '@material-ui/icons/Apps';

const Dashboard = ({ sidebarChildren, children }) => {
  const [sidebar, setSidebar] = React.useState(true);
  const sidebarClass = sidebar ? 'open' : 'closed';

  const handleClick = () => {
    setSidebar(!sidebar);
  };

  const showSidebar = () => {
    return (
      <SidebarWrapper>
        {sidebarChildren}
        <Footer>
          <img src={logo} alt="logo" />
        </Footer>
      </SidebarWrapper>
    );
  };

  return (
    <Wrapper>
      <Sidebar className={sidebarClass}>
        {sidebar ? (
          showSidebar()
        ) : (
          <Open>
            <AppsIcon onClick={handleClick} />
          </Open>
        )}
      </Sidebar>
      <Content>{children}</Content>
      <Close className={sidebarClass} onClick={handleClick} />
    </Wrapper>
  );
};

export default Dashboard;
