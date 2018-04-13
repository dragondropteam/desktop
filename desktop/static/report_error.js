const {ipcRenderer} = require('electron');
window.ATL_JQ_PAGE_PROPS = {
    "triggerFunction": function (showCollectorDialog) {
        ipcRenderer.on('report_bug', (event, arg) => {
            if (arg) {
                window.ATL_JQ_PAGE_PROPS.fieldValues.summary = arg.message;
                window.ATL_JQ_PAGE_PROPS.fieldValues.description = window.ATL_JQ_PAGE_PROPS.fieldValues.description + `Extra Information:\nMessage:\n${arg.message}\nStack:\n${arg.stack}`;
            }
            showCollectorDialog();
        });
    },

    fieldValues: {
        summary: 'DragonDrop Internal Bug Report',
        description: 'Expected Behavior:\n\nActual Behavior:\n\nSteps to reproduce:\n\n'
    }
};
