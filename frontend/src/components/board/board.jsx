import './board.css'
import NoteWidget from '../widgets/notes/noteWidget'
import React, { Component } from 'react'

class BoardEntryWrapper extends Component {
    constructor(props) {
        super(props)
        this.title = props.title
        this.elementType = props.element
        this.params = props.params
        this.size = props.size
    }

    render() {
        console.log(this.elementType)
        return (
            <div className={`BoardEntryWrapper Entry${this.size}`} draggable="true" >
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
    render() {
        return (
            <div id="Board" >
                <BoardEntryWrapper element={this.firstEntry.element} size={this.firstEntry.size} params={this.firstEntry.params} />
                <BoardEntryWrapper element={this.secondEntry.element} size={this.secondEntry.size} params={this.secondEntry.params} />
                <BoardEntryWrapper element={this.thirdEntry.element} size={this.thirdEntry.size} params={this.thirdEntry.params} />
                <BoardEntryWrapper element={this.fourthEntry.element} size={this.fourthEntry.size} params={this.fourthEntry.params} />
            </div>
        )
    }
}

export default Board