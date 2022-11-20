//imports

// action
const SET_CURRENT_PAGE = "eth-explorer/transactions/SET_CURRENT_PAGE";
const SET_PORTION = "eth-explorer/transactions/SET_PORTION";
const RESET_PORTION = "eth-explorer/transactions/RESET_PORTION";

// initial state
let initialState = {
    currentPage: 1,
    transactionPortion: null
}

// reducer
const transactionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.page}
        case SET_PORTION:
            return {...state, transactionPortion: [...action.portion]}
        case RESET_PORTION:
            return {...state, transactionPortion: null, currentPage: 1}
        default:
            return state;
    }
}

// action creator
export const setPortion = (portion) => ({type: SET_PORTION, portion});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const resetPortion = () => ({type: RESET_PORTION});


// thunk creator



// export
export default transactionsReducer;