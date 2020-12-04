import React, {Component} from "react";
import {connect} from 'react-redux';
import Header from "./Header";
import BodyArea from "./Body";
import {requestToDos} from "../Redux/ActionCreaters";
import {bindActionCreators} from "redux";


const mapStateToProps = (state) => (
    {
        todos: state.todos
    }
);

const mapDispatchToProps = dispatch =>
    bindActionCreators({ requestToDos }, dispatch);

class Main extends Component {

    componentDidMount() {
        //this.props.requestToDos();

    }

    render() {
        console.log(this.props)
        return(
            <div className="App">
                <header className="App-header">
                    <Header/>
                </header>
                <BodyArea/>
            </div>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
