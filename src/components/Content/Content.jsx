import s from './Content.module.css';
import BlocksContainer from "./Blocks/BlocksContainer";
import {Route, Routes} from "react-router-dom";
import Warning from "../common/Warning/Warning";
import BlockInfo from "./BlockInfo/BlockInfo";

const Content = ({blocks}) => {

    return (
        <main className={s.main}>
            <div className={s.container}>
                <Routes>
                    <Route path='/' element={<BlocksContainer blocks={blocks}/>}/>
                    <Route path='/warning' element={<Warning/>}/>
                    <Route path='/block/*' element={<BlockInfo/>}/>
                </Routes>
            </div>
        </main>
    )
}

export default Content;