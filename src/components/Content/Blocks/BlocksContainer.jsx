import Blocks from "./Blocks";
import React from 'react';
import {connect} from "react-redux";
import {getBlockInfo} from "../../../redux/blocks-reducer";

class BlocksContainer extends React.Component {

    componentDidMount() {
        this.props.getBlockInfo();
    }


    render() {
        {
            return this.props.isLoading ? <Preloader /> : <Blocks blocks={this.props.blocks}/>
        }
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.EthBlock.isLoading
    }
}

export default connect(mapStateToProps, {getBlockInfo})(BlocksContainer);