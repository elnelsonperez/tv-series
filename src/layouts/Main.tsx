import React, {FC, useEffect} from 'react';

import './Main.scss';
import {Navbar, Alignment, Button} from "@blueprintjs/core";
import {Link} from "react-router-dom";
import {getPath} from "../router-paths";
import {fetchConfigurationAction} from "../features/configuration/actions";
import {fetchMovieGenresAction, fetchTvGenresAction} from "../features/genres/actions";
import {useDispatch} from "react-redux";

const Main: FC = ({ children }) =>  {
    const dispatch = useDispatch()

    useEffect(() => {
        //Every component needs this
        dispatch(fetchConfigurationAction.request())
        dispatch(fetchTvGenresAction.request())
        dispatch(fetchMovieGenresAction.request())
    }, [dispatch])

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
