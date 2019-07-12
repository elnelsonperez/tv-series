import React from "react";
import {Configuration} from "../../features/configuration/models";

export const ConfigContext = React.createContext<Configuration | null>(null);
