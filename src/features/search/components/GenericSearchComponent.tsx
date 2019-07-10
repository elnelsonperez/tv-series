import * as React from "react";
import { PropsWithChildren, ChangeEvent} from "react";
import {Observable, of} from 'rxjs';
import {debounceTime, tap, switchMap, map} from 'rxjs/operators';
import {InputGroup} from "@blueprintjs/core";
import {getSearchResults} from "../api";
import {SearchType} from "../../../shared/api/enums";
import {useEventCallback} from "rxjs-hooks";

interface Props<V> {
    children: (state: V[]) => React.ReactNode,
    searchType: SearchType
}

const GenericSearchComponent = <ReturnType extends {}>(props: PropsWithChildren<Props<ReturnType>>) => {
    const [inputCallback, list] = useEventCallback(
        (event$: Observable<ChangeEvent<HTMLInputElement>>) =>
            event$.pipe(
                tap((e) => e.persist()),
                debounceTime(300),
                map(event => event.target.value),
                switchMap(text => {
                    if (text !== "") {
                        return getSearchResults<ReturnType>(text, props.searchType);
                    }
                    return of([])
                })
            ),
        []
    )

    return (
        <div className='search-wrapper'>
            <InputGroup leftIcon={'search'} placeholder='Type here to search' onInput={inputCallback} />
            {props.children(list)}
        </div>
    )
}

export default GenericSearchComponent
export {GenericSearchComponent};
