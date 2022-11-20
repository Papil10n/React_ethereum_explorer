import s from './BlockInfo.module.css';
import coin from './../../../image/coin.png';
import {NavLink} from "react-router-dom";

const BlockInfo = (props)  => {
    return (
        <div className={s.blockInfo}>
            <div className={s.container}>
                <div className={s.titleWrap}>
                    <div className={s.imgWrap}>
                        <img className={s.img} src={coin} alt="Coin"/>
                    </div>
                    <div className={s.text}>EthBlock</div>
                    <div className={s.number}>16544961</div>
                    <div className={s.buttonWrap}>
                        <NavLink to={'/'} className={s.button}>Back</NavLink>
                    </div>
                </div>
                <div className={s.infoWrap}>
                    <div className={s.category}>
                        <img src="#" alt="#"/>
                        <div className={s.categoryText}>
                            <div>Hash: XXXX-XXXX-XXXX-XXXX-XXXX-XXXX-XXXX</div>
                            <div>Parent Hash: XXXX-XXXX-XXXX-XXXX-XXXX-XXXX-XXXX</div>
                        </div>
                    </div>
                    <div className={s.category}>
                        <img src="#" alt="#"/>
                        <div className={s.categoryText}>
                            <div>sha3Uncles: XXXX-XXXX-XXXX-XXXX-XXXX-XXXX-XXXX</div>
                            <div>Receipts Root: XXXX-XXXX-XXXX-XXXX-XXXX-XXXX-XXXX</div>
                        </div>
                    </div>
                    <div className={s.category}>
                        <div className={s.left}>
                            <img src="#" alt="#"/>
                            <div className={s.categoryText}>
                                <div>Total Difficulty: XXXX-XXXX-XXXX</div>
                                <div>Time: XXXX-XXXX-XXXX</div>
                                <div>Size: XXXX-XXXX</div>
                            </div>
                        </div>
                        <div className={s.right}>
                            <img src="#" alt="#"/>
                            <div className={s.categoryText}>
                                <div>baseFeePerGas: XXXX-XXXX-XXXX</div>
                                <div>gasLimit: XXXX-XXXX-XXXX</div>
                                <div>gasUsed: XXXX-XXXX</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.transactionsWrap}></div>
            </div>
        </div>
    )
}

export default BlockInfo;