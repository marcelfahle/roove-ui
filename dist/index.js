'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".Popover_popover__31Ubt {\n  position: absolute;\n  max-width: calc(100vw - 3.2rem);\n  margin: .5rem .8rem 1.6rem;\n  box-shadow: 0 0 0 1px rgba(6, 44, 82, 0.1), 0 2px 16px rgba(33, 43, 54, 0.08);\n  border-radius: 3px;\n  will-change: left,top;\n  width: 280px;\n  height: 340px;\n  overflow: hidden;\n  background: white;\n  -webkit-transform: translateY(-101%);\n          transform: translateY(-101%);\n  margin-top: -30px; }\n";
var styles = {"popover":"Popover_popover__31Ubt"};
styleInject(css);

var Popover = function (_a) {
    var active = _a.active, children = _a.children;
    if (!active)
        return null;
    return React__default.createElement("div", { className: styles.popover }, children);
};

var css$1 = ".Button_plain__RU0pa {\n  font-size: 13px;\n  font-weight: normal;\n  text-align: right;\n  color: #303030;\n  background: transparent;\n  border: 0;\n  box-shadow: none;\n  cursor: pointer;\n  color: #00a5d2; }\n  .Button_plain__RU0pa.Button_pressed__Ez5H2, .Button_plain__RU0pa:hover, .Button_plain__RU0pa:focus, .Button_plain__RU0pa:active {\n    background: transparent;\n    border: 0;\n    box-shadow: none;\n    text-decoration: underline; }\n";
var styles$1 = {"plain":"Button_plain__RU0pa","pressed":"Button_pressed__Ez5H2"};
styleInject(css$1);

function Button(_a) {
    var children = _a.children, plain = _a.plain, onClick = _a.onClick;
    var content = children;
    return (React__default.createElement("button", { className: plain ? styles$1.plain : '', onClick: onClick }, content));
}

var css$2 = ".styles_wrapper__2vQYo {\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n\n.styles_search__1Snsg {\n  height: 40px;\n  display: block;\n  font-size: 14px;\n  width: 90%;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #e6e6e6;\n  -webkit-border-image: initial;\n       -o-border-image: initial;\n          border-image: initial;\n  padding: 5px 12px 7px;\n  border-radius: 4px;\n  -webkit-transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;\n  transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;\n  outline: 0px;\n  margin: 10px auto; }\n\n.styles_opener__idoFN {\n  cursor: pointer; }\n\n.styles_resource-list__1CPQY {\n  margin: 10px;\n  margin-top: 0;\n  padding: 0;\n  height: 100%;\n  overflow-y: scroll; }\n\n.styles_resource__5QuF0 {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  height: 48px;\n  padding: 5px;\n  margin: 0 5px;\n  cursor: pointer; }\n  .styles_resource__5QuF0:hover {\n    background: #f0fafc; }\n  .styles_resource__5QuF0.styles_selected__Ke00i {\n    background: #f0fafc; }\n    .styles_resource__5QuF0.styles_selected__Ke00i .styles_resource__checkmark__31n7A svg {\n      display: inline; }\n\n.styles_resource__details__3zezi {\n  margin-left: 12px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  color: #333;\n  max-width: 65%; }\n  .styles_resource__details__3zezi span {\n    line-height: 18px; }\n\n.styles_resource__details--secondary__2SIWI {\n  color: #ccc;\n  font-size: 12px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.styles_avatar__2oNUV img {\n  overflow: hidden;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%; }\n\n.styles_resource__checkmark__31n7A {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-left: auto; }\n  .styles_resource__checkmark__31n7A svg {\n    display: none; }\n\n.styles_actions__82aJt {\n  text-align: right;\n  padding: 5px 10px 5px 0; }\n";
var style = {"wrapper":"styles_wrapper__2vQYo","search":"styles_search__1Snsg","opener":"styles_opener__idoFN","resource-list":"styles_resource-list__1CPQY","resource":"styles_resource__5QuF0","selected":"styles_selected__Ke00i","resource__checkmark":"styles_resource__checkmark__31n7A","resource__details":"styles_resource__details__3zezi","resource__details--secondary":"styles_resource__details--secondary__2SIWI","avatar":"styles_avatar__2oNUV","actions":"styles_actions__82aJt"};
styleInject(css$2);

var UserItem = function (_a) {
    var user = _a.user, onSelect = _a.onSelect, selected = _a.selected;
    return (React__default.createElement("div", { className: "resource " + (selected && ' selected'), onClick: function () { return onSelect(user.id); } },
        React__default.createElement("div", { className: style.avatar },
            React__default.createElement("img", { width: "80px", src: user.avatar })),
        React__default.createElement("div", { className: "resource__details" },
            React__default.createElement("span", { className: "resource__details--primary" }, user.name),
            React__default.createElement("span", { className: "resource__details--secondary" }, user.status)),
        React__default.createElement("div", { className: "resource__checkmark" },
            React__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", width: "16", height: "16", viewBox: "0 0 16 16" },
                React__default.createElement("defs", null,
                    React__default.createElement("path", { id: "a", d: "M0 0h16v16H0z" })),
                React__default.createElement("g", { fill: "none", fillRule: "evenodd" },
                    React__default.createElement("g", null,
                        React__default.createElement("mask", { id: "b", fill: "#fff" },
                            React__default.createElement("use", { xlinkHref: "#a" })),
                        React__default.createElement("path", { fill: "#28AF2B", d: "M8 15c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7M8 0C3.588 0 0 3.59 0 8s3.588 8 8 8 8-3.59 8-8-3.588-8-8-8", mask: "url(#b)" })),
                    React__default.createElement("path", { fill: "#28AF2B", d: "M12.287 5.016a.518.518 0 0 0-.726-.001l-4.91 4.91-2.274-2.272a.517.517 0 0 0-.728 0 .515.515 0 0 0 .001.725l2.638 2.638a.521.521 0 0 0 .727 0l5.272-5.273a.513.513 0 0 0 0-.727" }))))));
};
var UserList = function (_a) {
    var users = _a.users;
    var _b = React.useState([]), selectedItems = _b[0], setSelectedItems = _b[1];
    var toggleSelect = function (id) {
        if (selectedItems.length > 0 && selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter(function (item) { return item !== id; }));
        }
        else {
            setSelectedItems(__spreadArrays(selectedItems, [id]));
        }
        console.log(selectedItems);
    };
    return (React__default.createElement("ul", { className: "resource-list" }, users.map(function (user) { return (React__default.createElement(UserItem, { key: user.id, user: user, selected: selectedItems.length > 0 && selectedItems.includes(user.id), onSelect: toggleSelect })); })));
};
var ResourcePicker = function (_a) {
    var resources = _a.resources, onConfirm = _a.onConfirm, children = _a.children;
    var _b = React.useState(false), popoverActive = _b[0], setPopoverActive = _b[1];
    var _c = React.useState(''), searchValue = _c[0], setSearchValue = _c[1];
    //const togglePopoverActive = useCallback(
    //  () => setPopoverActive(popoverActive => !popoverActive),
    //  []
    //);
    var lowerCasedSearch = function () { return searchValue.toLowerCase(); };
    var filteredUsers = function () {
        return resources.filter(function (u) { return u.name.toLowerCase().includes(lowerCasedSearch()); });
    };
    var handleOpen = function () { return setPopoverActive(true); };
    var handleConfirm = function () {
        onConfirm();
        // TODO: hide popover after async,
        // make all inactive during server operation
        // (semi-transparent layover)
        setPopoverActive(false);
    };
    var clonedTrigger = null;
    React__default.Children.forEach(children, function (child, index) {
        if (child && index === 0) {
            clonedTrigger = React__default.cloneElement(child, {
                className: 'opener',
                onClick: handleOpen,
            });
        }
    });
    return (React__default.createElement("span", null,
        clonedTrigger,
        React__default.createElement(Popover, { active: popoverActive },
            React__default.createElement("div", { className: "wrapper" },
                React__default.createElement("input", { type: "text", placeholder: "Search", className: "search", value: searchValue, onChange: function (e) { return setSearchValue(e.target.value); } }),
                React__default.createElement(UserList, { users: filteredUsers() }),
                React__default.createElement("div", { className: "actions" },
                    React__default.createElement(Button, { plain: true, onClick: handleConfirm }, "Confirm"))))));
};

exports.ResourcePicker = ResourcePicker;
//# sourceMappingURL=index.js.map
