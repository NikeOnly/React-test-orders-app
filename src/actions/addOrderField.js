import ActionTypes from './ActionTypes';

export default (payload) => {
    return {
        type: ActionTypes.ADD_FIELD,
        payload
    };
}
