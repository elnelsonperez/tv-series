import React, { FC } from 'react';

import './Main.scss';
import {Navbar, Alignment, Button} from "@blueprintjs/core";

const Main: FC = ({ children }) => (
  <div className="main-layout">
    <div className="header">
      <Navbar className="bp3-dark">
        <Navbar.Group align={Alignment.LEFT} >
          <Navbar.Heading>TV Series</Navbar.Heading>
          <Navbar.Divider />
          <Button className="bp3-minimal" icon="home" text="Home" />
        </Navbar.Group>
      </Navbar>
    </div>
    <div className="body">
      {children}
    </div>
  </div>
);

export default Main;
