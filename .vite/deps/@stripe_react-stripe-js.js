import {
  require_prop_types
} from "./chunk-X7VAHS4H.js";
import "./chunk-UCPK3CVF.js";
import {
  require_react
} from "./chunk-ST3U5LCA.js";
import {
  __toESM
} from "./chunk-DFKQJ226.js";

// node_modules/@stripe/react-stripe-js/dist/react-stripe.esm.js
var import_react = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var usePrevious = function usePrevious2(value) {
  var ref = import_react.default.useRef(value);
  import_react.default.useEffect(function() {
    ref.current = value;
  }, [value]);
  return ref.current;
};
var isUnknownObject = function isUnknownObject2(raw) {
  return raw !== null && _typeof(raw) === "object";
};
var isPromise = function isPromise2(raw) {
  return isUnknownObject(raw) && typeof raw.then === "function";
};
var isStripe = function isStripe2(raw) {
  return isUnknownObject(raw) && typeof raw.elements === "function" && typeof raw.createToken === "function" && typeof raw.createPaymentMethod === "function" && typeof raw.confirmCardPayment === "function";
};
var PLAIN_OBJECT_STR = "[object Object]";
var isEqual = function isEqual2(left, right) {
  if (!isUnknownObject(left) || !isUnknownObject(right)) {
    return left === right;
  }
  var leftArray = Array.isArray(left);
  var rightArray = Array.isArray(right);
  if (leftArray !== rightArray)
    return false;
  var leftPlainObject = Object.prototype.toString.call(left) === PLAIN_OBJECT_STR;
  var rightPlainObject = Object.prototype.toString.call(right) === PLAIN_OBJECT_STR;
  if (leftPlainObject !== rightPlainObject)
    return false;
  if (!leftPlainObject && !leftArray)
    return left === right;
  var leftKeys = Object.keys(left);
  var rightKeys = Object.keys(right);
  if (leftKeys.length !== rightKeys.length)
    return false;
  var keySet = {};
  for (var i = 0; i < leftKeys.length; i += 1) {
    keySet[leftKeys[i]] = true;
  }
  for (var _i = 0; _i < rightKeys.length; _i += 1) {
    keySet[rightKeys[_i]] = true;
  }
  var allKeys = Object.keys(keySet);
  if (allKeys.length !== leftKeys.length) {
    return false;
  }
  var l = left;
  var r = right;
  var pred = function pred2(key) {
    return isEqual2(l[key], r[key]);
  };
  return allKeys.every(pred);
};
var extractAllowedOptionsUpdates = function extractAllowedOptionsUpdates2(options, prevOptions, immutableKeys) {
  if (!isUnknownObject(options)) {
    return null;
  }
  return Object.keys(options).reduce(function(newOptions, key) {
    var isUpdated = !isUnknownObject(prevOptions) || !isEqual(options[key], prevOptions[key]);
    if (immutableKeys.includes(key)) {
      if (isUpdated) {
        console.warn("Unsupported prop change: options.".concat(key, " is not a mutable property."));
      }
      return newOptions;
    }
    if (!isUpdated) {
      return newOptions;
    }
    return _objectSpread2(_objectSpread2({}, newOptions || {}), {}, _defineProperty({}, key, options[key]));
  }, null);
};
var INVALID_STRIPE_ERROR = "Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.";
var validateStripe = function validateStripe2(maybeStripe) {
  if (maybeStripe === null || isStripe(maybeStripe)) {
    return maybeStripe;
  }
  throw new Error(INVALID_STRIPE_ERROR);
};
var parseStripeProp = function parseStripeProp2(raw) {
  if (isPromise(raw)) {
    return {
      tag: "async",
      stripePromise: Promise.resolve(raw).then(validateStripe)
    };
  }
  var stripe = validateStripe(raw);
  if (stripe === null) {
    return {
      tag: "empty"
    };
  }
  return {
    tag: "sync",
    stripe
  };
};
var ElementsContext = import_react.default.createContext(null);
ElementsContext.displayName = "ElementsContext";
var parseElementsContext = function parseElementsContext2(ctx, useCase) {
  if (!ctx) {
    throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(useCase, " in an <Elements> provider."));
  }
  return ctx;
};
var CartElementContext = import_react.default.createContext(null);
CartElementContext.displayName = "CartElementContext";
var parseCartElementContext = function parseCartElementContext2(ctx, useCase) {
  if (!ctx) {
    throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(useCase, " in an <Elements> provider."));
  }
  return ctx;
};
var Elements = function Elements2(_ref) {
  var rawStripeProp = _ref.stripe, options = _ref.options, children = _ref.children;
  var parsed = import_react.default.useMemo(function() {
    return parseStripeProp(rawStripeProp);
  }, [rawStripeProp]);
  var _React$useState = import_react.default.useState(null), _React$useState2 = _slicedToArray(_React$useState, 2), cart = _React$useState2[0], setCart = _React$useState2[1];
  var _React$useState3 = import_react.default.useState(null), _React$useState4 = _slicedToArray(_React$useState3, 2), cartState = _React$useState4[0], setCartState = _React$useState4[1];
  var _React$useState5 = import_react.default.useState(function() {
    return {
      stripe: parsed.tag === "sync" ? parsed.stripe : null,
      elements: parsed.tag === "sync" ? parsed.stripe.elements(options) : null
    };
  }), _React$useState6 = _slicedToArray(_React$useState5, 2), ctx = _React$useState6[0], setContext = _React$useState6[1];
  import_react.default.useEffect(function() {
    var isMounted = true;
    var safeSetContext = function safeSetContext2(stripe) {
      setContext(function(ctx2) {
        if (ctx2.stripe)
          return ctx2;
        return {
          stripe,
          elements: stripe.elements(options)
        };
      });
    };
    if (parsed.tag === "async" && !ctx.stripe) {
      parsed.stripePromise.then(function(stripe) {
        if (stripe && isMounted) {
          safeSetContext(stripe);
        }
      });
    } else if (parsed.tag === "sync" && !ctx.stripe) {
      safeSetContext(parsed.stripe);
    }
    return function() {
      isMounted = false;
    };
  }, [parsed, ctx, options]);
  var prevStripe = usePrevious(rawStripeProp);
  import_react.default.useEffect(function() {
    if (prevStripe !== null && prevStripe !== rawStripeProp) {
      console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.");
    }
  }, [prevStripe, rawStripeProp]);
  var prevOptions = usePrevious(options);
  import_react.default.useEffect(function() {
    if (!ctx.elements) {
      return;
    }
    var updates = extractAllowedOptionsUpdates(options, prevOptions, ["clientSecret", "fonts"]);
    if (updates) {
      ctx.elements.update(updates);
    }
  }, [options, prevOptions, ctx.elements]);
  import_react.default.useEffect(function() {
    var anyStripe = ctx.stripe;
    if (!anyStripe || !anyStripe._registerWrapper || !anyStripe.registerAppInfo) {
      return;
    }
    anyStripe._registerWrapper({
      name: "react-stripe-js",
      version: "2.1.0"
    });
    anyStripe.registerAppInfo({
      name: "react-stripe-js",
      version: "2.1.0",
      url: "https://stripe.com/docs/stripe-js/react"
    });
  }, [ctx.stripe]);
  return import_react.default.createElement(ElementsContext.Provider, {
    value: ctx
  }, import_react.default.createElement(CartElementContext.Provider, {
    value: {
      cart,
      setCart,
      cartState,
      setCartState
    }
  }, children));
};
Elements.propTypes = {
  stripe: import_prop_types.default.any,
  options: import_prop_types.default.object
};
var useElementsContextWithUseCase = function useElementsContextWithUseCase2(useCaseMessage) {
  var ctx = import_react.default.useContext(ElementsContext);
  return parseElementsContext(ctx, useCaseMessage);
};
var useCartElementContextWithUseCase = function useCartElementContextWithUseCase2(useCaseMessage) {
  var ctx = import_react.default.useContext(CartElementContext);
  return parseCartElementContext(ctx, useCaseMessage);
};
var useElements = function useElements2() {
  var _useElementsContextWi = useElementsContextWithUseCase("calls useElements()"), elements = _useElementsContextWi.elements;
  return elements;
};
var useStripe = function useStripe2() {
  var _useElementsContextWi2 = useElementsContextWithUseCase("calls useStripe()"), stripe = _useElementsContextWi2.stripe;
  return stripe;
};
var useCartElement = function useCartElement2() {
  var _useCartElementContex = useCartElementContextWithUseCase("calls useCartElement()"), cart = _useCartElementContex.cart;
  return cart;
};
var useCartElementState = function useCartElementState2() {
  var _useCartElementContex2 = useCartElementContextWithUseCase("calls useCartElementState()"), cartState = _useCartElementContex2.cartState;
  return cartState;
};
var ElementsConsumer = function ElementsConsumer2(_ref2) {
  var children = _ref2.children;
  var ctx = useElementsContextWithUseCase("mounts <ElementsConsumer>");
  return children(ctx);
};
ElementsConsumer.propTypes = {
  children: import_prop_types.default.func.isRequired
};
var useAttachEvent = function useAttachEvent2(element, event, cb) {
  var cbDefined = !!cb;
  var cbRef = import_react.default.useRef(cb);
  import_react.default.useEffect(function() {
    cbRef.current = cb;
  }, [cb]);
  import_react.default.useEffect(function() {
    if (!cbDefined || !element) {
      return function() {
      };
    }
    var decoratedCb = function decoratedCb2() {
      if (cbRef.current) {
        cbRef.current.apply(cbRef, arguments);
      }
    };
    element.on(event, decoratedCb);
    return function() {
      element.off(event, decoratedCb);
    };
  }, [cbDefined, event, element, cbRef]);
};
var capitalized = function capitalized2(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
var createElementComponent = function createElementComponent2(type, isServer2) {
  var displayName = "".concat(capitalized(type), "Element");
  var ClientElement = function ClientElement2(_ref) {
    var id = _ref.id, className = _ref.className, _ref$options = _ref.options, options = _ref$options === void 0 ? {} : _ref$options, onBlur = _ref.onBlur, onFocus = _ref.onFocus, onReady = _ref.onReady, onChange = _ref.onChange, onEscape = _ref.onEscape, onClick = _ref.onClick, onLoadError = _ref.onLoadError, onLoaderStart = _ref.onLoaderStart, onNetworksChange = _ref.onNetworksChange, onCheckout = _ref.onCheckout, onLineItemClick = _ref.onLineItemClick, onConfirm = _ref.onConfirm, onCancel = _ref.onCancel, onShippingAddressChange = _ref.onShippingAddressChange, onShippingRateChange = _ref.onShippingRateChange;
    var _useElementsContextWi = useElementsContextWithUseCase("mounts <".concat(displayName, ">")), elements = _useElementsContextWi.elements;
    var _React$useState = import_react.default.useState(null), _React$useState2 = _slicedToArray(_React$useState, 2), element = _React$useState2[0], setElement = _React$useState2[1];
    var elementRef = import_react.default.useRef(null);
    var domNode = import_react.default.useRef(null);
    var _useCartElementContex = useCartElementContextWithUseCase("mounts <".concat(displayName, ">")), setCart = _useCartElementContex.setCart, setCartState = _useCartElementContex.setCartState;
    useAttachEvent(element, "blur", onBlur);
    useAttachEvent(element, "focus", onFocus);
    useAttachEvent(element, "escape", onEscape);
    useAttachEvent(element, "click", onClick);
    useAttachEvent(element, "loaderror", onLoadError);
    useAttachEvent(element, "loaderstart", onLoaderStart);
    useAttachEvent(element, "networkschange", onNetworksChange);
    useAttachEvent(element, "lineitemclick", onLineItemClick);
    useAttachEvent(element, "confirm", onConfirm);
    useAttachEvent(element, "cancel", onCancel);
    useAttachEvent(element, "shippingaddresschange", onShippingAddressChange);
    useAttachEvent(element, "shippingratechange", onShippingRateChange);
    var readyCallback;
    if (type === "cart") {
      readyCallback = function readyCallback2(event) {
        setCartState(event);
        onReady && onReady(event);
      };
    } else if (onReady) {
      if (type === "expressCheckout") {
        readyCallback = onReady;
      } else {
        readyCallback = function readyCallback2() {
          onReady(element);
        };
      }
    }
    useAttachEvent(element, "ready", readyCallback);
    var changeCallback = type === "cart" ? function(event) {
      setCartState(event);
      onChange && onChange(event);
    } : onChange;
    useAttachEvent(element, "change", changeCallback);
    var checkoutCallback = type === "cart" ? function(event) {
      setCartState(event);
      onCheckout && onCheckout(event);
    } : onCheckout;
    useAttachEvent(element, "checkout", checkoutCallback);
    import_react.default.useLayoutEffect(function() {
      if (elementRef.current === null && elements && domNode.current !== null) {
        var newElement = elements.create(type, options);
        if (type === "cart" && setCart) {
          setCart(newElement);
        }
        elementRef.current = newElement;
        setElement(newElement);
        newElement.mount(domNode.current);
      }
    }, [elements, options, setCart]);
    var prevOptions = usePrevious(options);
    import_react.default.useEffect(function() {
      if (!elementRef.current) {
        return;
      }
      var updates = extractAllowedOptionsUpdates(options, prevOptions, ["paymentRequest"]);
      if (updates) {
        elementRef.current.update(updates);
      }
    }, [options, prevOptions]);
    import_react.default.useLayoutEffect(function() {
      return function() {
        if (elementRef.current) {
          elementRef.current.destroy();
          elementRef.current = null;
        }
      };
    }, []);
    return import_react.default.createElement("div", {
      id,
      className,
      ref: domNode
    });
  };
  var ServerElement = function ServerElement2(props) {
    useElementsContextWithUseCase("mounts <".concat(displayName, ">"));
    useCartElementContextWithUseCase("mounts <".concat(displayName, ">"));
    var id = props.id, className = props.className;
    return import_react.default.createElement("div", {
      id,
      className
    });
  };
  var Element = isServer2 ? ServerElement : ClientElement;
  Element.propTypes = {
    id: import_prop_types.default.string,
    className: import_prop_types.default.string,
    onChange: import_prop_types.default.func,
    onBlur: import_prop_types.default.func,
    onFocus: import_prop_types.default.func,
    onReady: import_prop_types.default.func,
    onEscape: import_prop_types.default.func,
    onClick: import_prop_types.default.func,
    onLoadError: import_prop_types.default.func,
    onLoaderStart: import_prop_types.default.func,
    onNetworksChange: import_prop_types.default.func,
    onCheckout: import_prop_types.default.func,
    onLineItemClick: import_prop_types.default.func,
    onConfirm: import_prop_types.default.func,
    onCancel: import_prop_types.default.func,
    onShippingAddressChange: import_prop_types.default.func,
    onShippingRateChange: import_prop_types.default.func,
    options: import_prop_types.default.object
  };
  Element.displayName = displayName;
  Element.__elementType = type;
  return Element;
};
var isServer = typeof window === "undefined";
var AuBankAccountElement = createElementComponent("auBankAccount", isServer);
var CardElement = createElementComponent("card", isServer);
var CardNumberElement = createElementComponent("cardNumber", isServer);
var CardExpiryElement = createElementComponent("cardExpiry", isServer);
var CardCvcElement = createElementComponent("cardCvc", isServer);
var FpxBankElement = createElementComponent("fpxBank", isServer);
var IbanElement = createElementComponent("iban", isServer);
var IdealBankElement = createElementComponent("idealBank", isServer);
var P24BankElement = createElementComponent("p24Bank", isServer);
var EpsBankElement = createElementComponent("epsBank", isServer);
var PaymentElement = createElementComponent("payment", isServer);
var ExpressCheckoutElement = createElementComponent("expressCheckout", isServer);
var PaymentRequestButtonElement = createElementComponent("paymentRequestButton", isServer);
var LinkAuthenticationElement = createElementComponent("linkAuthentication", isServer);
var AddressElement = createElementComponent("address", isServer);
var ShippingAddressElement = createElementComponent("shippingAddress", isServer);
var CartElement = createElementComponent("cart", isServer);
var PaymentMethodMessagingElement = createElementComponent("paymentMethodMessaging", isServer);
var AffirmMessageElement = createElementComponent("affirmMessage", isServer);
var AfterpayClearpayMessageElement = createElementComponent("afterpayClearpayMessage", isServer);
export {
  AddressElement,
  AffirmMessageElement,
  AfterpayClearpayMessageElement,
  AuBankAccountElement,
  CardCvcElement,
  CardElement,
  CardExpiryElement,
  CardNumberElement,
  CartElement,
  Elements,
  ElementsConsumer,
  EpsBankElement,
  ExpressCheckoutElement,
  FpxBankElement,
  IbanElement,
  IdealBankElement,
  LinkAuthenticationElement,
  P24BankElement,
  PaymentElement,
  PaymentMethodMessagingElement,
  PaymentRequestButtonElement,
  ShippingAddressElement,
  useCartElement,
  useCartElementState,
  useElements,
  useStripe
};
//# sourceMappingURL=@stripe_react-stripe-js.js.map
