import { ay as defineComponent, aQ as computed, aB as openBlock, aG as createElementBlock, aW as normalizeClass, aT as renderSlot, aH as createCommentVNode, aM as createTextVNode, aN as toDisplayString } from "./vendor-c2829c47.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Badge",
  props: {
    theme: { type: String, required: false, default: "gray" },
    size: { type: String, required: false, default: "md" },
    variant: { type: String, required: false, default: "subtle" },
    label: { type: [Object, String, Number], required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const classes = computed(() => {
      let solidClasses = {
        gray: "text-text-icons-white bg-surface-gray-7",
        blue: "text-text-icons-blue-1 bg-surface-blue-2",
        green: "text-text-icons-green-1 bg-surface-green-3",
        orange: "text-text-icons-amber-1 bg-surface-amber-2",
        red: "text-text-icons-red-1 bg-surface-red-4"
      }[props.theme];
      let subtleClasses = {
        gray: "text-text-icons-gray-6 bg-surface-gray-2",
        blue: "text-text-icons-blue-2 bg-surface-blue-1",
        green: "text-text-icons-green-3 bg-surface-green-2",
        orange: "text-text-icons-amber-3 bg-surface-amber-1",
        red: "text-text-icons-red-4 bg-surface-red-1"
      }[props.theme];
      let outlineClasses = {
        gray: "text-text-icons-gray-6 bg-transparent border border-outline-gray-1",
        blue: "text-text-icons-blue-2 bg-transparent border border-outline-blue-1",
        green: "text-text-icons-green-3 bg-transparent border border-outline-green-2",
        orange: "text-text-icons-amber-3 bg-transparent border border-outline-amber-2",
        red: "text-text-icons-red-4 bg-transparent border border-outline-red-2"
      }[props.theme];
      let ghostClasses = {
        gray: "text-text-icons-gray-6 bg-transparent",
        blue: "text-text-icons-blue-2 bg-transparent",
        green: "text-text-icons-green-3 bg-transparent",
        orange: "text-text-icons-amber-3 bg-transparent",
        red: "text-text-icons-red-4 bg-transparent"
      }[props.theme];
      let variantClasses = {
        subtle: subtleClasses,
        solid: solidClasses,
        outline: outlineClasses,
        ghost: ghostClasses
      }[props.variant];
      let sizeClasses = {
        sm: "h-4 text-xs px-1.5",
        md: "h-5 text-xs px-1.5",
        lg: "h-6 text-sm px-2"
      }[props.size];
      return [variantClasses, sizeClasses];
    });
    const __returned__ = { props, classes };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["inline-flex select-none items-center gap-1 rounded-full", $setup.classes])
    },
    [
      _ctx.$slots.prefix ? (openBlock(), createElementBlock(
        "div",
        {
          key: 0,
          class: normalizeClass([$setup.props.size == "lg" ? "max-h-6" : "max-h-4"])
        },
        [
          renderSlot(_ctx.$slots, "prefix")
        ],
        2
        /* CLASS */
      )) : createCommentVNode("v-if", true),
      renderSlot(_ctx.$slots, "default", {}, () => {
        var _a;
        return [
          createTextVNode(
            toDisplayString((_a = $setup.props.label) == null ? void 0 : _a.toString()),
            1
            /* TEXT */
          )
        ];
      }),
      _ctx.$slots.suffix ? (openBlock(), createElementBlock(
        "div",
        {
          key: 1,
          class: normalizeClass([$setup.props.size == "lg" ? "max-h-6" : "max-h-4"])
        },
        [
          renderSlot(_ctx.$slots, "suffix")
        ],
        2
        /* CLASS */
      )) : createCommentVNode("v-if", true)
    ],
    2
    /* CLASS */
  );
}
_sfc_main.__file = "src/components/Badge.vue";
const Badge = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/frappe-ui/frappe-ui/src/components/Badge.vue"]]);
export {
  Badge as B
};
