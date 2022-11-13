package calenderwidget

import (
	"context"
	"sync"
	"time"

	"github.com/wailsapp/wails/v2/pkg/runtime"
)

type CalenderEvent struct {
	Date     time.Time
	Title    string
	Note     string
	Duration time.Duration
}

func MakeEvent(title string, note string, date time.Time) CalenderEvent {
	return CalenderEvent{
		Title:    title,
		Note:     note,
		Date:     date,
		Duration: 100,
	}
}

type CalenderUser struct {
	lock    sync.Mutex
	Events  []CalenderEvent
	Context *context.Context
}

func MakeCalenderUser(ctx *context.Context) *CalenderUser {
	event1 := MakeEvent(
		"Nearly my birthday",
		"This is not my birthday",
		time.Date(2022, time.November, 12, 0, 0, 0, 0, time.Local))
	event2 := MakeEvent(
		"Just a november date",
		"",
		time.Date(2022, time.November, 8, 0, 0, 0, 0, time.Local))

	calenderUser := CalenderUser{
		Events:  []CalenderEvent{event1, event2},
		Context: ctx,
	}
	return &calenderUser
}

func (cu *CalenderUser) CreateEvent(title, note, month, day, year string) {
	cu.lock.Lock()
	defer cu.lock.Unlock()
	newEvent := MakeEvent(title, note, time.Now())
	cu.Events = append(cu.Events, newEvent)
	runtime.EventsEmit(*cu.Context, "new_event")
}
