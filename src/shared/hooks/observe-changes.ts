import {useEffect} from "react";
import {Subject, Observable} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

export const useObserveChanges = <T extends {}> (value: T): Observable<T> => {
    const notifier = new Subject<T>();
    const unmount = new Subject();
    const obs = notifier.asObservable().pipe(takeUntil(unmount));
    useEffect(() => {
        notifier.next(value)
        // eslint-disable-next-line
    }, [value])
    useEffect(() => {
        return () => {
            unmount.next(undefined);
        }
        // eslint-disable-next-line
    }, [])
    return obs
}
