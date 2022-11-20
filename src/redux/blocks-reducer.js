//imports
import {blockAPI} from "../api/api";

// action
const SET_LAST_BLOCK_NUM = 'eth-explorer/block/SET_LAST_BLOCK_NUM';
const ADD_BLOCK = 'eth-explorer/block/ADD_BLOCK';
const SET_LOADING_MODE = 'eth-explorer/block/SET_LOADING_MODE';
const SET_ERROR = 'eth-explorer/block/SET_ERROR';
const SHOW_TRANSACTIONS = 'eth-explorer/block/SHOW_TRANSACTIONS';
const RESET_BLOCKS = 'eth-explorer/block/RESET_BLOCKS';

// initial state
let initialState = {
    blocks: [],
    lastBlockNum: null,
    isLoading: false,
    isError: false,
    isTransactionsShowing: false,
    blockNumber: null,
}

// reducer
const blocksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LAST_BLOCK_NUM:
            return {...state, lastBlockNum: action.number}
        case ADD_BLOCK:
            return {...state, blocks: [...state.blocks, action.block]}
        case SET_LOADING_MODE:
            return {...state, isLoading: action.mode}
        case SET_ERROR:
            return {...state, isError: action.mode,}
        case SHOW_TRANSACTIONS:
            return {...state, isTransactionsShowing: action.mode, blockNumber: action.number}
        case RESET_BLOCKS:
            return {...state, blocks: []}
        default:
            return state;
    }
}

// action creator
export const setLastBlockNum = (number) => ({type: SET_LAST_BLOCK_NUM, number});
export const addBlock = (block) => ({type: ADD_BLOCK, block});
export const setLoadingMode = (mode) => ({type: SET_LOADING_MODE, mode});
export const setError = (mode) => ({type: SET_ERROR, mode});
export const showTransactions = (mode, number) => ({type: SHOW_TRANSACTIONS, mode, number});
export const resetBlocks = () => ({type: RESET_BLOCKS});

// thunk creator
export const getBlockInfo = (BlockNumber) => async (dispatch) => {
    dispatch(setLoadingMode(true));

    let response = await blockAPI.getBlockInfo(BlockNumber);
    response ? dispatch(setLastBlockNum(response.number)) : dispatch(setError(true));

    for (let i = response.number - 6; i < response.number; i++) {
        let response = await blockAPI.getBlockInfo(i);
        dispatch(addBlock(response));
    }

    dispatch(setLoadingMode(false));
}


// export
export default blocksReducer;