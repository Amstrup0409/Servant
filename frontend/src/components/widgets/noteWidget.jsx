import "./noteWidget.css"

function NoteCell({ text }) {
    return (
        <div id="NoteContainerCell">
            Note text {text}
        </div>
    )
}

function NoteWidget() {
    return (
        <div id="NoteContainer">
            <NoteCell text={"1"} />
            <NoteCell text={"2"} />
            <NoteCell text={"3"} />
            <NoteCell text={"4"} />
            <NoteCell text={"5"} />
        </div>
    )
}


export default NoteWidget
