/* Initial state is set to null */
export const initialState = null;

/* Reducer function helping in changing states on authentications */
export const reducer = (state, action) => {
    if (action.type === 'USER') {
        return action.payload;
    }
    return state;
}