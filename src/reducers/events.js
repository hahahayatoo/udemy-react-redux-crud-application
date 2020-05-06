import _ from "lodash";
import { READ_EVENTS } from "../actions";

// この reducer が実際の状態を持っている
export default ( events = {}, action ) => {
    switch ( action.type ) {
        case READ_EVENTS:
            // console.log(_.mapKeys(action.response.data, 'id'))
            return _.mapKeys(action.response.data, 'id')
    
        default:
            return events
    }
    
}