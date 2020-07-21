import React, {Component} from 'react';
//import logo from './logo.svg';
import Header from "./Header/Header";
import './App.css';
import Layout from "./hoc/Layout/Layout";

class App extends Component {
    render() {
        return (
            <Layout>
                <Header/>

            </Layout>
        )
    }

}

export default App;
