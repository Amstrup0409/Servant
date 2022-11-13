import React, { Component } from "react"
import "./calenderWidget.css"

class CalenderDateGrid_ELement extends Component {


    render() {
        return (
            <div className="CalenderDateGrid_Element" >
                <div className={this.props.type}>
                    {this.props.day}
                </div>
            </div>
        )
    }

}

class CalenderDateGrid extends Component {
    populateGrid(end, start) {
        let gridElements = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map(e => {
            return { name: e, type: "weekday" }
        })
        /* let startIndex = gridElements.findIndex(start) */
        for (let i = 1; i <= 42; i++) {
            gridElements.push({ name: `${i}`, type: "date" })
        }
        return gridElements
    }

    constructor(props) {
        super(props)
        this.state = {
            month: props.Month,
            start: props.StartDate,
            formerEnd: props.EndDate,
        }
    }

    render() {
        return (
            <div className="CalenderDateGrid">
                {this.populateGrid(null, null).map(e => <CalenderDateGrid_ELement key={e.name} day={e.name} type={e.type} />)}
            </div>
        )
    }

}

class CalenderWidget extends Component {
    constructor(props) {
        super(props)
        this.state = {
            events: [],
            former: null,
            current: null,
            next: null,
        }
    }

    render() {
        return (
            <div className="CalenderContainer">
                <CalenderDateGrid />
            </div>
        )
    }
}

export default CalenderWidget
