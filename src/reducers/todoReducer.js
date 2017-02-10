const handlers = {

};

export function todoReducer(state = {}, action) {
    const handler = handlers[action.type];
    return handler ? handler(state, action) : state;
}

export default todoReducer;