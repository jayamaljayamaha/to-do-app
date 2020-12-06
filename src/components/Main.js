import React, {Component} from "react";
import {connect} from 'react-redux';
import Header from "./Header";
import BodyArea from "./Body";
import {addToDo, requestToDos} from "../Redux/ActionCreaters";


const mapStateToProps = (state) => {
    return {todos: state.todos};

};

const mapDispatchToProps = dispatch => ({
    requestToDos: () => dispatch(requestToDos()),
    addNewTodo: (data) => dispatch(addToDo(data))
});

class Main extends Component {


    componentDidMount() {
        this.props.requestToDos();

    }

    render() {

        //console.log(this.props)
        return (
            <div className="App">
                <header className="App-header">
                    <Header/>
                </header>
                <BodyArea todos={this.props.todos} addNewTodo={this.props.addNewTodo}/>
            </div>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
