/**
 * @fileoverview Modification of original loops file to add Icons
 * @author fraser@google.com (Neil Fraser)
 * @author luke.powell@digipen.edu (Luke Powell)
 * @copyright DigiPen Institute of Technology 2018
 */
'use strict';

/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.loops.HUE = 120;

Blockly.Blocks['controls_repeat_ext_icon'] = {
    /**
     * Block for repeat n times (external number).
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'Loop.png'), ICON_SIZE, ICON_SIZE));
        this.jsonInit({
            "message0": Blockly.Msg.CONTROLS_REPEAT_TITLE,
            "args0": [
                {
                    "type": "input_value",
                    "name": "TIMES",
                    "check": "Number"
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": Blockly.Blocks.loops.HUE,
            "tooltip": Blockly.Msg.CONTROLS_REPEAT_TOOLTIP,
            "helpUrl": Blockly.Msg.CONTROLS_REPEAT_HELPURL,
        });
        this.appendStatementInput('DO')
            .appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
    }
};

Blockly.Blocks['controls_repeat_icon'] = {
    /**
     * Block for repeat n times (internal number).
     * The 'controls_repeat_ext' block is preferred as it is more flexible.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'Loop.png'), ICON_SIZE, ICON_SIZE));
        this.jsonInit({
            "message0": Blockly.Msg.CONTROLS_REPEAT_TITLE,
            "args0": [
                {
                    "type": "field_number",
                    "name": "TIMES",
                    "value": 10,
                    "min": 0,
                    "precision": 1
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": Blockly.Blocks.loops.HUE,
            "tooltip": Blockly.Msg.CONTROLS_REPEAT_TOOLTIP,
            "helpUrl": Blockly.Msg.CONTROLS_REPEAT_HELPURL
        });
        this.appendStatementInput('DO')
            .appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
    }
};

Blockly.Blocks['controls_whileUntil_icon'] = {
    /**
     * Block for 'do while/until' loop.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'Loop.png'), ICON_SIZE, ICON_SIZE));
        const OPERATORS =
            [[Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE, 'WHILE'],
                [Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL, 'UNTIL']];
        this.setHelpUrl(Blockly.Msg.CONTROLS_WHILEUNTIL_HELPURL);
        this.setColour(Blockly.Blocks.loops.HUE);
        this.appendValueInput('BOOL')
            .setCheck('Boolean')
            .appendField(new Blockly.FieldDropdown(OPERATORS), 'MODE');
        this.appendStatementInput('DO')
            .appendField(Blockly.Msg.CONTROLS_WHILEUNTIL_INPUT_DO);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        // Assign 'this' to a variable for use in the tooltip closure below.
        let thisBlock = this;
        this.setTooltip(function () {
            const op = thisBlock.getFieldValue('MODE');
            const tooltips = {
                'WHILE': Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE,
                'UNTIL': Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL
            };
            return tooltips[op];
        });
    }
};

Blockly.Blocks['controls_doWhile_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'Loop.png'), ICON_SIZE, ICON_SIZE));
        this.appendStatementInput("LOOP")
            .setCheck(null)
            .appendField(Blockly.Msg.CONTROLS_DOWHILE_INPUT_DO);
        this.appendValueInput("CONDITION")
            .setCheck('Boolean')
            .appendField(new Blockly.FieldDropdown(
                [[Blockly.Msg.CONTROLS_DOWHILE_OPERATOR_WHILE, "WHILE"],
                    [Blockly.Msg.CONTROLS_DOWHILE_OPERATOR_UNTIL, "UNTIL"]]),
                "MODE");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.loops.HUE);
        // Assign 'this' to a variable for use in the tooltip closure below.
        var thisBlock = this;
        this.setTooltip(function () {
            var op = thisBlock.getFieldValue('MODE');
            var TOOLTIPS = {
                'WHILE': Blockly.Msg.CONTROLS_DOWHILE_TOOLTIP_WHILE,
                'UNTIL': Blockly.Msg.CONTROLS_DOWHILE_TOOLTIP_UNTIL
            };
            return TOOLTIPS[op];
        });
        this.setHelpUrl(Blockly.Msg.CONTROLS_DOWHILE_HELPURL);
    }
};

Blockly.Blocks['controls_for_icon'] = {
    /**
     * Block for 'for' loop.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'Loop.png'), ICON_SIZE, ICON_SIZE));
        this.jsonInit({
            "message0": Blockly.Msg.CONTROLS_FOR_TITLE,
            "args0": [
                {
                    "type": "field_variable",
                    "name": "VAR",
                    "variable": null
                },
                {
                    "type": "input_value",
                    "name": "FROM",
                    "check": "Number",
                    "align": "RIGHT"
                },
                {
                    "type": "input_value",
                    "name": "TO",
                    "check": "Number",
                    "align": "RIGHT"
                },
                {
                    "type": "input_value",
                    "name": "BY",
                    "check": "Number",
                    "align": "RIGHT"
                }
            ],
            "inputsInline": true,
            "previousStatement": null,
            "nextStatement": null,
            "colour": Blockly.Blocks.loops.HUE,
            "helpUrl": Blockly.Msg.CONTROLS_FOR_HELPURL
        });
        this.appendStatementInput('DO')
            .appendField(Blockly.Msg.CONTROLS_FOR_INPUT_DO);
        // Assign 'this' to a variable for use in the tooltip closure below.
        var thisBlock = this;
        this.setTooltip(function () {
            return Blockly.Msg.CONTROLS_FOR_TOOLTIP.replace('%1',
                thisBlock.getFieldValue('VAR'));
        });
    },
    /**
     * Add menu option to create getter block for loop variable.
     * @param {!Array} options List of menu options to add to.
     * @this Blockly.Block
     */
    customContextMenu: function (options) {
        if (!this.isCollapsed()) {
            var option = {enabled: true};
            var name = this.getFieldValue('VAR');
            option.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace('%1', name);
            var xmlField = goog.dom.createDom('field', null, name);
            xmlField.setAttribute('name', 'VAR');
            var xmlBlock = goog.dom.createDom('block', null, xmlField);
            xmlBlock.setAttribute('type', 'variables_get');
            option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
            options.push(option);
        }
    }
};

Blockly.Blocks['controls_forEach_icon'] = {
    /**
     * Block for 'for each' loop.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'Loop.png'), ICON_SIZE, ICON_SIZE));
        this.jsonInit({
            "message0": Blockly.Msg.CONTROLS_FOREACH_TITLE,
            "args0": [
                {
                    "type": "field_variable",
                    "name": "VAR",
                    "variable": null
                },
                {
                    "type": "input_value",
                    "name": "LIST",
                    "check": "Array"
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": Blockly.Blocks.loops.HUE,
            "helpUrl": Blockly.Msg.CONTROLS_FOREACH_HELPURL
        });
        this.appendStatementInput('DO')
            .appendField(Blockly.Msg.CONTROLS_FOREACH_INPUT_DO);
        // Assign 'this' to a variable for use in the tooltip closure below.
        var thisBlock = this;
        this.setTooltip(function () {
            return Blockly.Msg.CONTROLS_FOREACH_TOOLTIP.replace('%1',
                thisBlock.getFieldValue('VAR'));
        });
    },
    customContextMenu: Blockly.Blocks['controls_for'].customContextMenu
};
