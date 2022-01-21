import { FILL_DATA } from './actions'

export const initialState={
    userdata:[]
}
export let reducer=(state = initialState, action) => {
    switch (action.type) {
        case FILL_DATA:
            return {...state,userdata:action.payload}
        default :
            return state;
    }
}