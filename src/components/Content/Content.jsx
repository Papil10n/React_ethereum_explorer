import s from './Content.module.css';
import BlocksContainer from "./Blocks/BlocksContainer";
import {Route, Routes} from "react-router-dom";
import Warning from "../common/Warning/Warning";
import BlockInfo from "./BlockInfo/BlockInfo";
import {CSSTransition} from "react-transition-group";
import BlockInfoContainer from "./BlockInfo/BlockInfoContainer";
import BlockInfoSuperContainer from "./BlockInfo/BlockInfoContainer";

const Content = ({blocks}) => {
    const url = window.location.href;

    return (
        <main className={s.main}>
            <div className={s.container}>
                <Routes>
                    <Route path='/' element={<BlocksContainer blocks={blocks}/>}/>
                    <Route path='/warning' element={<Warning/>}/>
                    <Route path='/block/*' element={
                        <CSSTransition in={!!url.match(/block/)} classNames="alert" timeout={300}
                                       unmountOnExit>
                            <BlockInfoSuperContainer />
                        </CSSTransition>
                    }/>
                </Routes>
            </div>
        </main>
    )
}

export default Content;