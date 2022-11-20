import s from './BlockTransactions.module.css';
import transactionImg from './../../../image/transaction.png';

const BlockTransactions = ({blocks, blockNumber, showTransactions}) => {

    let block = [...blocks].find(block => block.number === blockNumber);
    let transactions = block.transactions.map((item, index) => <div key={index}>{index+1}: {item}</div>)

    return (
        <div className={s.container}>
            <div className={s.transactions}>
                <div className={s.content}>
                    <div className={s.topInfo}>
                        <div className={s.imgWrap}>
                            <img className={s.img} src={transactionImg} alt="transaction"/>
                        </div>
                        <div className={s.titleWrap}>
                            <div className={s.title}>Transactions</div>
                        </div>
                        <div className={s.blockNumberWrap}>
                            <div className={s.blockNumber}>#{block.number}</div>
                        </div>
                        <div className={s.closeWrap}>
                            <button className={s.close} onClick={()=>{showTransactions(false, null);}}>Close X</button>
                        </div>
                    </div>
                    <div className={s.mainInfo}>
                        <div className={s.rootHashWrap}>
                            <div className={s.rootHash}>
                                <span>Root Hash:</span> {block.transactionsRoot}
                            </div>
                        </div>
                        <div className={s.countWrap}>
                            <div className={s.count}>
                                Transactions ({block.transactions.length})
                            </div>
                        </div>
                        <div className={s.listWrap}>
                                {transactions}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BlockTransactions;