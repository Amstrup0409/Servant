import "./noteWidget.css"

function NoteCell({ text }) {
    return (
        <div className="NoteContainerCell">
            <div className="NoteContainerCell_Indicator" />
            <div className="NoteContainerCell_Text">
                Note text {text}
            </div>
        </div>
    )
}


function NoteWidget(entries) {
    return (
        <div id="NoteContainer">
            <NoteCell text={"1"} />

            <NoteCell text={"2"} />
            <NoteCell text={"3"} />
            <NoteCell text={"4"} />
            <NoteCell text={"5"} />
            <NoteCell text={"6"} />
            <NoteCell text={"7"} />
            <NoteCell text={"8"} />
            <NoteCell text={"9"} />
            <NoteCell text={"10"} />
            <NoteCell text={"11"} />
            <NoteCell text={"12"} />
            <NoteCell text={"13"} />
            <NoteCell text={"14"} />
            <NoteCell text={"15"} />

        </div>
    )
}


export default NoteWidget
