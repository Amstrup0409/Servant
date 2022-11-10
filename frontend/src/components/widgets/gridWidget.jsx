const STYLE = {
    "display": "grid",
    "gridTemplateColumns": "auto auto",
    "rowGap": 6,
    "background-color": "lightgreen",
    "gap": "4px",
    "width": "inherit",
    "& a": {
        "height": "40px",
    }
}

function GridWidget() {
    return (
        <div className="GridWidget" style={STYLE}>
            <a>This is my 1. text</a>
            <a>This is my 2. text</a>
            <a>This is my 3. text</a>
            <a>This is my 4. text</a>
            <a>This is my 5. text</a>
            <a>This is my 6. text</a>
            <a>This is my 7. text</a>
            <a>This is my 8. text</a>
            <a>This is my 9. text</a>
            <a>This is my 10. text</a>
            <a>This is my 11. text</a>
            <a>This is my 12. text</a>
            <a>This is my 13. text</a>
            <a>This is my 14. text</a>
            <a>This is my 15. text</a>
            <a>This is my 16. text</a>
            <a>This is my 17. text</a>
            <a>This is my 1. text</a>
            <a>This is my 2. text</a>
            <a>This is my 3. text</a>
            <a>This is my 4. text</a>
            <a>This is my 5. text</a>
            <a>This is my 6. text</a>
            <a>This is my 7. text</a>
            <a>This is my 8. text</a>
            <a>This is my 9. text</a>
            <a>This is my 10. text</a>
            <a>This is my 11. text</a>
            <a>This is my 12. text</a>
            <a>This is my 13. text</a>
            <a>This is my 14. text</a>
            <a>This is my 15. text</a>
            <a>This is my 16. text</a>
            <a>This is my 17. text</a>

        </div>
    )
}

export default GridWidget