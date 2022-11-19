import s from "./Blocks.module.css";
import Block from "./Block/Block";
import BlockTransactions from "../BlockTransactions/BlockTransactions";

const Blocks = ({blocks, showTransactions, isTransactionsShowing}) => {
    let blockItems = blocks.map(block => <Block key={block.number}  showTransactions={showTransactions} block={block} />)

    return (
        <div className={s.blocks}>
            {isTransactionsShowing ? <BlockTransactions showTransactions={showTransactions} /> : null}
            {blockItems}
        </div>
    )
}



export default Blocks;