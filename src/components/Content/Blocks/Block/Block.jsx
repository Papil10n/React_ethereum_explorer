import s from './Block.module.css';

const Block = ({block}) => {
    console.log(block)
    return (
        <div className={s.block}>
            <div className={s.content}>
                <div className={s.number}>{`Block #${block.number}`}</div>
                <div className={s.info}>
                    <div className={s.timeBlock}>
                        <div className={s.time}>Time: {block.timestamp}</div>
                    </div>
                    <div className={s.sizeBlock}>
                        <div className={s.size}>Size: {block.size}</div>
                    </div>
                    <div className={s.diffBlock}>
                        <div className={s.totalDifficulty}>Total Difficulty:</div>
                        <div className={s.difficult}>{block.totalDifficulty}</div>
                    </div>
                    <div className={s.transactBlock}>
                        <button className={s.transaction}> (Transaction) </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Block;