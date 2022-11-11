import './App.css';
import React, { Component } from 'react';
import Board from './components/board/board'
import NavBarTop from './components/navbar/top/navbar_top'
// import NavBarSide from './components/navbar/side/navbar_side'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="App">
                <NavBarTop />
                <Board />
            </div>
        )
    }
}

export default App
