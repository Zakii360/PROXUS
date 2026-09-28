'use strict';

const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronProxus', {
  isElectron: true,
  platform: process.platform,
  versions: {
    electron: process.versions.electron,
    chrome: process.versions.chrome,
    node: process.versions.node,
  },
});
