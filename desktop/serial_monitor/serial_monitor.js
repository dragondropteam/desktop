const {BrowserWindow} = require('electron');
exports.showSerialMonitor = function (port) {
    console.log('Show Serial Monitor');
    let serialMonitor = new BrowserWindow({
        width: 800,
        height: 600,
        show: false,
        resizable: false
    });

    serialMonitor.loadURL('file://' + __dirname + '/static/serial_monitor.html');

    serialMonitor.once('ready-to-show', () => {
        serialMonitor.show();
        serialMonitor.webContents.send('serial-port', port);
    })
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