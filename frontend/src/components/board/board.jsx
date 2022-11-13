import './board.css'
import NoteWidget from '../widgets/notes/noteWidget'
import React, { Component } from 'react'
import CalenderWidget from '../widgets/calender/calenderWidget'

class BoardEntryWrapper extends Component {
    constructor(props) {
        super(props)
        this.title = props.title
        this.elementType = props.element
        this.params = props.params
        this.size = props.size
    }

    render() {
        return (
            <div className={`BoardEntryWrapper Entry${this.size}`}  >
                <div className='BoardEntryElement'>
                    <this.elementType size={this.size} />
                </div>
            </div >
        )
    }
}

class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            elements: []
        }
    }

    firstEntry = { title: "My notes", element: NoteWidget, params: null, size: 1 }
    secondEntry = { title: "My notes", element: NoteWidget, params: null, size: 2 }
    thirdEntry = { title: "My notes", element: NoteWidget, params: null, size: 3 }
    fourthEntry = { title: "My notes", element: NoteWidget, params: null, size: 4 }
    /* 
        firstCalEntry = { title: "My notes", element: CalenderWidget, params: null, size: 1 }
        secondCalEntry = { title: "My notes", element: CalenderWidget, params: null, size: 2 }
        thirdCalEntry = { title: "My notes", element: CalenderWidget, params: null, size: 3 }
        fourthCalEntry = { title: "My notes", element: CalenderWidget, params: null, size: 4 } */
    render() {
        return (
            <div id="Board" >
                {/*                <BoardEntryWrapper {...this.firstCalEntry} />
                <BoardEntryWrapper {...this.secondCalEntry} />
                <BoardEntryWrapper {...this.thirdCalEntry} />
                <BoardEntryWrapper {...this.fourthCalEntry} /> */}
                <BoardEntryWrapper {...this.firstEntry} />
                <BoardEntryWrapper {...this.secondEntry} />
                <BoardEntryWrapper {...this.thirdEntry} />
                <BoardEntryWrapper {...this.fourthEntry} />
            </div>
        )
    }
}

export default Board
