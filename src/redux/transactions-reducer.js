//imports

// action
const SET_CURRENT_PAGE = "eth-explorer/transactions/SET_CURRENT_PAGE";

// initial state
let initialState = {
    currentPage: 1

}

// reducer
const transactionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.page}
        default:
            return state;
    }
}

// action creator
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});


// thunk creator



// export
export default transactionsReducer;