import {connect} from "react-redux";
import BlockTransactions from "./BlockTransactions";
import {showTransactions} from "../../../redux/blocks-reducer";
import {resetPortion, setCurrentPage, setPortion} from "../../../redux/transactions-reducer";

const mapStateToProps = (state) => {
    return {
        blockNumber: state.EthBlock.blockNumber,
        currentPage: state.TransactionsBlock.currentPage
    }
}

const BlockTransactionsContainer = connect(mapStateToProps, {
    showTransactions,
    setCurrentPage,
    setPortion,
    resetPortion
})(BlockTransactions);

export default BlockTransactionsContainer;