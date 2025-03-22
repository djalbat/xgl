(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = {exports: {}}).exports, mod), mod.exports;
  };

  // lib/constants.js
  var require_constants = __commonJS({
    "lib/constants.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        ANGLES_MULTIPLIER: function() {
          return ANGLES_MULTIPLIER;
        },
        ANONYMOUS: function() {
          return ANONYMOUS;
        },
        CANVAS: function() {
          return CANVAS;
        },
        DEGREES_TO_RADIANS_MULTIPLIER: function() {
          return DEGREES_TO_RADIANS_MULTIPLIER;
        },
        DESIGN_CAMERA: function() {
          return DESIGN_CAMERA;
        },
        EXT_TEXTURE_FILTER_ANISOTROPIC: function() {
          return EXT_TEXTURE_FILTER_ANISOTROPIC;
        },
        FUNCTION: function() {
          return FUNCTION;
        },
        GAMING_CAMERA: function() {
          return GAMING_CAMERA;
        },
        HEIGHT: function() {
          return HEIGHT;
        },
        INVERT_MULTIPLIER: function() {
          return INVERT_MULTIPLIER;
        },
        MINIMUM_DISTANCE: function() {
          return MINIMUM_DISTANCE;
        },
        MOUSE_WHEEL_DELTA_MULTIPLIER: function() {
          return MOUSE_WHEEL_DELTA_MULTIPLIER;
        },
        MOZ_EXT_TEXTURE_FILTER_ANISOTROPIC: function() {
          return MOZ_EXT_TEXTURE_FILTER_ANISOTROPIC;
        },
        RELATIVE_MOUSE_COORDINATES_MULTIPLIER: function() {
          return RELATIVE_MOUSE_COORDINATES_MULTIPLIER;
        },
        STRING: function() {
          return STRING;
        },
        VERTICES_LENGTH: function() {
          return VERTICES_LENGTH;
        },
        WEBGL: function() {
          return WEBGL;
        },
        WEBKIT_EXT_TEXTURE_FILTER_ANISOTROPIC: function() {
          return WEBKIT_EXT_TEXTURE_FILTER_ANISOTROPIC;
        },
        WIDTH: function() {
          return WIDTH;
        }
      });
      var WEBGL = "webgl";
      var WIDTH = "width";
      var HEIGHT = "height";
      var CANVAS = "canvas";
      var STRING = "string";
      var FUNCTION = "function";
      var ANONYMOUS = "anonymous";
      var GAMING_CAMERA = "gaming_camera";
      var DESIGN_CAMERA = "design_camera";
      var VERTICES_LENGTH = 3;
      var MINIMUM_DISTANCE = 1;
      var INVERT_MULTIPLIER = -1;
      var ANGLES_MULTIPLIER = 0.01;
      var MOUSE_WHEEL_DELTA_MULTIPLIER = 0.25;
      var DEGREES_TO_RADIANS_MULTIPLIER = Math.PI / 180;
      var EXT_TEXTURE_FILTER_ANISOTROPIC = "EXT_texture_filter_anisotropic";
      var MOZ_EXT_TEXTURE_FILTER_ANISOTROPIC = "MOZ_EXT_texture_filter_anisotropic";
      var WEBKIT_EXT_TEXTURE_FILTER_ANISOTROPIC = "WEBKIT_EXT_texture_filter_anisotropic";
      var RELATIVE_MOUSE_COORDINATES_MULTIPLIER = 0.025;
    }
  });

  // node_modules/necessary/lib/levels.js
  var require_levels = __commonJS({
    "node_modules/necessary/lib/levels.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        DEBUG_LEVEL: function() {
          return DEBUG_LEVEL;
        },
        ERROR_LEVEL: function() {
          return ERROR_LEVEL;
        },
        FATAL_LEVEL: function() {
          return FATAL_LEVEL;
        },
        INFO_LEVEL: function() {
          return INFO_LEVEL;
        },
        TRACE_LEVEL: function() {
          return TRACE_LEVEL;
        },
        WARNING_LEVEL: function() {
          return WARNING_LEVEL;
        },
        default: function() {
          return _default;
        }
      });
      var TRACE_LEVEL = "trace";
      var DEBUG_LEVEL = "debug";
      var INFO_LEVEL = "info";
      var WARNING_LEVEL = "warning";
      var ERROR_LEVEL = "error";
      var FATAL_LEVEL = "fatal";
      var _default = {
        TRACE_LEVEL,
        DEBUG_LEVEL,
        INFO_LEVEL,
        WARNING_LEVEL,
        ERROR_LEVEL,
        FATAL_LEVEL
      };
    }
  });

  // node_modules/necessary/lib/methods.js
  var require_methods = __commonJS({
    "node_modules/necessary/lib/methods.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        DELETE_METHOD: function() {
          return DELETE_METHOD;
        },
        GET_METHOD: function() {
          return GET_METHOD;
        },
        OPTIONS_METHOD: function() {
          return OPTIONS_METHOD;
        },
        PATCH_METHOD: function() {
          return PATCH_METHOD;
        },
        POST_METHOD: function() {
          return POST_METHOD;
        },
        default: function() {
          return _default;
        }
      });
      var GET_METHOD = "GET";
      var POST_METHOD = "POST";
      var PATCH_METHOD = "PATCH";
      var DELETE_METHOD = "DELETE";
      var OPTIONS_METHOD = "OPTIONS";
      var _default = {
        GET_METHOD,
        POST_METHOD,
        PATCH_METHOD,
        DELETE_METHOD,
        OPTIONS_METHOD
      };
    }
  });

  // node_modules/necessary/lib/headers.js
  var require_headers = __commonJS({
    "node_modules/necessary/lib/headers.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        ACCEPT_HEADER: function() {
          return ACCEPT_HEADER;
        },
        ACCESS_CONTROL_ALLOW_HEADERS_HEADER: function() {
          return ACCESS_CONTROL_ALLOW_HEADERS_HEADER;
        },
        ACCESS_CONTROL_ALLOW_METHODS_HEADER: function() {
          return ACCESS_CONTROL_ALLOW_METHODS_HEADER;
        },
        ACCESS_CONTROL_ALLOW_ORIGIN_HEADER: function() {
          return ACCESS_CONTROL_ALLOW_ORIGIN_HEADER;
        },
        ACCESS_CONTROL_REQUEST_METHOD_HEADER: function() {
          return ACCESS_CONTROL_REQUEST_METHOD_HEADER;
        },
        AUTHORIZATION_HEADER: function() {
          return AUTHORIZATION_HEADER;
        },
        CACHE_CONTROL_HEADER: function() {
          return CACHE_CONTROL_HEADER;
        },
        CONTENT_DISPOSITION_HEADER: function() {
          return CONTENT_DISPOSITION_HEADER;
        },
        CONTENT_LENGTH_HEADER: function() {
          return CONTENT_LENGTH_HEADER;
        },
        CONTENT_TYPE_HEADER: function() {
          return CONTENT_TYPE_HEADER;
        },
        LOCATION_HEADER: function() {
          return LOCATION_HEADER;
        },
        PRAGMA_HEADER: function() {
          return PRAGMA_HEADER;
        },
        TRANSFER_ENCODING_HEADER: function() {
          return TRANSFER_ENCODING_HEADER;
        },
        USER_AGENT_HEADER: function() {
          return USER_AGENT_HEADER;
        },
        default: function() {
          return _default;
        }
      });
      var PRAGMA_HEADER = "pragma";
      var ACCEPT_HEADER = "accept";
      var LOCATION_HEADER = "location";
      var USER_AGENT_HEADER = "user-agent";
      var CONTENT_TYPE_HEADER = "content-type";
      var AUTHORIZATION_HEADER = "authorization";
      var CACHE_CONTROL_HEADER = "cache-control";
      var CONTENT_LENGTH_HEADER = "content-length";
      var TRANSFER_ENCODING_HEADER = "transfer-encoding";
      var CONTENT_DISPOSITION_HEADER = "content-disposition";
      var ACCESS_CONTROL_ALLOW_ORIGIN_HEADER = "access-control-allow-origin";
      var ACCESS_CONTROL_ALLOW_METHODS_HEADER = "access-control-allow-methods";
      var ACCESS_CONTROL_ALLOW_HEADERS_HEADER = "access-control-allow-headers";
      var ACCESS_CONTROL_REQUEST_METHOD_HEADER = "access-control-request-method";
      var _default = {
        PRAGMA_HEADER,
        ACCEPT_HEADER,
        LOCATION_HEADER,
        USER_AGENT_HEADER,
        CONTENT_TYPE_HEADER,
        AUTHORIZATION_HEADER,
        CACHE_CONTROL_HEADER,
        CONTENT_LENGTH_HEADER,
        TRANSFER_ENCODING_HEADER,
        CONTENT_DISPOSITION_HEADER,
        ACCESS_CONTROL_ALLOW_ORIGIN_HEADER,
        ACCESS_CONTROL_ALLOW_METHODS_HEADER,
        ACCESS_CONTROL_ALLOW_HEADERS_HEADER,
        ACCESS_CONTROL_REQUEST_METHOD_HEADER
      };
    }
  });

  // node_modules/necessary/lib/keyCodes.js
  var require_keyCodes = __commonJS({
    "node_modules/necessary/lib/keyCodes.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        ARROW_DOWN_KEY_CODE: function() {
          return ARROW_DOWN_KEY_CODE;
        },
        ARROW_LEFT_KEY_CODE: function() {
          return ARROW_LEFT_KEY_CODE;
        },
        ARROW_RIGHT_KEY_CODE: function() {
          return ARROW_RIGHT_KEY_CODE;
        },
        ARROW_UP_KEY_CODE: function() {
          return ARROW_UP_KEY_CODE;
        },
        BACKSPACE_KEY_CODE: function() {
          return BACKSPACE_KEY_CODE;
        },
        DELETE_KEY_CODE: function() {
          return DELETE_KEY_CODE;
        },
        ENTER_KEY_CODE: function() {
          return ENTER_KEY_CODE;
        },
        ESCAPE_KEY_CODE: function() {
          return ESCAPE_KEY_CODE;
        },
        SHIFT_KEY_CODE: function() {
          return SHIFT_KEY_CODE;
        },
        TAB_KEY_CODE: function() {
          return TAB_KEY_CODE;
        },
        default: function() {
          return _default;
        }
      });
      var TAB_KEY_CODE = 9;
      var SHIFT_KEY_CODE = 16;
      var ENTER_KEY_CODE = 13;
      var ESCAPE_KEY_CODE = 27;
      var DELETE_KEY_CODE = 46;
      var BACKSPACE_KEY_CODE = 8;
      var ARROW_UP_KEY_CODE = 38;
      var ARROW_DOWN_KEY_CODE = 40;
      var ARROW_LEFT_KEY_CODE = 37;
      var ARROW_RIGHT_KEY_CODE = 39;
      var _default = {
        TAB_KEY_CODE,
        SHIFT_KEY_CODE,
        ENTER_KEY_CODE,
        ESCAPE_KEY_CODE,
        DELETE_KEY_CODE,
        BACKSPACE_KEY_CODE,
        ARROW_UP_KEY_CODE,
        ARROW_DOWN_KEY_CODE,
        ARROW_LEFT_KEY_CODE,
        ARROW_RIGHT_KEY_CODE
      };
    }
  });

  // node_modules/necessary/lib/encodings.js
  var require_encodings = __commonJS({
    "node_modules/necessary/lib/encodings.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        BASE64_ENCODING: function() {
          return BASE64_ENCODING;
        },
        UTF8_ENCODING: function() {
          return UTF8_ENCODING;
        },
        UTF_8_ENCODING: function() {
          return UTF_8_ENCODING;
        },
        default: function() {
          return _default;
        }
      });
      var UTF8_ENCODING = "utf8";
      var UTF_8_ENCODING = "utf-8";
      var BASE64_ENCODING = "base64";
      var _default = {
        UTF8_ENCODING,
        UTF_8_ENCODING,
        BASE64_ENCODING
      };
    }
  });

  // node_modules/necessary/lib/characters.js
  var require_characters = __commonJS({
    "node_modules/necessary/lib/characters.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        AMPERSAND_CHARACTER: function() {
          return AMPERSAND_CHARACTER;
        },
        ASTERISK_CHARACTER: function() {
          return ASTERISK_CHARACTER;
        },
        BACKSLASH_CHARACTER: function() {
          return BACKSLASH_CHARACTER;
        },
        BACKSPACE_CHARACTER: function() {
          return BACKSPACE_CHARACTER;
        },
        BACKTICK_DELIMITER: function() {
          return BACKTICK_DELIMITER;
        },
        BAR_CHARACTER: function() {
          return BAR_CHARACTER;
        },
        CARRIAGE_RETURN_CHARACTER: function() {
          return CARRIAGE_RETURN_CHARACTER;
        },
        CLOSING_BRACKET_CHARACTER: function() {
          return CLOSING_BRACKET_CHARACTER;
        },
        CLOSING_CURLY_BRACKET_CHARACTER: function() {
          return CLOSING_CURLY_BRACKET_CHARACTER;
        },
        CLOSING_SQUARE_BRACKET_CHARACTER: function() {
          return CLOSING_SQUARE_BRACKET_CHARACTER;
        },
        COLON_CHARACTER: function() {
          return COLON_CHARACTER;
        },
        COMMA_CHARACTER: function() {
          return COMMA_CHARACTER;
        },
        CTRL_C_CHARACTER: function() {
          return CTRL_C_CHARACTER;
        },
        DASH_CHARACTER: function() {
          return DASH_CHARACTER;
        },
        DOLLAR_CHARACTER: function() {
          return DOLLAR_CHARACTER;
        },
        DOWN_CHARACTER: function() {
          return DOWN_CHARACTER;
        },
        ESCAPE_CHARACTER: function() {
          return ESCAPE_CHARACTER;
        },
        ETX_CHARACTER: function() {
          return ETX_CHARACTER;
        },
        EXCLAMATION_MARK_CHARACTER: function() {
          return EXCLAMATION_MARK_CHARACTER;
        },
        FORWARD_SLASH_CHARACTER: function() {
          return FORWARD_SLASH_CHARACTER;
        },
        HAT_CHARACTER: function() {
          return HAT_CHARACTER;
        },
        LEFT_CHARACTER: function() {
          return LEFT_CHARACTER;
        },
        NEW_LINE_CHARACTER: function() {
          return NEW_LINE_CHARACTER;
        },
        OPENING_BRACKET_CHARACTER: function() {
          return OPENING_BRACKET_CHARACTER;
        },
        OPENING_CURLY_BRACKET_CHARACTER: function() {
          return OPENING_CURLY_BRACKET_CHARACTER;
        },
        OPENING_SQUARE_BRACKET_CHARACTER: function() {
          return OPENING_SQUARE_BRACKET_CHARACTER;
        },
        PERIOD_CHARACTER: function() {
          return PERIOD_CHARACTER;
        },
        PLUS_CHARACTER: function() {
          return PLUS_CHARACTER;
        },
        QUESTION_MARK_CHARACTER: function() {
          return QUESTION_MARK_CHARACTER;
        },
        RIGHT_CHARACTER: function() {
          return RIGHT_CHARACTER;
        },
        SPACE_CHARACTER: function() {
          return SPACE_CHARACTER;
        },
        UP_CHARACTER: function() {
          return UP_CHARACTER;
        },
        WILDCARD_CHARACTER: function() {
          return WILDCARD_CHARACTER;
        },
        default: function() {
          return _default;
        }
      });
      var UP_CHARACTER = "[A";
      var ETX_CHARACTER = "";
      var BAR_CHARACTER = "|";
      var HAT_CHARACTER = "^";
      var PLUS_CHARACTER = "+";
      var DASH_CHARACTER = "-";
      var DOWN_CHARACTER = "[B";
      var LEFT_CHARACTER = "[D";
      var RIGHT_CHARACTER = "[C";
      var SPACE_CHARACTER = " ";
      var COMMA_CHARACTER = ",";
      var COLON_CHARACTER = ":";
      var PERIOD_CHARACTER = ".";
      var DOLLAR_CHARACTER = "$";
      var CTRL_C_CHARACTER = "^C";
      var ESCAPE_CHARACTER = "";
      var ASTERISK_CHARACTER = "*";
      var WILDCARD_CHARACTER = "*";
      var BACKTICK_DELIMITER = "`";
      var NEW_LINE_CHARACTER = "\n";
      var AMPERSAND_CHARACTER = "&";
      var BACKSLASH_CHARACTER = "\\";
      var BACKSPACE_CHARACTER = String.fromCharCode(127);
      var QUESTION_MARK_CHARACTER = "?";
      var FORWARD_SLASH_CHARACTER = "/";
      var OPENING_BRACKET_CHARACTER = "(";
      var CLOSING_BRACKET_CHARACTER = ")";
      var CARRIAGE_RETURN_CHARACTER = "\r";
      var EXCLAMATION_MARK_CHARACTER = "!";
      var OPENING_CURLY_BRACKET_CHARACTER = "{";
      var CLOSING_CURLY_BRACKET_CHARACTER = "}";
      var OPENING_SQUARE_BRACKET_CHARACTER = "[";
      var CLOSING_SQUARE_BRACKET_CHARACTER = "]";
      var _default = {
        UP_CHARACTER,
        ETX_CHARACTER,
        BAR_CHARACTER,
        HAT_CHARACTER,
        PLUS_CHARACTER,
        DASH_CHARACTER,
        DOWN_CHARACTER,
        LEFT_CHARACTER,
        RIGHT_CHARACTER,
        SPACE_CHARACTER,
        COMMA_CHARACTER,
        COLON_CHARACTER,
        PERIOD_CHARACTER,
        DOLLAR_CHARACTER,
        CTRL_C_CHARACTER,
        ESCAPE_CHARACTER,
        ASTERISK_CHARACTER,
        WILDCARD_CHARACTER,
        BACKTICK_DELIMITER,
        NEW_LINE_CHARACTER,
        AMPERSAND_CHARACTER,
        BACKSLASH_CHARACTER,
        BACKSPACE_CHARACTER,
        QUESTION_MARK_CHARACTER,
        FORWARD_SLASH_CHARACTER,
        OPENING_BRACKET_CHARACTER,
        CLOSING_BRACKET_CHARACTER,
        CARRIAGE_RETURN_CHARACTER,
        EXCLAMATION_MARK_CHARACTER,
        OPENING_CURLY_BRACKET_CHARACTER,
        CLOSING_CURLY_BRACKET_CHARACTER,
        OPENING_SQUARE_BRACKET_CHARACTER,
        CLOSING_SQUARE_BRACKET_CHARACTER
      };
    }
  });

  // node_modules/necessary/lib/statusCodes.js
  var require_statusCodes = __commonJS({
    "node_modules/necessary/lib/statusCodes.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        BAD_GATEWAY_502_STATUS_CODE: function() {
          return BAD_GATEWAY_502_STATUS_CODE;
        },
        BAD_REQUEST_400_STATUS_CODE: function() {
          return BAD_REQUEST_400_STATUS_CODE;
        },
        CREATED_201_STATUS_CODE: function() {
          return CREATED_201_STATUS_CODE;
        },
        FORBIDDEN_403_STATUS_CODE: function() {
          return FORBIDDEN_403_STATUS_CODE;
        },
        FOUND_302_STATUS_CODE: function() {
          return FOUND_302_STATUS_CODE;
        },
        INTERNAL_SERVER_ERROR_500_STATUS_CODE: function() {
          return INTERNAL_SERVER_ERROR_500_STATUS_CODE;
        },
        NOT_FOUND_404_STATUS_CODE: function() {
          return NOT_FOUND_404_STATUS_CODE;
        },
        NO_CONTENT_204_STATUS_CODE: function() {
          return NO_CONTENT_204_STATUS_CODE;
        },
        OK_200_STATUS_CODE: function() {
          return OK_200_STATUS_CODE;
        },
        REQUEST_TIMEOUT_408_STATUS_CODE: function() {
          return REQUEST_TIMEOUT_408_STATUS_CODE;
        },
        SEE_OTHER_303_STATUS_CODE: function() {
          return SEE_OTHER_303_STATUS_CODE;
        },
        SERVICE_UNAVAILABLE_503_STATUS_CODE: function() {
          return SERVICE_UNAVAILABLE_503_STATUS_CODE;
        },
        TOO_MANY_REQUESTS_429_STATUS_CODE: function() {
          return TOO_MANY_REQUESTS_429_STATUS_CODE;
        },
        UNAUTHORIZED_401_STATUS_CODE: function() {
          return UNAUTHORIZED_401_STATUS_CODE;
        },
        ZERO_0_STATUS_CODE: function() {
          return ZERO_0_STATUS_CODE;
        },
        default: function() {
          return _default;
        }
      });
      var ZERO_0_STATUS_CODE = 0;
      var OK_200_STATUS_CODE = 200;
      var FOUND_302_STATUS_CODE = 302;
      var CREATED_201_STATUS_CODE = 201;
      var SEE_OTHER_303_STATUS_CODE = 303;
      var FORBIDDEN_403_STATUS_CODE = 403;
      var NOT_FOUND_404_STATUS_CODE = 404;
      var NO_CONTENT_204_STATUS_CODE = 204;
      var BAD_GATEWAY_502_STATUS_CODE = 502;
      var BAD_REQUEST_400_STATUS_CODE = 400;
      var UNAUTHORIZED_401_STATUS_CODE = 401;
      var REQUEST_TIMEOUT_408_STATUS_CODE = 408;
      var TOO_MANY_REQUESTS_429_STATUS_CODE = 429;
      var SERVICE_UNAVAILABLE_503_STATUS_CODE = 503;
      var INTERNAL_SERVER_ERROR_500_STATUS_CODE = 500;
      var _default = {
        ZERO_0_STATUS_CODE,
        OK_200_STATUS_CODE,
        FOUND_302_STATUS_CODE,
        CREATED_201_STATUS_CODE,
        SEE_OTHER_303_STATUS_CODE,
        FORBIDDEN_403_STATUS_CODE,
        NOT_FOUND_404_STATUS_CODE,
        NO_CONTENT_204_STATUS_CODE,
        BAD_GATEWAY_502_STATUS_CODE,
        BAD_REQUEST_400_STATUS_CODE,
        UNAUTHORIZED_401_STATUS_CODE,
        REQUEST_TIMEOUT_408_STATUS_CODE,
        TOO_MANY_REQUESTS_429_STATUS_CODE,
        SERVICE_UNAVAILABLE_503_STATUS_CODE,
        INTERNAL_SERVER_ERROR_500_STATUS_CODE
      };
    }
  });

  // node_modules/necessary/lib/contentTypes.js
  var require_contentTypes = __commonJS({
    "node_modules/necessary/lib/contentTypes.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE: function() {
          return APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE;
        },
        APPLICATION_JSON_CONTENT_TYPE: function() {
          return APPLICATION_JSON_CONTENT_TYPE;
        },
        APPLICATION_OCTET_STREAM_CONTENT_TYPE: function() {
          return APPLICATION_OCTET_STREAM_CONTENT_TYPE;
        },
        APPLICATION_X_WWW_FORM_ENCODED_CHARSET_UTF_8_CONTENT_TYPE: function() {
          return APPLICATION_X_WWW_FORM_ENCODED_CHARSET_UTF_8_CONTENT_TYPE;
        },
        APPLICATION_X_WWW_FORM_ENCODED_CONTENT_TYPE: function() {
          return APPLICATION_X_WWW_FORM_ENCODED_CONTENT_TYPE;
        },
        TEXT_HTML_CHARSET_UTF_8_CONTENT_TYPE: function() {
          return TEXT_HTML_CHARSET_UTF_8_CONTENT_TYPE;
        },
        TEXT_HTML_CONTENT_TYPE: function() {
          return TEXT_HTML_CONTENT_TYPE;
        },
        TEXT_PLAIN_CHARSET_UTF_8_CONTENT_TYPE: function() {
          return TEXT_PLAIN_CHARSET_UTF_8_CONTENT_TYPE;
        },
        TEXT_PLAIN_CONTENT_TYPE: function() {
          return TEXT_PLAIN_CONTENT_TYPE;
        },
        default: function() {
          return _default;
        }
      });
      var TEXT_HTML_CONTENT_TYPE = "text/html";
      var TEXT_PLAIN_CONTENT_TYPE = "text/plain";
      var APPLICATION_JSON_CONTENT_TYPE = "application/json";
      var TEXT_HTML_CHARSET_UTF_8_CONTENT_TYPE = "text/html; charset=utf-8";
      var TEXT_PLAIN_CHARSET_UTF_8_CONTENT_TYPE = "text/plain; charset=utf-8";
      var APPLICATION_OCTET_STREAM_CONTENT_TYPE = "application/octet-stream";
      var APPLICATION_X_WWW_FORM_ENCODED_CONTENT_TYPE = "application/x-www-form-urlencoded";
      var APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE = "application/json; charset=utf-8";
      var APPLICATION_X_WWW_FORM_ENCODED_CHARSET_UTF_8_CONTENT_TYPE = "application/x-www-form-urlencoded; charset=utf-8";
      var _default = {
        TEXT_HTML_CONTENT_TYPE,
        TEXT_PLAIN_CONTENT_TYPE,
        APPLICATION_JSON_CONTENT_TYPE,
        TEXT_HTML_CHARSET_UTF_8_CONTENT_TYPE,
        TEXT_PLAIN_CHARSET_UTF_8_CONTENT_TYPE,
        APPLICATION_OCTET_STREAM_CONTENT_TYPE,
        APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE,
        APPLICATION_X_WWW_FORM_ENCODED_CONTENT_TYPE,
        APPLICATION_X_WWW_FORM_ENCODED_CHARSET_UTF_8_CONTENT_TYPE
      };
    }
  });

  // node_modules/necessary/lib/statusMessages.js
  var require_statusMessages = __commonJS({
    "node_modules/necessary/lib/statusMessages.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        BAD_GATEWAY_502_STATUS_MESSAGE: function() {
          return BAD_GATEWAY_502_STATUS_MESSAGE;
        },
        BAD_REQUEST_400_STATUS_MESSAGE: function() {
          return BAD_REQUEST_400_STATUS_MESSAGE;
        },
        CREATED_201_STATUS_MESSAGE: function() {
          return CREATED_201_STATUS_MESSAGE;
        },
        FORBIDDEN_403_STATUS_MESSAGE: function() {
          return FORBIDDEN_403_STATUS_MESSAGE;
        },
        FOUND_302_STATUS_MESSAGE: function() {
          return FOUND_302_STATUS_MESSAGE;
        },
        INTERNAL_SERVER_ERROR_500_STATUS_MESSAGE: function() {
          return INTERNAL_SERVER_ERROR_500_STATUS_MESSAGE;
        },
        NOT_FOUND_404_STATUS_MESSAGE: function() {
          return NOT_FOUND_404_STATUS_MESSAGE;
        },
        NO_CONTENT_204_STATUS_MESSAGE: function() {
          return NO_CONTENT_204_STATUS_MESSAGE;
        },
        OK_200_STATUS_MESSAGE: function() {
          return OK_200_STATUS_MESSAGE;
        },
        REQUEST_TIMEOUT_408_STATUS_MESSAGE: function() {
          return REQUEST_TIMEOUT_408_STATUS_MESSAGE;
        },
        SEE_OTHER_303_STATUS_MESSAGE: function() {
          return SEE_OTHER_303_STATUS_MESSAGE;
        },
        SERVICE_UNAVAILABLE_503_STATUS_MESSAGE: function() {
          return SERVICE_UNAVAILABLE_503_STATUS_MESSAGE;
        },
        TOO_MANY_REQUESTS_429_STATUS_MESSAGE: function() {
          return TOO_MANY_REQUESTS_429_STATUS_MESSAGE;
        },
        UNAUTHORIZED_401_STATUS_MESSAGE: function() {
          return UNAUTHORIZED_401_STATUS_MESSAGE;
        },
        ZERO_0_STATUS_MESSAGE: function() {
          return ZERO_0_STATUS_MESSAGE;
        },
        default: function() {
          return _default;
        }
      });
      var ZERO_0_STATUS_MESSAGE = "";
      var OK_200_STATUS_MESSAGE = "OK";
      var FOUND_302_STATUS_MESSAGE = "Found";
      var CREATED_201_STATUS_MESSAGE = "Created";
      var SEE_OTHER_303_STATUS_MESSAGE = "See other";
      var FORBIDDEN_403_STATUS_MESSAGE = "Forbidden";
      var NOT_FOUND_404_STATUS_MESSAGE = "Not found";
      var NO_CONTENT_204_STATUS_MESSAGE = "No content";
      var BAD_GATEWAY_502_STATUS_MESSAGE = "Bad gateway";
      var BAD_REQUEST_400_STATUS_MESSAGE = "Bad request";
      var UNAUTHORIZED_401_STATUS_MESSAGE = "Unauthorized";
      var REQUEST_TIMEOUT_408_STATUS_MESSAGE = "Request timeout";
      var TOO_MANY_REQUESTS_429_STATUS_MESSAGE = "Too many requests";
      var SERVICE_UNAVAILABLE_503_STATUS_MESSAGE = "Service unavailable";
      var INTERNAL_SERVER_ERROR_500_STATUS_MESSAGE = "Internal server error";
      var _default = {
        ZERO_0_STATUS_MESSAGE,
        OK_200_STATUS_MESSAGE,
        FOUND_302_STATUS_MESSAGE,
        CREATED_201_STATUS_MESSAGE,
        SEE_OTHER_303_STATUS_MESSAGE,
        FORBIDDEN_403_STATUS_MESSAGE,
        NOT_FOUND_404_STATUS_MESSAGE,
        NO_CONTENT_204_STATUS_MESSAGE,
        BAD_GATEWAY_502_STATUS_MESSAGE,
        BAD_REQUEST_400_STATUS_MESSAGE,
        UNAUTHORIZED_401_STATUS_MESSAGE,
        REQUEST_TIMEOUT_408_STATUS_MESSAGE,
        TOO_MANY_REQUESTS_429_STATUS_MESSAGE,
        SERVICE_UNAVAILABLE_503_STATUS_MESSAGE,
        INTERNAL_SERVER_ERROR_500_STATUS_MESSAGE
      };
    }
  });

  // node_modules/necessary/lib/constants.js
  var require_constants2 = __commonJS({
    "node_modules/necessary/lib/constants.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        BOOLEAN: function() {
          return BOOLEAN;
        },
        DATA: function() {
          return DATA;
        },
        DEFAULT: function() {
          return DEFAULT;
        },
        EMPTY_STRING: function() {
          return EMPTY_STRING;
        },
        ENVIRONMENT: function() {
          return ENVIRONMENT;
        },
        ERROR: function() {
          return ERROR;
        },
        NUMBER: function() {
          return NUMBER;
        },
        PACKAGE_JSON: function() {
          return PACKAGE_JSON;
        },
        STRING: function() {
          return STRING;
        },
        ZERO: function() {
          return ZERO;
        }
      });
      var ZERO = "0";
      var DATA = "data";
      var ERROR = "error";
      var STRING = "string";
      var NUMBER = "number";
      var BOOLEAN = "boolean";
      var DEFAULT = "default";
      var ENVIRONMENT = "ENVIRONMENT";
      var EMPTY_STRING = "";
      var PACKAGE_JSON = "package.json";
    }
  });

  // node_modules/necessary/lib/utilities/array.js
  var require_array = __commonJS({
    "node_modules/necessary/lib/utilities/array.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        augment: function() {
          return augment;
        },
        back: function() {
          return back;
        },
        backwardsEvery: function() {
          return backwardsEvery;
        },
        backwardsFind: function() {
          return backwardsFind;
        },
        backwardsForEach: function() {
          return backwardsForEach;
        },
        backwardsReduce: function() {
          return backwardsReduce;
        },
        backwardsSome: function() {
          return backwardsSome;
        },
        clear: function() {
          return clear;
        },
        combine: function() {
          return combine;
        },
        compare: function() {
          return compare;
        },
        compress: function() {
          return compress;
        },
        concat: function() {
          return concat;
        },
        copy: function() {
          return copy;
        },
        correlate: function() {
          return correlate;
        },
        default: function() {
          return _default;
        },
        eighth: function() {
          return eighth;
        },
        eighthLast: function() {
          return eighthLast;
        },
        extract: function() {
          return extract;
        },
        fifth: function() {
          return fifth;
        },
        fifthLast: function() {
          return fifthLast;
        },
        filter: function() {
          return filter;
        },
        find: function() {
          return find;
        },
        first: function() {
          return first;
        },
        firstLast: function() {
          return firstLast;
        },
        forwardsEvery: function() {
          return forwardsEvery;
        },
        forwardsFind: function() {
          return forwardsFind;
        },
        forwardsForEach: function() {
          return forwardsForEach;
        },
        forwardsReduce: function() {
          return forwardsReduce;
        },
        forwardsSome: function() {
          return forwardsSome;
        },
        fourth: function() {
          return fourth;
        },
        fourthLast: function() {
          return fourthLast;
        },
        front: function() {
          return front;
        },
        head: function() {
          return head;
        },
        last: function() {
          return last;
        },
        match: function() {
          return match;
        },
        merge: function() {
          return merge;
        },
        ninth: function() {
          return ninth;
        },
        ninthLast: function() {
          return ninthLast;
        },
        patch: function() {
          return patch;
        },
        prune: function() {
          return prune;
        },
        push: function() {
          return push;
        },
        replace: function() {
          return replace;
        },
        resolve: function() {
          return resolve;
        },
        reverse: function() {
          return reverse;
        },
        second: function() {
          return second;
        },
        secondLast: function() {
          return secondLast;
        },
        separate: function() {
          return separate;
        },
        seventh: function() {
          return seventh;
        },
        seventhLast: function() {
          return seventhLast;
        },
        sixth: function() {
          return sixth;
        },
        sixthLast: function() {
          return sixthLast;
        },
        splice: function() {
          return splice;
        },
        tail: function() {
          return tail;
        },
        tenth: function() {
          return tenth;
        },
        third: function() {
          return third;
        },
        thirdLast: function() {
          return thirdLast;
        },
        unshift: function() {
          return unshift;
        }
      });
      function _array_like_to_array(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _array_without_holes(arr) {
        if (Array.isArray(arr))
          return _array_like_to_array(arr);
      }
      function _instanceof(left, right) {
        if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
          return !!right[Symbol.hasInstance](left);
        } else {
          return left instanceof right;
        }
      }
      function _iterable_to_array(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _non_iterable_spread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _to_consumable_array(arr) {
        return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
      }
      function _unsupported_iterable_to_array(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _array_like_to_array(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _array_like_to_array(o, minLen);
      }
      function first(array) {
        return array[0];
      }
      function second(array) {
        return array[1];
      }
      function third(array) {
        return array[2];
      }
      function fourth(array) {
        return array[3];
      }
      function fifth(array) {
        return array[4];
      }
      function sixth(array) {
        return array[5];
      }
      function seventh(array) {
        return array[6];
      }
      function eighth(array) {
        return array[7];
      }
      function ninth(array) {
        return array[8];
      }
      function tenth(array) {
        return array[9];
      }
      function firstLast(array) {
        return array[array.length - 1];
      }
      function secondLast(array) {
        return array[array.length - 2];
      }
      function thirdLast(array) {
        return array[array.length - 3];
      }
      function fourthLast(array) {
        return array[array.length - 4];
      }
      function fifthLast(array) {
        return array[array.length - 5];
      }
      function sixthLast(array) {
        return array[array.length - 6];
      }
      function seventhLast(array) {
        return array[array.length - 7];
      }
      function eighthLast(array) {
        return array[array.length - 8];
      }
      function ninthLast(array) {
        return array[array.length - 9];
      }
      function last(array) {
        return array[array.length - 1];
      }
      function head(array) {
        return array.slice(0, 1);
      }
      function tail(array) {
        return array.slice(1);
      }
      function back(array) {
        return array.slice(array.length - 1);
      }
      function front(array) {
        return array.slice(0, Math.max(1, array.length - 1));
      }
      function push(arrayA, arrayB) {
        Array.prototype.push.apply(arrayA, arrayB);
      }
      function unshift(arrayA, arrayB) {
        Array.prototype.unshift.apply(arrayA, arrayB);
      }
      function concat(arrayA, elementOrArray2) {
        var arrayB = _instanceof(elementOrArray2, Array) ? elementOrArray2 : [
          elementOrArray2
        ];
        push(arrayA, arrayB);
      }
      function clear(array) {
        var start = 0;
        return array.splice(start);
      }
      function copy(arrayA, arrayB) {
        var start = 0, deleteCount = arrayB.length;
        splice(arrayA, start, deleteCount, arrayB);
      }
      function merge(arrayA, arrayB) {
        Array.prototype.push.apply(arrayA, arrayB);
      }
      function match(arrayA, arrayB, callback) {
        var matches = false;
        var arrayALength = arrayA.length, arrayBLength = arrayB.length;
        if (arrayALength === arrayBLength) {
          matches = arrayA.every(function(elementA, index) {
            var elementB = arrayB[index], passed = callback(elementA, elementB, index);
            if (passed) {
              return true;
            }
          });
        }
        return matches;
      }
      function compare(arrayA, arrayB, callback) {
        var coupled = false;
        var arrayALength = arrayA.length, arrayBLength = arrayB.length;
        if (arrayALength === arrayBLength) {
          arrayB = _to_consumable_array(arrayB);
          coupled = arrayA.every(function(elementA, index) {
            var elementB = extract(arrayB, function(elementB2) {
              var result = callback(elementA, elementB2);
              if (result) {
                return true;
              }
            }) || null;
            if (elementB !== null) {
              return true;
            }
          });
        }
        return coupled;
      }
      function correlate(arrayA, arrayB, callback) {
        arrayB = _to_consumable_array(arrayB);
        var correlates = arrayA.every(function(elementA) {
          var elementB = extract(arrayB, function(elementB2) {
            var result = callback(elementA, elementB2);
            if (result) {
              return true;
            }
          }) || null;
          if (elementB !== null) {
            return true;
          }
        });
        return correlates;
      }
      function resolve(arrayA, arrayB, callback) {
        var _loop = function() {
          var arrayALength2 = arrayA.length;
          if (arrayALength2 === 0) {
            return "break";
          }
          var resolved2 = false;
          arrayA.forEach(function(elementA) {
            var passed = callback(elementA);
            if (passed) {
              var elementB = elementA;
              arrayB.push(elementB);
              resolved2 = true;
            }
          });
          if (!resolved2) {
            return "break";
          }
          filter(arrayA, function(elementA) {
            var arrayBIncludesElementA = arrayB.includes(elementA);
            if (!arrayBIncludesElementA) {
              return true;
            }
          });
        };
        var resolved;
        arrayA = _to_consumable_array(arrayA);
        for (; ; ) {
          var _ret = _loop();
          if (_ret === "break")
            break;
        }
        var arrayALength = arrayA.length;
        resolved = arrayALength === 0;
        return resolved;
      }
      function find(array, callback) {
        var elements = [];
        forwardsForEach(array, function(element, index) {
          var passed = callback(element, index);
          if (passed) {
            elements.push(element);
          }
        });
        return elements;
      }
      function replace(array, element, callback) {
        var start;
        var found = array.some(function(element2, index) {
          var passed = callback(element2, index);
          if (passed) {
            start = index;
            return true;
          }
        });
        if (found) {
          var deleteCount = 1;
          array.splice(start, deleteCount, element);
        }
        return found;
      }
      function splice(arrayA, start) {
        var deleteCount = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Infinity, arrayB = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [];
        var args = [
          start,
          deleteCount
        ].concat(_to_consumable_array(arrayB)), deletedElements = Array.prototype.splice.apply(arrayA, args);
        return deletedElements;
      }
      function filter(array, callback) {
        var deletedElements = [];
        backwardsForEach(array, function(element, index) {
          var passed = callback(element, index);
          if (!passed) {
            var start = index, deleteCount = 1, deletedElements2 = array.splice(start, deleteCount), firstDeletedElement = first(deletedElements2);
            deletedElements2.unshift(firstDeletedElement);
          }
        });
        return deletedElements;
      }
      function prune(array, callback) {
        var deletedElement = void 0;
        array.some(function(element, index) {
          var passed = callback(element, index);
          if (!passed) {
            var start = index, deleteCount = 1, deletedElements = array.splice(start, deleteCount), firstDeletedElement = first(deletedElements);
            deletedElement = firstDeletedElement;
            return true;
          }
        });
        return deletedElement;
      }
      function extract(array, callback) {
        var deletedElement = void 0;
        array.some(function(element, index) {
          var passed = callback(element, index);
          if (passed) {
            var start = index, deleteCount = 1, deletedElements = array.splice(start, deleteCount), firstDeletedElement = first(deletedElements);
            deletedElement = firstDeletedElement;
            return true;
          }
        });
        return deletedElement;
      }
      function patch(array, element, callback) {
        var found = array.some(function(element2, index) {
          var passed = callback(element2, index);
          if (passed) {
            return true;
          }
        });
        if (found) {
          array.push(element);
        }
        return found;
      }
      function compress(array, callback) {
        var index1 = 0, length = array.length;
        while (index1 < length) {
          var elementB = array[index1];
          for (var index2 = length - 1; index2 > index1; index2--) {
            var elementA = array[index2], passed = callback(elementA, elementB);
            if (passed) {
              var start = index2, deleteCount = 1;
              array.splice(start, deleteCount);
            }
          }
          index1++;
          length = array.length;
        }
      }
      function combine(arrayA, arrayB, callback) {
        var array = _to_consumable_array(arrayA).concat(_to_consumable_array(arrayB));
        compress(array, callback);
        return array;
      }
      function reverse(array) {
        array = _to_consumable_array(array).reverse();
        return array;
      }
      function augment(arrayA, arrayB, callback) {
        arrayB.forEach(function(element, index) {
          var passed = callback(element, index);
          if (passed) {
            arrayA.push(element);
          }
        });
      }
      function separate(array, arrayA, arrayB, callback) {
        array.forEach(function(element, index) {
          var passed = callback(element, index);
          passed ? arrayA.push(element) : arrayB.push(element);
        });
      }
      function forwardsFind(array, callback) {
        var arrayLength = array.length;
        for (var index = 0; index < arrayLength; index++) {
          var element = array[index], passed = callback(element, index);
          if (passed) {
            return element;
          }
        }
        return false;
      }
      function backwardsFind(array, callback) {
        var arrayLength = array.length;
        for (var index = arrayLength - 1; index >= 0; index--) {
          var element = array[index], passed = callback(element, index);
          if (passed) {
            return element;
          }
        }
        return false;
      }
      function forwardsSome(array, callback) {
        var arrayLength = array.length;
        for (var index = 0; index < arrayLength; index++) {
          var element = array[index], passed = callback(element, index);
          if (passed) {
            return true;
          }
        }
        return false;
      }
      function backwardsSome(array, callback) {
        var arrayLength = array.length;
        for (var index = arrayLength - 1; index >= 0; index--) {
          var element = array[index], passed = callback(element, index);
          if (passed) {
            return true;
          }
        }
        return false;
      }
      function forwardsEvery(array, callback) {
        var arrayLength = array.length;
        for (var index = 0; index < arrayLength; index++) {
          var element = array[index], passed = callback(element, index);
          if (!passed) {
            return false;
          }
        }
        return true;
      }
      function backwardsEvery(array, callback) {
        var arrayLength = array.length;
        for (var index = arrayLength - 1; index >= 0; index--) {
          var element = array[index], passed = callback(element, index);
          if (!passed) {
            return false;
          }
        }
        return true;
      }
      function forwardsReduce(array, callback, initialValue) {
        var value = initialValue;
        var arrayLength = array.length;
        for (var index = 0; index < arrayLength; index++) {
          var element = array[index];
          value = callback(value, element, index);
        }
        return value;
      }
      function backwardsReduce(array, callback, initialValue) {
        var value = initialValue;
        var arrayLength = array.length;
        for (var index = arrayLength - 1; index >= 0; index--) {
          var element = array[index];
          value = callback(value, element, index);
        }
        return value;
      }
      function forwardsForEach(array, callback) {
        var arrayLength = array.length;
        for (var index = 0; index < arrayLength; index++) {
          var element = array[index];
          callback(element, index);
        }
      }
      function backwardsForEach(array, callback) {
        var arrayLength = array.length;
        for (var index = arrayLength - 1; index >= 0; index--) {
          var element = array[index];
          callback(element, index);
        }
      }
      var _default = {
        first,
        second,
        third,
        fourth,
        fifth,
        sixth,
        seventh,
        eighth,
        ninth,
        firstLast,
        secondLast,
        thirdLast,
        fourthLast,
        fifthLast,
        sixthLast,
        seventhLast,
        eighthLast,
        ninthLast,
        last,
        head,
        tail,
        back,
        front,
        push,
        unshift,
        concat,
        clear,
        copy,
        merge,
        match,
        compare,
        correlate,
        resolve,
        find,
        replace,
        splice,
        filter,
        prune,
        extract,
        patch,
        compress,
        combine,
        reverse,
        augment,
        separate,
        forwardsFind,
        backwardsFind,
        forwardsSome,
        backwardsSome,
        forwardsEvery,
        backwardsEvery,
        forwardsReduce,
        backwardsReduce,
        forwardsForEach,
        backwardsForEach
      };
    }
  });

  // node_modules/necessary/lib/utilities/path.js
  var require_path = __commonJS({
    "node_modules/necessary/lib/utilities/path.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        bottommostNameFromPath: function() {
          return bottommostNameFromPath;
        },
        combinePaths: function() {
          return combinePaths;
        },
        concatenatePaths: function() {
          return concatenatePaths;
        },
        default: function() {
          return _default;
        },
        isPathAbsolutePath: function() {
          return isPathAbsolutePath;
        },
        isPathName: function() {
          return isPathName;
        },
        isPathRelativePath: function() {
          return isPathRelativePath;
        },
        isPathTopmostName: function() {
          return isPathTopmostName;
        },
        isTopmostNameInAbsolutePath: function() {
          return isTopmostNameInAbsolutePath;
        },
        pathWithoutBottommostNameFromPath: function() {
          return pathWithoutBottommostNameFromPath;
        },
        pathWithoutTopmostDirectoryNameFromPath: function() {
          return pathWithoutTopmostDirectoryNameFromPath;
        },
        topmostDirectoryNameFromPath: function() {
          return topmostDirectoryNameFromPath;
        },
        topmostDirectoryPathFromPath: function() {
          return topmostDirectoryPathFromPath;
        }
      });
      var _constants = require_constants2();
      var _array = require_array();
      function _array_like_to_array(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _array_without_holes(arr) {
        if (Array.isArray(arr))
          return _array_like_to_array(arr);
      }
      function _iterable_to_array(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _non_iterable_spread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _to_consumable_array(arr) {
        return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
      }
      function _unsupported_iterable_to_array(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _array_like_to_array(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _array_like_to_array(o, minLen);
      }
      function isPathName(path) {
        path = path.replace(/^\//, _constants.EMPTY_STRING).replace(/\/$/, _constants.EMPTY_STRING);
        var pathName = /\//.test(path) === false;
        return pathName;
      }
      function isPathTopmostName(path) {
        var pathName = isPathName(path), pathAbsolutePath = isPathAbsolutePath(path), pathTopmostName = pathName && pathAbsolutePath;
        return pathTopmostName;
      }
      function isPathRelativePath(path) {
        var pathRelativePath = !/^\//.test(path);
        return pathRelativePath;
      }
      function isPathAbsolutePath(path) {
        var pathAbsolutePath = /^\//.test(path);
        return pathAbsolutePath;
      }
      function isTopmostNameInAbsolutePath(topmostName, absolutePath) {
        var regExp = new RegExp("^".concat(topmostName, "(?:\\/.+)?$")), topmostNameInAbsolutePath = regExp.test(absolutePath);
        return topmostNameInAbsolutePath;
      }
      function combinePaths(path, relativePath) {
        var combinedPath = null;
        var pathNames = path.split(/\//), relativePathNames = relativePath.split(/\//);
        var lastPathName, firstRelativePathName = (0, _array.first)(relativePathNames);
        if (firstRelativePathName === ".") {
          relativePathNames.shift();
        }
        firstRelativePathName = (0, _array.first)(relativePathNames);
        lastPathName = (0, _array.last)(pathNames);
        while (firstRelativePathName === ".." && lastPathName !== void 0) {
          relativePathNames.shift();
          pathNames.pop();
          firstRelativePathName = (0, _array.first)(relativePathNames);
          lastPathName = (0, _array.last)(pathNames);
        }
        if (lastPathName !== void 0) {
          var combinedPathNames = [].concat(pathNames).concat(relativePathNames);
          combinedPath = combinedPathNames.join("/");
        }
        return combinedPath;
      }
      function concatenatePaths(path, relativePath) {
        for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          remainingArguments[_key - 2] = arguments[_key];
        }
        var concatenatedPath;
        path = path.replace(/\/$/, _constants.EMPTY_STRING);
        concatenatedPath = "".concat(path, "/").concat(relativePath);
        var remainingAArgumentsLength = remainingArguments.length;
        if (remainingAArgumentsLength > 0) {
          var _$path = concatenatedPath, _$relativePath = remainingArguments.shift();
          concatenatedPath = concatenatePaths.apply(void 0, [
            _$path,
            _$relativePath
          ].concat(_to_consumable_array(remainingArguments)));
        }
        return concatenatedPath;
      }
      function bottommostNameFromPath(path) {
        var bottommostName = null;
        var matches = path.match(/^.*\/([^\/]+\/?)$/);
        if (matches !== null) {
          var secondMatch = (0, _array.second)(matches);
          bottommostName = secondMatch;
        }
        return bottommostName;
      }
      function topmostDirectoryPathFromPath(path) {
        var matches = path.match(/^(.+)\/[^\/]+\/?$/), secondMatch = (0, _array.second)(matches), topmostDirectoryPath = secondMatch;
        return topmostDirectoryPath;
      }
      function topmostDirectoryNameFromPath(path) {
        var topmostDirectoryName = null;
        var matches = path.match(/^([^\/]+)\/.+$/);
        if (matches !== null) {
          var secondMatch = (0, _array.second)(matches);
          topmostDirectoryName = secondMatch;
        }
        return topmostDirectoryName;
      }
      function pathWithoutBottommostNameFromPath(path) {
        var pathWithoutBottommostName = null;
        var matches = path.match(/^(.*)\/[^\/]+\/?$/);
        if (matches !== null) {
          var secondMatch = (0, _array.second)(matches);
          pathWithoutBottommostName = secondMatch;
        }
        return pathWithoutBottommostName;
      }
      function pathWithoutTopmostDirectoryNameFromPath(path) {
        var pathWithoutTopmostDirectoryName = null;
        var matches = path.match(/^[^\/]+\/(.+)$/);
        if (matches !== null) {
          var secondMatch = (0, _array.second)(matches);
          pathWithoutTopmostDirectoryName = secondMatch;
        }
        return pathWithoutTopmostDirectoryName;
      }
      var _default = {
        isPathName,
        isPathTopmostName,
        isPathRelativePath,
        isPathAbsolutePath,
        isTopmostNameInAbsolutePath,
        combinePaths,
        concatenatePaths,
        bottommostNameFromPath,
        topmostDirectoryPathFromPath,
        topmostDirectoryNameFromPath,
        pathWithoutBottommostNameFromPath,
        pathWithoutTopmostDirectoryNameFromPath
      };
    }
  });

  // node_modules/necessary/lib/utilities/http.js
  var require_http = __commonJS({
    "node_modules/necessary/lib/utilities/http.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        default: function() {
          return _default;
        },
        hostnameFromHost: function() {
          return hostnameFromHost;
        },
        overwrite: function() {
          return overwrite;
        },
        portFromHost: function() {
          return portFromHost;
        },
        queryStringFromQuery: function() {
          return queryStringFromQuery;
        },
        secureFromHost: function() {
          return secureFromHost;
        },
        underwrite: function() {
          return underwrite;
        },
        urlFromHostURIAndQuery: function() {
          return urlFromHostURIAndQuery;
        }
      });
      var _array = require_array();
      var _constants = require_constants2();
      var _characters = require_characters();
      function overwrite(headers, name, value) {
        var lowerCaseName = name.toLowerCase(), existingNames = Object.getOwnPropertyNames(headers), existingName = existingNames.find(function(existingName2) {
          var existingLowerCaseName = existingName2.toLowerCase();
          if (existingLowerCaseName === lowerCaseName) {
            return true;
          }
        }) || null;
        if (existingName !== null) {
          headers[existingName] = value;
        }
      }
      function underwrite(headers, name, value) {
        var lowerCaseName = name.toLowerCase(), existingNames = Object.getOwnPropertyNames(headers), existingName = existingNames.find(function(existingName2) {
          var existingLowerCaseName = existingName2.toLowerCase();
          if (existingLowerCaseName === lowerCaseName) {
            return true;
          }
        }) || null;
        if (existingName === null) {
          headers[name] = value;
        }
      }
      function portFromHost(host) {
        var port;
        var matches = host.match(/^https?:\/\/([^\/]+)/), secondMatch = (0, _array.second)(matches), index = secondMatch.indexOf(_characters.COLON_CHARACTER);
        if (index === -1) {
          var secure = secureFromHost(host);
          port = secure ? 443 : 80;
        } else {
          var start = index + 1, portString = secondMatch.substring(start);
          port = Number(portString);
        }
        return port;
      }
      function secureFromHost(host) {
        var secure = /^https:\/\//.test(host);
        return secure;
      }
      function hostnameFromHost(host) {
        var matches = host.match(/^https?:\/\/([^:\/]+)/), secondMatch = (0, _array.second)(matches), hostname = secondMatch;
        return hostname;
      }
      function queryStringFromQuery(query) {
        var names = Object.keys(query), namesLength = names.length, lastIndex = namesLength - 1, queryString = names.reduce(function(queryString2, name, index) {
          var value = query[name], encodedName = encodeURIComponent(name), encodedValue = encodeURIComponent(value), ampersandOrNothing = index !== lastIndex ? _characters.AMPERSAND_CHARACTER : _constants.EMPTY_STRING;
          queryString2 += "".concat(encodedName, "=").concat(encodedValue).concat(ampersandOrNothing);
          return queryString2;
        }, _constants.EMPTY_STRING);
        return queryString;
      }
      function urlFromHostURIAndQuery(host, uri, query) {
        var queryString = queryStringFromQuery(query), url = queryString === _constants.EMPTY_STRING ? "".concat(host).concat(uri) : "".concat(host).concat(uri, "?").concat(queryString);
        return url;
      }
      var _default = {
        overwrite,
        underwrite,
        portFromHost,
        secureFromHost,
        hostnameFromHost,
        queryStringFromQuery,
        urlFromHostURIAndQuery
      };
    }
  });

  // node_modules/necessary/lib/utilities/string.js
  var require_string = __commonJS({
    "node_modules/necessary/lib/utilities/string.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        default: function() {
          return _default;
        },
        indexOf: function() {
          return indexOf;
        },
        strcmp: function() {
          return strcmp;
        },
        strlen: function() {
          return strlen;
        },
        substring: function() {
          return substring;
        }
      });
      var _constants = require_constants2();
      function strlen(string) {
        var length = 0;
        var iterator = string[Symbol.iterator]();
        var character = iterator.next();
        while (!character.done) {
          character = iterator.next();
          length++;
        }
        return length;
      }
      function strcmp(stringA, stringB) {
        var difference;
        var iteratorA = stringA[Symbol.iterator](), iteratorB = stringB[Symbol.iterator]();
        var characterA = iteratorA.next(), characterB = iteratorB.next(), codePointA, codePointB;
        while (true) {
          codePointA = characterA.value ? characterA.value.codePointAt(0) : 0;
          codePointB = characterB.value ? characterB.value.codePointAt(0) : 0;
          difference = codePointB - codePointA;
          if (difference !== 0) {
            break;
          }
          if (characterA.done || characterB.done) {
            break;
          }
          characterA = iteratorA.next();
          characterB = iteratorB.next();
        }
        return difference;
      }
      function indexOf(string, searchString) {
        var index = -1, found = false;
        var searchStringLength = strlen(searchString);
        if (searchStringLength > 0) {
          var character;
          var iterator = string[Symbol.iterator](), searchIterator = searchString[Symbol.iterator](), searchCharacter = searchIterator.next();
          character = iterator.next();
          index++;
          while (!character.done) {
            if (character.value === searchCharacter.value) {
              var start = index, end = start + searchStringLength, subString = substring(string, start, end), difference = strcmp(subString, searchString);
              if (difference === 0) {
                found = true;
                break;
              }
            }
            character = iterator.next();
            index++;
          }
        }
        if (!found) {
          index = -1;
        }
        return index;
      }
      function substring(string, start) {
        var end = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Infinity;
        var index = 0;
        var iterator = string[Symbol.iterator](), characters = [];
        var character = iterator.next();
        while (!character.done) {
          if (index === end) {
            break;
          }
          if (index >= start) {
            characters.push(character.value);
          }
          index++;
          character = iterator.next();
        }
        var _$substring = characters.join(_constants.EMPTY_STRING);
        return _$substring;
      }
      var _default = {
        strcmp,
        strlen,
        indexOf,
        substring
      };
    }
  });

  // node_modules/necessary/lib/utilities/version.js
  var require_version = __commonJS({
    "node_modules/necessary/lib/utilities/version.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        default: function() {
          return _default;
        },
        migrate: function() {
          return migrate;
        }
      });
      function migrate(json, migrationMap, latestVersion) {
        var version = json.version;
        while (version !== latestVersion) {
          var migrateFunction = migrationMap[version];
          json = migrateFunction(json);
          version = json.version;
        }
        return json;
      }
      var _default = {
        migrate
      };
    }
  });

  // node_modules/necessary/lib/utilities/asynchronous.js
  var require_asynchronous = __commonJS({
    "node_modules/necessary/lib/utilities/asynchronous.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        backwardsForEach: function() {
          return backwardsForEach;
        },
        default: function() {
          return _default;
        },
        eventually: function() {
          return eventually;
        },
        forEach: function() {
          return forEach;
        },
        forwardsForEach: function() {
          return forwardsForEach;
        },
        repeatedly: function() {
          return repeatedly;
        },
        sequence: function() {
          return sequence;
        },
        whilst: function() {
          return whilst;
        }
      });
      function whilst(operation, done, context) {
        var count = -1;
        function next() {
          count++;
          var index = count, terminate = operation(next, done, context, index);
          if (terminate) {
            done();
          }
        }
        next();
      }
      function forEach(array, operation, done, context) {
        var length = array.length;
        var count = -1;
        function next() {
          count++;
          var terminate = count === length;
          if (terminate) {
            done();
          } else {
            var index = count, element = array[index];
            operation(element, next, done, context, index);
          }
        }
        next();
      }
      function sequence(operations, done, context) {
        var length = operations.length;
        var count = -1;
        function next() {
          count++;
          var terminate = count === length;
          if (terminate) {
            done();
          } else {
            var index = count, operation = operations[index];
            operation(next, done, context, index);
          }
        }
        next();
      }
      function eventually(operations, done, context) {
        var length = operations.length;
        var count = 0;
        function next() {
          count++;
          var terminate = count === length;
          if (terminate) {
            done();
          }
        }
        operations.forEach(function(operation, index) {
          operation(next, done, context, index);
        });
      }
      function repeatedly(operation, length, done, context) {
        var count = 0;
        function next() {
          count++;
          var terminate = count === length;
          if (terminate) {
            done();
          }
        }
        for (var index = 0; index < length; index++) {
          operation(next, done, context, index);
        }
      }
      function forwardsForEach(array, operation, done, context) {
        var length = array.length;
        var count = -1;
        function next() {
          count++;
          var terminate = count === length;
          if (terminate) {
            done();
          } else {
            var index = count, element = array[index];
            operation(element, next, done, context, index);
          }
        }
        next();
      }
      function backwardsForEach(array, operation, done, context) {
        var length = array.length;
        var count = length;
        function next() {
          count--;
          var terminate = count === -1;
          if (terminate) {
            done();
          } else {
            var index = count, element = array[index];
            operation(element, next, done, context, index);
          }
        }
        next();
      }
      var _default = {
        whilst,
        forEach,
        sequence,
        eventually,
        repeatedly,
        forwardsForEach,
        backwardsForEach
      };
    }
  });

  // node_modules/necessary/lib/utilities/ajax.js
  var require_ajax = __commonJS({
    "node_modules/necessary/lib/utilities/ajax.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        default: function() {
          return _default;
        },
        get: function() {
          return get;
        },
        post: function() {
          return post;
        },
        request: function() {
          return request;
        }
      });
      var _methods = require_methods();
      var _contentTypes = require_contentTypes();
      var _headers = require_headers();
      var _http = require_http();
      function get(host, uri, query, headers, callback) {
        if (callback === void 0) {
          callback = headers;
          headers = {};
        }
        var method = _methods.GET_METHOD, accept = _contentTypes.APPLICATION_JSON_CONTENT_TYPE, content = null;
        underwriteAcceptHeader(headers, accept);
        request(host, uri, query, method, headers, content, callback);
      }
      function post(host, uri, query, headers, content, callback) {
        if (callback === void 0) {
          callback = content;
          content = headers;
          headers = {};
        }
        var method = _methods.POST_METHOD, accept = _contentTypes.APPLICATION_JSON_CONTENT_TYPE, contentType = _contentTypes.APPLICATION_JSON_CONTENT_TYPE;
        underwriteAcceptHeader(headers, accept);
        underwriteContentTypeHeader(headers, contentType);
        request(host, uri, query, method, headers, content, callback);
      }
      function request(host, uri, query, method, headers, content, callback) {
        var url = (0, _http.urlFromHostURIAndQuery)(host, uri, query), accept = headers[_headers.ACCEPT_HEADER] || null, contentType = headers[_headers.CONTENT_TYPE_HEADER] || null, xmlHttpRequest = new XMLHttpRequest();
        if (contentType === _contentTypes.APPLICATION_JSON_CONTENT_TYPE) {
          var json = content, jsonString = JSON.stringify(json);
          content = jsonString;
        }
        xmlHttpRequest.onreadystatechange = function() {
          var readyState = xmlHttpRequest.readyState, status = xmlHttpRequest.status, response = xmlHttpRequest.response, statusCode = status;
          if (readyState == 4) {
            var _$content = response;
            if (accept === _contentTypes.APPLICATION_JSON_CONTENT_TYPE) {
              try {
                var jsonString2 = _$content, json2 = JSON.parse(jsonString2);
                _$content = json2;
              } catch (error) {
                _$content = null;
              }
            }
            callback(_$content, statusCode);
          }
        };
        xmlHttpRequest.open(method, url);
        if (accept !== null) {
          xmlHttpRequest.setRequestHeader(_headers.ACCEPT_HEADER, accept);
        }
        if (contentType !== null) {
          xmlHttpRequest.setRequestHeader(_headers.CONTENT_TYPE_HEADER, contentType);
        }
        content !== null ? xmlHttpRequest.send(content) : xmlHttpRequest.send();
      }
      var _default = {
        get,
        post,
        request
      };
      function underwriteAcceptHeader(headers, accept) {
        var name = _headers.ACCEPT_HEADER, value = accept;
        (0, _http.underwrite)(headers, name, value);
      }
      function underwriteContentTypeHeader(headers, contentTYpe) {
        var name = _headers.CONTENT_TYPE_HEADER, value = contentTYpe;
        (0, _http.underwrite)(headers, name, value);
      }
    }
  });

  // node_modules/necessary/lib/browser.js
  var require_browser = __commonJS({
    "node_modules/necessary/lib/browser.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        ajaxUtilities: function() {
          return _ajax.default;
        },
        arrayUtilities: function() {
          return _array.default;
        },
        asynchronousUtilities: function() {
          return _asynchronous.default;
        },
        characters: function() {
          return _characters.default;
        },
        contentTypes: function() {
          return _contentTypes.default;
        },
        encodings: function() {
          return _encodings.default;
        },
        headers: function() {
          return _headers.default;
        },
        httpUtilities: function() {
          return _http.default;
        },
        keyCodes: function() {
          return _keyCodes.default;
        },
        levels: function() {
          return _levels.default;
        },
        methods: function() {
          return _methods.default;
        },
        pathUtilities: function() {
          return _path.default;
        },
        statusCodes: function() {
          return _statusCodes.default;
        },
        statusMessages: function() {
          return _statusMessages.default;
        },
        stringUtilities: function() {
          return _string.default;
        },
        versionUtilities: function() {
          return _version.default;
        }
      });
      var _levels = /* @__PURE__ */ _interop_require_default(require_levels());
      var _methods = /* @__PURE__ */ _interop_require_default(require_methods());
      var _headers = /* @__PURE__ */ _interop_require_default(require_headers());
      var _keyCodes = /* @__PURE__ */ _interop_require_default(require_keyCodes());
      var _encodings = /* @__PURE__ */ _interop_require_default(require_encodings());
      var _characters = /* @__PURE__ */ _interop_require_default(require_characters());
      var _statusCodes = /* @__PURE__ */ _interop_require_default(require_statusCodes());
      var _contentTypes = /* @__PURE__ */ _interop_require_default(require_contentTypes());
      var _statusMessages = /* @__PURE__ */ _interop_require_default(require_statusMessages());
      var _path = /* @__PURE__ */ _interop_require_default(require_path());
      var _http = /* @__PURE__ */ _interop_require_default(require_http());
      var _array = /* @__PURE__ */ _interop_require_default(require_array());
      var _string = /* @__PURE__ */ _interop_require_default(require_string());
      var _version = /* @__PURE__ */ _interop_require_default(require_version());
      var _asynchronous = /* @__PURE__ */ _interop_require_default(require_asynchronous());
      var _ajax = /* @__PURE__ */ _interop_require_default(require_ajax());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
    }
  });

  // lib/utilities/array.js
  var require_array2 = __commonJS({
    "lib/utilities/array.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        add: function() {
          return add;
        },
        first: function() {
          return first;
        },
        flatten: function() {
          return flatten;
        },
        fourth: function() {
          return fourth;
        },
        guarantee: function() {
          return guarantee;
        },
        permute: function() {
          return permute;
        },
        push: function() {
          return push;
        },
        second: function() {
          return second;
        },
        separate: function() {
          return separate;
        },
        third: function() {
          return third;
        }
      });
      var _necessary = require_browser();
      function _array_like_to_array(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _array_without_holes(arr) {
        if (Array.isArray(arr))
          return _array_like_to_array(arr);
      }
      function _instanceof(left, right) {
        if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
          return !!right[Symbol.hasInstance](left);
        } else {
          return left instanceof right;
        }
      }
      function _iterable_to_array(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _non_iterable_spread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _to_consumable_array(arr) {
        return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
      }
      function _unsupported_iterable_to_array(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _array_like_to_array(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _array_like_to_array(o, minLen);
      }
      var first = _necessary.arrayUtilities.first;
      var second = _necessary.arrayUtilities.second;
      var third = _necessary.arrayUtilities.third;
      var fourth = _necessary.arrayUtilities.fourth;
      var push = _necessary.arrayUtilities.push;
      var separate = _necessary.arrayUtilities.separate;
      function add(arrayA, arrayB) {
        arrayB.forEach(function(elementB) {
          arrayA.push(elementB);
        });
      }
      function permute(array, places) {
        var length = array.length, cut = length - places, leadingElements = array.slice(0, cut), trailingElements = array.slice(cut);
        array = _to_consumable_array(trailingElements).concat(_to_consumable_array(leadingElements));
        return array;
      }
      function flatten(arrays) {
        return arrays.reduce(function(elements, array) {
          return elements.concat(array);
        }, []);
      }
      function guarantee(arrayOrElement) {
        arrayOrElement = arrayOrElement || [];
        return _instanceof(arrayOrElement, Array) ? arrayOrElement : [
          arrayOrElement
        ];
      }
    }
  });

  // lib/element.js
  var require_element = __commonJS({
    "lib/element.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return Element;
        }
      });
      var _constants = require_constants();
      var _array = require_array2();
      function _array_like_to_array(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _array_without_holes(arr) {
        if (Array.isArray(arr))
          return _array_like_to_array(arr);
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _construct(Parent, args, Class) {
        if (_is_native_reflect_construct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function construct(Parent2, args2, Class2) {
            var a = [
              null
            ];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2)
              _set_prototype_of(instance, Class2.prototype);
            return instance;
          };
        }
        return _construct.apply(null, arguments);
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _iterable_to_array(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _non_iterable_spread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _to_consumable_array(arr) {
        return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _unsupported_iterable_to_array(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _array_like_to_array(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _array_like_to_array(o, minLen);
      }
      function _is_native_reflect_construct() {
        try {
          var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (_) {
        }
        return (_is_native_reflect_construct = function() {
          return !!result;
        })();
      }
      var Element = /* @__PURE__ */ function() {
        function Element2() {
          _class_call_check(this, Element2);
        }
        _create_class(Element2, [
          {
            key: "getProperties",
            value: function getProperties() {
              return this.properties;
            }
          },
          {
            key: "getChildElements",
            value: function getChildElements() {
              return this.childElements;
            }
          },
          {
            key: "setProperties",
            value: function setProperties(properties) {
              this.properties = properties;
            }
          },
          {
            key: "setChildElements",
            value: function setChildElements(childElements) {
              this.childElements = childElements;
            }
          }
        ], [
          {
            key: "fromProperties",
            value: function fromProperties(Class, properties) {
              for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                remainingArguments[_key - 2] = arguments[_key];
              }
              var element = _construct(Class, _to_consumable_array(remainingArguments)), childElements = _type_of(element.childElements) === _constants.FUNCTION ? (0, _array.guarantee)(element.childElements(properties)) : properties.childElements || [];
              element.setProperties(properties);
              element.setChildElements(childElements);
              return element;
            }
          }
        ]);
        return Element2;
      }();
    }
  });

  // lib/maths/vector.js
  var require_vector = __commonJS({
    "lib/maths/vector.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        add2: function() {
          return add2;
        },
        add3: function() {
          return add3;
        },
        add4: function() {
          return add4;
        },
        cross3: function() {
          return cross3;
        },
        default: function() {
          return _default;
        },
        divide2: function() {
          return divide2;
        },
        divide3: function() {
          return divide3;
        },
        divide4: function() {
          return divide4;
        },
        dot2: function() {
          return dot2;
        },
        dot3: function() {
          return dot3;
        },
        dot4: function() {
          return dot4;
        },
        length2: function() {
          return length2;
        },
        length3: function() {
          return length3;
        },
        length4: function() {
          return length4;
        },
        mean2: function() {
          return mean2;
        },
        mean3: function() {
          return mean3;
        },
        mean4: function() {
          return mean4;
        },
        multiply2: function() {
          return multiply2;
        },
        multiply3: function() {
          return multiply3;
        },
        multiply4: function() {
          return multiply4;
        },
        normalise2: function() {
          return normalise2;
        },
        normalise3: function() {
          return normalise3;
        },
        normalise4: function() {
          return normalise4;
        },
        reflect2: function() {
          return reflect2;
        },
        reflect3: function() {
          return reflect3;
        },
        reflect4: function() {
          return reflect4;
        },
        scale2: function() {
          return scale2;
        },
        scale3: function() {
          return scale3;
        },
        scale4: function() {
          return scale4;
        },
        subtract2: function() {
          return subtract2;
        },
        subtract3: function() {
          return subtract3;
        },
        subtract4: function() {
          return subtract4;
        },
        sum2: function() {
          return sum2;
        },
        sum3: function() {
          return sum3;
        },
        sum4: function() {
          return sum4;
        },
        transform2: function() {
          return transform2;
        },
        transform3: function() {
          return transform3;
        },
        transform4: function() {
          return transform4;
        },
        truncate4: function() {
          return truncate4;
        },
        zero2: function() {
          return zero2;
        },
        zero3: function() {
          return zero3;
        },
        zero4: function() {
          return zero4;
        }
      });
      function _array_like_to_array(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _array_with_holes(arr) {
        if (Array.isArray(arr))
          return arr;
      }
      function _array_without_holes(arr) {
        if (Array.isArray(arr))
          return _array_like_to_array(arr);
      }
      function _iterable_to_array(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _iterable_to_array_limit(arr, i) {
        var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
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
      function _non_iterable_rest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _non_iterable_spread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _sliced_to_array(arr, i) {
        return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
      }
      function _to_consumable_array(arr) {
        return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
      }
      function _unsupported_iterable_to_array(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _array_like_to_array(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _array_like_to_array(o, minLen);
      }
      function zero2() {
        return [
          0,
          0
        ];
      }
      function zero3() {
        return [
          0,
          0,
          0
        ];
      }
      function zero4() {
        return [
          0,
          0,
          0,
          0
        ];
      }
      function length2(vector) {
        var _vector = _sliced_to_array(vector, 2), x = _vector[0], y = _vector[1];
        return Math.sqrt(x * x + y * y);
      }
      function length3(vector) {
        var _vector = _sliced_to_array(vector, 3), x = _vector[0], y = _vector[1], z = _vector[2];
        return Math.sqrt(x * x + y * y + z * z);
      }
      function length4(vector) {
        var _vector = _sliced_to_array(vector, 4), x = _vector[0], y = _vector[1], z = _vector[2], w = _vector[3];
        return Math.sqrt(x * x + y * y + z * z + w * w);
      }
      function dot2(vectorA, vectorB) {
        var _vectorA = _sliced_to_array(vectorA, 2), a0 = _vectorA[0], a1 = _vectorA[1], _vectorB = _sliced_to_array(vectorB, 2), b0 = _vectorB[0], b1 = _vectorB[1];
        return a0 * b0 + a1 * b1;
      }
      function dot3(vectorA, vectorB) {
        var _vectorA = _sliced_to_array(vectorA, 3), a0 = _vectorA[0], a1 = _vectorA[1], a2 = _vectorA[2], _vectorB = _sliced_to_array(vectorB, 3), b0 = _vectorB[0], b1 = _vectorB[1], b2 = _vectorB[2];
        return a0 * b0 + a1 * b1 + a2 * b2;
      }
      function dot4(vectorA, vectorB) {
        var _vectorA = _sliced_to_array(vectorA, 4), a0 = _vectorA[0], a1 = _vectorA[1], a2 = _vectorA[2], a3 = _vectorA[3], _vectorB = _sliced_to_array(vectorB, 4), b0 = _vectorB[0], b1 = _vectorB[1], b2 = _vectorB[2], b3 = _vectorB[3];
        return a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3;
      }
      function cross3(vectorA, vectorB) {
        var _vectorA = _sliced_to_array(vectorA, 3), a0 = _vectorA[0], a1 = _vectorA[1], a2 = _vectorA[2], _vectorB = _sliced_to_array(vectorB, 3), b0 = _vectorB[0], b1 = _vectorB[1], b2 = _vectorB[2];
        return [
          a1 * b2 - a2 * b1,
          a2 * b0 - a0 * b2,
          a0 * b1 - a1 * b0
        ];
      }
      function normalise2(vector) {
        var _vector = _sliced_to_array(vector, 2), x = _vector[0], y = _vector[1], length = Math.sqrt(x * x + y * y);
        return [
          x / length,
          y / length
        ];
      }
      function normalise3(vector) {
        var _vector = _sliced_to_array(vector, 3), x = _vector[0], y = _vector[1], z = _vector[2], length = Math.sqrt(x * x + y * y + z * z);
        return [
          x / length,
          y / length,
          z / length
        ];
      }
      function normalise4(vector) {
        var _vector = _sliced_to_array(vector, 4), x = _vector[0], y = _vector[1], z = _vector[2], w = _vector[3], length = Math.sqrt(x * x + y * y + z * z + w * w);
        return [
          x / length,
          y / length,
          z / length,
          w / length
        ];
      }
      function reflect2(vector) {
        var _vector = _sliced_to_array(vector, 2), x = _vector[0], y = _vector[1];
        return [
          -x,
          -y
        ];
      }
      function reflect3(vector) {
        var _vector = _sliced_to_array(vector, 3), x = _vector[0], y = _vector[1], z = _vector[2];
        return [
          -x,
          -y,
          -z
        ];
      }
      function reflect4(vector) {
        var _vector = _sliced_to_array(vector, 4), x = _vector[0], y = _vector[1], z = _vector[2], w = _vector[3];
        return [
          -x,
          -y,
          -z,
          -w
        ];
      }
      function truncate4(vector) {
        var _vector = _sliced_to_array(vector, 3), x = _vector[0], y = _vector[1], z = _vector[2];
        return [
          x,
          y,
          z
        ];
      }
      function add2(vectorA, vectorB) {
        var _vectorA = _sliced_to_array(vectorA, 2), a0 = _vectorA[0], a1 = _vectorA[1], _vectorB = _sliced_to_array(vectorB, 2), b0 = _vectorB[0], b1 = _vectorB[1];
        return [
          a0 + b0,
          a1 + b1
        ];
      }
      function add3(vectorA, vectorB) {
        var _vectorA = _sliced_to_array(vectorA, 3), a0 = _vectorA[0], a1 = _vectorA[1], a2 = _vectorA[2], _vectorB = _sliced_to_array(vectorB, 3), b0 = _vectorB[0], b1 = _vectorB[1], b2 = _vectorB[2];
        return [
          a0 + b0,
          a1 + b1,
          a2 + b2
        ];
      }
      function add4(vectorA, vectorB) {
        var _vectorA = _sliced_to_array(vectorA, 4), a0 = _vectorA[0], a1 = _vectorA[1], a2 = _vectorA[2], a3 = _vectorA[3], _vectorB = _sliced_to_array(vectorB, 4), b0 = _vectorB[0], b1 = _vectorB[1], b2 = _vectorB[2], b3 = _vectorB[3];
        return [
          a0 + b0,
          a1 + b1,
          a2 + b2,
          a3 + b3
        ];
      }
      function subtract2(vectorA, vectorB) {
        var _vectorA = _sliced_to_array(vectorA, 2), a0 = _vectorA[0], a1 = _vectorA[1], _vectorB = _sliced_to_array(vectorB, 2), b0 = _vectorB[0], b1 = _vectorB[1];
        return [
          a0 - b0,
          a1 - b1
        ];
      }
      function subtract3(vectorA, vectorB) {
        var _vectorA = _sliced_to_array(vectorA, 3), a0 = _vectorA[0], a1 = _vectorA[1], a2 = _vectorA[2], _vectorB = _sliced_to_array(vectorB, 3), b0 = _vectorB[0], b1 = _vectorB[1], b2 = _vectorB[2];
        return [
          a0 - b0,
          a1 - b1,
          a2 - b2
        ];
      }
      function subtract4(vectorA, vectorB) {
        var _vectorA = _sliced_to_array(vectorA, 4), a0 = _vectorA[0], a1 = _vectorA[1], a2 = _vectorA[2], a3 = _vectorA[3], _vectorB = _sliced_to_array(vectorB, 4), b0 = _vectorB[0], b1 = _vectorB[1], b2 = _vectorB[2], b3 = _vectorB[3];
        return [
          a0 - b0,
          a1 - b1,
          a2 - b2,
          a3 - b3
        ];
      }
      function multiply2(vectorA, vectorB) {
        var _vectorA = _sliced_to_array(vectorA, 2), x0 = _vectorA[0], y0 = _vectorA[1], _vectorB = _sliced_to_array(vectorB, 2), x1 = _vectorB[0], y1 = _vectorB[1];
        return [
          x0 * x1,
          y0 * y1
        ];
      }
      function multiply3(vectorA, vectorB) {
        var _vectorA = _sliced_to_array(vectorA, 3), x0 = _vectorA[0], y0 = _vectorA[1], z0 = _vectorA[2], _vectorB = _sliced_to_array(vectorB, 3), x1 = _vectorB[0], y1 = _vectorB[1], z1 = _vectorB[2];
        return [
          x0 * x1,
          y0 * y1,
          z0 * z1
        ];
      }
      function multiply4(vectorA, vectorB) {
        var _vectorA = _sliced_to_array(vectorA, 4), x0 = _vectorA[0], y0 = _vectorA[1], z0 = _vectorA[2], w0 = _vectorA[3], _vectorB = _sliced_to_array(vectorB, 4), x1 = _vectorB[0], y1 = _vectorB[1], z1 = _vectorB[2], w1 = _vectorB[3];
        return [
          x0 * x1,
          y0 * y1,
          z0 * z1,
          w0 * w1
        ];
      }
      function divide2(vector, divisor) {
        var _vector = _sliced_to_array(vector, 2), x = _vector[0], y = _vector[1];
        return [
          x / divisor,
          y / divisor
        ];
      }
      function divide3(vector, divisor) {
        var _vector = _sliced_to_array(vector, 3), x = _vector[0], y = _vector[1], z = _vector[2];
        return [
          x / divisor,
          y / divisor,
          z / divisor
        ];
      }
      function divide4(vector, divisor) {
        var _vector = _sliced_to_array(vector, 4), x = _vector[0], y = _vector[1], z = _vector[2], w = _vector[3];
        return [
          x / divisor,
          y / divisor,
          z / divisor,
          w / divisor
        ];
      }
      function scale2(vector, scalar) {
        var _vector = _sliced_to_array(vector, 2), x = _vector[0], y = _vector[1];
        return [
          x * scalar,
          y * scalar
        ];
      }
      function scale3(vector, scalar) {
        var _vector = _sliced_to_array(vector, 3), x = _vector[0], y = _vector[1], z = _vector[2];
        return [
          x * scalar,
          y * scalar,
          z * scalar
        ];
      }
      function scale4(vector, scalar) {
        var _vector = _sliced_to_array(vector, 4), x = _vector[0], y = _vector[1], z = _vector[2], w = _vector[3];
        return [
          x * scalar,
          y * scalar,
          z * scalar,
          w * scalar
        ];
      }
      function transform2(vector, matrix) {
        var _vector = _sliced_to_array(vector, 2), x = _vector[0], y = _vector[1], _matrix = _sliced_to_array(matrix, 4), m0 = _matrix[0], m1 = _matrix[1], m2 = _matrix[2], m3 = _matrix[3];
        return [
          m0 * x + m2 * y,
          m1 * x + m3 * y
        ];
      }
      function transform3(vector, matrix) {
        var _vector = _sliced_to_array(vector, 3), x = _vector[0], y = _vector[1], z = _vector[2], _matrix = _sliced_to_array(matrix, 9), m0 = _matrix[0], m1 = _matrix[1], m2 = _matrix[2], m3 = _matrix[3], m4 = _matrix[4], m5 = _matrix[5], m6 = _matrix[6], m7 = _matrix[7], m8 = _matrix[8];
        return [
          m0 * x + m3 * y + m6 * z,
          m1 * x + m4 * y + m7 * z,
          m2 * x + m5 * y + m8 * z
        ];
      }
      function transform4(vector, matrix) {
        var _vector = _sliced_to_array(vector, 4), x = _vector[0], y = _vector[1], z = _vector[2], w = _vector[3], _matrix = _sliced_to_array(matrix, 16), m0 = _matrix[0], m1 = _matrix[1], m2 = _matrix[2], m3 = _matrix[3], m4 = _matrix[4], m5 = _matrix[5], m6 = _matrix[6], m7 = _matrix[7], m8 = _matrix[8], m9 = _matrix[9], m10 = _matrix[10], m11 = _matrix[11], m12 = _matrix[12], m13 = _matrix[13], m14 = _matrix[14], m15 = _matrix[15];
        return [
          m0 * x + m4 * y + m8 * z + m12 * w,
          m1 * x + m5 * y + m9 * z + m13 * w,
          m2 * x + m6 * y + m10 * z + m14 * w,
          m3 * x + m7 * y + m11 * z + m15 * w
        ];
      }
      function sum2() {
        for (var _len = arguments.length, vectors = new Array(_len), _key = 0; _key < _len; _key++) {
          vectors[_key] = arguments[_key];
        }
        var zero = zero2(), sum = vectors.reduce(function(sum5, vector) {
          sum5 = add2(sum5, vector);
          return sum5;
        }, zero);
        return sum;
      }
      function sum3() {
        for (var _len = arguments.length, vectors = new Array(_len), _key = 0; _key < _len; _key++) {
          vectors[_key] = arguments[_key];
        }
        var zero = zero3(), sum = vectors.reduce(function(sum5, vector) {
          sum5 = add3(sum5, vector);
          return sum5;
        }, zero);
        return sum;
      }
      function sum4() {
        for (var _len = arguments.length, vectors = new Array(_len), _key = 0; _key < _len; _key++) {
          vectors[_key] = arguments[_key];
        }
        var zero = zero4(), sum = vectors.reduce(function(sum5, vector) {
          sum5 = add4(sum5, vector);
          return sum5;
        }, zero);
        return sum;
      }
      function mean2() {
        for (var _len = arguments.length, vectors = new Array(_len), _key = 0; _key < _len; _key++) {
          vectors[_key] = arguments[_key];
        }
        var length = vectors.length, sum = sum2.apply(void 0, _to_consumable_array(vectors)), mean = divide2(sum, length);
        return mean;
      }
      function mean3() {
        for (var _len = arguments.length, vectors = new Array(_len), _key = 0; _key < _len; _key++) {
          vectors[_key] = arguments[_key];
        }
        var length = vectors.length, sum = sum3.apply(void 0, _to_consumable_array(vectors)), mean = divide3(sum, length);
        return mean;
      }
      function mean4() {
        for (var _len = arguments.length, vectors = new Array(_len), _key = 0; _key < _len; _key++) {
          vectors[_key] = arguments[_key];
        }
        var length = vectors.length, sum = sum4.apply(void 0, _to_consumable_array(vectors)), mean = divide4(sum, length);
        return mean;
      }
      var _default = {
        zero2,
        zero3,
        zero4,
        length2,
        length3,
        length4,
        dot2,
        dot3,
        dot4,
        cross3,
        normalise2,
        normalise3,
        normalise4,
        reflect2,
        reflect3,
        reflect4,
        truncate4,
        add2,
        add3,
        add4,
        subtract2,
        subtract3,
        subtract4,
        multiply2,
        multiply3,
        multiply4,
        divide2,
        divide3,
        divide4,
        scale2,
        scale3,
        scale4,
        transform2,
        transform3,
        transform4,
        sum2,
        sum3,
        sum4,
        mean2,
        mean3,
        mean4
      };
    }
  });

  // lib/primitive/edge.js
  var require_edge = __commonJS({
    "lib/primitive/edge.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return Edge;
        }
      });
      var _vector = require_vector();
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      var Edge = /* @__PURE__ */ function() {
        function Edge2(position, extent) {
          _class_call_check(this, Edge2);
          this.position = position;
          this.extent = extent;
        }
        _create_class(Edge2, [
          {
            key: "getPosition",
            value: function getPosition() {
              return this.position;
            }
          },
          {
            key: "getExtent",
            value: function getExtent() {
              return this.extent;
            }
          },
          {
            key: "clone",
            value: function clone() {
              var position = this.position.slice(), extent = this.extent.slice(), edge = new Edge2(position, extent);
              return edge;
            }
          }
        ], [
          {
            key: "fromStartVertexAndEndVertex",
            value: function fromStartVertexAndEndVertex(Class, startVertex, endVertex) {
              if (endVertex === void 0) {
                endVertex = startVertex;
                startVertex = Class;
                Class = Edge2;
              }
              var startPosition = startVertex.getPosition(), endPosition = endVertex.getPosition(), position = startPosition.slice(), extent = (0, _vector.subtract3)(endPosition, startPosition), edge = new Class(position, extent);
              return edge;
            }
          }
        ]);
        return Edge2;
      }();
    }
  });

  // lib/utilities/midPoint.js
  var require_midPoint = __commonJS({
    "lib/utilities/midPoint.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        calculateMidPointPosition: function() {
          return calculateMidPointPosition;
        },
        isMidPointPositionToOneSideOfMaskingEdges: function() {
          return isMidPointPositionToOneSideOfMaskingEdges;
        },
        projectMidPointPositionOntoXYPlane: function() {
          return projectMidPointPositionOntoXYPlane;
        }
      });
      var _vector = require_vector();
      function _array_like_to_array(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _array_without_holes(arr) {
        if (Array.isArray(arr))
          return _array_like_to_array(arr);
      }
      function _iterable_to_array(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _non_iterable_spread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _to_consumable_array(arr) {
        return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
      }
      function _unsupported_iterable_to_array(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _array_like_to_array(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _array_like_to_array(o, minLen);
      }
      function calculateMidPointPosition(vertices) {
        var midPointPosition = vertices.reduce(function(midPointPosition2, vertex) {
          var vertexPosition = vertex.getPosition(), scaledVertexPosition = (0, _vector.scale3)(vertexPosition, 1 / 3);
          midPointPosition2 = (0, _vector.add3)(midPointPosition2, scaledVertexPosition);
          return midPointPosition2;
        }, [
          0,
          0,
          0
        ]);
        return midPointPosition;
      }
      function projectMidPointPositionOntoXYPlane(midPointPosition) {
        midPointPosition = _to_consumable_array(midPointPosition.slice(0, 2)).concat([
          0
        ]);
        return midPointPosition;
      }
      function isMidPointPositionToOneSideOfMaskingEdges(midPointPosition, maskingEdges) {
        var midPointPositionToTheLeftOfMaskingEdges = isMidPointPositionToTheLeftOfMaskingEdges(midPointPosition, maskingEdges), midPointPositionToTheRightOfMaskingEdges = isMidPointPositionToTheRightOfMaskingEdges(midPointPosition, maskingEdges), midPointPositionToOneSideOfMaskingEdges = midPointPositionToTheLeftOfMaskingEdges || midPointPositionToTheRightOfMaskingEdges;
        return midPointPositionToOneSideOfMaskingEdges;
      }
      function isMidPointPositionToTheLeftOfMaskingEdges(midPointPosition, maskingEdges) {
        var midPointPositionToTheLeftOfMaskingEdges = maskingEdges.reduce(function(midPointPositionToTheLeftOfMaskingEdges2, maskingEdge) {
          if (midPointPositionToTheLeftOfMaskingEdges2) {
            var midPointPositionToTheLeftOfMaskingEdge = maskingEdge.isMidPointPositionToTheLeft(midPointPosition);
            midPointPositionToTheLeftOfMaskingEdges2 = midPointPositionToTheLeftOfMaskingEdge;
          }
          return midPointPositionToTheLeftOfMaskingEdges2;
        }, true);
        return midPointPositionToTheLeftOfMaskingEdges;
      }
      function isMidPointPositionToTheRightOfMaskingEdges(midPointPosition, maskingEdges) {
        var midPointPositionToTheRightOfMaskingEdges = maskingEdges.reduce(function(midPointPositionToTheRightOfMaskingEdges2, maskingEdge) {
          if (midPointPositionToTheRightOfMaskingEdges2) {
            var midPointPositionToTheRightOfMaskingEdge = maskingEdge.isMidPointPositionToTheRight(midPointPosition);
            midPointPositionToTheRightOfMaskingEdges2 = midPointPositionToTheRightOfMaskingEdge;
          }
          return midPointPositionToTheRightOfMaskingEdges2;
        }, true);
        return midPointPositionToTheRightOfMaskingEdges;
      }
    }
  });

  // lib/primitive/edge/masking.js
  var require_masking = __commonJS({
    "lib/primitive/edge/masking.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return MaskingEdge;
        }
      });
      var _edge = /* @__PURE__ */ _interop_require_default(require_edge());
      var _array = require_array2();
      var _vector = require_vector();
      var _midPoint = require_midPoint();
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _call_super(_this, derived, args) {
        derived = _get_prototype_of(derived);
        return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _is_native_reflect_construct() {
        try {
          var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (_) {
        }
        return (_is_native_reflect_construct = function() {
          return !!result;
        })();
      }
      var MaskingEdge = /* @__PURE__ */ function(Edge) {
        _inherits(MaskingEdge2, Edge);
        function MaskingEdge2() {
          _class_call_check(this, MaskingEdge2);
          return _call_super(this, MaskingEdge2, arguments);
        }
        _create_class(MaskingEdge2, [
          {
            key: "isMidPointPositionToTheLeft",
            value: function isMidPointPositionToTheLeft(midPointPosition) {
              midPointPosition = (0, _midPoint.projectMidPointPositionOntoXYPlane)(midPointPosition);
              var extent = this.getExtent(), position = this.getPosition(), midPointRelativePosition = (0, _vector.subtract3)(midPointPosition, position), crossProductComponents = (0, _vector.cross3)(extent, midPointRelativePosition), thirdCrossProductComponent = (0, _array.third)(crossProductComponents), midPointPositionToTheLeft = thirdCrossProductComponent > 0;
              return midPointPositionToTheLeft;
            }
          },
          {
            key: "isMidPointPositionToTheRight",
            value: function isMidPointPositionToTheRight(midPointPosition) {
              var midPointPositionToTheLeft = this.isMidPointPositionToTheLeft(midPointPosition), midPointPositionToTheRight = !midPointPositionToTheLeft;
              return midPointPositionToTheRight;
            }
          }
        ], [
          {
            key: "fromStartVertexAndEndVertex",
            value: function fromStartVertexAndEndVertex(startVertex, endVertex) {
              return _edge.default.fromStartVertexAndEndVertex(MaskingEdge2, startVertex, endVertex);
            }
          }
        ]);
        return MaskingEdge2;
      }(_edge.default);
    }
  });

  // lib/defaults.js
  var require_defaults = __commonJS({
    "lib/defaults.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        DEFAULT_BACKGROUND_COLOUR: function() {
          return DEFAULT_BACKGROUND_COLOUR;
        },
        DEFAULT_DEPTH: function() {
          return DEFAULT_DEPTH;
        },
        DEFAULT_FIELD_OF_VIEW: function() {
          return DEFAULT_FIELD_OF_VIEW;
        },
        DEFAULT_INITIAL_ANGLES: function() {
          return DEFAULT_INITIAL_ANGLES;
        },
        DEFAULT_INITIAL_DISTANCE: function() {
          return DEFAULT_INITIAL_DISTANCE;
        },
        DEFAULT_INITIAL_OFFSETS: function() {
          return DEFAULT_INITIAL_OFFSETS;
        },
        DEFAULT_INITIAL_POSITION: function() {
          return DEFAULT_INITIAL_POSITION;
        },
        DEFAULT_MARGIN_OF_ERROR: function() {
          return DEFAULT_MARGIN_OF_ERROR;
        },
        DEFAULT_MOUSE_SENSITIVITY: function() {
          return DEFAULT_MOUSE_SENSITIVITY;
        },
        DEFAULT_MOUSE_WHEEL_SENSITIVITY: function() {
          return DEFAULT_MOUSE_WHEEL_SENSITIVITY;
        },
        DEFAULT_PERSIST: function() {
          return DEFAULT_PERSIST;
        },
        DEFAULT_Z_FAR: function() {
          return DEFAULT_Z_FAR;
        },
        DEFAULT_Z_NEAR: function() {
          return DEFAULT_Z_NEAR;
        }
      });
      var _vector = require_vector();
      var DEFAULT_DEPTH = 1;
      var DEFAULT_Z_FAR = 1e3;
      var DEFAULT_Z_NEAR = 1;
      var DEFAULT_PERSIST = false;
      var DEFAULT_FIELD_OF_VIEW = 45;
      var DEFAULT_INITIAL_ANGLES = (0, _vector.zero2)();
      var DEFAULT_INITIAL_OFFSETS = (0, _vector.zero3)();
      var DEFAULT_MARGIN_OF_ERROR = 1e-7;
      var DEFAULT_INITIAL_DISTANCE = 5;
      var DEFAULT_INITIAL_POSITION = [
        0,
        0,
        5
      ];
      var DEFAULT_MOUSE_SENSITIVITY = 1;
      var DEFAULT_BACKGROUND_COLOUR = [
        0,
        0,
        0
      ];
      var DEFAULT_MOUSE_WHEEL_SENSITIVITY = 1;
    }
  });

  // lib/utilities/approximate.js
  var require_approximate = __commonJS({
    "lib/utilities/approximate.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        isApproximatelyEqualToOne: function() {
          return isApproximatelyEqualToOne;
        },
        isApproximatelyEqualToZero: function() {
          return isApproximatelyEqualToZero;
        }
      });
      var _defaults = require_defaults();
      function isApproximatelyEqualToOne(value) {
        var marginOfError = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _defaults.DEFAULT_MARGIN_OF_ERROR;
        return isApproximatelyEqualTo(value, 1, marginOfError);
      }
      function isApproximatelyEqualToZero(value) {
        var marginOfError = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _defaults.DEFAULT_MARGIN_OF_ERROR;
        return isApproximatelyEqualTo(value, 0, marginOfError);
      }
      function isApproximatelyEqualTo(valueA, valueB) {
        var marginOfError = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _defaults.DEFAULT_MARGIN_OF_ERROR;
        var difference = valueA - valueB, absoluteDifference = Math.abs(difference), approximatelyEqual = absoluteDifference < marginOfError;
        return approximatelyEqual;
      }
    }
  });

  // lib/utilities/angle.js
  var require_angle = __commonJS({
    "lib/utilities/angle.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        calculateHalfAngleCosine: function() {
          return calculateHalfAngleCosine;
        },
        calculateHalfAngleSine: function() {
          return calculateHalfAngleSine;
        }
      });
      function calculateHalfAngleSine(angleCosine) {
        return Math.sqrt((1 - angleCosine) / 2);
      }
      function calculateHalfAngleCosine(angleCosine) {
        return Math.sqrt((1 + angleCosine) / 2);
      }
    }
  });

  // lib/utilities/quaternion.js
  var require_quaternion = __commonJS({
    "lib/utilities/quaternion.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        calculateArbitraryRotationQuaternion: function() {
          return calculateArbitraryRotationQuaternion;
        },
        calculateBackwardsRotationQuaternion: function() {
          return calculateBackwardsRotationQuaternion;
        },
        calculateForwardsRotationQuaternion: function() {
          return calculateForwardsRotationQuaternion;
        },
        calculateInverseRotationQuaternion: function() {
          return calculateInverseRotationQuaternion;
        },
        calculateRotationAboutZAxisQuaternion: function() {
          return calculateRotationAboutZAxisQuaternion;
        },
        rotateImaginaryQuaternion: function() {
          return rotateImaginaryQuaternion;
        }
      });
      var _vector = require_vector();
      var _approximate = require_approximate();
      var _array = require_array2();
      var _angle = require_angle();
      function rotateImaginaryQuaternion(imaginaryQuaternion, rotationQuaternion, inverseRotationQuaternion) {
        return hamiltonProduct(hamiltonProduct(rotationQuaternion, imaginaryQuaternion), inverseRotationQuaternion);
      }
      function calculateInverseRotationQuaternion(rotationQuaternion) {
        var rotationQuaternionComponents = rotationQuaternion, firstRotationQuaternionComponent = (0, _array.first)(rotationQuaternionComponents), secondRotationQuaternionComponent = (0, _array.second)(rotationQuaternionComponents), thirdRotationQuaternionComponent = (0, _array.third)(rotationQuaternionComponents), fourthRotationQuaternionComponent = (0, _array.fourth)(rotationQuaternionComponents), inverseRotationQuaternion = [
          firstRotationQuaternionComponent,
          -secondRotationQuaternionComponent,
          -thirdRotationQuaternionComponent,
          -fourthRotationQuaternionComponent
        ];
        return inverseRotationQuaternion;
      }
      function calculateForwardsRotationQuaternion(rotationQuaternion) {
        var forwardsRotationQuaternion = rotationQuaternion;
        return forwardsRotationQuaternion;
      }
      function calculateBackwardsRotationQuaternion(rotationQuaternion) {
        var inverseRotationQuaternion = calculateInverseRotationQuaternion(rotationQuaternion), backwardsRotationQuaternion = inverseRotationQuaternion;
        return backwardsRotationQuaternion;
      }
      function calculateArbitraryRotationQuaternion(normal) {
        var extent = normal.getExtent(), unitNormal = extent, zAxis = [
          0,
          0,
          1
        ], dotProductOfUnitNormalAndZAxis = (0, _vector.dot3)(unitNormal, zAxis), crossProductOfUnitNormalAndZAxis = (0, _vector.cross3)(unitNormal, zAxis), angleOfRotationCosine = dotProductOfUnitNormalAndZAxis, angleOfRotationCosineAbsoluteValue = Math.abs(angleOfRotationCosine), angleOfRotationCosineAbsoluteValueApproximatelyEqualToOne = (0, _approximate.isApproximatelyEqualToOne)(angleOfRotationCosineAbsoluteValue), axisOfRotation = angleOfRotationCosineAbsoluteValueApproximatelyEqualToOne ? [
          1,
          0,
          0
        ] : crossProductOfUnitNormalAndZAxis, unitAxisOfRotation = (0, _vector.normalise3)(axisOfRotation), halfAngleOfRotationCosine = (0, _angle.calculateHalfAngleCosine)(angleOfRotationCosine), halfAngleOfRotationSine = (0, _angle.calculateHalfAngleSine)(angleOfRotationCosine), unitAxisOfRotationComponents = unitAxisOfRotation, firstAxisOfRotationComponent = (0, _array.first)(unitAxisOfRotationComponents), secondAxisOfRotationComponent = (0, _array.second)(unitAxisOfRotationComponents), thirdAxisOfRotationComponent = (0, _array.third)(unitAxisOfRotationComponents), arbitraryRotationQuaternion = [
          halfAngleOfRotationCosine,
          firstAxisOfRotationComponent * halfAngleOfRotationSine,
          secondAxisOfRotationComponent * halfAngleOfRotationSine,
          thirdAxisOfRotationComponent * halfAngleOfRotationSine
        ];
        return arbitraryRotationQuaternion;
      }
      function calculateRotationAboutZAxisQuaternion(maskingEdge) {
        var maskingEdgeExtent = maskingEdge.getExtent(), unitMaskingEdgeExtent = (0, _vector.normalise3)(maskingEdgeExtent), unitMaskingEdgeExtentComponents = unitMaskingEdgeExtent, firstUnitMaskingEdgeExtentComponent = (0, _array.first)(unitMaskingEdgeExtentComponents), secondUnitMaskingEdgeExtentComponent = (0, _array.second)(unitMaskingEdgeExtentComponents), angleOfRotationSine = firstUnitMaskingEdgeExtentComponent, angleOfRotationCosine = secondUnitMaskingEdgeExtentComponent, halfAngleOfRotationCosine = (0, _angle.calculateHalfAngleCosine)(angleOfRotationCosine), halfAngleOfRotationSine = angleOfRotationSine > 0 ? +(0, _angle.calculateHalfAngleSine)(angleOfRotationCosine) : -(0, _angle.calculateHalfAngleSine)(angleOfRotationCosine), rotationAboutZAxisQuaternion = [
          halfAngleOfRotationCosine,
          0,
          0,
          halfAngleOfRotationSine
        ];
        return rotationAboutZAxisQuaternion;
      }
      function hamiltonProduct(quaternionA, quaternionB) {
        var a1 = quaternionA[0], b1 = quaternionA[1], c1 = quaternionA[2], d1 = quaternionA[3], a2 = quaternionB[0], b2 = quaternionB[1], c2 = quaternionB[2], d2 = quaternionB[3], a = a1 * a2 - b1 * b2 - c1 * c2 - d1 * d2, b = a1 * b2 + b1 * a2 + c1 * d2 - d1 * c2, c = a1 * c2 - b1 * d2 + c1 * a2 + d1 * b2, d = a1 * d2 + b1 * c2 - c1 * b2 + d1 * a2, quaternion = [
          a,
          b,
          c,
          d
        ];
        return quaternion;
      }
    }
  });

  // lib/utilities/rotation.js
  var require_rotation = __commonJS({
    "lib/utilities/rotation.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "rotatePosition", {
        enumerable: true,
        get: function() {
          return rotatePosition;
        }
      });
      var _quaternion = require_quaternion();
      function _array_like_to_array(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _array_without_holes(arr) {
        if (Array.isArray(arr))
          return _array_like_to_array(arr);
      }
      function _iterable_to_array(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _non_iterable_spread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _to_consumable_array(arr) {
        return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
      }
      function _unsupported_iterable_to_array(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _array_like_to_array(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _array_like_to_array(o, minLen);
      }
      function rotatePosition(position, rotationQuaternion) {
        var imaginaryQuaternion = imaginaryQuaternionFromPosition(position), inverseRotationQuaternion = (0, _quaternion.calculateInverseRotationQuaternion)(rotationQuaternion), rotatedImaginaryQuaternion = (0, _quaternion.rotateImaginaryQuaternion)(imaginaryQuaternion, rotationQuaternion, inverseRotationQuaternion);
        position = positionFromImaginaryQuaternion(rotatedImaginaryQuaternion);
        return position;
      }
      function imaginaryQuaternionFromPosition(position) {
        return [
          0
        ].concat(_to_consumable_array(position));
      }
      function positionFromImaginaryQuaternion(imaginaryQuaternion) {
        return imaginaryQuaternion.slice(1);
      }
    }
  });

  // lib/utilities/intersection.js
  var require_intersection = __commonJS({
    "lib/utilities/intersection.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        calculateIntermediateVertexPosition: function() {
          return calculateIntermediateVertexPosition;
        },
        calculateIntersection: function() {
          return calculateIntersection;
        },
        calculateNonNullIntersectionIndex: function() {
          return calculateNonNullIntersectionIndex;
        },
        calculateNonNullIntersections: function() {
          return calculateNonNullIntersections;
        },
        calculateNullIntersectionIndex: function() {
          return calculateNullIntersectionIndex;
        }
      });
      var _array = require_array2();
      var _vector = require_vector();
      var _approximate = require_approximate();
      function calculateIntersection(edge, firstPositionComponent) {
        var intersection = null;
        var edgeNonParallel = isEdgeNonParallel(edge);
        if (edgeNonParallel) {
          var edgeIntersection = calculateEdgeIntersection(edge, firstPositionComponent), edgeIntersectionNonTrivial = edgeIntersection > 0 && edgeIntersection < 1;
          if (edgeIntersectionNonTrivial) {
            intersection = edgeIntersection;
          }
        }
        return intersection;
      }
      function calculateNonNullIntersections(intersections) {
        var nonNullIntersections = intersections.reduce(function(nonNullIntersections2, intersection) {
          if (intersection !== null) {
            var nonNullIntersection = intersection;
            nonNullIntersections2.push(nonNullIntersection);
          }
          return nonNullIntersections2;
        }, []);
        return nonNullIntersections;
      }
      function calculateNullIntersectionIndex(intersections) {
        var nullIntersectionIndex = intersections.reduce(function(nullIntersectionIndex2, intersection, index) {
          if (nullIntersectionIndex2 === null) {
            if (intersection === null) {
              nullIntersectionIndex2 = index;
            }
          }
          return nullIntersectionIndex2;
        }, null);
        return nullIntersectionIndex;
      }
      function calculateNonNullIntersectionIndex(intersections) {
        var nullIntersectionIndex = intersections.reduce(function(nullIntersectionIndex2, intersection, index) {
          if (nullIntersectionIndex2 === null) {
            if (intersection !== null) {
              nullIntersectionIndex2 = index;
            }
          }
          return nullIntersectionIndex2;
        }, null);
        return nullIntersectionIndex;
      }
      function calculateIntermediateVertexPosition(startVertexPosition, endVertexPosition, intersection) {
        var extent = (0, _vector.subtract3)(endVertexPosition, startVertexPosition), offset = (0, _vector.scale3)(extent, intersection), intermediateVertexPosition = (0, _vector.add3)(startVertexPosition, offset);
        return intermediateVertexPosition;
      }
      function isEdgeNonParallel(edge) {
        var edgeExtent = edge.getExtent(), edgeExtentComponents = edgeExtent, firstEdgeExtentComponent = (0, _array.first)(edgeExtentComponents), secondEdgeExtentComponent = (0, _array.second)(edgeExtentComponents), edgeAngleTangent = firstEdgeExtentComponent / secondEdgeExtentComponent, edgeAngleTangentApproximatelyEqualToZero = (0, _approximate.isApproximatelyEqualToZero)(edgeAngleTangent), edgeParallel = edgeAngleTangentApproximatelyEqualToZero, edgeNonParallel = !edgeParallel;
        return edgeNonParallel;
      }
      function calculateEdgeIntersection(edge, firstPositionComponent) {
        var edgeExtent = edge.getExtent(), edgePosition = edge.getPosition(), edgeExtentComponents = edgeExtent, edgePositionComponents = edgePosition, firstEdgeExtentComponent = (0, _array.first)(edgeExtentComponents), firstEdgePositionComponent = (0, _array.first)(edgePositionComponents), edgeIntersection = (firstPositionComponent - firstEdgePositionComponent) / firstEdgeExtentComponent;
        return edgeIntersection;
      }
    }
  });

  // lib/primitive/verticalLine.js
  var require_verticalLine = __commonJS({
    "lib/primitive/verticalLine.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return VerticalLine;
        }
      });
      var _array = require_array2();
      var _rotation = require_rotation();
      var _intersection = require_intersection();
      var _quaternion = require_quaternion();
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      var VerticalLine = /* @__PURE__ */ function() {
        function VerticalLine2(firstPositionComponent, forwardsRotationQuaternion, backwardsRotationQuaternion) {
          _class_call_check(this, VerticalLine2);
          this.firstPositionComponent = firstPositionComponent;
          this.forwardsRotationQuaternion = forwardsRotationQuaternion;
          this.backwardsRotationQuaternion = backwardsRotationQuaternion;
        }
        _create_class(VerticalLine2, [
          {
            key: "getFirstPositionComponent",
            value: function getFirstPositionComponent() {
              return this.firstPositionComponent;
            }
          },
          {
            key: "getForwardsRotationQuaternion",
            value: function getForwardsRotationQuaternion() {
              return this.forwardsRotationQuaternion;
            }
          },
          {
            key: "getBackwardsRotationQuaternion",
            value: function getBackwardsRotationQuaternion() {
              return this.backwardsRotationQuaternion;
            }
          },
          {
            key: "splitFacet",
            value: function splitFacet(facet, smallerFacets, marginOfError) {
              var _this = this;
              var edges = facet.getEdges(), intersections = edges.map(function(edge) {
                var intersection = (0, _intersection.calculateIntersection)(edge, _this.firstPositionComponent);
                return intersection;
              });
              facet.splitWithIntersections(intersections, smallerFacets, marginOfError);
            }
          },
          {
            key: "splitFacets",
            value: function splitFacets(facets, marginOfError) {
              var _this = this;
              var smallerFacets = [];
              facets.forEach(function(facet) {
                facet.rotate(_this.forwardsRotationQuaternion);
                _this.splitFacet(facet, smallerFacets, marginOfError);
              });
              smallerFacets.forEach(function(smallerFacet) {
                smallerFacet.rotate(_this.backwardsRotationQuaternion);
              });
              return smallerFacets;
            }
          }
        ], [
          {
            key: "fromMaskingEdge",
            value: function fromMaskingEdge(maskingEdge) {
              var maskingEdgePosition = maskingEdge.getPosition(), rotationAboutZAxisQuaternion = (0, _quaternion.calculateRotationAboutZAxisQuaternion)(maskingEdge), rotationQuaternion = rotationAboutZAxisQuaternion, forwardsRotationQuaternion = (0, _quaternion.calculateForwardsRotationQuaternion)(rotationQuaternion), backwardsRotationQuaternion = (0, _quaternion.calculateBackwardsRotationQuaternion)(rotationQuaternion), position = (0, _rotation.rotatePosition)(maskingEdgePosition, rotationQuaternion), positionComponents = position, firstPositionComponent = (0, _array.first)(positionComponents), verticalLine = new VerticalLine2(firstPositionComponent, forwardsRotationQuaternion, backwardsRotationQuaternion);
              return verticalLine;
            }
          }
        ]);
        return VerticalLine2;
      }();
    }
  });

  // lib/utilities/vertices.js
  var require_vertices = __commonJS({
    "lib/utilities/vertices.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        rotateVertices: function() {
          return rotateVertices;
        },
        verticesFromCoordinateTuplesAndIndexTuple: function() {
          return verticesFromCoordinateTuplesAndIndexTuple;
        }
      });
      function rotateVertices(vertices, rotationQuaternion) {
        var rotatedVertices = vertices.map(function(vertex) {
          var rotatedVertex = vertex.clone();
          rotatedVertex.rotate(rotationQuaternion);
          return rotatedVertex;
        });
        return rotatedVertices;
      }
      function verticesFromCoordinateTuplesAndIndexTuple(coordinateTuples, indexTuple, Vertex) {
        var indexes = indexTuple, vertices = indexes.map(function(index) {
          var coordinateTuple = coordinateTuples[index], vertex = Vertex.fromCoordinateTuple(coordinateTuple);
          return vertex;
        });
        return vertices;
      }
    }
  });

  // lib/primitive/maskingFacet.js
  var require_maskingFacet = __commonJS({
    "lib/primitive/maskingFacet.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return MaskingFacet;
        }
      });
      var _masking = /* @__PURE__ */ _interop_require_default(require_masking());
      var _verticalLine = /* @__PURE__ */ _interop_require_default(require_verticalLine());
      var _array = require_array2();
      var _vertices = require_vertices();
      var _constants = require_constants();
      var _quaternion = require_quaternion();
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var MaskingFacet = /* @__PURE__ */ function() {
        function MaskingFacet2(maskingEdges, verticalLines, forwardsRotationQuaternion, backwardsRotationQuaternion) {
          _class_call_check(this, MaskingFacet2);
          this.maskingEdges = maskingEdges;
          this.verticalLines = verticalLines;
          this.forwardsRotationQuaternion = forwardsRotationQuaternion;
          this.backwardsRotationQuaternion = backwardsRotationQuaternion;
        }
        _create_class(MaskingFacet2, [
          {
            key: "getMaskingEdges",
            value: function getMaskingEdges() {
              return this.maskingEdges;
            }
          },
          {
            key: "getVerticalLines",
            value: function getVerticalLines() {
              return this.verticalLines;
            }
          },
          {
            key: "getForwardsRotationQuaternion",
            value: function getForwardsRotationQuaternion() {
              return this.forwardsRotationQuaternion;
            }
          },
          {
            key: "getBackwardsRotationQuaternion",
            value: function getBackwardsRotationQuaternion() {
              return this.backwardsRotationQuaternion;
            }
          },
          {
            key: "maskFacet",
            value: function maskFacet(facet, unmaskedFacets, marginOfError) {
              var _this = this;
              var unmaskedFacet = facet.clone();
              facet.rotate(this.forwardsRotationQuaternion);
              var maskingFacet = this, smallerFacets = this.splitFacet(facet, marginOfError), maskedSmallerFacets = [], unmaskedSmallerFacets = [];
              (0, _array.separate)(smallerFacets, maskedSmallerFacets, unmaskedSmallerFacets, function(smallerFacet) {
                var smallerFacetMasked = smallerFacet.isMasked(maskingFacet);
                return smallerFacetMasked;
              });
              var maskedSmallerFacetsLength = maskedSmallerFacets.length;
              if (maskedSmallerFacetsLength === 0) {
                unmaskedFacets.push(unmaskedFacet);
              } else {
                unmaskedSmallerFacets.forEach(function(unmaskedSmallerFacet) {
                  unmaskedSmallerFacet.rotate(_this.backwardsRotationQuaternion);
                });
                (0, _array.add)(unmaskedFacets, unmaskedSmallerFacets);
              }
            }
          },
          {
            key: "splitFacet",
            value: function splitFacet(facet, marginOfError) {
              var facets = [
                facet
              ], smallerFacets = facets;
              this.verticalLines.forEach(function(verticalLine) {
                smallerFacets = verticalLine.splitFacets(facets, marginOfError);
                facets = smallerFacets;
              });
              return smallerFacets;
            }
          }
        ], [
          {
            key: "fromFacet",
            value: function fromFacet(facet) {
              var facetNormal = facet.getNormal(), facetVertices = facet.getVertices(), normal = facetNormal, arbitraryRotationQuaternion = (0, _quaternion.calculateArbitraryRotationQuaternion)(normal), rotationQuaternion = arbitraryRotationQuaternion, vertices = (0, _vertices.rotateVertices)(facetVertices, rotationQuaternion), maskingEdges = calculateMaskingEdges(vertices), verticalLines = maskingEdges.map(function(maskingEdge) {
                var verticalLine = _verticalLine.default.fromMaskingEdge(maskingEdge);
                return verticalLine;
              }), forwardsRotationQuaternion = (0, _quaternion.calculateForwardsRotationQuaternion)(rotationQuaternion), backwardsRotationQuaternion = (0, _quaternion.calculateBackwardsRotationQuaternion)(rotationQuaternion), maskingFacet = new MaskingFacet2(maskingEdges, verticalLines, forwardsRotationQuaternion, backwardsRotationQuaternion);
              return maskingFacet;
            }
          }
        ]);
        return MaskingFacet2;
      }();
      function calculateMaskingEdges(vertices) {
        var maskingEdges = vertices.map(function(vertex, index) {
          var startIndex = index, endIndex = (startIndex + 1) % _constants.VERTICES_LENGTH, startVertex = vertices[startIndex], endVertex = vertices[endIndex], maskingEdge = _masking.default.fromStartVertexAndEndVertex(startVertex, endVertex);
          return maskingEdge;
        });
        return maskingEdges;
      }
    }
  });

  // lib/maths/matrix.js
  var require_matrix = __commonJS({
    "lib/maths/matrix.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        default: function() {
          return _default;
        },
        determinant2: function() {
          return determinant2;
        },
        determinant3: function() {
          return determinant3;
        },
        determinant4: function() {
          return determinant4;
        },
        identity2: function() {
          return identity2;
        },
        identity3: function() {
          return identity3;
        },
        identity4: function() {
          return identity4;
        },
        invert2: function() {
          return invert2;
        },
        invert3: function() {
          return invert3;
        },
        invert4: function() {
          return invert4;
        },
        multiply2: function() {
          return multiply2;
        },
        multiply3: function() {
          return multiply3;
        },
        multiply4: function() {
          return multiply4;
        },
        perspective4: function() {
          return perspective4;
        },
        rotate4: function() {
          return rotate4;
        },
        scale4: function() {
          return scale4;
        },
        translate4: function() {
          return translate4;
        },
        transpose2: function() {
          return transpose2;
        },
        transpose3: function() {
          return transpose3;
        },
        transpose4: function() {
          return transpose4;
        }
      });
      var _vector = require_vector();
      function _array_like_to_array(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _array_with_holes(arr) {
        if (Array.isArray(arr))
          return arr;
      }
      function _iterable_to_array_limit(arr, i) {
        var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
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
      function _non_iterable_rest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _sliced_to_array(arr, i) {
        return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
      }
      function _unsupported_iterable_to_array(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _array_like_to_array(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _array_like_to_array(o, minLen);
      }
      function identity2() {
        return [
          1,
          0,
          0,
          1
        ];
      }
      function identity3() {
        return [
          1,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          1
        ];
      }
      function identity4() {
        return [
          1,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          1
        ];
      }
      function multiply2(matrixA, matrixB) {
        var _matrixA = _sliced_to_array(matrixA, 4), a0 = _matrixA[0], a1 = _matrixA[1], a2 = _matrixA[2], a3 = _matrixA[3], _matrixB = _sliced_to_array(matrixB, 4), b0 = _matrixB[0], b1 = _matrixB[1], b2 = _matrixB[2], b3 = _matrixB[3];
        return [
          a0 * b0 + a2 * b1,
          a1 * b0 + a3 * b1,
          a0 * b2 + a2 * b3,
          a1 * b2 + a3 * b3
        ];
      }
      function multiply3(matrixA, matrixB) {
        var _matrixA = _sliced_to_array(matrixA, 9), a0 = _matrixA[0], a1 = _matrixA[1], a2 = _matrixA[2], a3 = _matrixA[3], a4 = _matrixA[4], a5 = _matrixA[5], a6 = _matrixA[6], a7 = _matrixA[7], a8 = _matrixA[8], _matrixB = _sliced_to_array(matrixB, 9), b0 = _matrixB[0], b1 = _matrixB[1], b2 = _matrixB[2], b3 = _matrixB[3], b4 = _matrixB[4], b5 = _matrixB[5], b6 = _matrixB[6], b7 = _matrixB[7], b8 = _matrixB[8];
        return [
          a0 * b0 + a3 * b1 + a6 * b2,
          a1 * b0 + a4 * b1 + a7 * b2,
          a2 * b0 + a5 * b1 + a8 * b2,
          a0 * b3 + a3 * b4 + a6 * b5,
          a1 * b3 + a4 * b4 + a7 * b5,
          a2 * b3 + a5 * b4 + a8 * b5,
          a0 * b6 + a3 * b7 + a6 * b8,
          a1 * b6 + a4 * b7 + a7 * b8,
          a2 * b6 + a5 * b7 + a8 * b8
        ];
      }
      function multiply4(matrixA, matrixB) {
        var _matrixA = _sliced_to_array(matrixA, 16), a0 = _matrixA[0], a1 = _matrixA[1], a2 = _matrixA[2], a3 = _matrixA[3], a4 = _matrixA[4], a5 = _matrixA[5], a6 = _matrixA[6], a7 = _matrixA[7], a8 = _matrixA[8], a9 = _matrixA[9], a10 = _matrixA[10], a11 = _matrixA[11], a12 = _matrixA[12], a13 = _matrixA[13], a14 = _matrixA[14], a15 = _matrixA[15], _matrixB = _sliced_to_array(matrixB, 16), b0 = _matrixB[0], b1 = _matrixB[1], b2 = _matrixB[2], b3 = _matrixB[3], b4 = _matrixB[4], b5 = _matrixB[5], b6 = _matrixB[6], b7 = _matrixB[7], b8 = _matrixB[8], b9 = _matrixB[9], b10 = _matrixB[10], b11 = _matrixB[11], b12 = _matrixB[12], b13 = _matrixB[13], b14 = _matrixB[14], b15 = _matrixB[15];
        return [
          a0 * b0 + a4 * b1 + a8 * b2 + a12 * b3,
          a1 * b0 + a5 * b1 + a9 * b2 + a13 * b3,
          a2 * b0 + a6 * b1 + a10 * b2 + a14 * b3,
          a3 * b0 + a7 * b1 + a11 * b2 + a15 * b3,
          a0 * b4 + a4 * b5 + a8 * b6 + a12 * b7,
          a1 * b4 + a5 * b5 + a9 * b6 + a13 * b7,
          a2 * b4 + a6 * b5 + a10 * b6 + a14 * b7,
          a3 * b4 + a7 * b5 + a11 * b6 + a15 * b7,
          a0 * b8 + a4 * b9 + a8 * b10 + a12 * b11,
          a1 * b8 + a5 * b9 + a9 * b10 + a13 * b11,
          a2 * b8 + a6 * b9 + a10 * b10 + a14 * b11,
          a3 * b8 + a7 * b9 + a11 * b10 + a15 * b11,
          a0 * b12 + a4 * b13 + a8 * b14 + a12 * b15,
          a1 * b12 + a5 * b13 + a9 * b14 + a13 * b15,
          a2 * b12 + a6 * b13 + a10 * b14 + a14 * b15,
          a3 * b12 + a7 * b13 + a11 * b14 + a15 * b15
        ];
      }
      function determinant2(matrix) {
        var _matrix = _sliced_to_array(matrix, 4), m0 = _matrix[0], m1 = _matrix[1], m2 = _matrix[2], m3 = _matrix[3];
        return m0 * m3 - m2 * m1;
      }
      function determinant3(matrix) {
        var _matrix = _sliced_to_array(matrix, 9), m0 = _matrix[0], m1 = _matrix[1], m2 = _matrix[2], m3 = _matrix[3], m4 = _matrix[4], m5 = _matrix[5], m6 = _matrix[6], m7 = _matrix[7], m8 = _matrix[8], b01 = m8 * m4 - m5 * m7, b11 = -m8 * m3 + m5 * m6, b21 = m7 * m3 - m4 * m6;
        return m0 * b01 + m1 * b11 + m2 * b21;
      }
      function determinant4(matrix) {
        var _matrix = _sliced_to_array(matrix, 16), m0 = _matrix[0], m1 = _matrix[1], m2 = _matrix[2], m3 = _matrix[3], m4 = _matrix[4], m5 = _matrix[5], m6 = _matrix[6], m7 = _matrix[7], m8 = _matrix[8], m9 = _matrix[9], m10 = _matrix[10], m11 = _matrix[11], m12 = _matrix[12], m13 = _matrix[13], m14 = _matrix[14], m15 = _matrix[15], b00 = m0 * m5 - m1 * m4, b01 = m0 * m6 - m2 * m4, b02 = m0 * m7 - m3 * m4, b03 = m1 * m6 - m2 * m5, b04 = m1 * m7 - m3 * m5, b05 = m2 * m7 - m3 * m6, b06 = m8 * m13 - m9 * m12, b07 = m8 * m14 - m10 * m12, b08 = m8 * m15 - m11 * m12, b09 = m9 * m14 - m10 * m13, b10 = m9 * m15 - m11 * m13, b11 = m10 * m15 - m11 * m14;
        return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
      }
      function transpose2(matrix) {
        var _matrix = _sliced_to_array(matrix, 4), m0 = _matrix[0], m1 = _matrix[1], m2 = _matrix[2], m3 = _matrix[3];
        return [
          m0,
          m2,
          m1,
          m3
        ];
      }
      function transpose3(matrix) {
        var _matrix = _sliced_to_array(matrix, 9), m0 = _matrix[0], m1 = _matrix[1], m2 = _matrix[2], m3 = _matrix[3], m4 = _matrix[4], m5 = _matrix[5], m6 = _matrix[6], m7 = _matrix[7], m8 = _matrix[8];
        return [
          m0,
          m3,
          m6,
          m1,
          m4,
          m7,
          m2,
          m5,
          m8
        ];
      }
      function transpose4(matrix) {
        var _matrix = _sliced_to_array(matrix, 16), m0 = _matrix[0], m1 = _matrix[1], m2 = _matrix[2], m3 = _matrix[3], m4 = _matrix[4], m5 = _matrix[5], m6 = _matrix[6], m7 = _matrix[7], m8 = _matrix[8], m9 = _matrix[9], m10 = _matrix[10], m11 = _matrix[11], m12 = _matrix[12], m13 = _matrix[13], m14 = _matrix[14], m15 = _matrix[15];
        return [
          m0,
          m4,
          m8,
          m12,
          m1,
          m5,
          m9,
          m13,
          m2,
          m6,
          m10,
          m14,
          m3,
          m7,
          m11,
          m15
        ];
      }
      function invert2(matrix) {
        var _matrix = _sliced_to_array(matrix, 4), m0 = _matrix[0], m1 = _matrix[1], m2 = _matrix[2], m3 = _matrix[3], determinant = determinant2(matrix);
        return [
          +m3 / determinant,
          -m1 / determinant,
          -m2 / determinant,
          +m0 / determinant
        ];
      }
      function invert3(matrix) {
        var _matrix = _sliced_to_array(matrix, 9), m0 = _matrix[0], m1 = _matrix[1], m2 = _matrix[2], m3 = _matrix[3], m4 = _matrix[4], m5 = _matrix[5], m6 = _matrix[6], m7 = _matrix[7], m8 = _matrix[8], determinant = determinant3(matrix), b01 = m8 * m4 - m5 * m7, b11 = -m8 * m3 + m5 * m6, b21 = m7 * m3 - m4 * m6;
        return [
          b01 / determinant,
          (-m8 * m1 + m2 * m7) / determinant,
          (m5 * m1 - m2 * m4) / determinant,
          b11 / determinant,
          (m8 * m0 - m2 * m6) / determinant,
          (-m5 * m0 + m2 * m3) / determinant,
          b21 / determinant,
          (-m7 * m0 + m1 * m6) / determinant,
          (m4 * m0 - m1 * m3) / determinant
        ];
      }
      function invert4(matrix) {
        var _matrix = _sliced_to_array(matrix, 16), m0 = _matrix[0], m1 = _matrix[1], m2 = _matrix[2], m3 = _matrix[3], m4 = _matrix[4], m5 = _matrix[5], m6 = _matrix[6], m7 = _matrix[7], m8 = _matrix[8], m9 = _matrix[9], m10 = _matrix[10], m11 = _matrix[11], m12 = _matrix[12], m13 = _matrix[13], m14 = _matrix[14], m15 = _matrix[15], determinant = determinant4(matrix), b00 = m0 * m5 - m1 * m4, b01 = m0 * m6 - m2 * m4, b02 = m0 * m7 - m3 * m4, b03 = m1 * m6 - m2 * m5, b04 = m1 * m7 - m3 * m5, b05 = m2 * m7 - m3 * m6, b06 = m8 * m13 - m9 * m12, b07 = m8 * m14 - m10 * m12, b08 = m8 * m15 - m11 * m12, b09 = m9 * m14 - m10 * m13, b10 = m9 * m15 - m11 * m13, b11 = m10 * m15 - m11 * m14;
        return [
          (m5 * b11 - m6 * b10 + m7 * b09) / determinant,
          (m2 * b10 - m1 * b11 - m3 * b09) / determinant,
          (m13 * b05 - m14 * b04 + m15 * b03) / determinant,
          (m10 * b04 - m9 * b05 - m11 * b03) / determinant,
          (m6 * b08 - m4 * b11 - m7 * b07) / determinant,
          (m0 * b11 - m2 * b08 + m3 * b07) / determinant,
          (m14 * b02 - m12 * b05 - m15 * b01) / determinant,
          (m8 * b05 - m10 * b02 + m11 * b01) / determinant,
          (m4 * b10 - m5 * b08 + m7 * b06) / determinant,
          (m1 * b08 - m0 * b10 - m3 * b06) / determinant,
          (m12 * b04 - m13 * b02 + m15 * b00) / determinant,
          (m9 * b02 - m8 * b04 - m11 * b00) / determinant,
          (m5 * b07 - m4 * b09 - m6 * b06) / determinant,
          (m0 * b09 - m1 * b07 + m2 * b06) / determinant,
          (m13 * b01 - m12 * b03 - m14 * b00) / determinant,
          (m8 * b03 - m9 * b01 + m10 * b00) / determinant
        ];
      }
      function scale4(matrix, vector) {
        var _vector2 = _sliced_to_array(vector, 3), x = _vector2[0], y = _vector2[1], z = _vector2[2], _matrix = _sliced_to_array(matrix, 16), m0 = _matrix[0], m1 = _matrix[1], m2 = _matrix[2], m3 = _matrix[3], m4 = _matrix[4], m5 = _matrix[5], m6 = _matrix[6], m7 = _matrix[7], m8 = _matrix[8], m9 = _matrix[9], m10 = _matrix[10], m11 = _matrix[11], m12 = _matrix[12], m13 = _matrix[13], m14 = _matrix[14], m15 = _matrix[15];
        return [
          m0 * x,
          m1 * x,
          m2 * x,
          m3 * x,
          m4 * y,
          m5 * y,
          m6 * y,
          m7 * y,
          m8 * z,
          m9 * z,
          m10 * z,
          m11 * z,
          m12 * 1,
          m13 * 1,
          m14 * 1,
          m15 * 1
        ];
      }
      function rotate4(matrix, angle, vector) {
        var _normalise3 = _sliced_to_array((0, _vector.normalise3)(vector), 3), x = _normalise3[0], y = _normalise3[1], z = _normalise3[2], _matrix = _sliced_to_array(matrix, 16), m0 = _matrix[0], m1 = _matrix[1], m2 = _matrix[2], m3 = _matrix[3], m4 = _matrix[4], m5 = _matrix[5], m6 = _matrix[6], m7 = _matrix[7], m8 = _matrix[8], m9 = _matrix[9], m10 = _matrix[10], m11 = _matrix[11], m12 = _matrix[12], m13 = _matrix[13], m14 = _matrix[14], m15 = _matrix[15], s = Math.sin(angle), c = Math.cos(angle), t = 1 - c, b00 = x * x * t + c, b01 = y * x * t + z * s, b02 = z * x * t - y * s, b10 = x * y * t - z * s, b11 = y * y * t + c, b12 = z * y * t + x * s, b20 = x * z * t + y * s, b21 = y * z * t - x * s, b22 = z * z * t + c;
        return [
          m0 * b00 + m4 * b01 + m8 * b02,
          m1 * b00 + m5 * b01 + m9 * b02,
          m2 * b00 + m6 * b01 + m10 * b02,
          m3 * b00 + m7 * b01 + m11 * b02,
          m0 * b10 + m4 * b11 + m8 * b12,
          m1 * b10 + m5 * b11 + m9 * b12,
          m2 * b10 + m6 * b11 + m10 * b12,
          m3 * b10 + m7 * b11 + m11 * b12,
          m0 * b20 + m4 * b21 + m8 * b22,
          m1 * b20 + m5 * b21 + m9 * b22,
          m2 * b20 + m6 * b21 + m10 * b22,
          m3 * b20 + m7 * b21 + m11 * b22,
          m12,
          m13,
          m14,
          m15
        ];
      }
      function translate4(matrix, vector) {
        var _vector2 = _sliced_to_array(vector, 3), x = _vector2[0], y = _vector2[1], z = _vector2[2], _matrix = _sliced_to_array(matrix, 16), m0 = _matrix[0], m1 = _matrix[1], m2 = _matrix[2], m3 = _matrix[3], m4 = _matrix[4], m5 = _matrix[5], m6 = _matrix[6], m7 = _matrix[7], m8 = _matrix[8], m9 = _matrix[9], m10 = _matrix[10], m11 = _matrix[11], m12 = _matrix[12], m13 = _matrix[13], m14 = _matrix[14], m15 = _matrix[15];
        return [
          m0,
          m1,
          m2,
          m3,
          m4,
          m5,
          m6,
          m7,
          m8,
          m9,
          m10,
          m11,
          m0 * x + m4 * y + m8 * z + m12,
          m1 * x + m5 * y + m9 * z + m13,
          m2 * x + m6 * y + m10 * z + m14,
          m3 * x + m7 * y + m11 * z + m15
        ];
      }
      function perspective4(fieldOfView, aspectRatio, zNear, zFar) {
        var f = 1 / Math.tan(fieldOfView / 2), nf = 1 / (zNear - zFar);
        return [
          f / aspectRatio,
          0,
          0,
          0,
          0,
          f,
          0,
          0,
          0,
          0,
          (zFar + zNear) * nf,
          -1,
          0,
          0,
          2 * zFar * zNear * nf,
          0
        ];
      }
      var _default = {
        identity2,
        identity3,
        identity4,
        multiply2,
        multiply3,
        multiply4,
        determinant2,
        determinant3,
        determinant4,
        transpose2,
        transpose3,
        transpose4,
        invert2,
        invert3,
        invert4,
        scale4,
        rotate4,
        translate4,
        perspective4
      };
    }
  });

  // lib/utilities/matrix.js
  var require_matrix2 = __commonJS({
    "lib/utilities/matrix.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        normalsMatrixFromRotationsMatrix: function() {
          return normalsMatrixFromRotationsMatrix;
        },
        offsetsMatrixFromOffsets: function() {
          return offsetsMatrixFromOffsets;
        },
        positionMatrixFromDistance: function() {
          return positionMatrixFromDistance;
        },
        positionMatrixFromNothing: function() {
          return positionMatrixFromNothing;
        },
        positionMatrixFromPosition: function() {
          return positionMatrixFromPosition;
        },
        projectionMatrixFromCameraAndCanvas: function() {
          return projectionMatrixFromCameraAndCanvas;
        },
        rotationsMatrixFromAngles: function() {
          return rotationsMatrixFromAngles;
        },
        rotationsMatrixFromRotations: function() {
          return rotationsMatrixFromRotations;
        },
        scaleMatrixFromScale: function() {
          return scaleMatrixFromScale;
        }
      });
      var _vector = require_vector();
      var _array = require_array2();
      var _constants = require_constants();
      var _matrix = require_matrix();
      function scaleMatrixFromScale(scale) {
        var scaleMatrix = (0, _matrix.identity4)();
        scaleMatrix = (0, _matrix.scale4)(scaleMatrix, scale);
        return scaleMatrix;
      }
      function offsetsMatrixFromOffsets(offsets) {
        var offsetsMatrix = (0, _matrix.identity4)();
        offsetsMatrix = (0, _matrix.translate4)(offsetsMatrix, offsets);
        return offsetsMatrix;
      }
      function positionMatrixFromNothing() {
        var positionMatrix = (0, _matrix.identity4)();
        return positionMatrix;
      }
      function positionMatrixFromDistance(distance) {
        var positionMatrix = (0, _matrix.identity4)();
        var x = 0, y = 0, z = -distance;
        positionMatrix = (0, _matrix.translate4)(positionMatrix, [
          x,
          y,
          z
        ]);
        return positionMatrix;
      }
      function positionMatrixFromPosition(position) {
        var positionMatrix = (0, _matrix.identity4)();
        positionMatrix = (0, _matrix.translate4)(positionMatrix, position);
        return positionMatrix;
      }
      function rotationsMatrixFromAngles(angles) {
        var reverseOrder = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        var rotationsMatrix = (0, _matrix.identity4)();
        var firstAngle = (0, _array.first)(angles), secondAngle = (0, _array.second)(angles), thirdAngle = (0, _array.third)(angles), xAngle = firstAngle, yAngle = secondAngle, zAngle = thirdAngle, xAxis = [
          1,
          0,
          0
        ], yAxis = [
          0,
          1,
          0
        ], zAxis = [
          0,
          0,
          1
        ];
        if (reverseOrder) {
          rotationsMatrix = (0, _matrix.rotate4)(rotationsMatrix, zAngle, zAxis);
          rotationsMatrix = (0, _matrix.rotate4)(rotationsMatrix, yAngle, yAxis);
          rotationsMatrix = (0, _matrix.rotate4)(rotationsMatrix, xAngle, xAxis);
        } else {
          rotationsMatrix = (0, _matrix.rotate4)(rotationsMatrix, xAngle, xAxis);
          rotationsMatrix = (0, _matrix.rotate4)(rotationsMatrix, yAngle, yAxis);
          rotationsMatrix = (0, _matrix.rotate4)(rotationsMatrix, zAngle, zAxis);
        }
        return rotationsMatrix;
      }
      function rotationsMatrixFromRotations(rotations) {
        var scalar = _constants.DEGREES_TO_RADIANS_MULTIPLIER, angles = (0, _vector.scale3)(rotations, scalar), rotationsMatrix = rotationsMatrixFromAngles(angles);
        return rotationsMatrix;
      }
      function normalsMatrixFromRotationsMatrix(rotationsMatrix) {
        var normalsMatrix = (0, _matrix.invert4)(rotationsMatrix);
        normalsMatrix = (0, _matrix.transpose4)(normalsMatrix);
        return normalsMatrix;
      }
      function projectionMatrixFromCameraAndCanvas(camera, canvas) {
        var zFar = camera.getZFar(), zNear = camera.getZNear(), width = canvas.getWidth(), height = canvas.getHeight(), fieldOfView = camera.getFieldOfView(), aspectRatio = width / height, projectionMatrix = (0, _matrix.perspective4)(fieldOfView, aspectRatio, zNear, zFar);
        return projectionMatrix;
      }
    }
  });

  // lib/utilities/transform.js
  var require_transform = __commonJS({
    "lib/utilities/transform.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "composeTransform", {
        enumerable: true,
        get: function() {
          return composeTransform;
        }
      });
      var _matrix = require_matrix();
      var _vector = require_vector();
      var _matrix1 = require_matrix2();
      function _array_like_to_array(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _array_without_holes(arr) {
        if (Array.isArray(arr))
          return _array_like_to_array(arr);
      }
      function _iterable_to_array(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _non_iterable_spread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _to_consumable_array(arr) {
        return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
      }
      function _unsupported_iterable_to_array(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _array_like_to_array(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _array_like_to_array(o, minLen);
      }
      function composeTransform(scale, position, rotations) {
        var matrix = null;
        if (scale !== null) {
          var scaleMatrix = (0, _matrix1.scaleMatrixFromScale)(scale);
          matrix = matrix === null ? scaleMatrix : (0, _matrix.multiply4)(scaleMatrix, matrix);
        }
        if (rotations !== null) {
          var rotationsMatrix = (0, _matrix1.rotationsMatrixFromRotations)(rotations);
          matrix = matrix === null ? rotationsMatrix : (0, _matrix.multiply4)(rotationsMatrix, matrix);
        }
        if (position !== null) {
          var positionMatrix = (0, _matrix1.positionMatrixFromPosition)(position);
          matrix = matrix === null ? positionMatrix : (0, _matrix.multiply4)(positionMatrix, matrix);
        }
        var transform = matrix === null ? function(vector) {
          return vector;
        } : function(vector) {
          return (0, _vector.transform4)(_to_consumable_array(vector).concat([
            1
          ]), matrix).slice(0, 3);
        };
        return transform;
      }
    }
  });

  // lib/element/mask.js
  var require_mask = __commonJS({
    "lib/element/mask.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return Mask;
        }
      });
      var _element = /* @__PURE__ */ _interop_require_default(require_element());
      var _maskingFacet = /* @__PURE__ */ _interop_require_default(require_maskingFacet());
      var _array = require_array2();
      var _transform = require_transform();
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _call_super(_this, derived, args) {
        derived = _get_prototype_of(derived);
        return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _construct(Parent, args, Class) {
        if (_is_native_reflect_construct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function construct(Parent2, args2, Class2) {
            var a = [
              null
            ];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2)
              _set_prototype_of(instance, Class2.prototype);
            return instance;
          };
        }
        return _construct.apply(null, arguments);
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _is_native_function(fn) {
        return Function.toString.call(fn).indexOf("[native code]") !== -1;
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _wrap_native_super(Class) {
        var _cache = typeof Map === "function" ? new Map() : void 0;
        _wrap_native_super = function wrapNativeSuper(Class2) {
          if (Class2 === null || !_is_native_function(Class2))
            return Class2;
          if (typeof Class2 !== "function") {
            throw new TypeError("Super expression must either be null or a function");
          }
          if (typeof _cache !== "undefined") {
            if (_cache.has(Class2))
              return _cache.get(Class2);
            _cache.set(Class2, Wrapper);
          }
          function Wrapper() {
            return _construct(Class2, arguments, _get_prototype_of(this).constructor);
          }
          Wrapper.prototype = Object.create(Class2.prototype, {
            constructor: {
              value: Wrapper,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          return _set_prototype_of(Wrapper, Class2);
        };
        return _wrap_native_super(Class);
      }
      function _is_native_reflect_construct() {
        try {
          var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (_) {
        }
        return (_is_native_reflect_construct = function() {
          return !!result;
        })();
      }
      var Mask = /* @__PURE__ */ function(Element) {
        _inherits(Mask2, Element);
        function Mask2(reference, transform) {
          _class_call_check(this, Mask2);
          var _this;
          _this = _call_super(this, Mask2);
          _this.reference = reference;
          _this.transform = transform;
          return _this;
        }
        _create_class(Mask2, [
          {
            key: "getReference",
            value: function getReference() {
              return this.reference;
            }
          },
          {
            key: "getTransform",
            value: function getTransform() {
              return this.transform;
            }
          },
          {
            key: "retrieveMaskingFacets",
            value: function retrieveMaskingFacets() {
              var childElements = this.getChildElements(), facets = retrieveFacets(childElements), maskingFacets = facets.map(function(facet) {
                var maskingFacet = _maskingFacet.default.fromFacet(facet);
                return maskingFacet;
              });
              return maskingFacets;
            }
          },
          {
            key: "maskElement",
            value: function maskElement1(element, marginOfError) {
              var maskingFacets = this.retrieveMaskingFacets(), childElements = element.getChildElements();
              maskElement(element, maskingFacets, marginOfError);
              childElements.forEach(function(childElement) {
                maskElement(childElement, maskingFacets, marginOfError);
              });
            }
          },
          {
            key: "applyTransform",
            value: function applyTransform(transform) {
              var childElements = this.getChildElements();
              childElements.forEach(function(childElement) {
                childElement.applyTransform(transform);
              });
            }
          },
          {
            key: "createFacets",
            value: function createFacets(marginOfError) {
              var childElements = this.getChildElements();
              childElements.forEach(function(childElement) {
                childElement.createFacets(marginOfError);
              });
            }
          },
          {
            key: "maskFacets",
            value: function maskFacets(masks, marginOfError) {
              var childElements = this.getChildElements();
              childElements.forEach(function(childElement) {
                childElement.maskFacets(masks, marginOfError);
              });
              this.applyTransform(this.transform);
            }
          },
          {
            key: "addFacets",
            value: function addFacets(colourRenderer, textureRenderer) {
            }
          }
        ], [
          {
            key: "fromProperties",
            value: function fromProperties(properties) {
              var reference = properties.reference, _properties_scale = properties.scale, scale = _properties_scale === void 0 ? null : _properties_scale, _properties_position = properties.position, position = _properties_position === void 0 ? null : _properties_position, _properties_rotations = properties.rotations, rotations = _properties_rotations === void 0 ? null : _properties_rotations, transform = (0, _transform.composeTransform)(scale, position, rotations), mask = _element.default.fromProperties(Mask2, properties, reference, transform);
              return mask;
            }
          }
        ]);
        return Mask2;
      }(_wrap_native_super(_element.default));
      function retrieveFacets(childElements) {
        var facets = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
        childElements.forEach(function(childElement) {
          var element = childElement, elementFacets = element.getFacets(), _$childElements = element.getChildElements();
          (0, _array.add)(facets, elementFacets);
          retrieveFacets(_$childElements, facets);
        });
        return facets;
      }
      function maskElement(element, maskingFacets, marginOfError) {
        var facets = element.getFacets();
        maskingFacets.forEach(function(maskingFacet) {
          var unmaskedFacets = [];
          facets.forEach(function(facet) {
            maskingFacet.maskFacet(facet, unmaskedFacets, marginOfError);
          });
          facets = unmaskedFacets;
        });
        element.setFacets(facets);
        var childElements = element.getChildElements();
        childElements.forEach(function(childElement) {
          var _$element = childElement;
          maskElement(_$element, maskingFacets, marginOfError);
        });
      }
    }
  });

  // lib/utilities/element.js
  var require_element2 = __commonJS({
    "lib/utilities/element.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        elementFromChildElements: function() {
          return elementFromChildElements;
        },
        elementsFromChildElements: function() {
          return elementsFromChildElements;
        }
      });
      function _instanceof(left, right) {
        if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
          return !!right[Symbol.hasInstance](left);
        } else {
          return left instanceof right;
        }
      }
      function elementsFromChildElements(childElements, Class) {
        var elements = childElements.reduce(function(elements2, childElement) {
          if (_instanceof(childElement, Class)) {
            var element = childElement;
            elements2.push(element);
          }
          return elements2;
        }, []);
        return elements;
      }
      function elementFromChildElements(childElements, Class) {
        var element = childElements.reduce(function(element2, childElement) {
          if (element2 === null) {
            if (_instanceof(childElement, Class)) {
              element2 = childElement;
            }
          }
          return element2;
        }, null);
        return element;
      }
    }
  });

  // lib/element/canvas.js
  var require_canvas = __commonJS({
    "lib/element/canvas.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return CanvasElement;
        }
      });
      var _mask = /* @__PURE__ */ _interop_require_default(require_mask());
      var _element = /* @__PURE__ */ _interop_require_default(require_element());
      var _transform = require_transform();
      var _element1 = require_element2();
      function _array_like_to_array(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _array_without_holes(arr) {
        if (Array.isArray(arr))
          return _array_like_to_array(arr);
      }
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _call_super(_this, derived, args) {
        derived = _get_prototype_of(derived);
        return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _construct(Parent, args, Class) {
        if (_is_native_reflect_construct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function construct(Parent2, args2, Class2) {
            var a = [
              null
            ];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2)
              _set_prototype_of(instance, Class2.prototype);
            return instance;
          };
        }
        return _construct.apply(null, arguments);
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _is_native_function(fn) {
        return Function.toString.call(fn).indexOf("[native code]") !== -1;
      }
      function _iterable_to_array(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _non_iterable_spread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _to_consumable_array(arr) {
        return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _unsupported_iterable_to_array(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _array_like_to_array(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _array_like_to_array(o, minLen);
      }
      function _wrap_native_super(Class) {
        var _cache = typeof Map === "function" ? new Map() : void 0;
        _wrap_native_super = function wrapNativeSuper(Class2) {
          if (Class2 === null || !_is_native_function(Class2))
            return Class2;
          if (typeof Class2 !== "function") {
            throw new TypeError("Super expression must either be null or a function");
          }
          if (typeof _cache !== "undefined") {
            if (_cache.has(Class2))
              return _cache.get(Class2);
            _cache.set(Class2, Wrapper);
          }
          function Wrapper() {
            return _construct(Class2, arguments, _get_prototype_of(this).constructor);
          }
          Wrapper.prototype = Object.create(Class2.prototype, {
            constructor: {
              value: Wrapper,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          return _set_prototype_of(Wrapper, Class2);
        };
        return _wrap_native_super(Class);
      }
      function _is_native_reflect_construct() {
        try {
          var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (_) {
        }
        return (_is_native_reflect_construct = function() {
          return !!result;
        })();
      }
      var CanvasElement = /* @__PURE__ */ function(Element) {
        _inherits(CanvasElement2, Element);
        function CanvasElement2(maskReference, transform, facets, masks) {
          _class_call_check(this, CanvasElement2);
          var _this;
          _this = _call_super(this, CanvasElement2);
          _this.maskReference = maskReference;
          _this.transform = transform;
          _this.facets = facets;
          _this.masks = masks;
          return _this;
        }
        _create_class(CanvasElement2, [
          {
            key: "getMaskReference",
            value: function getMaskReference() {
              return this.maskReference;
            }
          },
          {
            key: "getTransform",
            value: function getTransform() {
              return this.transform;
            }
          },
          {
            key: "getFacets",
            value: function getFacets() {
              return this.facets;
            }
          },
          {
            key: "getMasks",
            value: function getMasks() {
              return this.masks;
            }
          },
          {
            key: "setFacets",
            value: function setFacets(facets) {
              this.facets = facets;
            }
          },
          {
            key: "applyMask",
            value: function applyMask(masks, marginOfError) {
              var _this = this;
              if (this.maskReference !== null) {
                var mask = masks.find(function(mask2) {
                  var reference = mask2.getReference();
                  if (reference === _this.maskReference) {
                    return true;
                  }
                }) || null;
                if (mask !== null) {
                  var element = this;
                  mask.maskElement(element, marginOfError);
                }
              }
            }
          },
          {
            key: "applyTransform",
            value: function applyTransform(transform) {
              var childElements = this.getChildElements();
              this.facets.forEach(function(facet) {
                facet.applyTransform(transform);
              });
              childElements.forEach(function(childElement) {
                childElement.applyTransform(transform);
              });
            }
          },
          {
            key: "createFacets",
            value: function createFacets(marginOfError) {
              var childElements = this.getChildElements();
              childElements.forEach(function(childElement) {
                childElement.createFacets(marginOfError);
              });
            }
          },
          {
            key: "maskFacets",
            value: function maskFacets(masks, marginOfError) {
              masks = _to_consumable_array(masks).concat(_to_consumable_array(this.masks));
              var childElements = this.getChildElements();
              childElements.forEach(function(childElement) {
                childElement.maskFacets(masks, marginOfError);
              });
              this.applyTransform(this.transform);
              this.applyMask(masks, marginOfError);
            }
          },
          {
            key: "addFacets",
            value: function addFacets(colourRenderer, textureRenderer) {
              var childElements = this.getChildElements();
              childElements.forEach(function(childElement) {
                childElement.addFacets(colourRenderer, textureRenderer);
              });
            }
          }
        ], [
          {
            key: "fromProperties",
            value: function fromProperties(Class, properties) {
              for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                remainingArguments[_key - 2] = arguments[_key];
              }
              var _Element;
              var childElements = properties.childElements, _properties_scale = properties.scale, scale = _properties_scale === void 0 ? null : _properties_scale, _properties_position = properties.position, position = _properties_position === void 0 ? null : _properties_position, _properties_rotations = properties.rotations, rotations = _properties_rotations === void 0 ? null : _properties_rotations, _properties_maskReference = properties.maskReference, maskReference = _properties_maskReference === void 0 ? null : _properties_maskReference, transform = (0, _transform.composeTransform)(scale, position, rotations), facets = [], masks = (0, _element1.elementsFromChildElements)(childElements, _mask.default), canvasElement = (_Element = _element.default).fromProperties.apply(_Element, [
                Class,
                properties,
                maskReference,
                transform,
                facets,
                masks
              ].concat(_to_consumable_array(remainingArguments)));
              return canvasElement;
            }
          }
        ]);
        return CanvasElement2;
      }(_wrap_native_super(_element.default));
    }
  });

  // lib/element/canvas/function.js
  var require_function = __commonJS({
    "lib/element/canvas/function.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return FunctionCanvasElement;
        }
      });
      var _canvas = /* @__PURE__ */ _interop_require_default(require_canvas());
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _call_super(_this, derived, args) {
        derived = _get_prototype_of(derived);
        return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _is_native_reflect_construct() {
        try {
          var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (_) {
        }
        return (_is_native_reflect_construct = function() {
          return !!result;
        })();
      }
      var FunctionCanvasElement = /* @__PURE__ */ function(CanvasElement) {
        _inherits(FunctionCanvasElement2, CanvasElement);
        function FunctionCanvasElement2() {
          _class_call_check(this, FunctionCanvasElement2);
          return _call_super(this, FunctionCanvasElement2, arguments);
        }
        _create_class(FunctionCanvasElement2, null, [
          {
            key: "fromProperties",
            value: function fromProperties(properties) {
              var functionElement = _canvas.default.fromProperties(FunctionCanvasElement2, properties);
              return functionElement;
            }
          }
        ]);
        return FunctionCanvasElement2;
      }(_canvas.default);
    }
  });

  // lib/utilities/elements.js
  var require_elements = __commonJS({
    "lib/utilities/elements.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "removeFalseyElements", {
        enumerable: true,
        get: function() {
          return removeFalseyElements;
        }
      });
      function removeFalseyElements(elements) {
        elements = elements.reduce(function(elements2, element) {
          if (element) {
            elements2.push(element);
          }
          return elements2;
        }, []);
        return elements;
      }
    }
  });

  // lib/react.js
  var require_react = __commonJS({
    "lib/react.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      var _element = /* @__PURE__ */ _interop_require_default(require_element());
      var _function = /* @__PURE__ */ _interop_require_default(require_function());
      var _constants = require_constants();
      var _array = require_array2();
      var _elements = require_elements();
      function _instanceof(left, right) {
        if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
          return !!right[Symbol.hasInstance](left);
        } else {
          return left instanceof right;
        }
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function createElement(firstArgument, properties) {
        for (var _len = arguments.length, childElements = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          childElements[_key - 2] = arguments[_key];
        }
        properties = properties || {};
        childElements = sanitiseChildElements(childElements);
        var element;
        if (isSubclassOf(firstArgument, _element.default)) {
          var Class = firstArgument;
          Object.assign(properties, {
            childElements
          });
          element = Class.fromProperties(properties);
        } else if ((typeof firstArgument === "undefined" ? "undefined" : _type_of(firstArgument)) === _constants.FUNCTION) {
          var func = firstArgument, childElements1 = (0, _array.guarantee)(func(properties));
          Object.assign(properties, {
            childElements: childElements1
          });
          element = _function.default.fromProperties(properties);
        }
        return element;
      }
      var React2 = {
        createElement
      };
      var _default = React2;
      function isSubclassOf(argument, Class) {
        var subclassOf = _instanceof(argument.prototype, Class);
        return subclassOf;
      }
      function sanitiseChildElements(childElements) {
        childElements = (0, _array.flatten)(childElements);
        childElements = (0, _elements.removeFalseyElements)(childElements);
        return childElements;
      }
    }
  });

  // lib/xgl.js
  var require_xgl = __commonJS({
    "lib/xgl.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _react = /* @__PURE__ */ _interop_require_default(require_react());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      Object.assign(globalThis, {
        React: _react.default
      });
    }
  });

  // lib/mixins/depth.js
  var require_depth = __commonJS({
    "lib/mixins/depth.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      var _defaults = require_defaults();
      function clearDepth() {
        var depth = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _defaults.DEFAULT_DEPTH;
        this.context.clearDepth(depth);
      }
      function clearDepthBuffer() {
        var DEPTH_BUFFER_BIT = this.context.DEPTH_BUFFER_BIT, mask = DEPTH_BUFFER_BIT;
        this.context.clear(mask);
      }
      function enableDepthTesting() {
        var _this_context = this.context, DEPTH_TEST = _this_context.DEPTH_TEST, LEQUAL = _this_context.LEQUAL, capacity = DEPTH_TEST, depthComparisonFunction = LEQUAL;
        this.context.enable(capacity);
        this.context.depthFunc(depthComparisonFunction);
      }
      var depthMixins = {
        clearDepth,
        clearDepthBuffer,
        enableDepthTesting
      };
      var _default = depthMixins;
    }
  });

  // lib/errors.js
  var require_errors = __commonJS({
    "lib/errors.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        SHADER_ERROR: function() {
          return SHADER_ERROR;
        },
        WEB_GL_CONTEXT_ERROR: function() {
          return WEB_GL_CONTEXT_ERROR;
        }
      });
      var SHADER_ERROR = "Unable to create the shader.";
      var WEB_GL_CONTEXT_ERROR = "Unable to get the WebGL context.";
    }
  });

  // lib/mixins/shader.js
  var require_shader = __commonJS({
    "lib/mixins/shader.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      var _errors = require_errors();
      function createShader(type, shaderSource) {
        var COMPILE_STATUS = this.context.COMPILE_STATUS, pname = COMPILE_STATUS, shader = this.context.createShader(type);
        this.context.shaderSource(shader, shaderSource);
        this.context.compileShader(shader);
        var compileStatus = this.context.getShaderParameter(shader, pname);
        if (!compileStatus) {
          throw new Error(_errors.SHADER_ERROR);
        }
        return shader;
      }
      function createVertexShader(vertexShaderSource, canvas) {
        var VERTEX_SHADER = this.context.VERTEX_SHADER, type = VERTEX_SHADER, vertexShader = this.createShader(type, vertexShaderSource);
        return vertexShader;
      }
      function createFragmentShader(fragmentShaderSource, canvas) {
        var FRAGMENT_SHADER = this.context.FRAGMENT_SHADER, type = FRAGMENT_SHADER, fragmentShader = this.createShader(type, fragmentShaderSource);
        return fragmentShader;
      }
      var shaderMixins = {
        createShader,
        createVertexShader,
        createFragmentShader
      };
      var _default = shaderMixins;
    }
  });

  // lib/mixins/buffer.js
  var require_buffer = __commonJS({
    "lib/mixins/buffer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      function createElementBuffer(data) {
        var _this_context = this.context, ELEMENT_ARRAY_BUFFER = _this_context.ELEMENT_ARRAY_BUFFER, STATIC_DRAW = _this_context.STATIC_DRAW, target = ELEMENT_ARRAY_BUFFER, usage = STATIC_DRAW, uint16Array = new Uint16Array(data), elementBuffer = this.context.createBuffer();
        this.context.bindBuffer(target, elementBuffer);
        this.context.bufferData(target, uint16Array, usage);
        return elementBuffer;
      }
      function bindElementBuffer(elementBuffer) {
        var ELEMENT_ARRAY_BUFFER = this.context.ELEMENT_ARRAY_BUFFER, target = ELEMENT_ARRAY_BUFFER;
        this.context.bindBuffer(target, elementBuffer);
      }
      function createBuffer(data) {
        var _this_context = this.context, ARRAY_BUFFER = _this_context.ARRAY_BUFFER, STATIC_DRAW = _this_context.STATIC_DRAW, target = ARRAY_BUFFER, usage = STATIC_DRAW, buffer = this.context.createBuffer(), float32Array = new Float32Array(data);
        this.context.bindBuffer(target, buffer);
        this.context.bufferData(target, float32Array, usage);
        return buffer;
      }
      function bindBuffer(buffer, attributeLocation, components) {
        var _this_context = this.context, ARRAY_BUFFER = _this_context.ARRAY_BUFFER, FLOAT = _this_context.FLOAT, target = ARRAY_BUFFER, type = FLOAT, normalize = false, stride = 0, offset = 0;
        this.context.bindBuffer(target, buffer);
        this.context.vertexAttribPointer(attributeLocation, components, type, normalize, stride, offset);
        this.context.enableVertexAttribArray(attributeLocation);
      }
      var bufferMixins = {
        createElementBuffer,
        bindElementBuffer,
        createBuffer,
        bindBuffer
      };
      var _default = bufferMixins;
    }
  });

  // lib/mixins/colour.js
  var require_colour = __commonJS({
    "lib/mixins/colour.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      function _array_like_to_array(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _array_with_holes(arr) {
        if (Array.isArray(arr))
          return arr;
      }
      function _iterable_to_array_limit(arr, i) {
        var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
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
      function _non_iterable_rest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _sliced_to_array(arr, i) {
        return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
      }
      function _unsupported_iterable_to_array(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _array_like_to_array(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _array_like_to_array(o, minLen);
      }
      function clearColour(colour) {
        var _colour = _sliced_to_array(colour, 4), r = _colour[0], g = _colour[1], b = _colour[2], tmp = _colour[3], a = tmp === void 0 ? 1 : tmp;
        this.context.clearColor(r, g, b, a);
      }
      function clearColourBuffer() {
        var COLOR_BUFFER_BIT = this.context.COLOR_BUFFER_BIT, mask = COLOR_BUFFER_BIT;
        this.context.clear(mask);
      }
      var colourMixins = {
        clearColour,
        clearColourBuffer
      };
      var _default = colourMixins;
    }
  });

  // lib/mixins/matrix.js
  var require_matrix3 = __commonJS({
    "lib/mixins/matrix.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      function applyMatrix(uniformLocation, matrix) {
        var transpose = false;
        this.context.uniformMatrix4fv(uniformLocation, transpose, matrix);
      }
      var matrixMixins = {
        applyMatrix
      };
      var _default = matrixMixins;
    }
  });

  // lib/mixins/texture.js
  var require_texture = __commonJS({
    "lib/mixins/texture.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      var _constants = require_constants();
      function createTexture(image, index, repeat) {
        var _this_context = this.context, RGBA = _this_context.RGBA, LINEAR = _this_context.LINEAR, UNSIGNED_BYTE = _this_context.UNSIGNED_BYTE, TEXTURE0 = _this_context.TEXTURE0, TEXTURE_2D = _this_context.TEXTURE_2D, TEXTURE_WRAP_S = _this_context.TEXTURE_WRAP_S, TEXTURE_WRAP_T = _this_context.TEXTURE_WRAP_T, UNPACK_FLIP_Y_WEBGL = _this_context.UNPACK_FLIP_Y_WEBGL, CLAMP_TO_EDGE = _this_context.CLAMP_TO_EDGE, NEAREST = _this_context.NEAREST, REPEAT = _this_context.REPEAT, TEXTURE_MIN_FILTER = _this_context.TEXTURE_MIN_FILTER, target = TEXTURE0 + index, level = 0, internalFormat = RGBA, format = RGBA, type = UNSIGNED_BYTE, texture = this.context.createTexture();
        this.context.activeTexture(target);
        this.context.bindTexture(TEXTURE_2D, texture);
        this.context.pixelStorei(UNPACK_FLIP_Y_WEBGL, true);
        this.context.texImage2D(TEXTURE_2D, level, internalFormat, format, type, image);
        if (repeat) {
          this.context.texParameteri(TEXTURE_2D, TEXTURE_WRAP_S, REPEAT);
          this.context.texParameteri(TEXTURE_2D, TEXTURE_WRAP_T, REPEAT);
        } else {
          this.context.texParameteri(TEXTURE_2D, TEXTURE_WRAP_S, CLAMP_TO_EDGE);
          this.context.texParameteri(TEXTURE_2D, TEXTURE_WRAP_T, CLAMP_TO_EDGE);
        }
        this.context.texParameteri(TEXTURE_2D, TEXTURE_MIN_FILTER, LINEAR);
        return texture;
      }
      function enableAnisotropicFiltering() {
        var extension = this.context.getExtension(_constants.EXT_TEXTURE_FILTER_ANISOTROPIC) || this.context.getExtension(_constants.MOZ_EXT_TEXTURE_FILTER_ANISOTROPIC) || this.context.getExtension(_constants.WEBKIT_EXT_TEXTURE_FILTER_ANISOTROPIC);
        if (extension) {
          var TEXTURE_2D = this.context.TEXTURE_2D, MAX_TEXTURE_MAX_ANISOTROPY_EXT = extension.MAX_TEXTURE_MAX_ANISOTROPY_EXT, TEXTURE_MAX_ANISOTROPY_EXT = extension.TEXTURE_MAX_ANISOTROPY_EXT, maximum = this.context.getParameter(MAX_TEXTURE_MAX_ANISOTROPY_EXT);
          this.context.texParameterf(TEXTURE_2D, TEXTURE_MAX_ANISOTROPY_EXT, maximum);
        }
      }
      var textureMixins = {
        createTexture,
        enableAnisotropicFiltering
      };
      var _default = textureMixins;
    }
  });

  // lib/mixins/program.js
  var require_program = __commonJS({
    "lib/mixins/program.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      function createProgram(vertexShader, fragmentShader) {
        var program = this.context.createProgram();
        this.context.attachShader(program, vertexShader);
        this.context.attachShader(program, fragmentShader);
        this.context.linkProgram(program);
        return program;
      }
      function useProgram(program) {
        this.context.useProgram(program);
      }
      var programMixins = {
        createProgram,
        useProgram
      };
      var _default = programMixins;
    }
  });

  // lib/mixins/blending.js
  var require_blending = __commonJS({
    "lib/mixins/blending.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      function enableBlending() {
        var _this_context = this.context, BLEND = _this_context.BLEND, SRC_ALPHA = _this_context.SRC_ALPHA, ONE = _this_context.ONE, capacity = BLEND, sourceFactor = SRC_ALPHA, destinationFactor = ONE;
        this.context.enable(capacity);
        this.context.blendFunc(sourceFactor, destinationFactor);
      }
      var blendingMixins = {
        enableBlending
      };
      var _default = blendingMixins;
    }
  });

  // lib/mixins/location.js
  var require_location = __commonJS({
    "lib/mixins/location.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      function getUniformLocation(program, name) {
        return this.context.getUniformLocation(program, name);
      }
      function getAttributeLocation(program, name) {
        return this.context.getAttribLocation(program, name);
      }
      function setUniformLocationIntegerValue(uniformLocation, integerValue) {
        this.context.uniform1i(uniformLocation, integerValue);
      }
      var locationMixins = {
        getUniformLocation,
        getAttributeLocation,
        setUniformLocationIntegerValue
      };
      var _default = locationMixins;
    }
  });

  // lib/canvas.js
  var require_canvas2 = __commonJS({
    "lib/canvas.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return Canvas;
        }
      });
      var _depth = /* @__PURE__ */ _interop_require_default(require_depth());
      var _shader = /* @__PURE__ */ _interop_require_default(require_shader());
      var _buffer = /* @__PURE__ */ _interop_require_default(require_buffer());
      var _colour = /* @__PURE__ */ _interop_require_default(require_colour());
      var _matrix = /* @__PURE__ */ _interop_require_default(require_matrix3());
      var _texture = /* @__PURE__ */ _interop_require_default(require_texture());
      var _program = /* @__PURE__ */ _interop_require_default(require_program());
      var _blending = /* @__PURE__ */ _interop_require_default(require_blending());
      var _location = /* @__PURE__ */ _interop_require_default(require_location());
      var _errors = require_errors();
      var _constants = require_constants();
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      var Canvas = /* @__PURE__ */ function() {
        function Canvas2() {
          var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.CANVAS;
          _class_call_check(this, Canvas2);
          var domElement = domElementFromSelector(selector), context = contextFromDOMElement(domElement);
          this.domElement = domElement;
          this.context = context;
          this.enableDepthTesting();
        }
        _create_class(Canvas2, [
          {
            key: "getDOMElement",
            value: function getDOMElement() {
              return this.domElement;
            }
          },
          {
            key: "getContext",
            value: function getContext() {
              return this.context;
            }
          },
          {
            key: "getWidth",
            value: function getWidth() {
              return this.domElement.width;
            }
          },
          {
            key: "getHeight",
            value: function getHeight() {
              return this.domElement.height;
            }
          },
          {
            key: "getClientWidth",
            value: function getClientWidth() {
              return this.domElement.clientWidth;
            }
          },
          {
            key: "getClientHeight",
            value: function getClientHeight() {
              return this.domElement.clientHeight;
            }
          },
          {
            key: "setWidth",
            value: function setWidth(width) {
              this.domElement.setAttribute(_constants.WIDTH, width);
            }
          },
          {
            key: "setHeight",
            value: function setHeight(height) {
              this.domElement.setAttribute(_constants.HEIGHT, height);
            }
          },
          {
            key: "resize",
            value: function resize(width, height) {
              var x = 0, y = 0;
              this.setWidth(width);
              this.setHeight(height);
              this.context.viewport(x, y, width, height);
            }
          },
          {
            key: "clear",
            value: function clear(colour) {
              this.clearColour(colour);
              this.clearDepth();
              this.clearDepthBuffer();
              this.clearColourBuffer();
            }
          },
          {
            key: "render",
            value: function render(renderer, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
              var offsetsMatrixUniformLocation = renderer.getOffsetsMatrixUniformLocation(), normalsMatrixUniformLocation = renderer.getNormalsMatrixUniformLocation(), positionMatrixUniformLocation = renderer.getPositionMatrixUniformLocation(), rotationsMatrixUniformLocation = renderer.getRotationsMatrixUniformLocation(), projectionMatrixUniformLocation = renderer.getProjectionMatrixUniformLocation();
              this.applyMatrix(offsetsMatrixUniformLocation, offsetsMatrix);
              this.applyMatrix(normalsMatrixUniformLocation, normalsMatrix);
              this.applyMatrix(positionMatrixUniformLocation, positionMatrix);
              this.applyMatrix(rotationsMatrixUniformLocation, rotationsMatrix);
              this.applyMatrix(projectionMatrixUniformLocation, projectionMatrix);
            }
          },
          {
            key: "drawElements",
            value: function drawElements(start, finish) {
              var _this_context = this.context, TRIANGLES = _this_context.TRIANGLES, UNSIGNED_SHORT = _this_context.UNSIGNED_SHORT, mode = TRIANGLES, type = UNSIGNED_SHORT, count = finish - start, offset = start * 2;
              this.context.drawElements(mode, count, type, offset);
            }
          }
        ]);
        return Canvas2;
      }();
      Object.assign(Canvas.prototype, _depth.default);
      Object.assign(Canvas.prototype, _shader.default);
      Object.assign(Canvas.prototype, _buffer.default);
      Object.assign(Canvas.prototype, _colour.default);
      Object.assign(Canvas.prototype, _matrix.default);
      Object.assign(Canvas.prototype, _texture.default);
      Object.assign(Canvas.prototype, _program.default);
      Object.assign(Canvas.prototype, _blending.default);
      Object.assign(Canvas.prototype, _location.default);
      function domElementFromSelector(selector) {
        var domElement = (typeof selector === "undefined" ? "undefined" : _type_of(selector)) === _constants.STRING ? document.querySelectorAll(selector)[0] : selector;
        return domElement;
      }
      function contextFromDOMElement(domElement) {
        var context = domElement.getContext(_constants.WEBGL);
        if (!context) {
          throw new Error(_errors.WEB_GL_CONTEXT_ERROR);
        }
        return context;
      }
    }
  });

  // lib/renderer.js
  var require_renderer = __commonJS({
    "lib/renderer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        createProgram: function() {
          return createProgram;
        },
        default: function() {
          return Renderer;
        }
      });
      var _array = require_array2();
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      var Renderer = /* @__PURE__ */ function() {
        function Renderer2(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations) {
          _class_call_check(this, Renderer2);
          this.facets = facets;
          this.program = program;
          this.rendererData = rendererData;
          this.rendererBuffers = rendererBuffers;
          this.uniformLocations = uniformLocations;
          this.attributeLocations = attributeLocations;
        }
        _create_class(Renderer2, [
          {
            key: "getFacets",
            value: function getFacets() {
              return this.facets;
            }
          },
          {
            key: "getProgram",
            value: function getProgram() {
              return this.program;
            }
          },
          {
            key: "getRendererData",
            value: function getRendererData() {
              return this.rendererData;
            }
          },
          {
            key: "getRendererBuffers",
            value: function getRendererBuffers() {
              return this.rendererBuffers;
            }
          },
          {
            key: "getUniformLocations",
            value: function getUniformLocations() {
              return this.uniformLocations;
            }
          },
          {
            key: "getAttributeLocations",
            value: function getAttributeLocations() {
              return this.attributeLocations;
            }
          },
          {
            key: "getCount",
            value: function getCount() {
              return this.rendererData.getCount();
            }
          },
          {
            key: "getOffsetsMatrixUniformLocation",
            value: function getOffsetsMatrixUniformLocation() {
              return this.uniformLocations.getOffsetsMatrixUniformLocation();
            }
          },
          {
            key: "getNormalsMatrixUniformLocation",
            value: function getNormalsMatrixUniformLocation() {
              return this.uniformLocations.getNormalsMatrixUniformLocation();
            }
          },
          {
            key: "getPositionMatrixUniformLocation",
            value: function getPositionMatrixUniformLocation() {
              return this.uniformLocations.getPositionMatrixUniformLocation();
            }
          },
          {
            key: "getRotationsMatrixUniformLocation",
            value: function getRotationsMatrixUniformLocation() {
              return this.uniformLocations.getRotationsMatrixUniformLocation();
            }
          },
          {
            key: "getProjectionMatrixUniformLocation",
            value: function getProjectionMatrixUniformLocation() {
              return this.uniformLocations.getProjectionMatrixUniformLocation();
            }
          },
          {
            key: "getVertexPositionAttributeLocation",
            value: function getVertexPositionAttributeLocation() {
              return this.attributeLocations.getVertexPositionAttributeLocation();
            }
          },
          {
            key: "getVertexNormalAttributeLocation",
            value: function getVertexNormalAttributeLocation() {
              return this.attributeLocations.getVertexNormalAttributeLocation();
            }
          },
          {
            key: "addFacets",
            value: function addFacets(facets) {
              (0, _array.add)(this.facets, facets);
            }
          }
        ]);
        return Renderer2;
      }();
      function createProgram(vertexShaderSource, fragmentShaderSource, canvas) {
        var vertexShader = canvas.createVertexShader(vertexShaderSource), fragmentShader = canvas.createFragmentShader(fragmentShaderSource), program = canvas.createProgram(vertexShader, fragmentShader);
        return program;
      }
    }
  });

  // lib/renderer/data.js
  var require_data = __commonJS({
    "lib/renderer/data.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return RendererData;
        }
      });
      var _array = require_array2();
      function _array_like_to_array(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _array_without_holes(arr) {
        if (Array.isArray(arr))
          return _array_like_to_array(arr);
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _construct(Parent, args, Class) {
        if (_is_native_reflect_construct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function construct(Parent2, args2, Class2) {
            var a = [
              null
            ];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2)
              _set_prototype_of(instance, Class2.prototype);
            return instance;
          };
        }
        return _construct.apply(null, arguments);
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _iterable_to_array(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _non_iterable_spread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _to_consumable_array(arr) {
        return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
      }
      function _unsupported_iterable_to_array(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _array_like_to_array(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _array_like_to_array(o, minLen);
      }
      function _is_native_reflect_construct() {
        try {
          var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (_) {
        }
        return (_is_native_reflect_construct = function() {
          return !!result;
        })();
      }
      var RendererData = /* @__PURE__ */ function() {
        function RendererData2(vertexPositionsData, vertexNormalsData, vertexIndexesData) {
          _class_call_check(this, RendererData2);
          this.vertexPositionsData = vertexPositionsData;
          this.vertexNormalsData = vertexNormalsData;
          this.vertexIndexesData = vertexIndexesData;
        }
        _create_class(RendererData2, [
          {
            key: "getCount",
            value: function getCount() {
              var vertexIndexesDataLength = this.vertexIndexesData.length, count = vertexIndexesDataLength;
              return count;
            }
          },
          {
            key: "getVertexPositionsData",
            value: function getVertexPositionsData() {
              return this.vertexPositionsData;
            }
          },
          {
            key: "getVertexNormalsData",
            value: function getVertexNormalsData() {
              return this.vertexNormalsData;
            }
          },
          {
            key: "getVertexIndexesData",
            value: function getVertexIndexesData() {
              return this.vertexIndexesData;
            }
          },
          {
            key: "addVertexPositions",
            value: function addVertexPositions(vertexPositions) {
              var vertexPositionsData = (0, _array.flatten)(vertexPositions);
              (0, _array.add)(this.vertexPositionsData, vertexPositionsData);
            }
          },
          {
            key: "addVertexNormals",
            value: function addVertexNormals(vertexNormals) {
              var vertexNormalsData = (0, _array.flatten)(vertexNormals);
              (0, _array.add)(this.vertexNormalsData, vertexNormalsData);
            }
          },
          {
            key: "addVertexIndexes",
            value: function addVertexIndexes(vertexIndexes) {
              var vertexIndexesData = vertexIndexes;
              (0, _array.add)(this.vertexIndexesData, vertexIndexesData);
            }
          }
        ], [
          {
            key: "fromNothing",
            value: function fromNothing(Class) {
              for (var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                remainingArguments[_key - 1] = arguments[_key];
              }
              var vertexPositionsData = [], vertexNormalsData = [], vertexIndexesData = [], rendererData = _construct(Class, [
                vertexPositionsData,
                vertexNormalsData,
                vertexIndexesData
              ].concat(_to_consumable_array(remainingArguments)));
              return rendererData;
            }
          }
        ]);
        return RendererData2;
      }();
    }
  });

  // lib/renderer/data/colour.js
  var require_colour2 = __commonJS({
    "lib/renderer/data/colour.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return ColourRendererData;
        }
      });
      var _data = /* @__PURE__ */ _interop_require_default(require_data());
      var _array = require_array2();
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _call_super(_this, derived, args) {
        derived = _get_prototype_of(derived);
        return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _is_native_reflect_construct() {
        try {
          var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (_) {
        }
        return (_is_native_reflect_construct = function() {
          return !!result;
        })();
      }
      var ColourRendererData = /* @__PURE__ */ function(RendererData) {
        _inherits(ColourRendererData2, RendererData);
        function ColourRendererData2(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexColoursData) {
          _class_call_check(this, ColourRendererData2);
          var _this;
          _this = _call_super(this, ColourRendererData2, [
            vertexPositionsData,
            vertexNormalsData,
            vertexIndexesData
          ]);
          _this.vertexColoursData = vertexColoursData;
          return _this;
        }
        _create_class(ColourRendererData2, [
          {
            key: "getVertexColoursData",
            value: function getVertexColoursData() {
              return this.vertexColoursData;
            }
          },
          {
            key: "addVertexColours",
            value: function addVertexColours(vertexColours) {
              var vertexColoursData = (0, _array.flatten)(vertexColours);
              (0, _array.add)(this.vertexColoursData, vertexColoursData);
            }
          }
        ], [
          {
            key: "fromNothing",
            value: function fromNothing() {
              var vertexColoursData = [], colourRendererData = _data.default.fromNothing(ColourRendererData2, vertexColoursData);
              return colourRendererData;
            }
          }
        ]);
        return ColourRendererData2;
      }(_data.default);
    }
  });

  // lib/renderer/source/lighting.js
  var require_lighting = __commonJS({
    "lib/renderer/source/lighting.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        default: function() {
          return _default;
        },
        normalsMatrixName: function() {
          return normalsMatrixName;
        },
        vertexNormalAttributeName: function() {
          return vertexNormalAttributeName;
        }
      });
      var normalsMatrixName = "uNormalsMatrix";
      var vertexNormalAttributeName = "aVertexNormal";
      var lightingSource = new String("\n  \n        uniform mat4 ".concat(normalsMatrixName, ";\n\n        attribute vec3 ").concat(vertexNormalAttributeName, ";\n\n        vec3 directionalLightColour = vec3(1, 1, 1),\n             directionalVector = normalize(vec3(1.0, 1.0, 1.0));\n          \n        vec3 calculateLighting() {\n          vec4 transformedNormal = ").concat(normalsMatrixName, " * vec4(").concat(vertexNormalAttributeName, ", 1.0);            \n\n          float directional = (dot(transformedNormal.xyz, directionalVector) + 1.0) / 2.0;\n          \n          vec3 lighting = (directionalLightColour * directional);\n          \n          return lighting;\n        }\n\n      "));
      var _default = lightingSource;
    }
  });

  // lib/renderer/source/position.js
  var require_position = __commonJS({
    "lib/renderer/source/position.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        default: function() {
          return _default;
        },
        offsetsMatrixName: function() {
          return offsetsMatrixName;
        },
        positionMatrixName: function() {
          return positionMatrixName;
        },
        projectionMatrixName: function() {
          return projectionMatrixName;
        },
        rotationsMatrixName: function() {
          return rotationsMatrixName;
        },
        vertexPositionAttributeName: function() {
          return vertexPositionAttributeName;
        }
      });
      var offsetsMatrixName = "uOffsetsMatrix";
      var positionMatrixName = "uPositionMatrix";
      var rotationsMatrixName = "uRotationsMatrix";
      var projectionMatrixName = "uPerspectiveMatrix";
      var vertexPositionAttributeName = "aVertexPosition";
      var positionSource = new String("\n  \n        uniform mat4 ".concat(offsetsMatrixName, ",\n                     ").concat(rotationsMatrixName, ",\n                     ").concat(positionMatrixName, ",\n                     ").concat(projectionMatrixName, ";\n        \n        attribute vec4 ").concat(vertexPositionAttributeName, ";\n\n        vec4 calculatePosition() {\n          vec4 position = ").concat(projectionMatrixName, " * ").concat(positionMatrixName, " * ").concat(rotationsMatrixName, " * ").concat(offsetsMatrixName, " * ").concat(vertexPositionAttributeName, ";\n          \n          return position;\n        }\n        \n      "));
      var _default = positionSource;
    }
  });

  // lib/renderer/source/colour/vertexShader.js
  var require_vertexShader = __commonJS({
    "lib/renderer/source/colour/vertexShader.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        default: function() {
          return _default;
        },
        vertexColourAttributeName: function() {
          return vertexColourAttributeName;
        }
      });
      var _lighting = /* @__PURE__ */ _interop_require_default(require_lighting());
      var _position = /* @__PURE__ */ _interop_require_default(require_position());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var vertexColourAttributeName = "aVertexColour";
      var vertexShaderSource = new String("\n    \n        attribute vec4 ".concat(vertexColourAttributeName, ";\n\n        ").concat(_lighting.default, "\n      \n        ").concat(_position.default, "\n    \n        varying highp vec3 vLighting;\n        \n        varying lowp vec4 vColour;\n        \n        void main() {\n          vLighting = calculateLighting();\n\n          gl_Position = calculatePosition();\n\n          vColour = ").concat(vertexColourAttributeName, ";                    \n        }\n        \n      "));
      var _default = vertexShaderSource;
    }
  });

  // lib/renderer/source/colour/fragmentShader.js
  var require_fragmentShader = __commonJS({
    "lib/renderer/source/colour/fragmentShader.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      var fragmentShaderSource = new String("\n        \n        varying lowp vec4 vColour;\n              \n        varying highp vec3 vLighting;\n\n        void main() {\n          gl_FragColor = vec4(vColour.rgb * vLighting, vColour.a);\n        }\n        \n      ");
      var _default = fragmentShaderSource;
    }
  });

  // lib/renderer/buffers.js
  var require_buffers = __commonJS({
    "lib/renderer/buffers.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return RendererBuffers;
        }
      });
      function _array_like_to_array(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _array_without_holes(arr) {
        if (Array.isArray(arr))
          return _array_like_to_array(arr);
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _construct(Parent, args, Class) {
        if (_is_native_reflect_construct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function construct(Parent2, args2, Class2) {
            var a = [
              null
            ];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2)
              _set_prototype_of(instance, Class2.prototype);
            return instance;
          };
        }
        return _construct.apply(null, arguments);
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _iterable_to_array(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _non_iterable_spread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _to_consumable_array(arr) {
        return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
      }
      function _unsupported_iterable_to_array(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _array_like_to_array(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _array_like_to_array(o, minLen);
      }
      function _is_native_reflect_construct() {
        try {
          var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (_) {
        }
        return (_is_native_reflect_construct = function() {
          return !!result;
        })();
      }
      var vertexNormalComponents = 3;
      var vertexPositionComponents = 3;
      var RendererBuffers = /* @__PURE__ */ function() {
        function RendererBuffers2(vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer) {
          _class_call_check(this, RendererBuffers2);
          this.vertexPositionsBuffer = vertexPositionsBuffer;
          this.vertexNormalsBuffer = vertexNormalsBuffer;
          this.vertexIndexesElementBuffer = vertexIndexesElementBuffer;
        }
        _create_class(RendererBuffers2, [
          {
            key: "createVertexPositionsBuffer",
            value: function createVertexPositionsBuffer(vertexPositionsData, canvas) {
              this.vertexPositionsBuffer = canvas.createBuffer(vertexPositionsData);
            }
          },
          {
            key: "createVertexNormalsBuffer",
            value: function createVertexNormalsBuffer(vertexNormalsData, canvas) {
              this.vertexNormalsBuffer = canvas.createBuffer(vertexNormalsData);
            }
          },
          {
            key: "createVertexIndexesElementBuffer",
            value: function createVertexIndexesElementBuffer(vertexIndexesData, canvas) {
              this.vertexIndexesElementBuffer = canvas.createElementBuffer(vertexIndexesData);
            }
          },
          {
            key: "bindVertexNormalsBuffer",
            value: function bindVertexNormalsBuffer(vertexNormalAttributeLocation, canvas) {
              canvas.bindBuffer(this.vertexNormalsBuffer, vertexNormalAttributeLocation, vertexNormalComponents);
            }
          },
          {
            key: "bindVertexPositionsBuffer",
            value: function bindVertexPositionsBuffer(vertexPositionAttributeLocation, canvas) {
              canvas.bindBuffer(this.vertexPositionsBuffer, vertexPositionAttributeLocation, vertexPositionComponents);
            }
          },
          {
            key: "bindVertexIndexesElementBuffer",
            value: function bindVertexIndexesElementBuffer(canvas) {
              canvas.bindElementBuffer(this.vertexIndexesElementBuffer);
            }
          },
          {
            key: "createBuffers",
            value: function createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, canvas) {
              this.createVertexPositionsBuffer(vertexPositionsData, canvas);
              this.createVertexNormalsBuffer(vertexNormalsData, canvas);
              this.createVertexIndexesElementBuffer(vertexIndexesData, canvas);
            }
          },
          {
            key: "bindBuffers",
            value: function bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, canvas) {
              this.bindVertexNormalsBuffer(vertexNormalAttributeLocation, canvas);
              this.bindVertexPositionsBuffer(vertexPositionAttributeLocation, canvas);
              this.bindVertexIndexesElementBuffer(canvas);
            }
          }
        ], [
          {
            key: "fromNothing",
            value: function fromNothing(Class) {
              for (var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                remainingArguments[_key - 1] = arguments[_key];
              }
              var vertexPositionsBuffer = null, vertexNormalsBuffer = null, vertexIndexesElementBuffer = null, rendererBuffers = _construct(Class, [
                vertexPositionsBuffer,
                vertexNormalsBuffer,
                vertexIndexesElementBuffer
              ].concat(_to_consumable_array(remainingArguments)));
              return rendererBuffers;
            }
          }
        ]);
        return RendererBuffers2;
      }();
    }
  });

  // lib/renderer/buffers/colour.js
  var require_colour3 = __commonJS({
    "lib/renderer/buffers/colour.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return ColourRendererBuffers;
        }
      });
      var _buffers = /* @__PURE__ */ _interop_require_default(require_buffers());
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _call_super(_this, derived, args) {
        derived = _get_prototype_of(derived);
        return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get(target, property, receiver) {
        if (typeof Reflect !== "undefined" && Reflect.get) {
          _get = Reflect.get;
        } else {
          _get = function get(target2, property2, receiver2) {
            var base = _super_prop_base(target2, property2);
            if (!base)
              return;
            var desc = Object.getOwnPropertyDescriptor(base, property2);
            if (desc.get) {
              return desc.get.call(receiver2 || target2);
            }
            return desc.value;
          };
        }
        return _get(target, property, receiver || target);
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _super_prop_base(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
          object = _get_prototype_of(object);
          if (object === null)
            break;
        }
        return object;
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _is_native_reflect_construct() {
        try {
          var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (_) {
        }
        return (_is_native_reflect_construct = function() {
          return !!result;
        })();
      }
      var vertexColourComponents = 4;
      var ColourRendererBuffers = /* @__PURE__ */ function(RendererBuffers) {
        _inherits(ColourRendererBuffers2, RendererBuffers);
        function ColourRendererBuffers2(vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer, vertexColoursBuffer) {
          _class_call_check(this, ColourRendererBuffers2);
          var _this;
          _this = _call_super(this, ColourRendererBuffers2, [
            vertexPositionsBuffer,
            vertexNormalsBuffer,
            vertexIndexesElementBuffer
          ]);
          _this.vertexColoursBuffer = vertexColoursBuffer;
          return _this;
        }
        _create_class(ColourRendererBuffers2, [
          {
            key: "createVertexColoursBuffer",
            value: function createVertexColoursBuffer(vertexColoursData, canvas) {
              this.vertexColoursBuffer = canvas.createBuffer(vertexColoursData);
            }
          },
          {
            key: "bindVertexColoursBuffer",
            value: function bindVertexColoursBuffer(vertexColourAttributeLocation, canvas) {
              canvas.bindBuffer(this.vertexColoursBuffer, vertexColourAttributeLocation, vertexColourComponents);
            }
          },
          {
            key: "createBuffers",
            value: function createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexColoursData, canvas) {
              _get(_get_prototype_of(ColourRendererBuffers2.prototype), "createBuffers", this).call(this, vertexPositionsData, vertexNormalsData, vertexIndexesData, canvas);
              this.createVertexColoursBuffer(vertexColoursData, canvas);
            }
          },
          {
            key: "bindBuffers",
            value: function bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, vertexColourAttributeLocation, canvas) {
              _get(_get_prototype_of(ColourRendererBuffers2.prototype), "bindBuffers", this).call(this, vertexNormalAttributeLocation, vertexPositionAttributeLocation, canvas);
              this.bindVertexColoursBuffer(vertexColourAttributeLocation, canvas);
            }
          }
        ], [
          {
            key: "fromNothing",
            value: function fromNothing() {
              var vertexColoursBuffer = null, colourRendererBuffers = _buffers.default.fromNothing(ColourRendererBuffers2, vertexColoursBuffer);
              return colourRendererBuffers;
            }
          }
        ]);
        return ColourRendererBuffers2;
      }(_buffers.default);
    }
  });

  // lib/renderer/locations/uniform.js
  var require_uniform = __commonJS({
    "lib/renderer/locations/uniform.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return UniformLocations;
        }
      });
      var _lighting = require_lighting();
      var _position = require_position();
      function _array_like_to_array(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _array_without_holes(arr) {
        if (Array.isArray(arr))
          return _array_like_to_array(arr);
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _construct(Parent, args, Class) {
        if (_is_native_reflect_construct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function construct(Parent2, args2, Class2) {
            var a = [
              null
            ];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2)
              _set_prototype_of(instance, Class2.prototype);
            return instance;
          };
        }
        return _construct.apply(null, arguments);
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _iterable_to_array(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _non_iterable_spread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _to_consumable_array(arr) {
        return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
      }
      function _unsupported_iterable_to_array(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _array_like_to_array(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _array_like_to_array(o, minLen);
      }
      function _is_native_reflect_construct() {
        try {
          var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (_) {
        }
        return (_is_native_reflect_construct = function() {
          return !!result;
        })();
      }
      var UniformLocations = /* @__PURE__ */ function() {
        function UniformLocations2(offsetsMatrixUniformLocation, normalsMatrixUniformLocation, positionMatrixUniformLocation, rotationsMatrixUniformLocation, projectionMatrixUniformLocation) {
          _class_call_check(this, UniformLocations2);
          this.offsetsMatrixUniformLocation = offsetsMatrixUniformLocation;
          this.normalsMatrixUniformLocation = normalsMatrixUniformLocation;
          this.positionMatrixUniformLocation = positionMatrixUniformLocation;
          this.rotationsMatrixUniformLocation = rotationsMatrixUniformLocation;
          this.projectionMatrixUniformLocation = projectionMatrixUniformLocation;
        }
        _create_class(UniformLocations2, [
          {
            key: "getOffsetsMatrixUniformLocation",
            value: function getOffsetsMatrixUniformLocation() {
              return this.offsetsMatrixUniformLocation;
            }
          },
          {
            key: "getNormalsMatrixUniformLocation",
            value: function getNormalsMatrixUniformLocation() {
              return this.normalsMatrixUniformLocation;
            }
          },
          {
            key: "getPositionMatrixUniformLocation",
            value: function getPositionMatrixUniformLocation() {
              return this.positionMatrixUniformLocation;
            }
          },
          {
            key: "getRotationsMatrixUniformLocation",
            value: function getRotationsMatrixUniformLocation() {
              return this.rotationsMatrixUniformLocation;
            }
          },
          {
            key: "getProjectionMatrixUniformLocation",
            value: function getProjectionMatrixUniformLocation() {
              return this.projectionMatrixUniformLocation;
            }
          }
        ], [
          {
            key: "fromProgram",
            value: function fromProgram(Class, program, canvas) {
              for (var _len = arguments.length, remainingArguments = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
                remainingArguments[_key - 3] = arguments[_key];
              }
              var offsetsMatrixUniformLocation = canvas.getUniformLocation(program, _position.offsetsMatrixName), normalsMatrixUniformLocation = canvas.getUniformLocation(program, _lighting.normalsMatrixName), positionMatrixUniformLocation = canvas.getUniformLocation(program, _position.positionMatrixName), rotationsMatrixUniformLocation = canvas.getUniformLocation(program, _position.rotationsMatrixName), projectionMatrixUniformLocation = canvas.getUniformLocation(program, _position.projectionMatrixName), uniformLocations = _construct(Class, [
                offsetsMatrixUniformLocation,
                normalsMatrixUniformLocation,
                positionMatrixUniformLocation,
                rotationsMatrixUniformLocation,
                projectionMatrixUniformLocation
              ].concat(_to_consumable_array(remainingArguments)));
              return uniformLocations;
            }
          }
        ]);
        return UniformLocations2;
      }();
    }
  });

  // lib/renderer/locations/colour/uniform.js
  var require_uniform2 = __commonJS({
    "lib/renderer/locations/colour/uniform.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return ColourUniformLocations;
        }
      });
      var _uniform = /* @__PURE__ */ _interop_require_default(require_uniform());
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _call_super(_this, derived, args) {
        derived = _get_prototype_of(derived);
        return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _is_native_reflect_construct() {
        try {
          var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (_) {
        }
        return (_is_native_reflect_construct = function() {
          return !!result;
        })();
      }
      var ColourUniformLocations = /* @__PURE__ */ function(UniformLocations) {
        _inherits(ColourUniformLocations2, UniformLocations);
        function ColourUniformLocations2() {
          _class_call_check(this, ColourUniformLocations2);
          return _call_super(this, ColourUniformLocations2, arguments);
        }
        _create_class(ColourUniformLocations2, null, [
          {
            key: "fromProgram",
            value: function fromProgram(program, canvas) {
              return _uniform.default.fromProgram(ColourUniformLocations2, program, canvas);
            }
          }
        ]);
        return ColourUniformLocations2;
      }(_uniform.default);
    }
  });

  // lib/renderer/locations/attribute.js
  var require_attribute = __commonJS({
    "lib/renderer/locations/attribute.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return AttributeLocations;
        }
      });
      var _lighting = require_lighting();
      var _position = require_position();
      function _array_like_to_array(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _array_without_holes(arr) {
        if (Array.isArray(arr))
          return _array_like_to_array(arr);
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _construct(Parent, args, Class) {
        if (_is_native_reflect_construct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function construct(Parent2, args2, Class2) {
            var a = [
              null
            ];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2)
              _set_prototype_of(instance, Class2.prototype);
            return instance;
          };
        }
        return _construct.apply(null, arguments);
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _iterable_to_array(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _non_iterable_spread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _to_consumable_array(arr) {
        return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
      }
      function _unsupported_iterable_to_array(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _array_like_to_array(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _array_like_to_array(o, minLen);
      }
      function _is_native_reflect_construct() {
        try {
          var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (_) {
        }
        return (_is_native_reflect_construct = function() {
          return !!result;
        })();
      }
      var AttributeLocations = /* @__PURE__ */ function() {
        function AttributeLocations2(vertexPositionAttributeLocation, vertexNormalAttributeLocation) {
          _class_call_check(this, AttributeLocations2);
          this.vertexPositionAttributeLocation = vertexPositionAttributeLocation;
          this.vertexNormalAttributeLocation = vertexNormalAttributeLocation;
        }
        _create_class(AttributeLocations2, [
          {
            key: "getVertexPositionAttributeLocation",
            value: function getVertexPositionAttributeLocation() {
              return this.vertexPositionAttributeLocation;
            }
          },
          {
            key: "getVertexNormalAttributeLocation",
            value: function getVertexNormalAttributeLocation() {
              return this.vertexNormalAttributeLocation;
            }
          }
        ], [
          {
            key: "fromProgram",
            value: function fromProgram(Class, program, canvas) {
              for (var _len = arguments.length, remainingArguments = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
                remainingArguments[_key - 3] = arguments[_key];
              }
              var vertexPositionAttributeLocation = canvas.getAttributeLocation(program, _position.vertexPositionAttributeName), vertexNormalAttributeLocation = canvas.getAttributeLocation(program, _lighting.vertexNormalAttributeName), attributeLocations = _construct(Class, [
                vertexPositionAttributeLocation,
                vertexNormalAttributeLocation
              ].concat(_to_consumable_array(remainingArguments)));
              return attributeLocations;
            }
          }
        ]);
        return AttributeLocations2;
      }();
    }
  });

  // lib/renderer/locations/colour/attribute.js
  var require_attribute2 = __commonJS({
    "lib/renderer/locations/colour/attribute.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return ColourAttributeLocations;
        }
      });
      var _attribute = /* @__PURE__ */ _interop_require_default(require_attribute());
      var _vertexShader = require_vertexShader();
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _call_super(_this, derived, args) {
        derived = _get_prototype_of(derived);
        return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _is_native_reflect_construct() {
        try {
          var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (_) {
        }
        return (_is_native_reflect_construct = function() {
          return !!result;
        })();
      }
      var ColourAttributeLocations = /* @__PURE__ */ function(AttributeLocations) {
        _inherits(ColourAttributeLocations2, AttributeLocations);
        function ColourAttributeLocations2(vertexPositionAttributeLocation, vertexNormalAttributeLocation, vertexColourAttributeLocation) {
          _class_call_check(this, ColourAttributeLocations2);
          var _this;
          _this = _call_super(this, ColourAttributeLocations2, [
            vertexPositionAttributeLocation,
            vertexNormalAttributeLocation
          ]);
          _this.vertexColourAttributeLocation = vertexColourAttributeLocation;
          return _this;
        }
        _create_class(ColourAttributeLocations2, [
          {
            key: "getVertexColourAttributeLocation",
            value: function getVertexColourAttributeLocation() {
              return this.vertexColourAttributeLocation;
            }
          }
        ], [
          {
            key: "fromProgram",
            value: function fromProgram(program, canvas) {
              var vertexColourAttributeLocation = canvas.getAttributeLocation(program, _vertexShader.vertexColourAttributeName), colourAttributeLocations = _attribute.default.fromProgram(ColourAttributeLocations2, program, canvas, vertexColourAttributeLocation);
              return colourAttributeLocations;
            }
          }
        ]);
        return ColourAttributeLocations2;
      }(_attribute.default);
    }
  });

  // lib/renderer/colour.js
  var require_colour4 = __commonJS({
    "lib/renderer/colour.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return ColourRenderer;
        }
      });
      var _renderer = /* @__PURE__ */ _interop_require_wildcard(require_renderer());
      var _colour = /* @__PURE__ */ _interop_require_default(require_colour2());
      var _vertexShader = /* @__PURE__ */ _interop_require_default(require_vertexShader());
      var _fragmentShader = /* @__PURE__ */ _interop_require_default(require_fragmentShader());
      var _colour1 = /* @__PURE__ */ _interop_require_default(require_colour3());
      var _uniform = /* @__PURE__ */ _interop_require_default(require_uniform2());
      var _attribute = /* @__PURE__ */ _interop_require_default(require_attribute2());
      var _array = require_array2();
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _call_super(_this, derived, args) {
        derived = _get_prototype_of(derived);
        return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _getRequireWildcardCache(nodeInterop) {
        if (typeof WeakMap !== "function")
          return null;
        var cacheBabelInterop = new WeakMap();
        var cacheNodeInterop = new WeakMap();
        return (_getRequireWildcardCache = function(nodeInterop2) {
          return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
      }
      function _interop_require_wildcard(obj, nodeInterop) {
        if (!nodeInterop && obj && obj.__esModule) {
          return obj;
        }
        if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
          return {
            default: obj
          };
        }
        var cache = _getRequireWildcardCache(nodeInterop);
        if (cache && cache.has(obj)) {
          return cache.get(obj);
        }
        var newObj = {
          __proto__: null
        };
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
        newObj.default = obj;
        if (cache) {
          cache.set(obj, newObj);
        }
        return newObj;
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _is_native_reflect_construct() {
        try {
          var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (_) {
        }
        return (_is_native_reflect_construct = function() {
          return !!result;
        })();
      }
      var ColourRenderer = /* @__PURE__ */ function(Renderer) {
        _inherits(ColourRenderer2, Renderer);
        function ColourRenderer2() {
          _class_call_check(this, ColourRenderer2);
          return _call_super(this, ColourRenderer2, arguments);
        }
        _create_class(ColourRenderer2, [
          {
            key: "getVertexColourAttributeLocation",
            value: function getVertexColourAttributeLocation() {
              var attributeLocations = this.getAttributeLocations(), vertexColourAttributeLocation = attributeLocations.getVertexColourAttributeLocation();
              return vertexColourAttributeLocation;
            }
          },
          {
            key: "createBuffers",
            value: function createBuffers(canvas) {
              var facets = this.getFacets(), vertexIndexes = [], vertexNormals = [], vertexPositions = [], vertexColours = [];
              facets.forEach(function(facet, index) {
                var colouredFacet = facet, facetVertexIndexes = facet.getVertexIndexes(index), facetVertexNormals = facet.getVertexNormals(), facetVertexPositions = facet.getVertexPositions(), colouredFacetVertexColours = colouredFacet.getVertexColours();
                (0, _array.add)(vertexIndexes, facetVertexIndexes);
                (0, _array.add)(vertexNormals, facetVertexNormals);
                (0, _array.add)(vertexPositions, facetVertexPositions);
                (0, _array.add)(vertexColours, colouredFacetVertexColours);
              });
              var rendererData = this.getRendererData();
              rendererData.addVertexIndexes(vertexIndexes);
              rendererData.addVertexNormals(vertexNormals);
              rendererData.addVertexColours(vertexColours);
              rendererData.addVertexPositions(vertexPositions);
              var rendererBuffers = this.getRendererBuffers(), vertexPositionsData = rendererData.getVertexPositionsData(), vertexNormalsData = rendererData.getVertexNormalsData(), vertexIndexesData = rendererData.getVertexIndexesData(), vertexColoursData = rendererData.getVertexColoursData();
              rendererBuffers.createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexColoursData, canvas);
            }
          },
          {
            key: "bindBuffers",
            value: function bindBuffers(canvas) {
              var rendererBuffers = this.getRendererBuffers(), vertexNormalAttributeLocation = this.getVertexNormalAttributeLocation(), vertexPositionAttributeLocation = this.getVertexPositionAttributeLocation(), vertexColourAttributeLocation = this.getVertexColourAttributeLocation();
              rendererBuffers.bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, vertexColourAttributeLocation, canvas);
            }
          },
          {
            key: "render",
            value: function render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, canvas) {
              var program = this.getProgram();
              canvas.useProgram(program);
              this.bindBuffers(canvas);
              var renderer = this;
              canvas.render(renderer, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
              var count = this.getCount(), start = 0, finish = count;
              canvas.drawElements(start, finish);
            }
          }
        ], [
          {
            key: "fromNothing",
            value: function fromNothing(canvas) {
              var facets = [], program = (0, _renderer.createProgram)(_vertexShader.default, _fragmentShader.default, canvas), colourRendererData = _colour.default.fromNothing(), colourRendererBuffers = _colour1.default.fromNothing(), colourUniformLocations = _uniform.default.fromProgram(program, canvas), colourAttributeLocations = _attribute.default.fromProgram(program, canvas), rendererData = colourRendererData, rendererBuffers = colourRendererBuffers, uniformLocations = colourUniformLocations, attributeLocations = colourAttributeLocations, colourRenderer = new ColourRenderer2(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations);
              return colourRenderer;
            }
          }
        ]);
        return ColourRenderer2;
      }(_renderer.default);
    }
  });

  // lib/renderer/source/texture/vertexShader.js
  var require_vertexShader2 = __commonJS({
    "lib/renderer/source/texture/vertexShader.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        default: function() {
          return _default;
        },
        textureCoordinateAttributeName: function() {
          return textureCoordinateAttributeName;
        }
      });
      var _lighting = /* @__PURE__ */ _interop_require_default(require_lighting());
      var _position = /* @__PURE__ */ _interop_require_default(require_position());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var textureCoordinateAttributeName = "aTextureCoordinate";
      var vertexShaderSource = new String("\n        \n        attribute vec2 ".concat(textureCoordinateAttributeName, ";\n        \n        ").concat(_lighting.default, "\n      \n        ").concat(_position.default, "\n\n        varying highp vec3 vLighting;\n        \n        varying highp vec2 vTextureCoordinate;\n        \n        void main() {\n          vLighting = calculateLighting();\n\n          gl_Position = calculatePosition();\n                    \n          vTextureCoordinate = ").concat(textureCoordinateAttributeName, ";\n        }\n        \n      "));
      var _default = vertexShaderSource;
    }
  });

  // lib/renderer/data/texture.js
  var require_texture2 = __commonJS({
    "lib/renderer/data/texture.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return TextureRendererData;
        }
      });
      var _data = /* @__PURE__ */ _interop_require_default(require_data());
      var _array = require_array2();
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _call_super(_this, derived, args) {
        derived = _get_prototype_of(derived);
        return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _is_native_reflect_construct() {
        try {
          var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (_) {
        }
        return (_is_native_reflect_construct = function() {
          return !!result;
        })();
      }
      var TextureRendererData = /* @__PURE__ */ function(RendererData) {
        _inherits(TextureRendererData2, RendererData);
        function TextureRendererData2(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexTextureCoordinatesData) {
          _class_call_check(this, TextureRendererData2);
          var _this;
          _this = _call_super(this, TextureRendererData2, [
            vertexPositionsData,
            vertexNormalsData,
            vertexIndexesData
          ]);
          _this.vertexTextureCoordinatesData = vertexTextureCoordinatesData;
          return _this;
        }
        _create_class(TextureRendererData2, [
          {
            key: "getVertexTextureCoordinatesData",
            value: function getVertexTextureCoordinatesData() {
              return this.vertexTextureCoordinatesData;
            }
          },
          {
            key: "addVertexTextureCoordinateTuples",
            value: function addVertexTextureCoordinateTuples(vertexTextureCoordinateTuples) {
              var vertexTextureCoordinatesData = (0, _array.flatten)(vertexTextureCoordinateTuples);
              (0, _array.add)(this.vertexTextureCoordinatesData, vertexTextureCoordinatesData);
            }
          }
        ], [
          {
            key: "fromNothing",
            value: function fromNothing() {
              var vertexTextureCoordinatesData = [], textureRendererData = _data.default.fromNothing(TextureRendererData2, vertexTextureCoordinatesData);
              return textureRendererData;
            }
          }
        ]);
        return TextureRendererData2;
      }(_data.default);
    }
  });

  // lib/renderer/source/texture/fragmentShader.js
  var require_fragmentShader2 = __commonJS({
    "lib/renderer/source/texture/fragmentShader.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        default: function() {
          return _default;
        },
        samplerName: function() {
          return samplerName;
        }
      });
      var samplerName = "uSampler";
      var fragmentShaderSource = new String("\n        \n        uniform sampler2D ".concat(samplerName, ";\n\n        varying highp vec3 vLighting;\n                   \n        varying highp vec2 vTextureCoordinate;\n        \n        void main() {\n          highp vec4 texelColour = texture2D(").concat(samplerName, ", vTextureCoordinate);\n          \n          gl_FragColor = vec4(texelColour.rgb * vLighting, texelColour.a);  \n        }\n        \n      "));
      var _default = fragmentShaderSource;
    }
  });

  // lib/renderer/buffers/texture.js
  var require_texture3 = __commonJS({
    "lib/renderer/buffers/texture.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return TextureRendererBuffers;
        }
      });
      var _buffers = /* @__PURE__ */ _interop_require_default(require_buffers());
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _call_super(_this, derived, args) {
        derived = _get_prototype_of(derived);
        return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get(target, property, receiver) {
        if (typeof Reflect !== "undefined" && Reflect.get) {
          _get = Reflect.get;
        } else {
          _get = function get(target2, property2, receiver2) {
            var base = _super_prop_base(target2, property2);
            if (!base)
              return;
            var desc = Object.getOwnPropertyDescriptor(base, property2);
            if (desc.get) {
              return desc.get.call(receiver2 || target2);
            }
            return desc.value;
          };
        }
        return _get(target, property, receiver || target);
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _super_prop_base(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
          object = _get_prototype_of(object);
          if (object === null)
            break;
        }
        return object;
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _is_native_reflect_construct() {
        try {
          var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (_) {
        }
        return (_is_native_reflect_construct = function() {
          return !!result;
        })();
      }
      var textureCoordinateComponents = 2;
      var TextureRendererBuffers = /* @__PURE__ */ function(RendererBuffers) {
        _inherits(TextureRendererBuffers2, RendererBuffers);
        function TextureRendererBuffers2(vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer, textureCoordinatesBuffer) {
          _class_call_check(this, TextureRendererBuffers2);
          var _this;
          _this = _call_super(this, TextureRendererBuffers2, [
            vertexPositionsBuffer,
            vertexNormalsBuffer,
            vertexIndexesElementBuffer
          ]);
          _this.textureCoordinatesBuffer = textureCoordinatesBuffer;
          return _this;
        }
        _create_class(TextureRendererBuffers2, [
          {
            key: "createTextureCoordinatesBuffer",
            value: function createTextureCoordinatesBuffer(textureCoordinatesData, canvas) {
              this.textureCoordinatesBuffer = canvas.createBuffer(textureCoordinatesData);
            }
          },
          {
            key: "bindTextureCoordinatesBuffer",
            value: function bindTextureCoordinatesBuffer(textureCoordinateAttributeLocation, canvas) {
              canvas.bindBuffer(this.textureCoordinatesBuffer, textureCoordinateAttributeLocation, textureCoordinateComponents);
            }
          },
          {
            key: "createBuffers",
            value: function createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, textureCoordinatesData, canvas) {
              _get(_get_prototype_of(TextureRendererBuffers2.prototype), "createBuffers", this).call(this, vertexPositionsData, vertexNormalsData, vertexIndexesData, canvas);
              this.createTextureCoordinatesBuffer(textureCoordinatesData, canvas);
            }
          },
          {
            key: "bindBuffers",
            value: function bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, textureCoordinateAttributeLocation, canvas) {
              _get(_get_prototype_of(TextureRendererBuffers2.prototype), "bindBuffers", this).call(this, vertexNormalAttributeLocation, vertexPositionAttributeLocation, canvas);
              this.bindTextureCoordinatesBuffer(textureCoordinateAttributeLocation, canvas);
            }
          }
        ], [
          {
            key: "fromNothing",
            value: function fromNothing() {
              var textureCoordinatesBuffer = null, textureRendererBuffers = _buffers.default.fromNothing(TextureRendererBuffers2, textureCoordinatesBuffer);
              return textureRendererBuffers;
            }
          }
        ]);
        return TextureRendererBuffers2;
      }(_buffers.default);
    }
  });

  // lib/renderer/locations/texture/uniform.js
  var require_uniform3 = __commonJS({
    "lib/renderer/locations/texture/uniform.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return TextureUniformLocations;
        }
      });
      var _uniform = /* @__PURE__ */ _interop_require_default(require_uniform());
      var _fragmentShader = require_fragmentShader2();
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _call_super(_this, derived, args) {
        derived = _get_prototype_of(derived);
        return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _is_native_reflect_construct() {
        try {
          var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (_) {
        }
        return (_is_native_reflect_construct = function() {
          return !!result;
        })();
      }
      var TextureUniformLocations = /* @__PURE__ */ function(UniformLocations) {
        _inherits(TextureUniformLocations2, UniformLocations);
        function TextureUniformLocations2(offsetsMatrixUniformLocation, normalsMatrixUniformLocation, positionMatrixUniformLocation, rotationsMatrixUniformLocation, projectionMatrixUniformLocation, samplerUniformLocation) {
          _class_call_check(this, TextureUniformLocations2);
          var _this;
          _this = _call_super(this, TextureUniformLocations2, [
            offsetsMatrixUniformLocation,
            normalsMatrixUniformLocation,
            positionMatrixUniformLocation,
            rotationsMatrixUniformLocation,
            projectionMatrixUniformLocation
          ]);
          _this.samplerUniformLocation = samplerUniformLocation;
          return _this;
        }
        _create_class(TextureUniformLocations2, [
          {
            key: "getSamplerUniformLocation",
            value: function getSamplerUniformLocation() {
              return this.samplerUniformLocation;
            }
          }
        ], [
          {
            key: "fromProgram",
            value: function fromProgram(program, canvas) {
              var samplerUniformLocation = canvas.getUniformLocation(program, _fragmentShader.samplerName), textureUniformLocations = _uniform.default.fromProgram(TextureUniformLocations2, program, canvas, samplerUniformLocation);
              return textureUniformLocations;
            }
          }
        ]);
        return TextureUniformLocations2;
      }(_uniform.default);
    }
  });

  // lib/renderer/locations/texture/attribute.js
  var require_attribute3 = __commonJS({
    "lib/renderer/locations/texture/attribute.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return TextureAttributeLocations;
        }
      });
      var _attribute = /* @__PURE__ */ _interop_require_default(require_attribute());
      var _vertexShader = require_vertexShader2();
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _call_super(_this, derived, args) {
        derived = _get_prototype_of(derived);
        return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _is_native_reflect_construct() {
        try {
          var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (_) {
        }
        return (_is_native_reflect_construct = function() {
          return !!result;
        })();
      }
      var TextureAttributeLocations = /* @__PURE__ */ function(AttributeLocations) {
        _inherits(TextureAttributeLocations2, AttributeLocations);
        function TextureAttributeLocations2(vertexPositionAttributeLocation, vertexNormalAttributeLocation, textureCoordinateAttributeLocation) {
          _class_call_check(this, TextureAttributeLocations2);
          var _this;
          _this = _call_super(this, TextureAttributeLocations2, [
            vertexPositionAttributeLocation,
            vertexNormalAttributeLocation
          ]);
          _this.textureCoordinateAttributeLocation = textureCoordinateAttributeLocation;
          return _this;
        }
        _create_class(TextureAttributeLocations2, [
          {
            key: "getTextureCoordinateAttributeLocation",
            value: function getTextureCoordinateAttributeLocation() {
              return this.textureCoordinateAttributeLocation;
            }
          }
        ], [
          {
            key: "fromProgram",
            value: function fromProgram(program, canvas) {
              var textureCoordinateAttributeLocation = canvas.getAttributeLocation(program, _vertexShader.textureCoordinateAttributeName), textureAttributeLocations = _attribute.default.fromProgram(TextureAttributeLocations2, program, canvas, textureCoordinateAttributeLocation);
              return textureAttributeLocations;
            }
          }
        ]);
        return TextureAttributeLocations2;
      }(_attribute.default);
    }
  });

  // lib/renderer/texture.js
  var require_texture4 = __commonJS({
    "lib/renderer/texture.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return TextureRenderer;
        }
      });
      var _renderer = /* @__PURE__ */ _interop_require_wildcard(require_renderer());
      var _vertexShader = /* @__PURE__ */ _interop_require_default(require_vertexShader2());
      var _texture = /* @__PURE__ */ _interop_require_default(require_texture2());
      var _fragmentShader = /* @__PURE__ */ _interop_require_default(require_fragmentShader2());
      var _texture1 = /* @__PURE__ */ _interop_require_default(require_texture3());
      var _uniform = /* @__PURE__ */ _interop_require_default(require_uniform3());
      var _attribute = /* @__PURE__ */ _interop_require_default(require_attribute3());
      function _array_like_to_array(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _array_without_holes(arr) {
        if (Array.isArray(arr))
          return _array_like_to_array(arr);
      }
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _call_super(_this, derived, args) {
        derived = _get_prototype_of(derived);
        return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _construct(Parent, args, Class) {
        if (_is_native_reflect_construct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function construct(Parent2, args2, Class2) {
            var a = [
              null
            ];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2)
              _set_prototype_of(instance, Class2.prototype);
            return instance;
          };
        }
        return _construct.apply(null, arguments);
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _getRequireWildcardCache(nodeInterop) {
        if (typeof WeakMap !== "function")
          return null;
        var cacheBabelInterop = new WeakMap();
        var cacheNodeInterop = new WeakMap();
        return (_getRequireWildcardCache = function(nodeInterop2) {
          return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
      }
      function _interop_require_wildcard(obj, nodeInterop) {
        if (!nodeInterop && obj && obj.__esModule) {
          return obj;
        }
        if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
          return {
            default: obj
          };
        }
        var cache = _getRequireWildcardCache(nodeInterop);
        if (cache && cache.has(obj)) {
          return cache.get(obj);
        }
        var newObj = {
          __proto__: null
        };
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
        newObj.default = obj;
        if (cache) {
          cache.set(obj, newObj);
        }
        return newObj;
      }
      function _iterable_to_array(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _non_iterable_spread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _to_consumable_array(arr) {
        return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _unsupported_iterable_to_array(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _array_like_to_array(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _array_like_to_array(o, minLen);
      }
      function _is_native_reflect_construct() {
        try {
          var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (_) {
        }
        return (_is_native_reflect_construct = function() {
          return !!result;
        })();
      }
      var TextureRenderer = /* @__PURE__ */ function(Renderer) {
        _inherits(TextureRenderer2, Renderer);
        function TextureRenderer2() {
          _class_call_check(this, TextureRenderer2);
          return _call_super(this, TextureRenderer2, arguments);
        }
        _create_class(TextureRenderer2, [
          {
            key: "getTextureCoordinateAttributeLocation",
            value: function getTextureCoordinateAttributeLocation() {
              var attributeLocations = this.getAttributeLocations(), textureCoordinateAttributeLocation = attributeLocations.getTextureCoordinateAttributeLocation();
              return textureCoordinateAttributeLocation;
            }
          },
          {
            key: "createBuffers",
            value: function createBuffers(canvas) {
              var rendererData = this.getRendererData(), rendererBuffers = this.getRendererBuffers(), vertexPositionsData = rendererData.getVertexPositionsData(), vertexNormalsData = rendererData.getVertexNormalsData(), vertexIndexesData = rendererData.getVertexIndexesData(), vertexTextureCoordinatesData = rendererData.getVertexTextureCoordinatesData();
              rendererBuffers.createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexTextureCoordinatesData, canvas);
            }
          },
          {
            key: "bindBuffers",
            value: function bindBuffers(canvas) {
              var rendererBuffers = this.getRendererBuffers(), vertexNormalAttributeLocation = this.getVertexNormalAttributeLocation(), vertexPositionAttributeLocation = this.getVertexPositionAttributeLocation(), textureCoordinateAttributeLocation = this.getTextureCoordinateAttributeLocation();
              rendererBuffers.bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, textureCoordinateAttributeLocation, canvas);
            }
          },
          {
            key: "useTexture",
            value: function useTexture(index, canvas) {
              var uniformLocations = this.getUniformLocations(), samplerUniformLocation = uniformLocations.getSamplerUniformLocation(), samplerUniformLocationIntegerValue = index;
              canvas.setUniformLocationIntegerValue(samplerUniformLocation, samplerUniformLocationIntegerValue);
            }
          }
        ], [
          {
            key: "fromNothing",
            value: function fromNothing(Class, canvas) {
              for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                remainingArguments[_key - 2] = arguments[_key];
              }
              var facets = [], program = (0, _renderer.createProgram)(_vertexShader.default, _fragmentShader.default, canvas), textureRendererData = _texture.default.fromNothing(), textureRendererBuffers = _texture1.default.fromNothing(), textureUniformLocations = _uniform.default.fromProgram(program, canvas), textureAttributeLocations = _attribute.default.fromProgram(program, canvas), rendererData = textureRendererData, rendererBuffers = textureRendererBuffers, uniformLocations = textureUniformLocations, attributeLocations = textureAttributeLocations, textureRenderer = _construct(Class, [
                facets,
                program,
                rendererData,
                rendererBuffers,
                uniformLocations,
                attributeLocations
              ].concat(_to_consumable_array(remainingArguments)));
              canvas.enableAnisotropicFiltering();
              return textureRenderer;
            }
          }
        ]);
        return TextureRenderer2;
      }(_renderer.default);
    }
  });

  // lib/renderer/texture/images.js
  var require_images = __commonJS({
    "lib/renderer/texture/images.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return ImagesTextureRenderer;
        }
      });
      var _texture = /* @__PURE__ */ _interop_require_default(require_texture4());
      var _array = require_array2();
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _call_super(_this, derived, args) {
        derived = _get_prototype_of(derived);
        return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get(target, property, receiver) {
        if (typeof Reflect !== "undefined" && Reflect.get) {
          _get = Reflect.get;
        } else {
          _get = function get(target2, property2, receiver2) {
            var base = _super_prop_base(target2, property2);
            if (!base)
              return;
            var desc = Object.getOwnPropertyDescriptor(base, property2);
            if (desc.get) {
              return desc.get.call(receiver2 || target2);
            }
            return desc.value;
          };
        }
        return _get(target, property, receiver || target);
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _super_prop_base(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
          object = _get_prototype_of(object);
          if (object === null)
            break;
        }
        return object;
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _is_native_reflect_construct() {
        try {
          var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (_) {
        }
        return (_is_native_reflect_construct = function() {
          return !!result;
        })();
      }
      var ImagesTextureRenderer = /* @__PURE__ */ function(TextureRenderer) {
        _inherits(ImagesTextureRenderer2, TextureRenderer);
        function ImagesTextureRenderer2(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations, imageNames, facetsMap, offsets) {
          _class_call_check(this, ImagesTextureRenderer2);
          var _this;
          _this = _call_super(this, ImagesTextureRenderer2, [
            facets,
            program,
            rendererData,
            rendererBuffers,
            uniformLocations,
            attributeLocations
          ]);
          _this.imageNames = imageNames;
          _this.facetsMap = facetsMap;
          _this.offsets = offsets;
          return _this;
        }
        _create_class(ImagesTextureRenderer2, [
          {
            key: "addFacets",
            value: function addFacets(facets) {
              var texturedFacets = facets, texturedFacetsLength = texturedFacets.length;
              if (texturedFacetsLength > 0) {
                var firstTexturedFacet = (0, _array.first)(texturedFacets), texturedFacet = firstTexturedFacet, imageName = texturedFacet.getImageName(), _$facets = this.facetsMap[imageName];
                (0, _array.add)(_$facets, texturedFacets);
              }
            }
          },
          {
            key: "createBuffers",
            value: function createBuffers(canvas) {
              var _this = this;
              var vertexIndexes = [], vertexNormals = [], vertexPositions = [], vertexTextureCoordinateTuples = [];
              var index = 0;
              this.imageNames.forEach(function(imageName) {
                var facets = _this.facetsMap[imageName];
                facets.forEach(function(facet) {
                  var texturedFacet = facet, facetVertexIndexes = facet.getVertexIndexes(index), facetVertexNormals = facet.getVertexNormals(), facetVertexPositions = facet.getVertexPositions(), texturedFacetTextureCoordinateTuples = texturedFacet.getTextureCoordinateTuples(), texturedFacetVertexTextureCoordinateTuples = texturedFacetTextureCoordinateTuples;
                  (0, _array.add)(vertexIndexes, facetVertexIndexes);
                  (0, _array.add)(vertexNormals, facetVertexNormals);
                  (0, _array.add)(vertexPositions, facetVertexPositions);
                  (0, _array.add)(vertexTextureCoordinateTuples, texturedFacetVertexTextureCoordinateTuples);
                  index++;
                });
                var offset = index * 3;
                _this.offsets.push(offset);
              });
              var rendererData = this.getRendererData();
              rendererData.addVertexIndexes(vertexIndexes);
              rendererData.addVertexNormals(vertexNormals);
              rendererData.addVertexPositions(vertexPositions);
              rendererData.addVertexTextureCoordinateTuples(vertexTextureCoordinateTuples);
              _get(_get_prototype_of(ImagesTextureRenderer2.prototype), "createBuffers", this).call(this, canvas);
            }
          },
          {
            key: "render",
            value: function render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, canvas) {
              var _this = this;
              var program = this.getProgram();
              canvas.useProgram(program);
              this.bindBuffers(canvas);
              var renderer = this;
              canvas.render(renderer, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
              var start, finish = 0;
              this.offsets.forEach(function(offset, index) {
                start = finish;
                finish = offset;
                _this.useTexture(index, canvas);
                canvas.drawElements(start, finish);
              });
            }
          }
        ], [
          {
            key: "fromImagesImageNamesAndImageTiling",
            value: function fromImagesImageNamesAndImageTiling(images, imageNames, imageTiling, canvas) {
              var offsets = [], facetsMap = {};
              images.forEach(function(image, index) {
                var facets = [], repeat = imageTiling, imageName = imageNames[index];
                facetsMap[imageName] = facets;
                canvas.createTexture(image, index, repeat);
              });
              var imagesTextureRenderer = _texture.default.fromNothing(ImagesTextureRenderer2, canvas, imageNames, facetsMap, offsets);
              return imagesTextureRenderer;
            }
          }
        ]);
        return ImagesTextureRenderer2;
      }(_texture.default);
    }
  });

  // lib/renderer/texture/imageMap.js
  var require_imageMap = __commonJS({
    "lib/renderer/texture/imageMap.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return ImageMapTextureRenderer;
        }
      });
      var _texture = /* @__PURE__ */ _interop_require_default(require_texture4());
      var _array = require_array2();
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _call_super(_this, derived, args) {
        derived = _get_prototype_of(derived);
        return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get(target, property, receiver) {
        if (typeof Reflect !== "undefined" && Reflect.get) {
          _get = Reflect.get;
        } else {
          _get = function get(target2, property2, receiver2) {
            var base = _super_prop_base(target2, property2);
            if (!base)
              return;
            var desc = Object.getOwnPropertyDescriptor(base, property2);
            if (desc.get) {
              return desc.get.call(receiver2 || target2);
            }
            return desc.value;
          };
        }
        return _get(target, property, receiver || target);
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _super_prop_base(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
          object = _get_prototype_of(object);
          if (object === null)
            break;
        }
        return object;
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _is_native_reflect_construct() {
        try {
          var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (_) {
        }
        return (_is_native_reflect_construct = function() {
          return !!result;
        })();
      }
      var ImageMapTextureRenderer = /* @__PURE__ */ function(TextureRenderer) {
        _inherits(ImageMapTextureRenderer2, TextureRenderer);
        function ImageMapTextureRenderer2(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations, imageMapJSON) {
          _class_call_check(this, ImageMapTextureRenderer2);
          var _this;
          _this = _call_super(this, ImageMapTextureRenderer2, [
            facets,
            program,
            rendererData,
            rendererBuffers,
            uniformLocations,
            attributeLocations
          ]);
          _this.imageMapJSON = imageMapJSON;
          return _this;
        }
        _create_class(ImageMapTextureRenderer2, [
          {
            key: "createBuffers",
            value: function createBuffers(canvas) {
              var _this = this;
              var facets = this.getFacets(), vertexIndexes = [], vertexNormals = [], vertexPositions = [], vertexTextureCoordinateTuples = [];
              facets.forEach(function(facet, index) {
                var texturedFacet = facet, facetVertexIndexes = facet.getVertexIndexes(index), facetVertexNormals = facet.getVertexNormals(), facetVertexPositions = facet.getVertexPositions(), mappedTextureCoordinateTuples = texturedFacet.getMappedTextureCoordinateTuples(_this.imageMapJSON), texturedFacetVertexTextureCoordinateTuples = mappedTextureCoordinateTuples;
                (0, _array.add)(vertexIndexes, facetVertexIndexes);
                (0, _array.add)(vertexNormals, facetVertexNormals);
                (0, _array.add)(vertexPositions, facetVertexPositions);
                (0, _array.add)(vertexTextureCoordinateTuples, texturedFacetVertexTextureCoordinateTuples);
              });
              var rendererData = this.getRendererData();
              rendererData.addVertexIndexes(vertexIndexes);
              rendererData.addVertexNormals(vertexNormals);
              rendererData.addVertexPositions(vertexPositions);
              rendererData.addVertexTextureCoordinateTuples(vertexTextureCoordinateTuples);
              _get(_get_prototype_of(ImageMapTextureRenderer2.prototype), "createBuffers", this).call(this, canvas);
            }
          },
          {
            key: "bindBuffers",
            value: function bindBuffers(canvas) {
              var rendererBuffers = this.getRendererBuffers(), vertexNormalAttributeLocation = this.getVertexNormalAttributeLocation(), vertexPositionAttributeLocation = this.getVertexPositionAttributeLocation(), textureCoordinateAttributeLocation = this.getTextureCoordinateAttributeLocation();
              rendererBuffers.bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, textureCoordinateAttributeLocation, canvas);
            }
          },
          {
            key: "useTexture",
            value: function useTexture(index, canvas) {
              var uniformLocations = this.getUniformLocations(), samplerUniformLocation = uniformLocations.getSamplerUniformLocation(), samplerUniformLocationIntegerValue = index;
              canvas.setUniformLocationIntegerValue(samplerUniformLocation, samplerUniformLocationIntegerValue);
            }
          },
          {
            key: "render",
            value: function render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, canvas) {
              var program = this.getProgram();
              canvas.useProgram(program);
              this.bindBuffers(canvas);
              var renderer = this;
              canvas.render(renderer, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
              var rendererData = this.getRendererData(), count = rendererData.getCount(), index = 0, start = 0, finish = count;
              this.useTexture(index, canvas);
              canvas.drawElements(start, finish);
            }
          }
        ], [
          {
            key: "fromImageMapAndImageMapJSON",
            value: function fromImageMapAndImageMapJSON(imageMap, imageMapJSON, canvas) {
              var image = imageMap, index = 0, repeat = false;
              canvas.createTexture(image, index, repeat);
              var imageMapTextureRenderer = _texture.default.fromNothing(ImageMapTextureRenderer2, canvas, imageMapJSON);
              return imageMapTextureRenderer;
            }
          }
        ]);
        return ImageMapTextureRenderer2;
      }(_texture.default);
    }
  });

  // lib/element/part.js
  var require_part = __commonJS({
    "lib/element/part.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return Part;
        }
      });
      var _mask = /* @__PURE__ */ _interop_require_default(require_mask());
      var _element = /* @__PURE__ */ _interop_require_default(require_element());
      var _colour = /* @__PURE__ */ _interop_require_default(require_colour4());
      var _images = /* @__PURE__ */ _interop_require_default(require_images());
      var _imageMap = /* @__PURE__ */ _interop_require_default(require_imageMap());
      var _element1 = require_element2();
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _call_super(_this, derived, args) {
        derived = _get_prototype_of(derived);
        return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _construct(Parent, args, Class) {
        if (_is_native_reflect_construct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function construct(Parent2, args2, Class2) {
            var a = [
              null
            ];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2)
              _set_prototype_of(instance, Class2.prototype);
            return instance;
          };
        }
        return _construct.apply(null, arguments);
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _is_native_function(fn) {
        return Function.toString.call(fn).indexOf("[native code]") !== -1;
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _wrap_native_super(Class) {
        var _cache = typeof Map === "function" ? new Map() : void 0;
        _wrap_native_super = function wrapNativeSuper(Class2) {
          if (Class2 === null || !_is_native_function(Class2))
            return Class2;
          if (typeof Class2 !== "function") {
            throw new TypeError("Super expression must either be null or a function");
          }
          if (typeof _cache !== "undefined") {
            if (_cache.has(Class2))
              return _cache.get(Class2);
            _cache.set(Class2, Wrapper);
          }
          function Wrapper() {
            return _construct(Class2, arguments, _get_prototype_of(this).constructor);
          }
          Wrapper.prototype = Object.create(Class2.prototype, {
            constructor: {
              value: Wrapper,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          return _set_prototype_of(Wrapper, Class2);
        };
        return _wrap_native_super(Class);
      }
      function _is_native_reflect_construct() {
        try {
          var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (_) {
        }
        return (_is_native_reflect_construct = function() {
          return !!result;
        })();
      }
      var Part = /* @__PURE__ */ function(Element) {
        _inherits(Part2, Element);
        function Part2(images, imageMap, imageNames, imageTiling, imageMapJSON, colourRenderer, textureRenderer) {
          _class_call_check(this, Part2);
          var _this;
          _this = _call_super(this, Part2);
          _this.images = images;
          _this.imageMap = imageMap;
          _this.imageNames = imageNames;
          _this.imageTiling = imageTiling;
          _this.imageMapJSON = imageMapJSON;
          _this.colourRenderer = colourRenderer;
          _this.textureRenderer = textureRenderer;
          return _this;
        }
        _create_class(Part2, [
          {
            key: "initialise",
            value: function initialise(canvas, marginOfError) {
              var colourRenderer = _colour.default.fromNothing(canvas), childElements = this.getChildElements(), masks = (0, _element1.elementsFromChildElements)(childElements, _mask.default);
              var textureRenderer = null;
              if (this.images !== null) {
                var imagesTextureRenderer = _images.default.fromImagesImageNamesAndImageTiling(this.images, this.imageNames, this.imageTiling, canvas);
                textureRenderer = imagesTextureRenderer;
              }
              if (this.imageMap !== null) {
                var imageMapTextureRenderer = _imageMap.default.fromImageMapAndImageMapJSON(this.imageMap, this.imageMapJSON, canvas);
                textureRenderer = imageMapTextureRenderer;
              }
              childElements.forEach(function(childElement) {
                childElement.createFacets(marginOfError);
              });
              childElements.forEach(function(childElement) {
                childElement.maskFacets(masks, marginOfError);
              });
              childElements.forEach(function(childElement) {
                childElement.addFacets(colourRenderer, textureRenderer);
              });
              if (colourRenderer !== null) {
                colourRenderer.createBuffers(canvas);
              }
              if (textureRenderer !== null) {
                textureRenderer.createBuffers(canvas);
              }
              this.colourRenderer = colourRenderer;
              this.textureRenderer = textureRenderer;
            }
          },
          {
            key: "render",
            value: function render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, canvas) {
              this.colourRenderer && this.colourRenderer.render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, canvas);
              this.textureRenderer && this.textureRenderer.render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, canvas);
            }
          }
        ], [
          {
            key: "fromProperties",
            value: function fromProperties(properties) {
              var _properties_images = properties.images, images = _properties_images === void 0 ? null : _properties_images, _properties_imageMap = properties.imageMap, imageMap = _properties_imageMap === void 0 ? null : _properties_imageMap, _properties_imageNames = properties.imageNames, imageNames = _properties_imageNames === void 0 ? null : _properties_imageNames, _properties_imageTiling = properties.imageTiling, imageTiling = _properties_imageTiling === void 0 ? false : _properties_imageTiling, _properties_imageMapJSON = properties.imageMapJSON, imageMapJSON = _properties_imageMapJSON === void 0 ? null : _properties_imageMapJSON, colourRenderer = null, textureRenderer = null, part = _element.default.fromProperties(Part2, properties, images, imageMap, imageNames, imageTiling, imageMapJSON, colourRenderer, textureRenderer);
              return part;
            }
          }
        ]);
        return Part2;
      }(_wrap_native_super(_element.default));
    }
  });

  // lib/element/camera.js
  var require_camera = __commonJS({
    "lib/element/camera.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return Camera;
        }
      });
      var _element = /* @__PURE__ */ _interop_require_default(require_element());
      var _constants = require_constants();
      var _defaults = require_defaults();
      function _array_like_to_array(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _array_without_holes(arr) {
        if (Array.isArray(arr))
          return _array_like_to_array(arr);
      }
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _call_super(_this, derived, args) {
        derived = _get_prototype_of(derived);
        return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _construct(Parent, args, Class) {
        if (_is_native_reflect_construct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function construct(Parent2, args2, Class2) {
            var a = [
              null
            ];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2)
              _set_prototype_of(instance, Class2.prototype);
            return instance;
          };
        }
        return _construct.apply(null, arguments);
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _is_native_function(fn) {
        return Function.toString.call(fn).indexOf("[native code]") !== -1;
      }
      function _iterable_to_array(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _non_iterable_spread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _to_consumable_array(arr) {
        return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _unsupported_iterable_to_array(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _array_like_to_array(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _array_like_to_array(o, minLen);
      }
      function _wrap_native_super(Class) {
        var _cache = typeof Map === "function" ? new Map() : void 0;
        _wrap_native_super = function wrapNativeSuper(Class2) {
          if (Class2 === null || !_is_native_function(Class2))
            return Class2;
          if (typeof Class2 !== "function") {
            throw new TypeError("Super expression must either be null or a function");
          }
          if (typeof _cache !== "undefined") {
            if (_cache.has(Class2))
              return _cache.get(Class2);
            _cache.set(Class2, Wrapper);
          }
          function Wrapper() {
            return _construct(Class2, arguments, _get_prototype_of(this).constructor);
          }
          Wrapper.prototype = Object.create(Class2.prototype, {
            constructor: {
              value: Wrapper,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          return _set_prototype_of(Wrapper, Class2);
        };
        return _wrap_native_super(Class);
      }
      function _is_native_reflect_construct() {
        try {
          var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (_) {
        }
        return (_is_native_reflect_construct = function() {
          return !!result;
        })();
      }
      var Camera = /* @__PURE__ */ function(Element) {
        _inherits(Camera2, Element);
        function Camera2(zFar, zNear, fieldOfView) {
          _class_call_check(this, Camera2);
          var _this;
          _this = _call_super(this, Camera2);
          _this.zFar = zFar;
          _this.zNear = zNear;
          _this.fieldOfView = fieldOfView;
          return _this;
        }
        _create_class(Camera2, [
          {
            key: "getZFar",
            value: function getZFar() {
              return this.zFar;
            }
          },
          {
            key: "getZNear",
            value: function getZNear() {
              return this.zNear;
            }
          },
          {
            key: "getFieldOfView",
            value: function getFieldOfView() {
              return this.fieldOfView;
            }
          }
        ], [
          {
            key: "fromProperties",
            value: function fromProperties(Class, properties) {
              for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                remainingArguments[_key - 2] = arguments[_key];
              }
              var _Element;
              var _properties_fieldOfView = properties.fieldOfView, fieldOfView = _properties_fieldOfView === void 0 ? _defaults.DEFAULT_FIELD_OF_VIEW : _properties_fieldOfView;
              fieldOfView *= _constants.DEGREES_TO_RADIANS_MULTIPLIER;
              var _properties_zFar = properties.zFar, zFar = _properties_zFar === void 0 ? _defaults.DEFAULT_Z_FAR : _properties_zFar, _properties_zNear = properties.zNear, zNear = _properties_zNear === void 0 ? _defaults.DEFAULT_Z_NEAR : _properties_zNear, camera = (_Element = _element.default).fromProperties.apply(_Element, [
                Class,
                properties,
                zFar,
                zNear,
                fieldOfView
              ].concat(_to_consumable_array(remainingArguments)));
              return camera;
            }
          }
        ]);
        return Camera2;
      }(_wrap_native_super(_element.default));
    }
  });

  // lib/eventTypes.js
  var require_eventTypes = __commonJS({
    "lib/eventTypes.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        KEYDOWN_EVENT_TYPE: function() {
          return KEYDOWN_EVENT_TYPE;
        },
        KEYUP_EVENT_TYPE: function() {
          return KEYUP_EVENT_TYPE;
        },
        MOUSEDOWN_EVENT_TYPE: function() {
          return MOUSEDOWN_EVENT_TYPE;
        },
        MOUSEMOVE_EVENT_TYPE: function() {
          return MOUSEMOVE_EVENT_TYPE;
        },
        MOUSEUP_EVENT_TYPE: function() {
          return MOUSEUP_EVENT_TYPE;
        },
        WHEEL_EVENT_TYPE: function() {
          return WHEEL_EVENT_TYPE;
        }
      });
      var WHEEL_EVENT_TYPE = "wheel";
      var KEYUP_EVENT_TYPE = "keyup";
      var KEYDOWN_EVENT_TYPE = "keydown";
      var MOUSEUP_EVENT_TYPE = "mouseup";
      var MOUSEDOWN_EVENT_TYPE = "mousedown";
      var MOUSEMOVE_EVENT_TYPE = "mousemove";
    }
  });

  // lib/miscellaneous/keyEvents.js
  var require_keyEvents = __commonJS({
    "lib/miscellaneous/keyEvents.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return KeyEvents;
        }
      });
      var _necessary = require_browser();
      var _eventTypes = require_eventTypes();
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _define_property(obj, key, value) {
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
      var ESCAPE_KEY_CODE = _necessary.keyCodes.ESCAPE_KEY_CODE;
      var SHIFT_KEY_CODE = _necessary.keyCodes.SHIFT_KEY_CODE;
      var KeyEvents = /* @__PURE__ */ function() {
        function KeyEvents2(handlers, shiftKeyDown) {
          var _this = this;
          _class_call_check(this, KeyEvents2);
          _define_property(this, "keyUpEventListener", function(event) {
            var keyCode = event.keyCode;
            if (keyCode === SHIFT_KEY_CODE) {
              _this.shiftKeyDown = false;
              _this.handlers.forEach(function(handler) {
                handler(_this.shiftKeyDown);
              });
            }
          });
          _define_property(this, "keyDownEventListener", function(event) {
            var keyCode = event.keyCode;
            if (keyCode === SHIFT_KEY_CODE) {
              _this.shiftKeyDown = true;
              _this.handlers.forEach(function(handler) {
                handler(_this.shiftKeyDown);
              });
            }
          });
          this.handlers = handlers;
          this.shiftKeyDown = shiftKeyDown;
        }
        _create_class(KeyEvents2, [
          {
            key: "getHandlers",
            value: function getHandlers() {
              return this.handlers;
            }
          },
          {
            key: "isShiftKeyDown",
            value: function isShiftKeyDown() {
              return this.shiftKeyDown;
            }
          },
          {
            key: "addShiftKeyHandler",
            value: function addShiftKeyHandler(shiftKeyHandler) {
              var handler = shiftKeyHandler;
              this.handlers.push(handler);
            }
          },
          {
            key: "addEscapeKeyDownHandler",
            value: function addEscapeKeyDownHandler(escapeKeyDownHandler) {
              var documentDOMElement = document.documentElement;
              documentDOMElement.addEventListener(_eventTypes.KEYDOWN_EVENT_TYPE, function(event) {
                var keyCode = event.keyCode;
                if (keyCode === ESCAPE_KEY_CODE) {
                  escapeKeyDownHandler();
                }
              });
            }
          },
          {
            key: "initialise",
            value: function initialise() {
              var documentDOMElement = document.documentElement;
              documentDOMElement.addEventListener(_eventTypes.KEYUP_EVENT_TYPE, this.keyUpEventListener);
              documentDOMElement.addEventListener(_eventTypes.KEYDOWN_EVENT_TYPE, this.keyDownEventListener);
            }
          }
        ], [
          {
            key: "fromNothing",
            value: function fromNothing() {
              var handlers = [], shiftKeyDown = false, keyEvents = new KeyEvents2(handlers, shiftKeyDown);
              return keyEvents;
            }
          }
        ]);
        return KeyEvents2;
      }();
    }
  });

  // lib/miscellaneous/mouseEvents.js
  var require_mouseEvents = __commonJS({
    "lib/miscellaneous/mouseEvents.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return MouseEvents;
        }
      });
      var _eventTypes = require_eventTypes();
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _define_property(obj, key, value) {
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
      var MouseEvents = /* @__PURE__ */ function() {
        function MouseEvents2(handlersMap, mouseDown) {
          var _this = this;
          _class_call_check(this, MouseEvents2);
          _define_property(this, "wheelEventListener", function(event) {
            var handlers = _this.handlersMap[_eventTypes.WHEEL_EVENT_TYPE], mouseWheelDelta = mouseWheelDeltaFromEvent(event);
            handlers.forEach(function(handler) {
              handler(mouseWheelDelta);
            });
            event.preventDefault();
          });
          _define_property(this, "mouseEventListener", function(event, eventType) {
            var handlers = _this.handlersMap[eventType], mouseCoordinates = mouseCoordinatesFromEvent(event);
            handlers.forEach(function(handler) {
              handler(mouseCoordinates, _this.mouseDown);
            });
            event.preventDefault();
          });
          _define_property(this, "mouseUpEventListener", function(event) {
            _this.mouseDown = false;
            _this.mouseEventListener(event, _eventTypes.MOUSEUP_EVENT_TYPE);
          });
          _define_property(this, "mouseDownEventListener", function(event) {
            _this.mouseDown = true;
            _this.mouseEventListener(event, _eventTypes.MOUSEDOWN_EVENT_TYPE);
          });
          _define_property(this, "mouseMoveEventListener", function(event) {
            _this.mouseEventListener(event, _eventTypes.MOUSEMOVE_EVENT_TYPE);
          });
          this.handlersMap = handlersMap;
          this.mouseDown = mouseDown;
        }
        _create_class(MouseEvents2, [
          {
            key: "addMouseUpHandler",
            value: function addMouseUpHandler(mouseUpHandler) {
              var mouseUpHandlers = this.handlersMap[_eventTypes.MOUSEUP_EVENT_TYPE];
              mouseUpHandlers.push(mouseUpHandler);
            }
          },
          {
            key: "addMouseDownHandler",
            value: function addMouseDownHandler(mouseDownHandler) {
              var mouseDownHandlers = this.handlersMap[_eventTypes.MOUSEDOWN_EVENT_TYPE];
              mouseDownHandlers.push(mouseDownHandler);
            }
          },
          {
            key: "addMouseMoveHandler",
            value: function addMouseMoveHandler(mouseMoveHandler) {
              var mouseMoveHandlers = this.handlersMap[_eventTypes.MOUSEMOVE_EVENT_TYPE];
              mouseMoveHandlers.push(mouseMoveHandler);
            }
          },
          {
            key: "addMouseWheelHandler",
            value: function addMouseWheelHandler(mouseWheelHandler) {
              var mouseWheelHandlers = this.handlersMap[_eventTypes.WHEEL_EVENT_TYPE];
              mouseWheelHandlers.push(mouseWheelHandler);
            }
          },
          {
            key: "initialise",
            value: function initialise(canvas) {
              var canvasDOMElement = canvas.getDOMElement();
              this.handlersMap[_eventTypes.WHEEL_EVENT_TYPE] = [];
              this.handlersMap[_eventTypes.MOUSEUP_EVENT_TYPE] = [];
              this.handlersMap[_eventTypes.MOUSEDOWN_EVENT_TYPE] = [];
              this.handlersMap[_eventTypes.MOUSEMOVE_EVENT_TYPE] = [];
              canvasDOMElement.addEventListener(_eventTypes.WHEEL_EVENT_TYPE, this.wheelEventListener);
              canvasDOMElement.addEventListener(_eventTypes.MOUSEUP_EVENT_TYPE, this.mouseUpEventListener);
              canvasDOMElement.addEventListener(_eventTypes.MOUSEDOWN_EVENT_TYPE, this.mouseDownEventListener);
              canvasDOMElement.addEventListener(_eventTypes.MOUSEMOVE_EVENT_TYPE, this.mouseMoveEventListener);
            }
          }
        ], [
          {
            key: "fromNothing",
            value: function fromNothing() {
              var handlersMap = {}, mouseDown = false, mouseEvents = new MouseEvents2(handlersMap, mouseDown);
              return mouseEvents;
            }
          }
        ]);
        return MouseEvents2;
      }();
      function mouseWheelDeltaFromEvent(event) {
        var wheelDelta = event.wheelDelta, mouseWheelDelta = Math.max(-1, Math.min(1, wheelDelta));
        return mouseWheelDelta;
      }
      function mouseCoordinatesFromEvent(event) {
        var target = event.target, clientX = event.clientX, clientY = event.clientY, canvasDOMElement = target, boundingClientRect = canvasDOMElement.getBoundingClientRect(), top = boundingClientRect.top, left = boundingClientRect.left, mouseCoordinates = [
          clientX - left,
          top - clientY
        ];
        return mouseCoordinates;
      }
    }
  });

  // lib/miscellaneous/userInput.js
  var require_userInput = __commonJS({
    "lib/miscellaneous/userInput.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return UserInput;
        }
      });
      var _keyEvents = /* @__PURE__ */ _interop_require_default(require_keyEvents());
      var _mouseEvents = /* @__PURE__ */ _interop_require_default(require_mouseEvents());
      var _vector = require_vector();
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var UserInput = /* @__PURE__ */ function() {
        function UserInput2(handlers, keyEvents, mouseEvents, mouseCoordinates, previousMouseCoordinates) {
          _class_call_check(this, UserInput2);
          this.handlers = handlers;
          this.keyEvents = keyEvents;
          this.mouseEvents = mouseEvents;
          this.mouseCoordinates = mouseCoordinates;
          this.previousMouseCoordinates = previousMouseCoordinates;
        }
        _create_class(UserInput2, [
          {
            key: "mouseMoveHandler",
            value: function mouseMoveHandler(mouseCoordinates, mouseDown, canvas) {
              this.previousMouseCoordinates = this.mouseCoordinates;
              this.mouseCoordinates = mouseCoordinates;
              if (this.previousMouseCoordinates === null) {
                return;
              }
              if (mouseDown) {
                var mouseWheelDelta = 0, shiftKeyDown = this.keyEvents.isShiftKeyDown(), relativeMouseCoordinates = (0, _vector.subtract2)(this.mouseCoordinates, this.previousMouseCoordinates);
                this.handlers.forEach(function(handler) {
                  handler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown);
                });
              }
            }
          },
          {
            key: "mouseWheelHandler",
            value: function mouseWheelHandler(mouseWheelDelta, canvas) {
              var shiftKeyDown = this.keyEvents.isShiftKeyDown(), relativeMouseCoordinates = (0, _vector.zero2)();
              this.handlers.forEach(function(handler) {
                handler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown);
              });
            }
          },
          {
            key: "addUserInputHandler",
            value: function addUserInputHandler(userInputHandler) {
              var handler = userInputHandler;
              this.handlers.push(handler);
            }
          },
          {
            key: "addEscapeKeyDownHandler",
            value: function addEscapeKeyDownHandler(escapeKeyDownHandler) {
              this.keyEvents.addEscapeKeyDownHandler(escapeKeyDownHandler);
            }
          },
          {
            key: "initialise",
            value: function initialise(canvas) {
              var mouseMoveHandler = this.mouseMoveHandler.bind(this), mouseWheelHandler = this.mouseWheelHandler.bind(this);
              this.keyEvents.initialise();
              this.mouseEvents.initialise(canvas);
              this.mouseEvents.addMouseMoveHandler(mouseMoveHandler);
              this.mouseEvents.addMouseWheelHandler(mouseWheelHandler);
            }
          }
        ], [
          {
            key: "fromNothing",
            value: function fromNothing() {
              var handlers = [], keyEvents = _keyEvents.default.fromNothing(), mouseEvents = _mouseEvents.default.fromNothing(), mouseCoordinates = null, previousMouseCoordinates = null, userInput = new UserInput2(handlers, keyEvents, mouseEvents, mouseCoordinates, previousMouseCoordinates);
              return userInput;
            }
          }
        ]);
        return UserInput2;
      }();
    }
  });

  // lib/element/scene.js
  var require_scene = __commonJS({
    "lib/element/scene.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return Scene;
        }
      });
      var _part = /* @__PURE__ */ _interop_require_default(require_part());
      var _camera = /* @__PURE__ */ _interop_require_default(require_camera());
      var _element = /* @__PURE__ */ _interop_require_default(require_element());
      var _userInput = /* @__PURE__ */ _interop_require_default(require_userInput());
      var _vector = require_vector();
      var _defaults = require_defaults();
      var _element1 = require_element2();
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _call_super(_this, derived, args) {
        derived = _get_prototype_of(derived);
        return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _construct(Parent, args, Class) {
        if (_is_native_reflect_construct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function construct(Parent2, args2, Class2) {
            var a = [
              null
            ];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2)
              _set_prototype_of(instance, Class2.prototype);
            return instance;
          };
        }
        return _construct.apply(null, arguments);
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _define_property(obj, key, value) {
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
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _is_native_function(fn) {
        return Function.toString.call(fn).indexOf("[native code]") !== -1;
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _wrap_native_super(Class) {
        var _cache = typeof Map === "function" ? new Map() : void 0;
        _wrap_native_super = function wrapNativeSuper(Class2) {
          if (Class2 === null || !_is_native_function(Class2))
            return Class2;
          if (typeof Class2 !== "function") {
            throw new TypeError("Super expression must either be null or a function");
          }
          if (typeof _cache !== "undefined") {
            if (_cache.has(Class2))
              return _cache.get(Class2);
            _cache.set(Class2, Wrapper);
          }
          function Wrapper() {
            return _construct(Class2, arguments, _get_prototype_of(this).constructor);
          }
          Wrapper.prototype = Object.create(Class2.prototype, {
            constructor: {
              value: Wrapper,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          return _set_prototype_of(Wrapper, Class2);
        };
        return _wrap_native_super(Class);
      }
      function _is_native_reflect_construct() {
        try {
          var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (_) {
        }
        return (_is_native_reflect_construct = function() {
          return !!result;
        })();
      }
      var Scene = /* @__PURE__ */ function(Element) {
        _inherits(Scene2, Element);
        function Scene2(parts, camera, canvas, colour) {
          _class_call_check(this, Scene2);
          var _this;
          _this = _call_super(this, Scene2), _define_property(_this, "escapeKeyDownHandler", function() {
            _this.camera.reset();
            _this.windowResizeHandler();
          }), _define_property(_this, "windowResizeHandler", function() {
            var clientWidth = _this.canvas.getClientWidth(), clientHeight = _this.canvas.getClientHeight(), width = clientWidth, height = clientHeight;
            _this.canvas.resize(width, height);
            var relativeMouseCoordinates = (0, _vector.zero2)(), mouseWheelDelta = 0, shiftKeyDown = false;
            _this.userInputHandler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown);
          }), _define_property(_this, "userInputHandler", function(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown) {
            var render = _this.render.bind(_this);
            _this.camera.update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, _this.canvas, render);
          });
          _this.parts = parts;
          _this.camera = camera;
          _this.canvas = canvas;
          _this.colour = colour;
          return _this;
        }
        _create_class(Scene2, [
          {
            key: "getParts",
            value: function getParts() {
              return this.parts;
            }
          },
          {
            key: "getCamera",
            value: function getCamera() {
              return this.camera;
            }
          },
          {
            key: "getCanvas",
            value: function getCanvas() {
              return this.canvas;
            }
          },
          {
            key: "getColour",
            value: function getColour() {
              return this.colour;
            }
          },
          {
            key: "initialise",
            value: function initialise(canvas, marginOfError) {
              var userInput = _userInput.default.fromNothing();
              this.parts.forEach(function(part) {
                part.initialise(canvas, marginOfError);
              });
              userInput.initialise(canvas);
              userInput.addUserInputHandler(this.userInputHandler);
              userInput.addEscapeKeyDownHandler(this.escapeKeyDownHandler);
              window.onresize = this.windowResizeHandler;
              this.windowResizeHandler();
            }
          },
          {
            key: "render",
            value: function render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
              var _this = this;
              this.canvas.clear(this.colour);
              this.parts.forEach(function(part) {
                part.render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, _this.canvas);
              });
            }
          }
        ], [
          {
            key: "fromProperties",
            value: function fromProperties(properties) {
              var canvas = properties.canvas, childElements = properties.childElements, _properties_backgroundColour = properties.backgroundColour, backgroundColour = _properties_backgroundColour === void 0 ? _defaults.DEFAULT_BACKGROUND_COLOUR : _properties_backgroundColour, parts = (0, _element1.elementsFromChildElements)(childElements, _part.default), camera = (0, _element1.elementFromChildElements)(childElements, _camera.default), colour = backgroundColour, scene = _element.default.fromProperties(Scene2, properties, parts, camera, canvas, colour), marginOfError = _defaults.DEFAULT_MARGIN_OF_ERROR;
              scene.initialise(canvas, marginOfError);
              return scene;
            }
          }
        ]);
        return Scene2;
      }(_wrap_native_super(_element.default));
    }
  });

  // lib/utilities/offsets.js
  var require_offsets = __commonJS({
    "lib/utilities/offsets.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "relativeOffsetsFromAnglesAndDirections", {
        enumerable: true,
        get: function() {
          return relativeOffsetsFromAnglesAndDirections;
        }
      });
      var _matrix = require_matrix2();
      var _vector = require_vector();
      function relativeOffsetsFromAnglesAndDirections(angles, directions) {
        angles = (0, _vector.reflect3)(angles);
        var reverseOrder = true, rotationsMatrix = (0, _matrix.rotationsMatrixFromAngles)(angles, reverseOrder);
        var relativeOffsets = (0, _vector.transform4)(directions, rotationsMatrix);
        relativeOffsets = (0, _vector.truncate4)(relativeOffsets);
        return relativeOffsets;
      }
    }
  });

  // lib/miscellaneous/pan.js
  var require_pan = __commonJS({
    "lib/miscellaneous/pan.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return Pan;
        }
      });
      var _vector = require_vector();
      var _offsets = require_offsets();
      var _constants = require_constants();
      function _array_like_to_array(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _array_without_holes(arr) {
        if (Array.isArray(arr))
          return _array_like_to_array(arr);
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _iterable_to_array(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _non_iterable_spread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _to_consumable_array(arr) {
        return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
      }
      function _unsupported_iterable_to_array(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _array_like_to_array(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _array_like_to_array(o, minLen);
      }
      var Pan = /* @__PURE__ */ function() {
        function Pan2(offsets, mouseWheelDeltaMultiplier, relativeMouseCoordinatesMultiplier) {
          _class_call_check(this, Pan2);
          this.offsets = offsets;
          this.mouseWheelDeltaMultiplier = mouseWheelDeltaMultiplier;
          this.relativeMouseCoordinatesMultiplier = relativeMouseCoordinatesMultiplier;
        }
        _create_class(Pan2, [
          {
            key: "getOffsets",
            value: function getOffsets() {
              return this.offsets;
            }
          },
          {
            key: "getDeltaMultiplier",
            value: function getDeltaMultiplier() {
              return this.mouseWheelDeltaMultiplier;
            }
          },
          {
            key: "getRelativeMouseCoordinatesMultiplier",
            value: function getRelativeMouseCoordinatesMultiplier() {
              return this.relativeMouseCoordinatesMultiplier;
            }
          },
          {
            key: "updateOffsets",
            value: function updateOffsets(relativeMouseCoordinates, mouseWheelDelta, angles) {
              mouseWheelDelta = mouseWheelDelta * this.mouseWheelDeltaMultiplier;
              relativeMouseCoordinates = (0, _vector.scale2)(relativeMouseCoordinates, this.relativeMouseCoordinatesMultiplier);
              var scaledReflectedRelativeMouseCoordinates = (0, _vector.reflect2)((0, _vector.scale2)(relativeMouseCoordinates, 1)), directions = _to_consumable_array(scaledReflectedRelativeMouseCoordinates).concat([
                mouseWheelDelta,
                0
              ]), relativeOffsets = (0, _offsets.relativeOffsetsFromAnglesAndDirections)(angles, directions, 1);
              this.offsets = (0, _vector.add3)(this.offsets, relativeOffsets);
            }
          }
        ], [
          {
            key: "fromInitialOffsetsMouseSensitivityAndMouseWheelSensitivity",
            value: function fromInitialOffsetsMouseSensitivityAndMouseWheelSensitivity(initialOffsets, mouseSensitivity, mouseWheelSensitivity) {
              var offsets = initialOffsets, mouseWheelDeltaMultiplier = _constants.MOUSE_WHEEL_DELTA_MULTIPLIER * mouseWheelSensitivity, relativeMouseCoordinatesMultiplier = _constants.RELATIVE_MOUSE_COORDINATES_MULTIPLIER * mouseSensitivity, pan = new Pan2(offsets, mouseWheelDeltaMultiplier, relativeMouseCoordinatesMultiplier);
              return pan;
            }
          }
        ]);
        return Pan2;
      }();
    }
  });

  // lib/miscellaneous/tilt.js
  var require_tilt = __commonJS({
    "lib/miscellaneous/tilt.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return Tilt;
        }
      });
      var _constants = require_constants();
      var _vector = require_vector();
      function _array_like_to_array(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _array_without_holes(arr) {
        if (Array.isArray(arr))
          return _array_like_to_array(arr);
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _iterable_to_array(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _non_iterable_spread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _to_consumable_array(arr) {
        return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
      }
      function _unsupported_iterable_to_array(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _array_like_to_array(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _array_like_to_array(o, minLen);
      }
      var Tilt = /* @__PURE__ */ function() {
        function Tilt2(angles, clockwise) {
          _class_call_check(this, Tilt2);
          this.angles = angles;
          this.clockwise = clockwise;
        }
        _create_class(Tilt2, [
          {
            key: "getAngles",
            value: function getAngles() {
              return this.angles;
            }
          },
          {
            key: "isClockwise",
            value: function isClockwise() {
              return this.clockwise;
            }
          },
          {
            key: "updateAngles",
            value: function updateAngles(relativeMouseCoordinates) {
              relativeMouseCoordinates = (0, _vector.scale2)(relativeMouseCoordinates, _constants.ANGLES_MULTIPLIER);
              var multiplier = this.clockwise ? 1 : -1, matrix = [
                0,
                +multiplier,
                0,
                -multiplier,
                0,
                0,
                0,
                0,
                0
              ], relativeAngles = (0, _vector.transform3)(_to_consumable_array(relativeMouseCoordinates).concat([
                0
              ]), matrix);
              this.angles = (0, _vector.add3)(this.angles, relativeAngles);
            }
          }
        ], [
          {
            key: "fromInitialAngles",
            value: function fromInitialAngles(initialAngles) {
              var angles = _to_consumable_array(initialAngles).concat([
                0
              ]), clockwise = false, tilt = new Tilt2(angles, clockwise);
              return tilt;
            }
          },
          {
            key: "fromInitialAnglesAndClockwise",
            value: function fromInitialAnglesAndClockwise(initialAngles, clockwise) {
              var angles = _to_consumable_array(initialAngles).concat([
                0
              ]), tilt = new Tilt2(angles, clockwise);
              return tilt;
            }
          }
        ]);
        return Tilt2;
      }();
    }
  });

  // lib/utilities/localStorage.js
  var require_localStorage = __commonJS({
    "lib/utilities/localStorage.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        getJSON: function() {
          return getJSON;
        },
        removeJSON: function() {
          return removeJSON;
        },
        setJSON: function() {
          return setJSON;
        }
      });
      function getJSON(key) {
        var json = null;
        var value = get(key);
        if (value !== null) {
          json = JSON.parse(value);
        }
        return json;
      }
      function setJSON(key, json) {
        var value = JSON.stringify(json);
        set(key, value);
      }
      function removeJSON(key) {
        remove(key);
      }
      function get(kay) {
        var value = localStorage.getItem(kay) || null;
        return value;
      }
      function set(kay, value) {
        localStorage.setItem(kay, value);
      }
      function remove(key) {
        localStorage.removeItem(key);
      }
    }
  });

  // lib/element/camera/gaming.js
  var require_gaming = __commonJS({
    "lib/element/camera/gaming.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return GamingCamera;
        }
      });
      var _pan = /* @__PURE__ */ _interop_require_default(require_pan());
      var _tilt = /* @__PURE__ */ _interop_require_default(require_tilt());
      var _camera = /* @__PURE__ */ _interop_require_default(require_camera());
      var _vector = require_vector();
      var _localStorage = require_localStorage();
      var _constants = require_constants();
      var _defaults = require_defaults();
      var _matrix = require_matrix2();
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _call_super(_this, derived, args) {
        derived = _get_prototype_of(derived);
        return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _is_native_reflect_construct() {
        try {
          var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (_) {
        }
        return (_is_native_reflect_construct = function() {
          return !!result;
        })();
      }
      var GamingCamera = /* @__PURE__ */ function(Camera) {
        _inherits(GamingCamera2, Camera);
        function GamingCamera2(zFar, zNear, fieldOfView, pan, tilt, persist) {
          _class_call_check(this, GamingCamera2);
          var _this;
          _this = _call_super(this, GamingCamera2, [
            zFar,
            zNear,
            fieldOfView
          ]);
          _this.pan = pan;
          _this.tilt = tilt;
          _this.persist = persist;
          return _this;
        }
        _create_class(GamingCamera2, [
          {
            key: "getPan",
            value: function getPan() {
              return this.pan;
            }
          },
          {
            key: "getTilt",
            value: function getTilt() {
              return this.tilt;
            }
          },
          {
            key: "doesPersist",
            value: function doesPersist() {
              return this.persist;
            }
          },
          {
            key: "reset",
            value: function reset() {
              var key = _constants.GAMING_CAMERA;
              (0, _localStorage.removeJSON)(key);
              this.pan = panFromProperties(this.properties);
              this.tilt = tiltFromProperties(this.properties);
            }
          },
          {
            key: "update",
            value: function update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, canvas, render) {
              var mouseWheelMoved = mouseWheelDelta !== 0;
              if (false) {
              } else if (shiftKeyDown || mouseWheelMoved) {
                var angles = this.tilt.getAngles();
                this.pan.updateOffsets(relativeMouseCoordinates, mouseWheelDelta, angles);
              } else {
                this.tilt.updateAngles(relativeMouseCoordinates);
              }
              var camera = this, angles1 = this.tilt.getAngles(), persist = this.doesPersist(), offsets = this.pan.getOffsets();
              if (persist) {
                var key = _constants.GAMING_CAMERA, angles2 = this.tilt.getAngles(), json = {
                  angles: angles2,
                  offsets
                };
                (0, _localStorage.setJSON)(key, json);
              }
              var offsetsMatrix = (0, _matrix.offsetsMatrixFromOffsets)(offsets), positionMatrix = (0, _matrix.positionMatrixFromNothing)(), rotationsMatrix = (0, _matrix.rotationsMatrixFromAngles)(angles1), projectionMatrix = (0, _matrix.projectionMatrixFromCameraAndCanvas)(camera, canvas), normalsMatrix = (0, _matrix.normalsMatrixFromRotationsMatrix)(rotationsMatrix);
              render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
            }
          }
        ], [
          {
            key: "fromProperties",
            value: function fromProperties(properties) {
              var _properties_persist = properties.persist, persist = _properties_persist === void 0 ? _defaults.DEFAULT_PERSIST : _properties_persist, pan = panFromProperties(properties), tilt = tiltFromProperties(properties), gamingCamera = _camera.default.fromProperties(GamingCamera2, properties, pan, tilt, persist);
              return gamingCamera;
            }
          }
        ]);
        return GamingCamera2;
      }(_camera.default);
      function panFromProperties(properties) {
        var _properties_persist = properties.persist, persist = _properties_persist === void 0 ? _defaults.DEFAULT_PERSIST : _properties_persist, _properties_mouseSensitivity = properties.mouseSensitivity, mouseSensitivity = _properties_mouseSensitivity === void 0 ? _defaults.DEFAULT_MOUSE_SENSITIVITY : _properties_mouseSensitivity, _properties_mouseWheelSensitivity = properties.mouseWheelSensitivity, mouseWheelSensitivity = _properties_mouseWheelSensitivity === void 0 ? _defaults.DEFAULT_MOUSE_WHEEL_SENSITIVITY : _properties_mouseWheelSensitivity;
        var _properties_initialPosition = properties.initialPosition, initialPosition = _properties_initialPosition === void 0 ? _defaults.DEFAULT_INITIAL_POSITION : _properties_initialPosition;
        var initialOffsets = (0, _vector.scale3)(initialPosition, _constants.INVERT_MULTIPLIER);
        if (persist) {
          var key = _constants.GAMING_CAMERA, json = (0, _localStorage.getJSON)(key);
          if (json !== null) {
            var offsets = json.offsets;
            initialOffsets = offsets;
          }
        }
        var pan = _pan.default.fromInitialOffsetsMouseSensitivityAndMouseWheelSensitivity(initialOffsets, mouseSensitivity, mouseWheelSensitivity);
        return pan;
      }
      function tiltFromProperties(properties) {
        var _properties_persist = properties.persist, persist = _properties_persist === void 0 ? _defaults.DEFAULT_PERSIST : _properties_persist;
        var _properties_initialAngles = properties.initialAngles, initialAngles = _properties_initialAngles === void 0 ? _defaults.DEFAULT_INITIAL_ANGLES : _properties_initialAngles;
        initialAngles = (0, _vector.scale2)(initialAngles, _constants.DEGREES_TO_RADIANS_MULTIPLIER);
        if (persist) {
          var key = _constants.GAMING_CAMERA, json = (0, _localStorage.getJSON)(key);
          if (json !== null) {
            var angles = json.angles;
            initialAngles = angles;
          }
        }
        var clockwise = true, tilt = _tilt.default.fromInitialAnglesAndClockwise(initialAngles, clockwise);
        return tilt;
      }
    }
  });

  // lib/miscellaneous/zoom.js
  var require_zoom = __commonJS({
    "lib/miscellaneous/zoom.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return Zoom;
        }
      });
      var _constants = require_constants();
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      var Zoom = /* @__PURE__ */ function() {
        function Zoom2(distance, minimumDistance, mouseWheelDeltaMultiplier) {
          _class_call_check(this, Zoom2);
          this.distance = distance;
          this.minimumDistance = minimumDistance;
          this.mouseWheelDeltaMultiplier = mouseWheelDeltaMultiplier;
        }
        _create_class(Zoom2, [
          {
            key: "getDistance",
            value: function getDistance() {
              return this.distance;
            }
          },
          {
            key: "getMinimumDistance",
            value: function getMinimumDistance() {
              return this.minimumDistance;
            }
          },
          {
            key: "getDeltaMultiplier",
            value: function getDeltaMultiplier() {
              return this.mouseWheelDeltaMultiplier;
            }
          },
          {
            key: "updateDistance",
            value: function updateDistance(mouseWheelDelta) {
              mouseWheelDelta = mouseWheelDelta * this.mouseWheelDeltaMultiplier;
              this.distance = this.distance - mouseWheelDelta;
              this.distance = Math.max(this.minimumDistance, this.distance);
            }
          }
        ], [
          {
            key: "fromInitialDistanceAndMouseWheelSensitivity",
            value: function fromInitialDistanceAndMouseWheelSensitivity(initialDistance, mouseWheelSensitivity) {
              var distance = initialDistance, minimumDistance = _constants.MINIMUM_DISTANCE, mouseWheelDeltaMultiplier = _constants.MOUSE_WHEEL_DELTA_MULTIPLIER * mouseWheelSensitivity, zoom = new Zoom2(distance, minimumDistance, mouseWheelDeltaMultiplier);
              return zoom;
            }
          }
        ]);
        return Zoom2;
      }();
    }
  });

  // lib/element/camera/design.js
  var require_design = __commonJS({
    "lib/element/camera/design.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return DesignCamera;
        }
      });
      var _pan = /* @__PURE__ */ _interop_require_default(require_pan());
      var _tilt = /* @__PURE__ */ _interop_require_default(require_tilt());
      var _zoom = /* @__PURE__ */ _interop_require_default(require_zoom());
      var _camera = /* @__PURE__ */ _interop_require_default(require_camera());
      var _vector = require_vector();
      var _localStorage = require_localStorage();
      var _constants = require_constants();
      var _defaults = require_defaults();
      var _matrix = require_matrix2();
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _call_super(_this, derived, args) {
        derived = _get_prototype_of(derived);
        return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _is_native_reflect_construct() {
        try {
          var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (_) {
        }
        return (_is_native_reflect_construct = function() {
          return !!result;
        })();
      }
      var DesignCamera = /* @__PURE__ */ function(Camera) {
        _inherits(DesignCamera2, Camera);
        function DesignCamera2(zFar, zNear, fieldOfView, pan, tilt, zoom, persist) {
          _class_call_check(this, DesignCamera2);
          var _this;
          _this = _call_super(this, DesignCamera2, [
            zFar,
            zNear,
            fieldOfView
          ]);
          _this.pan = pan;
          _this.tilt = tilt;
          _this.zoom = zoom;
          _this.persist = persist;
          return _this;
        }
        _create_class(DesignCamera2, [
          {
            key: "getPan",
            value: function getPan() {
              return this.pan;
            }
          },
          {
            key: "getTilt",
            value: function getTilt() {
              return this.tilt;
            }
          },
          {
            key: "getZoom",
            value: function getZoom() {
              return this.zoom;
            }
          },
          {
            key: "doesPersist",
            value: function doesPersist() {
              return this.persist;
            }
          },
          {
            key: "reset",
            value: function reset() {
              var key = _constants.DESIGN_CAMERA;
              (0, _localStorage.removeJSON)(key);
              this.pan = panFromProperties(this.properties);
              this.tilt = tiltFromProperties(this.properties);
              this.zoom = zoomFromProperties(this.properties);
            }
          },
          {
            key: "update",
            value: function update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, canvas, render) {
              var mouseWheelMoved = mouseWheelDelta !== 0;
              if (false) {
              } else if (shiftKeyDown) {
                var angles = this.tilt.getAngles();
                this.pan.updateOffsets(relativeMouseCoordinates, mouseWheelDelta, angles);
              } else if (mouseWheelMoved) {
                this.zoom.updateDistance(mouseWheelDelta);
              } else {
                this.tilt.updateAngles(relativeMouseCoordinates);
              }
              var camera = this, angles1 = this.tilt.getAngles(), persist = this.doesPersist(), offsets = this.pan.getOffsets(), distance = this.zoom.getDistance();
              if (persist) {
                var key = _constants.DESIGN_CAMERA, json = {
                  angles: angles1,
                  offsets,
                  distance
                };
                (0, _localStorage.setJSON)(key, json);
              }
              var offsetsMatrix = (0, _matrix.offsetsMatrixFromOffsets)(offsets), positionMatrix = (0, _matrix.positionMatrixFromDistance)(distance), rotationsMatrix = (0, _matrix.rotationsMatrixFromAngles)(angles1), projectionMatrix = (0, _matrix.projectionMatrixFromCameraAndCanvas)(camera, canvas), normalsMatrix = (0, _matrix.normalsMatrixFromRotationsMatrix)(rotationsMatrix);
              render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
            }
          }
        ], [
          {
            key: "fromProperties",
            value: function fromProperties(properties) {
              var _properties_persist = properties.persist, persist = _properties_persist === void 0 ? _defaults.DEFAULT_PERSIST : _properties_persist, pan = panFromProperties(properties), tilt = tiltFromProperties(properties), zoom = zoomFromProperties(properties), designCamera = _camera.default.fromProperties(DesignCamera2, properties, pan, tilt, zoom, persist);
              return designCamera;
            }
          }
        ]);
        return DesignCamera2;
      }(_camera.default);
      function panFromProperties(properties) {
        var _properties_persist = properties.persist, persist = _properties_persist === void 0 ? _defaults.DEFAULT_PERSIST : _properties_persist, _properties_mouseSensitivity = properties.mouseSensitivity, mouseSensitivity = _properties_mouseSensitivity === void 0 ? _defaults.DEFAULT_MOUSE_SENSITIVITY : _properties_mouseSensitivity, _properties_mouseWheelSensitivity = properties.mouseWheelSensitivity, mouseWheelSensitivity = _properties_mouseWheelSensitivity === void 0 ? _defaults.DEFAULT_MOUSE_WHEEL_SENSITIVITY : _properties_mouseWheelSensitivity;
        var _properties_initialOffsets = properties.initialOffsets, initialOffsets = _properties_initialOffsets === void 0 ? _defaults.DEFAULT_INITIAL_OFFSETS : _properties_initialOffsets;
        if (persist) {
          var key = _constants.DESIGN_CAMERA, json = (0, _localStorage.getJSON)(key);
          if (json !== null) {
            var offsets = json.offsets;
            initialOffsets = offsets;
          }
        }
        var pan = _pan.default.fromInitialOffsetsMouseSensitivityAndMouseWheelSensitivity(initialOffsets, mouseSensitivity, mouseWheelSensitivity);
        return pan;
      }
      function tiltFromProperties(properties) {
        var _properties_persist = properties.persist, persist = _properties_persist === void 0 ? _defaults.DEFAULT_PERSIST : _properties_persist;
        var _properties_initialAngles = properties.initialAngles, initialAngles = _properties_initialAngles === void 0 ? _defaults.DEFAULT_INITIAL_ANGLES : _properties_initialAngles;
        initialAngles = (0, _vector.scale2)(initialAngles, _constants.DEGREES_TO_RADIANS_MULTIPLIER);
        if (persist) {
          var key = _constants.DESIGN_CAMERA, json = (0, _localStorage.getJSON)(key);
          if (json !== null) {
            var angles = json.angles;
            initialAngles = angles;
          }
        }
        var tilt = _tilt.default.fromInitialAngles(initialAngles);
        return tilt;
      }
      function zoomFromProperties(properties) {
        var _properties_persist = properties.persist, persist = _properties_persist === void 0 ? _defaults.DEFAULT_PERSIST : _properties_persist, _properties_mouseWheelSensitivity = properties.mouseWheelSensitivity, mouseWheelSensitivity = _properties_mouseWheelSensitivity === void 0 ? _defaults.DEFAULT_MOUSE_WHEEL_SENSITIVITY : _properties_mouseWheelSensitivity;
        var _properties_initialDistance = properties.initialDistance, initialDistance = _properties_initialDistance === void 0 ? _defaults.DEFAULT_INITIAL_DISTANCE : _properties_initialDistance;
        if (persist) {
          var key = _constants.DESIGN_CAMERA, json = (0, _localStorage.getJSON)(key);
          if (json !== null) {
            var distance = json.distance;
            initialDistance = distance;
          }
        }
        var zoom = _zoom.default.fromInitialDistanceAndMouseWheelSensitivity(initialDistance, mouseWheelSensitivity);
        return zoom;
      }
    }
  });

  // lib/utilities/preload.js
  var require_preload = __commonJS({
    "lib/utilities/preload.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        default: function() {
          return _default;
        },
        preloadImageMap: function() {
          return preloadImageMap;
        },
        preloadImages: function() {
          return preloadImages;
        }
      });
      var _necessary = require_browser();
      var _constants = require_constants();
      var forEach = _necessary.asynchronousUtilities.forEach;
      function preloadImages(host, imageNames, imageDirectoryURI, callback) {
        var images = [], context = {
          images
        };
        forEach(imageNames, function(imageName, next, done2, context2) {
          var onload = function onload2() {
            images.push(image);
            next();
          };
          var src = "".concat(host).concat(imageDirectoryURI, "/").concat(imageName), image = new Image(), crossOrigin = _constants.ANONYMOUS;
          Object.assign(image, {
            src,
            onload,
            crossOrigin
          });
        }, done, context);
        function done() {
          var images2 = context.images;
          callback(images2, imageNames);
        }
      }
      function preloadImageMap(host, imageMapURI, imageMapJSON, callback) {
        var src = "".concat(host).concat(imageMapURI), imageMap = new Image(), crossOrigin = _constants.ANONYMOUS;
        Object.assign(imageMap, {
          src,
          onload,
          crossOrigin
        });
        function onload(event) {
          callback(imageMap, imageMapJSON);
        }
      }
      var _default = {
        preloadImages,
        preloadImageMap
      };
    }
  });

  // lib/primitive/normal.js
  var require_normal = __commonJS({
    "lib/primitive/normal.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return Normal;
        }
      });
      var _array = require_array2();
      var _vector = require_vector();
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      var Normal = /* @__PURE__ */ function() {
        function Normal2(extent) {
          _class_call_check(this, Normal2);
          this.extent = extent;
        }
        _create_class(Normal2, [
          {
            key: "getExtent",
            value: function getExtent() {
              return this.extent;
            }
          },
          {
            key: "clone",
            value: function clone() {
              var extent = cloneExtent(this.extent), normal = new Normal2(extent);
              return normal;
            }
          }
        ], [
          {
            key: "fromVertices",
            value: function fromVertices(vertices) {
              var firstVertex = (0, _array.first)(vertices), secondVertex = (0, _array.second)(vertices), thirdVertex = (0, _array.third)(vertices), firstPosition = firstVertex.getPosition(), secondPosition = secondVertex.getPosition(), thirdPosition = thirdVertex.getPosition(), firstExtent = (0, _vector.subtract3)(secondPosition, firstPosition), secondExtent = (0, _vector.subtract3)(thirdPosition, firstPosition), extent = (0, _vector.normalise3)((0, _vector.cross3)(firstExtent, secondExtent)), normal = new Normal2(extent);
              return normal;
            }
          }
        ]);
        return Normal2;
      }();
      function cloneExtent(extent) {
        return extent.slice();
      }
    }
  });

  // lib/primitive/vertex.js
  var require_vertex = __commonJS({
    "lib/primitive/vertex.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return Vertex;
        }
      });
      var _rotation = require_rotation();
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      var Vertex = /* @__PURE__ */ function() {
        function Vertex2(position) {
          _class_call_check(this, Vertex2);
          this.position = position;
        }
        _create_class(Vertex2, [
          {
            key: "getPosition",
            value: function getPosition() {
              return this.position;
            }
          },
          {
            key: "rotate",
            value: function rotate(rotationQuaternion) {
              this.position = (0, _rotation.rotatePosition)(this.position, rotationQuaternion);
            }
          },
          {
            key: "applyTransform",
            value: function applyTransform(transform) {
              this.position = transform(this.position);
            }
          },
          {
            key: "clone",
            value: function clone() {
              var position = this.position.slice(), vertex = new Vertex2(position);
              return vertex;
            }
          }
        ], [
          {
            key: "fromPosition",
            value: function fromPosition(position) {
              var vertex = new Vertex2(position);
              return vertex;
            }
          },
          {
            key: "fromCoordinateTuple",
            value: function fromCoordinateTuple(coordinateTuple) {
              var position = coordinateTuple.slice(), vertex = new Vertex2(position);
              return vertex;
            }
          }
        ]);
        return Vertex2;
      }();
    }
  });

  // lib/utilities/facet.js
  var require_facet = __commonJS({
    "lib/utilities/facet.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        calculateArea: function() {
          return calculateArea;
        },
        calculateEdges: function() {
          return calculateEdges;
        },
        calculateNormal: function() {
          return calculateNormal;
        },
        cloneEdges: function() {
          return cloneEdges;
        },
        cloneNormal: function() {
          return cloneNormal;
        },
        cloneVertices: function() {
          return cloneVertices;
        }
      });
      var _constants = require_constants();
      var _array = require_array2();
      var _vector = require_vector();
      function cloneEdges(edges) {
        edges = edges.map(function(edge) {
          edge = edge.clone();
          return edge;
        });
        return edges;
      }
      function cloneNormal(normal) {
        normal = normal.clone();
        return normal;
      }
      function cloneVertices(vertices) {
        vertices = vertices.map(function(vertex) {
          vertex = vertex.clone();
          return vertex;
        });
        return vertices;
      }
      function calculateEdges(vertices, Edge) {
        var edges = vertices.map(function(vertex, index) {
          var startIndex = index, endIndex = (startIndex + 1) % _constants.VERTICES_LENGTH, startVertex = vertices[startIndex], endVertex = vertices[endIndex], edge = Edge.fromStartVertexAndEndVertex(startVertex, endVertex);
          return edge;
        });
        return edges;
      }
      function calculateNormal(vertices, Normal) {
        var normal = Normal.fromVertices(vertices);
        return normal;
      }
      function calculateArea(vertices) {
        var firstVertex = (0, _array.first)(vertices), secondVertex = (0, _array.second)(vertices), thirdVertex = (0, _array.third)(vertices), firstVertexPosition = firstVertex.getPosition(), secondVertexPosition = secondVertex.getPosition(), thirdVertexPosition = thirdVertex.getPosition(), firstExtent = (0, _vector.subtract3)(secondVertexPosition, firstVertexPosition), secondExtent = (0, _vector.subtract3)(thirdVertexPosition, firstVertexPosition), area = (0, _vector.length3)((0, _vector.cross3)(firstExtent, secondExtent)) / 2;
        return area;
      }
    }
  });

  // lib/primitive/facet.js
  var require_facet2 = __commonJS({
    "lib/primitive/facet.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return Facet;
        }
      });
      var _edge = /* @__PURE__ */ _interop_require_default(require_edge());
      var _normal = /* @__PURE__ */ _interop_require_default(require_normal());
      var _vertex = /* @__PURE__ */ _interop_require_default(require_vertex());
      var _array = require_array2();
      var _constants = require_constants();
      var _facet = require_facet();
      var _midPoint = require_midPoint();
      var _intersection = require_intersection();
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var Facet = /* @__PURE__ */ function() {
        function Facet2(vertices, normal, edges) {
          _class_call_check(this, Facet2);
          this.vertices = vertices;
          this.normal = normal;
          this.edges = edges;
        }
        _create_class(Facet2, [
          {
            key: "getVertices",
            value: function getVertices() {
              return this.vertices;
            }
          },
          {
            key: "getNormal",
            value: function getNormal() {
              return this.normal;
            }
          },
          {
            key: "getEdges",
            value: function getEdges() {
              return this.edges;
            }
          },
          {
            key: "getVertexPositions",
            value: function getVertexPositions() {
              var vertexPositions = this.vertices.map(function(vertex) {
                var vertexPosition = vertex.getPosition();
                return vertexPosition;
              });
              return vertexPositions;
            }
          },
          {
            key: "getVertexNormals",
            value: function getVertexNormals() {
              var normalExtent = this.normal.getExtent(), vertexNormal = normalExtent, vertexNormals = [
                vertexNormal,
                vertexNormal,
                vertexNormal
              ];
              return vertexNormals;
            }
          },
          {
            key: "getVertexIndexes",
            value: function getVertexIndexes(index) {
              var vertexIndex = index * 3, vertexIndexes = [
                vertexIndex + 0,
                vertexIndex + 1,
                vertexIndex + 2
              ];
              return vertexIndexes;
            }
          },
          {
            key: "isMasked",
            value: function isMasked(maskingFacet) {
              var maskingEdges = maskingFacet.getMaskingEdges(), midPointPosition = (0, _midPoint.calculateMidPointPosition)(this.vertices), midPointPositionToOneSideOfMaskingEdges = (0, _midPoint.isMidPointPositionToOneSideOfMaskingEdges)(midPointPosition, maskingEdges), masked = midPointPositionToOneSideOfMaskingEdges;
              return masked;
            }
          },
          {
            key: "permute",
            value: function permute(places) {
              this.vertices = (0, _array.permute)(this.vertices, places);
              this.normal = (0, _facet.calculateNormal)(this.vertices, _normal.default);
              this.edges = (0, _facet.calculateEdges)(this.vertices, _edge.default);
            }
          },
          {
            key: "rotate",
            value: function rotate(rotationQuaternion) {
              this.vertices.forEach(function(vertex) {
                vertex.rotate(rotationQuaternion);
              });
              this.normal = (0, _facet.calculateNormal)(this.vertices, _normal.default);
              this.edges = (0, _facet.calculateEdges)(this.vertices, _edge.default);
            }
          },
          {
            key: "applyTransform",
            value: function applyTransform(transform) {
              this.vertices.forEach(function(vertex) {
                vertex.applyTransform(transform);
              });
              this.normal = (0, _facet.calculateNormal)(this.vertices, _normal.default);
              this.edges = (0, _facet.calculateEdges)(this.vertices, _edge.default);
            }
          },
          {
            key: "splitWithIntersections",
            value: function splitWithIntersections(intersections, smallerFacets, marginOfError) {
              var nonNullIntersections = (0, _intersection.calculateNonNullIntersections)(intersections), nonNullIntersectionsLength = nonNullIntersections.length;
              switch (nonNullIntersectionsLength) {
                case 2:
                  this.splitWithTwoNonNullIntersections(intersections, smallerFacets, marginOfError);
                  break;
                case 1:
                  this.splitWithOneNonNullIntersection(intersections, smallerFacets, marginOfError);
                  break;
                case 0:
                  this.splitWithNoNonNullIntersections(intersections, smallerFacets, marginOfError);
                  break;
              }
            }
          },
          {
            key: "splitWithTwoNonNullIntersections",
            value: function splitWithTwoNonNullIntersections(intersections, smallerFacets, marginOfError) {
              var nullIntersectionIndex = (0, _intersection.calculateNullIntersectionIndex)(intersections), places = (_constants.VERTICES_LENGTH - nullIntersectionIndex) % _constants.VERTICES_LENGTH;
              intersections = (0, _array.permute)(intersections, places);
              intersections = intersections.slice(1);
              this.permute(places);
              var startVertexPositionIndexes = [
                1,
                2
              ], endVertexPositionIndexes = [
                2,
                0
              ], indexTuples = [
                [
                  0,
                  1,
                  3
                ],
                [
                  3,
                  4,
                  0
                ],
                [
                  3,
                  2,
                  4
                ]
              ];
              this.splitWithIndexTuplesAndIntersections(startVertexPositionIndexes, endVertexPositionIndexes, indexTuples, intersections, smallerFacets, marginOfError);
            }
          },
          {
            key: "splitWithOneNonNullIntersection",
            value: function splitWithOneNonNullIntersection(intersections, smallerFacets, marginOfError) {
              var nonNullIntersectionIndex = (0, _intersection.calculateNonNullIntersectionIndex)(intersections), places = (_constants.VERTICES_LENGTH - nonNullIntersectionIndex) % _constants.VERTICES_LENGTH;
              intersections = (0, _array.permute)(intersections, places);
              intersections = intersections.slice(0, 1);
              this.permute(places);
              var startVertexPositionIndexes = [
                0
              ], endVertexPositionIndexes = [
                1
              ], indexTuples = [
                [
                  0,
                  3,
                  2
                ],
                [
                  3,
                  1,
                  2
                ]
              ];
              this.splitWithIndexTuplesAndIntersections(startVertexPositionIndexes, endVertexPositionIndexes, indexTuples, intersections, smallerFacets, marginOfError);
            }
          },
          {
            key: "splitWithNoNonNullIntersections",
            value: function splitWithNoNonNullIntersections(intersections, smallerFacets, marginOfError) {
              var smallerFacet = this.fromVerticesAndMarginOfError(this.vertices, marginOfError);
              smallerFacets.push(smallerFacet);
            }
          },
          {
            key: "splitWithIndexTuplesAndIntersections",
            value: function splitWithIndexTuplesAndIntersections(startVertexPositionIndexes, endVertexPositionIndexes, indexTuples, intersections, smallerFacets, marginOfError) {
              var _this = this;
              var vertexPositions = this.getVertexPositions(), intermediateVertexPositions = intersections.map(function(intersection, index) {
                var startVertexPositionIndex = startVertexPositionIndexes[index], endVertexPositionIndex = endVertexPositionIndexes[index], startVertexPosition = vertexPositions[startVertexPositionIndex], endVertexPosition = vertexPositions[endVertexPositionIndex], intermediateVertexPosition = (0, _intersection.calculateIntermediateVertexPosition)(startVertexPosition, endVertexPosition, intersection);
                return intermediateVertexPosition;
              });
              (0, _array.add)(vertexPositions, intermediateVertexPositions);
              indexTuples.forEach(function(indexTuple) {
                var positions = vertexPositions, indexes = indexTuple, facet = _this, smallerFacet = smallerFacetFromPositionsIndexesFacetAndMarginOfError(positions, indexes, facet, marginOfError);
                if (smallerFacet !== null) {
                  smallerFacets.push(smallerFacet);
                }
              });
            }
          }
        ]);
        return Facet2;
      }();
      function smallerFacetFromPositionsIndexesFacetAndMarginOfError(positions, indexes, facet, marginOfError) {
        var vertices = indexes.map(function(index) {
          var position = positions[index];
          position = position.slice();
          var vertex = _vertex.default.fromPosition(position);
          return vertex;
        }), smallerFacet = facet.fromVerticesAndMarginOfError(vertices, marginOfError);
        return smallerFacet;
      }
    }
  });

  // lib/primitive/facet/coloured.js
  var require_coloured = __commonJS({
    "lib/primitive/facet/coloured.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return ColouredFacet;
        }
      });
      var _edge = /* @__PURE__ */ _interop_require_default(require_edge());
      var _facet = /* @__PURE__ */ _interop_require_default(require_facet2());
      var _normal = /* @__PURE__ */ _interop_require_default(require_normal());
      var _vertex = /* @__PURE__ */ _interop_require_default(require_vertex());
      var _approximate = require_approximate();
      var _vertices = require_vertices();
      var _facet1 = require_facet();
      function _array_like_to_array(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _array_without_holes(arr) {
        if (Array.isArray(arr))
          return _array_like_to_array(arr);
      }
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _call_super(_this, derived, args) {
        derived = _get_prototype_of(derived);
        return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _iterable_to_array(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _non_iterable_spread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _to_consumable_array(arr) {
        return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _unsupported_iterable_to_array(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _array_like_to_array(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _array_like_to_array(o, minLen);
      }
      function _is_native_reflect_construct() {
        try {
          var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (_) {
        }
        return (_is_native_reflect_construct = function() {
          return !!result;
        })();
      }
      var ColouredFacet = /* @__PURE__ */ function(Facet) {
        _inherits(ColouredFacet2, Facet);
        function ColouredFacet2(vertices, normal, edges, rgba) {
          _class_call_check(this, ColouredFacet2);
          var _this;
          _this = _call_super(this, ColouredFacet2, [
            vertices,
            normal,
            edges
          ]);
          _this.rgba = rgba;
          return _this;
        }
        _create_class(ColouredFacet2, [
          {
            key: "getVertexColours",
            value: function getVertexColours() {
              var vertexColour = this.rgba, vertexColours = [
                vertexColour,
                vertexColour,
                vertexColour
              ];
              return vertexColours;
            }
          },
          {
            key: "fromVerticesAndMarginOfError",
            value: function fromVerticesAndMarginOfError(vertices, marginOfError) {
              var colouredFacet = null;
              var area = (0, _facet1.calculateArea)(vertices), areaApproximatelyEqualToZero = (0, _approximate.isApproximatelyEqualToZero)(area, marginOfError);
              if (!areaApproximatelyEqualToZero) {
                var normal = (0, _facet1.calculateNormal)(vertices, _normal.default), edges = (0, _facet1.calculateEdges)(vertices, _edge.default);
                colouredFacet = new ColouredFacet2(vertices, normal, edges, this.rgba);
              }
              return colouredFacet;
            }
          },
          {
            key: "clone",
            value: function clone() {
              var vertices = this.getVertices(), normal = this.getNormal(), edges = this.getEdges();
              vertices = (0, _facet1.cloneVertices)(vertices);
              normal = (0, _facet1.cloneNormal)(normal);
              edges = (0, _facet1.cloneEdges)(edges);
              var colouredFacet = new ColouredFacet2(vertices, normal, edges, this.rgba);
              return colouredFacet;
            }
          }
        ], [
          {
            key: "fromCoordinateTuplesIndexTupleColourAndMarginOfError",
            value: function fromCoordinateTuplesIndexTupleColourAndMarginOfError(coordinateTuples, indexTuple, colour, marginOfError) {
              var colouredFacet = null;
              var vertices = (0, _vertices.verticesFromCoordinateTuplesAndIndexTuple)(coordinateTuples, indexTuple, _vertex.default), area = (0, _facet1.calculateArea)(vertices), areaApproximatelyEqualToZero = (0, _approximate.isApproximatelyEqualToZero)(area, marginOfError);
              if (!areaApproximatelyEqualToZero) {
                var normal = (0, _facet1.calculateNormal)(vertices, _normal.default), edges = (0, _facet1.calculateEdges)(vertices, _edge.default), rgba = _to_consumable_array(colour).concat([
                  1
                ]);
                colouredFacet = new ColouredFacet2(vertices, normal, edges, rgba);
              }
              return colouredFacet;
            }
          }
        ]);
        return ColouredFacet2;
      }(_facet.default);
    }
  });

  // lib/element/canvas/coloured.js
  var require_coloured2 = __commonJS({
    "lib/element/canvas/coloured.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return ColouredCanvasElement;
        }
      });
      var _canvas = /* @__PURE__ */ _interop_require_default(require_canvas());
      var _coloured = /* @__PURE__ */ _interop_require_default(require_coloured());
      function _array_like_to_array(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _array_without_holes(arr) {
        if (Array.isArray(arr))
          return _array_like_to_array(arr);
      }
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _call_super(_this, derived, args) {
        derived = _get_prototype_of(derived);
        return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get(target, property, receiver) {
        if (typeof Reflect !== "undefined" && Reflect.get) {
          _get = Reflect.get;
        } else {
          _get = function get(target2, property2, receiver2) {
            var base = _super_prop_base(target2, property2);
            if (!base)
              return;
            var desc = Object.getOwnPropertyDescriptor(base, property2);
            if (desc.get) {
              return desc.get.call(receiver2 || target2);
            }
            return desc.value;
          };
        }
        return _get(target, property, receiver || target);
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _iterable_to_array(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _non_iterable_spread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _super_prop_base(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
          object = _get_prototype_of(object);
          if (object === null)
            break;
        }
        return object;
      }
      function _to_consumable_array(arr) {
        return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _unsupported_iterable_to_array(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _array_like_to_array(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _array_like_to_array(o, minLen);
      }
      function _is_native_reflect_construct() {
        try {
          var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (_) {
        }
        return (_is_native_reflect_construct = function() {
          return !!result;
        })();
      }
      var ColouredCanvasElement = /* @__PURE__ */ function(CanvasElement) {
        _inherits(ColouredCanvasElement2, CanvasElement);
        function ColouredCanvasElement2(maskReference, transform, facets, masks, coordinates, indexes, colour) {
          _class_call_check(this, ColouredCanvasElement2);
          var _this;
          _this = _call_super(this, ColouredCanvasElement2, [
            maskReference,
            transform,
            facets,
            masks
          ]);
          _this.coordinates = coordinates;
          _this.indexes = indexes;
          _this.colour = colour;
          return _this;
        }
        _create_class(ColouredCanvasElement2, [
          {
            key: "createFacets",
            value: function createFacets(marginOfError) {
              var _this = this;
              _get(_get_prototype_of(ColouredCanvasElement2.prototype), "createFacets", this).call(this, marginOfError);
              var indexTuples = this.indexes, facets = indexTuples.reduce(function(facets2, indexTuple) {
                var coordinateTuples = _this.coordinates, colouredFacet = _coloured.default.fromCoordinateTuplesIndexTupleColourAndMarginOfError(coordinateTuples, indexTuple, _this.colour, marginOfError), facet = colouredFacet;
                if (facet !== null) {
                  facets2.push(facet);
                }
                return facets2;
              }, []);
              this.setFacets(facets);
            }
          },
          {
            key: "addFacets",
            value: function addFacets(colourRenderer, textureRenderer) {
              var facets = this.getFacets();
              colourRenderer.addFacets(facets);
              _get(_get_prototype_of(ColouredCanvasElement2.prototype), "addFacets", this).call(this, colourRenderer, textureRenderer);
            }
          }
        ], [
          {
            key: "fromProperties",
            value: function fromProperties(Class, properties, coordinates, indexes, colour) {
              for (var _len = arguments.length, remainingArguments = new Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
                remainingArguments[_key - 5] = arguments[_key];
              }
              var _CanvasElement;
              return (_CanvasElement = _canvas.default).fromProperties.apply(_CanvasElement, [
                Class,
                properties,
                coordinates,
                indexes,
                colour
              ].concat(_to_consumable_array(remainingArguments)));
            }
          }
        ]);
        return ColouredCanvasElement2;
      }(_canvas.default);
    }
  });

  // lib/utilities/texture.js
  var require_texture5 = __commonJS({
    "lib/utilities/texture.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        calculateAdjustedTextureCoordinateTuples: function() {
          return calculateAdjustedTextureCoordinateTuples;
        },
        calculateMappedTextureCoordinateTuples: function() {
          return calculateMappedTextureCoordinateTuples;
        },
        cloneTextureCoordinateTuples: function() {
          return cloneTextureCoordinateTuples;
        }
      });
      var _vertices = require_vertices();
      var _matrix = require_matrix();
      var _array = require_array2();
      var _quaternion = require_quaternion();
      var _vector = require_vector();
      function cloneTextureCoordinateTuples(textureCoordinateTuples) {
        textureCoordinateTuples = textureCoordinateTuples.map(function(textureCoordinateTuple) {
          textureCoordinateTuple = textureCoordinateTuple.slice();
          return textureCoordinateTuple;
        });
        return textureCoordinateTuples;
      }
      function calculateMappedTextureCoordinateTuples(textureCoordinateTuples, extent) {
        var left = extent.left, bottom = extent.bottom, width = extent.width, height = extent.height, mappedTextureCoordinateTuples = textureCoordinateTuples.map(function(textureCoordinateTuple) {
          var mappedTextureCoordinateTuple = (0, _vector.add2)((0, _vector.multiply2)(textureCoordinateTuple, [
            width,
            height
          ]), [
            left,
            bottom
          ]);
          return mappedTextureCoordinateTuple;
        });
        return mappedTextureCoordinateTuples;
      }
      function calculateAdjustedTextureCoordinateTuples(vertices, normal, parentVertices, textureCoordinateTuples) {
        var arbitraryRotationQuaternion = (0, _quaternion.calculateArbitraryRotationQuaternion)(normal), rotationQuaternion = arbitraryRotationQuaternion;
        var rotatedVertices = (0, _vertices.rotateVertices)(vertices, rotationQuaternion);
        parentVertices = (0, _vertices.rotateVertices)(parentVertices, rotationQuaternion);
        vertices = rotatedVertices;
        var firstVertex = (0, _array.first)(vertices), secondVertex = (0, _array.second)(vertices), thirdVertex = (0, _array.third)(vertices), firstParentVertex = (0, _array.first)(parentVertices), secondParentVertex = (0, _array.second)(parentVertices), thirdParentVertex = (0, _array.third)(parentVertices), firstTextureCoordinateTuple = (0, _array.first)(textureCoordinateTuples), secondTextureCoordinateTuple = (0, _array.second)(textureCoordinateTuples), thirdTextureCoordinateTuple = (0, _array.third)(textureCoordinateTuples), firstVertexPosition = firstVertex.getPosition(), secondVertexPosition = secondVertex.getPosition(), thirdVertexPosition = thirdVertex.getPosition(), firstParentVertexPosition = firstParentVertex.getPosition(), secondParentVertexPosition = secondParentVertex.getPosition(), thirdParentVertexPosition = thirdParentVertex.getPosition(), R1x = firstVertexPosition[0], R1y = firstVertexPosition[1], R2x = secondVertexPosition[0], R2y = secondVertexPosition[1], R3x = thirdVertexPosition[0], R3y = thirdVertexPosition[1], P1x = firstParentVertexPosition[0], P2x = secondParentVertexPosition[0], P3x = thirdParentVertexPosition[0], P1y = firstParentVertexPosition[1], P2y = secondParentVertexPosition[1], P3y = thirdParentVertexPosition[1], P1u = firstTextureCoordinateTuple[0], P1v = firstTextureCoordinateTuple[1], P2u = secondTextureCoordinateTuple[0], P2v = secondTextureCoordinateTuple[1], P3u = thirdTextureCoordinateTuple[0], P3v = thirdTextureCoordinateTuple[1], textureCoordinatesMatrix = (0, _matrix.invert3)([
          1,
          1,
          1,
          P1u,
          P2u,
          P3u,
          P1v,
          P2v,
          P3v
        ]), firstTransformedParentVerticesComponent = (0, _vector.transform3)([
          P1x,
          P2x,
          P3x
        ], textureCoordinatesMatrix), secondTransformedParentVerticesComponent = (0, _vector.transform3)([
          P1y,
          P2y,
          P3y
        ], textureCoordinatesMatrix), Ox = firstTransformedParentVerticesComponent[0], Ux = firstTransformedParentVerticesComponent[1], Vx = firstTransformedParentVerticesComponent[2], Oy = secondTransformedParentVerticesComponent[0], Uy = secondTransformedParentVerticesComponent[1], Vy = secondTransformedParentVerticesComponent[2], transformedParentVerticesMatrix = (0, _matrix.invert2)([
          Ux,
          Uy,
          Vx,
          Vy
        ]), firstAdjustedTextureCoordinate = (0, _vector.transform2)([
          R1x - Ox,
          R1y - Oy
        ], transformedParentVerticesMatrix), secondAdjustedTextureCoordinate = (0, _vector.transform2)([
          R2x - Ox,
          R2y - Oy
        ], transformedParentVerticesMatrix), thirdAdjustedTextureCoordinate = (0, _vector.transform2)([
          R3x - Ox,
          R3y - Oy
        ], transformedParentVerticesMatrix), adjustedTextureCoordinateTuple = [
          firstAdjustedTextureCoordinate,
          secondAdjustedTextureCoordinate,
          thirdAdjustedTextureCoordinate
        ];
        return adjustedTextureCoordinateTuple;
      }
    }
  });

  // lib/primitive/facet/textured.js
  var require_textured = __commonJS({
    "lib/primitive/facet/textured.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return TexturedFacet;
        }
      });
      var _edge = /* @__PURE__ */ _interop_require_default(require_edge());
      var _facet = /* @__PURE__ */ _interop_require_default(require_facet2());
      var _normal = /* @__PURE__ */ _interop_require_default(require_normal());
      var _vertex = /* @__PURE__ */ _interop_require_default(require_vertex());
      var _array = require_array2();
      var _approximate = require_approximate();
      var _vertices = require_vertices();
      var _facet1 = require_facet();
      var _texture = require_texture5();
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _call_super(_this, derived, args) {
        derived = _get_prototype_of(derived);
        return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get(target, property, receiver) {
        if (typeof Reflect !== "undefined" && Reflect.get) {
          _get = Reflect.get;
        } else {
          _get = function get(target2, property2, receiver2) {
            var base = _super_prop_base(target2, property2);
            if (!base)
              return;
            var desc = Object.getOwnPropertyDescriptor(base, property2);
            if (desc.get) {
              return desc.get.call(receiver2 || target2);
            }
            return desc.value;
          };
        }
        return _get(target, property, receiver || target);
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _super_prop_base(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
          object = _get_prototype_of(object);
          if (object === null)
            break;
        }
        return object;
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _is_native_reflect_construct() {
        try {
          var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (_) {
        }
        return (_is_native_reflect_construct = function() {
          return !!result;
        })();
      }
      var TexturedFacet = /* @__PURE__ */ function(Facet) {
        _inherits(TexturedFacet2, Facet);
        function TexturedFacet2(vertices, normal, edges, imageName, textureCoordinateTuples) {
          _class_call_check(this, TexturedFacet2);
          var _this;
          _this = _call_super(this, TexturedFacet2, [
            vertices,
            normal,
            edges
          ]);
          _this.imageName = imageName;
          _this.textureCoordinateTuples = textureCoordinateTuples;
          return _this;
        }
        _create_class(TexturedFacet2, [
          {
            key: "getImageName",
            value: function getImageName() {
              return this.imageName;
            }
          },
          {
            key: "getTextureCoordinateTuples",
            value: function getTextureCoordinateTuples() {
              return this.textureCoordinateTuples;
            }
          },
          {
            key: "getMappedTextureCoordinateTuples",
            value: function getMappedTextureCoordinateTuples(imageMapJSON) {
              var json = imageMapJSON[this.imageName], extent = json, mappedTextureCoordinateTuples = (0, _texture.calculateMappedTextureCoordinateTuples)(this.textureCoordinateTuples, extent);
              return mappedTextureCoordinateTuples;
            }
          },
          {
            key: "permute",
            value: function permute(places) {
              _get(_get_prototype_of(TexturedFacet2.prototype), "permute", this).call(this, places);
              this.textureCoordinateTuples = (0, _array.permute)(this.textureCoordinateTuples, places);
            }
          },
          {
            key: "fromVerticesAndMarginOfError",
            value: function fromVerticesAndMarginOfError(vertices, marginOfError) {
              var texturedFacet = null;
              var area = (0, _facet1.calculateArea)(vertices), areaApproximatelyEqualToZero = (0, _approximate.isApproximatelyEqualToZero)(area, marginOfError);
              if (!areaApproximatelyEqualToZero) {
                var normal = (0, _facet1.calculateNormal)(vertices, _normal.default), parentVertices = this.vertices, adjustedTextureCoordinateTuple = (0, _texture.calculateAdjustedTextureCoordinateTuples)(vertices, normal, parentVertices, this.textureCoordinateTuples), edges = (0, _facet1.calculateEdges)(vertices, _edge.default), imageName = this.imageName, textureCoordinateTuples = adjustedTextureCoordinateTuple;
                texturedFacet = new TexturedFacet2(vertices, normal, edges, imageName, textureCoordinateTuples);
              }
              return texturedFacet;
            }
          },
          {
            key: "clone",
            value: function clone() {
              var vertices = this.getVertices(), normal = this.getNormal(), edges = this.getEdges();
              vertices = (0, _facet1.cloneVertices)(vertices);
              normal = (0, _facet1.cloneNormal)(normal);
              edges = (0, _facet1.cloneEdges)(edges);
              var imageName = this.imageName, textureCoordinateTuples = (0, _texture.cloneTextureCoordinateTuples)(this.textureCoordinateTuples), texturedFacet = new TexturedFacet2(vertices, normal, edges, imageName, textureCoordinateTuples);
              return texturedFacet;
            }
          }
        ], [
          {
            key: "fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleImageNameAndMarginOfError",
            value: function fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleImageNameAndMarginOfError(textureCoordinateTuples, coordinateTuples, indexTuple, imageName, marginOfError) {
              var texturedFacet = null;
              var vertices = (0, _vertices.verticesFromCoordinateTuplesAndIndexTuple)(coordinateTuples, indexTuple, _vertex.default), area = (0, _facet1.calculateArea)(vertices), areaApproximatelyEqualToZero = (0, _approximate.isApproximatelyEqualToZero)(area, marginOfError);
              if (!areaApproximatelyEqualToZero) {
                var normal = (0, _facet1.calculateNormal)(vertices, _normal.default), edges = (0, _facet1.calculateEdges)(vertices, _edge.default);
                texturedFacet = new TexturedFacet2(vertices, normal, edges, imageName, textureCoordinateTuples);
              }
              return texturedFacet;
            }
          }
        ]);
        return TexturedFacet2;
      }(_facet.default);
    }
  });

  // lib/element/canvas/textured.js
  var require_textured2 = __commonJS({
    "lib/element/canvas/textured.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return TexturedCanvasElement;
        }
      });
      var _canvas = /* @__PURE__ */ _interop_require_default(require_canvas());
      var _textured = /* @__PURE__ */ _interop_require_default(require_textured());
      function _array_like_to_array(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _array_without_holes(arr) {
        if (Array.isArray(arr))
          return _array_like_to_array(arr);
      }
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _call_super(_this, derived, args) {
        derived = _get_prototype_of(derived);
        return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get(target, property, receiver) {
        if (typeof Reflect !== "undefined" && Reflect.get) {
          _get = Reflect.get;
        } else {
          _get = function get(target2, property2, receiver2) {
            var base = _super_prop_base(target2, property2);
            if (!base)
              return;
            var desc = Object.getOwnPropertyDescriptor(base, property2);
            if (desc.get) {
              return desc.get.call(receiver2 || target2);
            }
            return desc.value;
          };
        }
        return _get(target, property, receiver || target);
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _iterable_to_array(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _non_iterable_spread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _super_prop_base(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
          object = _get_prototype_of(object);
          if (object === null)
            break;
        }
        return object;
      }
      function _to_consumable_array(arr) {
        return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _unsupported_iterable_to_array(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _array_like_to_array(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _array_like_to_array(o, minLen);
      }
      function _is_native_reflect_construct() {
        try {
          var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (_) {
        }
        return (_is_native_reflect_construct = function() {
          return !!result;
        })();
      }
      var TexturedCanvasElement = /* @__PURE__ */ function(CanvasElement) {
        _inherits(TexturedCanvasElement2, CanvasElement);
        function TexturedCanvasElement2(maskReference, transform, facets, masks, coordinates, indexes, imageName, textureCoordinates) {
          _class_call_check(this, TexturedCanvasElement2);
          var _this;
          _this = _call_super(this, TexturedCanvasElement2, [
            maskReference,
            transform,
            facets,
            masks
          ]);
          _this.coordinates = coordinates;
          _this.indexes = indexes;
          _this.imageName = imageName;
          _this.textureCoordinates = textureCoordinates;
          return _this;
        }
        _create_class(TexturedCanvasElement2, [
          {
            key: "createFacets",
            value: function createFacets(marginOfError) {
              var _this = this;
              _get(_get_prototype_of(TexturedCanvasElement2.prototype), "createFacets", this).call(this, marginOfError);
              var indexTuples = this.indexes, facets = indexTuples.reduce(function(facets2, indexTuple, index) {
                var vertexTextureCoordinateTuples = _this.textureCoordinates[index], coordinateTuples = _this.coordinates, texturedFacet = _textured.default.fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleImageNameAndMarginOfError(vertexTextureCoordinateTuples, coordinateTuples, indexTuple, _this.imageName, marginOfError), facet = texturedFacet;
                if (facet !== null) {
                  facets2.push(facet);
                }
                return facets2;
              }, []);
              this.setFacets(facets);
            }
          },
          {
            key: "addFacets",
            value: function addFacets(colourRenderer, textureRenderer) {
              var facets = this.getFacets();
              textureRenderer.addFacets(facets);
              _get(_get_prototype_of(TexturedCanvasElement2.prototype), "addFacets", this).call(this, colourRenderer, textureRenderer);
            }
          }
        ], [
          {
            key: "fromProperties",
            value: function fromProperties(Class, properties, coordinates, indexes, imageName, textureCoordinates) {
              for (var _len = arguments.length, remainingArguments = new Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
                remainingArguments[_key - 6] = arguments[_key];
              }
              var _CanvasElement;
              return (_CanvasElement = _canvas.default).fromProperties.apply(_CanvasElement, [
                Class,
                properties,
                coordinates,
                indexes,
                imageName,
                textureCoordinates
              ].concat(_to_consumable_array(remainingArguments)));
            }
          }
        ]);
        return TexturedCanvasElement2;
      }(_canvas.default);
    }
  });

  // lib/index.js
  var require_lib = __commonJS({
    "lib/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        Camera: function() {
          return _camera.default;
        },
        Canvas: function() {
          return _canvas.default;
        },
        CanvasElement: function() {
          return _canvas1.default;
        },
        ColouredCanvasElement: function() {
          return _coloured.default;
        },
        DesignCamera: function() {
          return _design.default;
        },
        GamingCamera: function() {
          return _gaming.default;
        },
        Mask: function() {
          return _mask.default;
        },
        Part: function() {
          return _part.default;
        },
        React: function() {
          return _react.default;
        },
        Scene: function() {
          return _scene.default;
        },
        TexturedCanvasElement: function() {
          return _textured.default;
        },
        matrixMaths: function() {
          return _matrix.default;
        },
        preloadUtilities: function() {
          return _preload.default;
        },
        vectorMaths: function() {
          return _vector.default;
        }
      });
      var _canvas = /* @__PURE__ */ _interop_require_default(require_canvas2());
      var _react = /* @__PURE__ */ _interop_require_default(require_react());
      var _mask = /* @__PURE__ */ _interop_require_default(require_mask());
      var _part = /* @__PURE__ */ _interop_require_default(require_part());
      var _scene = /* @__PURE__ */ _interop_require_default(require_scene());
      var _camera = /* @__PURE__ */ _interop_require_default(require_camera());
      var _gaming = /* @__PURE__ */ _interop_require_default(require_gaming());
      var _design = /* @__PURE__ */ _interop_require_default(require_design());
      var _canvas1 = /* @__PURE__ */ _interop_require_default(require_canvas());
      var _preload = /* @__PURE__ */ _interop_require_default(require_preload());
      var _coloured = /* @__PURE__ */ _interop_require_default(require_coloured2());
      var _textured = /* @__PURE__ */ _interop_require_default(require_textured2());
      var _vector = /* @__PURE__ */ _interop_require_default(require_vector());
      var _matrix = /* @__PURE__ */ _interop_require_default(require_matrix());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
    }
  });

  // lib/example/element/colouredSquare.js
  var require_colouredSquare = __commonJS({
    "lib/example/element/colouredSquare.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return ColouredSquare;
        }
      });
      var _index = require_lib();
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _call_super(_this, derived, args) {
        derived = _get_prototype_of(derived);
        return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _is_native_reflect_construct() {
        try {
          var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (_) {
        }
        return (_is_native_reflect_construct = function() {
          return !!result;
        })();
      }
      var coordinates = [
        [
          0,
          0,
          0
        ],
        [
          1,
          0,
          0
        ],
        [
          0,
          1,
          0
        ],
        [
          1,
          1,
          0
        ]
      ];
      var indexes = [
        [
          0,
          1,
          3
        ],
        [
          3,
          2,
          0
        ]
      ];
      var defaultColour = [
        1,
        0,
        0
      ];
      var ColouredSquare = /* @__PURE__ */ function(ColouredCanvasElement) {
        _inherits(ColouredSquare2, ColouredCanvasElement);
        function ColouredSquare2() {
          _class_call_check(this, ColouredSquare2);
          return _call_super(this, ColouredSquare2, arguments);
        }
        _create_class(ColouredSquare2, null, [
          {
            key: "fromProperties",
            value: function fromProperties(properties) {
              var _properties_colour = properties.colour, colour = _properties_colour === void 0 ? defaultColour : _properties_colour, colouredSquare = _index.ColouredCanvasElement.fromProperties(ColouredSquare2, properties, coordinates, indexes, colour);
              return colouredSquare;
            }
          }
        ]);
        return ColouredSquare2;
      }(_index.ColouredCanvasElement);
    }
  });

  // lib/example/element/face.js
  var require_face = __commonJS({
    "lib/example/element/face.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      var _colouredSquare = /* @__PURE__ */ _interop_require_default(require_colouredSquare());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var Face = function(properties) {
        var colour = properties.colour;
        return /* @__PURE__ */ React.createElement(_colouredSquare.default, {
          colour,
          position: [
            -0.5,
            -0.5,
            0.5
          ]
        });
      };
      var _default = Face;
    }
  });

  // lib/example/element/cube.js
  var require_cube = __commonJS({
    "lib/example/element/cube.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      var _face = /* @__PURE__ */ _interop_require_default(require_face());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var defaultColour = [
        1,
        1,
        0
      ];
      var Cube = function(properties) {
        var _properties_colour = properties.colour, colour = _properties_colour === void 0 ? defaultColour : _properties_colour;
        return [
          /* @__PURE__ */ React.createElement(_face.default, {
            colour,
            rotations: [
              0,
              0,
              0
            ]
          }),
          /* @__PURE__ */ React.createElement(_face.default, {
            colour,
            rotations: [
              90,
              0,
              0
            ]
          }),
          /* @__PURE__ */ React.createElement(_face.default, {
            colour,
            rotations: [
              0,
              90,
              0
            ]
          }),
          /* @__PURE__ */ React.createElement(_face.default, {
            colour,
            rotations: [
              180,
              0,
              0
            ]
          }),
          /* @__PURE__ */ React.createElement(_face.default, {
            colour,
            rotations: [
              -90,
              0,
              0
            ]
          }),
          /* @__PURE__ */ React.createElement(_face.default, {
            colour,
            rotations: [
              0,
              -90,
              0
            ]
          })
        ];
      };
      var _default = Cube;
    }
  });

  // lib/example/cube.js
  var require_cube2 = __commonJS({
    "lib/example/cube.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      var _index = require_lib();
      var _cube = /* @__PURE__ */ _interop_require_default(require_cube());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var cubeExample = function() {
        var canvas = new _index.Canvas();
        return /* @__PURE__ */ React.createElement(_index.Scene, {
          canvas
        }, /* @__PURE__ */ React.createElement(_index.Part, null, /* @__PURE__ */ React.createElement(_cube.default, {
          colour: [
            0,
            1,
            0
          ]
        })), /* @__PURE__ */ React.createElement(_index.DesignCamera, {
          persist: true
        }));
      };
      var _default = cubeExample;
    }
  });

  // lib/example/element/texturedQuadrangle.js
  var require_texturedQuadrangle = __commonJS({
    "lib/example/element/texturedQuadrangle.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return TexturedQuadrangle;
        }
      });
      var _index = require_lib();
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _call_super(_this, derived, args) {
        derived = _get_prototype_of(derived);
        return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _is_native_reflect_construct() {
        try {
          var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (_) {
        }
        return (_is_native_reflect_construct = function() {
          return !!result;
        })();
      }
      var coordinates = [
        [
          0,
          0,
          0
        ],
        [
          1,
          0,
          0
        ],
        [
          0,
          1,
          0
        ],
        [
          1,
          1,
          0
        ]
      ];
      var indexes = [
        [
          0,
          1,
          3
        ],
        [
          3,
          2,
          0
        ]
      ];
      var defaultImageName = "plaster.jpg";
      var defaultTextureCoordinates = [
        [
          [
            0,
            0
          ],
          [
            2,
            0
          ],
          [
            2,
            2
          ]
        ],
        [
          [
            2,
            2
          ],
          [
            0,
            2
          ],
          [
            0,
            0
          ]
        ]
      ];
      var TexturedQuadrangle = /* @__PURE__ */ function(TexturedCanvasElement) {
        _inherits(TexturedQuadrangle2, TexturedCanvasElement);
        function TexturedQuadrangle2() {
          _class_call_check(this, TexturedQuadrangle2);
          return _call_super(this, TexturedQuadrangle2, arguments);
        }
        _create_class(TexturedQuadrangle2, null, [
          {
            key: "fromProperties",
            value: function fromProperties(properties) {
              var _properties_imageName = properties.imageName, imageName = _properties_imageName === void 0 ? defaultImageName : _properties_imageName, _properties_textureCoordinates = properties.textureCoordinates, textureCoordinates = _properties_textureCoordinates === void 0 ? defaultTextureCoordinates : _properties_textureCoordinates, texturedQuadrangle = _index.TexturedCanvasElement.fromProperties(TexturedQuadrangle2, properties, coordinates, indexes, imageName, textureCoordinates);
              return texturedQuadrangle;
            }
          }
        ]);
        return TexturedQuadrangle2;
      }(_index.TexturedCanvasElement);
    }
  });

  // lib/example/tiling.js
  var require_tiling = __commonJS({
    "lib/example/tiling.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      var _index = require_lib();
      var _colouredSquare = /* @__PURE__ */ _interop_require_default(require_colouredSquare());
      var _texturedQuadrangle = /* @__PURE__ */ _interop_require_default(require_texturedQuadrangle());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var preloadImages = _index.preloadUtilities.preloadImages;
      var host = globalThis.host;
      var imageNames = globalThis.imageNames;
      var imageDirectoryURI = globalThis.imageDirectoryURI;
      var tilingExample = function() {
        preloadImages(host, imageNames, imageDirectoryURI, function(images, imageNames2) {
          var canvas = new _index.Canvas();
          return /* @__PURE__ */ React.createElement(_index.Scene, {
            canvas
          }, /* @__PURE__ */ React.createElement(_index.Part, {
            images,
            imageNames: imageNames2,
            imageTiling: true
          }, /* @__PURE__ */ React.createElement(_index.Mask, {
            reference: "mask"
          }, /* @__PURE__ */ React.createElement(_colouredSquare.default, {
            scale: [
              0.25,
              0.25,
              1
            ],
            position: [
              0.125,
              0.125,
              0.125
            ]
          })), /* @__PURE__ */ React.createElement(_texturedQuadrangle.default, {
            position: [
              0,
              0,
              0
            ],
            imageName: "floorboards.jpg",
            maskReference: "mask"
          }), /* @__PURE__ */ React.createElement(_texturedQuadrangle.default, {
            position: [
              -0.5,
              -0.5,
              -0.5
            ],
            imageName: "paving.jpg",
            maskReference: "mask"
          })), /* @__PURE__ */ React.createElement(_index.DesignCamera, null));
        });
      };
      var _default = tilingExample;
    }
  });

  // lib/example/simple.js
  var require_simple = __commonJS({
    "lib/example/simple.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      var _index = require_lib();
      var _colouredSquare = /* @__PURE__ */ _interop_require_default(require_colouredSquare());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var simpleExample = function() {
        var canvas = new _index.Canvas();
        return /* @__PURE__ */ React.createElement(_index.Scene, {
          canvas
        }, /* @__PURE__ */ React.createElement(_index.Part, null, /* @__PURE__ */ React.createElement(_colouredSquare.default, {
          colour: [
            0,
            0,
            1
          ]
        })), /* @__PURE__ */ React.createElement(_index.DesignCamera, null));
      };
      var _default = simpleExample;
    }
  });

  // lib/example/masking.js
  var require_masking2 = __commonJS({
    "lib/example/masking.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      var _index = require_lib();
      var _cube = /* @__PURE__ */ _interop_require_default(require_cube());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var maskingExample = function() {
        var canvas = new _index.Canvas();
        return /* @__PURE__ */ React.createElement(_index.Scene, {
          canvas
        }, /* @__PURE__ */ React.createElement(_index.Part, null, /* @__PURE__ */ React.createElement(_index.Mask, {
          reference: "quarter-sized-cube"
        }, /* @__PURE__ */ React.createElement(_cube.default, {
          scale: [
            1 / 4,
            1 / 4,
            1 / 4
          ]
        })), /* @__PURE__ */ React.createElement(_index.Mask, {
          reference: "half-sized-cube"
        }, /* @__PURE__ */ React.createElement(_cube.default, {
          scale: [
            1 / 2,
            1 / 2,
            1 / 2
          ],
          maskReference: "quarter-sized-cube"
        })), /* @__PURE__ */ React.createElement(_cube.default, {
          maskReference: "half-sized-cube"
        })), /* @__PURE__ */ React.createElement(_index.DesignCamera, null));
      };
      var _default = maskingExample;
    }
  });

  // lib/example/element/texturedTriangle.js
  var require_texturedTriangle = __commonJS({
    "lib/example/element/texturedTriangle.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return TexturedTriangle;
        }
      });
      var _index = require_lib();
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _call_super(_this, derived, args) {
        derived = _get_prototype_of(derived);
        return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _is_native_reflect_construct() {
        try {
          var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (_) {
        }
        return (_is_native_reflect_construct = function() {
          return !!result;
        })();
      }
      var coordinates = [
        [
          0,
          0,
          0
        ],
        [
          1,
          0,
          0
        ],
        [
          0.5,
          1,
          0
        ]
      ];
      var indexes = [
        [
          0,
          1,
          2
        ]
      ];
      var defaultImageName = "stripes.jpg";
      var defaultTextureCoordinates = [
        [
          [
            0,
            0
          ],
          [
            1,
            0
          ],
          [
            0.5,
            1
          ]
        ]
      ];
      var TexturedTriangle = /* @__PURE__ */ function(TexturedCanvasElement) {
        _inherits(TexturedTriangle2, TexturedCanvasElement);
        function TexturedTriangle2() {
          _class_call_check(this, TexturedTriangle2);
          return _call_super(this, TexturedTriangle2, arguments);
        }
        _create_class(TexturedTriangle2, null, [
          {
            key: "fromProperties",
            value: function fromProperties(properties) {
              var _properties_imageName = properties.imageName, imageName = _properties_imageName === void 0 ? defaultImageName : _properties_imageName, _properties_textureCoordinates = properties.textureCoordinates, textureCoordinates = _properties_textureCoordinates === void 0 ? defaultTextureCoordinates : _properties_textureCoordinates, texturedTriangle = _index.TexturedCanvasElement.fromProperties(TexturedTriangle2, properties, coordinates, indexes, imageName, textureCoordinates);
              return texturedTriangle;
            }
          }
        ]);
        return TexturedTriangle2;
      }(_index.TexturedCanvasElement);
    }
  });

  // lib/example/element/side.js
  var require_side = __commonJS({
    "lib/example/element/side.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      var _texturedTriangle = /* @__PURE__ */ _interop_require_default(require_texturedTriangle());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var Side = function(properties) {
        return /* @__PURE__ */ React.createElement(_texturedTriangle.default, {
          scale: [
            1,
            1 / Math.sqrt(2),
            1
          ],
          position: [
            -0.5,
            0,
            0.5
          ],
          rotations: [
            -45,
            0,
            0
          ]
        });
      };
      var _default = Side;
    }
  });

  // lib/example/element/pyramid.js
  var require_pyramid = __commonJS({
    "lib/example/element/pyramid.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      var _side = /* @__PURE__ */ _interop_require_default(require_side());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var Pyramid = function(properties) {
        return [
          /* @__PURE__ */ React.createElement(_side.default, null),
          /* @__PURE__ */ React.createElement(_side.default, {
            rotations: [
              0,
              90,
              0
            ]
          }),
          /* @__PURE__ */ React.createElement(_side.default, {
            rotations: [
              0,
              180,
              0
            ]
          }),
          /* @__PURE__ */ React.createElement(_side.default, {
            rotations: [
              0,
              270,
              0
            ]
          })
        ];
      };
      var _default = Pyramid;
    }
  });

  // lib/example/pyramid.js
  var require_pyramid2 = __commonJS({
    "lib/example/pyramid.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      var _index = require_lib();
      var _pyramid = /* @__PURE__ */ _interop_require_default(require_pyramid());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var preloadImageMap = _index.preloadUtilities.preloadImageMap;
      var host = globalThis.host;
      var imageMapURI = globalThis.imageMapURI;
      var imageMapJSON = globalThis.imageMapJSON;
      var pyramidExample = function() {
        preloadImageMap(host, imageMapURI, imageMapJSON, function(imageMap, imageMapJSON2) {
          var canvas = new _index.Canvas();
          return /* @__PURE__ */ React.createElement(_index.Scene, {
            canvas
          }, /* @__PURE__ */ React.createElement(_index.Part, {
            imageMap,
            imageMapJSON: imageMapJSON2
          }, /* @__PURE__ */ React.createElement(_pyramid.default, null)), /* @__PURE__ */ React.createElement(_index.GamingCamera, null));
        });
      };
      var _default = pyramidExample;
    }
  });

  // lib/example.js
  var require_example = __commonJS({
    "lib/example.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      require_xgl();
      var _cube = /* @__PURE__ */ _interop_require_default(require_cube2());
      var _tiling = /* @__PURE__ */ _interop_require_default(require_tiling());
      var _simple = /* @__PURE__ */ _interop_require_default(require_simple());
      var _masking = /* @__PURE__ */ _interop_require_default(require_masking2());
      var _pyramid = /* @__PURE__ */ _interop_require_default(require_pyramid2());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var example = window.location.search.substring(1);
      switch (example) {
        case "cube":
          (0, _cube.default)();
          break;
        case "tiling":
          (0, _tiling.default)();
          break;
        case "simple":
          (0, _simple.default)();
          break;
        case "masking":
          (0, _masking.default)();
          break;
        case "pyramid":
          (0, _pyramid.default)();
          break;
      }
    }
  });
  require_example();
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NvbnN0YW50cy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9sZXZlbHMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvbWV0aG9kcy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9oZWFkZXJzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2tleUNvZGVzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2VuY29kaW5ncy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9jaGFyYWN0ZXJzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3N0YXR1c0NvZGVzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2NvbnRlbnRUeXBlcy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9zdGF0dXNNZXNzYWdlcy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9jb25zdGFudHMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvdXRpbGl0aWVzL2FycmF5LmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9wYXRoLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9odHRwLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvdXRpbGl0aWVzL3ZlcnNpb24uanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvdXRpbGl0aWVzL2FzeW5jaHJvbm91cy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy91dGlsaXRpZXMvYWpheC5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9icm93c2VyLmpzIiwgInNyYy91dGlsaXRpZXMvYXJyYXkuanMiLCAic3JjL2VsZW1lbnQuanMiLCAic3JjL21hdGhzL3ZlY3Rvci5qcyIsICJzcmMvcHJpbWl0aXZlL2VkZ2UuanMiLCAic3JjL3V0aWxpdGllcy9taWRQb2ludC5qcyIsICJzcmMvcHJpbWl0aXZlL2VkZ2UvbWFza2luZy5qcyIsICJzcmMvZGVmYXVsdHMuanMiLCAic3JjL3V0aWxpdGllcy9hcHByb3hpbWF0ZS5qcyIsICJzcmMvdXRpbGl0aWVzL2FuZ2xlLmpzIiwgInNyYy91dGlsaXRpZXMvcXVhdGVybmlvbi5qcyIsICJzcmMvdXRpbGl0aWVzL3JvdGF0aW9uLmpzIiwgInNyYy91dGlsaXRpZXMvaW50ZXJzZWN0aW9uLmpzIiwgInNyYy9wcmltaXRpdmUvdmVydGljYWxMaW5lLmpzIiwgInNyYy91dGlsaXRpZXMvdmVydGljZXMuanMiLCAic3JjL3ByaW1pdGl2ZS9tYXNraW5nRmFjZXQuanMiLCAic3JjL21hdGhzL21hdHJpeC5qcyIsICJzcmMvdXRpbGl0aWVzL21hdHJpeC5qcyIsICJzcmMvdXRpbGl0aWVzL3RyYW5zZm9ybS5qcyIsICJzcmMvZWxlbWVudC9tYXNrLmpzIiwgInNyYy91dGlsaXRpZXMvZWxlbWVudC5qcyIsICJzcmMvZWxlbWVudC9jYW52YXMuanMiLCAic3JjL2VsZW1lbnQvY2FudmFzL2Z1bmN0aW9uLmpzIiwgInNyYy91dGlsaXRpZXMvZWxlbWVudHMuanMiLCAic3JjL3JlYWN0LmpzIiwgInNyYy94Z2wuanMiLCAic3JjL21peGlucy9kZXB0aC5qcyIsICJzcmMvZXJyb3JzLmpzIiwgInNyYy9taXhpbnMvc2hhZGVyLmpzIiwgInNyYy9taXhpbnMvYnVmZmVyLmpzIiwgInNyYy9taXhpbnMvY29sb3VyLmpzIiwgInNyYy9taXhpbnMvbWF0cml4LmpzIiwgInNyYy9taXhpbnMvdGV4dHVyZS5qcyIsICJzcmMvbWl4aW5zL3Byb2dyYW0uanMiLCAic3JjL21peGlucy9ibGVuZGluZy5qcyIsICJzcmMvbWl4aW5zL2xvY2F0aW9uLmpzIiwgInNyYy9jYW52YXMuanMiLCAic3JjL3JlbmRlcmVyLmpzIiwgInNyYy9yZW5kZXJlci9kYXRhLmpzIiwgInNyYy9yZW5kZXJlci9kYXRhL2NvbG91ci5qcyIsICJzcmMvcmVuZGVyZXIvc291cmNlL2xpZ2h0aW5nLmpzIiwgInNyYy9yZW5kZXJlci9zb3VyY2UvcG9zaXRpb24uanMiLCAic3JjL3JlbmRlcmVyL3NvdXJjZS9jb2xvdXIvdmVydGV4U2hhZGVyLmpzIiwgInNyYy9yZW5kZXJlci9zb3VyY2UvY29sb3VyL2ZyYWdtZW50U2hhZGVyLmpzIiwgInNyYy9yZW5kZXJlci9idWZmZXJzLmpzIiwgInNyYy9yZW5kZXJlci9idWZmZXJzL2NvbG91ci5qcyIsICJzcmMvcmVuZGVyZXIvbG9jYXRpb25zL3VuaWZvcm0uanMiLCAic3JjL3JlbmRlcmVyL2xvY2F0aW9ucy9jb2xvdXIvdW5pZm9ybS5qcyIsICJzcmMvcmVuZGVyZXIvbG9jYXRpb25zL2F0dHJpYnV0ZS5qcyIsICJzcmMvcmVuZGVyZXIvbG9jYXRpb25zL2NvbG91ci9hdHRyaWJ1dGUuanMiLCAic3JjL3JlbmRlcmVyL2NvbG91ci5qcyIsICJzcmMvcmVuZGVyZXIvc291cmNlL3RleHR1cmUvdmVydGV4U2hhZGVyLmpzIiwgInNyYy9yZW5kZXJlci9kYXRhL3RleHR1cmUuanMiLCAic3JjL3JlbmRlcmVyL3NvdXJjZS90ZXh0dXJlL2ZyYWdtZW50U2hhZGVyLmpzIiwgInNyYy9yZW5kZXJlci9idWZmZXJzL3RleHR1cmUuanMiLCAic3JjL3JlbmRlcmVyL2xvY2F0aW9ucy90ZXh0dXJlL3VuaWZvcm0uanMiLCAic3JjL3JlbmRlcmVyL2xvY2F0aW9ucy90ZXh0dXJlL2F0dHJpYnV0ZS5qcyIsICJzcmMvcmVuZGVyZXIvdGV4dHVyZS5qcyIsICJzcmMvcmVuZGVyZXIvdGV4dHVyZS9pbWFnZXMuanMiLCAic3JjL3JlbmRlcmVyL3RleHR1cmUvaW1hZ2VNYXAuanMiLCAic3JjL2VsZW1lbnQvcGFydC5qcyIsICJzcmMvZWxlbWVudC9jYW1lcmEuanMiLCAic3JjL2V2ZW50VHlwZXMuanMiLCAic3JjL21pc2NlbGxhbmVvdXMva2V5RXZlbnRzLmpzIiwgInNyYy9taXNjZWxsYW5lb3VzL21vdXNlRXZlbnRzLmpzIiwgInNyYy9taXNjZWxsYW5lb3VzL3VzZXJJbnB1dC5qcyIsICJzcmMvZWxlbWVudC9zY2VuZS5qcyIsICJzcmMvdXRpbGl0aWVzL29mZnNldHMuanMiLCAic3JjL21pc2NlbGxhbmVvdXMvcGFuLmpzIiwgInNyYy9taXNjZWxsYW5lb3VzL3RpbHQuanMiLCAic3JjL3V0aWxpdGllcy9sb2NhbFN0b3JhZ2UuanMiLCAic3JjL2VsZW1lbnQvY2FtZXJhL2dhbWluZy5qcyIsICJzcmMvbWlzY2VsbGFuZW91cy96b29tLmpzIiwgInNyYy9lbGVtZW50L2NhbWVyYS9kZXNpZ24uanMiLCAic3JjL3V0aWxpdGllcy9wcmVsb2FkLmpzIiwgInNyYy9wcmltaXRpdmUvbm9ybWFsLmpzIiwgInNyYy9wcmltaXRpdmUvdmVydGV4LmpzIiwgInNyYy91dGlsaXRpZXMvZmFjZXQuanMiLCAic3JjL3ByaW1pdGl2ZS9mYWNldC5qcyIsICJzcmMvcHJpbWl0aXZlL2ZhY2V0L2NvbG91cmVkLmpzIiwgInNyYy9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZC5qcyIsICJzcmMvdXRpbGl0aWVzL3RleHR1cmUuanMiLCAic3JjL3ByaW1pdGl2ZS9mYWNldC90ZXh0dXJlZC5qcyIsICJzcmMvZWxlbWVudC9jYW52YXMvdGV4dHVyZWQuanMiLCAic3JjL2luZGV4LmpzIiwgInNyYy9leGFtcGxlL2VsZW1lbnQvY29sb3VyZWRTcXVhcmUuanMiLCAic3JjL2V4YW1wbGUvZWxlbWVudC9mYWNlLmpzIiwgInNyYy9leGFtcGxlL2VsZW1lbnQvY3ViZS5qcyIsICJzcmMvZXhhbXBsZS9jdWJlLmpzIiwgInNyYy9leGFtcGxlL2VsZW1lbnQvdGV4dHVyZWRRdWFkcmFuZ2xlLmpzIiwgInNyYy9leGFtcGxlL3RpbGluZy5qcyIsICJzcmMvZXhhbXBsZS9zaW1wbGUuanMiLCAic3JjL2V4YW1wbGUvbWFza2luZy5qcyIsICJzcmMvZXhhbXBsZS9lbGVtZW50L3RleHR1cmVkVHJpYW5nbGUuanMiLCAic3JjL2V4YW1wbGUvZWxlbWVudC9zaWRlLmpzIiwgInNyYy9leGFtcGxlL2VsZW1lbnQvcHlyYW1pZC5qcyIsICJzcmMvZXhhbXBsZS9weXJhbWlkLmpzIiwgInNyYy9leGFtcGxlLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFdFQkdMID0gXCJ3ZWJnbFwiO1xuZXhwb3J0IGNvbnN0IFdJRFRIID0gXCJ3aWR0aFwiO1xuZXhwb3J0IGNvbnN0IEhFSUdIVCA9IFwiaGVpZ2h0XCI7XG5leHBvcnQgY29uc3QgQ0FOVkFTID0gXCJjYW52YXNcIjtcbmV4cG9ydCBjb25zdCBTVFJJTkcgPSBcInN0cmluZ1wiO1xuZXhwb3J0IGNvbnN0IEZVTkNUSU9OID0gXCJmdW5jdGlvblwiO1xuZXhwb3J0IGNvbnN0IEFOT05ZTU9VUyA9IFwiYW5vbnltb3VzXCI7XG5leHBvcnQgY29uc3QgR0FNSU5HX0NBTUVSQSA9IFwiZ2FtaW5nX2NhbWVyYVwiO1xuZXhwb3J0IGNvbnN0IERFU0lHTl9DQU1FUkEgPSBcImRlc2lnbl9jYW1lcmFcIjtcbmV4cG9ydCBjb25zdCBWRVJUSUNFU19MRU5HVEggPSAzO1xuZXhwb3J0IGNvbnN0IE1JTklNVU1fRElTVEFOQ0UgPSAxO1xuZXhwb3J0IGNvbnN0IElOVkVSVF9NVUxUSVBMSUVSID0gLTE7XG5leHBvcnQgY29uc3QgQU5HTEVTX01VTFRJUExJRVIgPSAwLjAxO1xuZXhwb3J0IGNvbnN0IE1PVVNFX1dIRUVMX0RFTFRBX01VTFRJUExJRVIgPSAwLjI1O1xuZXhwb3J0IGNvbnN0IERFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSID0gTWF0aC5QSSAvIDE4MDtcbmV4cG9ydCBjb25zdCBFWFRfVEVYVFVSRV9GSUxURVJfQU5JU09UUk9QSUMgPSBcIkVYVF90ZXh0dXJlX2ZpbHRlcl9hbmlzb3Ryb3BpY1wiO1xuZXhwb3J0IGNvbnN0IE1PWl9FWFRfVEVYVFVSRV9GSUxURVJfQU5JU09UUk9QSUMgPSBcIk1PWl9FWFRfdGV4dHVyZV9maWx0ZXJfYW5pc290cm9waWNcIjtcbmV4cG9ydCBjb25zdCBXRUJLSVRfRVhUX1RFWFRVUkVfRklMVEVSX0FOSVNPVFJPUElDID0gXCJXRUJLSVRfRVhUX3RleHR1cmVfZmlsdGVyX2FuaXNvdHJvcGljXCI7XG5leHBvcnQgY29uc3QgUkVMQVRJVkVfTU9VU0VfQ09PUkRJTkFURVNfTVVMVElQTElFUiA9IDAuMDI1O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgVFJBQ0VfTEVWRUwgPSBcInRyYWNlXCI7XG5leHBvcnQgY29uc3QgREVCVUdfTEVWRUwgPSBcImRlYnVnXCI7XG5leHBvcnQgY29uc3QgSU5GT19MRVZFTCA9IFwiaW5mb1wiO1xuZXhwb3J0IGNvbnN0IFdBUk5JTkdfTEVWRUwgPSBcIndhcm5pbmdcIjtcbmV4cG9ydCBjb25zdCBFUlJPUl9MRVZFTCA9IFwiZXJyb3JcIjtcbmV4cG9ydCBjb25zdCBGQVRBTF9MRVZFTCA9IFwiZmF0YWxcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBUUkFDRV9MRVZFTCxcbiAgREVCVUdfTEVWRUwsXG4gIElORk9fTEVWRUwsXG4gIFdBUk5JTkdfTEVWRUwsXG4gIEVSUk9SX0xFVkVMLFxuICBGQVRBTF9MRVZFTFxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IEdFVF9NRVRIT0QgPSBcIkdFVFwiO1xuZXhwb3J0IGNvbnN0IFBPU1RfTUVUSE9EID0gXCJQT1NUXCI7XG5leHBvcnQgY29uc3QgUEFUQ0hfTUVUSE9EID0gXCJQQVRDSFwiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9NRVRIT0QgPSBcIkRFTEVURVwiO1xuZXhwb3J0IGNvbnN0IE9QVElPTlNfTUVUSE9EID0gXCJPUFRJT05TXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgR0VUX01FVEhPRCxcbiAgUE9TVF9NRVRIT0QsXG4gIFBBVENIX01FVEhPRCxcbiAgREVMRVRFX01FVEhPRCxcbiAgT1BUSU9OU19NRVRIT0Rcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBQUkFHTUFfSEVBREVSID0gXCJwcmFnbWFcIjtcbmV4cG9ydCBjb25zdCBBQ0NFUFRfSEVBREVSID0gXCJhY2NlcHRcIjtcbmV4cG9ydCBjb25zdCBMT0NBVElPTl9IRUFERVIgPSBcImxvY2F0aW9uXCI7XG5leHBvcnQgY29uc3QgVVNFUl9BR0VOVF9IRUFERVIgPSBcInVzZXItYWdlbnRcIjtcbmV4cG9ydCBjb25zdCBDT05URU5UX1RZUEVfSEVBREVSID0gXCJjb250ZW50LXR5cGVcIjtcbmV4cG9ydCBjb25zdCBBVVRIT1JJWkFUSU9OX0hFQURFUiA9IFwiYXV0aG9yaXphdGlvblwiO1xuZXhwb3J0IGNvbnN0IENBQ0hFX0NPTlRST0xfSEVBREVSID0gXCJjYWNoZS1jb250cm9sXCI7XG5leHBvcnQgY29uc3QgQ09OVEVOVF9MRU5HVEhfSEVBREVSID0gXCJjb250ZW50LWxlbmd0aFwiO1xuZXhwb3J0IGNvbnN0IFRSQU5TRkVSX0VOQ09ESU5HX0hFQURFUiA9IFwidHJhbnNmZXItZW5jb2RpbmdcIjtcbmV4cG9ydCBjb25zdCBDT05URU5UX0RJU1BPU0lUSU9OX0hFQURFUiA9IFwiY29udGVudC1kaXNwb3NpdGlvblwiO1xuZXhwb3J0IGNvbnN0IEFDQ0VTU19DT05UUk9MX0FMTE9XX09SSUdJTl9IRUFERVIgPSBcImFjY2Vzcy1jb250cm9sLWFsbG93LW9yaWdpblwiO1xuZXhwb3J0IGNvbnN0IEFDQ0VTU19DT05UUk9MX0FMTE9XX01FVEhPRFNfSEVBREVSID0gXCJhY2Nlc3MtY29udHJvbC1hbGxvdy1tZXRob2RzXCI7XG5leHBvcnQgY29uc3QgQUNDRVNTX0NPTlRST0xfQUxMT1dfSEVBREVSU19IRUFERVIgPSBcImFjY2Vzcy1jb250cm9sLWFsbG93LWhlYWRlcnNcIjtcbmV4cG9ydCBjb25zdCBBQ0NFU1NfQ09OVFJPTF9SRVFVRVNUX01FVEhPRF9IRUFERVIgPSBcImFjY2Vzcy1jb250cm9sLXJlcXVlc3QtbWV0aG9kXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgUFJBR01BX0hFQURFUixcbiAgQUNDRVBUX0hFQURFUixcbiAgTE9DQVRJT05fSEVBREVSLFxuICBVU0VSX0FHRU5UX0hFQURFUixcbiAgQ09OVEVOVF9UWVBFX0hFQURFUixcbiAgQVVUSE9SSVpBVElPTl9IRUFERVIsXG4gIENBQ0hFX0NPTlRST0xfSEVBREVSLFxuICBDT05URU5UX0xFTkdUSF9IRUFERVIsXG4gIFRSQU5TRkVSX0VOQ09ESU5HX0hFQURFUixcbiAgQ09OVEVOVF9ESVNQT1NJVElPTl9IRUFERVIsXG4gIEFDQ0VTU19DT05UUk9MX0FMTE9XX09SSUdJTl9IRUFERVIsXG4gIEFDQ0VTU19DT05UUk9MX0FMTE9XX01FVEhPRFNfSEVBREVSLFxuICBBQ0NFU1NfQ09OVFJPTF9BTExPV19IRUFERVJTX0hFQURFUixcbiAgQUNDRVNTX0NPTlRST0xfUkVRVUVTVF9NRVRIT0RfSEVBREVSXG59OyIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFRBQl9LRVlfQ09ERSA9IDk7XG5leHBvcnQgY29uc3QgU0hJRlRfS0VZX0NPREUgPSAxNjtcbmV4cG9ydCBjb25zdCBFTlRFUl9LRVlfQ09ERSA9IDEzO1xuZXhwb3J0IGNvbnN0IEVTQ0FQRV9LRVlfQ09ERSA9IDI3O1xuZXhwb3J0IGNvbnN0IERFTEVURV9LRVlfQ09ERSA9IDQ2O1xuZXhwb3J0IGNvbnN0IEJBQ0tTUEFDRV9LRVlfQ09ERSA9IDg7XG5leHBvcnQgY29uc3QgQVJST1dfVVBfS0VZX0NPREUgPSAzODtcbmV4cG9ydCBjb25zdCBBUlJPV19ET1dOX0tFWV9DT0RFID0gNDA7XG5leHBvcnQgY29uc3QgQVJST1dfTEVGVF9LRVlfQ09ERSA9IDM3O1xuZXhwb3J0IGNvbnN0IEFSUk9XX1JJR0hUX0tFWV9DT0RFID0gMzk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgVEFCX0tFWV9DT0RFLFxuICBTSElGVF9LRVlfQ09ERSxcbiAgRU5URVJfS0VZX0NPREUsXG4gIEVTQ0FQRV9LRVlfQ09ERSxcbiAgREVMRVRFX0tFWV9DT0RFLFxuICBCQUNLU1BBQ0VfS0VZX0NPREUsXG4gIEFSUk9XX1VQX0tFWV9DT0RFLFxuICBBUlJPV19ET1dOX0tFWV9DT0RFLFxuICBBUlJPV19MRUZUX0tFWV9DT0RFLFxuICBBUlJPV19SSUdIVF9LRVlfQ09ERVxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFVURjhfRU5DT0RJTkcgPSBcInV0ZjhcIjtcbmV4cG9ydCBjb25zdCBVVEZfOF9FTkNPRElORyA9IFwidXRmLThcIjtcbmV4cG9ydCBjb25zdCBCQVNFNjRfRU5DT0RJTkcgPSBcImJhc2U2NFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFVURjhfRU5DT0RJTkcsXG4gIFVURl84X0VOQ09ESU5HLFxuICBCQVNFNjRfRU5DT0RJTkdcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBVUF9DSEFSQUNURVIgPSBcIlx1MDAxYltBXCI7XG5leHBvcnQgY29uc3QgRVRYX0NIQVJBQ1RFUiA9IFwiXFx1MDAwM1wiO1xuZXhwb3J0IGNvbnN0IEJBUl9DSEFSQUNURVIgPSBcInxcIjtcbmV4cG9ydCBjb25zdCBIQVRfQ0hBUkFDVEVSID0gXCJeXCI7XG5leHBvcnQgY29uc3QgUExVU19DSEFSQUNURVIgPSBcIitcIjtcbmV4cG9ydCBjb25zdCBEQVNIX0NIQVJBQ1RFUiA9IFwiLVwiO1xuZXhwb3J0IGNvbnN0IERPV05fQ0hBUkFDVEVSID0gXCJcdTAwMWJbQlwiO1xuZXhwb3J0IGNvbnN0IExFRlRfQ0hBUkFDVEVSID0gXCJcdTAwMWJbRFwiO1xuZXhwb3J0IGNvbnN0IFJJR0hUX0NIQVJBQ1RFUiA9IFwiXHUwMDFiW0NcIjtcbmV4cG9ydCBjb25zdCBTUEFDRV9DSEFSQUNURVIgPSBcIiBcIjtcbmV4cG9ydCBjb25zdCBDT01NQV9DSEFSQUNURVIgPSBcIixcIjtcbmV4cG9ydCBjb25zdCBDT0xPTl9DSEFSQUNURVIgPSBcIjpcIjtcbmV4cG9ydCBjb25zdCBQRVJJT0RfQ0hBUkFDVEVSID0gXCIuXCI7XG5leHBvcnQgY29uc3QgRE9MTEFSX0NIQVJBQ1RFUiA9IFwiJFwiO1xuZXhwb3J0IGNvbnN0IENUUkxfQ19DSEFSQUNURVIgPSBcIl5DXCI7XG5leHBvcnQgY29uc3QgRVNDQVBFX0NIQVJBQ1RFUiA9IFwiXFx1MDAxYlwiO1xuZXhwb3J0IGNvbnN0IEFTVEVSSVNLX0NIQVJBQ1RFUiA9IFwiKlwiO1xuZXhwb3J0IGNvbnN0IFdJTERDQVJEX0NIQVJBQ1RFUiA9IFwiKlwiO1xuZXhwb3J0IGNvbnN0IEJBQ0tUSUNLX0RFTElNSVRFUiA9IFwiYFwiO1xuZXhwb3J0IGNvbnN0IE5FV19MSU5FX0NIQVJBQ1RFUiA9IFwiXFxuXCI7XG5leHBvcnQgY29uc3QgQU1QRVJTQU5EX0NIQVJBQ1RFUiA9IFwiJlwiO1xuZXhwb3J0IGNvbnN0IEJBQ0tTTEFTSF9DSEFSQUNURVIgPSBcIlxcXFxcIjtcbmV4cG9ydCBjb25zdCBCQUNLU1BBQ0VfQ0hBUkFDVEVSID0gU3RyaW5nLmZyb21DaGFyQ29kZSgxMjcpO1xuZXhwb3J0IGNvbnN0IFFVRVNUSU9OX01BUktfQ0hBUkFDVEVSID0gXCI/XCI7XG5leHBvcnQgY29uc3QgRk9SV0FSRF9TTEFTSF9DSEFSQUNURVIgPSBcIi9cIjtcbmV4cG9ydCBjb25zdCBPUEVOSU5HX0JSQUNLRVRfQ0hBUkFDVEVSID0gXCIoXCI7XG5leHBvcnQgY29uc3QgQ0xPU0lOR19CUkFDS0VUX0NIQVJBQ1RFUiA9IFwiKVwiO1xuZXhwb3J0IGNvbnN0IENBUlJJQUdFX1JFVFVSTl9DSEFSQUNURVIgPSBcIlxcclwiO1xuZXhwb3J0IGNvbnN0IEVYQ0xBTUFUSU9OX01BUktfQ0hBUkFDVEVSID0gXCIhXCI7XG5leHBvcnQgY29uc3QgT1BFTklOR19DVVJMWV9CUkFDS0VUX0NIQVJBQ1RFUiA9IFwie1wiO1xuZXhwb3J0IGNvbnN0IENMT1NJTkdfQ1VSTFlfQlJBQ0tFVF9DSEFSQUNURVIgPSBcIn1cIjtcbmV4cG9ydCBjb25zdCBPUEVOSU5HX1NRVUFSRV9CUkFDS0VUX0NIQVJBQ1RFUiA9IFwiW1wiO1xuZXhwb3J0IGNvbnN0IENMT1NJTkdfU1FVQVJFX0JSQUNLRVRfQ0hBUkFDVEVSID0gXCJdXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgVVBfQ0hBUkFDVEVSLFxuICBFVFhfQ0hBUkFDVEVSLFxuICBCQVJfQ0hBUkFDVEVSLFxuICBIQVRfQ0hBUkFDVEVSLFxuICBQTFVTX0NIQVJBQ1RFUixcbiAgREFTSF9DSEFSQUNURVIsXG4gIERPV05fQ0hBUkFDVEVSLFxuICBMRUZUX0NIQVJBQ1RFUixcbiAgUklHSFRfQ0hBUkFDVEVSLFxuICBTUEFDRV9DSEFSQUNURVIsXG4gIENPTU1BX0NIQVJBQ1RFUixcbiAgQ09MT05fQ0hBUkFDVEVSLFxuICBQRVJJT0RfQ0hBUkFDVEVSLFxuICBET0xMQVJfQ0hBUkFDVEVSLFxuICBDVFJMX0NfQ0hBUkFDVEVSLFxuICBFU0NBUEVfQ0hBUkFDVEVSLFxuICBBU1RFUklTS19DSEFSQUNURVIsXG4gIFdJTERDQVJEX0NIQVJBQ1RFUixcbiAgQkFDS1RJQ0tfREVMSU1JVEVSLFxuICBORVdfTElORV9DSEFSQUNURVIsXG4gIEFNUEVSU0FORF9DSEFSQUNURVIsXG4gIEJBQ0tTTEFTSF9DSEFSQUNURVIsXG4gIEJBQ0tTUEFDRV9DSEFSQUNURVIsXG4gIFFVRVNUSU9OX01BUktfQ0hBUkFDVEVSLFxuICBGT1JXQVJEX1NMQVNIX0NIQVJBQ1RFUixcbiAgT1BFTklOR19CUkFDS0VUX0NIQVJBQ1RFUixcbiAgQ0xPU0lOR19CUkFDS0VUX0NIQVJBQ1RFUixcbiAgQ0FSUklBR0VfUkVUVVJOX0NIQVJBQ1RFUixcbiAgRVhDTEFNQVRJT05fTUFSS19DSEFSQUNURVIsXG4gIE9QRU5JTkdfQ1VSTFlfQlJBQ0tFVF9DSEFSQUNURVIsXG4gIENMT1NJTkdfQ1VSTFlfQlJBQ0tFVF9DSEFSQUNURVIsXG4gIE9QRU5JTkdfU1FVQVJFX0JSQUNLRVRfQ0hBUkFDVEVSLFxuICBDTE9TSU5HX1NRVUFSRV9CUkFDS0VUX0NIQVJBQ1RFUlxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFpFUk9fMF9TVEFUVVNfQ09ERSA9IDA7XG5leHBvcnQgY29uc3QgT0tfMjAwX1NUQVRVU19DT0RFID0gMjAwO1xuZXhwb3J0IGNvbnN0IEZPVU5EXzMwMl9TVEFUVVNfQ09ERSA9IDMwMjtcbmV4cG9ydCBjb25zdCBDUkVBVEVEXzIwMV9TVEFUVVNfQ09ERSA9IDIwMTtcbmV4cG9ydCBjb25zdCBTRUVfT1RIRVJfMzAzX1NUQVRVU19DT0RFID0gMzAzO1xuZXhwb3J0IGNvbnN0IEZPUkJJRERFTl80MDNfU1RBVFVTX0NPREUgPSA0MDM7XG5leHBvcnQgY29uc3QgTk9UX0ZPVU5EXzQwNF9TVEFUVVNfQ09ERSA9IDQwNDtcbmV4cG9ydCBjb25zdCBOT19DT05URU5UXzIwNF9TVEFUVVNfQ09ERSA9IDIwNDtcbmV4cG9ydCBjb25zdCBCQURfR0FURVdBWV81MDJfU1RBVFVTX0NPREUgPSA1MDI7XG5leHBvcnQgY29uc3QgQkFEX1JFUVVFU1RfNDAwX1NUQVRVU19DT0RFID0gNDAwO1xuZXhwb3J0IGNvbnN0IFVOQVVUSE9SSVpFRF80MDFfU1RBVFVTX0NPREUgPSA0MDE7XG5leHBvcnQgY29uc3QgUkVRVUVTVF9USU1FT1VUXzQwOF9TVEFUVVNfQ09ERSA9IDQwODtcbmV4cG9ydCBjb25zdCBUT09fTUFOWV9SRVFVRVNUU180MjlfU1RBVFVTX0NPREUgPSA0Mjk7XG5leHBvcnQgY29uc3QgU0VSVklDRV9VTkFWQUlMQUJMRV81MDNfU1RBVFVTX0NPREUgPSA1MDM7XG5leHBvcnQgY29uc3QgSU5URVJOQUxfU0VSVkVSX0VSUk9SXzUwMF9TVEFUVVNfQ09ERSA9IDUwMDtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBaRVJPXzBfU1RBVFVTX0NPREUsXG4gIE9LXzIwMF9TVEFUVVNfQ09ERSxcbiAgRk9VTkRfMzAyX1NUQVRVU19DT0RFLFxuICBDUkVBVEVEXzIwMV9TVEFUVVNfQ09ERSxcbiAgU0VFX09USEVSXzMwM19TVEFUVVNfQ09ERSxcbiAgRk9SQklEREVOXzQwM19TVEFUVVNfQ09ERSxcbiAgTk9UX0ZPVU5EXzQwNF9TVEFUVVNfQ09ERSxcbiAgTk9fQ09OVEVOVF8yMDRfU1RBVFVTX0NPREUsXG4gIEJBRF9HQVRFV0FZXzUwMl9TVEFUVVNfQ09ERSxcbiAgQkFEX1JFUVVFU1RfNDAwX1NUQVRVU19DT0RFLFxuICBVTkFVVEhPUklaRURfNDAxX1NUQVRVU19DT0RFLFxuICBSRVFVRVNUX1RJTUVPVVRfNDA4X1NUQVRVU19DT0RFLFxuICBUT09fTUFOWV9SRVFVRVNUU180MjlfU1RBVFVTX0NPREUsXG4gIFNFUlZJQ0VfVU5BVkFJTEFCTEVfNTAzX1NUQVRVU19DT0RFLFxuICBJTlRFUk5BTF9TRVJWRVJfRVJST1JfNTAwX1NUQVRVU19DT0RFXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgVEVYVF9IVE1MX0NPTlRFTlRfVFlQRSA9IFwidGV4dC9odG1sXCI7XG5leHBvcnQgY29uc3QgVEVYVF9QTEFJTl9DT05URU5UX1RZUEUgPSBcInRleHQvcGxhaW5cIjtcbmV4cG9ydCBjb25zdCBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRSA9IFwiYXBwbGljYXRpb24vanNvblwiO1xuZXhwb3J0IGNvbnN0IFRFWFRfSFRNTF9DSEFSU0VUX1VURl84X0NPTlRFTlRfVFlQRSA9IFwidGV4dC9odG1sOyBjaGFyc2V0PXV0Zi04XCI7XG5leHBvcnQgY29uc3QgVEVYVF9QTEFJTl9DSEFSU0VUX1VURl84X0NPTlRFTlRfVFlQRSA9IFwidGV4dC9wbGFpbjsgY2hhcnNldD11dGYtOFwiO1xuZXhwb3J0IGNvbnN0IEFQUExJQ0FUSU9OX09DVEVUX1NUUkVBTV9DT05URU5UX1RZUEUgPSBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiO1xuZXhwb3J0IGNvbnN0IEFQUExJQ0FUSU9OX1hfV1dXX0ZPUk1fRU5DT0RFRF9DT05URU5UX1RZUEUgPSBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiO1xuZXhwb3J0IGNvbnN0IEFQUExJQ0FUSU9OX0pTT05fQ0hBUlNFVF9VVEZfOF9DT05URU5UX1RZUEUgPSBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIjtcbmV4cG9ydCBjb25zdCBBUFBMSUNBVElPTl9YX1dXV19GT1JNX0VOQ09ERURfQ0hBUlNFVF9VVEZfOF9DT05URU5UX1RZUEUgPSBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD11dGYtOFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFRFWFRfSFRNTF9DT05URU5UX1RZUEUsXG4gIFRFWFRfUExBSU5fQ09OVEVOVF9UWVBFLFxuICBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRSxcbiAgVEVYVF9IVE1MX0NIQVJTRVRfVVRGXzhfQ09OVEVOVF9UWVBFLFxuICBURVhUX1BMQUlOX0NIQVJTRVRfVVRGXzhfQ09OVEVOVF9UWVBFLFxuICBBUFBMSUNBVElPTl9PQ1RFVF9TVFJFQU1fQ09OVEVOVF9UWVBFLFxuICBBUFBMSUNBVElPTl9KU09OX0NIQVJTRVRfVVRGXzhfQ09OVEVOVF9UWVBFLFxuICBBUFBMSUNBVElPTl9YX1dXV19GT1JNX0VOQ09ERURfQ09OVEVOVF9UWVBFLFxuICBBUFBMSUNBVElPTl9YX1dXV19GT1JNX0VOQ09ERURfQ0hBUlNFVF9VVEZfOF9DT05URU5UX1RZUEVcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBaRVJPXzBfU1RBVFVTX01FU1NBR0UgPSBcIlwiO1xuZXhwb3J0IGNvbnN0IE9LXzIwMF9TVEFUVVNfTUVTU0FHRSA9IFwiT0tcIjtcbmV4cG9ydCBjb25zdCBGT1VORF8zMDJfU1RBVFVTX01FU1NBR0UgPSBcIkZvdW5kXCI7XG5leHBvcnQgY29uc3QgQ1JFQVRFRF8yMDFfU1RBVFVTX01FU1NBR0UgPSBcIkNyZWF0ZWRcIjtcbmV4cG9ydCBjb25zdCBTRUVfT1RIRVJfMzAzX1NUQVRVU19NRVNTQUdFID0gXCJTZWUgb3RoZXJcIjtcbmV4cG9ydCBjb25zdCBGT1JCSURERU5fNDAzX1NUQVRVU19NRVNTQUdFID0gXCJGb3JiaWRkZW5cIjtcbmV4cG9ydCBjb25zdCBOT1RfRk9VTkRfNDA0X1NUQVRVU19NRVNTQUdFID0gXCJOb3QgZm91bmRcIjtcbmV4cG9ydCBjb25zdCBOT19DT05URU5UXzIwNF9TVEFUVVNfTUVTU0FHRSA9IFwiTm8gY29udGVudFwiO1xuZXhwb3J0IGNvbnN0IEJBRF9HQVRFV0FZXzUwMl9TVEFUVVNfTUVTU0FHRSA9IFwiQmFkIGdhdGV3YXlcIjtcbmV4cG9ydCBjb25zdCBCQURfUkVRVUVTVF80MDBfU1RBVFVTX01FU1NBR0UgPSBcIkJhZCByZXF1ZXN0XCI7XG5leHBvcnQgY29uc3QgVU5BVVRIT1JJWkVEXzQwMV9TVEFUVVNfTUVTU0FHRSA9IFwiVW5hdXRob3JpemVkXCI7XG5leHBvcnQgY29uc3QgUkVRVUVTVF9USU1FT1VUXzQwOF9TVEFUVVNfTUVTU0FHRSA9IFwiUmVxdWVzdCB0aW1lb3V0XCI7XG5leHBvcnQgY29uc3QgVE9PX01BTllfUkVRVUVTVFNfNDI5X1NUQVRVU19NRVNTQUdFID0gXCJUb28gbWFueSByZXF1ZXN0c1wiO1xuZXhwb3J0IGNvbnN0IFNFUlZJQ0VfVU5BVkFJTEFCTEVfNTAzX1NUQVRVU19NRVNTQUdFID0gXCJTZXJ2aWNlIHVuYXZhaWxhYmxlXCI7XG5leHBvcnQgY29uc3QgSU5URVJOQUxfU0VSVkVSX0VSUk9SXzUwMF9TVEFUVVNfTUVTU0FHRSA9IFwiSW50ZXJuYWwgc2VydmVyIGVycm9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgWkVST18wX1NUQVRVU19NRVNTQUdFLFxuICBPS18yMDBfU1RBVFVTX01FU1NBR0UsXG4gIEZPVU5EXzMwMl9TVEFUVVNfTUVTU0FHRSxcbiAgQ1JFQVRFRF8yMDFfU1RBVFVTX01FU1NBR0UsXG4gIFNFRV9PVEhFUl8zMDNfU1RBVFVTX01FU1NBR0UsXG4gIEZPUkJJRERFTl80MDNfU1RBVFVTX01FU1NBR0UsXG4gIE5PVF9GT1VORF80MDRfU1RBVFVTX01FU1NBR0UsXG4gIE5PX0NPTlRFTlRfMjA0X1NUQVRVU19NRVNTQUdFLFxuICBCQURfR0FURVdBWV81MDJfU1RBVFVTX01FU1NBR0UsXG4gIEJBRF9SRVFVRVNUXzQwMF9TVEFUVVNfTUVTU0FHRSxcbiAgVU5BVVRIT1JJWkVEXzQwMV9TVEFUVVNfTUVTU0FHRSxcbiAgUkVRVUVTVF9USU1FT1VUXzQwOF9TVEFUVVNfTUVTU0FHRSxcbiAgVE9PX01BTllfUkVRVUVTVFNfNDI5X1NUQVRVU19NRVNTQUdFLFxuICBTRVJWSUNFX1VOQVZBSUxBQkxFXzUwM19TVEFUVVNfTUVTU0FHRSxcbiAgSU5URVJOQUxfU0VSVkVSX0VSUk9SXzUwMF9TVEFUVVNfTUVTU0FHRVxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFpFUk8gPSBcIjBcIjtcbmV4cG9ydCBjb25zdCBEQVRBID0gXCJkYXRhXCI7XG5leHBvcnQgY29uc3QgRVJST1IgPSBcImVycm9yXCI7XG5leHBvcnQgY29uc3QgU1RSSU5HID0gXCJzdHJpbmdcIjtcbmV4cG9ydCBjb25zdCBOVU1CRVIgPSBcIm51bWJlclwiO1xuZXhwb3J0IGNvbnN0IEJPT0xFQU4gPSBcImJvb2xlYW5cIjtcbmV4cG9ydCBjb25zdCBERUZBVUxUID0gXCJkZWZhdWx0XCI7XG5leHBvcnQgY29uc3QgRU5WSVJPTk1FTlQgPSBcIkVOVklST05NRU5UXCI7XG5leHBvcnQgY29uc3QgRU1QVFlfU1RSSU5HID0gXCJcIjtcbmV4cG9ydCBjb25zdCBQQUNLQUdFX0pTT04gPSBcInBhY2thZ2UuanNvblwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdO31cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoaXJkKGFycmF5KSB7IHJldHVybiBhcnJheVsyXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZm91cnRoKGFycmF5KSB7IHJldHVybiBhcnJheVszXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZmlmdGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzRdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzaXh0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldmVudGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzZdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBlaWdodGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzddOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBuaW50aChhcnJheSkgeyByZXR1cm4gYXJyYXlbOF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlbnRoKGFycmF5KSB7IHJldHVybiBhcnJheVs5XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZmlyc3RMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gc2Vjb25kTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMl07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoaXJkTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gM107IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvdXJ0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDRdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWZ0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDVdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzaXh0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDZdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXZlbnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gN107IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGVpZ2h0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDhdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBuaW50aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDldOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gaGVhZChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMCwgMSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHRhaWwoYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKDEpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZShhcnJheS5sZW5ndGggLSAxKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZnJvbnQoYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKDAsIE1hdGgubWF4KDEsIGFycmF5Lmxlbmd0aCAtIDEpKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gcHVzaChhcnJheUEsIGFycmF5QikgeyBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcnJheUEsIGFycmF5Qik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2hpZnQoYXJyYXlBLCBhcnJheUIpIHsgQXJyYXkucHJvdG90eXBlLnVuc2hpZnQuYXBwbHkoYXJyYXlBLCBhcnJheUIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXQoYXJyYXlBLCBlbGVtZW50T3JBcnJheTIpIHtcbiAgY29uc3QgYXJyYXlCID0gKGVsZW1lbnRPckFycmF5MiBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRPckFycmF5MiA6XG4gICAgICAgICAgICAgICAgICAgICBbIGVsZW1lbnRPckFycmF5MiBdO1xuICBcbiAgcHVzaChhcnJheUEsIGFycmF5Qik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhcihhcnJheSkge1xuICBjb25zdCBzdGFydCA9IDA7XG4gIFxuICByZXR1cm4gYXJyYXkuc3BsaWNlKHN0YXJ0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvcHkoYXJyYXlBLCBhcnJheUIpIHtcbiAgY29uc3Qgc3RhcnQgPSAwLFxuICAgICAgICBkZWxldGVDb3VudCA9IGFycmF5Qi5sZW5ndGg7ICAvLy9cbiAgXG4gIHNwbGljZShhcnJheUEsIHN0YXJ0LCBkZWxldGVDb3VudCwgYXJyYXlCKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlKGFycmF5QSwgYXJyYXlCKSB7IEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFycmF5QSwgYXJyYXlCKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2goYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGxldCBtYXRjaGVzID0gZmFsc2U7XG5cbiAgY29uc3QgYXJyYXlBTGVuZ3RoID0gYXJyYXlBLmxlbmd0aCxcbiAgICAgICAgYXJyYXlCTGVuZ3RoID0gYXJyYXlCLmxlbmd0aDtcblxuICBpZiAoYXJyYXlBTGVuZ3RoID09PSBhcnJheUJMZW5ndGgpIHtcbiAgICBtYXRjaGVzID0gYXJyYXlBLmV2ZXJ5KChlbGVtZW50QSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnRCID0gYXJyYXlCW2luZGV4XSxcbiAgICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnRBLCBlbGVtZW50QiwgaW5kZXgpO1xuXG4gICAgICBpZiAocGFzc2VkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG1hdGNoZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlKGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBsZXQgY291cGxlZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGFycmF5QUxlbmd0aCA9IGFycmF5QS5sZW5ndGgsXG4gICAgICAgIGFycmF5Qkxlbmd0aCA9IGFycmF5Qi5sZW5ndGg7XG5cbiAgaWYgKGFycmF5QUxlbmd0aCA9PT0gYXJyYXlCTGVuZ3RoKSB7XG4gICAgYXJyYXlCID0gWyAgLy8vXG4gICAgICAuLi5hcnJheUJcbiAgICBdO1xuXG4gICAgY291cGxlZCA9IGFycmF5QS5ldmVyeSgoZWxlbWVudEEsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50QiA9IGV4dHJhY3QoYXJyYXlCLCAoZWxlbWVudEIpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudEEsIGVsZW1lbnRCKTtcblxuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pIHx8IG51bGw7XG5cbiAgICAgIGlmIChlbGVtZW50QiAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBjb3VwbGVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29ycmVsYXRlKGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBhcnJheUIgPSBbICAvLy9cbiAgICAuLi5hcnJheUJcbiAgXTtcblxuICBjb25zdCBjb3JyZWxhdGVzID0gYXJyYXlBLmV2ZXJ5KChlbGVtZW50QSkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnRCID0gZXh0cmFjdChhcnJheUIsIChlbGVtZW50QikgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudEEsIGVsZW1lbnRCKTtcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKGVsZW1lbnRCICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjb3JyZWxhdGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZShhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgbGV0IHJlc29sdmVkO1xuXG4gIGFycmF5QSA9IFsgIC8vL1xuICAgIC4uLmFycmF5QVxuICBdO1xuXG4gIGZvciAoOzspIHtcbiAgICBjb25zdCBhcnJheUFMZW5ndGggPSBhcnJheUEubGVuZ3RoO1xuXG4gICAgaWYgKGFycmF5QUxlbmd0aCA9PT0gMCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgbGV0IHJlc29sdmVkID0gZmFsc2U7XG5cbiAgICBhcnJheUEuZm9yRWFjaCgoZWxlbWVudEEpID0+IHtcbiAgICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnRBKTtcblxuICAgICAgaWYgKHBhc3NlZCkge1xuICAgICAgICBjb25zdCBlbGVtZW50QiA9IGVsZW1lbnRBOyAgLy8vXG5cbiAgICAgICAgYXJyYXlCLnB1c2goZWxlbWVudEIpO1xuXG4gICAgICAgIHJlc29sdmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghcmVzb2x2ZWQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGZpbHRlcihhcnJheUEsIChlbGVtZW50QSkgPT4ge1xuICAgICAgY29uc3QgYXJyYXlCSW5jbHVkZXNFbGVtZW50QSA9IGFycmF5Qi5pbmNsdWRlcyhlbGVtZW50QSk7XG5cbiAgICAgIGlmICghYXJyYXlCSW5jbHVkZXNFbGVtZW50QSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGFycmF5QUxlbmd0aCA9IGFycmF5QS5sZW5ndGg7XG5cbiAgcmVzb2x2ZWQgPSAoYXJyYXlBTGVuZ3RoID09PSAwKTtcblxuICByZXR1cm4gcmVzb2x2ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBlbGVtZW50cyA9IFtdO1xuXG4gIGZvcndhcmRzRm9yRWFjaChhcnJheSwgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2UoYXJyYXksIGVsZW1lbnQsIGNhbGxiYWNrKSB7XG4gIGxldCBzdGFydDtcbiAgXG4gIGNvbnN0IGZvdW5kID0gYXJyYXkuc29tZSgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBzdGFydCA9IGluZGV4OyAgLy8vXG4gICAgICBcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIFxuICBpZiAoZm91bmQpIHtcbiAgICBjb25zdCBkZWxldGVDb3VudCA9IDE7XG5cbiAgICBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwbGljZShhcnJheUEsIHN0YXJ0LCBkZWxldGVDb3VudCA9IEluZmluaXR5LCBhcnJheUIgPSBbXSkge1xuICBjb25zdCBhcmdzID0gWyBzdGFydCwgZGVsZXRlQ291bnQsIC4uLmFycmF5QiBdLFxuICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KGFycmF5QSwgYXJncyk7XG5cbiAgcmV0dXJuIGRlbGV0ZWRFbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcihhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgZGVsZXRlZEVsZW1lbnRzID0gW107XG4gIFxuICBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxLFxuICAgICAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICBmaXJzdERlbGV0ZWRFbGVtZW50ID0gZmlyc3QoZGVsZXRlZEVsZW1lbnRzKTtcbiAgICAgIFxuICAgICAgZGVsZXRlZEVsZW1lbnRzLnVuc2hpZnQoZmlyc3REZWxldGVkRWxlbWVudCk7ICAvLy9cbiAgICB9XG4gIH0pO1xuICBcbiAgcmV0dXJuIGRlbGV0ZWRFbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBydW5lKGFycmF5LCBjYWxsYmFjaykge1xuICBsZXQgZGVsZXRlZEVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gIFxuICBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSxcbiAgICAgICAgICAgIGZpcnN0RGVsZXRlZEVsZW1lbnQgPSBmaXJzdChkZWxldGVkRWxlbWVudHMpO1xuICAgICAgXG4gICAgICBkZWxldGVkRWxlbWVudCA9IGZpcnN0RGVsZXRlZEVsZW1lbnQ7ICAvLy9cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbiAgXG4gIHJldHVybiBkZWxldGVkRWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3QoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGxldCBkZWxldGVkRWxlbWVudCA9IHVuZGVmaW5lZDtcblxuICBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMSxcbiAgICAgICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLFxuICAgICAgICAgICAgZmlyc3REZWxldGVkRWxlbWVudCA9IGZpcnN0KGRlbGV0ZWRFbGVtZW50cyk7XG5cbiAgICAgIGRlbGV0ZWRFbGVtZW50ID0gZmlyc3REZWxldGVkRWxlbWVudDsgIC8vL1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkZWxldGVkRWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoKGFycmF5LCBlbGVtZW50LCBjYWxsYmFjaykge1xuICBjb25zdCBmb3VuZCA9IGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuXG4gIGlmIChmb3VuZCkge1xuICAgIGFycmF5LnB1c2goZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZm91bmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wcmVzcyhhcnJheSwgY2FsbGJhY2spIHtcbiAgbGV0IGluZGV4MSA9IDAsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKGluZGV4MSA8IGxlbmd0aCkge1xuICAgIGNvbnN0IGVsZW1lbnRCID0gYXJyYXlbaW5kZXgxXTtcblxuICAgIGZvciAobGV0IGluZGV4MiA9IGxlbmd0aCAtIDE7IGluZGV4MiA+IGluZGV4MTsgaW5kZXgyLS0pIHtcbiAgICAgIGNvbnN0IGVsZW1lbnRBID0gYXJyYXlbaW5kZXgyXSxcbiAgICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnRBLCBlbGVtZW50Qik7XG5cbiAgICAgIGlmIChwYXNzZWQpIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleDIsIC8vL1xuICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgICAgYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW5kZXgxKys7XG5cbiAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmUoYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5ID0gW1xuICAgIC4uLmFycmF5QSxcbiAgICAuLi5hcnJheUJcbiAgXTtcblxuICBjb21wcmVzcyhhcnJheSwgY2FsbGJhY2spO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldmVyc2UoYXJyYXkpIHtcbiAgYXJyYXkgPSBbIC8vL1xuICAgIC4uLmFycmF5XG4gIF0ucmV2ZXJzZSgpO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1Z21lbnQoYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGFycmF5Qi5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGFycmF5QS5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXBhcmF0ZShhcnJheSwgYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGFycmF5LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgcGFzc2VkID9cbiAgICAgIGFycmF5QS5wdXNoKGVsZW1lbnQpIDpcbiAgICAgICAgYXJyYXlCLnB1c2goZWxlbWVudCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNGaW5kKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0ZpbmQoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc1NvbWUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICAgIFxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc1NvbWUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0V2ZXJ5KGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNFdmVyeShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc1JlZHVjZShhcnJheSwgY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICBsZXQgdmFsdWUgPSBpbml0aWFsVmFsdWU7IC8vL1xuXG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICB2YWx1ZSA9IGNhbGxiYWNrKHZhbHVlLCBlbGVtZW50LCBpbmRleCk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNSZWR1Y2UoYXJyYXksIGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgbGV0IHZhbHVlID0gaW5pdGlhbFZhbHVlOyAvLy9cblxuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICB2YWx1ZSA9IGNhbGxiYWNrKHZhbHVlLCBlbGVtZW50LCBpbmRleCk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGZpcnN0LFxuICBzZWNvbmQsXG4gIHRoaXJkLFxuICBmb3VydGgsXG4gIGZpZnRoLFxuICBzaXh0aCxcbiAgc2V2ZW50aCxcbiAgZWlnaHRoLFxuICBuaW50aCxcbiAgZmlyc3RMYXN0LFxuICBzZWNvbmRMYXN0LFxuICB0aGlyZExhc3QsXG4gIGZvdXJ0aExhc3QsXG4gIGZpZnRoTGFzdCxcbiAgc2l4dGhMYXN0LFxuICBzZXZlbnRoTGFzdCxcbiAgZWlnaHRoTGFzdCxcbiAgbmludGhMYXN0LFxuICBsYXN0LFxuICBoZWFkLFxuICB0YWlsLFxuICBiYWNrLFxuICBmcm9udCxcbiAgcHVzaCxcbiAgdW5zaGlmdCxcbiAgY29uY2F0LFxuICBjbGVhcixcbiAgY29weSxcbiAgbWVyZ2UsXG4gIG1hdGNoLFxuICBjb21wYXJlLFxuICBjb3JyZWxhdGUsXG4gIHJlc29sdmUsXG4gIGZpbmQsXG4gIHJlcGxhY2UsXG4gIHNwbGljZSxcbiAgZmlsdGVyLFxuICBwcnVuZSxcbiAgZXh0cmFjdCxcbiAgcGF0Y2gsXG4gIGNvbXByZXNzLFxuICBjb21iaW5lLFxuICByZXZlcnNlLFxuICBhdWdtZW50LFxuICBzZXBhcmF0ZSxcbiAgZm9yd2FyZHNGaW5kLFxuICBiYWNrd2FyZHNGaW5kLFxuICBmb3J3YXJkc1NvbWUsXG4gIGJhY2t3YXJkc1NvbWUsXG4gIGZvcndhcmRzRXZlcnksXG4gIGJhY2t3YXJkc0V2ZXJ5LFxuICBmb3J3YXJkc1JlZHVjZSxcbiAgYmFja3dhcmRzUmVkdWNlLFxuICBmb3J3YXJkc0ZvckVhY2gsXG4gIGJhY2t3YXJkc0ZvckVhY2hcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQsIGxhc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdGhOYW1lKHBhdGgpIHtcbiAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXlxcLy8sIEVNUFRZX1NUUklORykucmVwbGFjZSgvXFwvJC8sIEVNUFRZX1NUUklORyk7IC8vL1xuXG4gIGNvbnN0IHBhdGhOYW1lID0gKC9cXC8vLnRlc3QocGF0aCkgPT09IGZhbHNlKTtcblxuICByZXR1cm4gcGF0aE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdGhUb3Btb3N0TmFtZShwYXRoKSB7XG4gIGNvbnN0IHBhdGhOYW1lID0gaXNQYXRoTmFtZShwYXRoKSxcbiAgICAgICAgcGF0aEFic29sdXRlUGF0aCA9IGlzUGF0aEFic29sdXRlUGF0aChwYXRoKSxcbiAgICAgICAgcGF0aFRvcG1vc3ROYW1lID0gKHBhdGhOYW1lICYmIHBhdGhBYnNvbHV0ZVBhdGgpO1xuXG4gIHJldHVybiBwYXRoVG9wbW9zdE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdGhSZWxhdGl2ZVBhdGgocGF0aCkge1xuICBjb25zdCBwYXRoUmVsYXRpdmVQYXRoID0gIS9eXFwvLy50ZXN0KHBhdGgpO1xuXG4gIHJldHVybiBwYXRoUmVsYXRpdmVQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXRoQWJzb2x1dGVQYXRoKHBhdGgpIHtcbiAgY29uc3QgcGF0aEFic29sdXRlUGF0aCA9IC9eXFwvLy50ZXN0KHBhdGgpO1xuXG4gIHJldHVybiBwYXRoQWJzb2x1dGVQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUb3Btb3N0TmFtZUluQWJzb2x1dGVQYXRoKHRvcG1vc3ROYW1lLCBhYnNvbHV0ZVBhdGgpIHtcbiAgY29uc3QgcmVnRXhwID0gbmV3IFJlZ0V4cChgXiR7dG9wbW9zdE5hbWV9KD86XFxcXC8uKyk/JGApLFxuICAgICAgICB0b3Btb3N0TmFtZUluQWJzb2x1dGVQYXRoID0gcmVnRXhwLnRlc3QoYWJzb2x1dGVQYXRoKTtcblxuICByZXR1cm4gdG9wbW9zdE5hbWVJbkFic29sdXRlUGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZVBhdGhzKHBhdGgsIHJlbGF0aXZlUGF0aCkge1xuICBsZXQgY29tYmluZWRQYXRoID0gbnVsbDtcblxuICBjb25zdCBwYXRoTmFtZXMgPSBwYXRoLnNwbGl0KC9cXC8vKSxcbiAgICAgICAgcmVsYXRpdmVQYXRoTmFtZXMgPSByZWxhdGl2ZVBhdGguc3BsaXQoL1xcLy8pO1xuXG4gIGxldCBsYXN0UGF0aE5hbWUsXG4gICAgICBmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPSBmaXJzdChyZWxhdGl2ZVBhdGhOYW1lcyk7XG5cbiAgaWYgKGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9PT0gXCIuXCIpIHtcbiAgICByZWxhdGl2ZVBhdGhOYW1lcy5zaGlmdCgpO1xuICB9XG5cbiAgZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID0gZmlyc3QocmVsYXRpdmVQYXRoTmFtZXMpO1xuICBsYXN0UGF0aE5hbWUgPSBsYXN0KHBhdGhOYW1lcyk7XG5cbiAgd2hpbGUgKChmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPT09IFwiLi5cIikgJiYgKGxhc3RQYXRoTmFtZSAhPT0gdW5kZWZpbmVkKSkge1xuICAgIHJlbGF0aXZlUGF0aE5hbWVzLnNoaWZ0KCk7XG4gICAgcGF0aE5hbWVzLnBvcCgpO1xuXG4gICAgZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID0gZmlyc3QocmVsYXRpdmVQYXRoTmFtZXMpO1xuICAgIGxhc3RQYXRoTmFtZSA9IGxhc3QocGF0aE5hbWVzKTtcbiAgfVxuXG4gIGlmIChsYXN0UGF0aE5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGNvbWJpbmVkUGF0aE5hbWVzID0gW10uY29uY2F0KHBhdGhOYW1lcykuY29uY2F0KHJlbGF0aXZlUGF0aE5hbWVzKTtcblxuICAgIGNvbWJpbmVkUGF0aCA9IGNvbWJpbmVkUGF0aE5hbWVzLmpvaW4oXCIvXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNvbWJpbmVkUGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdGVuYXRlUGF0aHMocGF0aCwgcmVsYXRpdmVQYXRoLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgbGV0IGNvbmNhdGVuYXRlZFBhdGg7XG5cbiAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXFwvJC8sIEVNUFRZX1NUUklORyk7ICAvLy9cblxuICBjb25jYXRlbmF0ZWRQYXRoID0gYCR7cGF0aH0vJHtyZWxhdGl2ZVBhdGh9YDtcblxuICBjb25zdCByZW1haW5pbmdBQXJndW1lbnRzTGVuZ3RoID0gcmVtYWluaW5nQXJndW1lbnRzLmxlbmd0aDtcblxuICBpZiAocmVtYWluaW5nQUFyZ3VtZW50c0xlbmd0aCA+IDApIHtcbiAgICBjb25zdCBwYXRoID0gY29uY2F0ZW5hdGVkUGF0aCwgIC8vL1xuICAgICAgICAgIHJlbGF0aXZlUGF0aCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5zaGlmdCgpO1xuXG4gICAgY29uY2F0ZW5hdGVkUGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocGF0aCwgcmVsYXRpdmVQYXRoLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICB9XG5cbiAgcmV0dXJuIGNvbmNhdGVuYXRlZFBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3R0b21tb3N0TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IGJvdHRvbW1vc3ROYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXi4qXFwvKFteXFwvXStcXC8/KSQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgYm90dG9tbW9zdE5hbWUgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIGJvdHRvbW1vc3ROYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aChwYXRoKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKC4rKVxcL1teXFwvXStcXC8/JC8pLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeVBhdGggPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14oW15cXC9dKylcXC8uKyQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKC4qKVxcL1teXFwvXStcXC8/JC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gc2Vjb25kTWF0Y2g7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL15bXlxcL10rXFwvKC4rKSQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHNlY29uZE1hdGNoO1xuICB9XG5cbiAgcmV0dXJuIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaXNQYXRoTmFtZSxcbiAgaXNQYXRoVG9wbW9zdE5hbWUsXG4gIGlzUGF0aFJlbGF0aXZlUGF0aCxcbiAgaXNQYXRoQWJzb2x1dGVQYXRoLFxuICBpc1RvcG1vc3ROYW1lSW5BYnNvbHV0ZVBhdGgsXG4gIGNvbWJpbmVQYXRocyxcbiAgY29uY2F0ZW5hdGVQYXRocyxcbiAgYm90dG9tbW9zdE5hbWVGcm9tUGF0aCxcbiAgdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aCxcbiAgdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCxcbiAgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoLFxuICBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGhcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IENPTE9OX0NIQVJBQ1RFUiwgQU1QRVJTQU5EX0NIQVJBQ1RFUiB9IGZyb20gXCIuLi9jaGFyYWN0ZXJzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvdmVyd3JpdGUoaGVhZGVycywgbmFtZSwgdmFsdWUpIHtcbiAgY29uc3QgbG93ZXJDYXNlTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgZXhpc3RpbmdOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhlYWRlcnMpLCAgLy8vXG4gICAgICAgIGV4aXN0aW5nTmFtZSA9IGV4aXN0aW5nTmFtZXMuZmluZCgoZXhpc3RpbmdOYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgZXhpc3RpbmdMb3dlckNhc2VOYW1lID0gZXhpc3RpbmdOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICBpZiAoZXhpc3RpbmdMb3dlckNhc2VOYW1lID09PSBsb3dlckNhc2VOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pIHx8IG51bGw7XG5cbiAgaWYgKGV4aXN0aW5nTmFtZSAhPT0gbnVsbCkge1xuICAgIGhlYWRlcnNbZXhpc3RpbmdOYW1lXSA9IHZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmRlcndyaXRlKGhlYWRlcnMsIG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IGxvd2VyQ2FzZU5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCksXG4gICAgICAgIGV4aXN0aW5nTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoZWFkZXJzKSwgIC8vL1xuICAgICAgICBleGlzdGluZ05hbWUgPSBleGlzdGluZ05hbWVzLmZpbmQoKGV4aXN0aW5nTmFtZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGV4aXN0aW5nTG93ZXJDYXNlTmFtZSA9IGV4aXN0aW5nTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgaWYgKGV4aXN0aW5nTG93ZXJDYXNlTmFtZSA9PT0gbG93ZXJDYXNlTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSB8fCBudWxsO1xuXG4gIGlmIChleGlzdGluZ05hbWUgPT09IG51bGwpIHtcbiAgICBoZWFkZXJzW25hbWVdID0gdmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcnRGcm9tSG9zdChob3N0KSB7XG4gIGxldCBwb3J0O1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBob3N0Lm1hdGNoKC9eaHR0cHM/OlxcL1xcLyhbXlxcL10rKS8pLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgaW5kZXggPSBzZWNvbmRNYXRjaC5pbmRleE9mKENPTE9OX0NIQVJBQ1RFUik7XG5cbiAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgIGNvbnN0IHNlY3VyZSA9IHNlY3VyZUZyb21Ib3N0KGhvc3QpO1xuXG4gICAgcG9ydCA9IHNlY3VyZSA/IDQ0MyA6IDgwOyAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzdGFydCA9IGluZGV4ICsgMSxcbiAgICAgICAgICBwb3J0U3RyaW5nID0gc2Vjb25kTWF0Y2guc3Vic3RyaW5nKHN0YXJ0KTtcblxuICAgIHBvcnQgPSBOdW1iZXIocG9ydFN0cmluZyk7XG4gIH1cblxuICByZXR1cm4gcG9ydDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY3VyZUZyb21Ib3N0KGhvc3QpIHtcbiAgY29uc3Qgc2VjdXJlID0gL15odHRwczpcXC9cXC8vLnRlc3QoaG9zdCk7XG5cbiAgcmV0dXJuIHNlY3VyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhvc3RuYW1lRnJvbUhvc3QoaG9zdCkge1xuICBjb25zdCBtYXRjaGVzID0gaG9zdC5tYXRjaCgvXmh0dHBzPzpcXC9cXC8oW146XFwvXSspLyksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICBob3N0bmFtZSA9IHNlY29uZE1hdGNoOyAvLy9cblxuICByZXR1cm4gaG9zdG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeVN0cmluZ0Zyb21RdWVyeShxdWVyeSkge1xuICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKHF1ZXJ5KSxcbiAgICAgICAgbmFtZXNMZW5ndGggPSBuYW1lcy5sZW5ndGgsXG4gICAgICAgIGxhc3RJbmRleCA9IG5hbWVzTGVuZ3RoIC0gMSxcbiAgICAgICAgcXVlcnlTdHJpbmcgPSBuYW1lcy5yZWR1Y2UoKHF1ZXJ5U3RyaW5nLCBuYW1lLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gcXVlcnlbbmFtZV0sXG4gICAgICAgICAgICAgICAgZW5jb2RlZE5hbWUgPSBlbmNvZGVVUklDb21wb25lbnQobmFtZSksXG4gICAgICAgICAgICAgICAgZW5jb2RlZFZhbHVlID0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSxcbiAgICAgICAgICAgICAgICBhbXBlcnNhbmRPck5vdGhpbmcgPSAoaW5kZXggIT09IGxhc3RJbmRleCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQU1QRVJTQU5EX0NIQVJBQ1RFUiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORztcbiAgXG4gICAgICAgICAgcXVlcnlTdHJpbmcgKz0gYCR7ZW5jb2RlZE5hbWV9PSR7ZW5jb2RlZFZhbHVlfSR7YW1wZXJzYW5kT3JOb3RoaW5nfWA7XG4gIFxuICAgICAgICAgIHJldHVybiBxdWVyeVN0cmluZztcbiAgICAgICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gcXVlcnlTdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxGcm9tSG9zdFVSSUFuZFF1ZXJ5KGhvc3QsIHVyaSwgcXVlcnkpIHtcbiAgY29uc3QgcXVlcnlTdHJpbmcgPSBxdWVyeVN0cmluZ0Zyb21RdWVyeShxdWVyeSksXG4gICAgICAgIHVybCA9IChxdWVyeVN0cmluZyA9PT0gRU1QVFlfU1RSSU5HKSA/XG4gICAgICAgICAgICAgICAgYCR7aG9zdH0ke3VyaX1gIDpcbiAgICAgICAgICAgICAgICAgIGAke2hvc3R9JHt1cml9PyR7cXVlcnlTdHJpbmd9YDtcblxuICByZXR1cm4gdXJsO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG92ZXJ3cml0ZSxcbiAgdW5kZXJ3cml0ZSxcbiAgcG9ydEZyb21Ib3N0LFxuICBzZWN1cmVGcm9tSG9zdCxcbiAgaG9zdG5hbWVGcm9tSG9zdCxcbiAgcXVlcnlTdHJpbmdGcm9tUXVlcnksXG4gIHVybEZyb21Ib3N0VVJJQW5kUXVlcnlcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmxlbihzdHJpbmcpIHtcbiAgbGV0IGxlbmd0aCA9IDA7XG5cbiAgY29uc3QgaXRlcmF0b3IgPSBzdHJpbmdbU3ltYm9sLml0ZXJhdG9yXSgpO1xuXG4gIGxldCBjaGFyYWN0ZXIgPSBpdGVyYXRvci5uZXh0KCk7XG5cbiAgd2hpbGUgKCFjaGFyYWN0ZXIuZG9uZSkge1xuICAgIGNoYXJhY3RlciA9IGl0ZXJhdG9yLm5leHQoKTtcblxuICAgIGxlbmd0aCsrXG4gIH1cblxuICByZXR1cm4gbGVuZ3RoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyY21wKHN0cmluZ0EsIHN0cmluZ0IpIHtcbiAgbGV0IGRpZmZlcmVuY2U7XG5cbiAgY29uc3QgaXRlcmF0b3JBID0gc3RyaW5nQVtTeW1ib2wuaXRlcmF0b3JdKCksIC8vL1xuICAgICAgICBpdGVyYXRvckIgPSBzdHJpbmdCW1N5bWJvbC5pdGVyYXRvcl0oKTsgLy8vXG5cbiAgbGV0IGNoYXJhY3RlckEgPSBpdGVyYXRvckEubmV4dCgpLFxuICAgICAgY2hhcmFjdGVyQiA9IGl0ZXJhdG9yQi5uZXh0KCksXG4gICAgICBjb2RlUG9pbnRBLFxuICAgICAgY29kZVBvaW50QjtcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvZGVQb2ludEEgPSBjaGFyYWN0ZXJBLnZhbHVlID8gLy8vXG4gICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyQS52YWx1ZS5jb2RlUG9pbnRBdCgwKSA6XG4gICAgICAgICAgICAgICAgICAgICAwO1xuICAgIGNvZGVQb2ludEIgPSBjaGFyYWN0ZXJCLnZhbHVlID8gLy8vXG4gICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyQi52YWx1ZS5jb2RlUG9pbnRBdCgwKSA6XG4gICAgICAgICAgICAgICAgICAgICAwO1xuXG4gICAgZGlmZmVyZW5jZSA9IGNvZGVQb2ludEIgLSBjb2RlUG9pbnRBO1xuXG4gICAgaWYgKGRpZmZlcmVuY2UgIT09IDApIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChjaGFyYWN0ZXJBLmRvbmUgfHwgY2hhcmFjdGVyQi5kb25lKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjaGFyYWN0ZXJBID0gaXRlcmF0b3JBLm5leHQoKTtcbiAgICBjaGFyYWN0ZXJCID0gaXRlcmF0b3JCLm5leHQoKTtcbiAgfVxuXG4gIHJldHVybiBkaWZmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhPZihzdHJpbmcsIHNlYXJjaFN0cmluZykge1xuICBsZXQgaW5kZXggPSAtMSxcbiAgICAgIGZvdW5kID0gZmFsc2U7XG5cbiAgY29uc3Qgc2VhcmNoU3RyaW5nTGVuZ3RoID0gc3RybGVuKHNlYXJjaFN0cmluZyk7XG5cbiAgaWYgKHNlYXJjaFN0cmluZ0xlbmd0aCA+IDApIHtcbiAgICBsZXQgY2hhcmFjdGVyO1xuXG4gICAgY29uc3QgaXRlcmF0b3IgPSBzdHJpbmdbU3ltYm9sLml0ZXJhdG9yXSgpLFxuICAgICAgICAgIHNlYXJjaEl0ZXJhdG9yID0gc2VhcmNoU3RyaW5nW1N5bWJvbC5pdGVyYXRvcl0oKSxcbiAgICAgICAgICBzZWFyY2hDaGFyYWN0ZXIgPSBzZWFyY2hJdGVyYXRvci5uZXh0KCk7XG5cbiAgICBjaGFyYWN0ZXIgPSBpdGVyYXRvci5uZXh0KCk7XG5cbiAgICBpbmRleCsrO1xuXG4gICAgd2hpbGUgKCFjaGFyYWN0ZXIuZG9uZSkge1xuICAgICAgaWYgKGNoYXJhY3Rlci52YWx1ZSA9PT0gc2VhcmNoQ2hhcmFjdGVyLnZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgICAgZW5kID0gc3RhcnQgKyBzZWFyY2hTdHJpbmdMZW5ndGgsXG4gICAgICAgICAgICAgIHN1YlN0cmluZyA9IHN1YnN0cmluZyhzdHJpbmcsIHN0YXJ0LCBlbmQpLFxuICAgICAgICAgICAgICBkaWZmZXJlbmNlID0gc3RyY21wKHN1YlN0cmluZywgc2VhcmNoU3RyaW5nKTtcblxuICAgICAgICBpZiAoZGlmZmVyZW5jZSA9PT0gMCkge1xuICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNoYXJhY3RlciA9IGl0ZXJhdG9yLm5leHQoKTtcblxuICAgICAgaW5kZXgrK1xuICAgIH1cbiAgfVxuXG4gIGlmICghZm91bmQpIHtcbiAgICBpbmRleCA9IC0xO1xuICB9XG5cbiAgcmV0dXJuIGluZGV4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Vic3RyaW5nKHN0cmluZywgc3RhcnQsIGVuZCA9IEluZmluaXR5KSB7XG4gIGxldCBpbmRleCA9IDA7XG5cbiAgY29uc3QgaXRlcmF0b3IgPSBzdHJpbmdbU3ltYm9sLml0ZXJhdG9yXSgpLFxuICAgICAgICBjaGFyYWN0ZXJzID0gW107XG5cbiAgbGV0IGNoYXJhY3RlciA9IGl0ZXJhdG9yLm5leHQoKTtcblxuICB3aGlsZSAoIWNoYXJhY3Rlci5kb25lKSB7XG4gICAgaWYgKGluZGV4ID09PSBlbmQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChpbmRleCA+PSBzdGFydCkge1xuICAgICAgY2hhcmFjdGVycy5wdXNoKGNoYXJhY3Rlci52YWx1ZSk7IC8vL1xuICAgIH1cblxuICAgIGluZGV4KytcblxuICAgIGNoYXJhY3RlciA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgfVxuXG4gIGNvbnN0IHN1YnN0cmluZyA9IGNoYXJhY3RlcnMuam9pbihFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBzdWJzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc3RyY21wLFxuICBzdHJsZW4sXG4gIGluZGV4T2YsXG4gIHN1YnN0cmluZ1xufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1pZ3JhdGUoanNvbiwgbWlncmF0aW9uTWFwLCBsYXRlc3RWZXJzaW9uKSB7XG4gIGxldCB7IHZlcnNpb24gfSA9IGpzb247XG5cbiAgd2hpbGUgKHZlcnNpb24gIT09IGxhdGVzdFZlcnNpb24pIHtcbiAgICBjb25zdCBtaWdyYXRlRnVuY3Rpb24gPSBtaWdyYXRpb25NYXBbdmVyc2lvbl07XG5cbiAgICBqc29uID0gbWlncmF0ZUZ1bmN0aW9uKGpzb24pO1xuXG4gICAgKHsgdmVyc2lvbiB9ID0ganNvbik7XG4gIH1cblxuICByZXR1cm4ganNvbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBtaWdyYXRlXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdoaWxzdChvcGVyYXRpb24sIGRvbmUsIGNvbnRleHQpIHtcclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgdGVybWluYXRlID0gb3BlcmF0aW9uKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvckVhY2goYXJyYXksIG9wZXJhdGlvbiwgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgb3BlcmF0aW9uKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlcXVlbmNlKG9wZXJhdGlvbnMsIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBvcGVyYXRpb25zLmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBvcGVyYXRpb24gPSBvcGVyYXRpb25zW2luZGV4XTtcclxuXHJcbiAgICAgIG9wZXJhdGlvbihuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBldmVudHVhbGx5KG9wZXJhdGlvbnMsIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBvcGVyYXRpb25zLmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvcGVyYXRpb25zLmZvckVhY2goKG9wZXJhdGlvbiwgaW5kZXgpID0+IHtcclxuICAgIG9wZXJhdGlvbihuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXBlYXRlZGx5KG9wZXJhdGlvbiwgbGVuZ3RoLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgbGV0IGNvdW50ID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgb3BlcmF0aW9uKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0ZvckVhY2goYXJyYXksIG9wZXJhdGlvbiwgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgb3BlcmF0aW9uKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIG9wZXJhdGlvbiwgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSBsZW5ndGg7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudC0tO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gLTEpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgb3BlcmF0aW9uKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHdoaWxzdCxcclxuICBmb3JFYWNoLFxyXG4gIHNlcXVlbmNlLFxyXG4gIGV2ZW50dWFsbHksXHJcbiAgcmVwZWF0ZWRseSxcclxuICBmb3J3YXJkc0ZvckVhY2gsXHJcbiAgYmFja3dhcmRzRm9yRWFjaFxyXG59O1xyXG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEdFVF9NRVRIT0QsIFBPU1RfTUVUSE9EIH0gZnJvbSBcIi4uL21ldGhvZHNcIjtcbmltcG9ydCB7IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFIH0gZnJvbSBcIi4uL2NvbnRlbnRUeXBlc1wiO1xuaW1wb3J0IHsgQUNDRVBUX0hFQURFUiwgQ09OVEVOVF9UWVBFX0hFQURFUiB9IGZyb20gXCIuLi9oZWFkZXJzXCI7XG5pbXBvcnQgeyB1bmRlcndyaXRlLCB1cmxGcm9tSG9zdFVSSUFuZFF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9odHRwXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXQoaG9zdCwgdXJpLCBxdWVyeSwgaGVhZGVycywgY2FsbGJhY2spIHtcbiAgaWYgKGNhbGxiYWNrID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxsYmFjayA9IGhlYWRlcnM7IC8vL1xuICAgIGhlYWRlcnMgPSB7fTtcbiAgfVxuXG4gIGNvbnN0IG1ldGhvZCA9IEdFVF9NRVRIT0QsXG4gICAgICAgIGFjY2VwdCA9IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFLFxuICAgICAgICBjb250ZW50ID0gbnVsbDtcblxuICB1bmRlcndyaXRlQWNjZXB0SGVhZGVyKGhlYWRlcnMsIGFjY2VwdCk7XG5cbiAgcmVxdWVzdChob3N0LCB1cmksIHF1ZXJ5LCBtZXRob2QsIGhlYWRlcnMsIGNvbnRlbnQsIGNhbGxiYWNrKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvc3QoaG9zdCwgdXJpLCBxdWVyeSwgaGVhZGVycywgY29udGVudCwgY2FsbGJhY2spIHtcbiAgaWYgKGNhbGxiYWNrID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxsYmFjayA9IGNvbnRlbnQ7XG4gICAgY29udGVudCA9IGhlYWRlcnM7XG4gICAgaGVhZGVycyA9IHt9O1xuICB9XG5cbiAgY29uc3QgbWV0aG9kID0gUE9TVF9NRVRIT0QsXG4gICAgICAgIGFjY2VwdCA9IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFLFxuICAgICAgICBjb250ZW50VHlwZSA9IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFO1xuXG4gIHVuZGVyd3JpdGVBY2NlcHRIZWFkZXIoaGVhZGVycywgYWNjZXB0KTtcblxuICB1bmRlcndyaXRlQ29udGVudFR5cGVIZWFkZXIoaGVhZGVycywgY29udGVudFR5cGUpO1xuXG4gIHJlcXVlc3QoaG9zdCwgdXJpLCBxdWVyeSwgbWV0aG9kLCBoZWFkZXJzLCBjb250ZW50LCBjYWxsYmFjayk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXF1ZXN0KGhvc3QsIHVyaSwgcXVlcnksIG1ldGhvZCwgaGVhZGVycywgY29udGVudCwgY2FsbGJhY2spIHtcbiAgY29uc3QgdXJsID0gdXJsRnJvbUhvc3RVUklBbmRRdWVyeShob3N0LCB1cmksIHF1ZXJ5KSxcbiAgICAgICAgYWNjZXB0ID0gaGVhZGVyc1tBQ0NFUFRfSEVBREVSXSB8fCBudWxsLFxuICAgICAgICBjb250ZW50VHlwZSA9IGhlYWRlcnNbQ09OVEVOVF9UWVBFX0hFQURFUl0gfHwgbnVsbCxcbiAgICAgICAgeG1sSHR0cFJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICBpZiAoY29udGVudFR5cGUgPT09IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFKSB7XG4gICAgY29uc3QganNvbiA9IGNvbnRlbnQsICAvLy9cbiAgICAgICAgICBqc29uU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoanNvbik7XG5cbiAgICBjb250ZW50ID0ganNvblN0cmluZzsgIC8vL1xuICB9XG5cbiAgeG1sSHR0cFJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcmVhZHlTdGF0ZSwgc3RhdHVzLCByZXNwb25zZSB9ID0geG1sSHR0cFJlcXVlc3QsXG4gICAgICAgICAgc3RhdHVzQ29kZSA9IHN0YXR1cztcblxuICAgIGlmIChyZWFkeVN0YXRlID09IDQpIHtcbiAgICAgIGxldCBjb250ZW50ID0gcmVzcG9uc2U7XG5cbiAgICAgIGlmIChhY2NlcHQgPT09IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QganNvblN0cmluZyA9IGNvbnRlbnQsICAvLy9cbiAgICAgICAgICAgICAgICBqc29uID0gSlNPTi5wYXJzZShqc29uU3RyaW5nKTtcblxuICAgICAgICAgIGNvbnRlbnQgPSBqc29uOyAgLy8vXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29udGVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY2FsbGJhY2soY29udGVudCwgc3RhdHVzQ29kZSk7XG4gICAgfVxuICB9O1xuXG4gIHhtbEh0dHBSZXF1ZXN0Lm9wZW4obWV0aG9kLCB1cmwpO1xuXG4gIGlmIChhY2NlcHQgIT09IG51bGwpIHtcbiAgICB4bWxIdHRwUmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKEFDQ0VQVF9IRUFERVIsIGFjY2VwdCk7XG4gIH1cblxuICBpZiAoY29udGVudFR5cGUgIT09IG51bGwpIHtcbiAgICB4bWxIdHRwUmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKENPTlRFTlRfVFlQRV9IRUFERVIsIGNvbnRlbnRUeXBlKTtcbiAgfVxuXG4gIChjb250ZW50ICE9PSBudWxsKSA/XG4gICAgeG1sSHR0cFJlcXVlc3Quc2VuZChjb250ZW50KSA6XG4gICAgICB4bWxIdHRwUmVxdWVzdC5zZW5kKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0LFxuICBwb3N0LFxuICByZXF1ZXN0XG59XG5cbmZ1bmN0aW9uIHVuZGVyd3JpdGVBY2NlcHRIZWFkZXIoaGVhZGVycywgYWNjZXB0KSB7XG4gIGNvbnN0IG5hbWUgPSBBQ0NFUFRfSEVBREVSLCAgLy8vXG4gICAgICAgIHZhbHVlID0gYWNjZXB0OyAvLy9cblxuICB1bmRlcndyaXRlKGhlYWRlcnMsIG5hbWUsIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gdW5kZXJ3cml0ZUNvbnRlbnRUeXBlSGVhZGVyKGhlYWRlcnMsIGNvbnRlbnRUWXBlKSB7XG4gIGNvbnN0IG5hbWUgPSBDT05URU5UX1RZUEVfSEVBREVSLCAgLy8vXG4gICAgICAgIHZhbHVlID0gY29udGVudFRZcGU7IC8vL1xuXG4gIHVuZGVyd3JpdGUoaGVhZGVycywgbmFtZSwgdmFsdWUpO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIGxldmVscyB9IGZyb20gXCIuL2xldmVsc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtZXRob2RzIH0gZnJvbSBcIi4vbWV0aG9kc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBoZWFkZXJzIH0gZnJvbSBcIi4vaGVhZGVyc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBrZXlDb2RlcyB9IGZyb20gXCIuL2tleUNvZGVzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGVuY29kaW5ncyB9IGZyb20gXCIuL2VuY29kaW5nc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjaGFyYWN0ZXJzIH0gZnJvbSBcIi4vY2hhcmFjdGVyc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzdGF0dXNDb2RlcyB9IGZyb20gXCIuL3N0YXR1c0NvZGVzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbnRlbnRUeXBlcyB9IGZyb20gXCIuL2NvbnRlbnRUeXBlc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzdGF0dXNNZXNzYWdlcyB9IGZyb20gXCIuL3N0YXR1c01lc3NhZ2VzXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGF0aFV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9wYXRoXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGh0dHBVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvaHR0cFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzdHJpbmdVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHZlcnNpb25VdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvdmVyc2lvblwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXN5bmNocm9ub3VzXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWpheFV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9hamF4XCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5leHBvcnQgY29uc3QgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCwgZm91cnRoLCBwdXNoLCBzZXBhcmF0ZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQoYXJyYXlBLCBhcnJheUIpIHtcbiAgYXJyYXlCLmZvckVhY2goKGVsZW1lbnRCKSA9PiB7XG4gICAgYXJyYXlBLnB1c2goZWxlbWVudEIpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcm11dGUoYXJyYXksIHBsYWNlcykge1xuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICAgIGN1dCA9IGxlbmd0aCAtIHBsYWNlcyxcbiAgICAgICAgbGVhZGluZ0VsZW1lbnRzID0gYXJyYXkuc2xpY2UoMCwgY3V0KSxcbiAgICAgICAgdHJhaWxpbmdFbGVtZW50cyA9IGFycmF5LnNsaWNlKGN1dCk7XG5cbiAgYXJyYXkgPSBbIC4uLnRyYWlsaW5nRWxlbWVudHMsIC4uLmxlYWRpbmdFbGVtZW50cyBdO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW4oYXJyYXlzKSB7XG4gIHJldHVybiBhcnJheXMucmVkdWNlKChlbGVtZW50cywgYXJyYXkpID0+IGVsZW1lbnRzLmNvbmNhdChhcnJheSksIFtdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGd1YXJhbnRlZShhcnJheU9yRWxlbWVudCkge1xuICBhcnJheU9yRWxlbWVudCA9IGFycmF5T3JFbGVtZW50IHx8IFtdO1xuXG4gIHJldHVybiAoYXJyYXlPckVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgYXJyYXlPckVsZW1lbnQgOlxuICAgICAgICAgICAgIFsgYXJyYXlPckVsZW1lbnQgXTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRlVOQ1RJT04gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuaW1wb3J0IHsgZ3VhcmFudGVlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsZW1lbnQge1xuICBnZXRQcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BlcnRpZXM7XG4gIH1cblxuICBnZXRDaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBzZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuICB9XG5cbiAgc2V0Q2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSB7XG4gICAgdGhpcy5jaGlsZEVsZW1lbnRzID0gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IG5ldyBDbGFzcyguLi5yZW1haW5pbmdBcmd1bWVudHMpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSAodHlwZW9mIGVsZW1lbnQuY2hpbGRFbGVtZW50cyA9PT0gRlVOQ1RJT04pID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBndWFyYW50ZWUoZWxlbWVudC5jaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzLmNoaWxkRWxlbWVudHMgfHwgW107XG5cbiAgICBlbGVtZW50LnNldFByb3BlcnRpZXMocHJvcGVydGllcyk7XG5cbiAgICBlbGVtZW50LnNldENoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gemVybzIoKSB7XG4gIHJldHVybiAoW1xuXG4gICAgMCxcbiAgICAwLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gemVybzMoKSB7XG4gIHJldHVybiAoW1xuXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB6ZXJvNCgpIHtcbiAgcmV0dXJuIChbXG5cbiAgICAwLFxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVuZ3RoMih2ZWN0b3IpIHtcbiAgY29uc3QgWyB4LCB5IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlbmd0aDModmVjdG9yKSB7XG4gIGNvbnN0IFsgeCwgeSwgeiBdID0gdmVjdG9yO1xuXG4gIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlbmd0aDQodmVjdG9yKSB7XG4gIGNvbnN0IFsgeCwgeSwgeiwgdyBdID0gdmVjdG9yO1xuXG4gIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6ICsgdyAqIHcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG90Mih2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIGNvbnN0IFsgYTAsIGExIF0gPSB2ZWN0b3JBLFxuICAgICAgICBbIGIwLCBiMSBdID0gdmVjdG9yQjtcblxuICByZXR1cm4gKGEwICogYjAgKyBhMSAqIGIxKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvdDModmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBbIGEwLCBhMSwgYTIgXSA9IHZlY3RvckEsXG4gICAgICAgIFsgYjAsIGIxLCBiMiBdID0gdmVjdG9yQjtcblxuICByZXR1cm4gKGEwICogYjAgKyBhMSAqIGIxICsgYTIgKiBiMik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb3Q0KHZlY3RvckEsIHZlY3RvckIpIHtcbiAgY29uc3QgWyBhMCwgYTEsIGEyLCBhMyBdID0gdmVjdG9yQSxcbiAgICAgICAgWyBiMCwgYjEsIGIyLCBiMyBdID0gdmVjdG9yQjtcblxuICByZXR1cm4gKGEwICogYjAgKyBhMSAqIGIxICsgYTIgKiBiMiArIGEzICogYjMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3Jvc3MzKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgY29uc3QgWyBhMCwgYTEsIGEyIF0gPSB2ZWN0b3JBLFxuICAgICAgICBbIGIwLCBiMSwgYjIgXSA9IHZlY3RvckI7XG5cbiAgcmV0dXJuIChbXG5cbiAgICBhMSAqIGIyIC0gYTIgKiBiMSxcbiAgICBhMiAqIGIwIC0gYTAgKiBiMixcbiAgICBhMCAqIGIxIC0gYTEgKiBiMCxcblxuICBdKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXNlMih2ZWN0b3IpIHtcbiAgY29uc3QgWyB4LCB5IF0gPSB2ZWN0b3IsXG5cbiAgICAgICAgbGVuZ3RoID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xuXG4gIHJldHVybiAoW1xuXG4gICAgeCAvIGxlbmd0aCxcbiAgICB5IC8gbGVuZ3RoLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXNlMyh2ZWN0b3IpIHtcbiAgY29uc3QgWyB4LCB5LCB6IF0gPSB2ZWN0b3IsXG5cbiAgICAgICAgbGVuZ3RoID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeik7XG5cbiAgcmV0dXJuIChbXG5cbiAgICB4IC8gbGVuZ3RoLFxuICAgIHkgLyBsZW5ndGgsXG4gICAgeiAvIGxlbmd0aCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGlzZTQodmVjdG9yKSB7XG4gIGNvbnN0IFsgeCwgeSwgeiwgdyBdID0gdmVjdG9yLFxuXG4gICAgICAgIGxlbmd0aCA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHogKyB3ICogdyk7XG5cbiAgcmV0dXJuIChbXG5cbiAgICB4IC8gbGVuZ3RoLFxuICAgIHkgLyBsZW5ndGgsXG4gICAgeiAvIGxlbmd0aCxcbiAgICB3IC8gbGVuZ3RoLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmbGVjdDIodmVjdG9yKSB7XG4gIGNvbnN0IFsgeCwgeSBdID0gdmVjdG9yO1xuXG4gIHJldHVybiAoW1xuXG4gICAgLXgsXG4gICAgLXksXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZsZWN0Myh2ZWN0b3IpIHtcbiAgY29uc3QgWyB4LCB5LCB6IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIChbXG5cbiAgICAteCxcbiAgICAteSxcbiAgICAteixcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmxlY3Q0KHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHksIHosIHcgXSA9IHZlY3RvcjtcblxuICByZXR1cm4gKFtcblxuICAgIC14LFxuICAgIC15LFxuICAgIC16LFxuICAgIC13LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJ1bmNhdGU0KHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHksIHogXSA9IHZlY3RvcjtcblxuICByZXR1cm4gKFtcblxuICAgIHgsXG4gICAgeSxcbiAgICB6LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkMih2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIGNvbnN0IFsgYTAsIGExIF0gPSB2ZWN0b3JBLFxuICAgICAgICBbIGIwLCBiMSBdID0gdmVjdG9yQjtcblxuICByZXR1cm4gKFtcblxuICAgIGEwICsgYjAsXG4gICAgYTEgKyBiMSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZDModmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBbIGEwLCBhMSwgYTIgXSA9IHZlY3RvckEsXG4gICAgICAgIFsgYjAsIGIxLCBiMiBdID0gdmVjdG9yQjtcblxuICByZXR1cm4gKFtcblxuICAgIGEwICsgYjAsXG4gICAgYTEgKyBiMSxcbiAgICBhMiArIGIyLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkNCh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIGNvbnN0IFsgYTAsIGExLCBhMiwgYTMgXSA9IHZlY3RvckEsXG4gICAgICAgIFsgYjAsIGIxLCBiMiwgYjMgXSA9IHZlY3RvckI7XG5cbiAgcmV0dXJuIChbXG5cbiAgICBhMCArIGIwLFxuICAgIGExICsgYjEsXG4gICAgYTIgKyBiMixcbiAgICBhMyArIGIzLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3QyKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgY29uc3QgWyBhMCwgYTEgXSA9IHZlY3RvckEsXG4gICAgICAgIFsgYjAsIGIxIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTAgLSBiMCxcbiAgICBhMSAtIGIxLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3QzKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgY29uc3QgWyBhMCwgYTEsIGEyIF0gPSB2ZWN0b3JBLFxuICAgICAgICBbIGIwLCBiMSwgYjIgXSA9IHZlY3RvckI7XG5cbiAgcmV0dXJuIChbXG5cbiAgICBhMCAtIGIwLFxuICAgIGExIC0gYjEsXG4gICAgYTIgLSBiMixcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0NCh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIGNvbnN0IFsgYTAsIGExLCBhMiwgYTMgXSA9IHZlY3RvckEsXG4gICAgICAgIFsgYjAsIGIxLCBiMiwgYjMgXSA9IHZlY3RvckI7XG5cbiAgcmV0dXJuIChbXG5cbiAgICBhMCAtIGIwLFxuICAgIGExIC0gYjEsXG4gICAgYTIgLSBiMixcbiAgICBhMyAtIGIzLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkyKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgY29uc3QgWyB4MCwgeTAgXSA9IHZlY3RvckEsXG4gICAgICAgIFsgeDEsIHkxIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoW1xuXG4gICAgeDAgKiB4MSxcbiAgICB5MCAqIHkxLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkzKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgY29uc3QgWyB4MCwgeTAsIHowIF0gPSB2ZWN0b3JBLFxuICAgICAgICBbIHgxLCB5MSwgejEgXSA9IHZlY3RvckI7XG5cbiAgcmV0dXJuIChbXG5cbiAgICB4MCAqIHgxLFxuICAgIHkwICogeTEsXG4gICAgejAgKiB6MSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5NCh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIGNvbnN0IFsgeDAsIHkwLCB6MCwgdzAgXSA9IHZlY3RvckEsXG4gICAgICAgIFsgeDEsIHkxLCB6MSwgdzEgXSA9IHZlY3RvckI7XG5cbiAgcmV0dXJuIChbXG5cbiAgICB4MCAqIHgxLFxuICAgIHkwICogeTEsXG4gICAgejAgKiB6MSxcbiAgICB3MCAqIHcxLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGl2aWRlMih2ZWN0b3IsIGRpdmlzb3IpIHtcbiAgY29uc3QgWyB4LCB5IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIChbXG5cbiAgICB4IC8gZGl2aXNvcixcbiAgICB5IC8gZGl2aXNvcixcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpdmlkZTModmVjdG9yLCBkaXZpc29yKSB7XG4gIGNvbnN0IFsgeCwgeSwgeiBdID0gdmVjdG9yO1xuXG4gIHJldHVybiAoW1xuXG4gICAgeCAvIGRpdmlzb3IsXG4gICAgeSAvIGRpdmlzb3IsXG4gICAgeiAvIGRpdmlzb3IsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXZpZGU0KHZlY3RvciwgZGl2aXNvcikge1xuICBjb25zdCBbIHgsIHksIHosIHcgXSA9IHZlY3RvcjtcblxuICByZXR1cm4gKFtcblxuICAgIHggLyBkaXZpc29yLFxuICAgIHkgLyBkaXZpc29yLFxuICAgIHogLyBkaXZpc29yLFxuICAgIHcgLyBkaXZpc29yLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUyKHZlY3Rvciwgc2NhbGFyKSB7XG4gIGNvbnN0IFsgeCwgeSBdID0gdmVjdG9yO1xuXG4gIHJldHVybiAoW1xuXG4gICAgeCAqIHNjYWxhcixcbiAgICB5ICogc2NhbGFyLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUzKHZlY3Rvciwgc2NhbGFyKSB7XG4gIGNvbnN0IFsgeCwgeSwgeiBdID0gdmVjdG9yO1xuXG4gIHJldHVybiAoW1xuXG4gICAgeCAqIHNjYWxhcixcbiAgICB5ICogc2NhbGFyLFxuICAgIHogKiBzY2FsYXIsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZTQodmVjdG9yLCBzY2FsYXIpIHtcbiAgY29uc3QgWyB4LCB5LCB6LCB3IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIChbXG5cbiAgICB4ICogc2NhbGFyLFxuICAgIHkgKiBzY2FsYXIsXG4gICAgeiAqIHNjYWxhcixcbiAgICB3ICogc2NhbGFyLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtMih2ZWN0b3IsIG1hdHJpeCkge1xuICBjb25zdCBbIHgsIHkgXSA9IHZlY3RvcixcblxuICAgICAgICBbIG0wLCBtMSwgbTIsIG0zIF0gPSBtYXRyaXg7XG5cbiAgcmV0dXJuIChbXG5cbiAgICBtMCAqIHggKyBtMiAqIHksXG4gICAgbTEgKiB4ICsgbTMgKiB5LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtMyh2ZWN0b3IsIG1hdHJpeCkge1xuICBjb25zdCBbIHgsIHksIHogXSA9IHZlY3RvcixcblxuICAgICAgICBbIG0wLCBtMSwgbTIsIG0zLCBtNCwgbTUsIG02LCBtNywgbTggXSA9IG1hdHJpeDtcblxuICByZXR1cm4gKFtcblxuICAgIG0wICogeCArIG0zICogeSArIG02ICogeixcbiAgICBtMSAqIHggKyBtNCAqIHkgKyBtNyAqIHosXG4gICAgbTIgKiB4ICsgbTUgKiB5ICsgbTggKiB6LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtNCh2ZWN0b3IsIG1hdHJpeCkge1xuICBjb25zdCBbIHgsIHksIHosIHcgXSA9IHZlY3RvcixcblxuICAgICAgICBbIG0wLCBtMSwgbTIsIG0zLCBtNCwgbTUsIG02LCBtNywgbTgsIG05LCBtMTAsIG0xMSwgbTEyLCBtMTMsIG0xNCwgbTE1IF0gPSBtYXRyaXg7XG5cblxuICByZXR1cm4gKFtcblxuICAgIG0wICogeCArIG00ICogeSArIG04ICogeiArIG0xMiAqIHcsXG4gICAgbTEgKiB4ICsgbTUgKiB5ICsgbTkgKiB6ICsgbTEzICogdyxcbiAgICBtMiAqIHggKyBtNiAqIHkgKyBtMTAgKiB6ICsgbTE0ICogdyxcbiAgICBtMyAqIHggKyBtNyAqIHkgKyBtMTEgKiB6ICsgbTE1ICogdyxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1bTIoLi4udmVjdG9ycykge1xuICBjb25zdCB6ZXJvID0gemVybzIoKSxcbiAgICAgICAgc3VtID0gdmVjdG9ycy5yZWR1Y2UoKHN1bSwgdmVjdG9yKSA9PiB7XG4gICAgICAgICAgc3VtID0gYWRkMihzdW0sIHZlY3Rvcik7XG5cbiAgICAgICAgICByZXR1cm4gc3VtO1xuICAgICAgICB9LCB6ZXJvKTtcblxuICByZXR1cm4gc3VtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VtMyguLi52ZWN0b3JzKSB7XG4gIGNvbnN0IHplcm8gPSB6ZXJvMygpLFxuICAgICAgICBzdW0gPSB2ZWN0b3JzLnJlZHVjZSgoc3VtLCB2ZWN0b3IpID0+IHtcbiAgICAgICAgICBzdW0gPSBhZGQzKHN1bSwgdmVjdG9yKTtcblxuICAgICAgICAgIHJldHVybiBzdW07XG4gICAgICAgIH0sIHplcm8pO1xuXG4gIHJldHVybiBzdW07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdW00KC4uLnZlY3RvcnMpIHtcbiAgY29uc3QgemVybyA9IHplcm80KCksXG4gICAgICAgIHN1bSA9IHZlY3RvcnMucmVkdWNlKChzdW0sIHZlY3RvcikgPT4ge1xuICAgICAgICAgIHN1bSA9IGFkZDQoc3VtLCB2ZWN0b3IpO1xuXG4gICAgICAgICAgcmV0dXJuIHN1bTtcbiAgICAgICAgfSwgemVybyk7XG5cbiAgcmV0dXJuIHN1bTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lYW4yKC4uLnZlY3RvcnMpIHtcbiAgY29uc3QgbGVuZ3RoID0gdmVjdG9ycy5sZW5ndGgsXG4gICAgICAgIHN1bSA9IHN1bTIoLi4udmVjdG9ycyksXG4gICAgICAgIG1lYW4gPSBkaXZpZGUyKHN1bSwgbGVuZ3RoKTtcblxuICByZXR1cm4gbWVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lYW4zKC4uLnZlY3RvcnMpIHtcbiAgY29uc3QgbGVuZ3RoID0gdmVjdG9ycy5sZW5ndGgsXG4gICAgICAgIHN1bSA9IHN1bTMoLi4udmVjdG9ycyksXG4gICAgICAgIG1lYW4gPSBkaXZpZGUzKHN1bSwgbGVuZ3RoKTtcblxuICByZXR1cm4gbWVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lYW40KC4uLnZlY3RvcnMpIHtcbiAgY29uc3QgbGVuZ3RoID0gdmVjdG9ycy5sZW5ndGgsXG4gICAgICAgIHN1bSA9IHN1bTQoLi4udmVjdG9ycyksXG4gICAgICAgIG1lYW4gPSBkaXZpZGU0KHN1bSwgbGVuZ3RoKTtcblxuICByZXR1cm4gbWVhbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICB6ZXJvMixcbiAgemVybzMsXG4gIHplcm80LFxuICBsZW5ndGgyLFxuICBsZW5ndGgzLFxuICBsZW5ndGg0LFxuICBkb3QyLFxuICBkb3QzLFxuICBkb3Q0LFxuICBjcm9zczMsXG4gIG5vcm1hbGlzZTIsXG4gIG5vcm1hbGlzZTMsXG4gIG5vcm1hbGlzZTQsXG4gIHJlZmxlY3QyLFxuICByZWZsZWN0MyxcbiAgcmVmbGVjdDQsXG4gIHRydW5jYXRlNCxcbiAgYWRkMixcbiAgYWRkMyxcbiAgYWRkNCxcbiAgc3VidHJhY3QyLFxuICBzdWJ0cmFjdDMsXG4gIHN1YnRyYWN0NCxcbiAgbXVsdGlwbHkyLFxuICBtdWx0aXBseTMsXG4gIG11bHRpcGx5NCxcbiAgZGl2aWRlMixcbiAgZGl2aWRlMyxcbiAgZGl2aWRlNCxcbiAgc2NhbGUyLFxuICBzY2FsZTMsXG4gIHNjYWxlNCxcbiAgdHJhbnNmb3JtMixcbiAgdHJhbnNmb3JtMyxcbiAgdHJhbnNmb3JtNCxcbiAgc3VtMixcbiAgc3VtMyxcbiAgc3VtNCxcbiAgbWVhbjIsXG4gIG1lYW4zLFxuICBtZWFuNFxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3VidHJhY3QzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGdlIHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24sIGV4dGVudCkge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICB0aGlzLmV4dGVudCA9IGV4dGVudDtcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xuICB9XG5cbiAgZ2V0RXh0ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmV4dGVudDtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5zbGljZSgpLFxuICAgICAgICAgIGV4dGVudCA9IHRoaXMuZXh0ZW50LnNsaWNlKCksXG4gICAgICAgICAgZWRnZSA9IG5ldyBFZGdlKHBvc2l0aW9uLCBleHRlbnQpO1xuXG4gICAgcmV0dXJuIGVkZ2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4KENsYXNzLCBzdGFydFZlcnRleCwgZW5kVmVydGV4KSB7XG4gICAgaWYgKGVuZFZlcnRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlbmRWZXJ0ZXggPSBzdGFydFZlcnRleDsgIC8vL1xuICAgICAgc3RhcnRWZXJ0ZXggPSBDbGFzczsgIC8vL1xuICAgICAgQ2xhc3MgPSBFZGdlOyAvLy9cbiAgICB9XG4gICAgXG4gICAgY29uc3Qgc3RhcnRQb3NpdGlvbiA9IHN0YXJ0VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgZW5kUG9zaXRpb24gPSBlbmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBwb3NpdGlvbiA9IHN0YXJ0UG9zaXRpb24uc2xpY2UoKSwgLy8vXG4gICAgICAgICAgZXh0ZW50ID0gc3VidHJhY3QzKGVuZFBvc2l0aW9uLCBzdGFydFBvc2l0aW9uKSxcbiAgICAgICAgICBlZGdlID0gbmV3IENsYXNzKHBvc2l0aW9uLCBleHRlbnQpO1xuXG4gICAgcmV0dXJuIGVkZ2U7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYWRkMywgc2NhbGUzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlTWlkUG9pbnRQb3NpdGlvbih2ZXJ0aWNlcykge1xuICBjb25zdCBtaWRQb2ludFBvc2l0aW9uID0gdmVydGljZXMucmVkdWNlKChtaWRQb2ludFBvc2l0aW9uLCB2ZXJ0ZXgpID0+IHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHNjYWxlZFZlcnRleFBvc2l0aW9uID0gc2NhbGUzKHZlcnRleFBvc2l0aW9uLCAxLzMpO1xuXG4gICAgbWlkUG9pbnRQb3NpdGlvbiA9IGFkZDMobWlkUG9pbnRQb3NpdGlvbiwgc2NhbGVkVmVydGV4UG9zaXRpb24pO1xuXG4gICAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb247XG4gIH0sIFsgMCwgMCwgMCBdKTtcblxuICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RNaWRQb2ludFBvc2l0aW9uT250b1hZUGxhbmUobWlkUG9pbnRQb3NpdGlvbikge1xuICBtaWRQb2ludFBvc2l0aW9uID0gWyAuLi5taWRQb2ludFBvc2l0aW9uLnNsaWNlKDAsIDIpLCAwIF07ICAvLy9cblxuICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzKG1pZFBvaW50UG9zaXRpb24sIG1hc2tpbmdFZGdlcykge1xuICBjb25zdCBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMgPSBpc01pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpLFxuICAgICAgICBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzID0gaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzKG1pZFBvaW50UG9zaXRpb24sIG1hc2tpbmdFZGdlcyksXG4gICAgICAgIG1pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyA9IG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcyB8fCBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzOyAvLy9cblxuICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzO1xufVxuXG5mdW5jdGlvbiBpc01pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpIHtcbiAgY29uc3QgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzID0gbWFza2luZ0VkZ2VzLnJlZHVjZSgobWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzLCBtYXNraW5nRWRnZSkgPT4ge1xuICAgIGlmIChtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMpIHtcbiAgICAgIGNvbnN0IG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlID0gbWFza2luZ0VkZ2UuaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0KG1pZFBvaW50UG9zaXRpb24pO1xuXG4gICAgICBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMgPSBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzO1xuICB9LCB0cnVlKTtcblxuICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzO1xufVxuXG5mdW5jdGlvbiBpc01pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMobWlkUG9pbnRQb3NpdGlvbiwgbWFza2luZ0VkZ2VzKSB7XG4gIGNvbnN0IG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMgPSBtYXNraW5nRWRnZXMucmVkdWNlKChtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzLCBtYXNraW5nRWRnZSkgPT4ge1xuICAgIGlmIChtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzKSB7XG4gICAgICBjb25zdCBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2UgPSBtYXNraW5nRWRnZS5pc01pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0KG1pZFBvaW50UG9zaXRpb24pO1xuXG4gICAgICBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzID0gbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlO1xuICAgIH1cblxuICAgIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzO1xuICB9LCB0cnVlKTtcblxuICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcztcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4uL2VkZ2VcIjtcblxuaW1wb3J0IHsgdGhpcmQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBzdWJ0cmFjdDMsIGNyb3NzMyB9IGZyb20gXCIuLi8uLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IHByb2plY3RNaWRQb2ludFBvc2l0aW9uT250b1hZUGxhbmUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL21pZFBvaW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hc2tpbmdFZGdlIGV4dGVuZHMgRWRnZSB7XG4gIGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdChtaWRQb2ludFBvc2l0aW9uKSB7XG4gICAgbWlkUG9pbnRQb3NpdGlvbiA9IHByb2plY3RNaWRQb2ludFBvc2l0aW9uT250b1hZUGxhbmUobWlkUG9pbnRQb3NpdGlvbik7ICAvLy9cblxuICAgIGNvbnN0IGV4dGVudCA9IHRoaXMuZ2V0RXh0ZW50KCksXG4gICAgICAgICAgcG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgbWlkUG9pbnRSZWxhdGl2ZVBvc2l0aW9uID0gc3VidHJhY3QzKG1pZFBvaW50UG9zaXRpb24sIHBvc2l0aW9uKSxcbiAgICAgICAgICBjcm9zc1Byb2R1Y3RDb21wb25lbnRzID0gY3Jvc3MzKGV4dGVudCwgbWlkUG9pbnRSZWxhdGl2ZVBvc2l0aW9uKSwgLy8vXG4gICAgICAgICAgdGhpcmRDcm9zc1Byb2R1Y3RDb21wb25lbnQgPSB0aGlyZChjcm9zc1Byb2R1Y3RDb21wb25lbnRzKSxcbiAgICAgICAgICBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0ID0gKHRoaXJkQ3Jvc3NQcm9kdWN0Q29tcG9uZW50ID4gMCk7XG5cbiAgICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdDtcbiAgfVxuICBcbiAgaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodChtaWRQb2ludFBvc2l0aW9uKSB7XG4gICAgY29uc3QgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdCA9IHRoaXMuaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0KG1pZFBvaW50UG9zaXRpb24pLFxuICAgICAgICAgIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0ID0gIW1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQ7XG4gICAgXG4gICAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4KHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpIHsgcmV0dXJuIEVkZ2UuZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4KE1hc2tpbmdFZGdlLCBzdGFydFZlcnRleCwgZW5kVmVydGV4KTsgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB6ZXJvMiwgemVybzMgfSBmcm9tIFwiLi9tYXRocy92ZWN0b3JcIjtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfREVQVEggPSAxLjA7XG5leHBvcnQgY29uc3QgREVGQVVMVF9aX0ZBUiA9IDEwMDA7XG5leHBvcnQgY29uc3QgREVGQVVMVF9aX05FQVIgPSAxO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfUEVSU0lTVCA9IGZhbHNlO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfRklFTERfT0ZfVklFVyA9IDQ1O1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfSU5JVElBTF9BTkdMRVMgPSB6ZXJvMigpO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfSU5JVElBTF9PRkZTRVRTID0gemVybzMoKTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX01BUkdJTl9PRl9FUlJPUiA9IDAuMDAwMDAwMTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0lOSVRJQUxfRElTVEFOQ0UgPSA1O1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfSU5JVElBTF9QT1NJVElPTiA9IFsgMCwgMCwgNSBdO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfTU9VU0VfU0VOU0lUSVZJVFkgPSAxO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfQkFDS0dST1VORF9DT0xPVVIgPSBbIDAsIDAsIDAgXTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX01PVVNFX1dIRUVMX1NFTlNJVElWSVRZID0gMTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IgfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXBwcm94aW1hdGVseUVxdWFsVG9PbmUodmFsdWUsIG1hcmdpbk9mRXJyb3IgPSBERUZBVUxUX01BUkdJTl9PRl9FUlJPUikgeyByZXR1cm4gaXNBcHByb3hpbWF0ZWx5RXF1YWxUbyh2YWx1ZSwgMSwgbWFyZ2luT2ZFcnJvcik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKHZhbHVlLCBtYXJnaW5PZkVycm9yID0gREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IpIHsgcmV0dXJuIGlzQXBwcm94aW1hdGVseUVxdWFsVG8odmFsdWUsIDAsIG1hcmdpbk9mRXJyb3IpOyB9XG5cbmZ1bmN0aW9uIGlzQXBwcm94aW1hdGVseUVxdWFsVG8odmFsdWVBLCB2YWx1ZUIsIG1hcmdpbk9mRXJyb3IgPSBERUZBVUxUX01BUkdJTl9PRl9FUlJPUikge1xuICBjb25zdCBkaWZmZXJlbmNlID0gdmFsdWVBIC0gdmFsdWVCLFxuICAgICAgICBhYnNvbHV0ZURpZmZlcmVuY2UgPSBNYXRoLmFicyhkaWZmZXJlbmNlKSxcbiAgICAgICAgYXBwcm94aW1hdGVseUVxdWFsID0gKGFic29sdXRlRGlmZmVyZW5jZSA8IG1hcmdpbk9mRXJyb3IpO1xuXG4gIHJldHVybiBhcHByb3hpbWF0ZWx5RXF1YWw7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVIYWxmQW5nbGVTaW5lKGFuZ2xlQ29zaW5lKSB7IHJldHVybiBNYXRoLnNxcnQoKDEgLSBhbmdsZUNvc2luZSkgLyAyKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlSGFsZkFuZ2xlQ29zaW5lKGFuZ2xlQ29zaW5lKSB7IHJldHVybiBNYXRoLnNxcnQoKDEgKyBhbmdsZUNvc2luZSkgLyAyKTsgfVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBkb3QzLCBjcm9zczMsIG5vcm1hbGlzZTMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyBpc0FwcHJveGltYXRlbHlFcXVhbFRvT25lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcHByb3hpbWF0ZVwiO1xuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCwgdGhpcmQsIGZvdXJ0aCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZUhhbGZBbmdsZUNvc2luZSwgY2FsY3VsYXRlSGFsZkFuZ2xlU2luZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYW5nbGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZUltYWdpbmFyeVF1YXRlcm5pb24oaW1hZ2luYXJ5UXVhdGVybmlvbiwgcm90YXRpb25RdWF0ZXJuaW9uLCBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKSB7IHJldHVybiBoYW1pbHRvblByb2R1Y3QoaGFtaWx0b25Qcm9kdWN0KHJvdGF0aW9uUXVhdGVybmlvbiwgaW1hZ2luYXJ5UXVhdGVybmlvbiksIGludmVyc2VSb3RhdGlvblF1YXRlcm5pb24pOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVJbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbikge1xuICBjb25zdCByb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRzID0gcm90YXRpb25RdWF0ZXJuaW9uLCAgLy8vXG4gICAgICAgIGZpcnN0Um90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50ID0gZmlyc3Qocm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cyksXG4gICAgICAgIHNlY29uZFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCA9IHNlY29uZChyb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRzKSxcbiAgICAgICAgdGhpcmRSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQgPSB0aGlyZChyb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRzKSxcbiAgICAgICAgZm91cnRoUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50ID0gZm91cnRoKHJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudHMpLFxuICAgICAgICBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uID0gW1xuICAgICAgICAgIGZpcnN0Um90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50LFxuICAgICAgICAgIC1zZWNvbmRSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQsXG4gICAgICAgICAgLXRoaXJkUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50LFxuICAgICAgICAgIC1mb3VydGhSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRcbiAgICAgICAgXTtcblxuICByZXR1cm4gaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbikge1xuICBjb25zdCBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IHJvdGF0aW9uUXVhdGVybmlvbjsgIC8vL1xuXG4gIHJldHVybiBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgY29uc3QgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUludmVyc2VSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbjsgIC8vL1xuXG4gIHJldHVybiBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbihub3JtYWwpIHtcbiAgY29uc3QgZXh0ZW50ID0gbm9ybWFsLmdldEV4dGVudCgpLFxuICAgICAgICB1bml0Tm9ybWFsID0gZXh0ZW50LCAgLy8vXG4gICAgICAgIHpBeGlzID0gWyAwLCAwLCAxIF0sXG4gICAgICAgIGRvdFByb2R1Y3RPZlVuaXROb3JtYWxBbmRaQXhpcyA9IGRvdDModW5pdE5vcm1hbCwgekF4aXMpLFxuICAgICAgICBjcm9zc1Byb2R1Y3RPZlVuaXROb3JtYWxBbmRaQXhpcyA9IGNyb3NzMyh1bml0Tm9ybWFsLCB6QXhpcyksXG4gICAgICAgIGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSA9IGRvdFByb2R1Y3RPZlVuaXROb3JtYWxBbmRaQXhpcywgLy8vXG4gICAgICAgIGFuZ2xlT2ZSb3RhdGlvbkNvc2luZUFic29sdXRlVmFsdWUgPSBNYXRoLmFicyhhbmdsZU9mUm90YXRpb25Db3NpbmUpLFxuICAgICAgICBhbmdsZU9mUm90YXRpb25Db3NpbmVBYnNvbHV0ZVZhbHVlQXBwcm94aW1hdGVseUVxdWFsVG9PbmUgPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvT25lKGFuZ2xlT2ZSb3RhdGlvbkNvc2luZUFic29sdXRlVmFsdWUpLFxuICAgICAgICBheGlzT2ZSb3RhdGlvbiA9IGFuZ2xlT2ZSb3RhdGlvbkNvc2luZUFic29sdXRlVmFsdWVBcHByb3hpbWF0ZWx5RXF1YWxUb09uZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFsgMSwgMCwgMCBdIDogLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Jvc3NQcm9kdWN0T2ZVbml0Tm9ybWFsQW5kWkF4aXMsXG4gICAgICAgIHVuaXRBeGlzT2ZSb3RhdGlvbiA9IG5vcm1hbGlzZTMoYXhpc09mUm90YXRpb24pLFxuICAgICAgICBoYWxmQW5nbGVPZlJvdGF0aW9uQ29zaW5lID0gY2FsY3VsYXRlSGFsZkFuZ2xlQ29zaW5lKGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSksXG4gICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lID0gY2FsY3VsYXRlSGFsZkFuZ2xlU2luZShhbmdsZU9mUm90YXRpb25Db3NpbmUpLFxuICAgICAgICB1bml0QXhpc09mUm90YXRpb25Db21wb25lbnRzID0gdW5pdEF4aXNPZlJvdGF0aW9uLCAgLy8vXG4gICAgICAgIGZpcnN0QXhpc09mUm90YXRpb25Db21wb25lbnQgPSBmaXJzdCh1bml0QXhpc09mUm90YXRpb25Db21wb25lbnRzKSxcbiAgICAgICAgc2Vjb25kQXhpc09mUm90YXRpb25Db21wb25lbnQgPSBzZWNvbmQodW5pdEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50cyksXG4gICAgICAgIHRoaXJkQXhpc09mUm90YXRpb25Db21wb25lbnQgPSB0aGlyZCh1bml0QXhpc09mUm90YXRpb25Db21wb25lbnRzKSxcbiAgICAgICAgYXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uID0gW1xuICAgICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25Db3NpbmUsXG4gICAgICAgICAgZmlyc3RBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudCAqIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lLFxuICAgICAgICAgIHNlY29uZEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50ICogaGFsZkFuZ2xlT2ZSb3RhdGlvblNpbmUsXG4gICAgICAgICAgdGhpcmRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudCAqIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIGFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZVJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24obWFza2luZ0VkZ2UpIHtcbiAgY29uc3QgbWFza2luZ0VkZ2VFeHRlbnQgPSBtYXNraW5nRWRnZS5nZXRFeHRlbnQoKSxcbiAgICAgICAgdW5pdE1hc2tpbmdFZGdlRXh0ZW50ID0gbm9ybWFsaXNlMyhtYXNraW5nRWRnZUV4dGVudCksXG4gICAgICAgIHVuaXRNYXNraW5nRWRnZUV4dGVudENvbXBvbmVudHMgPSB1bml0TWFza2luZ0VkZ2VFeHRlbnQsICAvLy9cbiAgICAgICAgZmlyc3RVbml0TWFza2luZ0VkZ2VFeHRlbnRDb21wb25lbnQgPSBmaXJzdCh1bml0TWFza2luZ0VkZ2VFeHRlbnRDb21wb25lbnRzKSxcbiAgICAgICAgc2Vjb25kVW5pdE1hc2tpbmdFZGdlRXh0ZW50Q29tcG9uZW50ID0gc2Vjb25kKHVuaXRNYXNraW5nRWRnZUV4dGVudENvbXBvbmVudHMpLFxuICAgICAgICBhbmdsZU9mUm90YXRpb25TaW5lID0gZmlyc3RVbml0TWFza2luZ0VkZ2VFeHRlbnRDb21wb25lbnQsICAvLy9cbiAgICAgICAgYW5nbGVPZlJvdGF0aW9uQ29zaW5lID0gc2Vjb25kVW5pdE1hc2tpbmdFZGdlRXh0ZW50Q29tcG9uZW50LCAgLy8vXG4gICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25Db3NpbmUgPSBjYWxjdWxhdGVIYWxmQW5nbGVDb3NpbmUoYW5nbGVPZlJvdGF0aW9uQ29zaW5lKSxcbiAgICAgICAgaGFsZkFuZ2xlT2ZSb3RhdGlvblNpbmUgPSAoYW5nbGVPZlJvdGF0aW9uU2luZSA+IDAgKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICtjYWxjdWxhdGVIYWxmQW5nbGVTaW5lKGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1jYWxjdWxhdGVIYWxmQW5nbGVTaW5lKGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSksXG4gICAgICAgIHJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24gPSBbXG4gICAgICAgICAgaGFsZkFuZ2xlT2ZSb3RhdGlvbkNvc2luZSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgaGFsZkFuZ2xlT2ZSb3RhdGlvblNpbmVcbiAgICAgICAgXTtcblxuICByZXR1cm4gcm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvbjtcbn1cblxuZnVuY3Rpb24gaGFtaWx0b25Qcm9kdWN0KHF1YXRlcm5pb25BLCBxdWF0ZXJuaW9uQikge1xuICBjb25zdCBhMSA9IHF1YXRlcm5pb25BWzBdLFxuICAgICAgICBiMSA9IHF1YXRlcm5pb25BWzFdLFxuICAgICAgICBjMSA9IHF1YXRlcm5pb25BWzJdLFxuICAgICAgICBkMSA9IHF1YXRlcm5pb25BWzNdLFxuICAgICAgICBhMiA9IHF1YXRlcm5pb25CWzBdLFxuICAgICAgICBiMiA9IHF1YXRlcm5pb25CWzFdLFxuICAgICAgICBjMiA9IHF1YXRlcm5pb25CWzJdLFxuICAgICAgICBkMiA9IHF1YXRlcm5pb25CWzNdLFxuICAgICAgICBhID0gYTEgKiBhMiAtIGIxICogYjIgLSBjMSAqIGMyIC0gZDEgKiBkMixcbiAgICAgICAgYiA9IGExICogYjIgKyBiMSAqIGEyICsgYzEgKiBkMiAtIGQxICogYzIsXG4gICAgICAgIGMgPSBhMSAqIGMyIC0gYjEgKiBkMiArIGMxICogYTIgKyBkMSAqIGIyLFxuICAgICAgICBkID0gYTEgKiBkMiArIGIxICogYzIgLSBjMSAqIGIyICsgZDEgKiBhMixcbiAgICAgICAgcXVhdGVybmlvbiA9IFsgYSwgYiwgYywgZCBdO1xuXG4gIHJldHVybiBxdWF0ZXJuaW9uO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyByb3RhdGVJbWFnaW5hcnlRdWF0ZXJuaW9uLCBjYWxjdWxhdGVJbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWF0ZXJuaW9uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVQb3NpdGlvbihwb3NpdGlvbiwgcm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gIGNvbnN0IGltYWdpbmFyeVF1YXRlcm5pb24gPSBpbWFnaW5hcnlRdWF0ZXJuaW9uRnJvbVBvc2l0aW9uKHBvc2l0aW9uKSxcbiAgICAgICAgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUludmVyc2VSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgcm90YXRlZEltYWdpbmFyeVF1YXRlcm5pb24gPSByb3RhdGVJbWFnaW5hcnlRdWF0ZXJuaW9uKGltYWdpbmFyeVF1YXRlcm5pb24sIHJvdGF0aW9uUXVhdGVybmlvbiwgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgcG9zaXRpb24gPSBwb3NpdGlvbkZyb21JbWFnaW5hcnlRdWF0ZXJuaW9uKHJvdGF0ZWRJbWFnaW5hcnlRdWF0ZXJuaW9uKTtcblxuICByZXR1cm4gcG9zaXRpb247XG59XG5cbmZ1bmN0aW9uIGltYWdpbmFyeVF1YXRlcm5pb25Gcm9tUG9zaXRpb24ocG9zaXRpb24pIHsgcmV0dXJuIFswLCAuLi5wb3NpdGlvbl07IH0gIC8vL1xuXG5mdW5jdGlvbiBwb3NpdGlvbkZyb21JbWFnaW5hcnlRdWF0ZXJuaW9uKGltYWdpbmFyeVF1YXRlcm5pb24pIHsgcmV0dXJuIGltYWdpbmFyeVF1YXRlcm5pb24uc2xpY2UoMSk7IH0gIC8vL1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgYWRkMywgc3VidHJhY3QzLCBzY2FsZTMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXBwcm94aW1hdGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUludGVyc2VjdGlvbihlZGdlLCBmaXJzdFBvc2l0aW9uQ29tcG9uZW50KSB7XG4gIGxldCBpbnRlcnNlY3Rpb24gPSBudWxsO1xuXG4gIGNvbnN0IGVkZ2VOb25QYXJhbGxlbCA9IGlzRWRnZU5vblBhcmFsbGVsKGVkZ2UpO1xuXG4gIGlmIChlZGdlTm9uUGFyYWxsZWwpIHtcbiAgICBjb25zdCBlZGdlSW50ZXJzZWN0aW9uID0gY2FsY3VsYXRlRWRnZUludGVyc2VjdGlvbihlZGdlLCBmaXJzdFBvc2l0aW9uQ29tcG9uZW50KSxcbiAgICAgICAgICBlZGdlSW50ZXJzZWN0aW9uTm9uVHJpdmlhbCA9ICgoZWRnZUludGVyc2VjdGlvbiA+IDAgKSAmJiAoZWRnZUludGVyc2VjdGlvbiA8IDEpKTtcblxuICAgIGlmIChlZGdlSW50ZXJzZWN0aW9uTm9uVHJpdmlhbCkge1xuICAgICAgaW50ZXJzZWN0aW9uID0gZWRnZUludGVyc2VjdGlvbjsgIC8vL1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpbnRlcnNlY3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zKSB7XG4gIGNvbnN0IG5vbk51bGxJbnRlcnNlY3Rpb25zID0gaW50ZXJzZWN0aW9ucy5yZWR1Y2UoKG5vbk51bGxJbnRlcnNlY3Rpb25zLCBpbnRlcnNlY3Rpb24pID0+IHtcbiAgICBpZiAoaW50ZXJzZWN0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub25OdWxsSW50ZXJzZWN0aW9uID0gaW50ZXJzZWN0aW9uOyAvLy9cblxuICAgICAgbm9uTnVsbEludGVyc2VjdGlvbnMucHVzaChub25OdWxsSW50ZXJzZWN0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9uTnVsbEludGVyc2VjdGlvbnM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gbm9uTnVsbEludGVyc2VjdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVOdWxsSW50ZXJzZWN0aW9uSW5kZXgoaW50ZXJzZWN0aW9ucykge1xuICBjb25zdCBudWxsSW50ZXJzZWN0aW9uSW5kZXggPSBpbnRlcnNlY3Rpb25zLnJlZHVjZSgobnVsbEludGVyc2VjdGlvbkluZGV4LCBpbnRlcnNlY3Rpb24sIGluZGV4KSA9PiB7XG4gICAgaWYgKG51bGxJbnRlcnNlY3Rpb25JbmRleCA9PT0gbnVsbCkge1xuICAgICAgaWYgKGludGVyc2VjdGlvbiA9PT0gbnVsbCkge1xuICAgICAgICBudWxsSW50ZXJzZWN0aW9uSW5kZXggPSBpbmRleDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbEludGVyc2VjdGlvbkluZGV4O1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gbnVsbEludGVyc2VjdGlvbkluZGV4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbkluZGV4KGludGVyc2VjdGlvbnMpIHtcbiAgY29uc3QgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gaW50ZXJzZWN0aW9ucy5yZWR1Y2UoKG51bGxJbnRlcnNlY3Rpb25JbmRleCwgaW50ZXJzZWN0aW9uLCBpbmRleCkgPT4ge1xuICAgIGlmIChudWxsSW50ZXJzZWN0aW9uSW5kZXggPT09IG51bGwpIHtcbiAgICAgIGlmIChpbnRlcnNlY3Rpb24gIT09IG51bGwpIHtcbiAgICAgICAgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxJbnRlcnNlY3Rpb25JbmRleDtcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIG51bGxJbnRlcnNlY3Rpb25JbmRleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uKHN0YXJ0VmVydGV4UG9zaXRpb24sIGVuZFZlcnRleFBvc2l0aW9uLCBpbnRlcnNlY3Rpb24pIHtcbiAgY29uc3QgZXh0ZW50ID0gc3VidHJhY3QzKGVuZFZlcnRleFBvc2l0aW9uLCBzdGFydFZlcnRleFBvc2l0aW9uKSxcbiAgICAgICAgb2Zmc2V0ID0gc2NhbGUzKGV4dGVudCwgaW50ZXJzZWN0aW9uKSxcbiAgICAgICAgaW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb24gPSBhZGQzKHN0YXJ0VmVydGV4UG9zaXRpb24sIG9mZnNldCk7XG5cbiAgcmV0dXJuIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uO1xufVxuXG5mdW5jdGlvbiBpc0VkZ2VOb25QYXJhbGxlbChlZGdlKSB7XG4gIGNvbnN0IGVkZ2VFeHRlbnQgPSBlZGdlLmdldEV4dGVudCgpLFxuICAgICAgICBlZGdlRXh0ZW50Q29tcG9uZW50cyA9IGVkZ2VFeHRlbnQsIC8vL1xuICAgICAgICBmaXJzdEVkZ2VFeHRlbnRDb21wb25lbnQgPSBmaXJzdChlZGdlRXh0ZW50Q29tcG9uZW50cyksXG4gICAgICAgIHNlY29uZEVkZ2VFeHRlbnRDb21wb25lbnQgPSBzZWNvbmQoZWRnZUV4dGVudENvbXBvbmVudHMpLFxuICAgICAgICBlZGdlQW5nbGVUYW5nZW50ID0gZmlyc3RFZGdlRXh0ZW50Q29tcG9uZW50IC8gc2Vjb25kRWRnZUV4dGVudENvbXBvbmVudCxcbiAgICAgICAgZWRnZUFuZ2xlVGFuZ2VudEFwcHJveGltYXRlbHlFcXVhbFRvWmVybyA9IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKGVkZ2VBbmdsZVRhbmdlbnQpLFxuICAgICAgICBlZGdlUGFyYWxsZWwgPSBlZGdlQW5nbGVUYW5nZW50QXBwcm94aW1hdGVseUVxdWFsVG9aZXJvLCAvLy9cbiAgICAgICAgZWRnZU5vblBhcmFsbGVsID0gIWVkZ2VQYXJhbGxlbDtcblxuICByZXR1cm4gZWRnZU5vblBhcmFsbGVsO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVFZGdlSW50ZXJzZWN0aW9uKGVkZ2UsIGZpcnN0UG9zaXRpb25Db21wb25lbnQpIHtcbiAgY29uc3QgZWRnZUV4dGVudCA9IGVkZ2UuZ2V0RXh0ZW50KCksXG4gICAgICAgIGVkZ2VQb3NpdGlvbiA9IGVkZ2UuZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgZWRnZUV4dGVudENvbXBvbmVudHMgPSBlZGdlRXh0ZW50LCAvLy9cbiAgICAgICAgZWRnZVBvc2l0aW9uQ29tcG9uZW50cyA9IGVkZ2VQb3NpdGlvbiwgLy8vXG4gICAgICAgIGZpcnN0RWRnZUV4dGVudENvbXBvbmVudCA9IGZpcnN0KGVkZ2VFeHRlbnRDb21wb25lbnRzKSxcbiAgICAgICAgZmlyc3RFZGdlUG9zaXRpb25Db21wb25lbnQgPSBmaXJzdChlZGdlUG9zaXRpb25Db21wb25lbnRzKSxcbiAgICAgICAgZWRnZUludGVyc2VjdGlvbiA9IChmaXJzdFBvc2l0aW9uQ29tcG9uZW50IC0gZmlyc3RFZGdlUG9zaXRpb25Db21wb25lbnQpIC8gZmlyc3RFZGdlRXh0ZW50Q29tcG9uZW50O1xuXG4gIHJldHVybiBlZGdlSW50ZXJzZWN0aW9uO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHJvdGF0ZVBvc2l0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9yb3RhdGlvblwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlSW50ZXJzZWN0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9pbnRlcnNlY3Rpb25cIjtcbmltcG9ydCB7IGNhbGN1bGF0ZVJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24sIGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1YXRlcm5pb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVydGljYWxMaW5lIHtcbiAgY29uc3RydWN0b3IoZmlyc3RQb3NpdGlvbkNvbXBvbmVudCwgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbikge1xuICAgIHRoaXMuZmlyc3RQb3NpdGlvbkNvbXBvbmVudCA9IGZpcnN0UG9zaXRpb25Db21wb25lbnQ7XG4gICAgdGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICAgIHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgZ2V0Rmlyc3RQb3NpdGlvbkNvbXBvbmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5maXJzdFBvc2l0aW9uQ29tcG9uZW50O1xuICB9XG4gIFxuICBnZXRGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIGdldEJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBzcGxpdEZhY2V0KGZhY2V0LCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgZWRnZXMgPSBmYWNldC5nZXRFZGdlcygpLFxuICAgICAgICAgIGludGVyc2VjdGlvbnMgPSBlZGdlcy5tYXAoKGVkZ2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludGVyc2VjdGlvbiA9IGNhbGN1bGF0ZUludGVyc2VjdGlvbihlZGdlLCB0aGlzLmZpcnN0UG9zaXRpb25Db21wb25lbnQpO1xuXG4gICAgICAgICAgICByZXR1cm4gaW50ZXJzZWN0aW9uO1xuICAgICAgICAgIH0pO1xuXG4gICAgZmFjZXQuc3BsaXRXaXRoSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcbiAgfVxuXG4gIHNwbGl0RmFjZXRzKGZhY2V0cywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IHNtYWxsZXJGYWNldHMgPSBbXTtcblxuICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4ge1xuICAgICAgZmFjZXQucm90YXRlKHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gICAgICB0aGlzLnNwbGl0RmFjZXQoZmFjZXQsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpO1xuICAgIH0pO1xuXG4gICAgc21hbGxlckZhY2V0cy5mb3JFYWNoKChzbWFsbGVyRmFjZXQpID0+IHtcbiAgICAgIHNtYWxsZXJGYWNldC5yb3RhdGUodGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNtYWxsZXJGYWNldHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1hc2tpbmdFZGdlKG1hc2tpbmdFZGdlKSB7XG4gICAgY29uc3QgbWFza2luZ0VkZ2VQb3NpdGlvbiA9IG1hc2tpbmdFZGdlLmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgcm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvbiA9IGNhbGN1bGF0ZVJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24obWFza2luZ0VkZ2UpLFxuICAgICAgICAgIHJvdGF0aW9uUXVhdGVybmlvbiA9IHJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24sICAvLy9cbiAgICAgICAgICBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgcG9zaXRpb24gPSByb3RhdGVQb3NpdGlvbihtYXNraW5nRWRnZVBvc2l0aW9uLCByb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIHBvc2l0aW9uQ29tcG9uZW50cyA9IHBvc2l0aW9uLCAvLy9cbiAgICAgICAgICBmaXJzdFBvc2l0aW9uQ29tcG9uZW50ID0gZmlyc3QocG9zaXRpb25Db21wb25lbnRzKSxcbiAgICAgICAgICB2ZXJ0aWNhbExpbmUgPSBuZXcgVmVydGljYWxMaW5lKGZpcnN0UG9zaXRpb25Db21wb25lbnQsIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gICAgcmV0dXJuIHZlcnRpY2FsTGluZTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlVmVydGljZXModmVydGljZXMsIHJvdGF0aW9uUXVhdGVybmlvbikge1xuICBjb25zdCByb3RhdGVkVmVydGljZXMgPSB2ZXJ0aWNlcy5tYXAoKHZlcnRleCkgPT4ge1xuICAgIGNvbnN0IHJvdGF0ZWRWZXJ0ZXggPSB2ZXJ0ZXguY2xvbmUoKTsgIC8vL1xuXG4gICAgcm90YXRlZFZlcnRleC5yb3RhdGUocm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgIHJldHVybiByb3RhdGVkVmVydGV4O1xuICB9KTtcblxuICByZXR1cm4gcm90YXRlZFZlcnRpY2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGUoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgVmVydGV4KSB7ICAvLy9cbiAgY29uc3QgaW5kZXhlcyA9IGluZGV4VHVwbGUsIC8vL1xuICAgICAgICB2ZXJ0aWNlcyA9IGluZGV4ZXMubWFwKChpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGVUdXBsZSA9IGNvb3JkaW5hdGVUdXBsZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgIHZlcnRleCA9IFZlcnRleC5mcm9tQ29vcmRpbmF0ZVR1cGxlKGNvb3JkaW5hdGVUdXBsZSk7XG5cbiAgICAgICAgICByZXR1cm4gdmVydGV4O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gdmVydGljZXM7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXNraW5nRWRnZSBmcm9tIFwiLi9lZGdlL21hc2tpbmdcIjtcbmltcG9ydCBWZXJ0aWNhbExpbmUgZnJvbSBcIi4vdmVydGljYWxMaW5lXCI7XG5cbmltcG9ydCB7IGFkZCwgc2VwYXJhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyByb3RhdGVWZXJ0aWNlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmVydGljZXNcIjtcbmltcG9ydCB7IFZFUlRJQ0VTX0xFTkdUSCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBjYWxjdWxhdGVBcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24sIGNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVhdGVybmlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXNraW5nRmFjZXQge1xuICBjb25zdHJ1Y3RvcihtYXNraW5nRWRnZXMsIHZlcnRpY2FsTGluZXMsIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgICB0aGlzLm1hc2tpbmdFZGdlcyA9IG1hc2tpbmdFZGdlcztcbiAgICB0aGlzLnZlcnRpY2FsTGluZXMgPSB2ZXJ0aWNhbExpbmVzO1xuICAgIHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgICB0aGlzLmJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIGdldE1hc2tpbmdFZGdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXNraW5nRWRnZXM7XG4gIH1cblxuICBnZXRWZXJ0aWNhbExpbmVzKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRpY2FsTGluZXM7XG4gIH1cblxuICBnZXRGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIGdldEJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBtYXNrRmFjZXQoZmFjZXQsIHVubWFza2VkRmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgdW5tYXNrZWRGYWNldCA9IGZhY2V0LmNsb25lKCk7ICAvLy9cblxuICAgIGZhY2V0LnJvdGF0ZSh0aGlzLmZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgIGNvbnN0IG1hc2tpbmdGYWNldCA9IHRoaXMsICAvLy9cbiAgICAgICAgICBzbWFsbGVyRmFjZXRzID0gdGhpcy5zcGxpdEZhY2V0KGZhY2V0LCBtYXJnaW5PZkVycm9yKSxcbiAgICAgICAgICBtYXNrZWRTbWFsbGVyRmFjZXRzID0gW10sXG4gICAgICAgICAgdW5tYXNrZWRTbWFsbGVyRmFjZXRzID0gW107XG5cbiAgICBzZXBhcmF0ZShzbWFsbGVyRmFjZXRzLCBtYXNrZWRTbWFsbGVyRmFjZXRzLCB1bm1hc2tlZFNtYWxsZXJGYWNldHMsIChzbWFsbGVyRmFjZXQpID0+IHtcbiAgICAgIGNvbnN0IHNtYWxsZXJGYWNldE1hc2tlZCA9IHNtYWxsZXJGYWNldC5pc01hc2tlZChtYXNraW5nRmFjZXQpO1xuXG4gICAgICByZXR1cm4gc21hbGxlckZhY2V0TWFza2VkO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbWFza2VkU21hbGxlckZhY2V0c0xlbmd0aCA9IG1hc2tlZFNtYWxsZXJGYWNldHMubGVuZ3RoO1xuXG4gICAgaWYgKG1hc2tlZFNtYWxsZXJGYWNldHNMZW5ndGggPT09IDApIHtcbiAgICAgIHVubWFza2VkRmFjZXRzLnB1c2godW5tYXNrZWRGYWNldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVubWFza2VkU21hbGxlckZhY2V0cy5mb3JFYWNoKCh1bm1hc2tlZFNtYWxsZXJGYWNldCkgPT4ge1xuICAgICAgICB1bm1hc2tlZFNtYWxsZXJGYWNldC5yb3RhdGUodGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuICAgICAgfSk7XG5cbiAgICAgIGFkZCh1bm1hc2tlZEZhY2V0cywgdW5tYXNrZWRTbWFsbGVyRmFjZXRzKTtcbiAgICB9XG4gIH1cbiAgXG4gIHNwbGl0RmFjZXQoZmFjZXQsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBsZXQgZmFjZXRzID0gW1xuICAgICAgICAgIGZhY2V0XG4gICAgICAgIF0sXG4gICAgICAgIHNtYWxsZXJGYWNldHMgPSBmYWNldHM7IC8vL1xuXG4gICAgdGhpcy52ZXJ0aWNhbExpbmVzLmZvckVhY2goKHZlcnRpY2FsTGluZSkgPT4ge1xuICAgICAgc21hbGxlckZhY2V0cyA9IHZlcnRpY2FsTGluZS5zcGxpdEZhY2V0cyhmYWNldHMsIG1hcmdpbk9mRXJyb3IpO1xuXG4gICAgICBmYWNldHMgPSBzbWFsbGVyRmFjZXRzOyAvLy9cbiAgICB9KTtcblxuICAgIHJldHVybiBzbWFsbGVyRmFjZXRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21GYWNldChmYWNldCkge1xuICAgIGNvbnN0IGZhY2V0Tm9ybWFsID0gZmFjZXQuZ2V0Tm9ybWFsKCksXG4gICAgICAgICAgZmFjZXRWZXJ0aWNlcyA9IGZhY2V0LmdldFZlcnRpY2VzKCksXG4gICAgICAgICAgbm9ybWFsID0gZmFjZXROb3JtYWwsIC8vL1xuICAgICAgICAgIGFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbihub3JtYWwpLFxuICAgICAgICAgIHJvdGF0aW9uUXVhdGVybmlvbiA9IGFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbiwgLy8vXG4gICAgICAgICAgdmVydGljZXMgPSByb3RhdGVWZXJ0aWNlcyhmYWNldFZlcnRpY2VzLCByb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIG1hc2tpbmdFZGdlcyA9IGNhbGN1bGF0ZU1hc2tpbmdFZGdlcyh2ZXJ0aWNlcyksXG4gICAgICAgICAgdmVydGljYWxMaW5lcyA9IG1hc2tpbmdFZGdlcy5tYXAoKG1hc2tpbmdFZGdlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0aWNhbExpbmUgPSBWZXJ0aWNhbExpbmUuZnJvbU1hc2tpbmdFZGdlKG1hc2tpbmdFZGdlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHZlcnRpY2FsTGluZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgbWFza2luZ0ZhY2V0ID0gbmV3IE1hc2tpbmdGYWNldChtYXNraW5nRWRnZXMsIHZlcnRpY2FsTGluZXMsIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gICAgcmV0dXJuIG1hc2tpbmdGYWNldDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVNYXNraW5nRWRnZXModmVydGljZXMpIHtcbiAgY29uc3QgbWFza2luZ0VkZ2VzID0gdmVydGljZXMubWFwKCh2ZXJ0ZXgsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IGluZGV4LFxuICAgICAgICAgICAgICAgIGVuZEluZGV4ID0gKHN0YXJ0SW5kZXggKyAxKSAlIFZFUlRJQ0VTX0xFTkdUSCxcbiAgICAgICAgICAgICAgICBzdGFydFZlcnRleCA9IHZlcnRpY2VzW3N0YXJ0SW5kZXhdLFxuICAgICAgICAgICAgICAgIGVuZFZlcnRleCA9IHZlcnRpY2VzW2VuZEluZGV4XSxcbiAgICAgICAgICAgICAgICBtYXNraW5nRWRnZSA9IE1hc2tpbmdFZGdlLmZyb21TdGFydFZlcnRleEFuZEVuZFZlcnRleChzdGFydFZlcnRleCwgZW5kVmVydGV4KTtcblxuICAgICAgICAgIHJldHVybiBtYXNraW5nRWRnZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIG1hc2tpbmdFZGdlcztcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9ybWFsaXNlMyB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5MigpIHtcbiAgcmV0dXJuIChbXG5cbiAgICAxLCAwLFxuICAgIDAsIDEsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eTMoKSB7XG4gIHJldHVybiAoW1xuXG4gICAgMSwgMCwgMCxcbiAgICAwLCAxLCAwLFxuICAgIDAsIDAsIDEsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eTQoKSB7XG4gIHJldHVybiAoW1xuXG4gICAgMSwgMCwgMCwgMCxcbiAgICAwLCAxLCAwLCAwLFxuICAgIDAsIDAsIDEsIDAsXG4gICAgMCwgMCwgMCwgMSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5MihtYXRyaXhBLCBtYXRyaXhCKSB7XG4gIGNvbnN0IFsgYTAsIGExLCBhMiwgYTMgXSA9IG1hdHJpeEEsXG4gICAgICAgIFsgYjAsIGIxLCBiMiwgYjMgXSA9IG1hdHJpeEI7XG5cbiAgcmV0dXJuIChbXG5cbiAgICBhMCAqIGIwICsgYTIgKiBiMSxcbiAgICBhMSAqIGIwICsgYTMgKiBiMSxcblxuICAgIGEwICogYjIgKyBhMiAqIGIzLFxuICAgIGExICogYjIgKyBhMyAqIGIzLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkzKG1hdHJpeEEsIG1hdHJpeEIpIHtcbiAgY29uc3QgWyBhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4IF0gPSBtYXRyaXhBLFxuICAgICAgICBbIGIwLCBiMSwgYjIsIGIzLCBiNCwgYjUsIGI2LCBiNywgYjggXSA9IG1hdHJpeEI7XG5cbiAgcmV0dXJuIChbXG5cbiAgICBhMCAqIGIwICsgYTMgKiBiMSArIGE2ICogYjIsXG4gICAgYTEgKiBiMCArIGE0ICogYjEgKyBhNyAqIGIyLFxuICAgIGEyICogYjAgKyBhNSAqIGIxICsgYTggKiBiMixcblxuICAgIGEwICogYjMgKyBhMyAqIGI0ICsgYTYgKiBiNSxcbiAgICBhMSAqIGIzICsgYTQgKiBiNCArIGE3ICogYjUsXG4gICAgYTIgKiBiMyArIGE1ICogYjQgKyBhOCAqIGI1LFxuXG4gICAgYTAgKiBiNiArIGEzICogYjcgKyBhNiAqIGI4LFxuICAgIGExICogYjYgKyBhNCAqIGI3ICsgYTcgKiBiOCxcbiAgICBhMiAqIGI2ICsgYTUgKiBiNyArIGE4ICogYjgsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseTQobWF0cml4QSwgbWF0cml4Qikge1xuICBjb25zdCAgWyBhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4LCBhOSwgYTEwLCBhMTEsIGExMiwgYTEzLCBhMTQsIGExNSBdID0gbWF0cml4QSxcbiAgICAgICAgIFsgYjAsIGIxLCBiMiwgYjMsIGI0LCBiNSwgYjYsIGI3LCBiOCwgYjksIGIxMCwgYjExLCBiMTIsIGIxMywgYjE0LCBiMTUgXSA9IG1hdHJpeEI7XG5cbiAgcmV0dXJuIChbXG5cbiAgICBhMCAqICBiMCArICBhNCAqICBiMSArICBhOCAqICBiMiArIGExMiAqICBiMyxcbiAgICBhMSAqICBiMCArICBhNSAqICBiMSArICBhOSAqICBiMiArIGExMyAqICBiMyxcbiAgICBhMiAqICBiMCArICBhNiAqICBiMSArIGExMCAqICBiMiArIGExNCAqICBiMyxcbiAgICBhMyAqICBiMCArICBhNyAqICBiMSArIGExMSAqICBiMiArIGExNSAqICBiMyxcblxuICAgIGEwICogIGI0ICsgIGE0ICogIGI1ICsgIGE4ICogIGI2ICsgYTEyICogIGI3LFxuICAgIGExICogIGI0ICsgIGE1ICogIGI1ICsgIGE5ICogIGI2ICsgYTEzICogIGI3LFxuICAgIGEyICogIGI0ICsgIGE2ICogIGI1ICsgYTEwICogIGI2ICsgYTE0ICogIGI3LFxuICAgIGEzICogIGI0ICsgIGE3ICogIGI1ICsgYTExICogIGI2ICsgYTE1ICogIGI3LFxuXG4gICAgYTAgKiAgYjggKyAgYTQgKiAgYjkgKyAgYTggKiBiMTAgKyBhMTIgKiBiMTEsXG4gICAgYTEgKiAgYjggKyAgYTUgKiAgYjkgKyAgYTkgKiBiMTAgKyBhMTMgKiBiMTEsXG4gICAgYTIgKiAgYjggKyAgYTYgKiAgYjkgKyBhMTAgKiBiMTAgKyBhMTQgKiBiMTEsXG4gICAgYTMgKiAgYjggKyAgYTcgKiAgYjkgKyBhMTEgKiBiMTAgKyBhMTUgKiBiMTEsXG5cbiAgICBhMCAqIGIxMiArICBhNCAqIGIxMyArICBhOCAqIGIxNCArIGExMiAqIGIxNSxcbiAgICBhMSAqIGIxMiArICBhNSAqIGIxMyArICBhOSAqIGIxNCArIGExMyAqIGIxNSxcbiAgICBhMiAqIGIxMiArICBhNiAqIGIxMyArIGExMCAqIGIxNCArIGExNCAqIGIxNSxcbiAgICBhMyAqIGIxMiArICBhNyAqIGIxMyArIGExMSAqIGIxNCArIGExNSAqIGIxNSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRldGVybWluYW50MihtYXRyaXgpIHtcbiAgY29uc3QgWyBtMCwgbTEsIG0yLCBtMyBdID0gbWF0cml4O1xuXG4gIHJldHVybiAoIG0wICogbTMgLSBtMiAqIG0xICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXRlcm1pbmFudDMobWF0cml4KSB7XG4gIGNvbnN0IFsgbTAsIG0xLCBtMiwgbTMsIG00LCBtNSwgbTYsIG03LCBtOCBdID0gbWF0cml4LFxuXG4gICAgICAgIGIwMSA9ICBtOCAqIG00IC0gbTUgKiBtNyxcbiAgICAgICAgYjExID0gLW04ICogbTMgKyBtNSAqIG02LFxuICAgICAgICBiMjEgPSAgbTcgKiBtMyAtIG00ICogbTY7XG5cbiAgcmV0dXJuICggbTAgKiBiMDEgKyBtMSAqIGIxMSArIG0yICogYjIxICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXRlcm1pbmFudDQobWF0cml4KSB7XG4gIGNvbnN0IFsgbTAsIG0xLCBtMiwgbTMsIG00LCBtNSwgbTYsIG03LCBtOCwgbTksIG0xMCwgbTExLCBtMTIsIG0xMywgbTE0LCBtMTUgXSA9IG1hdHJpeCxcblxuICAgICAgICBiMDAgPSBtMCAqIG01IC0gbTEgKiBtNCxcbiAgICAgICAgYjAxID0gbTAgKiBtNiAtIG0yICogbTQsXG4gICAgICAgIGIwMiA9IG0wICogbTcgLSBtMyAqIG00LFxuICAgICAgICBiMDMgPSBtMSAqIG02IC0gbTIgKiBtNSxcbiAgICAgICAgYjA0ID0gbTEgKiBtNyAtIG0zICogbTUsXG4gICAgICAgIGIwNSA9IG0yICogbTcgLSBtMyAqIG02LFxuICAgICAgICBiMDYgPSBtOCAqIG0xMyAtIG05ICogbTEyLFxuICAgICAgICBiMDcgPSBtOCAqIG0xNCAtIG0xMCAqIG0xMixcbiAgICAgICAgYjA4ID0gbTggKiBtMTUgLSBtMTEgKiBtMTIsXG4gICAgICAgIGIwOSA9IG05ICogbTE0IC0gbTEwICogbTEzLFxuICAgICAgICBiMTAgPSBtOSAqIG0xNSAtIG0xMSAqIG0xMyxcbiAgICAgICAgYjExID0gbTEwICogbTE1IC0gbTExICogbTE0O1xuXG4gIHJldHVybiAoIGIwMCAqIGIxMSAtIGIwMSAqIGIxMCArIGIwMiAqIGIwOSArIGIwMyAqIGIwOCAtIGIwNCAqIGIwNyArIGIwNSAqIGIwNiApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNwb3NlMihtYXRyaXgpIHtcbiAgY29uc3QgWyBtMCwgbTEsIG0yLCBtMyBdID0gbWF0cml4O1xuXG4gIHJldHVybiAoW1xuXG4gICAgbTAsIG0yLFxuICAgIG0xLCBtMyxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zcG9zZTMobWF0cml4KSB7XG4gIGNvbnN0IFsgbTAsIG0xLCBtMiwgbTMsIG00LCBtNSwgbTYsIG03LCBtOCBdID0gbWF0cml4O1xuXG4gIHJldHVybiAoW1xuXG4gICAgbTAsIG0zLCBtNixcbiAgICBtMSwgbTQsIG03LFxuICAgIG0yLCBtNSwgbTgsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc3Bvc2U0KG1hdHJpeCkge1xuICBjb25zdCBbIG0wLCBtMSwgbTIsIG0zLCBtNCwgbTUsIG02LCBtNywgbTgsIG05LCBtMTAsIG0xMSwgbTEyLCBtMTMsIG0xNCwgbTE1IF0gPSBtYXRyaXg7XG5cbiAgcmV0dXJuIChbXG5cbiAgICBtMCwgbTQsIG04LCBtMTIsXG4gICAgbTEsIG01LCBtOSwgbTEzLFxuICAgIG0yLCBtNiwgbTEwLCBtMTQsXG4gICAgbTMsIG03LCBtMTEsIG0xNSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGludmVydDIobWF0cml4KSB7XG4gIGNvbnN0IFsgbTAsIG0xLCBtMiwgbTMgXSA9IG1hdHJpeCxcblxuICAgICAgICBkZXRlcm1pbmFudCA9IGRldGVybWluYW50MihtYXRyaXgpO1xuXG4gIHJldHVybiAoW1xuXG4gICAgK20zIC8gZGV0ZXJtaW5hbnQsIC1tMSAvIGRldGVybWluYW50LFxuICAgIC1tMiAvIGRldGVybWluYW50LCArbTAgLyBkZXRlcm1pbmFudCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGludmVydDMobWF0cml4KSB7XG4gIGNvbnN0IFsgbTAsIG0xLCBtMiwgbTMsIG00LCBtNSwgbTYsIG03LCBtOCBdID0gbWF0cml4LFxuXG4gICAgICAgIGRldGVybWluYW50ID0gZGV0ZXJtaW5hbnQzKG1hdHJpeCksXG5cbiAgICAgICAgYjAxID0gIG04ICogbTQgLSBtNSAqIG03LFxuICAgICAgICBiMTEgPSAtbTggKiBtMyArIG01ICogbTYsXG4gICAgICAgIGIyMSA9ICBtNyAqIG0zIC0gbTQgKiBtNjtcblxuICByZXR1cm4gKFtcblxuICAgIGIwMSAvIGRldGVybWluYW50LCAoLW04ICogbTEgKyBtMiAqIG03KSAvIGRldGVybWluYW50LCAoIG01ICogbTEgLSBtMiAqIG00KSAvIGRldGVybWluYW50LFxuICAgIGIxMSAvIGRldGVybWluYW50LCAoIG04ICogbTAgLSBtMiAqIG02KSAvIGRldGVybWluYW50LCAoLW01ICogbTAgKyBtMiAqIG0zKSAvIGRldGVybWluYW50LFxuICAgIGIyMSAvIGRldGVybWluYW50LCAoLW03ICogbTAgKyBtMSAqIG02KSAvIGRldGVybWluYW50LCAoIG00ICogbTAgLSBtMSAqIG0zKSAvIGRldGVybWluYW50LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJ0NChtYXRyaXgpIHtcbiAgY29uc3QgWyBtMCwgbTEsIG0yLCBtMywgbTQsIG01LCBtNiwgbTcsIG04LCBtOSwgbTEwLCBtMTEsIG0xMiwgbTEzLCBtMTQsIG0xNSBdID0gbWF0cml4LFxuXG4gICAgICAgIGRldGVybWluYW50ID0gZGV0ZXJtaW5hbnQ0KG1hdHJpeCksXG5cbiAgICAgICAgYjAwID0gbTAgKiBtNSAtIG0xICogbTQsXG4gICAgICAgIGIwMSA9IG0wICogbTYgLSBtMiAqIG00LFxuICAgICAgICBiMDIgPSBtMCAqIG03IC0gbTMgKiBtNCxcbiAgICAgICAgYjAzID0gbTEgKiBtNiAtIG0yICogbTUsXG4gICAgICAgIGIwNCA9IG0xICogbTcgLSBtMyAqIG01LFxuICAgICAgICBiMDUgPSBtMiAqIG03IC0gbTMgKiBtNixcbiAgICAgICAgYjA2ID0gbTggKiBtMTMgLSBtOSAqIG0xMixcbiAgICAgICAgYjA3ID0gbTggKiBtMTQgLSBtMTAgKiBtMTIsXG4gICAgICAgIGIwOCA9IG04ICogbTE1IC0gbTExICogbTEyLFxuICAgICAgICBiMDkgPSBtOSAqIG0xNCAtIG0xMCAqIG0xMyxcbiAgICAgICAgYjEwID0gbTkgKiBtMTUgLSBtMTEgKiBtMTMsXG4gICAgICAgIGIxMSA9IG0xMCAqIG0xNSAtIG0xMSAqIG0xNDtcblxuICByZXR1cm4gKFtcblxuICAgIChtNSAqIGIxMSAtIG02ICogYjEwICsgbTcgKiBiMDkpIC8gZGV0ZXJtaW5hbnQsIChtMiAqIGIxMCAtIG0xICogYjExIC0gbTMgKiBiMDkpIC8gZGV0ZXJtaW5hbnQsIChtMTMgKiBiMDUgLSBtMTQgKiBiMDQgKyBtMTUgKiBiMDMpIC8gZGV0ZXJtaW5hbnQsIChtMTAgKiBiMDQgLSBtOSAqIGIwNSAtIG0xMSAqIGIwMykgLyBkZXRlcm1pbmFudCxcbiAgICAobTYgKiBiMDggLSBtNCAqIGIxMSAtIG03ICogYjA3KSAvIGRldGVybWluYW50LCAobTAgKiBiMTEgLSBtMiAqIGIwOCArIG0zICogYjA3KSAvIGRldGVybWluYW50LCAobTE0ICogYjAyIC0gbTEyICogYjA1IC0gbTE1ICogYjAxKSAvIGRldGVybWluYW50LCAobTggKiBiMDUgLSBtMTAgKiBiMDIgKyBtMTEgKiBiMDEpIC8gZGV0ZXJtaW5hbnQsXG4gICAgKG00ICogYjEwIC0gbTUgKiBiMDggKyBtNyAqIGIwNikgLyBkZXRlcm1pbmFudCwgKG0xICogYjA4IC0gbTAgKiBiMTAgLSBtMyAqIGIwNikgLyBkZXRlcm1pbmFudCwgKG0xMiAqIGIwNCAtIG0xMyAqIGIwMiArIG0xNSAqIGIwMCkgLyBkZXRlcm1pbmFudCwgKG05ICogYjAyIC0gbTggKiBiMDQgLSBtMTEgKiBiMDApIC8gZGV0ZXJtaW5hbnQsXG4gICAgKG01ICogYjA3IC0gbTQgKiBiMDkgLSBtNiAqIGIwNikgLyBkZXRlcm1pbmFudCwgKG0wICogYjA5IC0gbTEgKiBiMDcgKyBtMiAqIGIwNikgLyBkZXRlcm1pbmFudCwgKG0xMyAqIGIwMSAtIG0xMiAqIGIwMyAtIG0xNCAqIGIwMCkgLyBkZXRlcm1pbmFudCwgKG04ICogYjAzIC0gbTkgKiBiMDEgKyBtMTAgKiBiMDApIC8gZGV0ZXJtaW5hbnQsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZTQobWF0cml4LCB2ZWN0b3IpIHtcbiAgY29uc3QgWyB4LCB5LCB6IF0gPSB2ZWN0b3IsXG5cbiAgICAgICAgWyBtMCwgbTEsIG0yLCBtMywgbTQsIG01LCBtNiwgbTcsIG04LCBtOSwgbTEwLCBtMTEsIG0xMiwgbTEzLCBtMTQsIG0xNSBdID0gbWF0cml4O1xuXG4gIHJldHVybiAoW1xuXG4gICAgbTAgKiB4LCBtMSAqIHgsIG0yICogeCwgbTMgKiB4LFxuICAgIG00ICogeSwgbTUgKiB5LCBtNiAqIHksIG03ICogeSxcbiAgICBtOCAqIHosIG05ICogeiwgbTEwICogeiwgbTExICogeixcbiAgICBtMTIgKiAxLCBtMTMgKiAxLCBtMTQgKiAxLCBtMTUgKiAxLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlNChtYXRyaXgsIGFuZ2xlLCB2ZWN0b3IpIHtcbiAgY29uc3QgWyB4LCB5LCB6IF0gPSBub3JtYWxpc2UzKHZlY3RvciksXG5cbiAgICAgICAgWyBtMCwgbTEsIG0yLCBtMywgbTQsIG01LCBtNiwgbTcsIG04LCBtOSwgbTEwLCBtMTEsIG0xMiwgbTEzLCBtMTQsIG0xNSBdID0gbWF0cml4LFxuXG4gICAgICAgIHMgPSBNYXRoLnNpbihhbmdsZSksXG4gICAgICAgIGMgPSBNYXRoLmNvcyhhbmdsZSksXG4gICAgICAgIHQgPSAxIC0gYyxcblxuICAgICAgICBiMDAgPSB4ICogeCAqIHQgKyBjLFxuICAgICAgICBiMDEgPSB5ICogeCAqIHQgKyB6ICogcyxcbiAgICAgICAgYjAyID0geiAqIHggKiB0IC0geSAqIHMsXG4gICAgICAgIGIxMCA9IHggKiB5ICogdCAtIHogKiBzLFxuICAgICAgICBiMTEgPSB5ICogeSAqIHQgKyBjLFxuICAgICAgICBiMTIgPSB6ICogeSAqIHQgKyB4ICogcyxcbiAgICAgICAgYjIwID0geCAqIHogKiB0ICsgeSAqIHMsXG4gICAgICAgIGIyMSA9IHkgKiB6ICogdCAtIHggKiBzLFxuICAgICAgICBiMjIgPSB6ICogeiAqIHQgKyBjO1xuXG4gIHJldHVybiAoW1xuXG4gICAgbTAgKiBiMDAgKyBtNCAqIGIwMSArIG04ICogYjAyLCBtMSAqIGIwMCArIG01ICogYjAxICsgbTkgKiBiMDIsIG0yICogYjAwICsgbTYgKiBiMDEgKyBtMTAgKiBiMDIsIG0zICogYjAwICsgbTcgKiBiMDEgKyBtMTEgKiBiMDIsXG4gICAgbTAgKiBiMTAgKyBtNCAqIGIxMSArIG04ICogYjEyLCBtMSAqIGIxMCArIG01ICogYjExICsgbTkgKiBiMTIsIG0yICogYjEwICsgbTYgKiBiMTEgKyBtMTAgKiBiMTIsIG0zICogYjEwICsgbTcgKiBiMTEgKyBtMTEgKiBiMTIsXG4gICAgbTAgKiBiMjAgKyBtNCAqIGIyMSArIG04ICogYjIyLCBtMSAqIGIyMCArIG01ICogYjIxICsgbTkgKiBiMjIsIG0yICogYjIwICsgbTYgKiBiMjEgKyBtMTAgKiBiMjIsIG0zICogYjIwICsgbTcgKiBiMjEgKyBtMTEgKiBiMjIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTEyLCAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMTMsICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMTQsICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMTUsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGU0KG1hdHJpeCwgdmVjdG9yKSB7XG4gIGNvbnN0IFsgeCwgeSwgeiBdID0gdmVjdG9yLFxuXG4gICAgICAgIFsgbTAsIG0xLCBtMiwgbTMsIG00LCBtNSwgbTYsIG03LCBtOCwgbTksIG0xMCwgbTExLCBtMTIsIG0xMywgbTE0LCBtMTUgXSA9IG1hdHJpeDtcblxuICByZXR1cm4gKFtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0xLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0yLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtNCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG01LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG02LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG03LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtOCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG05LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTEwLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTExLFxuICAgIG0wICogeCArIG00ICogeSArIG04ICogeiArIG0xMiwgbTEgKiB4ICsgbTUgKiB5ICsgbTkgKiB6ICsgbTEzLCBtMiAqIHggKyBtNiAqIHkgKyBtMTAgKiB6ICsgbTE0LCBtMyAqIHggKyBtNyAqIHkgKyBtMTEgKiB6ICsgbTE1LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGVyc3BlY3RpdmU0KGZpZWxkT2ZWaWV3LCBhc3BlY3RSYXRpbywgek5lYXIsIHpGYXIpIHtcbiAgY29uc3QgZiA9IDEgLyBNYXRoLnRhbihmaWVsZE9mVmlldyAvIDIpLFxuICAgICAgICBuZiA9IDEgLyAoek5lYXIgLSB6RmFyKTtcblxuICByZXR1cm4gKFtcblxuICAgIGYgLyBhc3BlY3RSYXRpbywgMCwgMCwgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgMCwgICAgICAgICAgICAgICBmLCAwLCAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAwLCAgICAgICAgICAgICAgIDAsICh6RmFyICsgek5lYXIpICogbmYsICAgIC0xLFxuICAgIDAsICAgICAgICAgICAgICAgMCwgKDIgKiB6RmFyICogek5lYXIpICogbmYsIDAsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaWRlbnRpdHkyLFxuICBpZGVudGl0eTMsXG4gIGlkZW50aXR5NCxcbiAgbXVsdGlwbHkyLFxuICBtdWx0aXBseTMsXG4gIG11bHRpcGx5NCxcbiAgZGV0ZXJtaW5hbnQyLFxuICBkZXRlcm1pbmFudDMsXG4gIGRldGVybWluYW50NCxcbiAgdHJhbnNwb3NlMixcbiAgdHJhbnNwb3NlMyxcbiAgdHJhbnNwb3NlNCxcbiAgaW52ZXJ0MixcbiAgaW52ZXJ0MyxcbiAgaW52ZXJ0NCxcbiAgc2NhbGU0LFxuICByb3RhdGU0LFxuICB0cmFuc2xhdGU0LFxuICBwZXJzcGVjdGl2ZTRcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNjYWxlMyB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgREVHUkVFU19UT19SQURJQU5TX01VTFRJUExJRVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBpZGVudGl0eTQsIHNjYWxlNCwgaW52ZXJ0NCwgcm90YXRlNCwgdHJhbnNsYXRlNCwgdHJhbnNwb3NlNCwgcGVyc3BlY3RpdmU0IH0gZnJvbSBcIi4uL21hdGhzL21hdHJpeFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGVNYXRyaXhGcm9tU2NhbGUoc2NhbGUpIHtcbiAgbGV0IHNjYWxlTWF0cml4ID0gaWRlbnRpdHk0KCk7XG5cbiAgc2NhbGVNYXRyaXggPSBzY2FsZTQoc2NhbGVNYXRyaXgsIHNjYWxlKTtcblxuICByZXR1cm4gc2NhbGVNYXRyaXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMob2Zmc2V0cykge1xuICBsZXQgb2Zmc2V0c01hdHJpeCA9IGlkZW50aXR5NCgpOyAvLy9cblxuICBvZmZzZXRzTWF0cml4ID0gdHJhbnNsYXRlNChvZmZzZXRzTWF0cml4LCBvZmZzZXRzKTtcblxuICByZXR1cm4gb2Zmc2V0c01hdHJpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvc2l0aW9uTWF0cml4RnJvbU5vdGhpbmcoKSB7XG4gIGxldCBwb3NpdGlvbk1hdHJpeCA9IGlkZW50aXR5NCgpOyAvLy9cblxuICByZXR1cm4gcG9zaXRpb25NYXRyaXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3NpdGlvbk1hdHJpeEZyb21EaXN0YW5jZShkaXN0YW5jZSkge1xuICBsZXQgcG9zaXRpb25NYXRyaXggPSBpZGVudGl0eTQoKTsgLy8vXG5cbiAgY29uc3QgeCA9IDAsXG4gICAgICAgIHkgPSAwLFxuICAgICAgICB6ID0gLWRpc3RhbmNlO1xuXG4gIHBvc2l0aW9uTWF0cml4ID0gdHJhbnNsYXRlNChwb3NpdGlvbk1hdHJpeCwgWyB4LCB5LCB6IF0pO1xuXG4gIHJldHVybiBwb3NpdGlvbk1hdHJpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvc2l0aW9uTWF0cml4RnJvbVBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gIGxldCBwb3NpdGlvbk1hdHJpeCA9IGlkZW50aXR5NCgpOyAvLy9cblxuICBwb3NpdGlvbk1hdHJpeCA9IHRyYW5zbGF0ZTQocG9zaXRpb25NYXRyaXgsIHBvc2l0aW9uKTtcblxuICByZXR1cm4gcG9zaXRpb25NYXRyaXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcywgcmV2ZXJzZU9yZGVyID0gZmFsc2UpIHtcbiAgbGV0IHJvdGF0aW9uc01hdHJpeCA9IGlkZW50aXR5NCgpOyAvLy9cblxuICBjb25zdCBmaXJzdEFuZ2xlID0gZmlyc3QoYW5nbGVzKSxcbiAgICAgICAgc2Vjb25kQW5nbGUgPSBzZWNvbmQoYW5nbGVzKSxcbiAgICAgICAgdGhpcmRBbmdsZSA9IHRoaXJkKGFuZ2xlcyksXG4gICAgICAgIHhBbmdsZSA9IGZpcnN0QW5nbGUsICAvLy8vXG4gICAgICAgIHlBbmdsZSA9IHNlY29uZEFuZ2xlLCAvLy9cbiAgICAgICAgekFuZ2xlID0gdGhpcmRBbmdsZSwgIC8vL1xuICAgICAgICB4QXhpcyA9IFsgMSwgMCwgMCBdLFxuICAgICAgICB5QXhpcyA9IFsgMCwgMSwgMCBdLFxuICAgICAgICB6QXhpcyA9IFsgMCwgMCwgMSBdO1xuXG4gIGlmIChyZXZlcnNlT3JkZXIpIHtcbiAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGU0KHJvdGF0aW9uc01hdHJpeCwgekFuZ2xlLCB6QXhpcyk7XG4gICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRlNChyb3RhdGlvbnNNYXRyaXgsIHlBbmdsZSwgeUF4aXMpO1xuICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0ZTQocm90YXRpb25zTWF0cml4LCB4QW5nbGUsIHhBeGlzKTtcbiAgfSBlbHNlIHtcbiAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGU0KHJvdGF0aW9uc01hdHJpeCwgeEFuZ2xlLCB4QXhpcyk7XG4gICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRlNChyb3RhdGlvbnNNYXRyaXgsIHlBbmdsZSwgeUF4aXMpO1xuICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0ZTQocm90YXRpb25zTWF0cml4LCB6QW5nbGUsIHpBeGlzKTtcbiAgfVxuXG4gIHJldHVybiByb3RhdGlvbnNNYXRyaXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGlvbnNNYXRyaXhGcm9tUm90YXRpb25zKHJvdGF0aW9ucykge1xuICBjb25zdCBzY2FsYXIgPSBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUiwgLy8vXG4gICAgICAgIGFuZ2xlcyA9IHNjYWxlMyhyb3RhdGlvbnMsIHNjYWxhciksXG4gICAgICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMoYW5nbGVzKTtcblxuICByZXR1cm4gcm90YXRpb25zTWF0cml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgocm90YXRpb25zTWF0cml4KSB7XG4gIGxldCBub3JtYWxzTWF0cml4ID0gaW52ZXJ0NChyb3RhdGlvbnNNYXRyaXgpOyAvLy9cblxuICBub3JtYWxzTWF0cml4ID0gdHJhbnNwb3NlNChub3JtYWxzTWF0cml4KTtcblxuICByZXR1cm4gbm9ybWFsc01hdHJpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3Rpb25NYXRyaXhGcm9tQ2FtZXJhQW5kQ2FudmFzKGNhbWVyYSwgY2FudmFzKSB7XG4gIGNvbnN0IHpGYXIgPSBjYW1lcmEuZ2V0WkZhcigpLFxuICAgICAgICB6TmVhciA9IGNhbWVyYS5nZXRaTmVhcigpLFxuICAgICAgICB3aWR0aCA9IGNhbnZhcy5nZXRXaWR0aCgpLFxuICAgICAgICBoZWlnaHQgPSBjYW52YXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgIGZpZWxkT2ZWaWV3ID0gY2FtZXJhLmdldEZpZWxkT2ZWaWV3KCksXG4gICAgICAgIGFzcGVjdFJhdGlvID0gKCB3aWR0aCAvIGhlaWdodCApLFxuICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gcGVyc3BlY3RpdmU0KGZpZWxkT2ZWaWV3LCBhc3BlY3RSYXRpbywgek5lYXIsIHpGYXIpO1xuXG4gIHJldHVybiBwcm9qZWN0aW9uTWF0cml4O1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBtdWx0aXBseTQgfSBmcm9tIFwiLi4vbWF0aHMvbWF0cml4XCI7XG5pbXBvcnQgeyB0cmFuc2Zvcm00IH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgc2NhbGVNYXRyaXhGcm9tU2NhbGUsIHBvc2l0aW9uTWF0cml4RnJvbVBvc2l0aW9uLCByb3RhdGlvbnNNYXRyaXhGcm9tUm90YXRpb25zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9tYXRyaXhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvc2VUcmFuc2Zvcm0oc2NhbGUsIHBvc2l0aW9uLCByb3RhdGlvbnMpIHtcbiAgbGV0IG1hdHJpeCA9IG51bGw7XG5cbiAgaWYgKHNjYWxlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2NhbGVNYXRyaXggPSBzY2FsZU1hdHJpeEZyb21TY2FsZShzY2FsZSk7XG5cbiAgICBtYXRyaXggPSAobWF0cml4ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICBzY2FsZU1hdHJpeCA6XG4gICAgICAgICAgICAgICAgIG11bHRpcGx5NChzY2FsZU1hdHJpeCwgbWF0cml4KTtcbiAgfVxuXG4gIGlmIChyb3RhdGlvbnMgIT09IG51bGwpIHtcbiAgICBjb25zdCByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tUm90YXRpb25zKHJvdGF0aW9ucyk7XG5cbiAgICBtYXRyaXggPSAobWF0cml4ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICByb3RhdGlvbnNNYXRyaXggOlxuICAgICAgICAgICAgICAgICBtdWx0aXBseTQocm90YXRpb25zTWF0cml4LCBtYXRyaXgpO1xuXG4gIH1cblxuICBpZiAocG9zaXRpb24gIT09IG51bGwpIHtcbiAgICBjb25zdCBwb3NpdGlvbk1hdHJpeCA9IHBvc2l0aW9uTWF0cml4RnJvbVBvc2l0aW9uKHBvc2l0aW9uKTtcblxuICAgIG1hdHJpeCA9IChtYXRyaXggPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA6XG4gICAgICAgICAgICAgICAgICBtdWx0aXBseTQocG9zaXRpb25NYXRyaXgsIG1hdHJpeCk7XG4gIH1cblxuICBjb25zdCB0cmFuc2Zvcm0gPSAobWF0cml4ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgKHZlY3RvcikgPT4gdmVjdG9yIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICh2ZWN0b3IpID0+IHRyYW5zZm9ybTQoWyAuLi52ZWN0b3IsIDEgXSwgbWF0cml4KS5zbGljZSgwLCAzKTtcblxuICByZXR1cm4gdHJhbnNmb3JtO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IE1hc2tpbmdGYWNldCBmcm9tIFwiLi4vcHJpbWl0aXZlL21hc2tpbmdGYWNldFwiO1xuXG5pbXBvcnQgeyBhZGQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQge2NvbXBvc2VUcmFuc2Zvcm19IGZyb20gXCIuLi91dGlsaXRpZXMvdHJhbnNmb3JtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hc2sgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVmZXJlbmNlLCB0cmFuc2Zvcm0pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gICAgdGhpcy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0VHJhbnNmb3JtKCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybTtcbiAgfVxuXG4gIHJldHJpZXZlTWFza2luZ0ZhY2V0cygpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCksXG4gICAgICAgICAgZmFjZXRzID0gcmV0cmlldmVGYWNldHMoY2hpbGRFbGVtZW50cyksXG4gICAgICAgICAgbWFza2luZ0ZhY2V0cyA9IGZhY2V0cy5tYXAoKGZhY2V0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXNraW5nRmFjZXQgPSBNYXNraW5nRmFjZXQuZnJvbUZhY2V0KGZhY2V0KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIG1hc2tpbmdGYWNldDtcbiAgICAgICAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gbWFza2luZ0ZhY2V0czsgICAgICAgICAgXG4gIH1cblxuICBtYXNrRWxlbWVudChlbGVtZW50LCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgbWFza2luZ0ZhY2V0cyA9IHRoaXMucmV0cmlldmVNYXNraW5nRmFjZXRzKCksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnQuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgbWFza0VsZW1lbnQoZWxlbWVudCwgbWFza2luZ0ZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgICAgbWFza0VsZW1lbnQoY2hpbGRFbGVtZW50LCBtYXNraW5nRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgICBjaGlsZEVsZW1lbnQuYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUZhY2V0cyhtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICAgIGNoaWxkRWxlbWVudC5jcmVhdGVGYWNldHMobWFyZ2luT2ZFcnJvcik7XG4gICAgfSk7XG4gIH1cblxuICBtYXNrRmFjZXRzKG1hc2tzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICAgIGNoaWxkRWxlbWVudC5tYXNrRmFjZXRzKG1hc2tzLCBtYXJnaW5PZkVycm9yKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXBwbHlUcmFuc2Zvcm0odGhpcy50cmFuc2Zvcm0pOyAgLy8vXG4gIH1cblxuICBhZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikge31cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgcmVmZXJlbmNlLCBzY2FsZSA9IG51bGwsIHBvc2l0aW9uID0gbnVsbCwgcm90YXRpb25zID0gbnVsbCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0cmFuc2Zvcm0gPSBjb21wb3NlVHJhbnNmb3JtKHNjYWxlLCBwb3NpdGlvbiwgcm90YXRpb25zKSxcbiAgICAgICAgICBtYXNrID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhNYXNrLCBwcm9wZXJ0aWVzLCByZWZlcmVuY2UsIHRyYW5zZm9ybSk7XG5cbiAgICByZXR1cm4gbWFzaztcbiAgfVxufVxuXG5mdW5jdGlvbiByZXRyaWV2ZUZhY2V0cyhjaGlsZEVsZW1lbnRzLCBmYWNldHMgPSBbXSkge1xuICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBjaGlsZEVsZW1lbnQsIC8vL1xuICAgICAgICAgIGVsZW1lbnRGYWNldHMgPSBlbGVtZW50LmdldEZhY2V0cygpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGFkZChmYWNldHMsIGVsZW1lbnRGYWNldHMpO1xuXG4gICAgcmV0cmlldmVGYWNldHMoY2hpbGRFbGVtZW50cywgZmFjZXRzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZhY2V0cztcbn1cblxuZnVuY3Rpb24gbWFza0VsZW1lbnQoZWxlbWVudCwgbWFza2luZ0ZhY2V0cywgbWFyZ2luT2ZFcnJvcikge1xuICBsZXQgZmFjZXRzID0gZWxlbWVudC5nZXRGYWNldHMoKTtcblxuICBtYXNraW5nRmFjZXRzLmZvckVhY2goKG1hc2tpbmdGYWNldCkgPT4ge1xuICAgIGNvbnN0IHVubWFza2VkRmFjZXRzID0gW107XG5cbiAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IHtcbiAgICAgIG1hc2tpbmdGYWNldC5tYXNrRmFjZXQoZmFjZXQsIHVubWFza2VkRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcbiAgICB9KTtcblxuICAgIGZhY2V0cyA9IHVubWFza2VkRmFjZXRzOyAgLy8vXG4gIH0pO1xuXG4gIGVsZW1lbnQuc2V0RmFjZXRzKGZhY2V0cyk7XG5cbiAgY29uc3QgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnQuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGNoaWxkRWxlbWVudDsgLy8vXG5cbiAgICBtYXNrRWxlbWVudChlbGVtZW50LCBtYXNraW5nRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcbiAgfSk7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBlbGVtZW50c0Zyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMsIENsYXNzKSB7XG4gIGNvbnN0IGVsZW1lbnRzID0gY2hpbGRFbGVtZW50cy5yZWR1Y2UoKGVsZW1lbnRzLCBjaGlsZEVsZW1lbnQpID0+IHtcbiAgICBpZiAoY2hpbGRFbGVtZW50IGluc3RhbmNlb2YgQ2xhc3MpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBjaGlsZEVsZW1lbnQ7ICAvLy9cblxuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnRzO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudEZyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMsIENsYXNzKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBjaGlsZEVsZW1lbnRzLnJlZHVjZSgoZWxlbWVudCwgY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgaWYgKGVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgIGlmIChjaGlsZEVsZW1lbnQgaW5zdGFuY2VvZiBDbGFzcykge1xuICAgICAgICBlbGVtZW50ID0gY2hpbGRFbGVtZW50OyAgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFzayBmcm9tIFwiLi9tYXNrXCI7XG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBjb21wb3NlVHJhbnNmb3JtIH0gZnJvbSBcIi4uL3V0aWxpdGllcy90cmFuc2Zvcm1cIjtcbmltcG9ydCB7IGVsZW1lbnRzRnJvbUNoaWxkRWxlbWVudHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihtYXNrUmVmZXJlbmNlLCB0cmFuc2Zvcm0sIGZhY2V0cywgbWFza3MpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5tYXNrUmVmZXJlbmNlID0gbWFza1JlZmVyZW5jZTtcbiAgICB0aGlzLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICB0aGlzLmZhY2V0cyA9IGZhY2V0cztcbiAgICB0aGlzLm1hc2tzID0gbWFza3M7XG4gIH1cblxuICBnZXRNYXNrUmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLm1hc2tSZWZlcmVuY2U7XG4gIH1cblxuICBnZXRUcmFuc2Zvcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtO1xuICB9XG5cbiAgZ2V0RmFjZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmZhY2V0cztcbiAgfVxuXG4gIGdldE1hc2tzKCkge1xuICAgIHJldHVybiB0aGlzLm1hc2tzO1xuICB9XG5cbiAgc2V0RmFjZXRzKGZhY2V0cykge1xuICAgIHRoaXMuZmFjZXRzID0gZmFjZXRzO1xuICB9XG5cbiAgYXBwbHlNYXNrKG1hc2tzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgaWYgKHRoaXMubWFza1JlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWFzayA9IG1hc2tzLmZpbmQoKG1hc2spID0+IHtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlID0gbWFzay5nZXRSZWZlcmVuY2UoKTtcblxuICAgICAgICBpZiAocmVmZXJlbmNlID09PSB0aGlzLm1hc2tSZWZlcmVuY2UpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSkgfHwgbnVsbDsgLy8vXG5cbiAgICAgIGlmIChtYXNrICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgICAgICBtYXNrLm1hc2tFbGVtZW50KGVsZW1lbnQsIG1hcmdpbk9mRXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIHRoaXMuZmFjZXRzLmZvckVhY2goKGZhY2V0KSA9PiB7XG4gICAgICBmYWNldC5hcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pO1xuICAgIH0pO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICAgIGNoaWxkRWxlbWVudC5hcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pO1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlRmFjZXRzKG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgICAgY2hpbGRFbGVtZW50LmNyZWF0ZUZhY2V0cyhtYXJnaW5PZkVycm9yKTtcbiAgICB9KTtcbiAgfVxuXG4gIG1hc2tGYWNldHMobWFza3MsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBtYXNrcyA9IFsgLi4ubWFza3MsIC4uLnRoaXMubWFza3MgXTsgLy8vXG5cbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgICAgY2hpbGRFbGVtZW50Lm1hc2tGYWNldHMobWFza3MsIG1hcmdpbk9mRXJyb3IpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hcHBseVRyYW5zZm9ybSh0aGlzLnRyYW5zZm9ybSk7ICAvLy9cblxuICAgIHRoaXMuYXBwbHlNYXNrKG1hc2tzLCBtYXJnaW5PZkVycm9yKTtcbiAgfVxuXG4gIGFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICAgIGNoaWxkRWxlbWVudC5hZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcik7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgY2hpbGRFbGVtZW50cywgc2NhbGUgPSBudWxsLCBwb3NpdGlvbiA9IG51bGwsIHJvdGF0aW9ucyA9IG51bGwsIG1hc2tSZWZlcmVuY2UgPSBudWxsIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRyYW5zZm9ybSA9IGNvbXBvc2VUcmFuc2Zvcm0oc2NhbGUsIHBvc2l0aW9uLCByb3RhdGlvbnMpLFxuICAgICAgICAgIGZhY2V0cyA9IFtdLFxuICAgICAgICAgIG1hc2tzID0gZWxlbWVudHNGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzLCBNYXNrKSxcbiAgICAgICAgICBjYW52YXNFbGVtZW50ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgbWFza1JlZmVyZW5jZSwgdHJhbnNmb3JtLCBmYWNldHMsIG1hc2tzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGNhbnZhc0VsZW1lbnQ7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENhbnZhc0VsZW1lbnQgZnJvbSBcIi4uLy4uL2VsZW1lbnQvY2FudmFzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bmN0aW9uQ2FudmFzRWxlbWVudCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IGZ1bmN0aW9uRWxlbWVudCA9IENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoRnVuY3Rpb25DYW52YXNFbGVtZW50LCBwcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiBmdW5jdGlvbkVsZW1lbnQ7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUZhbHNleUVsZW1lbnRzKGVsZW1lbnRzKSB7XG4gIGVsZW1lbnRzID0gZWxlbWVudHMucmVkdWNlKChlbGVtZW50cywgZWxlbWVudCkgPT4ge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50cztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudFwiO1xuaW1wb3J0IEZ1bmN0aW9uQ2FudmFzRWxlbWVudCBmcm9tIFwiLi9lbGVtZW50L2NhbnZhcy9mdW5jdGlvblwiO1xuXG5pbXBvcnQgeyBGVU5DVElPTiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZmxhdHRlbiwgZ3VhcmFudGVlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyByZW1vdmVGYWxzZXlFbGVtZW50cyB9IGZyb20gXCIuL3V0aWxpdGllcy9lbGVtZW50c1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KGZpcnN0QXJndW1lbnQsIHByb3BlcnRpZXMsIC4uLmNoaWxkRWxlbWVudHMpIHtcbiAgcHJvcGVydGllcyA9IHByb3BlcnRpZXMgfHwge307ICAvLy9cblxuICBjaGlsZEVsZW1lbnRzID0gc2FuaXRpc2VDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpOyAvLy9cblxuICBsZXQgZWxlbWVudDtcblxuICBpZiAoaXNTdWJjbGFzc09mKGZpcnN0QXJndW1lbnQsIEVsZW1lbnQpKSB7XG4gICAgY29uc3QgQ2xhc3MgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICBPYmplY3QuYXNzaWduKHByb3BlcnRpZXMsIHtcbiAgICAgIGNoaWxkRWxlbWVudHNcbiAgICB9KTtcblxuICAgIGVsZW1lbnQgPSBDbGFzcy5mcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gRlVOQ1RJT04pIHtcbiAgICBjb25zdCBmdW5jID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBndWFyYW50ZWUoZnVuYyhwcm9wZXJ0aWVzKSk7XG5cbiAgICBPYmplY3QuYXNzaWduKHByb3BlcnRpZXMsIHtcbiAgICAgIGNoaWxkRWxlbWVudHNcbiAgICB9KTtcblxuICAgIGVsZW1lbnQgPSBGdW5jdGlvbkNhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuY29uc3QgUmVhY3QgPSB7XG4gIGNyZWF0ZUVsZW1lbnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0O1xuXG5mdW5jdGlvbiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGNvbnN0IHN1YmNsYXNzT2YgPSAoYXJndW1lbnQucHJvdG90eXBlIGluc3RhbmNlb2YgQ2xhc3MpO1xuXG4gIHJldHVybiBzdWJjbGFzc09mO1xufVxuXG5mdW5jdGlvbiBzYW5pdGlzZUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cykge1xuICBjaGlsZEVsZW1lbnRzID0gZmxhdHRlbihjaGlsZEVsZW1lbnRzKTtcblxuICBjaGlsZEVsZW1lbnRzID0gcmVtb3ZlRmFsc2V5RWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG5cbiAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWFjdCBmcm9tIFwiLi9yZWFjdFwiO1xuXG5PYmplY3QuYXNzaWduKGdsb2JhbFRoaXMsIHtcbiAgUmVhY3Rcbn0pO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBERUZBVUxUX0RFUFRIIH0gZnJvbSBcIi4uL2RlZmF1bHRzXCI7XG5cbmZ1bmN0aW9uIGNsZWFyRGVwdGgoZGVwdGggPSBERUZBVUxUX0RFUFRIKSB7XG4gIHRoaXMuY29udGV4dC5jbGVhckRlcHRoKGRlcHRoKTsgXG59XG5cbmZ1bmN0aW9uIGNsZWFyRGVwdGhCdWZmZXIoKSB7XG4gIGNvbnN0IHsgREVQVEhfQlVGRkVSX0JJVCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICBtYXNrID0gREVQVEhfQlVGRkVSX0JJVDtcblxuICB0aGlzLmNvbnRleHQuY2xlYXIobWFzayk7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZURlcHRoVGVzdGluZygpIHtcbiAgY29uc3QgeyBERVBUSF9URVNULCBMRVFVQUwgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgY2FwYWNpdHkgPSBERVBUSF9URVNULFxuICAgICAgICBkZXB0aENvbXBhcmlzb25GdW5jdGlvbiA9IExFUVVBTDtcblxuICB0aGlzLmNvbnRleHQuZW5hYmxlKGNhcGFjaXR5KTtcblxuICB0aGlzLmNvbnRleHQuZGVwdGhGdW5jKGRlcHRoQ29tcGFyaXNvbkZ1bmN0aW9uKTtcbn1cblxuY29uc3QgZGVwdGhNaXhpbnMgPSB7XG4gIGNsZWFyRGVwdGgsXG4gIGNsZWFyRGVwdGhCdWZmZXIsXG4gIGVuYWJsZURlcHRoVGVzdGluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVwdGhNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBTSEFERVJfRVJST1IgPSBcIlVuYWJsZSB0byBjcmVhdGUgdGhlIHNoYWRlci5cIjtcbmV4cG9ydCBjb25zdCBXRUJfR0xfQ09OVEVYVF9FUlJPUiA9IFwiVW5hYmxlIHRvIGdldCB0aGUgV2ViR0wgY29udGV4dC5cIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU0hBREVSX0VSUk9SIH0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVTaGFkZXIodHlwZSwgc2hhZGVyU291cmNlKSB7XG4gIGNvbnN0IHsgQ09NUElMRV9TVEFUVVMgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgcG5hbWUgPSBDT01QSUxFX1NUQVRVUyxcbiAgICAgICAgc2hhZGVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZVNoYWRlcih0eXBlKTtcblxuICB0aGlzLmNvbnRleHQuc2hhZGVyU291cmNlKHNoYWRlciwgc2hhZGVyU291cmNlKTtcblxuICB0aGlzLmNvbnRleHQuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xuXG4gIGNvbnN0IGNvbXBpbGVTdGF0dXMgPSB0aGlzLmNvbnRleHQuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgcG5hbWUpO1xuXG4gIGlmICghY29tcGlsZVN0YXR1cykge1xuICAgIHRocm93IG5ldyBFcnJvcihTSEFERVJfRVJST1IpO1xuICB9XG5cbiAgcmV0dXJuIHNoYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVmVydGV4U2hhZGVyKHZlcnRleFNoYWRlclNvdXJjZSwgY2FudmFzKSB7XG4gIGNvbnN0IHsgVkVSVEVYX1NIQURFUiB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0eXBlID0gVkVSVEVYX1NIQURFUixcbiAgICAgICAgdmVydGV4U2hhZGVyID0gdGhpcy5jcmVhdGVTaGFkZXIodHlwZSwgdmVydGV4U2hhZGVyU291cmNlKTtcblxuICByZXR1cm4gdmVydGV4U2hhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGcmFnbWVudFNoYWRlcihmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSB7XG4gIGNvbnN0IHsgRlJBR01FTlRfU0hBREVSIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHR5cGUgPSBGUkFHTUVOVF9TSEFERVIsXG4gICAgICAgIGZyYWdtZW50U2hhZGVyID0gdGhpcy5jcmVhdGVTaGFkZXIodHlwZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UpO1xuXG4gIHJldHVybiBmcmFnbWVudFNoYWRlcjtcbn1cblxuY29uc3Qgc2hhZGVyTWl4aW5zID0ge1xuICBjcmVhdGVTaGFkZXIsXG4gIGNyZWF0ZVZlcnRleFNoYWRlcixcbiAgY3JlYXRlRnJhZ21lbnRTaGFkZXJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNoYWRlck1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudEJ1ZmZlcihkYXRhKSB7XG4gIGNvbnN0IHsgRUxFTUVOVF9BUlJBWV9CVUZGRVIsIFNUQVRJQ19EUkFXIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHRhcmdldCA9IEVMRU1FTlRfQVJSQVlfQlVGRkVSLFxuICAgICAgICB1c2FnZSA9IFNUQVRJQ19EUkFXLFxuICAgICAgICB1aW50MTZBcnJheSA9IG5ldyBVaW50MTZBcnJheShkYXRhKSxcbiAgICAgICAgZWxlbWVudEJ1ZmZlciA9IHRoaXMuY29udGV4dC5jcmVhdGVCdWZmZXIoKTtcblxuICB0aGlzLmNvbnRleHQuYmluZEJ1ZmZlcih0YXJnZXQsIGVsZW1lbnRCdWZmZXIpO1xuXG4gIHRoaXMuY29udGV4dC5idWZmZXJEYXRhKHRhcmdldCwgdWludDE2QXJyYXksIHVzYWdlKTtcblxuICByZXR1cm4gZWxlbWVudEJ1ZmZlcjtcbn1cblxuZnVuY3Rpb24gYmluZEVsZW1lbnRCdWZmZXIoZWxlbWVudEJ1ZmZlcikge1xuICBjb25zdCB7IEVMRU1FTlRfQVJSQVlfQlVGRkVSIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHRhcmdldCA9IEVMRU1FTlRfQVJSQVlfQlVGRkVSO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRhcmdldCwgZWxlbWVudEJ1ZmZlcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1ZmZlcihkYXRhKSB7XG4gIGNvbnN0IHsgQVJSQVlfQlVGRkVSLCBTVEFUSUNfRFJBVyB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0YXJnZXQgPSBBUlJBWV9CVUZGRVIsXG4gICAgICAgIHVzYWdlID0gU1RBVElDX0RSQVcsXG4gICAgICAgIGJ1ZmZlciA9IHRoaXMuY29udGV4dC5jcmVhdGVCdWZmZXIoKSxcbiAgICAgICAgZmxvYXQzMkFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShkYXRhKTtcblxuICB0aGlzLmNvbnRleHQuYmluZEJ1ZmZlcih0YXJnZXQsIGJ1ZmZlcik7XG5cbiAgdGhpcy5jb250ZXh0LmJ1ZmZlckRhdGEodGFyZ2V0LCBmbG9hdDMyQXJyYXksIHVzYWdlKTtcblxuICByZXR1cm4gYnVmZmVyO1xufVxuXG5mdW5jdGlvbiBiaW5kQnVmZmVyKGJ1ZmZlciwgYXR0cmlidXRlTG9jYXRpb24sIGNvbXBvbmVudHMpIHtcbiAgY29uc3QgeyBBUlJBWV9CVUZGRVIsIEZMT0FUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHRhcmdldCA9IEFSUkFZX0JVRkZFUixcbiAgICAgICAgdHlwZSA9IEZMT0FULFxuICAgICAgICBub3JtYWxpemUgPSBmYWxzZSxcbiAgICAgICAgc3RyaWRlID0gMCxcbiAgICAgICAgb2Zmc2V0ID0gMDtcblxuICB0aGlzLmNvbnRleHQuYmluZEJ1ZmZlcih0YXJnZXQsIGJ1ZmZlcik7XG5cbiAgdGhpcy5jb250ZXh0LnZlcnRleEF0dHJpYlBvaW50ZXIoYXR0cmlidXRlTG9jYXRpb24sIGNvbXBvbmVudHMsIHR5cGUsIG5vcm1hbGl6ZSwgc3RyaWRlLCBvZmZzZXQpO1xuXG4gIHRoaXMuY29udGV4dC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShhdHRyaWJ1dGVMb2NhdGlvbik7XG59XG5cbmNvbnN0IGJ1ZmZlck1peGlucyA9IHtcbiAgY3JlYXRlRWxlbWVudEJ1ZmZlcixcbiAgYmluZEVsZW1lbnRCdWZmZXIsXG4gIGNyZWF0ZUJ1ZmZlcixcbiAgYmluZEJ1ZmZlclxufTtcblxuZXhwb3J0IGRlZmF1bHQgYnVmZmVyTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBjbGVhckNvbG91cihjb2xvdXIpIHtcbiAgY29uc3QgWyByLCBnLCBiLCBhID0gMSBdID0gIGNvbG91cjtcblxuICB0aGlzLmNvbnRleHQuY2xlYXJDb2xvcihyLCBnLCBiLCBhKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJDb2xvdXJCdWZmZXIoKSB7XG4gIGNvbnN0IHsgQ09MT1JfQlVGRkVSX0JJVCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICBtYXNrID0gQ09MT1JfQlVGRkVSX0JJVDtcblxuICB0aGlzLmNvbnRleHQuY2xlYXIobWFzayk7XG59XG5cbmNvbnN0IGNvbG91ck1peGlucyA9IHtcbiAgY2xlYXJDb2xvdXIsXG4gIGNsZWFyQ29sb3VyQnVmZmVyXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb2xvdXJNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGFwcGx5TWF0cml4KHVuaWZvcm1Mb2NhdGlvbiwgbWF0cml4KSB7XG4gIGNvbnN0IHRyYW5zcG9zZSA9IGZhbHNlOyAgLy8vXG5cbiAgdGhpcy5jb250ZXh0LnVuaWZvcm1NYXRyaXg0ZnYodW5pZm9ybUxvY2F0aW9uLCB0cmFuc3Bvc2UsIG1hdHJpeCk7XG59XG5cbmNvbnN0IG1hdHJpeE1peGlucyA9IHtcbiAgYXBwbHlNYXRyaXhcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1hdHJpeE1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRVhUX1RFWFRVUkVfRklMVEVSX0FOSVNPVFJPUElDLFxuICAgICAgICAgTU9aX0VYVF9URVhUVVJFX0ZJTFRFUl9BTklTT1RST1BJQyxcbiAgICAgICAgIFdFQktJVF9FWFRfVEVYVFVSRV9GSUxURVJfQU5JU09UUk9QSUMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHR1cmUoaW1hZ2UsIGluZGV4LCByZXBlYXQpIHtcblx0Y29uc3QgeyBSR0JBLCBMSU5FQVIsIFVOU0lHTkVEX0JZVEUsIFRFWFRVUkUwLCBURVhUVVJFXzJELCBURVhUVVJFX1dSQVBfUywgVEVYVFVSRV9XUkFQX1QsIFVOUEFDS19GTElQX1lfV0VCR0wsIENMQU1QX1RPX0VER0UsIE5FQVJFU1QsIFJFUEVBVCwgVEVYVFVSRV9NSU5fRklMVEVSIH0gPSB0aGlzLmNvbnRleHQsXG5cdFx0XHRcdHRhcmdldCA9IFRFWFRVUkUwICsgaW5kZXgsXG5cdFx0XHRcdGxldmVsID0gMCxcblx0XHRcdFx0aW50ZXJuYWxGb3JtYXQgPSBSR0JBLFxuXHRcdFx0XHRmb3JtYXQgPSBSR0JBLFxuXHRcdFx0XHR0eXBlID0gVU5TSUdORURfQllURSxcblx0XHRcdFx0dGV4dHVyZSA9IHRoaXMuY29udGV4dC5jcmVhdGVUZXh0dXJlKCk7XG5cbiAgdGhpcy5jb250ZXh0LmFjdGl2ZVRleHR1cmUodGFyZ2V0KTtcblxuICB0aGlzLmNvbnRleHQuYmluZFRleHR1cmUoVEVYVFVSRV8yRCwgdGV4dHVyZSk7XG5cbiAgdGhpcy5jb250ZXh0LnBpeGVsU3RvcmVpKFVOUEFDS19GTElQX1lfV0VCR0wsIHRydWUpO1xuXG4gIHRoaXMuY29udGV4dC50ZXhJbWFnZTJEKFRFWFRVUkVfMkQsIGxldmVsLCBpbnRlcm5hbEZvcm1hdCwgZm9ybWF0LCB0eXBlLCBpbWFnZSk7XG5cbiAgaWYgKHJlcGVhdCkge1xuICAgIHRoaXMuY29udGV4dC50ZXhQYXJhbWV0ZXJpKFRFWFRVUkVfMkQsIFRFWFRVUkVfV1JBUF9TLCBSRVBFQVQpO1xuICAgIHRoaXMuY29udGV4dC50ZXhQYXJhbWV0ZXJpKFRFWFRVUkVfMkQsIFRFWFRVUkVfV1JBUF9ULCBSRVBFQVQpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuY29udGV4dC50ZXhQYXJhbWV0ZXJpKFRFWFRVUkVfMkQsIFRFWFRVUkVfV1JBUF9TLCBDTEFNUF9UT19FREdFKTtcbiAgICB0aGlzLmNvbnRleHQudGV4UGFyYW1ldGVyaShURVhUVVJFXzJELCBURVhUVVJFX1dSQVBfVCwgQ0xBTVBfVE9fRURHRSk7XG4gIH1cblxuXHR0aGlzLmNvbnRleHQudGV4UGFyYW1ldGVyaShURVhUVVJFXzJELCBURVhUVVJFX01JTl9GSUxURVIsIExJTkVBUik7XG5cblx0cmV0dXJuIHRleHR1cmU7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZUFuaXNvdHJvcGljRmlsdGVyaW5nKCkge1xuICBjb25zdCBleHRlbnNpb24gPSAoXG4gICAgdGhpcy5jb250ZXh0LmdldEV4dGVuc2lvbihFWFRfVEVYVFVSRV9GSUxURVJfQU5JU09UUk9QSUMpIHx8XG4gICAgdGhpcy5jb250ZXh0LmdldEV4dGVuc2lvbihNT1pfRVhUX1RFWFRVUkVfRklMVEVSX0FOSVNPVFJPUElDKSB8fFxuICAgIHRoaXMuY29udGV4dC5nZXRFeHRlbnNpb24oV0VCS0lUX0VYVF9URVhUVVJFX0ZJTFRFUl9BTklTT1RST1BJQylcbiAgKTtcblxuICBpZiAoZXh0ZW5zaW9uKSB7XG4gICAgY29uc3QgeyBURVhUVVJFXzJEIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgeyBNQVhfVEVYVFVSRV9NQVhfQU5JU09UUk9QWV9FWFQsIFRFWFRVUkVfTUFYX0FOSVNPVFJPUFlfRVhUIH0gPSBleHRlbnNpb24sXG4gICAgICAgICAgbWF4aW11bSA9IHRoaXMuY29udGV4dC5nZXRQYXJhbWV0ZXIoTUFYX1RFWFRVUkVfTUFYX0FOSVNPVFJPUFlfRVhUKTtcblxuICAgIHRoaXMuY29udGV4dC50ZXhQYXJhbWV0ZXJmKFRFWFRVUkVfMkQsIFRFWFRVUkVfTUFYX0FOSVNPVFJPUFlfRVhULCBtYXhpbXVtKTtcbiAgfVxufVxuXG5jb25zdCB0ZXh0dXJlTWl4aW5zID0ge1xuICBjcmVhdGVUZXh0dXJlLFxuICBlbmFibGVBbmlzb3Ryb3BpY0ZpbHRlcmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdGV4dHVyZU1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKSB7XG4gIGNvbnN0IHByb2dyYW0gPSB0aGlzLmNvbnRleHQuY3JlYXRlUHJvZ3JhbSgpO1xuXG4gIHRoaXMuY29udGV4dC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgdmVydGV4U2hhZGVyKTtcblxuICB0aGlzLmNvbnRleHQuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGZyYWdtZW50U2hhZGVyKTtcbiAgXG4gIHRoaXMuY29udGV4dC5saW5rUHJvZ3JhbShwcm9ncmFtKTtcbiAgXG4gIHJldHVybiBwcm9ncmFtO1xufVxuXG5mdW5jdGlvbiB1c2VQcm9ncmFtKHByb2dyYW0pIHtcbiAgdGhpcy5jb250ZXh0LnVzZVByb2dyYW0ocHJvZ3JhbSk7XG59XG5cbmNvbnN0IHByb2dyYW1NaXhpbnMgPSB7XG4gIGNyZWF0ZVByb2dyYW0sXG4gIHVzZVByb2dyYW1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByb2dyYW1NaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGVuYWJsZUJsZW5kaW5nKCkge1xuICBjb25zdCB7IEJMRU5ELCBTUkNfQUxQSEEsIE9ORSB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICBjYXBhY2l0eSA9IEJMRU5ELFxuICAgICAgICBzb3VyY2VGYWN0b3IgPSBTUkNfQUxQSEEsXG4gICAgICAgIGRlc3RpbmF0aW9uRmFjdG9yID0gT05FO1xuXG4gIHRoaXMuY29udGV4dC5lbmFibGUoY2FwYWNpdHkpO1xuXG4gIHRoaXMuY29udGV4dC5ibGVuZEZ1bmMoc291cmNlRmFjdG9yLCBkZXN0aW5hdGlvbkZhY3Rvcik7XG59XG5cbmNvbnN0IGJsZW5kaW5nTWl4aW5zID0ge1xuICBlbmFibGVCbGVuZGluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYmxlbmRpbmdNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBuYW1lKSB7XG4gIHJldHVybiB0aGlzLmNvbnRleHQuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCBuYW1lKSB7XG4gIHJldHVybiB0aGlzLmNvbnRleHQuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSk7XG59XG5cbmZ1bmN0aW9uIHNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSh1bmlmb3JtTG9jYXRpb24sIGludGVnZXJWYWx1ZSkge1xuICB0aGlzLmNvbnRleHQudW5pZm9ybTFpKHVuaWZvcm1Mb2NhdGlvbiwgaW50ZWdlclZhbHVlKTtcbn1cblxuY29uc3QgbG9jYXRpb25NaXhpbnMgPSB7XG4gIGdldFVuaWZvcm1Mb2NhdGlvbixcbiAgZ2V0QXR0cmlidXRlTG9jYXRpb24sXG4gIHNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9jYXRpb25NaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkZXB0aE1peGlucyBmcm9tIFwiLi9taXhpbnMvZGVwdGhcIjtcbmltcG9ydCBzaGFkZXJNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3NoYWRlclwiO1xuaW1wb3J0IGJ1ZmZlck1peGlucyBmcm9tIFwiLi9taXhpbnMvYnVmZmVyXCI7XG5pbXBvcnQgY29sb3VyTWl4aW5zIGZyb20gXCIuL21peGlucy9jb2xvdXJcIjtcbmltcG9ydCBtYXRyaXhNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21hdHJpeFwiO1xuaW1wb3J0IHRleHR1cmVNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3RleHR1cmVcIjtcbmltcG9ydCBwcm9ncmFtTWl4aW5zIGZyb20gXCIuL21peGlucy9wcm9ncmFtXCI7XG5pbXBvcnQgYmxlbmRpbmdNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2JsZW5kaW5nXCI7XG5pbXBvcnQgbG9jYXRpb25NaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2xvY2F0aW9uXCI7XG5cbmltcG9ydCB7IFdFQl9HTF9DT05URVhUX0VSUk9SIH0gZnJvbSBcIi4vZXJyb3JzXCI7XG5pbXBvcnQgeyBXRUJHTCwgV0lEVEgsIEhFSUdIVCwgQ0FOVkFTLCBTVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IgPSBDQU5WQVMpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3RvciksXG4gICAgICAgICAgY29udGV4dCA9IGNvbnRleHRGcm9tRE9NRWxlbWVudChkb21FbGVtZW50KTtcblxuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG5cbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5lbmFibGVEZXB0aFRlc3RpbmcoKTsgIC8vL1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQud2lkdGg7IH1cblxuICBnZXRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaGVpZ2h0OyB9XG5cbiAgZ2V0Q2xpZW50V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xpZW50V2lkdGg7IH1cblxuICBnZXRDbGllbnRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0OyB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShXSURUSCwgd2lkdGgpOyB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKEhFSUdIVCwgaGVpZ2h0KTsgfVxuXG4gIHJlc2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgY29uc3QgeCA9IDAsXG4gICAgICAgICAgeSA9IDA7XG5cbiAgICB0aGlzLnNldFdpZHRoKHdpZHRoKTtcblxuICAgIHRoaXMuc2V0SGVpZ2h0KGhlaWdodCk7XG5cbiAgICB0aGlzLmNvbnRleHQudmlld3BvcnQoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICBjbGVhcihjb2xvdXIpIHtcbiAgICB0aGlzLmNsZWFyQ29sb3VyKGNvbG91cik7XG4gICAgdGhpcy5jbGVhckRlcHRoKCk7XG4gICAgdGhpcy5jbGVhckRlcHRoQnVmZmVyKCk7XG4gICAgdGhpcy5jbGVhckNvbG91ckJ1ZmZlcigpO1xuICB9XG5cbiAgcmVuZGVyKHJlbmRlcmVyLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSB7XG4gICAgY29uc3Qgb2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldE9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0Tm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXRSb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpO1xuXG4gICAgdGhpcy5hcHBseU1hdHJpeChvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBvZmZzZXRzTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbHNNYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgocG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcm90YXRpb25zTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXgpO1xuICB9XG5cbiAgZHJhd0VsZW1lbnRzKHN0YXJ0LCBmaW5pc2gpIHtcbiAgICBjb25zdCB7IFRSSUFOR0xFUywgVU5TSUdORURfU0hPUlQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICBtb2RlID0gVFJJQU5HTEVTLFxuICAgICAgICAgIHR5cGUgPSBVTlNJR05FRF9TSE9SVCxcbiAgICAgICAgICBjb3VudCA9IGZpbmlzaCAtIHN0YXJ0LFxuICAgICAgICAgIG9mZnNldCA9IHN0YXJ0ICogMjsgLy8vXG5cbiAgICB0aGlzLmNvbnRleHQuZHJhd0VsZW1lbnRzKG1vZGUsIGNvdW50LCB0eXBlLCBvZmZzZXQpXG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBkZXB0aE1peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIHNoYWRlck1peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGJ1ZmZlck1peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGNvbG91ck1peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIG1hdHJpeE1peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIHRleHR1cmVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBwcm9ncmFtTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgYmxlbmRpbmdNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBsb2NhdGlvbk1peGlucyk7XG5cbmZ1bmN0aW9uIGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgY29uc3QgZG9tRWxlbWVudCA9ICh0eXBlb2Ygc2VsZWN0b3IgPT09IFNUUklORykgP1xuICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVswXSA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjsgIC8vL1xuXG4gIHJldHVybiBkb21FbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjb250ZXh0RnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICBjb25zdCBjb250ZXh0ID0gZG9tRWxlbWVudC5nZXRDb250ZXh0KFdFQkdMKTtcblxuICBpZiAoIWNvbnRleHQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoV0VCX0dMX0NPTlRFWFRfRVJST1IpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFkZCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucykge1xuICAgIHRoaXMuZmFjZXRzID0gZmFjZXRzO1xuICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XG4gICAgdGhpcy5yZW5kZXJlckRhdGEgPSByZW5kZXJlckRhdGE7XG4gICAgdGhpcy5yZW5kZXJlckJ1ZmZlcnMgPSByZW5kZXJlckJ1ZmZlcnM7XG4gICAgdGhpcy51bmlmb3JtTG9jYXRpb25zID0gdW5pZm9ybUxvY2F0aW9ucztcbiAgICB0aGlzLmF0dHJpYnV0ZUxvY2F0aW9ucyA9IGF0dHJpYnV0ZUxvY2F0aW9ucztcbiAgfVxuXG4gIGdldEZhY2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5mYWNldHM7XG4gIH1cblxuICBnZXRQcm9ncmFtKCkge1xuICAgIHJldHVybiB0aGlzLnByb2dyYW07XG4gIH1cbiAgXG4gIGdldFJlbmRlcmVyRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJlckRhdGE7XG4gIH1cbiAgXG4gIGdldFJlbmRlcmVyQnVmZmVycygpIHtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJlckJ1ZmZlcnM7XG4gIH1cblxuICBnZXRVbmlmb3JtTG9jYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnM7XG4gIH1cblxuICBnZXRBdHRyaWJ1dGVMb2NhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zO1xuICB9XG5cbiAgZ2V0Q291bnQoKSB7IHJldHVybiB0aGlzLnJlbmRlcmVyRGF0YS5nZXRDb3VudCgpOyB9XG5cbiAgZ2V0T2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXRPZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7IH1cblxuICBnZXROb3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldE5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7IH1cblxuICBnZXRSb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0Um90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7IH1cblxuICBnZXRQcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLmF0dHJpYnV0ZUxvY2F0aW9ucy5nZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCk7IH1cblxuICBnZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zLmdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCk7IH1cblxuICBhZGRGYWNldHMoZmFjZXRzKSB7XG4gICAgYWRkKHRoaXMuZmFjZXRzLCBmYWNldHMpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlclNvdXJjZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcykge1xuICBjb25zdCB2ZXJ0ZXhTaGFkZXIgPSBjYW52YXMuY3JlYXRlVmVydGV4U2hhZGVyKHZlcnRleFNoYWRlclNvdXJjZSksXG4gICAgICAgIGZyYWdtZW50U2hhZGVyID0gY2FudmFzLmNyZWF0ZUZyYWdtZW50U2hhZGVyKGZyYWdtZW50U2hhZGVyU291cmNlKSxcbiAgICAgICAgcHJvZ3JhbSA9IGNhbnZhcy5jcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIpO1xuICBcbiAgcmV0dXJuIHByb2dyYW07XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFkZCwgZmxhdHRlbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyZXJEYXRhIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhKSB7XG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gdmVydGV4UG9zaXRpb25zRGF0YTtcbiAgICB0aGlzLnZlcnRleE5vcm1hbHNEYXRhID0gdmVydGV4Tm9ybWFsc0RhdGE7XG4gICAgdGhpcy52ZXJ0ZXhJbmRleGVzRGF0YSA9IHZlcnRleEluZGV4ZXNEYXRhO1xuICB9XG5cbiAgZ2V0Q291bnQoKSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXhlc0RhdGFMZW5ndGggPSB0aGlzLnZlcnRleEluZGV4ZXNEYXRhLmxlbmd0aCxcbiAgICAgICAgICBjb3VudCA9IHZlcnRleEluZGV4ZXNEYXRhTGVuZ3RoOyAgLy8vXG5cbiAgICByZXR1cm4gY291bnQ7XG4gIH1cbiAgXG4gIGdldFZlcnRleFBvc2l0aW9uc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4UG9zaXRpb25zRGF0YTtcbiAgfVxuICBcbiAgZ2V0VmVydGV4Tm9ybWFsc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Tm9ybWFsc0RhdGE7XG4gIH1cbiAgXG4gIGdldFZlcnRleEluZGV4ZXNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleEluZGV4ZXNEYXRhO1xuICB9XG5cbiAgYWRkVmVydGV4UG9zaXRpb25zKHZlcnRleFBvc2l0aW9ucykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uc0RhdGEgPSBmbGF0dGVuKHZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhQb3NpdGlvbnNEYXRhKTtcbiAgfVxuXG4gIGFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscykge1xuICAgIGNvbnN0IHZlcnRleE5vcm1hbHNEYXRhID0gZmxhdHRlbih2ZXJ0ZXhOb3JtYWxzKTtcblxuICAgIGFkZCh0aGlzLnZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSk7XG4gIH1cblxuICBhZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbmRleGVzRGF0YSA9IHZlcnRleEluZGV4ZXM7ICAvLy9cblxuICAgIGFkZCh0aGlzLnZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uc0RhdGEgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzRGF0YSA9IFtdLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXNEYXRhID0gW10sXG4gICAgICAgICAgcmVuZGVyZXJEYXRhID0gbmV3IENsYXNzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICBcbiAgICByZXR1cm4gcmVuZGVyZXJEYXRhO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZW5kZXJlckRhdGEgZnJvbSBcIi4uLy4uL3JlbmRlcmVyL2RhdGFcIjtcblxuaW1wb3J0IHsgYWRkLCBmbGF0dGVuIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvdXJSZW5kZXJlckRhdGEgZXh0ZW5kcyBSZW5kZXJlckRhdGEge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIHZlcnRleENvbG91cnNEYXRhKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhKTtcblxuICAgIHRoaXMudmVydGV4Q29sb3Vyc0RhdGEgPSB2ZXJ0ZXhDb2xvdXJzRGF0YTtcbiAgfVxuICBcbiAgZ2V0VmVydGV4Q29sb3Vyc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Q29sb3Vyc0RhdGE7XG4gIH1cblxuICBhZGRWZXJ0ZXhDb2xvdXJzKHZlcnRleENvbG91cnMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJzRGF0YSA9IGZsYXR0ZW4odmVydGV4Q29sb3Vycyk7XG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhDb2xvdXJzRGF0YSwgdmVydGV4Q29sb3Vyc0RhdGEpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyBcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJzRGF0YSA9IFtdLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyRGF0YSA9IFJlbmRlcmVyRGF0YS5mcm9tTm90aGluZyhDb2xvdXJSZW5kZXJlckRhdGEsIHZlcnRleENvbG91cnNEYXRhKTtcbiAgICBcbiAgICByZXR1cm4gY29sb3VyUmVuZGVyZXJEYXRhO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBub3JtYWxzTWF0cml4TmFtZSA9IFwidU5vcm1hbHNNYXRyaXhcIjtcbmV4cG9ydCBjb25zdCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lID0gXCJhVmVydGV4Tm9ybWFsXCI7XG5cbmNvbnN0IGxpZ2h0aW5nU291cmNlID0gbmV3IFN0cmluZyhgXG4gIFxuICAgICAgICB1bmlmb3JtIG1hdDQgJHtub3JtYWxzTWF0cml4TmFtZX07XG5cbiAgICAgICAgYXR0cmlidXRlIHZlYzMgJHt2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lfTtcblxuICAgICAgICB2ZWMzIGRpcmVjdGlvbmFsTGlnaHRDb2xvdXIgPSB2ZWMzKDEsIDEsIDEpLFxuICAgICAgICAgICAgIGRpcmVjdGlvbmFsVmVjdG9yID0gbm9ybWFsaXplKHZlYzMoMS4wLCAxLjAsIDEuMCkpO1xuICAgICAgICAgIFxuICAgICAgICB2ZWMzIGNhbGN1bGF0ZUxpZ2h0aW5nKCkge1xuICAgICAgICAgIHZlYzQgdHJhbnNmb3JtZWROb3JtYWwgPSAke25vcm1hbHNNYXRyaXhOYW1lfSAqIHZlYzQoJHt2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lfSwgMS4wKTsgICAgICAgICAgICBcblxuICAgICAgICAgIGZsb2F0IGRpcmVjdGlvbmFsID0gKGRvdCh0cmFuc2Zvcm1lZE5vcm1hbC54eXosIGRpcmVjdGlvbmFsVmVjdG9yKSArIDEuMCkgLyAyLjA7XG4gICAgICAgICAgXG4gICAgICAgICAgdmVjMyBsaWdodGluZyA9IChkaXJlY3Rpb25hbExpZ2h0Q29sb3VyICogZGlyZWN0aW9uYWwpO1xuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBsaWdodGluZztcbiAgICAgICAgfVxuXG4gICAgICBgKTtcblxuZXhwb3J0IGRlZmF1bHQgbGlnaHRpbmdTb3VyY2U7IiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3Qgb2Zmc2V0c01hdHJpeE5hbWUgPSBcInVPZmZzZXRzTWF0cml4XCI7XG5leHBvcnQgY29uc3QgcG9zaXRpb25NYXRyaXhOYW1lID0gXCJ1UG9zaXRpb25NYXRyaXhcIjtcbmV4cG9ydCBjb25zdCByb3RhdGlvbnNNYXRyaXhOYW1lID0gXCJ1Um90YXRpb25zTWF0cml4XCI7XG5leHBvcnQgY29uc3QgcHJvamVjdGlvbk1hdHJpeE5hbWUgPSBcInVQZXJzcGVjdGl2ZU1hdHJpeFwiO1xuZXhwb3J0IGNvbnN0IHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZSA9IFwiYVZlcnRleFBvc2l0aW9uXCI7XG5cbmNvbnN0IHBvc2l0aW9uU291cmNlID0gbmV3IFN0cmluZyhgXG4gIFxuICAgICAgICB1bmlmb3JtIG1hdDQgJHtvZmZzZXRzTWF0cml4TmFtZX0sXG4gICAgICAgICAgICAgICAgICAgICAke3JvdGF0aW9uc01hdHJpeE5hbWV9LFxuICAgICAgICAgICAgICAgICAgICAgJHtwb3NpdGlvbk1hdHJpeE5hbWV9LFxuICAgICAgICAgICAgICAgICAgICAgJHtwcm9qZWN0aW9uTWF0cml4TmFtZX07XG4gICAgICAgIFxuICAgICAgICBhdHRyaWJ1dGUgdmVjNCAke3ZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZX07XG5cbiAgICAgICAgdmVjNCBjYWxjdWxhdGVQb3NpdGlvbigpIHtcbiAgICAgICAgICB2ZWM0IHBvc2l0aW9uID0gJHtwcm9qZWN0aW9uTWF0cml4TmFtZX0gKiAke3Bvc2l0aW9uTWF0cml4TmFtZX0gKiAke3JvdGF0aW9uc01hdHJpeE5hbWV9ICogJHtvZmZzZXRzTWF0cml4TmFtZX0gKiAke3ZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZX07XG4gICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIHBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCk7XG5cbmV4cG9ydCBkZWZhdWx0IHBvc2l0aW9uU291cmNlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgbGlnaHRpbmdTb3VyY2UgZnJvbSBcIi4uLy4uL3NvdXJjZS9saWdodGluZ1wiO1xuaW1wb3J0IHBvc2l0aW9uU291cmNlIGZyb20gXCIuLi8uLi9zb3VyY2UvcG9zaXRpb25cIjtcblxuZXhwb3J0IGNvbnN0IHZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWUgPSBcImFWZXJ0ZXhDb2xvdXJcIlxuXG5jb25zdCB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgICBcbiAgICAgICAgYXR0cmlidXRlIHZlYzQgJHt2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lfTtcblxuICAgICAgICAke2xpZ2h0aW5nU291cmNlfVxuICAgICAgXG4gICAgICAgICR7cG9zaXRpb25Tb3VyY2V9XG4gICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGxvd3AgdmVjNCB2Q29sb3VyO1xuICAgICAgICBcbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIHZMaWdodGluZyA9IGNhbGN1bGF0ZUxpZ2h0aW5nKCk7XG5cbiAgICAgICAgICBnbF9Qb3NpdGlvbiA9IGNhbGN1bGF0ZVBvc2l0aW9uKCk7XG5cbiAgICAgICAgICB2Q29sb3VyID0gJHt2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lfTsgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCk7XG5cbmV4cG9ydCBkZWZhdWx0IHZlcnRleFNoYWRlclNvdXJjZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgbG93cCB2ZWM0IHZDb2xvdXI7XG4gICAgICAgICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KHZDb2xvdXIucmdiICogdkxpZ2h0aW5nLCB2Q29sb3VyLmEpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZyYWdtZW50U2hhZGVyU291cmNlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCB2ZXJ0ZXhOb3JtYWxDb21wb25lbnRzID0gMyxcbiAgICAgIHZlcnRleFBvc2l0aW9uQ29tcG9uZW50cyA9IDM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyQnVmZmVycyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIpIHtcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uc0J1ZmZlciA9IHZlcnRleFBvc2l0aW9uc0J1ZmZlcjtcbiAgICB0aGlzLnZlcnRleE5vcm1hbHNCdWZmZXIgPSB2ZXJ0ZXhOb3JtYWxzQnVmZmVyO1xuICAgIHRoaXMudmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIgPSB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcjtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleFBvc2l0aW9uc0J1ZmZlcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uc0J1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodmVydGV4UG9zaXRpb25zRGF0YSk7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhOb3JtYWxzQnVmZmVyKHZlcnRleE5vcm1hbHNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleE5vcm1hbHNCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHZlcnRleE5vcm1hbHNEYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKHZlcnRleEluZGV4ZXNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyID0gY2FudmFzLmNyZWF0ZUVsZW1lbnRCdWZmZXIodmVydGV4SW5kZXhlc0RhdGEpO1xuICB9XG5cbiAgYmluZFZlcnRleE5vcm1hbHNCdWZmZXIodmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbENvbXBvbmVudHMpO1xuICB9XG5cbiAgYmluZFZlcnRleFBvc2l0aW9uc0J1ZmZlcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25Db21wb25lbnRzKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcihjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEVsZW1lbnRCdWZmZXIodGhpcy52ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcik7XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhQb3NpdGlvbnNCdWZmZXIodmVydGV4UG9zaXRpb25zRGF0YSwgY2FudmFzKTtcbiAgICB0aGlzLmNyZWF0ZVZlcnRleE5vcm1hbHNCdWZmZXIodmVydGV4Tm9ybWFsc0RhdGEsIGNhbnZhcyk7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcih2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICB0aGlzLmJpbmRWZXJ0ZXhOb3JtYWxzQnVmZmVyKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICAgIHRoaXMuYmluZFZlcnRleFBvc2l0aW9uc0J1ZmZlcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICAgIHRoaXMuYmluZFZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKGNhbnZhcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uc0J1ZmZlciA9IG51bGwsIC8vL1xuICAgICAgICAgIHZlcnRleE5vcm1hbHNCdWZmZXIgPSBudWxsLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciA9IG51bGwsICAvLy9cbiAgICAgICAgICByZW5kZXJlckJ1ZmZlcnMgPSBuZXcgQ2xhc3ModmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiByZW5kZXJlckJ1ZmZlcnM7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlbmRlcmVyQnVmZmVycyBmcm9tIFwiLi4vLi4vcmVuZGVyZXIvYnVmZmVyc1wiO1xuXG5jb25zdCB2ZXJ0ZXhDb2xvdXJDb21wb25lbnRzID0gNDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3VyUmVuZGVyZXJCdWZmZXJzIGV4dGVuZHMgUmVuZGVyZXJCdWZmZXJzIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciwgdmVydGV4Q29sb3Vyc0J1ZmZlcikge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIpO1xuXG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJzQnVmZmVyID0gdmVydGV4Q29sb3Vyc0J1ZmZlcjtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleENvbG91cnNCdWZmZXIodmVydGV4Q29sb3Vyc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4Q29sb3Vyc0J1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodmVydGV4Q29sb3Vyc0RhdGEpO1xuICB9XG5cbiAgYmluZFZlcnRleENvbG91cnNCdWZmZXIodmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudmVydGV4Q29sb3Vyc0J1ZmZlciwgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleENvbG91ckNvbXBvbmVudHMpO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIHZlcnRleENvbG91cnNEYXRhLCBjYW52YXMpIHtcbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKTtcblxuICAgIHRoaXMuY3JlYXRlVmVydGV4Q29sb3Vyc0J1ZmZlcih2ZXJ0ZXhDb2xvdXJzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgc3VwZXIuYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG5cbiAgICB0aGlzLmJpbmRWZXJ0ZXhDb2xvdXJzQnVmZmVyKHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHZlcnRleENvbG91cnNCdWZmZXIgPSBudWxsLCAvLy9cbiAgICAgICAgICBjb2xvdXJSZW5kZXJlckJ1ZmZlcnMgPSBSZW5kZXJlckJ1ZmZlcnMuZnJvbU5vdGhpbmcoQ29sb3VyUmVuZGVyZXJCdWZmZXJzLCB2ZXJ0ZXhDb2xvdXJzQnVmZmVyKTtcbiAgICBcbiAgICByZXR1cm4gY29sb3VyUmVuZGVyZXJCdWZmZXJzO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vcm1hbHNNYXRyaXhOYW1lIH0gZnJvbSBcIi4uL3NvdXJjZS9saWdodGluZ1wiO1xuXG5pbXBvcnQgeyBvZmZzZXRzTWF0cml4TmFtZSwgcm90YXRpb25zTWF0cml4TmFtZSwgcG9zaXRpb25NYXRyaXhOYW1lLCBwcm9qZWN0aW9uTWF0cml4TmFtZSB9IGZyb20gXCIuLi9zb3VyY2UvcG9zaXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5pZm9ybUxvY2F0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24pIHtcbiAgICB0aGlzLm9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICAgIHRoaXMubm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gICAgdGhpcy5wb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICAgIHRoaXMucm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICAgIHRoaXMucHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXRPZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXROb3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldFJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXRQcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2dyYW0oQ2xhc3MsIHByb2dyYW0sIGNhbnZhcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3Qgb2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgb2Zmc2V0c01hdHJpeE5hbWUpLFxuICAgICAgICAgIG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5vcm1hbHNNYXRyaXhOYW1lKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgcG9zaXRpb25NYXRyaXhOYW1lKSxcbiAgICAgICAgICByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHJvdGF0aW9uc01hdHJpeE5hbWUpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHByb2plY3Rpb25NYXRyaXhOYW1lKSxcbiAgICAgICAgICB1bmlmb3JtTG9jYXRpb25zID0gbmV3IENsYXNzKG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgXG4gICAgcmV0dXJuIHVuaWZvcm1Mb2NhdGlvbnM7ICAgICAgIFxuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBVbmlmb3JtTG9jYXRpb25zIGZyb20gXCIuLi8uLi9sb2NhdGlvbnMvdW5pZm9ybVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvdXJVbmlmb3JtTG9jYXRpb25zIGV4dGVuZHMgVW5pZm9ybUxvY2F0aW9ucyB7XG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpIHsgcmV0dXJuIFVuaWZvcm1Mb2NhdGlvbnMuZnJvbVByb2dyYW0oQ29sb3VyVW5pZm9ybUxvY2F0aW9ucywgcHJvZ3JhbSwgY2FudmFzKTsgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uL3NvdXJjZS9saWdodGluZ1wiO1xuaW1wb3J0IHsgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uL3NvdXJjZS9wb3NpdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdHRyaWJ1dGVMb2NhdGlvbnMge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbikge1xuICAgIHRoaXMudmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb247XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIGdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb2dyYW0oQ2xhc3MsIHByb2dyYW0sIGNhbnZhcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWUpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWUpLFxuICAgICAgICAgIGF0dHJpYnV0ZUxvY2F0aW9ucyA9IG5ldyBDbGFzcyh2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVMb2NhdGlvbnM7XG4gIH0gIFxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXR0cmlidXRlTG9jYXRpb25zIGZyb20gXCIuLi8uLi9sb2NhdGlvbnMvYXR0cmlidXRlXCI7XG5cbmltcG9ydCB7IHZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vc291cmNlL2NvbG91ci92ZXJ0ZXhTaGFkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zIGV4dGVuZHMgQXR0cmlidXRlTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24pO1xuXG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lKSxcbiAgICAgICAgICBjb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMgPSBBdHRyaWJ1dGVMb2NhdGlvbnMuZnJvbVByb2dyYW0oQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zLCBwcm9ncmFtLCBjYW52YXMsIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKTtcblxuICAgIHJldHVybiBjb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnM7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlbmRlcmVyIGZyb20gXCIuLi9yZW5kZXJlclwiO1xuaW1wb3J0IENvbG91clJlbmRlcmVyRGF0YSBmcm9tIFwiLi4vcmVuZGVyZXIvZGF0YS9jb2xvdXJcIjtcbmltcG9ydCB2ZXJ0ZXhTaGFkZXJTb3VyY2UgZnJvbSBcIi4vc291cmNlL2NvbG91ci92ZXJ0ZXhTaGFkZXJcIjtcbmltcG9ydCBmcmFnbWVudFNoYWRlclNvdXJjZSBmcm9tIFwiLi9zb3VyY2UvY29sb3VyL2ZyYWdtZW50U2hhZGVyXCI7XG5pbXBvcnQgQ29sb3VyUmVuZGVyZXJCdWZmZXJzIGZyb20gXCIuLi9yZW5kZXJlci9idWZmZXJzL2NvbG91clwiO1xuaW1wb3J0IENvbG91clVuaWZvcm1Mb2NhdGlvbnMgZnJvbSBcIi4vbG9jYXRpb25zL2NvbG91ci91bmlmb3JtXCI7XG5pbXBvcnQgQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zIGZyb20gXCIuL2xvY2F0aW9ucy9jb2xvdXIvYXR0cmlidXRlXCI7XG5cbmltcG9ydCB7IGFkZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGNyZWF0ZVByb2dyYW0gfSBmcm9tIFwiLi4vcmVuZGVyZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3VyUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gIGdldFZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZUxvY2F0aW9ucyA9IHRoaXMuZ2V0QXR0cmlidXRlTG9jYXRpb25zKCksXG4gICAgICAgICAgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24gPSBhdHRyaWJ1dGVMb2NhdGlvbnMuZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24oKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzID0gW10sXG4gICAgICAgICAgdmVydGV4Tm9ybWFscyA9IFtdLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9ucyA9IFtdLFxuICAgICAgICAgIHZlcnRleENvbG91cnMgPSBbXTtcblxuICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGNvbG91cmVkRmFjZXQgPSBmYWNldCwgIC8vL1xuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhJbmRleGVzID0gZmFjZXQuZ2V0VmVydGV4SW5kZXhlcyhpbmRleCksXG4gICAgICAgICAgICBmYWNldFZlcnRleE5vcm1hbHMgPSBmYWNldC5nZXRWZXJ0ZXhOb3JtYWxzKCksXG4gICAgICAgICAgICBmYWNldFZlcnRleFBvc2l0aW9ucyA9IGZhY2V0LmdldFZlcnRleFBvc2l0aW9ucygpLFxuICAgICAgICAgICAgY29sb3VyZWRGYWNldFZlcnRleENvbG91cnMgPSBjb2xvdXJlZEZhY2V0LmdldFZlcnRleENvbG91cnMoKTtcblxuICAgICAgYWRkKHZlcnRleEluZGV4ZXMsIGZhY2V0VmVydGV4SW5kZXhlcyk7XG4gICAgICBhZGQodmVydGV4Tm9ybWFscywgZmFjZXRWZXJ0ZXhOb3JtYWxzKTtcbiAgICAgIGFkZCh2ZXJ0ZXhQb3NpdGlvbnMsIGZhY2V0VmVydGV4UG9zaXRpb25zKTtcbiAgICAgIGFkZCh2ZXJ0ZXhDb2xvdXJzLCBjb2xvdXJlZEZhY2V0VmVydGV4Q29sb3Vycyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZW5kZXJlckRhdGEgPSB0aGlzLmdldFJlbmRlcmVyRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleENvbG91cnModmVydGV4Q29sb3Vycyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgY29uc3QgcmVuZGVyZXJCdWZmZXJzID0gdGhpcy5nZXRSZW5kZXJlckJ1ZmZlcnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleFBvc2l0aW9uc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhOb3JtYWxzRGF0YSgpLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleEluZGV4ZXNEYXRhKCksXG4gICAgICAgICAgdmVydGV4Q29sb3Vyc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4Q29sb3Vyc0RhdGEoKTtcblxuICAgIHJlbmRlcmVyQnVmZmVycy5jcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4Q29sb3Vyc0RhdGEsIGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCByZW5kZXJlckJ1ZmZlcnMgPSB0aGlzLmdldFJlbmRlcmVyQnVmZmVycygpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24oKTtcbiAgICBcbiAgICByZW5kZXJlckJ1ZmZlcnMuYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICB9XG5cbiAgcmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIGNhbnZhcykge1xuICAgIGNvbnN0IHByb2dyYW0gPSB0aGlzLmdldFByb2dyYW0oKTtcblxuICAgIGNhbnZhcy51c2VQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgdGhpcy5iaW5kQnVmZmVycyhjYW52YXMpO1xuXG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzOyAgLy8vXG5cbiAgICBjYW52YXMucmVuZGVyKHJlbmRlcmVyLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcblxuICAgIGNvbnN0IGNvdW50ID0gdGhpcy5nZXRDb3VudCgpLFxuICAgICAgICAgIHN0YXJ0ID0gMCxcbiAgICAgICAgICBmaW5pc2ggPSBjb3VudDsgLy8vXG5cbiAgICBjYW52YXMuZHJhd0VsZW1lbnRzKHN0YXJ0LCBmaW5pc2gpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNhbnZhcykge1xuICAgIGNvbnN0IGZhY2V0cyA9IFtdLFxuICAgICAgICAgIHByb2dyYW0gPSBjcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlclNvdXJjZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcyksXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXJEYXRhID0gQ29sb3VyUmVuZGVyZXJEYXRhLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXJCdWZmZXJzID0gQ29sb3VyUmVuZGVyZXJCdWZmZXJzLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgY29sb3VyVW5pZm9ybUxvY2F0aW9ucyA9IENvbG91clVuaWZvcm1Mb2NhdGlvbnMuZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSxcbiAgICAgICAgICBjb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMgPSBDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMuZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSxcbiAgICAgICAgICByZW5kZXJlckRhdGEgPSBjb2xvdXJSZW5kZXJlckRhdGEsICAvLy9cbiAgICAgICAgICByZW5kZXJlckJ1ZmZlcnMgPSBjb2xvdXJSZW5kZXJlckJ1ZmZlcnMsICAvLy9cbiAgICAgICAgICB1bmlmb3JtTG9jYXRpb25zID0gY29sb3VyVW5pZm9ybUxvY2F0aW9ucywgIC8vL1xuICAgICAgICAgIGF0dHJpYnV0ZUxvY2F0aW9ucyA9IGNvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucywgIC8vL1xuICAgICAgICAgIGNvbG91clJlbmRlcmVyID0gbmV3IENvbG91clJlbmRlcmVyKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucyk7XG4gICAgXG4gICAgcmV0dXJuIGNvbG91clJlbmRlcmVyO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBsaWdodGluZ1NvdXJjZSBmcm9tIFwiLi4vLi4vc291cmNlL2xpZ2h0aW5nXCI7XG5pbXBvcnQgcG9zaXRpb25Tb3VyY2UgZnJvbSBcIi4uLy4uL3NvdXJjZS9wb3NpdGlvblwiO1xuXG5leHBvcnQgY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lID0gXCJhVGV4dHVyZUNvb3JkaW5hdGVcIjtcblxuY29uc3QgdmVydGV4U2hhZGVyU291cmNlID0gbmV3IFN0cmluZyhgXG4gICAgICAgIFxuICAgICAgICBhdHRyaWJ1dGUgdmVjMiAke3RleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZX07XG4gICAgICAgIFxuICAgICAgICAke2xpZ2h0aW5nU291cmNlfVxuICAgICAgXG4gICAgICAgICR7cG9zaXRpb25Tb3VyY2V9XG5cbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcbiAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMiB2VGV4dHVyZUNvb3JkaW5hdGU7XG4gICAgICAgIFxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgdkxpZ2h0aW5nID0gY2FsY3VsYXRlTGlnaHRpbmcoKTtcblxuICAgICAgICAgIGdsX1Bvc2l0aW9uID0gY2FsY3VsYXRlUG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgdlRleHR1cmVDb29yZGluYXRlID0gJHt0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWV9O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCk7XG5cbmV4cG9ydCBkZWZhdWx0IHZlcnRleFNoYWRlclNvdXJjZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlbmRlcmVyRGF0YSBmcm9tIFwiLi4vLi4vcmVuZGVyZXIvZGF0YVwiO1xuXG5pbXBvcnQgeyBhZGQsIGZsYXR0ZW4gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHR1cmVSZW5kZXJlckRhdGEgZXh0ZW5kcyBSZW5kZXJlckRhdGEge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEpIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEpO1xuXG4gICAgdGhpcy52ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhID0gdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YTtcbiAgfVxuXG4gIGdldFZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YTtcbiAgfVxuXG4gIGFkZFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKSB7XG4gICAgY29uc3QgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSA9IGZsYXR0ZW4odmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuXG4gICAgYWRkKHRoaXMudmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSwgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IFxuICAgIGNvbnN0IHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEgPSBbXSxcbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXJEYXRhID0gUmVuZGVyZXJEYXRhLmZyb21Ob3RoaW5nKFRleHR1cmVSZW5kZXJlckRhdGEsIHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEpO1xuICAgIFxuICAgIHJldHVybiB0ZXh0dXJlUmVuZGVyZXJEYXRhO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBzYW1wbGVyTmFtZSA9IFwidVNhbXBsZXJcIjtcblxuY29uc3QgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgICAgICAgXG4gICAgICAgIHVuaWZvcm0gc2FtcGxlcjJEICR7c2FtcGxlck5hbWV9O1xuXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMiB2VGV4dHVyZUNvb3JkaW5hdGU7XG4gICAgICAgIFxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgaGlnaHAgdmVjNCB0ZXhlbENvbG91ciA9IHRleHR1cmUyRCgke3NhbXBsZXJOYW1lfSwgdlRleHR1cmVDb29yZGluYXRlKTtcbiAgICAgICAgICBcbiAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KHRleGVsQ29sb3VyLnJnYiAqIHZMaWdodGluZywgdGV4ZWxDb2xvdXIuYSk7ICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGApO1xuXG5leHBvcnQgZGVmYXVsdCBmcmFnbWVudFNoYWRlclNvdXJjZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlbmRlcmVyQnVmZmVycyBmcm9tIFwiLi4vLi4vcmVuZGVyZXIvYnVmZmVyc1wiO1xuXG5jb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZUNvbXBvbmVudHMgPSAyO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlUmVuZGVyZXJCdWZmZXJzIGV4dGVuZHMgUmVuZGVyZXJCdWZmZXJzIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciwgdGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcik7XG5cbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlc0J1ZmZlciA9IHRleHR1cmVDb29yZGluYXRlc0J1ZmZlcjtcbiAgfVxuXG4gIGNyZWF0ZVRleHR1cmVDb29yZGluYXRlc0J1ZmZlcih0ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlc0J1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodGV4dHVyZUNvb3JkaW5hdGVzRGF0YSk7XG4gIH1cblxuICBiaW5kVGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCB0ZXh0dXJlQ29vcmRpbmF0ZUNvbXBvbmVudHMpO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIHRleHR1cmVDb29yZGluYXRlc0RhdGEsIGNhbnZhcykge1xuICAgIHN1cGVyLmNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCBjYW52YXMpO1xuXG4gICAgdGhpcy5jcmVhdGVUZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIodGV4dHVyZUNvb3JkaW5hdGVzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBzdXBlci5iaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcblxuICAgIHRoaXMuYmluZFRleHR1cmVDb29yZGluYXRlc0J1ZmZlcih0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHRleHR1cmVDb29yZGluYXRlc0J1ZmZlciA9IG51bGwsICAvLy9cbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXJCdWZmZXJzID0gUmVuZGVyZXJCdWZmZXJzLmZyb21Ob3RoaW5nKFRleHR1cmVSZW5kZXJlckJ1ZmZlcnMsIHRleHR1cmVDb29yZGluYXRlc0J1ZmZlcik7XG4gICAgXG4gICAgcmV0dXJuIHRleHR1cmVSZW5kZXJlckJ1ZmZlcnM7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFVuaWZvcm1Mb2NhdGlvbnMgZnJvbSBcIi4uLy4uL2xvY2F0aW9ucy91bmlmb3JtXCI7XG5cbmltcG9ydCB7IHNhbXBsZXJOYW1lIH0gZnJvbSBcIi4uLy4uL3NvdXJjZS90ZXh0dXJlL2ZyYWdtZW50U2hhZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHR1cmVVbmlmb3JtTG9jYXRpb25zIGV4dGVuZHMgVW5pZm9ybUxvY2F0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHNhbXBsZXJVbmlmb3JtTG9jYXRpb24pIHtcbiAgICBzdXBlcihvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKTtcbiAgICBcbiAgICB0aGlzLnNhbXBsZXJVbmlmb3JtTG9jYXRpb24gPSBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uO1xuICB9XG4gIFxuICBnZXRTYW1wbGVyVW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnNhbXBsZXJVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSB7XG4gICAgY29uc3Qgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgc2FtcGxlck5hbWUpLFxuICAgICAgICAgIHRleHR1cmVVbmlmb3JtTG9jYXRpb25zID0gVW5pZm9ybUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShUZXh0dXJlVW5pZm9ybUxvY2F0aW9ucywgcHJvZ3JhbSwgY2FudmFzLCBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uKTtcbiAgICBcbiAgICByZXR1cm4gdGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnM7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEF0dHJpYnV0ZUxvY2F0aW9ucyBmcm9tIFwiLi4vLi4vbG9jYXRpb25zL2F0dHJpYnV0ZVwiO1xuXG5pbXBvcnQgeyB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vc291cmNlL3RleHR1cmUvdmVydGV4U2hhZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMgZXh0ZW5kcyBBdHRyaWJ1dGVMb2NhdGlvbnMge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbikge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKTtcbiAgICBcbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBnZXRUZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpIHtcbiAgICBjb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZSksXG4gICAgICAgICAgdGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucyA9IEF0dHJpYnV0ZUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShUZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zLCBwcm9ncmFtLCBjYW52YXMsIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24pO1xuICAgIFxuICAgIHJldHVybiB0ZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zO1xuICB9ICBcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlbmRlcmVyIGZyb20gXCIuLi9yZW5kZXJlclwiO1xuaW1wb3J0IHZlcnRleFNoYWRlclNvdXJjZSBmcm9tIFwiLi9zb3VyY2UvdGV4dHVyZS92ZXJ0ZXhTaGFkZXJcIjtcbmltcG9ydCBUZXh0dXJlUmVuZGVyZXJEYXRhIGZyb20gXCIuLi9yZW5kZXJlci9kYXRhL3RleHR1cmVcIjtcbmltcG9ydCBmcmFnbWVudFNoYWRlclNvdXJjZSBmcm9tIFwiLi9zb3VyY2UvdGV4dHVyZS9mcmFnbWVudFNoYWRlclwiO1xuaW1wb3J0IFRleHR1cmVSZW5kZXJlckJ1ZmZlcnMgZnJvbSBcIi4uL3JlbmRlcmVyL2J1ZmZlcnMvdGV4dHVyZVwiO1xuaW1wb3J0IFRleHR1cmVVbmlmb3JtTG9jYXRpb25zIGZyb20gXCIuL2xvY2F0aW9ucy90ZXh0dXJlL3VuaWZvcm1cIjtcbmltcG9ydCBUZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zIGZyb20gXCIuL2xvY2F0aW9ucy90ZXh0dXJlL2F0dHJpYnV0ZVwiO1xuXG5pbXBvcnQgeyBjcmVhdGVQcm9ncmFtIH0gZnJvbSBcIi4uL3JlbmRlcmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHR1cmVSZW5kZXJlciBleHRlbmRzIFJlbmRlcmVyIHtcbiAgZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVMb2NhdGlvbnMgPSB0aGlzLmdldEF0dHJpYnV0ZUxvY2F0aW9ucygpLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSBhdHRyaWJ1dGVMb2NhdGlvbnMuZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb247XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHJlbmRlcmVyRGF0YSA9IHRoaXMuZ2V0UmVuZGVyZXJEYXRhKCksXG4gICAgICAgICAgcmVuZGVyZXJCdWZmZXJzID0gdGhpcy5nZXRSZW5kZXJlckJ1ZmZlcnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleFBvc2l0aW9uc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhOb3JtYWxzRGF0YSgpLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleEluZGV4ZXNEYXRhKCksXG4gICAgICAgICAgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKCk7XG5cbiAgICByZW5kZXJlckJ1ZmZlcnMuY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEsIGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCByZW5kZXJlckJ1ZmZlcnMgPSB0aGlzLmdldFJlbmRlcmVyQnVmZmVycygpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRUZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKCk7XG5cbiAgICByZW5kZXJlckJ1ZmZlcnMuYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gIH1cblxuICB1c2VUZXh0dXJlKGluZGV4LCBjYW52YXMpIHtcbiAgICBjb25zdCB1bmlmb3JtTG9jYXRpb25zID0gdGhpcy5nZXRVbmlmb3JtTG9jYXRpb25zKCksXG4gICAgICAgICAgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiA9IHVuaWZvcm1Mb2NhdGlvbnMuZ2V0U2FtcGxlclVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUgPSBpbmRleDsgLy8vXG5cbiAgICBjYW52YXMuc2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKHNhbXBsZXJVbmlmb3JtTG9jYXRpb24sIHNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzLCBjYW52YXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGZhY2V0cyA9IFtdLFxuICAgICAgICAgIHByb2dyYW0gPSBjcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlclNvdXJjZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcyksXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyRGF0YSA9IFRleHR1cmVSZW5kZXJlckRhdGEuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXJCdWZmZXJzID0gVGV4dHVyZVJlbmRlcmVyQnVmZmVycy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHRleHR1cmVVbmlmb3JtTG9jYXRpb25zID0gVGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMuZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSxcbiAgICAgICAgICB0ZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zID0gVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIHJlbmRlcmVyRGF0YSA9IHRleHR1cmVSZW5kZXJlckRhdGEsICAvLy9cbiAgICAgICAgICByZW5kZXJlckJ1ZmZlcnMgPSB0ZXh0dXJlUmVuZGVyZXJCdWZmZXJzLCAvLy9cbiAgICAgICAgICB1bmlmb3JtTG9jYXRpb25zID0gdGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMsIC8vL1xuICAgICAgICAgIGF0dHJpYnV0ZUxvY2F0aW9ucyA9IHRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMsIC8vL1xuICAgICAgICAgIHRleHR1cmVSZW5kZXJlciA9IG5ldyBDbGFzcyhmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBjYW52YXMuZW5hYmxlQW5pc290cm9waWNGaWx0ZXJpbmcoKTsgIC8vL1xuXG4gICAgcmV0dXJuIHRleHR1cmVSZW5kZXJlcjtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dHVyZVJlbmRlcmVyIGZyb20gXCIuLi8uLi9yZW5kZXJlci90ZXh0dXJlXCI7XG5cbmltcG9ydCB7IGFkZCwgZmlyc3QgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlc1RleHR1cmVSZW5kZXJlciBleHRlbmRzIFRleHR1cmVSZW5kZXJlciB7XG5cdGNvbnN0cnVjdG9yKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucywgaW1hZ2VOYW1lcywgZmFjZXRzTWFwLCBvZmZzZXRzKSB7XG5cdFx0c3VwZXIoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKTtcblxuXHRcdHRoaXMuaW1hZ2VOYW1lcyA9IGltYWdlTmFtZXM7XG5cblx0XHR0aGlzLmZhY2V0c01hcCA9IGZhY2V0c01hcDtcblxuXHRcdHRoaXMub2Zmc2V0cyA9IG9mZnNldHM7XG5cdH1cblxuXHRhZGRGYWNldHMoZmFjZXRzKSB7XG5cdCAgY29uc3QgdGV4dHVyZWRGYWNldHMgPSBmYWNldHMsICAvLy9cbiAgICAgICAgICB0ZXh0dXJlZEZhY2V0c0xlbmd0aCA9IHRleHR1cmVkRmFjZXRzLmxlbmd0aDtcblxuXHQgIGlmICh0ZXh0dXJlZEZhY2V0c0xlbmd0aCA+IDApIHtcblx0ICAgIGNvbnN0IGZpcnN0VGV4dHVyZWRGYWNldCA9IGZpcnN0KHRleHR1cmVkRmFjZXRzKSxcbiAgICAgICAgICAgIHRleHR1cmVkRmFjZXQgPSBmaXJzdFRleHR1cmVkRmFjZXQsIC8vL1xuICAgICAgICAgICAgaW1hZ2VOYW1lID0gdGV4dHVyZWRGYWNldC5nZXRJbWFnZU5hbWUoKSxcbiAgICAgICAgICAgIGZhY2V0cyA9IHRoaXMuZmFjZXRzTWFwW2ltYWdlTmFtZV07XG5cblx0ICAgIGFkZChmYWNldHMsIHRleHR1cmVkRmFjZXRzKVxuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXhlcyA9IFtdLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IFtdO1xuXG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIHRoaXMuaW1hZ2VOYW1lcy5mb3JFYWNoKChpbWFnZU5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGZhY2V0cyA9IHRoaXMuZmFjZXRzTWFwW2ltYWdlTmFtZV07XG5cbiAgICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4ge1xuICAgICAgICBjb25zdCB0ZXh0dXJlZEZhY2V0ID0gZmFjZXQsICAvLy9cbiAgICAgICAgICAgICAgZmFjZXRWZXJ0ZXhJbmRleGVzID0gZmFjZXQuZ2V0VmVydGV4SW5kZXhlcyhpbmRleCksXG4gICAgICAgICAgICAgIGZhY2V0VmVydGV4Tm9ybWFscyA9IGZhY2V0LmdldFZlcnRleE5vcm1hbHMoKSxcbiAgICAgICAgICAgICAgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMgPSBmYWNldC5nZXRWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICAgICAgdGV4dHVyZWRGYWNldFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZWRGYWNldC5nZXRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcygpLFxuICAgICAgICAgICAgICB0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlZEZhY2V0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7ICAvLy9cblxuICAgICAgICBhZGQodmVydGV4SW5kZXhlcywgZmFjZXRWZXJ0ZXhJbmRleGVzKTtcbiAgICAgICAgYWRkKHZlcnRleE5vcm1hbHMsIGZhY2V0VmVydGV4Tm9ybWFscyk7XG4gICAgICAgIGFkZCh2ZXJ0ZXhQb3NpdGlvbnMsIGZhY2V0VmVydGV4UG9zaXRpb25zKTtcbiAgICAgICAgYWRkKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzLCB0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuXG4gICAgICAgIGluZGV4Kys7XG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgb2Zmc2V0ID0gaW5kZXggKiAzOyAgLy8vXG5cbiAgICAgIHRoaXMub2Zmc2V0cy5wdXNoKG9mZnNldCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZW5kZXJlckRhdGEgPSB0aGlzLmdldFJlbmRlcmVyRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG5cbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG4gIH1cblxuICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgY2FudmFzKSB7XG4gICAgY29uc3QgcHJvZ3JhbSA9IHRoaXMuZ2V0UHJvZ3JhbSgpO1xuXG4gICAgY2FudmFzLnVzZVByb2dyYW0ocHJvZ3JhbSk7XG5cbiAgICB0aGlzLmJpbmRCdWZmZXJzKGNhbnZhcyk7XG5cbiAgICBjb25zdCByZW5kZXJlciA9IHRoaXM7ICAvLy9cblxuICAgIGNhbnZhcy5yZW5kZXIocmVuZGVyZXIsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuXG4gICAgbGV0IHN0YXJ0LFxuICAgICAgICBmaW5pc2ggPSAwOyAgLy8vXG5cbiAgICB0aGlzLm9mZnNldHMuZm9yRWFjaCgob2Zmc2V0LCBpbmRleCkgPT4ge1xuICAgICAgc3RhcnQgPSBmaW5pc2g7IC8vL1xuXG4gICAgICBmaW5pc2ggPSBvZmZzZXQ7ICAvLy9cblxuICAgICAgdGhpcy51c2VUZXh0dXJlKGluZGV4LCBjYW52YXMpO1xuXG4gICAgICBjYW52YXMuZHJhd0VsZW1lbnRzKHN0YXJ0LCBmaW5pc2gpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21JbWFnZXNJbWFnZU5hbWVzQW5kSW1hZ2VUaWxpbmcoaW1hZ2VzLCBpbWFnZU5hbWVzLCBpbWFnZVRpbGluZywgY2FudmFzKSB7XG4gICAgY29uc3Qgb2Zmc2V0cyA9IFtdLFxuICAgICAgICAgIGZhY2V0c01hcCA9IHt9O1xuXG4gICAgaW1hZ2VzLmZvckVhY2goKGltYWdlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgZmFjZXRzID0gW10sXG4gICAgICAgICAgICByZXBlYXQgPSBpbWFnZVRpbGluZywgLy8vXG4gICAgICAgICAgICBpbWFnZU5hbWUgPSBpbWFnZU5hbWVzW2luZGV4XTtcblxuICAgICAgZmFjZXRzTWFwW2ltYWdlTmFtZV0gPSBmYWNldHM7XG5cbiAgICAgIGNhbnZhcy5jcmVhdGVUZXh0dXJlKGltYWdlLCBpbmRleCwgcmVwZWF0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGltYWdlc1RleHR1cmVSZW5kZXJlciA9IFRleHR1cmVSZW5kZXJlci5mcm9tTm90aGluZyhJbWFnZXNUZXh0dXJlUmVuZGVyZXIsIGNhbnZhcywgaW1hZ2VOYW1lcywgZmFjZXRzTWFwLCBvZmZzZXRzKTtcblxuICAgIHJldHVybiBpbWFnZXNUZXh0dXJlUmVuZGVyZXI7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHR1cmVSZW5kZXJlciBmcm9tIFwiLi4vLi4vcmVuZGVyZXIvdGV4dHVyZVwiO1xuXG5pbXBvcnQgeyBhZGQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlTWFwVGV4dHVyZVJlbmRlcmVyIGV4dGVuZHMgVGV4dHVyZVJlbmRlcmVyIHtcblx0Y29uc3RydWN0b3IoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zLCBpbWFnZU1hcEpTT04pIHtcblx0XHRzdXBlcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMpO1xuXG5cdFx0dGhpcy5pbWFnZU1hcEpTT04gPSBpbWFnZU1hcEpTT047XG5cdH1cblxuICBjcmVhdGVCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IGZhY2V0cyA9IHRoaXMuZ2V0RmFjZXRzKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlcyA9IFtdLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IFtdO1xuXG4gICAgZmFjZXRzLmZvckVhY2goKGZhY2V0LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgdGV4dHVyZWRGYWNldCA9IGZhY2V0LCAgLy8vXG4gICAgICAgICAgICBmYWNldFZlcnRleEluZGV4ZXMgPSBmYWNldC5nZXRWZXJ0ZXhJbmRleGVzKGluZGV4KSxcbiAgICAgICAgICAgIGZhY2V0VmVydGV4Tm9ybWFscyA9IGZhY2V0LmdldFZlcnRleE5vcm1hbHMoKSxcbiAgICAgICAgICAgIGZhY2V0VmVydGV4UG9zaXRpb25zID0gZmFjZXQuZ2V0VmVydGV4UG9zaXRpb25zKCksXG4gICAgICAgICAgICBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVkRmFjZXQuZ2V0TWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModGhpcy5pbWFnZU1hcEpTT04pLFxuICAgICAgICAgICAgdGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7IC8vL1xuXG4gICAgICBhZGQodmVydGV4SW5kZXhlcywgZmFjZXRWZXJ0ZXhJbmRleGVzKTtcbiAgICAgIGFkZCh2ZXJ0ZXhOb3JtYWxzLCBmYWNldFZlcnRleE5vcm1hbHMpO1xuICAgICAgYWRkKHZlcnRleFBvc2l0aW9ucywgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMpO1xuICAgICAgYWRkKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzLCB0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVuZGVyZXJEYXRhID0gdGhpcy5nZXRSZW5kZXJlckRhdGEoKTtcblxuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuXG4gICAgc3VwZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgcmVuZGVyZXJCdWZmZXJzID0gdGhpcy5nZXRSZW5kZXJlckJ1ZmZlcnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpO1xuXG4gICAgcmVuZGVyZXJCdWZmZXJzLmJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICB9XG5cbiAgdXNlVGV4dHVyZShpbmRleCwgY2FudmFzKSB7XG4gICAgY29uc3QgdW5pZm9ybUxvY2F0aW9ucyA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9ucygpLFxuICAgICAgICAgIHNhbXBsZXJVbmlmb3JtTG9jYXRpb24gPSB1bmlmb3JtTG9jYXRpb25zLmdldFNhbXBsZXJVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlID0gaW5kZXg7IC8vL1xuXG4gICAgY2FudmFzLnNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZShzYW1wbGVyVW5pZm9ybUxvY2F0aW9uLCBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKTtcbiAgfVxuXG4gIHJlbmRlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBjYW52YXMpIHtcbiAgICBjb25zdCBwcm9ncmFtID0gdGhpcy5nZXRQcm9ncmFtKCk7XG5cbiAgICBjYW52YXMudXNlUHJvZ3JhbShwcm9ncmFtKTtcblxuICAgIHRoaXMuYmluZEJ1ZmZlcnMoY2FudmFzKTtcblxuICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpczsgIC8vL1xuXG4gICAgY2FudmFzLnJlbmRlcihyZW5kZXJlciwgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7XG5cbiAgICBjb25zdCByZW5kZXJlckRhdGEgPSB0aGlzLmdldFJlbmRlcmVyRGF0YSgpLFxuICAgICAgICAgIGNvdW50ID0gcmVuZGVyZXJEYXRhLmdldENvdW50KCksXG4gICAgICAgICAgaW5kZXggPSAwLFxuICAgICAgICAgIHN0YXJ0ID0gMCxcbiAgICAgICAgICBmaW5pc2ggPSBjb3VudDsgLy8vXG5cbiAgICB0aGlzLnVzZVRleHR1cmUoaW5kZXgsIGNhbnZhcyk7XG5cbiAgICBjYW52YXMuZHJhd0VsZW1lbnRzKHN0YXJ0LCBmaW5pc2gpO1xuICB9XG5cbiAgc3RhdGljIGZyb21JbWFnZU1hcEFuZEltYWdlTWFwSlNPTihpbWFnZU1hcCwgaW1hZ2VNYXBKU09OLCBjYW52YXMpIHtcbiAgICBjb25zdCBpbWFnZSA9IGltYWdlTWFwLCAvLy9cbiAgICAgICAgICBpbmRleCA9IDAsXG4gICAgICAgICAgcmVwZWF0ID0gZmFsc2U7XG5cbiAgICBjYW52YXMuY3JlYXRlVGV4dHVyZShpbWFnZSwgaW5kZXgsIHJlcGVhdCk7XG5cbiAgICBjb25zdCBpbWFnZU1hcFRleHR1cmVSZW5kZXJlciA9IFRleHR1cmVSZW5kZXJlci5mcm9tTm90aGluZyhJbWFnZU1hcFRleHR1cmVSZW5kZXJlciwgY2FudmFzLCBpbWFnZU1hcEpTT04pO1xuXG4gICAgcmV0dXJuIGltYWdlTWFwVGV4dHVyZVJlbmRlcmVyO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXNrIGZyb20gXCIuL21hc2tcIjtcbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgQ29sb3VyUmVuZGVyZXIgZnJvbSBcIi4uL3JlbmRlcmVyL2NvbG91clwiO1xuaW1wb3J0IEltYWdlc1RleHR1cmVSZW5kZXJlciBmcm9tIFwiLi4vcmVuZGVyZXIvdGV4dHVyZS9pbWFnZXNcIjtcbmltcG9ydCBJbWFnZU1hcFRleHR1cmVSZW5kZXJlciBmcm9tIFwiLi4vcmVuZGVyZXIvdGV4dHVyZS9pbWFnZU1hcFwiO1xuXG5pbXBvcnQgeyBlbGVtZW50c0Zyb21DaGlsZEVsZW1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoaW1hZ2VzLCBpbWFnZU1hcCwgaW1hZ2VOYW1lcywgaW1hZ2VUaWxpbmcsIGltYWdlTWFwSlNPTiwgY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmltYWdlcyA9IGltYWdlcztcbiAgICB0aGlzLmltYWdlTWFwID0gaW1hZ2VNYXA7XG4gICAgdGhpcy5pbWFnZU5hbWVzID0gaW1hZ2VOYW1lcztcbiAgICB0aGlzLmltYWdlVGlsaW5nID0gaW1hZ2VUaWxpbmc7XG4gICAgdGhpcy5pbWFnZU1hcEpTT04gPSBpbWFnZU1hcEpTT047XG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlciA9IGNvbG91clJlbmRlcmVyO1xuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyID0gdGV4dHVyZVJlbmRlcmVyO1xuICB9XG4gIFxuICBpbml0aWFsaXNlKGNhbnZhcywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IGNvbG91clJlbmRlcmVyID0gQ29sb3VyUmVuZGVyZXIuZnJvbU5vdGhpbmcoY2FudmFzKSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCksXG4gICAgICAgICAgbWFza3MgPSBlbGVtZW50c0Zyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMsIE1hc2spO1xuXG4gICAgbGV0IHRleHR1cmVSZW5kZXJlciA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5pbWFnZXMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGltYWdlc1RleHR1cmVSZW5kZXJlciA9IEltYWdlc1RleHR1cmVSZW5kZXJlci5mcm9tSW1hZ2VzSW1hZ2VOYW1lc0FuZEltYWdlVGlsaW5nKHRoaXMuaW1hZ2VzLCB0aGlzLmltYWdlTmFtZXMsIHRoaXMuaW1hZ2VUaWxpbmcsIGNhbnZhcyk7XG5cbiAgICAgIHRleHR1cmVSZW5kZXJlciA9IGltYWdlc1RleHR1cmVSZW5kZXJlcjsgIC8vL1xuICAgIH1cblxuICAgIGlmICh0aGlzLmltYWdlTWFwICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbWFnZU1hcFRleHR1cmVSZW5kZXJlciA9IEltYWdlTWFwVGV4dHVyZVJlbmRlcmVyLmZyb21JbWFnZU1hcEFuZEltYWdlTWFwSlNPTih0aGlzLmltYWdlTWFwLCB0aGlzLmltYWdlTWFwSlNPTiwgY2FudmFzKTtcblxuICAgICAgdGV4dHVyZVJlbmRlcmVyID0gaW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXI7ICAvLy9cbiAgICB9XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgICAgY2hpbGRFbGVtZW50LmNyZWF0ZUZhY2V0cyhtYXJnaW5PZkVycm9yKTtcbiAgICB9KTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgICBjaGlsZEVsZW1lbnQubWFza0ZhY2V0cyhtYXNrcywgbWFyZ2luT2ZFcnJvcik7XG4gICAgfSk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgICAgY2hpbGRFbGVtZW50LmFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKTtcbiAgICB9KTtcblxuICAgIGlmIChjb2xvdXJSZW5kZXJlciAhPT0gbnVsbCkge1xuICAgICAgY29sb3VyUmVuZGVyZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuICAgIH1cblxuICAgIGlmICh0ZXh0dXJlUmVuZGVyZXIgIT09IG51bGwpIHtcbiAgICAgIHRleHR1cmVSZW5kZXJlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG4gICAgfVxuXG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlciA9IGNvbG91clJlbmRlcmVyO1xuXG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIgPSB0ZXh0dXJlUmVuZGVyZXI7XG4gIH1cblxuICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgY2FudmFzKSB7XG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlciAmJiB0aGlzLmNvbG91clJlbmRlcmVyLnJlbmRlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBjYW52YXMpOyAgLy8vXG5cbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlciAmJiB0aGlzLnRleHR1cmVSZW5kZXJlci5yZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgY2FudmFzKTsgIC8vL1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGltYWdlcyA9IG51bGwsIGltYWdlTWFwID0gbnVsbCwgaW1hZ2VOYW1lcyA9IG51bGwsIGltYWdlVGlsaW5nID0gZmFsc2UsIGltYWdlTWFwSlNPTiA9IG51bGwgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXIgPSBudWxsLCAgLy8vXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyID0gbnVsbCwgLy8vXG4gICAgICAgICAgcGFydCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoUGFydCwgcHJvcGVydGllcywgaW1hZ2VzLCBpbWFnZU1hcCwgaW1hZ2VOYW1lcywgaW1hZ2VUaWxpbmcsIGltYWdlTWFwSlNPTiwgY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcik7XG5cbiAgICByZXR1cm4gcGFydDtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IERFRkFVTFRfWl9GQVIsIERFRkFVTFRfWl9ORUFSLCBERUZBVUxUX0ZJRUxEX09GX1ZJRVcgfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FtZXJhIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHpGYXIsIHpOZWFyLCBmaWVsZE9mVmlldykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnpGYXIgPSB6RmFyO1xuICAgIHRoaXMuek5lYXIgPSB6TmVhcjtcbiAgICB0aGlzLmZpZWxkT2ZWaWV3ID0gZmllbGRPZlZpZXc7XG4gIH1cblxuICBnZXRaRmFyKCkge1xuICAgIHJldHVybiB0aGlzLnpGYXI7XG4gIH1cblxuICBnZXRaTmVhcigpIHtcbiAgICByZXR1cm4gdGhpcy56TmVhcjtcbiAgfVxuXG4gIGdldEZpZWxkT2ZWaWV3KCkge1xuICAgIHJldHVybiB0aGlzLmZpZWxkT2ZWaWV3O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgeyBmaWVsZE9mVmlldyA9IERFRkFVTFRfRklFTERfT0ZfVklFVyB9ID0gcHJvcGVydGllcztcblxuICAgIGZpZWxkT2ZWaWV3ICo9IERFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSOyAvLy9cblxuICAgIGNvbnN0IHsgekZhciA9IERFRkFVTFRfWl9GQVIsIHpOZWFyID0gREVGQVVMVF9aX05FQVIgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2FtZXJhID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgekZhciwgek5lYXIsIGZpZWxkT2ZWaWV3LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGNhbWVyYTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgV0hFRUxfRVZFTlRfVFlQRSA9IFwid2hlZWxcIjtcbmV4cG9ydCBjb25zdCBLRVlVUF9FVkVOVF9UWVBFID0gXCJrZXl1cFwiO1xuZXhwb3J0IGNvbnN0IEtFWURPV05fRVZFTlRfVFlQRSA9IFwia2V5ZG93blwiO1xuZXhwb3J0IGNvbnN0IE1PVVNFVVBfRVZFTlRfVFlQRSA9IFwibW91c2V1cFwiO1xuZXhwb3J0IGNvbnN0IE1PVVNFRE9XTl9FVkVOVF9UWVBFID0gXCJtb3VzZWRvd25cIjtcbmV4cG9ydCBjb25zdCBNT1VTRU1PVkVfRVZFTlRfVFlQRSA9IFwibW91c2Vtb3ZlXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGtleUNvZGVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBLRVlVUF9FVkVOVF9UWVBFLCBLRVlET1dOX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vZXZlbnRUeXBlc1wiO1xuXG5jb25zdCB7IEVTQ0FQRV9LRVlfQ09ERSwgU0hJRlRfS0VZX0NPREUgfSA9IGtleUNvZGVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlFdmVudHMge1xuICBjb25zdHJ1Y3RvcihoYW5kbGVycywgc2hpZnRLZXlEb3duKSB7XG4gICAgdGhpcy5oYW5kbGVycyA9IGhhbmRsZXJzO1xuICAgIHRoaXMuc2hpZnRLZXlEb3duID0gc2hpZnRLZXlEb3duO1xuICB9XG5cbiAgZ2V0SGFuZGxlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlcnM7XG4gIH1cblxuICBpc1NoaWZ0S2V5RG93bigpIHtcbiAgICByZXR1cm4gdGhpcy5zaGlmdEtleURvd247XG4gIH1cblxuICBrZXlVcEV2ZW50TGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgaWYgKGtleUNvZGUgPT09IFNISUZUX0tFWV9DT0RFKSB7XG4gICAgICB0aGlzLnNoaWZ0S2V5RG93biA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlcih0aGlzLnNoaWZ0S2V5RG93bik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBrZXlEb3duRXZlbnRMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gU0hJRlRfS0VZX0NPREUpIHtcbiAgICAgIHRoaXMuc2hpZnRLZXlEb3duID0gdHJ1ZTtcblxuICAgICAgdGhpcy5oYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIodGhpcy5zaGlmdEtleURvd24pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgYWRkU2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5SGFuZGxlcikge1xuICAgIGNvbnN0IGhhbmRsZXIgPSBzaGlmdEtleUhhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMuaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgfVxuXG4gIGFkZEVzY2FwZUtleURvd25IYW5kbGVyKGVzY2FwZUtleURvd25IYW5kbGVyKSB7XG4gICAgY29uc3QgZG9jdW1lbnRET01FbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OyAgLy8vXG5cbiAgICBkb2N1bWVudERPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihLRVlET1dOX0VWRU5UX1RZUEUsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgICAgaWYgKGtleUNvZGUgPT09IEVTQ0FQRV9LRVlfQ09ERSkge1xuICAgICAgICBlc2NhcGVLZXlEb3duSGFuZGxlcigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBjb25zdCBkb2N1bWVudERPTUVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7ICAvLy9cblxuICAgIGRvY3VtZW50RE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKEtFWVVQX0VWRU5UX1RZUEUsIHRoaXMua2V5VXBFdmVudExpc3RlbmVyKTtcblxuICAgIGRvY3VtZW50RE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKEtFWURPV05fRVZFTlRfVFlQRSwgdGhpcy5rZXlEb3duRXZlbnRMaXN0ZW5lcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSBbXSxcbiAgICAgICAgICBzaGlmdEtleURvd24gPSBmYWxzZSwgIC8vL1xuICAgICAgICAgIGtleUV2ZW50cyA9IG5ldyBLZXlFdmVudHMoaGFuZGxlcnMsIHNoaWZ0S2V5RG93bik7XG5cbiAgICByZXR1cm4ga2V5RXZlbnRzO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFdIRUVMX0VWRU5UX1RZUEUsIE1PVVNFVVBfRVZFTlRfVFlQRSwgTU9VU0VET1dOX0VWRU5UX1RZUEUsIE1PVVNFTU9WRV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2V2ZW50VHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW91c2VFdmVudHMge1xuICBjb25zdHJ1Y3RvcihoYW5kbGVyc01hcCwgbW91c2VEb3duKSB7XG4gICAgdGhpcy5oYW5kbGVyc01hcCA9IGhhbmRsZXJzTWFwO1xuICAgIHRoaXMubW91c2VEb3duID0gbW91c2VEb3duO1xuICB9XG5cbiAgd2hlZWxFdmVudExpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwWyBXSEVFTF9FVkVOVF9UWVBFIF0sXG4gICAgICAgICAgbW91c2VXaGVlbERlbHRhID0gbW91c2VXaGVlbERlbHRhRnJvbUV2ZW50KGV2ZW50KTtcblxuICAgIGhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgIGhhbmRsZXIobW91c2VXaGVlbERlbHRhKTtcbiAgICB9KTtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBtb3VzZUV2ZW50TGlzdGVuZXIgPSAoZXZlbnQsIGV2ZW50VHlwZSkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFtldmVudFR5cGVdLFxuICAgICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzRnJvbUV2ZW50KGV2ZW50KTtcblxuICAgIGhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgIGhhbmRsZXIobW91c2VDb29yZGluYXRlcywgdGhpcy5tb3VzZURvd24pO1xuICAgIH0pO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIG1vdXNlVXBFdmVudExpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcblxuICAgIHRoaXMubW91c2VFdmVudExpc3RlbmVyKGV2ZW50LCBNT1VTRVVQX0VWRU5UX1RZUEUpO1xuICB9XG5cblx0bW91c2VEb3duRXZlbnRMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgIHRoaXMubW91c2VEb3duID0gdHJ1ZTtcblxuICAgIHRoaXMubW91c2VFdmVudExpc3RlbmVyKGV2ZW50LCBNT1VTRURPV05fRVZFTlRfVFlQRSk7XG4gIH1cblxuXHRtb3VzZU1vdmVFdmVudExpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIoZXZlbnQsIE1PVVNFTU9WRV9FVkVOVF9UWVBFKTtcbiAgfVxuXG4gIGFkZE1vdXNlVXBIYW5kbGVyKG1vdXNlVXBIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VVcEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VVUF9FVkVOVF9UWVBFIF07XG5cbiAgICBtb3VzZVVwSGFuZGxlcnMucHVzaChtb3VzZVVwSGFuZGxlcik7XG4gIH1cblxuICBhZGRNb3VzZURvd25IYW5kbGVyKG1vdXNlRG93bkhhbmRsZXIpIHtcbiAgICBjb25zdCBtb3VzZURvd25IYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFRE9XTl9FVkVOVF9UWVBFIF07XG5cbiAgICBtb3VzZURvd25IYW5kbGVycy5wdXNoKG1vdXNlRG93bkhhbmRsZXIpO1xuICB9XG5cbiAgYWRkTW91c2VNb3ZlSGFuZGxlcihtb3VzZU1vdmVIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VNb3ZlSGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRU1PVkVfRVZFTlRfVFlQRSBdO1xuXG4gICAgbW91c2VNb3ZlSGFuZGxlcnMucHVzaChtb3VzZU1vdmVIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VXaGVlbEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgV0hFRUxfRVZFTlRfVFlQRSBdO1xuXG4gICAgbW91c2VXaGVlbEhhbmRsZXJzLnB1c2gobW91c2VXaGVlbEhhbmRsZXIpO1xuICB9XG5cbiAgaW5pdGlhbGlzZShjYW52YXMpIHtcbiAgICAgIGNvbnN0IGNhbnZhc0RPTUVsZW1lbnQgPSBjYW52YXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgdGhpcy5oYW5kbGVyc01hcFsgV0hFRUxfRVZFTlRfVFlQRSBdID0gW107XG4gICAgdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VVUF9FVkVOVF9UWVBFIF0gPSBbXTtcbiAgICB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRURPV05fRVZFTlRfVFlQRSBdID0gW107XG4gICAgdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VNT1ZFX0VWRU5UX1RZUEUgXSA9IFtdO1xuXG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFdIRUVMX0VWRU5UX1RZUEUsIHRoaXMud2hlZWxFdmVudExpc3RlbmVyKTtcbiAgICBjYW52YXNET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoTU9VU0VVUF9FVkVOVF9UWVBFLCB0aGlzLm1vdXNlVXBFdmVudExpc3RlbmVyKTtcbiAgICBjYW52YXNET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoTU9VU0VET1dOX0VWRU5UX1RZUEUsIHRoaXMubW91c2VEb3duRXZlbnRMaXN0ZW5lcik7XG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKE1PVVNFTU9WRV9FVkVOVF9UWVBFLCB0aGlzLm1vdXNlTW92ZUV2ZW50TGlzdGVuZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGhhbmRsZXJzTWFwID0ge30sXG4gICAgICAgICAgbW91c2VEb3duID0gZmFsc2UsICAvLy9cblx0XHRcdFx0XHRtb3VzZUV2ZW50cyA9IG5ldyBNb3VzZUV2ZW50cyhoYW5kbGVyc01hcCwgbW91c2VEb3duKTtcblxuICAgIHJldHVybiBtb3VzZUV2ZW50cztcbiAgfVxufVxuXG5mdW5jdGlvbiBtb3VzZVdoZWVsRGVsdGFGcm9tRXZlbnQoZXZlbnQpIHtcbiAgY29uc3QgeyB3aGVlbERlbHRhIH0gPSBldmVudCxcbiAgICAgICAgbW91c2VXaGVlbERlbHRhID0gTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsIHdoZWVsRGVsdGEpKTsgLy8vXG5cbiAgcmV0dXJuIG1vdXNlV2hlZWxEZWx0YTtcbn1cblxuZnVuY3Rpb24gbW91c2VDb29yZGluYXRlc0Zyb21FdmVudChldmVudCkge1xuICBjb25zdCB7IHRhcmdldCwgY2xpZW50WCwgY2xpZW50WSB9ID0gZXZlbnQsXG4gICAgICAgIGNhbnZhc0RPTUVsZW1lbnQgPSB0YXJnZXQsICAvLy9cbiAgICAgICAgYm91bmRpbmdDbGllbnRSZWN0ID0gY2FudmFzRE9NRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgeyB0b3AsIGxlZnQgfSA9IGJvdW5kaW5nQ2xpZW50UmVjdCxcbiAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IFtcbiAgICAgICAgICBjbGllbnRYIC0gbGVmdCxcbiAgICAgICAgICB0b3AgLSBjbGllbnRZXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIG1vdXNlQ29vcmRpbmF0ZXM7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBLZXlFdmVudHMgZnJvbSBcIi4va2V5RXZlbnRzXCI7XG5pbXBvcnQgTW91c2VFdmVudHMgZnJvbSBcIi4vbW91c2VFdmVudHNcIjtcblxuaW1wb3J0IHsgemVybzIsIHN1YnRyYWN0MiB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlcklucHV0IHtcbiAgY29uc3RydWN0b3IoaGFuZGxlcnMsIGtleUV2ZW50cywgbW91c2VFdmVudHMsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMuaGFuZGxlcnMgPSBoYW5kbGVycztcbiAgICB0aGlzLmtleUV2ZW50cyA9IGtleUV2ZW50cztcbiAgICB0aGlzLm1vdXNlRXZlbnRzID0gbW91c2VFdmVudHM7XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHByZXZpb3VzTW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIobW91c2VDb29yZGluYXRlcywgbW91c2VEb3duLCBjYW52YXMpIHtcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHRoaXMubW91c2VDb29yZGluYXRlczsgIC8vL1xuXG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcblxuICAgIGlmICh0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChtb3VzZURvd24pIHtcbiAgICAgIGNvbnN0IG1vdXNlV2hlZWxEZWx0YSA9IDAsICAvLy9cbiAgICAgICAgICAgIHNoaWZ0S2V5RG93biA9IHRoaXMua2V5RXZlbnRzLmlzU2hpZnRLZXlEb3duKCksXG4gICAgICAgICAgICByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSBzdWJ0cmFjdDIodGhpcy5tb3VzZUNvb3JkaW5hdGVzLCB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyk7XG5cbiAgICAgIHRoaXMuaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VXaGVlbEhhbmRsZXIobW91c2VXaGVlbERlbHRhLCBjYW52YXMpIHtcbiAgICBjb25zdCBzaGlmdEtleURvd24gPSB0aGlzLmtleUV2ZW50cy5pc1NoaWZ0S2V5RG93bigpLFxuICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHplcm8yKCk7XG5cbiAgICB0aGlzLmhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgIGhhbmRsZXIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93bik7XG4gICAgfSk7XG4gIH1cblxuICBhZGRVc2VySW5wdXRIYW5kbGVyKHVzZXJJbnB1dEhhbmRsZXIpIHtcbiAgICBjb25zdCBoYW5kbGVyID0gdXNlcklucHV0SGFuZGxlcjsgLy8vXG5cbiAgICB0aGlzLmhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gIH1cblxuICBhZGRFc2NhcGVLZXlEb3duSGFuZGxlcihlc2NhcGVLZXlEb3duSGFuZGxlcikgeyB0aGlzLmtleUV2ZW50cy5hZGRFc2NhcGVLZXlEb3duSGFuZGxlcihlc2NhcGVLZXlEb3duSGFuZGxlcik7IH1cblxuICBpbml0aWFsaXNlKGNhbnZhcykge1xuICAgIGNvbnN0IG1vdXNlTW92ZUhhbmRsZXIgPSB0aGlzLm1vdXNlTW92ZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZVdoZWVsSGFuZGxlciA9IHRoaXMubW91c2VXaGVlbEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMua2V5RXZlbnRzLmluaXRpYWxpc2UoKTtcblxuICAgIHRoaXMubW91c2VFdmVudHMuaW5pdGlhbGlzZShjYW52YXMpO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50cy5hZGRNb3VzZU1vdmVIYW5kbGVyKG1vdXNlTW92ZUhhbmRsZXIpO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50cy5hZGRNb3VzZVdoZWVsSGFuZGxlcihtb3VzZVdoZWVsSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSBbXSxcbiAgICAgICAgICBrZXlFdmVudHMgPSBLZXlFdmVudHMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBtb3VzZUV2ZW50cyA9IE1vdXNlRXZlbnRzLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IG51bGwsICAvLy9cbiAgICAgICAgICBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBudWxsLCAgLy8vXG4gICAgICAgICAgdXNlcklucHV0ID0gbmV3IFVzZXJJbnB1dChoYW5kbGVycywga2V5RXZlbnRzLCBtb3VzZUV2ZW50cywgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiB1c2VySW5wdXQ7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFBhcnQgZnJvbSBcIi4uL2VsZW1lbnQvcGFydFwiO1xuaW1wb3J0IENhbWVyYSBmcm9tIFwiLi4vZWxlbWVudC9jYW1lcmFcIjtcbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgVXNlcklucHV0IGZyb20gXCIuLi9taXNjZWxsYW5lb3VzL3VzZXJJbnB1dFwiO1xuXG5pbXBvcnQgeyB6ZXJvMiB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IERFRkFVTFRfTUFSR0lOX09GX0VSUk9SLCBERUZBVUxUX0JBQ0tHUk9VTkRfQ09MT1VSIH0gZnJvbSBcIi4uL2RlZmF1bHRzXCI7XG5pbXBvcnQgeyBlbGVtZW50RnJvbUNoaWxkRWxlbWVudHMsIGVsZW1lbnRzRnJvbUNoaWxkRWxlbWVudHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocGFydHMsIGNhbWVyYSwgY2FudmFzLCBjb2xvdXIpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhO1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuY29sb3VyID0gY29sb3VyO1xuICB9XG5cbiAgZ2V0UGFydHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydHM7XG4gIH1cblxuICBnZXRDYW1lcmEoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FtZXJhO1xuICB9XG5cbiAgZ2V0Q2FudmFzKCkge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcztcbiAgfVxuXG4gIGdldENvbG91cigpIHtcbiAgICByZXR1cm4gdGhpcy5jb2xvdXI7XG4gIH1cblxuICBlc2NhcGVLZXlEb3duSGFuZGxlciA9ICgpID0+IHtcbiAgICB0aGlzLmNhbWVyYS5yZXNldCgpO1xuXG4gICAgdGhpcy53aW5kb3dSZXNpemVIYW5kbGVyKCk7IC8vL1xuICB9XG5cbiAgd2luZG93UmVzaXplSGFuZGxlciA9ICgpID0+IHtcbiAgICBjb25zdCBjbGllbnRXaWR0aCA9IHRoaXMuY2FudmFzLmdldENsaWVudFdpZHRoKCksXG4gICAgICAgICAgY2xpZW50SGVpZ2h0ID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50SGVpZ2h0KCksXG4gICAgICAgICAgd2lkdGggPSBjbGllbnRXaWR0aCwgIC8vL1xuICAgICAgICAgIGhlaWdodCA9IGNsaWVudEhlaWdodDtcblxuICAgIHRoaXMuY2FudmFzLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcblxuICAgIGNvbnN0IHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHplcm8yKCksIC8vL1xuICAgICAgICAgIG1vdXNlV2hlZWxEZWx0YSA9IDAsICAvLy9cbiAgICAgICAgICBzaGlmdEtleURvd24gPSBmYWxzZTsgLy8vXG5cbiAgICB0aGlzLnVzZXJJbnB1dEhhbmRsZXIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93bik7XG4gIH1cblxuICB1c2VySW5wdXRIYW5kbGVyID0gKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24pID0+IHtcbiAgICBjb25zdCByZW5kZXIgPSB0aGlzLnJlbmRlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5jYW1lcmEudXBkYXRlKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24sIHRoaXMuY2FudmFzLCByZW5kZXIpO1xuICB9XG5cbiAgaW5pdGlhbGlzZShjYW52YXMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCB1c2VySW5wdXQgPSBVc2VySW5wdXQuZnJvbU5vdGhpbmcoKTtcblxuICAgIHRoaXMucGFydHMuZm9yRWFjaCgocGFydCkgPT4ge1xuICAgICAgcGFydC5pbml0aWFsaXNlKGNhbnZhcywgbWFyZ2luT2ZFcnJvcik7XG4gICAgfSk7XG5cbiAgICB1c2VySW5wdXQuaW5pdGlhbGlzZShjYW52YXMpO1xuXG4gICAgdXNlcklucHV0LmFkZFVzZXJJbnB1dEhhbmRsZXIodGhpcy51c2VySW5wdXRIYW5kbGVyKTtcblxuICAgIHVzZXJJbnB1dC5hZGRFc2NhcGVLZXlEb3duSGFuZGxlcih0aGlzLmVzY2FwZUtleURvd25IYW5kbGVyKTtcblxuICAgIHdpbmRvdy5vbnJlc2l6ZSA9IHRoaXMud2luZG93UmVzaXplSGFuZGxlcjtcblxuICAgIHRoaXMud2luZG93UmVzaXplSGFuZGxlcigpOyAvLy9cbiAgfVxuXG4gIHJlbmRlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSB7XG4gICAgdGhpcy5jYW52YXMuY2xlYXIodGhpcy5jb2xvdXIpO1xuXG4gICAgdGhpcy5wYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiB7XG4gICAgICBwYXJ0LnJlbmRlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCB0aGlzLmNhbnZhcyk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgY2FudmFzLCBjaGlsZEVsZW1lbnRzLCBiYWNrZ3JvdW5kQ29sb3VyID0gREVGQVVMVF9CQUNLR1JPVU5EX0NPTE9VUiB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBwYXJ0cyA9IGVsZW1lbnRzRnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cywgUGFydCksXG4gICAgICAgICAgY2FtZXJhID0gZWxlbWVudEZyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMsIENhbWVyYSksXG4gICAgICAgICAgY29sb3VyID0gYmFja2dyb3VuZENvbG91ciwgIC8vXG4gICAgICAgICAgc2NlbmUgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFNjZW5lLCBwcm9wZXJ0aWVzLCBwYXJ0cywgY2FtZXJhLCBjYW52YXMsIGNvbG91ciksXG4gICAgICAgICAgbWFyZ2luT2ZFcnJvciA9IERFRkFVTFRfTUFSR0lOX09GX0VSUk9SO1xuXG4gICAgc2NlbmUuaW5pdGlhbGlzZShjYW52YXMsIG1hcmdpbk9mRXJyb3IpO1xuXG4gICAgcmV0dXJuIHNjZW5lO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL21hdHJpeFwiO1xuaW1wb3J0IHsgcmVmbGVjdDMsIHRydW5jYXRlNCwgdHJhbnNmb3JtNCB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbGF0aXZlT2Zmc2V0c0Zyb21BbmdsZXNBbmREaXJlY3Rpb25zKGFuZ2xlcywgZGlyZWN0aW9ucykge1xuICBhbmdsZXMgPSByZWZsZWN0MyhhbmdsZXMpOyAgLy8vXG5cbiAgY29uc3QgcmV2ZXJzZU9yZGVyID0gdHJ1ZSxcbiAgICAgICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyhhbmdsZXMsIHJldmVyc2VPcmRlcik7XG5cbiAgbGV0IHJlbGF0aXZlT2Zmc2V0cyA9IHRyYW5zZm9ybTQoZGlyZWN0aW9ucywgcm90YXRpb25zTWF0cml4KTtcblxuICByZWxhdGl2ZU9mZnNldHMgPSB0cnVuY2F0ZTQocmVsYXRpdmVPZmZzZXRzKTtcblxuICByZXR1cm4gcmVsYXRpdmVPZmZzZXRzO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhZGQzLCBzY2FsZTIsIHJlZmxlY3QyIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgcmVsYXRpdmVPZmZzZXRzRnJvbUFuZ2xlc0FuZERpcmVjdGlvbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL29mZnNldHNcIjtcbmltcG9ydCB7IE1PVVNFX1dIRUVMX0RFTFRBX01VTFRJUExJRVIsIFJFTEFUSVZFX01PVVNFX0NPT1JESU5BVEVTX01VTFRJUExJRVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbiB7XG4gIGNvbnN0cnVjdG9yKG9mZnNldHMsIG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIsIHJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIpIHtcbiAgICB0aGlzLm9mZnNldHMgPSBvZmZzZXRzO1xuICAgIHRoaXMubW91c2VXaGVlbERlbHRhTXVsdGlwbGllciA9IG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXI7XG4gICAgdGhpcy5yZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyID0gcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllcjtcbiAgfVxuXG4gIGdldE9mZnNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0cztcbiAgfVxuXG4gIGdldERlbHRhTXVsdGlwbGllcigpIHtcbiAgICByZXR1cm4gdGhpcy5tb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyO1xuICB9XG5cbiAgZ2V0UmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllcigpIHtcbiAgICByZXR1cm4gdGhpcy5yZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyO1xuICB9XG5cbiAgdXBkYXRlT2Zmc2V0cyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgYW5nbGVzKSB7XG4gICAgbW91c2VXaGVlbERlbHRhID0gbW91c2VXaGVlbERlbHRhICogdGhpcy5tb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyOyAvLy9cblxuICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHNjYWxlMihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMucmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllcik7IC8vL1xuXG4gICAgY29uc3Qgc2NhbGVkUmVmbGVjdGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gcmVmbGVjdDIoc2NhbGUyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgMSkpLFxuICAgICAgICAgIGRpcmVjdGlvbnMgPSBbIC4uLnNjYWxlZFJlZmxlY3RlZFJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCAwIF0sXG4gICAgICAgICAgcmVsYXRpdmVPZmZzZXRzID0gcmVsYXRpdmVPZmZzZXRzRnJvbUFuZ2xlc0FuZERpcmVjdGlvbnMoYW5nbGVzLCBkaXJlY3Rpb25zLCAxKTtcblxuICAgIHRoaXMub2Zmc2V0cyA9IGFkZDModGhpcy5vZmZzZXRzLCByZWxhdGl2ZU9mZnNldHMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Jbml0aWFsT2Zmc2V0c01vdXNlU2Vuc2l0aXZpdHlBbmRNb3VzZVdoZWVsU2Vuc2l0aXZpdHkoaW5pdGlhbE9mZnNldHMsIG1vdXNlU2Vuc2l0aXZpdHksIG1vdXNlV2hlZWxTZW5zaXRpdml0eSkge1xuICAgIGNvbnN0IG9mZnNldHMgPSBpbml0aWFsT2Zmc2V0cywgLy8vXG4gICAgICAgICAgbW91c2VXaGVlbERlbHRhTXVsdGlwbGllciA9IE1PVVNFX1dIRUVMX0RFTFRBX01VTFRJUExJRVIgKiBtb3VzZVdoZWVsU2Vuc2l0aXZpdHksXG4gICAgICAgICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllciA9IFJFTEFUSVZFX01PVVNFX0NPT1JESU5BVEVTX01VTFRJUExJRVIgKiBtb3VzZVNlbnNpdGl2aXR5LFxuICAgICAgICAgIHBhbiA9IG5ldyBQYW4ob2Zmc2V0cywgbW91c2VXaGVlbERlbHRhTXVsdGlwbGllciwgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllcik7XG5cbiAgICByZXR1cm4gcGFuO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEFOR0xFU19NVUxUSVBMSUVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgYWRkMywgc2NhbGUyLCB0cmFuc2Zvcm0zIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWx0IHtcbiAgY29uc3RydWN0b3IoYW5nbGVzLCBjbG9ja3dpc2UpIHtcbiAgICB0aGlzLmFuZ2xlcyA9IGFuZ2xlcztcbiAgICB0aGlzLmNsb2Nrd2lzZSA9IGNsb2Nrd2lzZTtcbiAgfVxuXG4gIGdldEFuZ2xlcygpIHtcbiAgICByZXR1cm4gdGhpcy5hbmdsZXM7XG4gIH1cblxuICBpc0Nsb2Nrd2lzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jbG9ja3dpc2U7XG4gIH1cblxuICB1cGRhdGVBbmdsZXMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc2NhbGUyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgQU5HTEVTX01VTFRJUExJRVIpOyAvLy9cblxuICAgIGNvbnN0IG11bHRpcGxpZXIgPSB0aGlzLmNsb2Nrd2lzZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICArMSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC0xLFxuICAgICAgICAgIG1hdHJpeCA9IFtcblxuICAgICAgICAgICAgICAgICAgICAgIDAsICttdWx0aXBsaWVyLCAwLFxuICAgICAgICAgICAgLW11bHRpcGxpZXIsICAgICAgICAgICAwLCAwLFxuICAgICAgICAgICAgICAgICAgICAgIDAsICAgICAgICAgICAwLCAwXG5cbiAgICAgICAgICBdLFxuICAgICAgICAgIHJlbGF0aXZlQW5nbGVzID0gdHJhbnNmb3JtMyhbIC4uLnJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgMCBdLCBtYXRyaXgpO1xuXG4gICAgdGhpcy5hbmdsZXMgPSBhZGQzKHRoaXMuYW5nbGVzLCByZWxhdGl2ZUFuZ2xlcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxBbmdsZXMoaW5pdGlhbEFuZ2xlcykge1xuICAgIGNvbnN0IGFuZ2xlcyA9IFsgLi4uaW5pdGlhbEFuZ2xlcywgMCBdLFxuICAgICAgICAgIGNsb2Nrd2lzZSA9IGZhbHNlLFxuICAgICAgICAgIHRpbHQgPSBuZXcgVGlsdChhbmdsZXMsIGNsb2Nrd2lzZSk7XG5cbiAgICByZXR1cm4gdGlsdDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5pdGlhbEFuZ2xlc0FuZENsb2Nrd2lzZShpbml0aWFsQW5nbGVzLCBjbG9ja3dpc2UpIHtcbiAgICBjb25zdCBhbmdsZXMgPSBbIC4uLmluaXRpYWxBbmdsZXMsIDAgXSxcbiAgICAgICAgICB0aWx0ID0gbmV3IFRpbHQoYW5nbGVzLCBjbG9ja3dpc2UpO1xuXG4gICAgcmV0dXJuIHRpbHQ7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEpTT04oa2V5KSB7XG4gIGxldCBqc29uID0gbnVsbDtcblxuICBjb25zdCB2YWx1ZSA9IGdldChrZXkpO1xuXG4gIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgIGpzb24gPSBKU09OLnBhcnNlKHZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiBqc29uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0SlNPTihrZXksIGpzb24pIHtcbiAgY29uc3QgdmFsdWUgPSBKU09OLnN0cmluZ2lmeShqc29uKTtcblxuICBzZXQoa2V5LCB2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVKU09OKGtleSkge1xuICByZW1vdmUoa2V5KTtcbn1cblxuZnVuY3Rpb24gZ2V0KGtheSkge1xuICBjb25zdCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtheSkgfHwgbnVsbDtcblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHNldChrYXksIHZhbHVlKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtheSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmUoa2V5KSB7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG59IiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGFuIGZyb20gXCIuLi8uLi9taXNjZWxsYW5lb3VzL3BhblwiO1xuaW1wb3J0IFRpbHQgZnJvbSBcIi4uLy4uL21pc2NlbGxhbmVvdXMvdGlsdFwiO1xuXG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9jYW1lcmFcIjtcblxuaW1wb3J0IHsgc2NhbGUyLCBzY2FsZTMgfSBmcm9tIFwiLi4vLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyBnZXRKU09OLCBzZXRKU09OLCByZW1vdmVKU09OIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9sb2NhbFN0b3JhZ2VcIjtcbmltcG9ydCB7IEdBTUlOR19DQU1FUkEsIElOVkVSVF9NVUxUSVBMSUVSLCBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUiB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IERFRkFVTFRfUEVSU0lTVCxcbiAgICAgICAgIERFRkFVTFRfSU5JVElBTF9BTkdMRVMsXG4gICAgICAgICBERUZBVUxUX0lOSVRJQUxfUE9TSVRJT04sXG4gICAgICAgICBERUZBVUxUX01PVVNFX1NFTlNJVElWSVRZLFxuICAgICAgICAgREVGQVVMVF9NT1VTRV9XSEVFTF9TRU5TSVRJVklUWSB9IGZyb20gXCIuLi8uLi9kZWZhdWx0c1wiO1xuaW1wb3J0IHsgb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzLFxuICAgICAgICAgcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyxcbiAgICAgICAgIHBvc2l0aW9uTWF0cml4RnJvbU5vdGhpbmcsXG4gICAgICAgICBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeCxcbiAgICAgICAgIHByb2plY3Rpb25NYXRyaXhGcm9tQ2FtZXJhQW5kQ2FudmFzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9tYXRyaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtaW5nQ2FtZXJhIGV4dGVuZHMgQ2FtZXJhIHtcbiAgY29uc3RydWN0b3IoekZhciwgek5lYXIsIGZpZWxkT2ZWaWV3LCBwYW4sIHRpbHQsIHBlcnNpc3QpIHtcbiAgICBzdXBlcih6RmFyLCB6TmVhciwgZmllbGRPZlZpZXcpO1xuXG4gICAgdGhpcy5wYW4gPSBwYW47XG4gICAgdGhpcy50aWx0ID0gdGlsdDtcbiAgICB0aGlzLnBlcnNpc3QgPSBwZXJzaXN0O1xuICB9XG5cbiAgZ2V0UGFuKCkge1xuICAgIHJldHVybiB0aGlzLnBhbjtcbiAgfVxuXG4gIGdldFRpbHQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGlsdDtcbiAgfVxuXG4gIGRvZXNQZXJzaXN0KCkge1xuICAgIHJldHVybiB0aGlzLnBlcnNpc3Q7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICBjb25zdCBrZXkgPSBHQU1JTkdfQ0FNRVJBOyAgLy8vXG5cbiAgICByZW1vdmVKU09OKGtleSk7XG5cbiAgICB0aGlzLnBhbiA9IHBhbkZyb21Qcm9wZXJ0aWVzKHRoaXMucHJvcGVydGllcyk7XG4gICAgdGhpcy50aWx0ID0gdGlsdEZyb21Qcm9wZXJ0aWVzKHRoaXMucHJvcGVydGllcyk7XG4gIH1cblxuICB1cGRhdGUocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93biwgY2FudmFzLCByZW5kZXIpIHtcbiAgICBjb25zdCBtb3VzZVdoZWVsTW92ZWQgPSAobW91c2VXaGVlbERlbHRhICE9PSAwKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChzaGlmdEtleURvd24gfHwgbW91c2VXaGVlbE1vdmVkKSB7XG4gICAgICBjb25zdCBhbmdsZXMgPSB0aGlzLnRpbHQuZ2V0QW5nbGVzKCk7XG5cbiAgICAgIHRoaXMucGFuLnVwZGF0ZU9mZnNldHMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIGFuZ2xlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGlsdC51cGRhdGVBbmdsZXMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKTtcbiAgICB9XG5cbiAgICBjb25zdCBjYW1lcmEgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgYW5nbGVzID0gdGhpcy50aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIHBlcnNpc3QgPSB0aGlzLmRvZXNQZXJzaXN0KCksXG4gICAgICAgICAgb2Zmc2V0cyA9IHRoaXMucGFuLmdldE9mZnNldHMoKTtcblxuICAgIGlmIChwZXJzaXN0KSB7XG4gICAgICBjb25zdCBrZXkgPSBHQU1JTkdfQ0FNRVJBLCAgLy8vXG4gICAgICAgICAgICBhbmdsZXMgPSB0aGlzLnRpbHQuZ2V0QW5nbGVzKCksXG4gICAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgICBhbmdsZXMsXG4gICAgICAgICAgICAgIG9mZnNldHNcbiAgICAgICAgICAgIH07XG5cbiAgICAgIHNldEpTT04oa2V5LCBqc29uKTtcbiAgICB9XG5cbiAgICBjb25zdCBvZmZzZXRzTWF0cml4ID0gb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzKG9mZnNldHMpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4ID0gcG9zaXRpb25NYXRyaXhGcm9tTm90aGluZygpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMoYW5nbGVzKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gcHJvamVjdGlvbk1hdHJpeEZyb21DYW1lcmFBbmRDYW52YXMoY2FtZXJhLCBjYW52YXMpLFxuICAgICAgICAgIG5vcm1hbHNNYXRyaXggPSBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeChyb3RhdGlvbnNNYXRyaXgpO1xuXG4gICAgcmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHBlcnNpc3QgPSBERUZBVUxUX1BFUlNJU1QgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgcGFuID0gcGFuRnJvbVByb3BlcnRpZXMocHJvcGVydGllcyksXG4gICAgICAgICAgdGlsdCA9IHRpbHRGcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSxcbiAgICAgICAgICBnYW1pbmdDYW1lcmEgPSBDYW1lcmEuZnJvbVByb3BlcnRpZXMoR2FtaW5nQ2FtZXJhLCBwcm9wZXJ0aWVzLCBwYW4sIHRpbHQsIHBlcnNpc3QpO1xuXG4gICAgcmV0dXJuIGdhbWluZ0NhbWVyYTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYW5Gcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IHsgcGVyc2lzdCA9IERFRkFVTFRfUEVSU0lTVCxcbiAgICAgICAgICBtb3VzZVNlbnNpdGl2aXR5ID0gREVGQVVMVF9NT1VTRV9TRU5TSVRJVklUWSxcbiAgICAgICAgICBtb3VzZVdoZWVsU2Vuc2l0aXZpdHkgPSBERUZBVUxUX01PVVNFX1dIRUVMX1NFTlNJVElWSVRZIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIGxldCAgeyBpbml0aWFsUG9zaXRpb24gPSBERUZBVUxUX0lOSVRJQUxfUE9TSVRJT04gfSA9IHByb3BlcnRpZXM7XG5cbiAgbGV0IGluaXRpYWxPZmZzZXRzID0gc2NhbGUzKGluaXRpYWxQb3NpdGlvbiwgSU5WRVJUX01VTFRJUExJRVIpO1xuXG4gIGlmIChwZXJzaXN0KSB7XG4gICAgY29uc3Qga2V5ID0gR0FNSU5HX0NBTUVSQSwgIC8vL1xuICAgICAgICAgIGpzb24gPSBnZXRKU09OKGtleSk7XG5cbiAgICBpZiAoanNvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBvZmZzZXRzIH0gPSBqc29uO1xuXG4gICAgICBpbml0aWFsT2Zmc2V0cyA9IG9mZnNldHM7IC8vL1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHBhbiA9IFBhbi5mcm9tSW5pdGlhbE9mZnNldHNNb3VzZVNlbnNpdGl2aXR5QW5kTW91c2VXaGVlbFNlbnNpdGl2aXR5KGluaXRpYWxPZmZzZXRzLCBtb3VzZVNlbnNpdGl2aXR5LCBtb3VzZVdoZWVsU2Vuc2l0aXZpdHkpO1xuXG4gIHJldHVybiBwYW47XG59XG5cbmZ1bmN0aW9uIHRpbHRGcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IHsgcGVyc2lzdCA9IERFRkFVTFRfUEVSU0lTVCB9ID0gcHJvcGVydGllcztcblxuICBsZXQgIHsgaW5pdGlhbEFuZ2xlcyA9IERFRkFVTFRfSU5JVElBTF9BTkdMRVMgfSA9IHByb3BlcnRpZXM7XG5cbiAgaW5pdGlhbEFuZ2xlcyA9IHNjYWxlMihpbml0aWFsQW5nbGVzLCBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUik7IC8vL1xuXG4gIGlmIChwZXJzaXN0KSB7XG4gICAgY29uc3Qga2V5ID0gR0FNSU5HX0NBTUVSQSwgIC8vL1xuICAgICAgICAgIGpzb24gPSBnZXRKU09OKGtleSk7XG5cbiAgICBpZiAoanNvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBhbmdsZXMgfSA9IGpzb247XG5cbiAgICAgIGluaXRpYWxBbmdsZXMgPSBhbmdsZXM7IC8vL1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNsb2Nrd2lzZSA9IHRydWUsXG4gICAgICAgIHRpbHQgPSBUaWx0LmZyb21Jbml0aWFsQW5nbGVzQW5kQ2xvY2t3aXNlKGluaXRpYWxBbmdsZXMsIGNsb2Nrd2lzZSk7XG5cbiAgcmV0dXJuIHRpbHQ7XG59IiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBNSU5JTVVNX0RJU1RBTkNFLCBNT1VTRV9XSEVFTF9ERUxUQV9NVUxUSVBMSUVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBab29tIHtcbiAgY29uc3RydWN0b3IoZGlzdGFuY2UsIG1pbmltdW1EaXN0YW5jZSwgbW91c2VXaGVlbERlbHRhTXVsdGlwbGllcikge1xuICAgIHRoaXMuZGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgICB0aGlzLm1pbmltdW1EaXN0YW5jZSA9IG1pbmltdW1EaXN0YW5jZTtcbiAgICB0aGlzLm1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIgPSBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyO1xuICB9XG5cbiAgZ2V0RGlzdGFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzdGFuY2U7XG4gIH1cblxuICBnZXRNaW5pbXVtRGlzdGFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMubWluaW11bURpc3RhbmNlO1xuICB9XG5cbiAgZ2V0RGVsdGFNdWx0aXBsaWVyKCkge1xuICAgIHJldHVybiB0aGlzLm1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXI7XG4gIH1cblxuICB1cGRhdGVEaXN0YW5jZShtb3VzZVdoZWVsRGVsdGEpIHtcbiAgICBtb3VzZVdoZWVsRGVsdGEgPSBtb3VzZVdoZWVsRGVsdGEgKiB0aGlzLm1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXI7IC8vL1xuXG4gICAgdGhpcy5kaXN0YW5jZSA9IHRoaXMuZGlzdGFuY2UgLSBtb3VzZVdoZWVsRGVsdGE7XG5cbiAgICB0aGlzLmRpc3RhbmNlID0gTWF0aC5tYXgodGhpcy5taW5pbXVtRGlzdGFuY2UsIHRoaXMuZGlzdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Jbml0aWFsRGlzdGFuY2VBbmRNb3VzZVdoZWVsU2Vuc2l0aXZpdHkoaW5pdGlhbERpc3RhbmNlLCBtb3VzZVdoZWVsU2Vuc2l0aXZpdHkpIHtcbiAgICBjb25zdCBkaXN0YW5jZSA9IGluaXRpYWxEaXN0YW5jZSwgLy8vXG4gICAgICAgICAgbWluaW11bURpc3RhbmNlID0gTUlOSU1VTV9ESVNUQU5DRSxcbiAgICAgICAgICBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyID0gTU9VU0VfV0hFRUxfREVMVEFfTVVMVElQTElFUiAqIG1vdXNlV2hlZWxTZW5zaXRpdml0eSxcbiAgICAgICAgICB6b29tID0gbmV3IFpvb20oZGlzdGFuY2UsIG1pbmltdW1EaXN0YW5jZSwgbW91c2VXaGVlbERlbHRhTXVsdGlwbGllcik7XG5cbiAgICByZXR1cm4gem9vbTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGFuIGZyb20gXCIuLi8uLi9taXNjZWxsYW5lb3VzL3BhblwiO1xuaW1wb3J0IFRpbHQgZnJvbSBcIi4uLy4uL21pc2NlbGxhbmVvdXMvdGlsdFwiO1xuaW1wb3J0IFpvb20gZnJvbSBcIi4uLy4uL21pc2NlbGxhbmVvdXMvem9vbVwiO1xuaW1wb3J0IENhbWVyYSBmcm9tIFwiLi4vY2FtZXJhXCI7XG5cbmltcG9ydCB7IHNjYWxlMiB9IGZyb20gXCIuLi8uLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IGdldEpTT04sIHNldEpTT04sIHJlbW92ZUpTT04gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2xvY2FsU3RvcmFnZVwiO1xuaW1wb3J0IHsgREVTSUdOX0NBTUVSQSwgREVHUkVFU19UT19SQURJQU5TX01VTFRJUExJRVIgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBERUZBVUxUX1BFUlNJU1QsXG4gICAgICAgICBERUZBVUxUX0lOSVRJQUxfQU5HTEVTLFxuICAgICAgICAgREVGQVVMVF9JTklUSUFMX09GRlNFVFMsXG4gICAgICAgICBERUZBVUxUX0lOSVRJQUxfRElTVEFOQ0UsXG4gICAgICAgICBERUZBVUxUX01PVVNFX1NFTlNJVElWSVRZLFxuICAgICAgICAgREVGQVVMVF9NT1VTRV9XSEVFTF9TRU5TSVRJVklUWSB9IGZyb20gXCIuLi8uLi9kZWZhdWx0c1wiO1xuaW1wb3J0IHsgb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzLFxuICAgICAgICAgcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyxcbiAgICAgICAgIHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlLFxuICAgICAgICAgbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgsXG4gICAgICAgICBwcm9qZWN0aW9uTWF0cml4RnJvbUNhbWVyYUFuZENhbnZhcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbWF0cml4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlc2lnbkNhbWVyYSBleHRlbmRzIENhbWVyYSB7XG4gIGNvbnN0cnVjdG9yKHpGYXIsIHpOZWFyLCBmaWVsZE9mVmlldywgcGFuLCB0aWx0LCB6b29tLCBwZXJzaXN0KSB7XG4gICAgc3VwZXIoekZhciwgek5lYXIsIGZpZWxkT2ZWaWV3KTtcblxuICAgIHRoaXMucGFuID0gcGFuO1xuICAgIHRoaXMudGlsdCA9IHRpbHQ7XG4gICAgdGhpcy56b29tID0gem9vbTtcbiAgICB0aGlzLnBlcnNpc3QgPSBwZXJzaXN0O1xuICB9XG5cbiAgZ2V0UGFuKCkge1xuICAgIHJldHVybiB0aGlzLnBhbjtcbiAgfVxuXG4gIGdldFRpbHQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGlsdDtcbiAgfVxuXG4gIGdldFpvb20oKSB7XG4gICAgcmV0dXJuIHRoaXMuem9vbTtcbiAgfVxuXG4gIGRvZXNQZXJzaXN0KCkge1xuICAgIHJldHVybiB0aGlzLnBlcnNpc3Q7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICBjb25zdCBrZXkgPSBERVNJR05fQ0FNRVJBOyAgLy8vXG5cbiAgICByZW1vdmVKU09OKGtleSk7XG5cbiAgICB0aGlzLnBhbiA9IHBhbkZyb21Qcm9wZXJ0aWVzKHRoaXMucHJvcGVydGllcyk7XG4gICAgdGhpcy50aWx0ID0gdGlsdEZyb21Qcm9wZXJ0aWVzKHRoaXMucHJvcGVydGllcyk7XG4gICAgdGhpcy56b29tID0gem9vbUZyb21Qcm9wZXJ0aWVzKHRoaXMucHJvcGVydGllcyk7XG4gIH1cblxuICB1cGRhdGUocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93biwgY2FudmFzLCByZW5kZXIpIHtcbiAgICBjb25zdCBtb3VzZVdoZWVsTW92ZWQgPSAobW91c2VXaGVlbERlbHRhICE9PSAwKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChzaGlmdEtleURvd24pIHtcbiAgICAgIGNvbnN0IGFuZ2xlcyA9IHRoaXMudGlsdC5nZXRBbmdsZXMoKTtcblxuICAgICAgdGhpcy5wYW4udXBkYXRlT2Zmc2V0cyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgYW5nbGVzKTtcbiAgICB9IGVsc2UgaWYgKG1vdXNlV2hlZWxNb3ZlZCkge1xuICAgICAgdGhpcy56b29tLnVwZGF0ZURpc3RhbmNlKG1vdXNlV2hlZWxEZWx0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGlsdC51cGRhdGVBbmdsZXMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKTtcbiAgICB9XG5cbiAgICBjb25zdCBjYW1lcmEgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgYW5nbGVzID0gdGhpcy50aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIHBlcnNpc3QgPSB0aGlzLmRvZXNQZXJzaXN0KCksXG4gICAgICAgICAgb2Zmc2V0cyA9IHRoaXMucGFuLmdldE9mZnNldHMoKSxcbiAgICAgICAgICBkaXN0YW5jZSA9IHRoaXMuem9vbS5nZXREaXN0YW5jZSgpO1xuXG4gICAgaWYgKHBlcnNpc3QpIHtcbiAgICAgIGNvbnN0IGtleSA9IERFU0lHTl9DQU1FUkEsXG4gICAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgICBhbmdsZXMsXG4gICAgICAgICAgICAgIG9mZnNldHMsXG4gICAgICAgICAgICAgIGRpc3RhbmNlXG4gICAgICAgICAgICB9O1xuXG4gICAgICBzZXRKU09OKGtleSwganNvbik7XG4gICAgfVxuXG4gICAgY29uc3Qgb2Zmc2V0c01hdHJpeCA9IG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyhvZmZzZXRzKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA9IHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlKGRpc3RhbmNlKSxcbiAgICAgICAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcyksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IHByb2plY3Rpb25NYXRyaXhGcm9tQ2FtZXJhQW5kQ2FudmFzKGNhbWVyYSwgY2FudmFzKSxcbiAgICAgICAgICBub3JtYWxzTWF0cml4ID0gbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgocm90YXRpb25zTWF0cml4KTtcblxuICAgIHJlbmRlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBwZXJzaXN0ID0gREVGQVVMVF9QRVJTSVNUIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHBhbiA9IHBhbkZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpLFxuICAgICAgICAgIHRpbHQgPSB0aWx0RnJvbVByb3BlcnRpZXMocHJvcGVydGllcyksXG4gICAgICAgICAgem9vbSA9IHpvb21Gcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSxcbiAgICAgICAgICBkZXNpZ25DYW1lcmEgPSBDYW1lcmEuZnJvbVByb3BlcnRpZXMoRGVzaWduQ2FtZXJhLCBwcm9wZXJ0aWVzLCBwYW4sIHRpbHQsIHpvb20sIHBlcnNpc3QpO1xuXG4gICAgcmV0dXJuIGRlc2lnbkNhbWVyYTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYW5Gcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IHsgcGVyc2lzdCA9IERFRkFVTFRfUEVSU0lTVCxcbiAgICAgICAgICBtb3VzZVNlbnNpdGl2aXR5ID0gREVGQVVMVF9NT1VTRV9TRU5TSVRJVklUWSxcbiAgICAgICAgICBtb3VzZVdoZWVsU2Vuc2l0aXZpdHkgPSBERUZBVUxUX01PVVNFX1dIRUVMX1NFTlNJVElWSVRZIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIGxldCB7IGluaXRpYWxPZmZzZXRzID0gREVGQVVMVF9JTklUSUFMX09GRlNFVFMgfSA9IHByb3BlcnRpZXM7XG5cbiAgaWYgKHBlcnNpc3QpIHtcbiAgICBjb25zdCBrZXkgPSBERVNJR05fQ0FNRVJBLCAgLy8vXG4gICAgICAgICAganNvbiA9IGdldEpTT04oa2V5KTtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IG9mZnNldHMgfSA9IGpzb247XG5cbiAgICAgIGluaXRpYWxPZmZzZXRzID0gb2Zmc2V0czsgLy8vXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcGFuID0gUGFuLmZyb21Jbml0aWFsT2Zmc2V0c01vdXNlU2Vuc2l0aXZpdHlBbmRNb3VzZVdoZWVsU2Vuc2l0aXZpdHkoaW5pdGlhbE9mZnNldHMsIG1vdXNlU2Vuc2l0aXZpdHksIG1vdXNlV2hlZWxTZW5zaXRpdml0eSk7XG5cbiAgcmV0dXJuIHBhbjtcbn1cblxuZnVuY3Rpb24gdGlsdEZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgY29uc3QgeyBwZXJzaXN0ID0gREVGQVVMVF9QRVJTSVNUIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIGxldCB7IGluaXRpYWxBbmdsZXMgPSBERUZBVUxUX0lOSVRJQUxfQU5HTEVTIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIGluaXRpYWxBbmdsZXMgPSBzY2FsZTIoaW5pdGlhbEFuZ2xlcywgREVHUkVFU19UT19SQURJQU5TX01VTFRJUExJRVIpOyAvLy9cblxuICBpZiAocGVyc2lzdCkge1xuICAgIGNvbnN0IGtleSA9IERFU0lHTl9DQU1FUkEsICAvLy9cbiAgICAgICAgICBqc29uID0gZ2V0SlNPTihrZXkpO1xuXG4gICAgaWYgKGpzb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgYW5nbGVzIH0gPSBqc29uO1xuXG4gICAgICBpbml0aWFsQW5nbGVzID0gYW5nbGVzOyAvLy9cbiAgICB9XG4gIH1cblxuICBjb25zdCB0aWx0ID0gVGlsdC5mcm9tSW5pdGlhbEFuZ2xlcyhpbml0aWFsQW5nbGVzKTtcblxuICByZXR1cm4gdGlsdDtcbn1cblxuZnVuY3Rpb24gem9vbUZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgY29uc3QgeyBwZXJzaXN0ID0gREVGQVVMVF9QRVJTSVNULCBtb3VzZVdoZWVsU2Vuc2l0aXZpdHkgPSBERUZBVUxUX01PVVNFX1dIRUVMX1NFTlNJVElWSVRZIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIGxldCB7IGluaXRpYWxEaXN0YW5jZSA9IERFRkFVTFRfSU5JVElBTF9ESVNUQU5DRSB9ID0gcHJvcGVydGllcztcblxuICBpZiAocGVyc2lzdCkge1xuICAgIGNvbnN0IGtleSA9IERFU0lHTl9DQU1FUkEsICAvLy9cbiAgICAgICAgICBqc29uID0gZ2V0SlNPTihrZXkpO1xuXG4gICAgaWYgKGpzb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgZGlzdGFuY2UgfSA9IGpzb247XG5cbiAgICAgIGluaXRpYWxEaXN0YW5jZSA9IGRpc3RhbmNlOyAvLy9cbiAgICB9XG4gIH1cblxuICBjb25zdCB6b29tID0gWm9vbS5mcm9tSW5pdGlhbERpc3RhbmNlQW5kTW91c2VXaGVlbFNlbnNpdGl2aXR5KGluaXRpYWxEaXN0YW5jZSwgbW91c2VXaGVlbFNlbnNpdGl2aXR5KTtcblxuICByZXR1cm4gem9vbTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBBTk9OWU1PVVMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJlbG9hZEltYWdlcyhob3N0LCBpbWFnZU5hbWVzLCBpbWFnZURpcmVjdG9yeVVSSSwgY2FsbGJhY2spIHtcbiAgY29uc3QgaW1hZ2VzID0gW10sXG4gICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgaW1hZ2VzXG4gICAgICAgIH07XG5cbiAgZm9yRWFjaChpbWFnZU5hbWVzLCAoaW1hZ2VOYW1lLCBuZXh0LCBkb25lLCBjb250ZXh0KSA9PiB7XG4gICAgY29uc3Qgc3JjID0gYCR7aG9zdH0ke2ltYWdlRGlyZWN0b3J5VVJJfS8ke2ltYWdlTmFtZX1gLFxuICAgICAgICAgIGltYWdlID0gbmV3IEltYWdlKCksXG4gICAgICAgICAgY3Jvc3NPcmlnaW4gPSBBTk9OWU1PVVM7XG5cbiAgT2JqZWN0LmFzc2lnbihpbWFnZSwge1xuICAgICAgc3JjLFxuICAgICAgb25sb2FkLFxuICAgICAgY3Jvc3NPcmlnaW5cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIG9ubG9hZCgpIHtcbiAgICAgIGltYWdlcy5wdXNoKGltYWdlKTtcblxuICAgICAgbmV4dCgpO1xuICAgIH1cbiAgfSwgZG9uZSwgY29udGV4dCk7XG5cbiAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICBjb25zdCB7IGltYWdlcyB9ID0gY29udGV4dDtcblxuICAgIGNhbGxiYWNrKGltYWdlcywgaW1hZ2VOYW1lcyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWRJbWFnZU1hcChob3N0LCBpbWFnZU1hcFVSSSwgaW1hZ2VNYXBKU09OLCBjYWxsYmFjaykge1xuICBjb25zdCBzcmMgPSBgJHtob3N0fSR7aW1hZ2VNYXBVUkl9YCxcbiAgICAgICAgaW1hZ2VNYXAgPSBuZXcgSW1hZ2UoKSxcdC8vL1xuICAgICAgICBjcm9zc09yaWdpbiA9IEFOT05ZTU9VUzsgIC8vL1xuXG4gIE9iamVjdC5hc3NpZ24oaW1hZ2VNYXAsIHtcbiAgICBzcmMsXG4gICAgb25sb2FkLFxuICAgIGNyb3NzT3JpZ2luXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIG9ubG9hZChldmVudCkge1xuICAgIGNhbGxiYWNrKGltYWdlTWFwLCBpbWFnZU1hcEpTT04pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJlbG9hZEltYWdlcyxcbiAgcHJlbG9hZEltYWdlTWFwXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vcm1hbGlzZTMsIHN1YnRyYWN0MywgY3Jvc3MzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3JtYWwge1xuICBjb25zdHJ1Y3RvcihleHRlbnQpIHtcbiAgICB0aGlzLmV4dGVudCA9IGV4dGVudDtcbiAgfVxuXG4gIGdldEV4dGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5leHRlbnQ7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBleHRlbnQgPSBjbG9uZUV4dGVudCh0aGlzLmV4dGVudCksXG4gICAgICAgICAgbm9ybWFsID0gbmV3IE5vcm1hbChleHRlbnQpO1xuXG4gICAgcmV0dXJuIG5vcm1hbDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGljZXModmVydGljZXMpIHtcbiAgICBjb25zdCBmaXJzdFZlcnRleCA9IGZpcnN0KHZlcnRpY2VzKSxcbiAgICAgICAgICBzZWNvbmRWZXJ0ZXggPSBzZWNvbmQodmVydGljZXMpLFxuICAgICAgICAgIHRoaXJkVmVydGV4ID0gdGhpcmQodmVydGljZXMpLFxuICAgICAgICAgIGZpcnN0UG9zaXRpb24gPSBmaXJzdFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHNlY29uZFBvc2l0aW9uID0gc2Vjb25kVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgdGhpcmRQb3NpdGlvbiA9IHRoaXJkVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgZmlyc3RFeHRlbnQgPSBzdWJ0cmFjdDMoc2Vjb25kUG9zaXRpb24sIGZpcnN0UG9zaXRpb24pLFxuICAgICAgICAgIHNlY29uZEV4dGVudCA9IHN1YnRyYWN0Myh0aGlyZFBvc2l0aW9uLCBmaXJzdFBvc2l0aW9uKSxcbiAgICAgICAgICBleHRlbnQgPSBub3JtYWxpc2UzKGNyb3NzMyhmaXJzdEV4dGVudCwgc2Vjb25kRXh0ZW50KSksXG4gICAgICAgICAgbm9ybWFsID0gbmV3IE5vcm1hbChleHRlbnQpO1xuXG4gICAgcmV0dXJuIG5vcm1hbDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbG9uZUV4dGVudChleHRlbnQpIHsgcmV0dXJuIGV4dGVudC5zbGljZSgpOyB9XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHJvdGF0ZVBvc2l0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9yb3RhdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJ0ZXgge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbikge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xuICB9XG5cbiAgcm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbikge1xuICAgIHRoaXMucG9zaXRpb24gPSByb3RhdGVQb3NpdGlvbih0aGlzLnBvc2l0aW9uLCByb3RhdGlvblF1YXRlcm5pb24pO1xuICB9XG5cbiAgYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRyYW5zZm9ybSh0aGlzLnBvc2l0aW9uKTtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5zbGljZSgpLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXggPSBuZXcgVmVydGV4KHBvc2l0aW9uKTtcblxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgY29uc3QgdmVydGV4ID0gbmV3IFZlcnRleChwb3NpdGlvbik7XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Db29yZGluYXRlVHVwbGUoY29vcmRpbmF0ZVR1cGxlKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBjb29yZGluYXRlVHVwbGUuc2xpY2UoKSwgLy8vXG4gICAgICAgICAgdmVydGV4ID0gbmV3IFZlcnRleChwb3NpdGlvbik7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFZFUlRJQ0VTX0xFTkdUSCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgc3VidHJhY3QzLCBjcm9zczMsIGxlbmd0aDMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZUVkZ2VzKGVkZ2VzKSB7XG4gIGVkZ2VzID0gZWRnZXMubWFwKChlZGdlKSA9PiB7XG4gICAgZWRnZSA9IGVkZ2UuY2xvbmUoKTsgIC8vL1xuXG4gICAgcmV0dXJuIGVkZ2U7XG4gIH0pO1xuXG4gIHJldHVybiBlZGdlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lTm9ybWFsKG5vcm1hbCkge1xuICBub3JtYWwgPSBub3JtYWwuY2xvbmUoKTtcbiAgXG4gIHJldHVybiBub3JtYWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gIHZlcnRpY2VzID0gdmVydGljZXMubWFwKCh2ZXJ0ZXgpID0+IHtcbiAgICB2ZXJ0ZXggPSB2ZXJ0ZXguY2xvbmUoKTsgIC8vL1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfSk7XG5cbiAgcmV0dXJuIHZlcnRpY2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpIHtcbiAgY29uc3QgZWRnZXMgPSB2ZXJ0aWNlcy5tYXAoKHZlcnRleCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBzdGFydEluZGV4ID0gaW5kZXgsIC8vL1xuICAgICAgICAgIGVuZEluZGV4ID0gKHN0YXJ0SW5kZXggKyAxKSAlIFZFUlRJQ0VTX0xFTkdUSCxcbiAgICAgICAgICBzdGFydFZlcnRleCA9IHZlcnRpY2VzW3N0YXJ0SW5kZXhdLFxuICAgICAgICAgIGVuZFZlcnRleCA9IHZlcnRpY2VzW2VuZEluZGV4XSxcbiAgICAgICAgICBlZGdlID0gRWRnZS5mcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgoc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCk7XG5cbiAgICByZXR1cm4gZWRnZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGVkZ2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpIHtcbiAgY29uc3Qgbm9ybWFsID0gTm9ybWFsLmZyb21WZXJ0aWNlcyh2ZXJ0aWNlcyk7XG5cbiAgcmV0dXJuIG5vcm1hbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUFyZWEodmVydGljZXMpIHtcbiAgY29uc3QgZmlyc3RWZXJ0ZXggPSBmaXJzdCh2ZXJ0aWNlcyksXG4gICAgICAgIHNlY29uZFZlcnRleCA9IHNlY29uZCh2ZXJ0aWNlcyksXG4gICAgICAgIHRoaXJkVmVydGV4ID0gdGhpcmQodmVydGljZXMpLFxuICAgICAgICBmaXJzdFZlcnRleFBvc2l0aW9uID0gZmlyc3RWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgc2Vjb25kVmVydGV4UG9zaXRpb24gPSBzZWNvbmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgdGhpcmRWZXJ0ZXhQb3NpdGlvbiA9IHRoaXJkVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIGZpcnN0RXh0ZW50ID0gc3VidHJhY3QzKHNlY29uZFZlcnRleFBvc2l0aW9uLCBmaXJzdFZlcnRleFBvc2l0aW9uKSxcbiAgICAgICAgc2Vjb25kRXh0ZW50ID0gc3VidHJhY3QzKHRoaXJkVmVydGV4UG9zaXRpb24sIGZpcnN0VmVydGV4UG9zaXRpb24pLFxuICAgICAgICBhcmVhID0gbGVuZ3RoMyhjcm9zczMoZmlyc3RFeHRlbnQsIHNlY29uZEV4dGVudCkpIC8gMjtcblxuICByZXR1cm4gYXJlYTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4vZWRnZVwiO1xuaW1wb3J0IE5vcm1hbCBmcm9tIFwiLi9ub3JtYWxcIjtcbmltcG9ydCBWZXJ0ZXggZnJvbSBcIi4vdmVydGV4XCI7XG5cbmltcG9ydCB7IGFkZCwgcGVybXV0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFZFUlRJQ0VTX0xFTkdUSCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZUVkZ2VzLCBjYWxjdWxhdGVOb3JtYWwgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2ZhY2V0XCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVNaWRQb2ludFBvc2l0aW9uLCBpc01pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbWlkUG9pbnRcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25zLFxuICAgICAgICAgY2FsY3VsYXRlTnVsbEludGVyc2VjdGlvbkluZGV4LFxuICAgICAgICAgY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbkluZGV4LFxuICAgICAgICAgY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb259IGZyb20gXCIuLi91dGlsaXRpZXMvaW50ZXJzZWN0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMsIG5vcm1hbCwgZWRnZXMpIHtcbiAgICB0aGlzLnZlcnRpY2VzID0gdmVydGljZXM7XG4gICAgdGhpcy5ub3JtYWwgPSBub3JtYWw7XG4gICAgdGhpcy5lZGdlcyA9IGVkZ2VzO1xuICB9XG5cbiAgZ2V0VmVydGljZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGljZXM7XG4gIH1cblxuICBnZXROb3JtYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9ybWFsO1xuICB9XG5cbiAgZ2V0RWRnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWRnZXM7XG4gIH1cbiAgXG4gIGdldFZlcnRleFBvc2l0aW9ucygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnMgPSB0aGlzLnZlcnRpY2VzLm1hcCgodmVydGV4KSA9PiB7XG4gICAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleC5nZXRQb3NpdGlvbigpO1xuXG4gICAgICByZXR1cm4gdmVydGV4UG9zaXRpb247XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleFBvc2l0aW9ucztcbiAgfVxuICBcbiAgZ2V0VmVydGV4Tm9ybWFscygpIHtcbiAgICBjb25zdCBub3JtYWxFeHRlbnQgPSB0aGlzLm5vcm1hbC5nZXRFeHRlbnQoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWwgPSBub3JtYWxFeHRlbnQsICAvLy9cbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gW1xuICAgICAgICAgICAgdmVydGV4Tm9ybWFsLFxuICAgICAgICAgICAgdmVydGV4Tm9ybWFsLFxuICAgICAgICAgICAgdmVydGV4Tm9ybWFsLFxuICAgICAgICAgIF07XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleE5vcm1hbHM7XG4gIH1cbiAgXG4gIGdldFZlcnRleEluZGV4ZXMoaW5kZXgpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbmRleCA9IGluZGV4ICogMyxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzID0gW1xuICAgICAgICAgICAgdmVydGV4SW5kZXggKyAwLFxuICAgICAgICAgICAgdmVydGV4SW5kZXggKyAxLFxuICAgICAgICAgICAgdmVydGV4SW5kZXggKyAyLFxuICAgICAgICAgIF07XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleEluZGV4ZXM7XG4gIH1cblxuICBpc01hc2tlZChtYXNraW5nRmFjZXQpIHtcbiAgICBjb25zdCBtYXNraW5nRWRnZXMgPSBtYXNraW5nRmFjZXQuZ2V0TWFza2luZ0VkZ2VzKCksXG4gICAgICAgICAgbWlkUG9pbnRQb3NpdGlvbiA9IGNhbGN1bGF0ZU1pZFBvaW50UG9zaXRpb24odGhpcy52ZXJ0aWNlcyksXG4gICAgICAgICAgbWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzID0gaXNNaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMobWlkUG9pbnRQb3NpdGlvbiwgbWFza2luZ0VkZ2VzKSxcbiAgICAgICAgICBtYXNrZWQgPSBtaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXM7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gbWFza2VkO1xuICB9XG5cbiAgcGVybXV0ZShwbGFjZXMpIHtcbiAgICB0aGlzLnZlcnRpY2VzID0gcGVybXV0ZSh0aGlzLnZlcnRpY2VzLCBwbGFjZXMpO1xuXG4gICAgdGhpcy5ub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodGhpcy52ZXJ0aWNlcywgTm9ybWFsKTtcblxuICAgIHRoaXMuZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh0aGlzLnZlcnRpY2VzLCBFZGdlKTtcbiAgfVxuXG4gIHJvdGF0ZShyb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgICB0aGlzLnZlcnRpY2VzLmZvckVhY2goKHZlcnRleCkgPT4ge1xuICAgICAgdmVydGV4LnJvdGF0ZShyb3RhdGlvblF1YXRlcm5pb24pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5ub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodGhpcy52ZXJ0aWNlcywgTm9ybWFsKTtcblxuICAgIHRoaXMuZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh0aGlzLnZlcnRpY2VzLCBFZGdlKTtcbiAgfVxuXG4gIGFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCgodmVydGV4KSA9PiB7XG4gICAgICB2ZXJ0ZXguYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKTtcbiAgICB9KTtcblxuICAgIHRoaXMubm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHRoaXMudmVydGljZXMsIE5vcm1hbCk7XG5cbiAgICB0aGlzLmVkZ2VzID0gY2FsY3VsYXRlRWRnZXModGhpcy52ZXJ0aWNlcywgRWRnZSk7XG4gIH1cblxuICBzcGxpdFdpdGhJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBub25OdWxsSW50ZXJzZWN0aW9ucyA9IGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIG5vbk51bGxJbnRlcnNlY3Rpb25zTGVuZ3RoID0gbm9uTnVsbEludGVyc2VjdGlvbnMubGVuZ3RoO1xuXG4gICAgc3dpdGNoIChub25OdWxsSW50ZXJzZWN0aW9uc0xlbmd0aCkge1xuICAgICAgY2FzZSAyIDpcbiAgICAgICAgdGhpcy5zcGxpdFdpdGhUd29Ob25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMSA6XG4gICAgICAgIHRoaXMuc3BsaXRXaXRoT25lTm9uTnVsbEludGVyc2VjdGlvbihpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMCA6XG4gICAgICAgIHRoaXMuc3BsaXRXaXRoTm9Ob25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIFxuICBzcGxpdFdpdGhUd29Ob25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gY2FsY3VsYXRlTnVsbEludGVyc2VjdGlvbkluZGV4KGludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIHBsYWNlcyA9IChWRVJUSUNFU19MRU5HVEggLSBudWxsSW50ZXJzZWN0aW9uSW5kZXgpICUgVkVSVElDRVNfTEVOR1RIO1xuXG4gICAgaW50ZXJzZWN0aW9ucyA9IHBlcm11dGUoaW50ZXJzZWN0aW9ucywgcGxhY2VzKTtcblxuICAgIGludGVyc2VjdGlvbnMgPSBpbnRlcnNlY3Rpb25zLnNsaWNlKDEpOyAvLy9cblxuICAgIHRoaXMucGVybXV0ZShwbGFjZXMpO1xuXG4gICAgY29uc3Qgc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMgPSBbIDEsIDIgXSxcbiAgICAgICAgICBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMgPSBbIDIsIDAgXSxcbiAgICAgICAgICBpbmRleFR1cGxlcyA9IFtcblxuICAgICAgICAgICAgWyAwLCAxLCAzIF0sXG4gICAgICAgICAgICBbIDMsIDQsIDAgXSxcbiAgICAgICAgICAgIFsgMywgMiwgNCBdLFxuXG4gICAgICAgICAgXTtcblxuICAgIHRoaXMuc3BsaXRXaXRoSW5kZXhUdXBsZXNBbmRJbnRlcnNlY3Rpb25zKHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzLCBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGluZGV4VHVwbGVzLCBpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcbiAgfVxuXG4gIHNwbGl0V2l0aE9uZU5vbk51bGxJbnRlcnNlY3Rpb24oaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IG5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBwbGFjZXMgPSAoVkVSVElDRVNfTEVOR1RIIC0gbm9uTnVsbEludGVyc2VjdGlvbkluZGV4KSAlIFZFUlRJQ0VTX0xFTkdUSDtcblxuICAgIGludGVyc2VjdGlvbnMgPSBwZXJtdXRlKGludGVyc2VjdGlvbnMsIHBsYWNlcyk7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gaW50ZXJzZWN0aW9ucy5zbGljZSgwLCAxKTsgIC8vL1xuXG4gICAgdGhpcy5wZXJtdXRlKHBsYWNlcyk7XG5cbiAgICBjb25zdCBzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcyA9IFsgMCBdLFxuICAgICAgICAgIGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlcyA9IFsgMSBdLFxuICAgICAgICAgIGluZGV4VHVwbGVzID0gW1xuXG4gICAgICAgICAgICBbIDAsIDMsIDIgXSxcbiAgICAgICAgICAgIFsgMywgMSwgMiBdLFxuXG4gICAgICAgICAgXTtcblxuICAgIHRoaXMuc3BsaXRXaXRoSW5kZXhUdXBsZXNBbmRJbnRlcnNlY3Rpb25zKHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzLCBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGluZGV4VHVwbGVzLCBpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcbiAgfVxuXG4gIHNwbGl0V2l0aE5vTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IHNtYWxsZXJGYWNldCA9IHRoaXMuZnJvbVZlcnRpY2VzQW5kTWFyZ2luT2ZFcnJvcih0aGlzLnZlcnRpY2VzLCBtYXJnaW5PZkVycm9yKTsgIC8vL1xuXG4gICAgc21hbGxlckZhY2V0cy5wdXNoKHNtYWxsZXJGYWNldCk7XG4gIH1cblxuICBzcGxpdFdpdGhJbmRleFR1cGxlc0FuZEludGVyc2VjdGlvbnMoc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlcywgaW5kZXhUdXBsZXMsIGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnMgPSB0aGlzLmdldFZlcnRleFBvc2l0aW9ucygpLFxuICAgICAgICAgIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9ucyA9IGludGVyc2VjdGlvbnMubWFwKChpbnRlcnNlY3Rpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGFydFZlcnRleFBvc2l0aW9uSW5kZXggPSBzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgICBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ID0gZW5kVmVydGV4UG9zaXRpb25JbmRleGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICAgIHN0YXJ0VmVydGV4UG9zaXRpb24gPSB2ZXJ0ZXhQb3NpdGlvbnNbc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4XSxcbiAgICAgICAgICAgICAgICAgIGVuZFZlcnRleFBvc2l0aW9uID0gdmVydGV4UG9zaXRpb25zW2VuZFZlcnRleFBvc2l0aW9uSW5kZXhdLFxuICAgICAgICAgICAgICAgICAgaW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb24gPSBjYWxjdWxhdGVJbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbihzdGFydFZlcnRleFBvc2l0aW9uLCBlbmRWZXJ0ZXhQb3NpdGlvbiwgaW50ZXJzZWN0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uO1xuICAgICAgICAgIH0pO1xuXG4gICAgYWRkKHZlcnRleFBvc2l0aW9ucywgaW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb25zKTtcblxuICAgIGluZGV4VHVwbGVzLmZvckVhY2goKGluZGV4VHVwbGUpID0+IHtcbiAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IHZlcnRleFBvc2l0aW9ucywgIC8vL1xuICAgICAgICAgICAgaW5kZXhlcyA9IGluZGV4VHVwbGUsICAvLy9cbiAgICAgICAgICAgIGZhY2V0ID0gdGhpcywgXG4gICAgICAgICAgICBzbWFsbGVyRmFjZXQgPSBzbWFsbGVyRmFjZXRGcm9tUG9zaXRpb25zSW5kZXhlc0ZhY2V0QW5kTWFyZ2luT2ZFcnJvcihwb3NpdGlvbnMsIGluZGV4ZXMsIGZhY2V0LCBtYXJnaW5PZkVycm9yKTtcblxuICAgICAgaWYgKHNtYWxsZXJGYWNldCAhPT0gbnVsbCkge1xuICAgICAgICBzbWFsbGVyRmFjZXRzLnB1c2goc21hbGxlckZhY2V0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzbWFsbGVyRmFjZXRGcm9tUG9zaXRpb25zSW5kZXhlc0ZhY2V0QW5kTWFyZ2luT2ZFcnJvcihwb3NpdGlvbnMsIGluZGV4ZXMsIGZhY2V0LCBtYXJnaW5PZkVycm9yKSB7XG4gIGNvbnN0IHZlcnRpY2VzID0gaW5kZXhlcy5tYXAoKGluZGV4KSA9PiB7XG4gICAgICAgICAgbGV0IHBvc2l0aW9uID0gcG9zaXRpb25zW2luZGV4XTtcbiAgICBcbiAgICAgICAgICBwb3NpdGlvbiA9IHBvc2l0aW9uLnNsaWNlKCk7IC8vL1xuICAgIFxuICAgICAgICAgIGNvbnN0IHZlcnRleCA9IFZlcnRleC5mcm9tUG9zaXRpb24ocG9zaXRpb24pO1xuXG4gICAgICAgICAgcmV0dXJuIHZlcnRleDtcbiAgICAgICAgfSksXG4gICAgICAgIHNtYWxsZXJGYWNldCA9IGZhY2V0LmZyb21WZXJ0aWNlc0FuZE1hcmdpbk9mRXJyb3IodmVydGljZXMsIG1hcmdpbk9mRXJyb3IpO1xuXG4gIHJldHVybiBzbWFsbGVyRmFjZXQ7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuLi9lZGdlXCI7XG5pbXBvcnQgRmFjZXQgZnJvbSBcIi4uL2ZhY2V0XCI7XG5pbXBvcnQgTm9ybWFsIGZyb20gXCIuLi9ub3JtYWxcIjtcbmltcG9ydCBWZXJ0ZXggZnJvbSBcIi4uL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXBwcm94aW1hdGVcIjtcbmltcG9ydCB7IHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy92ZXJ0aWNlc1wiO1xuaW1wb3J0IHsgY2xvbmVFZGdlcywgY2xvbmVOb3JtYWwsIGNsb25lVmVydGljZXMsIGNhbGN1bGF0ZUFyZWEsIGNhbGN1bGF0ZUVkZ2VzLCBjYWxjdWxhdGVOb3JtYWwgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2ZhY2V0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG91cmVkRmFjZXQgZXh0ZW5kcyBGYWNldCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCByZ2JhKSB7XG4gICAgc3VwZXIodmVydGljZXMsIG5vcm1hbCwgZWRnZXMpO1xuICAgIFxuICAgIHRoaXMucmdiYSA9IHJnYmE7XG4gIH1cblxuICBnZXRWZXJ0ZXhDb2xvdXJzKCkge1xuICAgIGNvbnN0IHZlcnRleENvbG91ciA9IHRoaXMucmdiYSwgLy8vXG4gICAgICAgICAgdmVydGV4Q29sb3VycyA9IFtcbiAgICAgICAgICAgIHZlcnRleENvbG91cixcbiAgICAgICAgICAgIHZlcnRleENvbG91cixcbiAgICAgICAgICAgIHZlcnRleENvbG91cixcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXhDb2xvdXJzO1xuICB9XG5cbiAgZnJvbVZlcnRpY2VzQW5kTWFyZ2luT2ZFcnJvcih2ZXJ0aWNlcywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGxldCBjb2xvdXJlZEZhY2V0ID0gbnVsbDtcblxuICAgIGNvbnN0IGFyZWEgPSBjYWxjdWxhdGVBcmVhKHZlcnRpY2VzKSxcbiAgICAgICAgICBhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8oYXJlYSwgbWFyZ2luT2ZFcnJvcik7XG5cbiAgICBpZiAoIWFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8pIHtcbiAgICAgIGNvbnN0IG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcywgTm9ybWFsKSxcbiAgICAgICAgICAgIGVkZ2VzID0gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpO1xuXG4gICAgICBjb2xvdXJlZEZhY2V0ID0gbmV3IENvbG91cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIHRoaXMucmdiYSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbG91cmVkRmFjZXQ7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBsZXQgdmVydGljZXMgPSB0aGlzLmdldFZlcnRpY2VzKCksXG4gICAgICAgIG5vcm1hbCA9IHRoaXMuZ2V0Tm9ybWFsKCksXG4gICAgICAgIGVkZ2VzID0gdGhpcy5nZXRFZGdlcygpO1xuXG4gICAgdmVydGljZXMgPSBjbG9uZVZlcnRpY2VzKHZlcnRpY2VzKTtcbiAgICBub3JtYWwgPSBjbG9uZU5vcm1hbChub3JtYWwpO1xuICAgIGVkZ2VzID0gY2xvbmVFZGdlcyhlZGdlcyk7XG5cbiAgICBjb25zdCBjb2xvdXJlZEZhY2V0ID0gbmV3IENvbG91cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIHRoaXMucmdiYSk7XG5cbiAgICByZXR1cm4gY29sb3VyZWRGYWNldDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29vcmRpbmF0ZVR1cGxlc0luZGV4VHVwbGVDb2xvdXJBbmRNYXJnaW5PZkVycm9yKGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIGNvbG91ciwgbWFyZ2luT2ZFcnJvcikge1xuICAgIGxldCBjb2xvdXJlZEZhY2V0ID0gbnVsbDtcblxuICAgIGNvbnN0IHZlcnRpY2VzID0gdmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGUoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgVmVydGV4KSxcbiAgICAgICAgICBhcmVhID0gY2FsY3VsYXRlQXJlYSh2ZXJ0aWNlcyksXG4gICAgICAgICAgYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybyA9IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKGFyZWEsIG1hcmdpbk9mRXJyb3IpO1xuXG4gICAgaWYgKCFhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKSB7XG4gICAgICBjb25zdCBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCksXG4gICAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKSxcbiAgICAgICAgICAgIHJnYmEgPSBbIC4uLmNvbG91ciwgMSBdOyAgLy8vXG5cbiAgICAgIGNvbG91cmVkRmFjZXQgPSBuZXcgQ29sb3VyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgcmdiYSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbG91cmVkRmFjZXQ7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENhbnZhc0VsZW1lbnQgZnJvbSBcIi4uLy4uL2VsZW1lbnQvY2FudmFzXCI7XG5pbXBvcnQgQ29sb3VyZWRGYWNldCBmcm9tIFwiLi4vLi4vcHJpbWl0aXZlL2ZhY2V0L2NvbG91cmVkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG91cmVkQ2FudmFzRWxlbWVudCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihtYXNrUmVmZXJlbmNlLCB0cmFuc2Zvcm0sIGZhY2V0cywgbWFza3MsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBjb2xvdXIpIHtcbiAgICBzdXBlcihtYXNrUmVmZXJlbmNlLCB0cmFuc2Zvcm0sIGZhY2V0cywgbWFza3MpO1xuXG4gICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICAgIHRoaXMuaW5kZXhlcyA9IGluZGV4ZXM7XG4gICAgdGhpcy5jb2xvdXIgPSBjb2xvdXI7XG4gIH1cblxuICBjcmVhdGVGYWNldHMobWFyZ2luT2ZFcnJvcikge1xuICAgIHN1cGVyLmNyZWF0ZUZhY2V0cyhtYXJnaW5PZkVycm9yKTtcblxuICAgIGNvbnN0IGluZGV4VHVwbGVzID0gdGhpcy5pbmRleGVzLCAgLy8vXG4gICAgICAgICAgZmFjZXRzID0gaW5kZXhUdXBsZXMucmVkdWNlKChmYWNldHMsIGluZGV4VHVwbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGVUdXBsZXMgPSB0aGlzLmNvb3JkaW5hdGVzLCAvLy9cbiAgICAgICAgICAgICAgICAgIGNvbG91cmVkRmFjZXQgPSBDb2xvdXJlZEZhY2V0LmZyb21Db29yZGluYXRlVHVwbGVzSW5kZXhUdXBsZUNvbG91ckFuZE1hcmdpbk9mRXJyb3IoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgdGhpcy5jb2xvdXIsIG1hcmdpbk9mRXJyb3IpLFxuICAgICAgICAgICAgICAgICAgZmFjZXQgPSBjb2xvdXJlZEZhY2V0OyAgLy8vXG5cbiAgICAgICAgICAgIGlmIChmYWNldCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBmYWNldHMucHVzaChmYWNldCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWNldHM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgdGhpcy5zZXRGYWNldHMoZmFjZXRzKTtcbiAgfVxuXG4gIGFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKTtcblxuICAgIGNvbG91clJlbmRlcmVyLmFkZEZhY2V0cyhmYWNldHMpO1xuXG4gICAgc3VwZXIuYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgY29sb3VyLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBjb2xvdXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7IH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcm90YXRlVmVydGljZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3ZlcnRpY2VzXCI7XG5pbXBvcnQgeyBpbnZlcnQyLCBpbnZlcnQzIH0gZnJvbSBcIi4uL21hdGhzL21hdHJpeFwiO1xuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCwgdGhpcmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVBcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1YXRlcm5pb25cIjtcbmltcG9ydCB7IGFkZDIsIG11bHRpcGx5MiwgdHJhbnNmb3JtMiwgdHJhbnNmb3JtMyB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpIHtcbiAgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcy5tYXAoKHRleHR1cmVDb29yZGluYXRlVHVwbGUpID0+IHtcbiAgICB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlID0gdGV4dHVyZUNvb3JkaW5hdGVUdXBsZS5zbGljZSgpOyAgLy8vXG5cbiAgICByZXR1cm4gdGV4dHVyZUNvb3JkaW5hdGVUdXBsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRleHR1cmVDb29yZGluYXRlVHVwbGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlTWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGV4dGVudCkge1xuICBjb25zdCB7IGxlZnQsIGJvdHRvbSwgd2lkdGgsIGhlaWdodCB9ID0gZXh0ZW50LFxuICAgICAgICBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVDb29yZGluYXRlVHVwbGVzLm1hcCgodGV4dHVyZUNvb3JkaW5hdGVUdXBsZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGUgPSBhZGQyKG11bHRpcGx5Mih0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlLCBbIHdpZHRoLCBoZWlnaHQgXSApLCBbIGxlZnQsIGJvdHRvbSBdKTtcblxuICAgICAgICAgIHJldHVybiBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHZlcnRpY2VzLCBub3JtYWwsIHBhcmVudFZlcnRpY2VzLCB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcykge1xuICBjb25zdCBhcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVBcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24obm9ybWFsKSxcbiAgICAgICAgcm90YXRpb25RdWF0ZXJuaW9uID0gYXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uOyAvLy9cblxuICBjb25zdCByb3RhdGVkVmVydGljZXMgPSByb3RhdGVWZXJ0aWNlcyh2ZXJ0aWNlcywgcm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICBwYXJlbnRWZXJ0aWNlcyA9IHJvdGF0ZVZlcnRpY2VzKHBhcmVudFZlcnRpY2VzLCByb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gIHZlcnRpY2VzID0gcm90YXRlZFZlcnRpY2VzOyAgLy8vXG5cbiAgY29uc3QgZmlyc3RWZXJ0ZXggPSBmaXJzdCh2ZXJ0aWNlcyksXG4gICAgICAgIHNlY29uZFZlcnRleCA9IHNlY29uZCh2ZXJ0aWNlcyksXG4gICAgICAgIHRoaXJkVmVydGV4ID0gdGhpcmQodmVydGljZXMpLFxuICAgICAgICBmaXJzdFBhcmVudFZlcnRleCA9IGZpcnN0KHBhcmVudFZlcnRpY2VzKSxcbiAgICAgICAgc2Vjb25kUGFyZW50VmVydGV4ID0gc2Vjb25kKHBhcmVudFZlcnRpY2VzKSxcbiAgICAgICAgdGhpcmRQYXJlbnRWZXJ0ZXggPSB0aGlyZChwYXJlbnRWZXJ0aWNlcyksXG4gICAgICAgIGZpcnN0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZSA9IGZpcnN0KHRleHR1cmVDb29yZGluYXRlVHVwbGVzKSxcbiAgICAgICAgc2Vjb25kVGV4dHVyZUNvb3JkaW5hdGVUdXBsZSA9IHNlY29uZCh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyksXG4gICAgICAgIHRoaXJkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZSA9IHRoaXJkKHRleHR1cmVDb29yZGluYXRlVHVwbGVzKSxcbiAgICAgICAgZmlyc3RWZXJ0ZXhQb3NpdGlvbiA9IGZpcnN0VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIHNlY29uZFZlcnRleFBvc2l0aW9uID0gc2Vjb25kVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIHRoaXJkVmVydGV4UG9zaXRpb24gPSB0aGlyZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICBmaXJzdFBhcmVudFZlcnRleFBvc2l0aW9uID0gZmlyc3RQYXJlbnRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgc2Vjb25kUGFyZW50VmVydGV4UG9zaXRpb24gPSBzZWNvbmRQYXJlbnRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgdGhpcmRQYXJlbnRWZXJ0ZXhQb3NpdGlvbiA9IHRoaXJkUGFyZW50VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIFIxeCA9IGZpcnN0VmVydGV4UG9zaXRpb25bMF0sICAvLy9cbiAgICAgICAgUjF5ID0gZmlyc3RWZXJ0ZXhQb3NpdGlvblsxXSwgIC8vL1xuICAgICAgICBSMnggPSBzZWNvbmRWZXJ0ZXhQb3NpdGlvblswXSwgLy8vXG4gICAgICAgIFIyeSA9IHNlY29uZFZlcnRleFBvc2l0aW9uWzFdLCAvLy9cbiAgICAgICAgUjN4ID0gdGhpcmRWZXJ0ZXhQb3NpdGlvblswXSwgIC8vL1xuICAgICAgICBSM3kgPSB0aGlyZFZlcnRleFBvc2l0aW9uWzFdLCAgLy8vXG4gICAgICAgIFAxeCA9IGZpcnN0UGFyZW50VmVydGV4UG9zaXRpb25bMF0sIC8vL1xuICAgICAgICBQMnggPSBzZWNvbmRQYXJlbnRWZXJ0ZXhQb3NpdGlvblswXSwgLy8vXG4gICAgICAgIFAzeCA9IHRoaXJkUGFyZW50VmVydGV4UG9zaXRpb25bMF0sIC8vL1xuICAgICAgICBQMXkgPSBmaXJzdFBhcmVudFZlcnRleFBvc2l0aW9uWzFdLCAvLy9cbiAgICAgICAgUDJ5ID0gc2Vjb25kUGFyZW50VmVydGV4UG9zaXRpb25bMV0sIC8vL1xuICAgICAgICBQM3kgPSB0aGlyZFBhcmVudFZlcnRleFBvc2l0aW9uWzFdLCAvLy9cbiAgICAgICAgUDF1ID0gZmlyc3RUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlWzBdLCAvLy9cbiAgICAgICAgUDF2ID0gZmlyc3RUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlWzFdLCAvLy9cbiAgICAgICAgUDJ1ID0gc2Vjb25kVGV4dHVyZUNvb3JkaW5hdGVUdXBsZVswXSwgLy8vXG4gICAgICAgIFAydiA9IHNlY29uZFRleHR1cmVDb29yZGluYXRlVHVwbGVbMV0sIC8vL1xuICAgICAgICBQM3UgPSB0aGlyZFRleHR1cmVDb29yZGluYXRlVHVwbGVbMF0sIC8vL1xuICAgICAgICBQM3YgPSB0aGlyZFRleHR1cmVDb29yZGluYXRlVHVwbGVbMV0sIC8vL1xuICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZXNNYXRyaXggPSBpbnZlcnQzKFsgMSwgMSwgMSwgUDF1LCBQMnUsIFAzdSwgUDF2LCBQMnYsIFAzdiBdKSxcbiAgICAgICAgZmlyc3RUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50ID0gdHJhbnNmb3JtMyhbIFAxeCwgUDJ4LCBQM3ggXSwgdGV4dHVyZUNvb3JkaW5hdGVzTWF0cml4KSxcbiAgICAgICAgc2Vjb25kVHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudCA9IHRyYW5zZm9ybTMoWyBQMXksIFAyeSwgUDN5IF0sIHRleHR1cmVDb29yZGluYXRlc01hdHJpeCksXG4gICAgICAgIE94ID0gZmlyc3RUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50WzBdLCAgLy8vXG4gICAgICAgIFV4ID0gZmlyc3RUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50WzFdLCAgLy8vXG4gICAgICAgIFZ4ID0gZmlyc3RUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50WzJdLCAgLy8vXG4gICAgICAgIE95ID0gc2Vjb25kVHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudFswXSwgIC8vL1xuICAgICAgICBVeSA9IHNlY29uZFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnRbMV0sICAvLy9cbiAgICAgICAgVnkgPSBzZWNvbmRUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50WzJdLCAgLy8vXG4gICAgICAgIHRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNNYXRyaXggPSBpbnZlcnQyKFsgVXgsIFV5LCBWeCwgVnkgXSksXG4gICAgICAgIGZpcnN0QWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZSA9IHRyYW5zZm9ybTIoWyBSMXggLSBPeCwgUjF5IC0gT3kgXSwgdHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc01hdHJpeCksXG4gICAgICAgIHNlY29uZEFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGUgPSB0cmFuc2Zvcm0yKFsgUjJ4IC0gT3gsIFIyeSAtIE95IF0sIHRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNNYXRyaXgpLFxuICAgICAgICB0aGlyZEFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGUgPSB0cmFuc2Zvcm0yKFsgUjN4IC0gT3gsIFIzeSAtIE95IF0sIHRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNNYXRyaXgpLFxuICAgICAgICBhZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGUgPSBbXG4gICAgICAgICAgZmlyc3RBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlLFxuICAgICAgICAgIHNlY29uZEFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGUsXG4gICAgICAgICAgdGhpcmRBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlLFxuICAgICAgICBdO1xuXG4gIHJldHVybiBhZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGU7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuLi9lZGdlXCI7XG5pbXBvcnQgRmFjZXQgZnJvbSBcIi4uL2ZhY2V0XCI7XG5pbXBvcnQgTm9ybWFsIGZyb20gXCIuLi9ub3JtYWxcIjtcbmltcG9ydCBWZXJ0ZXggZnJvbSBcIi4uL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyBwZXJtdXRlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FwcHJveGltYXRlXCI7XG5pbXBvcnQgeyB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdmVydGljZXNcIjtcbmltcG9ydCB7IGNsb25lRWRnZXMsIGNsb25lTm9ybWFsLCBjbG9uZVZlcnRpY2VzLCBjYWxjdWxhdGVBcmVhLCBjYWxjdWxhdGVFZGdlcywgY2FsY3VsYXRlTm9ybWFsIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9mYWNldFwiO1xuaW1wb3J0IHsgY2xvbmVUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgY2FsY3VsYXRlTWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGNhbGN1bGF0ZUFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3RleHR1cmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZWRGYWNldCBleHRlbmRzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpIHtcbiAgICBzdXBlcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcyk7XG5cbiAgICB0aGlzLmltYWdlTmFtZSA9IGltYWdlTmFtZTtcblxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcbiAgfVxuXG4gIGdldEltYWdlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbWFnZU5hbWU7XG4gIH1cblxuICBnZXRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcbiAgfVxuXG4gIGdldE1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzKGltYWdlTWFwSlNPTikge1xuICAgIGNvbnN0IGpzb24gPSBpbWFnZU1hcEpTT05bdGhpcy5pbWFnZU5hbWVdLFxuICAgICAgICAgIGV4dGVudCA9IGpzb24sICAvLy9cbiAgICAgICAgICBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IGNhbGN1bGF0ZU1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGV4dGVudCk7XG5cbiAgICByZXR1cm4gbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7XG4gIH1cblxuICBwZXJtdXRlKHBsYWNlcykge1xuICAgIHN1cGVyLnBlcm11dGUocGxhY2VzKTtcblxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBwZXJtdXRlKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIHBsYWNlcyk7XG4gIH1cblxuICBmcm9tVmVydGljZXNBbmRNYXJnaW5PZkVycm9yKHZlcnRpY2VzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgbGV0IHRleHR1cmVkRmFjZXQgPSBudWxsO1xuXG4gICAgY29uc3QgYXJlYSA9IGNhbGN1bGF0ZUFyZWEodmVydGljZXMpLFxuICAgICAgICAgIGFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhhcmVhLCBtYXJnaW5PZkVycm9yKTtcblxuICAgIGlmICghYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybykge1xuICAgICAgY29uc3Qgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgICAgcGFyZW50VmVydGljZXMgPSB0aGlzLnZlcnRpY2VzLCAvLy9cbiAgICAgICAgICAgIGFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZSA9IGNhbGN1bGF0ZUFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModmVydGljZXMsIG5vcm1hbCwgcGFyZW50VmVydGljZXMsIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpLFxuICAgICAgICAgICAgZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSksXG4gICAgICAgICAgICBpbWFnZU5hbWUgPSB0aGlzLmltYWdlTmFtZSxcbiAgICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gYWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlOyAgLy8vXG5cbiAgICAgIHRleHR1cmVkRmFjZXQgPSBuZXcgVGV4dHVyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBsZXQgdmVydGljZXMgPSB0aGlzLmdldFZlcnRpY2VzKCksXG4gICAgICAgIG5vcm1hbCA9IHRoaXMuZ2V0Tm9ybWFsKCksXG4gICAgICAgIGVkZ2VzID0gdGhpcy5nZXRFZGdlcygpO1xuXG4gICAgdmVydGljZXMgPSBjbG9uZVZlcnRpY2VzKHZlcnRpY2VzKTtcbiAgICBub3JtYWwgPSBjbG9uZU5vcm1hbChub3JtYWwpO1xuICAgIGVkZ2VzID0gY2xvbmVFZGdlcyhlZGdlcyk7XG5cbiAgICBjb25zdCBpbWFnZU5hbWUgPSB0aGlzLmltYWdlTmFtZSwgLy8vXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBjbG9uZVRleHR1cmVDb29yZGluYXRlVHVwbGVzKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpLFxuICAgICAgICAgIHRleHR1cmVkRmFjZXQgPSBuZXcgVGV4dHVyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG5cbiAgICByZXR1cm4gdGV4dHVyZWRGYWNldDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXNDb29yZGluYXRlc1R1cGxlc0luZGV4VHVwbGVJbWFnZU5hbWVBbmRNYXJnaW5PZkVycm9yKHRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCBpbWFnZU5hbWUsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBsZXQgdGV4dHVyZWRGYWNldCA9IG51bGw7XG5cbiAgICBjb25zdCB2ZXJ0aWNlcyA9IHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlKGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIFZlcnRleCksXG4gICAgICAgICAgYXJlYSA9IGNhbGN1bGF0ZUFyZWEodmVydGljZXMpLFxuICAgICAgICAgIGFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhhcmVhLCBtYXJnaW5PZkVycm9yKTtcblxuICAgIGlmICghYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybykge1xuICAgICAgY29uc3Qgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgICAgZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSk7XG5cbiAgICAgIHRleHR1cmVkRmFjZXQgPSBuZXcgVGV4dHVyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENhbnZhc0VsZW1lbnQgZnJvbSBcIi4uLy4uL2VsZW1lbnQvY2FudmFzXCI7XG5pbXBvcnQgVGV4dHVyZWRGYWNldCBmcm9tIFwiLi4vLi4vcHJpbWl0aXZlL2ZhY2V0L3RleHR1cmVkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHR1cmVkQ2FudmFzRWxlbWVudCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihtYXNrUmVmZXJlbmNlLCB0cmFuc2Zvcm0sIGZhY2V0cywgbWFza3MsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcykge1xuICAgIHN1cGVyKG1hc2tSZWZlcmVuY2UsIHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrcyk7XG5cbiAgICB0aGlzLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG4gICAgdGhpcy5pbmRleGVzID0gaW5kZXhlcztcbiAgICB0aGlzLmltYWdlTmFtZSA9IGltYWdlTmFtZTtcbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlcyA9IHRleHR1cmVDb29yZGluYXRlcztcbiAgfVxuXG4gIGNyZWF0ZUZhY2V0cyhtYXJnaW5PZkVycm9yKSB7XG4gICAgc3VwZXIuY3JlYXRlRmFjZXRzKG1hcmdpbk9mRXJyb3IpO1xuXG4gICAgY29uc3QgaW5kZXhUdXBsZXMgPSB0aGlzLmluZGV4ZXMsICAvLy9cbiAgICAgICAgICBmYWNldHMgPSBpbmRleFR1cGxlcy5yZWR1Y2UoKGZhY2V0cywgaW5kZXhUdXBsZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0aGlzLnRleHR1cmVDb29yZGluYXRlc1tpbmRleF0sIC8vL1xuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlVHVwbGVzID0gdGhpcy5jb29yZGluYXRlcywgLy8vXG4gICAgICAgICAgICAgICAgICAgIHRleHR1cmVkRmFjZXQgPSBUZXh0dXJlZEZhY2V0LmZyb21UZXh0dXJlQ29vcmRpbmF0ZVR1cGxlc0Nvb3JkaW5hdGVzVHVwbGVzSW5kZXhUdXBsZUltYWdlTmFtZUFuZE1hcmdpbk9mRXJyb3IodmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIHRoaXMuaW1hZ2VOYW1lLCBtYXJnaW5PZkVycm9yKSxcbiAgICAgICAgICAgICAgICAgICAgZmFjZXQgPSB0ZXh0dXJlZEZhY2V0OyAgLy8vXG5cbiAgICAgICAgICAgIGlmIChmYWNldCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBmYWNldHMucHVzaChmYWNldCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWNldHM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgdGhpcy5zZXRGYWNldHMoZmFjZXRzKTtcbiAgfVxuXG4gIGFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKTtcblxuICAgIHRleHR1cmVSZW5kZXJlci5hZGRGYWNldHMoZmFjZXRzKTtcblxuICAgIHN1cGVyLmFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTsgfVxufVxuIiwgIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYW52YXMgfSBmcm9tIFwiLi9jYW52YXNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmVhY3QgfSBmcm9tIFwiLi9yZWFjdFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXNrIH0gZnJvbSBcIi4vZWxlbWVudC9tYXNrXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBhcnQgfSBmcm9tIFwiLi9lbGVtZW50L3BhcnRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2NlbmUgfSBmcm9tIFwiLi9lbGVtZW50L3NjZW5lXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENhbWVyYSB9IGZyb20gXCIuL2VsZW1lbnQvY2FtZXJhXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEdhbWluZ0NhbWVyYSB9IGZyb20gXCIuL2VsZW1lbnQvY2FtZXJhL2dhbWluZ1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEZXNpZ25DYW1lcmEgfSBmcm9tIFwiLi9lbGVtZW50L2NhbWVyYS9kZXNpZ25cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FudmFzRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnQvY2FudmFzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHByZWxvYWRVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvcHJlbG9hZFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb2xvdXJlZENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50L2NhbnZhcy90ZXh0dXJlZFwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIHZlY3Rvck1hdGhzIH0gZnJvbSBcIi4vbWF0aHMvdmVjdG9yXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG1hdHJpeE1hdGhzIH0gZnJvbSBcIi4vbWF0aHMvbWF0cml4XCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENvbG91cmVkQ2FudmFzRWxlbWVudCB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAvLy9cblxuY29uc3QgY29vcmRpbmF0ZXMgPSBbXG5cbiAgICAgICAgWyAwLCAwLCAwIF0sXG4gICAgICAgIFsgMSwgMCwgMCBdLFxuICAgICAgICBbIDAsIDEsIDAgXSxcbiAgICAgICAgWyAxLCAxLCAwIF0sXG5cbiAgICAgIF0sXG4gICAgICBpbmRleGVzID0gW1xuXG4gICAgICAgIFsgMCwgMSwgMyBdLFxuICAgICAgICBbIDMsIDIsIDAgXSxcblxuICAgICAgXSxcbiAgICAgIGRlZmF1bHRDb2xvdXIgPSBbIDEsIDAsIDAgXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3VyZWRTcXVhcmUgZXh0ZW5kcyBDb2xvdXJlZENhbnZhc0VsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICBcdGNvbnN0IHsgY29sb3VyID0gZGVmYXVsdENvbG91ciB9ID0gcHJvcGVydGllcyxcblx0XHRcdCAgICBjb2xvdXJlZFNxdWFyZSA9IENvbG91cmVkQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDb2xvdXJlZFNxdWFyZSwgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGNvbG91cik7XG5cbiAgXHRyZXR1cm4gY29sb3VyZWRTcXVhcmU7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbG91cmVkU3F1YXJlIGZyb20gXCIuL2NvbG91cmVkU3F1YXJlXCI7XG5cbmNvbnN0IEZhY2UgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IGNvbG91ciB9ID0gcHJvcGVydGllcztcblxuICByZXR1cm4gKFxuXG4gICAgPENvbG91cmVkU3F1YXJlIGNvbG91cj17Y29sb3VyfSBwb3NpdGlvbj17WyAtMC41LCAtMC41LCArMC41IF19IC8+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZhY2U7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBGYWNlIGZyb20gXCIuL2ZhY2VcIjtcblxuY29uc3QgZGVmYXVsdENvbG91ciA9IFsgMSwgMSwgMCBdO1xuXG5jb25zdCBDdWJlID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBjb2xvdXIgPSBkZWZhdWx0Q29sb3VyIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIHJldHVybiAoW1xuXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAgIDAsICAgMCwgMCBdfSAvPixcbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbICs5MCwgICAwLCAwIF19IC8+LFxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgICAwLCArOTAsIDAgXX0gLz4sXG5cbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbIDE4MCwgICAwLCAwIF19IC8+LFxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgLTkwLCAgIDAsIDAgXX0gLz4sXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAgIDAsIC05MCwgMCBdfSAvPixcblxuICBdKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1YmU7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENhbnZhcywgU2NlbmUsIFBhcnQsIERlc2lnbkNhbWVyYSB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBDdWJlIGZyb20gXCIuL2VsZW1lbnQvY3ViZVwiO1xuXG5jb25zdCBjdWJlRXhhbXBsZSA9ICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gIHJldHVybiAoXG5cbiAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9ID5cbiAgICAgIDxQYXJ0PlxuICAgICAgICA8Q3ViZSBjb2xvdXI9e1sgMCwgMSwgMCBdfSAvPlxuICAgICAgPC9QYXJ0PlxuICAgICAgPERlc2lnbkNhbWVyYSBwZXJzaXN0IC8+XG4gICAgPC9TY2VuZT5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3ViZUV4YW1wbGU7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFRleHR1cmVkQ2FudmFzRWxlbWVudCB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAvLy9cblxuY29uc3QgY29vcmRpbmF0ZXMgPSBbXG5cbiAgICAgICAgWyAwLCAwLCAwIF0sXG4gICAgICAgIFsgMSwgMCwgMCBdLFxuICAgICAgICBbIDAsIDEsIDAgXSxcbiAgICAgICAgWyAxLCAxLCAwIF0sXG5cbiAgICAgIF0sXG4gICAgICBpbmRleGVzID0gW1xuXG4gICAgICAgIFsgMCwgMSwgMyBdLFxuICAgICAgICBbIDMsIDIsIDAgXSxcblxuICAgICAgXSxcbiAgICAgIGRlZmF1bHRJbWFnZU5hbWUgPSBcInBsYXN0ZXIuanBnXCIsXG4gICAgICBkZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzID0gW1xuXG4gICAgICAgIFsgWyAwLCAwIF0sIFsgMiwgMCBdLCBbIDIsIDIgXSBdLFxuICAgICAgICBbIFsgMiwgMiBdLCBbIDAsIDIgXSwgWyAwLCAwIF0gXSxcblxuICAgICAgXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZWRRdWFkcmFuZ2xlIGV4dGVuZHMgVGV4dHVyZWRDYW52YXNFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGltYWdlTmFtZSA9IGRlZmF1bHRJbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcyA9IGRlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdGV4dHVyZWRRdWFkcmFuZ2xlID0gVGV4dHVyZWRDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFRleHR1cmVkUXVhZHJhbmdsZSwgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiB0ZXh0dXJlZFF1YWRyYW5nbGU7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ2FudmFzLCBTY2VuZSwgUGFydCwgTWFzaywgRGVzaWduQ2FtZXJhLCBwcmVsb2FkVXRpbGl0aWVzIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IENvbG91cmVkU3F1YXJlIGZyb20gXCIuL2VsZW1lbnQvY29sb3VyZWRTcXVhcmVcIjtcbmltcG9ydCBUZXh0dXJlZFF1YWRyYW5nbGUgZnJvbSBcIi4vZWxlbWVudC90ZXh0dXJlZFF1YWRyYW5nbGVcIjtcblxuY29uc3QgeyBwcmVsb2FkSW1hZ2VzIH0gPSBwcmVsb2FkVXRpbGl0aWVzLFxuICAgICAgeyBob3N0LCBpbWFnZU5hbWVzLCBpbWFnZURpcmVjdG9yeVVSSSB9ID0gZ2xvYmFsVGhpcztcblxuY29uc3QgdGlsaW5nRXhhbXBsZSA9ICgpID0+IHtcbiAgcHJlbG9hZEltYWdlcyhob3N0LCBpbWFnZU5hbWVzLCBpbWFnZURpcmVjdG9yeVVSSSwgKGltYWdlcywgaW1hZ2VOYW1lcykgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxTY2VuZSBjYW52YXM9e2NhbnZhc30gPlxuICAgICAgICA8UGFydCBpbWFnZXM9e2ltYWdlc30gaW1hZ2VOYW1lcz17aW1hZ2VOYW1lc30gaW1hZ2VUaWxpbmcgPlxuICAgICAgICAgIDxNYXNrIHJlZmVyZW5jZT1cIm1hc2tcIj5cbiAgICAgICAgICAgIDxDb2xvdXJlZFNxdWFyZSBzY2FsZT17WyAwLjI1LCAwLjI1LCAxIF19IHBvc2l0aW9uPXtbIDAuMTI1LCAwLjEyNSwgMC4xMjUgXX0gLz5cbiAgICAgICAgICA8L01hc2s+XG4gICAgICAgICAgPFRleHR1cmVkUXVhZHJhbmdsZSBwb3NpdGlvbj17WyAwLCAwLCAwIF19IGltYWdlTmFtZT1cImZsb29yYm9hcmRzLmpwZ1wiIG1hc2tSZWZlcmVuY2U9XCJtYXNrXCIgLz5cbiAgICAgICAgICA8VGV4dHVyZWRRdWFkcmFuZ2xlIHBvc2l0aW9uPXtbIC0wLjUsIC0wLjUsIC0wLjUgXX0gaW1hZ2VOYW1lPVwicGF2aW5nLmpwZ1wiIG1hc2tSZWZlcmVuY2U9XCJtYXNrXCIgLz5cbiAgICAgICAgPC9QYXJ0PlxuICAgICAgICA8RGVzaWduQ2FtZXJhLz5cbiAgICAgIDwvU2NlbmU+XG5cbiAgICApO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRpbGluZ0V4YW1wbGU7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENhbnZhcywgU2NlbmUsIFBhcnQsIERlc2lnbkNhbWVyYSB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBDb2xvdXJlZFNxdWFyZSBmcm9tIFwiLi9lbGVtZW50L2NvbG91cmVkU3F1YXJlXCI7XG5cbmNvbnN0IHNpbXBsZUV4YW1wbGUgPSAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuICByZXR1cm4gKFxuXG4gICAgPFNjZW5lIGNhbnZhcz17Y2FudmFzfT5cbiAgICAgIDxQYXJ0PlxuICAgICAgICA8Q29sb3VyZWRTcXVhcmUgY29sb3VyPXtbIDAsIDAsIDEgXX0gLz5cbiAgICAgIDwvUGFydD5cbiAgICAgIDxEZXNpZ25DYW1lcmEvPlxuICAgIDwvU2NlbmU+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNpbXBsZUV4YW1wbGU7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENhbnZhcywgU2NlbmUsIE1hc2ssIFBhcnQsIERlc2lnbkNhbWVyYSB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBDdWJlIGZyb20gXCIuL2VsZW1lbnQvY3ViZVwiO1xuXG5jb25zdCBtYXNraW5nRXhhbXBsZSA9ICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gIHJldHVybiAoXG5cbiAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgICAgPFBhcnQ+XG4gICAgICAgIDxNYXNrIHJlZmVyZW5jZT1cInF1YXJ0ZXItc2l6ZWQtY3ViZVwiPlxuICAgICAgICAgIDxDdWJlIHNjYWxlPXtbIDEvNCwgMS80LCAxLzQgXX0gLz5cbiAgICAgICAgPC9NYXNrPlxuICAgICAgICA8TWFzayByZWZlcmVuY2U9XCJoYWxmLXNpemVkLWN1YmVcIj5cbiAgICAgICAgICA8Q3ViZSBzY2FsZT17WyAxLzIsIDEvMiwgMS8yIF19IG1hc2tSZWZlcmVuY2U9XCJxdWFydGVyLXNpemVkLWN1YmVcIi8+XG4gICAgICAgIDwvTWFzaz5cbiAgICAgICAgPEN1YmUgbWFza1JlZmVyZW5jZT1cImhhbGYtc2l6ZWQtY3ViZVwiIC8+XG4gICAgICA8L1BhcnQ+XG4gICAgICA8RGVzaWduQ2FtZXJhLz5cbiAgICA8L1NjZW5lPlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYXNraW5nRXhhbXBsZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVGV4dHVyZWRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7IC8vL1xuXG5jb25zdCBjb29yZGluYXRlcyA9IFtcblxuICAgICAgICBbICAgMCwgMCwgMCBdLFxuICAgICAgICBbICAgMSwgMCwgMCBdLFxuICAgICAgICBbIDAuNSwgMSwgMCBdLFxuXG4gICAgICBdLFxuICAgICAgaW5kZXhlcyA9IFtcblxuICAgICAgICBbIDAsIDEsIDIgXSxcblxuICAgICAgXSxcbiAgICAgIGRlZmF1bHRJbWFnZU5hbWUgPSBcInN0cmlwZXMuanBnXCIsXG4gICAgICBkZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzID0gW1xuXG4gICAgICAgIFsgWyAwLCAwIF0sIFsgMSwgMCBdLCBbIDAuNSwgMSBdIF0sXG5cbiAgICAgIF07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHR1cmVkVHJpYW5nbGUgZXh0ZW5kcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW1hZ2VOYW1lID0gZGVmYXVsdEltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzID0gZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0ZXh0dXJlZFRyaWFuZ2xlID0gVGV4dHVyZWRDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFRleHR1cmVkVHJpYW5nbGUsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gdGV4dHVyZWRUcmlhbmdsZTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dHVyZWRUcmlhbmdsZSBmcm9tIFwiLi90ZXh0dXJlZFRyaWFuZ2xlXCI7XG5cbmNvbnN0IFNpZGUgPSAocHJvcGVydGllcykgPT5cblxuICA8VGV4dHVyZWRUcmlhbmdsZSBzY2FsZT17WyAxLCAxL01hdGguc3FydCgyKSwgMSBdfSBwb3NpdGlvbj17WyAtMC41LCAwLCAwLjUgXX0gcm90YXRpb25zPXtbIC00NSwgMCwgMCBdfSAvPlxuXG47XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGU7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTaWRlIGZyb20gXCIuL3NpZGVcIjtcblxuY29uc3QgUHlyYW1pZCA9IChwcm9wZXJ0aWVzKSA9PiBbXG5cbiAgPFNpZGUgLz4sXG4gIDxTaWRlIHJvdGF0aW9ucz17WyAwLCAgOTAsIDAgXX0gLz4sXG4gIDxTaWRlIHJvdGF0aW9ucz17WyAwLCAxODAsIDAgXX0gLz4sXG4gIDxTaWRlIHJvdGF0aW9ucz17WyAwLCAyNzAsIDAgXX0gLz4sXG5cbl07XG5cbmV4cG9ydCBkZWZhdWx0IFB5cmFtaWQ7XG5cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUGFydCwgU2NlbmUsIENhbnZhcywgR2FtaW5nQ2FtZXJhLCBwcmVsb2FkVXRpbGl0aWVzIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IFB5cmFtaWQgZnJvbSBcIi4vZWxlbWVudC9weXJhbWlkXCI7XG5cbmNvbnN0IHsgcHJlbG9hZEltYWdlTWFwIH0gPSBwcmVsb2FkVXRpbGl0aWVzLFxuICAgICAgeyBob3N0LCBpbWFnZU1hcFVSSSwgaW1hZ2VNYXBKU09OIH0gPSBnbG9iYWxUaGlzO1xuXG5jb25zdCBweXJhbWlkRXhhbXBsZSA9ICgpID0+IHtcbiAgcHJlbG9hZEltYWdlTWFwKGhvc3QsIGltYWdlTWFwVVJJLCBpbWFnZU1hcEpTT04sIChpbWFnZU1hcCwgaW1hZ2VNYXBKU09OKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPFNjZW5lIGNhbnZhcz17Y2FudmFzfT5cbiAgICAgICAgPFBhcnQgaW1hZ2VNYXA9e2ltYWdlTWFwfSBpbWFnZU1hcEpTT049e2ltYWdlTWFwSlNPTn0+XG4gICAgICAgICAgPFB5cmFtaWQvPlxuICAgICAgICA8L1BhcnQ+XG4gICAgICAgIDxHYW1pbmdDYW1lcmEvPlxuICAgICAgPC9TY2VuZT5cblxuICAgICk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcHlyYW1pZEV4YW1wbGU7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBcIi4veGdsXCI7XG5cbmltcG9ydCBjdWJlRXhhbXBsZSBmcm9tIFwiLi9leGFtcGxlL2N1YmVcIjtcbmltcG9ydCB0aWxpbmdFeGFtcGxlIGZyb20gXCIuL2V4YW1wbGUvdGlsaW5nXCI7XG5pbXBvcnQgc2ltcGxlRXhhbXBsZSBmcm9tIFwiLi9leGFtcGxlL3NpbXBsZVwiO1xuaW1wb3J0IG1hc2tpbmdFeGFtcGxlIGZyb20gXCIuL2V4YW1wbGUvbWFza2luZ1wiO1xuaW1wb3J0IHB5cmFtaWRFeGFtcGxlIGZyb20gXCIuL2V4YW1wbGUvcHlyYW1pZFwiO1xuXG5jb25zdCBleGFtcGxlID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSk7ICAvLy9cblxuc3dpdGNoIChleGFtcGxlKSB7XG4gIGNhc2UgXCJjdWJlXCI6XG4gICAgY3ViZUV4YW1wbGUoKTtcblxuICAgIGJyZWFrO1xuXG4gIGNhc2UgXCJ0aWxpbmdcIjpcbiAgICB0aWxpbmdFeGFtcGxlKCk7XG5cbiAgICBicmVhaztcblxuICBjYXNlIFwic2ltcGxlXCI6XG4gICAgc2ltcGxlRXhhbXBsZSgpO1xuXG4gICAgYnJlYWs7XG5cbiAgY2FzZSBcIm1hc2tpbmdcIjpcbiAgICBtYXNraW5nRXhhbXBsZSgpO1xuXG4gICAgYnJlYWs7XG5cbiAgY2FzZSBcInB5cmFtaWRcIjpcbiAgICBweXJhbWlkRXhhbXBsZSgpO1xuXG4gICAgYnJlYWs7XG59XG4iXSwKICAibWFwcGlu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
