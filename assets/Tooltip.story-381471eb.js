import { ay as defineComponent, az as ref, aA as resolveComponent, aB as openBlock, aC as createBlock, aD as withCtx, aE as createVNode, aM as createTextVNode, aF as createBaseVNode } from "./vendor-c2829c47.js";
import { T as Tooltip } from "./Tooltip-049f939d.js";
import { B as Button } from "./Button-ce9b9a9b.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./FeatherIcon-7fc9b90b.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Tooltip.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const placement = ref("top");
    const disabled = ref(true);
    const __returned__ = { placement, disabled, Tooltip, Button };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_HstSelect = resolveComponent("HstSelect");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { layout: { type: "grid", width: "300px" } }, {
    controls: withCtx(() => [
      createVNode(_component_HstSelect, {
        modelValue: $setup.placement,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.placement = $event),
        options: ["top", "right", "bottom", "left"],
        title: "Placement"
      }, null, 8, ["modelValue"])
    ]),
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "with text prop" }, {
        default: withCtx(() => [
          createVNode($setup["Tooltip"], {
            text: "This action cannot be undone",
            "hover-delay": 1,
            placement: $setup.placement
          }, {
            default: withCtx(() => [
              createVNode($setup["Button"], { theme: "red" }, {
                default: withCtx(() => _cache[1] || (_cache[1] = [
                  createTextVNode("Delete")
                ])),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["placement"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "disabled" }, {
        default: withCtx(() => [
          createVNode($setup["Tooltip"], {
            text: "disabled tooltip",
            disabled: $setup.disabled,
            "hover-delay": 1,
            placement: $setup.placement
          }, {
            default: withCtx(() => [
              createVNode($setup["Button"], { theme: "red" }, {
                default: withCtx(() => _cache[2] || (_cache[2] = [
                  createTextVNode("Delete")
                ])),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["disabled", "placement"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "with slot" }, {
        default: withCtx(() => [
          createVNode($setup["Tooltip"], {
            "arrow-class": "fill-white",
            placement: $setup.placement
          }, {
            body: withCtx(() => _cache[3] || (_cache[3] = [
              createBaseVNode(
                "div",
                { class: "min-w-[6rem] rounded bg-white px-2 py-1 text-xs text-gray-900 shadow-xl" },
                " test ",
                -1
                /* HOISTED */
              )
            ])),
            default: withCtx(() => [
              createVNode($setup["Button"], { theme: "red" }, {
                default: withCtx(() => _cache[4] || (_cache[4] = [
                  createTextVNode("Delete")
                ])),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["placement"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/Tooltip/Tooltip.story.vue";
const Tooltip_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/frappe-ui/frappe-ui/src/components/Tooltip/Tooltip.story.vue"]]);
export {
  Tooltip_story as default
};
