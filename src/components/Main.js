import React, {Component} from "react";
import {connect} from 'react-redux';
import Header from "./Header";
import BodyArea from "./Body";
import {requestToDos} from "../Redux/ActionCreaters";
import {bindActionCreators} from "redux";


const mapStateToProps = (state) => {
    return {todos: state.todos};

};

const mapDispatchToProps = dispatch => ({
    requestToDos: () => {
        dispatch(requestToDos())
    }
})

//bindActionCreators({ requestToDos }, dispatch);

class Main extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestToDos();

    }

    render() {
        if (this.props.loading) {
            console.log("loading")
        }
        console.log(this.props)
        return (
            <div className="App">
                <header className="App-header">
                    <Header/>
                </header>
                <BodyArea todos={this.props.todos}/>
            </div>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
