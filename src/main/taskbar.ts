// // const { app, Menu, Tray } = require('electron')
// import { app, BrowserWindow, Menu, MenuItem, nativeImage, Tray } from 'electron'

// declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
// declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

// export let mainWindow: BrowserWindow;
// // let tray = null

// export let a = app.whenReady().then(() => {
//   const img = nativeImage.createFromPath('aka.ico')
//   let tray = new Tray(img)
//   const contextMenu = Menu.buildFromTemplate([
//     // { label: 'Item1', type: 'radio' },// clickで自作の動作を設定、roleで定義済みの動作を設定
//     { label: 'kopilotについて', role: 'about' },
//     { label: '設定',  click: async () => {
//         console.log('aaaaaa')
//         // settingWindow()
//         mainWindow.show();
//         // const { shell } = require('electron')
//         // await shell.openExternal('https://electronjs.org')
//         }
//     },
//     { label: '終了', role: 'quit' },
//   ])
//   tray.setToolTip('This is my application.')
//   tray.setContextMenu(contextMenu)
// })

// // このアプリについて
// app.setAboutPanelOptions({
//     applicationName: 'kopilot',                // アプリ名
//     applicationVersion: 'v1.0.0',              // アプリのバージョン
//     // copyright: 'Copyright (C) 2020 M.Katsube', // コピーライト
//     // version: 'build20201223',                  // ビルドバージョン (macOS用) 
//     credits: 'made by ayataka',           // クレジット (Windows,macOS用)
//     // authors: ['auyataka'],                    // 作者名 (Linux用)
//     // website: 'https://blog.katsubemakito.net/' // URL (Linux用)
//     // iconPath: 'asset/image/icon.png'           // アイコン画像 (Linux,Windows用)
// });

// // 設定
// export const settingWindow = (): void => {
//     // Create the browser window.
//     mainWindow = new BrowserWindow({
//       height: 600,
//       width: 800,
//       webPreferences: {
//         preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
//       },
//       show: false,
//     });
  
//     // and load the index.html of the app.
//     mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  
//     // Open the DevTools.
//     mainWindow.webContents.openDevTools();
// };

