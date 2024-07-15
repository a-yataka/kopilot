const { contextBridge, ipcRenderer } = require('electron/renderer')
//
contextBridge.exposeInMainWorld('buttons', {
    addAlerm: () => ipcRenderer.send('add_alerm')
})

contextBridge.exposeInMainWorld('yaml', {
    getSettings: (callback: (arg0: any) => any) => ipcRenderer.on('get_settings', (_event, value) => callback(value)),
}); 