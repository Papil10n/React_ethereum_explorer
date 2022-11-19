let web3;


export const blockAPI = {
    setConnection() {
        const Web3 = require('web3');
        web3 = new Web3(Web3.givenProvider);
        web3.setProvider(Web3.givenProvider);
        web3.eth.setProvider(Web3.givenProvider);
    },
    getBlockInfo(blockNum) {
        return web3.currentProvider ? web3.eth.getBlock(blockNum) : false;
    }

}

