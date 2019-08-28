import React from 'react';
import MainLayout from '../layouts/Main';
import {Button} from "@blueprintjs/core";
import {Link} from "react-router-dom";
import {getPath} from "../router-paths";

export default () => {

    return (
        <MainLayout>
            <div style={{textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "space-around", height: '50vh'}}>

                <div>
                    <div>
                        <h1>Movies and TV Shows Database</h1>
                        <h4 style={{color: '#4262b0'}}>A project to practice using React Hooks, Redux, Redux-Observables and React with Typescript</h4>
                    </div>
                    <div style={{textAlign:"center", marginBottom: 20}}>
                        <Link style={{textDecoration: 'none', color: "inherit"}} to={getPath('movies')}>
                            <Button intent={"success"} style={{marginRight: 10}}>Browse Movies</Button>
                        </Link>
                        <Link style={{textDecoration: 'none', color: "inherit"}} to={getPath('tvShows')}>
                            <Button intent={"primary"}>Browse TV Shows</Button>
                        </Link>
                    </div>

                </div>
                <div>
                    <a href={'https://github.com/elnelsonperez/tv-series'}>
                        <i style={{color: '#5e6367'}} className={'fab fa-github fa-4x'} />
                    </a> <br/>
                    <small>Source Code</small>

                </div>
            </div>
        </MainLayout>
    );
}

