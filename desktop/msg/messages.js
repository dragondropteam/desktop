/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview English strings.
 * @author fraser@google.com (Neil Fraser)
 *
 * After modifying this file, either run "build.py" from the parent directory,
 * or run (from this directory):
 * ../i18n/js_to_json.py
 * to regenerate json/{en,qqq,synonyms}.json.
 *
 * To convert all of the json files to .js files, run:
 * ../i18n/create_messages.py json/*.json
 */
'use strict';

goog.provide('Blockly.Msg.en');

goog.require('Blockly.Msg');


/**
 * Due to the frequency of long strings, the 80-column wrap rule need not apply
 * to message files.
 */

/**
 * Each message is preceded with a tripple-slash comment that becomes the
 * message descriptor.  The build process extracts these descriptors, adds
 * them to msg/json/qqq.json, and they show up in the translation console.
 */

/// default name - A simple, general default name for a variable, preferably short.
/// For more context, see
/// [[Translating:Blockly#infrequent_message_types]].\n{{Identical|Item}}
Blockly.Msg.VARIABLES_DEFAULT_NAME = 'item';
/// button text - Button that sets a calendar to today's date.\n{{Identical|Today}}
Blockly.Msg.TODAY = 'Today';

// Context menus.
/// context menu - Make a copy of the selected block (and any blocks it contains).\n{{Identical|Duplicate}}
Blockly.Msg.DUPLICATE_BLOCK = 'Duplicate';
/// context menu - Add a descriptive comment to the selected block.
Blockly.Msg.ADD_COMMENT = 'Add Comment';
/// context menu - Remove the descriptive comment from the selected block.
Blockly.Msg.REMOVE_COMMENT = 'Remove Comment';
/// context menu - Change from 'external' to 'inline' mode for displaying blocks used as inputs to the selected block.  See [[Translating:Blockly#context_menus]].
Blockly.Msg.EXTERNAL_INPUTS = 'External Inputs';
/// context menu - Change from 'internal' to 'external' mode for displaying blocks used as inputs to the selected block.  See [[Translating:Blockly#context_menus]].
Blockly.Msg.INLINE_INPUTS = 'Inline Inputs';
/// context menu - Permanently delete the selected block.
Blockly.Msg.DELETE_BLOCK = 'Delete Block';
/// context menu - Permanently delete the %1 selected blocks.\n\nParameters:\n* %1 - an integer greater than 1.
Blockly.Msg.DELETE_X_BLOCKS = 'Delete %1 Blocks';
/// confirmation prompt - Question the user if they really wanted to permanently delete all %1 blocks.\n\nParameters:\n* %1 - an integer greater than 1.
Blockly.Msg.DELETE_ALL_BLOCKS = 'Delete all %1 blocks?';
/// context menu - Reposition all the blocks so that they form a neat line.
Blockly.Msg.CLEAN_UP = 'Clean up Blocks';
/// context menu - Make the appearance of the selected block smaller by hiding some information about it.
Blockly.Msg.COLLAPSE_BLOCK = 'Collapse Block';
/// context menu - Make the appearance of all blocks smaller by hiding some information about it.  Use the same terminology as in the previous message.
Blockly.Msg.COLLAPSE_ALL = 'Collapse Blocks';
/// context menu - Restore the appearance of the selected block by showing information about it that was hidden (collapsed) earlier.
Blockly.Msg.EXPAND_BLOCK = 'Expand Block';
/// context menu - Restore the appearance of all blocks by showing information about it that was hidden (collapsed) earlier.  Use the same terminology as in the previous message.
Blockly.Msg.EXPAND_ALL = 'Expand Blocks';
/// context menu - Make the selected block have no effect (unless reenabled).
Blockly.Msg.DISABLE_BLOCK = 'Disable Block';
/// context menu - Make the selected block have effect (after having been disabled earlier).
Blockly.Msg.ENABLE_BLOCK = 'Enable Block';
/// context menu - Provide helpful information about the selected block.\n{{Identical|Help}}
Blockly.Msg.HELP = 'Help';
/// context menu - Undo the previous action.\n{{Identical|Undo}}
Blockly.Msg.UNDO = 'Undo';
/// context menu - Undo the previous undo action.\n{{Identical|Redo}}
Blockly.Msg.REDO = 'Redo';

// Variable renaming.
/// prompt - This message is only seen in the Opera browser.  With most browsers, users can edit numeric values in blocks by just clicking and typing.  Opera does not allows this, so we have to open a new window and prompt users with this message to chanage a value.
Blockly.Msg.CHANGE_VALUE_TITLE = 'Change value:';
/// dropdown choice - When the user clicks on a variable block, this is one of the dropdown menu choices.  It is used to rename the current variable.  See [https://github.com/google/blockly/wiki/Variables#dropdown-menu https://github.com/google/blockly/wiki/Variables#dropdown-menu].
Blockly.Msg.RENAME_VARIABLE = 'Rename variable...';
/// prompt - Prompts the user to enter the new name for the selected variable.  See [https://github.com/google/blockly/wiki/Variables#dropdown-menu https://github.com/google/blockly/wiki/Variables#dropdown-menu].\n\nParameters:\n* %1 - the name of the variable to be renamed.
Blockly.Msg.RENAME_VARIABLE_TITLE = 'Rename all "%1" variables to:';

// Variable creation
/// button text - Text on the button used to launch the variable creation dialogue.
Blockly.Msg.NEW_VARIABLE = 'Create variable...';
/// prompt - Prompts the user to enter the name for a new variable.  See [https://github.com/google/blockly/wiki/Variables#dropdown-menu https://github.com/google/blockly/wiki/Variables#dropdown-menu].
Blockly.Msg.NEW_VARIABLE_TITLE = 'New variable name:';
/// alert - Tells the user that the name they entered is already in use.
Blockly.Msg.VARIABLE_ALREADY_EXISTS = 'A variable named "%1" already exists.'

// Variable deletion.
/// confirm -  Ask the user to confirm their deletion of multiple uses of a variable.
Blockly.Msg.DELETE_VARIABLE_CONFIRMATION = 'Delete %1 uses of the "%2" variable?';
/// alert - Tell the user that they can't delete a variable because it's part of the definition of a procedure.
Blockly.Msg.CANNOT_DELETE_VARIABLE_PROCEDURE = 'Can\'t delete the variable "%1" because it is part of the definition of the procedure "%2"';
/// dropdown choice - Delete the currently selected variable.
Blockly.Msg.DELETE_VARIABLE = 'Delete the "%1" variable';

// Colour Blocks.
/// url - Information about colour.
Blockly.Msg.COLOUR_PICKER_HELPURL = 'https://en.wikipedia.org/wiki/Color';
/// tooltip - See [https://github.com/google/blockly/wiki/Colour#picking-a-colour-from-a-palette https://github.com/google/blockly/wiki/Colour#picking-a-colour-from-a-palette].
Blockly.Msg.COLOUR_PICKER_TOOLTIP = 'Choose a colour from the palette.';
/// url - A link that displays a random colour each time you visit it.
Blockly.Msg.COLOUR_RANDOM_HELPURL = 'http://randomcolour.com';
/// block text - Title of block that generates a colour at random.
Blockly.Msg.COLOUR_RANDOM_TITLE = 'random colour';
/// tooltip - See [https://github.com/google/blockly/wiki/Colour#generating-a-random-colour https://github.com/google/blockly/wiki/Colour#generating-a-random-colour].
Blockly.Msg.COLOUR_RANDOM_TOOLTIP = 'Choose a colour at random.';
/// url - A link for color codes with percentages (0-100%) for each component, instead of the more common 0-255, which may be more difficult for beginners.
Blockly.Msg.COLOUR_RGB_HELPURL = 'http://www.december.com/html/spec/colorper.html';
/// block text - Title of block for [https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components].
Blockly.Msg.COLOUR_RGB_TITLE = 'colour with';
/// block input text - The amount of red (from 0 to 100) to use when [https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components].\n{{Identical|Red}}
Blockly.Msg.COLOUR_RGB_RED = 'red';
/// block input text - The amount of green (from 0 to 100) to use when [https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components].
Blockly.Msg.COLOUR_RGB_GREEN = 'green';
/// block input text - The amount of blue (from 0 to 100) to use when [https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components].\n{{Identical|Blue}}
Blockly.Msg.COLOUR_RGB_BLUE = 'blue';
/// tooltip - See [https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components].
Blockly.Msg.COLOUR_RGB_TOOLTIP = 'Create a colour with the specified amount of red, green, and blue. All values must be between 0 and 100.';
/// url - A useful link that displays blending of two colors.
Blockly.Msg.COLOUR_BLEND_HELPURL = 'http://meyerweb.com/eric/tools/color-blend/';
/// block text - A verb for blending two shades of paint.
Blockly.Msg.COLOUR_BLEND_TITLE = 'blend';
/// block input text - The first of two colours to [https://github.com/google/blockly/wiki/Colour#blending-colours blend].
Blockly.Msg.COLOUR_BLEND_COLOUR1 = 'colour 1';
/// block input text - The second of two colours to [https://github.com/google/blockly/wiki/Colour#blending-colours blend].
Blockly.Msg.COLOUR_BLEND_COLOUR2 = 'colour 2';
/// block input text - The proportion of the [https://github.com/google/blockly/wiki/Colour#blending-colours blend] containing the first color; the remaining proportion is of the second colour.  For example, if the first colour is red and the second color blue, a ratio of 1 would yield pure red, a ratio of .5 would yield purple (equal amounts of red and blue), and a ratio of 0 would yield pure blue.\n{{Identical|Ratio}}
Blockly.Msg.COLOUR_BLEND_RATIO = 'ratio';
/// tooltip - See [https://github.com/google/blockly/wiki/Colour#blending-colours https://github.com/google/blockly/wiki/Colour#blending-colours].
Blockly.Msg.COLOUR_BLEND_TOOLTIP = 'Blends two colours together with a given ratio (0.0 - 1.0).';

// Loop Blocks.
/// url - Describes 'repeat loops' in computer programs; consider using the translation of the page [https://en.wikipedia.org/wiki/Control_flow http://en.wikipedia.org/wiki/Control_flow].
Blockly.Msg.CONTROLS_REPEAT_HELPURL = 'https://en.wikipedia.org/wiki/For_loop';
/// block input text - Title of [https://github.com/google/blockly/wiki/Loops#repeat repeat block].\n\nParameters:\n* %1 - the number of times the body of the loop should be repeated.
Blockly.Msg.CONTROLS_REPEAT_TITLE = 'repeat %1 times';
/// block text - Preceding the blocks in the body of the loop.  See [https://github.com/google/blockly/wiki/Loops https://github.com/google/blockly/wiki/Loops].\n{{Identical|Do}}
Blockly.Msg.CONTROLS_REPEAT_INPUT_DO = 'do';
/// tooltip - See [https://github.com/google/blockly/wiki/Loops#repeat https://github.com/google/blockly/wiki/Loops#repeat].
Blockly.Msg.CONTROLS_REPEAT_TOOLTIP = 'Do some statements several times.';
/// url - Describes 'while loops' in computer programs; consider using the translation of [https://en.wikipedia.org/wiki/While_loop https://en.wikipedia.org/wiki/While_loop], if present, or [https://en.wikipedia.org/wiki/Control_flow https://en.wikipedia.org/wiki/Control_flow].
Blockly.Msg.CONTROLS_WHILEUNTIL_HELPURL = 'https://github.com/google/blockly/wiki/Loops#repeat';
Blockly.Msg.CONTROLS_WHILEUNTIL_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
/// dropdown - Specifies that a loop should [https://github.com/google/blockly/wiki/Loops#repeat-while repeat while] the following condition is true.
Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE = 'repeat while';
/// dropdown - Specifies that a loop should [https://github.com/google/blockly/wiki/Loops#repeat-until repeat until] the following condition becomes true.
Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = 'repeat until';
/// tooltip - See [https://github.com/google/blockly/wiki/Loops#repeat-while Loops#repeat-while https://github.com/google/blockly/wiki/Loops#repeat-while Loops#repeat-while].
Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE = 'While a value is true, then do some statements.';
/// tooltip - See [https://github.com/google/blockly/wiki/Loops#repeat-until https://github.com/google/blockly/wiki/Loops#repeat-until].
Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL = 'While a value is false, then do some statements.';

Blockly.Msg.CONTROLS_DOWHILE_HELPURL = 'https://en.wikipedia.org/wiki/Do_while_loop';
Blockly.Msg.CONTROLS_DOWHILE_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
Blockly.Msg.CONTROLS_DOWHILE_OPERATOR_WHILE = 'repeat while';
Blockly.Msg.CONTROLS_DOWHILE_OPERATOR_UNTIL = 'repeat until';
Blockly.Msg.CONTROLS_DOWHILE_TOOLTIP_WHILE = 'Do some statements while a value is true. Always does the statements at least once.';
Blockly.Msg.CONTROLS_DOWHILE_TOOLTIP_UNTIL = 'Do some statements while a value is false. Always does the statements at least once.';

/// url - Describes 'for loops' in computer programs.  Consider using your language's translation of [https://en.wikipedia.org/wiki/For_loop https://en.wikipedia.org/wiki/For_loop], if present.
Blockly.Msg.CONTROLS_FOR_HELPURL = 'https://github.com/google/blockly/wiki/Loops#count-with';
/// tooltip - See [https://github.com/google/blockly/wiki/Loops#count-with https://github.com/google/blockly/wiki/Loops#count-with].\n\nParameters:\n* %1 - the name of the loop variable.
Blockly.Msg.CONTROLS_FOR_TOOLTIP = 'Have the variable "%1" take on the values from the start number to the end number, counting by the specified interval, and do the specified blocks.';
/// block text - Repeatedly counts a variable (%1)
/// starting with a (usually lower) number in a range (%2),
/// ending with a (usually higher) number in a range (%3), and counting the
/// iterations by a number of steps (%4).  As in
/// [https://github.com/google/blockly/wiki/Loops#count-with
/// https://github.com/google/blockly/wiki/Loops#count-with].
/// [[File:Blockly-count-with.png]]
Blockly.Msg.CONTROLS_FOR_TITLE = 'count with %1 from %2 to %3 by %4';
Blockly.Msg.CONTROLS_FOR_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;

/// url - Describes 'for-each loops' in computer programs.  Consider using your language's translation of [https://en.wikipedia.org/wiki/Foreach https://en.wikipedia.org/wiki/Foreach] if present.
Blockly.Msg.CONTROLS_FOREACH_HELPURL = 'https://github.com/google/blockly/wiki/Loops#for-each';
/// block text - Title of [https://github.com/google/blockly/wiki/Loops#for-each for each block].
/// Sequentially assigns every item in array %2 to the valiable %1.
Blockly.Msg.CONTROLS_FOREACH_TITLE = 'for each item %1 in list %2';
Blockly.Msg.CONTROLS_FOREACH_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
/// block text - Description of [https://github.com/google/blockly/wiki/Loops#for-each for each blocks].\n\nParameters:\n* %1 - the name of the loop variable.
Blockly.Msg.CONTROLS_FOREACH_TOOLTIP = 'For each item in a list, set the variable "%1" to the item, and then do some statements.';

/// url - Describes control flow in computer programs.  Consider using your language's translation of [https://en.wikipedia.org/wiki/Control_flow https://en.wikipedia.org/wiki/Control_flow], if it exists.
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_HELPURL = 'https://github.com/google/blockly/wiki/Loops#loop-termination-blocks';
/// dropdown - The current loop should be exited.  See [https://github.com/google/blockly/wiki/Loops#break https://github.com/google/blockly/wiki/Loops#break].
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = 'break out of loop';
/// dropdown - The current iteration of the loop should be ended and the next should begin.  See [https://github.com/google/blockly/wiki/Loops#continue-with-next-iteration https://github.com/google/blockly/wiki/Loops#continue-with-next-iteration].
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = 'continue with next iteration of loop';
/// tooltip - See [https://github.com/google/blockly/wiki/Loops#break-out-of-loop https://github.com/google/blockly/wiki/Loops#break-out-of-loop].
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = 'Break out of the containing loop.';
/// tooltip - See [https://github.com/google/blockly/wiki/Loops#continue-with-next-iteration https://github.com/google/blockly/wiki/Loops#continue-with-next-iteration].
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE = 'Skip the rest of this loop, and continue with the next iteration.';
/// warning - The user has tried placing a block outside of a loop (for each, while, repeat, etc.), but this type of block may only be used within a loop.  See [https://github.com/google/blockly/wiki/Loops#loop-termination-blocks https://github.com/google/blockly/wiki/Loops#loop-termination-blocks].
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_WARNING = 'Warning: This block may only be used within a loop.';

// Logic Blocks.
/// url - Describes conditional statements (if-then-else) in computer programs.  Consider using your language's translation of [https://en.wikipedia.org/wiki/If_else https://en.wikipedia.org/wiki/If_else], if present.
Blockly.Msg.CONTROLS_IF_HELPURL = 'https://github.com/google/blockly/wiki/IfElse';
/// tooltip - Describes [https://github.com/google/blockly/wiki/IfElse#if-blocks 'if' blocks].  Consider using your language's translation of [https://en.wikipedia.org/wiki/If_statement https://en.wikipedia.org/wiki/If_statement], if present.
Blockly.Msg.CONTROLS_IF_TOOLTIP_1 = 'If a value is true, then do some statements.';
/// tooltip - Describes [https://github.com/google/blockly/wiki/IfElse#if-else-blocks if-else blocks].  Consider using your language's translation of [https://en.wikipedia.org/wiki/If_statement https://en.wikipedia.org/wiki/If_statement], if present.
Blockly.Msg.CONTROLS_IF_TOOLTIP_2 = 'If a value is true, then do the first block of statements. Otherwise, do the second block of statements.';
/// tooltip - Describes [https://github.com/google/blockly/wiki/IfElse#if-else-if-blocks if-else-if blocks].  Consider using your language's translation of [https://en.wikipedia.org/wiki/If_statement https://en.wikipedia.org/wiki/If_statement], if present.
Blockly.Msg.CONTROLS_IF_TOOLTIP_3 = 'If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements.';
/// tooltip - Describes [https://github.com/google/blockly/wiki/IfElse#if-else-if-else-blocks if-else-if-else blocks].  Consider using your language's translation of [https://en.wikipedia.org/wiki/If_statement https://en.wikipedia.org/wiki/If_statement], if present.
Blockly.Msg.CONTROLS_IF_TOOLTIP_4 = 'If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements. If none of the values are true, do the last block of statements.';
/// block text - See [https://github.com/google/blockly/wiki/IfElse https://github.com/google/blockly/wiki/IfElse].
/// It is recommended, but not essential, that this have text in common with the translation of 'else if'
Blockly.Msg.CONTROLS_IF_MSG_IF = 'if';
/// block text - See [https://github.com/google/blockly/wiki/IfElse https://github.com/google/blockly/wiki/IfElse].  The English words "otherwise if" would probably be clearer than "else if", but the latter is used because it is traditional and shorter.
Blockly.Msg.CONTROLS_IF_MSG_ELSEIF = 'else if';
/// block text - See [https://github.com/google/blockly/wiki/IfElse https://github.com/google/blockly/wiki/IfElse].  The English word "otherwise" would probably be superior to "else", but the latter is used because it is traditional and shorter.
Blockly.Msg.CONTROLS_IF_MSG_ELSE = 'else';
Blockly.Msg.CONTROLS_IF_MSG_THEN = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
Blockly.Msg.CONTROLS_IF_IF_TITLE_IF = Blockly.Msg.CONTROLS_IF_MSG_IF;
/// tooltip - Describes [https://github.com/google/blockly/wiki/IfElse#block-modification if block modification].
Blockly.Msg.CONTROLS_IF_IF_TOOLTIP = 'Add, remove, or reorder sections to reconfigure this if block.';
Blockly.Msg.CONTROLS_IF_ELSEIF_TITLE_ELSEIF = Blockly.Msg.CONTROLS_IF_MSG_ELSEIF;
/// tooltip - Describes the 'else if' subblock during [https://github.com/google/blockly/wiki/IfElse#block-modification if block modification].
Blockly.Msg.CONTROLS_IF_ELSEIF_TOOLTIP = 'Add a condition to the if block.';
Blockly.Msg.CONTROLS_IF_ELSE_TITLE_ELSE = Blockly.Msg.CONTROLS_IF_MSG_ELSE;
/// tooltip - Describes the 'else' subblock during [https://github.com/google/blockly/wiki/IfElse#block-modification if block modification].
Blockly.Msg.CONTROLS_IF_ELSE_TOOLTIP = 'Add a final, catch-all condition to the if block.';

/// url - Information about comparisons.
Blockly.Msg.LOGIC_COMPARE_HELPURL = 'https://en.wikipedia.org/wiki/Inequality_(mathematics)';
/// tooltip - Describes the equals (=) block.
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_EQ = 'Return true if both inputs equal each other.';
/// tooltip - Describes the not equals (≠) block.
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_NEQ = 'Return true if both inputs are not equal to each other.';
/// tooltip - Describes the less than (<) block.
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LT = 'Return true if the first input is smaller than the second input.';
/// tooltip - Describes the less than or equals (≤) block.
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LTE = 'Return true if the first input is smaller than or equal to the second input.';
/// tooltip - Describes the greater than (>) block.
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GT = 'Return true if the first input is greater than the second input.';
/// tooltip - Describes the greater than or equals (≥) block.
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GTE = 'Return true if the first input is greater than or equal to the second input.';

/// url - Information about the Boolean conjunction ("and") and disjunction ("or") operators.  Consider using the translation of [https://en.wikipedia.org/wiki/Boolean_logic https://en.wikipedia.org/wiki/Boolean_logic], if it exists in your language.
Blockly.Msg.LOGIC_OPERATION_HELPURL = 'https://github.com/google/blockly/wiki/Logic#logical-operations';
/// tooltip - See [https://en.wikipedia.org/wiki/Logical_conjunction https://en.wikipedia.org/wiki/Logical_conjunction].
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_AND = 'Return true if both inputs are true.';
/// block text - See [https://en.wikipedia.org/wiki/Logical_conjunction https://en.wikipedia.org/wiki/Logical_conjunction].\n{{Identical|And}}
Blockly.Msg.LOGIC_OPERATION_AND = 'and';
/// block text - See [https://en.wikipedia.org/wiki/Disjunction https://en.wikipedia.org/wiki/Disjunction].
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_OR = 'Return true if at least one of the inputs is true.';
/// block text - See [https://en.wikipedia.org/wiki/Disjunction https://en.wikipedia.org/wiki/Disjunction].\n{{Identical|Or}}
Blockly.Msg.LOGIC_OPERATION_OR = 'or';

/// url - Information about logical negation.  The translation of [https://en.wikipedia.org/wiki/Logical_negation https://en.wikipedia.org/wiki/Logical_negation] is recommended if it exists in the target language.
Blockly.Msg.LOGIC_NEGATE_HELPURL = 'https://github.com/google/blockly/wiki/Logic#not';
/// block text - This is a unary operator that returns ''false'' when the input is ''true'', and ''true'' when the input is ''false''.
/// \n\nParameters:\n* %1 - the input (which should be either the value "true" or "false")
Blockly.Msg.LOGIC_NEGATE_TITLE = 'not %1';
/// tooltip - See [https://en.wikipedia.org/wiki/Logical_negation https://en.wikipedia.org/wiki/Logical_negation].
Blockly.Msg.LOGIC_NEGATE_TOOLTIP = 'Returns true if the input is false. Returns false if the input is true.';

/// url - Information about the logic values ''true'' and ''false''.  Consider using the translation of [https://en.wikipedia.org/wiki/Truth_value https://en.wikipedia.org/wiki/Truth_value] if it exists in your language.
Blockly.Msg.LOGIC_BOOLEAN_HELPURL = 'https://github.com/google/blockly/wiki/Logic#values';
/// block text - The word for the [https://en.wikipedia.org/wiki/Truth_value logical value] ''true''.\n{{Identical|True}}
Blockly.Msg.LOGIC_BOOLEAN_TRUE = 'true';
/// block text - The word for the [https://en.wikipedia.org/wiki/Truth_value logical value] ''false''.\n{{Identical|False}}
Blockly.Msg.LOGIC_BOOLEAN_FALSE = 'false';
/// tooltip - Indicates that the block returns either of the two possible [https://en.wikipedia.org/wiki/Truth_value logical values].
Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP = 'Returns either true or false.';

/// url - Provide a link to the translation of [https://en.wikipedia.org/wiki/Nullable_type https://en.wikipedia.org/wiki/Nullable_type], if it exists in your language; otherwise, do not worry about translating this advanced concept.
Blockly.Msg.LOGIC_NULL_HELPURL = 'https://en.wikipedia.org/wiki/Nullable_type';
/// block text - In computer languages, ''null'' is a special value that indicates that no value has been set.  You may use your language's word for "nothing" or "invalid".\n{{Identical|Null}}
Blockly.Msg.LOGIC_NULL = 'null';
/// tooltip - This should use the word from the previous message.
Blockly.Msg.LOGIC_NULL_TOOLTIP = 'Returns null.';

/// url - Describes the programming language operator known as the ''ternary'' or ''conditional'' operator.  It is recommended that you use the translation of [https://en.wikipedia.org/wiki/%3F: https://en.wikipedia.org/wiki/%3F:] if it exists.
Blockly.Msg.LOGIC_TERNARY_HELPURL = 'https://en.wikipedia.org/wiki/%3F:';
/// block input text - Label for the input whose value determines which of the other two inputs is returned.  In some programming languages, this is called a ''''predicate''''.
Blockly.Msg.LOGIC_TERNARY_CONDITION = 'test';
/// block input text - Indicates that the following input should be returned (used as output) if the test input is true.  Remember to try to keep block text terse (short).
Blockly.Msg.LOGIC_TERNARY_IF_TRUE = 'if true';
/// block input text - Indicates that the following input should be returned (used as output) if the test input is false.
Blockly.Msg.LOGIC_TERNARY_IF_FALSE = 'if false';
/// tooltip - See [https://en.wikipedia.org/wiki/%3F: https://en.wikipedia.org/wiki/%3F:].
Blockly.Msg.LOGIC_TERNARY_TOOLTIP = 'Check the condition in "test". If the condition is true, returns the "if true" value; otherwise returns the "if false" value.';

// Math Blocks.
/// url - Information about (real) numbers.
Blockly.Msg.MATH_NUMBER_HELPURL = 'https://en.wikipedia.org/wiki/Number';
/// tooltip - Any positive or negative number, not necessarily an integer.
Blockly.Msg.MATH_NUMBER_TOOLTIP = 'A number.';

/// {{optional}}\nmath - The symbol for the binary operation addition.
Blockly.Msg.MATH_ADDITION_SYMBOL = '+';
/// {{optional}}\nmath - The symbol for the binary operation indicating that the right operand should be
/// subtracted from the left operand.
Blockly.Msg.MATH_SUBTRACTION_SYMBOL = '-';
/// {{optional}}\nmath - The binary operation indicating that the left operand should be divided by
/// the right operand.
Blockly.Msg.MATH_DIVISION_SYMBOL = '÷';
/// {{optional}}\nmath - The symbol for the binary operation multiplication.
Blockly.Msg.MATH_MULTIPLICATION_SYMBOL = '×';
/// {{optional}}\nmath - The symbol for the binary operation exponentiation.  Specifically, if the
/// value of the left operand is L and the value of the right operand (the exponent) is
/// R, multiply L by itself R times.  (Fractional and negative exponents are also legal.)
Blockly.Msg.MATH_POWER_SYMBOL = '^';

/// math - The short name of the trigonometric function
/// [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent sine].
Blockly.Msg.MATH_TRIG_SIN = 'sin';
/// math - The short name of the trigonometric function
/// [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent cosine].
Blockly.Msg.MATH_TRIG_COS = 'cos';
/// math - The short name of the trigonometric function
/// [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent tangent].
Blockly.Msg.MATH_TRIG_TAN = 'tan';
/// math - The short name of the ''inverse of'' the trigonometric function
/// [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent sine].
Blockly.Msg.MATH_TRIG_ASIN = 'asin';
/// math - The short name of the ''inverse of'' the trigonometric function
/// [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent cosine].
Blockly.Msg.MATH_TRIG_ACOS = 'acos';
/// math - The short name of the ''inverse of'' the trigonometric function
/// [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent tangent].
Blockly.Msg.MATH_TRIG_ATAN = 'atan';

/// url - Information about addition, subtraction, multiplication, division, and exponentiation.
Blockly.Msg.MATH_ARITHMETIC_HELPURL = 'https://en.wikipedia.org/wiki/Arithmetic';
/// tooltip - See [https://en.wikipedia.org/wiki/Addition https://en.wikipedia.org/wiki/Addition].
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_ADD = 'Return the sum of the two numbers.';
/// tooltip - See [https://en.wikipedia.org/wiki/Subtraction https://en.wikipedia.org/wiki/Subtraction].
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS = 'Return the difference of the two numbers.';
/// tooltip - See [https://en.wikipedia.org/wiki/Multiplication https://en.wikipedia.org/wiki/Multiplication].
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY = 'Return the product of the two numbers.';
/// tooltip - See [https://en.wikipedia.org/wiki/Division_(mathematics) https://en.wikipedia.org/wiki/Division_(mathematics)].
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE = 'Return the quotient of the two numbers.';
/// tooltip - See [https://en.wikipedia.org/wiki/Exponentiation https://en.wikipedia.org/wiki/Exponentiation].
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_POWER = 'Return the first number raised to the power of the second number.';

/// url - Information about the square root operation.
Blockly.Msg.MATH_SINGLE_HELPURL = 'https://en.wikipedia.org/wiki/Square_root';
/// dropdown - This computes the positive [https://en.wikipedia.org/wiki/Square_root square root] of its input.  For example, the square root of 16 is 4.
Blockly.Msg.MATH_SINGLE_OP_ROOT = 'square root';
/// tooltip - Please use the same term as in the previous message.
Blockly.Msg.MATH_SINGLE_TOOLTIP_ROOT = 'Return the square root of a number.';
/// dropdown - This leaves positive numeric inputs changed and inverts negative inputs.  For example, the absolute value of 5 is 5; the absolute value of -5 is also 5.  For more information, see [https://en.wikipedia.org/wiki/Absolute_value https://en.wikipedia.org/wiki/Absolute_value].
Blockly.Msg.MATH_SINGLE_OP_ABSOLUTE = 'absolute';
/// tooltip - Please use the same term as in the previous message.
Blockly.Msg.MATH_SINGLE_TOOLTIP_ABS = 'Return the absolute value of a number.';

/// tooltip - Calculates '''0-n''', where '''n''' is the single numeric input.
Blockly.Msg.MATH_SINGLE_TOOLTIP_NEG = 'Return the negation of a number.';
/// tooltip - Calculates the [https://en.wikipedia.org/wiki/Natural_logarithm|natural logarithm] of its single numeric input.
Blockly.Msg.MATH_SINGLE_TOOLTIP_LN = 'Return the natural logarithm of a number.';
/// tooltip - Calculates the [https://en.wikipedia.org/wiki/Common_logarithm common logarithm] of its single numeric input.
Blockly.Msg.MATH_SINGLE_TOOLTIP_LOG10 = 'Return the base 10 logarithm of a number.';
/// tooltip - Multiplies [https://en.wikipedia.org/wiki/E_%28mathematical_constant%29 e] by itself n times, where n is the single numeric input.
Blockly.Msg.MATH_SINGLE_TOOLTIP_EXP = 'Return e to the power of a number.';
/// tooltip - Multiplies 10 by itself n times, where n is the single numeric input.
Blockly.Msg.MATH_SINGLE_TOOLTIP_POW10 = 'Return 10 to the power of a number.';

/// url - Information about the trigonometric functions sine, cosine, tangent, and their inverses (ideally using degrees, not radians).
Blockly.Msg.MATH_TRIG_HELPURL = 'https://en.wikipedia.org/wiki/Trigonometric_functions';
/// tooltip - Return the [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent sine] of an [https://en.wikipedia.org/wiki/Degree_(angle) angle in degrees], not radians.
Blockly.Msg.MATH_TRIG_TOOLTIP_SIN = 'Return the sine of a degree (not radian).';
/// tooltip - Return the [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent cosine] of an [https://en.wikipedia.org/wiki/Degree_(angle) angle in degrees], not radians.
Blockly.Msg.MATH_TRIG_TOOLTIP_COS = 'Return the cosine of a degree (not radian).';
/// tooltip - Return the [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent tangent] of an [https://en.wikipedia.org/wiki/Degree_(angle) angle in degrees], not radians.
Blockly.Msg.MATH_TRIG_TOOLTIP_TAN = 'Return the tangent of a degree (not radian).';
/// tooltip - The [https://en.wikipedia.org/wiki/Inverse_trigonometric_functions inverse] of the [https://en.wikipedia.org/wiki/Cosine#Sine.2C_cosine_and_tangent sine function], using [https://en.wikipedia.org/wiki/Degree_(angle) degrees], not radians.
Blockly.Msg.MATH_TRIG_TOOLTIP_ASIN = 'Return the arcsine of a number.';
/// tooltip - The [https://en.wikipedia.org/wiki/Inverse_trigonometric_functions inverse] of the [https://en.wikipedia.org/wiki/Cosine#Sine.2C_cosine_and_tangent cosine] function, using [https://en.wikipedia.org/wiki/Degree_(angle) degrees], not radians.
Blockly.Msg.MATH_TRIG_TOOLTIP_ACOS = 'Return the arccosine of a number.';
/// tooltip - The [https://en.wikipedia.org/wiki/Inverse_trigonometric_functions inverse] of the [https://en.wikipedia.org/wiki/Cosine#Sine.2C_cosine_and_tangent tangent] function, using [https://en.wikipedia.org/wiki/Degree_(angle) degrees], not radians.
Blockly.Msg.MATH_TRIG_TOOLTIP_ATAN = 'Return the arctangent of a number.';

/// url - Information about the mathematical constants Pi (π), e, the golden ratio (φ), √ 2, √ 1/2, and infinity (∞).
Blockly.Msg.MATH_CONSTANT_HELPURL = 'https://en.wikipedia.org/wiki/Mathematical_constant';
/// tooltip - Provides the specified [https://en.wikipedia.org/wiki/Mathematical_constant mathematical constant].
Blockly.Msg.MATH_CONSTANT_TOOLTIP = 'Return one of the common constants: π (3.141…), e (2.718…), φ (1.618…), sqrt(2) (1.414…), sqrt(½) (0.707…), or ∞ (infinity).';
/// dropdown - A number is '''even''' if it is a multiple of 2.  For example, 4 is even (yielding true), but 3 is not (false).
Blockly.Msg.MATH_IS_EVEN = 'is even';
/// dropdown - A number is '''odd''' if it is not a multiple of 2.  For example, 3 is odd (yielding true), but 4 is not (false).  The opposite of "odd" is "even".
Blockly.Msg.MATH_IS_ODD = 'is odd';
/// dropdown - A number is [https://en.wikipedia.org/wiki/Prime prime] if it cannot be evenly divided by any positive integers except for 1 and itself.  For example, 5 is prime, but 6 is not because 2 × 3 = 6.
Blockly.Msg.MATH_IS_PRIME = 'is prime';
/// dropdown - A number is '''whole''' if it is an [https://en.wikipedia.org/wiki/Integer integer].  For example, 5 is whole, but 5.1 is not.
Blockly.Msg.MATH_IS_WHOLE = 'is whole';
/// dropdown - A number is '''positive''' if it is greater than 0.  (0 is neither negative nor positive.)
Blockly.Msg.MATH_IS_POSITIVE = 'is positive';
/// dropdown - A number is '''negative''' if it is less than 0.  (0 is neither negative nor positive.)
Blockly.Msg.MATH_IS_NEGATIVE = 'is negative';
/// dropdown - A number x is divisible by y if y goes into x evenly.  For example, 10 is divisible by 5, but 10 is not divisible by 3.
Blockly.Msg.MATH_IS_DIVISIBLE_BY = 'is divisible by';
/// tooltip - This block lets the user specify via a dropdown menu whether to check if the numeric input is even, odd, prime, whole, positive, negative, or divisible by a given value.
Blockly.Msg.MATH_IS_TOOLTIP = 'Check if a number is an even, odd, prime, whole, positive, negative, or if it is divisible by certain number. Returns true or false.';

/// url - Information about incrementing (increasing the value of) a variable.
/// For other languages, just use the translation of the Wikipedia page about
/// addition ([https://en.wikipedia.org/wiki/Addition https://en.wikipedia.org/wiki/Addition]).
Blockly.Msg.MATH_CHANGE_HELPURL = 'https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter';
/// - As in: ''change'' [the value of variable] ''item'' ''by'' 1 (e.g., if the variable named 'item' had the value 5, change it to 6).
/// %1 is a variable name.
/// %2 is the amount of change.
Blockly.Msg.MATH_CHANGE_TITLE = 'change %1 by %2';
Blockly.Msg.MATH_CHANGE_TITLE_ITEM = Blockly.Msg.VARIABLES_DEFAULT_NAME;
/// tooltip - This updates the value of the variable by adding to it the following numeric input.\n\nParameters:\n* %1 - the name of the variable whose value should be increased.
Blockly.Msg.MATH_CHANGE_TOOLTIP = 'Add a number to variable "%1".';

/// url - Information about how numbers are rounded to the nearest integer
Blockly.Msg.MATH_ROUND_HELPURL = 'https://en.wikipedia.org/wiki/Rounding';
/// tooltip - See [https://en.wikipedia.org/wiki/Rounding https://en.wikipedia.org/wiki/Rounding].
Blockly.Msg.MATH_ROUND_TOOLTIP = 'Round a number up or down.';
/// dropdown - This rounds its input to the nearest whole number.  For example, 3.4 is rounded to 3.
Blockly.Msg.MATH_ROUND_OPERATOR_ROUND = 'round';
/// dropdown - This rounds its input up to the nearest whole number.  For example, if the input was 2.2, the result would be 3.
Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDUP = 'round up';
/// dropdown - This rounds its input down to the nearest whole number.  For example, if the input was 3.8, the result would be 3.
Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDDOWN = 'round down';

/// url - Information about applying a function to a list of numbers.  (We were unable to find such information in English.  Feel free to skip this and any other URLs that are difficult.)
Blockly.Msg.MATH_ONLIST_HELPURL = '';
/// dropdown - This computes the sum of the numeric elements in the list.  For example, the sum of the list {1, 4} is 5.
Blockly.Msg.MATH_ONLIST_OPERATOR_SUM = 'sum of list';
/// tooltip - Please use the same term for "sum" as in the previous message.
Blockly.Msg.MATH_ONLIST_TOOLTIP_SUM = 'Return the sum of all the numbers in the list.';
/// dropdown - This finds the smallest (minimum) number in a list.  For example, the smallest number in the list [-5, 0, 3] is -5.
Blockly.Msg.MATH_ONLIST_OPERATOR_MIN = 'min of list';
/// tooltip - Please use the same term for "min" or "minimum" as in the previous message.
Blockly.Msg.MATH_ONLIST_TOOLTIP_MIN = 'Return the smallest number in the list.';
/// dropdown - This finds the largest (maximum) number in a list.  For example, the largest number in the list [-5, 0, 3] is 3.
Blockly.Msg.MATH_ONLIST_OPERATOR_MAX = 'max of list';
/// tooltip
Blockly.Msg.MATH_ONLIST_TOOLTIP_MAX = 'Return the largest number in the list.';
/// dropdown - This adds up all of the numbers in a list and divides the sum by the number of elements in the list.  For example, the [https://en.wikipedia.org/wiki/Arithmetic_mean average] of the list [1, 2, 3, 4] is 2.5 (10/4).
Blockly.Msg.MATH_ONLIST_OPERATOR_AVERAGE = 'average of list';
/// tooltip - See [https://en.wikipedia.org/wiki/Arithmetic_mean https://en.wikipedia.org/wiki/Arithmetic_mean] for more informatin.
Blockly.Msg.MATH_ONLIST_TOOLTIP_AVERAGE = 'Return the average (arithmetic mean) of the numeric values in the list.';
/// dropdown - This finds the [https://en.wikipedia.org/wiki/Median median] of the numeric values in a list.  For example, the median of the list {1, 2, 7, 12, 13} is 7.
Blockly.Msg.MATH_ONLIST_OPERATOR_MEDIAN = 'median of list';
/// tooltip - See [https://en.wikipedia.org/wiki/Median median https://en.wikipedia.org/wiki/Median median] for more information.
Blockly.Msg.MATH_ONLIST_TOOLTIP_MEDIAN = 'Return the median number in the list.';
/// dropdown - This finds the most common numbers ([https://en.wikipedia.org/wiki/Mode_(statistics) modes]) in a list.  For example, the modes of the list {1, 3, 9, 3, 9}  are {3, 9}.
Blockly.Msg.MATH_ONLIST_OPERATOR_MODE = 'modes of list';
/// tooltip - See [https://en.wikipedia.org/wiki/Mode_(statistics) https://en.wikipedia.org/wiki/Mode_(statistics)] for more information.
Blockly.Msg.MATH_ONLIST_TOOLTIP_MODE = 'Return a list of the most common item(s) in the list.';
/// dropdown - This finds the [https://en.wikipedia.org/wiki/Standard_deviation standard deviation] of the numeric values in a list.
Blockly.Msg.MATH_ONLIST_OPERATOR_STD_DEV = 'standard deviation of list';
/// tooltip - See [https://en.wikipedia.org/wiki/Standard_deviation https://en.wikipedia.org/wiki/Standard_deviation] for more information.
Blockly.Msg.MATH_ONLIST_TOOLTIP_STD_DEV = 'Return the standard deviation of the list.';
/// dropdown - This choose an element at random from a list.  Each element is chosen with equal probability.
Blockly.Msg.MATH_ONLIST_OPERATOR_RANDOM = 'random item of list';
/// tooltip - Please use same term for 'random' as in previous entry.
Blockly.Msg.MATH_ONLIST_TOOLTIP_RANDOM = 'Return a random element from the list.';

/// url - information about the modulo (remainder) operation.
Blockly.Msg.MATH_MODULO_HELPURL = 'https://en.wikipedia.org/wiki/Modulo_operation';
/// block text - Title of block providing the remainder when dividing the first numerical input by the second.  For example, the remainder of 10 divided by 3 is 1.\n\nParameters:\n* %1 - the dividend (10, in our example)\n* %2 - the divisor (3 in our example).
Blockly.Msg.MATH_MODULO_TITLE = 'remainder of %1 ÷ %2';
/// tooltip - For example, the remainder of 10 divided by 3 is 1.
Blockly.Msg.MATH_MODULO_TOOLTIP = 'Return the remainder from dividing the two numbers.';

/// url - Information about constraining a numeric value to be in a specific range.  (The English URL is not ideal.  Recall that translating URLs is the lowest priority.)
Blockly.Msg.MATH_CONSTRAIN_HELPURL = 'https://en.wikipedia.org/wiki/Clamping_%28graphics%29';
/// block text - The title of the block that '''constrain'''s (forces) a number to be in a given range.
///For example, if the number 150 is constrained to be between 5 and 100, the result will be 100.
///\n\nParameters:\n* %1 - the value to constrain (e.g., 150)\n* %2 - the minimum value (e.g., 5)\n* %3 - the maximum value (e.g., 100).
Blockly.Msg.MATH_CONSTRAIN_TITLE = 'constrain %1 low %2 high %3';
/// tooltip - This compares a number ''x'' to a low value ''L'' and a high value ''H''.  If ''x'' is less then ''L'', the result is ''L''.  If ''x'' is greater than ''H'', the result is ''H''.  Otherwise, the result is ''x''.
Blockly.Msg.MATH_CONSTRAIN_TOOLTIP = 'Constrain a number to be between the specified limits (inclusive).';

/// url - Information about how computers generate random numbers.
Blockly.Msg.MATH_RANDOM_INT_HELPURL = 'https://en.wikipedia.org/wiki/Random_number_generation';
/// block text - The title of the block that generates a random integer (whole number) in the specified range.  For example, if the range is from 5 to 7, this returns 5, 6, or 7 with equal likelihood. %1 is a placeholder for the lower number, %2 is the placeholder for the larger number.
Blockly.Msg.MATH_RANDOM_INT_TITLE = 'random integer from %1 to %2';
/// tooltip - Return a random integer between two values specified as inputs.  For example, if one input was 7 and another 9, any of the numbers 7, 8, or 9 could be produced.
Blockly.Msg.MATH_RANDOM_INT_TOOLTIP = 'Return a random integer between the two specified limits, inclusive.';

/// url - Information about how computers generate random numbers (specifically, numbers in the range from 0 to just below 1).
Blockly.Msg.MATH_RANDOM_FLOAT_HELPURL = 'https://en.wikipedia.org/wiki/Random_number_generation';
/// block text - The title of the block that generates a random number greater than or equal to 0 and less than 1.
Blockly.Msg.MATH_RANDOM_FLOAT_TITLE_RANDOM = 'random fraction';
/// tooltip - Return a random fraction between 0 and 1.  The value may be equal to 0 but must be less than 1.
Blockly.Msg.MATH_RANDOM_FLOAT_TOOLTIP = 'Return a random fraction between 0.0 (inclusive) and 1.0 (exclusive).';

// Text Blocks.
/// url - Information about how computers represent text (sometimes referred to as ''string''s).
Blockly.Msg.TEXT_TEXT_HELPURL = 'https://en.wikipedia.org/wiki/String_(computer_science)';
/// tooltip - See [https://github.com/google/blockly/wiki/Text https://github.com/google/blockly/wiki/Text].
Blockly.Msg.TEXT_TEXT_TOOLTIP = 'A letter, word, or line of text.';

/// url - Information on concatenating/appending pieces of text.
Blockly.Msg.TEXT_JOIN_HELPURL = 'https://github.com/google/blockly/wiki/Text#text-creation';
/// block text - See [https://github.com/google/blockly/wiki/Text#text-creation https://github.com/google/blockly/wiki/Text#text-creation].
Blockly.Msg.TEXT_JOIN_TITLE_CREATEWITH = 'create text with';
/// tooltip - See [https://github.com/google/blockly/wiki/Text#text-creation create text with] for more information.
Blockly.Msg.TEXT_JOIN_TOOLTIP = 'Create a piece of text by joining together any number of items.';

/// block text - This is shown when the programmer wants to change the number of pieces of text being joined together.  See [https://github.com/google/blockly/wiki/Text#text-creation https://github.com/google/blockly/wiki/Text#text-creation], specifically the last picture in the 'Text creation' section.\n{{Identical|Join}}
Blockly.Msg.TEXT_CREATE_JOIN_TITLE_JOIN = 'join';
/// tooltip - See [https://github.com/google/blockly/wiki/Text#text-creation https://github.com/google/blockly/wiki/Text#text-creation], specifically the last picture in the 'Text creation' section.
Blockly.Msg.TEXT_CREATE_JOIN_TOOLTIP = 'Add, remove, or reorder sections to reconfigure this text block.';
Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM = Blockly.Msg.VARIABLES_DEFAULT_NAME;
/// block text - See [https://github.com/google/blockly/wiki/Text#text-creation https://github.com/google/blockly/wiki/Text#text-creation], specifically the last picture in the 'Text creation' section.
Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TOOLTIP = 'Add an item to the text.';

/// url - This and the other text-related URLs are going to be hard to translate.  As always, it is okay to leave untranslated or paste in the English-language URL.  For these URLs, you might also consider a general URL about how computers represent text (such as the translation of [https://en.wikipedia.org/wiki/String_(computer_science) this Wikipedia page]).
Blockly.Msg.TEXT_APPEND_HELPURL = 'https://github.com/google/blockly/wiki/Text#text-modification';
/// block input text - Message preceding the name of a variable to which text should be appended.
/// [[File:blockly-append-text.png]]
Blockly.Msg.TEXT_APPEND_TO = 'to';
/// block input text - Message following the variable and preceding the piece of text that should
/// be appended, as shown below.
/// [[File:blockly-append-text.png]]
Blockly.Msg.TEXT_APPEND_APPENDTEXT = 'append text';
Blockly.Msg.TEXT_APPEND_VARIABLE = Blockly.Msg.VARIABLES_DEFAULT_NAME;
/// tooltip - See [https://github.com/google/blockly/wiki/Text#text-modification https://github.com/google/blockly/wiki/Text#text-modification] for more information.\n\nParameters:\n* %1 - the name of the variable to which text should be appended
Blockly.Msg.TEXT_APPEND_TOOLTIP = 'Append some text to variable "%1".';

/// url - Information about text on computers (usually referred to as 'strings').
Blockly.Msg.TEXT_LENGTH_HELPURL = 'https://github.com/google/blockly/wiki/Text#text-modification';
/// block text - See [https://github.com/google/blockly/wiki/Text#text-length https://github.com/google/blockly/wiki/Text#text-length].
/// \n\nParameters:\n* %1 - the piece of text to take the length of
Blockly.Msg.TEXT_LENGTH_TITLE = 'length of %1';
/// tooltip - See [https://github.com/google/blockly/wiki/Text#text-length https://github.com/google/blockly/wiki/Text#text-length].
Blockly.Msg.TEXT_LENGTH_TOOLTIP = 'Returns the number of letters (including spaces) in the provided text.';

/// url - Information about empty pieces of text on computers (usually referred to as 'empty strings').
Blockly.Msg.TEXT_ISEMPTY_HELPURL = 'https://github.com/google/blockly/wiki/Text#checking-for-empty-text';
/// block text - See [https://github.com/google/blockly/wiki/Text#checking-for-empty-text https://github.com/google/blockly/wiki/Text#checking-for-empty-text].
/// \n\nParameters:\n* %1 - the piece of text to test for emptiness
Blockly.Msg.TEXT_ISEMPTY_TITLE = '%1 is empty';
/// tooltip - See [https://github.com/google/blockly/wiki/Text#checking-for-empty-text https://github.com/google/blockly/wiki/Text#checking-for-empty-text].
Blockly.Msg.TEXT_ISEMPTY_TOOLTIP = 'Returns true if the provided text is empty.';

/// url - Information about finding a character in a piece of text.
Blockly.Msg.TEXT_INDEXOF_HELPURL = 'https://github.com/google/blockly/wiki/Text#finding-text';
/// tooltip - %1 will be replaced by either the number 0 or -1 depending on the indexing mode. See [https://github.com/google/blockly/wiki/Text#finding-text https://github.com/google/blockly/wiki/Text#finding-text].
Blockly.Msg.TEXT_INDEXOF_TOOLTIP = 'Returns the index of the first/last occurrence of the first text in the second text. Returns %1 if text is not found.';
/// block text - Title of blocks allowing users to find text.  See
/// [https://github.com/google/blockly/wiki/Text#finding-text
/// https://github.com/google/blockly/wiki/Text#finding-text].
/// [[File:Blockly-find-text.png]].
Blockly.Msg.TEXT_INDEXOF_INPUT_INTEXT = 'in text';
/// dropdown - See [https://github.com/google/blockly/wiki/Text#finding-text
/// https://github.com/google/blockly/wiki/Text#finding-text].
/// [[File:Blockly-find-text.png]].
Blockly.Msg.TEXT_INDEXOF_OPERATOR_FIRST = 'find first occurrence of text';
/// dropdown - See [https://github.com/google/blockly/wiki/Text#finding-text
/// https://github.com/google/blockly/wiki/Text#finding-text].  This would
/// replace "find first occurrence of text" below.  (For more information on
/// how common text is factored out of dropdown menus, see
/// [https://translatewiki.net/wiki/Translating:Blockly#Drop-Down_Menus
/// https://translatewiki.net/wiki/Translating:Blockly#Drop-Down_Menus)].)
/// [[File:Blockly-find-text.png]].
Blockly.Msg.TEXT_INDEXOF_OPERATOR_LAST = 'find last occurrence of text';
/// block text - Optional text to follow the rightmost block in a
/// [https://github.com/google/blockly/wiki/Text#finding-text
/// https://github.com/google/blockly/wiki/Text#finding-text in text ... find block]
/// (after the "a" in the below picture).  This will be the empty string in most languages.
/// [[File:Blockly-find-text.png]].
Blockly.Msg.TEXT_INDEXOF_TAIL = '';

/// url - Information about extracting characters (letters, number, symbols, etc.) from text.
Blockly.Msg.TEXT_CHARAT_HELPURL = 'https://github.com/google/blockly/wiki/Text#extracting-text';
/// block text - Appears before the piece of text from which a letter (or number,
/// punctuation character, etc.) should be invalidArduinoPath, as shown below.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_INPUT_INTEXT = 'in text';
/// dropdown - Indicates that the letter (or number, punctuation character, etc.) with the
/// specified index should be obtained from the preceding piece of text.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_FROM_START = 'get letter #';
/// block text - Indicates that the letter (or number, punctuation character, etc.) with the
/// specified index from the end of a given piece of text should be obtained. See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_FROM_END = 'get letter # from end';
/// block text - Indicates that the first letter of the following piece of text should be
/// retrieved.  See [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_FIRST = 'get first letter';
/// block text - Indicates that the last letter (or number, punctuation mark, etc.) of the
/// following piece of text should be retrieved.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_LAST = 'get last letter';
/// block text - Indicates that any letter (or number, punctuation mark, etc.) in the
/// following piece of text should be randomly selected.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_RANDOM = 'get random letter';
/// block text - Text that goes after the rightmost block/dropdown when getting a single letter from
/// a piece of text, as in [https://blockly-demo.appspot.com/static/apps/code/index.html#3m23km these
/// blocks] or shown below.  For most languages, this will be blank.
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_TAIL = '';
/// tooltip - See [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_TOOLTIP = 'Returns the letter at the specified position.';

/// See [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
Blockly.Msg.TEXT_GET_SUBSTRING_TOOLTIP = 'Returns a specified portion of the text.';
/// url - Information about extracting characters from text.  Reminder: urls are the
/// lowest priority translations.  Feel free to skip.
Blockly.Msg.TEXT_GET_SUBSTRING_HELPURL = 'https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text';
/// block text - Precedes a piece of text from which a portion should be invalidArduinoPath.
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_INPUT_IN_TEXT = 'in text';
/// dropdown - Indicates that the following number specifies the position (relative to the start
/// position) of the beginning of the region of text that should be obtained from the preceding
/// piece of text.  See [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_START = 'get substring from letter #';
/// dropdown - Indicates that the following number specifies the position (relative to the end
/// position) of the beginning of the region of text that should be obtained from the preceding
/// piece of text.  See [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
/// Note: If {{msg-Blockly|ORDINAL_NUMBER_SUFFIX}} is defined, it will
/// automatically appear ''after'' this and any other
/// [https://translatewiki.net/wiki/Translating:Blockly#Ordinal_numbers ordinal numbers]
/// on this block.
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_END = 'get substring from letter # from end';
/// block text - Indicates that a region starting with the first letter of the preceding piece
/// of text should be invalidArduinoPath.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_START_FIRST = 'get substring from first letter';
/// dropdown - Indicates that the following number specifies the position (relative to
/// the start position) of the end of the region of text that should be obtained from the
/// preceding piece of text.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_START = 'to letter #';
/// dropdown - Indicates that the following number specifies the position (relative to the
/// end position) of the end of the region of text that should be obtained from the preceding
/// piece of text.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_END = 'to letter # from end';
/// block text - Indicates that a region ending with the last letter of the preceding piece
/// of text should be invalidArduinoPath.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_END_LAST = 'to last letter';
/// block text - Text that should go after the rightmost block/dropdown when
/// [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// extracting a region of text].  In most languages, this will be the empty string.
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_TAIL = '';

/// url - Information about the case of letters (upper-case and lower-case).
Blockly.Msg.TEXT_CHANGECASE_HELPURL = 'https://github.com/google/blockly/wiki/Text#adjusting-text-case';
/// tooltip - Describes a block to adjust the case of letters.  For more information on this block,
/// see [https://github.com/google/blockly/wiki/Text#adjusting-text-case
/// https://github.com/google/blockly/wiki/Text#adjusting-text-case].
Blockly.Msg.TEXT_CHANGECASE_TOOLTIP = 'Return a copy of the text in a different case.';
/// block text - Indicates that all of the letters in the following piece of text should be
/// capitalized.  If your language does not use case, you may indicate that this is not
/// applicable to your language.  For more information on this block, see
/// [https://github.com/google/blockly/wiki/Text#adjusting-text-case
/// https://github.com/google/blockly/wiki/Text#adjusting-text-case].
Blockly.Msg.TEXT_CHANGECASE_OPERATOR_UPPERCASE = 'to UPPER CASE';
/// block text - Indicates that all of the letters in the following piece of text should be converted to lower-case.  If your language does not use case, you may indicate that this is not applicable to your language.  For more information on this block, see [https://github.com/google/blockly/wiki/Text#adjusting-text-case https://github.com/google/blockly/wiki/Text#adjusting-text-case].
Blockly.Msg.TEXT_CHANGECASE_OPERATOR_LOWERCASE = 'to lower case';
/// block text - Indicates that the first letter of each of the following words should be capitalized and the rest converted to lower-case.  If your language does not use case, you may indicate that this is not applicable to your language.  For more information on this block, see [https://github.com/google/blockly/wiki/Text#adjusting-text-case https://github.com/google/blockly/wiki/Text#adjusting-text-case].
Blockly.Msg.TEXT_CHANGECASE_OPERATOR_TITLECASE = 'to Title Case';

/// url - Information about trimming (removing) text off the beginning and ends of pieces of text.
Blockly.Msg.TEXT_TRIM_HELPURL = 'https://github.com/google/blockly/wiki/Text#trimming-removing-spaces';
/// tooltip - See [https://github.com/google/blockly/wiki/Text#trimming-removing-spaces
/// https://github.com/google/blockly/wiki/Text#trimming-removing-spaces].
Blockly.Msg.TEXT_TRIM_TOOLTIP = 'Return a copy of the text with spaces removed from one or both ends.';
/// dropdown - Removes spaces from the beginning and end of a piece of text.  See
/// [https://github.com/google/blockly/wiki/Text#trimming-removing-spaces
/// https://github.com/google/blockly/wiki/Text#trimming-removing-spaces].  Note that neither
/// this nor the other options modify the original piece of text (that follows);
/// the block just returns a version of the text without the specified spaces.
Blockly.Msg.TEXT_TRIM_OPERATOR_BOTH = 'trim spaces from both sides of';
/// dropdown - Removes spaces from the beginning of a piece of text.  See
/// [https://github.com/google/blockly/wiki/Text#trimming-removing-spaces
/// https://github.com/google/blockly/wiki/Text#trimming-removing-spaces].
/// Note that in right-to-left scripts, this will remove spaces from the right side.
Blockly.Msg.TEXT_TRIM_OPERATOR_LEFT = 'trim spaces from left side of';
/// dropdown - Removes spaces from the end of a piece of text.  See
/// [https://github.com/google/blockly/wiki/Text#trimming-removing-spaces
/// https://github.com/google/blockly/wiki/Text#trimming-removing-spaces].
/// Note that in right-to-left scripts, this will remove spaces from the left side.
Blockly.Msg.TEXT_TRIM_OPERATOR_RIGHT = 'trim spaces from right side of';

/// url - Information about displaying text on computers.
Blockly.Msg.TEXT_PRINT_HELPURL = 'https://github.com/google/blockly/wiki/Text#printing-text';
/// block text - Display the input on the screen.  See
/// [https://github.com/google/blockly/wiki/Text#printing-text
/// https://github.com/google/blockly/wiki/Text#printing-text].
/// \n\nParameters:\n* %1 - the value to print
Blockly.Msg.TEXT_PRINT_TITLE = 'print %1';
/// tooltip - See [https://github.com/google/blockly/wiki/Text#printing-text
/// https://github.com/google/blockly/wiki/Text#printing-text].
Blockly.Msg.TEXT_PRINT_TOOLTIP = 'Print the specified text, number or other value.';
/// url - Information about getting text from users.
Blockly.Msg.TEXT_PROMPT_HELPURL = 'https://github.com/google/blockly/wiki/Text#getting-input-from-the-user';
/// dropdown - Specifies that a piece of text should be requested from the user with
/// the following message.  See [https://github.com/google/blockly/wiki/Text#printing-text
/// https://github.com/google/blockly/wiki/Text#printing-text].
Blockly.Msg.TEXT_PROMPT_TYPE_TEXT = 'prompt for text with message';
/// dropdown - Specifies that a number should be requested from the user with the
/// following message.  See [https://github.com/google/blockly/wiki/Text#printing-text
/// https://github.com/google/blockly/wiki/Text#printing-text].
Blockly.Msg.TEXT_PROMPT_TYPE_NUMBER = 'prompt for number with message';
/// dropdown - Precedes the message with which the user should be prompted for
/// a number.  See [https://github.com/google/blockly/wiki/Text#printing-text
/// https://github.com/google/blockly/wiki/Text#printing-text].
Blockly.Msg.TEXT_PROMPT_TOOLTIP_NUMBER = 'Prompt for user for a number.';
/// dropdown - Precedes the message with which the user should be prompted for some text.
/// See [https://github.com/google/blockly/wiki/Text#printing-text
/// https://github.com/google/blockly/wiki/Text#printing-text].
Blockly.Msg.TEXT_PROMPT_TOOLTIP_TEXT = 'Prompt for user for some text.';

// Lists Blocks.
/// url - Information on empty lists.
Blockly.Msg.LISTS_CREATE_EMPTY_HELPURL = 'https://github.com/google/blockly/wiki/Lists#create-empty-list';
/// block text - See [https://github.com/google/blockly/wiki/Lists#create-empty-list https://github.com/google/blockly/wiki/Lists#create-empty-list].
Blockly.Msg.LISTS_CREATE_EMPTY_TITLE = 'create empty list';
/// block text - See [https://github.com/google/blockly/wiki/Lists#create-empty-list https://github.com/google/blockly/wiki/Lists#create-empty-list].
Blockly.Msg.LISTS_CREATE_EMPTY_TOOLTIP = 'Returns a list, of length 0, containing no data records';

/// url - Information on building lists.
Blockly.Msg.LISTS_CREATE_WITH_HELPURL = 'https://github.com/google/blockly/wiki/Lists#create-list-with';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#create-list-with https://github.com/google/blockly/wiki/Lists#create-list-with].
Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP = 'Create a list with any number of items.';
/// block text - See [https://github.com/google/blockly/wiki/Lists#create-list-with https://github.com/google/blockly/wiki/Lists#create-list-with].
Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH = 'create list with';
/// block text - This appears in a sub-block when [https://github.com/google/blockly/wiki/Lists#changing-number-of-inputs changing the number of inputs in a ''''create list with'''' block].\n{{Identical|List}}
Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = 'list';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#changing-number-of-inputs https://github.com/google/blockly/wiki/Lists#changing-number-of-inputs].
Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP = 'Add, remove, or reorder sections to reconfigure this list block.';
Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE = Blockly.Msg.VARIABLES_DEFAULT_NAME;
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#changing-number-of-inputs https://github.com/google/blockly/wiki/Lists#changing-number-of-inputs].
Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP = 'Add an item to the list.';

/// url - Information about [https://github.com/google/blockly/wiki/Lists#create-list-with creating a list with multiple copies of a single item].
Blockly.Msg.LISTS_REPEAT_HELPURL = 'https://github.com/google/blockly/wiki/Lists#create-list-with';
/// url - See [https://github.com/google/blockly/wiki/Lists#create-list-with creating a list with multiple copies of a single item].
Blockly.Msg.LISTS_REPEAT_TOOLTIP = 'Creates a list consisting of the given value repeated the specified number of times.';
/// block text - See [https://github.com/google/blockly/wiki/Lists#create-list-with
/// https://github.com/google/blockly/wiki/Lists#create-list-with].
///\n\nParameters:\n* %1 - the item (text) to be repeated\n* %2 - the number of times to repeat it
Blockly.Msg.LISTS_REPEAT_TITLE = 'create list with item %1 repeated %2 times';

/// url - Information about how the length of a list is computed (i.e., by the total number of elements, not the number of different elements).
Blockly.Msg.LISTS_LENGTH_HELPURL = 'https://github.com/google/blockly/wiki/Lists#length-of';
/// block text - See [https://github.com/google/blockly/wiki/Lists#length-of https://github.com/google/blockly/wiki/Lists#length-of].
/// \n\nParameters:\n* %1 - the list whose length is desired
Blockly.Msg.LISTS_LENGTH_TITLE = 'length of %1';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#length-of https://github.com/google/blockly/wiki/Lists#length-of Blockly:Lists:length of].
Blockly.Msg.LISTS_LENGTH_TOOLTIP = 'Returns the length of a list.';

/// url - See [https://github.com/google/blockly/wiki/Lists#is-empty https://github.com/google/blockly/wiki/Lists#is-empty].
Blockly.Msg.LISTS_ISEMPTY_HELPURL = 'https://github.com/google/blockly/wiki/Lists#is-empty';
/// block text - See [https://github.com/google/blockly/wiki/Lists#is-empty
/// https://github.com/google/blockly/wiki/Lists#is-empty].
/// \n\nParameters:\n* %1 - the list to test
Blockly.Msg.LISTS_ISEMPTY_TITLE = '%1 is empty';
/// block tooltip - See [https://github.com/google/blockly/wiki/Lists#is-empty
/// https://github.com/google/blockly/wiki/Lists#is-empty].
Blockly.Msg.LISTS_ISEMPTY_TOOLTIP = 'Returns true if the list is empty.';

/// block text - Title of blocks operating on [https://github.com/google/blockly/wiki/Lists lists].
Blockly.Msg.LISTS_INLIST = 'in list';

/// url - See [https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list
/// https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list].
Blockly.Msg.LISTS_INDEX_OF_HELPURL = 'https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list';
Blockly.Msg.LISTS_INDEX_OF_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
/// dropdown - See [https://github.com/google/blockly/wiki/Lists#finding-items-in-a-list
/// Lists#finding-items-in-a-list].
/// [[File:Blockly-list-find.png]]
Blockly.Msg.LISTS_INDEX_OF_FIRST = 'find first occurrence of item';
/// dropdown - See [https://github.com/google/blockly/wiki/Lists#finding-items-in-a-list
/// https://github.com/google/blockly/wiki/Lists#finding-items-in-a-list].
/// [[File:Blockly-list-find.png]]
Blockly.Msg.LISTS_INDEX_OF_LAST = 'find last occurrence of item';
/// tooltip - %1 will be replaced by either the number 0 or -1 depending on the indexing mode.  See [https://github.com/google/blockly/wiki/Lists#finding-items-in-a-list
/// https://github.com/google/blockly/wiki/Lists#finding-items-in-a-list].
/// [[File:Blockly-list-find.png]]
Blockly.Msg.LISTS_INDEX_OF_TOOLTIP = 'Returns the index of the first/last occurrence of the item in the list. Returns %1 if item is not found.';

Blockly.Msg.LISTS_GET_INDEX_HELPURL = Blockly.Msg.LISTS_INDEX_OF_HELPURL;
/// dropdown - Indicates that the user wishes to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item
/// get an item from a list] without removing it from the list.
Blockly.Msg.LISTS_GET_INDEX_GET = 'get';
/// dropdown - Indicates that the user wishes to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item
/// get and remove an item from a list], as opposed to merely getting
/// it without modifying the list.
Blockly.Msg.LISTS_GET_INDEX_GET_REMOVE = 'get and remove';
/// dropdown - Indicates that the user wishes to
/// [https://github.com/google/blockly/wiki/Lists#removing-an-item
/// remove an item from a list].\n{{Identical|Remove}}
Blockly.Msg.LISTS_GET_INDEX_REMOVE = 'remove';
/// dropdown - Indicates that an index relative to the front of the list should be used to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item get and/or remove
/// an item from a list].  Note: If {{msg-Blockly|ORDINAL_NUMBER_SUFFIX}} is defined, it will
/// automatically appear ''after'' this number (and any other ordinal numbers on this block).
/// See [[Translating:Blockly#Ordinal_numbers]] for more information on ordinal numbers in Blockly.
/// [[File:Blockly-list-get-item.png]]
Blockly.Msg.LISTS_GET_INDEX_FROM_START = '#';
/// dropdown - Indicates that an index relative to the end of the list should be used
/// to [https://github.com/google/blockly/wiki/Lists#getting-a-single-item access an item in a list].
/// [[File:Blockly-list-get-item.png]]
Blockly.Msg.LISTS_GET_INDEX_FROM_END = '# from end';
/// dropdown - Indicates that the '''first''' item should be
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item accessed in a list].
/// [[File:Blockly-list-get-item.png]]
Blockly.Msg.LISTS_GET_INDEX_FIRST = 'first';
/// dropdown - Indicates that the '''last''' item should be
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item accessed in a list].
/// [[File:Blockly-list-get-item.png]]
Blockly.Msg.LISTS_GET_INDEX_LAST = 'last';
/// dropdown - Indicates that a '''random''' item should be
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item accessed in a list].
/// [[File:Blockly-list-get-item.png]]
Blockly.Msg.LISTS_GET_INDEX_RANDOM = 'random';
/// block text - Text that should go after the rightmost block/dropdown when
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item
/// accessing an item from a list].  In most languages, this will be the empty string.
/// [[File:Blockly-list-get-item.png]]
Blockly.Msg.LISTS_GET_INDEX_TAIL = '';
Blockly.Msg.LISTS_GET_INDEX_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
/// tooltip - Indicates the ordinal number that the first item in a list is referenced by.  %1 will be replaced by either "#0" or "#1" depending on the indexing mode.
Blockly.Msg.LISTS_INDEX_FROM_START_TOOLTIP = '%1 is the first item.';
/// tooltip - Indicates the ordinal number that the last item in a list is referenced by.  %1 will be replaced by either "#0" or "#1" depending on the indexing mode.
Blockly.Msg.LISTS_INDEX_FROM_END_TOOLTIP = '%1 is the last item.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for more information.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FROM = 'Returns the item at the specified position in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for more information.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FIRST = 'Returns the first item in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for more information.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_LAST = 'Returns the last item in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for more information.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM = 'Returns a random item in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for '#' or '# from end'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM = 'Removes and returns the item at the specified position in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'first'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST = 'Removes and returns the first item in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'last'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST = 'Removes and returns the last item in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'random'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM = 'Removes and returns a random item in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for '#' or '# from end'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM = 'Removes the item at the specified position in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'first'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST = 'Removes the first item in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'last'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST = 'Removes the last item in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'random'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM = 'Removes a random item in a list.';
/// url - Information about putting items in lists.
Blockly.Msg.LISTS_SET_INDEX_HELPURL = 'https://github.com/google/blockly/wiki/Lists#in-list--set';
Blockly.Msg.LISTS_SET_INDEX_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
/// block text - [https://github.com/google/blockly/wiki/Lists#in-list--set
/// Replaces an item in a list].
/// [[File:Blockly-in-list-set-insert.png]]
Blockly.Msg.LISTS_SET_INDEX_SET = 'set';
/// block text - [https://github.com/google/blockly/wiki/Lists#in-list--insert-at
/// Inserts an item into a list].
/// [[File:Blockly-in-list-set-insert.png]]
Blockly.Msg.LISTS_SET_INDEX_INSERT = 'insert at';
/// block text - The word(s) after the position in the list and before the item to be set/inserted.
/// [[File:Blockly-in-list-set-insert.png]]
Blockly.Msg.LISTS_SET_INDEX_INPUT_TO = 'as';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "set" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FROM = 'Sets the item at the specified position in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "set" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FIRST = 'Sets the first item in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "set" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_LAST = 'Sets the last item in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "set" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM = 'Sets a random item in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "insert" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM = 'Inserts the item at the specified position in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "insert" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST = 'Inserts the item at the start of a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "insert" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST = 'Append the item to the end of a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "insert" block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM = 'Inserts the item randomly in a list.';

/// url - Information describing extracting a sublist from an existing list.
Blockly.Msg.LISTS_GET_SUBLIST_HELPURL = 'https://github.com/google/blockly/wiki/Lists#getting-a-sublist';
Blockly.Msg.LISTS_GET_SUBLIST_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
/// dropdown - Indicates that an index relative to the front of the list should be used
/// to specify the beginning of the range from which to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist get a sublist].
/// [[File:Blockly-get-sublist.png]]
/// Note: If {{msg-Blockly|ORDINAL_NUMBER_SUFFIX}} is defined, it will
/// automatically appear ''after'' this number (and any other ordinal numbers on this block).
/// See [[Translating:Blockly#Ordinal_numbers]] for more information on ordinal numbers in Blockly.
Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_START = 'get sub-list from #';
/// dropdown - Indicates that an index relative to the end of the list should be used
/// to specify the beginning of the range from which to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist get a sublist].
Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_END = 'get sub-list from # from end';
/// dropdown - Indicates that the
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist sublist to extract]
/// should begin with the list's first item.
Blockly.Msg.LISTS_GET_SUBLIST_START_FIRST = 'get sub-list from first';
/// dropdown - Indicates that an index relative to the front of the list should be
/// used to specify the end of the range from which to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist get a sublist].
/// [[File:Blockly-get-sublist.png]]
Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_START = 'to #';
/// dropdown - Indicates that an index relative to the end of the list should be
/// used to specify the end of the range from which to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist get a sublist].
/// [[File:Blockly-get-sublist.png]]
Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_END = 'to # from end';
/// dropdown - Indicates that the '''last''' item in the given list should be
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist the end
/// of the selected sublist].
/// [[File:Blockly-get-sublist.png]]
Blockly.Msg.LISTS_GET_SUBLIST_END_LAST = 'to last';
/// block text - This appears in the rightmost position ("tail") of the
/// sublist block, as described at
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist
/// https://github.com/google/blockly/wiki/Lists#getting-a-sublist].
/// In English and most other languages, this is the empty string.
/// [[File:Blockly-get-sublist.png]]
Blockly.Msg.LISTS_GET_SUBLIST_TAIL = '';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-sublist
/// https://github.com/google/blockly/wiki/Lists#getting-a-sublist] for more information.
/// [[File:Blockly-get-sublist.png]]
Blockly.Msg.LISTS_GET_SUBLIST_TOOLTIP = 'Creates a copy of the specified portion of a list.';

/// url - Information describing sorting a list.
Blockly.Msg.LISTS_SORT_HELPURL = 'https://github.com/google/blockly/wiki/Lists#sorting-a-list';
/// Sort as type %1 (numeric or alphabetic) in order %2 (ascending or descending) a list of items %3.\n{{Identical|Sort}}
Blockly.Msg.LISTS_SORT_TITLE = 'sort %1 %2 %3';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#sorting-a-list].
Blockly.Msg.LISTS_SORT_TOOLTIP = 'Sort a copy of a list.';
/// sorting order or direction from low to high value for numeric, or A-Z for alphabetic.\n{{Identical|Ascending}}
Blockly.Msg.LISTS_SORT_ORDER_ASCENDING = 'ascending';
/// sorting order or direction from high to low value for numeric, or Z-A for alphabetic.\n{{Identical|Descending}}
Blockly.Msg.LISTS_SORT_ORDER_DESCENDING = 'descending';
/// sort by treating each item as a number.
Blockly.Msg.LISTS_SORT_TYPE_NUMERIC = 'numeric';
/// sort by treating each item alphabetically, case-sensitive.
Blockly.Msg.LISTS_SORT_TYPE_TEXT = 'alphabetic';
/// sort by treating each item alphabetically, ignoring differences in case.
Blockly.Msg.LISTS_SORT_TYPE_IGNORECASE = 'alphabetic, ignore case';

/// url - Information describing splitting text into a list, or joining a list into text.
Blockly.Msg.LISTS_SPLIT_HELPURL = 'https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists';
/// dropdown - Indicates that text will be split up into a list (e.g. "a-b-c" -> ["a", "b", "c"]).
Blockly.Msg.LISTS_SPLIT_LIST_FROM_TEXT = 'make list from text';
/// dropdown - Indicates that a list will be joined together to form text (e.g. ["a", "b", "c"] -> "a-b-c").
Blockly.Msg.LISTS_SPLIT_TEXT_FROM_LIST = 'make text from list';
/// block text - Prompts for a letter to be used as a separator when splitting or joining text.
Blockly.Msg.LISTS_SPLIT_WITH_DELIMITER = 'with delimiter';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#make-list-from-text
/// https://github.com/google/blockly/wiki/Lists#make-list-from-text] for more information.
Blockly.Msg.LISTS_SPLIT_TOOLTIP_SPLIT = 'Split text into a list of texts, breaking at each delimiter.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#make-text-from-list
/// https://github.com/google/blockly/wiki/Lists#make-text-from-list] for more information.
Blockly.Msg.LISTS_SPLIT_TOOLTIP_JOIN = 'Join a list of texts into one text, separated by a delimiter.';

/// grammar - Text that follows an ordinal number (a number that indicates
/// position relative to other numbers).  In most languages, such text appears
/// before the number, so this should be blank.  An exception is Hungarian.
/// See [[Translating:Blockly#Ordinal_numbers]] for more information.
Blockly.Msg.ORDINAL_NUMBER_SUFFIX = '';

// Variables Blocks.
/// url - Information about ''variables'' in computer programming.  Consider using your language's translation of [https://en.wikipedia.org/wiki/Variable_(computer_science) https://en.wikipedia.org/wiki/Variable_(computer_science)], if it exists.
Blockly.Msg.VARIABLES_GET_HELPURL = 'https://github.com/google/blockly/wiki/Variables#get';
/// tooltip - This gets the value of the named variable without modifying it.
Blockly.Msg.VARIABLES_GET_TOOLTIP = 'Returns the value of this variable.';
/// context menu - Selecting this creates a block to set (change) the value of this variable.
/// \n\nParameters:\n* %1 - the name of the variable.
Blockly.Msg.VARIABLES_GET_CREATE_SET = 'Create "set %1"';

/// url - Information about ''variables'' in computer programming.  Consider using your language's translation of [https://en.wikipedia.org/wiki/Variable_(computer_science) https://en.wikipedia.org/wiki/Variable_(computer_science)], if it exists.
Blockly.Msg.VARIABLES_SET_HELPURL = 'https://github.com/google/blockly/wiki/Variables#set';
/// block text - Change the value of a mathematical variable: '''set [the value of] x to 7'''.\n\nParameters:\n* %1 - the name of the variable.\n* %2 - the value to be assigned.
Blockly.Msg.VARIABLES_SET = 'set %1 to %2';
/// tooltip - This initializes or changes the value of the named variable.
Blockly.Msg.VARIABLES_SET_TOOLTIP = 'Sets this variable to be equal to the input.';
/// context menu - Selecting this creates a block to get (change) the value of
/// this variable.\n\nParameters:\n* %1 - the name of the variable.
Blockly.Msg.VARIABLES_SET_CREATE_GET = 'Create "get %1"';

// Procedures Blocks.
/// url - Information about defining [https://en.wikipedia.org/wiki/Procedure_(computer_science) functions] that do not have return values.
Blockly.Msg.PROCEDURES_DEFNORETURN_HELPURL = 'https://en.wikipedia.org/wiki/Procedure_%28computer_science%29';
/// block text - This precedes the name of the function when defining it.  See
/// [https://blockly-demo.appspot.com/static/apps/code/index.html?lang=en#c84aoc this sample
/// function definition].
Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE = 'to';
/// default name - This acts as a placeholder for the name of a function on a
/// function definition block, as shown on
/// [https://blockly-demo.appspot.com/static/apps/code/index.html?lang=en#w7cfju this block].
/// The user will replace it with the function's name.
Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE = 'do something';
/// block text - This precedes the list of parameters on a function's defiition block.  See
/// [https://blockly-demo.appspot.com/static/apps/code/index.html?lang=en#voztpd this sample
/// function with parameters].
Blockly.Msg.PROCEDURES_BEFORE_PARAMS = 'with:';
/// block text - This precedes the list of parameters on a function's caller block.  See
/// [https://blockly-demo.appspot.com/static/apps/code/index.html?lang=en#voztpd this sample
/// function with parameters].
Blockly.Msg.PROCEDURES_CALL_BEFORE_PARAMS = 'with:';
/// block text - This appears next to the function's "body", the blocks that should be
/// run when the function is called, as shown in
/// [https://blockly-demo.appspot.com/static/apps/code/index.html?lang=en#voztpd this sample
/// function definition].
Blockly.Msg.PROCEDURES_DEFNORETURN_DO = '';
/// tooltip
Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP = 'Creates a function with no output.';
/// Placeholder text that the user is encouraged to replace with a description of what their function does.
Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT = 'Describe this function...';
/// url - Information about defining [https://en.wikipedia.org/wiki/Procedure_(computer_science) functions] that have return values.
Blockly.Msg.PROCEDURES_DEFRETURN_HELPURL = 'https://en.wikipedia.org/wiki/Procedure_%28computer_science%29';
Blockly.Msg.PROCEDURES_DEFRETURN_TITLE = Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE;
Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE = Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE;
Blockly.Msg.PROCEDURES_DEFRETURN_DO = Blockly.Msg.PROCEDURES_DEFNORETURN_DO;
Blockly.Msg.PROCEDURES_DEFRETURN_COMMENT = Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT;
/// block text - This imperative or infinite verb precedes the value that is used as the return value
/// (output) of this function.  See
/// [https://blockly-demo.appspot.com/static/apps/code/index.html?lang=en#6ot5y5 this sample
/// function that returns a value].
Blockly.Msg.PROCEDURES_DEFRETURN_RETURN = 'return';
/// tooltip
Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP = 'Creates a function with an output.';
/// Label for a checkbox that controls if statements are allowed in a function.
Blockly.Msg.PROCEDURES_ALLOW_STATEMENTS = 'allow statements';

/// alert - The user has created a function with two parameters that have the same name.  Every parameter must have a different name.
Blockly.Msg.PROCEDURES_DEF_DUPLICATE_WARNING = 'Warning: This function has duplicate parameters.';

/// url - Information about calling [https://en.wikipedia.org/wiki/Procedure_(computer_science) functions] that do not return values.
Blockly.Msg.PROCEDURES_CALLNORETURN_HELPURL = 'https://en.wikipedia.org/wiki/Procedure_%28computer_science%29';
/// tooltip - This block causes the body (blocks inside) of the named function definition to be run.
Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP = 'Run the user-defined function "%1".';

/// url - Information about calling [https://en.wikipedia.org/wiki/Procedure_(computer_science) functions] that return values.
Blockly.Msg.PROCEDURES_CALLRETURN_HELPURL = 'https://en.wikipedia.org/wiki/Procedure_%28computer_science%29';
/// tooltip - This block causes the body (blocks inside) of the named function definition to be run.\n\nParameters:\n* %1 - the name of the function.
Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP = 'Run the user-defined function "%1" and use its output.';

/// block text - This text appears on a block in a window that appears when the user clicks
/// on the plus sign or star on a function definition block.  It refers to the set of parameters
/// (referred to by the simpler term "inputs") to the function.  See
/// [[Translating:Blockly#function_definitions]].
Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TITLE = 'inputs';
/// tooltip
Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TOOLTIP = 'Add, remove, or reorder inputs to this function.';
/// block text - This text appears on a block in a window that appears when the user clicks
/// on the plus sign or star on a function definition block].  It appears on the block for
/// adding an individual parameter (referred to by the simpler term "inputs") to the function.
/// See [[Translating:Blockly#function_definitions]].
Blockly.Msg.PROCEDURES_MUTATORARG_TITLE = 'input name:';
/// tooltip
Blockly.Msg.PROCEDURES_MUTATORARG_TOOLTIP = 'Add an input to the function.';

/// context menu - This appears on the context menu for function calls.  Selecting
/// it causes the corresponding function definition to be highlighted (as shown at
/// [[Translating:Blockly#context_menus]].
Blockly.Msg.PROCEDURES_HIGHLIGHT_DEF = 'Highlight function definition';
/// context menu - This appears on the context menu for function definitions.
/// Selecting it creates a block to call the function.\n\nParameters:\n* %1 - the name of the function.\n{{Identical|Create}}
Blockly.Msg.PROCEDURES_CREATE_DO = 'Create "%1"';

/// tooltip - If the first value is true, this causes the second value to be returned
/// immediately from the enclosing function.
Blockly.Msg.PROCEDURES_IFRETURN_TOOLTIP = 'If a value is true, then return a second value.';
/// url - Information about guard clauses.
Blockly.Msg.PROCEDURES_IFRETURN_HELPURL = 'http://c2.com/cgi/wiki?GuardClause';
/// warning - This appears if the user tries to use this block outside of a function definition.
Blockly.Msg.PROCEDURES_IFRETURN_WARNING = 'Warning: This block may be used only within a function definition.';

/// procedurally generated messages from here on out
Blockly.Msg.PHASER_SIMPLE_INIT_FIELD_1 = 'run phaser';
Blockly.Msg.PHASER_SIMPLE_INIT_FIELD_2 = 'width';
Blockly.Msg.PHASER_SIMPLE_INIT_FIELD_3 = 'height';
Blockly.Msg.PHASER_SIMPLE_INIT_FIELD_4 = 'on preload do';
Blockly.Msg.PHASER_SIMPLE_INIT_FIELD_5 = 'on create do';
Blockly.Msg.PHASER_SIMPLE_INIT_FIELD_6 = 'on update do';
Blockly.Msg.PHASER_SIMPLE_INIT_TOOLTIP = 'Create a Phaser Game with given width and height.';
Blockly.Msg.PHASER_SIMPLE_INIT_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Game.html';
Blockly.Msg.START_PHASER_FOR_STATES_FIELD_1 = 'start phaser for states with';
Blockly.Msg.START_PHASER_FOR_STATES_FIELD_2 = 'width';
Blockly.Msg.START_PHASER_FOR_STATES_FIELD_3 = 'height';
Blockly.Msg.START_PHASER_FOR_STATES_TOOLTIP = 'Create a Phaser game using explicit states.';
Blockly.Msg.START_PHASER_FOR_STATES_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Game.html';
Blockly.Msg.CENTER_AND_STRETCH_FIELD_1 = 'center and stretch phaser';
Blockly.Msg.CENTER_AND_STRETCH_TOOLTIP = 'Tells Phaser to center and stretch the game view to fit its window.';
Blockly.Msg.CENTER_AND_STRETCH_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.ScaleManager.html#scaleMode';
Blockly.Msg.ENABLE_STEP_FIELD_1 = 'enable stepping';
Blockly.Msg.ENABLE_STEP_TOOLTIP = 'Enables manually stepping through game frames. Usually for debugging purposes.';
Blockly.Msg.ENABLE_STEP_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Game.html#enableStep';
Blockly.Msg.DISABLE_STEP_FIELD_1 = 'disable stepping';
Blockly.Msg.DISABLE_STEP_TOOLTIP = 'Disables manually stepping into the next game loop. This is the default behavior.';
Blockly.Msg.DISABLE_STEP_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Game.html#disableStep';
Blockly.Msg.STEP_FIELD_1 = 'Step';
Blockly.Msg.STEP_TOOLTIP = 'Manually steps to the next game loop. Stepping should be enabled before using this.';
Blockly.Msg.STEP_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Game.html#step';
Blockly.Msg.CREATE_GRAPHICS_OBJECT_FIELD_1 = 'create graphics object with offsets';
Blockly.Msg.CREATE_GRAPHICS_OBJECT_FIELD_2 = 'x:';
Blockly.Msg.CREATE_GRAPHICS_OBJECT_FIELD_3 = 'y:';
Blockly.Msg.CREATE_GRAPHICS_OBJECT_TOOLTIP = 'Returns an object that can draw shapes in the world.';
Blockly.Msg.CREATE_GRAPHICS_OBJECT_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Graphics.html';
Blockly.Msg.DRAW_SHAPES_WITH_COLOUR_FIELD_1 = 'fill shapes with ';
Blockly.Msg.DRAW_SHAPES_WITH_COLOUR_FIELD_2 = 'colour';
Blockly.Msg.DRAW_SHAPES_WITH_COLOUR_FIELD_3 = 'using';
Blockly.Msg.DRAW_SHAPES_WITH_COLOUR_TOOLTIP = 'Start drawing shapes in the world using a given graphics object.\nUse the shape drawing blocks inside this one.';
Blockly.Msg.DRAW_SHAPES_WITH_COLOUR_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Graphics.html#beginFill';
Blockly.Msg.DRAW_RECTANGLE_FIELD_1 = 'draw rectangle at position';
Blockly.Msg.DRAW_RECTANGLE_FIELD_2 = 'x:';
Blockly.Msg.DRAW_RECTANGLE_FIELD_3 = 'y:';
Blockly.Msg.DRAW_RECTANGLE_FIELD_4 = 'with';
Blockly.Msg.DRAW_RECTANGLE_FIELD_5 = 'width:';
Blockly.Msg.DRAW_RECTANGLE_FIELD_6 = 'height:';
Blockly.Msg.DRAW_RECTANGLE_FIELD_7 = 'using';
Blockly.Msg.DRAW_RECTANGLE_TOOLTIP = 'Draws a rectangle at a given position in the world. Doesn\'t work on its own. Put it inside the \'fill shapes with\' block.';
Blockly.Msg.DRAW_RECTANGLE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Graphics.html#drawRect';
Blockly.Msg.STOP_ANIMATION_FIELD_1 = 'stop animation on';
Blockly.Msg.STOP_ANIMATION_TOOLTIP = 'Stops any animation from playing on the given sprite.';
Blockly.Msg.STOP_ANIMATION_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.AnimationManager.html#stop';
Blockly.Msg.PLAY_ANIMATION_FIELD_1 = 'play animation';
Blockly.Msg.PLAY_ANIMATION_FIELD_2 = 'on';
Blockly.Msg.PLAY_ANIMATION_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.AnimationManager.html#play';
Blockly.Msg.PLAY_ANIMATION_TOOLTIP = 'Starts playing an animation on the given sprite.';
Blockly.Msg.SET_FRAME_FIELD_1 = 'Set Current Frame # For';
Blockly.Msg.SET_FRAME_TOOLTIP = 'Jumps to a given animation frame.';
Blockly.Msg.SET_FRAME_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.AnimationManager.html#frame';
Blockly.Msg.ADD_ANIMATION_FIELD_1 = 'add animation to';
Blockly.Msg.ADD_ANIMATION_FIELD_2 = 'tagged';
Blockly.Msg.ADD_ANIMATION_NAME_TEXT_DEFAULT = 'name';
Blockly.Msg.ADD_ANIMATION_FIELD_3 = 'with frames';
Blockly.Msg.ADD_ANIMATION_FIELD_4 = 'displayed at';
Blockly.Msg.ADD_ANIMATION_FIELD_5 = 'FPS';
Blockly.Msg.ADD_ANIMATION_FIELD_6 = 'loop';
Blockly.Msg.ADD_ANIMATION_TOOLTIP = 'Add an animation to an object based on a list of frames';
Blockly.Msg.ADD_ANIMATION_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.AnimationManager.html#add';
Blockly.Msg.ADD_CHILD_FIELD_1 = 'add child object';
Blockly.Msg.ADD_CHILD_FIELD_2 = 'to';
Blockly.Msg.ADD_CHILD_TOOLTIP = 'Add a child to a sprite. This will make them move together.';
Blockly.Msg.ADD_CHILD_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#addChild';
Blockly.Msg.RESET_FRAME_FIELD_1 = 'reset the frame dimensions of';
Blockly.Msg.RESET_FRAME_TOOLTIP = 'Resets the texture frame dimensions that the sprite uses for rendering.';
Blockly.Msg.RESET_FRAME_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#resetFrame';
Blockly.Msg.RESIZE_FRAME_FIELD_1 = 'resize the frame of';
Blockly.Msg.RESIZE_FRAME_FIELD_2 = 'to accomodate';
Blockly.Msg.RESIZE_FRAME_FIELD_3 = 'Width';
Blockly.Msg.RESIZE_FRAME_FIELD_4 = 'Height';
Blockly.Msg.RESIZE_FRAME_TOOLTIP = 'Resizes the Frame dimensions that the Game Object uses for rendering. You shouldn\'t normally need to ever call this, but in the case of special texture types such as Video or BitmapData it can be useful to adjust the dimensions directly in this way.';
Blockly.Msg.RESIZE_FRAME_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#resizeFrame';
Blockly.Msg.CREATE_IMAGE_FIELD_1 = 'create image';
Blockly.Msg.CREATE_IMAGE_FIELD_2 = 'tag';
Blockly.Msg.CREATE_IMAGE_FIELD_3 = 'source';
Blockly.Msg.CREATE_IMAGE_TOOLTIP = 'Loads an image into the game so it can be used.';
Blockly.Msg.CREATE_IMAGE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Loader.html#image';
Blockly.Msg.CREATE_SPRITE_SHEET_FIELD_1 = 'create sprite sheet';
Blockly.Msg.CREATE_SPRITE_SHEET_FIELD_2 = 'tag';
Blockly.Msg.CREATE_SPRITE_SHEET_FIELD_3 = 'source';
Blockly.Msg.CREATE_SPRITE_SHEET_FIELD_4 = 'frame width';
Blockly.Msg.CREATE_SPRITE_SHEET_FIELD_5 = 'pixels';
Blockly.Msg.CREATE_SPRITE_SHEET_FIELD_6 = 'frame height';
Blockly.Msg.CREATE_SPRITE_SHEET_FIELD_7 = 'pixels';
Blockly.Msg.CREATE_SPRITE_SHEET_TOOLTIP = 'Loads a sprite sheet, which is a collection of animation frames in a single image.\nSee the help for more info.';
Blockly.Msg.CREATE_SPRITE_SHEET_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Loader.html#spritesheet';
Blockly.Msg.ADD_IMAGE_FIELD_1 = 'add image to game at';
Blockly.Msg.ADD_IMAGE_FIELD_2 = 'x';
Blockly.Msg.ADD_IMAGE_FIELD_3 = 'y';
Blockly.Msg.ADD_IMAGE_FIELD_4 = 'tagged';
Blockly.Msg.ADD_IMAGE_TOOLTIP = 'Creates a sprite with the image specified in the tag. The tag needs to be set up with the \'create image\' or \'create sprite sheet\' blocks.';
Blockly.Msg.ADD_IMAGE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.GameObjectFactory.html#sprite';
Blockly.Msg.ADDSPRITEWITHATLAS_FIELD_1 = 'load atlas image';
Blockly.Msg.ADDSPRITEWITHATLAS_FIELD_2 = 'tag';
Blockly.Msg.ADDSPRITEWITHATLAS_FIELD_3 = 'spritesheet source';
Blockly.Msg.ADDSPRITEWITHATLAS_FIELD_4 = 'texture atlas xml';
Blockly.Msg.ADDSPRITEWITHATLAS_TOOLTIP = 'Loads a texture atlas into the game. These take more effort to set up, but can contain every animation you want for a single character.\nSee the help for more info.';
Blockly.Msg.ADDSPRITEWITHATLAS_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Loader.html#atlasXML';
Blockly.Msg.IMAGESUBTEXTUREATLAS_FIELD_1 = 'add sprite to game from atlas at';
Blockly.Msg.IMAGESUBTEXTUREATLAS_FIELD_2 = 'x';
Blockly.Msg.IMAGESUBTEXTUREATLAS_FIELD_3 = 'y';
Blockly.Msg.IMAGESUBTEXTUREATLAS_FIELD_4 = 'tagged ';
Blockly.Msg.IMAGESUBTEXTUREATLAS_FIELD_5 = 'subtexture id';
Blockly.Msg.IMAGESUBTEXTUREATLAS_TOOLTIP = 'Adds a sprite to the game using data from a texture atlas.';
Blockly.Msg.IMAGESUBTEXTUREATLAS_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Loader.html#atlasXML';
Blockly.Msg.ADD_CHILD_VI_FIELD_1 = 'add child object';
Blockly.Msg.ADD_CHILD_VI_FIELD_2 = 'to';
Blockly.Msg.ADD_CHILD_VI_TOOLTIP = 'Add a child to a sprite. This will make them move together.';
Blockly.Msg.ADD_CHILD_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#addChild';
Blockly.Msg.ADD_CHILD_AT_FIELD_1 = 'add child';
Blockly.Msg.ADD_CHILD_AT_FIELD_2 = 'to';
Blockly.Msg.ADD_CHILD_AT_FIELD_3 = 'at index';
Blockly.Msg.ADD_CHILD_AT_TOOLTIP = 'Add a child to a sprite at a specific index so you can find it later. This will make them move together.';
Blockly.Msg.ADD_CHILD_AT_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#addChildAt';
Blockly.Msg.ADD_CHILD_AT_VI_FIELD_1 = 'add child';
Blockly.Msg.ADD_CHILD_AT_VI_FIELD_2 = 'to';
Blockly.Msg.ADD_CHILD_AT_VI_FIELD_3 = 'at index';
Blockly.Msg.ADD_CHILD_AT_VI_TOOLTIP = 'Add a child to a sprite at a specific index so you can find it later. This will make them move together.';
Blockly.Msg.ADD_CHILD_AT_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#addChildAt';
Blockly.Msg.ALIGN_IN_FIELD_1 = 'align';
Blockly.Msg.ALIGN_IN_FIELD_2 = 'inside';
Blockly.Msg.ALIGN_IN_FIELD_3 = 'at the';
Blockly.Msg.ALIGN_IN_POSITION_DROPDOWN_1 = 'top left';
Blockly.Msg.ALIGN_IN_POSITION_DROPDOWN_2 = 'top center';
Blockly.Msg.ALIGN_IN_POSITION_DROPDOWN_3 = 'top right';
Blockly.Msg.ALIGN_IN_POSITION_DROPDOWN_4 = 'left center';
Blockly.Msg.ALIGN_IN_POSITION_DROPDOWN_5 = 'center';
Blockly.Msg.ALIGN_IN_POSITION_DROPDOWN_6 = 'right center';
Blockly.Msg.ALIGN_IN_POSITION_DROPDOWN_7 = 'bottom left';
Blockly.Msg.ALIGN_IN_POSITION_DROPDOWN_8 = 'bottom center';
Blockly.Msg.ALIGN_IN_POSITION_DROPDOWN_9 = 'bottom right';
Blockly.Msg.ALIGN_IN_FIELD_4 = 'offset x pixels';
Blockly.Msg.ALIGN_IN_FIELD_5 = 'offset y pixels';
Blockly.Msg.ALIGN_IN_TOOLTIP = 'Aligns this Game Object within another Game Object, or Rectangle, to one of 9 possible positions.';
Blockly.Msg.ALIGN_IN_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#alignIn';
Blockly.Msg.ALIGN_TO_FIELD_1 = 'align';
Blockly.Msg.ALIGN_TO_FIELD_2 = 'to';
Blockly.Msg.ALIGN_TO_FIELD_3 = 'at the';
Blockly.Msg.ALIGN_TO_POSITION_DROPDOWN_1 = 'top left';
Blockly.Msg.ALIGN_TO_POSITION_DROPDOWN_2 = 'top center';
Blockly.Msg.ALIGN_TO_POSITION_DROPDOWN_3 = 'top right';
Blockly.Msg.ALIGN_TO_POSITION_DROPDOWN_4 = 'left top';
Blockly.Msg.ALIGN_TO_POSITION_DROPDOWN_5 = 'left center';
Blockly.Msg.ALIGN_TO_POSITION_DROPDOWN_6 = 'left bottom';
Blockly.Msg.ALIGN_TO_POSITION_DROPDOWN_7 = 'right top';
Blockly.Msg.ALIGN_TO_POSITION_DROPDOWN_8 = 'right center';
Blockly.Msg.ALIGN_TO_POSITION_DROPDOWN_9 = 'right bottom';
Blockly.Msg.ALIGN_TO_POSITION_DROPDOWN_10 = 'bottom left';
Blockly.Msg.ALIGN_TO_POSITION_DROPDOWN_11 = 'bottom center';
Blockly.Msg.ALIGN_TO_POSITION_DROPDOWN_12 = 'bottom right';
Blockly.Msg.ALIGN_TO_FIELD_4 = 'offset x pixels';
Blockly.Msg.ALIGN_TO_FIELD_5 = 'offset y pixels';
Blockly.Msg.ALIGN_TO_TOOLTIP = 'Aligns this Game Object to the side of another Game Object, or Rectangle, in one of 12 possible positions.';
Blockly.Msg.ALIGN_TO_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#alignTo';
Blockly.Msg.BRING_TO_TOP_FIELD_1 = 'bring';
Blockly.Msg.BRING_TO_TOP_FIELD_2 = 'to the front';
Blockly.Msg.BRING_TO_TOP_TOOLTIP = 'Brings this sprite/image to the front of the display order. In case of overlapping sprites, this one will draw on top of everything else.';
Blockly.Msg.BRING_TO_TOP_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#bringToTop';
Blockly.Msg.CHECK_WORLD_BOUNDS_FIELD_1 = 'make';
Blockly.Msg.CHECK_WORLD_BOUNDS_FIELD_2 = 'check to see if it\'s inside the world?';
Blockly.Msg.CHECK_WORLD_BOUNDS_TOOLTIP = 'This object will start checking if it\'s inside the world every frame. This takes time, so it\'s disabled by default.';
Blockly.Msg.CHECK_WORLD_BOUNDS_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#checkWorldBounds';
Blockly.Msg.CONTAINS_FIELD_1 = 'is';
Blockly.Msg.CONTAINS_FIELD_2 = 'a child of';
Blockly.Msg.CONTAINS_FIELD_3 = '?';
Blockly.Msg.CONTAINS_TOOLTIP = 'Checks to see if one sprite is the child of another.';
Blockly.Msg.CONTAINS_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#contains';
Blockly.Msg.CONTAINS_VI_FIELD_1 = 'is';
Blockly.Msg.CONTAINS_VI_FIELD_2 = 'a child of';
Blockly.Msg.CONTAINS_VI_FIELD_3 = '?';
Blockly.Msg.CONTAINS_VI_TOOLTIP = 'Checks to see if one sprite is the child of another.';
Blockly.Msg.CONTAINS_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#contains';
Blockly.Msg.CROP_FIELD_1 = 'crop';
Blockly.Msg.CROP_FIELD_2 = 'to';
Blockly.Msg.CROP_TOOLTIP = 'crop a sprite to an area defined by a rectangle or other object';
Blockly.Msg.CROP_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#crop';
Blockly.Msg.CLEAR_CROPPING_FIELD_1 = 'stop cropping';
Blockly.Msg.CLEAR_CROPPING_TOOLTIP = 'Removes any cropping from a sprite.';
Blockly.Msg.CLEAR_CROPPING_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#crop';
Blockly.Msg.DESTROY_SPRITE_FIELD_1 = 'destroy';
Blockly.Msg.DESTROY_SPRITE_FIELD_2 = 'children too?';
Blockly.Msg.DESTROY_SPRITE_TOOLTIP = 'Deletes a sprite from the game, with an option to delete its children too.';
Blockly.Msg.DESTROY_SPRITE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#destroy';
Blockly.Msg.GET_CHILD_AT_VI_FIELD_1 = 'get child of';
Blockly.Msg.GET_CHILD_AT_VI_FIELD_2 = 'at index';
Blockly.Msg.GET_CHILD_AT_VI_TOOLTIP = 'Finds a specific child on this sprite/image by its index.';
Blockly.Msg.GET_CHILD_AT_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#getChildAt';
Blockly.Msg.GET_CHILD_INDEX_FIELD_1 = 'Get index of Child';
Blockly.Msg.GET_CHILD_INDEX_FIELD_2 = 'on ';
Blockly.Msg.GET_CHILD_INDEX_TOOLTIP = 'Finds an index that describes where on the parent this object is. ';
Blockly.Msg.GET_CHILD_INDEX_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#getChildIndex';
Blockly.Msg.GET_CHILD_INDEX_VI_FIELD_1 = 'get index of child';
Blockly.Msg.GET_CHILD_INDEX_VI_FIELD_2 = 'on ';
Blockly.Msg.GET_CHILD_INDEX_VI_TOOLTIP = 'Finds an index that describes where on the parent this object is. ';
Blockly.Msg.GET_CHILD_INDEX_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#getChildIndex';
Blockly.Msg.LOAD_TEXTURE_FIELD_1 = 'change texture of';
Blockly.Msg.LOAD_TEXTURE_FIELD_2 = 'to tag';
Blockly.Msg.LOAD_TEXTURE_TOOLTIP = 'This changes the texture of this sprite/image entirely. If it is part of a sprite sheet. Warning: slow.';
Blockly.Msg.LOAD_TEXTURE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#loadTexture';
Blockly.Msg.MOVE_DOWN_FIELD_1 = 'move';
Blockly.Msg.MOVE_DOWN_FIELD_2 = 'down';
Blockly.Msg.MOVE_DOWN_TOOLTIP = 'Moves this sprite/image down one place in the display order. If sprites overlap, it will be more likely to display underneath others.';
Blockly.Msg.MOVE_DOWN_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#moveDown';
Blockly.Msg.MOVE_UP_FIELD_1 = 'move';
Blockly.Msg.MOVE_UP_FIELD_2 = 'up';
Blockly.Msg.MOVE_UP_TOOLTIP = 'Moves this sprite up one place in the display order. If sprites overlap, it will be more likely to display on top of others.';
Blockly.Msg.MOVE_UP_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#moveUp';
Blockly.Msg.SPRITE_OVERLAP_FIELD_1 = 'does';
Blockly.Msg.SPRITE_OVERLAP_FIELD_2 = 'overlap with';
Blockly.Msg.SPRITE_OVERLAP_FIELD_3 = '?';
Blockly.Msg.SPRITE_OVERLAP_TOOLTIP = 'Checks to see if the rectangular bounds of the two given sprites overlap. Not a good substitute for the physics engine, but fine for something like UI.';
Blockly.Msg.SPRITE_OVERLAP_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#overlap';
Blockly.Msg.OUT_OF_BOUNDS_KILL_FIELD_1 = 'make';
Blockly.Msg.OUT_OF_BOUNDS_KILL_FIELD_2 = 'get deleted if it leaves the world?';
Blockly.Msg.OUT_OF_BOUNDS_KILL_TOOLTIP = 'Will automatically destroy this object if it goes outside the world bounds. Warning: this will not work on objects that are not checking to see if they are inside the world.';
Blockly.Msg.OUT_OF_BOUNDS_KILL_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#outOfBoundsKill';
Blockly.Msg.OUT_OF_BOUNDS_FAINT_FIELD_1 = 'make';
Blockly.Msg.OUT_OF_BOUNDS_FAINT_FIELD_2 = 'get deleted if it leaves the world?';
Blockly.Msg.OUT_OF_BOUNDS_FAINT_TOOLTIP = 'Will automatically destroy this object if it goes outside the world bounds. Warning: this will not work on objects that are not checking to see if they are inside the world.';
Blockly.Msg.OUT_OF_BOUNDS_FAINT_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#outOfBoundsKill';
Blockly.Msg.REMOVE_CHILD_FIELD_1 = 'remove child';
Blockly.Msg.REMOVE_CHILD_FIELD_2 = 'from';
Blockly.Msg.REMOVE_CHILD_TOOLTIP = 'Makes this sprite/image stop being a child and moving with its parent.';
Blockly.Msg.REMOVE_CHILD_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#removeChild';
Blockly.Msg.REMOVE_CHILD_VI_FIELD_1 = 'remove child';
Blockly.Msg.REMOVE_CHILD_VI_FIELD_2 = 'from';
Blockly.Msg.REMOVE_CHILD_VI_TOOLTIP = 'Makes this sprite/image stop being a child and moving with its parent.';
Blockly.Msg.REMOVE_CHILD_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#removeChild';
Blockly.Msg.REMOVE_CHILD_AT_VI_FIELD_1 = 'remove the child at index';
Blockly.Msg.REMOVE_CHILD_AT_VI_FIELD_2 = 'from';
Blockly.Msg.REMOVE_CHILD_AT_VI_TOOLTIP = 'Finds the child at the given index and removes it from its parent. It will no longer move with the parent.';
Blockly.Msg.REMOVE_CHILD_AT_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#removeChildAt';
Blockly.Msg.REMOVE_CHILD_AT_FIELD_1 = 'remove the child at index';
Blockly.Msg.REMOVE_CHILD_AT_FIELD_2 = 'from';
Blockly.Msg.REMOVE_CHILD_AT_TOOLTIP = 'Finds the child at the given index and removes it from its parent. It will no longer move with the parent.';
Blockly.Msg.REMOVE_CHILD_AT_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#removeChildAt';
Blockly.Msg.REMOVE_CHILDREN_FIELD_1 = 'remove all children from';
Blockly.Msg.REMOVE_CHILDREN_TOOLTIP = 'Removes all children from the parent. They will all stop moving together.';
Blockly.Msg.REMOVE_CHILDREN_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#removeChildren';
Blockly.Msg.REMOVE_CHILDREN_VI_FIELD_1 = 'remove all children from';
Blockly.Msg.REMOVE_CHILDREN_VI_TOOLTIP = 'Removes all children from the parent. They will all stop moving together.';
Blockly.Msg.REMOVE_CHILDREN_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#removeChildren';
Blockly.Msg.ADD_ANIMATION_VI_FIELD_1 = 'add animation to';
Blockly.Msg.ADD_ANIMATION_VI_FIELD_2 = 'tagged';
Blockly.Msg.ADD_ANIMATION_VI_NAME_TEXT_DEFAULT = 'name';
Blockly.Msg.ADD_ANIMATION_VI_FIELD_3 = 'with frames';
Blockly.Msg.ADD_ANIMATION_VI_FIELD_4 = 'displayed at';
Blockly.Msg.ADD_ANIMATION_VI_FIELD_5 = 'FPS';
Blockly.Msg.ADD_ANIMATION_VI_FIELD_6 = 'loop';
Blockly.Msg.ADD_ANIMATION_VI_TOOLTIP = 'Add an animation to an object based on a list of frames';
Blockly.Msg.ADD_ANIMATION_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.AnimationManager.html#add';
Blockly.Msg.PLAY_ANIMATION_VI_FIELD_1 = 'play animation';
Blockly.Msg.PLAY_ANIMATION_VI_FIELD_2 = 'on';
Blockly.Msg.PLAY_ANIMATION_VI_TOOLTIP = 'Plays an animation on the given sprite.';
Blockly.Msg.PLAY_ANIMATION_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.AnimationManager.html#play';
Blockly.Msg.ANIMATION_NEXT_FIELD_1 = 'increment current animation by';
Blockly.Msg.ANIMATION_NEXT_FIELD_2 = 'on ';
Blockly.Msg.ANIMATION_NEXT_TOOLTIP = 'Increment the current animation by a given amount of frames.';
Blockly.Msg.ANIMATION_NEXT_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.AnimationManager.html#next';
Blockly.Msg.ANIMATION_PREVIOUS_FIELD_1 = 'decrement current animation by';
Blockly.Msg.ANIMATION_PREVIOUS_FIELD_2 = 'on ';
Blockly.Msg.ANIMATION_PREVIOUS_TOOLTIP = 'Decrement the current animation by a given amount of frames.';
Blockly.Msg.ANIMATION_PREVIOUS_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.AnimationManager.html#previous';
Blockly.Msg.ANIMATION_NEXT_VI_FIELD_1 = 'increment current animation by';
Blockly.Msg.ANIMATION_NEXT_VI_FIELD_2 = 'frames';
Blockly.Msg.ANIMATION_NEXT_VI_FIELD_3 = 'for';
Blockly.Msg.ANIMATION_NEXT_VI_TOOLTIP = 'Increment the current animation by a given amount of frames.';
Blockly.Msg.ANIMATION_NEXT_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.AnimationManager.html#next';
Blockly.Msg.ANIMATION_PREVIOUS_VI_FIELD_1 = 'decrement current animation by';
Blockly.Msg.ANIMATION_PREVIOUS_VI_FIELD_2 = 'frames';
Blockly.Msg.ANIMATION_PREVIOUS_VI_FIELD_3 = 'for';
Blockly.Msg.ANIMATION_PREVIOUS_VI_TOOLTIP = 'Decrement the current animation by a given amount of frames.';
Blockly.Msg.ANIMATION_PREVIOUS_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.AnimationManager.html#previous';
Blockly.Msg.REFRESH_FRAME_FIELD_1 = 'refresh frame of ';
Blockly.Msg.REFRESH_FRAME_TOOLTIP = 'Refreshes the current frame data back to the parent Sprite and also resets the texture data.';
Blockly.Msg.REFRESH_FRAME_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.AnimationManager.html#refreshFrame';
Blockly.Msg.ANIMATION_UPDATE_FIELD_1 = 'frame update of ';
Blockly.Msg.ANIMATION_UPDATE_TOOLTIP = 'Internal method do not call';
Blockly.Msg.ANIMATION_UPDATE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.AnimationManager.html#update';
Blockly.Msg.VALIDATE_FRAMES_FIELD_1 = 'validate animation frames of ';
Blockly.Msg.VALIDATE_FRAMES_FIELD_2 = 'array of frames';
Blockly.Msg.VALIDATE_FRAMES_TOOLTIP = 'Validates the frames on the given Sprite.';
Blockly.Msg.VALIDATE_FRAMES_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.AnimationManager.html#validateFrames';
Blockly.Msg.VALIDATE_FRAMES_VI_FIELD_1 = 'validate animation frames of ';
Blockly.Msg.VALIDATE_FRAMES_VI_FIELD_2 = 'array of frames';
Blockly.Msg.VALIDATE_FRAMES_VI_TOOLTIP = 'Validates the frames on the given Sprite.';
Blockly.Msg.VALIDATE_FRAMES_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.AnimationManager.html#validateFrames';
Blockly.Msg.ANIMATION_DESTROY_FIELD_1 = 'destroy all animations in animation manager of ';
Blockly.Msg.ANIMATION_DESTROY_TOOLTIP = 'Destroy all animations on the object.';
Blockly.Msg.ANIMATION_DESTROY_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.AnimationManager.html#validateFrames';
Blockly.Msg.ANIMATION_DESTROY_VI_FIELD_1 = 'destroy all animations in animation manager of ';
Blockly.Msg.ANIMATION_DESTROY_VI_TOOLTIP = 'Destroy all animations on the object.';
Blockly.Msg.ANIMATION_DESTROY_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.AnimationManager.html#destroy';
Blockly.Msg.STOP_ANIMATION_VI_FIELD_1 = 'stop animation on';
Blockly.Msg.STOP_ANIMATION_VI_TOOLTIP = 'Stops the current animation on the specified Sprite';
Blockly.Msg.STOP_ANIMATION_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Animation.html#stop';
Blockly.Msg.SET_FRAME_VI_FIELD_1 = 'set current frame # to';
Blockly.Msg.SET_FRAME_VI_FIELD_2 = 'for';
Blockly.Msg.SET_FRAME_VI_TOOLTIP = 'Sets the current frame number on the specified object';
Blockly.Msg.SET_FRAME_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Animation.html#frame';
Blockly.Msg.SEND_TO_BACK_FIELD_1 = 'send';
Blockly.Msg.SEND_TO_BACK_FIELD_2 = 'to the back';
Blockly.Msg.SEND_TO_BACK_TOOLTIP = 'Sends this sprite/image to the back of the display order. In case of overlapping sprites, it will draw behind everything else.';
Blockly.Msg.SEND_TO_BACK_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#sendToBack';
Blockly.Msg.SET_CHILD_INDEX_FIELD_1 = 'move the child';
Blockly.Msg.SET_CHILD_INDEX_FIELD_2 = 'of';
Blockly.Msg.SET_CHILD_INDEX_FIELD_3 = 'to index';
Blockly.Msg.SET_CHILD_INDEX_TOOLTIP = 'Moves the child to a specific index on its parent. This will affect how you find it in the future.';
Blockly.Msg.SET_CHILD_INDEX_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#setChildIndex';
Blockly.Msg.SET_CHILD_INDEX_VI_FIELD_1 = 'move the child';
Blockly.Msg.SET_CHILD_INDEX_VI_FIELD_2 = 'of';
Blockly.Msg.SET_CHILD_INDEX_VI_FIELD_3 = 'to index';
Blockly.Msg.SET_CHILD_INDEX_VI_TOOLTIP = 'Moves the child to a specific index on its parent. This will affect how you find it in the future.';
Blockly.Msg.SET_CHILD_INDEX_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#setChildIndex';
Blockly.Msg.SET_SPRITE_FRAME_FIELD_1 = 'Set texture frame of';
Blockly.Msg.SET_SPRITE_FRAME_FIELD_2 = 'to';
Blockly.Msg.SET_SPRITE_FRAME_TOOLTIP = 'Sets the Texture frame the Sprite uses for rendering. This is primarily an internal method used by Sprite.loadTexture, although you may call it directly.';
Blockly.Msg.SET_SPRITE_FRAME_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#setFrame';
Blockly.Msg.SET_SCALE_MIN_MAX_FIELD_1 = 'set scale constraints on';
Blockly.Msg.SET_SCALE_MIN_MAX_FIELD_2 = 'min X';
Blockly.Msg.SET_SCALE_MIN_MAX_FIELD_3 = 'min Y';
Blockly.Msg.SET_SCALE_MIN_MAX_FIELD_4 = 'max X';
Blockly.Msg.SET_SCALE_MIN_MAX_FIELD_5 = 'max Y';
Blockly.Msg.SET_SCALE_MIN_MAX_TOOLTIP = 'Limits how far this sprite will scale based on its parent.';
Blockly.Msg.SET_SCALE_MIN_MAX_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#setScaleMinMax';
Blockly.Msg.CLEAR_SCALE_MIN_MAX_FIELD_1 = 'clear scale constraints on';
Blockly.Msg.CLEAR_SCALE_MIN_MAX_TOOLTIP = 'If scaling constraints were set on a sprite, this removes them.';
Blockly.Msg.CLEAR_SCALE_MIN_MAX_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#setScaleMinMax';
Blockly.Msg.SET_TEXTURE_FIELD_1 = 'Set texture of';
Blockly.Msg.SET_TEXTURE_FIELD_2 = 'to';
Blockly.Msg.SET_TEXTURE_TOOLTIP = 'Sets the texture of the sprite. Be warned that this doesn\'t remove or destroy the previous texture this Sprite was using. Note that this takes a specific texture, not a tag.';
Blockly.Msg.SET_TEXTURE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#setTexture';
Blockly.Msg.SWAP_CHILDREN_FIELD_1 = 'swap children of';
Blockly.Msg.SWAP_CHILDREN_FIELD_2 = 'child 1';
Blockly.Msg.SWAP_CHILDREN_FIELD_3 = 'child 2';
Blockly.Msg.SWAP_CHILDREN_TOOLTIP = 'Swaps the indices of the given children. They must both be on the same parent.';
Blockly.Msg.SWAP_CHILDREN_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#swapChildren';
Blockly.Msg.GET_ANIMATION_PROPERTY_FIELD_1 = 'on gameobject';
Blockly.Msg.GET_ANIMATION_PROPERTY_FIELD_2 = 'get animation.';
Blockly.Msg.GET_ANIMATION_PROPERTY_FIELD_DROPDOWN_1 = 'currentAnim';
Blockly.Msg.GET_ANIMATION_PROPERTY_FIELD_DROPDOWN_2 = 'currentFrame';
Blockly.Msg.GET_ANIMATION_PROPERTY_FIELD_DROPDOWN_3 = 'frame';
Blockly.Msg.GET_ANIMATION_PROPERTY_FIELD_DROPDOWN_4 = 'frameData';
Blockly.Msg.GET_ANIMATION_PROPERTY_FIELD_DROPDOWN_5 = 'frameName';
Blockly.Msg.GET_ANIMATION_PROPERTY_FIELD_DROPDOWN_6 = 'frameTotal';
Blockly.Msg.GET_ANIMATION_PROPERTY_FIELD_DROPDOWN_7 = 'game';
Blockly.Msg.GET_ANIMATION_PROPERTY_FIELD_DROPDOWN_8 = 'isLoaded';
Blockly.Msg.GET_ANIMATION_PROPERTY_FIELD_DROPDOWN_9 = 'name';
Blockly.Msg.GET_ANIMATION_PROPERTY_FIELD_DROPDOWN_10 = 'paused';
Blockly.Msg.GET_ANIMATION_PROPERTY_FIELD_DROPDOWN_11 = 'sprite';
Blockly.Msg.GET_ANIMATION_PROPERTY_FIELD_DROPDOWN_12 = 'updateIfVisible';
Blockly.Msg.GET_ANIMATION_PROPERTY_TOOLTIP = 'Get a property on from the animaton manager on the object';
Blockly.Msg.GET_ANIMATION_PROPERTY_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.AnimationManager.html#destroy';
Blockly.Msg.SET_ANIMATION_PROPERTY_FIELD_1 = 'set animation.';
Blockly.Msg.SET_ANIMATION_PROPERTY_FIELD_DROPDOWN_1 = 'frame';
Blockly.Msg.SET_ANIMATION_PROPERTY_FIELD_DROPDOWN_2 = 'frameName';
Blockly.Msg.SET_ANIMATION_PROPERTY_FIELD_DROPDOWN_3 = 'paused';
Blockly.Msg.SET_ANIMATION_PROPERTY_FIELD_DROPDOWN_4 = 'updateIfVisible';
Blockly.Msg.SET_ANIMATION_PROPERTY_FIELD_2 = 'on ';
Blockly.Msg.SET_ANIMATION_PROPERTY_FIELD_3 = 'to';
Blockly.Msg.SET_ANIMATION_PROPERTY_TOOLTIP = 'Set a property from the animation manager on the object';
Blockly.Msg.SET_ANIMATION_PROPERTY_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.AnimationManager.html#destroy';
Blockly.Msg.SET_ANIMATION_PROPERTY_VI_FIELD_1 = 'set animation.';
Blockly.Msg.SET_ANIMATION_PROPERTY_VI_FIELD_DROPDOWN_1 = 'paused';
Blockly.Msg.SET_ANIMATION_PROPERTY_VI_FIELD_DROPDOWN_2 = 'updateIfVisible';
Blockly.Msg.SET_ANIMATION_PROPERTY_VI_FIELD_2 = 'on ';
Blockly.Msg.SET_ANIMATION_PROPERTY_VI_FIELD_3 = 'to';
Blockly.Msg.SET_ANIMATION_PROPERTY_VI_TOOLTIP = 'Set a property from the animation manager on the object';
Blockly.Msg.SET_ANIMATION_PROPERTY_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.AnimationManager.html#destroy';
Blockly.Msg.ANIMATION_GET_ANIMATION_FIELD_1 = 'on gameobject';
Blockly.Msg.ANIMATION_GET_ANIMATION_FIELD_2 = 'get animation by name';
Blockly.Msg.ANIMATION_GET_ANIMATION_NAME_TEXT_DEFAULT = 'default';
Blockly.Msg.ANIMATION_GET_ANIMATION_TOOLTIP = 'Returns an animation that was previously added by name.';
Blockly.Msg.ANIMATION_GET_ANIMATION_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.AnimationManager.html#getAnimation';
Blockly.Msg.CREATE_GROUP_FIELD_1 = 'create group';
Blockly.Msg.CREATE_GROUP_TOOLTIP = 'Create a new group of display objects';
Blockly.Msg.CREATE_GROUP_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.GameObjectFactory.html#group';
Blockly.Msg.CREATE_OBJECT_IN_GROUP_FIELD_1 = 'create object at';
Blockly.Msg.CREATE_OBJECT_IN_GROUP_FIELD_2 = 'x';
Blockly.Msg.CREATE_OBJECT_IN_GROUP_FIELD_3 = 'y';
Blockly.Msg.CREATE_OBJECT_IN_GROUP_FIELD_4 = 'from tag';
Blockly.Msg.CREATE_OBJECT_IN_GROUP_TAG_TEXT_DEFAULT = 'default';
Blockly.Msg.CREATE_OBJECT_IN_GROUP_FIELD_5 = 'in the';
Blockly.Msg.CREATE_OBJECT_IN_GROUP_FIELD_6 = 'group';
Blockly.Msg.CREATE_OBJECT_IN_GROUP_TOOLTIP = 'Create a new sprite in the group';
Blockly.Msg.CREATE_OBJECT_IN_GROUP_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Group.html#create';
Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_FIELD_1 = 'create object at';
Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_FIELD_2 = 'x';
Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_FIELD_3 = 'y';
Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_FIELD_4 = 'from tag';
Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_TAG_TEXT_DEFAULT = 'default';
Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_FIELD_5 = 'in the';
Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_FIELD_6 = 'group';
Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_FIELD_7 = 'displaying frame #';
Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_TOOLTIP = 'Creates a sprite in the new group using the specified frame from a sprite sheet or texture atlas';
Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Group.html#create';
Blockly.Msg.CREATE_OBJECT_IN_GROUP_VI_FIELD_1 = 'create object at';
Blockly.Msg.CREATE_OBJECT_IN_GROUP_VI_FIELD_2 = 'x';
Blockly.Msg.CREATE_OBJECT_IN_GROUP_VI_FIELD_3 = 'y';
Blockly.Msg.CREATE_OBJECT_IN_GROUP_VI_FIELD_4 = 'from tag';
Blockly.Msg.CREATE_OBJECT_IN_GROUP_VI_FIELD_5 = 'in group';
Blockly.Msg.CREATE_OBJECT_IN_GROUP_VI_TOOLTIP = 'Create a new sprite in the group';
Blockly.Msg.CREATE_OBJECT_IN_GROUP_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Group.html#create';
Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_VI_FIELD_1 = 'create object at';
Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_VI_FIELD_2 = 'x';
Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_VI_FIELD_3 = 'y';
Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_VI_FIELD_4 = 'from tag';
Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_VI_FIELD_5 = 'in group';
Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_VI_FIELD_6 = 'displaying frame';
Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_VI_TOOLTIP = 'Creates a sprite in the new group using the specified frame from a sprite sheet or texture atlas';
Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Group.html#create';
Blockly.Msg.ADD_TO_GROUP_FIELD_1 = 'add';
Blockly.Msg.ADD_TO_GROUP_FIELD_2 = 'to group';
Blockly.Msg.ADD_TO_GROUP_TOOLTIP = 'Adds an existing object to a group.';
Blockly.Msg.ADD_TO_GROUP_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Group.html#add';
Blockly.Msg.REMOVE_FROM_GROUP_FIELD_1 = 'remove';
Blockly.Msg.REMOVE_FROM_GROUP_FIELD_2 = 'from group';
Blockly.Msg.REMOVE_FROM_GROUP_FIELD_3 = 'destroy it too';
Blockly.Msg.REMOVE_FROM_GROUP_TOOLTIP = 'Removes an object from a group. Optionally, destroy it as well.';
Blockly.Msg.REMOVE_FROM_GROUP_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Group.html#remove';
Blockly.Msg.GROUP_CONTAINS_FIELD_1 = 'group';
Blockly.Msg.GROUP_CONTAINS_FIELD_2 = 'contains';
Blockly.Msg.GROUP_CONTAINS_FIELD_3 = '?';
Blockly.Msg.GROUP_CONTAINS_TOOLTIP = 'Returns true if a group contains a specified sprite.';
Blockly.Msg.GROUP_CONTAINS_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Group.html#contains';
Blockly.Msg.GROUP_COUNT_ALIVE_DEAD_FIELD_1 = 'number of';
Blockly.Msg.GROUP_COUNT_ALIVE_DEAD_STATE_DROPDOWN_1 = 'alive';
Blockly.Msg.GROUP_COUNT_ALIVE_DEAD_STATE_DROPDOWN_2 = 'fainted';
Blockly.Msg.GROUP_COUNT_ALIVE_DEAD_FIELD_2 = 'objects in group';
Blockly.Msg.GROUP_COUNT_ALIVE_DEAD_TOOLTIP = 'Returns the number of alive/dead objects in a group.';
Blockly.Msg.GROUP_COUNT_ALIVE_DEAD_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Group.html#countLiving';
Blockly.Msg.DESTROY_GROUP_FIELD_1 = 'destroy group';
Blockly.Msg.DESTROY_GROUP_FIELD_2 = 'destroy members too';
Blockly.Msg.DESTROY_GROUP_TOOLTIP = 'Destroys a group. Can either leave the members where they are, or destroy them too.';
Blockly.Msg.DESTROY_GROUP_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Group.html#destroy';
Blockly.Msg.GROUP_GET_ALL_FIELD_1 = 'get all members of group';
Blockly.Msg.GROUP_GET_ALL_TOOLTIP = 'Returns a list of all members in the specified group.';
Blockly.Msg.GROUP_GET_ALL_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Group.html#getAll';
Blockly.Msg.GROUP_GET_AT_FIELD_1 = 'get member of group';
Blockly.Msg.GROUP_GET_AT_FIELD_2 = 'at index';
Blockly.Msg.GROUP_GET_AT_TOOLTIP = 'Returns a group member at a specified index. Indices start at 0 and go in creation order by default. Returns -1 if it fails.';
Blockly.Msg.GROUP_GET_AT_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Group.html#getAt';
Blockly.Msg.GROUP_GET_CLOSEST_TO_FIELD_1 = 'get member of group';
Blockly.Msg.GROUP_GET_CLOSEST_TO_FIELD_2 = 'closest to';
Blockly.Msg.GROUP_GET_CLOSEST_TO_TOOLTIP = 'Returns the object in the group whose position is closest to the specified object.';
Blockly.Msg.GROUP_GET_CLOSEST_TO_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Group.html#getClosestTo';
Blockly.Msg.GROUP_GET_FIRST_ALIVE_DEAD_FIELD_1 = 'get first';
Blockly.Msg.GROUP_GET_FIRST_ALIVE_DEAD_MODE_DROPDOWN_1 = 'alive';
Blockly.Msg.GROUP_GET_FIRST_ALIVE_DEAD_MODE_DROPDOWN_2 = 'dead';
Blockly.Msg.GROUP_GET_FIRST_ALIVE_DEAD_FIELD_2 = 'member of group';
Blockly.Msg.GROUP_GET_FIRST_ALIVE_DEAD_TOOLTIP = 'Gets the first group member that has the given value of its \'alive\' field. Returns null if no matching member is found.';
Blockly.Msg.GROUP_GET_FIRST_ALIVE_DEAD_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Group.html#getFirstAlive';
Blockly.Msg.GROUP_GET_FIRST_ALIVE_FAINTED_FIELD_1 = 'get first';
Blockly.Msg.GROUP_GET_FIRST_ALIVE_FAINTED_MODE_DROPDOWN_1 = 'alive';
Blockly.Msg.GROUP_GET_FIRST_ALIVE_FAINTED_MODE_DROPDOWN_2 = 'fainted';
Blockly.Msg.GROUP_GET_FIRST_ALIVE_FAINTED_FIELD_2 = 'member of group';
Blockly.Msg.GROUP_GET_FIRST_ALIVE_FAINTED_TOOLTIP = 'Gets the first group member that has the given value of its \'alive\' field. Returns null if no matching member is found.';
Blockly.Msg.GROUP_GET_FIRST_ALIVE_FAINTED_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Group.html#getFirstAlive';
Blockly.Msg.GROUP_GET_RANDOM_FIELD_1 = 'get random member of group';
Blockly.Msg.GROUP_GET_RANDOM_TOOLTIP = 'Returns a member of the group at random with no bias.';
Blockly.Msg.GROUP_GET_RANDOM_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Group.html#getRandom';
Blockly.Msg.GROUP_GET_RANDOM_EXISTS_FIELD_1 = 'get a random member of group';
Blockly.Msg.GROUP_GET_RANDOM_EXISTS_FIELD_2 = 'that exists';
Blockly.Msg.GROUP_GET_RANDOM_EXISTS_TOOLTIP = 'Returns a random member of the given group, picking from those whose \'exists\' field is set to true.';
Blockly.Msg.GROUP_GET_RANDOM_EXISTS_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Group.html#getRandomExists';
Blockly.Msg.GROUP_REMOVE_ALL_FIELD_1 = 'remove all members of group';
Blockly.Msg.GROUP_REMOVE_ALL_FIELD_2 = 'destroy them too';
Blockly.Msg.GROUP_REMOVE_ALL_TOOLTIP = 'Empties the specified group. Can either do this by releasing its members or deleting them.';
Blockly.Msg.GROUP_REMOVE_ALL_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Group.html#removeAll';
Blockly.Msg.ADD_TO_WORLD_FIELD_1 = 'add';
Blockly.Msg.ADD_TO_WORLD_FIELD_2 = 'to the world';
Blockly.Msg.ADD_TO_WORLD_TOOLTIP = 'Adds an existing object to the world group. Necessary for making an object that has been previously removed from a  group visible again.';
Blockly.Msg.ADD_TO_WORLD_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.World.html#add';
Blockly.Msg.START_PHYSICS_FIELD_1 = 'start';
Blockly.Msg.START_PHYSICS_SYSTEM_DROPDOWN_1 = 'Arcade';
Blockly.Msg.START_PHYSICS_SYSTEM_DROPDOWN_2 = 'P2JS';
Blockly.Msg.START_PHYSICS_FIELD_2 = 'physics system';
Blockly.Msg.START_PHYSICS_TOOLTIP = 'Start physics with the specified system';
Blockly.Msg.START_PHYSICS_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.html#startSystem';
Blockly.Msg.START_ARCADE_PHYSICS_FIELD_1 = 'start arcade physics system';
Blockly.Msg.START_ARCADE_PHYSICS_TOOLTIP = 'Start the specified arcade physics system';
Blockly.Msg.START_ARCADE_PHYSICS_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.html#startSystem';
Blockly.Msg.ENABLE_BODY_GROUP_FIELD_1 = 'Enable Body for';
Blockly.Msg.ENABLE_BODY_GROUP_FIELD_2 = 'Group';
Blockly.Msg.ENABLE_BODY_GROUP_TOOLTIP = 'Enable physics body on all sprites in or added to this group.';
Blockly.Msg.ENABLE_BODY_GROUP_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Group.html#enableBody';
Blockly.Msg.ENABLE_BODY_GROUP_VI_FIELD_1 = 'enable body for group';
Blockly.Msg.ENABLE_BODY_GROUP_VI_TOOLTIP = 'Enable physics body on all sprites in or added to this group.';
Blockly.Msg.ENABLE_BODY_GROUP_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Group.html#enableBody';
Blockly.Msg.ENABLE_ARCADE_PHYSICS_FOR_OBJECT_FIELD_1 = 'enable arcade physics for';
Blockly.Msg.ENABLE_ARCADE_PHYSICS_FOR_OBJECT_TOOLTIP = 'Enable physics for this object';
Blockly.Msg.ENABLE_ARCADE_PHYSICS_FOR_OBJECT_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.html#enable';
Blockly.Msg.ENABLE_ARCADE_PHYSICS_FOR_OBJECT_VI_FIELD_1 = 'enable arcade physics for sprite';
Blockly.Msg.ENABLE_ARCADE_PHYSICS_FOR_OBJECT_VI_TOOLTIP = 'Enable physics for this sprite';
Blockly.Msg.ENABLE_ARCADE_PHYSICS_FOR_OBJECT_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.html#enable';
Blockly.Msg.COLLIDE_WITH_ARROW_FUNCTION_FIELD_1 = 'collide';
Blockly.Msg.COLLIDE_WITH_ARROW_FUNCTION_FIELD_2 = 'with';
Blockly.Msg.COLLIDE_WITH_ARROW_FUNCTION_FIELD_3 = 'if collided do';
Blockly.Msg.COLLIDE_WITH_ARROW_FUNCTION_TOOLTIP = 'Collide two objects, if they are collide do the statements in the block';
Blockly.Msg.COLLIDE_WITH_ARROW_FUNCTION_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.html#collide';
Blockly.Msg.SET_BODY_FIELD_POINT_FIELD_1 = 'Set';
Blockly.Msg.SET_BODY_FIELD_POINT_FIELD_DROPDOWN_1 = 'bounce';
Blockly.Msg.SET_BODY_FIELD_POINT_FIELD_DROPDOWN_2 = 'gravity';
Blockly.Msg.SET_BODY_FIELD_POINT_FIELD_DROPDOWN_3 = 'velocity';
Blockly.Msg.SET_BODY_FIELD_POINT_FIELD_DROPDOWN_4 = 'acceleration';
Blockly.Msg.SET_BODY_FIELD_POINT_FIELD_DROPDOWN_5 = 'drag';
Blockly.Msg.SET_BODY_FIELD_POINT_FIELD_DROPDOWN_6 = 'friction';
Blockly.Msg.SET_BODY_FIELD_POINT_FIELD_DROPDOWN_7 = 'maxVelocity';
Blockly.Msg.SET_BODY_FIELD_POINT_FIELD_DROPDOWN_8 = 'worldBounce';
Blockly.Msg.SET_BODY_FIELD_POINT_ELEMENT_DROPDOWN_1 = 'x';
Blockly.Msg.SET_BODY_FIELD_POINT_ELEMENT_DROPDOWN_2 = 'y';
Blockly.Msg.SET_BODY_FIELD_POINT_FIELD_2 = 'for';
Blockly.Msg.SET_BODY_FIELD_POINT_FIELD_3 = 'to';
Blockly.Msg.SET_BODY_FIELD_POINT_TOOLTIP = 'Set the x or y value of the specified field';
Blockly.Msg.SET_BODY_FIELD_POINT_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.Body.html';
Blockly.Msg.SET_BODY_FIELD_POINT_VI_FIELD_1 = 'set';
Blockly.Msg.SET_BODY_FIELD_POINT_VI_FIELD_DROPDOWN_1 = 'bounce';
Blockly.Msg.SET_BODY_FIELD_POINT_VI_FIELD_DROPDOWN_2 = 'gravity';
Blockly.Msg.SET_BODY_FIELD_POINT_VI_FIELD_DROPDOWN_3 = 'velocity';
Blockly.Msg.SET_BODY_FIELD_POINT_VI_FIELD_DROPDOWN_4 = 'acceleration';
Blockly.Msg.SET_BODY_FIELD_POINT_VI_FIELD_DROPDOWN_5 = 'drag';
Blockly.Msg.SET_BODY_FIELD_POINT_VI_FIELD_DROPDOWN_6 = 'friction';
Blockly.Msg.SET_BODY_FIELD_POINT_VI_FIELD_DROPDOWN_7 = 'maxVelocity';
Blockly.Msg.SET_BODY_FIELD_POINT_VI_FIELD_DROPDOWN_8 = 'worldBounce';
Blockly.Msg.SET_BODY_FIELD_POINT_VI_ELEMENT_DROPDOWN_1 = 'x';
Blockly.Msg.SET_BODY_FIELD_POINT_VI_ELEMENT_DROPDOWN_2 = 'y';
Blockly.Msg.SET_BODY_FIELD_POINT_VI_FIELD_2 = 'for';
Blockly.Msg.SET_BODY_FIELD_POINT_VI_FIELD_3 = 'to';
Blockly.Msg.SET_BODY_FIELD_POINT_VI_TOOLTIP = 'Set the x or y value of the specified field';
Blockly.Msg.SET_BODY_FIELD_POINT_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.Body.html';
Blockly.Msg.SET_BODY_FIELD_POINT_CLASS_VI_FIELD_1 = 'set';
Blockly.Msg.SET_BODY_FIELD_POINT_CLASS_VI_FIELD_DROPDOWN_1 = 'bounce';
Blockly.Msg.SET_BODY_FIELD_POINT_CLASS_VI_FIELD_DROPDOWN_2 = 'gravity';
Blockly.Msg.SET_BODY_FIELD_POINT_CLASS_VI_FIELD_DROPDOWN_3 = 'velocity';
Blockly.Msg.SET_BODY_FIELD_POINT_CLASS_VI_FIELD_DROPDOWN_4 = 'acceleration';
Blockly.Msg.SET_BODY_FIELD_POINT_CLASS_VI_FIELD_DROPDOWN_5 = 'drag';
Blockly.Msg.SET_BODY_FIELD_POINT_CLASS_VI_FIELD_DROPDOWN_6 = 'friction';
Blockly.Msg.SET_BODY_FIELD_POINT_CLASS_VI_FIELD_DROPDOWN_7 = 'maxVelocity';
Blockly.Msg.SET_BODY_FIELD_POINT_CLASS_VI_FIELD_DROPDOWN_8 = 'worldBounce';
Blockly.Msg.SET_BODY_FIELD_POINT_CLASS_VI_FIELD_2 = 'for';
Blockly.Msg.SET_BODY_FIELD_POINT_CLASS_VI_FIELD_3 = 'to';
Blockly.Msg.SET_BODY_FIELD_POINT_CLASS_VI_TOOLTIP = 'Set the value of the body point field';
Blockly.Msg.SET_BODY_FIELD_POINT_CLASS_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.Body.html';
Blockly.Msg.DEBUG_BODY_FIELD_1 = 'debug body';
Blockly.Msg.DEBUG_BODY_TOOLTIP = 'Set the value of the body point field';
Blockly.Msg.DEBUG_BODY_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.Body.html';
Blockly.Msg.GET_BODY_FIELD_POINT_CLASS_FIELD_1 = 'get';
Blockly.Msg.GET_BODY_FIELD_POINT_CLASS_FIELD_DROPDOWN_1 = 'bounce';
Blockly.Msg.GET_BODY_FIELD_POINT_CLASS_FIELD_DROPDOWN_2 = 'gravity';
Blockly.Msg.GET_BODY_FIELD_POINT_CLASS_FIELD_DROPDOWN_3 = 'velocity';
Blockly.Msg.GET_BODY_FIELD_POINT_CLASS_FIELD_DROPDOWN_4 = 'acceleration';
Blockly.Msg.GET_BODY_FIELD_POINT_CLASS_FIELD_DROPDOWN_5 = 'drag';
Blockly.Msg.GET_BODY_FIELD_POINT_CLASS_FIELD_DROPDOWN_6 = 'friction';
Blockly.Msg.GET_BODY_FIELD_POINT_CLASS_FIELD_DROPDOWN_7 = 'maxVelocity';
Blockly.Msg.GET_BODY_FIELD_POINT_CLASS_FIELD_DROPDOWN_8 = 'worldBounce';
Blockly.Msg.GET_BODY_FIELD_POINT_CLASS_FIELD_2 = 'for';
Blockly.Msg.GET_BODY_FIELD_POINT_CLASS_TOOLTIP = 'Gets the value of the specified point as a point object';
Blockly.Msg.GET_BODY_FIELD_POINT_CLASS_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.Body.html';
Blockly.Msg.SET_BODY_BOOLEAN_FIELD_FIELD_1 = 'set';
Blockly.Msg.SET_BODY_BOOLEAN_FIELD_ELEMENT_DROPDOWN_1 = 'allowRotation';
Blockly.Msg.SET_BODY_BOOLEAN_FIELD_ELEMENT_DROPDOWN_2 = 'allowGravity';
Blockly.Msg.SET_BODY_BOOLEAN_FIELD_ELEMENT_DROPDOWN_3 = 'immovable';
Blockly.Msg.SET_BODY_BOOLEAN_FIELD_FIELD_2 = 'for';
Blockly.Msg.SET_BODY_BOOLEAN_FIELD_TOOLTIP = 'Set the value of the specified boolean field';
Blockly.Msg.SET_BODY_BOOLEAN_FIELD_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.Body.html';
Blockly.Msg.GET_BODY_BOOLEAN_FIELD_FIELD_1 = 'get';
Blockly.Msg.GET_BODY_BOOLEAN_FIELD_ELEMENT_DROPDOWN_1 = 'allowRotation';
Blockly.Msg.GET_BODY_BOOLEAN_FIELD_ELEMENT_DROPDOWN_2 = 'allowGravity';
Blockly.Msg.GET_BODY_BOOLEAN_FIELD_ELEMENT_DROPDOWN_3 = 'immovable';
Blockly.Msg.GET_BODY_BOOLEAN_FIELD_ELEMENT_DROPDOWN_4 = 'isMoving';
Blockly.Msg.GET_BODY_BOOLEAN_FIELD_FIELD_2 = 'for';
Blockly.Msg.GET_BODY_BOOLEAN_FIELD_TOOLTIP = 'Set the value of the specified boolean field';
Blockly.Msg.GET_BODY_BOOLEAN_FIELD_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.Body.html';
Blockly.Msg.SET_BODY_NUMERIC_FIELD_FIELD_1 = 'set';
Blockly.Msg.SET_BODY_NUMERIC_FIELD_ELEMENT_DROPDOWN_1 = 'mass';
Blockly.Msg.SET_BODY_NUMERIC_FIELD_ELEMENT_DROPDOWN_2 = 'rotation (degrees)';
Blockly.Msg.SET_BODY_NUMERIC_FIELD_ELEMENT_DROPDOWN_3 = 'angularAcceleration';
Blockly.Msg.SET_BODY_NUMERIC_FIELD_ELEMENT_DROPDOWN_4 = 'angularVelocity';
Blockly.Msg.SET_BODY_NUMERIC_FIELD_ELEMENT_DROPDOWN_5 = 'maxAngularVelocity';
Blockly.Msg.SET_BODY_NUMERIC_FIELD_ELEMENT_DROPDOWN_6 = 'angularDrag';
Blockly.Msg.SET_BODY_NUMERIC_FIELD_FIELD_2 = 'for';
Blockly.Msg.SET_BODY_NUMERIC_FIELD_FIELD_3 = 'to';
Blockly.Msg.SET_BODY_NUMERIC_FIELD_TOOLTIP = 'Set the value of the specified numeric field';
Blockly.Msg.SET_BODY_NUMERIC_FIELD_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.Body.html';
Blockly.Msg.GET_BODY_NUMERIC_FIELD_FIELD_1 = 'get';
Blockly.Msg.GET_BODY_NUMERIC_FIELD_ELEMENT_DROPDOWN_1 = 'speed';
Blockly.Msg.GET_BODY_NUMERIC_FIELD_ELEMENT_DROPDOWN_2 = 'mass';
Blockly.Msg.GET_BODY_NUMERIC_FIELD_ELEMENT_DROPDOWN_3 = 'rotation (degrees)';
Blockly.Msg.GET_BODY_NUMERIC_FIELD_ELEMENT_DROPDOWN_4 = 'maxVelocity';
Blockly.Msg.GET_BODY_NUMERIC_FIELD_ELEMENT_DROPDOWN_5 = 'angularAcceleration';
Blockly.Msg.GET_BODY_NUMERIC_FIELD_ELEMENT_DROPDOWN_6 = 'angularVelocity';
Blockly.Msg.GET_BODY_NUMERIC_FIELD_ELEMENT_DROPDOWN_7 = 'maxAngularVelocity';
Blockly.Msg.GET_BODY_NUMERIC_FIELD_ELEMENT_DROPDOWN_8 = 'angularDrag';
Blockly.Msg.GET_BODY_NUMERIC_FIELD_FIELD_2 = 'for';
Blockly.Msg.GET_BODY_NUMERIC_FIELD_TOOLTIP = 'Get the value of the specified numeric field';
Blockly.Msg.GET_BODY_NUMERIC_FIELD_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.Body.html';
Blockly.Msg.CALL_FUNCTION_ON_GROUP_FIELD_1 = 'Call function';
Blockly.Msg.CALL_FUNCTION_ON_GROUP_FUNCTION_TEXT_DEFAULT = 'functionName';
Blockly.Msg.CALL_FUNCTION_ON_GROUP_FIELD_2 = 'on all children in group';
Blockly.Msg.CALL_FUNCTION_ON_GROUP_TOOLTIP = 'Calls the specified function once for each group member, giving that child as the input.';
Blockly.Msg.CALL_FUNCTION_ON_GROUP_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Group.html#forEachAlive';
Blockly.Msg.ACCELERATION_FROM_ROTATION_FIELD_1 = 'get forward acceleration from rotation';
Blockly.Msg.ACCELERATION_FROM_ROTATION_FIELD_2 = 'at';
Blockly.Msg.ACCELERATION_FROM_ROTATION_FIELD_3 = 'pixels/second^2';
Blockly.Msg.ACCELERATION_FROM_ROTATION_TOOLTIP = 'Creates an (x, y) acceleration that goes forward from the given rotation. Returns it as a point.';
Blockly.Msg.ACCELERATION_FROM_ROTATION_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.html#accelerationFromRotation';
Blockly.Msg.SET_IMMOVABLE_FIELD_1 = 'Set Immovable for Object';
Blockly.Msg.SET_IMMOVABLE_TOOLTIP = 'Immovable bodies don\'t recoil from impacts at all. If two immovable bodies overlap or collide, it is ignored.\nYes, we\'re sidestepping the question of unstoppable force versus immovable object.';
Blockly.Msg.SET_IMMOVABLE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.Body.html#immovable';
Blockly.Msg.COLLIDE_FIELD_1 = 'Collide';
Blockly.Msg.COLLIDE_FIELD_2 = 'with';
Blockly.Msg.COLLIDE_TOOLTIP = 'Collide the first group/object with the second group/object';
Blockly.Msg.COLLIDE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.html#collide';
Blockly.Msg.COLLIDE_VI_FIELD_1 = 'collide';
Blockly.Msg.COLLIDE_VI_FIELD_2 = 'with';
Blockly.Msg.COLLIDE_VI_TOOLTIP = 'Collide the first group/object with the second group/object';
Blockly.Msg.COLLIDE_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.html#collide';
Blockly.Msg.IS_BODY_TOUCHING_FIELD_1 = 'touching';
Blockly.Msg.IS_BODY_TOUCHING_FIELD_2 = '?';
Blockly.Msg.IS_BODY_TOUCHING_TOOLTIP = 'Check to see if the object is being touched in the given direction.';
Blockly.Msg.IS_BODY_TOUCHING_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.Body.html#touching';
Blockly.Msg.IS_BODY_TOUCHING_VI_FIELD_1 = 'is touching';
Blockly.Msg.IS_BODY_TOUCHING_VI_DIRECTION_DROPDOWN_1 = 'Up';
Blockly.Msg.IS_BODY_TOUCHING_VI_DIRECTION_DROPDOWN_2 = 'Down';
Blockly.Msg.IS_BODY_TOUCHING_VI_DIRECTION_DROPDOWN_3 = 'Left';
Blockly.Msg.IS_BODY_TOUCHING_VI_DIRECTION_DROPDOWN_4 = 'Right';
Blockly.Msg.IS_BODY_TOUCHING_VI_DIRECTION_DROPDOWN_5 = 'None';
Blockly.Msg.IS_BODY_TOUCHING_VI_FIELD_2 = '?';
Blockly.Msg.IS_BODY_TOUCHING_VI_TOOLTIP = 'Check to see if the object is being touched in the given direction.';
Blockly.Msg.IS_BODY_TOUCHING_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.Body.html#touching';
Blockly.Msg.COLLIDE_WITH_WORLD_BOUNDS_FIELD_1 = 'Collide';
Blockly.Msg.COLLIDE_WITH_WORLD_BOUNDS_FIELD_2 = 'with world bounds';
Blockly.Msg.COLLIDE_WITH_WORLD_BOUNDS_TOOLTIP = 'Make this object collide with the world bounds.';
Blockly.Msg.COLLIDE_WITH_WORLD_BOUNDS_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Ninja.Body.html#collideWorldBounds';
Blockly.Msg.COLLIDE_WITH_WORLD_BOUNDS_VI_FIELD_1 = 'make';
Blockly.Msg.COLLIDE_WITH_WORLD_BOUNDS_VI_FIELD_2 = 'collide with world bounds';
Blockly.Msg.COLLIDE_WITH_WORLD_BOUNDS_VI_TOOLTIP = 'Make this object collide with the world bounds.';
Blockly.Msg.COLLIDE_WITH_WORLD_BOUNDS_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Ninja.Body.html#collideWorldBounds';
Blockly.Msg.CHECK_OVERLAP_VI_FIELD_1 = 'check overlap between';
Blockly.Msg.CHECK_OVERLAP_VI_FIELD_2 = 'and';
Blockly.Msg.CHECK_OVERLAP_VI_FIELD_3 = 'calling';
Blockly.Msg.CHECK_OVERLAP_VI_NAME_TEXT_DEFAULT = 'functionName';
Blockly.Msg.CHECK_OVERLAP_VI_FIELD_4 = 'if overlapping';
Blockly.Msg.CHECK_OVERLAP_VI_TOOLTIP = 'Checks for an overlap between objectA and objectB.';
Blockly.Msg.CHECK_OVERLAP_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.html#overlap';
Blockly.Msg.CHECK_OVERLAP_FIELD_1 = 'Check Overlap Between';
Blockly.Msg.CHECK_OVERLAP_FIELD_2 = 'and';
Blockly.Msg.CHECK_OVERLAP_FIELD_3 = 'calling';
Blockly.Msg.CHECK_OVERLAP_NAME_TEXT_DEFAULT = 'functionName';
Blockly.Msg.CHECK_OVERLAP_FIELD_4 = 'if overlapping';
Blockly.Msg.CHECK_OVERLAP_TOOLTIP = 'Checks for an overlap between objectA and objectB.';
Blockly.Msg.CHECK_OVERLAP_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.html#overlap';
Blockly.Msg.MOVE_TO_POINTER_FIELD_1 = 'move game object';
Blockly.Msg.MOVE_TO_POINTER_FIELD_2 = 'to mouse pointer at';
Blockly.Msg.MOVE_TO_POINTER_FIELD_3 = 'pixels per second';
Blockly.Msg.MOVE_TO_POINTER_TOOLTIP = 'Move the object to the pointer at the given speed';
Blockly.Msg.MOVE_TO_POINTER_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.html#moveToPointer';
Blockly.Msg.MOVE_TO_POINTER_EXTENDED_FIELD_1 = 'move game object';
Blockly.Msg.MOVE_TO_POINTER_EXTENDED_FIELD_2 = 'to mouse pointer at';
Blockly.Msg.MOVE_TO_POINTER_EXTENDED_FIELD_3 = 'pixels per second';
Blockly.Msg.MOVE_TO_POINTER_EXTENDED_FIELD_4 = 'max time (ms)';
Blockly.Msg.MOVE_TO_POINTER_EXTENDED_TOOLTIP = 'Move the object to the pointer at the given speed';
Blockly.Msg.MOVE_TO_POINTER_EXTENDED_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.html#moveToPointer';
Blockly.Msg.MOVE_TO_OBJECT_FIELD_1 = 'move game object';
Blockly.Msg.MOVE_TO_OBJECT_FIELD_2 = 'to object';
Blockly.Msg.MOVE_TO_OBJECT_FIELD_3 = 'at';
Blockly.Msg.MOVE_TO_OBJECT_FIELD_4 = 'pixels per second';
Blockly.Msg.MOVE_TO_OBJECT_FIELD_5 = 'max time (ms)';
Blockly.Msg.MOVE_TO_OBJECT_TOOLTIP = 'Move the object to the given object at the given speed';
Blockly.Msg.MOVE_TO_OBJECT_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.html#moveToObject';
Blockly.Msg.GET_CURRENT_MOUSE_POSITION_FIELD_1 = 'get mouse position';
Blockly.Msg.GET_CURRENT_MOUSE_POSITION_DIRECTION_DROPDOWN_1 = 'x';
Blockly.Msg.GET_CURRENT_MOUSE_POSITION_DIRECTION_DROPDOWN_2 = 'y';
Blockly.Msg.GET_CURRENT_MOUSE_POSITION_DIRECTION_DROPDOWN_3 = 'worldX';
Blockly.Msg.GET_CURRENT_MOUSE_POSITION_DIRECTION_DROPDOWN_4 = 'worldY';
Blockly.Msg.GET_CURRENT_MOUSE_POSITION_TOOLTIP = 'Get the position of the mouse, or last active pointer for touch screen interfaces';
Blockly.Msg.GET_CURRENT_MOUSE_POSITION_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Pointer.html#x';
Blockly.Msg.IS_MOUSE_BUTTON_CLICKED_BUTTON_DROPDOWN_1 = 'left';
Blockly.Msg.IS_MOUSE_BUTTON_CLICKED_BUTTON_DROPDOWN_2 = 'right';
Blockly.Msg.IS_MOUSE_BUTTON_CLICKED_BUTTON_DROPDOWN_3 = 'middle';
Blockly.Msg.IS_MOUSE_BUTTON_CLICKED_FIELD_1 = 'mouse button is clicked?';
Blockly.Msg.IS_MOUSE_BUTTON_CLICKED_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Pointer.html#isDown';
Blockly.Msg.IS_MOUSE_BUTTON_CLICKED_TOOLTIP = 'Is the specified button clicked';
Blockly.Msg.CREATE_CURSOR_KEYS_FIELD_1 = 'Create Cursor Keys';
Blockly.Msg.CREATE_CURSOR_KEYS_TOOLTIP = 'Create a cursor allowing access to the UP/DOWN/LEFT/RIGHT keys';
Blockly.Msg.CREATE_CURSOR_KEYS_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Keyboard.html#createCursorKeys';
Blockly.Msg.IS_KEY_DOWN_FIELD_1 = 'key';
Blockly.Msg.IS_KEY_DOWN_FIELD_2 = 'is down?';
Blockly.Msg.IS_KEY_DOWN_TOOLTIP = 'Checks if the given key is down';
Blockly.Msg.IS_KEY_DOWN_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Keyboard.html#isDown';
Blockly.Msg.GET_WORLD_PROPERTY_FIELD_1 = 'get';
Blockly.Msg.GET_WORLD_PROPERTY_NAME_DROPDOWN_1 = 'height';
Blockly.Msg.GET_WORLD_PROPERTY_NAME_DROPDOWN_2 = 'width';
Blockly.Msg.GET_WORLD_PROPERTY_NAME_DROPDOWN_3 = 'center x';
Blockly.Msg.GET_WORLD_PROPERTY_NAME_DROPDOWN_4 = 'center y';
Blockly.Msg.GET_WORLD_PROPERTY_NAME_DROPDOWN_5 = 'random x';
Blockly.Msg.GET_WORLD_PROPERTY_NAME_DROPDOWN_6 = 'random y';
Blockly.Msg.GET_WORLD_PROPERTY_FIELD_2 = 'of the world';
Blockly.Msg.GET_WORLD_PROPERTY_TOOLTIP = 'Get a property of the world';
Blockly.Msg.GET_WORLD_PROPERTY_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.World.html';
Blockly.Msg.SET_WORLD_BOUNDS_FIELD_1 = 'set world bounds';
Blockly.Msg.SET_WORLD_BOUNDS_FIELD_2 = 'x:';
Blockly.Msg.SET_WORLD_BOUNDS_FIELD_3 = 'y:';
Blockly.Msg.SET_WORLD_BOUNDS_FIELD_4 = 'width:';
Blockly.Msg.SET_WORLD_BOUNDS_FIELD_5 = 'height:';
Blockly.Msg.SET_WORLD_BOUNDS_TOOLTIP = 'Updates the size of the world and sets the leftmost corner';
Blockly.Msg.SET_WORLD_BOUNDS_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.World.html#setBounds';
Blockly.Msg.CREATE_POINT_FIELD_1 = 'Create Point';
Blockly.Msg.CREATE_POINT_FIELD_2 = 'X';
Blockly.Msg.CREATE_POINT_FIELD_3 = 'Y';
Blockly.Msg.CREATE_POINT_TOOLTIP = 'Makes a point type. This is a combination of an x and y value which is used to represent either a position, or a combination of width and height.';
Blockly.Msg.CREATE_POINT_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Point.html';
Blockly.Msg.GET_WORLD_REFERENCE_FIELD_1 = 'world';
Blockly.Msg.GET_WORLD_REFERENCE_TOOLTIP = 'Returns a reference to the game world. It functions as a group.';
Blockly.Msg.GET_WORLD_REFERENCE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.World.html';
Blockly.Msg.SET_GAME_OBJECT_POINT_FIELD_FIELD_1 = 'set point field';
Blockly.Msg.SET_GAME_OBJECT_POINT_FIELD_FIELD_2 = 'of';
Blockly.Msg.SET_GAME_OBJECT_POINT_FIELD_FIELD_3 = 'to';
Blockly.Msg.SET_GAME_OBJECT_POINT_FIELD_TOOLTIP = 'Set a point property on the object';
Blockly.Msg.SET_GAME_OBJECT_POINT_FIELD_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html';
Blockly.Msg.GET_GAME_OBJECT_POINT_FIELD_FIELD_1 = 'get point field';
Blockly.Msg.GET_GAME_OBJECT_POINT_FIELD_FIELD_2 = 'of';
Blockly.Msg.GET_GAME_OBJECT_POINT_FIELD_TOOLTIP = 'Get a point property on the object';
Blockly.Msg.GET_GAME_OBJECT_POINT_FIELD_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html';
Blockly.Msg.SET_GAME_OBJECT_NUMERIC_FIELD_FIELD_1 = 'set numeric field';
Blockly.Msg.SET_GAME_OBJECT_NUMERIC_FIELD_FIELD_2 = 'of';
Blockly.Msg.SET_GAME_OBJECT_NUMERIC_FIELD_FIELD_3 = 'to';
Blockly.Msg.SET_GAME_OBJECT_NUMERIC_FIELD_TOOLTIP = 'Set a numeric property on the object';
Blockly.Msg.SET_GAME_OBJECT_NUMERIC_FIELD_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html';
Blockly.Msg.GET_GAME_OBJECT_NUMERIC_FIELD_FIELD_1 = 'get numeric field';
Blockly.Msg.GET_GAME_OBJECT_NUMERIC_FIELD_FIELD_2 = 'of';
Blockly.Msg.GET_GAME_OBJECT_NUMERIC_FIELD_TOOLTIP = 'Get a numeric property on the object';
Blockly.Msg.GET_GAME_OBJECT_NUMERIC_FIELD_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html';
Blockly.Msg.SET_GAME_OBJECT_BOOLEAN_FIELD_FIELD_1 = 'set boolean field';
Blockly.Msg.SET_GAME_OBJECT_BOOLEAN_FIELD_FIELD_2 = 'of';
Blockly.Msg.SET_GAME_OBJECT_BOOLEAN_FIELD_FIELD_3 = 'to';
Blockly.Msg.SET_GAME_OBJECT_BOOLEAN_FIELD_TOOLTIP = 'Set a boolean property on the object';
Blockly.Msg.SET_GAME_OBJECT_BOOLEAN_FIELD_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html';
Blockly.Msg.GET_GAME_OBJECT_BOOLEAN_FIELD_FIELD_1 = 'get boolean field';
Blockly.Msg.GET_GAME_OBJECT_BOOLEAN_FIELD_FIELD_2 = 'of';
Blockly.Msg.GET_GAME_OBJECT_BOOLEAN_FIELD_TOOLTIP = 'Get a boolean property on the object';
Blockly.Msg.GET_GAME_OBJECT_BOOLEAN_FIELD_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html';
Blockly.Msg.SET_OBJECT_ANCHOR_FIELD_1 = 'set anchor for';
Blockly.Msg.SET_OBJECT_ANCHOR_FIELD_2 = 'to';
Blockly.Msg.SET_OBJECT_ANCHOR_FIELD_3 = 'x';
Blockly.Msg.SET_OBJECT_ANCHOR_FIELD_4 = 'y';
Blockly.Msg.SET_OBJECT_ANCHOR_TOOLTIP = 'Sets an object\'s anchor.';
Blockly.Msg.SET_OBJECT_ANCHOR_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#anchor';
Blockly.Msg.KILL_OBJECT_FIELD_1 = 'kill';
Blockly.Msg.KILL_OBJECT_TOOLTIP = 'Will kill the object setting making it non-existent. Reverse with revive.';
Blockly.Msg.KILL_OBJECT_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#kill';
Blockly.Msg.FAINT_OBJECT_FIELD_1 = 'faint';
Blockly.Msg.FAINT_OBJECT_TOOLTIP = 'Will faint the object setting making it non-existent. Reverse with revive.';
Blockly.Msg.FAINT_OBJECT_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#kill';
Blockly.Msg.DESTROY_OBJECT_FIELD_1 = 'destroy';
Blockly.Msg.DESTROY_OBJECT_TOOLTIP = 'Will remove the object from the game and memory, after which it can no longer be accessed.';
Blockly.Msg.DESTROY_OBJECT_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Component.Destroy.html';
Blockly.Msg.SET_SCALE_FIELD_1 = 'Scale';
Blockly.Msg.SET_SCALE_FIELD_2 = 'by';
Blockly.Msg.SET_SCALE_FIELD_3 = 'X';
Blockly.Msg.SET_SCALE_FIELD_4 = 'Y';
Blockly.Msg.SET_SCALE_TOOLTIP = 'Sets the given object\'s width and height.';
Blockly.Msg.SET_SCALE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#scale';
Blockly.Msg.SET_SCALE_VI_FIELD_1 = 'scale';
Blockly.Msg.SET_SCALE_VI_FIELD_2 = 'by';
Blockly.Msg.SET_SCALE_VI_FIELD_3 = 'x';
Blockly.Msg.SET_SCALE_VI_FIELD_4 = 'y';
Blockly.Msg.SET_SCALE_VI_TOOLTIP = 'Sets the given object\'s width and height.';
Blockly.Msg.SET_SCALE_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#scale';
Blockly.Msg.SET_POS_FIELD_1 = 'Set';
Blockly.Msg.SET_POS_PARAM_DROPDOWN_1 = 'x';
Blockly.Msg.SET_POS_PARAM_DROPDOWN_2 = 'y';
Blockly.Msg.SET_POS_FIELD_2 = 'on';
Blockly.Msg.SET_POS_FIELD_3 = 'to';
Blockly.Msg.SET_POS_TOOLTIP = 'Sets the individual x or y coordinate of an object.';
Blockly.Msg.SET_POS_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#position';
Blockly.Msg.OBJECT_SET_TO_FIELD_1 = 'for';
Blockly.Msg.OBJECT_SET_TO_FIELD_2 = 'set x to';
Blockly.Msg.OBJECT_SET_TO_FIELD_3 = 'set y to';
Blockly.Msg.OBJECT_SET_TO_TOOLTIP = 'Sets the x and y fields of an object.';
Blockly.Msg.OBJECT_SET_TO_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Point.html#setTo';
Blockly.Msg.SET_VELOCITY_FIELD_1 = 'Set Velocity';
Blockly.Msg.SET_VELOCITY_FIELD_2 = 'on';
Blockly.Msg.SET_VELOCITY_FIELD_3 = 'to';
Blockly.Msg.SET_VELOCITY_TOOLTIP = 'Sets an objects velocity. This is a combination of speed and direction.';
Blockly.Msg.SET_VELOCITY_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.Body.html#velocity';
Blockly.Msg.GET_PARAM_FIELD_1 = 'get';
Blockly.Msg.GET_PARAM_FIELD_2 = 'from object';
Blockly.Msg.GET_PARAM_TOOLTIP = 'Gets a given numeric field from an object.';
Blockly.Msg.GET_PARAM_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#toc-4';
Blockly.Msg.OBJECT_INCAMERA_FIELD_1 = 'is';
Blockly.Msg.OBJECT_INCAMERA_FIELD_2 = 'in camera?';
Blockly.Msg.OBJECT_INCAMERA_TOOLTIP = 'Checks if an object is inside the boundaries of the camera.';
Blockly.Msg.OBJECT_INCAMERA_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Component.InCamera.html';
Blockly.Msg.GET_CAMERA_FIELD_1 = 'get camera';
Blockly.Msg.GET_CAMERA_TOOLTIP = 'Returns a reference to the camera.';
Blockly.Msg.GET_CAMERA_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Camera.html';
Blockly.Msg.CAMERA_FOLLOW_FIELD_1 = 'make camera follow';
Blockly.Msg.CAMERA_FOLLOW_TOOLTIP = 'Make the camera follow the specified game object';
Blockly.Msg.CAMERA_FOLLOW_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Camera.html#follow';
Blockly.Msg.GET_BOUNDS_FIELD_1 = 'Get bounds of';
Blockly.Msg.GET_BOUNDS_TOOLTIP = 'Gets the rectangular bounds of most objects in the game.';
Blockly.Msg.GET_BOUNDS_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#getBounds';
Blockly.Msg.GET_ROTATION_FIELD_1 = 'get rotation';
Blockly.Msg.GET_ROTATION_TOOLTIP = 'Finds the rotation (in degrees) of a Game Object.';
Blockly.Msg.GET_ROTATION_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#angle';
Blockly.Msg.ROTATE_FIELD_1 = 'rotate';
Blockly.Msg.ROTATE_FIELD_2 = 'by';
Blockly.Msg.ROTATE_FIELD_3 = 'degrees';
Blockly.Msg.ROTATE_TOOLTIP = 'Rotates a game object by the given angle in degrees. Negative numbers will rotate it the opposite direction.';
Blockly.Msg.ROTATE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#angle';
Blockly.Msg.SET_ROTATION_FIELD_1 = 'set the rotation of';
Blockly.Msg.SET_ROTATION_FIELD_2 = 'to';
Blockly.Msg.SET_ROTATION_FIELD_3 = 'degrees';
Blockly.Msg.SET_ROTATION_TOOLTIP = 'Directly sets the rotation (in degrees) of this game object to the given value.';
Blockly.Msg.SET_ROTATION_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#angle';
Blockly.Msg.GET_LOCAL_BOUNDS_FIELD_1 = 'get local bounds of';
Blockly.Msg.GET_LOCAL_BOUNDS_TOOLTIP = 'Gets the rectangular bounds of an object. Bounds are relative to the object itself instead of the world.';
Blockly.Msg.GET_LOCAL_BOUNDS_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#getLocalBounds';
Blockly.Msg.RESET_FIELD_1 = 'reset object';
Blockly.Msg.RESET_FIELD_2 = 'x';
Blockly.Msg.RESET_FIELD_3 = 'y';
Blockly.Msg.RESET_TOOLTIP = 'Gets most objects ready to play again in various ways and treats it like new. Specifically, moves it to a new position then makes sure it is visible, rendering, alive, and actually exists in the game world.';
Blockly.Msg.RESET_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#reset';
Blockly.Msg.REVIVE_FIELD_1 = 'revive';
Blockly.Msg.REVIVE_TOOLTIP = 'Brings a \'dead\' Game Object back to life. Makes sure it counts as alive, existing, and visible. Will send an event named onRevived.';
Blockly.Msg.REVIVE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#revive';
Blockly.Msg.ADD_TEXT_FIELD_1 = 'add text at';
Blockly.Msg.ADD_TEXT_FIELD_2 = 'x';
Blockly.Msg.ADD_TEXT_FIELD_3 = 'y';
Blockly.Msg.ADD_TEXT_FIELD_4 = 'initial text';
Blockly.Msg.ADD_TEXT_FIELD_5 = 'font size';
Blockly.Msg.ADD_TEXT_FIELD_6 = 'font colour';
Blockly.Msg.ADD_TEXT_TOOLTIP = 'Add text to the screen at the specified location';
Blockly.Msg.ADD_TEXT_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.GameObjectFactory.html#text';
Blockly.Msg.SET_TEXT_FIELD_1 = 'set text for';
Blockly.Msg.SET_TEXT_FIELD_2 = 'to';
Blockly.Msg.SET_TEXT_TOOLTIP = 'Sets what phaser text will display on the screen.';
Blockly.Msg.SET_TEXT_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Text.html#setText';
Blockly.Msg.SET_TEXT_VI_FIELD_1 = 'set text for';
Blockly.Msg.SET_TEXT_VI_FIELD_2 = 'to';
Blockly.Msg.SET_TEXT_VI_TOOLTIP = 'Sets what phaser text will display on the screen.';
Blockly.Msg.SET_TEXT_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Text.html#setText';
Blockly.Msg.CREATE_BITMAPFONT_FIELD_1 = 'Create Font';
Blockly.Msg.CREATE_BITMAPFONT_FIELD_2 = 'Tag';
Blockly.Msg.CREATE_BITMAPFONT_FIELD_3 = 'Source';
Blockly.Msg.CREATE_BITMAPFONT_FIELD_4 = 'XML';
Blockly.Msg.CREATE_BITMAPFONT_TOOLTIP = 'Loads a font into the game. These don\'t work like normal fonts.\nSee the help for more info.';
Blockly.Msg.CREATE_BITMAPFONT_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Loader.html#bitmapFont';
Blockly.Msg.DRAWCIRCLE_FIELD_1 = 'draw circle';
Blockly.Msg.DRAWCIRCLE_FIELD_2 = 'x';
Blockly.Msg.DRAWCIRCLE_FIELD_3 = 'x';
Blockly.Msg.DRAWCIRCLE_FIELD_4 = 'with diameter';
Blockly.Msg.DRAWCIRCLE_TOOLTIP = 'Draws a circle at a given position in the world. Doesn\'t work on its own. Put it inside the \'fill shapes with\' block.';
Blockly.Msg.DRAWCIRCLE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Graphics.html#drawCircle';
Blockly.Msg.GET_OBJECT_WIDTH_FIELD_1 = 'get width of ';
Blockly.Msg.GET_OBJECT_WIDTH_TOOLTIP = 'Gets the width of an object.';
Blockly.Msg.GET_OBJECT_WIDTH_HELP_URL = 'https://photonstorm.github.io/phaser-ce/PIXI.Sprite.html#width';
Blockly.Msg.SET_OBJECT_WIDTH_FIELD_1 = 'set width of ';
Blockly.Msg.SET_OBJECT_WIDTH_TOOLTIP = 'Sets the width of an object.';
Blockly.Msg.SET_OBJECT_WIDTH_HELP_URL = 'https://photonstorm.github.io/phaser-ce/PIXI.Sprite.html#width';
Blockly.Msg.ADDEMITTER_FIELD_1 = 'add emitter';
Blockly.Msg.ADDEMITTER_FIELD_2 = 'x';
Blockly.Msg.ADDEMITTER_FIELD_3 = 'y';
Blockly.Msg.ADDEMITTER_FIELD_4 = 'maxParticles';
Blockly.Msg.ADDEMITTER_TOOLTIP = 'Create a particle emitter';
Blockly.Msg.ADDEMITTER_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Particles.Arcade.Emitter.html';
Blockly.Msg.EMITTER_MAKE_PARTICLES_FIELD_1 = 'on emitter';
Blockly.Msg.EMITTER_MAKE_PARTICLES_FIELD_2 = 'make particles';
Blockly.Msg.EMITTER_MAKE_PARTICLES_FIELD_3 = 'keys';
Blockly.Msg.EMITTER_MAKE_PARTICLES_FIELD_4 = 'frames';
Blockly.Msg.EMITTER_MAKE_PARTICLES_FIELD_5 = 'quantity';
Blockly.Msg.EMITTER_MAKE_PARTICLES_FIELD_6 = 'collide';
Blockly.Msg.EMITTER_MAKE_PARTICLES_FIELD_7 = 'collide world';
Blockly.Msg.EMITTER_MAKE_PARTICLES_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Particles.Arcade.Emitter.html#makeParticles';
Blockly.Msg.EMITTER_MAKE_PARTICLES_TOOLTIP = 'Generate a new set of particles for this emitter';
Blockly.Msg.EMITTERS_MAKE_PARTICLES_FIELD_1 = 'on emitter';
Blockly.Msg.EMITTERS_MAKE_PARTICLES_FIELD_2 = 'make particles from';
Blockly.Msg.EMITTERS_MAKE_PARTICLES_TAG_TEXT_DEFAULT = 'image tag';
Blockly.Msg.EMITTERS_MAKE_PARTICLES_TOOLTIP = 'Generate a new set of particles for this emitter';
Blockly.Msg.EMITTERS_MAKE_PARTICLES_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Particles.Arcade.Emitter.html#makeParticles';
Blockly.Msg.EMITTERS_SET_ROTATION_FIELD_1 = 'on emitter,';
Blockly.Msg.EMITTERS_SET_ROTATION_FIELD_2 = 'set rotation:';
Blockly.Msg.EMITTERS_SET_ROTATION_FIELD_3 = 'min';
Blockly.Msg.EMITTERS_SET_ROTATION_FIELD_4 = 'max';
Blockly.Msg.EMITTERS_SET_ROTATION_TOOLTIP = 'Set the angular velocity constraints of the particles';
Blockly.Msg.EMITTERS_SET_ROTATION_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Particles.Arcade.Emitter.html#setRotation';
Blockly.Msg.EMITTERS_SET_ROTATION_VI_FIELD_1 = 'on emitter';
Blockly.Msg.EMITTERS_SET_ROTATION_VI_FIELD_2 = 'set min/max angular velocity';
Blockly.Msg.EMITTERS_SET_ROTATION_VI_FIELD_3 = 'min';
Blockly.Msg.EMITTERS_SET_ROTATION_VI_FIELD_4 = 'max';
Blockly.Msg.EMITTERS_SET_ROTATION_VI_TOOLTIP = 'Set the angular velocity constraints of the particles.';
Blockly.Msg.EMITTERS_SET_ROTATION_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Particles.Arcade.Emitter.html#setRotation';
Blockly.Msg.EMITTERS_START_FIELD_1 = 'on emitter,';
Blockly.Msg.EMITTERS_START_FIELD_2 = 'start:';
Blockly.Msg.EMITTERS_START_FIELD_3 = 'Should Burst?';
Blockly.Msg.EMITTERS_START_FIELD_4 = 'Lifespan';
Blockly.Msg.EMITTERS_START_FIELD_5 = 'Frequency';
Blockly.Msg.EMITTERS_START_FIELD_6 = 'Quantity';
Blockly.Msg.EMITTERS_START_TOOLTIP = 'Start emitting particles.';
Blockly.Msg.EMITTERS_START_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Particles.Arcade.Emitter.html#start';
Blockly.Msg.EMITTERS_START_VI_FIELD_1 = 'start emitter,';
Blockly.Msg.EMITTERS_START_VI_FIELD_2 = 'explode';
Blockly.Msg.EMITTERS_START_VI_FIELD_3 = 'lifespan (ms)';
Blockly.Msg.EMITTERS_START_VI_FIELD_4 = 'frequency (ms)';
Blockly.Msg.EMITTERS_START_VI_FIELD_5 = 'quantity';
Blockly.Msg.EMITTERS_START_VI_TOOLTIP = 'Start emitting particles.';
Blockly.Msg.EMITTERS_START_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Particles.Arcade.Emitter.html#start';
Blockly.Msg.EMITTERS_SET_ALPHA_FIELD_1 = 'on emitter,';
Blockly.Msg.EMITTERS_SET_ALPHA_FIELD_2 = 'set Alpha:';
Blockly.Msg.EMITTERS_SET_ALPHA_FIELD_3 = 'min';
Blockly.Msg.EMITTERS_SET_ALPHA_FIELD_4 = 'max';
Blockly.Msg.EMITTERS_SET_ALPHA_FIELD_5 = 'rate';
Blockly.Msg.EMITTERS_SET_ALPHA_TOOLTIP = 'Set the min and max alpha values for this emitter.';
Blockly.Msg.EMITTERS_SET_ALPHA_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Particles.Arcade.Emitter.html#setAlpha';
Blockly.Msg.EMITTERS_SET_ALPHA_VI_FIELD_1 = 'on emitter,';
Blockly.Msg.EMITTERS_SET_ALPHA_VI_FIELD_2 = 'set alpha';
Blockly.Msg.EMITTERS_SET_ALPHA_VI_FIELD_3 = 'min';
Blockly.Msg.EMITTERS_SET_ALPHA_VI_FIELD_4 = 'max';
Blockly.Msg.EMITTERS_SET_ALPHA_VI_FIELD_5 = 'rate';
Blockly.Msg.EMITTERS_SET_ALPHA_VI_TOOLTIP = 'Set the min and max alpha values for this emitter.';
Blockly.Msg.EMITTERS_SET_ALPHA_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Particles.Arcade.Emitter.html#setAlpha';
Blockly.Msg.EMITTERS_SET_SCALE_FIELD_1 = 'on emitter,';
Blockly.Msg.EMITTERS_SET_SCALE_FIELD_2 = 'set Scale:';
Blockly.Msg.EMITTERS_SET_SCALE_FIELD_3 = 'min X';
Blockly.Msg.EMITTERS_SET_SCALE_FIELD_4 = 'max X';
Blockly.Msg.EMITTERS_SET_SCALE_FIELD_5 = 'min Y';
Blockly.Msg.EMITTERS_SET_SCALE_FIELD_6 = 'max Y';
Blockly.Msg.EMITTERS_SET_SCALE_FIELD_7 = 'rate';
Blockly.Msg.EMITTERS_SET_SCALE_TOOLTIP = 'Set the minimum/maximum scale for particles and the rate to go between.';
Blockly.Msg.EMITTERS_SET_SCALE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Particles.Arcade.Emitter.html#setScale';
Blockly.Msg.EMITTERS_SET_SCALE_VI_FIELD_1 = 'on emitter,';
Blockly.Msg.EMITTERS_SET_SCALE_VI_FIELD_2 = 'set scale';
Blockly.Msg.EMITTERS_SET_SCALE_VI_FIELD_3 = 'min x';
Blockly.Msg.EMITTERS_SET_SCALE_VI_FIELD_4 = 'max x';
Blockly.Msg.EMITTERS_SET_SCALE_VI_FIELD_5 = 'min y';
Blockly.Msg.EMITTERS_SET_SCALE_VI_FIELD_6 = 'max y';
Blockly.Msg.EMITTERS_SET_SCALE_VI_FIELD_7 = 'rate';
Blockly.Msg.EMITTERS_SET_SCALE_VI_TOOLTIP = 'Set the minimum/maximum scale for particles and the rate to go between.';
Blockly.Msg.EMITTERS_SET_SCALE_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Particles.Arcade.Emitter.html#setScale';
Blockly.Msg.SET_EMIT_FROM_FIELD_1 = 'on';
Blockly.Msg.SET_EMIT_FROM_FIELD_2 = 'set emit from';
Blockly.Msg.SET_EMIT_FROM_CORD_DROPDOWN_1 = 'X';
Blockly.Msg.SET_EMIT_FROM_CORD_DROPDOWN_2 = 'Y';
Blockly.Msg.SET_EMIT_FROM_FIELD_3 = 'to';
Blockly.Msg.SET_EMIT_FROM_TOOLTIP = 'Set where the particles emit from, by individual coordinate.';
Blockly.Msg.SET_EMIT_FROM_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Particles.Arcade.Emitter.html#emitX';
Blockly.Msg.EMITTERS_SET_SPEED_FIELD_1 = 'on emitter,';
Blockly.Msg.EMITTERS_SET_SPEED_FIELD_2 = 'set Speed:';
Blockly.Msg.EMITTERS_SET_SPEED_FIELD_3 = 'min X';
Blockly.Msg.EMITTERS_SET_SPEED_FIELD_4 = 'max X';
Blockly.Msg.EMITTERS_SET_SPEED_FIELD_5 = 'min Y';
Blockly.Msg.EMITTERS_SET_SPEED_FIELD_6 = 'max Y';
Blockly.Msg.EMITTERS_SET_SPEED_TOOLTIP = 'Sets the minimum and maximum speeds that an emitted particle will go.';
Blockly.Msg.EMITTERS_SET_SPEED_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Particles.Arcade.Emitter.html#minParticleSpeed';
Blockly.Msg.EMITTERS_SET_SPEED_VI_FIELD_1 = 'on emitter';
Blockly.Msg.EMITTERS_SET_SPEED_VI_FIELD_2 = 'set speed';
Blockly.Msg.EMITTERS_SET_SPEED_VI_FIELD_3 = 'min x';
Blockly.Msg.EMITTERS_SET_SPEED_VI_FIELD_4 = 'max x';
Blockly.Msg.EMITTERS_SET_SPEED_VI_FIELD_5 = 'min y';
Blockly.Msg.EMITTERS_SET_SPEED_VI_FIELD_6 = 'max y';
Blockly.Msg.EMITTERS_SET_SPEED_VI_TOOLTIP = 'Sets the minimum and maximum speeds that an emitted particle will go.';
Blockly.Msg.EMITTERS_SET_SPEED_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Particles.Arcade.Emitter.html#minParticleSpeed';
Blockly.Msg.EMITTERS_SET_GRAVITY_FIELD_1 = 'on emitter,';
Blockly.Msg.EMITTERS_SET_GRAVITY_FIELD_2 = 'set Gravity:';
Blockly.Msg.EMITTERS_SET_GRAVITY_TOOLTIP = 'Set the gravity of generated particles.';
Blockly.Msg.EMITTERS_SET_GRAVITY_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Particles.Arcade.Emitter.html#gravity';
Blockly.Msg.EMITTERS_SET_GRAVITY_VI_FIELD_1 = 'on emitter';
Blockly.Msg.EMITTERS_SET_GRAVITY_VI_FIELD_2 = 'set gravity:';
Blockly.Msg.EMITTERS_SET_GRAVITY_VI_TOOLTIP = 'Set the gravity of generated particles';
Blockly.Msg.EMITTERS_SET_GRAVITY_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Particles.Arcade.Emitter.html#gravity';
Blockly.Msg.EMITTERS_SET_WIDTH_FIELD_1 = 'on emitter,';
Blockly.Msg.EMITTERS_SET_WIDTH_FIELD_2 = 'set width:';
Blockly.Msg.EMITTERS_SET_WIDTH_TOOLTIP = 'Sets the width of the area in which particles will be emitted.';
Blockly.Msg.EMITTERS_SET_WIDTH_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Particles.Arcade.Emitter.html#width';
Blockly.Msg.DEBUG_SPRITE_FIELD_1 = 'write debug for sprite';
Blockly.Msg.DEBUG_SPRITE_FIELD_2 = 'at x';
Blockly.Msg.DEBUG_SPRITE_FIELD_3 = 'y';
Blockly.Msg.DEBUG_SPRITE_TOOLTIP = 'Draws various information useful for debugging about the specified sprite at the given world coordinates.';
Blockly.Msg.DEBUG_SPRITE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Utils.Debug.html#spriteInfo';
Blockly.Msg.STATEMANAGER_ADD_STATE_FIELD_1 = 'add state';
Blockly.Msg.STATEMANAGER_ADD_STATE_FIELD_2 = 'tagged';
Blockly.Msg.STATEMANAGER_ADD_STATE_KEY_TEXT_DEFAULT = 'tag';
Blockly.Msg.STATEMANAGER_ADD_STATE_FIELD_3 = 'to state manager';
Blockly.Msg.STATEMANAGER_ADD_STATE_TOOLTIP = 'Adds a state to the game engine, this should be an instance of a state class.';
Blockly.Msg.STATEMANAGER_START_STATE_FIELD_1 = 'start state with tag';
Blockly.Msg.STATEMANAGER_START_STATE_TAG_TEXT_DEFAULT = 'tag';
Blockly.Msg.STATEMANAGER_START_STATE_TOOLTIP = 'Start the specified state, this should be a state that has been added to the game engine';
Blockly.Msg.STATEMANAGER_START_STATE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.StateManager.html#start';
Blockly.Msg.RECTANGLE_CREATE_FIELD_1 = 'make rectangle';
Blockly.Msg.RECTANGLE_CREATE_FIELD_2 = 'x';
Blockly.Msg.RECTANGLE_CREATE_FIELD_3 = 'y';
Blockly.Msg.RECTANGLE_CREATE_FIELD_4 = 'width';
Blockly.Msg.RECTANGLE_CREATE_FIELD_5 = 'height';
Blockly.Msg.RECTANGLE_CREATE_TOOLTIP = 'Defines a rectangle, can be used for cropping, alignment and other tasks';
Blockly.Msg.RECTANGLE_CREATE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Rectangle.html';
Blockly.Msg.POINT_CREATE_FIELD_1 = 'make point';
Blockly.Msg.POINT_CREATE_FIELD_2 = 'x';
Blockly.Msg.POINT_CREATE_FIELD_3 = 'y';
Blockly.Msg.POINT_CREATE_TOOLTIP = 'Defines a point which represents a location in 2D';
Blockly.Msg.POINT_CREATE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Point.html';
Blockly.Msg.POINT_GET_ELEMENT_FIELD_1 = 'get point.';
Blockly.Msg.POINT_GET_ELEMENT_ELEMENT_DROPDOWN_1 = 'x';
Blockly.Msg.POINT_GET_ELEMENT_ELEMENT_DROPDOWN_2 = 'y';
Blockly.Msg.POINT_GET_ELEMENT_FIELD_2 = 'of';
Blockly.Msg.POINT_GET_ELEMENT_TOOLTIP = 'Defines a point which represents a location in 2D';
Blockly.Msg.POINT_GET_ELEMENT_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Point.html';
Blockly.Msg.POINT_SET_ELEMENT_FIELD_1 = 'set point.';
Blockly.Msg.POINT_SET_ELEMENT_ELEMENT_DROPDOWN_1 = 'x';
Blockly.Msg.POINT_SET_ELEMENT_ELEMENT_DROPDOWN_2 = 'y';
Blockly.Msg.POINT_SET_ELEMENT_FIELD_2 = 'of';
Blockly.Msg.POINT_SET_ELEMENT_FIELD_3 = 'to';
Blockly.Msg.POINT_SET_ELEMENT_TOOLTIP = 'Defines a point which represents a location in 2D';
Blockly.Msg.POINT_SET_ELEMENT_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Point.html';
Blockly.Msg.POINT_SET_MAGNITUDE_FIELD_1 = 'set magnitude for';
Blockly.Msg.POINT_SET_MAGNITUDE_FIELD_2 = 'to';
Blockly.Msg.POINT_SET_MAGNITUDE_TOOLTIP = 'Sets the magnitude of the point';
Blockly.Msg.POINT_SET_MAGNITUDE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Point.html#setMagnitude';
Blockly.Msg.POINTS_ADD_FIELD_1 = 'add points';
Blockly.Msg.POINTS_ADD_FIELD_2 = 'and';
Blockly.Msg.POINTS_ADD_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Point.html#.add';
Blockly.Msg.POINTS_ADD_TOOLTIP = 'Adds the two points and returns the result';
Blockly.Msg.POINTS_SUBTRACT_FIELD_1 = 'subtract points';
Blockly.Msg.POINTS_SUBTRACT_FIELD_2 = 'and';
Blockly.Msg.POINTS_SUBTRACT_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Point.html#.subtract';
Blockly.Msg.POINTS_SUBTRACT_TOOLTIP = 'Adds the two points and returns the result';
Blockly.Msg.POINTS_ANGLE_BETWEEN_FIELD_1 = 'angle between';
Blockly.Msg.POINTS_ANGLE_BETWEEN_FIELD_2 = 'and';
Blockly.Msg.POINTS_ANGLE_BETWEEN_TOOLTIP = 'Returns the angle in radians between the two point objects';
Blockly.Msg.POINTS_ANGLE_BETWEEN_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Point.html#.angle';
Blockly.Msg.POINTS_DISTANCE_FIELD_1 = 'distance between';
Blockly.Msg.POINTS_DISTANCE_FIELD_2 = 'and';
Blockly.Msg.POINTS_DISTANCE_TOOLTIP = 'Returns the distance between the two point objects';
Blockly.Msg.POINTS_DISTANCE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Point.html#.distance';
Blockly.Msg.POINTS_DIVIDE_FIELD_1 = 'divide';
Blockly.Msg.POINTS_DIVIDE_FIELD_2 = 'and';
Blockly.Msg.POINTS_DIVIDE_TOOLTIP = 'Returns a new point p = [a.x / b.x, a.y / b.y]';
Blockly.Msg.POINTS_DIVIDE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Point.html#.divide';
Blockly.Msg.POINTS_EQUALS_FIELD_1 = 'is equal to';
Blockly.Msg.POINTS_EQUALS_FIELD_2 = '?';
Blockly.Msg.POINTS_EQUALS_TOOLTIP = 'Determines if two points are equal';
Blockly.Msg.POINTS_EQUALS_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Point.html#.equals';
Blockly.Msg.POINTS_INTERPOLATE_FIELD_1 = 'interpolate between A';
Blockly.Msg.POINTS_INTERPOLATE_FIELD_2 = 'and B';
Blockly.Msg.POINTS_INTERPOLATE_FIELD_3 = 'percent to B';
Blockly.Msg.POINTS_INTERPOLATE_TOOLTIP = 'Interpolate between two points, the percent (0.0 - 1.0) determines how far towards the second point (1 - F) * A + F * B';
Blockly.Msg.POINTS_INTERPOLATE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Point.html#.interpolate';
Blockly.Msg.POINTS_MULTIPLY_FIELD_1 = 'multiply';
Blockly.Msg.POINTS_MULTIPLY_FIELD_2 = 'and';
Blockly.Msg.POINTS_MULTIPLY_TOOLTIP = 'Multiply two points';
Blockly.Msg.POINTS_MULTIPLY_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Point.html#.multiply';
Blockly.Msg.POINTS_NEGATE_FIELD_1 = 'negate';
Blockly.Msg.POINTS_NEGATE_TOOLTIP = 'Negate the point';
Blockly.Msg.POINTS_NEGATE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Point.html#.negative';
Blockly.Msg.POINTS_NORMALIZE_FIELD_1 = 'normalize';
Blockly.Msg.POINTS_NORMALIZE_TOOLTIP = 'Normalize the point (make unit length)';
Blockly.Msg.POINTS_NORMALIZE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Point.html#.normalize';
Blockly.Msg.POINTS_PERPENDICULAR_FIELD_1 = 'find pependicular vector to';
Blockly.Msg.POINTS_PERPENDICULAR_TOOLTIP = 'Find a perpendicular vector to this point';
Blockly.Msg.POINTS_PERPENDICULAR_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Point.html#.perp';
Blockly.Msg.CAMERA_FOLLOW_VI_FIELD_1 = 'make camera follow';
Blockly.Msg.CAMERA_FOLLOW_VI_TOOLTIP = 'Make the camera follow the specified game object';
Blockly.Msg.CAMERA_FOLLOW_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Camera.html#follow';
Blockly.Msg.CAMERA_FADE_FIELD_1 = 'fade screen to';
Blockly.Msg.CAMERA_FADE_FIELD_2 = 'over';
Blockly.Msg.CAMERA_FADE_FIELD_3 = 'milliseconds';
Blockly.Msg.CAMERA_FADE_TOOLTIP = 'Fades the screen to the specified colour over time. Ends with the screen completely obscured.';
Blockly.Msg.CAMERA_FADE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Camera.html#fade';
Blockly.Msg.CAMERA_FLASH_FIELD_1 = 'flash screen to';
Blockly.Msg.CAMERA_FLASH_FIELD_2 = 'then fade in over';
Blockly.Msg.CAMERA_FLASH_FIELD_3 = 'milliseconds';
Blockly.Msg.CAMERA_FLASH_TOOLTIP = 'Immediately covers the camera with the specified colour. Then fades back in over a given time.\nUseful for fading back in after fading out, or as a big hit effect.';
Blockly.Msg.CAMERA_FLASH_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Camera.html#flash';
Blockly.Msg.CAMERA_FOCUS_ON_FIELD_1 = 'focus camera on';
Blockly.Msg.CAMERA_FOCUS_ON_TOOLTIP = 'Immediately centers the camera on the specified game object.';
Blockly.Msg.CAMERA_FOCUS_ON_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Camera.html#focusOn';
Blockly.Msg.CAMERA_FOCUS_ON_XY_FIELD_1 = 'focus camera on position at';
Blockly.Msg.CAMERA_FOCUS_ON_XY_FIELD_2 = 'x';
Blockly.Msg.CAMERA_FOCUS_ON_XY_FIELD_3 = 'y';
Blockly.Msg.CAMERA_FOCUS_ON_XY_TOOLTIP = 'Immediately centers the camera on a given position.';
Blockly.Msg.CAMERA_FOCUS_ON_XY_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Camera.html#focusOnXY';
Blockly.Msg.CAMERA_RESET_FIELD_1 = 'reset camera';
Blockly.Msg.CAMERA_RESET_TOOLTIP = 'Completely resets the camera. It goes back to (0, 0), stops following anything, and removes all effects such as shake or flash.';
Blockly.Msg.CAMERA_RESET_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Camera.html#reset';
Blockly.Msg.CAMERA_RESET_FX_FIELD_1 = 'reset camera effects';
Blockly.Msg.CAMERA_RESET_FX_TOOLTIP = 'Removes visual effects from the camera such as fading in/out. Does not affect the position, follow target, or screen shake.';
Blockly.Msg.CAMERA_RESET_FX_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Camera.html#resetFX';
Blockly.Msg.CAMERA_SET_BOUNDS_TO_WORLD_FIELD_1 = 'set camera bounds to world bounds';
Blockly.Msg.CAMERA_SET_BOUNDS_TO_WORLD_TOOLTIP = 'The camera bounds are not the size of what it shows, but the space it can move around in.\nThis sets those bounds so that the camera can view the entire world, but nothing more.';
Blockly.Msg.CAMERA_SET_BOUNDS_TO_WORLD_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Camera.html#setBoundsToWorld';
Blockly.Msg.CAMERA_SET_POSITION_FIELD_1 = 'set camera position to';
Blockly.Msg.CAMERA_SET_POSITION_FIELD_2 = 'x';
Blockly.Msg.CAMERA_SET_POSITION_FIELD_3 = 'y';
Blockly.Msg.CAMERA_SET_POSITION_TOOLTIP = 'Jumps the camera immediately to the given position.\nNote that the camera\'s position is its upper left corner, not its center.';
Blockly.Msg.CAMERA_SET_POSITION_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Camera.html#setPosition';
Blockly.Msg.CAMERA_SET_SIZE_FIELD_1 = 'set camera size';
Blockly.Msg.CAMERA_SET_SIZE_FIELD_2 = 'width';
Blockly.Msg.CAMERA_SET_SIZE_FIELD_3 = 'height';
Blockly.Msg.CAMERA_SET_SIZE_TOOLTIP = 'Sets the size of the camera\'s view window.';
Blockly.Msg.CAMERA_SET_SIZE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Camera.html#setSize';
Blockly.Msg.CAMERA_SHAKE_FIELD_1 = 'shake the camera';
Blockly.Msg.CAMERA_SHAKE_FIELD_2 = '% intensity';
Blockly.Msg.CAMERA_SHAKE_DIRECTION_DROPDOWN_1 = 'horizontal and vertical';
Blockly.Msg.CAMERA_SHAKE_DIRECTION_DROPDOWN_2 = 'vertically';
Blockly.Msg.CAMERA_SHAKE_DIRECTION_DROPDOWN_3 = 'horizontally';
Blockly.Msg.CAMERA_SHAKE_FIELD_3 = 'for';
Blockly.Msg.CAMERA_SHAKE_FIELD_4 = 'milliseconds';
Blockly.Msg.CAMERA_SHAKE_TOOLTIP = 'Screen shake. Great for impact effects, or just a little extra umph, but don\'t go overboard.\nThe intensity goes from 0 to 1. % of bounds it can move';
Blockly.Msg.CAMERA_SHAKE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Camera.html#shake';
Blockly.Msg.CAMERA_UNFOLLOW_FIELD_1 = 'stop camera follow';
Blockly.Msg.CAMERA_UNFOLLOW_TOOLTIP = 'Makes the camera stop following anything. Equivalent to making the camera follow null.';
Blockly.Msg.CAMERA_UNFOLLOW_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Camera.html#unfollow';
Blockly.Msg.CAMERA_FOLLOW_VI_STYLED_FIELD_1 = 'make camera follow';
Blockly.Msg.CAMERA_FOLLOW_VI_STYLED_FIELD_2 = 'with style';
Blockly.Msg.CAMERA_FOLLOW_VI_STYLED_STYLE_DROPDOWN_1 = 'lockon';
Blockly.Msg.CAMERA_FOLLOW_VI_STYLED_STYLE_DROPDOWN_2 = 'platformer';
Blockly.Msg.CAMERA_FOLLOW_VI_STYLED_STYLE_DROPDOWN_3 = 'topdown';
Blockly.Msg.CAMERA_FOLLOW_VI_STYLED_STYLE_DROPDOWN_4 = 'topdown tight';
Blockly.Msg.CAMERA_FOLLOW_VI_STYLED_TOOLTIP = 'Make the camera follow the specified game object';
Blockly.Msg.CAMERA_FOLLOW_VI_STYLED_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Camera.html#follow';
Blockly.Msg.SET_SOUND_BOOLEAN_MEMBER_FIELD_1 = 'set';
Blockly.Msg.SET_SOUND_BOOLEAN_MEMBER_FIELD_2 = 'of';
Blockly.Msg.SET_SOUND_BOOLEAN_MEMBER_FIELD_3 = 'to';
Blockly.Msg.SET_SOUND_BOOLEAN_MEMBER_TOOLTIP = 'Set the selected member on the Sound';
Blockly.Msg.SET_SOUND_BOOLEAN_MEMBER_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sound.html';
Blockly.Msg.GET_SOUND_BOOLEAN_MEMBER_FIELD_1 = 'get';
Blockly.Msg.GET_SOUND_BOOLEAN_MEMBER_FIELD_2 = 'of';
Blockly.Msg.GET_SOUND_BOOLEAN_MEMBER_TOOLTIP = 'Get the selected member from the Sound';
Blockly.Msg.GET_SOUND_BOOLEAN_MEMBER_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sound.html';
Blockly.Msg.SET_SOUND_NUMERIC_MEMBER_FIELD_1 = 'set';
Blockly.Msg.SET_SOUND_NUMERIC_MEMBER_FIELD_2 = 'of';
Blockly.Msg.SET_SOUND_NUMERIC_MEMBER_FIELD_3 = 'to';
Blockly.Msg.SET_SOUND_NUMERIC_MEMBER_TOOLTIP = 'Set the selected member on the Sound';
Blockly.Msg.SET_SOUND_NUMERIC_MEMBER_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sound.html';
Blockly.Msg.GET_SOUND_NUMERIC_MEMBER_FIELD_1 = 'get';
Blockly.Msg.GET_SOUND_NUMERIC_MEMBER_FIELD_2 = 'of';
Blockly.Msg.GET_SOUND_NUMERIC_MEMBER_TOOLTIP = 'Get the selected member from the Sound';
Blockly.Msg.GET_SOUND_NUMERIC_MEMBER_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sound.html';
Blockly.Msg.GET_SOUND_STRING_MEMBER_FIELD_1 = 'get';
Blockly.Msg.GET_SOUND_STRING_MEMBER_FIELD_2 = 'of';
Blockly.Msg.GET_SOUND_STRING_MEMBER_TOOLTIP = 'Get the selected member from the Sound';
Blockly.Msg.GET_SOUND_STRING_MEMBER_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sound.html';
Blockly.Msg.LOAD_SOUND_FIELD_1 = 'create sound';
Blockly.Msg.LOAD_SOUND_FIELD_2 = 'tag';
Blockly.Msg.LOAD_SOUND_FIELD_3 = 'source';
Blockly.Msg.LOAD_SOUND_TOOLTIP = 'Loads an audio file so you can use it later. The tag is a name you use to access it later. The source is a file path. URLs work as a source too, but this is not recommended.';
Blockly.Msg.LOAD_SOUND_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Loader.html#audio';
Blockly.Msg.ADD_SOUND_FIELD_1 = 'add sound';
Blockly.Msg.ADD_SOUND_FIELD_2 = 'at volume';
Blockly.Msg.ADD_SOUND_FIELD_3 = 'looping';
Blockly.Msg.ADD_SOUND_TOOLTIP = 'Add a Sound to the game';
Blockly.Msg.ADD_SOUND_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.GameObjectFactory.html#audio';
Blockly.Msg.PLAY_SOUND_FIELD_1 = 'play sound';
Blockly.Msg.PLAY_SOUND_FIELD_2 = 'at volume';
Blockly.Msg.PLAY_SOUND_FIELD_3 = 'looping';
Blockly.Msg.PLAY_SOUND_TOOLTIP = 'Plays a sound that has been created. The volume goes from 0 to 1.';
Blockly.Msg.PLAY_SOUND_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.SoundManager.html#play';
Blockly.Msg.REMOVE_SOUND_FIELD_1 = 'stop all sounds tagged';
Blockly.Msg.REMOVE_SOUND_TOOLTIP = 'Stops all sounds with the given tag.';
Blockly.Msg.REMOVE_SOUND_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.SoundManager.html#removeByKey';
Blockly.Msg.STOP_PAUSE_RESUME_SOUNDS_OPTION_DROPDOWN_1 = 'stop';
Blockly.Msg.STOP_PAUSE_RESUME_SOUNDS_OPTION_DROPDOWN_2 = 'pause';
Blockly.Msg.STOP_PAUSE_RESUME_SOUNDS_OPTION_DROPDOWN_3 = 'resume';
Blockly.Msg.STOP_PAUSE_RESUME_SOUNDS_FIELD_1 = 'all sounds';
Blockly.Msg.STOP_PAUSE_RESUME_SOUNDS_TOOLTIP = 'Stop - Stop everything dead.\nPause - Stop everything, but remember where you were.\nResume - Start playing paused sounds from where they left off.';
Blockly.Msg.STOP_PAUSE_RESUME_SOUNDS_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.SoundManager.html#stopAll';
Blockly.Msg.SOUND_FADE_IN_FIELD_1 = 'fade in sound';
Blockly.Msg.SOUND_FADE_IN_FIELD_2 = 'over';
Blockly.Msg.SOUND_FADE_IN_FIELD_3 = 'milliseconds loop';
Blockly.Msg.SOUND_FADE_IN_TOOLTIP = 'Starts/Restarts the sound sets the volume to zero and increases from 0 to 1 over duration';
Blockly.Msg.SOUND_FADE_IN_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sound.html#fadeIn';
Blockly.Msg.SOUND_FADE_OUT_FIELD_1 = 'fade out sound';
Blockly.Msg.SOUND_FADE_OUT_FIELD_2 = 'over';
Blockly.Msg.SOUND_FADE_OUT_FIELD_3 = 'milliseconds';
Blockly.Msg.SOUND_FADE_OUT_TOOLTIP = 'Fades the sounds volume to 0 over the given duration';
Blockly.Msg.SOUND_FADE_OUT_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sound.html#fadeOut';
Blockly.Msg.SOUND_FADE_TO_FIELD_1 = 'fade sound';
Blockly.Msg.SOUND_FADE_TO_FIELD_2 = 'over';
Blockly.Msg.SOUND_FADE_TO_FIELD_3 = 'milliseconds';
Blockly.Msg.SOUND_FADE_TO_FIELD_4 = 'to volume';
Blockly.Msg.SOUND_FADE_TO_TOOLTIP = 'Fades the sounds volume to a given volume over the given duration';
Blockly.Msg.SOUND_FADE_TO_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sound.html#fadeTo';
Blockly.Msg.SOUND_LOOP_FULL_FIELD_1 = 'loop sound';
Blockly.Msg.SOUND_LOOP_FULL_FIELD_2 = 'at volume';
Blockly.Msg.SOUND_LOOP_FULL_TOOLTIP = 'Loops the entire sound';
Blockly.Msg.SOUND_LOOP_FULL_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sound.html#loopFull';
Blockly.Msg.SOUND_PAUSE_FIELD_1 = 'pause sound';
Blockly.Msg.SOUND_PAUSE_TOOLTIP = 'Pause the sound';
Blockly.Msg.SOUND_PAUSE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sound.html#pause';
Blockly.Msg.SOUND_RESUME_FIELD_1 = 'resume sound';
Blockly.Msg.SOUND_RESUME_TOOLTIP = 'Resumes the sound';
Blockly.Msg.SOUND_RESUME_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sound.html#resume';
Blockly.Msg.SOUND_STOP_FIELD_1 = 'stop sound';
Blockly.Msg.SOUND_STOP_TOOLTIP = 'Stops the sound';
Blockly.Msg.SOUND_STOP_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sound.html#stop';
Blockly.Msg.SOUND_PLAY_FIELD_1 = 'play sound';
Blockly.Msg.SOUND_PLAY_FIELD_2 = 'starting at position';
Blockly.Msg.SOUND_PLAY_FIELD_3 = 'at volume';
Blockly.Msg.SOUND_PLAY_FIELD_4 = 'loop';
Blockly.Msg.SOUND_PLAY_FIELD_5 = 'force restart';
Blockly.Msg.SOUND_PLAY_TOOLTIP = 'Play the sound';
Blockly.Msg.SOUND_PLAY_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sound.html#play';
Blockly.Msg.SOUND_RESTART_FIELD_1 = 'restart sound';
Blockly.Msg.SOUND_RESTART_FIELD_2 = 'starting at position';
Blockly.Msg.SOUND_RESTART_FIELD_3 = 'at volume';
Blockly.Msg.SOUND_RESTART_FIELD_4 = 'loop';
Blockly.Msg.SOUND_RESTART_TOOLTIP = 'Restart the entire sound';
Blockly.Msg.SOUND_RESTART_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sound.html#restart';
Blockly.Msg.LIST_FIND_CLOSEST_FIELD_1 = 'find the number closest to';
Blockly.Msg.LIST_FIND_CLOSEST_FIELD_2 = 'in the list';
Blockly.Msg.LIST_FIND_CLOSEST_TOOLTIP = 'Returns the value closest to the given number in a sorted, numeric list.\nIf two values are equally close, it returns the higher one.';
Blockly.Msg.LIST_FIND_CLOSEST_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.ArrayUtils.html#_findClosest';
Blockly.Msg.LIST_GET_RANDOM_FIELD_1 = 'get a random item from';
Blockly.Msg.LIST_GET_RANDOM_TOOLTIP = 'Returns a random item from the given list.';
Blockly.Msg.LIST_GET_RANDOM_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.ArrayUtils.html#_getRandomItem';
Blockly.Msg.NUMBER_LIST_FIELD_1 = 'create a list with every number from';
Blockly.Msg.NUMBER_LIST_FIELD_2 = 'to';
Blockly.Msg.NUMBER_LIST_TOOLTIP = 'Creates a list of numbers, in order within the specified range, including the start and end.';
Blockly.Msg.NUMBER_LIST_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.ArrayUtils.html#_numberArray';
Blockly.Msg.NUMBER_LIST_STEP_FIELD_1 = 'create a list from';
Blockly.Msg.NUMBER_LIST_STEP_FIELD_2 = 'to';
Blockly.Msg.NUMBER_LIST_STEP_FIELD_3 = 'stepping by';
Blockly.Msg.NUMBER_LIST_STEP_TOOLTIP = 'Creates a list in the given range, counting up by a specified value.\nDoes NOT include the end of the range.';
Blockly.Msg.NUMBER_LIST_STEP_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.ArrayUtils.html#_numberArrayStep';
Blockly.Msg.LIST_REMOVE_RANDOM_ITEM_FIELD_1 = 'get and remove a random item from';
Blockly.Msg.LIST_REMOVE_RANDOM_ITEM_TOOLTIP = 'Removes a random item from a list and returns it. Note that this modifies the list.';
Blockly.Msg.LIST_REMOVE_RANDOM_ITEM_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.ArrayUtils.html#_removeRandomItem';
Blockly.Msg.LIST_SHUFFLE_FIELD_1 = 'shuffle';
Blockly.Msg.LIST_SHUFFLE_TOOLTIP = 'Randomly rearranges the order of items in a list. Works for more than just cards.';
Blockly.Msg.LIST_SHUFFLE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.ArrayUtils.html#_shuffle';
Blockly.Msg.RANDOM_ANGLE_FIELD_1 = 'get random angle';
Blockly.Msg.RANDOM_ANGLE_TOOLTIP = 'Returns a random angle between -180 and 180.';
Blockly.Msg.RANDOM_ANGLE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.RandomDataGenerator.html#angle';
Blockly.Msg.RANDOM_PICK_FIELD_1 = 'get random item from list';
Blockly.Msg.RANDOM_PICK_TOOLTIP = 'Returns a random member in a given list.';
Blockly.Msg.RANDOM_PICK_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.RandomDataGenerator.html#pick';
Blockly.Msg.RANDOM_PICK_WEIGHTED_FIELD_1 = 'get random item from list (weighted)';
Blockly.Msg.RANDOM_PICK_WEIGHTED_TOOLTIP = 'Returns a random member in a given list. This version chooses items close to the start of the list more frequently.';
Blockly.Msg.RANDOM_PICK_WEIGHTED_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.RandomDataGenerator.html#weightedPick';
Blockly.Msg.RANDOM_REAL_FIELD_1 = 'get random number';
Blockly.Msg.RANDOM_REAL_TOOLTIP = 'Returns a random real number. This can be anywhere between 0 and 2^32 (about 4 billion).';
Blockly.Msg.RANDOM_REAL_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.RandomDataGenerator.html#real';
Blockly.Msg.RANDOM_REAL_IN_RANGE_FIELD_1 = 'get random number between';
Blockly.Msg.RANDOM_REAL_IN_RANGE_FIELD_2 = 'and';
Blockly.Msg.RANDOM_REAL_IN_RANGE_TOOLTIP = 'Returns a random real number in the specified range.';
Blockly.Msg.RANDOM_REAL_IN_RANGE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.RandomDataGenerator.html#realInRange';
Blockly.Msg.RANDOM_SIGN_FIELD_1 = 'get random sign';
Blockly.Msg.RANDOM_SIGN_TOOLTIP = 'Returns either +1 or -1. For deciding if something needs to be positive or negative.';
Blockly.Msg.RANDOM_SIGN_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.RandomDataGenerator.html#sign';
Blockly.Msg.MATH_DEG_TO_RAD_FIELD_1 = 'convert degrees';
Blockly.Msg.MATH_DEG_TO_RAD_FIELD_2 = 'to radians';
Blockly.Msg.MATH_DEG_TO_RAD_TOOLTIP = 'Converts a value in degrees to an equivalent in radians.';
Blockly.Msg.MATH_DEG_TO_RAD_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Math.html#degToRad';
Blockly.Msg.MATH_RAD_TO_DEG_FIELD_1 = 'convert radians';
Blockly.Msg.MATH_RAD_TO_DEG_FIELD_2 = 'to degrees';
Blockly.Msg.MATH_RAD_TO_DEG_TOOLTIP = 'Converts an angle in degrees to an equivalent in radians.';
Blockly.Msg.MATH_RAD_TO_DEG_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Math.html#radToDeg';
