import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {connect, Provider} from "react-redux";
import store from "./redux/redux-store";
import './App.css';
import {blockAPI} from "./api/api";
import Warning from "./components/common/Warning/Warning";


const App = ({blocks}) => {
    return (
        <div className='wrapper'>
            <Header/>
            <Content blocks={blocks}/>
            <Footer/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        blocks: state.EthBlock.blocks
    }
}

const AppContainer = connect(mapStateToProps, {})(App);


const EthereumExplorer = (props) => {
    blockAPI.setConnection();
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default EthereumExplorer;

