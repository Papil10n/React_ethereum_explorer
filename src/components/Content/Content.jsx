import s from './Content.module.css';
import BlocksContainer from "./Blocks/BlocksContainer";

const Content = ({blocks, getLastBlockNum}) => {

    return (
        <main className={s.main}>
            <div className={s.container}>
                <div className={s.title}>Last 10 eth blocks</div>
                <BlocksContainer blocks={blocks} />
            </div>
        </main>
    )
}

export default Content;