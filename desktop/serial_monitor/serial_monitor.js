const {BrowserWindow, dialog} = require('electron');
const WindowManager = require('../window_manager/window_manager');
const SERIAL_MONITOR = 'SERIAL_MONITOR';


exports.showSerialMonitor = function (port) {
    console.log('Show Serial Monitor');

    WindowManager.create({
        width: 800,
        height: 600,
        show: false,
        resizable: false
    }, {
        id: SERIAL_MONITOR,
        url: 'file://' + __dirname + '/static/serial_monitor.html',
        model: {
            port: port
        },
        autoShow: false
    });
};

exports.DEFAULT_BAUD_RATE = 57600;

exports.VALID_BAUD_RATES = [
    300,
    1200,
    2400,
    4800,
    9600,
    19200,
    38400,
    57600,
    74880,
    115200,
    230400,
    250000
];

exports.SERIAL_MONITOR = SERIAL_MONITOR;

exports.showErrorNoConnect = function() {
    WindowManager.closeWindow(SERIAL_MONITOR);

    dialog.showMessageBox(BrowserWindow.getFocusedWindow(), {
        type: 'error',
        title: 'Dragon Drop Error',
        message: 'Could not connect to port.\nCheck your connection and try again.'
    });
};