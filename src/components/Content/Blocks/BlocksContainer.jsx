import Blocks from "./Blocks";
import React from 'react';
import {connect} from "react-redux";
import {
    getBlocks,
    hideTransactions,
    resetBlocks,
    setBlockNumber,
    showTransactions
} from "../../../redux/blocks-reducer";
import Preloader from "../../common/Preloader/Preloader";
import { Navigate } from 'react-router-dom';

class BlocksContainer extends React.Component {

    componentDidMount() {
        this.props.getBlocks();
    }
    componentWillUnmount() {
        this.props.resetBlocks();
    }


    render() {
        {
            return this.props.isLoading ? <Preloader/> :
                this.props.isError ? <Navigate to="/warning" /> :
                    <Blocks blocks={this.props.blocks}
                            isTransactionsShowing={this.props.isTransactionsShowing}
                            showTransactions={this.props.showTransactions}
                            hideTransactions={this.props.hideTransactions}
                            setBlockNumber={this.props.setBlockNumber}
                    />
        }
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.EthBlock.isLoading,
        isError: state.EthBlock.isError,
        isTransactionsShowing: state.EthBlock.isTransactionsShowing,
    }
}


export default connect(mapStateToProps, {getBlocks, setBlockNumber, showTransactions, resetBlocks, hideTransactions})(BlocksContainer);