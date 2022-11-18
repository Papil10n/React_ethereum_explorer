export const checkMetaMask = () => {
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
    } else {
        console.log('MetaMask isn`t installed!');
    }
};

const Web3 = require('web3');
let web3 = new Web3(Web3.givenProvider);
web3.setProvider(Web3.givenProvider);
web3.eth.setProvider(Web3.givenProvider);

export const blockAPI = {
    getBlockInfo(blockNum) {
        return web3.eth.getBlock(blockNum);
    }

}

