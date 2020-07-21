import React, {Component} from "react";
import classes from './Header.scss'
import Button from '../components/Button/Button'
import Input from "../components/Input/Input";
import Functions from '../components/Functions'
import axios from 'axios'



class Header extends Component {
    render() {
        return (
            <div className="Header">

                <form className="searchForm">
                    <Input onChange={this.props.handleChange}/>
                    <div className="flexButton">
                        <Button className="Button" onClick={this.props.onSearchPhoto} type="primary">Search</Button>
                        <Button className="Button" onClick={this.props.onRetry} type="primary">Save</Button>
                    </div>
                </form>
            </div>
        )
    }

}

export default Header