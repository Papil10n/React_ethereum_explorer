import {connect} from "react-redux";
import BlockTransactions from "./BlockTransactions";
import {showTransactions} from "../../../redux/blocks-reducer";
import {setCurrentPage, setTransactions} from "../../../redux/transactions-reducer";

const mapStateToProps = (state) => {
    return {
        blockNumber: state.EthBlock.blockNumber,
        currentPage: state.TransactionsBlock.currentPage
    }
}

const BlockTransactionsContainer = connect(mapStateToProps, {
    showTransactions,
    setCurrentPage
})(BlockTransactions);

export default BlockTransactionsContainer;