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
                <iframe
                    src="https://calendar.google.com/calendar/ical/christian.amstrup.petersen%40gmail.com/private-9b01a1756abc5accdcc30b5c28d013e9/basic.ics"
                    style={{ "border": "solid 1px #777", width: "100%", height: "100%", scrolling: "no" }}>
                </iframe>
            </div>
        )
    }
}
// "https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FCopenhagen&src=Y2hyaXN0aWFuLmFtc3RydXAucGV0ZXJzZW5AZ21haWwuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZGEuZGFuaXNoI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%230B8043"
export default CalenderWidget
