import {merge, keys, keyBy} from 'lodash'

export interface EntityState<T> {
    byId: {[id: number]: T},
    allIds: number[]
}

export const convertToEntityState = <T>(state: EntityState<T>, newData: T[], key:string ='id'):EntityState<T> => {
    const newDataById = keyBy(newData, key)
    const mergedById = merge(state.byId, newDataById)
    return {
        byId: mergedById,
        allIds: keys(mergedById).map(i => parseInt(i, 10))
    }
}
export const getDefaults = () => {
    return {byId: {}, allIds: []}
}
