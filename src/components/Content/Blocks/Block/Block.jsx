import s from './Block.module.css';
import coinImg from './../../../../image/coin.png';
import timeImg from './../../../../image/time.png';
import sizeImg from './../../../../image/size.png';
import diffImg from './../../../../image/dfclt.png';

const Block = ({block, showTransactions}) => {
    return (
        <div className={s.block}>
            <div className={s.content}>
                <div className={s.blockInfo}>
                    <div className={s.imgWrap}>
                        <img className={s.img} src={coinImg} alt="Coin"/>
                    </div>
                    <div className={s.numberWrap}>
                        <div className={s.number}>{`EthBlock #${block.number}`}</div>
                    </div>
                </div>
                <div className={s.mainInfo}>
                    <div className={s.elemWrap}>
                        <div className={s.elemImgWrap}>
                            <img className={s.img} src={timeImg} alt="TimeImg"/>
                        </div>
                        <div className={s.text}>{`Time: ${block.timestamp}`}</div>
                    </div>
                    <div className={s.elemWrap}>
                        <div className={s.elemImgWrap}>
                            <img className={s.img} src={sizeImg} alt="SizeImg"/>
                        </div>
                        <div className={s.text}>{`Size: ${block.size}`}</div>
                    </div>
                    <div className={s.elemWrap}>
                        <div className={s.elemImgWrap}>
                            <img className={s.img} src={diffImg} alt="DiffImg"/>
                        </div>
                        <div className={s.totalDiff}>
                            <div className={s.text}>Total Difficulty:</div>
                            <div className={s.text2}>{block.totalDifficulty}</div>
                        </div>
                    </div>
                    <div className={s.elemWrap}>
                        <button onClick={()=>{showTransactions(true)}} className={s.transactBtn}>
                            <div className={s.text}>Transactions</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Block;