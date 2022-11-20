import Blocks from "./Blocks";
import React from 'react';
import {connect} from "react-redux";
import {getBlockInfo, showTransactions} from "../../../redux/blocks-reducer";
import Preloader from "../../common/Preloader/Preloader";
import Warning from "../../common/Warning/Warning";
import {setAllBlockTransactions} from "../../../redux/transactions-reducer";

class BlocksContainer extends React.Component {

    componentDidMount() {
        this.props.getBlockInfo();
    }

    render() {
        {
            return this.props.isLoading ? <Preloader/> :
                this.props.isError ? <Warning/> :
                    <Blocks blockNumber={this.props.blockNumber} blocks={this.props.blocks}
                            isTransactionsShowing={this.props.isTransactionsShowing}
                            showTransactions={this.props.showTransactions}
                    />
        }
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.EthBlock.isLoading,
        isError: state.EthBlock.isError,
        isTransactionsShowing: state.EthBlock.isTransactionsShowing,
        blockNumber: state.EthBlock.blockNumber,
    }
}


export default connect(mapStateToProps, {getBlockInfo, showTransactions})(BlocksContainer);