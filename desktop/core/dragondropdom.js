'use strict';

/***
 * Extension of goog.dom from closure library to allow the createDom function to accept custom attributes in the
 * opt_attributes key-value object
 */
goog.provide('dragondrop.dom');
goog.require('goog.dom');

/**
 * Returns a dom node with a set of attributes.  This function accepts varargs
 * for subsequent nodes to be added.  Subsequent nodes will be added to the
 * first node as childNodes.
 *
 * So:
 * <code>createDom(goog.dom.TagName.DIV, null, createDom(goog.dom.TagName.P),
 * createDom(goog.dom.TagName.P));</code> would return a div with two child
 * paragraphs
 *
 * For passing properties, please see {@link goog.dom.setProperties} for more
 * information.
 *
 * @param {string|!goog.dom.TagName<T>} tagName Tag to create.
 * @param {?Object|?Array<string>|string=} opt_attributes If object, then a map
 *     of name-value pairs for attributes. If a string, then this is the
 *     className of the new element. If an array, the elements will be joined
 *     together as the className of the new element.
 * @param {...(Object|string|Array|NodeList)} var_args Further DOM nodes or
 *     strings for text nodes. If one of the var_args is an array or NodeList,
 *     its elements will be added as childNodes instead.
 * @return {R} Reference to a DOM node. The return type is {!Element} if tagName
 *     is a string or a more specific type if it is a member of
 *     goog.dom.TagName (e.g. {!HTMLAnchorElement} for goog.dom.TagName.A).
 * @template T
 * @template R := cond(isUnknown(T), 'Element', T) =:
 */
dragondrop.dom.createDom = function (tagName, opt_attributes, var_args) {
    return dragondrop.dom.createDom_(document, arguments);
};


/**
 * Helper for {@code createDom}.
 * @param {!Document} doc The document to create the DOM in.
 * @param {!Arguments} args Argument object passed from the callers. See
 *     {@code goog.dom.createDom} for details.
 * @return {!Element} Reference to a DOM node.
 * @private
 */
dragondrop.dom.createDom_ = function (doc, args) {
    let tagName = String(args[0]);
    let attributes = args[1];
    // Internet Explorer is dumb:
    // name: https://msdn.microsoft.com/en-us/library/ms534184(v=vs.85).aspx
    // type: https://msdn.microsoft.com/en-us/library/ms534700(v=vs.85).aspx
    // Also does not allow setting of 'type' attribute on 'input' or 'button'.
    if (!goog.dom.BrowserFeature.CAN_ADD_NAME_OR_TYPE_ATTRIBUTES && attributes &&
        (attributes.name || attributes.type)) {
        var tagNameArr = ['<', tagName];
        if (attributes.name) {
            tagNameArr.push(' name="', goog.string.htmlEscape(attributes.name), '"');
        }
        if (attributes.type) {
            tagNameArr.push(' type="', goog.string.htmlEscape(attributes.type), '"');

            // Clone attributes map to remove 'type' without mutating the input.
            var clone = {};
            goog.object.extend(clone, attributes);

            // JSCompiler can't see how goog.object.extend added this property,
            // because it was essentially added by reflection.
            // So it needs to be quoted.
            delete clone['type'];

            attributes = clone;
        }
        tagNameArr.push('>');
        tagName = tagNameArr.join('');
    }

    const element = doc.createElement(tagName);

    if (attributes) {
        if (goog.isString(attributes)) {
            element.className = attributes;
        } else if (goog.isArray(attributes)) {
            element.className = attributes.join(' ');
        } else {
            dragondrop.dom.setAttributes(element, attributes);
        }
    }

    if (args.length > 2) {
        goog.dom.append_(doc, element, args, 2);
    }

    return element;
};

dragondrop.dom.setAttributes = function (element, properties) {
    goog.object.forEach(properties, function (val, key) {
        element.setAttribute(key, val);
    });
};
