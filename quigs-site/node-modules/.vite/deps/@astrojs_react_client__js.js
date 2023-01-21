import {
  require_react_dom
} from "./chunk-F6F7MSRS.js";
import {
  __commonJS,
  __toESM,
  require_react
} from "./chunk-KVZCIEWH.js";

// node_modules/react-dom/client.js
var require_client = __commonJS({
  "node_modules/react-dom/client.js"(exports) {
    "use strict";
    var m = require_react_dom();
    if (false) {
      exports.createRoot = m.createRoot;
      exports.hydrateRoot = m.hydrateRoot;
    } else {
      i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      exports.createRoot = function(c, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.createRoot(c, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
      exports.hydrateRoot = function(c, h2, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.hydrateRoot(c, h2, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
    }
    var i;
  }
});

// node_modules/@astrojs/react/client.js
var import_react2 = __toESM(require_react(), 1);
var import_client = __toESM(require_client(), 1);

// node_modules/@astrojs/react/static-html.js
var import_react = __toESM(require_react(), 1);
var StaticHtml = ({ value, name }) => {
  if (!value)
    return null;
  return (0, import_react.createElement)("astro-slot", {
    name,
    suppressHydrationWarning: true,
    dangerouslySetInnerHTML: { __html: value }
  });
};
StaticHtml.shouldComponentUpdate = () => false;
var static_html_default = StaticHtml;

// node_modules/@astrojs/react/client.js
function isAlreadyHydrated(element) {
  for (const key in element) {
    if (key.startsWith("__reactContainer")) {
      return key;
    }
  }
}
var client_default = (element) => (Component, props, { default: children, ...slotted }, { client }) => {
  if (!element.hasAttribute("ssr"))
    return;
  for (const [key, value] of Object.entries(slotted)) {
    props[key] = (0, import_react2.createElement)(static_html_default, { value, name: key });
  }
  const componentEl = (0, import_react2.createElement)(
    Component,
    props,
    children != null ? (0, import_react2.createElement)(static_html_default, { value: children }) : children
  );
  const rootKey = isAlreadyHydrated(element);
  if (rootKey) {
    delete element[rootKey];
  }
  if (client === "only") {
    return (0, import_react2.startTransition)(() => {
      (0, import_client.createRoot)(element).render(componentEl);
    });
  }
  return (0, import_react2.startTransition)(() => {
    (0, import_client.hydrateRoot)(element, componentEl);
  });
};

// dep:@astrojs_react_client__js
var astrojs_react_client_js_default = client_default;
export {
  astrojs_react_client_js_default as default
};
//# sourceMappingURL=@astrojs_react_client__js.js.map
