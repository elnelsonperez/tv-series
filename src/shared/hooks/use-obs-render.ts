import {Observable} from 'rxjs'
import {useEffect, useState} from "react";

export function useObsRender<T>(obs: Observable<T>, defaultVal: T) {
    const [value, setValue] = useState<T>(defaultVal)
    useEffect(() => {
        const subscription = obs.subscribe(setValue)
        return () => {
            // console.log('Obs unssubscribe')
            subscription.unsubscribe();
        }
    }, [obs])
    return value;
}
