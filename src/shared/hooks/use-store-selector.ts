import {useSelector} from "react-redux";
import {RootState} from 'GlobalTypes'

export function useStoreSelector<TSelected>(
    selector: (state: RootState) => TSelected,
    equalityFn?: (left: TSelected, right: TSelected) => boolean
): TSelected {
   return useSelector<RootState, TSelected>(selector, equalityFn);
}
