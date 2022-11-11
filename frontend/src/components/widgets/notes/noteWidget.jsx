import "./noteWidget.css"
import React from 'react'
// import { MakeMyUser } from "../../../wailsjs/go/main/App"
import { GetNotes, CreateNote } from "../../../../wailsjs/go/notewidget/NoteUser"


function NoteEditWindow({ Title, Date, Body }) {
    return (
        <div>
            This is my edit container
        </div>
    )
}

function NoteCell({ Title, Date, Body }) {
    return (
        <div className="NoteContainerCell">
            <div className="NoteContainerCell_Indicator" />
            <div className="NoteContainerCell_Title">
                {Title}
            </div>
            <div className="NoteContainerCell_Date">
                {Date}
            </div>
            <div className="NoteContainerCell_Body">
                {Body}
            </div>
        </div>
    )
}

function NoteFunctionBar({ addOnClick }) {
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
            </span>
        </div>
    )
}

function RenderBody({ size, notes }) {
    console.log("Size: ", size)
    console.log("My notes: ", notes)
    let body = (<div className="NoteCellContainer_CellList">
        {notes.map(note => NoteCell(note))}
    </div>
    )
    switch (true) {
        case (size == 1):
        case (size == 3):
            console.log("Returning small body")
            return body

        default:
            console.log("Returning large body")
            return (
                <div className="NoteCellContainer">
                    <div className="NoteContainer_Limited">
                        {body}
                        <div className="NoteContainer_Edit">
                            <NoteEditWindow />
                        </div>
                    </div>
                </div>
            )
    }
}

class NoteWidget extends React.Component {
    async createNewNote() {
        let note = await CreateNote(`A new note number ${this.state.notes.length}`, "And this is just a body")
        this.setState((prevState) => ({
            notes: [...prevState.notes, note]
        }))
    }

    async GetAllNotes() {
        console.log("Getting all notes")
        let res = await GetNotes()
        this.setState({
            notes:
                res
        })
    }

    constructor(props) {
        super(props)
        this.state = {
            notes: [],
            size: props.size
        }

        this.createNewNote = this.createNewNote.bind(this)
    }

    componentDidMount() {
        this.GetAllNotes()
    }

    render() {
        return (
            <div className="NoteContainer">
                <NoteFunctionBar addOnClick={this.createNewNote} />
                {RenderBody(this.state)}
            </div>
        )
    }
}

export default NoteWidget
