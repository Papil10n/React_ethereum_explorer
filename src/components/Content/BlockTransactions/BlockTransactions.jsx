import s from './BlockTransactions.module.css';

const BlockTransactions = ({showTransactions}) => {
    return (
        <div className={s.transactions}>
            Block all transactions
            <button onClick={()=>{showTransactions(false)}}>Close X</button>
        </div>

    )
}

export default BlockTransactions;