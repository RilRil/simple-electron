#!/usr/bin/env node
'use strict';

const electron = require('electron');
const path = require('path');
const ursa = require('ursa');

electron.app
	.on('activate', () => {
		if (!this.mainWindow) {
			this.mainWindow = new electron.BrowserWindow({
				defaultEncoding: 'UTF-8',
				height: 500,
				width: 500
			});
		}
	})
	.on('window-all-closed', () => {
		if (process.platform != 'darwin') {
			electron.app.quit();
		}
	});
module.exports = {};

