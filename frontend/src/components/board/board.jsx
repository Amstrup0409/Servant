import './board.css'
import '../widgets/noteWidget'
import NoteWidget from '../widgets/noteWidget'
import GridWidget from '../widgets/gridWidget'

const SIZE = 60

function BoardItem({ text }) {
    return (
        <div style={{ 'background-color': 'blue' }}>
            <a>
                Hello world {text}
            </a>
        </div >
    )
}

function BoardEntryWrapper({ title, element, params }) {
    return (
        <div className='BoardEntryWrapper'>
            {/* <div className="BoardEntryTitle">
                {title}
            </div> */}
            <div className='BoardEntryElement'>
                {element(params)}
            </div>
        </div>
    )
}


function Board() {
    const firstEntry = { title: "My notes", element: NoteWidget, params: null }
    function populateEntries(amount) {
        let myEntries = [firstEntry]
        myEntries.push({ title: "My grid", element: GridWidget, params: null })

        for (let i = 0; i < amount; i++) {
            myEntries.push({ title: `My ${i + 1}. element`, element: BoardItem, params: `${i}` })
        }
        console.log(myEntries.length)
        return myEntries
    }

    return (
        <div id="Board">

            {populateEntries(5).map(ele => {
                return BoardEntryWrapper(ele)
            })}
            {/* <BoardEntryWrapper title={"My notes"} element={
                <NoteWidget />
            } />
            <BoardEntryWrapper element={
                <BoardItem text={"New"} />}
            />
            <BoardEntryWrapper element={
                <BoardItem text={"New"} />}
            />
            <BoardEntryWrapper element={
                <BoardItem text={"New"} />}
            />
            <BoardEntryWrapper element={
                <BoardItem text={"New"} />}
            />
            <BoardEntryWrapper element={
                <BoardItem text={"New"} />}
            />
            <BoardEntryWrapper element={
                <BoardItem text={"New"} />}
            /> */}
        </div>
    )
}

export default Board