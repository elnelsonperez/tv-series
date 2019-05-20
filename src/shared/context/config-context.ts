import React from "react";
import * as Models from "Models";

const ConfigContext = React.createContext<Models.Configuration | null>(null);
export default ConfigContext;
