/*!
 * vue-nice-button v1.0.1
 * (c) Joshua Chinemezu
 * Released under the MIT License.
 */
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __vue_normalize__ = _interopDefault(require('vue-runtime-helpers/dist/normalize-component.js'));
var __vue_create_injector__ = _interopDefault(require('vue-runtime-helpers/dist/inject-style/browser.js'));

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  props: {
    color: {
      type: String,
      "default": "blue",
      validator: function validator(x) {
        return ["blue", "green", "red"].indexOf(x) !== -1;
      }
    },
    rounded: {
      type: Boolean,
      "default": true
    },
    size: {
      type: String,
      "default": "default",
      validator: function validator(x) {
        return ["small", "default", "large"].indexOf(x) !== -1;
      }
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit("click", event);
    },
    onDoubleClick: function onDoubleClick(event) {
      this.$emit("dblclick", event);
    }
  }
};

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('button', {
    "class": ['nice-button', 'nice-button--' + _vm.color, 'nice-button--' + _vm.size, {
      'nice-button--rounded': _vm.rounded
    }],
    on: {
      "click": _vm.onClick,
      "dblclick": _vm.onDoubleClick
    }
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-ecae1a28_0", {
    source: ".nice-button{display:inline-block;outline:0;border:1px solid rgba(0,0,0,.1);color:#fff;font-weight:500;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;user-select:none;cursor:pointer}.nice-button--blue{background-color:#0194ef}.nice-button--green{background-color:#1bb934}.nice-button--red{background-color:#e1112c}.nice-button--small{padding:8px 10px;border-radius:4px;font-size:12px;line-height:12px}.nice-button--default{padding:12px 14px;border-radius:6px;font-size:14px;line-height:16px}.nice-button--large{padding:16px 18px;border-radius:8px;font-size:16px;line-height:20px}.nice-button--rounded{border-radius:60px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject SSR */

var NiceButton = __vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, __vue_create_injector__, undefined);

var index = {
  install: function install(Vue, options) {
    // Let's register our component globally
    // https://vuejs.org/v2/guide/components-registration.html
    Vue.component("nice-button", NiceButton);
  }
};

module.exports = index;
