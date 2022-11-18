import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";
import {BrowserRouter} from "react-router-dom";
import {connect, Provider} from "react-redux";
import store from "./redux/redux-store";
import './App.css';


const App = ({blocks, getLastBlockNum}) => {
    return (
        <div className='wrapper'>
            <Header/>
            <Content blocks={blocks} />
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
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
}

export default EthereumExplorer;

