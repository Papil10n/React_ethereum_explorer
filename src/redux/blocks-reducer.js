//imports
import {blockAPI} from "../api/api";

// action
const SET_LAST_BLOCK_NUM = 'eth-explorer/block/SET_LAST_BLOCK_NUM';
const SET_LOADING_MODE = 'eth-explorer/block/SET_LOADING_MODE';
const SET_ERROR = 'eth-explorer/block/SET_ERROR';
const SHOW_TRANSACTIONS = 'eth-explorer/block/SHOW_TRANSACTIONS';
const RESET_BLOCKS = 'eth-explorer/block/RESET_BLOCKS';
const HIDE_TRANSACTIONS = 'eth-explorer/block/HIDE_TRANSACTIONS';
const SET_ALL_BLOCKS = 'eth-explorer/block/SET_ALL_BLOCKS';
const SET_BLOCK_NUMBER = 'eth-explorer/block/SET_BLOCK_NUMBER';
const SET_BLOCK = 'eth-explorer/block/SET_BLOCK';

// initial state
let initialState = {
    blocks: [],
    lastBlockNum: null,
    isLoading: false,
    isError: false,
    isTransactionsShowing: false,
    blockNumberToTransactions: null,
    blockNumberToInfo: null,
}

// reducer
const blocksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LAST_BLOCK_NUM:
            return {...state, lastBlockNum: action.number}
        case SET_ALL_BLOCKS:
            return {...state, blocks: [...action.blocks]}
        case SET_LOADING_MODE:
            return {...state, isLoading: action.mode}
        case SET_ERROR:
            return {...state, isError: action.mode,}
        case SHOW_TRANSACTIONS:
            return {...state, isTransactionsShowing: action.mode, blockNumberToTransactions: action.number}
        case HIDE_TRANSACTIONS:
            return {...state, isTransactionsShowing: action.mode}
        case SET_BLOCK_NUMBER:
            return {...state, blockNumberToInfo: action.number}
        case SET_BLOCK:
            return {...state, blocks: [action.block]}
        case RESET_BLOCKS:
            return {...state, blocks: []}
        default:
            return state;
    }
}

// action creator
export const setLastBlockNum = (number) => ({type: SET_LAST_BLOCK_NUM, number});
export const setAllBlock = (blocks) => ({type: SET_ALL_BLOCKS, blocks});
export const setBlock = (block) => ({type: SET_BLOCK, block});
export const setLoadingMode = (mode) => ({type: SET_LOADING_MODE, mode});
export const setError = (mode) => ({type: SET_ERROR, mode});
export const showTransactions = (mode, number) => ({type: SHOW_TRANSACTIONS, mode, number});
export const hideTransactions = (mode) => ({type: HIDE_TRANSACTIONS, mode});
export const resetBlocks = () => ({type: RESET_BLOCKS});
export const setBlockNumber = (number) => ({type: SET_BLOCK_NUMBER, number});

// thunk creator
export const getBlocks = (BlockNumber) => async (dispatch) => {
    dispatch(setLoadingMode(true));

    let response = await blockAPI.getBlockInfo(BlockNumber);
    response ? dispatch(setLastBlockNum(response.number)) : dispatch(setError(true));

    const allBlocks = [];
    for (let i = response.number - 6; i < response.number; i++) {
        let response = await blockAPI.getBlockInfo(i);
        allBlocks.push(response);
    }

    dispatch(setAllBlock(allBlocks));
    dispatch(setLoadingMode(false));
}

export const getBlockInfo = (BlockNumber) => async (dispatch) => {
    let response = await blockAPI.getBlockInfo(BlockNumber);
    dispatch(setBlock(response));
}

// export
export default blocksReducer;