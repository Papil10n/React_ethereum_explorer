import React, {Component} from "react";
import BlockInfo from "./BlockInfo";
import {connect} from "react-redux";
import {
    getBlockInfo,
    resetBlocks,
    setLoadingMode,
} from "../../../redux/blocks-reducer";
import Preloader from "../../common/Preloader/Preloader";

class BlockInfoContainer extends React.Component {

    componentDidMount() {
        this.props.getBlockInfo(this.props.blockNumberToInfo);
    }

    render() {
        {
            return this.props.block ? <BlockInfo block={this.props.block} /> : <Preloader />
        }
    }

//
}


const mapStateToProps = (state) => {
    return {
        blockNumberToInfo: state.EthBlock.blockNumberToInfo,
        block: state.EthBlock.blocks[0],
        isLoading: state.EthBlock.isLoading
    }
}

const BlockInfoSuperContainer =  connect(mapStateToProps, {resetBlocks, getBlockInfo, setLoadingMode})(BlockInfoContainer);

export default BlockInfoSuperContainer;