import * as React from "react";
import {GenericSearchComponent} from "./GenericSearchComponent";
import {TvListObject} from "Models";
import {ResourceType} from "../../../shared/api/enums";
import {TvListComponent} from "../../tv/tv-list/components/tv-list-component/TvListComponent";

const TvSearchCompontent: React.FC = (props) => {
    return (
        <GenericSearchComponent<TvListObject> endpoint={ResourceType.TV}>
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
