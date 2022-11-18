//imports
import {blockAPI} from "../api/api";

// action
const SET_LAST_BLOCK_NUM = 'eth-explorer/block/SET_LAST_BLOCK_NUM';
const ADD_BLOCK = 'eth-explorer/block/ADD_BLOCK';
const SET_LOADING_MODE = 'eth-explorer/block/SET_LOADING_MODE';

// initial state
let initialState = {
    blocks: [],
    lastBlockNum: null,
    isLoading: false,
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
        default:
            return state;
    }
}

// action creator
export const setLastBlockNum = (number) => ({type: SET_LAST_BLOCK_NUM, number});
export const addBlock = (block) => ({type: ADD_BLOCK, block});
export const setLoadingMode = (mode) => ({type: SET_LOADING_MODE, mode});

// thunk creator
export const getBlockInfo = (BlockNumber) => async (dispatch) => {
    dispatch(setLoadingMode(true));
    let response = await blockAPI.getBlockInfo(BlockNumber);

    dispatch(setLastBlockNum(response.number));

    for (let i = response.number - 9; i <= response.number; i++) {
        let response = await blockAPI.getBlockInfo(i);
        dispatch(addBlock(response));
    }

    dispatch(setLoadingMode(false));
}




// export
 export default blocksReducer;