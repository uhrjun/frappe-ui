import { bU as Ye, bV as Ge, bW as Ve, bX as he, bY as Se, az as ref, aA as resolveComponent, aB as openBlock, aC as createBlock, aD as withCtx, aE as createVNode, aF as createBaseVNode, aW as normalizeClass, aT as renderSlot, aG as createElementBlock, aH as createCommentVNode, aN as toDisplayString, aU as normalizeProps, aV as guardReactiveProps, aK as Fragment, aJ as renderList, aL as mergeProps, aM as createTextVNode } from "./vendor-8a63165b.js";
import { B as Button } from "./Button-82883e94.js";
import { F as FeatherIcon } from "./FeatherIcon-2fe58b00.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  name: "Dialog",
  props: {
    modelValue: {
      type: Boolean,
      required: true
    },
    options: {
      type: Object,
      default() {
        return {};
      }
    },
    disableOutsideClickToClose: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue", "close", "after-leave"],
  components: {
    HDialog: Ye,
    DialogPanel: Ge,
    DialogTitle: Ve,
    TransitionChild: he,
    TransitionRoot: Se,
    Button,
    FeatherIcon
  },
  data() {
    return {
      dialogActions: []
    };
  },
  watch: {
    "options.actions": {
      handler(actions) {
        if (!actions)
          return;
        this.dialogActions = actions.map((action) => {
          let loading = ref(false);
          return {
            ...action,
            loading,
            onClick: !action.onClick ? this.close : async () => {
              loading.value = true;
              try {
                await action.onClick(this.close);
              } finally {
                loading.value = false;
              }
            }
          };
        });
      },
      immediate: true
    }
  },
  methods: {
    close() {
      this.open = false;
    }
  },
  computed: {
    open: {
      get() {
        return this.modelValue;
      },
      set(val) {
        this.$emit("update:modelValue", val);
        if (!val) {
          this.$emit("close");
        }
      }
    },
    icon() {
      var _a;
      if (!((_a = this.options) == null ? void 0 : _a.icon))
        return null;
      let icon = this.options.icon;
      if (typeof icon === "string") {
        icon = { name: icon };
      }
      return icon;
    },
    dialogPositionClasses() {
      var _a;
      let position = ((_a = this.options) == null ? void 0 : _a.position) || "center";
      return {
        "justify-center": position === "center",
        "pt-[20vh]": position === "top"
      };
    }
  }
};
const _hoisted_1 = ["data-dialog"];
const _hoisted_2 = { class: "bg-white px-4 pb-6 pt-5 sm:px-6" };
const _hoisted_3 = { class: "flex" };
const _hoisted_4 = { class: "w-full flex-1" };
const _hoisted_5 = { class: "mb-6 flex items-center justify-between" };
const _hoisted_6 = { class: "flex items-center space-x-2" };
const _hoisted_7 = { class: "text-2xl font-semibold leading-6 text-gray-900" };
const _hoisted_8 = {
  key: 0,
  class: "text-p-base text-gray-700"
};
const _hoisted_9 = {
  key: 0,
  class: "px-4 pb-7 pt-4 sm:px-6"
};
const _hoisted_10 = { class: "space-y-2" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TransitionChild = resolveComponent("TransitionChild");
  const _component_FeatherIcon = resolveComponent("FeatherIcon");
  const _component_DialogTitle = resolveComponent("DialogTitle");
  const _component_Button = resolveComponent("Button");
  const _component_DialogPanel = resolveComponent("DialogPanel");
  const _component_HDialog = resolveComponent("HDialog");
  const _component_TransitionRoot = resolveComponent("TransitionRoot");
  return openBlock(), createBlock(_component_TransitionRoot, {
    as: "template",
    show: $options.open,
    onAfterLeave: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("after-leave"))
  }, {
    default: withCtx(() => [
      createVNode(_component_HDialog, {
        as: "div",
        class: "fixed inset-0 z-10 overflow-y-auto",
        onClose: _cache[0] || (_cache[0] = ($event) => !$props.disableOutsideClickToClose && $options.close())
      }, {
        default: withCtx(() => [
          createBaseVNode(
            "div",
            {
              class: normalizeClass(["flex min-h-screen flex-col items-center px-4 py-4 text-center", $options.dialogPositionClasses])
            },
            [
              createVNode(_component_TransitionChild, {
                as: "template",
                enter: "ease-out duration-150",
                "enter-from": "opacity-0",
                "enter-to": "opacity-100",
                leave: "ease-in duration-150",
                "leave-from": "opacity-100",
                "leave-to": "opacity-0"
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", {
                    class: "fixed inset-0 bg-black-overlay-200 transition-opacity",
                    "data-dialog": $props.options.title
                  }, null, 8, _hoisted_1)
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_TransitionChild, {
                as: "template",
                enter: "ease-out duration-150",
                "enter-from": "opacity-50 translate-y-2 scale-95",
                "enter-to": "opacity-100 translate-y-0 scale-100",
                leave: "ease-in duration-150",
                "leave-from": "opacity-100 translate-y-0 scale-100",
                "leave-to": "opacity-50 translate-y-4 translate-y-4 scale-95"
              }, {
                default: withCtx(() => [
                  createVNode(_component_DialogPanel, {
                    class: normalizeClass(["my-8 inline-block w-full transform overflow-hidden rounded-xl bg-white text-left align-middle shadow-xl transition-all", {
                      "max-w-7xl": $props.options.size === "7xl",
                      "max-w-6xl": $props.options.size === "6xl",
                      "max-w-5xl": $props.options.size === "5xl",
                      "max-w-4xl": $props.options.size === "4xl",
                      "max-w-3xl": $props.options.size === "3xl",
                      "max-w-2xl": $props.options.size === "2xl",
                      "max-w-xl": $props.options.size === "xl",
                      "max-w-lg": $props.options.size === "lg" || !$props.options.size,
                      "max-w-md": $props.options.size === "md",
                      "max-w-sm": $props.options.size === "sm",
                      "max-w-xs": $props.options.size === "xs"
                    }])
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "body", {}, () => [
                        renderSlot(_ctx.$slots, "body-main", {}, () => [
                          createBaseVNode("div", _hoisted_2, [
                            createBaseVNode("div", _hoisted_3, [
                              createBaseVNode("div", _hoisted_4, [
                                createBaseVNode("div", _hoisted_5, [
                                  createBaseVNode("div", _hoisted_6, [
                                    $options.icon ? (openBlock(), createElementBlock(
                                      "div",
                                      {
                                        key: 0,
                                        class: normalizeClass(["flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full", {
                                          "bg-gray-100": !$options.icon.appearance,
                                          "bg-yellow-100": $options.icon.appearance === "warning",
                                          "bg-blue-100": $options.icon.appearance === "info",
                                          "bg-red-100": $options.icon.appearance === "danger",
                                          "bg-green-100": $options.icon.appearance === "success"
                                        }])
                                      },
                                      [
                                        createVNode(_component_FeatherIcon, {
                                          name: $options.icon.name,
                                          class: normalizeClass(["h-4 w-4", {
                                            "text-gray-600": !$options.icon.appearance,
                                            "text-yellow-600": $options.icon.appearance === "warning",
                                            "text-blue-600": $options.icon.appearance === "info",
                                            "text-red-600": $options.icon.appearance === "danger",
                                            "text-green-600": $options.icon.appearance === "success"
                                          }]),
                                          "aria-hidden": "true"
                                        }, null, 8, ["name", "class"])
                                      ],
                                      2
                                      /* CLASS */
                                    )) : createCommentVNode("v-if", true),
                                    createVNode(_component_DialogTitle, { as: "header" }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "body-title", {}, () => [
                                          createBaseVNode(
                                            "h3",
                                            _hoisted_7,
                                            toDisplayString($props.options.title || "Untitled"),
                                            1
                                            /* TEXT */
                                          )
                                        ])
                                      ]),
                                      _: 3
                                      /* FORWARDED */
                                    })
                                  ]),
                                  createVNode(_component_Button, {
                                    variant: "ghost",
                                    onClick: $options.close
                                  }, {
                                    icon: withCtx(() => _cache[2] || (_cache[2] = [
                                      createBaseVNode(
                                        "svg",
                                        {
                                          width: "16",
                                          height: "16",
                                          viewBox: "0 0 16 16",
                                          fill: "none",
                                          xmlns: "http://www.w3.org/2000/svg"
                                        },
                                        [
                                          createBaseVNode("path", {
                                            "fill-rule": "evenodd",
                                            "clip-rule": "evenodd",
                                            d: "M12.8567 3.85355C13.052 3.65829 13.052 3.34171 12.8567 3.14645C12.6615 2.95118 12.3449 2.95118 12.1496 3.14645L8.00201 7.29405L3.85441 3.14645C3.65914 2.95118 3.34256 2.95118 3.1473 3.14645C2.95204 3.34171 2.95204 3.65829 3.1473 3.85355L7.29491 8.00116L3.14645 12.1496C2.95118 12.3449 2.95118 12.6615 3.14645 12.8567C3.34171 13.052 3.65829 13.052 3.85355 12.8567L8.00201 8.70827L12.1505 12.8567C12.3457 13.052 12.6623 13.052 12.8576 12.8567C13.0528 12.6615 13.0528 12.3449 12.8576 12.1496L8.70912 8.00116L12.8567 3.85355Z",
                                            fill: "#383838"
                                          })
                                        ],
                                        -1
                                        /* HOISTED */
                                      )
                                    ])),
                                    _: 1
                                    /* STABLE */
                                  }, 8, ["onClick"])
                                ]),
                                renderSlot(_ctx.$slots, "body-content", {}, () => [
                                  $props.options.message ? (openBlock(), createElementBlock(
                                    "p",
                                    _hoisted_8,
                                    toDisplayString($props.options.message),
                                    1
                                    /* TEXT */
                                  )) : createCommentVNode("v-if", true)
                                ])
                              ])
                            ])
                          ])
                        ]),
                        $data.dialogActions.length || _ctx.$slots.actions ? (openBlock(), createElementBlock("div", _hoisted_9, [
                          renderSlot(_ctx.$slots, "actions", normalizeProps(guardReactiveProps({ close: $options.close })), () => [
                            createBaseVNode("div", _hoisted_10, [
                              (openBlock(true), createElementBlock(
                                Fragment,
                                null,
                                renderList($data.dialogActions, (action) => {
                                  return openBlock(), createBlock(
                                    _component_Button,
                                    mergeProps({
                                      class: "w-full",
                                      key: action.label,
                                      ref_for: true
                                    }, action),
                                    {
                                      default: withCtx(() => [
                                        createTextVNode(
                                          toDisplayString(action.label),
                                          1
                                          /* TEXT */
                                        )
                                      ]),
                                      _: 2
                                      /* DYNAMIC */
                                    },
                                    1040
                                    /* FULL_PROPS, DYNAMIC_SLOTS */
                                  );
                                }),
                                128
                                /* KEYED_FRAGMENT */
                              ))
                            ])
                          ])
                        ])) : createCommentVNode("v-if", true)
                      ])
                    ]),
                    _: 3
                    /* FORWARDED */
                  }, 8, ["class"])
                ]),
                _: 3
                /* FORWARDED */
              })
            ],
            2
            /* CLASS */
          )
        ]),
        _: 3
        /* FORWARDED */
      })
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["show"]);
}
_sfc_main.__file = "src/components/Dialog.vue";
const Dialog = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/frappe-ui/frappe-ui/src/components/Dialog.vue"]]);
export {
  Dialog as D
};
