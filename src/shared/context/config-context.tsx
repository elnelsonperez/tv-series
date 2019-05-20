import React from "react";
import * as Models from "Models";
import {RootState} from 'MyTypes'
import {connect} from "react-redux";

export const ConfigContext = React.createContext<Models.Configuration | null>(null);

export const withConfigContext = <BaseProps extends {}>(_BaseComponent: React.ComponentType<BaseProps>) => {

    const BaseComponent = _BaseComponent as React.ComponentType<{}>;

    const mapStateToProps = (state: RootState) => ({
        configuration: state.configuration.data
    });
    // Removes InjectedProps from the wrapped component props to obtain the HoC props
    type HocProps = ReturnType<typeof mapStateToProps>

    const WrapperComponent: React.FC<HocProps> = (props) => {
        return (
            <ConfigContext.Provider value={props.configuration}>
                <BaseComponent {...props} />
            </ConfigContext.Provider>
        );
    }

    return connect(mapStateToProps)(WrapperComponent);
}

