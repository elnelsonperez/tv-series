import * as React from "react";
import {PropsWithChildren, ChangeEvent, useRef} from "react";
import {Observable, of} from 'rxjs';
import {debounceTime, switchMap, map, publishReplay, refCount} from 'rxjs/operators';
import {InputGroup} from "@blueprintjs/core";
import {getSearchResults} from "../api";
import {ResourceEndpoint} from "../../../shared/api/enums";
import {useObsRender} from "../../../shared/hooks/use-obs-render";
import {useEventAsObs} from "../../../shared/hooks/use-event-as-observable";

interface Props<V> {
    children: (state: V[]) => React.ReactNode,
    endpoint: ResourceEndpoint,
}

const GenericSearchComponent = <ResourceType extends {}>(props: PropsWithChildren<Props<ResourceType>>) => {

    const [searchTextCallback, searchTextObs$] = useEventAsObs<string>('');

    const list$: Observable<ResourceType[]> = useRef(searchTextObs$.pipe(
        debounceTime(300),
        switchMap(text => {
            if (text !== "") {
                return getSearchResults<ResourceType>(text, props.endpoint);
            }
            return of([])
        }),
        publishReplay(1),
        refCount()
    )).current;

    const count = useObsRender(list$.pipe(
        map(l => l.length)
    ), 0)

    return (
        <div className='search-wrapper'>
            <InputGroup leftIcon={'search'} placeholder='Type here to search' onInput={(e: ChangeEvent<HTMLInputElement>) => searchTextCallback(e.target.value)} />
            {count > 0 && <div style={{marginTop: 10, marginBottom: 10}}>
                {count} Results
            </div>}
            {props.children(useObsRender(list$, []))}
        </div>
    )
}

export default GenericSearchComponent
export {GenericSearchComponent};
