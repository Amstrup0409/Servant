import './App.css';
import Board from './components/board/board'
import NavBarTop from './components/navbar/top/navbar_top'
import NavBarSide from './components/navbar/side/navbar_side'

function App() {
    return (
        <div id="App">
            <NavBarTop />
            <Board />
        </div>
    )
}

export default App
