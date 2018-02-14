import ActionTypes from '../actions/ActionTypes';

export default function (state = [], action) {
    const { type, payload } = action;

    switch (type) {
        case ActionTypes.ADD_FIELD:
            return [...state, payload];
        case ActionTypes.SAVE_FIELD:
            return state.map(item => {
                if (item.id === payload.id) {
                    return payload;
                }

                return item;
            });
        default:
            return state;
    }
}
