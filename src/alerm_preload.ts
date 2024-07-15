const { contextBridge, ipcRenderer } = require('electron/renderer')
//
contextBridge.exposeInMainWorld('alermSettingInputs', {
  aiInputs: (v: any) => ipcRenderer.send('ai_inputs', v)
})