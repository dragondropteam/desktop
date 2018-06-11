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
Blockly.Msg.NEW_VARIABLE = 'create variable...';
/// prompt - Prompts the user to enter the name for a new variable.  See [https://github.com/google/blockly/wiki/Variables#dropdown-menu https://github.com/google/blockly/wiki/Variables#dropdown-menu].
Blockly.Msg.NEW_VARIABLE_TITLE = 'New variable name:';
/// alert - Tells the user that the name they entered is already in use.
Blockly.Msg.VARIABLE_ALREADY_EXISTS = 'A variable named "%1" already exists.';

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
/// block text
Blockly.Msg.MATH_NUMBER_BINARY = 'binary';

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
/// block text
Blockly.Msg.VARIABLE_SET_TYPED_FIELD_1 = 'set';
/// block text
Blockly.Msg.VARIABLE_SET_TYPED_FIELD_2 = 'to';
/// default variable name
Blockly.Msg.VARIABLE_SET_TYPED_DEFAULT_VAR = 'item';
/// tooltip
Blockly.Msg.VARIABLE_SET_TYPED_TOOLTIP = '';
/// url
Blockly.Msg.VARIABLE_SET_TYPED_HELP_URL = '';

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

//type display names
/// Display name for integer type.
Blockly.Msg.TYPE_INT = 'Integer';
/// Display name for boolean type.
Blockly.Msg.TYPE_BOOL = 'Boolean';
/// Display name for floating-point type.
Blockly.Msg.TYPE_FLOAT = 'Float';
/// Display name for string type.
Blockly.Msg.TYPE_STRING = 'String';
/// Display name for character type
Blockly.Msg.TYPE_CHAR = 'Character';
/// Display name for integer array type.
Blockly.Msg.TYPE_INT_ARR = 'Array of Integers';
/// Display name for boolean array type.
Blockly.Msg.TYPE_BOOL_ARR = 'Array of Booleans';
/// Display name for floating-point array type.
Blockly.Msg.TYPE_FLOAT_ARR = 'Array of Floats';
/// Display name for string array type.
Blockly.Msg.TYPE_STRING_ARR = 'Array of Strings';
/// Display name for servo type.
Blockly.Msg.TYPE_SERVO = 'Servo';

//classes
/// block text
Blockly.Msg.CLASSES_SUPER_CONSTRUCTOR_TITLE = 'call super constructor';
/// warning text
Blockly.Msg.INSIDE_CLASS_ONLY_WARNING = 'This block can only be used inside of a class!';
/// block text
Blockly.Msg.CLASS_DEFINITION_CLASS = 'class';
/// block text
Blockly.Msg.CLASS_DEFINITION_DEFAULT_NAME = 'name';
/// block text
Blockly.Msg.CLASS_DEFINITION_EXTENDS = 'extends';
/// block text
Blockly.Msg.CLASS_DEFINITION_METHODS = 'methods';
/// block text
Blockly.Msg.CLASS_DEFINITION_CONSTRUCT = 'construct with ';
/// block text
Blockly.Msg.CLASS_DEFINITION_CONSTRUCT_PARAM = 'construct %1';
/// warning text
Blockly.Msg.CLASS_DEFINITION_DUPLICATE_WARNING = 'Warning: The class constructor has duplicate parameters.';
/// tooltip
Blockly.Msg.CLASS_DEFINITION_TOOLTIP = 'Create %1 with: %2';
/// url
Blockly.Msg.CLASS_DEFINITION_HELP_URL = '';
/// block text
Blockly.Msg.METHOD_DEFINITION_TITLE = 'to';
/// block text
Blockly.Msg.METHOD_DEFINITION_DEFAULT_TEXT = 'to do something';
/// tooltip
Blockly.Msg.METHOD_DEFINITION_TOOLTIP = '';
/// url
Blockly.Msg.METHOD_DEFINITION_HELP_URL = '';
/// block text
Blockly.Msg.MEMBER_DEFINITION_CREATE = 'create';
/// block text
Blockly.Msg.MEMBER_DEFINITION_DEFAULT_TEXT = 'name';
/// block text
Blockly.Msg.MEMBER_DEFINITION_WITH_VALUE = 'with value';
/// tooltip
Blockly.Msg.MEMBER_DEFINITION_TOOLTIP = '';
/// url
Blockly.Msg.MEMBER_DEFINITION_HELP_URL = '';
/// tooltip
Blockly.Msg.THIS_REFERENCE_TOOLTIP = 'Access the calling instance.';
/// url
Blockly.Msg.THIS_REFERENCE_HELP_URL = 'https://en.wikipedia.org/wiki/This_(computer_programming)';
/// tooltip
Blockly.Msg.CLASS_TYPE_TOOLTIP = '';
/// url
Blockly.Msg.CLASS_TYPE_HELP_URL = '';
/// block text
Blockly.Msg.GET_MEMBER_IN_CLASS_INSTANCE_NAME = 'in %1 instance';
/// block text
Blockly.Msg.GET_MEMBER_IN_CLASS_INSTANCE_NAME_DEFAULT = 'class';
/// block text
Blockly.Msg.GET_MEMBER_IN_CLASS_GET_VALUE = 'get value of';
/// block text
Blockly.Msg.GET_MEMBER_IN_CLASS_GET_MEMBER_NAME = 'get %1';
/// tooltip
Blockly.Msg.GET_MEMBER_IN_CLASS_TOOLTIP = 'Access the calling instance';
/// url
Blockly.Msg.GET_MEMBER_IN_CLASS_HELP_URL = '';
/// block text
Blockly.Msg.SET_MEMBER_IN_CLASS_IN_INSTANCE = 'in %1 instance';
/// block text
Blockly.Msg.SET_MEMBER_IN_CLASS_INSTANCE_DEFAULT = 'class';
/// block text
Blockly.Msg.SET_MEMBER_IN_CLASS_MEMBER_NAME_DEFUALT = 'set value of';
/// block text
Blockly.Msg.SET_MEMBER_IN_CLASS_SET_MEMBER_NAME = 'set %1 to';
/// block text
Blockly.Msg.SET_MEMBER_IN_CLASS_GET_MEMBER_NAME = 'get %1';
/// tooltip
Blockly.Msg.SET_MEMBER_IN_CLASS_TOOLTIP = 'Access the calling instance.';
/// url
Blockly.Msg.SET_MEMBER_IN_CLASS_HELP_URL = '';
/// block text
Blockly.Msg.CREATE_INSTANCE_OF_CLASS_DEFAULT = 'create instance of';
/// block text
Blockly.Msg.CREATE_INSTANCE_OF_CLASS_TOOLTIP = 'Create an instance of a class.';
/// url
Blockly.Msg.CREATE_INSTANCE_OF_CLASS_HELP_URL = '';
/// block text
Blockly.Msg.CREATE_INSTANCE_OF_CLASS_TITLE = 'create %1 instance';

/// context menu text
Blockly.Msg.CLASS_CONTEXT_CREATE_MEMBER_SETTER = 'create in %1 instance set %2';
/// context menu text
Blockly.Msg.CLASS_CONTEXT_CREATE_MEMBER_GETTER = 'create in %1 instance get %2';
/// context menu text
Blockly.Msg.CLASS_CONTEXT_CREATE_THIS = 'create \'this\'';

//typed arrays
/// block text
Blockly.Msg.TYPED_ARRAYS_CREATE_WITH_FIELD_1 = 'create array of';
/// block text
Blockly.Msg.TYPED_ARRAYS_CREATE_WITH_FIELD_2 = 'with';
/// block text
Blockly.Msg.TYPED_ARRAYS_SETINDEX_FIELD_1 = 'in array';
/// block text
Blockly.Msg.TYPED_ARRAYS_SETINDEX_FIELD_2 = 'set index #';
/// block text
Blockly.Msg.TYPED_ARRAYS_SETINDEX_FIELD_3 = 'to';
/// tooltip
Blockly.Msg.TYPED_ARRAYS_SETINDEX_TOOLTIP = '';
/// url
Blockly.Msg.TYPED_ARRAYS_SETINDEX_HELP_URL = '';
/// block text
Blockly.Msg.TYPED_ARRAYS_GETINDEX_FIELD_1 = 'in array';
/// block text
Blockly.Msg.TYPED_ARRAYS_GETINDEX_FIELD_2 = 'get index #';
/// tooltip
Blockly.Msg.TYPED_ARRAYS_GETINDEX_TOOLTIP = '';
/// url
Blockly.Msg.TYPED_ARRAYS_GETINDEX_HELP_URL = '';
/// block text
Blockly.Msg.TYPED_ARRAYS_DELETE_TITLE = 'delete array';
/// warning text
Blockly.Msg.TYPED_ARRAYS_NOT_ARRAY_WARNING = '%1 is not an array!';
/// tooltip
Blockly.Msg.TYPED_ARRAYS_DELETE_TOOLTIP = '';
/// url
Blockly.Msg.TYPED_ARRAYS_DELETE_HELP_URL = '';

/// block text
Blockly.Msg.LOG_CONSOLE_TITLE = 'log to console';
/// tooltip
Blockly.Msg.LOG_CONSOLE_TOOLTIP = 'Logs a message to the debug console. Used correctly, this is a very powerful debugging tool.';
/// url
Blockly.Msg.LOG_CONSOLE_HELP_URL = 'https://en.wikipedia.org/wiki/System_console';

// once upon a time, tooltips, etc. were written directly into the block definitions
// this was bad for localization, so they got pulled out into these variables with a script

//phaser
/// auto generated
Blockly.Msg.PHASER_SIMPLE_INIT_FIELD_1 = 'run phaser';
/// auto generated
Blockly.Msg.PHASER_SIMPLE_INIT_FIELD_2 = 'width';
/// auto generated
Blockly.Msg.PHASER_SIMPLE_INIT_FIELD_3 = 'height';
/// auto generated
Blockly.Msg.PHASER_SIMPLE_INIT_FIELD_4 = 'on preload do';
/// auto generated
Blockly.Msg.PHASER_SIMPLE_INIT_FIELD_5 = 'on create do';
/// auto generated
Blockly.Msg.PHASER_SIMPLE_INIT_FIELD_6 = 'on update do';
/// auto generated
Blockly.Msg.PHASER_SIMPLE_INIT_TOOLTIP = 'Create a Phaser Game with given width and height.';
/// auto generated
Blockly.Msg.PHASER_SIMPLE_INIT_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Game.html';
/// auto generated
Blockly.Msg.START_PHASER_FOR_STATES_FIELD_1 = 'start phaser for states with';
/// auto generated
Blockly.Msg.START_PHASER_FOR_STATES_FIELD_2 = 'width';
/// auto generated
Blockly.Msg.START_PHASER_FOR_STATES_FIELD_3 = 'height';
/// auto generated
Blockly.Msg.START_PHASER_FOR_STATES_TOOLTIP = 'Create a Phaser game using explicit states.';
/// auto generated
Blockly.Msg.START_PHASER_FOR_STATES_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Game.html';
/// auto generated
Blockly.Msg.CENTER_AND_STRETCH_FIELD_1 = 'center and stretch phaser';
/// auto generated
Blockly.Msg.CENTER_AND_STRETCH_TOOLTIP = 'Tells Phaser to center and stretch the game view to fit its window.';
/// auto generated
Blockly.Msg.CENTER_AND_STRETCH_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.ScaleManager.html#scaleMode';
/// auto generated
Blockly.Msg.ENABLE_STEP_FIELD_1 = 'enable stepping';
/// auto generated
Blockly.Msg.ENABLE_STEP_TOOLTIP = 'Enables manually stepping through game frames. Usually for debugging purposes.';
/// auto generated
Blockly.Msg.ENABLE_STEP_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Game.html#enableStep';
/// auto generated
Blockly.Msg.DISABLE_STEP_FIELD_1 = 'disable stepping';
/// auto generated
Blockly.Msg.DISABLE_STEP_TOOLTIP = 'Disables manually stepping into the next game loop. This is the default behavior.';
/// auto generated
Blockly.Msg.DISABLE_STEP_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Game.html#disableStep';
/// auto generated
Blockly.Msg.STEP_FIELD_1 = 'Step';
/// auto generated
Blockly.Msg.STEP_TOOLTIP = 'Manually steps to the next game loop. Stepping should be enabled before using this.';
/// auto generated
Blockly.Msg.STEP_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Game.html#step';
/// default variale name
Blockly.Msg.DEFAULT_GRAPHICS_OBJECT_NAME = 'graphics';
/// auto generated
Blockly.Msg.CREATE_GRAPHICS_OBJECT_FIELD_1 = 'create graphics object with offsets';
/// auto generated
Blockly.Msg.CREATE_GRAPHICS_OBJECT_FIELD_2 = 'x:';
/// auto generated
Blockly.Msg.CREATE_GRAPHICS_OBJECT_FIELD_3 = 'y:';
/// auto generated
Blockly.Msg.CREATE_GRAPHICS_OBJECT_TOOLTIP = 'Returns an object that can draw shapes in the world.';
/// auto generated
Blockly.Msg.CREATE_GRAPHICS_OBJECT_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Graphics.html';
/// auto generated
Blockly.Msg.DRAW_SHAPES_WITH_COLOUR_FIELD_1 = 'fill shapes with ';
/// auto generated
Blockly.Msg.DRAW_SHAPES_WITH_COLOUR_FIELD_2 = 'colour';
/// auto generated
Blockly.Msg.DRAW_SHAPES_WITH_COLOUR_FIELD_3 = 'using';
/// auto generated
Blockly.Msg.DRAW_SHAPES_WITH_COLOUR_TOOLTIP = 'Start drawing shapes in the world using a given graphics object. Use the shape drawing blocks inside this one.';
/// auto generated
Blockly.Msg.DRAW_SHAPES_WITH_COLOUR_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Graphics.html#beginFill';
/// auto generated
Blockly.Msg.DRAW_RECTANGLE_FIELD_1 = 'draw rectangle at position';
/// auto generated
Blockly.Msg.DRAW_RECTANGLE_FIELD_2 = 'x:';
/// auto generated
Blockly.Msg.DRAW_RECTANGLE_FIELD_3 = 'y:';
/// auto generated
Blockly.Msg.DRAW_RECTANGLE_FIELD_4 = 'with';
/// auto generated
Blockly.Msg.DRAW_RECTANGLE_FIELD_5 = 'width:';
/// auto generated
Blockly.Msg.DRAW_RECTANGLE_FIELD_6 = 'height:';
/// auto generated
Blockly.Msg.DRAW_RECTANGLE_FIELD_7 = 'using';
/// auto generated
Blockly.Msg.DRAW_RECTANGLE_TOOLTIP = 'Draws a rectangle at a given position in the world. Doesn\'t work on its own. Put it inside the \'fill shapes with\' block.';
/// auto generated
Blockly.Msg.DRAW_RECTANGLE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Graphics.html#drawRect';
/// auto generated
Blockly.Msg.STOP_ANIMATION_FIELD_1 = 'stop animation on';
/// auto generated
Blockly.Msg.STOP_ANIMATION_TOOLTIP = 'Stops any animation from playing on the given sprite.';
/// auto generated
Blockly.Msg.STOP_ANIMATION_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.AnimationManager.html#stop';
/// auto generated
Blockly.Msg.PLAY_ANIMATION_FIELD_1 = 'play animation';
/// auto generated
Blockly.Msg.PLAY_ANIMATION_FIELD_2 = 'on';
/// auto generated
Blockly.Msg.PLAY_ANIMATION_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.AnimationManager.html#play';
/// auto generated
Blockly.Msg.PLAY_ANIMATION_TOOLTIP = 'Starts playing an animation on the given sprite.';
/// auto generated
Blockly.Msg.SET_FRAME_FIELD_1 = 'Set Current Frame # For';
/// auto generated
Blockly.Msg.SET_FRAME_TOOLTIP = 'Jumps to a given animation frame.';
/// auto generated
Blockly.Msg.SET_FRAME_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.AnimationManager.html#frame';
/// auto generated
Blockly.Msg.ADD_ANIMATION_FIELD_1 = 'add animation to';
/// auto generated
Blockly.Msg.ADD_ANIMATION_FIELD_2 = 'tagged';
/// auto generated
Blockly.Msg.ADD_ANIMATION_NAME_TEXT_DEFAULT = 'name';
/// auto generated
Blockly.Msg.ADD_ANIMATION_FIELD_3 = 'with frames';
/// auto generated
Blockly.Msg.ADD_ANIMATION_FIELD_4 = 'displayed at';
/// auto generated
Blockly.Msg.ADD_ANIMATION_FIELD_5 = 'FPS';
/// auto generated
Blockly.Msg.ADD_ANIMATION_FIELD_6 = 'loop';
/// auto generated
Blockly.Msg.ADD_ANIMATION_TOOLTIP = 'Add an animation to an object based on a list of frames';
/// auto generated
Blockly.Msg.ADD_ANIMATION_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.AnimationManager.html#add';
/// auto generated
Blockly.Msg.ADD_CHILD_FIELD_1 = 'add child object';
/// auto generated
Blockly.Msg.ADD_CHILD_FIELD_2 = 'to';
/// auto generated
Blockly.Msg.ADD_CHILD_TOOLTIP = 'Add a child to a sprite. This will make them move together.';
/// auto generated
Blockly.Msg.ADD_CHILD_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#addChild';
/// auto generated
Blockly.Msg.RESET_FRAME_FIELD_1 = 'reset the frame dimensions of';
/// auto generated
Blockly.Msg.RESET_FRAME_TOOLTIP = 'Resets the texture frame dimensions that the sprite uses for rendering.';
/// auto generated
Blockly.Msg.RESET_FRAME_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#resetFrame';
/// auto generated
Blockly.Msg.RESIZE_FRAME_FIELD_1 = 'resize the frame of';
/// auto generated
Blockly.Msg.RESIZE_FRAME_FIELD_2 = 'to accomodate';
/// auto generated
Blockly.Msg.RESIZE_FRAME_FIELD_3 = 'Width';
/// auto generated
Blockly.Msg.RESIZE_FRAME_FIELD_4 = 'Height';
/// auto generated
Blockly.Msg.RESIZE_FRAME_TOOLTIP = 'Resizes the Frame dimensions that the Game Object uses for rendering. You shouldn\'t normally need to ever call this, but in the case of special texture types such as Video or BitmapData it can be useful to adjust the dimensions directly in this way.';
/// auto generated
Blockly.Msg.RESIZE_FRAME_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#resizeFrame';
/// auto generated
Blockly.Msg.CREATE_IMAGE_FIELD_1 = 'create image';
/// auto generated
Blockly.Msg.CREATE_IMAGE_FIELD_2 = 'tag';
/// auto generated
Blockly.Msg.CREATE_IMAGE_FIELD_3 = 'source';
/// auto generated
Blockly.Msg.CREATE_IMAGE_TOOLTIP = 'Loads an image into the game so it can be used.';
/// auto generated
Blockly.Msg.CREATE_IMAGE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Loader.html#image';
/// auto generated
Blockly.Msg.CREATE_SPRITE_SHEET_FIELD_1 = 'create sprite sheet';
/// auto generated
Blockly.Msg.CREATE_SPRITE_SHEET_FIELD_2 = 'tag';
/// auto generated
Blockly.Msg.CREATE_SPRITE_SHEET_FIELD_3 = 'source';
/// auto generated
Blockly.Msg.CREATE_SPRITE_SHEET_FIELD_4 = 'frame width';
/// auto generated
Blockly.Msg.CREATE_SPRITE_SHEET_FIELD_5 = 'pixels';
/// auto generated
Blockly.Msg.CREATE_SPRITE_SHEET_FIELD_6 = 'frame height';
/// auto generated
Blockly.Msg.CREATE_SPRITE_SHEET_FIELD_7 = 'pixels';
/// auto generated
Blockly.Msg.CREATE_SPRITE_SHEET_TOOLTIP = 'Loads a sprite sheet, which is a collection of animation frames in a single image. See the help for more info.';
/// auto generated
Blockly.Msg.CREATE_SPRITE_SHEET_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Loader.html#spritesheet';
/// auto generated
Blockly.Msg.ADD_IMAGE_FIELD_1 = 'add image to game at';
/// auto generated
Blockly.Msg.ADD_IMAGE_FIELD_2 = 'x';
/// auto generated
Blockly.Msg.ADD_IMAGE_FIELD_3 = 'y';
/// auto generated
Blockly.Msg.ADD_IMAGE_FIELD_4 = 'tagged';
/// auto generated
Blockly.Msg.ADD_IMAGE_TOOLTIP = 'Creates a sprite with the image specified in the tag. The tag needs to be set up with the \'create image\' or \'create sprite sheet\' blocks.';
/// auto generated
Blockly.Msg.ADD_IMAGE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.GameObjectFactory.html#sprite';
/// auto generated
Blockly.Msg.ADDSPRITEWITHATLAS_FIELD_1 = 'load atlas image';
/// auto generated
Blockly.Msg.ADDSPRITEWITHATLAS_FIELD_2 = 'tag';
/// auto generated
Blockly.Msg.ADDSPRITEWITHATLAS_FIELD_3 = 'spritesheet source';
/// auto generated
Blockly.Msg.ADDSPRITEWITHATLAS_FIELD_4 = 'texture atlas xml';
/// auto generated
Blockly.Msg.ADDSPRITEWITHATLAS_TOOLTIP = 'Loads a texture atlas into the game. These take more effort to set up, but can contain every animation you want for a single character. See the help for more info.';
/// auto generated
Blockly.Msg.ADDSPRITEWITHATLAS_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Loader.html#atlasXML';
/// auto generated
Blockly.Msg.IMAGESUBTEXTUREATLAS_FIELD_1 = 'add sprite to game from atlas at';
/// auto generated
Blockly.Msg.IMAGESUBTEXTUREATLAS_FIELD_2 = 'x';
/// auto generated
Blockly.Msg.IMAGESUBTEXTUREATLAS_FIELD_3 = 'y';
/// auto generated
Blockly.Msg.IMAGESUBTEXTUREATLAS_FIELD_4 = 'tagged ';
/// auto generated
Blockly.Msg.IMAGESUBTEXTUREATLAS_FIELD_5 = 'subtexture id';
/// auto generated
Blockly.Msg.IMAGESUBTEXTUREATLAS_TOOLTIP = 'Adds a sprite to the game using data from a texture atlas.';
/// auto generated
Blockly.Msg.IMAGESUBTEXTUREATLAS_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Loader.html#atlasXML';
/// auto generated
Blockly.Msg.ADD_CHILD_VI_FIELD_1 = 'add child object';
/// auto generated
Blockly.Msg.ADD_CHILD_VI_FIELD_2 = 'to';
/// auto generated
Blockly.Msg.ADD_CHILD_VI_TOOLTIP = 'Add a child to a sprite. This will make them move together.';
/// auto generated
Blockly.Msg.ADD_CHILD_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#addChild';
/// auto generated
Blockly.Msg.ADD_CHILD_AT_FIELD_1 = 'add child';
/// auto generated
Blockly.Msg.ADD_CHILD_AT_FIELD_2 = 'to';
/// auto generated
Blockly.Msg.ADD_CHILD_AT_FIELD_3 = 'at index';
/// auto generated
Blockly.Msg.ADD_CHILD_AT_TOOLTIP = 'Add a child to a sprite at a specific index so you can find it later. This will make them move together.';
/// auto generated
Blockly.Msg.ADD_CHILD_AT_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#addChildAt';
/// auto generated
Blockly.Msg.ADD_CHILD_AT_VI_FIELD_1 = 'add child';
/// auto generated
Blockly.Msg.ADD_CHILD_AT_VI_FIELD_2 = 'to';
/// auto generated
Blockly.Msg.ADD_CHILD_AT_VI_FIELD_3 = 'at index';
/// auto generated
Blockly.Msg.ADD_CHILD_AT_VI_TOOLTIP = 'Add a child to a sprite at a specific index so you can find it later. This will make them move together.';
/// auto generated
Blockly.Msg.ADD_CHILD_AT_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#addChildAt';
/// auto generated
Blockly.Msg.ALIGN_IN_FIELD_1 = 'align';
/// auto generated
Blockly.Msg.ALIGN_IN_FIELD_2 = 'inside';
/// auto generated
Blockly.Msg.ALIGN_IN_FIELD_3 = 'at the';
/// auto generated
Blockly.Msg.ALIGN_IN_POSITION_DROPDOWN_1 = 'top left';
/// auto generated
Blockly.Msg.ALIGN_IN_POSITION_DROPDOWN_2 = 'top center';
/// auto generated
Blockly.Msg.ALIGN_IN_POSITION_DROPDOWN_3 = 'top right';
/// auto generated
Blockly.Msg.ALIGN_IN_POSITION_DROPDOWN_4 = 'left center';
/// auto generated
Blockly.Msg.ALIGN_IN_POSITION_DROPDOWN_5 = 'center';
/// auto generated
Blockly.Msg.ALIGN_IN_POSITION_DROPDOWN_6 = 'right center';
/// auto generated
Blockly.Msg.ALIGN_IN_POSITION_DROPDOWN_7 = 'bottom left';
/// auto generated
Blockly.Msg.ALIGN_IN_POSITION_DROPDOWN_8 = 'bottom center';
/// auto generated
Blockly.Msg.ALIGN_IN_POSITION_DROPDOWN_9 = 'bottom right';
/// auto generated
Blockly.Msg.ALIGN_IN_FIELD_4 = 'offset x pixels';
/// auto generated
Blockly.Msg.ALIGN_IN_FIELD_5 = 'offset y pixels';
/// auto generated
Blockly.Msg.ALIGN_IN_TOOLTIP = 'Aligns this Game Object within another Game Object, or Rectangle, to one of 9 possible positions.';
/// auto generated
Blockly.Msg.ALIGN_IN_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#alignIn';
/// auto generated
Blockly.Msg.ALIGN_TO_FIELD_1 = 'align';
/// auto generated
Blockly.Msg.ALIGN_TO_FIELD_2 = 'to';
/// auto generated
Blockly.Msg.ALIGN_TO_FIELD_3 = 'at the';
/// auto generated
Blockly.Msg.ALIGN_TO_POSITION_DROPDOWN_1 = 'top left';
/// auto generated
Blockly.Msg.ALIGN_TO_POSITION_DROPDOWN_2 = 'top center';
/// auto generated
Blockly.Msg.ALIGN_TO_POSITION_DROPDOWN_3 = 'top right';
/// auto generated
Blockly.Msg.ALIGN_TO_POSITION_DROPDOWN_4 = 'left top';
/// auto generated
Blockly.Msg.ALIGN_TO_POSITION_DROPDOWN_5 = 'left center';
/// auto generated
Blockly.Msg.ALIGN_TO_POSITION_DROPDOWN_6 = 'left bottom';
/// auto generated
Blockly.Msg.ALIGN_TO_POSITION_DROPDOWN_7 = 'right top';
/// auto generated
Blockly.Msg.ALIGN_TO_POSITION_DROPDOWN_8 = 'right center';
/// auto generated
Blockly.Msg.ALIGN_TO_POSITION_DROPDOWN_9 = 'right bottom';
/// auto generated
Blockly.Msg.ALIGN_TO_POSITION_DROPDOWN_10 = 'bottom left';
/// auto generated
Blockly.Msg.ALIGN_TO_POSITION_DROPDOWN_11 = 'bottom center';
/// auto generated
Blockly.Msg.ALIGN_TO_POSITION_DROPDOWN_12 = 'bottom right';
/// auto generated
Blockly.Msg.ALIGN_TO_FIELD_4 = 'offset x pixels';
/// auto generated
Blockly.Msg.ALIGN_TO_FIELD_5 = 'offset y pixels';
/// auto generated
Blockly.Msg.ALIGN_TO_TOOLTIP = 'Aligns this Game Object to the side of another Game Object, or Rectangle, in one of 12 possible positions.';
/// auto generated
Blockly.Msg.ALIGN_TO_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#alignTo';
/// auto generated
Blockly.Msg.BRING_TO_TOP_FIELD_1 = 'bring';
/// auto generated
Blockly.Msg.BRING_TO_TOP_FIELD_2 = 'to the front';
/// auto generated
Blockly.Msg.BRING_TO_TOP_TOOLTIP = 'Brings this sprite/image to the front of the display order. In case of overlapping sprites, this one will draw on top of everything else.';
/// auto generated
Blockly.Msg.BRING_TO_TOP_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#bringToTop';
/// auto generated
Blockly.Msg.CHECK_WORLD_BOUNDS_FIELD_1 = 'make';
/// auto generated
Blockly.Msg.CHECK_WORLD_BOUNDS_FIELD_2 = 'check to see if it\'s inside the world?';
/// auto generated
Blockly.Msg.CHECK_WORLD_BOUNDS_TOOLTIP = 'This object will start checking if it\'s inside the world every frame. This takes time, so it\'s disabled by default.';
/// auto generated
Blockly.Msg.CHECK_WORLD_BOUNDS_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#checkWorldBounds';
/// auto generated
Blockly.Msg.CONTAINS_FIELD_1 = 'is';
/// auto generated
Blockly.Msg.CONTAINS_FIELD_2 = 'a child of';
/// auto generated
Blockly.Msg.CONTAINS_FIELD_3 = '?';
/// auto generated
Blockly.Msg.CONTAINS_TOOLTIP = 'Checks to see if one sprite is the child of another.';
/// auto generated
Blockly.Msg.CONTAINS_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#contains';
/// auto generated
Blockly.Msg.CONTAINS_VI_FIELD_1 = 'is';
/// auto generated
Blockly.Msg.CONTAINS_VI_FIELD_2 = 'a child of';
/// auto generated
Blockly.Msg.CONTAINS_VI_FIELD_3 = '?';
/// auto generated
Blockly.Msg.CONTAINS_VI_TOOLTIP = 'Checks to see if one sprite is the child of another.';
/// auto generated
Blockly.Msg.CONTAINS_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#contains';
/// auto generated
Blockly.Msg.CROP_FIELD_1 = 'crop';
/// auto generated
Blockly.Msg.CROP_FIELD_2 = 'to';
/// auto generated
Blockly.Msg.CROP_TOOLTIP = 'crop a sprite to an area defined by a rectangle or other object';
/// auto generated
Blockly.Msg.CROP_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#crop';
/// auto generated
Blockly.Msg.CLEAR_CROPPING_FIELD_1 = 'stop cropping';
/// auto generated
Blockly.Msg.CLEAR_CROPPING_TOOLTIP = 'Removes any cropping from a sprite.';
/// auto generated
Blockly.Msg.CLEAR_CROPPING_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#crop';
/// auto generated
Blockly.Msg.DESTROY_SPRITE_FIELD_1 = 'destroy';
/// auto generated
Blockly.Msg.DESTROY_SPRITE_FIELD_2 = 'children too?';
/// auto generated
Blockly.Msg.DESTROY_SPRITE_TOOLTIP = 'Deletes a sprite from the game, with an option to delete its children too.';
/// auto generated
Blockly.Msg.DESTROY_SPRITE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#destroy';
/// auto generated
Blockly.Msg.GET_CHILD_AT_VI_FIELD_1 = 'get child of';
/// auto generated
Blockly.Msg.GET_CHILD_AT_VI_FIELD_2 = 'at index';
/// auto generated
Blockly.Msg.GET_CHILD_AT_VI_TOOLTIP = 'Finds a specific child on this sprite/image by its index.';
/// auto generated
Blockly.Msg.GET_CHILD_AT_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#getChildAt';
/// auto generated
Blockly.Msg.GET_CHILD_INDEX_FIELD_1 = 'Get index of Child';
/// auto generated
Blockly.Msg.GET_CHILD_INDEX_FIELD_2 = 'on ';
/// auto generated
Blockly.Msg.GET_CHILD_INDEX_TOOLTIP = 'Finds an index that describes where on the parent this object is. ';
/// auto generated
Blockly.Msg.GET_CHILD_INDEX_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#getChildIndex';
/// auto generated
Blockly.Msg.GET_CHILD_INDEX_VI_FIELD_1 = 'get index of child';
/// auto generated
Blockly.Msg.GET_CHILD_INDEX_VI_FIELD_2 = 'on ';
/// auto generated
Blockly.Msg.GET_CHILD_INDEX_VI_TOOLTIP = 'Finds an index that describes where on the parent this object is. ';
/// auto generated
Blockly.Msg.GET_CHILD_INDEX_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#getChildIndex';
/// auto generated
Blockly.Msg.LOAD_TEXTURE_FIELD_1 = 'change texture of';
/// auto generated
Blockly.Msg.LOAD_TEXTURE_FIELD_2 = 'to tag';
/// auto generated
Blockly.Msg.LOAD_TEXTURE_TOOLTIP = 'This changes the texture of this sprite/image entirely. If it is part of a sprite sheet. Warning: slow.';
/// auto generated
Blockly.Msg.LOAD_TEXTURE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#loadTexture';
/// auto generated
Blockly.Msg.MOVE_DOWN_FIELD_1 = 'move';
/// auto generated
Blockly.Msg.MOVE_DOWN_FIELD_2 = 'down';
/// auto generated
Blockly.Msg.MOVE_DOWN_TOOLTIP = 'Moves this sprite/image down one place in the display order. If sprites overlap, it will be more likely to display underneath others.';
/// auto generated
Blockly.Msg.MOVE_DOWN_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#moveDown';
/// auto generated
Blockly.Msg.MOVE_UP_FIELD_1 = 'move';
/// auto generated
Blockly.Msg.MOVE_UP_FIELD_2 = 'up';
/// auto generated
Blockly.Msg.MOVE_UP_TOOLTIP = 'Moves this sprite up one place in the display order. If sprites overlap, it will be more likely to display on top of others.';
/// auto generated
Blockly.Msg.MOVE_UP_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#moveUp';
/// auto generated
Blockly.Msg.SPRITE_OVERLAP_FIELD_1 = 'does';
/// auto generated
Blockly.Msg.SPRITE_OVERLAP_FIELD_2 = 'overlap with';
/// auto generated
Blockly.Msg.SPRITE_OVERLAP_FIELD_3 = '?';
/// auto generated
Blockly.Msg.SPRITE_OVERLAP_TOOLTIP = 'Checks to see if the rectangular bounds of the two given sprites overlap. Not a good substitute for the physics engine, but fine for something like UI.';
/// auto generated
Blockly.Msg.SPRITE_OVERLAP_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#overlap';
/// auto generated
Blockly.Msg.OUT_OF_BOUNDS_KILL_FIELD_1 = 'make';
/// auto generated
Blockly.Msg.OUT_OF_BOUNDS_KILL_FIELD_2 = 'get deleted if it leaves the world?';
/// auto generated
Blockly.Msg.OUT_OF_BOUNDS_KILL_TOOLTIP = 'Will automatically destroy this object if it goes outside the world bounds. Warning: this will not work on objects that are not checking to see if they are inside the world.';
/// auto generated
Blockly.Msg.OUT_OF_BOUNDS_KILL_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#outOfBoundsKill';
/// auto generated
Blockly.Msg.OUT_OF_BOUNDS_FAINT_FIELD_1 = 'make';
/// auto generated
Blockly.Msg.OUT_OF_BOUNDS_FAINT_FIELD_2 = 'get deleted if it leaves the world?';
/// auto generated
Blockly.Msg.OUT_OF_BOUNDS_FAINT_TOOLTIP = 'Will automatically destroy this object if it goes outside the world bounds. Warning: this will not work on objects that are not checking to see if they are inside the world.';
/// auto generated
Blockly.Msg.OUT_OF_BOUNDS_FAINT_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#outOfBoundsKill';
/// auto generated
Blockly.Msg.REMOVE_CHILD_FIELD_1 = 'remove child';
/// auto generated
Blockly.Msg.REMOVE_CHILD_FIELD_2 = 'from';
/// auto generated
Blockly.Msg.REMOVE_CHILD_TOOLTIP = 'Makes this sprite/image stop being a child and moving with its parent.';
/// auto generated
Blockly.Msg.REMOVE_CHILD_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#removeChild';
/// auto generated
Blockly.Msg.REMOVE_CHILD_VI_FIELD_1 = 'remove child';
/// auto generated
Blockly.Msg.REMOVE_CHILD_VI_FIELD_2 = 'from';
/// auto generated
Blockly.Msg.REMOVE_CHILD_VI_TOOLTIP = 'Makes this sprite/image stop being a child and moving with its parent.';
/// auto generated
Blockly.Msg.REMOVE_CHILD_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#removeChild';
/// auto generated
Blockly.Msg.REMOVE_CHILD_AT_VI_FIELD_1 = 'remove the child at index';
/// auto generated
Blockly.Msg.REMOVE_CHILD_AT_VI_FIELD_2 = 'from';
/// auto generated
Blockly.Msg.REMOVE_CHILD_AT_VI_TOOLTIP = 'Finds the child at the given index and removes it from its parent. It will no longer move with the parent.';
/// auto generated
Blockly.Msg.REMOVE_CHILD_AT_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#removeChildAt';
/// auto generated
Blockly.Msg.REMOVE_CHILD_AT_FIELD_1 = 'remove the child at index';
/// auto generated
Blockly.Msg.REMOVE_CHILD_AT_FIELD_2 = 'from';
/// auto generated
Blockly.Msg.REMOVE_CHILD_AT_TOOLTIP = 'Finds the child at the given index and removes it from its parent. It will no longer move with the parent.';
/// auto generated
Blockly.Msg.REMOVE_CHILD_AT_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#removeChildAt';
/// auto generated
Blockly.Msg.REMOVE_CHILDREN_FIELD_1 = 'remove all children from';
/// auto generated
Blockly.Msg.REMOVE_CHILDREN_TOOLTIP = 'Removes all children from the parent. They will all stop moving together.';
/// auto generated
Blockly.Msg.REMOVE_CHILDREN_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#removeChildren';
/// auto generated
Blockly.Msg.REMOVE_CHILDREN_VI_FIELD_1 = 'remove all children from';
/// auto generated
Blockly.Msg.REMOVE_CHILDREN_VI_TOOLTIP = 'Removes all children from the parent. They will all stop moving together.';
/// auto generated
Blockly.Msg.REMOVE_CHILDREN_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#removeChildren';
/// auto generated
Blockly.Msg.ADD_ANIMATION_VI_FIELD_1 = 'add animation to';
/// auto generated
Blockly.Msg.ADD_ANIMATION_VI_FIELD_2 = 'tagged';
/// auto generated
Blockly.Msg.ADD_ANIMATION_VI_NAME_TEXT_DEFAULT = 'name';
/// auto generated
Blockly.Msg.ADD_ANIMATION_VI_FIELD_3 = 'with frames';
/// auto generated
Blockly.Msg.ADD_ANIMATION_VI_FIELD_4 = 'displayed at';
/// auto generated
Blockly.Msg.ADD_ANIMATION_VI_FIELD_5 = 'FPS';
/// auto generated
Blockly.Msg.ADD_ANIMATION_VI_FIELD_6 = 'loop';
/// auto generated
Blockly.Msg.ADD_ANIMATION_VI_TOOLTIP = 'Add an animation to an object based on a list of frames';
/// auto generated
Blockly.Msg.ADD_ANIMATION_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.AnimationManager.html#add';
/// auto generated
Blockly.Msg.PLAY_ANIMATION_VI_FIELD_1 = 'play animation';
/// auto generated
Blockly.Msg.PLAY_ANIMATION_VI_FIELD_2 = 'on';
/// auto generated
Blockly.Msg.PLAY_ANIMATION_VI_TOOLTIP = 'Plays an animation on the given sprite.';
/// auto generated
Blockly.Msg.PLAY_ANIMATION_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.AnimationManager.html#play';
/// auto generated
Blockly.Msg.ANIMATION_NEXT_FIELD_1 = 'increment current animation by';
/// auto generated
Blockly.Msg.ANIMATION_NEXT_FIELD_2 = 'on ';
/// auto generated
Blockly.Msg.ANIMATION_NEXT_TOOLTIP = 'Increment the current animation by a given amount of frames.';
/// auto generated
Blockly.Msg.ANIMATION_NEXT_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.AnimationManager.html#next';
/// auto generated
Blockly.Msg.ANIMATION_PREVIOUS_FIELD_1 = 'decrement current animation by';
/// auto generated
Blockly.Msg.ANIMATION_PREVIOUS_FIELD_2 = 'on ';
/// auto generated
Blockly.Msg.ANIMATION_PREVIOUS_TOOLTIP = 'Decrement the current animation by a given amount of frames.';
/// auto generated
Blockly.Msg.ANIMATION_PREVIOUS_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.AnimationManager.html#previous';
/// auto generated
Blockly.Msg.ANIMATION_NEXT_VI_FIELD_1 = 'increment current animation by';
/// auto generated
Blockly.Msg.ANIMATION_NEXT_VI_FIELD_2 = 'frames';
/// auto generated
Blockly.Msg.ANIMATION_NEXT_VI_FIELD_3 = 'for';
/// auto generated
Blockly.Msg.ANIMATION_NEXT_VI_TOOLTIP = 'Increment the current animation by a given amount of frames.';
/// auto generated
Blockly.Msg.ANIMATION_NEXT_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.AnimationManager.html#next';
/// auto generated
Blockly.Msg.ANIMATION_PREVIOUS_VI_FIELD_1 = 'decrement current animation by';
/// auto generated
Blockly.Msg.ANIMATION_PREVIOUS_VI_FIELD_2 = 'frames';
/// auto generated
Blockly.Msg.ANIMATION_PREVIOUS_VI_FIELD_3 = 'for';
/// auto generated
Blockly.Msg.ANIMATION_PREVIOUS_VI_TOOLTIP = 'Decrement the current animation by a given amount of frames.';
/// auto generated
Blockly.Msg.ANIMATION_PREVIOUS_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.AnimationManager.html#previous';
/// auto generated
Blockly.Msg.REFRESH_FRAME_FIELD_1 = 'refresh frame of ';
/// auto generated
Blockly.Msg.REFRESH_FRAME_TOOLTIP = 'Refreshes the current frame data back to the parent Sprite and also resets the texture data.';
/// auto generated
Blockly.Msg.REFRESH_FRAME_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.AnimationManager.html#refreshFrame';
/// auto generated
Blockly.Msg.ANIMATION_UPDATE_FIELD_1 = 'frame update of ';
/// auto generated
Blockly.Msg.ANIMATION_UPDATE_TOOLTIP = 'Internal method do not call';
/// auto generated
Blockly.Msg.ANIMATION_UPDATE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.AnimationManager.html#update';
/// auto generated
Blockly.Msg.VALIDATE_FRAMES_FIELD_1 = 'validate animation frames of ';
/// auto generated
Blockly.Msg.VALIDATE_FRAMES_FIELD_2 = 'array of frames';
/// auto generated
Blockly.Msg.VALIDATE_FRAMES_TOOLTIP = 'Validates the frames on the given Sprite.';
/// auto generated
Blockly.Msg.VALIDATE_FRAMES_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.AnimationManager.html#validateFrames';
/// auto generated
Blockly.Msg.VALIDATE_FRAMES_VI_FIELD_1 = 'validate animation frames of ';
/// auto generated
Blockly.Msg.VALIDATE_FRAMES_VI_FIELD_2 = 'array of frames';
/// auto generated
Blockly.Msg.VALIDATE_FRAMES_VI_TOOLTIP = 'Validates the frames on the given Sprite.';
/// auto generated
Blockly.Msg.VALIDATE_FRAMES_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.AnimationManager.html#validateFrames';
/// auto generated
Blockly.Msg.ANIMATION_DESTROY_FIELD_1 = 'destroy all animations in animation manager of ';
/// auto generated
Blockly.Msg.ANIMATION_DESTROY_TOOLTIP = 'Destroy all animations on the object.';
/// auto generated
Blockly.Msg.ANIMATION_DESTROY_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.AnimationManager.html#validateFrames';
/// auto generated
Blockly.Msg.ANIMATION_DESTROY_VI_FIELD_1 = 'destroy all animations in animation manager of ';
/// auto generated
Blockly.Msg.ANIMATION_DESTROY_VI_TOOLTIP = 'Destroy all animations on the object.';
/// auto generated
Blockly.Msg.ANIMATION_DESTROY_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.AnimationManager.html#destroy';
/// auto generated
Blockly.Msg.STOP_ANIMATION_VI_FIELD_1 = 'stop animation on';
/// auto generated
Blockly.Msg.STOP_ANIMATION_VI_TOOLTIP = 'Stops the current animation on the specified Sprite';
/// auto generated
Blockly.Msg.STOP_ANIMATION_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Animation.html#stop';
/// auto generated
Blockly.Msg.SET_FRAME_VI_FIELD_1 = 'set current frame # to';
/// auto generated
Blockly.Msg.SET_FRAME_VI_FIELD_2 = 'for';
/// auto generated
Blockly.Msg.SET_FRAME_VI_TOOLTIP = 'Sets the current frame number on the specified object';
/// auto generated
Blockly.Msg.SET_FRAME_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Animation.html#frame';
/// auto generated
Blockly.Msg.SEND_TO_BACK_FIELD_1 = 'send';
/// auto generated
Blockly.Msg.SEND_TO_BACK_FIELD_2 = 'to the back';
/// auto generated
Blockly.Msg.SEND_TO_BACK_TOOLTIP = 'Sends this sprite/image to the back of the display order. In case of overlapping sprites, it will draw behind everything else.';
/// auto generated
Blockly.Msg.SEND_TO_BACK_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#sendToBack';
/// auto generated
Blockly.Msg.SET_CHILD_INDEX_FIELD_1 = 'move the child';
/// auto generated
Blockly.Msg.SET_CHILD_INDEX_FIELD_2 = 'of';
/// auto generated
Blockly.Msg.SET_CHILD_INDEX_FIELD_3 = 'to index';
/// auto generated
Blockly.Msg.SET_CHILD_INDEX_TOOLTIP = 'Moves the child to a specific index on its parent. This will affect how you find it in the future.';
/// auto generated
Blockly.Msg.SET_CHILD_INDEX_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#setChildIndex';
/// auto generated
Blockly.Msg.SET_CHILD_INDEX_VI_FIELD_1 = 'move the child';
/// auto generated
Blockly.Msg.SET_CHILD_INDEX_VI_FIELD_2 = 'of';
/// auto generated
Blockly.Msg.SET_CHILD_INDEX_VI_FIELD_3 = 'to index';
/// auto generated
Blockly.Msg.SET_CHILD_INDEX_VI_TOOLTIP = 'Moves the child to a specific index on its parent. This will affect how you find it in the future.';
/// auto generated
Blockly.Msg.SET_CHILD_INDEX_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#setChildIndex';
/// auto generated
Blockly.Msg.SET_SPRITE_FRAME_FIELD_1 = 'Set texture frame of';
/// auto generated
Blockly.Msg.SET_SPRITE_FRAME_FIELD_2 = 'to';
/// auto generated
Blockly.Msg.SET_SPRITE_FRAME_TOOLTIP = 'Sets the Texture frame the Sprite uses for rendering. This is primarily an internal method used by Sprite.loadTexture, although you may call it directly.';
/// auto generated
Blockly.Msg.SET_SPRITE_FRAME_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#setFrame';
/// auto generated
Blockly.Msg.SET_SCALE_MIN_MAX_FIELD_1 = 'set scale constraints on';
/// auto generated
Blockly.Msg.SET_SCALE_MIN_MAX_FIELD_2 = 'min X';
/// auto generated
Blockly.Msg.SET_SCALE_MIN_MAX_FIELD_3 = 'min Y';
/// auto generated
Blockly.Msg.SET_SCALE_MIN_MAX_FIELD_4 = 'max X';
/// auto generated
Blockly.Msg.SET_SCALE_MIN_MAX_FIELD_5 = 'max Y';
/// auto generated
Blockly.Msg.SET_SCALE_MIN_MAX_TOOLTIP = 'Limits how far this sprite will scale based on its parent.';
/// auto generated
Blockly.Msg.SET_SCALE_MIN_MAX_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#setScaleMinMax';
/// auto generated
Blockly.Msg.CLEAR_SCALE_MIN_MAX_FIELD_1 = 'clear scale constraints on';
/// auto generated
Blockly.Msg.CLEAR_SCALE_MIN_MAX_TOOLTIP = 'If scaling constraints were set on a sprite, this removes them.';
/// auto generated
Blockly.Msg.CLEAR_SCALE_MIN_MAX_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#setScaleMinMax';
/// auto generated
Blockly.Msg.SET_TEXTURE_FIELD_1 = 'Set texture of';
/// auto generated
Blockly.Msg.SET_TEXTURE_FIELD_2 = 'to';
/// auto generated
Blockly.Msg.SET_TEXTURE_TOOLTIP = 'Sets the texture of the sprite. Be warned that this doesn\'t remove or destroy the previous texture this Sprite was using. Note that this takes a specific texture, not a tag.';
/// auto generated
Blockly.Msg.SET_TEXTURE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#setTexture';
/// auto generated
Blockly.Msg.SWAP_CHILDREN_FIELD_1 = 'swap children of';
/// auto generated
Blockly.Msg.SWAP_CHILDREN_FIELD_2 = 'child 1';
/// auto generated
Blockly.Msg.SWAP_CHILDREN_FIELD_3 = 'child 2';
/// auto generated
Blockly.Msg.SWAP_CHILDREN_TOOLTIP = 'Swaps the indices of the given children. They must both be on the same parent.';
/// auto generated
Blockly.Msg.SWAP_CHILDREN_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#swapChildren';
/// auto generated
Blockly.Msg.GET_ANIMATION_PROPERTY_FIELD_1 = 'on gameobject';
/// auto generated
Blockly.Msg.GET_ANIMATION_PROPERTY_FIELD_2 = 'get animation.';
/// auto generated
Blockly.Msg.GET_ANIMATION_PROPERTY_FIELD_DROPDOWN_1 = 'currentAnim';
/// auto generated
Blockly.Msg.GET_ANIMATION_PROPERTY_FIELD_DROPDOWN_2 = 'currentFrame';
/// auto generated
Blockly.Msg.GET_ANIMATION_PROPERTY_FIELD_DROPDOWN_3 = 'frame';
/// auto generated
Blockly.Msg.GET_ANIMATION_PROPERTY_FIELD_DROPDOWN_4 = 'frameData';
/// auto generated
Blockly.Msg.GET_ANIMATION_PROPERTY_FIELD_DROPDOWN_5 = 'frameName';
/// auto generated
Blockly.Msg.GET_ANIMATION_PROPERTY_FIELD_DROPDOWN_6 = 'frameTotal';
/// auto generated
Blockly.Msg.GET_ANIMATION_PROPERTY_FIELD_DROPDOWN_7 = 'game';
/// auto generated
Blockly.Msg.GET_ANIMATION_PROPERTY_FIELD_DROPDOWN_8 = 'isLoaded';
/// auto generated
Blockly.Msg.GET_ANIMATION_PROPERTY_FIELD_DROPDOWN_9 = 'name';
/// auto generated
Blockly.Msg.GET_ANIMATION_PROPERTY_FIELD_DROPDOWN_10 = 'paused';
/// auto generated
Blockly.Msg.GET_ANIMATION_PROPERTY_FIELD_DROPDOWN_11 = 'sprite';
/// auto generated
Blockly.Msg.GET_ANIMATION_PROPERTY_FIELD_DROPDOWN_12 = 'updateIfVisible';
/// auto generated
Blockly.Msg.GET_ANIMATION_PROPERTY_TOOLTIP = 'Get a property on from the animaton manager on the object';
/// auto generated
Blockly.Msg.GET_ANIMATION_PROPERTY_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.AnimationManager.html#destroy';
/// auto generated
Blockly.Msg.SET_ANIMATION_PROPERTY_FIELD_1 = 'set animation.';
/// auto generated
Blockly.Msg.SET_ANIMATION_PROPERTY_FIELD_DROPDOWN_1 = 'frame';
/// auto generated
Blockly.Msg.SET_ANIMATION_PROPERTY_FIELD_DROPDOWN_2 = 'frameName';
/// auto generated
Blockly.Msg.SET_ANIMATION_PROPERTY_FIELD_DROPDOWN_3 = 'paused';
/// auto generated
Blockly.Msg.SET_ANIMATION_PROPERTY_FIELD_DROPDOWN_4 = 'updateIfVisible';
/// auto generated
Blockly.Msg.SET_ANIMATION_PROPERTY_FIELD_2 = 'on ';
/// auto generated
Blockly.Msg.SET_ANIMATION_PROPERTY_FIELD_3 = 'to';
/// auto generated
Blockly.Msg.SET_ANIMATION_PROPERTY_TOOLTIP = 'Set a property from the animation manager on the object';
/// auto generated
Blockly.Msg.SET_ANIMATION_PROPERTY_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.AnimationManager.html#destroy';
/// auto generated
Blockly.Msg.SET_ANIMATION_PROPERTY_VI_FIELD_1 = 'set animation.';
/// auto generated
Blockly.Msg.SET_ANIMATION_PROPERTY_VI_FIELD_DROPDOWN_1 = 'paused';
/// auto generated
Blockly.Msg.SET_ANIMATION_PROPERTY_VI_FIELD_DROPDOWN_2 = 'updateIfVisible';
/// auto generated
Blockly.Msg.SET_ANIMATION_PROPERTY_VI_FIELD_2 = 'on ';
/// auto generated
Blockly.Msg.SET_ANIMATION_PROPERTY_VI_FIELD_3 = 'to';
/// auto generated
Blockly.Msg.SET_ANIMATION_PROPERTY_VI_TOOLTIP = 'Set a property from the animation manager on the object';
/// auto generated
Blockly.Msg.SET_ANIMATION_PROPERTY_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.AnimationManager.html#destroy';
/// SET for Boolean Types in animations
Blockly.Msg.SET_ANIMATION_BOOLEAN_FIELD_VI_TOOLTIP = 'Sets the boolean value for the selected animation property';
Blockly.Msg.SET_ANIMATION_BOOLEAN_FIELD_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Animation.html';
/// SET for Numeric Types in animations
Blockly.Msg.SET_ANIMATION_NUMERIC_FIELD_TOOLTIP = 'Sets the numeric value for the selected animation property';
Blockly.Msg.SET_ANIMATION_NUMERIC_FIELD_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Animation.html';
/// SET for String Types in animations
Blockly.Msg.SET_ANIMATION_STRING_FIELD_TOOLTIP = 'Sets the string value for the selected animation property';
Blockly.Msg.SET_ANIMATION_STRING_FIELD_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Animation.html';
/// GET for Boolean Types in animations
Blockly.Msg.GET_ANIMATION_BOOLEAN_FIELD_VI_TOOLTIP = 'Gets the boolean selected from the specified object.';
Blockly.Msg.GET_ANIMATION_BOOLEAN_FIELD_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Animation.html';
/// GET for Numeric Types in animations
Blockly.Msg.GET_ANIMATION_NUMERIC_FIELD_TOOLTIP = 'Gets the number selected from the specified object.';
Blockly.Msg.GET_ANIMATION_NUMERIC_FIELD_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Animation.html';
/// SET for String Types in animations
Blockly.Msg.GET_ANIMATION_STRING_FIELD_TOOLTIP = 'Gets the string selected from the specified object.';
Blockly.Msg.GET_ANIMATION_STRING_FIELD_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Animation.html';
/// auto generated
Blockly.Msg.ANIMATION_GET_ANIMATION_FIELD_1 = 'on gameobject';
/// auto generated
Blockly.Msg.ANIMATION_GET_ANIMATION_FIELD_2 = 'get animation by name';
/// auto generated
Blockly.Msg.ANIMATION_GET_ANIMATION_NAME_TEXT_DEFAULT = 'default';
/// auto generated
Blockly.Msg.ANIMATION_GET_ANIMATION_TOOLTIP = 'Returns an animation that was previously added by name.';
/// auto generated
Blockly.Msg.ANIMATION_GET_ANIMATION_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.AnimationManager.html#getAnimation';
/// auto generated
Blockly.Msg.CREATE_GROUP_FIELD_1 = 'create group';
/// auto generated
Blockly.Msg.CREATE_GROUP_TOOLTIP = 'Create a new group of display objects';
/// auto generated
Blockly.Msg.CREATE_GROUP_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.GameObjectFactory.html#group';
/// auto generated
Blockly.Msg.CREATE_OBJECT_IN_GROUP_FIELD_1 = 'create object at';
/// auto generated
Blockly.Msg.CREATE_OBJECT_IN_GROUP_FIELD_2 = 'x';
/// auto generated
Blockly.Msg.CREATE_OBJECT_IN_GROUP_FIELD_3 = 'y';
/// auto generated
Blockly.Msg.CREATE_OBJECT_IN_GROUP_FIELD_4 = 'from tag';
/// auto generated
Blockly.Msg.CREATE_OBJECT_IN_GROUP_TAG_TEXT_DEFAULT = 'default';
/// auto generated
Blockly.Msg.CREATE_OBJECT_IN_GROUP_FIELD_5 = 'in the';
/// auto generated
Blockly.Msg.CREATE_OBJECT_IN_GROUP_FIELD_6 = 'group';
/// auto generated
Blockly.Msg.CREATE_OBJECT_IN_GROUP_TOOLTIP = 'Create a new sprite in the group';
/// auto generated
Blockly.Msg.CREATE_OBJECT_IN_GROUP_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Group.html#create';
/// auto generated
Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_FIELD_1 = 'create object at';
/// auto generated
Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_FIELD_2 = 'x';
/// auto generated
Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_FIELD_3 = 'y';
/// auto generated
Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_FIELD_4 = 'from tag';
/// auto generated
Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_TAG_TEXT_DEFAULT = 'default';
/// auto generated
Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_FIELD_5 = 'in the';
/// auto generated
Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_FIELD_6 = 'group';
/// auto generated
Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_FIELD_7 = 'displaying frame #';
/// auto generated
Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_TOOLTIP = 'Creates a sprite in the new group using the specified frame from a sprite sheet or texture atlas';
/// auto generated
Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Group.html#create';
/// auto generated
Blockly.Msg.CREATE_OBJECT_IN_GROUP_VI_FIELD_1 = 'create object at';
/// auto generated
Blockly.Msg.CREATE_OBJECT_IN_GROUP_VI_FIELD_2 = 'x';
/// auto generated
Blockly.Msg.CREATE_OBJECT_IN_GROUP_VI_FIELD_3 = 'y';
/// auto generated
Blockly.Msg.CREATE_OBJECT_IN_GROUP_VI_FIELD_4 = 'from tag';
/// auto generated
Blockly.Msg.CREATE_OBJECT_IN_GROUP_VI_FIELD_5 = 'in group';
/// auto generated
Blockly.Msg.CREATE_OBJECT_IN_GROUP_VI_TOOLTIP = 'Create a new sprite in the group';
/// auto generated
Blockly.Msg.CREATE_OBJECT_IN_GROUP_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Group.html#create';
/// auto generated
Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_VI_FIELD_1 = 'create object at';
/// auto generated
Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_VI_FIELD_2 = 'x';
/// auto generated
Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_VI_FIELD_3 = 'y';
/// auto generated
Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_VI_FIELD_4 = 'from tag';
/// auto generated
Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_VI_FIELD_5 = 'in group';
/// auto generated
Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_VI_FIELD_6 = 'displaying frame';
/// auto generated
Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_VI_TOOLTIP = 'Creates a sprite in the new group using the specified frame from a sprite sheet or texture atlas';
/// auto generated
Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Group.html#create';
/// auto generated
Blockly.Msg.ADD_TO_GROUP_FIELD_1 = 'add';
/// auto generated
Blockly.Msg.ADD_TO_GROUP_FIELD_2 = 'to group';
/// auto generated
Blockly.Msg.ADD_TO_GROUP_TOOLTIP = 'Adds an existing object to a group.';
/// auto generated
Blockly.Msg.ADD_TO_GROUP_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Group.html#add';
/// auto generated
Blockly.Msg.REMOVE_FROM_GROUP_FIELD_1 = 'remove';
/// auto generated
Blockly.Msg.REMOVE_FROM_GROUP_FIELD_2 = 'from group';
/// auto generated
Blockly.Msg.REMOVE_FROM_GROUP_FIELD_3 = 'destroy it too';
/// auto generated
Blockly.Msg.REMOVE_FROM_GROUP_TOOLTIP = 'Removes an object from a group. Optionally, destroy it as well.';
/// auto generated
Blockly.Msg.REMOVE_FROM_GROUP_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Group.html#remove';
/// auto generated
Blockly.Msg.GROUP_CONTAINS_FIELD_1 = 'group';
/// auto generated
Blockly.Msg.GROUP_CONTAINS_FIELD_2 = 'contains';
/// auto generated
Blockly.Msg.GROUP_CONTAINS_FIELD_3 = '?';
/// auto generated
Blockly.Msg.GROUP_CONTAINS_TOOLTIP = 'Returns true if a group contains a specified sprite.';
/// auto generated
Blockly.Msg.GROUP_CONTAINS_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Group.html#contains';
/// auto generated
Blockly.Msg.GROUP_COUNT_ALIVE_DEAD_FIELD_1 = 'number of';
/// auto generated
Blockly.Msg.GROUP_COUNT_ALIVE_DEAD_STATE_DROPDOWN_1 = 'alive';
/// auto generated
Blockly.Msg.GROUP_COUNT_ALIVE_DEAD_STATE_DROPDOWN_2 = 'fainted';
/// auto generated
Blockly.Msg.GROUP_COUNT_ALIVE_DEAD_FIELD_2 = 'objects in group';
/// auto generated
Blockly.Msg.GROUP_COUNT_ALIVE_DEAD_TOOLTIP = 'Returns the number of alive/dead objects in a group.';
/// auto generated
Blockly.Msg.GROUP_COUNT_ALIVE_DEAD_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Group.html#countLiving';
/// auto generated
Blockly.Msg.DESTROY_GROUP_FIELD_1 = 'destroy group';
/// auto generated
Blockly.Msg.DESTROY_GROUP_FIELD_2 = 'destroy members too';
/// auto generated
Blockly.Msg.DESTROY_GROUP_TOOLTIP = 'Destroys a group. Can either leave the members where they are, or destroy them too.';
/// auto generated
Blockly.Msg.DESTROY_GROUP_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Group.html#destroy';
/// auto generated
Blockly.Msg.GROUP_GET_ALL_FIELD_1 = 'get all members of group';
/// auto generated
Blockly.Msg.GROUP_GET_ALL_TOOLTIP = 'Returns a list of all members in the specified group.';
/// auto generated
Blockly.Msg.GROUP_GET_ALL_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Group.html#getAll';
/// auto generated
Blockly.Msg.GROUP_GET_AT_FIELD_1 = 'get member of group';
/// auto generated
Blockly.Msg.GROUP_GET_AT_FIELD_2 = 'at index';
/// auto generated
Blockly.Msg.GROUP_GET_AT_TOOLTIP = 'Returns a group member at a specified index. Indices start at 0 and go in creation order by default. Returns -1 if it fails.';
/// auto generated
Blockly.Msg.GROUP_GET_AT_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Group.html#getAt';
/// auto generated
Blockly.Msg.GROUP_GET_CLOSEST_TO_FIELD_1 = 'get member of group';
/// auto generated
Blockly.Msg.GROUP_GET_CLOSEST_TO_FIELD_2 = 'closest to';
/// auto generated
Blockly.Msg.GROUP_GET_CLOSEST_TO_TOOLTIP = 'Returns the object in the group whose position is closest to the specified object.';
/// auto generated
Blockly.Msg.GROUP_GET_CLOSEST_TO_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Group.html#getClosestTo';
/// auto generated
Blockly.Msg.GROUP_GET_FIRST_ALIVE_DEAD_FIELD_1 = 'get first';
/// auto generated
Blockly.Msg.GROUP_GET_FIRST_ALIVE_DEAD_MODE_DROPDOWN_1 = 'alive';
/// auto generated
Blockly.Msg.GROUP_GET_FIRST_ALIVE_DEAD_MODE_DROPDOWN_2 = 'dead';
/// auto generated
Blockly.Msg.GROUP_GET_FIRST_ALIVE_DEAD_FIELD_2 = 'member of group';
/// auto generated
Blockly.Msg.GROUP_GET_FIRST_ALIVE_DEAD_TOOLTIP = 'Gets the first group member that has the given value of its \'alive\' field. Returns null if no matching member is found.';
/// auto generated
Blockly.Msg.GROUP_GET_FIRST_ALIVE_DEAD_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Group.html#getFirstAlive';
/// auto generated
Blockly.Msg.GROUP_GET_FIRST_ALIVE_FAINTED_FIELD_1 = 'get first';
/// auto generated
Blockly.Msg.GROUP_GET_FIRST_ALIVE_FAINTED_MODE_DROPDOWN_1 = 'alive';
/// auto generated
Blockly.Msg.GROUP_GET_FIRST_ALIVE_FAINTED_MODE_DROPDOWN_2 = 'fainted';
/// auto generated
Blockly.Msg.GROUP_GET_FIRST_ALIVE_FAINTED_FIELD_2 = 'member of group';
/// auto generated
Blockly.Msg.GROUP_GET_FIRST_ALIVE_FAINTED_TOOLTIP = 'Gets the first group member that has the given value of its \'alive\' field. Returns null if no matching member is found.';
/// auto generated
Blockly.Msg.GROUP_GET_FIRST_ALIVE_FAINTED_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Group.html#getFirstAlive';
/// auto generated
Blockly.Msg.GROUP_GET_RANDOM_FIELD_1 = 'get random member of group';
/// auto generated
Blockly.Msg.GROUP_GET_RANDOM_TOOLTIP = 'Returns a member of the group at random with no bias.';
/// auto generated
Blockly.Msg.GROUP_GET_RANDOM_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Group.html#getRandom';
/// auto generated
Blockly.Msg.GROUP_GET_RANDOM_EXISTS_FIELD_1 = 'get a random member of group';
/// auto generated
Blockly.Msg.GROUP_GET_RANDOM_EXISTS_FIELD_2 = 'that exists';
/// auto generated
Blockly.Msg.GROUP_GET_RANDOM_EXISTS_TOOLTIP = 'Returns a random member of the given group, picking from those whose \'exists\' field is set to true.';
/// auto generated
Blockly.Msg.GROUP_GET_RANDOM_EXISTS_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Group.html#getRandomExists';
/// auto generated
Blockly.Msg.GROUP_REMOVE_ALL_FIELD_1 = 'remove all members of group';
/// auto generated
Blockly.Msg.GROUP_REMOVE_ALL_FIELD_2 = 'destroy them too';
/// auto generated
Blockly.Msg.GROUP_REMOVE_ALL_TOOLTIP = 'Empties the specified group. Can either do this by releasing its members or deleting them.';
/// auto generated
Blockly.Msg.GROUP_REMOVE_ALL_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Group.html#removeAll';
/// auto generated
Blockly.Msg.ADD_TO_WORLD_FIELD_1 = 'add';
/// auto generated
Blockly.Msg.ADD_TO_WORLD_FIELD_2 = 'to the world';
/// auto generated
Blockly.Msg.ADD_TO_WORLD_TOOLTIP = 'Adds an existing object to the world group. Necessary for making an object that has been previously removed from a  group visible again.';
/// auto generated
Blockly.Msg.ADD_TO_WORLD_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.World.html#add';
/// auto generated
Blockly.Msg.START_PHYSICS_FIELD_1 = 'start';
/// auto generated
Blockly.Msg.START_PHYSICS_SYSTEM_DROPDOWN_1 = 'Arcade';
/// auto generated
Blockly.Msg.START_PHYSICS_SYSTEM_DROPDOWN_2 = 'P2JS';
/// auto generated
Blockly.Msg.START_PHYSICS_FIELD_2 = 'physics system';
/// auto generated
Blockly.Msg.START_PHYSICS_TOOLTIP = 'Start physics with the specified system';
/// auto generated
Blockly.Msg.START_PHYSICS_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.html#startSystem';
/// auto generated
Blockly.Msg.START_ARCADE_PHYSICS_FIELD_1 = 'start arcade physics system';
/// auto generated
Blockly.Msg.START_ARCADE_PHYSICS_TOOLTIP = 'Start the specified arcade physics system';
/// auto generated
Blockly.Msg.START_ARCADE_PHYSICS_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.html#startSystem';
/// auto generated
Blockly.Msg.ENABLE_BODY_GROUP_FIELD_1 = 'Enable Body for';
/// auto generated
Blockly.Msg.ENABLE_BODY_GROUP_FIELD_2 = 'Group';
/// auto generated
Blockly.Msg.ENABLE_BODY_GROUP_TOOLTIP = 'Enable physics body on all sprites in or added to this group.';
/// auto generated
Blockly.Msg.ENABLE_BODY_GROUP_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Group.html#enableBody';
/// auto generated
Blockly.Msg.ENABLE_BODY_GROUP_VI_FIELD_1 = 'enable body for group';
/// auto generated
Blockly.Msg.ENABLE_BODY_GROUP_VI_TOOLTIP = 'Enable physics body on all sprites in or added to this group.';
/// auto generated
Blockly.Msg.ENABLE_BODY_GROUP_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Group.html#enableBody';
/// auto generated
Blockly.Msg.ENABLE_ARCADE_PHYSICS_FOR_OBJECT_FIELD_1 = 'enable arcade physics for';
/// auto generated
Blockly.Msg.ENABLE_ARCADE_PHYSICS_FOR_OBJECT_TOOLTIP = 'Enable physics for this object';
/// auto generated
Blockly.Msg.ENABLE_ARCADE_PHYSICS_FOR_OBJECT_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.html#enable';
/// auto generated
Blockly.Msg.ENABLE_ARCADE_PHYSICS_FOR_OBJECT_VI_FIELD_1 = 'enable arcade physics for sprite';
/// auto generated
Blockly.Msg.ENABLE_ARCADE_PHYSICS_FOR_OBJECT_VI_TOOLTIP = 'Enable physics for this sprite';
/// auto generated
Blockly.Msg.ENABLE_ARCADE_PHYSICS_FOR_OBJECT_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.html#enable';
/// auto generated
Blockly.Msg.COLLIDE_WITH_ARROW_FUNCTION_FIELD_1 = 'collide';
/// auto generated
Blockly.Msg.COLLIDE_WITH_ARROW_FUNCTION_FIELD_2 = 'with';
/// auto generated
Blockly.Msg.COLLIDE_WITH_ARROW_FUNCTION_FIELD_3 = 'if collided do';
/// auto generated
Blockly.Msg.COLLIDE_WITH_ARROW_FUNCTION_TOOLTIP = 'Collide two objects, if they are collide do the statements in the block';
/// auto generated
Blockly.Msg.COLLIDE_WITH_ARROW_FUNCTION_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.html#collide';
/// auto generated
Blockly.Msg.SET_BODY_FIELD_POINT_FIELD_1 = 'Set';
/// auto generated
Blockly.Msg.SET_BODY_FIELD_POINT_FIELD_DROPDOWN_1 = 'bounce';
/// auto generated
Blockly.Msg.SET_BODY_FIELD_POINT_FIELD_DROPDOWN_2 = 'gravity';
/// auto generated
Blockly.Msg.SET_BODY_FIELD_POINT_FIELD_DROPDOWN_3 = 'velocity';
/// auto generated
Blockly.Msg.SET_BODY_FIELD_POINT_FIELD_DROPDOWN_4 = 'acceleration';
/// auto generated
Blockly.Msg.SET_BODY_FIELD_POINT_FIELD_DROPDOWN_5 = 'drag';
/// auto generated
Blockly.Msg.SET_BODY_FIELD_POINT_FIELD_DROPDOWN_6 = 'friction';
/// auto generated
Blockly.Msg.SET_BODY_FIELD_POINT_FIELD_DROPDOWN_7 = 'maxVelocity';
/// auto generated
Blockly.Msg.SET_BODY_FIELD_POINT_FIELD_DROPDOWN_8 = 'worldBounce';
/// auto generated
Blockly.Msg.SET_BODY_FIELD_POINT_ELEMENT_DROPDOWN_1 = 'x';
/// auto generated
Blockly.Msg.SET_BODY_FIELD_POINT_ELEMENT_DROPDOWN_2 = 'y';
/// auto generated
Blockly.Msg.SET_BODY_FIELD_POINT_FIELD_2 = 'for';
/// auto generated
Blockly.Msg.SET_BODY_FIELD_POINT_FIELD_3 = 'to';
/// auto generated
Blockly.Msg.SET_BODY_FIELD_POINT_TOOLTIP = 'Set the x or y value of the specified field';
/// auto generated
Blockly.Msg.SET_BODY_FIELD_POINT_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.Body.html';
/// auto generated
Blockly.Msg.SET_BODY_FIELD_POINT_VI_FIELD_1 = 'set point field';
Blockly.Msg.SET_BODY_FIELD_POINT_VI_FIELD_1_5 = 'in the';
/// auto generated
Blockly.Msg.SET_BODY_FIELD_POINT_VI_FIELD_DROPDOWN_1 = 'bounce';
/// auto generated
Blockly.Msg.SET_BODY_FIELD_POINT_VI_FIELD_DROPDOWN_2 = 'gravity';
/// auto generated
Blockly.Msg.SET_BODY_FIELD_POINT_VI_FIELD_DROPDOWN_3 = 'velocity';
/// auto generated
Blockly.Msg.SET_BODY_FIELD_POINT_VI_FIELD_DROPDOWN_4 = 'acceleration';
/// auto generated
Blockly.Msg.SET_BODY_FIELD_POINT_VI_FIELD_DROPDOWN_5 = 'drag';
/// auto generated
Blockly.Msg.SET_BODY_FIELD_POINT_VI_FIELD_DROPDOWN_6 = 'friction';
/// auto generated
Blockly.Msg.SET_BODY_FIELD_POINT_VI_FIELD_DROPDOWN_7 = 'maxVelocity';
/// auto generated
Blockly.Msg.SET_BODY_FIELD_POINT_VI_FIELD_DROPDOWN_8 = 'worldBounce';
Blockly.Msg.SET_BODY_FIELD_POINT_VI_FIELD_DROPDOWN_9 = 'deltaMax';
Blockly.Msg.SET_BODY_FIELD_POINT_VI_FIELD_DROPDOWN_10 = 'offset';
Blockly.Msg.SET_BODY_FIELD_POINT_VI_FIELD_DROPDOWN_11 = 'tilePadding';
/// auto generated
Blockly.Msg.SET_BODY_FIELD_POINT_VI_ELEMENT_DROPDOWN_1 = 'x';
/// auto generated
Blockly.Msg.SET_BODY_FIELD_POINT_VI_ELEMENT_DROPDOWN_2 = 'y';
/// auto generated
Blockly.Msg.SET_BODY_FIELD_POINT_VI_FIELD_2 = 'direction for';
/// auto generated
Blockly.Msg.SET_BODY_FIELD_POINT_VI_FIELD_3 = 'to';
/// auto generated
Blockly.Msg.SET_BODY_FIELD_POINT_VI_TOOLTIP = 'Set the x or y value of the specified field';
/// auto generated
Blockly.Msg.SET_BODY_FIELD_POINT_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.Body.html';
/// auto generated
Blockly.Msg.SET_BODY_FIELD_POINT_CLASS_VI_FIELD_1 = 'set point field';
/// auto generated
Blockly.Msg.SET_BODY_FIELD_POINT_CLASS_VI_FIELD_2 = 'for';
/// auto generated
Blockly.Msg.SET_BODY_FIELD_POINT_CLASS_VI_FIELD_3 = 'to';
/// auto generated
Blockly.Msg.SET_BODY_FIELD_POINT_CLASS_VI_TOOLTIP = 'Set the value of the body point field';
/// auto generated
Blockly.Msg.SET_BODY_FIELD_POINT_CLASS_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.Body.html';
/// auto generated

// STOP BODY
Blockly.Msg.STOP_BODY_TEXT = 'stop body';
Blockly.Msg.STOP_BODY_TOOLTIP = 'stops any existing movement or acceleration of the body';
Blockly.Msg.STOP_BODY_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.Body.html#stop';

// DEBUG BODY
Blockly.Msg.DEBUG_BODY_TEXT = 'debug body';
Blockly.Msg.DEBUG_BODY_TOOLTIP = 'Enable debug information for the game object';
Blockly.Msg.DEBUG_BODY_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Utils.Debug.html#body';

/// auto generated
Blockly.Msg.GET_BODY_FIELD_POINT_CLASS_FIELD_1 = 'get point field';
/// auto generated
Blockly.Msg.GET_BODY_FIELD_POINT_CLASS_FIELD_DROPDOWN_1 = 'bounce';
/// auto generated
Blockly.Msg.GET_BODY_FIELD_POINT_CLASS_FIELD_DROPDOWN_2 = 'gravity';
/// auto generated
Blockly.Msg.GET_BODY_FIELD_POINT_CLASS_FIELD_DROPDOWN_3 = 'velocity';
/// auto generated
Blockly.Msg.GET_BODY_FIELD_POINT_CLASS_FIELD_DROPDOWN_4 = 'acceleration';
/// auto generated
Blockly.Msg.GET_BODY_FIELD_POINT_CLASS_FIELD_DROPDOWN_5 = 'drag';
/// auto generated
Blockly.Msg.GET_BODY_FIELD_POINT_CLASS_FIELD_DROPDOWN_6 = 'friction';
/// auto generated
Blockly.Msg.GET_BODY_FIELD_POINT_CLASS_FIELD_DROPDOWN_7 = 'maxVelocity';
/// auto generated
Blockly.Msg.GET_BODY_FIELD_POINT_CLASS_FIELD_DROPDOWN_8 = 'worldBounce';
/// auto generated
Blockly.Msg.GET_BODY_FIELD_POINT_CLASS_FIELD_2 = 'for';
/// auto generated
Blockly.Msg.GET_BODY_FIELD_POINT_CLASS_TOOLTIP = 'Gets the value of the specified point as a point object';
/// auto generated
Blockly.Msg.GET_BODY_FIELD_POINT_CLASS_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.Body.html';
/// auto generated
Blockly.Msg.SET_BODY_BOOLEAN_FIELD_FIELD_1 = 'set boolean field';
/// auto generated
Blockly.Msg.SET_BODY_BOOLEAN_FIELD_FIELD_2 = 'for';
/// auto generated
Blockly.Msg.SET_BODY_BOOLEAN_FIELD_FIELD_3 = 'to';
/// auto generated
Blockly.Msg.SET_BODY_BOOLEAN_FIELD_ELEMENT_DROPDOWN_1 = 'allowRotation';
/// auto generated
Blockly.Msg.SET_BODY_BOOLEAN_FIELD_ELEMENT_DROPDOWN_2 = 'allowGravity';
/// auto generated
Blockly.Msg.SET_BODY_BOOLEAN_FIELD_ELEMENT_DROPDOWN_3 = 'immovable';
/// auto generated
Blockly.Msg.SET_BODY_BOOLEAN_FIELD_TOOLTIP = 'Set the value of the specified boolean field';
/// auto generated
Blockly.Msg.SET_BODY_BOOLEAN_FIELD_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.Body.html';
/// auto generated
Blockly.Msg.GET_BODY_BOOLEAN_FIELD_FIELD_1 = 'get boolean field';
/// auto generated
Blockly.Msg.GET_BODY_BOOLEAN_FIELD_ELEMENT_DROPDOWN_1 = 'allowRotation';
/// auto generated
Blockly.Msg.GET_BODY_BOOLEAN_FIELD_ELEMENT_DROPDOWN_2 = 'allowGravity';
/// auto generated
Blockly.Msg.GET_BODY_BOOLEAN_FIELD_ELEMENT_DROPDOWN_3 = 'immovable';
/// auto generated
Blockly.Msg.GET_BODY_BOOLEAN_FIELD_ELEMENT_DROPDOWN_4 = 'isMoving';
/// auto generated
Blockly.Msg.GET_BODY_BOOLEAN_FIELD_FIELD_2 = 'for';
/// auto generated
Blockly.Msg.GET_BODY_BOOLEAN_FIELD_TOOLTIP = 'Set the value of the specified boolean field';
/// auto generated
Blockly.Msg.GET_BODY_BOOLEAN_FIELD_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.Body.html';
/// auto generated
Blockly.Msg.SET_BODY_NUMERIC_FIELD_FIELD_1 = 'set numeric field';
/// auto generated
Blockly.Msg.SET_BODY_NUMERIC_FIELD_ELEMENT_DROPDOWN_1 = 'mass';
/// auto generated
Blockly.Msg.SET_BODY_NUMERIC_FIELD_ELEMENT_DROPDOWN_2 = 'rotation (degrees)';
/// auto generated
Blockly.Msg.SET_BODY_NUMERIC_FIELD_ELEMENT_DROPDOWN_3 = 'angularAcceleration';
/// auto generated
Blockly.Msg.SET_BODY_NUMERIC_FIELD_ELEMENT_DROPDOWN_4 = 'angularVelocity';
/// auto generated
Blockly.Msg.SET_BODY_NUMERIC_FIELD_ELEMENT_DROPDOWN_5 = 'maxAngularVelocity';
/// auto generated
Blockly.Msg.SET_BODY_NUMERIC_FIELD_ELEMENT_DROPDOWN_6 = 'angularDrag';
/// auto generated
Blockly.Msg.SET_BODY_NUMERIC_FIELD_FIELD_2 = 'for';
/// auto generated
Blockly.Msg.SET_BODY_NUMERIC_FIELD_FIELD_3 = 'to';
/// auto generated
Blockly.Msg.SET_BODY_NUMERIC_FIELD_TOOLTIP = 'Set the value of the specified numeric field';
/// auto generated
Blockly.Msg.SET_BODY_NUMERIC_FIELD_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.Body.html';
/// auto generated
Blockly.Msg.GET_BODY_NUMERIC_FIELD_FIELD_1 = 'get numeric field';
/// auto generated
Blockly.Msg.GET_BODY_NUMERIC_FIELD_ELEMENT_DROPDOWN_1 = 'speed';
/// auto generated
Blockly.Msg.GET_BODY_NUMERIC_FIELD_ELEMENT_DROPDOWN_2 = 'mass';
/// auto generated
Blockly.Msg.GET_BODY_NUMERIC_FIELD_ELEMENT_DROPDOWN_3 = 'rotation (degrees)';
/// auto generated
Blockly.Msg.GET_BODY_NUMERIC_FIELD_ELEMENT_DROPDOWN_4 = 'maxVelocity';
/// auto generated
Blockly.Msg.GET_BODY_NUMERIC_FIELD_ELEMENT_DROPDOWN_5 = 'angularAcceleration';
/// auto generated
Blockly.Msg.GET_BODY_NUMERIC_FIELD_ELEMENT_DROPDOWN_6 = 'angularVelocity';
/// auto generated
Blockly.Msg.GET_BODY_NUMERIC_FIELD_ELEMENT_DROPDOWN_7 = 'maxAngularVelocity';
/// auto generated
Blockly.Msg.GET_BODY_NUMERIC_FIELD_ELEMENT_DROPDOWN_8 = 'angularDrag';
/// auto generated
Blockly.Msg.GET_BODY_NUMERIC_FIELD_FIELD_2 = 'for';
/// auto generated
Blockly.Msg.GET_BODY_NUMERIC_FIELD_TOOLTIP = 'Get the value of the specified numeric field';
/// auto generated
Blockly.Msg.GET_BODY_NUMERIC_FIELD_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.Body.html';
/// auto generated
Blockly.Msg.CALL_FUNCTION_ON_GROUP_FIELD_1 = 'Call function';
/// auto generated
Blockly.Msg.CALL_FUNCTION_ON_GROUP_FUNCTION_TEXT_DEFAULT = 'functionName';
/// auto generated
Blockly.Msg.CALL_FUNCTION_ON_GROUP_FIELD_2 = 'on all children in group';
/// auto generated
Blockly.Msg.CALL_FUNCTION_ON_GROUP_TOOLTIP = 'Calls the specified function once for each group member, giving that child as the input.';
/// auto generated
Blockly.Msg.CALL_FUNCTION_ON_GROUP_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Group.html#forEachAlive';
/// auto generated
Blockly.Msg.ACCELERATION_FROM_ROTATION_FIELD_1 = 'get forward acceleration from rotation';
/// auto generated
Blockly.Msg.ACCELERATION_FROM_ROTATION_FIELD_2 = 'at';
/// auto generated
Blockly.Msg.ACCELERATION_FROM_ROTATION_FIELD_3 = 'pixels/second^2';
/// auto generated
Blockly.Msg.ACCELERATION_FROM_ROTATION_TOOLTIP = 'Creates an (x, y) acceleration that goes forward from the given rotation. Returns it as a point.';
/// auto generated
Blockly.Msg.ACCELERATION_FROM_ROTATION_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.html#accelerationFromRotation';
/// auto generated
Blockly.Msg.SET_IMMOVABLE_FIELD_1 = 'Set Immovable for Object';
/// auto generated
Blockly.Msg.SET_IMMOVABLE_TOOLTIP = 'Immovable bodies don\'t recoil from impacts at all. If two immovable bodies overlap or collide, it is ignored. Yes, we\'re sidestepping the question of unstoppable force versus immovable object.';
/// auto generated
Blockly.Msg.SET_IMMOVABLE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.Body.html#immovable';
/// auto generated
Blockly.Msg.COLLIDE_FIELD_1 = 'Collide';
/// auto generated
Blockly.Msg.COLLIDE_FIELD_2 = 'with';
/// auto generated
Blockly.Msg.COLLIDE_TOOLTIP = 'Collide the first group/object with the second group/object';
/// auto generated
Blockly.Msg.COLLIDE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.html#collide';
/// auto generated
Blockly.Msg.COLLIDE_VI_FIELD_1 = 'collide';
/// auto generated
Blockly.Msg.COLLIDE_VI_FIELD_2 = 'with';
/// auto generated
Blockly.Msg.COLLIDE_VI_TOOLTIP = 'Collide the first group/object with the second group/object';
/// auto generated
Blockly.Msg.COLLIDE_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.html#collide';
/// auto generated
Blockly.Msg.IS_BODY_TOUCHING_FIELD_1 = 'touching';
/// auto generated
Blockly.Msg.IS_BODY_TOUCHING_FIELD_2 = '?';
/// auto generated
Blockly.Msg.IS_BODY_TOUCHING_TOOLTIP = 'Check to see if the object is being touched in the given direction.';
/// auto generated
Blockly.Msg.IS_BODY_TOUCHING_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.Body.html#touching';
/// auto generated
Blockly.Msg.IS_BODY_TOUCHING_VI_FIELD_1 = 'is touching';
/// auto generated
Blockly.Msg.IS_BODY_TOUCHING_VI_DIRECTION_DROPDOWN_1 = 'Up';
/// auto generated
Blockly.Msg.IS_BODY_TOUCHING_VI_DIRECTION_DROPDOWN_2 = 'Down';
/// auto generated
Blockly.Msg.IS_BODY_TOUCHING_VI_DIRECTION_DROPDOWN_3 = 'Left';
/// auto generated
Blockly.Msg.IS_BODY_TOUCHING_VI_DIRECTION_DROPDOWN_4 = 'Right';
/// auto generated
Blockly.Msg.IS_BODY_TOUCHING_VI_DIRECTION_DROPDOWN_5 = 'None';
/// auto generated
Blockly.Msg.IS_BODY_TOUCHING_VI_FIELD_2 = '?';
/// auto generated
Blockly.Msg.IS_BODY_TOUCHING_VI_TOOLTIP = 'Check to see if the object is being touched in the given direction.';
/// auto generated
Blockly.Msg.IS_BODY_TOUCHING_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.Body.html#touching';
/// auto generated
Blockly.Msg.COLLIDE_WITH_WORLD_BOUNDS_FIELD_1 = 'Collide';
/// auto generated
Blockly.Msg.COLLIDE_WITH_WORLD_BOUNDS_FIELD_2 = 'with world bounds';
/// auto generated
Blockly.Msg.COLLIDE_WITH_WORLD_BOUNDS_TOOLTIP = 'Make this object collide with the world bounds.';
/// auto generated
Blockly.Msg.COLLIDE_WITH_WORLD_BOUNDS_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Ninja.Body.html#collideWorldBounds';
/// auto generated
Blockly.Msg.COLLIDE_WITH_WORLD_BOUNDS_VI_FIELD_1 = 'make';
/// auto generated
Blockly.Msg.COLLIDE_WITH_WORLD_BOUNDS_VI_FIELD_2 = 'collide with world bounds';
/// auto generated
Blockly.Msg.COLLIDE_WITH_WORLD_BOUNDS_VI_TOOLTIP = 'Make this object collide with the world bounds.';
/// auto generated
Blockly.Msg.COLLIDE_WITH_WORLD_BOUNDS_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Ninja.Body.html#collideWorldBounds';
/// auto generated
Blockly.Msg.CHECK_OVERLAP_VI_FIELD_1 = 'check overlap between';
/// auto generated
Blockly.Msg.CHECK_OVERLAP_VI_FIELD_2 = 'and';
/// auto generated
Blockly.Msg.CHECK_OVERLAP_VI_FIELD_3 = 'calling';
/// auto generated
Blockly.Msg.CHECK_OVERLAP_VI_NAME_TEXT_DEFAULT = 'functionName';
/// auto generated
Blockly.Msg.CHECK_OVERLAP_VI_FIELD_4 = 'if overlapping';
/// auto generated
Blockly.Msg.CHECK_OVERLAP_VI_TOOLTIP = 'Checks for an overlap between objectA and objectB.';
/// auto generated
Blockly.Msg.CHECK_OVERLAP_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.html#overlap';
/// auto generated
Blockly.Msg.CHECK_OVERLAP_FIELD_1 = 'Check Overlap Between';
/// auto generated
Blockly.Msg.CHECK_OVERLAP_FIELD_2 = 'and';
/// auto generated
Blockly.Msg.CHECK_OVERLAP_FIELD_3 = 'calling';
/// auto generated
Blockly.Msg.CHECK_OVERLAP_NAME_TEXT_DEFAULT = 'functionName';
/// auto generated
Blockly.Msg.CHECK_OVERLAP_FIELD_4 = 'if overlapping';
/// auto generated
Blockly.Msg.CHECK_OVERLAP_TOOLTIP = 'Checks for an overlap between objectA and objectB.';
/// auto generated
Blockly.Msg.CHECK_OVERLAP_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.html#overlap';
/// auto generated
Blockly.Msg.MOVE_TO_POINTER_FIELD_1 = 'move game object';
/// auto generated
Blockly.Msg.MOVE_TO_POINTER_FIELD_2 = 'to mouse pointer at';
/// auto generated
Blockly.Msg.MOVE_TO_POINTER_FIELD_3 = 'pixels per second';
/// auto generated
Blockly.Msg.MOVE_TO_POINTER_TOOLTIP = 'Move the object to the pointer at the given speed';
/// auto generated
Blockly.Msg.MOVE_TO_POINTER_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.html#moveToPointer';
/// auto generated
Blockly.Msg.MOVE_TO_POINTER_EXTENDED_FIELD_1 = 'move game object';
/// auto generated
Blockly.Msg.MOVE_TO_POINTER_EXTENDED_FIELD_2 = 'to mouse pointer at';
/// auto generated
Blockly.Msg.MOVE_TO_POINTER_EXTENDED_FIELD_3 = 'pixels per second.';
/// auto generated
Blockly.Msg.MOVE_TO_POINTER_EXTENDED_FIELD_4 = 'Max time (ms)';
/// auto generated
Blockly.Msg.MOVE_TO_POINTER_EXTENDED_TOOLTIP = 'Move the object to the pointer at the given speed';
/// auto generated
Blockly.Msg.MOVE_TO_POINTER_EXTENDED_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.html#moveToPointer';
/// auto generated
Blockly.Msg.MOVE_TO_OBJECT_FIELD_1 = 'move game object';
/// auto generated
Blockly.Msg.MOVE_TO_OBJECT_FIELD_2 = 'to object';
/// auto generated
Blockly.Msg.MOVE_TO_OBJECT_FIELD_3 = 'at';
/// auto generated
Blockly.Msg.MOVE_TO_OBJECT_FIELD_4 = 'pixels per second';
/// auto generated
Blockly.Msg.MOVE_TO_OBJECT_FIELD_5 = 'max time (ms)';
/// auto generated
Blockly.Msg.MOVE_TO_OBJECT_TOOLTIP = 'Move the object to the given object at the given speed';
/// auto generated
Blockly.Msg.MOVE_TO_OBJECT_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.html#moveToObject';
/// auto generated
Blockly.Msg.GET_CURRENT_MOUSE_POSITION_FIELD_1 = 'get mouse position';
/// auto generated
Blockly.Msg.GET_CURRENT_MOUSE_POSITION_DIRECTION_DROPDOWN_1 = 'x';
/// auto generated
Blockly.Msg.GET_CURRENT_MOUSE_POSITION_DIRECTION_DROPDOWN_2 = 'y';
/// auto generated
Blockly.Msg.GET_CURRENT_MOUSE_POSITION_DIRECTION_DROPDOWN_3 = 'worldX';
/// auto generated
Blockly.Msg.GET_CURRENT_MOUSE_POSITION_DIRECTION_DROPDOWN_4 = 'worldY';
/// auto generated
Blockly.Msg.GET_CURRENT_MOUSE_POSITION_TOOLTIP = 'Get the position of the mouse, or last active pointer for touch screen interfaces';
/// auto generated
Blockly.Msg.GET_CURRENT_MOUSE_POSITION_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Pointer.html#x';
/// auto generated
Blockly.Msg.IS_MOUSE_BUTTON_CLICKED_BUTTON_DROPDOWN_1 = 'left';
/// auto generated
Blockly.Msg.IS_MOUSE_BUTTON_CLICKED_BUTTON_DROPDOWN_2 = 'right';
/// auto generated
Blockly.Msg.IS_MOUSE_BUTTON_CLICKED_BUTTON_DROPDOWN_3 = 'middle';
/// auto generated
Blockly.Msg.IS_MOUSE_BUTTON_CLICKED_FIELD_1 = 'mouse button is clicked?';
/// auto generated
Blockly.Msg.IS_MOUSE_BUTTON_CLICKED_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Pointer.html#isDown';
/// auto generated
Blockly.Msg.IS_MOUSE_BUTTON_CLICKED_TOOLTIP = 'Is the specified button clicked';
/// auto generated
Blockly.Msg.CREATE_CURSOR_KEYS_FIELD_1 = 'Create Cursor Keys';
/// auto generated
Blockly.Msg.CREATE_CURSOR_KEYS_TOOLTIP = 'Create a cursor allowing access to the UP/DOWN/LEFT/RIGHT keys';
/// auto generated
Blockly.Msg.CREATE_CURSOR_KEYS_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Keyboard.html#createCursorKeys';
/// auto generated
Blockly.Msg.IS_KEY_DOWN_FIELD_1 = 'key';
/// auto generated
Blockly.Msg.IS_KEY_DOWN_FIELD_2 = 'is down?';
/// auto generated
Blockly.Msg.IS_KEY_DOWN_TOOLTIP = 'Checks if the given key is down';
/// auto generated
Blockly.Msg.IS_KEY_DOWN_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Keyboard.html#isDown';
/// auto generated
Blockly.Msg.GET_WORLD_PROPERTY_FIELD_1 = 'get';
/// auto generated
Blockly.Msg.GET_WORLD_PROPERTY_NAME_DROPDOWN_1 = 'height';
/// auto generated
Blockly.Msg.GET_WORLD_PROPERTY_NAME_DROPDOWN_2 = 'width';
/// auto generated
Blockly.Msg.GET_WORLD_PROPERTY_NAME_DROPDOWN_3 = 'center x';
/// auto generated
Blockly.Msg.GET_WORLD_PROPERTY_NAME_DROPDOWN_4 = 'center y';
/// auto generated
Blockly.Msg.GET_WORLD_PROPERTY_NAME_DROPDOWN_5 = 'random x';
/// auto generated
Blockly.Msg.GET_WORLD_PROPERTY_NAME_DROPDOWN_6 = 'random y';
/// auto generated
Blockly.Msg.GET_WORLD_PROPERTY_FIELD_2 = 'of the world';
/// auto generated
Blockly.Msg.GET_WORLD_PROPERTY_TOOLTIP = 'Get a property of the world';
/// auto generated
Blockly.Msg.GET_WORLD_PROPERTY_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.World.html';
/// auto generated
Blockly.Msg.SET_WORLD_BOUNDS_FIELD_1 = 'set world bounds';
/// auto generated
Blockly.Msg.SET_WORLD_BOUNDS_FIELD_2 = 'x:';
/// auto generated
Blockly.Msg.SET_WORLD_BOUNDS_FIELD_3 = 'y:';
/// auto generated
Blockly.Msg.SET_WORLD_BOUNDS_FIELD_4 = 'width:';
/// auto generated
Blockly.Msg.SET_WORLD_BOUNDS_FIELD_5 = 'height:';
/// auto generated
Blockly.Msg.SET_WORLD_BOUNDS_TOOLTIP = 'Updates the size of the world and sets the leftmost corner';
/// auto generated
Blockly.Msg.SET_WORLD_BOUNDS_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.World.html#setBounds';
/// auto generated
Blockly.Msg.CREATE_POINT_FIELD_1 = 'Create Point';
/// auto generated
Blockly.Msg.CREATE_POINT_FIELD_2 = 'X';
/// auto generated
Blockly.Msg.CREATE_POINT_FIELD_3 = 'Y';
/// auto generated
Blockly.Msg.CREATE_POINT_TOOLTIP = 'Makes a point type. This is a combination of an x and y value which is used to represent either a position, or a combination of width and height.';
/// auto generated
Blockly.Msg.CREATE_POINT_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Point.html';
/// auto generated
Blockly.Msg.GET_WORLD_REFERENCE_FIELD_1 = 'world';
/// auto generated
Blockly.Msg.GET_WORLD_REFERENCE_TOOLTIP = 'Returns a reference to the game world. It functions as a group.';
/// auto generated
Blockly.Msg.GET_WORLD_REFERENCE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.World.html';
/// auto generated
Blockly.Msg.SET_GAME_OBJECT_POINT_FIELD_FIELD_1 = 'set point field';
/// auto generated
Blockly.Msg.SET_GAME_OBJECT_POINT_FIELD_FIELD_2 = 'of';
/// auto generated
Blockly.Msg.SET_GAME_OBJECT_POINT_FIELD_FIELD_3 = 'to';
/// auto generated
Blockly.Msg.SET_GAME_OBJECT_POINT_FIELD_TOOLTIP = 'Set a point property on the object';
/// auto generated
Blockly.Msg.SET_GAME_OBJECT_POINT_FIELD_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html';
/// auto generated
Blockly.Msg.GET_GAME_OBJECT_POINT_FIELD_FIELD_1 = 'get point field';
/// auto generated
Blockly.Msg.GET_GAME_OBJECT_POINT_FIELD_FIELD_2 = 'of';
/// auto generated
Blockly.Msg.GET_GAME_OBJECT_POINT_FIELD_TOOLTIP = 'Get a point property on the object';
/// auto generated
Blockly.Msg.GET_GAME_OBJECT_POINT_FIELD_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html';
/// auto generated
Blockly.Msg.SET_GAME_OBJECT_NUMERIC_FIELD_FIELD_1 = 'set numeric field';
/// auto generated
Blockly.Msg.SET_GAME_OBJECT_NUMERIC_FIELD_FIELD_2 = 'of';
/// auto generated
Blockly.Msg.SET_GAME_OBJECT_NUMERIC_FIELD_FIELD_3 = 'to';
/// auto generated
Blockly.Msg.SET_GAME_OBJECT_NUMERIC_FIELD_TOOLTIP = 'Set a numeric property on the object';
/// auto generated
Blockly.Msg.SET_GAME_OBJECT_NUMERIC_FIELD_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html';
/// auto generated
Blockly.Msg.GET_GAME_OBJECT_NUMERIC_FIELD_FIELD_1 = 'get numeric field';
/// auto generated
Blockly.Msg.GET_GAME_OBJECT_NUMERIC_FIELD_FIELD_2 = 'of';
/// auto generated
Blockly.Msg.GET_GAME_OBJECT_NUMERIC_FIELD_TOOLTIP = 'Get a numeric property on the object';
/// auto generated
Blockly.Msg.GET_GAME_OBJECT_NUMERIC_FIELD_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html';
/// auto generated
Blockly.Msg.SET_GAME_OBJECT_BOOLEAN_FIELD_FIELD_1 = 'set boolean field';
/// auto generated
Blockly.Msg.SET_GAME_OBJECT_BOOLEAN_FIELD_FIELD_2 = 'of';
/// auto generated
Blockly.Msg.SET_GAME_OBJECT_BOOLEAN_FIELD_FIELD_3 = 'to';
/// auto generated
Blockly.Msg.SET_GAME_OBJECT_BOOLEAN_FIELD_TOOLTIP = 'Set a boolean property on the object';
/// auto generated
Blockly.Msg.SET_GAME_OBJECT_BOOLEAN_FIELD_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html';
/// auto generated
Blockly.Msg.GET_GAME_OBJECT_BOOLEAN_FIELD_FIELD_1 = 'get boolean field';
/// auto generated
Blockly.Msg.GET_GAME_OBJECT_BOOLEAN_FIELD_FIELD_2 = 'of';
/// auto generated
Blockly.Msg.GET_GAME_OBJECT_BOOLEAN_FIELD_TOOLTIP = 'Get a boolean property on the object';
/// auto generated
Blockly.Msg.GET_GAME_OBJECT_BOOLEAN_FIELD_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html';
/// auto generated
Blockly.Msg.SET_OBJECT_ANCHOR_FIELD_1 = 'set anchor for';
/// auto generated
Blockly.Msg.SET_OBJECT_ANCHOR_FIELD_2 = 'to';
/// auto generated
Blockly.Msg.SET_OBJECT_ANCHOR_FIELD_3 = 'x';
/// auto generated
Blockly.Msg.SET_OBJECT_ANCHOR_FIELD_4 = 'y';
/// auto generated
Blockly.Msg.SET_OBJECT_ANCHOR_TOOLTIP = 'Sets an object\'s anchor.';
/// auto generated
Blockly.Msg.SET_OBJECT_ANCHOR_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#anchor';
/// auto generated
Blockly.Msg.KILL_OBJECT_FIELD_1 = 'kill';
/// auto generated
Blockly.Msg.KILL_OBJECT_TOOLTIP = 'Will kill the object setting making it non-existent. Reverse with revive.';
/// auto generated
Blockly.Msg.KILL_OBJECT_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#kill';
/// auto generated
Blockly.Msg.FAINT_OBJECT_FIELD_1 = 'faint';
/// auto generated
Blockly.Msg.FAINT_OBJECT_TOOLTIP = 'Will faint the object setting making it non-existent. Reverse with revive.';
/// auto generated
Blockly.Msg.FAINT_OBJECT_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#kill';
/// auto generated
Blockly.Msg.DESTROY_OBJECT_FIELD_1 = 'destroy';
/// auto generated
Blockly.Msg.DESTROY_OBJECT_TOOLTIP = 'Will remove the object from the game and memory, after which it can no longer be accessed.';
/// auto generated
Blockly.Msg.DESTROY_OBJECT_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Component.Destroy.html';
/// auto generated
Blockly.Msg.SET_SCALE_FIELD_1 = 'Scale';
/// auto generated
Blockly.Msg.SET_SCALE_FIELD_2 = 'by';
/// auto generated
Blockly.Msg.SET_SCALE_FIELD_3 = 'X';
/// auto generated
Blockly.Msg.SET_SCALE_FIELD_4 = 'Y';
/// auto generated
Blockly.Msg.SET_SCALE_TOOLTIP = 'Sets the given object\'s width and height.';
/// auto generated
Blockly.Msg.SET_SCALE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#scale';
/// auto generated
Blockly.Msg.SET_SCALE_VI_FIELD_1 = 'scale';
/// auto generated
Blockly.Msg.SET_SCALE_VI_FIELD_2 = 'by';
/// auto generated
Blockly.Msg.SET_SCALE_VI_FIELD_3 = 'x';
/// auto generated
Blockly.Msg.SET_SCALE_VI_FIELD_4 = 'y';
/// auto generated
Blockly.Msg.SET_SCALE_VI_TOOLTIP = 'Sets the given object\'s width and height.';
/// auto generated
Blockly.Msg.SET_SCALE_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#scale';
/// auto generated
Blockly.Msg.SET_POS_FIELD_1 = 'Set';
/// auto generated
Blockly.Msg.SET_POS_PARAM_DROPDOWN_1 = 'x';
/// auto generated
Blockly.Msg.SET_POS_PARAM_DROPDOWN_2 = 'y';
/// auto generated
Blockly.Msg.SET_POS_FIELD_2 = 'on';
/// auto generated
Blockly.Msg.SET_POS_FIELD_3 = 'to';
/// auto generated
Blockly.Msg.SET_POS_TOOLTIP = 'Sets the individual x or y coordinate of an object.';
/// auto generated
Blockly.Msg.SET_POS_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#position';
/// auto generated
Blockly.Msg.OBJECT_SET_TO_FIELD_1 = 'for';
/// auto generated
Blockly.Msg.OBJECT_SET_TO_FIELD_2 = 'set x to';
/// auto generated
Blockly.Msg.OBJECT_SET_TO_FIELD_3 = 'set y to';
/// auto generated
Blockly.Msg.OBJECT_SET_TO_TOOLTIP = 'Sets the x and y fields of an object.';
/// auto generated
Blockly.Msg.OBJECT_SET_TO_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Point.html#setTo';
/// auto generated
Blockly.Msg.SET_VELOCITY_FIELD_1 = 'Set Velocity';
/// auto generated
Blockly.Msg.SET_VELOCITY_FIELD_2 = 'on';
/// auto generated
Blockly.Msg.SET_VELOCITY_FIELD_3 = 'to';
/// auto generated
Blockly.Msg.SET_VELOCITY_TOOLTIP = 'Sets an objects velocity. This is a combination of speed and direction.';
/// auto generated
Blockly.Msg.SET_VELOCITY_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.Body.html#velocity';
/// auto generated
Blockly.Msg.GET_PARAM_FIELD_1 = 'get';
/// auto generated
Blockly.Msg.GET_PARAM_FIELD_2 = 'from object';
/// auto generated
Blockly.Msg.GET_PARAM_TOOLTIP = 'Gets a given numeric field from an object.';
/// auto generated
Blockly.Msg.GET_PARAM_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#toc-4';
/// auto generated
Blockly.Msg.OBJECT_INCAMERA_FIELD_1 = 'is';
/// auto generated
Blockly.Msg.OBJECT_INCAMERA_FIELD_2 = 'in camera?';
/// auto generated
Blockly.Msg.OBJECT_INCAMERA_TOOLTIP = 'Checks if an object is inside the boundaries of the camera.';
/// auto generated
Blockly.Msg.OBJECT_INCAMERA_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Component.InCamera.html';
/// auto generated
Blockly.Msg.GET_CAMERA_FIELD_1 = 'get camera';
/// auto generated
Blockly.Msg.GET_CAMERA_TOOLTIP = 'Returns a reference to the camera.';
/// auto generated
Blockly.Msg.GET_CAMERA_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Camera.html';
/// auto generated
Blockly.Msg.CAMERA_FOLLOW_FIELD_1 = 'make camera follow';
/// auto generated
Blockly.Msg.CAMERA_FOLLOW_TOOLTIP = 'Make the camera follow the specified game object';
/// auto generated
Blockly.Msg.CAMERA_FOLLOW_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Camera.html#follow';
/// auto generated
Blockly.Msg.GET_BOUNDS_FIELD_1 = 'Get bounds of';
/// auto generated
Blockly.Msg.GET_BOUNDS_TOOLTIP = 'Gets the rectangular bounds of most objects in the game.';
/// auto generated
Blockly.Msg.GET_BOUNDS_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#getBounds';
/// auto generated
Blockly.Msg.GET_ROTATION_FIELD_1 = 'get rotation';
/// auto generated
Blockly.Msg.GET_ROTATION_TOOLTIP = 'Finds the rotation (in degrees) of a Game Object.';
/// auto generated
Blockly.Msg.GET_ROTATION_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#angle';
/// auto generated
Blockly.Msg.ROTATE_FIELD_1 = 'rotate';
/// auto generated
Blockly.Msg.ROTATE_FIELD_2 = 'by';
/// auto generated
Blockly.Msg.ROTATE_FIELD_3 = 'degrees';
/// auto generated
Blockly.Msg.ROTATE_TOOLTIP = 'Rotates a game object by the given angle in degrees. Negative numbers will rotate it the opposite direction.';
/// auto generated
Blockly.Msg.ROTATE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#angle';
/// auto generated
Blockly.Msg.SET_ROTATION_FIELD_1 = 'set the rotation of';
/// auto generated
Blockly.Msg.SET_ROTATION_FIELD_2 = 'to';
/// auto generated
Blockly.Msg.SET_ROTATION_FIELD_3 = 'degrees';
/// auto generated
Blockly.Msg.SET_ROTATION_TOOLTIP = 'Directly sets the rotation (in degrees) of this game object to the given value.';
/// auto generated
Blockly.Msg.SET_ROTATION_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#angle';
/// auto generated
Blockly.Msg.GET_LOCAL_BOUNDS_FIELD_1 = 'get local bounds of';
/// auto generated
Blockly.Msg.GET_LOCAL_BOUNDS_TOOLTIP = 'Gets the rectangular bounds of an object. Bounds are relative to the object itself instead of the world.';
/// auto generated
Blockly.Msg.GET_LOCAL_BOUNDS_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#getLocalBounds';
/// auto generated
Blockly.Msg.RESET_FIELD_1 = 'reset object';
/// auto generated
Blockly.Msg.RESET_FIELD_2 = 'x';
/// auto generated
Blockly.Msg.RESET_FIELD_3 = 'y';
/// auto generated
Blockly.Msg.RESET_TOOLTIP = 'Gets most objects ready to play again in various ways and treats it like new. Specifically, moves it to a new position then makes sure it is visible, rendering, alive, and actually exists in the game world.';
/// auto generated
Blockly.Msg.RESET_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#reset';
/// auto generated
Blockly.Msg.REVIVE_FIELD_1 = 'revive';
/// auto generated
Blockly.Msg.REVIVE_TOOLTIP = 'Brings a \'dead\' Game Object back to life. Makes sure it counts as alive, existing, and visible. Will send an event named onRevived.';
/// auto generated
Blockly.Msg.REVIVE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sprite.html#revive';
/// auto generated
Blockly.Msg.ADD_TEXT_FIELD_1 = 'add text at';
/// auto generated
Blockly.Msg.ADD_TEXT_FIELD_2 = 'x';
/// auto generated
Blockly.Msg.ADD_TEXT_FIELD_3 = 'y';
/// auto generated
Blockly.Msg.ADD_TEXT_FIELD_4 = 'initial text';
/// auto generated
Blockly.Msg.ADD_TEXT_FIELD_5 = 'font size';
/// auto generated
Blockly.Msg.ADD_TEXT_FIELD_6 = 'font colour';
/// auto generated
Blockly.Msg.ADD_TEXT_TOOLTIP = 'Add text to the screen at the specified location';
/// auto generated
Blockly.Msg.ADD_TEXT_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.GameObjectFactory.html#text';
/// auto generated
Blockly.Msg.SET_TEXT_FIELD_1 = 'set text for';
/// auto generated
Blockly.Msg.SET_TEXT_FIELD_2 = 'to';
/// auto generated
Blockly.Msg.SET_TEXT_TOOLTIP = 'Sets what phaser text will display on the screen.';
/// auto generated
Blockly.Msg.SET_TEXT_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Text.html#setText';
/// auto generated
Blockly.Msg.SET_TEXT_VI_FIELD_1 = 'set text for';
/// auto generated
Blockly.Msg.SET_TEXT_VI_FIELD_2 = 'to';
/// auto generated
Blockly.Msg.SET_TEXT_VI_TOOLTIP = 'Sets what phaser text will display on the screen.';
/// auto generated
Blockly.Msg.SET_TEXT_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Text.html#setText';
/// auto generated
Blockly.Msg.CREATE_BITMAPFONT_FIELD_1 = 'Create Font';
/// auto generated
Blockly.Msg.CREATE_BITMAPFONT_FIELD_2 = 'Tag';
/// auto generated
Blockly.Msg.CREATE_BITMAPFONT_FIELD_3 = 'Source';
/// auto generated
Blockly.Msg.CREATE_BITMAPFONT_FIELD_4 = 'XML';
/// auto generated
Blockly.Msg.CREATE_BITMAPFONT_TOOLTIP = 'Loads a font into the game. These don\'t work like normal fonts. See the help for more info.';
/// auto generated
Blockly.Msg.CREATE_BITMAPFONT_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Loader.html#bitmapFont';
/// auto generated
Blockly.Msg.DRAWCIRCLE_FIELD_1 = 'draw circle at position';
/// auto generated
Blockly.Msg.DRAWCIRCLE_FIELD_2 = 'x:';
/// auto generated
Blockly.Msg.DRAWCIRCLE_FIELD_3 = 'y:';
/// auto generated
Blockly.Msg.DRAWCIRCLE_FIELD_4 = 'with diameter:';
/// auto generated
Blockly.Msg.DRAWCIRCLE_TOOLTIP = 'Draws a circle at a given position in the world. Doesn\'t work on its own. Put it inside the \'fill shapes with\' block.';
/// auto generated
Blockly.Msg.DRAWCIRCLE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Graphics.html#drawCircle';
/// auto generated
Blockly.Msg.GET_OBJECT_WIDTH_FIELD_1 = 'get width of ';
/// auto generated
Blockly.Msg.GET_OBJECT_WIDTH_TOOLTIP = 'Gets the width of an object.';
/// auto generated
Blockly.Msg.GET_OBJECT_WIDTH_HELP_URL = 'https://photonstorm.github.io/phaser-ce/PIXI.Sprite.html#width';
/// auto generated
Blockly.Msg.SET_OBJECT_WIDTH_FIELD_1 = 'set width of ';
/// auto generated
Blockly.Msg.SET_OBJECT_WIDTH_TOOLTIP = 'Sets the width of an object.';
/// auto generated
Blockly.Msg.SET_OBJECT_WIDTH_HELP_URL = 'https://photonstorm.github.io/phaser-ce/PIXI.Sprite.html#width';
/// auto generated
Blockly.Msg.ADDEMITTER_FIELD_1 = 'add emitter';
/// auto generated
Blockly.Msg.ADDEMITTER_FIELD_2 = 'x';
/// auto generated
Blockly.Msg.ADDEMITTER_FIELD_3 = 'y';
/// auto generated
Blockly.Msg.ADDEMITTER_FIELD_4 = 'maxParticles';
/// auto generated
Blockly.Msg.ADDEMITTER_TOOLTIP = 'Create a particle emitter';
/// auto generated
Blockly.Msg.ADDEMITTER_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Particles.Arcade.Emitter.html';
/// auto generated
Blockly.Msg.EMITTER_MAKE_PARTICLES_FIELD_1 = 'on emitter';
/// auto generated
Blockly.Msg.EMITTER_MAKE_PARTICLES_FIELD_2 = 'make particles';
/// auto generated
Blockly.Msg.EMITTER_MAKE_PARTICLES_FIELD_3 = 'keys';
/// auto generated
Blockly.Msg.EMITTER_MAKE_PARTICLES_FIELD_4 = 'frames';
/// auto generated
Blockly.Msg.EMITTER_MAKE_PARTICLES_FIELD_5 = 'quantity';
/// auto generated
Blockly.Msg.EMITTER_MAKE_PARTICLES_FIELD_6 = 'collide';
/// auto generated
Blockly.Msg.EMITTER_MAKE_PARTICLES_FIELD_7 = 'collide world';
/// auto generated
Blockly.Msg.EMITTER_MAKE_PARTICLES_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Particles.Arcade.Emitter.html#makeParticles';
/// auto generated
Blockly.Msg.EMITTER_MAKE_PARTICLES_TOOLTIP = 'Generate a new set of particles for this emitter';
/// auto generated
Blockly.Msg.EMITTERS_MAKE_PARTICLES_FIELD_1 = 'on emitter';
/// auto generated
Blockly.Msg.EMITTERS_MAKE_PARTICLES_FIELD_2 = 'make particles from';
/// auto generated
Blockly.Msg.EMITTERS_MAKE_PARTICLES_TAG_TEXT_DEFAULT = 'image tag';
/// auto generated
Blockly.Msg.EMITTERS_MAKE_PARTICLES_TOOLTIP = 'Generate a new set of particles for this emitter';
/// auto generated
Blockly.Msg.EMITTERS_MAKE_PARTICLES_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Particles.Arcade.Emitter.html#makeParticles';
/// auto generated
Blockly.Msg.EMITTERS_SET_ROTATION_FIELD_1 = 'on emitter,';
/// auto generated
Blockly.Msg.EMITTERS_SET_ROTATION_FIELD_2 = 'set rotation:';
/// auto generated
Blockly.Msg.EMITTERS_SET_ROTATION_FIELD_3 = 'min';
/// auto generated
Blockly.Msg.EMITTERS_SET_ROTATION_FIELD_4 = 'max';
/// auto generated
Blockly.Msg.EMITTERS_SET_ROTATION_TOOLTIP = 'Set the angular velocity constraints of the particles';
/// auto generated
Blockly.Msg.EMITTERS_SET_ROTATION_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Particles.Arcade.Emitter.html#setRotation';
/// auto generated
Blockly.Msg.EMITTERS_SET_ROTATION_VI_FIELD_1 = 'on emitter';
/// auto generated
Blockly.Msg.EMITTERS_SET_ROTATION_VI_FIELD_2 = 'set min/max angular velocity';
/// auto generated
Blockly.Msg.EMITTERS_SET_ROTATION_VI_FIELD_3 = 'min';
/// auto generated
Blockly.Msg.EMITTERS_SET_ROTATION_VI_FIELD_4 = 'max';
/// auto generated
Blockly.Msg.EMITTERS_SET_ROTATION_VI_TOOLTIP = 'Set the angular velocity constraints of the particles.';
/// auto generated
Blockly.Msg.EMITTERS_SET_ROTATION_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Particles.Arcade.Emitter.html#setRotation';
/// auto generated
Blockly.Msg.EMITTERS_START_FIELD_1 = 'on emitter,';
/// auto generated
Blockly.Msg.EMITTERS_START_FIELD_2 = 'start:';
/// auto generated
Blockly.Msg.EMITTERS_START_FIELD_3 = 'Should Burst?';
/// auto generated
Blockly.Msg.EMITTERS_START_FIELD_4 = 'Lifespan';
/// auto generated
Blockly.Msg.EMITTERS_START_FIELD_5 = 'Frequency';
/// auto generated
Blockly.Msg.EMITTERS_START_FIELD_6 = 'Quantity';
/// auto generated
Blockly.Msg.EMITTERS_START_TOOLTIP = 'Start emitting particles.';
/// auto generated
Blockly.Msg.EMITTERS_START_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Particles.Arcade.Emitter.html#start';
/// auto generated
Blockly.Msg.EMITTERS_START_VI_FIELD_1 = 'start emitter,';
/// auto generated
Blockly.Msg.EMITTERS_START_VI_FIELD_2 = 'explode';
/// auto generated
Blockly.Msg.EMITTERS_START_VI_FIELD_3 = 'lifespan (ms)';
/// auto generated
Blockly.Msg.EMITTERS_START_VI_FIELD_4 = 'frequency (ms)';
/// auto generated
Blockly.Msg.EMITTERS_START_VI_FIELD_5 = 'quantity';
/// auto generated
Blockly.Msg.EMITTERS_START_VI_TOOLTIP = 'Start emitting particles.';
/// auto generated
Blockly.Msg.EMITTERS_START_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Particles.Arcade.Emitter.html#start';
/// auto generated
Blockly.Msg.EMITTERS_SET_ALPHA_FIELD_1 = 'on emitter,';
/// auto generated
Blockly.Msg.EMITTERS_SET_ALPHA_FIELD_2 = 'set Alpha:';
/// auto generated
Blockly.Msg.EMITTERS_SET_ALPHA_FIELD_3 = 'min';
/// auto generated
Blockly.Msg.EMITTERS_SET_ALPHA_FIELD_4 = 'max';
/// auto generated
Blockly.Msg.EMITTERS_SET_ALPHA_FIELD_5 = 'rate';
/// auto generated
Blockly.Msg.EMITTERS_SET_ALPHA_TOOLTIP = 'Set the min and max alpha values for this emitter.';
/// auto generated
Blockly.Msg.EMITTERS_SET_ALPHA_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Particles.Arcade.Emitter.html#setAlpha';
/// auto generated
Blockly.Msg.EMITTERS_SET_ALPHA_VI_FIELD_1 = 'on emitter,';
/// auto generated
Blockly.Msg.EMITTERS_SET_ALPHA_VI_FIELD_2 = 'set alpha';
/// auto generated
Blockly.Msg.EMITTERS_SET_ALPHA_VI_FIELD_3 = 'min';
/// auto generated
Blockly.Msg.EMITTERS_SET_ALPHA_VI_FIELD_4 = 'max';
/// auto generated
Blockly.Msg.EMITTERS_SET_ALPHA_VI_FIELD_5 = 'rate';
/// auto generated
Blockly.Msg.EMITTERS_SET_ALPHA_VI_TOOLTIP = 'Set the min and max alpha values for this emitter.';
/// auto generated
Blockly.Msg.EMITTERS_SET_ALPHA_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Particles.Arcade.Emitter.html#setAlpha';
/// auto generated
Blockly.Msg.EMITTERS_SET_SCALE_FIELD_1 = 'on emitter,';
/// auto generated
Blockly.Msg.EMITTERS_SET_SCALE_FIELD_2 = 'set Scale:';
/// auto generated
Blockly.Msg.EMITTERS_SET_SCALE_FIELD_3 = 'min X';
/// auto generated
Blockly.Msg.EMITTERS_SET_SCALE_FIELD_4 = 'max X';
/// auto generated
Blockly.Msg.EMITTERS_SET_SCALE_FIELD_5 = 'min Y';
/// auto generated
Blockly.Msg.EMITTERS_SET_SCALE_FIELD_6 = 'max Y';
/// auto generated
Blockly.Msg.EMITTERS_SET_SCALE_FIELD_7 = 'rate';
/// auto generated
Blockly.Msg.EMITTERS_SET_SCALE_TOOLTIP = 'Set the minimum/maximum scale for particles and the rate to go between.';
/// auto generated
Blockly.Msg.EMITTERS_SET_SCALE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Particles.Arcade.Emitter.html#setScale';
/// auto generated
Blockly.Msg.EMITTERS_SET_SCALE_VI_FIELD_1 = 'on emitter,';
/// auto generated
Blockly.Msg.EMITTERS_SET_SCALE_VI_FIELD_2 = 'set scale';
/// auto generated
Blockly.Msg.EMITTERS_SET_SCALE_VI_FIELD_3 = 'min x';
/// auto generated
Blockly.Msg.EMITTERS_SET_SCALE_VI_FIELD_4 = 'max x';
/// auto generated
Blockly.Msg.EMITTERS_SET_SCALE_VI_FIELD_5 = 'min y';
/// auto generated
Blockly.Msg.EMITTERS_SET_SCALE_VI_FIELD_6 = 'max y';
/// auto generated
Blockly.Msg.EMITTERS_SET_SCALE_VI_FIELD_7 = 'rate';
/// auto generated
Blockly.Msg.EMITTERS_SET_SCALE_VI_TOOLTIP = 'Set the minimum/maximum scale for particles and the rate to go between.';
/// auto generated
Blockly.Msg.EMITTERS_SET_SCALE_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Particles.Arcade.Emitter.html#setScale';
/// auto generated
Blockly.Msg.SET_EMIT_FROM_FIELD_1 = 'on';
/// auto generated
Blockly.Msg.SET_EMIT_FROM_FIELD_2 = 'set emit from';
/// auto generated
Blockly.Msg.SET_EMIT_FROM_CORD_DROPDOWN_1 = 'X';
/// auto generated
Blockly.Msg.SET_EMIT_FROM_CORD_DROPDOWN_2 = 'Y';
/// auto generated
Blockly.Msg.SET_EMIT_FROM_FIELD_3 = 'to';
/// auto generated
Blockly.Msg.SET_EMIT_FROM_TOOLTIP = 'Set where the particles emit from, by individual coordinate.';
/// auto generated
Blockly.Msg.SET_EMIT_FROM_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Particles.Arcade.Emitter.html#emitX';
/// auto generated
Blockly.Msg.EMITTERS_SET_SPEED_FIELD_1 = 'on emitter,';
/// auto generated
Blockly.Msg.EMITTERS_SET_SPEED_FIELD_2 = 'set Speed:';
/// auto generated
Blockly.Msg.EMITTERS_SET_SPEED_FIELD_3 = 'min X';
/// auto generated
Blockly.Msg.EMITTERS_SET_SPEED_FIELD_4 = 'max X';
/// auto generated
Blockly.Msg.EMITTERS_SET_SPEED_FIELD_5 = 'min Y';
/// auto generated
Blockly.Msg.EMITTERS_SET_SPEED_FIELD_6 = 'max Y';
/// auto generated
Blockly.Msg.EMITTERS_SET_SPEED_TOOLTIP = 'Sets the minimum and maximum speeds that an emitted particle will go.';
/// auto generated
Blockly.Msg.EMITTERS_SET_SPEED_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Particles.Arcade.Emitter.html#minParticleSpeed';
/// auto generated
Blockly.Msg.EMITTERS_SET_SPEED_VI_FIELD_1 = 'on emitter';
/// auto generated
Blockly.Msg.EMITTERS_SET_SPEED_VI_FIELD_2 = 'set speed';
/// auto generated
Blockly.Msg.EMITTERS_SET_SPEED_VI_FIELD_3 = 'min x';
/// auto generated
Blockly.Msg.EMITTERS_SET_SPEED_VI_FIELD_4 = 'max x';
/// auto generated
Blockly.Msg.EMITTERS_SET_SPEED_VI_FIELD_5 = 'min y';
/// auto generated
Blockly.Msg.EMITTERS_SET_SPEED_VI_FIELD_6 = 'max y';
/// auto generated
Blockly.Msg.EMITTERS_SET_SPEED_VI_TOOLTIP = 'Sets the minimum and maximum speeds that an emitted particle will go.';
/// auto generated
Blockly.Msg.EMITTERS_SET_SPEED_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Particles.Arcade.Emitter.html#minParticleSpeed';
/// auto generated
Blockly.Msg.EMITTERS_SET_GRAVITY_FIELD_1 = 'on emitter,';
/// auto generated
Blockly.Msg.EMITTERS_SET_GRAVITY_FIELD_2 = 'set Gravity:';
/// auto generated
Blockly.Msg.EMITTERS_SET_GRAVITY_TOOLTIP = 'Set the gravity of generated particles.';
/// auto generated
Blockly.Msg.EMITTERS_SET_GRAVITY_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Particles.Arcade.Emitter.html#gravity';
/// auto generated
Blockly.Msg.EMITTERS_SET_GRAVITY_VI_FIELD_1 = 'on emitter';
/// auto generated
Blockly.Msg.EMITTERS_SET_GRAVITY_VI_FIELD_2 = 'set gravity:';
/// auto generated
Blockly.Msg.EMITTERS_SET_GRAVITY_VI_TOOLTIP = 'Set the gravity of generated particles';
/// auto generated
Blockly.Msg.EMITTERS_SET_GRAVITY_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Particles.Arcade.Emitter.html#gravity';
/// auto generated
Blockly.Msg.EMITTERS_SET_WIDTH_FIELD_1 = 'on emitter,';
/// auto generated
Blockly.Msg.EMITTERS_SET_WIDTH_FIELD_2 = 'set width:';
/// auto generated
Blockly.Msg.EMITTERS_SET_WIDTH_TOOLTIP = 'Sets the width of the area in which particles will be emitted.';
/// auto generated
Blockly.Msg.EMITTERS_SET_WIDTH_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Particles.Arcade.Emitter.html#width';
/// auto generated
Blockly.Msg.DEBUG_SPRITE_FIELD_1 = 'write debug for sprite';
/// auto generated
Blockly.Msg.DEBUG_SPRITE_FIELD_2 = 'at x';
/// auto generated
Blockly.Msg.DEBUG_SPRITE_FIELD_3 = 'y';
/// auto generated
Blockly.Msg.DEBUG_SPRITE_TOOLTIP = 'Draws various information useful for debugging about the specified sprite at the given world coordinates.';
/// auto generated
Blockly.Msg.DEBUG_SPRITE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Utils.Debug.html#spriteInfo';
/// auto generated
Blockly.Msg.STATEMANAGER_ADD_STATE_FIELD_1 = 'add state';
/// auto generated
Blockly.Msg.STATEMANAGER_ADD_STATE_FIELD_2 = 'tagged';
/// auto generated
Blockly.Msg.STATEMANAGER_ADD_STATE_KEY_TEXT_DEFAULT = 'tag';
/// auto generated
Blockly.Msg.STATEMANAGER_ADD_STATE_FIELD_3 = 'to state manager';
/// auto generated
Blockly.Msg.STATEMANAGER_ADD_STATE_TOOLTIP = 'Adds a state to the game engine, this should be an instance of a state class.';
/// auto generated
Blockly.Msg.STATEMANAGER_START_STATE_FIELD_1 = 'start state with tag';
/// auto generated
Blockly.Msg.STATEMANAGER_START_STATE_TAG_TEXT_DEFAULT = 'tag';
/// auto generated
Blockly.Msg.STATEMANAGER_START_STATE_TOOLTIP = 'Start the specified state, this should be a state that has been added to the game engine';
/// auto generated
Blockly.Msg.STATEMANAGER_START_STATE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.StateManager.html#start';
/// auto generated
Blockly.Msg.RECTANGLE_CREATE_FIELD_1 = 'make rectangle';
/// auto generated
Blockly.Msg.RECTANGLE_CREATE_FIELD_2 = 'x';
/// auto generated
Blockly.Msg.RECTANGLE_CREATE_FIELD_3 = 'y';
/// auto generated
Blockly.Msg.RECTANGLE_CREATE_FIELD_4 = 'width';
/// auto generated
Blockly.Msg.RECTANGLE_CREATE_FIELD_5 = 'height';
/// auto generated
Blockly.Msg.RECTANGLE_CREATE_TOOLTIP = 'Defines a rectangle, can be used for cropping, alignment and other tasks';
/// auto generated
Blockly.Msg.RECTANGLE_CREATE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Rectangle.html';
/// auto generated
Blockly.Msg.POINT_CREATE_FIELD_1 = 'make point';
/// auto generated
Blockly.Msg.POINT_CREATE_FIELD_2 = 'x';
/// auto generated
Blockly.Msg.POINT_CREATE_FIELD_3 = 'y';
/// auto generated
Blockly.Msg.POINT_CREATE_TOOLTIP = 'Defines a point which represents a location in 2D';
/// auto generated
Blockly.Msg.POINT_CREATE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Point.html';
/// auto generated
Blockly.Msg.POINT_GET_ELEMENT_FIELD_1 = 'get point.';
/// auto generated
Blockly.Msg.POINT_GET_ELEMENT_ELEMENT_DROPDOWN_1 = 'x';
/// auto generated
Blockly.Msg.POINT_GET_ELEMENT_ELEMENT_DROPDOWN_2 = 'y';
/// auto generated
Blockly.Msg.POINT_GET_ELEMENT_FIELD_2 = 'of';
/// auto generated
Blockly.Msg.POINT_GET_ELEMENT_TOOLTIP = 'Defines a point which represents a location in 2D';
/// auto generated
Blockly.Msg.POINT_GET_ELEMENT_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Point.html';
/// auto generated
Blockly.Msg.POINT_SET_ELEMENT_FIELD_1 = 'set point.';
/// auto generated
Blockly.Msg.POINT_SET_ELEMENT_ELEMENT_DROPDOWN_1 = 'x';
/// auto generated
Blockly.Msg.POINT_SET_ELEMENT_ELEMENT_DROPDOWN_2 = 'y';
/// auto generated
Blockly.Msg.POINT_SET_ELEMENT_FIELD_2 = 'of';
/// auto generated
Blockly.Msg.POINT_SET_ELEMENT_FIELD_3 = 'to';
/// auto generated
Blockly.Msg.POINT_SET_ELEMENT_TOOLTIP = 'Defines a point which represents a location in 2D';
/// auto generated
Blockly.Msg.POINT_SET_ELEMENT_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Point.html';
/// auto generated
Blockly.Msg.POINT_SET_MAGNITUDE_FIELD_1 = 'set magnitude for';
/// auto generated
Blockly.Msg.POINT_SET_MAGNITUDE_FIELD_2 = 'to';
/// auto generated
Blockly.Msg.POINT_SET_MAGNITUDE_TOOLTIP = 'Sets the magnitude of the point';
/// auto generated
Blockly.Msg.POINT_SET_MAGNITUDE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Point.html#setMagnitude';
/// auto generated
Blockly.Msg.POINTS_ADD_FIELD_1 = 'add points';
/// auto generated
Blockly.Msg.POINTS_ADD_FIELD_2 = 'and';
/// auto generated
Blockly.Msg.POINTS_ADD_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Point.html#.add';
/// auto generated
Blockly.Msg.POINTS_ADD_TOOLTIP = 'Adds the two points and returns the result';
/// auto generated
Blockly.Msg.POINTS_SUBTRACT_FIELD_1 = 'subtract points';
/// auto generated
Blockly.Msg.POINTS_SUBTRACT_FIELD_2 = 'and';
/// auto generated
Blockly.Msg.POINTS_SUBTRACT_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Point.html#.subtract';
/// auto generated
Blockly.Msg.POINTS_SUBTRACT_TOOLTIP = 'Adds the two points and returns the result';
/// auto generated
Blockly.Msg.POINTS_ANGLE_BETWEEN_FIELD_1 = 'angle between';
/// auto generated
Blockly.Msg.POINTS_ANGLE_BETWEEN_FIELD_2 = 'and';
/// auto generated
Blockly.Msg.POINTS_ANGLE_BETWEEN_TOOLTIP = 'Returns the angle in radians between the two point objects';
/// auto generated
Blockly.Msg.POINTS_ANGLE_BETWEEN_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Point.html#.angle';
/// auto generated
Blockly.Msg.POINTS_DISTANCE_FIELD_1 = 'distance between';
/// auto generated
Blockly.Msg.POINTS_DISTANCE_FIELD_2 = 'and';
/// auto generated
Blockly.Msg.POINTS_DISTANCE_TOOLTIP = 'Returns the distance between the two point objects';
/// auto generated
Blockly.Msg.POINTS_DISTANCE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Point.html#.distance';
/// auto generated
Blockly.Msg.POINTS_DIVIDE_FIELD_1 = 'divide';
/// auto generated
Blockly.Msg.POINTS_DIVIDE_FIELD_2 = 'and';
/// auto generated
Blockly.Msg.POINTS_DIVIDE_TOOLTIP = 'Returns a new point p = [a.x / b.x, a.y / b.y]';
/// auto generated
Blockly.Msg.POINTS_DIVIDE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Point.html#.divide';
/// auto generated
Blockly.Msg.POINTS_EQUALS_FIELD_1 = 'is equal to';
/// auto generated
Blockly.Msg.POINTS_EQUALS_FIELD_2 = '?';
/// auto generated
Blockly.Msg.POINTS_EQUALS_TOOLTIP = 'Determines if two points are equal';
/// auto generated
Blockly.Msg.POINTS_EQUALS_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Point.html#.equals';
/// auto generated
Blockly.Msg.POINTS_INTERPOLATE_FIELD_1 = 'interpolate between A';
/// auto generated
Blockly.Msg.POINTS_INTERPOLATE_FIELD_2 = 'and B';
/// auto generated
Blockly.Msg.POINTS_INTERPOLATE_FIELD_3 = 'percent to B';
/// auto generated
Blockly.Msg.POINTS_INTERPOLATE_TOOLTIP = 'Interpolate between two points, the percent (0.0 - 1.0) determines how far towards the second point (1 - F) * A + F * B';
/// auto generated
Blockly.Msg.POINTS_INTERPOLATE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Point.html#.interpolate';
/// auto generated
Blockly.Msg.POINTS_MULTIPLY_FIELD_1 = 'multiply';
/// auto generated
Blockly.Msg.POINTS_MULTIPLY_FIELD_2 = 'and';
/// auto generated
Blockly.Msg.POINTS_MULTIPLY_TOOLTIP = 'Multiply two points';
/// auto generated
Blockly.Msg.POINTS_MULTIPLY_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Point.html#.multiply';
/// auto generated
Blockly.Msg.POINTS_NEGATE_FIELD_1 = 'negate';
/// auto generated
Blockly.Msg.POINTS_NEGATE_TOOLTIP = 'Negate the point';
/// auto generated
Blockly.Msg.POINTS_NEGATE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Point.html#.negative';
/// auto generated
Blockly.Msg.POINTS_NORMALIZE_FIELD_1 = 'normalize';
/// auto generated
Blockly.Msg.POINTS_NORMALIZE_TOOLTIP = 'Normalize the point (make unit length)';
/// auto generated
Blockly.Msg.POINTS_NORMALIZE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Point.html#.normalize';
/// auto generated
Blockly.Msg.POINTS_PERPENDICULAR_FIELD_1 = 'find pependicular vector to';
/// auto generated
Blockly.Msg.POINTS_PERPENDICULAR_TOOLTIP = 'Find a perpendicular vector to this point';
/// auto generated
Blockly.Msg.POINTS_PERPENDICULAR_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Point.html#.perp';
/// auto generated
Blockly.Msg.CAMERA_FOLLOW_VI_FIELD_1 = 'make camera follow';
/// auto generated
Blockly.Msg.CAMERA_FOLLOW_VI_TOOLTIP = 'Make the camera follow the specified game object';
/// auto generated
Blockly.Msg.CAMERA_FOLLOW_VI_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Camera.html#follow';
/// auto generated
Blockly.Msg.CAMERA_FADE_FIELD_1 = 'fade screen to';
/// auto generated
Blockly.Msg.CAMERA_FADE_FIELD_2 = 'over';
/// auto generated
Blockly.Msg.CAMERA_FADE_FIELD_3 = 'milliseconds';
/// auto generated
Blockly.Msg.CAMERA_FADE_TOOLTIP = 'Fades the screen to the specified colour over time. Ends with the screen completely obscured.';
/// auto generated
Blockly.Msg.CAMERA_FADE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Camera.html#fade';
/// auto generated
Blockly.Msg.CAMERA_FLASH_FIELD_1 = 'flash screen to';
/// auto generated
Blockly.Msg.CAMERA_FLASH_FIELD_2 = 'then fade in over';
/// auto generated
Blockly.Msg.CAMERA_FLASH_FIELD_3 = 'milliseconds';
/// auto generated
Blockly.Msg.CAMERA_FLASH_TOOLTIP = 'Immediately covers the camera with the specified colour. Then fades back in over a given time. Useful for fading back in after fading out, or as a big hit effect.';
/// auto generated
Blockly.Msg.CAMERA_FLASH_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Camera.html#flash';
/// auto generated
Blockly.Msg.CAMERA_FOCUS_ON_FIELD_1 = 'focus camera on';
/// auto generated
Blockly.Msg.CAMERA_FOCUS_ON_TOOLTIP = 'Immediately centers the camera on the specified game object.';
/// auto generated
Blockly.Msg.CAMERA_FOCUS_ON_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Camera.html#focusOn';
/// auto generated
Blockly.Msg.CAMERA_FOCUS_ON_XY_FIELD_1 = 'focus camera on position at';
/// auto generated
Blockly.Msg.CAMERA_FOCUS_ON_XY_FIELD_2 = 'x';
/// auto generated
Blockly.Msg.CAMERA_FOCUS_ON_XY_FIELD_3 = 'y';
/// auto generated
Blockly.Msg.CAMERA_FOCUS_ON_XY_TOOLTIP = 'Immediately centers the camera on a given position.';
/// auto generated
Blockly.Msg.CAMERA_FOCUS_ON_XY_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Camera.html#focusOnXY';
/// auto generated
Blockly.Msg.CAMERA_RESET_FIELD_1 = 'reset camera';
/// auto generated
Blockly.Msg.CAMERA_RESET_TOOLTIP = 'Completely resets the camera. It goes back to (0, 0), stops following anything, and removes all effects such as shake or flash.';
/// auto generated
Blockly.Msg.CAMERA_RESET_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Camera.html#reset';
/// auto generated
Blockly.Msg.CAMERA_RESET_FX_FIELD_1 = 'reset camera effects';
/// auto generated
Blockly.Msg.CAMERA_RESET_FX_TOOLTIP = 'Removes visual effects from the camera such as fading in/out. Does not affect the position, follow target, or screen shake.';
/// auto generated
Blockly.Msg.CAMERA_RESET_FX_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Camera.html#resetFX';
/// auto generated
Blockly.Msg.CAMERA_SET_BOUNDS_TO_WORLD_FIELD_1 = 'set camera bounds to world bounds';
/// auto generated
Blockly.Msg.CAMERA_SET_BOUNDS_TO_WORLD_TOOLTIP = 'The camera bounds are not the size of what it shows, but the space it can move around in. This sets those bounds so that the camera can view the entire world, but nothing more.';
/// auto generated
Blockly.Msg.CAMERA_SET_BOUNDS_TO_WORLD_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Camera.html#setBoundsToWorld';
/// auto generated
Blockly.Msg.CAMERA_SET_POSITION_FIELD_1 = 'set camera position to';
/// auto generated
Blockly.Msg.CAMERA_SET_POSITION_FIELD_2 = 'x';
/// auto generated
Blockly.Msg.CAMERA_SET_POSITION_FIELD_3 = 'y';
/// auto generated
Blockly.Msg.CAMERA_SET_POSITION_TOOLTIP = 'Jumps the camera immediately to the given position. Note that the camera\'s position is its upper left corner, not its center.';
/// auto generated
Blockly.Msg.CAMERA_SET_POSITION_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Camera.html#setPosition';
/// auto generated
Blockly.Msg.CAMERA_SET_SIZE_FIELD_1 = 'set camera size';
/// auto generated
Blockly.Msg.CAMERA_SET_SIZE_FIELD_2 = 'width';
/// auto generated
Blockly.Msg.CAMERA_SET_SIZE_FIELD_3 = 'height';
/// auto generated
Blockly.Msg.CAMERA_SET_SIZE_TOOLTIP = 'Sets the size of the camera\'s view window.';
/// auto generated
Blockly.Msg.CAMERA_SET_SIZE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Camera.html#setSize';
/// auto generated
Blockly.Msg.CAMERA_SHAKE_FIELD_1 = 'shake the camera';
/// auto generated
Blockly.Msg.CAMERA_SHAKE_FIELD_2 = '% intensity';
/// auto generated
Blockly.Msg.CAMERA_SHAKE_DIRECTION_DROPDOWN_1 = 'horizontal and vertical';
/// auto generated
Blockly.Msg.CAMERA_SHAKE_DIRECTION_DROPDOWN_2 = 'vertically';
/// auto generated
Blockly.Msg.CAMERA_SHAKE_DIRECTION_DROPDOWN_3 = 'horizontally';
/// auto generated
Blockly.Msg.CAMERA_SHAKE_FIELD_3 = 'for';
/// auto generated
Blockly.Msg.CAMERA_SHAKE_FIELD_4 = 'milliseconds';
/// auto generated
Blockly.Msg.CAMERA_SHAKE_TOOLTIP = 'Screen shake. Great for impact effects, or just a little extra umph, but don\'t go overboard. The intensity goes from 0 to 1. % of bounds it can move';
/// auto generated
Blockly.Msg.CAMERA_SHAKE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Camera.html#shake';
/// auto generated
Blockly.Msg.CAMERA_UNFOLLOW_FIELD_1 = 'stop camera follow';
/// auto generated
Blockly.Msg.CAMERA_UNFOLLOW_TOOLTIP = 'Makes the camera stop following anything. Equivalent to making the camera follow null.';
/// auto generated
Blockly.Msg.CAMERA_UNFOLLOW_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Camera.html#unfollow';
/// auto generated
Blockly.Msg.CAMERA_FOLLOW_VI_STYLED_FIELD_1 = 'make camera follow';
/// auto generated
Blockly.Msg.CAMERA_FOLLOW_VI_STYLED_FIELD_2 = 'with style';
/// auto generated
Blockly.Msg.CAMERA_FOLLOW_VI_STYLED_STYLE_DROPDOWN_1 = 'lockon';
/// auto generated
Blockly.Msg.CAMERA_FOLLOW_VI_STYLED_STYLE_DROPDOWN_2 = 'platformer';
/// auto generated
Blockly.Msg.CAMERA_FOLLOW_VI_STYLED_STYLE_DROPDOWN_3 = 'topdown';
/// auto generated
Blockly.Msg.CAMERA_FOLLOW_VI_STYLED_STYLE_DROPDOWN_4 = 'topdown tight';
/// auto generated
Blockly.Msg.CAMERA_FOLLOW_VI_STYLED_TOOLTIP = 'Make the camera follow the specified game object';
/// auto generated
Blockly.Msg.CAMERA_FOLLOW_VI_STYLED_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Camera.html#follow';
/// auto generated
Blockly.Msg.SET_SOUND_BOOLEAN_MEMBER_FIELD_1 = 'set';
/// auto generated
Blockly.Msg.SET_SOUND_BOOLEAN_MEMBER_FIELD_2 = 'of';
/// auto generated
Blockly.Msg.SET_SOUND_BOOLEAN_MEMBER_FIELD_3 = 'to';
/// auto generated
Blockly.Msg.SET_SOUND_BOOLEAN_MEMBER_TOOLTIP = 'Set the selected member on the Sound';
/// auto generated
Blockly.Msg.SET_SOUND_BOOLEAN_MEMBER_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sound.html';
/// auto generated
Blockly.Msg.GET_SOUND_BOOLEAN_MEMBER_FIELD_1 = 'get';
/// auto generated
Blockly.Msg.GET_SOUND_BOOLEAN_MEMBER_FIELD_2 = 'of';
/// auto generated
Blockly.Msg.GET_SOUND_BOOLEAN_MEMBER_TOOLTIP = 'Get the selected member from the Sound';
/// auto generated
Blockly.Msg.GET_SOUND_BOOLEAN_MEMBER_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sound.html';
/// auto generated
Blockly.Msg.SET_SOUND_NUMERIC_MEMBER_FIELD_1 = 'set';
/// auto generated
Blockly.Msg.SET_SOUND_NUMERIC_MEMBER_FIELD_2 = 'of';
/// auto generated
Blockly.Msg.SET_SOUND_NUMERIC_MEMBER_FIELD_3 = 'to';
/// auto generated
Blockly.Msg.SET_SOUND_NUMERIC_MEMBER_TOOLTIP = 'Set the selected member on the Sound';
/// auto generated
Blockly.Msg.SET_SOUND_NUMERIC_MEMBER_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sound.html';
/// auto generated
Blockly.Msg.GET_SOUND_NUMERIC_MEMBER_FIELD_1 = 'get';
/// auto generated
Blockly.Msg.GET_SOUND_NUMERIC_MEMBER_FIELD_2 = 'of';
/// auto generated
Blockly.Msg.GET_SOUND_NUMERIC_MEMBER_TOOLTIP = 'Get the selected member from the Sound';
/// auto generated
Blockly.Msg.GET_SOUND_NUMERIC_MEMBER_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sound.html';
/// auto generated
Blockly.Msg.GET_SOUND_STRING_MEMBER_FIELD_1 = 'get';
/// auto generated
Blockly.Msg.GET_SOUND_STRING_MEMBER_FIELD_2 = 'of';
/// auto generated
Blockly.Msg.GET_SOUND_STRING_MEMBER_TOOLTIP = 'Get the selected member from the Sound';
/// auto generated
Blockly.Msg.GET_SOUND_STRING_MEMBER_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sound.html';
/// auto generated
Blockly.Msg.LOAD_SOUND_FIELD_1 = 'create sound';
/// auto generated
Blockly.Msg.LOAD_SOUND_FIELD_2 = 'tag';
/// auto generated
Blockly.Msg.LOAD_SOUND_FIELD_3 = 'source';
/// auto generated
Blockly.Msg.LOAD_SOUND_TOOLTIP = 'Loads an audio file so you can use it later. The tag is a name you use to access it later. The source is a file path. URLs work as a source too, but this is not recommended.';
/// auto generated
Blockly.Msg.LOAD_SOUND_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Loader.html#audio';
/// auto generated
Blockly.Msg.ADD_SOUND_FIELD_1 = 'add sound';
/// auto generated
Blockly.Msg.ADD_SOUND_FIELD_2 = 'at volume';
/// auto generated
Blockly.Msg.ADD_SOUND_FIELD_3 = 'looping';
/// auto generated
Blockly.Msg.ADD_SOUND_TOOLTIP = 'Add a Sound to the game';
/// auto generated
Blockly.Msg.ADD_SOUND_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.GameObjectFactory.html#audio';
/// auto generated
Blockly.Msg.PLAY_SOUND_FIELD_1 = 'play sound';
/// auto generated
Blockly.Msg.PLAY_SOUND_FIELD_2 = 'at volume';
/// auto generated
Blockly.Msg.PLAY_SOUND_FIELD_3 = 'looping';
/// auto generated
Blockly.Msg.PLAY_SOUND_TOOLTIP = 'Plays a sound that has been created. The volume goes from 0 to 1.';
/// auto generated
Blockly.Msg.PLAY_SOUND_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.SoundManager.html#play';
/// auto generated
Blockly.Msg.REMOVE_SOUND_FIELD_1 = 'stop all sounds tagged';
/// auto generated
Blockly.Msg.REMOVE_SOUND_TOOLTIP = 'Stops all sounds with the given tag.';
/// auto generated
Blockly.Msg.REMOVE_SOUND_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.SoundManager.html#removeByKey';
/// auto generated
Blockly.Msg.STOP_PAUSE_RESUME_SOUNDS_OPTION_DROPDOWN_1 = 'stop';
/// auto generated
Blockly.Msg.STOP_PAUSE_RESUME_SOUNDS_OPTION_DROPDOWN_2 = 'pause';
/// auto generated
Blockly.Msg.STOP_PAUSE_RESUME_SOUNDS_OPTION_DROPDOWN_3 = 'resume';
/// auto generated
Blockly.Msg.STOP_PAUSE_RESUME_SOUNDS_FIELD_1 = 'all sounds';
/// auto generated
Blockly.Msg.STOP_PAUSE_RESUME_SOUNDS_TOOLTIP = 'Stop - Stop everything dead. Pause - Stop everything, but remember where you were. Resume - Start playing paused sounds from where they left off.';
/// auto generated
Blockly.Msg.STOP_PAUSE_RESUME_SOUNDS_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.SoundManager.html#stopAll';
/// auto generated
Blockly.Msg.SOUND_FADE_IN_FIELD_1 = 'fade in sound';
/// auto generated
Blockly.Msg.SOUND_FADE_IN_FIELD_2 = 'over';
/// auto generated
Blockly.Msg.SOUND_FADE_IN_FIELD_3 = 'milliseconds loop';
/// auto generated
Blockly.Msg.SOUND_FADE_IN_TOOLTIP = 'Starts/Restarts the sound sets the volume to zero and increases from 0 to 1 over duration';
/// auto generated
Blockly.Msg.SOUND_FADE_IN_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sound.html#fadeIn';
/// auto generated
Blockly.Msg.SOUND_FADE_OUT_FIELD_1 = 'fade out sound';
/// auto generated
Blockly.Msg.SOUND_FADE_OUT_FIELD_2 = 'over';
/// auto generated
Blockly.Msg.SOUND_FADE_OUT_FIELD_3 = 'milliseconds';
/// auto generated
Blockly.Msg.SOUND_FADE_OUT_TOOLTIP = 'Fades the sounds volume to 0 over the given duration';
/// auto generated
Blockly.Msg.SOUND_FADE_OUT_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sound.html#fadeOut';
/// auto generated
Blockly.Msg.SOUND_FADE_TO_FIELD_1 = 'fade sound';
/// auto generated
Blockly.Msg.SOUND_FADE_TO_FIELD_2 = 'over';
/// auto generated
Blockly.Msg.SOUND_FADE_TO_FIELD_3 = 'milliseconds';
/// auto generated
Blockly.Msg.SOUND_FADE_TO_FIELD_4 = 'to volume';
/// auto generated
Blockly.Msg.SOUND_FADE_TO_TOOLTIP = 'Fades the sounds volume to a given volume over the given duration';
/// auto generated
Blockly.Msg.SOUND_FADE_TO_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sound.html#fadeTo';
/// auto generated
Blockly.Msg.SOUND_LOOP_FULL_FIELD_1 = 'loop sound';
/// auto generated
Blockly.Msg.SOUND_LOOP_FULL_FIELD_2 = 'at volume';
/// auto generated
Blockly.Msg.SOUND_LOOP_FULL_TOOLTIP = 'Loops the entire sound';
/// auto generated
Blockly.Msg.SOUND_LOOP_FULL_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sound.html#loopFull';
/// auto generated
Blockly.Msg.SOUND_PAUSE_FIELD_1 = 'pause sound';
/// auto generated
Blockly.Msg.SOUND_PAUSE_TOOLTIP = 'Pause the sound';
/// auto generated
Blockly.Msg.SOUND_PAUSE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sound.html#pause';
/// auto generated
Blockly.Msg.SOUND_RESUME_FIELD_1 = 'resume sound';
/// auto generated
Blockly.Msg.SOUND_RESUME_TOOLTIP = 'Resumes the sound';
/// auto generated
Blockly.Msg.SOUND_RESUME_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sound.html#resume';
/// auto generated
Blockly.Msg.SOUND_STOP_FIELD_1 = 'stop sound';
/// auto generated
Blockly.Msg.SOUND_STOP_TOOLTIP = 'Stops the sound';
/// auto generated
Blockly.Msg.SOUND_STOP_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sound.html#stop';
/// auto generated
Blockly.Msg.SOUND_PLAY_FIELD_1 = 'play sound';
/// auto generated
Blockly.Msg.SOUND_PLAY_FIELD_2 = 'starting at position';
/// auto generated
Blockly.Msg.SOUND_PLAY_FIELD_3 = 'at volume';
/// auto generated
Blockly.Msg.SOUND_PLAY_FIELD_4 = 'loop';
/// auto generated
Blockly.Msg.SOUND_PLAY_FIELD_5 = 'force restart';
/// auto generated
Blockly.Msg.SOUND_PLAY_TOOLTIP = 'Play the sound';
/// auto generated
Blockly.Msg.SOUND_PLAY_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sound.html#play';
/// auto generated
Blockly.Msg.SOUND_RESTART_FIELD_1 = 'restart sound';
/// auto generated
Blockly.Msg.SOUND_RESTART_FIELD_2 = 'starting at position';
/// auto generated
Blockly.Msg.SOUND_RESTART_FIELD_3 = 'at volume';
/// auto generated
Blockly.Msg.SOUND_RESTART_FIELD_4 = 'loop';
/// auto generated
Blockly.Msg.SOUND_RESTART_TOOLTIP = 'Restart the entire sound';
/// auto generated
Blockly.Msg.SOUND_RESTART_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Sound.html#restart';
/// auto generated
Blockly.Msg.LIST_FIND_CLOSEST_FIELD_1 = 'find the number closest to';
/// auto generated
Blockly.Msg.LIST_FIND_CLOSEST_FIELD_2 = 'in the list';
/// auto generated
Blockly.Msg.LIST_FIND_CLOSEST_TOOLTIP = 'Returns the value closest to the given number in a sorted, numeric list. If two values are equally close, it returns the higher one.';
/// auto generated
Blockly.Msg.LIST_FIND_CLOSEST_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.ArrayUtils.html#_findClosest';
/// auto generated
Blockly.Msg.LIST_GET_RANDOM_FIELD_1 = 'get a random item from';
/// auto generated
Blockly.Msg.LIST_GET_RANDOM_TOOLTIP = 'Returns a random item from the given list.';
/// auto generated
Blockly.Msg.LIST_GET_RANDOM_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.ArrayUtils.html#_getRandomItem';
/// auto generated
Blockly.Msg.NUMBER_LIST_FIELD_1 = 'create a list with every number from';
/// auto generated
Blockly.Msg.NUMBER_LIST_FIELD_2 = 'to';
/// auto generated
Blockly.Msg.NUMBER_LIST_TOOLTIP = 'Creates a list of numbers, in order within the specified range, including the start and end.';
/// auto generated
Blockly.Msg.NUMBER_LIST_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.ArrayUtils.html#_numberArray';
/// auto generated
Blockly.Msg.NUMBER_LIST_STEP_FIELD_1 = 'create a list from';
/// auto generated
Blockly.Msg.NUMBER_LIST_STEP_FIELD_2 = 'to';
/// auto generated
Blockly.Msg.NUMBER_LIST_STEP_FIELD_3 = 'stepping by';
/// auto generated
Blockly.Msg.NUMBER_LIST_STEP_TOOLTIP = 'Creates a list in the given range, counting up by a specified value. Does NOT include the end of the range.';
/// auto generated
Blockly.Msg.NUMBER_LIST_STEP_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.ArrayUtils.html#_numberArrayStep';
/// auto generated
Blockly.Msg.LIST_REMOVE_RANDOM_ITEM_FIELD_1 = 'get and remove a random item from';
/// auto generated
Blockly.Msg.LIST_REMOVE_RANDOM_ITEM_TOOLTIP = 'Removes a random item from a list and returns it. Note that this modifies the list.';
/// auto generated
Blockly.Msg.LIST_REMOVE_RANDOM_ITEM_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.ArrayUtils.html#_removeRandomItem';
/// auto generated
Blockly.Msg.LIST_SHUFFLE_FIELD_1 = 'shuffle';
/// auto generated
Blockly.Msg.LIST_SHUFFLE_TOOLTIP = 'Randomly rearranges the order of items in a list. Works for more than just cards.';
/// auto generated
Blockly.Msg.LIST_SHUFFLE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.ArrayUtils.html#_shuffle';
/// auto generated
Blockly.Msg.RANDOM_ANGLE_FIELD_1 = 'get random angle';
/// auto generated
Blockly.Msg.RANDOM_ANGLE_TOOLTIP = 'Returns a random angle between -180 and 180.';
/// auto generated
Blockly.Msg.RANDOM_ANGLE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.RandomDataGenerator.html#angle';
/// auto generated
Blockly.Msg.RANDOM_PICK_FIELD_1 = 'get random item from list';
/// auto generated
Blockly.Msg.RANDOM_PICK_TOOLTIP = 'Returns a random member in a given list.';
/// auto generated
Blockly.Msg.RANDOM_PICK_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.RandomDataGenerator.html#pick';
/// auto generated
Blockly.Msg.RANDOM_PICK_WEIGHTED_FIELD_1 = 'get random item from list (weighted)';
/// auto generated
Blockly.Msg.RANDOM_PICK_WEIGHTED_TOOLTIP = 'Returns a random member in a given list. This version chooses items close to the start of the list more frequently.';
/// auto generated
Blockly.Msg.RANDOM_PICK_WEIGHTED_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.RandomDataGenerator.html#weightedPick';
/// auto generated
Blockly.Msg.RANDOM_REAL_FIELD_1 = 'get random number';
/// auto generated
Blockly.Msg.RANDOM_REAL_TOOLTIP = 'Returns a random real number. This can be anywhere between 0 and 2^32 (about 4 billion).';
/// auto generated
Blockly.Msg.RANDOM_REAL_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.RandomDataGenerator.html#real';
/// auto generated
Blockly.Msg.RANDOM_REAL_IN_RANGE_FIELD_1 = 'get random number between';
/// auto generated
Blockly.Msg.RANDOM_REAL_IN_RANGE_FIELD_2 = 'and';
/// auto generated
Blockly.Msg.RANDOM_REAL_IN_RANGE_TOOLTIP = 'Returns a random real number in the specified range.';
/// auto generated
Blockly.Msg.RANDOM_REAL_IN_RANGE_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.RandomDataGenerator.html#realInRange';
/// auto generated
Blockly.Msg.RANDOM_SIGN_FIELD_1 = 'get random sign';
/// auto generated
Blockly.Msg.RANDOM_SIGN_TOOLTIP = 'Returns either +1 or -1. For deciding if something needs to be positive or negative.';
/// auto generated
Blockly.Msg.RANDOM_SIGN_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.RandomDataGenerator.html#sign';
/// auto generated
Blockly.Msg.MATH_DEG_TO_RAD_FIELD_1 = 'convert degrees';
/// auto generated
Blockly.Msg.MATH_DEG_TO_RAD_FIELD_2 = 'to radians';
/// auto generated
Blockly.Msg.MATH_DEG_TO_RAD_TOOLTIP = 'Converts a value in degrees to an equivalent in radians.';
/// auto generated
Blockly.Msg.MATH_DEG_TO_RAD_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Math.html#degToRad';
/// auto generated
Blockly.Msg.MATH_RAD_TO_DEG_FIELD_1 = 'convert radians';
/// auto generated
Blockly.Msg.MATH_RAD_TO_DEG_FIELD_2 = 'to degrees';
/// auto generated
Blockly.Msg.MATH_RAD_TO_DEG_TOOLTIP = 'Converts an angle in degrees to an equivalent in radians.';
/// auto generated
Blockly.Msg.MATH_RAD_TO_DEG_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Math.html#radToDeg';
/// auto generated
Blockly.Msg.HARDWARESTARTUP_ARDUINO_FIELD_1 = 'setup';
/// auto generated
Blockly.Msg.HARDWARESTARTUP_ARDUINO_TOOLTIP = '';
/// auto generated
Blockly.Msg.HARDWARESTARTUP_ARDUINO_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.PININPUT_FIELD_1 = 'set pin # ';
/// auto generated
Blockly.Msg.PININPUT_FIELD_2 = 'to';
/// auto generated
Blockly.Msg.PININPUT_MODE_DROPDOWN_1 = 'input';
/// auto generated
Blockly.Msg.PININPUT_MODE_DROPDOWN_2 = 'output';
/// auto generated
Blockly.Msg.PININPUT_MODE_DROPDOWN_3 = 'input_pullup';
/// auto generated
Blockly.Msg.PININPUT_TOOLTIP = '';
/// auto generated
Blockly.Msg.PININPUT_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.DIGITALWRITE_FIELD_1 = 'digital write';
/// auto generated
Blockly.Msg.DIGITALWRITE_VALUE_DROPDOWN_1 = 'HIGH';
/// auto generated
Blockly.Msg.DIGITALWRITE_VALUE_DROPDOWN_2 = 'LOW';
/// auto generated
Blockly.Msg.DIGITALWRITE_FIELD_2 = 'to pin #';
/// auto generated
Blockly.Msg.DIGITALWRITE_TOOLTIP = 'Writes either HIGH or LOW to the given pin';
/// auto generated
Blockly.Msg.DIGITALWRITE_HELP_URL = 'https://www.arduino.cc/en/Reference/DigitalWrite';
/// auto generated
Blockly.Msg.DIGITAL_READ_FIELD_1 = 'digital read pin #';
/// auto generated
Blockly.Msg.DIGITAL_READ_TOOLTIP = 'Reads either HIGH or LOW from a digital pin';
/// auto generated
Blockly.Msg.DIGITAL_READ_HELP_URL = 'https://www.arduino.cc/en/Reference/DigitalRead';
/// auto generated
Blockly.Msg.HIGH_FIELD_1 = 'HIGH';
/// auto generated
Blockly.Msg.HIGH_TOOLTIP = '';
/// auto generated
Blockly.Msg.HIGH_HELP_URL = 'https://www.arduino.cc/en/Reference/Constants';
/// auto generated
Blockly.Msg.LOW_FIELD_1 = 'LOW';
/// auto generated
Blockly.Msg.LOW_TOOLTIP = '';
/// auto generated
Blockly.Msg.LOW_HELP_URL = 'https://www.arduino.cc/en/Reference/Constants';
/// auto generated
Blockly.Msg.LED_BUILTIN_FIELD_1 = 'LED_BUILTIN';
/// auto generated
Blockly.Msg.LED_BUILTIN_TOOLTIP = '';
/// auto generated
Blockly.Msg.LED_BUILTIN_HELP_URL = 'https://www.arduino.cc/en/Reference/Constants';

//arduino
/// auto generated
Blockly.Msg.ANALOG_REFERENCE_FIELD_1 = 'set analog reference to';
/// auto generated
Blockly.Msg.ANALOG_REFERENCE_TYPE_DROPDOWN_1 = 'DEFAULT';
/// auto generated
Blockly.Msg.ANALOG_REFERENCE_TYPE_DROPDOWN_2 = 'EXTERNAL';
/// auto generated
Blockly.Msg.ANALOG_REFERENCE_TYPE_DROPDOWN_3 = 'INTERNAL (Not Available on Mega)';
/// auto generated
Blockly.Msg.ANALOG_REFERENCE_TYPE_DROPDOWN_4 = 'INTERNAL1V1 (Mega Only)';
/// auto generated
Blockly.Msg.ANALOG_REFERENCE_TYPE_DROPDOWN_5 = 'INTERNAL2V56 (Mega Only)';
/// auto generated
Blockly.Msg.ANALOG_REFERENCE_TOOLTIP = 'Set the reference voltage for analog input';
/// auto generated
Blockly.Msg.ANALOG_REFERENCE_HELP_URL = 'https://www.arduino.cc/en/Reference/AnalogReference';
/// auto generated
Blockly.Msg.ANALOG_READ_FIELD_1 = 'analog read pin #';
/// auto generated
Blockly.Msg.ANALOG_READ_TOOLTIP = 'Read the value from the given analog pin';
/// auto generated
Blockly.Msg.ANALOG_READ_HELP_URL = 'https://www.arduino.cc/en/Reference/AnalogRead';
/// auto generated
Blockly.Msg.ANALOG_WRITE_FIELD_1 = 'analog write ';
/// auto generated
Blockly.Msg.ANALOG_WRITE_FIELD_2 = 'to pin #';
/// auto generated
Blockly.Msg.ANALOG_WRITE_TOOLTIP = '';
/// auto generated
Blockly.Msg.ANALOG_WRITE_HELP_URL = 'https://www.arduino.cc/en/Reference/AnalogWrite';
/// auto generated
Blockly.Msg.RANDOM_SEED_FIELD_1 = 'Randomize seed with value';
/// auto generated
Blockly.Msg.RANDOM_SEED_TOOLTIP = '';
/// auto generated
Blockly.Msg.RANDOM_SEED_HELP_URL = 'https://www.arduino.cc/en/Reference/RandomSeed';
/// auto generated
Blockly.Msg.RANDOM_FIELD_1 = 'Random value between';
/// auto generated
Blockly.Msg.RANDOM_FIELD_2 = 'and';
/// auto generated
Blockly.Msg.RANDOM_TOOLTIP = '';
/// auto generated
Blockly.Msg.RANDOM_HELP_URL = 'https://www.arduino.cc/en/Reference/Random';
/// auto generated
Blockly.Msg.BIT_FIELD_1 = 'Value of bit';
/// auto generated
Blockly.Msg.BIT_TOOLTIP = '';
/// auto generated
Blockly.Msg.BIT_HELP_URL = 'https://www.arduino.cc/en/Reference/Bit';
/// auto generated
Blockly.Msg.BIT_CLEAR_FIELD_1 = 'Clear bit';
/// auto generated
Blockly.Msg.BIT_CLEAR_FIELD_2 = 'from Number';
/// auto generated
Blockly.Msg.BIT_CLEAR_TOOLTIP = '';
/// auto generated
Blockly.Msg.BIT_CLEAR_HELP_URL = 'https://www.arduino.cc/en/Reference/BitClear';
/// auto generated
Blockly.Msg.BIT_SET_FIELD_1 = 'Set bit';
/// auto generated
Blockly.Msg.BIT_SET_FIELD_2 = 'in Number';
/// auto generated
Blockly.Msg.BIT_SET_TOOLTIP = '';
/// auto generated
Blockly.Msg.BIT_SET_HELP_URL = 'https://www.arduino.cc/en/Reference/BitSet';
/// auto generated
Blockly.Msg.BIT_WRITE_FIELD_1 = 'Set Number';
/// auto generated
Blockly.Msg.BIT_WRITE_FIELD_2 = 'at Position';
/// auto generated
Blockly.Msg.BIT_WRITE_FIELD_3 = 'with Value';
/// auto generated
Blockly.Msg.BIT_WRITE_TOOLTIP = '';
/// auto generated
Blockly.Msg.BIT_WRITE_HELP_URL = 'https://www.arduino.cc/en/Reference/BitWrite';
/// auto generated
Blockly.Msg.BIT_READ_FIELD_1 = 'Read Number';
/// auto generated
Blockly.Msg.BIT_READ_FIELD_2 = 'at Position';
/// auto generated
Blockly.Msg.BIT_READ_TOOLTIP = '';
/// auto generated
Blockly.Msg.BIT_READ_HELP_URL = 'https://www.arduino.cc/en/Reference/BitRead';
/// auto generated
Blockly.Msg.HIGH_BYTE_FIELD_1 = 'Get high-byte from Number';
/// auto generated
Blockly.Msg.HIGH_BYTE_TOOLTIP = '';
/// auto generated
Blockly.Msg.HIGH_BYTE_HELP_URL = 'https://www.arduino.cc/en/Reference/HighByte';
/// auto generated
Blockly.Msg.LOW_BYTE_FIELD_1 = 'Get low-byte from Number';
/// auto generated
Blockly.Msg.LOW_BYTE_TOOLTIP = '';
/// auto generated
Blockly.Msg.LOW_BYTE_HELP_URL = 'https://www.arduino.cc/en/Reference/LowByte';
/// auto generated
Blockly.Msg.TONE_PIN_FREQ_FIELD_1 = 'play frequency';
/// auto generated
Blockly.Msg.TONE_PIN_FREQ_FIELD_2 = 'on pin #';
/// auto generated
Blockly.Msg.TONE_PIN_FREQ_TOOLTIP = '';
/// auto generated
Blockly.Msg.TONE_PIN_FREQ_HELP_URL = 'https://www.arduino.cc/en/Reference/Tone';
/// auto generated
Blockly.Msg.TONE_PIN_FREQ_DURATION_FIELD_1 = 'play frequency';
/// auto generated
Blockly.Msg.TONE_PIN_FREQ_DURATION_FIELD_2 = 'on pin #';
/// auto generated
Blockly.Msg.TONE_PIN_FREQ_DURATION_FIELD_3 = 'for ';
/// auto generated
Blockly.Msg.TONE_PIN_FREQ_DURATION_FIELD_4 = 'milliseconds';
/// auto generated
Blockly.Msg.TONE_PIN_FREQ_DURATION_TOOLTIP = '';
/// auto generated
Blockly.Msg.TONE_PIN_FREQ_DURATION_HELP_URL = 'https://www.arduino.cc/en/Reference/Tone';

// arduino_eeprom
/// auto generated
Blockly.Msg.EEPROM_READ_ADDRESS = 'EEPROM Read address';
/// auto generated
Blockly.Msg.EEPROM_READ_TOOLTIP = '';
/// auto generated
Blockly.Msg.EEPROM_READ_HELP_URL = 'https://www.arduino.cc/en/Reference/EEPROMRead';
/// auto generated
Blockly.Msg.EEPROM_WRITE_VALUE = 'EEPROM write value';
/// auto generated
Blockly.Msg.EEPROM_WRITE_ADDRESS = 'to address';
/// auto generated
Blockly.Msg.EEPROM_WRITE_TOOLTIP = '';
/// auto generated
Blockly.Msg.EEPROM_WRITE_HELP_URL = 'https://www.arduino.cc/en/Reference/EEPROMWrite';
/// auto generated
Blockly.Msg.EEPROM_UPDATE_VALUE = 'EEPROM update value at';
/// auto generated
Blockly.Msg.EEPROM_UPDATE_ADDRESS = '(if different than current) to address';
/// auto generated
Blockly.Msg.EEPROM_UPDATE_TOOLTIP = '';
/// auto generated
Blockly.Msg.EEPROM_UPDATE_HELP_URL = 'https://www.arduino.cc/en/Reference/EEPROMUpdate';
/// auto generated
Blockly.Msg.EEPROM_GET_ADDRESS = 'EEPROM get data from address';
/// auto generated
Blockly.Msg.EEPROM_GET_VARIABLE = 'and store in';
/// auto generated
Blockly.Msg.EEPROM_GET_TOOLTIP = '';
/// auto generated
Blockly.Msg.EEPROM_GET_HELP_URL = 'https://www.arduino.cc/en/Reference/EEPROMGet';
/// auto generated
Blockly.Msg.EEPROM_PUT_VALUE = 'EEPROM set';
/// auto generated
Blockly.Msg.EEPROM_PUT_ADDRESS = 'to address';
/// auto generated
Blockly.Msg.EEPROM_PUT_TOOLTIP = '';
/// auto generated
Blockly.Msg.EEPROM_PUT_HELP_URL = 'https://www.arduino.cc/en/Reference/EEPROMPut';

//arduino_serial
/// auto generated
Blockly.Msg.SERIAL_READ_FIELD_1 = 'serial read first byte';
/// auto generated
Blockly.Msg.SERIAL_READ_TOOLTIP = '';
/// auto generated
Blockly.Msg.SERIAL_READ_HELP_URL = '';
/// auto generated
Blockly.Msg.SERIAL_PRINT_LINE_FIELD_1 = 'serial print line';
/// auto generated
Blockly.Msg.SERIAL_PRINT_LINE_TOOLTIP = '';
/// auto generated
Blockly.Msg.SERIAL_PRINT_LINE_HELP_URL = '';
/// auto generated
Blockly.Msg.SERIAL_PRINT_FIELD_1 = 'serial print';
/// auto generated
Blockly.Msg.SERIAL_PRINT_TOOLTIP = '';
/// auto generated
Blockly.Msg.SERIAL_PRINT_HELP_URL = '';
/// auto generated
Blockly.Msg.SERIAL_END_FIELD_1 = 'serial end';
/// auto generated
Blockly.Msg.SERIAL_END_TOOLTIP = '';
/// auto generated
Blockly.Msg.SERIAL_END_HELP_URL = '';
/// auto generated
Blockly.Msg.SERIAL_BEGIN_FIELD_1 = 'serial begin at ';
/// auto generated
Blockly.Msg.SERIAL_BEGIN_FIELD_2 = 'bits per second (baud)';
/// auto generated
Blockly.Msg.SERIAL_BEGIN_TOOLTIP = '';
/// auto generated
Blockly.Msg.SERIAL_BEGIN_HELP_URL = '';

//arduino_servo
/// auto generated
Blockly.Msg.SERVO_ATTACH_FIELD_1 = 'attach pin';
/// auto generated
Blockly.Msg.SERVO_ATTACH_FIELD_2 = 'to servo';
/// auto generated
Blockly.Msg.SERVO_ATTACH_TOOLTIP = '';
/// auto generated
Blockly.Msg.SERVO_ATTACH_HELP_URL = 'https://www.arduino.cc/en/Reference/ServoAttach';
/// auto generated
Blockly.Msg.SERVO_WRITE_FIELD_1 = 'set angle to';
/// auto generated
Blockly.Msg.SERVO_WRITE_FIELD_2 = 'on servo';
/// auto generated
Blockly.Msg.SERVO_WRITE_TOOLTIP = '';
/// auto generated
Blockly.Msg.SERVO_WRITE_HELP_URL = 'https://www.arduino.cc/en/Reference/ServoWrite';
/// auto generated
Blockly.Msg.SERVO_WRITE_MICROSECONDS_FIELD_1 = 'set microseconds to';
/// auto generated
Blockly.Msg.SERVO_WRITE_MICROSECONDS_FIELD_2 = 'on servo';
/// auto generated
Blockly.Msg.SERVO_WRITE_MICROSECONDS_TOOLTIP = '';
/// auto generated
Blockly.Msg.SERVO_WRITE_MICROSECONDS_HELP_URL = 'https://www.arduino.cc/en/Reference/ServoWriteMicroseconds';
/// auto generated
Blockly.Msg.SERVO_READ_FIELD_1 = 'read from servo';
/// auto generated
Blockly.Msg.SERVO_READ_TOOLTIP = '';
/// auto generated
Blockly.Msg.SERVO_READ_HELP_URL = 'https://www.arduino.cc/en/Reference/ServoRead';
/// auto generated
Blockly.Msg.SERVO_ATTACHED_FIELD_1 = 'servo attached?';
/// auto generated
Blockly.Msg.SERVO_ATTACHED_TOOLTIP = '';
/// auto generated
Blockly.Msg.SERVO_ATTACHED_HELP_URL = 'https://www.arduino.cc/en/Reference/ServoAttached';
/// auto generated
Blockly.Msg.SERVO_DETACH_FIELD_1 = 'detach servo';
/// auto generated
Blockly.Msg.SERVO_DETACH_TOOLTIP = '';
/// auto generated
Blockly.Msg.SERVO_DETACH_HELP_URL = 'https://www.arduino.cc/en/Reference/ServoDetach';
Blockly.Msg.SERVO_CANNOT_BE_NULL = 'servo field cannot be left empty';

//arduino math
Blockly.Msg.ARDUINO_MATH_MAP_VALUE = 'value';
Blockly.Msg.ARDUINO_MATH_MAP = 'map';
Blockly.Msg.ARDUINO_MATH_MAP_FROM_LOW = 'from low';
Blockly.Msg.ARDUINO_MATH_MAP_FROM_HIGH = 'from high';
Blockly.Msg.ARDUINO_MATH_MAP_TO_LOW = 'to low';
Blockly.Msg.ARDUINO_MATH_MAP_TO_HIGH = 'to high';

///
Blockly.Msg.ARDUINO_SERIAL_AVAILABLE = 'serial available';
Blockly.Msg.ARDUINO_SERIAL_AVAILABLE_HELP_URL = 'https://www.arduino.cc/reference/en/language/functions/communication/serial/available/';
Blockly.Msg.ARDUINO_SERIAL_AVAILABLE_TOOLTIP = 'Gets the number of bytes available to be read';

Blockly.Msg.ARDUINO_SERIAL_AVAILABLE_FOR_WRITE = 'serial available for write';
Blockly.Msg.ARDUINO_SERIAL_AVAILABLE_FOR_WRITE_HELP_URL = 'https://www.arduino.cc/reference/en/language/functions/communication/serial/availableforwrite/';
Blockly.Msg.ARDUINO_SERIAL_AVAILABLE_FOR_WRITE_TOOLTIP = 'Gets the number of bytes available to write';

Blockly.Msg.ARDUINO_SERIAL_FIND = 'serial find';
Blockly.Msg.ARDUINO_SERIAL_FIND_TOOLTIP = 'Returns true if the target string is found in the serial stream else false';
Blockly.Msg.ARDUINO_SERIAL_FIND_HELP_URL = 'https://www.arduino.cc/reference/en/language/functions/communication/serial/find/';

Blockly.Msg.ARDUINO_SERIAL_FIND_UNTIL = 'serial find';
Blockly.Msg.ARDUINO_SERIAL_UNTIL = 'until';
Blockly.Msg.ARDUINO_SERIAL_FIND_UNTIL_TOOLTIP = 'Returns true if the target string is found in the serial stream else false if timeout or terminal is found';
Blockly.Msg.ARDUINO_SERIAL_FIND_UNTIL_HELP_URL = 'https://www.arduino.cc/reference/en/language/functions/communication/serial/finduntil/';

Blockly.Msg.ARDUINO_SERIAL_FLUSH = 'serial flush';
Blockly.Msg.ARDUINO_SERIAL_FLUSH_TOOLTIP = 'wait fo outgoing serial data to complete';
Blockly.Msg.ARDUINO_SERIAL_FLUSH_HELP_URL = 'https://www.arduino.cc/reference/en/language/functions/communication/serial/flush/';

Blockly.Msg.ARDUINO_SERIAL_PARSE_FLOAT = 'serial parse float';
Blockly.Msg.ARDUINO_SERIAL_PARSE_FLOAT_TOOLTIP = 'read the first valid float form the serial stream';
Blockly.Msg.ARDUINO_SERIAL_PARSE_FLOAT_HELP_URL = 'https://www.arduino.cc/reference/en/language/functions/communication/serial/parsefloat/';

Blockly.Msg.ARDUINO_SERIAL_PARSE_INT = 'serial parse integer';
Blockly.Msg.ARDUINO_SERIAL_PARSE_INT_TOOLTIP = 'read the first valid integer form the serial stream';
Blockly.Msg.ARDUINO_SERIAL_PARSE_INT_HELP_URL = 'https://www.arduino.cc/reference/en/language/functions/communication/serial/parseint/';

Blockly.Msg.ARDUINO_SERIAL_PEEK = 'serial peek next byte';
Blockly.Msg.ARDUINO_SERIAL_PEEK_TOOLTIP = 'gets the next byte without removing it from the stream';
Blockly.Msg.ARDUINO_SERIAL_PEEK_HELP_URL = 'https://www.arduino.cc/reference/en/language/functions/communication/serial/peek/';

Blockly.Msg.ARDUINO_SERIAL_READ_BYTES = 'serial read bytes into';
Blockly.Msg.ARDUINO_SERIAL_READ_BYTES_UP_TO = 'up to length';
Blockly.Msg.ARDUINO_SERIAL_READ_BYTES_TOOLTIP = 'gets the next byte without removing it from the stream';
Blockly.Msg.ARDUINO_SERIAL_READ_BYTES_HELP_URL = 'https://www.arduino.cc/reference/en/language/functions/communication/serial/readbytesuntil/';

Blockly.Msg.ARDUINO_SERIAL_READ_BYTES_UNTIL = 'serial read bytes into';
Blockly.Msg.ARDUINO_SERIAL_READ_BYTES_UNTIL_TOOLTIP = 'gets the next byte without removing it from the stream';
Blockly.Msg.ARDUINO_SERIAL_READ_BYTES_UNTIL_HELP_URL = 'https://www.arduino.cc/reference/en/language/functions/communication/serial/readbytesuntil/';
Blockly.Msg.ARDUINO_SERIAL_READ_BYTES_UNTIL_TERMINAL = 'or until';

Blockly.Msg.ARDUINO_SERIAL_SET_TIMEOUT = 'serial set timeout to';
Blockly.Msg.ARDUINO_SERIAL_SET_TIMEOUT_TOOLTIP = 'sets the max milliseconds to wait for serial data, defaults to 1000 milliseconds';
Blockly.Msg.ARDUINO_SERIAL_SET_TIMEOUT_HELP_URL = 'https://www.arduino.cc/reference/en/language/functions/communication/serial/settimeout/';

Blockly.Msg.ADVANCED_IO_PULSE_IN = 'pulse in';
Blockly.Msg.ADVANCED_IO_PULSE_IN_TOOLTIP = 'Reads a HIGH or LOW pulse from a pin returning the duration';
Blockly.Msg.ADVANCED_IO_PULSE_IN_HELP_URL = 'https://www.arduino.cc/reference/en/language/functions/advanced-io/pulsein/';

Blockly.Msg.ADVANCED_IO_PULSE_IN_LONG = 'pulse in long';
Blockly.Msg.ADVANCED_IO_PULSE_IN_LONG_TOOLTIP = 'Reads a HIGH or LOW pulse from a pin returning the duration';
Blockly.Msg.ADVANCED_IO_PULSE_IN_LONG_HELP_URL = 'https://www.arduino.cc/reference/en/language/functions/advanced-io/pulseinlong/';

Blockly.Msg.ADVANCED_IO_SHIFT_IN = 'shift in';
Blockly.Msg.ADVANCED_IO_SHIFT_IN_TOOLTIP = 'Shifts in a byte of data at a time, this is software based';
Blockly.Msg.ADVANCED_IO_SHIFT_IN_HELP_URL = 'https://www.arduino.cc/reference/en/language/functions/advanced-io/shiftin/';

Blockly.Msg.ADVANCED_IO_SHIFT_OUT = 'shift out';
Blockly.Msg.ADVANCED_IO_SHIFT_OUT_TOOLTIP = 'Shifts out a byte of data at a time, this is software based';
Blockly.Msg.ADVANCED_IO_SHIFT_OUT_HELP_URL = 'https://www.arduino.cc/reference/en/language/functions/advanced-io/shiftout/';

Blockly.Msg.ADVANCED_IO_LEAST_SIGNIFICANT_BIT_FIRST = 'least significant bit first';
Blockly.Msg.ADVANCED_IO_BIT_FIRST = 'most significant bit first';
Blockly.Msg.ADVANCED_IO_DATA_PIN = 'data pin';
Blockly.Msg.ADVANCED_IO_CLOCK_PIN = 'clock pin';
Blockly.Msg.ADVANCED_IO_BIT_ORDER = 'bit order';
//dom
/// auto generated
Blockly.Msg.GETELEMENTBYID_TITLE = 'getElementById with ID';
/// auto generated
Blockly.Msg.GETELEMENTBYID_TOOLTIP = '';
/// auto generated
Blockly.Msg.GETELEMENTBYID_HELP_URL = '';
/// auto generated
Blockly.Msg.DOM_GETCONTEXT_DOM = 'for dom';
/// auto generated
Blockly.Msg.DOM_GETCONTEXT_CONTEXT = 'get context';
/// auto generated
Blockly.Msg.SET_HEIGHT_DOM = 'DOM variable';
/// auto generated
Blockly.Msg.SET_HEIGHT_TITLE = 'set height';
/// auto generated
Blockly.Msg.SET_HEIGHT_TOOLTIP = '';
/// auto generated
Blockly.Msg.SET_HEIGHT_HELP_URL = '';
/// auto generated
Blockly.Msg.SET_WIDTH_DOM = 'DOM variable';
/// auto generated
Blockly.Msg.SET_WIDTH_TITLE = 'set width';
/// auto generated
Blockly.Msg.SET_WIDTH_TOOLTIP = '';
/// auto generated
Blockly.Msg.SET_WIDTH_HELP_URL = '';
/// auto generated
Blockly.Msg.ADD_EVENT_LISTENER_TITLE = 'add event listener to dom element';
/// auto generated
Blockly.Msg.ADD_EVENT_LISTENER_EVENT_TYPE = 'for event of type';
/// auto generated
Blockly.Msg.ADD_EVENT_LISTENER_ON = 'on';
/// auto generated
Blockly.Msg.ADD_EVENT_LISTENER_DO = 'do';
/// auto generated
Blockly.Msg.ADD_EVENT_LISTENER_TOOLTIP = '';
/// auto generated
Blockly.Msg.ADD_EVENT_LISTENER_HELP_URL = '';
/// auto generated
Blockly.Msg.SET_ATTRIBUTE_DOM = 'for dom element';
/// auto generated
Blockly.Msg.SET_ATTRIBUTE_TITLE = 'set Attribute';
/// auto generated
Blockly.Msg.CONSOLE_LOG_TITLE = 'console log';
/// auto generated
Blockly.Msg.CONSOLE_LOG_TOOLTIP = '';
/// auto generated
Blockly.Msg.CONSOLE_LOG_HELP_URL = '';

//eval
/// auto generated
Blockly.Msg.JAVASCRIPT_EVAL_TITLE = 'eval';
/// auto generated
Blockly.Msg.JAVASCRIPT_EVAL_TOOLTIP = 'Execute the JavaScript expression';
/// auto generated
Blockly.Msg.JAVASCRIPT_EVAL_HELP_URL = 'developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval';
/// auto generated
Blockly.Msg.JAVASCRIPT_EVAL_OUTPUT_TITLE = 'eval with output';
/// auto generated
Blockly.Msg.JAVASCRIPT_EVAL_OUTPUT_TOOLTIP = 'Execute the JavaScript expression returning the value';
/// auto generated
Blockly.Msg.JAVASCRIPT_EVAL_OUTPUT_HELP_URL = 'developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval';

//ringo
/// auto generated
Blockly.Msg.HARDWARESTARTUP_RINGO_FIELD_1 = 'setup';
/// auto generated
Blockly.Msg.HARDWARESTARTUP_RINGO_TOOLTIP = '';
/// auto generated
Blockly.Msg.HARDWARESTARTUP_RINGO_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.GET_GYRO_CALIBRATION_MULTIPLIER_FIELD_1 = 'get gyro calibration multiplier';
/// auto generated
Blockly.Msg.GET_GYRO_CALIBRATION_MULTIPLIER_TOOLTIP = '';
/// auto generated
Blockly.Msg.BEGIN_NAVIGATION_FIELD_1 = 'begin navigation';
/// auto generated
Blockly.Msg.BEGIN_NAVIGATION_TOOLTIP = '';
/// auto generated
Blockly.Msg.SIMPLE_GYRO_NAVIGATION_FIELD_1 = 'simple gyro navigation';
/// auto generated
Blockly.Msg.SIMPLE_GYRO_NAVIGATION_TOOLTIP = '';
/// auto generated
Blockly.Msg.SIMPLE_NAVIGATION_FIELD_1 = 'simple navigation';
/// auto generated
Blockly.Msg.SIMPLE_NAVIGATION_TOOLTIP = '';
/// auto generated
Blockly.Msg.NAVIGATION_XY_FIELD_1 = 'navigation xy with';
/// auto generated
Blockly.Msg.NAVIGATION_XY_FIELD_2 = 'gyro sensitivity';
/// auto generated
Blockly.Msg.NAVIGATION_XY_FIELD_3 = 'acceleration sensitivity';
/// auto generated
Blockly.Msg.NAVIGATION_XY_TOOLTIP = '';
/// auto generated
Blockly.Msg.CALIBRATE_NAVIGATION_SENSORS_FIELD_1 = 'calibrate navigation sensors';
/// auto generated
Blockly.Msg.CALIBRATE_NAVIGATION_SENSORS_TOOLTIP = '';
/// auto generated
Blockly.Msg.ZERO_NAVIGATION_FIELD_1 = 'reset navigation';
/// auto generated
Blockly.Msg.ZERO_NAVIGATION_TOOLTIP = '';
/// auto generated
Blockly.Msg.PAUSE_NAVIGATION_FIELD_1 = 'pause navigation';
/// auto generated
Blockly.Msg.PAUSE_NAVIGATION_TOOLTIP = '';
/// auto generated
Blockly.Msg.RESUME_NAVIGATION_FIELD_1 = 'resume navigation';
/// auto generated
Blockly.Msg.RESUME_NAVIGATION_TOOLTIP = '';
/// auto generated
Blockly.Msg.NAVIGATION_PAUSED_FIELD_1 = 'is navigation paused';
/// auto generated
Blockly.Msg.NAVIGATION_PAUSED_TOOLTIP = '';
/// auto generated
Blockly.Msg.DELAY_WITH_NAVIGATION_MS_FIELD_1 = 'delay with navigation for ';
/// auto generated
Blockly.Msg.DELAY_WITH_NAVIGATION_MS_TOOLTIP = '';
/// auto generated
Blockly.Msg.DELAY_WITH_NAVIGATION_MS_FIELD_2 = 'milliseconds';
/// auto generated
Blockly.Msg.DELAY_WITH_SIMPLE_NAVIGATION_MS_FIELD_1 = 'delay with simple navigation for';
/// auto generated
Blockly.Msg.DELAY_WITH_SIMPLE_NAVIGATION_MS_TOOLTIP = '';
/// auto generated
Blockly.Msg.DELAY_WITH_SIMPLE_NAVIGATION_MS_FIELD_2 = 'milliseconds';
/// auto generated
Blockly.Msg.PRESENT_HEADING_FIELD_1 = 'get present heading';
/// auto generated
Blockly.Msg.PRESENT_HEADING_TOOLTIP = '';
/// auto generated
Blockly.Msg.GET_DEGREES_X_FIELD_1 = 'get degrees x';
/// auto generated
Blockly.Msg.GET_DEGREES_X_TOOLTIP = '';
/// auto generated
Blockly.Msg.GET_DEGREES_PER_SECOND_Z_FIELD_1 = 'get degrees per second z';
/// auto generated
Blockly.Msg.GET_DEGREES_PER_SECOND_Z_TOOLTIP = '';
/// auto generated
Blockly.Msg.GET_DEGREES_PER_SECOND_X_FIELD_1 = 'get degrees per second x';
/// auto generated
Blockly.Msg.GET_DEGREES_PER_SECOND_X_TOOLTIP = '';
/// auto generated
Blockly.Msg.GET_DEGREES_PER_SECOND_Y_FIELD_1 = 'get degrees per second y';
/// auto generated
Blockly.Msg.GET_DEGREES_PER_SECOND_Y_TOOLTIP = '';
/// auto generated
Blockly.Msg.GET_DEGREES_TO_STOP_FIELD_1 = 'get degrees to stop';
/// auto generated
Blockly.Msg.GET_DEGREES_TO_STOP_TOOLTIP = '';
/// auto generated
Blockly.Msg.GET_ACCEL_X_FIELD_1 = 'get x acceleration';
/// auto generated
Blockly.Msg.GET_ACCEL_X_TOOLTIP = '';
/// auto generated
Blockly.Msg.GET_ACCEL_Y_FIELD_1 = 'get y acceleration';
/// auto generated
Blockly.Msg.GET_ACCEL_Y_TOOLTIP = '';
/// auto generated
Blockly.Msg.GET_ACCEL_Z_FIELD_1 = 'get z acceleration';
/// auto generated
Blockly.Msg.GET_ACCEL_Z_TOOLTIP = '';
/// auto generated
Blockly.Msg.GET_ACCEL_Y_UNZEROED_FIELD_1 = 'get y acceleration unzeroed';
/// auto generated
Blockly.Msg.GET_ACCEL_Y_UNZEROED_TOOLTIP = '';
/// auto generated
Blockly.Msg.GET_VEL_X_FIELD_1 = 'get x velocity';
/// auto generated
Blockly.Msg.GET_VEL_X_TOOLTIP = '';
/// auto generated
Blockly.Msg.GET_VEL_Y_FIELD_1 = 'get y velocity';
/// auto generated
Blockly.Msg.GET_VEL_Y_TOOLTIP = '';
/// auto generated
Blockly.Msg.GET_POS_X_FIELD_1 = 'get x position';
/// auto generated
Blockly.Msg.GET_POS_X_TOOLTIP = '';
/// auto generated
Blockly.Msg.GET_POS_Y_FIELD_1 = 'get y position';
/// auto generated
Blockly.Msg.GET_POS_Y_TOOLTIP = '';
/// auto generated
Blockly.Msg.IS_STATIONARY_FIELD_1 = 'is ringo stationary';
/// auto generated
Blockly.Msg.IS_STATIONARY_TOOLTIP = '';
/// auto generated
Blockly.Msg.NON_STATIONARY_VALUE_FIELD_1 = 'get non-stationary value';
/// auto generated
Blockly.Msg.NON_STATIONARY_VALUE_TOOLTIP = '';
/// auto generated
Blockly.Msg.NON_STATIONARY_AXIS_FIELD_1 = 'get non-stationary axis';
/// auto generated
Blockly.Msg.NON_STATIONARY_AXIS_TOOLTIP = '';
/// auto generated
Blockly.Msg.MIN_TURN_FIELD_1 = 'minimum turn';
/// auto generated
Blockly.Msg.MIN_TURN_FIELD_2 = 'degrees';
/// auto generated
Blockly.Msg.MIN_TURN_TOOLTIP = '';
/// auto generated
Blockly.Msg.MIN_TURN_TO_HEADING_FIELD_1 = 'minimum turn to heading';
/// auto generated
Blockly.Msg.MIN_TURN_TO_HEADING_TOOLTIP = '';
/// auto generated
Blockly.Msg.VECTOR_TO_DEGREES_FIELD_1 = 'vector to degrees';
/// auto generated
Blockly.Msg.VECTOR_TO_DEGREES_FIELD_2 = 'x component';
/// auto generated
Blockly.Msg.VECTOR_TO_DEGREES_FIELD_3 = 'y component';
/// auto generated
Blockly.Msg.VECTOR_TO_DEGREES_TOOLTIP = '';
/// auto generated
Blockly.Msg.GYRO_SET_RANGE_FIELD_1 = 'set gyro range';
/// auto generated
Blockly.Msg.GYRO_SET_RANGE_TOOLTIP = '';
/// auto generated
Blockly.Msg.GYRO_BUFFER_SIZE_FIELD_1 = 'get gyro buffer size';
/// auto generated
Blockly.Msg.GYRO_BUFFER_SIZE_TOOLTIP = '';
/// auto generated
Blockly.Msg.GYRO_GET_AXIS_FIELD_1 = 'get gyro axis';
/// auto generated
Blockly.Msg.GYRO_GET_AXIS_TOOLTIP = '';
/// auto generated
Blockly.Msg.GYRO_SET_FREQUENCY_FIELD_1 = 'set gyro frequency';
/// auto generated
Blockly.Msg.GYRO_SET_FREQUENCY_TOOLTIP = '';
/// auto generated
Blockly.Msg.GYRO_GET_RANGE_FROM_CHIP_FIELD_1 = 'get gyro range from chip';
/// auto generated
Blockly.Msg.GYRO_GET_RANGE_FROM_CHIP_TOOLTIP = '';
/// auto generated
Blockly.Msg.SET_PIXEL_RGB_FIELD_1 = 'set';
/// auto generated
Blockly.Msg.SET_PIXEL_RGB_PIXEL_DROPDOWN_1 = 'left eye';
/// auto generated
Blockly.Msg.SET_PIXEL_RGB_PIXEL_DROPDOWN_2 = 'right eye';
/// auto generated
Blockly.Msg.SET_PIXEL_RGB_PIXEL_DROPDOWN_3 = 'body top';
/// auto generated
Blockly.Msg.SET_PIXEL_RGB_PIXEL_DROPDOWN_4 = 'body bottom';
/// auto generated
Blockly.Msg.SET_PIXEL_RGB_PIXEL_DROPDOWN_5 = 'tail top';
/// auto generated
Blockly.Msg.SET_PIXEL_RGB_PIXEL_DROPDOWN_6 = 'tail bottom';
/// auto generated
Blockly.Msg.SET_PIXEL_RGB_FIELD_2 = 'pixel';
/// auto generated
Blockly.Msg.SET_PIXEL_RGB_FIELD_3 = 'red';
/// auto generated
Blockly.Msg.SET_PIXEL_RGB_FIELD_4 = 'green';
/// auto generated
Blockly.Msg.SET_PIXEL_RGB_FIELD_5 = 'blue';
/// auto generated
Blockly.Msg.SET_PIXEL_RGB_TOOLTIP = '';
/// auto generated
Blockly.Msg.SET_PIXEL_RGB_COLOUR_FIELD_1 = 'set';
/// auto generated
Blockly.Msg.SET_PIXEL_RGB_COLOUR_PIXEL_DROPDOWN_1 = 'left eye';
/// auto generated
Blockly.Msg.SET_PIXEL_RGB_COLOUR_PIXEL_DROPDOWN_2 = 'right eye';
/// auto generated
Blockly.Msg.SET_PIXEL_RGB_COLOUR_PIXEL_DROPDOWN_3 = 'body top';
/// auto generated
Blockly.Msg.SET_PIXEL_RGB_COLOUR_PIXEL_DROPDOWN_4 = 'body bottom';
/// auto generated
Blockly.Msg.SET_PIXEL_RGB_COLOUR_PIXEL_DROPDOWN_5 = 'tail top';
/// auto generated
Blockly.Msg.SET_PIXEL_RGB_COLOUR_PIXEL_DROPDOWN_6 = 'tail bottom';
/// auto generated
Blockly.Msg.SET_PIXEL_RGB_COLOUR_FIELD_2 = 'to';
/// auto generated
Blockly.Msg.SET_PIXEL_RGB_COLOUR_TOOLTIP = '';
/// auto generated
Blockly.Msg.SET_ALL_PIXEL_RGB_FIELD_1 = 'set all pixels to';
/// auto generated
Blockly.Msg.SET_ALL_PIXEL_RGB_FIELD_2 = 'red';
/// auto generated
Blockly.Msg.SET_ALL_PIXEL_RGB_FIELD_3 = 'green';
/// auto generated
Blockly.Msg.SET_ALL_PIXEL_RGB_FIELD_4 = 'blue';
/// auto generated
Blockly.Msg.SET_ALL_PIXEL_RGB_TOOLTIP = '';
/// auto generated
Blockly.Msg.REFRESH_PIXELS_FIELD_1 = 'refresh pixels';
/// auto generated
Blockly.Msg.REFRESH_PIXELS_TOOLTIP = '';
/// auto generated
Blockly.Msg.SET_ALL_PIXEL_RGB_COLOUR_FIELD_1 = 'set all pixels to';
/// auto generated
Blockly.Msg.SET_ALL_PIXEL_RGB_COLOUR_TOOLTIP = '';
/// auto generated
Blockly.Msg.GET_MOTOR_MAX_FIELD_1 = 'get motor max';
/// auto generated
Blockly.Msg.GET_MOTOR_MAX_TOOLTIP = '';
/// auto generated
Blockly.Msg.GET_LEFT_MOTOR_FIELD_1 = 'get current left motor speed';
/// auto generated
Blockly.Msg.GET_LEFT_MOTOR_TOOLTIP = '';
/// auto generated
Blockly.Msg.GET_RIGHT_MOTOR_FIELD_1 = 'get current right motor speed';
/// auto generated
Blockly.Msg.GET_RIGHT_MOTOR_TOOLTIP = '';
/// auto generated
Blockly.Msg.MOTORS_BEGIN_FIELD_1 = 'begin motors';
/// auto generated
Blockly.Msg.MOTORS_BEGIN_TOOLTIP = '';
/// auto generated
Blockly.Msg.MAINTAIN_HEADING_RESET_FIELD_1 = 'reset maintain heading';
/// auto generated
Blockly.Msg.MAINTAIN_HEADING_RESET_TOOLTIP = '';
/// auto generated
Blockly.Msg.MAINTAIN_HEADING_FIELD_1 = 'maintain heading with ';
/// auto generated
Blockly.Msg.MAINTAIN_HEADING_FIELD_2 = 'direction';
/// auto generated
Blockly.Msg.MAINTAIN_HEADING_FIELD_3 = 'and speed';
/// auto generated
Blockly.Msg.MAINTAIN_HEADING_FIELD_4 = 'and wiggle';
/// auto generated
Blockly.Msg.MAINTAIN_HEADING_TOOLTIP = '';
/// auto generated
Blockly.Msg.DRIVE_ARC_FIELD_1 = 'drive in an arc';
/// auto generated
Blockly.Msg.DRIVE_ARC_FIELD_2 = 'turning (degrees)';
/// auto generated
Blockly.Msg.DRIVE_ARC_FIELD_3 = 'with left motor at';
/// auto generated
Blockly.Msg.DRIVE_ARC_FIELD_4 = 'with right motor at';
/// auto generated
Blockly.Msg.DRIVE_ARC_FIELD_5 = 'with max expected turn time (milliseconds)';
/// auto generated
Blockly.Msg.DRIVE_ARC_FIELD_6 = 'with max expected skid time (milliseconds)';
/// auto generated
Blockly.Msg.DRIVE_ARC_TOOLTIP = '';
/// auto generated
Blockly.Msg.PLAY_START_CHIRP_FIELD_1 = 'play start chirp';
/// auto generated
Blockly.Msg.PLAY_START_CHIRP_TOOLTIP = '';
/// auto generated
Blockly.Msg.PLAY_ACK_FIELD_1 = 'play acknowledgment chirp';
/// auto generated
Blockly.Msg.PLAY_ACK_TOOLTIP = '';
/// auto generated
Blockly.Msg.PLAY_NON_ACK_FIELD_1 = 'play non-acknowledgment chirp';
/// auto generated
Blockly.Msg.PLAY_NON_ACK_TOOLTIP = '';
/// auto generated
Blockly.Msg.PLAY_ANGER_FIELD_1 = 'play anger';
/// auto generated
Blockly.Msg.PLAY_ANGER_TOOLTIP = '';
/// auto generated
Blockly.Msg.PLAY_BOREDOM_FIELD_1 = 'play boredom';
/// auto generated
Blockly.Msg.PLAY_BOREDOM_TOOLTIP = '';
/// auto generated
Blockly.Msg.PLAY_EXCITED_FIELD_1 = 'play excited';
/// auto generated
Blockly.Msg.PLAY_EXCITED_TOOLTIP = '';
/// auto generated
Blockly.Msg.PLAY_CHIRP_FIELD_1 = 'play chirp';
/// auto generated
Blockly.Msg.PLAY_CHIRP_FIELD_2 = 'with frequency';
/// auto generated
Blockly.Msg.PLAY_CHIRP_FIELD_3 = 'with amplitude';
/// auto generated
Blockly.Msg.PLAY_CHIRP_TOOLTIP = '';
/// auto generated
Blockly.Msg.OFF_CHIRP_FIELD_1 = 'turn chirp off';
/// auto generated
Blockly.Msg.OFF_CHIRP_TOOLTIP = '';
/// auto generated
Blockly.Msg.OFF_PIXELS_FIELD_1 = 'turn all pixels off';
/// auto generated
Blockly.Msg.OFF_PIXELS_TOOLTIP = '';
/// auto generated
Blockly.Msg.OFF_PIXEL_FIELD_1 = 'turn';
/// auto generated
Blockly.Msg.OFF_PIXEL_PIXEL_DROPDOWN_1 = 'left eye';
/// auto generated
Blockly.Msg.OFF_PIXEL_PIXEL_DROPDOWN_2 = 'right eye';
/// auto generated
Blockly.Msg.OFF_PIXEL_PIXEL_DROPDOWN_3 = 'body top';
/// auto generated
Blockly.Msg.OFF_PIXEL_PIXEL_DROPDOWN_4 = 'body bottom';
/// auto generated
Blockly.Msg.OFF_PIXEL_PIXEL_DROPDOWN_5 = 'tail top';
/// auto generated
Blockly.Msg.OFF_PIXEL_PIXEL_DROPDOWN_6 = 'tail bottom';
/// auto generated
Blockly.Msg.OFF_PIXEL_FIELD_2 = 'off';
/// auto generated
Blockly.Msg.OFF_PIXEL_TOOLTIP = '';
/// auto generated
Blockly.Msg.RANDOM_EYES_FIELD_1 = 'set eyes to a random colour';
/// auto generated
Blockly.Msg.RANDOM_EYES_TOOLTIP = '';

//wink
/// auto generated
Blockly.Msg.SETEYESRED_FIELD_1 = 'set eyes red';
/// auto generated
Blockly.Msg.SETEYESRED_TOOLTIP = '';
/// auto generated
Blockly.Msg.SETEYESRED_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.SETEYESGREEN_FIELD_1 = 'set eyes green';
/// auto generated
Blockly.Msg.SETEYESGREEN_TOOLTIP = '';
/// auto generated
Blockly.Msg.SETEYESGREEN_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.SETEYESBLUE_FIELD_1 = 'set eyes blue';
/// auto generated
Blockly.Msg.SETEYESBLUE_TOOLTIP = '';
/// auto generated
Blockly.Msg.SETEYESBLUE_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.SETEYESPURPLE_FIELD_1 = 'set eyes purple';
/// auto generated
Blockly.Msg.SETEYESPURPLE_TOOLTIP = '';
/// auto generated
Blockly.Msg.SETEYESPURPLE_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.SETEYESPINK_FIELD_1 = 'set eyes pink';
/// auto generated
Blockly.Msg.SETEYESPINK_TOOLTIP = '';
/// auto generated
Blockly.Msg.SETEYESPINK_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.SETEYESYELLOW_FIELD_1 = 'set eyes yellow';
/// auto generated
Blockly.Msg.SETEYESYELLOW_TOOLTIP = '';
/// auto generated
Blockly.Msg.SETEYESYELLOW_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.SETEYESCYAN_FIELD_1 = 'set eyes cyan';
/// auto generated
Blockly.Msg.SETEYESCYAN_TOOLTIP = '';
/// auto generated
Blockly.Msg.SETEYESCYAN_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.SETEYESORANGE_FIELD_1 = 'set eyes orange';
/// auto generated
Blockly.Msg.SETEYESORANGE_TOOLTIP = '';
/// auto generated
Blockly.Msg.SETEYESORANGE_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.SETEYESWHITE_FIELD_1 = 'set eyes white';
/// auto generated
Blockly.Msg.SETEYESWHITE_TOOLTIP = '';
/// auto generated
Blockly.Msg.SETEYESWHITE_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.SETLEFTRED_FIELD_1 = 'set left red';
/// auto generated
Blockly.Msg.SETLEFTRED_TOOLTIP = '';
/// auto generated
Blockly.Msg.SETLEFTRED_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.SETLEFTGREEN_FIELD_1 = 'set left green';
/// auto generated
Blockly.Msg.SETLEFTGREEN_TOOLTIP = '';
/// auto generated
Blockly.Msg.SETLEFTGREEN_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.SETLEFTBLUE_FIELD_1 = 'set left blue';
/// auto generated
Blockly.Msg.SETLEFTBLUE_TOOLTIP = '';
/// auto generated
Blockly.Msg.SETLEFTBLUE_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.SETLEFTPURPLE_FIELD_1 = 'set left purple';
/// auto generated
Blockly.Msg.SETLEFTPURPLE_TOOLTIP = '';
/// auto generated
Blockly.Msg.SETLEFTPURPLE_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.SETLEFTPINK_FIELD_1 = 'set left pink';
/// auto generated
Blockly.Msg.SETLEFTPINK_TOOLTIP = '';
/// auto generated
Blockly.Msg.SETLEFTPINK_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.SETLEFTYELLOW_FIELD_1 = 'set left yellow';
/// auto generated
Blockly.Msg.SETLEFTYELLOW_TOOLTIP = '';
/// auto generated
Blockly.Msg.SETLEFTYELLOW_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.SETLEFTCYAN_FIELD_1 = 'set left cyan';
/// auto generated
Blockly.Msg.SETLEFTCYAN_TOOLTIP = '';
/// auto generated
Blockly.Msg.SETLEFTCYAN_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.SETLEFTORANGE_FIELD_1 = 'set left orange';
/// auto generated
Blockly.Msg.SETLEFTORANGE_TOOLTIP = '';
/// auto generated
Blockly.Msg.SETLEFTORANGE_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.SETLEFTWHITE_FIELD_1 = 'set left white';
/// auto generated
Blockly.Msg.SETLEFTWHITE_TOOLTIP = '';
/// auto generated
Blockly.Msg.SETLEFTWHITE_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.SETRIGHTRED_FIELD_1 = 'set right red';
/// auto generated
Blockly.Msg.SETRIGHTRED_TOOLTIP = '';
/// auto generated
Blockly.Msg.SETRIGHTRED_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.SETRIGHTGREEN_FIELD_1 = 'set right green';
/// auto generated
Blockly.Msg.SETRIGHTGREEN_TOOLTIP = '';
/// auto generated
Blockly.Msg.SETRIGHTGREEN_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.SETRIGHTBLUE_FIELD_1 = 'set right blue';
/// auto generated
Blockly.Msg.SETRIGHTBLUE_TOOLTIP = '';
/// auto generated
Blockly.Msg.SETRIGHTBLUE_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.SETRIGHTPURPLE_FIELD_1 = 'set right purple';
/// auto generated
Blockly.Msg.SETRIGHTPURPLE_TOOLTIP = '';
/// auto generated
Blockly.Msg.SETRIGHTPURPLE_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.SETRIGHTPINK_FIELD_1 = 'set right pink';
/// auto generated
Blockly.Msg.SETRIGHTPINK_TOOLTIP = '';
/// auto generated
Blockly.Msg.SETRIGHTPINK_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.SETRIGHTYELLOW_FIELD_1 = 'set right yellow';
/// auto generated
Blockly.Msg.SETRIGHTYELLOW_TOOLTIP = '';
/// auto generated
Blockly.Msg.SETRIGHTYELLOW_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.SETRIGHTCYAN_FIELD_1 = 'set right cyan';
/// auto generated
Blockly.Msg.SETRIGHTCYAN_TOOLTIP = '';
/// auto generated
Blockly.Msg.SETRIGHTCYAN_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.SETRIGHTORANGE_FIELD_1 = 'set right orange';
/// auto generated
Blockly.Msg.SETRIGHTORANGE_TOOLTIP = '';
/// auto generated
Blockly.Msg.SETRIGHTORANGE_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.SETRIGHTWHITE_FIELD_1 = 'set right white';
/// auto generated
Blockly.Msg.SETRIGHTWHITE_TOOLTIP = '';
/// auto generated
Blockly.Msg.SETRIGHTWHITE_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.SETEYESRGB_FIELD_1 = 'set eyes color';
/// auto generated
Blockly.Msg.SETEYESRGB_TOOLTIP = '';
/// auto generated
Blockly.Msg.SETEYESRGB_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.SETLEFTRGB_FIELD_1 = 'set left color';
/// auto generated
Blockly.Msg.SETLEFTRGB_TOOLTIP = '';
/// auto generated
Blockly.Msg.SETLEFTRGB_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.SETRIGHTRGB_FIELD_1 = 'set right color';
/// auto generated
Blockly.Msg.SETRIGHTRGB_TOOLTIP = '';
/// auto generated
Blockly.Msg.SETRIGHTRGB_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.TURNEYESOFF_FIELD_1 = 'turn eyes off';
/// auto generated
Blockly.Msg.TURNEYESOFF_TOOLTIP = '';
/// auto generated
Blockly.Msg.TURNEYESOFF_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.TURNLEFTEYEOFF_FIELD_1 = 'turn left eye off';
/// auto generated
Blockly.Msg.TURNLEFTEYEOFF_TOOLTIP = '';
/// auto generated
Blockly.Msg.TURNLEFTEYEOFF_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.TURNRIGHTEYEOFF_FIELD_1 = 'turn right eye off';
/// auto generated
Blockly.Msg.TURNRIGHTEYEOFF_TOOLTIP = '';
/// auto generated
Blockly.Msg.TURNRIGHTEYEOFF_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.EYESPREVCOLOUR_FIELD_1 = 'eyes previous color';
/// auto generated
Blockly.Msg.EYESPREVCOLOUR_TOOLTIP = '';
/// auto generated
Blockly.Msg.EYESPREVCOLOUR_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.LEFTPREVCOLOUR_FIELD_1 = 'left previous color';
/// auto generated
Blockly.Msg.LEFTPREVCOLOUR_TOOLTIP = '';
/// auto generated
Blockly.Msg.LEFTPREVCOLOUR_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.RIGHTPREVCOLOUR_FIELD_1 = 'right previous color';
/// auto generated
Blockly.Msg.RIGHTPREVCOLOUR_TOOLTIP = '';
/// auto generated
Blockly.Msg.RIGHTPREVCOLOUR_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.HARDWARESTARTUP_FIELD_1 = 'setup';
/// auto generated
Blockly.Msg.HARDWARESTARTUP_TOOLTIP = 'This code is run once when the device is first turned on';
/// auto generated
Blockly.Msg.HARDWARESTARTUP_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.LOOP_FIELD_1 = 'loop';
/// auto generated
Blockly.Msg.LOOP_TOOLTIP = 'This code is run continuously once the device is turned on';
/// auto generated
Blockly.Msg.LOOP_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.ACCELERATEMOTORS_FIELD_1 = 'accelerate motors';
/// auto generated
Blockly.Msg.ACCELERATEMOTORS_FIELD_2 = 'start speed';
/// auto generated
Blockly.Msg.ACCELERATEMOTORS_FIELD_3 = 'end speed';
/// auto generated
Blockly.Msg.ACCELERATEMOTORS_FIELD_4 = 'duration';
/// auto generated
Blockly.Msg.ACCELERATEMOTORS_TOOLTIP = 'Accelerates from the start to the end speed over the specified duration';
/// auto generated
Blockly.Msg.ACCELERATEMOTORS_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.MOTORS_FIELD_1 = 'set motor speed';
/// auto generated
Blockly.Msg.MOTORS_FIELD_2 = 'left speed';
/// auto generated
Blockly.Msg.MOTORS_FIELD_3 = 'right speed';
/// auto generated
Blockly.Msg.MOTORS_TOOLTIP = 'Sets the motor speed to something positive or negative for both the left and right motor';
/// auto generated
Blockly.Msg.MOTORS_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.SPINLEFT_FIELD_1 = 'spin left';
/// auto generated
Blockly.Msg.SPINLEFT_TOOLTIP = 'Spins the wink robot to the left';
/// auto generated
Blockly.Msg.SPINLEFT_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.SPINRIGHT_FIELD_1 = 'spin right';
/// auto generated
Blockly.Msg.SPINRIGHT_TOOLTIP = 'Spins the wink robot to the right';
/// auto generated
Blockly.Msg.SPINRIGHT_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.BESTILL_FIELD_1 = 'be still';
/// auto generated
Blockly.Msg.BESTILL_TOOLTIP = 'Stops the wink robot from moving';
/// auto generated
Blockly.Msg.BESTILL_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.BUTTONWAIT_FIELD_1 = 'wait for button press';
/// auto generated
Blockly.Msg.BUTTONWAIT_TOOLTIP = 'Waits until a remote button is pressed to continue.';
/// auto generated
Blockly.Msg.BUTTONWAIT_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.BEEPMS_FIELD_1 = 'beep';
/// auto generated
Blockly.Msg.BEEPMS_FIELD_2 = 'milliseconds';
/// auto generated
Blockly.Msg.BEEPMS_TOOLTIP = 'beeps for a specified duration';
/// auto generated
Blockly.Msg.BEEPMS_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.BEEPON_FIELD_1 = 'turn beep on';
/// auto generated
Blockly.Msg.BEEPON_TOOLTIP = 'Turns on the beep until it\'s told to stop;';
/// auto generated
Blockly.Msg.BEEPON_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.BEEPOFF_FIELD_1 = 'turn beep off';
/// auto generated
Blockly.Msg.BEEPOFF_TOOLTIP = 'Turns off the beep. Phew.';
/// auto generated
Blockly.Msg.BEEPOFF_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.SETIRLIGHT_FIELD_1 = 'turn';
/// auto generated
Blockly.Msg.SETIRLIGHT_LIGHT_DROPDOWN_1 = 'head light';
/// auto generated
Blockly.Msg.SETIRLIGHT_LIGHT_DROPDOWN_2 = 'line left outer';
/// auto generated
Blockly.Msg.SETIRLIGHT_LIGHT_DROPDOWN_3 = 'line left inner';
/// auto generated
Blockly.Msg.SETIRLIGHT_LIGHT_DROPDOWN_4 = 'line right outer';
/// auto generated
Blockly.Msg.SETIRLIGHT_LIGHT_DROPDOWN_5 = 'line right inner';
/// auto generated
Blockly.Msg.SETIRLIGHT_STATE_DROPDOWN_1 = 'on';
/// auto generated
Blockly.Msg.SETIRLIGHT_STATE_DROPDOWN_2 = 'off';
/// auto generated
Blockly.Msg.SETIRLIGHT_TOOLTIP = '';
/// auto generated
Blockly.Msg.SETIRLIGHT_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.READSENSOR_FIELD_1 = 'read';
/// auto generated
Blockly.Msg.READSENSOR_LIGHT_DROPDOWN_1 = 'line sensor left';
/// auto generated
Blockly.Msg.READSENSOR_LIGHT_DROPDOWN_2 = 'line sensor right';
/// auto generated
Blockly.Msg.READSENSOR_LIGHT_DROPDOWN_3 = 'ambient sensor left';
/// auto generated
Blockly.Msg.READSENSOR_LIGHT_DROPDOWN_4 = 'ambient sensor center';
/// auto generated
Blockly.Msg.READSENSOR_LIGHT_DROPDOWN_5 = 'ambient sensor right';
/// auto generated
Blockly.Msg.READSENSOR_TOOLTIP = '';
/// auto generated
Blockly.Msg.READSENSOR_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.SET_LEFT_EYE_FIELD_1 = 'set left eye';
/// auto generated
Blockly.Msg.SET_LEFT_EYE_FIELD_2 = 'red';
/// auto generated
Blockly.Msg.SET_LEFT_EYE_FIELD_3 = 'green';
/// auto generated
Blockly.Msg.SET_LEFT_EYE_FIELD_4 = 'blue';
/// auto generated
Blockly.Msg.SET_LEFT_EYE_TOOLTIP = 'Sets the color of the left eye.';
/// auto generated
Blockly.Msg.SET_LEFT_EYE_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.SET_RIGHT_EYE_FIELD_1 = 'set right eye';
/// auto generated
Blockly.Msg.SET_RIGHT_EYE_FIELD_2 = 'red';
/// auto generated
Blockly.Msg.SET_RIGHT_EYE_FIELD_3 = 'green';
/// auto generated
Blockly.Msg.SET_RIGHT_EYE_FIELD_4 = 'blue';
/// auto generated
Blockly.Msg.SET_RIGHT_EYE_TOOLTIP = 'Sets the color of the right eye.';
/// auto generated
Blockly.Msg.SET_RIGHT_EYE_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.SET_EYES_FIELD_1 = 'set eyes';
/// auto generated
Blockly.Msg.SET_EYES_FIELD_2 = 'red';
/// auto generated
Blockly.Msg.SET_EYES_FIELD_3 = 'green';
/// auto generated
Blockly.Msg.SET_EYES_FIELD_4 = 'blue';
/// auto generated
Blockly.Msg.SET_EYES_TOOLTIP = 'Sets the color of both eyes.';
/// auto generated
Blockly.Msg.SET_EYES_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.BUTTON_PRESSED_FIELD_1 = 'button pressed';
/// auto generated
Blockly.Msg.BUTTON_PRESSED_TOOLTIP = 'Gets the remote button that was pressed.';
/// auto generated
Blockly.Msg.BUTTON_PRESSED_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.TURN_BY_VALUES_FIELD_1 = 'turn';
/// auto generated
Blockly.Msg.TURN_BY_VALUES_DIRECTION_DROPDOWN_1 = 'left';
/// auto generated
Blockly.Msg.TURN_BY_VALUES_DIRECTION_DROPDOWN_2 = 'right';
/// auto generated
Blockly.Msg.TURN_BY_VALUES_FIELD_2 = 'speed';
/// auto generated
Blockly.Msg.TURN_BY_VALUES_FIELD_3 = 'delay';
/// auto generated
Blockly.Msg.TURN_BY_VALUES_FIELD_4 = 'milliseconds';
/// auto generated
Blockly.Msg.TURN_BY_VALUES_TOOLTIP = 'Turns the robot at the specified speed for the specified duration in the specified direction - either left or right. Negative values are accepted.';
/// auto generated
Blockly.Msg.TURN_BY_VALUES_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.RESTART_IR_FIELD_1 = 'restart IR';
/// auto generated
Blockly.Msg.RESTART_IR_TOOLTIP = 'Start listening for IR should be setup and in loop after processing an input';
/// auto generated
Blockly.Msg.RESTART_IR_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.IS_IR_DONE_FIELD_1 = 'is IR done?';
/// auto generated
Blockly.Msg.IS_IR_DONE_TOOLTIP = 'Checks to see if we received an IR input to process';
/// auto generated
Blockly.Msg.IS_IR_DONE_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.IR_CONTROL_FIELD_1 = 'When ';
/// auto generated
Blockly.Msg.IR_CONTROL_BUTTON_DROPDOWN_1 = '1';
/// auto generated
Blockly.Msg.IR_CONTROL_BUTTON_DROPDOWN_2 = '2';
/// auto generated
Blockly.Msg.IR_CONTROL_BUTTON_DROPDOWN_3 = '3';
/// auto generated
Blockly.Msg.IR_CONTROL_BUTTON_DROPDOWN_4 = '4';
/// auto generated
Blockly.Msg.IR_CONTROL_BUTTON_DROPDOWN_5 = '5';
/// auto generated
Blockly.Msg.IR_CONTROL_BUTTON_DROPDOWN_6 = '6';
/// auto generated
Blockly.Msg.IR_CONTROL_BUTTON_DROPDOWN_7 = '7';
/// auto generated
Blockly.Msg.IR_CONTROL_BUTTON_DROPDOWN_8 = '8';
/// auto generated
Blockly.Msg.IR_CONTROL_BUTTON_DROPDOWN_9 = '9';
/// auto generated
Blockly.Msg.IR_CONTROL_BUTTON_DROPDOWN_10 = '10';
/// auto generated
Blockly.Msg.IR_CONTROL_BUTTON_DROPDOWN_11 = 'Forward';
/// auto generated
Blockly.Msg.IR_CONTROL_BUTTON_DROPDOWN_12 = 'Left';
/// auto generated
Blockly.Msg.IR_CONTROL_BUTTON_DROPDOWN_13 = 'Right';
/// auto generated
Blockly.Msg.IR_CONTROL_BUTTON_DROPDOWN_14 = 'Backward';
/// auto generated
Blockly.Msg.IR_CONTROL_BUTTON_DROPDOWN_15 = 'Power';
/// auto generated
Blockly.Msg.IR_CONTROL_BUTTON_DROPDOWN_16 = 'Plum Logo';
/// auto generated
Blockly.Msg.IR_CONTROL_BUTTON_DROPDOWN_17 = 'Menu';
/// auto generated
Blockly.Msg.IR_CONTROL_BUTTON_DROPDOWN_18 = 'A';
/// auto generated
Blockly.Msg.IR_CONTROL_BUTTON_DROPDOWN_19 = 'B';
/// auto generated
Blockly.Msg.IR_CONTROL_BUTTON_DROPDOWN_20 = 'X';
/// auto generated
Blockly.Msg.IR_CONTROL_BUTTON_DROPDOWN_21 = 'Play';
/// auto generated
Blockly.Msg.IR_CONTROL_FIELD_2 = 'is pressed';
/// auto generated
Blockly.Msg.IR_CONTROL_TOOLTIP = '';
/// auto generated
Blockly.Msg.IR_CONTROL_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.IR_CONTROL_CONTAINER_FIELD_1 = 'when IR is done';
/// auto generated
Blockly.Msg.IR_CONTROL_CONTAINER_TOOLTIP = 'Code starts running from here when IR data is done being recieved.';
/// auto generated
Blockly.Msg.IR_CONTROL_CONTAINER_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.IR_CONTROL_CONTROL_FIELD_1 = 'check key for press';
/// auto generated
Blockly.Msg.IR_CONTROL_CONTROL_TOOLTIP = 'Check to see what key was pressed';
/// auto generated
Blockly.Msg.IR_CONTROL_CONTROL_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.IR_WHEN_FIELD_1 = 'when IR is done';
/// auto generated
Blockly.Msg.IR_WHEN_TOOLTIP = '';
/// auto generated
Blockly.Msg.IR_WHEN_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
/// auto generated
Blockly.Msg.IR_WHEN_FIELD_2 = 'if ';
/// auto generated
Blockly.Msg.IR_WHEN_FIELD_3 = 'button';
/// auto generated
Blockly.Msg.IR_WHEN_FIELD_4 = 'is pressed';
/// auto generated
Blockly.Msg.IR_BUTTON_FIELD_1 = 'wink IR button:';
/// auto generated
Blockly.Msg.IR_BUTTON_TOOLTIP = '';
/// auto generated
Blockly.Msg.IR_BUTTON_HELP_URL = '';
/// auto generated
Blockly.Msg.GET_PRESSED_IR_BUTTON_FIELD_1 = 'get pressed IR button';
/// auto generated
Blockly.Msg.GET_PRESSED_IR_BUTTON_TOOLTIP = '';
/// auto generated
Blockly.Msg.GET_PRESSED_IR_BUTTON_HELP_URL = '';

//procedures_typed
/// auto generated
Blockly.Msg.CAST_BLOCK_FIELD_1 = 'make';
/// auto generated
Blockly.Msg.CAST_BLOCK_FIELD_2 = 'a';
/// auto generated
Blockly.Msg.CAST_BLOCK_TOOLTIP = '';
/// auto generated
Blockly.Msg.CAST_BLOCK_HELP_URL = 'https://en.wikipedia.org/wiki/Type_conversion';

/// block text - Label that this block returns the time since the last frame in seconds.
Blockly.Msg.DELTA_TIME_SECONDS_TITLE = 'delta time in seconds';
/// tooltip - Explains the concept of delta time and notes that this version is in seconds.
Blockly.Msg.DELTA_TIME_SECONDS_TOOLTIP = 'Get the time elapsed since the last frame in seconds.';
/// url - Phaser documentation for game.time.physicsElapsed.
Blockly.Msg.DELTA_TIME_SECONDS_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Time.html#physicsElapsed';
/// block text - Label that this block returns the time since the last frame in milliseconds.
Blockly.Msg.DELTA_TIME_MILLISECONDS_TITLE = 'delta time in milliseconds';
/// tooltip - Explains the concept of delta time and notes that this version is in milliseconds.
Blockly.Msg.DELTA_TIME_MILLISECONDS_TOOLTIP = 'Get the time elapsed since the last frame in milliseconds.';
/// url - Phaser documentation for game.time.physicsElapsed.
Blockly.Msg.DELTA_TIME_MILLISECONDS_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Time.html#physicsElapsedMS';
/// block text - Label that this block lets users get the value of members of game.time.
Blockly.Msg.GET_TIME_NUMERIC_MEMBER_TITLE = 'get';
/// tooltip - Specify that you are reading variables from game time and that they are numeric types.
Blockly.Msg.GET_TIME_NUMERIC_MEMBER_TOOLTIP = 'Read numeric fields of game time.';
/// url - Phaser documentation for game.time.
Blockly.Msg.GET_TIME_NUMERIC_MEMBER_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Time.html';
/// block text - Label that this block lets users get the value of members of game.time.
Blockly.Msg.SET_TIME_NUMERIC_MEMBER_TITLE = 'set';
/// block text - Grammatical connection between the member variable and what it will be set to.
Blockly.Msg.SET_TIME_NUMERIC_MEMBER_TO = 'to';
/// tooltip - Specify that you are writing values to game.time and that they are numeric types.
Blockly.Msg.SET_TIME_NUMERIC_MEMBER_TOOLTIP = 'Write to one of the game time\'s numeric fields.';
/// url - Phaser documentation for game.time.
Blockly.Msg.SET_TIME_NUMERIC_MEMBER_HELP_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Time.html';
/// block text - Creates a new timer object
Blockly.Msg.CREATE_TIMER_TITLE = 'create new timer';
/// block text - True if the object should destroy itself after all events have been dispatched barring looping events
Blockly.Msg.AUTO_DESTROY = 'auto destroy';
/// url - Phaser documentation for Timer
Blockly.Msg.CREATE_TIMER_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Timer.html#Timer';
/// tooltip - create a new timer
Blockly.Msg.CREATE_TIMER_TOOLTIP = 'Create a new timer, if auto destroy is true this timer will be destoryed after all events are dispatched';
/// block text - Half a second
Blockly.Msg.HALF = 'half a second';
/// block text - One minute
Blockly.Msg.MINUTE = 'one minute';
/// block text - Quarter of a second
Blockly.Msg.QUARTER = 'quarter of a second';
/// block text - one second
Blockly.Msg.SECOND = 'one second';
/// block text - Modifier to show constants are in milliseconds
Blockly.Msg.IN_MILLISECONDS = 'in milliseconds';
/// block text - prefix for start_timer block
Blockly.Msg.START_TIMER = 'start timer';
/// block text - in
Blockly.Msg.IN = 'in';
/// block text - every
Blockly.Msg.EVERY = 'every';
/// block text - suffix for start_timer block
Blockly.Msg.MILLISECONDS = 'milliseconds';
/// block text - timer
Blockly.Msg.TIMER = 'timer';
/// block text - adding an event to a timer
Blockly.Msg.TIMER_ADD_EVENT = 'add event to timer';
/// block text - calling a procedure or method
Blockly.Msg.CALL = 'call';
/// tooltip - Specify that the constants are in milliseconds and are for common values
Blockly.Msg.TIMER_CONSTANTS_TOOLTIP = 'Constants for some common values in milliseconds';
/// tooltip - Start the timer
Blockly.Msg.START_TIMER_TOOLTIP = 'Start timer after a given delay in milliseconds';
/// url - Phaser documentation for Timer.start
Blockly.Msg.START_TIMER_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Timer.html#start';
/// tooltip - Clarify this delay
Blockly.Msg.TIMER_ADD_EVENT_TOOLTIP = 'Fire the event after the specified delay after the start of the timer';
/// url - Phaser documentation for Timer.add
Blockly.Msg.TIMER_ADD_EVENT_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Timer.html#add';
/// block text - Destroy the timer taking all events with it
Blockly.Msg.DESTROY_TIMER = 'destroy timer';
/// tooltip - destroys the timer
Blockly.Msg.DESTROY_TIMER_TOOLTIP = 'destroys the timer andy pending events are not dispatched';
/// url - Phaser documentation for Timer.Destroy
Blockly.Msg.DESTROY_TIMER_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Timer.html#destroy';
/// block text - Loop an event a given number of times
Blockly.Msg.TIMER_LOOP_EVENT = 'loop event on timer';
/// tooltip - loop an event repeat times
Blockly.Msg.TIMER_LOOP_EVENT_TOOLTIP = 'Loops the given event forever or until the timer is stopped or destroyed';
/// url - Phaser documentation for
Blockly.Msg.TIMER_LOOP_EVENT_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Timer.html#loop';
/// block text - Loop an event a given number of times
Blockly.Msg.TIMER_REPEAT_EVENT = 'repeat event on timer';
/// block text - repeat count
Blockly.Msg.TIMER_REPEAT_EVENT_COUNT = 'times';
/// tooltip - loop an event repeat times
Blockly.Msg.TIMER_REPEAT_EVENT_TOOLTIP = 'Loops the given event forever or until the timer is stopped or destroyed';
/// url - Phaser documentation for
Blockly.Msg.TIMER_REPEAT_EVENT_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Timer.html#loop';
/// block text - Pause a running timer
Blockly.Msg.PAUSE_TIMER = 'pause timer';
/// tooltip - Pauses all events in the queue
Blockly.Msg.PAUSE_TIMER_TOOLTIP = 'Pauses the timer and all events in the queue';
/// url - Documentation for Phaser.
Blockly.Msg.PAUSE_TIMER_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Timer.html#pause';
/// block text - Resume a paused timer
Blockly.Msg.RESUME_TIMER = 'resume timer';
/// tooltip - Resumes all events in the queue
Blockly.Msg.RESUME_TIMER_TOOLTIP = 'Resumes the timer and all events in the queue';
/// url - Documentation for Timer.resume
Blockly.Msg.RESUME_TIMER_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Timer.html#resume';
/// block text - Stop a paused timer
Blockly.Msg.STOP_TIMER = 'stop timer';
/// tooltip - Resumes all events in the queue
Blockly.Msg.STOP_TIMER_TOOLTIP = 'Stops the timer and all events in the queue, if auto destroy is true this will not cause it to be destroyed';
/// url - Documentation for Timer.Stop
Blockly.Msg.STOP_TIMER_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Timer.html#stop';
/// block text - Stops a timer, does not destroy
Blockly.Msg.STOP_TIMER_CLEAR_EVENTS = 'clear events';
/// block text - Called when a timer completes all events in its queue
Blockly.Msg.TIMER_SET_ON_COMPLETE_CALLBACK = 'when timer';
/// block text - follows the user specified timer to read a bit more like english then code
Blockly.Msg.TIMER_SET_ON_COMPLETE_CALLBACK_COMPLETED = 'completes call';
/// tooltip - This method is not always called explain a few of those conditions
Blockly.Msg.TIMER_SET_ON_COMPLETE_CALLBACK_TOOLTIP = 'Called when the timer completes all of the actions in its queue. This will not be called if the timer is stopped or destroyed before it completes its queue.';
/// url - Timer.onComplete
Blockly.Msg.TIMER_SET_ON_COMPLETE_CALLBACK_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Timer.html#onComplete';
/// url - Phaser.Easing prebuilt easing functions
Blockly.Msg.PHASER_EASING_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Easing.html';
/// tooltip - Predefined easing functions
Blockly.Msg.PHASER_EASING_TOOLTIP = 'Prebuilt easing functions you can utilize through out your code';
/// block text - tween from the current value to a new value
Blockly.Msg.PHASER_GAME_ADD_TWEEN_TO_TITLE = 'create tween to';
/// tooltip - PHASER_GAME_ADD_TWEEN_TO_TOOLTIP
Blockly.Msg.PHASER_GAME_ADD_TWEEN_TO_TOOLTIP = 'Create a tween from the current value to the end values';
/// url - Phaser.Tween.To
Blockly.Msg.PHASER_GAME_ADD_TWEEN_TO_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Tween.html#to';
/// block text - tween from the given value to the current value
Blockly.Msg.PHASER_GAME_ADD_TWEEN_FROM_TITLE = 'create tween from';
/// tooltip - PHASER_GAME_ADD_TWEEN_FROM_TOOLTIP
Blockly.Msg.PHASER_GAME_ADD_TWEEN_FROM_TOOLTIP = 'Create a tween from the end value to the current values, setting the values to end first';
/// url - Phaser.Tween.To
Blockly.Msg.PHASER_GAME_ADD_TWEEN_FROM_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Tween.html#from';
/// block text - target of a tween
Blockly.Msg.PHASER_TWEEN_TARGET = 'target';
/// block text - duration of the tween
Blockly.Msg.PHASER_TWEEN_DURATION = 'duration';
/// block text - ease to use during tween
Blockly.Msg.PHASER_TWEEN_EASE = 'ease';
/// block text - auto start the tween
Blockly.Msg.PHASER_TWEEN_AUTO_START = 'auto start';
/// block text - delay to the start of the tween
Blockly.Msg.PHASER_TWEEN_DELAY = 'delay';
/// block text - repeat the tween x times
Blockly.Msg.PHASER_TWEEN_REPEAT = 'repeat';
/// block text - yoyo the tween
Blockly.Msg.PHASER_TWEEN_YOYO = 'yoyo';
/// block text - Container for tween mutator container simply holds on to properties
Blockly.Msg.PHASER_TWEEN_MUTATORCONTAINER_TITLE = 'properties';
/// tooltip - A property of the target object you want to tween
Blockly.Msg.PHASER_TWEEN_MUTATORCONTAINER_TOOLTIP = 'List of properties to tween on the target object';
/// block text - Arg for a tween mutator, simply the name of the property to use
Blockly.Msg.PHASER_TWEEN_MUTATORARG_TITLE = 'property';
/// tooltip - A property of the target object you want to tween
Blockly.Msg.PHASER_TWEEN_MUTATORARG_TOOLTIP = 'Property to tween on the target object';
/// block text - Header for properties
Blockly.Msg.PHASER_TWEEN_PROPERTIES_HEADER = 'properties:';
///block text - Stop the tween dispatching complete if it is checked
Blockly.Msg.PHASER_STOP_TWEEN = 'stop tween';
///tooltip -
Blockly.Msg.PHASER_STOP_TWEEN_TOOLTIP = 'Stop the tween dispatching onComplete if complete is checked';
///url - Phaser.Tween.stop
Blockly.Msg.PHASER_STOP_TWEEN_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Tween.html#stop';
///block text - pause the tween dispatching complete if it is checked
Blockly.Msg.PHASER_PAUSE_TWEEN = 'pause tween';
///tooltip -
Blockly.Msg.PHASER_PAUSE_TWEEN_TOOLTIP = 'pause the tween dispatching onComplete if complete is checked';
///url - Phaser.Tween.PAUSE
Blockly.Msg.PHASER_PAUSE_TWEEN_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Tween.html#pause';
///block text - start the tween dispatching complete if it is checked
Blockly.Msg.PHASER_START_TWEEN = 'start tween';
///tooltip -
Blockly.Msg.PHASER_START_TWEEN_TOOLTIP = 'start the tween dispatching onComplete if complete is checked';
///url - Phaser.Tween.START
Blockly.Msg.PHASER_START_TWEEN_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Tween.html#start';
///block text - start the tween dispatching complete if it is checked
Blockly.Msg.PHASER_RESUME_TWEEN = 'resume tween';
///tooltip -
Blockly.Msg.PHASER_RESUME_TWEEN_TOOLTIP = 'resume the tween dispatching onComplete if complete is checked';
///url - Phaser.Tween.RESUME
Blockly.Msg.PHASER_RESUME_TWEEN_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Tween.html#resume';
///block text - start the tween dispatching complete if it is checked
Blockly.Msg.PHASER_YOYO_TWEEN = 'yoyo tween';
///tooltip -
Blockly.Msg.PHASER_YOYO_TWEEN_TOOLTIP = 'enable or disable yoyoing for this tween';
///url - Phaser.Tween.YOYO
Blockly.Msg.PHASER_YOYO_TWEEN_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Tween.html#yoyo';
///block text - delay to the start of the yoyo if enabling
Blockly.Msg.PHASER_YOYO_TWEEN_DELAY = 'delay';
///block text - index of the child tween
Blockly.Msg.PHASER_YOYO_CHILD_TWEEN_INDEX = 'child index';
///block text - complete the tween when done
Blockly.Msg.PHASER_STOP_TWEEN_COMPLETE = 'fire onComplete';

// Blockly General
Blockly.Msg.ADD_COMMENT_BLOCK = 'Add Comment Block';

// Get / Set for properties
Blockly.Msg.GET_POINT_FIELD = 'get point field';
Blockly.Msg.GET_BOOLEAN_FIELD = 'get boolean field';
Blockly.Msg.GET_NUMERIC_FIELD = 'get numeric field';
Blockly.Msg.GET_STRING_FIELD = 'get string field';
Blockly.Msg.SET_POINT_FIELD = 'set point field';
Blockly.Msg.SET_BOOLEAN_FIELD = 'set boolean field';
Blockly.Msg.SET_NUMERIC_FIELD = 'set numeric field';
Blockly.Msg.SET_STRING_FIELD = 'set string field';

// Prepositions
Blockly.Msg.OF = 'of';
Blockly.Msg.TO = 'to';
Blockly.Msg.FROM = 'from';

// Time
Blockly.Msg.DELAY = 'delay';
Blockly.Msg.MILLISECONDS = 'milliseconds';
Blockly.Msg.MICROSECONDS = 'microseconds';
Blockly.Msg.SECONDS = 'seconds';
Blockly.Msg.SINCE_START = 'since start';

// Arduino time tooltips
Blockly.Msg.SECONDS_SINCE_START_TOOLTIP = 'Gets the number of seconds since start of the program.';
Blockly.Msg.MILLISECONDS_SINCE_START_TOOLTIP = 'Gets the number of milliseconds since start of the program. There are 1,000 milliseconds in a second.';
Blockly.Msg.MICROSECONDS_SINCE_START_TOOLTIP = 'Gets the number of microseconds since start of the program. There are 1,000,000 microseconds in a second.';
Blockly.Msg.DELAY_SECONDS_TOOLTIP = 'Wait the specified number of seconds before continuing with the program.';
Blockly.Msg.DELAY_MILLISECONDS_TOOLTIP = 'Wait the specified number of milliseconds before continuing. There are 1,000 milliseconds in a second.';
Blockly.Msg.DELAY_MICROSECONDS_TOOLTIP = 'Wait the specified number of microseconds before continuing. There are 1,000,000 microseconds in a second.';

// Arduino time help URLs
Blockly.Msg.SECONDS_SINCE_START_HELP_URL = ''; // Doesn't actually exist as part of arduino.
Blockly.Msg.MILLISECONDS_SINCE_START_HELP_URL = 'https://www.arduino.cc/en/Reference/Millis';
Blockly.Msg.MICROSECONDS_SINCE_START_HELP_URL = 'https://www.arduino.cc/en/Reference/Micros';
Blockly.Msg.DELAY_SECONDS_HELP_URL = ''; // Doesn't actually exist as part of arduino.
Blockly.Msg.DELAY_MILLISECONDS_HELP_URL = 'https://www.arduino.cc/en/Reference/Delay';
Blockly.Msg.DELAY_MICROSECONDS_HELP_URL = 'https://www.arduino.cc/en/Reference/DelayMicroseconds';

// Arduino common
Blockly.Msg.VALUE = 'value';
Blockly.Msg.PIN = 'pin';
Blockly.Msg.TIMEOUT = 'timeout';
Blockly.Msg.HIGH = 'HIGH';
Blockly.Msg.LOW = 'LOW';

// Wink Explorers
Blockly.Msg.WINK_GENERAL_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
Blockly.Msg.WINK_MOVEMENT_FORWARD_SLOW = 'Moves the wink robot forward at a slow(30) speed.';
Blockly.Msg.WINK_MOVEMENT_FORWARD_MODERATE = 'Moves the wink robot forward at a moderate(50) speed.';
Blockly.Msg.WINK_MOVEMENT_FORWARD_FAST = 'Moves the wink robot forward at a fast(90) speed.';
Blockly.Msg.WINK_MOVEMENT_BACKWARD_SLOW = 'Moves the wink robot backward at a slow(30) speed.';
Blockly.Msg.WINK_MOVEMENT_BACKWARD_MODERATE = 'Moves the wink robot backward at a moderate(50) speed.';
Blockly.Msg.WINK_MOVEMENT_BACKWARD_FAST = 'Moves the wink robot backward at a fast(90) speed.';
Blockly.Msg.WINK_MOVEMENT_ROTATION_LEFT = 'Rotates the wink robot left by roughly the specified number of degrees.';
Blockly.Msg.WINK_MOVEMENT_ROTATION_RIGHT = 'Rotates the wink robot right by roughly the specified number of degrees.';

// Wink Explorer Light Effects
Blockly.Msg.LIGHT_EFFECT_HELP_URL = 'http://www.plumgeek.com/learn-to-code.html/';
Blockly.Msg.LIGHT_EFFECT_POLICE_LIGHTS = 'Makes the eyes flash red and blue for the specified time in seconds.';
Blockly.Msg.LIGHT_EFFECT_DISCO_LIGHTS = 'Makes the eyes twinkle with blues, greens, and purples for the specified time in seconds.';
Blockly.Msg.LIGHT_EFFECT_FIREWORK_LIGHTS = 'Makes the eyes flicker as if a firework had gone off for the specified time in seconds.';
Blockly.Msg.LIGHT_EFFECT_RAINBOW_LIGHT = 'Makes the eyes cycle through the rainbow for the specified time in seconds.';

// Wink explorer sensor behaviors
Blockly.Msg.SENSOR_LINE_FOLLOW_TOOLTIP = 'Wink robot will follow a black line. For best results, use a solid dark line 3/4cm - 1cm thick on white paper.';
Blockly.Msg.SENSOR_LINE_AVOID_TOOLTIP = 'Wink robot will avoid black lines. For best results, use solid lines at least 1/2cm thick or more on white paper.';
Blockly.Msg.SENSOR_OBSTACLE_AVOID_TOOLTIP = 'Wink robot travels around and attempts to avoid obstacles in front of it.';
Blockly.Msg.SENSOR_OBSTACLE_APPROACH_TOOLTIP = 'Wink robot approaches an obstacle placed in front of it then moved.';

// Wink Explorer eyes

// General
Blockly.Msg.WINK_EXPLORER_BASE_EYE_TEXT_1 = 'Sets the ';
Blockly.Msg.WINK_EXPLORER_BASE_EYE_TEXT_2 = ' to be ';
Blockly.Msg.WINK_EXPLORER_BASE_EYE_TEXT_ENDING = ' with the specified intensity from 0-255.';

// Left
Blockly.Msg.WINK_EYE_LEFT_RED = 'Sets the left eye to be red with the specified intensity';
Blockly.Msg.WINK_EYE_LEFT_GREEN = 'Sets the left eye to be green with the specified intensity';
Blockly.Msg.WINK_EYE_LEFT_BLUE = 'Sets the left eye to be blue with the specified intensity';
Blockly.Msg.WINK_EYE_LEFT_PURPLE = 'Sets the left eye to be purple with the specified intensity';
Blockly.Msg.WINK_EYE_LEFT_PINK = 'Sets the left eye to be pink with the specified intensity';
Blockly.Msg.WINK_EYE_LEFT_YELLOW = 'Sets the left eye to be yellow with the specified intensity';
Blockly.Msg.WINK_EYE_LEFT_CYAN = 'Sets the left eye to be cyan with the specified intensity';
Blockly.Msg.WINK_EYE_LEFT_ORANGE = 'Sets the left eye to be orange with the specified intensity';
Blockly.Msg.WINK_EYE_LEFT_WHITE = 'Sets the left eye to be white with the specified intensity';
Blockly.Msg.WINK_EYE_LEFT_SELECT = 'Sets the left eye to be the specified color with max intensity.';
Blockly.Msg.WINK_EYE_LEFT_RGB = 'Sets the left eye to be the specified Red, Green, and Blue values.';
Blockly.Msg.WINK_EYE_LEFT_OFF = 'Turns off the left eye.';

// Right
Blockly.Msg.WINK_EYE_RIGHT_RED = 'Sets the right eye to be red with the specified intensity';
Blockly.Msg.WINK_EYE_RIGHT_GREEN = 'Sets the right eye to be green with the specified intensity';
Blockly.Msg.WINK_EYE_RIGHT_BLUE = 'Sets the right eye to be blue with the specified intensity';
Blockly.Msg.WINK_EYE_RIGHT_PURPLE = 'Sets the right eye to be purple with the specified intensity';
Blockly.Msg.WINK_EYE_RIGHT_PINK = 'Sets the right eye to be pink with the specified intensity';
Blockly.Msg.WINK_EYE_RIGHT_YELLOW = 'Sets the right eye to be yellow with the specified intensity';
Blockly.Msg.WINK_EYE_RIGHT_CYAN = 'Sets the right eye to be cyan with the specified intensity';
Blockly.Msg.WINK_EYE_RIGHT_ORANGE = 'Sets the right eye to be orange with the specified intensity';
Blockly.Msg.WINK_EYE_RIGHT_WHITE = 'Sets the right eye to be white with the specified intensity';
Blockly.Msg.WINK_EYE_RIGHT_SELECT = 'Sets the right eye to be the specified color with max intensity.';
Blockly.Msg.WINK_EYE_RIGHT_RGB = 'Sets the right eye to be the specified Red, Green, and Blue values.';
Blockly.Msg.WINK_EYE_RIGHT_OFF = 'Turns off the right eye.';

// Both
Blockly.Msg.WINK_EYES_BOTH_RED = 'Sets both eyes to be red with the specified intensity';
Blockly.Msg.WINK_EYES_BOTH_GREEN = 'Sets both eyes to be green with the specified intensity';
Blockly.Msg.WINK_EYES_BOTH_BLUE = 'Sets both eyes to be blue with the specified intensity';
Blockly.Msg.WINK_EYES_BOTH_PURPLE = 'Sets both eyes to be purple with the specified intensity';
Blockly.Msg.WINK_EYES_BOTH_PINK = 'Sets both eyes to be pink with the specified intensity';
Blockly.Msg.WINK_EYES_BOTH_YELLOW = 'Sets both eyes to be yellow with the specified intensity';
Blockly.Msg.WINK_EYES_BOTH_CYAN = 'Sets both eyes to be cyan with the specified intensity';
Blockly.Msg.WINK_EYES_BOTH_ORANGE = 'Sets both eyes to be orange with the specified intensity';
Blockly.Msg.WINK_EYES_BOTH_WHITE = 'Sets both eyes to be white with the specified intensity';
Blockly.Msg.WINK_EYES_BOTH_SELECT = 'Sets both eyes to be the specified color with max intensity.';
Blockly.Msg.WINK_EYES_BOTH_RGB = 'Sets both eyes to be the specified Red, Green, and Blue values.';
Blockly.Msg.WINK_EYES_BOTH_OFF = 'Turns off both of the eyes.';

//Icon Startup/Loop
Blockly.Msg.ICON_SETUP = 'once at start';
Blockly.Msg.ICON_LOOP = 'loop always';

//Camera follow
Blockly.Msg.FOLLOW_STYLE = 'with style';
Blockly.Msg.FOLLOW_LOCKON = 'lockon';
Blockly.Msg.FOLLOW_PLATFORMER = 'platformer';
Blockly.Msg.FOLLOW_TOPDOWN = 'topdown';
Blockly.Msg.FOLLOW_TOPDOWN_TIGHT = 'topdown tight';

Blockly.Msg.LERP_X = 'lerp x';
Blockly.Msg.LERP_Y = 'lerp y';

Blockly.Msg.RANDOM_BOOLEAN = 'random boolean';
Blockly.Msg.RANDOM_BOOLEAN_TOOLTIP = 'generates either true or false';

Blockly.Msg.GAME_CAMERA = 'camera';
/// tooltip
Blockly.Msg.GAME_CAMERA_TOOLTIP = 'reference to the current games camera';
/// url
Blockly.Msg.GAME_CAMERA_URL = 'https://photonstorm.github.io/phaser-ce/Phaser.Camera.html';

//states;
Blockly.Msg.STATEMANAGER_GET_CURRENT_STATE = 'get current state';
Blockly.Msg.STATEMANAGER_GET_CURRENT_STATE_TOOLTIP = 'Gets the current State';
Blockly.Msg.STATEMANAGER_GET_CURRENT_STATE_HELP_URL = 'http://phaser.io/docs/2.6.2/Phaser.StateManager.html#getCurrentState';
Blockly.Msg.STATEMANAGER_RESTART_STATE = 'restart state';
Blockly.Msg.STATEMANAGER_RESTART_STATE_TOOLTIP = 'Restarts the current State. State.shutDown will be called (if it exists) before the State is restarted.';
Blockly.Msg.STATEMANAGER_RESTART_STATE_HELP_URL = 'http://phaser.io/docs/2.6.2/Phaser.StateManager.html#restart';
Blockly.Msg.STATEMANAGER_CHECK_STATE = 'is valid state?';
Blockly.Msg.STATEMANAGER_CHECK_STATE_TOOLTIP = 'Returns if a given phaser state is valid. A State is considered valid if it has at least one of the core functions: preload, create, update or render.';
Blockly.Msg.STATEMANAGER_CHECK_STATE_HELP_URL = 'http://phaser.io/docs/2.6.2/Phaser.StateManager.html#checkState';

Blockly.Msg.SET_PHYSICS_BOOLEAN_FIELD_TOOLTIP = 'Sets the boolean value for the selected physics property';
Blockly.Msg.SET_PHYSICS_BOOLEAN_FIELD_HELP_URL = 'http://dragondrop.digipen.edu/docs/Phaser.Physics.Arcade.html';
Blockly.Msg.GET_PHYSICS_BOOLEAN_FIELD_TOOLTIP = 'Gets the boolean value for the selected physics property';
Blockly.Msg.GET_PHYSICS_BOOLEAN_FIELD_HELP_URL = 'http://dragondrop.digipen.edu/docs/Phaser.Physics.Arcade.html';
Blockly.Msg.SET_PHYSICS_POINT_FIELD_TOOLTIP = 'Sets the point value for the selected physics property';
Blockly.Msg.SET_PHYSICS_POINT_FIELD_HELP_URL = 'http://dragondrop.digipen.edu/docs/Phaser.Physics.Arcade.html';
Blockly.Msg.GET_PHYSICS_POINT_FIELD_TOOLTIP = 'Gets the point value for the selected physics property';
Blockly.Msg.GET_PHYSICS_POINT_FIELD_HELP_URL = 'http://dragondrop.digipen.edu/docs/Phaser.Physics.Arcade.html';
Blockly.Msg.MAKE = 'make';
Blockly.Msg.ACCELERATE = 'accelerate';
Blockly.Msg.PHYSICS_ACCELERATE_TO_OBJECT = 'pixels/second with max velocity';
Blockly.Msg.PHYSICS_ACCELERATE_TO_OBJECT_TOOLTIP = 'Sets the acceleration.x/y property on the object so it will move towards the target at the given speed. The object will not continuously track the target, or stop moving when it reaches the destination.';
Blockly.Msg.PHYSICS_ACCELERATE_TO_OBJECT_HELP_URL = 'http://dragondrop.digipen.edu/docs/Phaser.Physics.Arcade.html#accelerateToObject';
Blockly.Msg.PHYSICS_ACCELERATE_TO_LOCATION_TOOLTIP = 'Sets the acceleration.x/y property on the object so it will move towards the x/y coordinates at the given speed. The object will not continuously track the target, or stop moving when it reaches the destination.';
Blockly.Msg.PHYSICS_ACCELERATE_TO_LOCATION_HELP_URL = 'http://dragondrop.digipen.edu/docs/Phaser.Physics.Arcade.html#accelerateToXY';
Blockly.Msg.PHYSICS_ACCELERATE_TO_POINTER_TOOLTIP = 'Sets the acceleration.x/y property on the object so it will move towards the pointer at the given speed. The object will not continuously track the target, or stop moving when it reaches the destination.';
Blockly.Msg.PHYSICS_ACCELERATE_TO_POINTER_HELP_URL = 'http://dragondrop.digipen.edu/docs/Phaser.Physics.Arcade.html#accelerateToPointer';
Blockly.Msg.XCOLON = 'x:';
Blockly.Msg.YCOLON = 'y:';
Blockly.Msg.AT = 'at';
Blockly.Msg.AND = 'and';
Blockly.Msg.PHYSICS_DISTANCE_BETWEEN = 'distance between';
Blockly.Msg.PHYSICS_DISTANCE_BETWEEN_TOOLTIP = 'Find the distance between two display objects (like Sprites).';
Blockly.Msg.PHYSICS_DISTANCE_BETWEEN_HELP_URL = 'http://dragondrop.digipen.edu/docs/Phaser.Physics.Arcade.html#distanceBetween';
Blockly.Msg.PHYSICS_DISTANCE_TO_POINTER = 'and pointer';
Blockly.Msg.PHYSICS_DISTANCE_TO_POINTER_TOOLTIP = 'Find the distance between the object and a Pointer.';
Blockly.Msg.PHYSICS_DISTANCE_TO_POINTER_HELP_URL = 'http://dragondrop.digipen.edu/docs/Phaser.Physics.Arcade.html#distanceToPointer';
Blockly.Msg.PHYSICS_DISTANCE_TO_LOCATION_TOOLTIP = 'Find the distance between the object and an (x,y) location.';
Blockly.Msg.PHYSICS_DISTANCE_TO_LOCATION_HELP_URL = 'http://dragondrop.digipen.edu/docs/Phaser.Physics.Arcade.html#distanceToXY';
Blockly.Msg.GET_OBJECTS_AT_LOCATION = 'objects from group';
Blockly.Msg.GET_OBJECTS_AT_LOCATION_OVERLAP = 'that overlap with';
Blockly.Msg.GET_OBJECTS_AT_LOCATION_TOOLTIP = 'Given a Group and a location this will check to see which Group children overlap with the coordinates.';
Blockly.Msg.GET_OBJECTS_AT_LOCATION_HELP_URL = 'http://dragondrop.digipen.edu/docs/Phaser.Physics.Arcade.html#getObjectsAtLocation';
Blockly.Msg.COLLISION_GET_OBJECTS_AT_LOCATION_FUNCTION = 'check overlap between objects from group';
Blockly.Msg.COLLISION_GET_OBJECTS_AT_LOCATION_FUNCTION_TOOLTIP = 'Given a Group and a location this will check to see which Group children overlap with the coordinates.';
Blockly.Msg.COLLISION_GET_OBJECTS_AT_LOCATION_FUNCTION_HELP_URL = 'http://dragondrop.digipen.edu/docs/Phaser.Physics.Arcade.html#getObjectsAtLocation';
Blockly.Msg.CALLING = 'calling';
Blockly.Msg.IF_OVERLAPPING = 'if overlapping';
Blockly.Msg.MOVE = 'move';
Blockly.Msg.PHYSICS_MOVE_TO_POINTER = 'to pointer';
Blockly.Msg.PHYSICS_MOVE_TO_POINTER_TOOLTIP = 'Move the given display object towards the pointer at a steady velocity.';
Blockly.Msg.PHYSICS_MOVE_TO_POINTER_HELP_URL = 'http://dragondrop.digipen.edu/docs/Phaser.Physics.Arcade.html#moveToPointer';
Blockly.Msg.PIXELS_PER_SECOND = 'pixels per second';
Blockly.Msg.MAX_TIME_MS = 'max time (ms):';
Blockly.Msg.PHYSICS_MOVE_TO_LOCATION_TOOLTIP = 'Move the given display object towards the x/y coordinates at a steady velocity.';
Blockly.Msg.PHYSICS_MOVE_TO_LOCATION_HELP_URL = 'http://dragondrop.digipen.edu/docs/Phaser.Physics.Arcade.html#moveToXY';
Blockly.Msg.GET_OBJECTS_UNDER_POINTER = 'objects from group';
Blockly.Msg.GET_OBJECTS_UNDER_POINTER_OVERLAP = 'that overlap with';
Blockly.Msg.GET_OBJECTS_UNDER_POINTER_TOOLTIP = 'Given a Group and a Pointer this will check to see which Group children overlap with the Pointer coordinates.';
Blockly.Msg.GET_OBJECTS_UNDER_POINTER_HELP_URL = 'http://dragondrop.digipen.edu/docs/Phaser.Physics.Arcade.html#getObjectsUnderPointer';
Blockly.Msg.PHYSICS_CLOSEST = 'object closest to';
Blockly.Msg.PHYSICS_CLOSEST_TOOLTIP = '';
Blockly.Msg.PHYSICS_CLOSEST_HELP_URL = '';
Blockly.Msg.PHYSICS_FARTHEST = 'object farthest from';
Blockly.Msg.PHYSICS_FARTHEST_TOOLTIP = '';
Blockly.Msg.PHYSICS_FARTHEST_HELP_URL = '';
Blockly.Msg.ACCELERATION_FROM_ROTATION = 'get forward acceleration from rotation';
Blockly.Msg.RADIANS = 'radians';
Blockly.Msg.PIXELS_PER_SECOND_SQUARED = 'pixels per second squared';
Blockly.Msg.ACCELERATION_FROM_ROTATION_TOOLTIP = 'Given the rotation (in radians) and speed, calculate the acceleration and return it as a Point object.';
Blockly.Msg.ACCELERATION_FROM_ROTATION_HELP_URL = 'http://dragondrop.digipen.edu/docs/Phaser.Physics.Arcade.html#accelerationFromRotation';
Blockly.Msg.UP = 'up';
Blockly.Msg.DOWN = 'down';
Blockly.Msg.LEFT = 'left';
Blockly.Msg.RIGHT = 'right';
Blockly.Msg.CHECK_COLLISION = 'allow world collisions in direction';
Blockly.Msg.CHECK_COLLISION_TOOLTIP = 'Which edges of the World bounds Bodies can collide against when collideWorldBounds is true. For example checkCollision.down = false means Bodies cannot collide with the World.bounds.bottom.';
Blockly.Msg.CHECK_COLLISION_HELP_URL = 'http://dragondrop.digipen.edu/docs/Phaser.Physics.Arcade.html#checkCollision';

Blockly.Msg.GET_ACTIVE_POINTER = 'active game pointer';
Blockly.Msg.GET_ACTIVE_POINTER_TOOLTIP = '';
Blockly.Msg.GET_ACTIVE_POINTER_HELP_URL = '';