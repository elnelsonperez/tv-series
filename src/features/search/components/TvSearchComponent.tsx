import * as React from "react";
import {GenericSearchComponent} from "./GenericSearchComponent";
import {TvListObject} from "Models";
import {SearchEndpoints} from "../../../shared/api/enums";
import {TvListComponent} from "../../tv-list/components/tv-list-component/TvListComponent";

const TvSearchCompontent: React.FC = (props) => {
    return (
        <GenericSearchComponent<TvListObject> endpoint={SearchEndpoints.TV}>
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
