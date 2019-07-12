import * as React from "react";
import {GenericSearchComponent} from "./GenericSearchComponent";

import {ResourceType} from "../../../shared/api/enums";
import {TvListComponent} from "../../tv/tv-list/components/tv-list-component/TvListComponent";
import {ListObject} from "../../tv/models";

const TvSearchCompontent: React.FC = (props) => {
    return (
        <GenericSearchComponent<ListObject> endpoint={ResourceType.TV}>
            { (tvList) => <div>
                <ul>
                    <TvListComponent tvList={tvList} />
                </ul>
            </div>}
        </GenericSearchComponent>
    );
}

export default TvSearchCompontent;
export {TvSearchCompontent};
