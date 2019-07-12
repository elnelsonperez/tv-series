import React, {FC} from 'react';

import './Main.scss';
import {Navbar, Alignment, Button} from "@blueprintjs/core";
import {Link} from "react-router-dom";
import {getPath} from "../router-paths";

const Main: FC = ({ children }) =>  {
    return (
        <div className="main-layout">
            <div className="header">
                <Navbar className="bp3-dark">
                    <Navbar.Group align={Alignment.LEFT} >
                        <Navbar.Heading>TV Series</Navbar.Heading>
                        <Navbar.Divider />
                        <Link to={getPath('home')}><Button className="bp3-minimal" icon="home" text="Home" /></Link>
                    </Navbar.Group>
                </Navbar>
            </div>
            <div className="body">
                {children}
            </div>
        </div>
    )
};

export default Main;
