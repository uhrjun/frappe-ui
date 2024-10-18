import { aB as openBlock, aG as createElementBlock, aF as createBaseVNode, ay as defineComponent, br as useSlots, bH as useRouter, aQ as computed, aC as createBlock, aW as normalizeClass, aT as renderSlot, aH as createCommentVNode, aK as Fragment, aM as createTextVNode, aN as toDisplayString, aL as mergeProps } from "./vendor-c2829c47.js";
import { F as FeatherIcon } from "./FeatherIcon-7fc9b90b.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main$1 = {
  name: "LoadingIndicator"
};
const _hoisted_1$1 = {
  class: "max-w-xs animate-spin",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _cache[0] || (_cache[0] = [
    createBaseVNode(
      "circle",
      {
        class: "opacity-25",
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        "stroke-width": "4"
      },
      null,
      -1
      /* HOISTED */
    ),
    createBaseVNode(
      "path",
      {
        class: "opacity-75",
        fill: "currentColor",
        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      },
      null,
      -1
      /* HOISTED */
    )
  ]));
}
_sfc_main$1.__file = "src/components/LoadingIndicator.vue";
const LoadingIndicator = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/frappe-ui/frappe-ui/src/components/LoadingIndicator.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Button",
  props: {
    theme: { type: String, required: false, default: "gray" },
    size: { type: String, required: false, default: "sm" },
    variant: { type: String, required: false, default: "subtle" },
    label: { type: String, required: false },
    icon: { type: String, required: false },
    iconLeft: { type: String, required: false },
    iconRight: { type: String, required: false },
    loading: { type: Boolean, required: false, default: false },
    loadingText: { type: String, required: false },
    disabled: { type: Boolean, required: false, default: false },
    route: { type: [String, Object], required: false },
    link: { type: String, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const slots = useSlots();
    const router = useRouter();
    const buttonClasses = computed(() => {
      let solidClasses = {
        gray: "text-white bg-gray-900 hover:bg-gray-800 active:bg-gray-700",
        blue: "text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700",
        green: "text-white bg-green-600 hover:bg-green-700 active:bg-green-800",
        red: "text-white bg-red-600 hover:bg-red-700 active:bg-red-800"
      }[props.theme];
      let subtleClasses = {
        gray: "text-gray-800 bg-gray-100 hover:bg-gray-200 active:bg-gray-300",
        blue: "text-blue-600 bg-blue-100 hover:bg-blue-200 active:bg-blue-300",
        green: "text-green-800 bg-green-100 hover:bg-green-200 active:bg-green-300",
        red: "text-red-700 bg-red-100 hover:bg-red-200 active:bg-red-300"
      }[props.theme];
      let outlineClasses = {
        gray: "text-gray-800 bg-white border border-gray-300 hover:border-gray-400 active:border-gray-400 active:bg-gray-300",
        blue: "text-blue-600 bg-white border border-blue-300 hover:border-blue-400 active:border-blue-400 active:bg-blue-300",
        green: "text-green-800 bg-white border border-green-400 hover:border-green-500 active:border-green-500 active:bg-green-300",
        red: "text-red-700 bg-white border border-red-300 hover:border-red-400 active:border-red-400 active:bg-red-200"
      }[props.theme];
      let ghostClasses = {
        gray: "text-gray-800 bg-transparent hover:bg-gray-200 active:bg-gray-300",
        blue: "text-blue-600 bg-transparent hover:bg-blue-200 active:bg-blue-300",
        green: "text-green-800 bg-transparent hover:bg-green-200 active:bg-green-300",
        red: "text-red-700 bg-transparent hover:bg-red-200 active:bg-red-300"
      }[props.theme];
      let focusClasses = {
        gray: "focus-visible:ring focus-visible:ring-gray-400",
        blue: "focus-visible:ring focus-visible:ring-blue-400",
        green: "focus-visible:ring focus-visible:ring-green-400",
        red: "focus-visible:ring focus-visible:ring-red-400"
      }[props.theme];
      let variantClasses = {
        subtle: subtleClasses,
        solid: solidClasses,
        outline: outlineClasses,
        ghost: ghostClasses
      }[props.variant];
      let themeVariant = `${props.theme}-${props.variant}`;
      let disabledClassesMap = {
        gray: "bg-gray-100 text-gray-500",
        "gray-outline": "bg-gray-100 text-gray-500 border border-gray-300",
        "gray-ghost": "text-gray-500",
        "blue-solid": "bg-blue-300 text-white",
        "blue-subtle": "bg-blue-100 text-blue-400",
        "blue-outline": "bg-blue-100 text-blue-400 border border-blue-300",
        "blue-ghost": "text-blue-400",
        green: "bg-green-100 text-green-500",
        "green-outline": "bg-green-100 text-green-500 border border-green-400",
        "green-ghost": "text-green-500",
        red: "bg-red-100 text-red-400",
        "red-outline": "bg-red-100 text-red-400 border border-red-300",
        "red-ghost": "text-red-400"
      };
      let disabledClasses = disabledClassesMap[themeVariant] || disabledClassesMap[props.theme];
      let sizeClasses = {
        sm: "h-7 text-base px-2 rounded",
        md: "h-8 text-base font-medium px-2.5 rounded",
        lg: "h-10 text-lg font-medium px-3 rounded-md",
        xl: "h-11.5 text-xl font-medium px-3.5 rounded-lg",
        "2xl": "h-13 text-2xl font-medium px-3.5 rounded-xl"
      }[props.size];
      if (isIconButton.value) {
        sizeClasses = {
          sm: "h-7 w-7 rounded",
          md: "h-8 w-8 rounded",
          lg: "h-10 w-10 rounded-md",
          xl: "h-11.5 w-11.5 rounded-lg",
          "2xl": "h-13 w-13 rounded-xl"
        }[props.size];
      }
      return [
        "inline-flex items-center justify-center gap-2 transition-colors focus:outline-none",
        isDisabled.value ? disabledClasses : variantClasses,
        focusClasses,
        sizeClasses
      ];
    });
    const slotClasses = computed(() => {
      let classes = {
        sm: "h-4",
        md: "h-4.5",
        lg: "h-5",
        xl: "h-6",
        "2xl": "h-6"
      }[props.size];
      return classes;
    });
    const isDisabled = computed(() => {
      return props.disabled || props.loading;
    });
    const ariaLabel = computed(() => {
      return isIconButton.value ? props.label : null;
    });
    const isIconButton = computed(() => {
      return props.icon || slots.icon;
    });
    const handleClick = () => {
      if (props.route) {
        return router.push(props.route);
      } else if (props.link) {
        return window.open(props.link, "_blank");
      }
    };
    const __returned__ = { props, slots, router, buttonClasses, slotClasses, isDisabled, ariaLabel, isIconButton, handleClick, FeatherIcon, LoadingIndicator };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = ["disabled", "ariaLabel"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", mergeProps(_ctx.$attrs, {
    class: $setup.buttonClasses,
    onClick: $setup.handleClick,
    disabled: $setup.isDisabled,
    ariaLabel: $setup.ariaLabel
  }), [
    $props.loading ? (openBlock(), createBlock($setup["LoadingIndicator"], {
      key: 0,
      class: normalizeClass({
        "h-3 w-3": $props.size == "sm",
        "h-[13.5px] w-[13.5px]": $props.size == "md",
        "h-[15px] w-[15px]": $props.size == "lg",
        "h-4.5 w-4.5": $props.size == "xl" || $props.size == "2xl"
      })
    }, null, 8, ["class"])) : _ctx.$slots["prefix"] || $props.iconLeft ? renderSlot(_ctx.$slots, "prefix", { key: 1 }, () => [
      $props.iconLeft ? (openBlock(), createBlock($setup["FeatherIcon"], {
        key: 0,
        name: $props.iconLeft,
        class: normalizeClass($setup.slotClasses),
        "aria-hidden": "true"
      }, null, 8, ["name", "class"])) : createCommentVNode("v-if", true)
    ]) : createCommentVNode("v-if", true),
    $props.loading && $props.loadingText ? (openBlock(), createElementBlock(
      Fragment,
      { key: 2 },
      [
        createTextVNode(
          toDisplayString($props.loadingText),
          1
          /* TEXT */
        )
      ],
      64
      /* STABLE_FRAGMENT */
    )) : $setup.isIconButton && !$props.loading ? (openBlock(), createElementBlock(
      Fragment,
      { key: 3 },
      [
        $props.icon ? (openBlock(), createBlock($setup["FeatherIcon"], {
          key: 0,
          name: $props.icon,
          class: normalizeClass($setup.slotClasses),
          "aria-label": $props.label
        }, null, 8, ["name", "class", "aria-label"])) : _ctx.$slots.icon ? renderSlot(_ctx.$slots, "icon", { key: 1 }) : createCommentVNode("v-if", true)
      ],
      64
      /* STABLE_FRAGMENT */
    )) : (openBlock(), createElementBlock(
      "span",
      {
        key: 4,
        class: normalizeClass({ "sr-only": $setup.isIconButton })
      },
      [
        renderSlot(_ctx.$slots, "default", {}, () => [
          createTextVNode(
            toDisplayString($props.label),
            1
            /* TEXT */
          )
        ])
      ],
      2
      /* CLASS */
    )),
    renderSlot(_ctx.$slots, "suffix", {}, () => [
      $props.iconRight ? (openBlock(), createBlock($setup["FeatherIcon"], {
        key: 0,
        name: $props.iconRight,
        class: normalizeClass($setup.slotClasses),
        "aria-hidden": "true"
      }, null, 8, ["name", "class"])) : createCommentVNode("v-if", true)
    ])
  ], 16, _hoisted_1);
}
_sfc_main.__file = "src/components/Button.vue";
const Button = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/frappe-ui/frappe-ui/src/components/Button.vue"]]);
export {
  Button as B,
  LoadingIndicator as L
};
