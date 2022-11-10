import './board.css'
import '../widgets/noteWidget'
import NoteWidget from '../widgets/noteWidget'
import GridWidget from '../widgets/gridWidget'

const SIZE = 60



function determineBoard(gridWidth, entries) {

    function makeNewArrayEntry() {
        return Array.apply(null, Array(gridWidth)).map(function () { })
    }

    var grid = [makeNewArrayEntry()]
    function findFreeOne() {
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < gridWidth; j++) {
                if (!grid[i][j]) {
                    grid[i][j] = "one"
                    return
                }
            }
        }
        grid.push(makeNewArrayEntry())
    }

    function findFreeTwo() {
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < gridWidth - 1; j++) {
                if (!grid[i][j] && !grid[i][j + 1]) {
                    grid[i][j] = "two"
                    grid[i][j + 1] = "two"
                    return
                }
            }
        }
        grid.push(makeNewArrayEntry())
        grid[grid.length - 1][0] = "two"
        grid[grid.length - 1][1] = "two"
    }

    function findFreeThree() {
        if (grid.length < 2) {
            grid.push(makeNewArrayEntry())
        }
        for (let i = 0; i < grid.length - 1; i++) {
            for (let j = 0; j < gridWidth; j++) {
                if (!grid[i][j] && !grid[i + 1][j]) {
                    grid[i][j] = "three"
                    grid[i + 1][j] = "three"
                    return
                }
            }
        }
        grid.push(makeNewArrayEntry())
        let formerLength = grid.length - 1
        for (let i = 0; i < gridWidth; i++) {
            if (!grid[formerLength]) {
                grid[formerLength][i] = "three"
                grid[formerLength + 1][i] = "three"
                return
            }
        }
        grid[grid.length - 2][0] = "three"
        grid[grid.length - 1][0] = "three"
    }

    function findFreeFour() {

    }



    entries.forEach(entry => {
        let s = entry.size

        switch (true) {
            case (s == 1):
                findFreeOne()
                break;
            case (s == 2):
                findFreeTwo()
                break;
            case (s == 3):
                findFreeThree()
                break;
            case (s == 4):
                findFreeFour()
                break;
            default:
                console.log("Found nutting")

        }
    }
    )
    let output = grid.flatMap(r => {
        let i = ["\""]
        i.push(...r)
        i.push("\"\"")
        return i

    })

    return output.map(v => {
        if (!v) {
            return "one"
        }
        return v
    }).join(' ')
}


function BoardEntryWrapper({ title, size, element, params }) {
    return (
        <div className={`BoardEntryWrapper Entry${size}`} draggable="true" >
            <div className="BoardEntryTitle">
                {title}
            </div>
            <div className='BoardEntryElement'>
                {element(params)}
            </div>
        </div >
    )
}


function Board() {
    const firstEntry = { title: "My notes", element: NoteWidget, params: null, size: 4 }
    function populateEntries(amount) {
        let myEntries = [firstEntry]
        myEntries.push({ title: "My grid", element: GridWidget, params: null, size: 2 })

        for (let i = 0; i < amount; i++) {
            let size = Math.floor(Math.random() * 4) + 1

            myEntries.push({ title: `My ${i + 1}. elementzzzz`, element: () => { return (<a>Heeeeeeeeej Krisser</a>) }, params: `${i}`, size: size })
        }
        return myEntries
    }

    const entries = populateEntries(25)

    return (
        <div id="Board" >
            {entries.map(ele => {
                return BoardEntryWrapper(ele)
            })}
        </div>
    )
}

export default Board