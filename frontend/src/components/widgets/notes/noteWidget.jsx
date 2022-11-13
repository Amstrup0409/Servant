import "./noteWidget.css"
import React, { Component } from 'react'
// import { MakeMyUser } from "../../../wailsjs/go/main/App"
import { GetNotes, CreateNote, Subscribe } from "../../../../wailsjs/go/notewidget/NoteUser"
import { EventsOn } from "../../../../wailsjs/runtime"


class NoteEditWindow extends Component {
    state = { note: { Title: "", Body: "", Date: "" } }

    componentWillReceiveProps(props) {
        this.setState({ note: props.note })
    }

    render() {
        return (
            <div className="NoteContainer_Edit" onClick={() => { console.log("This is my current note: ", this.state.note) }}>
                <div className="NoteContainerCell_Title">
                    {this.state.note.Title}
                </div>
                <div>
                    {this.state.note.Date}
                </div>
                <blockquote contentEditable={true}>
                    <p >
                        {this.state.note.Body}
                    </p>
                </blockquote>
            </div>
        )
    }
}

class NoteCell extends Component {
    constructor(props) {
        super(props)

        this.state = {
            note: props.note,
            onSelection: props.onSelection,
        }
    }

    render() {

        return (
            <div className="NoteContainerCell" onClick={this.state.onSelection(this.state.note)}>
                <span>
                    <div className="NoteContainerCell_Indicator" />
                    <div className="NoteContainerCell_Texts">
                        <div className="NoteContainerCell_Title">
                            {this.state.note.Title}
                        </div>
                        <div className="NoteContainerCell_Body">
                            {this.state.note.Body}
                        </div>
                        <div className="NoteContainerCell_Date">
                            {this.state.note.Date}
                        </div>
                    </div>
                </span>
            </div>
        )
    }
}

function NoteFunctionBar({ addOnClick, saveOnClick }) {
    return (
        <div className="NoteFunctionBar">
            <span>
                <button onClick={addOnClick}>
                    Add
                </button>
                <button>
                    Delete
                </button>
                <button>
                    Share
                </button>
                <button onClick={saveOnClick}>
                    Save
                </button>
            </span>
        </div>
    )
}

class NoteWidget extends React.Component {
    newSelection(note) {
        return () => {
            console.log("Clicked")
            this.setState({ selected: note })
        }
    }

    async createNewNote() {
        await CreateNote(`A new note number ${this.state.notes.length}`, "And this is just a body")
    }

    async GetAllNotes() {
        let res = await GetNotes()
        this.setState((prevState) => (
            {
                size: prevState.size,
                notes: res,
                selected: prevState.selected ? prevState.selected : res[0],
                editWindow: prevState.editWindowm
            }
        ))
    }

    constructor(props) {
        super(props)
        this.state = {
            notes: [],
            size: props.size,
            selected: null,
            editWindow: null
        }

        this.createNewNote = this.createNewNote.bind(this)
        this.getAllNotes = this.GetAllNotes.bind(this)
        this.newSelection = this.newSelection.bind(this)

        EventsOn("new_note", (params) => {
            this.setState((prevState) => ({
                notes: [...prevState.notes, params]
            }))
        })
    }

    componentDidMount() {
        this.GetAllNotes()
    }

    render() {
        let body = (<div className="NoteCellContainer_CellList">
            {this.state.notes.map(note => <NoteCell note={note} onSelection={this.newSelection} />)}
        </div>)

        switch (true) {
            case (this.state.size == 1):
            case (this.state.size == 3):
                return (
                    <div className="NoteContainer">
                        <NoteFunctionBar addOnClick={this.createNewNote} />
                        {body}
                    </div>
                )
            default:
                this.state.editWindow = <NoteEditWindow note={this.state.selected} />
                return (
                    <div className="NoteContainer">
                        <NoteFunctionBar addOnClick={this.createNewNote} />
                        < div className="NoteContainer_Limited" >
                            {body}
                        </div >
                        {this.state.editWindow}
                    </div>
                )
        }
    }
}

export default NoteWidget
