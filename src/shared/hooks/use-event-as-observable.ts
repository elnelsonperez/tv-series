import {Observable, BehaviorSubject} from 'rxjs'
import {useRef} from "react";

export function useEventAsObs<T>(initialValue: T): [(v: T) => void, Observable<T>] {

    const emitterRef = useRef(new BehaviorSubject<T>(initialValue));
    const obsRef = useRef(emitterRef.current.asObservable());

    const callback = useRef((value : T) => {
        emitterRef.current.next(value)
    })

    return [callback.current, obsRef.current]

}
