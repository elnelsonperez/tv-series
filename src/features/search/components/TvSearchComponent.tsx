import * as React from "react";
import {GenericSearchComponent} from "./GenericSearchComponent";

import {ResourceEndpoint} from "../../../shared/api/enums";
import {TvListComponent} from "../../tv/tv-list/components/tv-list-component/TvListComponent";
import {TvListObject} from "../../tv/models";

const TvSearchCompontent: React.FC = (props) => {
    return (
        <GenericSearchComponent<TvListObject> endpoint={ResourceEndpoint.TV}>
            { (tvList) => <TvListComponent tvList={tvList} /> }
        </GenericSearchComponent>
    );
}

export default TvSearchCompontent;
export {TvSearchCompontent};
