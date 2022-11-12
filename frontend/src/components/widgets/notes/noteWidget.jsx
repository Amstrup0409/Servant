import "./noteWidget.css"
import React from 'react'
// import { MakeMyUser } from "../../../wailsjs/go/main/App"
import { GetNotes, CreateNote, Subscribe } from "../../../../wailsjs/go/notewidget/NoteUser"
import { EventsOn } from "../../../../wailsjs/runtime"


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
            <span>
                <div className="NoteContainerCell_Indicator" />
                <div className="NoteContainerCell_Texts">
                    <div className="NoteContainerCell_Title">
                        {Title}
                    </div>
                    <div className="NoteContainerCell_Body">
                        {Body}
                    </div>
                    <div className="NoteContainerCell_Date">
                        {Date}
                    </div>
                </div>
            </span>
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
    let body = (<div className="NoteCellContainer_CellList">
        {notes.map(note => NoteCell(note))}
    </div>
    )
    switch (true) {
        case (size == 1):
        case (size == 3):
            return body
        default:
            return (

                <div className="NoteContainer_Limited">
                    {body}
                    <div className="NoteContainer_Edit">
                        <NoteEditWindow />
                    </div>
                </div>
            )
    }
}

class NoteWidget extends React.Component {
    async createNewNote() {
        await CreateNote(`A new note number ${this.state.notes.length}`, "And this is just a body")
    }

    async GetAllNotes() {
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
        this.getAllNotes = this.GetAllNotes.bind(this)

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
        return (
            <div className="NoteContainer">
                <NoteFunctionBar addOnClick={this.createNewNote} refreshOnClick={this.getAllNotes} />
                {RenderBody(this.state)}
            </div>
        )
    }
}

export default NoteWidget
