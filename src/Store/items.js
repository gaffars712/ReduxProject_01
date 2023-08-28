import { createSlice } from "@reduxjs/toolkit"


const STATES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading '
})

const items = createSlice({
    name: 'item',
    initialState: {
        data: [],
        status: STATES.IDLE

    },
    reducers: {
        SETitems(state, action) {
            state.data = action.payload

        },
        setStatus(state, action) {
            state.data = action.payload

        },

    }
});
export const { SETitems, setStatus } = items.actions;
export default items.reducer;

export function fetchitems() {
    return async function fetchitemthung(dispatch, getstate) {
        dispatch(setStatus(STATES.LOADING))
        try {
            const res = await fetch(`https://fakestoreapi.com/products`)
            const Data = await res.json()
            dispatch(SETitems(Data))
            dispatch(setStatus(STATES.IDLE))

        } catch (err) {
            console.log(err);

            dispatch(setStatus(STATES.ERROR))

        }

    }
}