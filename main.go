package main

import (
	"embed"
	"fmt"
	"servant/widgets/notewidget"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
)

//go:embed all:frontend/dist
var assets embed.FS

func main() {

	myUser := notewidget.MakeNoteUser()

	// Create an instance of the app structure
	app := NewApp()

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
			myUser,
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
