import s from "./Blocks.module.css";
import Block from "./Block/Block";
import BlockTransactionsContainer from "../BlockTransactions/BlockTransactionsContainer";

const Blocks = ({blocks, showTransactions, isTransactionsShowing}) => {
    let blockItems = blocks.map(block => <Block key={block.number} showTransactions={showTransactions} block={block}/>)

    return (
        <div className={s.blocks}>
            {isTransactionsShowing ? <BlockTransactionsContainer blocks={blocks}/> : null}
            {blockItems}
        </div>
    )
}


export default Blocks;