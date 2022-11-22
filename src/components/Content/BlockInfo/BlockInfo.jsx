import s from './BlockInfo.module.css';
import coin from './../../../image/coin.png';
import bchImg_1 from './../../../image/blockchain_1.png';
import bchImg_2 from './../../../image/blockchain_2.png';
import bchImg_3 from './../../../image/blockchain_3.png';
import {NavLink} from "react-router-dom";

const BlockInfo = ({block}) => {
    return (
        <div className={s.blockInfo}>
            <div className={s.container}>
                <div className={s.titleWrap}>
                    <div className={s.imgWrap}>
                        <img className={s.mainImg} src={coin} alt="Coin"/>
                    </div>
                    <div className={s.text}>EthBlock</div>
                    <div className={s.number}>#{block.number}</div>
                    <div className={s.buttonWrap}>
                        <NavLink to={'/'} className={s.button}>Back</NavLink>
                    </div>
                </div>
                <div className={s.infoWrap}>
                    <div className={s.category}>
                        <img className={s.img} src={bchImg_2} alt="#"/>
                        <div className={s.categoryText}>
                            <div>Hash: {block.hash}</div>
                            <div>Parent Hash: {block.parentHash}</div>
                        </div>
                    </div>
                    <div className={s.category}>
                        <img className={s.img} src={bchImg_3} alt="#"/>
                        <div className={s.categoryText}>
                            <div>sha3Uncles: {block.sha3Uncles}</div>
                            <div>Receipts Root: {block.receiptsRoot}</div>
                        </div>
                    </div>
                    <div className={s.category}>
                        <div className={s.left}>
                            <img className={s.img} src={bchImg_1} alt="#"/>
                            <div className={s.categoryText}>
                                <div>Total Difficulty: {block.totalDifficulty}</div>
                                <div>Time: {block.timestamp}</div>
                                <div>Size: {block.size}</div>
                            </div>
                        </div>
                        <div className={s.right}>
                            <img className={s.img} src={bchImg_1} alt="#"/>
                            <div className={s.categoryText}>
                                <div>Base FPG: {block.baseFeePerGas}</div>
                                <div>Gas Limit: {block.gasLimit}</div>
                                <div>Gas Used: {block.gasUsed}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.transactionsWrap}>
                    transactions
                </div>
            </div>
        </div>
    )
}

export default BlockInfo;