import { ay as defineComponent, aA as resolveComponent, aB as openBlock, aC as createBlock, aD as withCtx, aP as h, aH as createCommentVNode, aE as createVNode } from "./vendor-c2829c47.js";
import { D as Dropdown } from "./Dropdown-f3c124d4.js";
import { F as FeatherIcon } from "./FeatherIcon-7fc9b90b.js";
import { B as Button } from "./Button-ce9b9a9b.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./Popover-9c2393e3.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Dropdown.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { h, Dropdown, FeatherIcon, Button };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { layout: { type: "grid", width: 300 } }, {
    controls: withCtx(() => [
      createCommentVNode(' <HstText v-model="state.label" title="Label" />\n      <HstSelect v-model="state.size" :options="sizes" title="Size" /> ')
    ]),
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Basic" }, {
        default: withCtx(() => [
          createVNode($setup["Dropdown"], {
            options: [
              {
                label: "Edit Title",
                onClick: () => {
                },
                icon: () => $setup.h($setup.FeatherIcon, { name: "edit-2" })
              },
              {
                label: "Manage Members",
                onClick: () => {
                },
                icon: () => $setup.h($setup.FeatherIcon, { name: "users" })
              },
              {
                label: "Delete this project",
                onClick: () => {
                },
                icon: () => $setup.h($setup.FeatherIcon, { name: "trash" })
              }
            ]
          }, null, 8, ["options"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Button prop" }, {
        default: withCtx(() => [
          createVNode($setup["Dropdown"], {
            options: [
              {
                label: "Edit Title",
                onClick: () => {
                }
              },
              {
                label: "Manage Members",
                onClick: () => {
                }
              },
              {
                label: "Delete this project",
                onClick: () => {
                }
              }
            ],
            button: {
              label: "Actions"
            }
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Custom Button and Groups" }, {
        default: withCtx(() => [
          createVNode($setup["Dropdown"], {
            options: [
              {
                group: "Manage",
                items: [
                  {
                    label: "Edit Title",
                    icon: () => $setup.h($setup.FeatherIcon, { name: "edit" })
                  },
                  {
                    label: "Manage Members",
                    icon: () => $setup.h($setup.FeatherIcon, { name: "users" })
                  }
                ]
              },
              {
                group: "Delete",
                items: [
                  {
                    label: "Delete users",
                    icon: () => $setup.h($setup.FeatherIcon, { name: "edit" })
                  },
                  {
                    label: "Delete this project",
                    icon: () => $setup.h($setup.FeatherIcon, { name: "trash" })
                  }
                ]
              }
            ]
          }, {
            default: withCtx(() => [
              createVNode($setup["Button"], null, {
                icon: withCtx(() => [
                  createVNode($setup["FeatherIcon"], {
                    name: "more-horizontal",
                    class: "h-4 w-4"
                  })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["options"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/Dropdown.story.vue";
const Dropdown_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/frappe-ui/frappe-ui/src/components/Dropdown.story.vue"]]);
export {
  Dropdown_story as default
};
