import ActionTypes from './ActionTypes';

export default (payload) => {
    return {
        type: ActionTypes.SAVE_FIELD,
        payload
    };
}
