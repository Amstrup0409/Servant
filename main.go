package main

import (
	"embed"
	"fmt"
	calenderwidget "servant/widgets/calenderWidget"
	"servant/widgets/notewidget"

	wails "github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
)

//go:embed all:frontend/dist
var assets embed.FS

func main() {

	// Create an instance of the app structure
	app := NewApp()

	noteUser := notewidget.MakeNoteUser(&app.ctx)
	calenderUser := calenderwidget.MakeCalenderUser(&app.ctx)
	noteUser2 := notewidget.MakeNoteUser(&app.ctx)

	// Create application with options
	err := wails.Run(&options.App{
		Title:            "Servant",
		Width:            1024,
		Height:           768,
		Assets:           assets,
		BackgroundColour: &options.RGBA{R: 27, G: 38, B: 54, A: 1},
		OnStartup:        app.startup,
		Bind: []interface{}{
			app,
			noteUser,
			calenderUser,
			noteUser2,
		},
	})

	if err != nil {
		println("Error:", err.Error())
	}
}

// func (a *App) MakeMyUser() *notewidget.NoteUser {
// 	return notewidget.MakeNoteUser()
// }

func (a *App) MakeMyUser(input string) string {

	return fmt.Sprintf("You have input: %s... Thanks.", input)
}
