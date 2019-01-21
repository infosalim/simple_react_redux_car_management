

export default function(state = {}, action){
    switch(action.type){
        case 'SEARCH_CARS':
            return {...state,list:action.payload, color: false}
        case 'CAR_DETAIL':
            return {...state,detail:action.payload, color: true}
        default:
            return state
    }
}