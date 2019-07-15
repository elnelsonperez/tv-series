import * as React from "react";
import {PropsWithChildren, ChangeEvent, useRef} from "react";
import {Observable, of} from 'rxjs';
import {debounceTime, tap, switchMap, map, publishReplay, refCount} from 'rxjs/operators';
import {InputGroup} from "@blueprintjs/core";
import {getSearchResults} from "../api";
import {ResourceType} from "../../../shared/api/enums";
import {useObsRender} from "../../../shared/hooks/use-obs-render";
import {useEventAsObs} from "../../../shared/hooks/use-event-as-observable";

interface Props<V> {
    children: (state: V[]) => React.ReactNode,
    endpoint: ResourceType,

}

const GenericSearchComponent = <ReturnType extends {}>(props: PropsWithChildren<Props<ReturnType>>) => {

    const [searchTextCallback, searchTextObs$] = useEventAsObs<string>('');

    const list$: Observable<ReturnType[]> = useRef(searchTextObs$.pipe(
        debounceTime(300),
        switchMap(text => {
            if (text !== "") {
                return getSearchResults<ReturnType>(text, props.endpoint);
            }
            return of([])
        }),
        tap(l => console.log('List value fetched', l)),
        publishReplay(1),
        refCount()
    )).current;

    const count  = useObsRender(list$.pipe(
        map(l => l.length)
    ), 0)

    return (
        <div className='search-wrapper'>
            <InputGroup leftIcon={'search'} placeholder='Type here to search' onInput={(e: ChangeEvent<HTMLInputElement>) => searchTextCallback(e.target.value)} />
            {props.children(useObsRender(list$, []))}

            {count > 0 && <div>
                {count} Results
            </div>}

        </div>
    )
}

export default GenericSearchComponent
export {GenericSearchComponent};

// const [inputCallback, value] = useEventCallback(
//     (event$: Observable<ChangeEvent<HTMLInputElement>>) =>
//         event$.pipe(
//             tap((e) => e.persist()),
//             debounceTime(300),
//             map(event => event.target.value)
//         ),
//     '1 empty'
// )
//
// const [inputCallback2, value2] = useEventCallback(
//     (event$: Observable<ChangeEvent<HTMLInputElement>>) =>
//         event$.pipe(
//             tap((e) => e.persist()),
//             debounceTime(300),
//             map(event => event.target.value)
//         ),
//     '2 empty'
// )
//
// const testing = useObservable<string, [string, string]>((inputs$) => inputs$.pipe(
//     map(([v1, v2]) => v1+v2)
// ), 'Nothing', [value, value2])
