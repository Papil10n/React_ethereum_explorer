import s from "./Blocks.module.css";
import "./CSSTransition.css";
import Block from "./Block/Block";
import BlockTransactionsContainer from "../BlockTransactions/BlockTransactionsContainer";
import {CSSTransition} from "react-transition-group";

const Blocks = ({blocks, showTransactions, isTransactionsShowing, hideTransactions}) => {
    let blockItems = blocks.map(block => <Block key={block.number} showTransactions={showTransactions} block={block}/>)


    return (
        <div className={s.blocks}>
            <CSSTransition in={isTransactionsShowing} classNames="alert" timeout={300} unmountOnExit>
                <BlockTransactionsContainer blocks={blocks}/>
            </CSSTransition>
            {blockItems}
        </div>
    )
}


export default Blocks;