(() => {
  var __commonJS = (cb, mod) => () => (mod || cb((mod = {exports: {}}).exports, mod), mod.exports);

  // lib/constants.js
  var require_constants = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get ANGLES_MULTIPLIER() {
        return ANGLES_MULTIPLIER;
      },
      get ANONYMOUS() {
        return ANONYMOUS;
      },
      get CANVAS() {
        return CANVAS;
      },
      get DEGREES_TO_RADIANS_MULTIPLIER() {
        return DEGREES_TO_RADIANS_MULTIPLIER;
      },
      get DESIGN_CAMERA() {
        return DESIGN_CAMERA;
      },
      get EXT_TEXTURE_FILTER_ANISOTROPIC() {
        return EXT_TEXTURE_FILTER_ANISOTROPIC;
      },
      get FUNCTION() {
        return FUNCTION;
      },
      get GAMING_CAMERA() {
        return GAMING_CAMERA;
      },
      get HEIGHT() {
        return HEIGHT;
      },
      get INVERT_MULTIPLIER() {
        return INVERT_MULTIPLIER;
      },
      get MINIMUM_DISTANCE() {
        return MINIMUM_DISTANCE;
      },
      get MOUSE_WHEEL_DELTA_MULTIPLIER() {
        return MOUSE_WHEEL_DELTA_MULTIPLIER;
      },
      get MOZ_EXT_TEXTURE_FILTER_ANISOTROPIC() {
        return MOZ_EXT_TEXTURE_FILTER_ANISOTROPIC;
      },
      get RELATIVE_MOUSE_COORDINATES_MULTIPLIER() {
        return RELATIVE_MOUSE_COORDINATES_MULTIPLIER;
      },
      get STRING() {
        return STRING;
      },
      get VERTICES_LENGTH() {
        return VERTICES_LENGTH;
      },
      get WEBGL() {
        return WEBGL;
      },
      get WEBKIT_EXT_TEXTURE_FILTER_ANISOTROPIC() {
        return WEBKIT_EXT_TEXTURE_FILTER_ANISOTROPIC;
      },
      get WIDTH() {
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
  });

  // node_modules/necessary/lib/levels.js
  var require_levels = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get DEBUG_LEVEL() {
        return DEBUG_LEVEL;
      },
      get ERROR_LEVEL() {
        return ERROR_LEVEL;
      },
      get FATAL_LEVEL() {
        return FATAL_LEVEL;
      },
      get INFO_LEVEL() {
        return INFO_LEVEL;
      },
      get TRACE_LEVEL() {
        return TRACE_LEVEL;
      },
      get WARNING_LEVEL() {
        return WARNING_LEVEL;
      },
      get default() {
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
  });

  // node_modules/necessary/lib/methods.js
  var require_methods = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get DELETE_METHOD() {
        return DELETE_METHOD;
      },
      get GET_METHOD() {
        return GET_METHOD;
      },
      get OPTIONS_METHOD() {
        return OPTIONS_METHOD;
      },
      get PATCH_METHOD() {
        return PATCH_METHOD;
      },
      get POST_METHOD() {
        return POST_METHOD;
      },
      get default() {
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
  });

  // node_modules/necessary/lib/headers.js
  var require_headers = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get ACCEPT_HEADER() {
        return ACCEPT_HEADER;
      },
      get ACCESS_CONTROL_ALLOW_HEADERS_HEADER() {
        return ACCESS_CONTROL_ALLOW_HEADERS_HEADER;
      },
      get ACCESS_CONTROL_ALLOW_METHODS_HEADER() {
        return ACCESS_CONTROL_ALLOW_METHODS_HEADER;
      },
      get ACCESS_CONTROL_ALLOW_ORIGIN_HEADER() {
        return ACCESS_CONTROL_ALLOW_ORIGIN_HEADER;
      },
      get ACCESS_CONTROL_REQUEST_METHOD_HEADER() {
        return ACCESS_CONTROL_REQUEST_METHOD_HEADER;
      },
      get AUTHORIZATION_HEADER() {
        return AUTHORIZATION_HEADER;
      },
      get CACHE_CONTROL_HEADER() {
        return CACHE_CONTROL_HEADER;
      },
      get CONTENT_DISPOSITION_HEADER() {
        return CONTENT_DISPOSITION_HEADER;
      },
      get CONTENT_LENGTH_HEADER() {
        return CONTENT_LENGTH_HEADER;
      },
      get CONTENT_TYPE_HEADER() {
        return CONTENT_TYPE_HEADER;
      },
      get LOCATION_HEADER() {
        return LOCATION_HEADER;
      },
      get PRAGMA_HEADER() {
        return PRAGMA_HEADER;
      },
      get TRANSFER_ENCODING_HEADER() {
        return TRANSFER_ENCODING_HEADER;
      },
      get USER_AGENT_HEADER() {
        return USER_AGENT_HEADER;
      },
      get default() {
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
  });

  // node_modules/necessary/lib/keyCodes.js
  var require_keyCodes = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get ARROW_DOWN_KEY_CODE() {
        return ARROW_DOWN_KEY_CODE;
      },
      get ARROW_LEFT_KEY_CODE() {
        return ARROW_LEFT_KEY_CODE;
      },
      get ARROW_RIGHT_KEY_CODE() {
        return ARROW_RIGHT_KEY_CODE;
      },
      get ARROW_UP_KEY_CODE() {
        return ARROW_UP_KEY_CODE;
      },
      get BACKSPACE_KEY_CODE() {
        return BACKSPACE_KEY_CODE;
      },
      get DELETE_KEY_CODE() {
        return DELETE_KEY_CODE;
      },
      get ENTER_KEY_CODE() {
        return ENTER_KEY_CODE;
      },
      get ESCAPE_KEY_CODE() {
        return ESCAPE_KEY_CODE;
      },
      get SHIFT_KEY_CODE() {
        return SHIFT_KEY_CODE;
      },
      get TAB_KEY_CODE() {
        return TAB_KEY_CODE;
      },
      get default() {
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
  });

  // node_modules/necessary/lib/encodings.js
  var require_encodings = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get BASE64_ENCODING() {
        return BASE64_ENCODING;
      },
      get UTF8_ENCODING() {
        return UTF8_ENCODING;
      },
      get UTF_8_ENCODING() {
        return UTF_8_ENCODING;
      },
      get default() {
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
  });

  // node_modules/necessary/lib/characters.js
  var require_characters = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get AMPERSAND_CHARACTER() {
        return AMPERSAND_CHARACTER;
      },
      get ASTERISK_CHARACTER() {
        return ASTERISK_CHARACTER;
      },
      get BACKSLASH_CHARACTER() {
        return BACKSLASH_CHARACTER;
      },
      get BACKSPACE_CHARACTER() {
        return BACKSPACE_CHARACTER;
      },
      get BACKTICK_DELIMITER() {
        return BACKTICK_DELIMITER;
      },
      get BAR_CHARACTER() {
        return BAR_CHARACTER;
      },
      get CARRIAGE_RETURN_CHARACTER() {
        return CARRIAGE_RETURN_CHARACTER;
      },
      get CLOSING_BRACKET_CHARACTER() {
        return CLOSING_BRACKET_CHARACTER;
      },
      get CLOSING_CURLY_BRACKET_CHARACTER() {
        return CLOSING_CURLY_BRACKET_CHARACTER;
      },
      get CLOSING_SQUARE_BRACKET_CHARACTER() {
        return CLOSING_SQUARE_BRACKET_CHARACTER;
      },
      get COLON_CHARACTER() {
        return COLON_CHARACTER;
      },
      get COMMA_CHARACTER() {
        return COMMA_CHARACTER;
      },
      get CTRL_C_CHARACTER() {
        return CTRL_C_CHARACTER;
      },
      get DASH_CHARACTER() {
        return DASH_CHARACTER;
      },
      get DOLLAR_CHARACTER() {
        return DOLLAR_CHARACTER;
      },
      get DOWN_CHARACTER() {
        return DOWN_CHARACTER;
      },
      get ESCAPE_CHARACTER() {
        return ESCAPE_CHARACTER;
      },
      get ETX_CHARACTER() {
        return ETX_CHARACTER;
      },
      get EXCLAMATION_MARK_CHARACTER() {
        return EXCLAMATION_MARK_CHARACTER;
      },
      get FORWARD_SLASH_CHARACTER() {
        return FORWARD_SLASH_CHARACTER;
      },
      get HAT_CHARACTER() {
        return HAT_CHARACTER;
      },
      get LEFT_CHARACTER() {
        return LEFT_CHARACTER;
      },
      get NEW_LINE_CHARACTER() {
        return NEW_LINE_CHARACTER;
      },
      get OPENING_BRACKET_CHARACTER() {
        return OPENING_BRACKET_CHARACTER;
      },
      get OPENING_CURLY_BRACKET_CHARACTER() {
        return OPENING_CURLY_BRACKET_CHARACTER;
      },
      get OPENING_SQUARE_BRACKET_CHARACTER() {
        return OPENING_SQUARE_BRACKET_CHARACTER;
      },
      get PERIOD_CHARACTER() {
        return PERIOD_CHARACTER;
      },
      get PLUS_CHARACTER() {
        return PLUS_CHARACTER;
      },
      get QUESTION_MARK_CHARACTER() {
        return QUESTION_MARK_CHARACTER;
      },
      get RIGHT_CHARACTER() {
        return RIGHT_CHARACTER;
      },
      get SPACE_CHARACTER() {
        return SPACE_CHARACTER;
      },
      get UP_CHARACTER() {
        return UP_CHARACTER;
      },
      get WILDCARD_CHARACTER() {
        return WILDCARD_CHARACTER;
      },
      get default() {
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
  });

  // node_modules/necessary/lib/statusCodes.js
  var require_statusCodes = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get BAD_GATEWAY_502_STATUS_CODE() {
        return BAD_GATEWAY_502_STATUS_CODE;
      },
      get BAD_REQUEST_400_STATUS_CODE() {
        return BAD_REQUEST_400_STATUS_CODE;
      },
      get CREATED_201_STATUS_CODE() {
        return CREATED_201_STATUS_CODE;
      },
      get FORBIDDEN_403_STATUS_CODE() {
        return FORBIDDEN_403_STATUS_CODE;
      },
      get FOUND_302_STATUS_CODE() {
        return FOUND_302_STATUS_CODE;
      },
      get INTERNAL_SERVER_ERROR_500_STATUS_CODE() {
        return INTERNAL_SERVER_ERROR_500_STATUS_CODE;
      },
      get NOT_FOUND_404_STATUS_CODE() {
        return NOT_FOUND_404_STATUS_CODE;
      },
      get NO_CONTENT_204_STATUS_CODE() {
        return NO_CONTENT_204_STATUS_CODE;
      },
      get OK_200_STATUS_CODE() {
        return OK_200_STATUS_CODE;
      },
      get REQUEST_TIMEOUT_408_STATUS_CODE() {
        return REQUEST_TIMEOUT_408_STATUS_CODE;
      },
      get SEE_OTHER_303_STATUS_CODE() {
        return SEE_OTHER_303_STATUS_CODE;
      },
      get SERVICE_UNAVAILABLE_503_STATUS_CODE() {
        return SERVICE_UNAVAILABLE_503_STATUS_CODE;
      },
      get TOO_MANY_REQUESTS_429_STATUS_CODE() {
        return TOO_MANY_REQUESTS_429_STATUS_CODE;
      },
      get UNAUTHORIZED_401_STATUS_CODE() {
        return UNAUTHORIZED_401_STATUS_CODE;
      },
      get ZERO_0_STATUS_CODE() {
        return ZERO_0_STATUS_CODE;
      },
      get default() {
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
  });

  // node_modules/necessary/lib/contentTypes.js
  var require_contentTypes = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE() {
        return APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE;
      },
      get APPLICATION_JSON_CONTENT_TYPE() {
        return APPLICATION_JSON_CONTENT_TYPE;
      },
      get APPLICATION_OCTET_STREAM_CONTENT_TYPE() {
        return APPLICATION_OCTET_STREAM_CONTENT_TYPE;
      },
      get APPLICATION_X_WWW_FORM_ENCODED_CHARSET_UTF_8_CONTENT_TYPE() {
        return APPLICATION_X_WWW_FORM_ENCODED_CHARSET_UTF_8_CONTENT_TYPE;
      },
      get APPLICATION_X_WWW_FORM_ENCODED_CONTENT_TYPE() {
        return APPLICATION_X_WWW_FORM_ENCODED_CONTENT_TYPE;
      },
      get TEXT_HTML_CHARSET_UTF_8_CONTENT_TYPE() {
        return TEXT_HTML_CHARSET_UTF_8_CONTENT_TYPE;
      },
      get TEXT_HTML_CONTENT_TYPE() {
        return TEXT_HTML_CONTENT_TYPE;
      },
      get TEXT_PLAIN_CHARSET_UTF_8_CONTENT_TYPE() {
        return TEXT_PLAIN_CHARSET_UTF_8_CONTENT_TYPE;
      },
      get TEXT_PLAIN_CONTENT_TYPE() {
        return TEXT_PLAIN_CONTENT_TYPE;
      },
      get default() {
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
  });

  // node_modules/necessary/lib/statusMessages.js
  var require_statusMessages = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get BAD_GATEWAY_502_STATUS_MESSAGE() {
        return BAD_GATEWAY_502_STATUS_MESSAGE;
      },
      get BAD_REQUEST_400_STATUS_MESSAGE() {
        return BAD_REQUEST_400_STATUS_MESSAGE;
      },
      get CREATED_201_STATUS_MESSAGE() {
        return CREATED_201_STATUS_MESSAGE;
      },
      get FORBIDDEN_403_STATUS_MESSAGE() {
        return FORBIDDEN_403_STATUS_MESSAGE;
      },
      get FOUND_302_STATUS_MESSAGE() {
        return FOUND_302_STATUS_MESSAGE;
      },
      get INTERNAL_SERVER_ERROR_500_STATUS_MESSAGE() {
        return INTERNAL_SERVER_ERROR_500_STATUS_MESSAGE;
      },
      get NOT_FOUND_404_STATUS_MESSAGE() {
        return NOT_FOUND_404_STATUS_MESSAGE;
      },
      get NO_CONTENT_204_STATUS_MESSAGE() {
        return NO_CONTENT_204_STATUS_MESSAGE;
      },
      get OK_200_STATUS_MESSAGE() {
        return OK_200_STATUS_MESSAGE;
      },
      get REQUEST_TIMEOUT_408_STATUS_MESSAGE() {
        return REQUEST_TIMEOUT_408_STATUS_MESSAGE;
      },
      get SEE_OTHER_303_STATUS_MESSAGE() {
        return SEE_OTHER_303_STATUS_MESSAGE;
      },
      get SERVICE_UNAVAILABLE_503_STATUS_MESSAGE() {
        return SERVICE_UNAVAILABLE_503_STATUS_MESSAGE;
      },
      get TOO_MANY_REQUESTS_429_STATUS_MESSAGE() {
        return TOO_MANY_REQUESTS_429_STATUS_MESSAGE;
      },
      get UNAUTHORIZED_401_STATUS_MESSAGE() {
        return UNAUTHORIZED_401_STATUS_MESSAGE;
      },
      get ZERO_0_STATUS_MESSAGE() {
        return ZERO_0_STATUS_MESSAGE;
      },
      get default() {
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
  });

  // node_modules/necessary/lib/constants.js
  var require_constants2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get BOOLEAN() {
        return BOOLEAN;
      },
      get DATA() {
        return DATA;
      },
      get DEFAULT() {
        return DEFAULT;
      },
      get DOUBLE_SPACE() {
        return DOUBLE_SPACE;
      },
      get EMPTY_STRING() {
        return EMPTY_STRING;
      },
      get ENVIRONMENT() {
        return ENVIRONMENT;
      },
      get ERROR() {
        return ERROR;
      },
      get FUNCTION() {
        return FUNCTION;
      },
      get NUMBER() {
        return NUMBER;
      },
      get PACKAGE_JSON() {
        return PACKAGE_JSON;
      },
      get STRING() {
        return STRING;
      },
      get ZERO() {
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
    var FUNCTION = "function";
    var ENVIRONMENT = "ENVIRONMENT";
    var EMPTY_STRING = "";
    var DOUBLE_SPACE = "  ";
    var PACKAGE_JSON = "package.json";
  });

  // node_modules/necessary/lib/utilities/array.js
  var require_array = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get augment() {
        return augment;
      },
      get back() {
        return back;
      },
      get backwardsEvery() {
        return backwardsEvery;
      },
      get backwardsFind() {
        return backwardsFind;
      },
      get backwardsFindIndex() {
        return backwardsFindIndex;
      },
      get backwardsForEach() {
        return backwardsForEach;
      },
      get backwardsReduce() {
        return backwardsReduce;
      },
      get backwardsSome() {
        return backwardsSome;
      },
      get clear() {
        return clear;
      },
      get combine() {
        return combine;
      },
      get compare() {
        return compare;
      },
      get compress() {
        return compress;
      },
      get concat() {
        return concat;
      },
      get copy() {
        return copy;
      },
      get correlate() {
        return correlate;
      },
      get default() {
        return _default;
      },
      get eighth() {
        return eighth;
      },
      get eighthLast() {
        return eighthLast;
      },
      get extract() {
        return extract;
      },
      get fifth() {
        return fifth;
      },
      get fifthLast() {
        return fifthLast;
      },
      get filter() {
        return filter;
      },
      get find() {
        return find;
      },
      get first() {
        return first;
      },
      get firstLast() {
        return firstLast;
      },
      get forwardsEvery() {
        return forwardsEvery;
      },
      get forwardsFind() {
        return forwardsFind;
      },
      get forwardsFindIndex() {
        return forwardsFindIndex;
      },
      get forwardsForEach() {
        return forwardsForEach;
      },
      get forwardsReduce() {
        return forwardsReduce;
      },
      get forwardsSome() {
        return forwardsSome;
      },
      get fourth() {
        return fourth;
      },
      get fourthLast() {
        return fourthLast;
      },
      get front() {
        return front;
      },
      get head() {
        return head;
      },
      get last() {
        return last;
      },
      get match() {
        return match;
      },
      get merge() {
        return merge;
      },
      get ninth() {
        return ninth;
      },
      get ninthLast() {
        return ninthLast;
      },
      get patch() {
        return patch;
      },
      get prune() {
        return prune;
      },
      get push() {
        return push;
      },
      get replace() {
        return replace;
      },
      get resolve() {
        return resolve;
      },
      get reverse() {
        return reverse;
      },
      get second() {
        return second;
      },
      get secondLast() {
        return secondLast;
      },
      get separate() {
        return separate;
      },
      get seventh() {
        return seventh;
      },
      get seventhLast() {
        return seventhLast;
      },
      get sixth() {
        return sixth;
      },
      get sixthLast() {
        return sixthLast;
      },
      get splice() {
        return splice;
      },
      get tail() {
        return tail;
      },
      get tenth() {
        return tenth;
      },
      get third() {
        return third;
      },
      get thirdLast() {
        return thirdLast;
      },
      get unshift() {
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
          if (!passed) {
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
    function forwardsFindIndex(array, callback) {
      var arrayLength = array.length;
      for (var index = 0; index < arrayLength; index++) {
        var element = array[index], passed = callback(element, index);
        if (passed) {
          return index;
        }
      }
      return -1;
    }
    function backwardsFindIndex(array, callback) {
      var arrayLength = array.length;
      for (var index = arrayLength - 1; index >= 0; index--) {
        var element = array[index], passed = callback(element, index);
        if (passed) {
          return index;
        }
      }
      return -1;
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
      backwardsForEach,
      forwardsFindIndex,
      backwardsFindIndex
    };
  });

  // node_modules/necessary/lib/utilities/path.js
  var require_path = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get bottommostNameFromPath() {
        return bottommostNameFromPath;
      },
      get combinePaths() {
        return combinePaths;
      },
      get concatenatePaths() {
        return concatenatePaths;
      },
      get default() {
        return _default;
      },
      get isPathAbsolutePath() {
        return isPathAbsolutePath;
      },
      get isPathName() {
        return isPathName;
      },
      get isPathRelativePath() {
        return isPathRelativePath;
      },
      get isPathTopmostName() {
        return isPathTopmostName;
      },
      get isTopmostNameInAbsolutePath() {
        return isTopmostNameInAbsolutePath;
      },
      get pathWithoutBottommostNameFromPath() {
        return pathWithoutBottommostNameFromPath;
      },
      get pathWithoutTopmostDirectoryNameFromPath() {
        return pathWithoutTopmostDirectoryNameFromPath;
      },
      get topmostDirectoryNameFromPath() {
        return topmostDirectoryNameFromPath;
      },
      get topmostDirectoryPathFromPath() {
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
  });

  // node_modules/necessary/lib/utilities/http.js
  var require_http = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get default() {
        return _default;
      },
      get hostnameFromHost() {
        return hostnameFromHost;
      },
      get overwrite() {
        return overwrite;
      },
      get portFromHost() {
        return portFromHost;
      },
      get queryStringFromQuery() {
        return queryStringFromQuery;
      },
      get secureFromHost() {
        return secureFromHost;
      },
      get underwrite() {
        return underwrite;
      },
      get urlFromHostURIAndQuery() {
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
  });

  // node_modules/necessary/lib/utilities/string.js
  var require_string = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get default() {
        return _default;
      },
      get indexOf() {
        return indexOf;
      },
      get strcmp() {
        return strcmp;
      },
      get strlen() {
        return strlen;
      },
      get substring() {
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
  });

  // node_modules/necessary/lib/utilities/version.js
  var require_version = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get default() {
        return _default;
      },
      get migrate() {
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
  });

  // node_modules/necessary/lib/utilities/asynchronous.js
  var require_asynchronous = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get backwardsForEach() {
        return backwardsForEach;
      },
      get default() {
        return _default;
      },
      get eventually() {
        return eventually;
      },
      get forEach() {
        return forEach;
      },
      get forwardsForEach() {
        return forwardsForEach;
      },
      get repeatedly() {
        return repeatedly;
      },
      get sequence() {
        return sequence;
      },
      get whilst() {
        return whilst;
      }
    });
    function whilst(operation, done, context) {
      var count = -1;
      function next() {
        count++;
        var index = count;
        operation(next, done, context, index);
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
      if (length === 0) {
        done();
        return;
      }
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
      if (length === 0) {
        done();
        return;
      }
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
  });

  // node_modules/necessary/lib/utilities/ajax.js
  var require_ajax = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get default() {
        return _default;
      },
      get get() {
        return get;
      },
      get post() {
        return post;
      },
      get request() {
        return request;
      }
    });
    var _constants = require_constants2();
    var _methods = require_methods();
    var _contentTypes = require_contentTypes();
    var _headers = require_headers();
    var _http = require_http();
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
    function get(host, uri, query, headers, responseType, callback) {
      if ((typeof headers === "undefined" ? "undefined" : _type_of(headers)) === _constants.FUNCTION) {
        callback = headers;
        responseType = null;
        headers = {};
      }
      if ((typeof responseType === "undefined" ? "undefined" : _type_of(responseType)) === _constants.FUNCTION) {
        callback = responseType;
        if ((typeof headers === "undefined" ? "undefined" : _type_of(headers)) === _constants.STRING) {
          responseType = headers;
          headers = {};
        } else {
          responseType = null;
        }
      }
      var method = _methods.GET_METHOD, accept = _contentTypes.APPLICATION_JSON_CONTENT_TYPE, content = null;
      underwriteAcceptHeader(headers, accept);
      request(host, uri, query, method, content, headers, responseType, callback);
    }
    function post(host, uri, query, content, headers, responseType, callback) {
      if ((typeof headers === "undefined" ? "undefined" : _type_of(headers)) === _constants.FUNCTION) {
        callback = headers;
        responseType = null;
        headers = {};
      }
      if ((typeof responseType === "undefined" ? "undefined" : _type_of(responseType)) === _constants.FUNCTION) {
        callback = responseType;
        if ((typeof headers === "undefined" ? "undefined" : _type_of(headers)) === _constants.STRING) {
          responseType = headers;
          headers = {};
        } else {
          responseType = null;
        }
      }
      var method = _methods.POST_METHOD, accept = _contentTypes.APPLICATION_JSON_CONTENT_TYPE, contentType = _contentTypes.APPLICATION_JSON_CONTENT_TYPE;
      underwriteAcceptHeader(headers, accept);
      underwriteContentTypeHeader(headers, contentType);
      request(host, uri, query, method, content, headers, responseType, callback);
    }
    function request(host, uri, query, method, content, headers, responseType, callback) {
      var url = (0, _http.urlFromHostURIAndQuery)(host, uri, query), accept = headers[_headers.ACCEPT_HEADER] || null, contentType = headers[_headers.CONTENT_TYPE_HEADER] || null, xmlHttpRequest = new XMLHttpRequest();
      if (contentType === _contentTypes.APPLICATION_JSON_CONTENT_TYPE) {
        var json = content, jsonString = JSON.stringify(json);
        content = jsonString;
      }
      if (responseType !== null) {
        Object.assign(xmlHttpRequest, {
          responseType
        });
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
  });

  // node_modules/necessary/lib/browser.js
  var require_browser = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get ajaxUtilities() {
        return _ajax.default;
      },
      get arrayUtilities() {
        return _array.default;
      },
      get asynchronousUtilities() {
        return _asynchronous.default;
      },
      get characters() {
        return _characters.default;
      },
      get contentTypes() {
        return _contentTypes.default;
      },
      get encodings() {
        return _encodings.default;
      },
      get headers() {
        return _headers.default;
      },
      get httpUtilities() {
        return _http.default;
      },
      get keyCodes() {
        return _keyCodes.default;
      },
      get levels() {
        return _levels.default;
      },
      get methods() {
        return _methods.default;
      },
      get pathUtilities() {
        return _path.default;
      },
      get statusCodes() {
        return _statusCodes.default;
      },
      get statusMessages() {
        return _statusMessages.default;
      },
      get stringUtilities() {
        return _string.default;
      },
      get versionUtilities() {
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
  });

  // lib/utilities/array.js
  var require_array2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get add() {
        return add;
      },
      get first() {
        return first;
      },
      get flatten() {
        return flatten;
      },
      get fourth() {
        return fourth;
      },
      get guarantee() {
        return guarantee;
      },
      get permute() {
        return permute;
      },
      get push() {
        return push;
      },
      get second() {
        return second;
      },
      get separate() {
        return separate;
      },
      get third() {
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
        elements = elements.concat(array);
        return elements;
      }, []);
    }
    function guarantee(arrayOrElement) {
      arrayOrElement = arrayOrElement || [];
      return _instanceof(arrayOrElement, Array) ? arrayOrElement : [
        arrayOrElement
      ];
    }
  });

  // lib/element.js
  var require_element = __commonJS((exports) => {
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
  });

  // lib/maths/vector.js
  var require_vector = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get add2() {
        return add2;
      },
      get add3() {
        return add3;
      },
      get add4() {
        return add4;
      },
      get cross3() {
        return cross3;
      },
      get default() {
        return _default;
      },
      get divide2() {
        return divide2;
      },
      get divide3() {
        return divide3;
      },
      get divide4() {
        return divide4;
      },
      get dot2() {
        return dot2;
      },
      get dot3() {
        return dot3;
      },
      get dot4() {
        return dot4;
      },
      get length2() {
        return length2;
      },
      get length3() {
        return length3;
      },
      get length4() {
        return length4;
      },
      get mean2() {
        return mean2;
      },
      get mean3() {
        return mean3;
      },
      get mean4() {
        return mean4;
      },
      get multiply2() {
        return multiply2;
      },
      get multiply3() {
        return multiply3;
      },
      get multiply4() {
        return multiply4;
      },
      get normalise2() {
        return normalise2;
      },
      get normalise3() {
        return normalise3;
      },
      get normalise4() {
        return normalise4;
      },
      get reflect2() {
        return reflect2;
      },
      get reflect3() {
        return reflect3;
      },
      get reflect4() {
        return reflect4;
      },
      get scale2() {
        return scale2;
      },
      get scale3() {
        return scale3;
      },
      get scale4() {
        return scale4;
      },
      get subtract2() {
        return subtract2;
      },
      get subtract3() {
        return subtract3;
      },
      get subtract4() {
        return subtract4;
      },
      get sum2() {
        return sum2;
      },
      get sum3() {
        return sum3;
      },
      get sum4() {
        return sum4;
      },
      get transform2() {
        return transform2;
      },
      get transform3() {
        return transform3;
      },
      get transform4() {
        return transform4;
      },
      get truncate4() {
        return truncate4;
      },
      get zero2() {
        return zero2;
      },
      get zero3() {
        return zero3;
      },
      get zero4() {
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
  });

  // lib/primitive/edge.js
  var require_edge = __commonJS((exports) => {
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
  });

  // lib/utilities/midPoint.js
  var require_midPoint = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get calculateMidPointPosition() {
        return calculateMidPointPosition;
      },
      get isMidPointPositionToOneSideOfMaskingEdges() {
        return isMidPointPositionToOneSideOfMaskingEdges;
      },
      get projectMidPointPositionOntoXYPlane() {
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
  });

  // lib/primitive/edge/masking.js
  var require_masking = __commonJS((exports) => {
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
  });

  // lib/defaults.js
  var require_defaults = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get DEFAULT_BACKGROUND_COLOUR() {
        return DEFAULT_BACKGROUND_COLOUR;
      },
      get DEFAULT_DEPTH() {
        return DEFAULT_DEPTH;
      },
      get DEFAULT_FIELD_OF_VIEW() {
        return DEFAULT_FIELD_OF_VIEW;
      },
      get DEFAULT_INITIAL_ANGLES() {
        return DEFAULT_INITIAL_ANGLES;
      },
      get DEFAULT_INITIAL_DISTANCE() {
        return DEFAULT_INITIAL_DISTANCE;
      },
      get DEFAULT_INITIAL_OFFSETS() {
        return DEFAULT_INITIAL_OFFSETS;
      },
      get DEFAULT_INITIAL_POSITION() {
        return DEFAULT_INITIAL_POSITION;
      },
      get DEFAULT_MARGIN_OF_ERROR() {
        return DEFAULT_MARGIN_OF_ERROR;
      },
      get DEFAULT_MOUSE_SENSITIVITY() {
        return DEFAULT_MOUSE_SENSITIVITY;
      },
      get DEFAULT_MOUSE_WHEEL_SENSITIVITY() {
        return DEFAULT_MOUSE_WHEEL_SENSITIVITY;
      },
      get DEFAULT_PERSIST() {
        return DEFAULT_PERSIST;
      },
      get DEFAULT_Z_FAR() {
        return DEFAULT_Z_FAR;
      },
      get DEFAULT_Z_NEAR() {
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
  });

  // lib/utilities/approximate.js
  var require_approximate = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get isApproximatelyEqualToOne() {
        return isApproximatelyEqualToOne;
      },
      get isApproximatelyEqualToZero() {
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
  });

  // lib/utilities/angle.js
  var require_angle = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get calculateHalfAngleCosine() {
        return calculateHalfAngleCosine;
      },
      get calculateHalfAngleSine() {
        return calculateHalfAngleSine;
      }
    });
    function calculateHalfAngleSine(angleCosine) {
      return Math.sqrt((1 - angleCosine) / 2);
    }
    function calculateHalfAngleCosine(angleCosine) {
      return Math.sqrt((1 + angleCosine) / 2);
    }
  });

  // lib/utilities/quaternion.js
  var require_quaternion = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get calculateArbitraryRotationQuaternion() {
        return calculateArbitraryRotationQuaternion;
      },
      get calculateBackwardsRotationQuaternion() {
        return calculateBackwardsRotationQuaternion;
      },
      get calculateForwardsRotationQuaternion() {
        return calculateForwardsRotationQuaternion;
      },
      get calculateInverseRotationQuaternion() {
        return calculateInverseRotationQuaternion;
      },
      get calculateRotationAboutZAxisQuaternion() {
        return calculateRotationAboutZAxisQuaternion;
      },
      get rotateImaginaryQuaternion() {
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
  });

  // lib/utilities/rotation.js
  var require_rotation = __commonJS((exports) => {
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
  });

  // lib/utilities/intersection.js
  var require_intersection = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get calculateIntermediateVertexPosition() {
        return calculateIntermediateVertexPosition;
      },
      get calculateIntersection() {
        return calculateIntersection;
      },
      get calculateNonNullIntersectionIndex() {
        return calculateNonNullIntersectionIndex;
      },
      get calculateNonNullIntersections() {
        return calculateNonNullIntersections;
      },
      get calculateNullIntersectionIndex() {
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
  });

  // lib/primitive/verticalLine.js
  var require_verticalLine = __commonJS((exports) => {
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
  });

  // lib/utilities/vertices.js
  var require_vertices = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get rotateVertices() {
        return rotateVertices;
      },
      get verticesFromCoordinateTuplesAndIndexTuple() {
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
  });

  // lib/primitive/maskingFacet.js
  var require_maskingFacet = __commonJS((exports) => {
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
  });

  // lib/maths/matrix.js
  var require_matrix = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get default() {
        return _default;
      },
      get determinant2() {
        return determinant2;
      },
      get determinant3() {
        return determinant3;
      },
      get determinant4() {
        return determinant4;
      },
      get identity2() {
        return identity2;
      },
      get identity3() {
        return identity3;
      },
      get identity4() {
        return identity4;
      },
      get invert2() {
        return invert2;
      },
      get invert3() {
        return invert3;
      },
      get invert4() {
        return invert4;
      },
      get multiply2() {
        return multiply2;
      },
      get multiply3() {
        return multiply3;
      },
      get multiply4() {
        return multiply4;
      },
      get perspective4() {
        return perspective4;
      },
      get rotate4() {
        return rotate4;
      },
      get scale4() {
        return scale4;
      },
      get translate4() {
        return translate4;
      },
      get transpose2() {
        return transpose2;
      },
      get transpose3() {
        return transpose3;
      },
      get transpose4() {
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
  });

  // lib/utilities/matrix.js
  var require_matrix2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get normalsMatrixFromRotationsMatrix() {
        return normalsMatrixFromRotationsMatrix;
      },
      get offsetsMatrixFromOffsets() {
        return offsetsMatrixFromOffsets;
      },
      get positionMatrixFromDistance() {
        return positionMatrixFromDistance;
      },
      get positionMatrixFromNothing() {
        return positionMatrixFromNothing;
      },
      get positionMatrixFromPosition() {
        return positionMatrixFromPosition;
      },
      get projectionMatrixFromCameraAndCanvas() {
        return projectionMatrixFromCameraAndCanvas;
      },
      get rotationsMatrixFromAngles() {
        return rotationsMatrixFromAngles;
      },
      get rotationsMatrixFromRotations() {
        return rotationsMatrixFromRotations;
      },
      get scaleMatrixFromScale() {
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
  });

  // lib/utilities/transform.js
  var require_transform = __commonJS((exports) => {
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
  });

  // lib/element/mask.js
  var require_mask = __commonJS((exports) => {
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
  });

  // lib/utilities/element.js
  var require_element2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get elementFromChildElements() {
        return elementFromChildElements;
      },
      get elementsFromChildElements() {
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
  });

  // lib/element/canvas.js
  var require_canvas = __commonJS((exports) => {
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
  });

  // lib/element/canvas/function.js
  var require_function = __commonJS((exports) => {
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
            var functionCanvasElement = _canvas.default.fromProperties(FunctionCanvasElement2, properties);
            return functionCanvasElement;
          }
        }
      ]);
      return FunctionCanvasElement2;
    }(_canvas.default);
  });

  // lib/utilities/elements.js
  var require_elements = __commonJS((exports) => {
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
  });

  // lib/react.js
  var require_react = __commonJS((exports) => {
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
  });

  // lib/xgl.js
  var require_xgl = __commonJS((exports) => {
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
  });

  // lib/mixins/depth.js
  var require_depth = __commonJS((exports) => {
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
  });

  // lib/errors.js
  var require_errors = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get SHADER_ERROR() {
        return SHADER_ERROR;
      },
      get WEB_GL_CONTEXT_ERROR() {
        return WEB_GL_CONTEXT_ERROR;
      }
    });
    var SHADER_ERROR = "Unable to create the shader.";
    var WEB_GL_CONTEXT_ERROR = "Unable to get the WebGL context.";
  });

  // lib/mixins/shader.js
  var require_shader = __commonJS((exports) => {
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
  });

  // lib/mixins/buffer.js
  var require_buffer = __commonJS((exports) => {
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
  });

  // lib/mixins/colour.js
  var require_colour = __commonJS((exports) => {
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
  });

  // lib/mixins/matrix.js
  var require_matrix3 = __commonJS((exports) => {
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
  });

  // lib/mixins/texture.js
  var require_texture = __commonJS((exports) => {
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
  });

  // lib/mixins/program.js
  var require_program = __commonJS((exports) => {
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
  });

  // lib/mixins/blending.js
  var require_blending = __commonJS((exports) => {
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
  });

  // lib/mixins/location.js
  var require_location = __commonJS((exports) => {
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
  });

  // lib/canvas.js
  var require_canvas2 = __commonJS((exports) => {
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
  });

  // lib/renderer.js
  var require_renderer = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get createProgram() {
        return createProgram;
      },
      get default() {
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
  });

  // lib/renderer/data.js
  var require_data = __commonJS((exports) => {
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
  });

  // lib/renderer/data/colour.js
  var require_colour2 = __commonJS((exports) => {
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
  });

  // lib/renderer/source/lighting.js
  var require_lighting = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get default() {
        return _default;
      },
      get normalsMatrixName() {
        return normalsMatrixName;
      },
      get vertexNormalAttributeName() {
        return vertexNormalAttributeName;
      }
    });
    var normalsMatrixName = "uNormalsMatrix";
    var vertexNormalAttributeName = "aVertexNormal";
    var lightingSource = new String("\n  \n        uniform mat4 ".concat(normalsMatrixName, ";\n\n        attribute vec3 ").concat(vertexNormalAttributeName, ";\n\n        vec3 directionalLightColour = vec3(1, 1, 1),\n             directionalVector = normalize(vec3(1.0, 1.0, 1.0));\n          \n        vec3 calculateLighting() {\n          vec4 transformedNormal = ").concat(normalsMatrixName, " * vec4(").concat(vertexNormalAttributeName, ", 1.0);            \n\n          float directional = (dot(transformedNormal.xyz, directionalVector) + 1.0) / 2.0;\n          \n          vec3 lighting = (directionalLightColour * directional);\n          \n          return lighting;\n        }\n\n      "));
    var _default = lightingSource;
  });

  // lib/renderer/source/position.js
  var require_position = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get default() {
        return _default;
      },
      get offsetsMatrixName() {
        return offsetsMatrixName;
      },
      get positionMatrixName() {
        return positionMatrixName;
      },
      get projectionMatrixName() {
        return projectionMatrixName;
      },
      get rotationsMatrixName() {
        return rotationsMatrixName;
      },
      get vertexPositionAttributeName() {
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
  });

  // lib/renderer/source/colour/vertexShader.js
  var require_vertexShader = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get default() {
        return _default;
      },
      get vertexColourAttributeName() {
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
  });

  // lib/renderer/source/colour/fragmentShader.js
  var require_fragmentShader = __commonJS((exports) => {
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
  });

  // lib/renderer/buffers.js
  var require_buffers = __commonJS((exports) => {
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
  });

  // lib/renderer/buffers/colour.js
  var require_colour3 = __commonJS((exports) => {
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
  });

  // lib/renderer/locations/uniform.js
  var require_uniform = __commonJS((exports) => {
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
  });

  // lib/renderer/locations/colour/uniform.js
  var require_uniform2 = __commonJS((exports) => {
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
  });

  // lib/renderer/locations/attribute.js
  var require_attribute = __commonJS((exports) => {
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
  });

  // lib/renderer/locations/colour/attribute.js
  var require_attribute2 = __commonJS((exports) => {
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
  });

  // lib/renderer/colour.js
  var require_colour4 = __commonJS((exports) => {
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
  });

  // lib/renderer/source/texture/vertexShader.js
  var require_vertexShader2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get default() {
        return _default;
      },
      get textureCoordinateAttributeName() {
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
  });

  // lib/renderer/data/texture.js
  var require_texture2 = __commonJS((exports) => {
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
  });

  // lib/renderer/source/texture/fragmentShader.js
  var require_fragmentShader2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get default() {
        return _default;
      },
      get samplerName() {
        return samplerName;
      }
    });
    var samplerName = "uSampler";
    var fragmentShaderSource = new String("\n        \n        uniform sampler2D ".concat(samplerName, ";\n\n        varying highp vec3 vLighting;\n                   \n        varying highp vec2 vTextureCoordinate;\n        \n        void main() {\n          highp vec4 texelColour = texture2D(").concat(samplerName, ", vTextureCoordinate);\n          \n          gl_FragColor = vec4(texelColour.rgb * vLighting, texelColour.a);  \n        }\n        \n      "));
    var _default = fragmentShaderSource;
  });

  // lib/renderer/buffers/texture.js
  var require_texture3 = __commonJS((exports) => {
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
  });

  // lib/renderer/locations/texture/uniform.js
  var require_uniform3 = __commonJS((exports) => {
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
  });

  // lib/renderer/locations/texture/attribute.js
  var require_attribute3 = __commonJS((exports) => {
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
  });

  // lib/renderer/texture.js
  var require_texture4 = __commonJS((exports) => {
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
  });

  // lib/renderer/texture/images.js
  var require_images = __commonJS((exports) => {
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
  });

  // lib/renderer/texture/imageMap.js
  var require_imageMap = __commonJS((exports) => {
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
  });

  // lib/element/part.js
  var require_part = __commonJS((exports) => {
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
  });

  // lib/element/camera.js
  var require_camera = __commonJS((exports) => {
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
  });

  // lib/eventTypes.js
  var require_eventTypes = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get KEYDOWN_EVENT_TYPE() {
        return KEYDOWN_EVENT_TYPE;
      },
      get KEYUP_EVENT_TYPE() {
        return KEYUP_EVENT_TYPE;
      },
      get MOUSEDOWN_EVENT_TYPE() {
        return MOUSEDOWN_EVENT_TYPE;
      },
      get MOUSEMOVE_EVENT_TYPE() {
        return MOUSEMOVE_EVENT_TYPE;
      },
      get MOUSEUP_EVENT_TYPE() {
        return MOUSEUP_EVENT_TYPE;
      },
      get WHEEL_EVENT_TYPE() {
        return WHEEL_EVENT_TYPE;
      }
    });
    var WHEEL_EVENT_TYPE = "wheel";
    var KEYUP_EVENT_TYPE = "keyup";
    var KEYDOWN_EVENT_TYPE = "keydown";
    var MOUSEUP_EVENT_TYPE = "mouseup";
    var MOUSEDOWN_EVENT_TYPE = "mousedown";
    var MOUSEMOVE_EVENT_TYPE = "mousemove";
  });

  // lib/miscellaneous/keyEvents.js
  var require_keyEvents = __commonJS((exports) => {
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
  });

  // lib/miscellaneous/mouseEvents.js
  var require_mouseEvents = __commonJS((exports) => {
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
  });

  // lib/miscellaneous/userInput.js
  var require_userInput = __commonJS((exports) => {
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
  });

  // lib/element/scene.js
  var require_scene = __commonJS((exports) => {
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
  });

  // lib/utilities/offsets.js
  var require_offsets = __commonJS((exports) => {
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
  });

  // lib/miscellaneous/pan.js
  var require_pan = __commonJS((exports) => {
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
  });

  // lib/miscellaneous/tilt.js
  var require_tilt = __commonJS((exports) => {
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
  });

  // lib/utilities/localStorage.js
  var require_localStorage = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get getJSON() {
        return getJSON;
      },
      get removeJSON() {
        return removeJSON;
      },
      get setJSON() {
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
  });

  // lib/element/camera/gaming.js
  var require_gaming = __commonJS((exports) => {
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
  });

  // lib/miscellaneous/zoom.js
  var require_zoom = __commonJS((exports) => {
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
  });

  // lib/element/camera/design.js
  var require_design = __commonJS((exports) => {
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
  });

  // lib/utilities/preload.js
  var require_preload = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get default() {
        return _default;
      },
      get preloadImageMap() {
        return preloadImageMap;
      },
      get preloadImages() {
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
  });

  // lib/primitive/normal.js
  var require_normal = __commonJS((exports) => {
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
  });

  // lib/primitive/vertex.js
  var require_vertex = __commonJS((exports) => {
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
  });

  // lib/utilities/facet.js
  var require_facet = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get calculateArea() {
        return calculateArea;
      },
      get calculateEdges() {
        return calculateEdges;
      },
      get calculateNormal() {
        return calculateNormal;
      },
      get cloneEdges() {
        return cloneEdges;
      },
      get cloneNormal() {
        return cloneNormal;
      },
      get cloneVertices() {
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
  });

  // lib/primitive/facet.js
  var require_facet2 = __commonJS((exports) => {
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
  });

  // lib/primitive/facet/coloured.js
  var require_coloured = __commonJS((exports) => {
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
  });

  // lib/element/canvas/coloured.js
  var require_coloured2 = __commonJS((exports) => {
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
  });

  // lib/utilities/texture.js
  var require_texture5 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get calculateAdjustedTextureCoordinateTuples() {
        return calculateAdjustedTextureCoordinateTuples;
      },
      get calculateMappedTextureCoordinateTuples() {
        return calculateMappedTextureCoordinateTuples;
      },
      get cloneTextureCoordinateTuples() {
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
  });

  // lib/primitive/facet/textured.js
  var require_textured = __commonJS((exports) => {
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
  });

  // lib/element/canvas/textured.js
  var require_textured2 = __commonJS((exports) => {
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
  });

  // lib/index.js
  var require_lib = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get Camera() {
        return _camera.default;
      },
      get Canvas() {
        return _canvas.default;
      },
      get CanvasElement() {
        return _canvas1.default;
      },
      get ColouredCanvasElement() {
        return _coloured.default;
      },
      get DesignCamera() {
        return _design.default;
      },
      get GamingCamera() {
        return _gaming.default;
      },
      get Mask() {
        return _mask.default;
      },
      get Part() {
        return _part.default;
      },
      get React() {
        return _react.default;
      },
      get Scene() {
        return _scene.default;
      },
      get TexturedCanvasElement() {
        return _textured.default;
      },
      get matrixMaths() {
        return _matrix.default;
      },
      get preloadUtilities() {
        return _preload.default;
      },
      get vectorMaths() {
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
  });

  // lib/example/element/colouredSquare.js
  var require_colouredSquare = __commonJS((exports) => {
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
  });

  // lib/example/element/face.js
  var require_face = __commonJS((exports) => {
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
  });

  // lib/example/element/cube.js
  var require_cube = __commonJS((exports) => {
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
  });

  // lib/example/cube.js
  var require_cube2 = __commonJS((exports) => {
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
  });

  // lib/example/element/texturedQuadrangle.js
  var require_texturedQuadrangle = __commonJS((exports) => {
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
  });

  // lib/example/tiling.js
  var require_tiling = __commonJS((exports) => {
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
  });

  // lib/example/simple.js
  var require_simple = __commonJS((exports) => {
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
  });

  // lib/example/masking.js
  var require_masking2 = __commonJS((exports) => {
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
  });

  // lib/example/element/texturedTriangle.js
  var require_texturedTriangle = __commonJS((exports) => {
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
  });

  // lib/example/element/side.js
  var require_side = __commonJS((exports) => {
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
  });

  // lib/example/element/pyramid.js
  var require_pyramid = __commonJS((exports) => {
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
  });

  // lib/example/pyramid.js
  var require_pyramid2 = __commonJS((exports) => {
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
  });

  // lib/example.js
  var require_example = __commonJS((exports) => {
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
  });
  require_example();
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NvbnN0YW50cy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9sZXZlbHMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvbWV0aG9kcy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9oZWFkZXJzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2tleUNvZGVzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2VuY29kaW5ncy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9jaGFyYWN0ZXJzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3N0YXR1c0NvZGVzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2NvbnRlbnRUeXBlcy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9zdGF0dXNNZXNzYWdlcy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9jb25zdGFudHMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvdXRpbGl0aWVzL2FycmF5LmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9wYXRoLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9odHRwLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvdXRpbGl0aWVzL3ZlcnNpb24uanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvdXRpbGl0aWVzL2FzeW5jaHJvbm91cy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy91dGlsaXRpZXMvYWpheC5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9icm93c2VyLmpzIiwgInNyYy91dGlsaXRpZXMvYXJyYXkuanMiLCAic3JjL2VsZW1lbnQuanMiLCAic3JjL21hdGhzL3ZlY3Rvci5qcyIsICJzcmMvcHJpbWl0aXZlL2VkZ2UuanMiLCAic3JjL3V0aWxpdGllcy9taWRQb2ludC5qcyIsICJzcmMvcHJpbWl0aXZlL2VkZ2UvbWFza2luZy5qcyIsICJzcmMvZGVmYXVsdHMuanMiLCAic3JjL3V0aWxpdGllcy9hcHByb3hpbWF0ZS5qcyIsICJzcmMvdXRpbGl0aWVzL2FuZ2xlLmpzIiwgInNyYy91dGlsaXRpZXMvcXVhdGVybmlvbi5qcyIsICJzcmMvdXRpbGl0aWVzL3JvdGF0aW9uLmpzIiwgInNyYy91dGlsaXRpZXMvaW50ZXJzZWN0aW9uLmpzIiwgInNyYy9wcmltaXRpdmUvdmVydGljYWxMaW5lLmpzIiwgInNyYy91dGlsaXRpZXMvdmVydGljZXMuanMiLCAic3JjL3ByaW1pdGl2ZS9tYXNraW5nRmFjZXQuanMiLCAic3JjL21hdGhzL21hdHJpeC5qcyIsICJzcmMvdXRpbGl0aWVzL21hdHJpeC5qcyIsICJzcmMvdXRpbGl0aWVzL3RyYW5zZm9ybS5qcyIsICJzcmMvZWxlbWVudC9tYXNrLmpzIiwgInNyYy91dGlsaXRpZXMvZWxlbWVudC5qcyIsICJzcmMvZWxlbWVudC9jYW52YXMuanMiLCAic3JjL2VsZW1lbnQvY2FudmFzL2Z1bmN0aW9uLmpzIiwgInNyYy91dGlsaXRpZXMvZWxlbWVudHMuanMiLCAic3JjL3JlYWN0LmpzIiwgInNyYy94Z2wuanMiLCAic3JjL21peGlucy9kZXB0aC5qcyIsICJzcmMvZXJyb3JzLmpzIiwgInNyYy9taXhpbnMvc2hhZGVyLmpzIiwgInNyYy9taXhpbnMvYnVmZmVyLmpzIiwgInNyYy9taXhpbnMvY29sb3VyLmpzIiwgInNyYy9taXhpbnMvbWF0cml4LmpzIiwgInNyYy9taXhpbnMvdGV4dHVyZS5qcyIsICJzcmMvbWl4aW5zL3Byb2dyYW0uanMiLCAic3JjL21peGlucy9ibGVuZGluZy5qcyIsICJzcmMvbWl4aW5zL2xvY2F0aW9uLmpzIiwgInNyYy9jYW52YXMuanMiLCAic3JjL3JlbmRlcmVyLmpzIiwgInNyYy9yZW5kZXJlci9kYXRhLmpzIiwgInNyYy9yZW5kZXJlci9kYXRhL2NvbG91ci5qcyIsICJzcmMvcmVuZGVyZXIvc291cmNlL2xpZ2h0aW5nLmpzIiwgInNyYy9yZW5kZXJlci9zb3VyY2UvcG9zaXRpb24uanMiLCAic3JjL3JlbmRlcmVyL3NvdXJjZS9jb2xvdXIvdmVydGV4U2hhZGVyLmpzIiwgInNyYy9yZW5kZXJlci9zb3VyY2UvY29sb3VyL2ZyYWdtZW50U2hhZGVyLmpzIiwgInNyYy9yZW5kZXJlci9idWZmZXJzLmpzIiwgInNyYy9yZW5kZXJlci9idWZmZXJzL2NvbG91ci5qcyIsICJzcmMvcmVuZGVyZXIvbG9jYXRpb25zL3VuaWZvcm0uanMiLCAic3JjL3JlbmRlcmVyL2xvY2F0aW9ucy9jb2xvdXIvdW5pZm9ybS5qcyIsICJzcmMvcmVuZGVyZXIvbG9jYXRpb25zL2F0dHJpYnV0ZS5qcyIsICJzcmMvcmVuZGVyZXIvbG9jYXRpb25zL2NvbG91ci9hdHRyaWJ1dGUuanMiLCAic3JjL3JlbmRlcmVyL2NvbG91ci5qcyIsICJzcmMvcmVuZGVyZXIvc291cmNlL3RleHR1cmUvdmVydGV4U2hhZGVyLmpzIiwgInNyYy9yZW5kZXJlci9kYXRhL3RleHR1cmUuanMiLCAic3JjL3JlbmRlcmVyL3NvdXJjZS90ZXh0dXJlL2ZyYWdtZW50U2hhZGVyLmpzIiwgInNyYy9yZW5kZXJlci9idWZmZXJzL3RleHR1cmUuanMiLCAic3JjL3JlbmRlcmVyL2xvY2F0aW9ucy90ZXh0dXJlL3VuaWZvcm0uanMiLCAic3JjL3JlbmRlcmVyL2xvY2F0aW9ucy90ZXh0dXJlL2F0dHJpYnV0ZS5qcyIsICJzcmMvcmVuZGVyZXIvdGV4dHVyZS5qcyIsICJzcmMvcmVuZGVyZXIvdGV4dHVyZS9pbWFnZXMuanMiLCAic3JjL3JlbmRlcmVyL3RleHR1cmUvaW1hZ2VNYXAuanMiLCAic3JjL2VsZW1lbnQvcGFydC5qcyIsICJzcmMvZWxlbWVudC9jYW1lcmEuanMiLCAic3JjL2V2ZW50VHlwZXMuanMiLCAic3JjL21pc2NlbGxhbmVvdXMva2V5RXZlbnRzLmpzIiwgInNyYy9taXNjZWxsYW5lb3VzL21vdXNlRXZlbnRzLmpzIiwgInNyYy9taXNjZWxsYW5lb3VzL3VzZXJJbnB1dC5qcyIsICJzcmMvZWxlbWVudC9zY2VuZS5qcyIsICJzcmMvdXRpbGl0aWVzL29mZnNldHMuanMiLCAic3JjL21pc2NlbGxhbmVvdXMvcGFuLmpzIiwgInNyYy9taXNjZWxsYW5lb3VzL3RpbHQuanMiLCAic3JjL3V0aWxpdGllcy9sb2NhbFN0b3JhZ2UuanMiLCAic3JjL2VsZW1lbnQvY2FtZXJhL2dhbWluZy5qcyIsICJzcmMvbWlzY2VsbGFuZW91cy96b29tLmpzIiwgInNyYy9lbGVtZW50L2NhbWVyYS9kZXNpZ24uanMiLCAic3JjL3V0aWxpdGllcy9wcmVsb2FkLmpzIiwgInNyYy9wcmltaXRpdmUvbm9ybWFsLmpzIiwgInNyYy9wcmltaXRpdmUvdmVydGV4LmpzIiwgInNyYy91dGlsaXRpZXMvZmFjZXQuanMiLCAic3JjL3ByaW1pdGl2ZS9mYWNldC5qcyIsICJzcmMvcHJpbWl0aXZlL2ZhY2V0L2NvbG91cmVkLmpzIiwgInNyYy9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZC5qcyIsICJzcmMvdXRpbGl0aWVzL3RleHR1cmUuanMiLCAic3JjL3ByaW1pdGl2ZS9mYWNldC90ZXh0dXJlZC5qcyIsICJzcmMvZWxlbWVudC9jYW52YXMvdGV4dHVyZWQuanMiLCAic3JjL2luZGV4LmpzIiwgInNyYy9leGFtcGxlL2VsZW1lbnQvY29sb3VyZWRTcXVhcmUuanMiLCAic3JjL2V4YW1wbGUvZWxlbWVudC9mYWNlLmpzIiwgInNyYy9leGFtcGxlL2VsZW1lbnQvY3ViZS5qcyIsICJzcmMvZXhhbXBsZS9jdWJlLmpzIiwgInNyYy9leGFtcGxlL2VsZW1lbnQvdGV4dHVyZWRRdWFkcmFuZ2xlLmpzIiwgInNyYy9leGFtcGxlL3RpbGluZy5qcyIsICJzcmMvZXhhbXBsZS9zaW1wbGUuanMiLCAic3JjL2V4YW1wbGUvbWFza2luZy5qcyIsICJzcmMvZXhhbXBsZS9lbGVtZW50L3RleHR1cmVkVHJpYW5nbGUuanMiLCAic3JjL2V4YW1wbGUvZWxlbWVudC9zaWRlLmpzIiwgInNyYy9leGFtcGxlL2VsZW1lbnQvcHlyYW1pZC5qcyIsICJzcmMvZXhhbXBsZS9weXJhbWlkLmpzIiwgInNyYy9leGFtcGxlLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFdFQkdMID0gXCJ3ZWJnbFwiO1xuZXhwb3J0IGNvbnN0IFdJRFRIID0gXCJ3aWR0aFwiO1xuZXhwb3J0IGNvbnN0IEhFSUdIVCA9IFwiaGVpZ2h0XCI7XG5leHBvcnQgY29uc3QgQ0FOVkFTID0gXCJjYW52YXNcIjtcbmV4cG9ydCBjb25zdCBTVFJJTkcgPSBcInN0cmluZ1wiO1xuZXhwb3J0IGNvbnN0IEZVTkNUSU9OID0gXCJmdW5jdGlvblwiO1xuZXhwb3J0IGNvbnN0IEFOT05ZTU9VUyA9IFwiYW5vbnltb3VzXCI7XG5leHBvcnQgY29uc3QgR0FNSU5HX0NBTUVSQSA9IFwiZ2FtaW5nX2NhbWVyYVwiO1xuZXhwb3J0IGNvbnN0IERFU0lHTl9DQU1FUkEgPSBcImRlc2lnbl9jYW1lcmFcIjtcbmV4cG9ydCBjb25zdCBWRVJUSUNFU19MRU5HVEggPSAzO1xuZXhwb3J0IGNvbnN0IE1JTklNVU1fRElTVEFOQ0UgPSAxO1xuZXhwb3J0IGNvbnN0IElOVkVSVF9NVUxUSVBMSUVSID0gLTE7XG5leHBvcnQgY29uc3QgQU5HTEVTX01VTFRJUExJRVIgPSAwLjAxO1xuZXhwb3J0IGNvbnN0IE1PVVNFX1dIRUVMX0RFTFRBX01VTFRJUExJRVIgPSAwLjI1O1xuZXhwb3J0IGNvbnN0IERFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSID0gTWF0aC5QSSAvIDE4MDtcbmV4cG9ydCBjb25zdCBFWFRfVEVYVFVSRV9GSUxURVJfQU5JU09UUk9QSUMgPSBcIkVYVF90ZXh0dXJlX2ZpbHRlcl9hbmlzb3Ryb3BpY1wiO1xuZXhwb3J0IGNvbnN0IE1PWl9FWFRfVEVYVFVSRV9GSUxURVJfQU5JU09UUk9QSUMgPSBcIk1PWl9FWFRfdGV4dHVyZV9maWx0ZXJfYW5pc290cm9waWNcIjtcbmV4cG9ydCBjb25zdCBXRUJLSVRfRVhUX1RFWFRVUkVfRklMVEVSX0FOSVNPVFJPUElDID0gXCJXRUJLSVRfRVhUX3RleHR1cmVfZmlsdGVyX2FuaXNvdHJvcGljXCI7XG5leHBvcnQgY29uc3QgUkVMQVRJVkVfTU9VU0VfQ09PUkRJTkFURVNfTVVMVElQTElFUiA9IDAuMDI1O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgVFJBQ0VfTEVWRUwgPSBcInRyYWNlXCI7XG5leHBvcnQgY29uc3QgREVCVUdfTEVWRUwgPSBcImRlYnVnXCI7XG5leHBvcnQgY29uc3QgSU5GT19MRVZFTCA9IFwiaW5mb1wiO1xuZXhwb3J0IGNvbnN0IFdBUk5JTkdfTEVWRUwgPSBcIndhcm5pbmdcIjtcbmV4cG9ydCBjb25zdCBFUlJPUl9MRVZFTCA9IFwiZXJyb3JcIjtcbmV4cG9ydCBjb25zdCBGQVRBTF9MRVZFTCA9IFwiZmF0YWxcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBUUkFDRV9MRVZFTCxcbiAgREVCVUdfTEVWRUwsXG4gIElORk9fTEVWRUwsXG4gIFdBUk5JTkdfTEVWRUwsXG4gIEVSUk9SX0xFVkVMLFxuICBGQVRBTF9MRVZFTFxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IEdFVF9NRVRIT0QgPSBcIkdFVFwiO1xuZXhwb3J0IGNvbnN0IFBPU1RfTUVUSE9EID0gXCJQT1NUXCI7XG5leHBvcnQgY29uc3QgUEFUQ0hfTUVUSE9EID0gXCJQQVRDSFwiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9NRVRIT0QgPSBcIkRFTEVURVwiO1xuZXhwb3J0IGNvbnN0IE9QVElPTlNfTUVUSE9EID0gXCJPUFRJT05TXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgR0VUX01FVEhPRCxcbiAgUE9TVF9NRVRIT0QsXG4gIFBBVENIX01FVEhPRCxcbiAgREVMRVRFX01FVEhPRCxcbiAgT1BUSU9OU19NRVRIT0Rcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBQUkFHTUFfSEVBREVSID0gXCJwcmFnbWFcIjtcbmV4cG9ydCBjb25zdCBBQ0NFUFRfSEVBREVSID0gXCJhY2NlcHRcIjtcbmV4cG9ydCBjb25zdCBMT0NBVElPTl9IRUFERVIgPSBcImxvY2F0aW9uXCI7XG5leHBvcnQgY29uc3QgVVNFUl9BR0VOVF9IRUFERVIgPSBcInVzZXItYWdlbnRcIjtcbmV4cG9ydCBjb25zdCBDT05URU5UX1RZUEVfSEVBREVSID0gXCJjb250ZW50LXR5cGVcIjtcbmV4cG9ydCBjb25zdCBBVVRIT1JJWkFUSU9OX0hFQURFUiA9IFwiYXV0aG9yaXphdGlvblwiO1xuZXhwb3J0IGNvbnN0IENBQ0hFX0NPTlRST0xfSEVBREVSID0gXCJjYWNoZS1jb250cm9sXCI7XG5leHBvcnQgY29uc3QgQ09OVEVOVF9MRU5HVEhfSEVBREVSID0gXCJjb250ZW50LWxlbmd0aFwiO1xuZXhwb3J0IGNvbnN0IFRSQU5TRkVSX0VOQ09ESU5HX0hFQURFUiA9IFwidHJhbnNmZXItZW5jb2RpbmdcIjtcbmV4cG9ydCBjb25zdCBDT05URU5UX0RJU1BPU0lUSU9OX0hFQURFUiA9IFwiY29udGVudC1kaXNwb3NpdGlvblwiO1xuZXhwb3J0IGNvbnN0IEFDQ0VTU19DT05UUk9MX0FMTE9XX09SSUdJTl9IRUFERVIgPSBcImFjY2Vzcy1jb250cm9sLWFsbG93LW9yaWdpblwiO1xuZXhwb3J0IGNvbnN0IEFDQ0VTU19DT05UUk9MX0FMTE9XX01FVEhPRFNfSEVBREVSID0gXCJhY2Nlc3MtY29udHJvbC1hbGxvdy1tZXRob2RzXCI7XG5leHBvcnQgY29uc3QgQUNDRVNTX0NPTlRST0xfQUxMT1dfSEVBREVSU19IRUFERVIgPSBcImFjY2Vzcy1jb250cm9sLWFsbG93LWhlYWRlcnNcIjtcbmV4cG9ydCBjb25zdCBBQ0NFU1NfQ09OVFJPTF9SRVFVRVNUX01FVEhPRF9IRUFERVIgPSBcImFjY2Vzcy1jb250cm9sLXJlcXVlc3QtbWV0aG9kXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgUFJBR01BX0hFQURFUixcbiAgQUNDRVBUX0hFQURFUixcbiAgTE9DQVRJT05fSEVBREVSLFxuICBVU0VSX0FHRU5UX0hFQURFUixcbiAgQ09OVEVOVF9UWVBFX0hFQURFUixcbiAgQVVUSE9SSVpBVElPTl9IRUFERVIsXG4gIENBQ0hFX0NPTlRST0xfSEVBREVSLFxuICBDT05URU5UX0xFTkdUSF9IRUFERVIsXG4gIFRSQU5TRkVSX0VOQ09ESU5HX0hFQURFUixcbiAgQ09OVEVOVF9ESVNQT1NJVElPTl9IRUFERVIsXG4gIEFDQ0VTU19DT05UUk9MX0FMTE9XX09SSUdJTl9IRUFERVIsXG4gIEFDQ0VTU19DT05UUk9MX0FMTE9XX01FVEhPRFNfSEVBREVSLFxuICBBQ0NFU1NfQ09OVFJPTF9BTExPV19IRUFERVJTX0hFQURFUixcbiAgQUNDRVNTX0NPTlRST0xfUkVRVUVTVF9NRVRIT0RfSEVBREVSXG59OyIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFRBQl9LRVlfQ09ERSA9IDk7XG5leHBvcnQgY29uc3QgU0hJRlRfS0VZX0NPREUgPSAxNjtcbmV4cG9ydCBjb25zdCBFTlRFUl9LRVlfQ09ERSA9IDEzO1xuZXhwb3J0IGNvbnN0IEVTQ0FQRV9LRVlfQ09ERSA9IDI3O1xuZXhwb3J0IGNvbnN0IERFTEVURV9LRVlfQ09ERSA9IDQ2O1xuZXhwb3J0IGNvbnN0IEJBQ0tTUEFDRV9LRVlfQ09ERSA9IDg7XG5leHBvcnQgY29uc3QgQVJST1dfVVBfS0VZX0NPREUgPSAzODtcbmV4cG9ydCBjb25zdCBBUlJPV19ET1dOX0tFWV9DT0RFID0gNDA7XG5leHBvcnQgY29uc3QgQVJST1dfTEVGVF9LRVlfQ09ERSA9IDM3O1xuZXhwb3J0IGNvbnN0IEFSUk9XX1JJR0hUX0tFWV9DT0RFID0gMzk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgVEFCX0tFWV9DT0RFLFxuICBTSElGVF9LRVlfQ09ERSxcbiAgRU5URVJfS0VZX0NPREUsXG4gIEVTQ0FQRV9LRVlfQ09ERSxcbiAgREVMRVRFX0tFWV9DT0RFLFxuICBCQUNLU1BBQ0VfS0VZX0NPREUsXG4gIEFSUk9XX1VQX0tFWV9DT0RFLFxuICBBUlJPV19ET1dOX0tFWV9DT0RFLFxuICBBUlJPV19MRUZUX0tFWV9DT0RFLFxuICBBUlJPV19SSUdIVF9LRVlfQ09ERVxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFVURjhfRU5DT0RJTkcgPSBcInV0ZjhcIjtcbmV4cG9ydCBjb25zdCBVVEZfOF9FTkNPRElORyA9IFwidXRmLThcIjtcbmV4cG9ydCBjb25zdCBCQVNFNjRfRU5DT0RJTkcgPSBcImJhc2U2NFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFVURjhfRU5DT0RJTkcsXG4gIFVURl84X0VOQ09ESU5HLFxuICBCQVNFNjRfRU5DT0RJTkdcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBVUF9DSEFSQUNURVIgPSBcIlx1MDAxYltBXCI7XG5leHBvcnQgY29uc3QgRVRYX0NIQVJBQ1RFUiA9IFwiXFx1MDAwM1wiO1xuZXhwb3J0IGNvbnN0IEJBUl9DSEFSQUNURVIgPSBcInxcIjtcbmV4cG9ydCBjb25zdCBIQVRfQ0hBUkFDVEVSID0gXCJeXCI7XG5leHBvcnQgY29uc3QgUExVU19DSEFSQUNURVIgPSBcIitcIjtcbmV4cG9ydCBjb25zdCBEQVNIX0NIQVJBQ1RFUiA9IFwiLVwiO1xuZXhwb3J0IGNvbnN0IERPV05fQ0hBUkFDVEVSID0gXCJcdTAwMWJbQlwiO1xuZXhwb3J0IGNvbnN0IExFRlRfQ0hBUkFDVEVSID0gXCJcdTAwMWJbRFwiO1xuZXhwb3J0IGNvbnN0IFJJR0hUX0NIQVJBQ1RFUiA9IFwiXHUwMDFiW0NcIjtcbmV4cG9ydCBjb25zdCBTUEFDRV9DSEFSQUNURVIgPSBcIiBcIjtcbmV4cG9ydCBjb25zdCBDT01NQV9DSEFSQUNURVIgPSBcIixcIjtcbmV4cG9ydCBjb25zdCBDT0xPTl9DSEFSQUNURVIgPSBcIjpcIjtcbmV4cG9ydCBjb25zdCBQRVJJT0RfQ0hBUkFDVEVSID0gXCIuXCI7XG5leHBvcnQgY29uc3QgRE9MTEFSX0NIQVJBQ1RFUiA9IFwiJFwiO1xuZXhwb3J0IGNvbnN0IENUUkxfQ19DSEFSQUNURVIgPSBcIl5DXCI7XG5leHBvcnQgY29uc3QgRVNDQVBFX0NIQVJBQ1RFUiA9IFwiXFx1MDAxYlwiO1xuZXhwb3J0IGNvbnN0IEFTVEVSSVNLX0NIQVJBQ1RFUiA9IFwiKlwiO1xuZXhwb3J0IGNvbnN0IFdJTERDQVJEX0NIQVJBQ1RFUiA9IFwiKlwiO1xuZXhwb3J0IGNvbnN0IEJBQ0tUSUNLX0RFTElNSVRFUiA9IFwiYFwiO1xuZXhwb3J0IGNvbnN0IE5FV19MSU5FX0NIQVJBQ1RFUiA9IFwiXFxuXCI7XG5leHBvcnQgY29uc3QgQU1QRVJTQU5EX0NIQVJBQ1RFUiA9IFwiJlwiO1xuZXhwb3J0IGNvbnN0IEJBQ0tTTEFTSF9DSEFSQUNURVIgPSBcIlxcXFxcIjtcbmV4cG9ydCBjb25zdCBCQUNLU1BBQ0VfQ0hBUkFDVEVSID0gU3RyaW5nLmZyb21DaGFyQ29kZSgxMjcpO1xuZXhwb3J0IGNvbnN0IFFVRVNUSU9OX01BUktfQ0hBUkFDVEVSID0gXCI/XCI7XG5leHBvcnQgY29uc3QgRk9SV0FSRF9TTEFTSF9DSEFSQUNURVIgPSBcIi9cIjtcbmV4cG9ydCBjb25zdCBPUEVOSU5HX0JSQUNLRVRfQ0hBUkFDVEVSID0gXCIoXCI7XG5leHBvcnQgY29uc3QgQ0xPU0lOR19CUkFDS0VUX0NIQVJBQ1RFUiA9IFwiKVwiO1xuZXhwb3J0IGNvbnN0IENBUlJJQUdFX1JFVFVSTl9DSEFSQUNURVIgPSBcIlxcclwiO1xuZXhwb3J0IGNvbnN0IEVYQ0xBTUFUSU9OX01BUktfQ0hBUkFDVEVSID0gXCIhXCI7XG5leHBvcnQgY29uc3QgT1BFTklOR19DVVJMWV9CUkFDS0VUX0NIQVJBQ1RFUiA9IFwie1wiO1xuZXhwb3J0IGNvbnN0IENMT1NJTkdfQ1VSTFlfQlJBQ0tFVF9DSEFSQUNURVIgPSBcIn1cIjtcbmV4cG9ydCBjb25zdCBPUEVOSU5HX1NRVUFSRV9CUkFDS0VUX0NIQVJBQ1RFUiA9IFwiW1wiO1xuZXhwb3J0IGNvbnN0IENMT1NJTkdfU1FVQVJFX0JSQUNLRVRfQ0hBUkFDVEVSID0gXCJdXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgVVBfQ0hBUkFDVEVSLFxuICBFVFhfQ0hBUkFDVEVSLFxuICBCQVJfQ0hBUkFDVEVSLFxuICBIQVRfQ0hBUkFDVEVSLFxuICBQTFVTX0NIQVJBQ1RFUixcbiAgREFTSF9DSEFSQUNURVIsXG4gIERPV05fQ0hBUkFDVEVSLFxuICBMRUZUX0NIQVJBQ1RFUixcbiAgUklHSFRfQ0hBUkFDVEVSLFxuICBTUEFDRV9DSEFSQUNURVIsXG4gIENPTU1BX0NIQVJBQ1RFUixcbiAgQ09MT05fQ0hBUkFDVEVSLFxuICBQRVJJT0RfQ0hBUkFDVEVSLFxuICBET0xMQVJfQ0hBUkFDVEVSLFxuICBDVFJMX0NfQ0hBUkFDVEVSLFxuICBFU0NBUEVfQ0hBUkFDVEVSLFxuICBBU1RFUklTS19DSEFSQUNURVIsXG4gIFdJTERDQVJEX0NIQVJBQ1RFUixcbiAgQkFDS1RJQ0tfREVMSU1JVEVSLFxuICBORVdfTElORV9DSEFSQUNURVIsXG4gIEFNUEVSU0FORF9DSEFSQUNURVIsXG4gIEJBQ0tTTEFTSF9DSEFSQUNURVIsXG4gIEJBQ0tTUEFDRV9DSEFSQUNURVIsXG4gIFFVRVNUSU9OX01BUktfQ0hBUkFDVEVSLFxuICBGT1JXQVJEX1NMQVNIX0NIQVJBQ1RFUixcbiAgT1BFTklOR19CUkFDS0VUX0NIQVJBQ1RFUixcbiAgQ0xPU0lOR19CUkFDS0VUX0NIQVJBQ1RFUixcbiAgQ0FSUklBR0VfUkVUVVJOX0NIQVJBQ1RFUixcbiAgRVhDTEFNQVRJT05fTUFSS19DSEFSQUNURVIsXG4gIE9QRU5JTkdfQ1VSTFlfQlJBQ0tFVF9DSEFSQUNURVIsXG4gIENMT1NJTkdfQ1VSTFlfQlJBQ0tFVF9DSEFSQUNURVIsXG4gIE9QRU5JTkdfU1FVQVJFX0JSQUNLRVRfQ0hBUkFDVEVSLFxuICBDTE9TSU5HX1NRVUFSRV9CUkFDS0VUX0NIQVJBQ1RFUlxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFpFUk9fMF9TVEFUVVNfQ09ERSA9IDA7XG5leHBvcnQgY29uc3QgT0tfMjAwX1NUQVRVU19DT0RFID0gMjAwO1xuZXhwb3J0IGNvbnN0IEZPVU5EXzMwMl9TVEFUVVNfQ09ERSA9IDMwMjtcbmV4cG9ydCBjb25zdCBDUkVBVEVEXzIwMV9TVEFUVVNfQ09ERSA9IDIwMTtcbmV4cG9ydCBjb25zdCBTRUVfT1RIRVJfMzAzX1NUQVRVU19DT0RFID0gMzAzO1xuZXhwb3J0IGNvbnN0IEZPUkJJRERFTl80MDNfU1RBVFVTX0NPREUgPSA0MDM7XG5leHBvcnQgY29uc3QgTk9UX0ZPVU5EXzQwNF9TVEFUVVNfQ09ERSA9IDQwNDtcbmV4cG9ydCBjb25zdCBOT19DT05URU5UXzIwNF9TVEFUVVNfQ09ERSA9IDIwNDtcbmV4cG9ydCBjb25zdCBCQURfR0FURVdBWV81MDJfU1RBVFVTX0NPREUgPSA1MDI7XG5leHBvcnQgY29uc3QgQkFEX1JFUVVFU1RfNDAwX1NUQVRVU19DT0RFID0gNDAwO1xuZXhwb3J0IGNvbnN0IFVOQVVUSE9SSVpFRF80MDFfU1RBVFVTX0NPREUgPSA0MDE7XG5leHBvcnQgY29uc3QgUkVRVUVTVF9USU1FT1VUXzQwOF9TVEFUVVNfQ09ERSA9IDQwODtcbmV4cG9ydCBjb25zdCBUT09fTUFOWV9SRVFVRVNUU180MjlfU1RBVFVTX0NPREUgPSA0Mjk7XG5leHBvcnQgY29uc3QgU0VSVklDRV9VTkFWQUlMQUJMRV81MDNfU1RBVFVTX0NPREUgPSA1MDM7XG5leHBvcnQgY29uc3QgSU5URVJOQUxfU0VSVkVSX0VSUk9SXzUwMF9TVEFUVVNfQ09ERSA9IDUwMDtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBaRVJPXzBfU1RBVFVTX0NPREUsXG4gIE9LXzIwMF9TVEFUVVNfQ09ERSxcbiAgRk9VTkRfMzAyX1NUQVRVU19DT0RFLFxuICBDUkVBVEVEXzIwMV9TVEFUVVNfQ09ERSxcbiAgU0VFX09USEVSXzMwM19TVEFUVVNfQ09ERSxcbiAgRk9SQklEREVOXzQwM19TVEFUVVNfQ09ERSxcbiAgTk9UX0ZPVU5EXzQwNF9TVEFUVVNfQ09ERSxcbiAgTk9fQ09OVEVOVF8yMDRfU1RBVFVTX0NPREUsXG4gIEJBRF9HQVRFV0FZXzUwMl9TVEFUVVNfQ09ERSxcbiAgQkFEX1JFUVVFU1RfNDAwX1NUQVRVU19DT0RFLFxuICBVTkFVVEhPUklaRURfNDAxX1NUQVRVU19DT0RFLFxuICBSRVFVRVNUX1RJTUVPVVRfNDA4X1NUQVRVU19DT0RFLFxuICBUT09fTUFOWV9SRVFVRVNUU180MjlfU1RBVFVTX0NPREUsXG4gIFNFUlZJQ0VfVU5BVkFJTEFCTEVfNTAzX1NUQVRVU19DT0RFLFxuICBJTlRFUk5BTF9TRVJWRVJfRVJST1JfNTAwX1NUQVRVU19DT0RFXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgVEVYVF9IVE1MX0NPTlRFTlRfVFlQRSA9IFwidGV4dC9odG1sXCI7XG5leHBvcnQgY29uc3QgVEVYVF9QTEFJTl9DT05URU5UX1RZUEUgPSBcInRleHQvcGxhaW5cIjtcbmV4cG9ydCBjb25zdCBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRSA9IFwiYXBwbGljYXRpb24vanNvblwiO1xuZXhwb3J0IGNvbnN0IFRFWFRfSFRNTF9DSEFSU0VUX1VURl84X0NPTlRFTlRfVFlQRSA9IFwidGV4dC9odG1sOyBjaGFyc2V0PXV0Zi04XCI7XG5leHBvcnQgY29uc3QgVEVYVF9QTEFJTl9DSEFSU0VUX1VURl84X0NPTlRFTlRfVFlQRSA9IFwidGV4dC9wbGFpbjsgY2hhcnNldD11dGYtOFwiO1xuZXhwb3J0IGNvbnN0IEFQUExJQ0FUSU9OX09DVEVUX1NUUkVBTV9DT05URU5UX1RZUEUgPSBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiO1xuZXhwb3J0IGNvbnN0IEFQUExJQ0FUSU9OX1hfV1dXX0ZPUk1fRU5DT0RFRF9DT05URU5UX1RZUEUgPSBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiO1xuZXhwb3J0IGNvbnN0IEFQUExJQ0FUSU9OX0pTT05fQ0hBUlNFVF9VVEZfOF9DT05URU5UX1RZUEUgPSBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIjtcbmV4cG9ydCBjb25zdCBBUFBMSUNBVElPTl9YX1dXV19GT1JNX0VOQ09ERURfQ0hBUlNFVF9VVEZfOF9DT05URU5UX1RZUEUgPSBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD11dGYtOFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFRFWFRfSFRNTF9DT05URU5UX1RZUEUsXG4gIFRFWFRfUExBSU5fQ09OVEVOVF9UWVBFLFxuICBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRSxcbiAgVEVYVF9IVE1MX0NIQVJTRVRfVVRGXzhfQ09OVEVOVF9UWVBFLFxuICBURVhUX1BMQUlOX0NIQVJTRVRfVVRGXzhfQ09OVEVOVF9UWVBFLFxuICBBUFBMSUNBVElPTl9PQ1RFVF9TVFJFQU1fQ09OVEVOVF9UWVBFLFxuICBBUFBMSUNBVElPTl9KU09OX0NIQVJTRVRfVVRGXzhfQ09OVEVOVF9UWVBFLFxuICBBUFBMSUNBVElPTl9YX1dXV19GT1JNX0VOQ09ERURfQ09OVEVOVF9UWVBFLFxuICBBUFBMSUNBVElPTl9YX1dXV19GT1JNX0VOQ09ERURfQ0hBUlNFVF9VVEZfOF9DT05URU5UX1RZUEVcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBaRVJPXzBfU1RBVFVTX01FU1NBR0UgPSBcIlwiO1xuZXhwb3J0IGNvbnN0IE9LXzIwMF9TVEFUVVNfTUVTU0FHRSA9IFwiT0tcIjtcbmV4cG9ydCBjb25zdCBGT1VORF8zMDJfU1RBVFVTX01FU1NBR0UgPSBcIkZvdW5kXCI7XG5leHBvcnQgY29uc3QgQ1JFQVRFRF8yMDFfU1RBVFVTX01FU1NBR0UgPSBcIkNyZWF0ZWRcIjtcbmV4cG9ydCBjb25zdCBTRUVfT1RIRVJfMzAzX1NUQVRVU19NRVNTQUdFID0gXCJTZWUgb3RoZXJcIjtcbmV4cG9ydCBjb25zdCBGT1JCSURERU5fNDAzX1NUQVRVU19NRVNTQUdFID0gXCJGb3JiaWRkZW5cIjtcbmV4cG9ydCBjb25zdCBOT1RfRk9VTkRfNDA0X1NUQVRVU19NRVNTQUdFID0gXCJOb3QgZm91bmRcIjtcbmV4cG9ydCBjb25zdCBOT19DT05URU5UXzIwNF9TVEFUVVNfTUVTU0FHRSA9IFwiTm8gY29udGVudFwiO1xuZXhwb3J0IGNvbnN0IEJBRF9HQVRFV0FZXzUwMl9TVEFUVVNfTUVTU0FHRSA9IFwiQmFkIGdhdGV3YXlcIjtcbmV4cG9ydCBjb25zdCBCQURfUkVRVUVTVF80MDBfU1RBVFVTX01FU1NBR0UgPSBcIkJhZCByZXF1ZXN0XCI7XG5leHBvcnQgY29uc3QgVU5BVVRIT1JJWkVEXzQwMV9TVEFUVVNfTUVTU0FHRSA9IFwiVW5hdXRob3JpemVkXCI7XG5leHBvcnQgY29uc3QgUkVRVUVTVF9USU1FT1VUXzQwOF9TVEFUVVNfTUVTU0FHRSA9IFwiUmVxdWVzdCB0aW1lb3V0XCI7XG5leHBvcnQgY29uc3QgVE9PX01BTllfUkVRVUVTVFNfNDI5X1NUQVRVU19NRVNTQUdFID0gXCJUb28gbWFueSByZXF1ZXN0c1wiO1xuZXhwb3J0IGNvbnN0IFNFUlZJQ0VfVU5BVkFJTEFCTEVfNTAzX1NUQVRVU19NRVNTQUdFID0gXCJTZXJ2aWNlIHVuYXZhaWxhYmxlXCI7XG5leHBvcnQgY29uc3QgSU5URVJOQUxfU0VSVkVSX0VSUk9SXzUwMF9TVEFUVVNfTUVTU0FHRSA9IFwiSW50ZXJuYWwgc2VydmVyIGVycm9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgWkVST18wX1NUQVRVU19NRVNTQUdFLFxuICBPS18yMDBfU1RBVFVTX01FU1NBR0UsXG4gIEZPVU5EXzMwMl9TVEFUVVNfTUVTU0FHRSxcbiAgQ1JFQVRFRF8yMDFfU1RBVFVTX01FU1NBR0UsXG4gIFNFRV9PVEhFUl8zMDNfU1RBVFVTX01FU1NBR0UsXG4gIEZPUkJJRERFTl80MDNfU1RBVFVTX01FU1NBR0UsXG4gIE5PVF9GT1VORF80MDRfU1RBVFVTX01FU1NBR0UsXG4gIE5PX0NPTlRFTlRfMjA0X1NUQVRVU19NRVNTQUdFLFxuICBCQURfR0FURVdBWV81MDJfU1RBVFVTX01FU1NBR0UsXG4gIEJBRF9SRVFVRVNUXzQwMF9TVEFUVVNfTUVTU0FHRSxcbiAgVU5BVVRIT1JJWkVEXzQwMV9TVEFUVVNfTUVTU0FHRSxcbiAgUkVRVUVTVF9USU1FT1VUXzQwOF9TVEFUVVNfTUVTU0FHRSxcbiAgVE9PX01BTllfUkVRVUVTVFNfNDI5X1NUQVRVU19NRVNTQUdFLFxuICBTRVJWSUNFX1VOQVZBSUxBQkxFXzUwM19TVEFUVVNfTUVTU0FHRSxcbiAgSU5URVJOQUxfU0VSVkVSX0VSUk9SXzUwMF9TVEFUVVNfTUVTU0FHRVxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFpFUk8gPSBcIjBcIjtcbmV4cG9ydCBjb25zdCBEQVRBID0gXCJkYXRhXCI7XG5leHBvcnQgY29uc3QgRVJST1IgPSBcImVycm9yXCI7XG5leHBvcnQgY29uc3QgU1RSSU5HID0gXCJzdHJpbmdcIjtcbmV4cG9ydCBjb25zdCBOVU1CRVIgPSBcIm51bWJlclwiO1xuZXhwb3J0IGNvbnN0IEJPT0xFQU4gPSBcImJvb2xlYW5cIjtcbmV4cG9ydCBjb25zdCBERUZBVUxUID0gXCJkZWZhdWx0XCI7XG5leHBvcnQgY29uc3QgRlVOQ1RJT04gPSBcImZ1bmN0aW9uXCI7XG5leHBvcnQgY29uc3QgRU5WSVJPTk1FTlQgPSBcIkVOVklST05NRU5UXCI7XG5leHBvcnQgY29uc3QgRU1QVFlfU1RSSU5HID0gXCJcIjtcbmV4cG9ydCBjb25zdCBET1VCTEVfU1BBQ0UgPSBcIiAgXCI7XG5leHBvcnQgY29uc3QgUEFDS0FHRV9KU09OID0gXCJwYWNrYWdlLmpzb25cIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTt9XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGlyZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMl07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvdXJ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbM107IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpZnRoKGFycmF5KSB7IHJldHVybiBhcnJheVs0XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gc2l4dGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzVdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXZlbnRoKGFycmF5KSB7IHJldHVybiBhcnJheVs2XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZWlnaHRoKGFycmF5KSB7IHJldHVybiBhcnJheVs3XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gbmludGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzhdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZW50aChhcnJheSkgeyByZXR1cm4gYXJyYXlbOV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpcnN0TGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY29uZExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDJdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGlyZExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDNdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3VydGhMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSA0XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZmlmdGhMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSA1XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gc2l4dGhMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSA2XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gc2V2ZW50aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDddOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBlaWdodGhMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSA4XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gbmludGhMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSA5XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gbGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGhlYWQoYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKDAsIDEpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB0YWlsKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgxKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gYmFjayhhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoYXJyYXkubGVuZ3RoIC0gMSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb250KGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgwLCBNYXRoLm1heCgxLCBhcnJheS5sZW5ndGggLSAxKSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHB1c2goYXJyYXlBLCBhcnJheUIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXlBLCBhcnJheUIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNoaWZ0KGFycmF5QSwgYXJyYXlCKSB7IEFycmF5LnByb3RvdHlwZS51bnNoaWZ0LmFwcGx5KGFycmF5QSwgYXJyYXlCKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0KGFycmF5QSwgZWxlbWVudE9yQXJyYXkyKSB7XG4gIGNvbnN0IGFycmF5QiA9IChlbGVtZW50T3JBcnJheTIgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50T3JBcnJheTIgOlxuICAgICAgICAgICAgICAgICAgICAgWyBlbGVtZW50T3JBcnJheTIgXTtcbiAgXG4gIHB1c2goYXJyYXlBLCBhcnJheUIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXIoYXJyYXkpIHtcbiAgY29uc3Qgc3RhcnQgPSAwO1xuICBcbiAgcmV0dXJuIGFycmF5LnNwbGljZShzdGFydCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KGFycmF5QSwgYXJyYXlCKSB7XG4gIGNvbnN0IHN0YXJ0ID0gMCxcbiAgICAgICAgZGVsZXRlQ291bnQgPSBhcnJheUIubGVuZ3RoOyAgLy8vXG4gIFxuICBzcGxpY2UoYXJyYXlBLCBzdGFydCwgZGVsZXRlQ291bnQsIGFycmF5Qik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZShhcnJheUEsIGFycmF5QikgeyBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcnJheUEsIGFycmF5Qik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoKGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBsZXQgbWF0Y2hlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IGFycmF5QUxlbmd0aCA9IGFycmF5QS5sZW5ndGgsXG4gICAgICAgIGFycmF5Qkxlbmd0aCA9IGFycmF5Qi5sZW5ndGg7XG5cbiAgaWYgKGFycmF5QUxlbmd0aCA9PT0gYXJyYXlCTGVuZ3RoKSB7XG4gICAgbWF0Y2hlcyA9IGFycmF5QS5ldmVyeSgoZWxlbWVudEEsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50QiA9IGFycmF5QltpbmRleF0sXG4gICAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50QSwgZWxlbWVudEIsIGluZGV4KTtcblxuICAgICAgaWYgKHBhc3NlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBtYXRjaGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZShhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgbGV0IGNvdXBsZWQgPSBmYWxzZTtcblxuICBjb25zdCBhcnJheUFMZW5ndGggPSBhcnJheUEubGVuZ3RoLFxuICAgICAgICBhcnJheUJMZW5ndGggPSBhcnJheUIubGVuZ3RoO1xuXG4gIGlmIChhcnJheUFMZW5ndGggPT09IGFycmF5Qkxlbmd0aCkge1xuICAgIGFycmF5QiA9IFsgIC8vL1xuICAgICAgLi4uYXJyYXlCXG4gICAgXTtcblxuICAgIGNvdXBsZWQgPSBhcnJheUEuZXZlcnkoKGVsZW1lbnRBLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudEIgPSBleHRyYWN0KGFycmF5QiwgKGVsZW1lbnRCKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGNhbGxiYWNrKGVsZW1lbnRBLCBlbGVtZW50Qik7XG5cbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KSB8fCBudWxsO1xuXG4gICAgICBpZiAoZWxlbWVudEIgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gY291cGxlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvcnJlbGF0ZShhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgYXJyYXlCID0gWyAgLy8vXG4gICAgLi4uYXJyYXlCXG4gIF07XG5cbiAgY29uc3QgY29ycmVsYXRlcyA9IGFycmF5QS5ldmVyeSgoZWxlbWVudEEpID0+IHtcbiAgICBjb25zdCBlbGVtZW50QiA9IGV4dHJhY3QoYXJyYXlCLCAoZWxlbWVudEIpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGNhbGxiYWNrKGVsZW1lbnRBLCBlbGVtZW50Qik7XG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChlbGVtZW50QiAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY29ycmVsYXRlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmUoYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGxldCByZXNvbHZlZDtcblxuICBhcnJheUEgPSBbICAvLy9cbiAgICAuLi5hcnJheUFcbiAgXTtcblxuICBmb3IgKDs7KSB7XG4gICAgY29uc3QgYXJyYXlBTGVuZ3RoID0gYXJyYXlBLmxlbmd0aDtcblxuICAgIGlmIChhcnJheUFMZW5ndGggPT09IDApIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGxldCByZXNvbHZlZCA9IGZhbHNlO1xuXG4gICAgYXJyYXlBLmZvckVhY2goKGVsZW1lbnRBKSA9PiB7XG4gICAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50QSk7XG5cbiAgICAgIGlmIChwYXNzZWQpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudEIgPSBlbGVtZW50QTsgIC8vL1xuXG4gICAgICAgIGFycmF5Qi5wdXNoKGVsZW1lbnRCKTtcblxuICAgICAgICByZXNvbHZlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoIXJlc29sdmVkKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBmaWx0ZXIoYXJyYXlBLCAoZWxlbWVudEEpID0+IHtcbiAgICAgIGNvbnN0IGFycmF5QkluY2x1ZGVzRWxlbWVudEEgPSBhcnJheUIuaW5jbHVkZXMoZWxlbWVudEEpO1xuXG4gICAgICBpZiAoIWFycmF5QkluY2x1ZGVzRWxlbWVudEEpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBhcnJheUFMZW5ndGggPSBhcnJheUEubGVuZ3RoO1xuXG4gIHJlc29sdmVkID0gKGFycmF5QUxlbmd0aCA9PT0gMCk7XG5cbiAgcmV0dXJuIHJlc29sdmVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgZWxlbWVudHMgPSBbXTtcblxuICBmb3J3YXJkc0ZvckVhY2goYXJyYXksIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlKGFycmF5LCBlbGVtZW50LCBjYWxsYmFjaykge1xuICBsZXQgc3RhcnQ7XG4gIFxuICBjb25zdCBmb3VuZCA9IGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgc3RhcnQgPSBpbmRleDsgIC8vL1xuICAgICAgXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICBcbiAgaWYgKGZvdW5kKSB7XG4gICAgY29uc3QgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZm91bmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGxpY2UoYXJyYXlBLCBzdGFydCwgZGVsZXRlQ291bnQgPSBJbmZpbml0eSwgYXJyYXlCID0gW10pIHtcbiAgY29uc3QgYXJncyA9IFsgc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5hcnJheUIgXSxcbiAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseShhcnJheUEsIGFyZ3MpO1xuXG4gIHJldHVybiBkZWxldGVkRWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXIoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGRlbGV0ZWRFbGVtZW50cyA9IFtdO1xuICBcbiAgYmFja3dhcmRzRm9yRWFjaChhcnJheSwgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMSxcbiAgICAgICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLFxuICAgICAgICAgICAgZmlyc3REZWxldGVkRWxlbWVudCA9IGZpcnN0KGRlbGV0ZWRFbGVtZW50cyk7XG4gICAgICBcbiAgICAgIGRlbGV0ZWRFbGVtZW50cy51bnNoaWZ0KGZpcnN0RGVsZXRlZEVsZW1lbnQpOyAgLy8vXG4gICAgfVxuICB9KTtcbiAgXG4gIHJldHVybiBkZWxldGVkRWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcnVuZShhcnJheSwgY2FsbGJhY2spIHtcbiAgbGV0IGRlbGV0ZWRFbGVtZW50ID0gdW5kZWZpbmVkO1xuICBcbiAgYXJyYXkuc29tZSgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxLFxuICAgICAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICBmaXJzdERlbGV0ZWRFbGVtZW50ID0gZmlyc3QoZGVsZXRlZEVsZW1lbnRzKTtcbiAgICAgIFxuICAgICAgZGVsZXRlZEVsZW1lbnQgPSBmaXJzdERlbGV0ZWRFbGVtZW50OyAgLy8vXG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIFxuICByZXR1cm4gZGVsZXRlZEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0KGFycmF5LCBjYWxsYmFjaykge1xuICBsZXQgZGVsZXRlZEVsZW1lbnQgPSB1bmRlZmluZWQ7XG5cbiAgYXJyYXkuc29tZSgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSxcbiAgICAgICAgICAgIGZpcnN0RGVsZXRlZEVsZW1lbnQgPSBmaXJzdChkZWxldGVkRWxlbWVudHMpO1xuXG4gICAgICBkZWxldGVkRWxlbWVudCA9IGZpcnN0RGVsZXRlZEVsZW1lbnQ7ICAvLy9cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZGVsZXRlZEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRjaChhcnJheSwgZWxlbWVudCwgY2FsbGJhY2spIHtcbiAgY29uc3QgZm91bmQgPSBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cblxuICBpZiAoZm91bmQpIHtcbiAgICBhcnJheS5wdXNoKGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcHJlc3MoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGxldCBpbmRleDEgPSAwLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlIChpbmRleDEgPCBsZW5ndGgpIHtcbiAgICBjb25zdCBlbGVtZW50QiA9IGFycmF5W2luZGV4MV07XG5cbiAgICBmb3IgKGxldCBpbmRleDIgPSBsZW5ndGggLSAxOyBpbmRleDIgPiBpbmRleDE7IGluZGV4Mi0tKSB7XG4gICAgICBjb25zdCBlbGVtZW50QSA9IGFycmF5W2luZGV4Ml0sXG4gICAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50QSwgZWxlbWVudEIpO1xuXG4gICAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgICBjb25zdCBzdGFydCA9IGluZGV4MiwgLy8vXG4gICAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgICBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbmRleDErKztcblxuICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZShhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXkgPSBbXG4gICAgLi4uYXJyYXlBLFxuICAgIC4uLmFycmF5QlxuICBdO1xuXG4gIGNvbXByZXNzKGFycmF5LCBjYWxsYmFjayk7XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV2ZXJzZShhcnJheSkge1xuICBhcnJheSA9IFsgLy8vXG4gICAgLi4uYXJyYXlcbiAgXS5yZXZlcnNlKCk7XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXVnbWVudChhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgYXJyYXlCLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgYXJyYXlBLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcGFyYXRlKGFycmF5LCBhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBwYXNzZWQgP1xuICAgICAgYXJyYXlBLnB1c2goZWxlbWVudCkgOlxuICAgICAgICBhcnJheUIucHVzaChlbGVtZW50KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0ZpbmQoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRmluZChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzU29tZShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gICAgXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzU29tZShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRXZlcnkoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0V2ZXJ5KGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzUmVkdWNlKGFycmF5LCBjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gIGxldCB2YWx1ZSA9IGluaXRpYWxWYWx1ZTsgLy8vXG5cbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIHZhbHVlID0gY2FsbGJhY2sodmFsdWUsIGVsZW1lbnQsIGluZGV4KTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc1JlZHVjZShhcnJheSwgY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICBsZXQgdmFsdWUgPSBpbml0aWFsVmFsdWU7IC8vL1xuXG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIHZhbHVlID0gY2FsbGJhY2sodmFsdWUsIGVsZW1lbnQsIGluZGV4KTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0ZpbmRJbmRleChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRmluZEluZGV4KGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAtMTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBmaXJzdCxcbiAgc2Vjb25kLFxuICB0aGlyZCxcbiAgZm91cnRoLFxuICBmaWZ0aCxcbiAgc2l4dGgsXG4gIHNldmVudGgsXG4gIGVpZ2h0aCxcbiAgbmludGgsXG4gIGZpcnN0TGFzdCxcbiAgc2Vjb25kTGFzdCxcbiAgdGhpcmRMYXN0LFxuICBmb3VydGhMYXN0LFxuICBmaWZ0aExhc3QsXG4gIHNpeHRoTGFzdCxcbiAgc2V2ZW50aExhc3QsXG4gIGVpZ2h0aExhc3QsXG4gIG5pbnRoTGFzdCxcbiAgbGFzdCxcbiAgaGVhZCxcbiAgdGFpbCxcbiAgYmFjayxcbiAgZnJvbnQsXG4gIHB1c2gsXG4gIHVuc2hpZnQsXG4gIGNvbmNhdCxcbiAgY2xlYXIsXG4gIGNvcHksXG4gIG1lcmdlLFxuICBtYXRjaCxcbiAgY29tcGFyZSxcbiAgY29ycmVsYXRlLFxuICByZXNvbHZlLFxuICBmaW5kLFxuICByZXBsYWNlLFxuICBzcGxpY2UsXG4gIGZpbHRlcixcbiAgcHJ1bmUsXG4gIGV4dHJhY3QsXG4gIHBhdGNoLFxuICBjb21wcmVzcyxcbiAgY29tYmluZSxcbiAgcmV2ZXJzZSxcbiAgYXVnbWVudCxcbiAgc2VwYXJhdGUsXG4gIGZvcndhcmRzRmluZCxcbiAgYmFja3dhcmRzRmluZCxcbiAgZm9yd2FyZHNTb21lLFxuICBiYWNrd2FyZHNTb21lLFxuICBmb3J3YXJkc0V2ZXJ5LFxuICBiYWNrd2FyZHNFdmVyeSxcbiAgZm9yd2FyZHNSZWR1Y2UsXG4gIGJhY2t3YXJkc1JlZHVjZSxcbiAgZm9yd2FyZHNGb3JFYWNoLFxuICBiYWNrd2FyZHNGb3JFYWNoLFxuICBmb3J3YXJkc0ZpbmRJbmRleCxcbiAgYmFja3dhcmRzRmluZEluZGV4XG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kLCBsYXN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXRoTmFtZShwYXRoKSB7XG4gIHBhdGggPSBwYXRoLnJlcGxhY2UoL15cXC8vLCBFTVBUWV9TVFJJTkcpLnJlcGxhY2UoL1xcLyQvLCBFTVBUWV9TVFJJTkcpOyAvLy9cblxuICBjb25zdCBwYXRoTmFtZSA9ICgvXFwvLy50ZXN0KHBhdGgpID09PSBmYWxzZSk7XG5cbiAgcmV0dXJuIHBhdGhOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXRoVG9wbW9zdE5hbWUocGF0aCkge1xuICBjb25zdCBwYXRoTmFtZSA9IGlzUGF0aE5hbWUocGF0aCksXG4gICAgICAgIHBhdGhBYnNvbHV0ZVBhdGggPSBpc1BhdGhBYnNvbHV0ZVBhdGgocGF0aCksXG4gICAgICAgIHBhdGhUb3Btb3N0TmFtZSA9IChwYXRoTmFtZSAmJiBwYXRoQWJzb2x1dGVQYXRoKTtcblxuICByZXR1cm4gcGF0aFRvcG1vc3ROYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXRoUmVsYXRpdmVQYXRoKHBhdGgpIHtcbiAgY29uc3QgcGF0aFJlbGF0aXZlUGF0aCA9ICEvXlxcLy8udGVzdChwYXRoKTtcblxuICByZXR1cm4gcGF0aFJlbGF0aXZlUGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGF0aEFic29sdXRlUGF0aChwYXRoKSB7XG4gIGNvbnN0IHBhdGhBYnNvbHV0ZVBhdGggPSAvXlxcLy8udGVzdChwYXRoKTtcblxuICByZXR1cm4gcGF0aEFic29sdXRlUGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVG9wbW9zdE5hbWVJbkFic29sdXRlUGF0aCh0b3Btb3N0TmFtZSwgYWJzb2x1dGVQYXRoKSB7XG4gIGNvbnN0IHJlZ0V4cCA9IG5ldyBSZWdFeHAoYF4ke3RvcG1vc3ROYW1lfSg/OlxcXFwvLispPyRgKSxcbiAgICAgICAgdG9wbW9zdE5hbWVJbkFic29sdXRlUGF0aCA9IHJlZ0V4cC50ZXN0KGFic29sdXRlUGF0aCk7XG5cbiAgcmV0dXJuIHRvcG1vc3ROYW1lSW5BYnNvbHV0ZVBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVQYXRocyhwYXRoLCByZWxhdGl2ZVBhdGgpIHtcbiAgbGV0IGNvbWJpbmVkUGF0aCA9IG51bGw7XG5cbiAgY29uc3QgcGF0aE5hbWVzID0gcGF0aC5zcGxpdCgvXFwvLyksXG4gICAgICAgIHJlbGF0aXZlUGF0aE5hbWVzID0gcmVsYXRpdmVQYXRoLnNwbGl0KC9cXC8vKTtcblxuICBsZXQgbGFzdFBhdGhOYW1lLFxuICAgICAgZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID0gZmlyc3QocmVsYXRpdmVQYXRoTmFtZXMpO1xuXG4gIGlmIChmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPT09IFwiLlwiKSB7XG4gICAgcmVsYXRpdmVQYXRoTmFtZXMuc2hpZnQoKTtcbiAgfVxuXG4gIGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9IGZpcnN0KHJlbGF0aXZlUGF0aE5hbWVzKTtcbiAgbGFzdFBhdGhOYW1lID0gbGFzdChwYXRoTmFtZXMpO1xuXG4gIHdoaWxlICgoZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID09PSBcIi4uXCIpICYmIChsYXN0UGF0aE5hbWUgIT09IHVuZGVmaW5lZCkpIHtcbiAgICByZWxhdGl2ZVBhdGhOYW1lcy5zaGlmdCgpO1xuICAgIHBhdGhOYW1lcy5wb3AoKTtcblxuICAgIGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9IGZpcnN0KHJlbGF0aXZlUGF0aE5hbWVzKTtcbiAgICBsYXN0UGF0aE5hbWUgPSBsYXN0KHBhdGhOYW1lcyk7XG4gIH1cblxuICBpZiAobGFzdFBhdGhOYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBjb21iaW5lZFBhdGhOYW1lcyA9IFtdLmNvbmNhdChwYXRoTmFtZXMpLmNvbmNhdChyZWxhdGl2ZVBhdGhOYW1lcyk7XG5cbiAgICBjb21iaW5lZFBhdGggPSBjb21iaW5lZFBhdGhOYW1lcy5qb2luKFwiL1wiKTtcbiAgfVxuXG4gIHJldHVybiBjb21iaW5lZFBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXRlbmF0ZVBhdGhzKHBhdGgsIHJlbGF0aXZlUGF0aCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIGxldCBjb25jYXRlbmF0ZWRQYXRoO1xuXG4gIHBhdGggPSBwYXRoLnJlcGxhY2UoL1xcLyQvLCBFTVBUWV9TVFJJTkcpOyAgLy8vXG5cbiAgY29uY2F0ZW5hdGVkUGF0aCA9IGAke3BhdGh9LyR7cmVsYXRpdmVQYXRofWA7XG5cbiAgY29uc3QgcmVtYWluaW5nQUFyZ3VtZW50c0xlbmd0aCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5sZW5ndGg7XG5cbiAgaWYgKHJlbWFpbmluZ0FBcmd1bWVudHNMZW5ndGggPiAwKSB7XG4gICAgY29uc3QgcGF0aCA9IGNvbmNhdGVuYXRlZFBhdGgsICAvLy9cbiAgICAgICAgICByZWxhdGl2ZVBhdGggPSByZW1haW5pbmdBcmd1bWVudHMuc2hpZnQoKTtcblxuICAgIGNvbmNhdGVuYXRlZFBhdGggPSBjb25jYXRlbmF0ZVBhdGhzKHBhdGgsIHJlbGF0aXZlUGF0aCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBjb25jYXRlbmF0ZWRQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYm90dG9tbW9zdE5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCBib3R0b21tb3N0TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14uKlxcLyhbXlxcL10rXFwvPykkLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIGJvdHRvbW1vc3ROYW1lID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBib3R0b21tb3N0TmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgocGF0aCkge1xuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXiguKylcXC9bXlxcL10rXFwvPyQvKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlQYXRoID0gc2Vjb25kTWF0Y2g7IC8vL1xuXG4gIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5UGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKFteXFwvXSspXFwvLiskLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXiguKilcXC9bXlxcL10rXFwvPyQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IHNlY29uZE1hdGNoOyAvLy9cbiAgfVxuXG4gIHJldHVybiBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eW15cXC9dK1xcLyguKykkLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBzZWNvbmRNYXRjaDtcbiAgfVxuXG4gIHJldHVybiBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGlzUGF0aE5hbWUsXG4gIGlzUGF0aFRvcG1vc3ROYW1lLFxuICBpc1BhdGhSZWxhdGl2ZVBhdGgsXG4gIGlzUGF0aEFic29sdXRlUGF0aCxcbiAgaXNUb3Btb3N0TmFtZUluQWJzb2x1dGVQYXRoLFxuICBjb21iaW5lUGF0aHMsXG4gIGNvbmNhdGVuYXRlUGF0aHMsXG4gIGJvdHRvbW1vc3ROYW1lRnJvbVBhdGgsXG4gIHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgsXG4gIHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgsXG4gIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCxcbiAgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzZWNvbmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBDT0xPTl9DSEFSQUNURVIsIEFNUEVSU0FORF9DSEFSQUNURVIgfSBmcm9tIFwiLi4vY2hhcmFjdGVyc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gb3ZlcndyaXRlKGhlYWRlcnMsIG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IGxvd2VyQ2FzZU5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCksXG4gICAgICAgIGV4aXN0aW5nTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoZWFkZXJzKSwgIC8vL1xuICAgICAgICBleGlzdGluZ05hbWUgPSBleGlzdGluZ05hbWVzLmZpbmQoKGV4aXN0aW5nTmFtZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGV4aXN0aW5nTG93ZXJDYXNlTmFtZSA9IGV4aXN0aW5nTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgaWYgKGV4aXN0aW5nTG93ZXJDYXNlTmFtZSA9PT0gbG93ZXJDYXNlTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSB8fCBudWxsO1xuXG4gIGlmIChleGlzdGluZ05hbWUgIT09IG51bGwpIHtcbiAgICBoZWFkZXJzW2V4aXN0aW5nTmFtZV0gPSB2YWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5kZXJ3cml0ZShoZWFkZXJzLCBuYW1lLCB2YWx1ZSkge1xuICBjb25zdCBsb3dlckNhc2VOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICBleGlzdGluZ05hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGVhZGVycyksICAvLy9cbiAgICAgICAgZXhpc3RpbmdOYW1lID0gZXhpc3RpbmdOYW1lcy5maW5kKChleGlzdGluZ05hbWUpID0+IHtcbiAgICAgICAgICBjb25zdCBleGlzdGluZ0xvd2VyQ2FzZU5hbWUgPSBleGlzdGluZ05hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgIGlmIChleGlzdGluZ0xvd2VyQ2FzZU5hbWUgPT09IGxvd2VyQ2FzZU5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkgfHwgbnVsbDtcblxuICBpZiAoZXhpc3RpbmdOYW1lID09PSBudWxsKSB7XG4gICAgaGVhZGVyc1tuYW1lXSA9IHZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3J0RnJvbUhvc3QoaG9zdCkge1xuICBsZXQgcG9ydDtcblxuICBjb25zdCBtYXRjaGVzID0gaG9zdC5tYXRjaCgvXmh0dHBzPzpcXC9cXC8oW15cXC9dKykvKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgIGluZGV4ID0gc2Vjb25kTWF0Y2guaW5kZXhPZihDT0xPTl9DSEFSQUNURVIpO1xuXG4gIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICBjb25zdCBzZWN1cmUgPSBzZWN1cmVGcm9tSG9zdChob3N0KTtcblxuICAgIHBvcnQgPSBzZWN1cmUgPyA0NDMgOiA4MDsgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc3RhcnQgPSBpbmRleCArIDEsXG4gICAgICAgICAgcG9ydFN0cmluZyA9IHNlY29uZE1hdGNoLnN1YnN0cmluZyhzdGFydCk7XG5cbiAgICBwb3J0ID0gTnVtYmVyKHBvcnRTdHJpbmcpO1xuICB9XG5cbiAgcmV0dXJuIHBvcnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN1cmVGcm9tSG9zdChob3N0KSB7XG4gIGNvbnN0IHNlY3VyZSA9IC9eaHR0cHM6XFwvXFwvLy50ZXN0KGhvc3QpO1xuXG4gIHJldHVybiBzZWN1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBob3N0bmFtZUZyb21Ib3N0KGhvc3QpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IGhvc3QubWF0Y2goL15odHRwcz86XFwvXFwvKFteOlxcL10rKS8pLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgaG9zdG5hbWUgPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgcmV0dXJuIGhvc3RuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlTdHJpbmdGcm9tUXVlcnkocXVlcnkpIHtcbiAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhxdWVyeSksXG4gICAgICAgIG5hbWVzTGVuZ3RoID0gbmFtZXMubGVuZ3RoLFxuICAgICAgICBsYXN0SW5kZXggPSBuYW1lc0xlbmd0aCAtIDEsXG4gICAgICAgIHF1ZXJ5U3RyaW5nID0gbmFtZXMucmVkdWNlKChxdWVyeVN0cmluZywgbmFtZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHF1ZXJ5W25hbWVdLFxuICAgICAgICAgICAgICAgIGVuY29kZWROYW1lID0gZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpLFxuICAgICAgICAgICAgICAgIGVuY29kZWRWYWx1ZSA9IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSksXG4gICAgICAgICAgICAgICAgYW1wZXJzYW5kT3JOb3RoaW5nID0gKGluZGV4ICE9PSBsYXN0SW5kZXgpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFNUEVSU0FORF9DSEFSQUNURVIgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkc7XG4gIFxuICAgICAgICAgIHF1ZXJ5U3RyaW5nICs9IGAke2VuY29kZWROYW1lfT0ke2VuY29kZWRWYWx1ZX0ke2FtcGVyc2FuZE9yTm90aGluZ31gO1xuICBcbiAgICAgICAgICByZXR1cm4gcXVlcnlTdHJpbmc7XG4gICAgICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHF1ZXJ5U3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsRnJvbUhvc3RVUklBbmRRdWVyeShob3N0LCB1cmksIHF1ZXJ5KSB7XG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gcXVlcnlTdHJpbmdGcm9tUXVlcnkocXVlcnkpLFxuICAgICAgICB1cmwgPSAocXVlcnlTdHJpbmcgPT09IEVNUFRZX1NUUklORykgP1xuICAgICAgICAgICAgICAgIGAke2hvc3R9JHt1cml9YCA6XG4gICAgICAgICAgICAgICAgICBgJHtob3N0fSR7dXJpfT8ke3F1ZXJ5U3RyaW5nfWA7XG5cbiAgcmV0dXJuIHVybDtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBvdmVyd3JpdGUsXG4gIHVuZGVyd3JpdGUsXG4gIHBvcnRGcm9tSG9zdCxcbiAgc2VjdXJlRnJvbUhvc3QsXG4gIGhvc3RuYW1lRnJvbUhvc3QsXG4gIHF1ZXJ5U3RyaW5nRnJvbVF1ZXJ5LFxuICB1cmxGcm9tSG9zdFVSSUFuZFF1ZXJ5XG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJsZW4oc3RyaW5nKSB7XG4gIGxldCBsZW5ndGggPSAwO1xuXG4gIGNvbnN0IGl0ZXJhdG9yID0gc3RyaW5nW1N5bWJvbC5pdGVyYXRvcl0oKTtcblxuICBsZXQgY2hhcmFjdGVyID0gaXRlcmF0b3IubmV4dCgpO1xuXG4gIHdoaWxlICghY2hhcmFjdGVyLmRvbmUpIHtcbiAgICBjaGFyYWN0ZXIgPSBpdGVyYXRvci5uZXh0KCk7XG5cbiAgICBsZW5ndGgrK1xuICB9XG5cbiAgcmV0dXJuIGxlbmd0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmNtcChzdHJpbmdBLCBzdHJpbmdCKSB7XG4gIGxldCBkaWZmZXJlbmNlO1xuXG4gIGNvbnN0IGl0ZXJhdG9yQSA9IHN0cmluZ0FbU3ltYm9sLml0ZXJhdG9yXSgpLCAvLy9cbiAgICAgICAgaXRlcmF0b3JCID0gc3RyaW5nQltTeW1ib2wuaXRlcmF0b3JdKCk7IC8vL1xuXG4gIGxldCBjaGFyYWN0ZXJBID0gaXRlcmF0b3JBLm5leHQoKSxcbiAgICAgIGNoYXJhY3RlckIgPSBpdGVyYXRvckIubmV4dCgpLFxuICAgICAgY29kZVBvaW50QSxcbiAgICAgIGNvZGVQb2ludEI7XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb2RlUG9pbnRBID0gY2hhcmFjdGVyQS52YWx1ZSA/IC8vL1xuICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlckEudmFsdWUuY29kZVBvaW50QXQoMCkgOlxuICAgICAgICAgICAgICAgICAgICAgMDtcbiAgICBjb2RlUG9pbnRCID0gY2hhcmFjdGVyQi52YWx1ZSA/IC8vL1xuICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlckIudmFsdWUuY29kZVBvaW50QXQoMCkgOlxuICAgICAgICAgICAgICAgICAgICAgMDtcblxuICAgIGRpZmZlcmVuY2UgPSBjb2RlUG9pbnRCIC0gY29kZVBvaW50QTtcblxuICAgIGlmIChkaWZmZXJlbmNlICE9PSAwKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoY2hhcmFjdGVyQS5kb25lIHx8IGNoYXJhY3RlckIuZG9uZSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2hhcmFjdGVyQSA9IGl0ZXJhdG9yQS5uZXh0KCk7XG4gICAgY2hhcmFjdGVyQiA9IGl0ZXJhdG9yQi5uZXh0KCk7XG4gIH1cblxuICByZXR1cm4gZGlmZmVyZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluZGV4T2Yoc3RyaW5nLCBzZWFyY2hTdHJpbmcpIHtcbiAgbGV0IGluZGV4ID0gLTEsXG4gICAgICBmb3VuZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHNlYXJjaFN0cmluZ0xlbmd0aCA9IHN0cmxlbihzZWFyY2hTdHJpbmcpO1xuXG4gIGlmIChzZWFyY2hTdHJpbmdMZW5ndGggPiAwKSB7XG4gICAgbGV0IGNoYXJhY3RlcjtcblxuICAgIGNvbnN0IGl0ZXJhdG9yID0gc3RyaW5nW1N5bWJvbC5pdGVyYXRvcl0oKSxcbiAgICAgICAgICBzZWFyY2hJdGVyYXRvciA9IHNlYXJjaFN0cmluZ1tTeW1ib2wuaXRlcmF0b3JdKCksXG4gICAgICAgICAgc2VhcmNoQ2hhcmFjdGVyID0gc2VhcmNoSXRlcmF0b3IubmV4dCgpO1xuXG4gICAgY2hhcmFjdGVyID0gaXRlcmF0b3IubmV4dCgpO1xuXG4gICAgaW5kZXgrKztcblxuICAgIHdoaWxlICghY2hhcmFjdGVyLmRvbmUpIHtcbiAgICAgIGlmIChjaGFyYWN0ZXIudmFsdWUgPT09IHNlYXJjaENoYXJhY3Rlci52YWx1ZSkge1xuICAgICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICAgIGVuZCA9IHN0YXJ0ICsgc2VhcmNoU3RyaW5nTGVuZ3RoLFxuICAgICAgICAgICAgICBzdWJTdHJpbmcgPSBzdWJzdHJpbmcoc3RyaW5nLCBzdGFydCwgZW5kKSxcbiAgICAgICAgICAgICAgZGlmZmVyZW5jZSA9IHN0cmNtcChzdWJTdHJpbmcsIHNlYXJjaFN0cmluZyk7XG5cbiAgICAgICAgaWYgKGRpZmZlcmVuY2UgPT09IDApIHtcbiAgICAgICAgICBmb3VuZCA9IHRydWU7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjaGFyYWN0ZXIgPSBpdGVyYXRvci5uZXh0KCk7XG5cbiAgICAgIGluZGV4KytcbiAgICB9XG4gIH1cblxuICBpZiAoIWZvdW5kKSB7XG4gICAgaW5kZXggPSAtMTtcbiAgfVxuXG4gIHJldHVybiBpbmRleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0cmluZyhzdHJpbmcsIHN0YXJ0LCBlbmQgPSBJbmZpbml0eSkge1xuICBsZXQgaW5kZXggPSAwO1xuXG4gIGNvbnN0IGl0ZXJhdG9yID0gc3RyaW5nW1N5bWJvbC5pdGVyYXRvcl0oKSxcbiAgICAgICAgY2hhcmFjdGVycyA9IFtdO1xuXG4gIGxldCBjaGFyYWN0ZXIgPSBpdGVyYXRvci5uZXh0KCk7XG5cbiAgd2hpbGUgKCFjaGFyYWN0ZXIuZG9uZSkge1xuICAgIGlmIChpbmRleCA9PT0gZW5kKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoaW5kZXggPj0gc3RhcnQpIHtcbiAgICAgIGNoYXJhY3RlcnMucHVzaChjaGFyYWN0ZXIudmFsdWUpOyAvLy9cbiAgICB9XG5cbiAgICBpbmRleCsrXG5cbiAgICBjaGFyYWN0ZXIgPSBpdGVyYXRvci5uZXh0KCk7XG4gIH1cblxuICBjb25zdCBzdWJzdHJpbmcgPSBjaGFyYWN0ZXJzLmpvaW4oRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gc3Vic3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHN0cmNtcCxcbiAgc3RybGVuLFxuICBpbmRleE9mLFxuICBzdWJzdHJpbmdcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtaWdyYXRlKGpzb24sIG1pZ3JhdGlvbk1hcCwgbGF0ZXN0VmVyc2lvbikge1xuICBsZXQgeyB2ZXJzaW9uIH0gPSBqc29uO1xuXG4gIHdoaWxlICh2ZXJzaW9uICE9PSBsYXRlc3RWZXJzaW9uKSB7XG4gICAgY29uc3QgbWlncmF0ZUZ1bmN0aW9uID0gbWlncmF0aW9uTWFwW3ZlcnNpb25dO1xuXG4gICAganNvbiA9IG1pZ3JhdGVGdW5jdGlvbihqc29uKTtcblxuICAgICh7IHZlcnNpb24gfSA9IGpzb24pO1xuICB9XG5cbiAgcmV0dXJuIGpzb247XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWlncmF0ZVxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3aGlsc3Qob3BlcmF0aW9uLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IGluZGV4ID0gY291bnQ7ICAvLy9cclxuXHJcbiAgICBvcGVyYXRpb24obmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9yRWFjaChhcnJheSwgb3BlcmF0aW9uLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcblxyXG4gICAgICBvcGVyYXRpb24oZWxlbWVudCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VxdWVuY2Uob3BlcmF0aW9ucywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IG9wZXJhdGlvbnMubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIG9wZXJhdGlvbiA9IG9wZXJhdGlvbnNbaW5kZXhdO1xyXG5cclxuICAgICAgb3BlcmF0aW9uKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50dWFsbHkob3BlcmF0aW9ucywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IG9wZXJhdGlvbnMubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGlmIChsZW5ndGggPT09IDApIHtcclxuICAgIGRvbmUoKTtcclxuXHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBsZXQgY291bnQgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvcGVyYXRpb25zLmZvckVhY2goKG9wZXJhdGlvbiwgaW5kZXgpID0+IHtcclxuICAgIG9wZXJhdGlvbihuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXBlYXRlZGx5KG9wZXJhdGlvbiwgbGVuZ3RoLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgaWYgKGxlbmd0aCA9PT0gMCkge1xyXG4gICAgZG9uZSgpO1xyXG5cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGxldCBjb3VudCA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcclxuICAgIG9wZXJhdGlvbihuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNGb3JFYWNoKGFycmF5LCBvcGVyYXRpb24sIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICAgIG9wZXJhdGlvbihlbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBvcGVyYXRpb24sIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gbGVuZ3RoO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQtLTtcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IC0xKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICAgIG9wZXJhdGlvbihlbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICB3aGlsc3QsXHJcbiAgZm9yRWFjaCxcclxuICBzZXF1ZW5jZSxcclxuICBldmVudHVhbGx5LFxyXG4gIHJlcGVhdGVkbHksXHJcbiAgZm9yd2FyZHNGb3JFYWNoLFxyXG4gIGJhY2t3YXJkc0ZvckVhY2hcclxufTtcclxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBTVFJJTkcsIEZVTkNUSU9OIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgR0VUX01FVEhPRCwgUE9TVF9NRVRIT0QgfSBmcm9tIFwiLi4vbWV0aG9kc1wiO1xuaW1wb3J0IHsgQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUgfSBmcm9tIFwiLi4vY29udGVudFR5cGVzXCI7XG5pbXBvcnQgeyBBQ0NFUFRfSEVBREVSLCBDT05URU5UX1RZUEVfSEVBREVSIH0gZnJvbSBcIi4uL2hlYWRlcnNcIjtcbmltcG9ydCB7IHVuZGVyd3JpdGUsIHVybEZyb21Ib3N0VVJJQW5kUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2h0dHBcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldChob3N0LCB1cmksIHF1ZXJ5LCBoZWFkZXJzLCByZXNwb25zZVR5cGUsIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2YgaGVhZGVycyA9PT0gRlVOQ1RJT04pIHtcbiAgICBjYWxsYmFjayA9IGhlYWRlcnM7IC8vL1xuXG4gICAgcmVzcG9uc2VUeXBlID0gbnVsbDtcblxuICAgIGhlYWRlcnMgPSB7fTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcmVzcG9uc2VUeXBlID09PSBGVU5DVElPTikge1xuICAgIGNhbGxiYWNrID0gcmVzcG9uc2VUeXBlOyAgLy8vXG5cbiAgICBpZiAodHlwZW9mIGhlYWRlcnMgPT09IFNUUklORykge1xuICAgICAgcmVzcG9uc2VUeXBlID0gaGVhZGVyczsgLy8vXG5cbiAgICAgIGhlYWRlcnMgPSB7fTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzcG9uc2VUeXBlID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG1ldGhvZCA9IEdFVF9NRVRIT0QsXG4gICAgICAgIGFjY2VwdCA9IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFLFxuICAgICAgICBjb250ZW50ID0gbnVsbDtcblxuICB1bmRlcndyaXRlQWNjZXB0SGVhZGVyKGhlYWRlcnMsIGFjY2VwdCk7XG5cbiAgcmVxdWVzdChob3N0LCB1cmksIHF1ZXJ5LCBtZXRob2QsIGNvbnRlbnQsIGhlYWRlcnMsIHJlc3BvbnNlVHlwZSwgY2FsbGJhY2spO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9zdChob3N0LCB1cmksIHF1ZXJ5LCBjb250ZW50LCBoZWFkZXJzLCByZXNwb25zZVR5cGUsIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2YgaGVhZGVycyA9PT0gRlVOQ1RJT04pIHtcbiAgICBjYWxsYmFjayA9IGhlYWRlcnM7IC8vL1xuXG4gICAgcmVzcG9uc2VUeXBlID0gbnVsbDtcblxuICAgIGhlYWRlcnMgPSB7fTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcmVzcG9uc2VUeXBlID09PSBGVU5DVElPTikge1xuICAgIGNhbGxiYWNrID0gcmVzcG9uc2VUeXBlOyAgLy8vXG5cbiAgICBpZiAodHlwZW9mIGhlYWRlcnMgPT09IFNUUklORykge1xuICAgICAgcmVzcG9uc2VUeXBlID0gaGVhZGVyczsgLy8vXG5cbiAgICAgIGhlYWRlcnMgPSB7fTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzcG9uc2VUeXBlID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG1ldGhvZCA9IFBPU1RfTUVUSE9ELFxuICAgICAgICBhY2NlcHQgPSBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRSxcbiAgICAgICAgY29udGVudFR5cGUgPSBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRTtcblxuICB1bmRlcndyaXRlQWNjZXB0SGVhZGVyKGhlYWRlcnMsIGFjY2VwdCk7XG5cbiAgdW5kZXJ3cml0ZUNvbnRlbnRUeXBlSGVhZGVyKGhlYWRlcnMsIGNvbnRlbnRUeXBlKTtcblxuICByZXF1ZXN0KGhvc3QsIHVyaSwgcXVlcnksIG1ldGhvZCwgY29udGVudCwgaGVhZGVycywgcmVzcG9uc2VUeXBlLCBjYWxsYmFjayk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXF1ZXN0KGhvc3QsIHVyaSwgcXVlcnksIG1ldGhvZCwgY29udGVudCwgaGVhZGVycywgcmVzcG9uc2VUeXBlLCBjYWxsYmFjaykge1xuICBjb25zdCB1cmwgPSB1cmxGcm9tSG9zdFVSSUFuZFF1ZXJ5KGhvc3QsIHVyaSwgcXVlcnkpLFxuICAgICAgICBhY2NlcHQgPSBoZWFkZXJzW0FDQ0VQVF9IRUFERVJdIHx8IG51bGwsXG4gICAgICAgIGNvbnRlbnRUeXBlID0gaGVhZGVyc1tDT05URU5UX1RZUEVfSEVBREVSXSB8fCBudWxsLFxuICAgICAgICB4bWxIdHRwUmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gIGlmIChjb250ZW50VHlwZSA9PT0gQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUpIHtcbiAgICBjb25zdCBqc29uID0gY29udGVudCwgIC8vL1xuICAgICAgICAgIGpzb25TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShqc29uKTtcblxuICAgIGNvbnRlbnQgPSBqc29uU3RyaW5nOyAgLy8vXG4gIH1cblxuICBpZiAocmVzcG9uc2VUeXBlICE9PSBudWxsKSB7XG4gICAgT2JqZWN0LmFzc2lnbih4bWxIdHRwUmVxdWVzdCwge1xuICAgICAgcmVzcG9uc2VUeXBlXG4gICAgfSk7XG4gIH1cblxuICB4bWxIdHRwUmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgeyByZWFkeVN0YXRlLCBzdGF0dXMsIHJlc3BvbnNlIH0gPSB4bWxIdHRwUmVxdWVzdCxcbiAgICAgICAgICBzdGF0dXNDb2RlID0gc3RhdHVzO1xuXG4gICAgaWYgKHJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgbGV0IGNvbnRlbnQgPSByZXNwb25zZTtcblxuICAgICAgaWYgKGFjY2VwdCA9PT0gQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBqc29uU3RyaW5nID0gY29udGVudCwgIC8vL1xuICAgICAgICAgICAgICAgIGpzb24gPSBKU09OLnBhcnNlKGpzb25TdHJpbmcpO1xuXG4gICAgICAgICAgY29udGVudCA9IGpzb247ICAvLy9cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb250ZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjYWxsYmFjayhjb250ZW50LCBzdGF0dXNDb2RlKTtcbiAgICB9XG4gIH07XG5cbiAgeG1sSHR0cFJlcXVlc3Qub3BlbihtZXRob2QsIHVybCk7XG5cbiAgaWYgKGFjY2VwdCAhPT0gbnVsbCkge1xuICAgIHhtbEh0dHBSZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoQUNDRVBUX0hFQURFUiwgYWNjZXB0KTtcbiAgfVxuXG4gIGlmIChjb250ZW50VHlwZSAhPT0gbnVsbCkge1xuICAgIHhtbEh0dHBSZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoQ09OVEVOVF9UWVBFX0hFQURFUiwgY29udGVudFR5cGUpO1xuICB9XG5cbiAgKGNvbnRlbnQgIT09IG51bGwpID9cbiAgICB4bWxIdHRwUmVxdWVzdC5zZW5kKGNvbnRlbnQpIDpcbiAgICAgIHhtbEh0dHBSZXF1ZXN0LnNlbmQoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXQsXG4gIHBvc3QsXG4gIHJlcXVlc3Rcbn1cblxuZnVuY3Rpb24gdW5kZXJ3cml0ZUFjY2VwdEhlYWRlcihoZWFkZXJzLCBhY2NlcHQpIHtcbiAgY29uc3QgbmFtZSA9IEFDQ0VQVF9IRUFERVIsICAvLy9cbiAgICAgICAgdmFsdWUgPSBhY2NlcHQ7IC8vL1xuXG4gIHVuZGVyd3JpdGUoaGVhZGVycywgbmFtZSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiB1bmRlcndyaXRlQ29udGVudFR5cGVIZWFkZXIoaGVhZGVycywgY29udGVudFRZcGUpIHtcbiAgY29uc3QgbmFtZSA9IENPTlRFTlRfVFlQRV9IRUFERVIsICAvLy9cbiAgICAgICAgdmFsdWUgPSBjb250ZW50VFlwZTsgLy8vXG5cbiAgdW5kZXJ3cml0ZShoZWFkZXJzLCBuYW1lLCB2YWx1ZSk7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgbGV2ZWxzIH0gZnJvbSBcIi4vbGV2ZWxzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG1ldGhvZHMgfSBmcm9tIFwiLi9tZXRob2RzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGhlYWRlcnMgfSBmcm9tIFwiLi9oZWFkZXJzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGtleUNvZGVzIH0gZnJvbSBcIi4va2V5Q29kZXNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZW5jb2RpbmdzIH0gZnJvbSBcIi4vZW5jb2RpbmdzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNoYXJhY3RlcnMgfSBmcm9tIFwiLi9jaGFyYWN0ZXJzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHN0YXR1c0NvZGVzIH0gZnJvbSBcIi4vc3RhdHVzQ29kZXNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29udGVudFR5cGVzIH0gZnJvbSBcIi4vY29udGVudFR5cGVzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHN0YXR1c01lc3NhZ2VzIH0gZnJvbSBcIi4vc3RhdHVzTWVzc2FnZXNcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBwYXRoVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BhdGhcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaHR0cFV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9odHRwXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHN0cmluZ1V0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdmVyc2lvblV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy92ZXJzaW9uXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9hc3luY2hyb25vdXNcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBhamF4VXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FqYXhcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmV4cG9ydCBjb25zdCB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkLCBmb3VydGgsIHB1c2gsIHNlcGFyYXRlIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZChhcnJheUEsIGFycmF5Qikge1xuICBhcnJheUIuZm9yRWFjaCgoZWxlbWVudEIpID0+IHtcbiAgICBhcnJheUEucHVzaChlbGVtZW50Qik7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGVybXV0ZShhcnJheSwgcGxhY2VzKSB7XG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgICAgY3V0ID0gbGVuZ3RoIC0gcGxhY2VzLFxuICAgICAgICBsZWFkaW5nRWxlbWVudHMgPSBhcnJheS5zbGljZSgwLCBjdXQpLFxuICAgICAgICB0cmFpbGluZ0VsZW1lbnRzID0gYXJyYXkuc2xpY2UoY3V0KTtcblxuICBhcnJheSA9IFsgLi4udHJhaWxpbmdFbGVtZW50cywgLi4ubGVhZGluZ0VsZW1lbnRzIF07XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlbihhcnJheXMpIHtcbiAgcmV0dXJuIGFycmF5cy5yZWR1Y2UoKGVsZW1lbnRzLCBhcnJheSkgPT4ge1xuICAgIGVsZW1lbnRzID0gZWxlbWVudHMuY29uY2F0KGFycmF5KTtcblxuICAgIHJldHVybiBlbGVtZW50cztcbiAgfSwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3VhcmFudGVlKGFycmF5T3JFbGVtZW50KSB7XG4gIGFycmF5T3JFbGVtZW50ID0gYXJyYXlPckVsZW1lbnQgfHwgW107XG5cbiAgcmV0dXJuIChhcnJheU9yRWxlbWVudCBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICBhcnJheU9yRWxlbWVudCA6XG4gICAgICAgICAgICAgWyBhcnJheU9yRWxlbWVudCBdO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBGVU5DVElPTiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5pbXBvcnQgeyBndWFyYW50ZWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWxlbWVudCB7XG4gIGdldFByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcGVydGllcztcbiAgfVxuXG4gIGdldENoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHNldFByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gIH1cblxuICBzZXRDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpIHtcbiAgICB0aGlzLmNoaWxkRWxlbWVudHMgPSBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gbmV3IENsYXNzKC4uLnJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9ICh0eXBlb2YgZWxlbWVudC5jaGlsZEVsZW1lbnRzID09PSBGVU5DVElPTikgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGd1YXJhbnRlZShlbGVtZW50LmNoaWxkRWxlbWVudHMocHJvcGVydGllcykpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXMuY2hpbGRFbGVtZW50cyB8fCBbXTtcblxuICAgIGVsZW1lbnQuc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcblxuICAgIGVsZW1lbnQuc2V0Q2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB6ZXJvMigpIHtcbiAgcmV0dXJuIChbXG5cbiAgICAwLFxuICAgIDAsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB6ZXJvMygpIHtcbiAgcmV0dXJuIChbXG5cbiAgICAwLFxuICAgIDAsXG4gICAgMCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHplcm80KCkge1xuICByZXR1cm4gKFtcblxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW5ndGgyKHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHkgXSA9IHZlY3RvcjtcblxuICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVuZ3RoMyh2ZWN0b3IpIHtcbiAgY29uc3QgWyB4LCB5LCB6IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHopO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVuZ3RoNCh2ZWN0b3IpIHtcbiAgY29uc3QgWyB4LCB5LCB6LCB3IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHogKyB3ICogdyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb3QyKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgY29uc3QgWyBhMCwgYTEgXSA9IHZlY3RvckEsXG4gICAgICAgIFsgYjAsIGIxIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoYTAgKiBiMCArIGExICogYjEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG90Myh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIGNvbnN0IFsgYTAsIGExLCBhMiBdID0gdmVjdG9yQSxcbiAgICAgICAgWyBiMCwgYjEsIGIyIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoYTAgKiBiMCArIGExICogYjEgKyBhMiAqIGIyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvdDQodmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBbIGEwLCBhMSwgYTIsIGEzIF0gPSB2ZWN0b3JBLFxuICAgICAgICBbIGIwLCBiMSwgYjIsIGIzIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoYTAgKiBiMCArIGExICogYjEgKyBhMiAqIGIyICsgYTMgKiBiMyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcm9zczModmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBbIGEwLCBhMSwgYTIgXSA9IHZlY3RvckEsXG4gICAgICAgIFsgYjAsIGIxLCBiMiBdID0gdmVjdG9yQjtcblxuICByZXR1cm4gKFtcblxuICAgIGExICogYjIgLSBhMiAqIGIxLFxuICAgIGEyICogYjAgLSBhMCAqIGIyLFxuICAgIGEwICogYjEgLSBhMSAqIGIwLFxuXG4gIF0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpc2UyKHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHkgXSA9IHZlY3RvcixcblxuICAgICAgICBsZW5ndGggPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG5cbiAgcmV0dXJuIChbXG5cbiAgICB4IC8gbGVuZ3RoLFxuICAgIHkgLyBsZW5ndGgsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpc2UzKHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHksIHogXSA9IHZlY3RvcixcblxuICAgICAgICBsZW5ndGggPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6KTtcblxuICByZXR1cm4gKFtcblxuICAgIHggLyBsZW5ndGgsXG4gICAgeSAvIGxlbmd0aCxcbiAgICB6IC8gbGVuZ3RoLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXNlNCh2ZWN0b3IpIHtcbiAgY29uc3QgWyB4LCB5LCB6LCB3IF0gPSB2ZWN0b3IsXG5cbiAgICAgICAgbGVuZ3RoID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeiArIHcgKiB3KTtcblxuICByZXR1cm4gKFtcblxuICAgIHggLyBsZW5ndGgsXG4gICAgeSAvIGxlbmd0aCxcbiAgICB6IC8gbGVuZ3RoLFxuICAgIHcgLyBsZW5ndGgsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZsZWN0Mih2ZWN0b3IpIHtcbiAgY29uc3QgWyB4LCB5IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIChbXG5cbiAgICAteCxcbiAgICAteSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmxlY3QzKHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHksIHogXSA9IHZlY3RvcjtcblxuICByZXR1cm4gKFtcblxuICAgIC14LFxuICAgIC15LFxuICAgIC16LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmbGVjdDQodmVjdG9yKSB7XG4gIGNvbnN0IFsgeCwgeSwgeiwgdyBdID0gdmVjdG9yO1xuXG4gIHJldHVybiAoW1xuXG4gICAgLXgsXG4gICAgLXksXG4gICAgLXosXG4gICAgLXcsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cnVuY2F0ZTQodmVjdG9yKSB7XG4gIGNvbnN0IFsgeCwgeSwgeiBdID0gdmVjdG9yO1xuXG4gIHJldHVybiAoW1xuXG4gICAgeCxcbiAgICB5LFxuICAgIHosXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQyKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgY29uc3QgWyBhMCwgYTEgXSA9IHZlY3RvckEsXG4gICAgICAgIFsgYjAsIGIxIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTAgKyBiMCxcbiAgICBhMSArIGIxLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkMyh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIGNvbnN0IFsgYTAsIGExLCBhMiBdID0gdmVjdG9yQSxcbiAgICAgICAgWyBiMCwgYjEsIGIyIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTAgKyBiMCxcbiAgICBhMSArIGIxLFxuICAgIGEyICsgYjIsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQ0KHZlY3RvckEsIHZlY3RvckIpIHtcbiAgY29uc3QgWyBhMCwgYTEsIGEyLCBhMyBdID0gdmVjdG9yQSxcbiAgICAgICAgWyBiMCwgYjEsIGIyLCBiMyBdID0gdmVjdG9yQjtcblxuICByZXR1cm4gKFtcblxuICAgIGEwICsgYjAsXG4gICAgYTEgKyBiMSxcbiAgICBhMiArIGIyLFxuICAgIGEzICsgYjMsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdDIodmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBbIGEwLCBhMSBdID0gdmVjdG9yQSxcbiAgICAgICAgWyBiMCwgYjEgXSA9IHZlY3RvckI7XG5cbiAgcmV0dXJuIChbXG5cbiAgICBhMCAtIGIwLFxuICAgIGExIC0gYjEsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdDModmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBbIGEwLCBhMSwgYTIgXSA9IHZlY3RvckEsXG4gICAgICAgIFsgYjAsIGIxLCBiMiBdID0gdmVjdG9yQjtcblxuICByZXR1cm4gKFtcblxuICAgIGEwIC0gYjAsXG4gICAgYTEgLSBiMSxcbiAgICBhMiAtIGIyLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3Q0KHZlY3RvckEsIHZlY3RvckIpIHtcbiAgY29uc3QgWyBhMCwgYTEsIGEyLCBhMyBdID0gdmVjdG9yQSxcbiAgICAgICAgWyBiMCwgYjEsIGIyLCBiMyBdID0gdmVjdG9yQjtcblxuICByZXR1cm4gKFtcblxuICAgIGEwIC0gYjAsXG4gICAgYTEgLSBiMSxcbiAgICBhMiAtIGIyLFxuICAgIGEzIC0gYjMsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseTIodmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBbIHgwLCB5MCBdID0gdmVjdG9yQSxcbiAgICAgICAgWyB4MSwgeTEgXSA9IHZlY3RvckI7XG5cbiAgcmV0dXJuIChbXG5cbiAgICB4MCAqIHgxLFxuICAgIHkwICogeTEsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseTModmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBbIHgwLCB5MCwgejAgXSA9IHZlY3RvckEsXG4gICAgICAgIFsgeDEsIHkxLCB6MSBdID0gdmVjdG9yQjtcblxuICByZXR1cm4gKFtcblxuICAgIHgwICogeDEsXG4gICAgeTAgKiB5MSxcbiAgICB6MCAqIHoxLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHk0KHZlY3RvckEsIHZlY3RvckIpIHtcbiAgY29uc3QgWyB4MCwgeTAsIHowLCB3MCBdID0gdmVjdG9yQSxcbiAgICAgICAgWyB4MSwgeTEsIHoxLCB3MSBdID0gdmVjdG9yQjtcblxuICByZXR1cm4gKFtcblxuICAgIHgwICogeDEsXG4gICAgeTAgKiB5MSxcbiAgICB6MCAqIHoxLFxuICAgIHcwICogdzEsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXZpZGUyKHZlY3RvciwgZGl2aXNvcikge1xuICBjb25zdCBbIHgsIHkgXSA9IHZlY3RvcjtcblxuICByZXR1cm4gKFtcblxuICAgIHggLyBkaXZpc29yLFxuICAgIHkgLyBkaXZpc29yLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGl2aWRlMyh2ZWN0b3IsIGRpdmlzb3IpIHtcbiAgY29uc3QgWyB4LCB5LCB6IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIChbXG5cbiAgICB4IC8gZGl2aXNvcixcbiAgICB5IC8gZGl2aXNvcixcbiAgICB6IC8gZGl2aXNvcixcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpdmlkZTQodmVjdG9yLCBkaXZpc29yKSB7XG4gIGNvbnN0IFsgeCwgeSwgeiwgdyBdID0gdmVjdG9yO1xuXG4gIHJldHVybiAoW1xuXG4gICAgeCAvIGRpdmlzb3IsXG4gICAgeSAvIGRpdmlzb3IsXG4gICAgeiAvIGRpdmlzb3IsXG4gICAgdyAvIGRpdmlzb3IsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZTIodmVjdG9yLCBzY2FsYXIpIHtcbiAgY29uc3QgWyB4LCB5IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIChbXG5cbiAgICB4ICogc2NhbGFyLFxuICAgIHkgKiBzY2FsYXIsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZTModmVjdG9yLCBzY2FsYXIpIHtcbiAgY29uc3QgWyB4LCB5LCB6IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIChbXG5cbiAgICB4ICogc2NhbGFyLFxuICAgIHkgKiBzY2FsYXIsXG4gICAgeiAqIHNjYWxhcixcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlNCh2ZWN0b3IsIHNjYWxhcikge1xuICBjb25zdCBbIHgsIHksIHosIHcgXSA9IHZlY3RvcjtcblxuICByZXR1cm4gKFtcblxuICAgIHggKiBzY2FsYXIsXG4gICAgeSAqIHNjYWxhcixcbiAgICB6ICogc2NhbGFyLFxuICAgIHcgKiBzY2FsYXIsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm0yKHZlY3RvciwgbWF0cml4KSB7XG4gIGNvbnN0IFsgeCwgeSBdID0gdmVjdG9yLFxuXG4gICAgICAgIFsgbTAsIG0xLCBtMiwgbTMgXSA9IG1hdHJpeDtcblxuICByZXR1cm4gKFtcblxuICAgIG0wICogeCArIG0yICogeSxcbiAgICBtMSAqIHggKyBtMyAqIHksXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm0zKHZlY3RvciwgbWF0cml4KSB7XG4gIGNvbnN0IFsgeCwgeSwgeiBdID0gdmVjdG9yLFxuXG4gICAgICAgIFsgbTAsIG0xLCBtMiwgbTMsIG00LCBtNSwgbTYsIG03LCBtOCBdID0gbWF0cml4O1xuXG4gIHJldHVybiAoW1xuXG4gICAgbTAgKiB4ICsgbTMgKiB5ICsgbTYgKiB6LFxuICAgIG0xICogeCArIG00ICogeSArIG03ICogeixcbiAgICBtMiAqIHggKyBtNSAqIHkgKyBtOCAqIHosXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm00KHZlY3RvciwgbWF0cml4KSB7XG4gIGNvbnN0IFsgeCwgeSwgeiwgdyBdID0gdmVjdG9yLFxuXG4gICAgICAgIFsgbTAsIG0xLCBtMiwgbTMsIG00LCBtNSwgbTYsIG03LCBtOCwgbTksIG0xMCwgbTExLCBtMTIsIG0xMywgbTE0LCBtMTUgXSA9IG1hdHJpeDtcblxuXG4gIHJldHVybiAoW1xuXG4gICAgbTAgKiB4ICsgbTQgKiB5ICsgbTggKiB6ICsgbTEyICogdyxcbiAgICBtMSAqIHggKyBtNSAqIHkgKyBtOSAqIHogKyBtMTMgKiB3LFxuICAgIG0yICogeCArIG02ICogeSArIG0xMCAqIHogKyBtMTQgKiB3LFxuICAgIG0zICogeCArIG03ICogeSArIG0xMSAqIHogKyBtMTUgKiB3LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VtMiguLi52ZWN0b3JzKSB7XG4gIGNvbnN0IHplcm8gPSB6ZXJvMigpLFxuICAgICAgICBzdW0gPSB2ZWN0b3JzLnJlZHVjZSgoc3VtLCB2ZWN0b3IpID0+IHtcbiAgICAgICAgICBzdW0gPSBhZGQyKHN1bSwgdmVjdG9yKTtcblxuICAgICAgICAgIHJldHVybiBzdW07XG4gICAgICAgIH0sIHplcm8pO1xuXG4gIHJldHVybiBzdW07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdW0zKC4uLnZlY3RvcnMpIHtcbiAgY29uc3QgemVybyA9IHplcm8zKCksXG4gICAgICAgIHN1bSA9IHZlY3RvcnMucmVkdWNlKChzdW0sIHZlY3RvcikgPT4ge1xuICAgICAgICAgIHN1bSA9IGFkZDMoc3VtLCB2ZWN0b3IpO1xuXG4gICAgICAgICAgcmV0dXJuIHN1bTtcbiAgICAgICAgfSwgemVybyk7XG5cbiAgcmV0dXJuIHN1bTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1bTQoLi4udmVjdG9ycykge1xuICBjb25zdCB6ZXJvID0gemVybzQoKSxcbiAgICAgICAgc3VtID0gdmVjdG9ycy5yZWR1Y2UoKHN1bSwgdmVjdG9yKSA9PiB7XG4gICAgICAgICAgc3VtID0gYWRkNChzdW0sIHZlY3Rvcik7XG5cbiAgICAgICAgICByZXR1cm4gc3VtO1xuICAgICAgICB9LCB6ZXJvKTtcblxuICByZXR1cm4gc3VtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVhbjIoLi4udmVjdG9ycykge1xuICBjb25zdCBsZW5ndGggPSB2ZWN0b3JzLmxlbmd0aCxcbiAgICAgICAgc3VtID0gc3VtMiguLi52ZWN0b3JzKSxcbiAgICAgICAgbWVhbiA9IGRpdmlkZTIoc3VtLCBsZW5ndGgpO1xuXG4gIHJldHVybiBtZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVhbjMoLi4udmVjdG9ycykge1xuICBjb25zdCBsZW5ndGggPSB2ZWN0b3JzLmxlbmd0aCxcbiAgICAgICAgc3VtID0gc3VtMyguLi52ZWN0b3JzKSxcbiAgICAgICAgbWVhbiA9IGRpdmlkZTMoc3VtLCBsZW5ndGgpO1xuXG4gIHJldHVybiBtZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVhbjQoLi4udmVjdG9ycykge1xuICBjb25zdCBsZW5ndGggPSB2ZWN0b3JzLmxlbmd0aCxcbiAgICAgICAgc3VtID0gc3VtNCguLi52ZWN0b3JzKSxcbiAgICAgICAgbWVhbiA9IGRpdmlkZTQoc3VtLCBsZW5ndGgpO1xuXG4gIHJldHVybiBtZWFuO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHplcm8yLFxuICB6ZXJvMyxcbiAgemVybzQsXG4gIGxlbmd0aDIsXG4gIGxlbmd0aDMsXG4gIGxlbmd0aDQsXG4gIGRvdDIsXG4gIGRvdDMsXG4gIGRvdDQsXG4gIGNyb3NzMyxcbiAgbm9ybWFsaXNlMixcbiAgbm9ybWFsaXNlMyxcbiAgbm9ybWFsaXNlNCxcbiAgcmVmbGVjdDIsXG4gIHJlZmxlY3QzLFxuICByZWZsZWN0NCxcbiAgdHJ1bmNhdGU0LFxuICBhZGQyLFxuICBhZGQzLFxuICBhZGQ0LFxuICBzdWJ0cmFjdDIsXG4gIHN1YnRyYWN0MyxcbiAgc3VidHJhY3Q0LFxuICBtdWx0aXBseTIsXG4gIG11bHRpcGx5MyxcbiAgbXVsdGlwbHk0LFxuICBkaXZpZGUyLFxuICBkaXZpZGUzLFxuICBkaXZpZGU0LFxuICBzY2FsZTIsXG4gIHNjYWxlMyxcbiAgc2NhbGU0LFxuICB0cmFuc2Zvcm0yLFxuICB0cmFuc2Zvcm0zLFxuICB0cmFuc2Zvcm00LFxuICBzdW0yLFxuICBzdW0zLFxuICBzdW00LFxuICBtZWFuMixcbiAgbWVhbjMsXG4gIG1lYW40XG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzdWJ0cmFjdDMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkZ2Uge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgZXh0ZW50KSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIHRoaXMuZXh0ZW50ID0gZXh0ZW50O1xuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb247XG4gIH1cblxuICBnZXRFeHRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW50O1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLnNsaWNlKCksXG4gICAgICAgICAgZXh0ZW50ID0gdGhpcy5leHRlbnQuc2xpY2UoKSxcbiAgICAgICAgICBlZGdlID0gbmV3IEVkZ2UocG9zaXRpb24sIGV4dGVudCk7XG5cbiAgICByZXR1cm4gZWRnZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgoQ2xhc3MsIHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpIHtcbiAgICBpZiAoZW5kVmVydGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVuZFZlcnRleCA9IHN0YXJ0VmVydGV4OyAgLy8vXG4gICAgICBzdGFydFZlcnRleCA9IENsYXNzOyAgLy8vXG4gICAgICBDbGFzcyA9IEVkZ2U7IC8vL1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBzdGFydFBvc2l0aW9uID0gc3RhcnRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBlbmRQb3NpdGlvbiA9IGVuZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHBvc2l0aW9uID0gc3RhcnRQb3NpdGlvbi5zbGljZSgpLCAvLy9cbiAgICAgICAgICBleHRlbnQgPSBzdWJ0cmFjdDMoZW5kUG9zaXRpb24sIHN0YXJ0UG9zaXRpb24pLFxuICAgICAgICAgIGVkZ2UgPSBuZXcgQ2xhc3MocG9zaXRpb24sIGV4dGVudCk7XG5cbiAgICByZXR1cm4gZWRnZTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhZGQzLCBzY2FsZTMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVNaWRQb2ludFBvc2l0aW9uKHZlcnRpY2VzKSB7XG4gIGNvbnN0IG1pZFBvaW50UG9zaXRpb24gPSB2ZXJ0aWNlcy5yZWR1Y2UoKG1pZFBvaW50UG9zaXRpb24sIHZlcnRleCkgPT4ge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uID0gdmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgc2NhbGVkVmVydGV4UG9zaXRpb24gPSBzY2FsZTModmVydGV4UG9zaXRpb24sIDEvMyk7XG5cbiAgICBtaWRQb2ludFBvc2l0aW9uID0gYWRkMyhtaWRQb2ludFBvc2l0aW9uLCBzY2FsZWRWZXJ0ZXhQb3NpdGlvbik7XG5cbiAgICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvbjtcbiAgfSwgWyAwLCAwLCAwIF0pO1xuXG4gIHJldHVybiBtaWRQb2ludFBvc2l0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdE1pZFBvaW50UG9zaXRpb25PbnRvWFlQbGFuZShtaWRQb2ludFBvc2l0aW9uKSB7XG4gIG1pZFBvaW50UG9zaXRpb24gPSBbIC4uLm1pZFBvaW50UG9zaXRpb24uc2xpY2UoMCwgMiksIDAgXTsgIC8vL1xuXG4gIHJldHVybiBtaWRQb2ludFBvc2l0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNNaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMobWlkUG9pbnRQb3NpdGlvbiwgbWFza2luZ0VkZ2VzKSB7XG4gIGNvbnN0IG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcyA9IGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzKG1pZFBvaW50UG9zaXRpb24sIG1hc2tpbmdFZGdlcyksXG4gICAgICAgIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMgPSBpc01pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMobWlkUG9pbnRQb3NpdGlvbiwgbWFza2luZ0VkZ2VzKSxcbiAgICAgICAgbWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzID0gbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzIHx8IG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXM7IC8vL1xuXG4gIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXM7XG59XG5cbmZ1bmN0aW9uIGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzKG1pZFBvaW50UG9zaXRpb24sIG1hc2tpbmdFZGdlcykge1xuICBjb25zdCBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMgPSBtYXNraW5nRWRnZXMucmVkdWNlKChtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMsIG1hc2tpbmdFZGdlKSA9PiB7XG4gICAgaWYgKG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcykge1xuICAgICAgY29uc3QgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2UgPSBtYXNraW5nRWRnZS5pc01pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQobWlkUG9pbnRQb3NpdGlvbik7XG5cbiAgICAgIG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcyA9IG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlO1xuICAgIH1cblxuICAgIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXM7XG4gIH0sIHRydWUpO1xuXG4gIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXM7XG59XG5cbmZ1bmN0aW9uIGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpIHtcbiAgY29uc3QgbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcyA9IG1hc2tpbmdFZGdlcy5yZWR1Y2UoKG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMsIG1hc2tpbmdFZGdlKSA9PiB7XG4gICAgaWYgKG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMpIHtcbiAgICAgIGNvbnN0IG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZSA9IG1hc2tpbmdFZGdlLmlzTWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHQobWlkUG9pbnRQb3NpdGlvbik7XG5cbiAgICAgIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMgPSBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXM7XG4gIH0sIHRydWUpO1xuXG4gIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWRnZSBmcm9tIFwiLi4vZWRnZVwiO1xuXG5pbXBvcnQgeyB0aGlyZCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHN1YnRyYWN0MywgY3Jvc3MzIH0gZnJvbSBcIi4uLy4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgcHJvamVjdE1pZFBvaW50UG9zaXRpb25PbnRvWFlQbGFuZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbWlkUG9pbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFza2luZ0VkZ2UgZXh0ZW5kcyBFZGdlIHtcbiAgaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0KG1pZFBvaW50UG9zaXRpb24pIHtcbiAgICBtaWRQb2ludFBvc2l0aW9uID0gcHJvamVjdE1pZFBvaW50UG9zaXRpb25PbnRvWFlQbGFuZShtaWRQb2ludFBvc2l0aW9uKTsgIC8vL1xuXG4gICAgY29uc3QgZXh0ZW50ID0gdGhpcy5nZXRFeHRlbnQoKSxcbiAgICAgICAgICBwb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBtaWRQb2ludFJlbGF0aXZlUG9zaXRpb24gPSBzdWJ0cmFjdDMobWlkUG9pbnRQb3NpdGlvbiwgcG9zaXRpb24pLFxuICAgICAgICAgIGNyb3NzUHJvZHVjdENvbXBvbmVudHMgPSBjcm9zczMoZXh0ZW50LCBtaWRQb2ludFJlbGF0aXZlUG9zaXRpb24pLCAvLy9cbiAgICAgICAgICB0aGlyZENyb3NzUHJvZHVjdENvbXBvbmVudCA9IHRoaXJkKGNyb3NzUHJvZHVjdENvbXBvbmVudHMpLFxuICAgICAgICAgIG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQgPSAodGhpcmRDcm9zc1Byb2R1Y3RDb21wb25lbnQgPiAwKTtcblxuICAgIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0O1xuICB9XG4gIFxuICBpc01pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0KG1pZFBvaW50UG9zaXRpb24pIHtcbiAgICBjb25zdCBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0ID0gdGhpcy5pc01pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQobWlkUG9pbnRQb3NpdGlvbiksXG4gICAgICAgICAgbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHQgPSAhbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdDtcbiAgICBcbiAgICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHQ7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgoc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCkgeyByZXR1cm4gRWRnZS5mcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgoTWFza2luZ0VkZ2UsIHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpOyB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHplcm8yLCB6ZXJvMyB9IGZyb20gXCIuL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9ERVBUSCA9IDEuMDtcbmV4cG9ydCBjb25zdCBERUZBVUxUX1pfRkFSID0gMTAwMDtcbmV4cG9ydCBjb25zdCBERUZBVUxUX1pfTkVBUiA9IDE7XG5leHBvcnQgY29uc3QgREVGQVVMVF9QRVJTSVNUID0gZmFsc2U7XG5leHBvcnQgY29uc3QgREVGQVVMVF9GSUVMRF9PRl9WSUVXID0gNDU7XG5leHBvcnQgY29uc3QgREVGQVVMVF9JTklUSUFMX0FOR0xFUyA9IHplcm8yKCk7XG5leHBvcnQgY29uc3QgREVGQVVMVF9JTklUSUFMX09GRlNFVFMgPSB6ZXJvMygpO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfTUFSR0lOX09GX0VSUk9SID0gMC4wMDAwMDAxO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfSU5JVElBTF9ESVNUQU5DRSA9IDU7XG5leHBvcnQgY29uc3QgREVGQVVMVF9JTklUSUFMX1BPU0lUSU9OID0gWyAwLCAwLCA1IF07XG5leHBvcnQgY29uc3QgREVGQVVMVF9NT1VTRV9TRU5TSVRJVklUWSA9IDE7XG5leHBvcnQgY29uc3QgREVGQVVMVF9CQUNLR1JPVU5EX0NPTE9VUiA9IFsgMCwgMCwgMCBdO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfTU9VU0VfV0hFRUxfU0VOU0lUSVZJVFkgPSAxO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBERUZBVUxUX01BUkdJTl9PRl9FUlJPUiB9IGZyb20gXCIuLi9kZWZhdWx0c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb09uZSh2YWx1ZSwgbWFyZ2luT2ZFcnJvciA9IERFRkFVTFRfTUFSR0lOX09GX0VSUk9SKSB7IHJldHVybiBpc0FwcHJveGltYXRlbHlFcXVhbFRvKHZhbHVlLCAxLCBtYXJnaW5PZkVycm9yKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8odmFsdWUsIG1hcmdpbk9mRXJyb3IgPSBERUZBVUxUX01BUkdJTl9PRl9FUlJPUikgeyByZXR1cm4gaXNBcHByb3hpbWF0ZWx5RXF1YWxUbyh2YWx1ZSwgMCwgbWFyZ2luT2ZFcnJvcik7IH1cblxuZnVuY3Rpb24gaXNBcHByb3hpbWF0ZWx5RXF1YWxUbyh2YWx1ZUEsIHZhbHVlQiwgbWFyZ2luT2ZFcnJvciA9IERFRkFVTFRfTUFSR0lOX09GX0VSUk9SKSB7XG4gIGNvbnN0IGRpZmZlcmVuY2UgPSB2YWx1ZUEgLSB2YWx1ZUIsXG4gICAgICAgIGFic29sdXRlRGlmZmVyZW5jZSA9IE1hdGguYWJzKGRpZmZlcmVuY2UpLFxuICAgICAgICBhcHByb3hpbWF0ZWx5RXF1YWwgPSAoYWJzb2x1dGVEaWZmZXJlbmNlIDwgbWFyZ2luT2ZFcnJvcik7XG5cbiAgcmV0dXJuIGFwcHJveGltYXRlbHlFcXVhbDtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUhhbGZBbmdsZVNpbmUoYW5nbGVDb3NpbmUpIHsgcmV0dXJuIE1hdGguc3FydCgoMSAtIGFuZ2xlQ29zaW5lKSAvIDIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVIYWxmQW5nbGVDb3NpbmUoYW5nbGVDb3NpbmUpIHsgcmV0dXJuIE1hdGguc3FydCgoMSArIGFuZ2xlQ29zaW5lKSAvIDIpOyB9XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGRvdDMsIGNyb3NzMywgbm9ybWFsaXNlMyB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IGlzQXBwcm94aW1hdGVseUVxdWFsVG9PbmUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FwcHJveGltYXRlXCI7XG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCwgZm91cnRoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlSGFsZkFuZ2xlQ29zaW5lLCBjYWxjdWxhdGVIYWxmQW5nbGVTaW5lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hbmdsZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlSW1hZ2luYXJ5UXVhdGVybmlvbihpbWFnaW5hcnlRdWF0ZXJuaW9uLCByb3RhdGlvblF1YXRlcm5pb24sIGludmVyc2VSb3RhdGlvblF1YXRlcm5pb24pIHsgcmV0dXJuIGhhbWlsdG9uUHJvZHVjdChoYW1pbHRvblByb2R1Y3Qocm90YXRpb25RdWF0ZXJuaW9uLCBpbWFnaW5hcnlRdWF0ZXJuaW9uKSwgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUludmVyc2VSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gIGNvbnN0IHJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudHMgPSByb3RhdGlvblF1YXRlcm5pb24sICAvLy9cbiAgICAgICAgZmlyc3RSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQgPSBmaXJzdChyb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRzKSxcbiAgICAgICAgc2Vjb25kUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50ID0gc2Vjb25kKHJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudHMpLFxuICAgICAgICB0aGlyZFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCA9IHRoaXJkKHJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudHMpLFxuICAgICAgICBmb3VydGhSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQgPSBmb3VydGgocm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cyksXG4gICAgICAgIGludmVyc2VSb3RhdGlvblF1YXRlcm5pb24gPSBbXG4gICAgICAgICAgZmlyc3RSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQsXG4gICAgICAgICAgLXNlY29uZFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCxcbiAgICAgICAgICAtdGhpcmRSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQsXG4gICAgICAgICAgLWZvdXJ0aFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudFxuICAgICAgICBdO1xuXG4gIHJldHVybiBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gIGNvbnN0IGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gcm90YXRpb25RdWF0ZXJuaW9uOyAgLy8vXG5cbiAgcmV0dXJuIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbikge1xuICBjb25zdCBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlSW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uOyAgLy8vXG5cbiAgcmV0dXJuIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlQXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uKG5vcm1hbCkge1xuICBjb25zdCBleHRlbnQgPSBub3JtYWwuZ2V0RXh0ZW50KCksXG4gICAgICAgIHVuaXROb3JtYWwgPSBleHRlbnQsICAvLy9cbiAgICAgICAgekF4aXMgPSBbIDAsIDAsIDEgXSxcbiAgICAgICAgZG90UHJvZHVjdE9mVW5pdE5vcm1hbEFuZFpBeGlzID0gZG90Myh1bml0Tm9ybWFsLCB6QXhpcyksXG4gICAgICAgIGNyb3NzUHJvZHVjdE9mVW5pdE5vcm1hbEFuZFpBeGlzID0gY3Jvc3MzKHVuaXROb3JtYWwsIHpBeGlzKSxcbiAgICAgICAgYW5nbGVPZlJvdGF0aW9uQ29zaW5lID0gZG90UHJvZHVjdE9mVW5pdE5vcm1hbEFuZFpBeGlzLCAvLy9cbiAgICAgICAgYW5nbGVPZlJvdGF0aW9uQ29zaW5lQWJzb2x1dGVWYWx1ZSA9IE1hdGguYWJzKGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSksXG4gICAgICAgIGFuZ2xlT2ZSb3RhdGlvbkNvc2luZUFic29sdXRlVmFsdWVBcHByb3hpbWF0ZWx5RXF1YWxUb09uZSA9IGlzQXBwcm94aW1hdGVseUVxdWFsVG9PbmUoYW5nbGVPZlJvdGF0aW9uQ29zaW5lQWJzb2x1dGVWYWx1ZSksXG4gICAgICAgIGF4aXNPZlJvdGF0aW9uID0gYW5nbGVPZlJvdGF0aW9uQ29zaW5lQWJzb2x1dGVWYWx1ZUFwcHJveGltYXRlbHlFcXVhbFRvT25lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgWyAxLCAwLCAwIF0gOiAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcm9zc1Byb2R1Y3RPZlVuaXROb3JtYWxBbmRaQXhpcyxcbiAgICAgICAgdW5pdEF4aXNPZlJvdGF0aW9uID0gbm9ybWFsaXNlMyhheGlzT2ZSb3RhdGlvbiksXG4gICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25Db3NpbmUgPSBjYWxjdWxhdGVIYWxmQW5nbGVDb3NpbmUoYW5nbGVPZlJvdGF0aW9uQ29zaW5lKSxcbiAgICAgICAgaGFsZkFuZ2xlT2ZSb3RhdGlvblNpbmUgPSBjYWxjdWxhdGVIYWxmQW5nbGVTaW5lKGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSksXG4gICAgICAgIHVuaXRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudHMgPSB1bml0QXhpc09mUm90YXRpb24sICAvLy9cbiAgICAgICAgZmlyc3RBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudCA9IGZpcnN0KHVuaXRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICBzZWNvbmRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudCA9IHNlY29uZCh1bml0QXhpc09mUm90YXRpb25Db21wb25lbnRzKSxcbiAgICAgICAgdGhpcmRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudCA9IHRoaXJkKHVuaXRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICBhcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24gPSBbXG4gICAgICAgICAgaGFsZkFuZ2xlT2ZSb3RhdGlvbkNvc2luZSxcbiAgICAgICAgICBmaXJzdEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50ICogaGFsZkFuZ2xlT2ZSb3RhdGlvblNpbmUsXG4gICAgICAgICAgc2Vjb25kQXhpc09mUm90YXRpb25Db21wb25lbnQgKiBoYWxmQW5nbGVPZlJvdGF0aW9uU2luZSxcbiAgICAgICAgICB0aGlyZEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50ICogaGFsZkFuZ2xlT2ZSb3RhdGlvblNpbmVcbiAgICAgICAgXTtcblxuICByZXR1cm4gYXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlUm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvbihtYXNraW5nRWRnZSkge1xuICBjb25zdCBtYXNraW5nRWRnZUV4dGVudCA9IG1hc2tpbmdFZGdlLmdldEV4dGVudCgpLFxuICAgICAgICB1bml0TWFza2luZ0VkZ2VFeHRlbnQgPSBub3JtYWxpc2UzKG1hc2tpbmdFZGdlRXh0ZW50KSxcbiAgICAgICAgdW5pdE1hc2tpbmdFZGdlRXh0ZW50Q29tcG9uZW50cyA9IHVuaXRNYXNraW5nRWRnZUV4dGVudCwgIC8vL1xuICAgICAgICBmaXJzdFVuaXRNYXNraW5nRWRnZUV4dGVudENvbXBvbmVudCA9IGZpcnN0KHVuaXRNYXNraW5nRWRnZUV4dGVudENvbXBvbmVudHMpLFxuICAgICAgICBzZWNvbmRVbml0TWFza2luZ0VkZ2VFeHRlbnRDb21wb25lbnQgPSBzZWNvbmQodW5pdE1hc2tpbmdFZGdlRXh0ZW50Q29tcG9uZW50cyksXG4gICAgICAgIGFuZ2xlT2ZSb3RhdGlvblNpbmUgPSBmaXJzdFVuaXRNYXNraW5nRWRnZUV4dGVudENvbXBvbmVudCwgIC8vL1xuICAgICAgICBhbmdsZU9mUm90YXRpb25Db3NpbmUgPSBzZWNvbmRVbml0TWFza2luZ0VkZ2VFeHRlbnRDb21wb25lbnQsICAvLy9cbiAgICAgICAgaGFsZkFuZ2xlT2ZSb3RhdGlvbkNvc2luZSA9IGNhbGN1bGF0ZUhhbGZBbmdsZUNvc2luZShhbmdsZU9mUm90YXRpb25Db3NpbmUpLFxuICAgICAgICBoYWxmQW5nbGVPZlJvdGF0aW9uU2luZSA9IChhbmdsZU9mUm90YXRpb25TaW5lID4gMCApID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgK2NhbGN1bGF0ZUhhbGZBbmdsZVNpbmUoYW5nbGVPZlJvdGF0aW9uQ29zaW5lKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLWNhbGN1bGF0ZUhhbGZBbmdsZVNpbmUoYW5nbGVPZlJvdGF0aW9uQ29zaW5lKSxcbiAgICAgICAgcm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvbiA9IFtcbiAgICAgICAgICBoYWxmQW5nbGVPZlJvdGF0aW9uQ29zaW5lLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICBoYWxmQW5nbGVPZlJvdGF0aW9uU2luZVxuICAgICAgICBdO1xuXG4gIHJldHVybiByb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uO1xufVxuXG5mdW5jdGlvbiBoYW1pbHRvblByb2R1Y3QocXVhdGVybmlvbkEsIHF1YXRlcm5pb25CKSB7XG4gIGNvbnN0IGExID0gcXVhdGVybmlvbkFbMF0sXG4gICAgICAgIGIxID0gcXVhdGVybmlvbkFbMV0sXG4gICAgICAgIGMxID0gcXVhdGVybmlvbkFbMl0sXG4gICAgICAgIGQxID0gcXVhdGVybmlvbkFbM10sXG4gICAgICAgIGEyID0gcXVhdGVybmlvbkJbMF0sXG4gICAgICAgIGIyID0gcXVhdGVybmlvbkJbMV0sXG4gICAgICAgIGMyID0gcXVhdGVybmlvbkJbMl0sXG4gICAgICAgIGQyID0gcXVhdGVybmlvbkJbM10sXG4gICAgICAgIGEgPSBhMSAqIGEyIC0gYjEgKiBiMiAtIGMxICogYzIgLSBkMSAqIGQyLFxuICAgICAgICBiID0gYTEgKiBiMiArIGIxICogYTIgKyBjMSAqIGQyIC0gZDEgKiBjMixcbiAgICAgICAgYyA9IGExICogYzIgLSBiMSAqIGQyICsgYzEgKiBhMiArIGQxICogYjIsXG4gICAgICAgIGQgPSBhMSAqIGQyICsgYjEgKiBjMiAtIGMxICogYjIgKyBkMSAqIGEyLFxuICAgICAgICBxdWF0ZXJuaW9uID0gWyBhLCBiLCBjLCBkIF07XG5cbiAgcmV0dXJuIHF1YXRlcm5pb247XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHJvdGF0ZUltYWdpbmFyeVF1YXRlcm5pb24sIGNhbGN1bGF0ZUludmVyc2VSb3RhdGlvblF1YXRlcm5pb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1YXRlcm5pb25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVBvc2l0aW9uKHBvc2l0aW9uLCByb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgY29uc3QgaW1hZ2luYXJ5UXVhdGVybmlvbiA9IGltYWdpbmFyeVF1YXRlcm5pb25Gcm9tUG9zaXRpb24ocG9zaXRpb24pLFxuICAgICAgICBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlSW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICByb3RhdGVkSW1hZ2luYXJ5UXVhdGVybmlvbiA9IHJvdGF0ZUltYWdpbmFyeVF1YXRlcm5pb24oaW1hZ2luYXJ5UXVhdGVybmlvbiwgcm90YXRpb25RdWF0ZXJuaW9uLCBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICBwb3NpdGlvbiA9IHBvc2l0aW9uRnJvbUltYWdpbmFyeVF1YXRlcm5pb24ocm90YXRlZEltYWdpbmFyeVF1YXRlcm5pb24pO1xuXG4gIHJldHVybiBwb3NpdGlvbjtcbn1cblxuZnVuY3Rpb24gaW1hZ2luYXJ5UXVhdGVybmlvbkZyb21Qb3NpdGlvbihwb3NpdGlvbikgeyByZXR1cm4gWzAsIC4uLnBvc2l0aW9uXTsgfSAgLy8vXG5cbmZ1bmN0aW9uIHBvc2l0aW9uRnJvbUltYWdpbmFyeVF1YXRlcm5pb24oaW1hZ2luYXJ5UXVhdGVybmlvbikgeyByZXR1cm4gaW1hZ2luYXJ5UXVhdGVybmlvbi5zbGljZSgxKTsgfSAgLy8vXG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBhZGQzLCBzdWJ0cmFjdDMsIHNjYWxlMyB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcHByb3hpbWF0ZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlSW50ZXJzZWN0aW9uKGVkZ2UsIGZpcnN0UG9zaXRpb25Db21wb25lbnQpIHtcbiAgbGV0IGludGVyc2VjdGlvbiA9IG51bGw7XG5cbiAgY29uc3QgZWRnZU5vblBhcmFsbGVsID0gaXNFZGdlTm9uUGFyYWxsZWwoZWRnZSk7XG5cbiAgaWYgKGVkZ2VOb25QYXJhbGxlbCkge1xuICAgIGNvbnN0IGVkZ2VJbnRlcnNlY3Rpb24gPSBjYWxjdWxhdGVFZGdlSW50ZXJzZWN0aW9uKGVkZ2UsIGZpcnN0UG9zaXRpb25Db21wb25lbnQpLFxuICAgICAgICAgIGVkZ2VJbnRlcnNlY3Rpb25Ob25Ucml2aWFsID0gKChlZGdlSW50ZXJzZWN0aW9uID4gMCApICYmIChlZGdlSW50ZXJzZWN0aW9uIDwgMSkpO1xuXG4gICAgaWYgKGVkZ2VJbnRlcnNlY3Rpb25Ob25Ucml2aWFsKSB7XG4gICAgICBpbnRlcnNlY3Rpb24gPSBlZGdlSW50ZXJzZWN0aW9uOyAgLy8vXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGludGVyc2VjdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMpIHtcbiAgY29uc3Qgbm9uTnVsbEludGVyc2VjdGlvbnMgPSBpbnRlcnNlY3Rpb25zLnJlZHVjZSgobm9uTnVsbEludGVyc2VjdGlvbnMsIGludGVyc2VjdGlvbikgPT4ge1xuICAgIGlmIChpbnRlcnNlY3Rpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vbk51bGxJbnRlcnNlY3Rpb24gPSBpbnRlcnNlY3Rpb247IC8vL1xuXG4gICAgICBub25OdWxsSW50ZXJzZWN0aW9ucy5wdXNoKG5vbk51bGxJbnRlcnNlY3Rpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBub25OdWxsSW50ZXJzZWN0aW9ucztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBub25OdWxsSW50ZXJzZWN0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZU51bGxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSB7XG4gIGNvbnN0IG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGludGVyc2VjdGlvbnMucmVkdWNlKChudWxsSW50ZXJzZWN0aW9uSW5kZXgsIGludGVyc2VjdGlvbiwgaW5kZXgpID0+IHtcbiAgICBpZiAobnVsbEludGVyc2VjdGlvbkluZGV4ID09PSBudWxsKSB7XG4gICAgICBpZiAoaW50ZXJzZWN0aW9uID09PSBudWxsKSB7XG4gICAgICAgIG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGluZGV4O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsSW50ZXJzZWN0aW9uSW5kZXg7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBudWxsSW50ZXJzZWN0aW9uSW5kZXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9uSW5kZXgoaW50ZXJzZWN0aW9ucykge1xuICBjb25zdCBudWxsSW50ZXJzZWN0aW9uSW5kZXggPSBpbnRlcnNlY3Rpb25zLnJlZHVjZSgobnVsbEludGVyc2VjdGlvbkluZGV4LCBpbnRlcnNlY3Rpb24sIGluZGV4KSA9PiB7XG4gICAgaWYgKG51bGxJbnRlcnNlY3Rpb25JbmRleCA9PT0gbnVsbCkge1xuICAgICAgaWYgKGludGVyc2VjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBudWxsSW50ZXJzZWN0aW9uSW5kZXggPSBpbmRleDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbEludGVyc2VjdGlvbkluZGV4O1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gbnVsbEludGVyc2VjdGlvbkluZGV4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb24oc3RhcnRWZXJ0ZXhQb3NpdGlvbiwgZW5kVmVydGV4UG9zaXRpb24sIGludGVyc2VjdGlvbikge1xuICBjb25zdCBleHRlbnQgPSBzdWJ0cmFjdDMoZW5kVmVydGV4UG9zaXRpb24sIHN0YXJ0VmVydGV4UG9zaXRpb24pLFxuICAgICAgICBvZmZzZXQgPSBzY2FsZTMoZXh0ZW50LCBpbnRlcnNlY3Rpb24pLFxuICAgICAgICBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbiA9IGFkZDMoc3RhcnRWZXJ0ZXhQb3NpdGlvbiwgb2Zmc2V0KTtcblxuICByZXR1cm4gaW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb247XG59XG5cbmZ1bmN0aW9uIGlzRWRnZU5vblBhcmFsbGVsKGVkZ2UpIHtcbiAgY29uc3QgZWRnZUV4dGVudCA9IGVkZ2UuZ2V0RXh0ZW50KCksXG4gICAgICAgIGVkZ2VFeHRlbnRDb21wb25lbnRzID0gZWRnZUV4dGVudCwgLy8vXG4gICAgICAgIGZpcnN0RWRnZUV4dGVudENvbXBvbmVudCA9IGZpcnN0KGVkZ2VFeHRlbnRDb21wb25lbnRzKSxcbiAgICAgICAgc2Vjb25kRWRnZUV4dGVudENvbXBvbmVudCA9IHNlY29uZChlZGdlRXh0ZW50Q29tcG9uZW50cyksXG4gICAgICAgIGVkZ2VBbmdsZVRhbmdlbnQgPSBmaXJzdEVkZ2VFeHRlbnRDb21wb25lbnQgLyBzZWNvbmRFZGdlRXh0ZW50Q29tcG9uZW50LFxuICAgICAgICBlZGdlQW5nbGVUYW5nZW50QXBwcm94aW1hdGVseUVxdWFsVG9aZXJvID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8oZWRnZUFuZ2xlVGFuZ2VudCksXG4gICAgICAgIGVkZ2VQYXJhbGxlbCA9IGVkZ2VBbmdsZVRhbmdlbnRBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8sIC8vL1xuICAgICAgICBlZGdlTm9uUGFyYWxsZWwgPSAhZWRnZVBhcmFsbGVsO1xuXG4gIHJldHVybiBlZGdlTm9uUGFyYWxsZWw7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUVkZ2VJbnRlcnNlY3Rpb24oZWRnZSwgZmlyc3RQb3NpdGlvbkNvbXBvbmVudCkge1xuICBjb25zdCBlZGdlRXh0ZW50ID0gZWRnZS5nZXRFeHRlbnQoKSxcbiAgICAgICAgZWRnZVBvc2l0aW9uID0gZWRnZS5nZXRQb3NpdGlvbigpLFxuICAgICAgICBlZGdlRXh0ZW50Q29tcG9uZW50cyA9IGVkZ2VFeHRlbnQsIC8vL1xuICAgICAgICBlZGdlUG9zaXRpb25Db21wb25lbnRzID0gZWRnZVBvc2l0aW9uLCAvLy9cbiAgICAgICAgZmlyc3RFZGdlRXh0ZW50Q29tcG9uZW50ID0gZmlyc3QoZWRnZUV4dGVudENvbXBvbmVudHMpLFxuICAgICAgICBmaXJzdEVkZ2VQb3NpdGlvbkNvbXBvbmVudCA9IGZpcnN0KGVkZ2VQb3NpdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICBlZGdlSW50ZXJzZWN0aW9uID0gKGZpcnN0UG9zaXRpb25Db21wb25lbnQgLSBmaXJzdEVkZ2VQb3NpdGlvbkNvbXBvbmVudCkgLyBmaXJzdEVkZ2VFeHRlbnRDb21wb25lbnQ7XG5cbiAgcmV0dXJuIGVkZ2VJbnRlcnNlY3Rpb247XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgcm90YXRlUG9zaXRpb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3JvdGF0aW9uXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVJbnRlcnNlY3Rpb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2ludGVyc2VjdGlvblwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlUm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvbiwgY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVhdGVybmlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJ0aWNhbExpbmUge1xuICBjb25zdHJ1Y3RvcihmaXJzdFBvc2l0aW9uQ29tcG9uZW50LCBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gICAgdGhpcy5maXJzdFBvc2l0aW9uQ29tcG9uZW50ID0gZmlyc3RQb3NpdGlvbkNvbXBvbmVudDtcbiAgICB0aGlzLmZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gICAgdGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBnZXRGaXJzdFBvc2l0aW9uQ29tcG9uZW50KCkge1xuICAgIHJldHVybiB0aGlzLmZpcnN0UG9zaXRpb25Db21wb25lbnQ7XG4gIH1cbiAgXG4gIGdldEZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgZ2V0QmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIHNwbGl0RmFjZXQoZmFjZXQsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBlZGdlcyA9IGZhY2V0LmdldEVkZ2VzKCksXG4gICAgICAgICAgaW50ZXJzZWN0aW9ucyA9IGVkZ2VzLm1hcCgoZWRnZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJzZWN0aW9uID0gY2FsY3VsYXRlSW50ZXJzZWN0aW9uKGVkZ2UsIHRoaXMuZmlyc3RQb3NpdGlvbkNvbXBvbmVudCk7XG5cbiAgICAgICAgICAgIHJldHVybiBpbnRlcnNlY3Rpb247XG4gICAgICAgICAgfSk7XG5cbiAgICBmYWNldC5zcGxpdFdpdGhJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpO1xuICB9XG5cbiAgc3BsaXRGYWNldHMoZmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3Qgc21hbGxlckZhY2V0cyA9IFtdO1xuXG4gICAgZmFjZXRzLmZvckVhY2goKGZhY2V0KSA9PiB7XG4gICAgICBmYWNldC5yb3RhdGUodGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICAgIHRoaXMuc3BsaXRGYWNldChmYWNldCwgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gICAgfSk7XG5cbiAgICBzbWFsbGVyRmFjZXRzLmZvckVhY2goKHNtYWxsZXJGYWNldCkgPT4ge1xuICAgICAgc21hbGxlckZhY2V0LnJvdGF0ZSh0aGlzLmJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc21hbGxlckZhY2V0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWFza2luZ0VkZ2UobWFza2luZ0VkZ2UpIHtcbiAgICBjb25zdCBtYXNraW5nRWRnZVBvc2l0aW9uID0gbWFza2luZ0VkZ2UuZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICByb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uID0gY2FsY3VsYXRlUm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvbihtYXNraW5nRWRnZSksXG4gICAgICAgICAgcm90YXRpb25RdWF0ZXJuaW9uID0gcm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvbiwgIC8vL1xuICAgICAgICAgIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBwb3NpdGlvbiA9IHJvdGF0ZVBvc2l0aW9uKG1hc2tpbmdFZGdlUG9zaXRpb24sIHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgcG9zaXRpb25Db21wb25lbnRzID0gcG9zaXRpb24sIC8vL1xuICAgICAgICAgIGZpcnN0UG9zaXRpb25Db21wb25lbnQgPSBmaXJzdChwb3NpdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICAgIHZlcnRpY2FsTGluZSA9IG5ldyBWZXJ0aWNhbExpbmUoZmlyc3RQb3NpdGlvbkNvbXBvbmVudCwgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICByZXR1cm4gdmVydGljYWxMaW5lO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVWZXJ0aWNlcyh2ZXJ0aWNlcywgcm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gIGNvbnN0IHJvdGF0ZWRWZXJ0aWNlcyA9IHZlcnRpY2VzLm1hcCgodmVydGV4KSA9PiB7XG4gICAgY29uc3Qgcm90YXRlZFZlcnRleCA9IHZlcnRleC5jbG9uZSgpOyAgLy8vXG5cbiAgICByb3RhdGVkVmVydGV4LnJvdGF0ZShyb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gICAgcmV0dXJuIHJvdGF0ZWRWZXJ0ZXg7XG4gIH0pO1xuXG4gIHJldHVybiByb3RhdGVkVmVydGljZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZShjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCBWZXJ0ZXgpIHsgIC8vL1xuICBjb25zdCBpbmRleGVzID0gaW5kZXhUdXBsZSwgLy8vXG4gICAgICAgIHZlcnRpY2VzID0gaW5kZXhlcy5tYXAoKGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgY29vcmRpbmF0ZVR1cGxlID0gY29vcmRpbmF0ZVR1cGxlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgdmVydGV4ID0gVmVydGV4LmZyb21Db29yZGluYXRlVHVwbGUoY29vcmRpbmF0ZVR1cGxlKTtcblxuICAgICAgICAgIHJldHVybiB2ZXJ0ZXg7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiB2ZXJ0aWNlcztcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hc2tpbmdFZGdlIGZyb20gXCIuL2VkZ2UvbWFza2luZ1wiO1xuaW1wb3J0IFZlcnRpY2FsTGluZSBmcm9tIFwiLi92ZXJ0aWNhbExpbmVcIjtcblxuaW1wb3J0IHsgYWRkLCBzZXBhcmF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHJvdGF0ZVZlcnRpY2VzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy92ZXJ0aWNlc1wiO1xuaW1wb3J0IHsgVkVSVElDRVNfTEVOR1RIIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGNhbGN1bGF0ZUFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbiwgY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWF0ZXJuaW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hc2tpbmdGYWNldCB7XG4gIGNvbnN0cnVjdG9yKG1hc2tpbmdFZGdlcywgdmVydGljYWxMaW5lcywgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbikge1xuICAgIHRoaXMubWFza2luZ0VkZ2VzID0gbWFza2luZ0VkZ2VzO1xuICAgIHRoaXMudmVydGljYWxMaW5lcyA9IHZlcnRpY2FsTGluZXM7XG4gICAgdGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICAgIHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgZ2V0TWFza2luZ0VkZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLm1hc2tpbmdFZGdlcztcbiAgfVxuXG4gIGdldFZlcnRpY2FsTGluZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGljYWxMaW5lcztcbiAgfVxuXG4gIGdldEZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgZ2V0QmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIG1hc2tGYWNldChmYWNldCwgdW5tYXNrZWRGYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCB1bm1hc2tlZEZhY2V0ID0gZmFjZXQuY2xvbmUoKTsgIC8vL1xuXG4gICAgZmFjZXQucm90YXRlKHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gICAgY29uc3QgbWFza2luZ0ZhY2V0ID0gdGhpcywgIC8vL1xuICAgICAgICAgIHNtYWxsZXJGYWNldHMgPSB0aGlzLnNwbGl0RmFjZXQoZmFjZXQsIG1hcmdpbk9mRXJyb3IpLFxuICAgICAgICAgIG1hc2tlZFNtYWxsZXJGYWNldHMgPSBbXSxcbiAgICAgICAgICB1bm1hc2tlZFNtYWxsZXJGYWNldHMgPSBbXTtcblxuICAgIHNlcGFyYXRlKHNtYWxsZXJGYWNldHMsIG1hc2tlZFNtYWxsZXJGYWNldHMsIHVubWFza2VkU21hbGxlckZhY2V0cywgKHNtYWxsZXJGYWNldCkgPT4ge1xuICAgICAgY29uc3Qgc21hbGxlckZhY2V0TWFza2VkID0gc21hbGxlckZhY2V0LmlzTWFza2VkKG1hc2tpbmdGYWNldCk7XG5cbiAgICAgIHJldHVybiBzbWFsbGVyRmFjZXRNYXNrZWQ7XG4gICAgfSk7XG5cbiAgICBjb25zdCBtYXNrZWRTbWFsbGVyRmFjZXRzTGVuZ3RoID0gbWFza2VkU21hbGxlckZhY2V0cy5sZW5ndGg7XG5cbiAgICBpZiAobWFza2VkU21hbGxlckZhY2V0c0xlbmd0aCA9PT0gMCkge1xuICAgICAgdW5tYXNrZWRGYWNldHMucHVzaCh1bm1hc2tlZEZhY2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdW5tYXNrZWRTbWFsbGVyRmFjZXRzLmZvckVhY2goKHVubWFza2VkU21hbGxlckZhY2V0KSA9PiB7XG4gICAgICAgIHVubWFza2VkU21hbGxlckZhY2V0LnJvdGF0ZSh0aGlzLmJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG4gICAgICB9KTtcblxuICAgICAgYWRkKHVubWFza2VkRmFjZXRzLCB1bm1hc2tlZFNtYWxsZXJGYWNldHMpO1xuICAgIH1cbiAgfVxuICBcbiAgc3BsaXRGYWNldChmYWNldCwgbWFyZ2luT2ZFcnJvcikge1xuICAgIGxldCBmYWNldHMgPSBbXG4gICAgICAgICAgZmFjZXRcbiAgICAgICAgXSxcbiAgICAgICAgc21hbGxlckZhY2V0cyA9IGZhY2V0czsgLy8vXG5cbiAgICB0aGlzLnZlcnRpY2FsTGluZXMuZm9yRWFjaCgodmVydGljYWxMaW5lKSA9PiB7XG4gICAgICBzbWFsbGVyRmFjZXRzID0gdmVydGljYWxMaW5lLnNwbGl0RmFjZXRzKGZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG5cbiAgICAgIGZhY2V0cyA9IHNtYWxsZXJGYWNldHM7IC8vL1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNtYWxsZXJGYWNldHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZhY2V0KGZhY2V0KSB7XG4gICAgY29uc3QgZmFjZXROb3JtYWwgPSBmYWNldC5nZXROb3JtYWwoKSxcbiAgICAgICAgICBmYWNldFZlcnRpY2VzID0gZmFjZXQuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgICBub3JtYWwgPSBmYWNldE5vcm1hbCwgLy8vXG4gICAgICAgICAgYXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlQXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uKG5vcm1hbCksXG4gICAgICAgICAgcm90YXRpb25RdWF0ZXJuaW9uID0gYXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uLCAvLy9cbiAgICAgICAgICB2ZXJ0aWNlcyA9IHJvdGF0ZVZlcnRpY2VzKGZhY2V0VmVydGljZXMsIHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgbWFza2luZ0VkZ2VzID0gY2FsY3VsYXRlTWFza2luZ0VkZ2VzKHZlcnRpY2VzKSxcbiAgICAgICAgICB2ZXJ0aWNhbExpbmVzID0gbWFza2luZ0VkZ2VzLm1hcCgobWFza2luZ0VkZ2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRpY2FsTGluZSA9IFZlcnRpY2FsTGluZS5mcm9tTWFza2luZ0VkZ2UobWFza2luZ0VkZ2UpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdmVydGljYWxMaW5lO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBtYXNraW5nRmFjZXQgPSBuZXcgTWFza2luZ0ZhY2V0KG1hc2tpbmdFZGdlcywgdmVydGljYWxMaW5lcywgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICByZXR1cm4gbWFza2luZ0ZhY2V0O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU1hc2tpbmdFZGdlcyh2ZXJ0aWNlcykge1xuICBjb25zdCBtYXNraW5nRWRnZXMgPSB2ZXJ0aWNlcy5tYXAoKHZlcnRleCwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gaW5kZXgsXG4gICAgICAgICAgICAgICAgZW5kSW5kZXggPSAoc3RhcnRJbmRleCArIDEpICUgVkVSVElDRVNfTEVOR1RILFxuICAgICAgICAgICAgICAgIHN0YXJ0VmVydGV4ID0gdmVydGljZXNbc3RhcnRJbmRleF0sXG4gICAgICAgICAgICAgICAgZW5kVmVydGV4ID0gdmVydGljZXNbZW5kSW5kZXhdLFxuICAgICAgICAgICAgICAgIG1hc2tpbmdFZGdlID0gTWFza2luZ0VkZ2UuZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4KHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpO1xuXG4gICAgICAgICAgcmV0dXJuIG1hc2tpbmdFZGdlO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gbWFza2luZ0VkZ2VzO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub3JtYWxpc2UzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkyKCkge1xuICByZXR1cm4gKFtcblxuICAgIDEsIDAsXG4gICAgMCwgMSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5MygpIHtcbiAgcmV0dXJuIChbXG5cbiAgICAxLCAwLCAwLFxuICAgIDAsIDEsIDAsXG4gICAgMCwgMCwgMSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5NCgpIHtcbiAgcmV0dXJuIChbXG5cbiAgICAxLCAwLCAwLCAwLFxuICAgIDAsIDEsIDAsIDAsXG4gICAgMCwgMCwgMSwgMCxcbiAgICAwLCAwLCAwLCAxLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkyKG1hdHJpeEEsIG1hdHJpeEIpIHtcbiAgY29uc3QgWyBhMCwgYTEsIGEyLCBhMyBdID0gbWF0cml4QSxcbiAgICAgICAgWyBiMCwgYjEsIGIyLCBiMyBdID0gbWF0cml4QjtcblxuICByZXR1cm4gKFtcblxuICAgIGEwICogYjAgKyBhMiAqIGIxLFxuICAgIGExICogYjAgKyBhMyAqIGIxLFxuXG4gICAgYTAgKiBiMiArIGEyICogYjMsXG4gICAgYTEgKiBiMiArIGEzICogYjMsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseTMobWF0cml4QSwgbWF0cml4Qikge1xuICBjb25zdCBbIGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTggXSA9IG1hdHJpeEEsXG4gICAgICAgIFsgYjAsIGIxLCBiMiwgYjMsIGI0LCBiNSwgYjYsIGI3LCBiOCBdID0gbWF0cml4QjtcblxuICByZXR1cm4gKFtcblxuICAgIGEwICogYjAgKyBhMyAqIGIxICsgYTYgKiBiMixcbiAgICBhMSAqIGIwICsgYTQgKiBiMSArIGE3ICogYjIsXG4gICAgYTIgKiBiMCArIGE1ICogYjEgKyBhOCAqIGIyLFxuXG4gICAgYTAgKiBiMyArIGEzICogYjQgKyBhNiAqIGI1LFxuICAgIGExICogYjMgKyBhNCAqIGI0ICsgYTcgKiBiNSxcbiAgICBhMiAqIGIzICsgYTUgKiBiNCArIGE4ICogYjUsXG5cbiAgICBhMCAqIGI2ICsgYTMgKiBiNyArIGE2ICogYjgsXG4gICAgYTEgKiBiNiArIGE0ICogYjcgKyBhNyAqIGI4LFxuICAgIGEyICogYjYgKyBhNSAqIGI3ICsgYTggKiBiOCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5NChtYXRyaXhBLCBtYXRyaXhCKSB7XG4gIGNvbnN0ICBbIGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgsIGE5LCBhMTAsIGExMSwgYTEyLCBhMTMsIGExNCwgYTE1IF0gPSBtYXRyaXhBLFxuICAgICAgICAgWyBiMCwgYjEsIGIyLCBiMywgYjQsIGI1LCBiNiwgYjcsIGI4LCBiOSwgYjEwLCBiMTEsIGIxMiwgYjEzLCBiMTQsIGIxNSBdID0gbWF0cml4QjtcblxuICByZXR1cm4gKFtcblxuICAgIGEwICogIGIwICsgIGE0ICogIGIxICsgIGE4ICogIGIyICsgYTEyICogIGIzLFxuICAgIGExICogIGIwICsgIGE1ICogIGIxICsgIGE5ICogIGIyICsgYTEzICogIGIzLFxuICAgIGEyICogIGIwICsgIGE2ICogIGIxICsgYTEwICogIGIyICsgYTE0ICogIGIzLFxuICAgIGEzICogIGIwICsgIGE3ICogIGIxICsgYTExICogIGIyICsgYTE1ICogIGIzLFxuXG4gICAgYTAgKiAgYjQgKyAgYTQgKiAgYjUgKyAgYTggKiAgYjYgKyBhMTIgKiAgYjcsXG4gICAgYTEgKiAgYjQgKyAgYTUgKiAgYjUgKyAgYTkgKiAgYjYgKyBhMTMgKiAgYjcsXG4gICAgYTIgKiAgYjQgKyAgYTYgKiAgYjUgKyBhMTAgKiAgYjYgKyBhMTQgKiAgYjcsXG4gICAgYTMgKiAgYjQgKyAgYTcgKiAgYjUgKyBhMTEgKiAgYjYgKyBhMTUgKiAgYjcsXG5cbiAgICBhMCAqICBiOCArICBhNCAqICBiOSArICBhOCAqIGIxMCArIGExMiAqIGIxMSxcbiAgICBhMSAqICBiOCArICBhNSAqICBiOSArICBhOSAqIGIxMCArIGExMyAqIGIxMSxcbiAgICBhMiAqICBiOCArICBhNiAqICBiOSArIGExMCAqIGIxMCArIGExNCAqIGIxMSxcbiAgICBhMyAqICBiOCArICBhNyAqICBiOSArIGExMSAqIGIxMCArIGExNSAqIGIxMSxcblxuICAgIGEwICogYjEyICsgIGE0ICogYjEzICsgIGE4ICogYjE0ICsgYTEyICogYjE1LFxuICAgIGExICogYjEyICsgIGE1ICogYjEzICsgIGE5ICogYjE0ICsgYTEzICogYjE1LFxuICAgIGEyICogYjEyICsgIGE2ICogYjEzICsgYTEwICogYjE0ICsgYTE0ICogYjE1LFxuICAgIGEzICogYjEyICsgIGE3ICogYjEzICsgYTExICogYjE0ICsgYTE1ICogYjE1LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGV0ZXJtaW5hbnQyKG1hdHJpeCkge1xuICBjb25zdCBbIG0wLCBtMSwgbTIsIG0zIF0gPSBtYXRyaXg7XG5cbiAgcmV0dXJuICggbTAgKiBtMyAtIG0yICogbTEgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRldGVybWluYW50MyhtYXRyaXgpIHtcbiAgY29uc3QgWyBtMCwgbTEsIG0yLCBtMywgbTQsIG01LCBtNiwgbTcsIG04IF0gPSBtYXRyaXgsXG5cbiAgICAgICAgYjAxID0gIG04ICogbTQgLSBtNSAqIG03LFxuICAgICAgICBiMTEgPSAtbTggKiBtMyArIG01ICogbTYsXG4gICAgICAgIGIyMSA9ICBtNyAqIG0zIC0gbTQgKiBtNjtcblxuICByZXR1cm4gKCBtMCAqIGIwMSArIG0xICogYjExICsgbTIgKiBiMjEgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRldGVybWluYW50NChtYXRyaXgpIHtcbiAgY29uc3QgWyBtMCwgbTEsIG0yLCBtMywgbTQsIG01LCBtNiwgbTcsIG04LCBtOSwgbTEwLCBtMTEsIG0xMiwgbTEzLCBtMTQsIG0xNSBdID0gbWF0cml4LFxuXG4gICAgICAgIGIwMCA9IG0wICogbTUgLSBtMSAqIG00LFxuICAgICAgICBiMDEgPSBtMCAqIG02IC0gbTIgKiBtNCxcbiAgICAgICAgYjAyID0gbTAgKiBtNyAtIG0zICogbTQsXG4gICAgICAgIGIwMyA9IG0xICogbTYgLSBtMiAqIG01LFxuICAgICAgICBiMDQgPSBtMSAqIG03IC0gbTMgKiBtNSxcbiAgICAgICAgYjA1ID0gbTIgKiBtNyAtIG0zICogbTYsXG4gICAgICAgIGIwNiA9IG04ICogbTEzIC0gbTkgKiBtMTIsXG4gICAgICAgIGIwNyA9IG04ICogbTE0IC0gbTEwICogbTEyLFxuICAgICAgICBiMDggPSBtOCAqIG0xNSAtIG0xMSAqIG0xMixcbiAgICAgICAgYjA5ID0gbTkgKiBtMTQgLSBtMTAgKiBtMTMsXG4gICAgICAgIGIxMCA9IG05ICogbTE1IC0gbTExICogbTEzLFxuICAgICAgICBiMTEgPSBtMTAgKiBtMTUgLSBtMTEgKiBtMTQ7XG5cbiAgcmV0dXJuICggYjAwICogYjExIC0gYjAxICogYjEwICsgYjAyICogYjA5ICsgYjAzICogYjA4IC0gYjA0ICogYjA3ICsgYjA1ICogYjA2ICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc3Bvc2UyKG1hdHJpeCkge1xuICBjb25zdCBbIG0wLCBtMSwgbTIsIG0zIF0gPSBtYXRyaXg7XG5cbiAgcmV0dXJuIChbXG5cbiAgICBtMCwgbTIsXG4gICAgbTEsIG0zLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNwb3NlMyhtYXRyaXgpIHtcbiAgY29uc3QgWyBtMCwgbTEsIG0yLCBtMywgbTQsIG01LCBtNiwgbTcsIG04IF0gPSBtYXRyaXg7XG5cbiAgcmV0dXJuIChbXG5cbiAgICBtMCwgbTMsIG02LFxuICAgIG0xLCBtNCwgbTcsXG4gICAgbTIsIG01LCBtOCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zcG9zZTQobWF0cml4KSB7XG4gIGNvbnN0IFsgbTAsIG0xLCBtMiwgbTMsIG00LCBtNSwgbTYsIG03LCBtOCwgbTksIG0xMCwgbTExLCBtMTIsIG0xMywgbTE0LCBtMTUgXSA9IG1hdHJpeDtcblxuICByZXR1cm4gKFtcblxuICAgIG0wLCBtNCwgbTgsIG0xMixcbiAgICBtMSwgbTUsIG05LCBtMTMsXG4gICAgbTIsIG02LCBtMTAsIG0xNCxcbiAgICBtMywgbTcsIG0xMSwgbTE1LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJ0MihtYXRyaXgpIHtcbiAgY29uc3QgWyBtMCwgbTEsIG0yLCBtMyBdID0gbWF0cml4LFxuXG4gICAgICAgIGRldGVybWluYW50ID0gZGV0ZXJtaW5hbnQyKG1hdHJpeCk7XG5cbiAgcmV0dXJuIChbXG5cbiAgICArbTMgLyBkZXRlcm1pbmFudCwgLW0xIC8gZGV0ZXJtaW5hbnQsXG4gICAgLW0yIC8gZGV0ZXJtaW5hbnQsICttMCAvIGRldGVybWluYW50LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJ0MyhtYXRyaXgpIHtcbiAgY29uc3QgWyBtMCwgbTEsIG0yLCBtMywgbTQsIG01LCBtNiwgbTcsIG04IF0gPSBtYXRyaXgsXG5cbiAgICAgICAgZGV0ZXJtaW5hbnQgPSBkZXRlcm1pbmFudDMobWF0cml4KSxcblxuICAgICAgICBiMDEgPSAgbTggKiBtNCAtIG01ICogbTcsXG4gICAgICAgIGIxMSA9IC1tOCAqIG0zICsgbTUgKiBtNixcbiAgICAgICAgYjIxID0gIG03ICogbTMgLSBtNCAqIG02O1xuXG4gIHJldHVybiAoW1xuXG4gICAgYjAxIC8gZGV0ZXJtaW5hbnQsICgtbTggKiBtMSArIG0yICogbTcpIC8gZGV0ZXJtaW5hbnQsICggbTUgKiBtMSAtIG0yICogbTQpIC8gZGV0ZXJtaW5hbnQsXG4gICAgYjExIC8gZGV0ZXJtaW5hbnQsICggbTggKiBtMCAtIG0yICogbTYpIC8gZGV0ZXJtaW5hbnQsICgtbTUgKiBtMCArIG0yICogbTMpIC8gZGV0ZXJtaW5hbnQsXG4gICAgYjIxIC8gZGV0ZXJtaW5hbnQsICgtbTcgKiBtMCArIG0xICogbTYpIC8gZGV0ZXJtaW5hbnQsICggbTQgKiBtMCAtIG0xICogbTMpIC8gZGV0ZXJtaW5hbnQsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQ0KG1hdHJpeCkge1xuICBjb25zdCBbIG0wLCBtMSwgbTIsIG0zLCBtNCwgbTUsIG02LCBtNywgbTgsIG05LCBtMTAsIG0xMSwgbTEyLCBtMTMsIG0xNCwgbTE1IF0gPSBtYXRyaXgsXG5cbiAgICAgICAgZGV0ZXJtaW5hbnQgPSBkZXRlcm1pbmFudDQobWF0cml4KSxcblxuICAgICAgICBiMDAgPSBtMCAqIG01IC0gbTEgKiBtNCxcbiAgICAgICAgYjAxID0gbTAgKiBtNiAtIG0yICogbTQsXG4gICAgICAgIGIwMiA9IG0wICogbTcgLSBtMyAqIG00LFxuICAgICAgICBiMDMgPSBtMSAqIG02IC0gbTIgKiBtNSxcbiAgICAgICAgYjA0ID0gbTEgKiBtNyAtIG0zICogbTUsXG4gICAgICAgIGIwNSA9IG0yICogbTcgLSBtMyAqIG02LFxuICAgICAgICBiMDYgPSBtOCAqIG0xMyAtIG05ICogbTEyLFxuICAgICAgICBiMDcgPSBtOCAqIG0xNCAtIG0xMCAqIG0xMixcbiAgICAgICAgYjA4ID0gbTggKiBtMTUgLSBtMTEgKiBtMTIsXG4gICAgICAgIGIwOSA9IG05ICogbTE0IC0gbTEwICogbTEzLFxuICAgICAgICBiMTAgPSBtOSAqIG0xNSAtIG0xMSAqIG0xMyxcbiAgICAgICAgYjExID0gbTEwICogbTE1IC0gbTExICogbTE0O1xuXG4gIHJldHVybiAoW1xuXG4gICAgKG01ICogYjExIC0gbTYgKiBiMTAgKyBtNyAqIGIwOSkgLyBkZXRlcm1pbmFudCwgKG0yICogYjEwIC0gbTEgKiBiMTEgLSBtMyAqIGIwOSkgLyBkZXRlcm1pbmFudCwgKG0xMyAqIGIwNSAtIG0xNCAqIGIwNCArIG0xNSAqIGIwMykgLyBkZXRlcm1pbmFudCwgKG0xMCAqIGIwNCAtIG05ICogYjA1IC0gbTExICogYjAzKSAvIGRldGVybWluYW50LFxuICAgIChtNiAqIGIwOCAtIG00ICogYjExIC0gbTcgKiBiMDcpIC8gZGV0ZXJtaW5hbnQsIChtMCAqIGIxMSAtIG0yICogYjA4ICsgbTMgKiBiMDcpIC8gZGV0ZXJtaW5hbnQsIChtMTQgKiBiMDIgLSBtMTIgKiBiMDUgLSBtMTUgKiBiMDEpIC8gZGV0ZXJtaW5hbnQsIChtOCAqIGIwNSAtIG0xMCAqIGIwMiArIG0xMSAqIGIwMSkgLyBkZXRlcm1pbmFudCxcbiAgICAobTQgKiBiMTAgLSBtNSAqIGIwOCArIG03ICogYjA2KSAvIGRldGVybWluYW50LCAobTEgKiBiMDggLSBtMCAqIGIxMCAtIG0zICogYjA2KSAvIGRldGVybWluYW50LCAobTEyICogYjA0IC0gbTEzICogYjAyICsgbTE1ICogYjAwKSAvIGRldGVybWluYW50LCAobTkgKiBiMDIgLSBtOCAqIGIwNCAtIG0xMSAqIGIwMCkgLyBkZXRlcm1pbmFudCxcbiAgICAobTUgKiBiMDcgLSBtNCAqIGIwOSAtIG02ICogYjA2KSAvIGRldGVybWluYW50LCAobTAgKiBiMDkgLSBtMSAqIGIwNyArIG0yICogYjA2KSAvIGRldGVybWluYW50LCAobTEzICogYjAxIC0gbTEyICogYjAzIC0gbTE0ICogYjAwKSAvIGRldGVybWluYW50LCAobTggKiBiMDMgLSBtOSAqIGIwMSArIG0xMCAqIGIwMCkgLyBkZXRlcm1pbmFudCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlNChtYXRyaXgsIHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHksIHogXSA9IHZlY3RvcixcblxuICAgICAgICBbIG0wLCBtMSwgbTIsIG0zLCBtNCwgbTUsIG02LCBtNywgbTgsIG05LCBtMTAsIG0xMSwgbTEyLCBtMTMsIG0xNCwgbTE1IF0gPSBtYXRyaXg7XG5cbiAgcmV0dXJuIChbXG5cbiAgICBtMCAqIHgsIG0xICogeCwgbTIgKiB4LCBtMyAqIHgsXG4gICAgbTQgKiB5LCBtNSAqIHksIG02ICogeSwgbTcgKiB5LFxuICAgIG04ICogeiwgbTkgKiB6LCBtMTAgKiB6LCBtMTEgKiB6LFxuICAgIG0xMiAqIDEsIG0xMyAqIDEsIG0xNCAqIDEsIG0xNSAqIDEsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGU0KG1hdHJpeCwgYW5nbGUsIHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHksIHogXSA9IG5vcm1hbGlzZTModmVjdG9yKSxcblxuICAgICAgICBbIG0wLCBtMSwgbTIsIG0zLCBtNCwgbTUsIG02LCBtNywgbTgsIG05LCBtMTAsIG0xMSwgbTEyLCBtMTMsIG0xNCwgbTE1IF0gPSBtYXRyaXgsXG5cbiAgICAgICAgcyA9IE1hdGguc2luKGFuZ2xlKSxcbiAgICAgICAgYyA9IE1hdGguY29zKGFuZ2xlKSxcbiAgICAgICAgdCA9IDEgLSBjLFxuXG4gICAgICAgIGIwMCA9IHggKiB4ICogdCArIGMsXG4gICAgICAgIGIwMSA9IHkgKiB4ICogdCArIHogKiBzLFxuICAgICAgICBiMDIgPSB6ICogeCAqIHQgLSB5ICogcyxcbiAgICAgICAgYjEwID0geCAqIHkgKiB0IC0geiAqIHMsXG4gICAgICAgIGIxMSA9IHkgKiB5ICogdCArIGMsXG4gICAgICAgIGIxMiA9IHogKiB5ICogdCArIHggKiBzLFxuICAgICAgICBiMjAgPSB4ICogeiAqIHQgKyB5ICogcyxcbiAgICAgICAgYjIxID0geSAqIHogKiB0IC0geCAqIHMsXG4gICAgICAgIGIyMiA9IHogKiB6ICogdCArIGM7XG5cbiAgcmV0dXJuIChbXG5cbiAgICBtMCAqIGIwMCArIG00ICogYjAxICsgbTggKiBiMDIsIG0xICogYjAwICsgbTUgKiBiMDEgKyBtOSAqIGIwMiwgbTIgKiBiMDAgKyBtNiAqIGIwMSArIG0xMCAqIGIwMiwgbTMgKiBiMDAgKyBtNyAqIGIwMSArIG0xMSAqIGIwMixcbiAgICBtMCAqIGIxMCArIG00ICogYjExICsgbTggKiBiMTIsIG0xICogYjEwICsgbTUgKiBiMTEgKyBtOSAqIGIxMiwgbTIgKiBiMTAgKyBtNiAqIGIxMSArIG0xMCAqIGIxMiwgbTMgKiBiMTAgKyBtNyAqIGIxMSArIG0xMSAqIGIxMixcbiAgICBtMCAqIGIyMCArIG00ICogYjIxICsgbTggKiBiMjIsIG0xICogYjIwICsgbTUgKiBiMjEgKyBtOSAqIGIyMiwgbTIgKiBiMjAgKyBtNiAqIGIyMSArIG0xMCAqIGIyMiwgbTMgKiBiMjAgKyBtNyAqIGIyMSArIG0xMSAqIGIyMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMTIsICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0xMywgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0xNCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0xNSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZTQobWF0cml4LCB2ZWN0b3IpIHtcbiAgY29uc3QgWyB4LCB5LCB6IF0gPSB2ZWN0b3IsXG5cbiAgICAgICAgWyBtMCwgbTEsIG0yLCBtMywgbTQsIG01LCBtNiwgbTcsIG04LCBtOSwgbTEwLCBtMTEsIG0xMiwgbTEzLCBtMTQsIG0xNSBdID0gbWF0cml4O1xuXG4gIHJldHVybiAoW1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0wLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTEsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG00LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTUsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTYsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG04LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTksICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMTAsICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMTEsXG4gICAgbTAgKiB4ICsgbTQgKiB5ICsgbTggKiB6ICsgbTEyLCBtMSAqIHggKyBtNSAqIHkgKyBtOSAqIHogKyBtMTMsIG0yICogeCArIG02ICogeSArIG0xMCAqIHogKyBtMTQsIG0zICogeCArIG03ICogeSArIG0xMSAqIHogKyBtMTUsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwZXJzcGVjdGl2ZTQoZmllbGRPZlZpZXcsIGFzcGVjdFJhdGlvLCB6TmVhciwgekZhcikge1xuICBjb25zdCBmID0gMSAvIE1hdGgudGFuKGZpZWxkT2ZWaWV3IC8gMiksXG4gICAgICAgIG5mID0gMSAvICh6TmVhciAtIHpGYXIpO1xuXG4gIHJldHVybiAoW1xuXG4gICAgZiAvIGFzcGVjdFJhdGlvLCAwLCAwLCAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAwLCAgICAgICAgICAgICAgIGYsIDAsICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgIDAsICAgICAgICAgICAgICAgMCwgKHpGYXIgKyB6TmVhcikgKiBuZiwgICAgLTEsXG4gICAgMCwgICAgICAgICAgICAgICAwLCAoMiAqIHpGYXIgKiB6TmVhcikgKiBuZiwgMCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpZGVudGl0eTIsXG4gIGlkZW50aXR5MyxcbiAgaWRlbnRpdHk0LFxuICBtdWx0aXBseTIsXG4gIG11bHRpcGx5MyxcbiAgbXVsdGlwbHk0LFxuICBkZXRlcm1pbmFudDIsXG4gIGRldGVybWluYW50MyxcbiAgZGV0ZXJtaW5hbnQ0LFxuICB0cmFuc3Bvc2UyLFxuICB0cmFuc3Bvc2UzLFxuICB0cmFuc3Bvc2U0LFxuICBpbnZlcnQyLFxuICBpbnZlcnQzLFxuICBpbnZlcnQ0LFxuICBzY2FsZTQsXG4gIHJvdGF0ZTQsXG4gIHRyYW5zbGF0ZTQsXG4gIHBlcnNwZWN0aXZlNFxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc2NhbGUzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCwgdGhpcmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGlkZW50aXR5NCwgc2NhbGU0LCBpbnZlcnQ0LCByb3RhdGU0LCB0cmFuc2xhdGU0LCB0cmFuc3Bvc2U0LCBwZXJzcGVjdGl2ZTQgfSBmcm9tIFwiLi4vbWF0aHMvbWF0cml4XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZU1hdHJpeEZyb21TY2FsZShzY2FsZSkge1xuICBsZXQgc2NhbGVNYXRyaXggPSBpZGVudGl0eTQoKTtcblxuICBzY2FsZU1hdHJpeCA9IHNjYWxlNChzY2FsZU1hdHJpeCwgc2NhbGUpO1xuXG4gIHJldHVybiBzY2FsZU1hdHJpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyhvZmZzZXRzKSB7XG4gIGxldCBvZmZzZXRzTWF0cml4ID0gaWRlbnRpdHk0KCk7IC8vL1xuXG4gIG9mZnNldHNNYXRyaXggPSB0cmFuc2xhdGU0KG9mZnNldHNNYXRyaXgsIG9mZnNldHMpO1xuXG4gIHJldHVybiBvZmZzZXRzTWF0cml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9zaXRpb25NYXRyaXhGcm9tTm90aGluZygpIHtcbiAgbGV0IHBvc2l0aW9uTWF0cml4ID0gaWRlbnRpdHk0KCk7IC8vL1xuXG4gIHJldHVybiBwb3NpdGlvbk1hdHJpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlKGRpc3RhbmNlKSB7XG4gIGxldCBwb3NpdGlvbk1hdHJpeCA9IGlkZW50aXR5NCgpOyAvLy9cblxuICBjb25zdCB4ID0gMCxcbiAgICAgICAgeSA9IDAsXG4gICAgICAgIHogPSAtZGlzdGFuY2U7XG5cbiAgcG9zaXRpb25NYXRyaXggPSB0cmFuc2xhdGU0KHBvc2l0aW9uTWF0cml4LCBbIHgsIHksIHogXSk7XG5cbiAgcmV0dXJuIHBvc2l0aW9uTWF0cml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9zaXRpb25NYXRyaXhGcm9tUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgbGV0IHBvc2l0aW9uTWF0cml4ID0gaWRlbnRpdHk0KCk7IC8vL1xuXG4gIHBvc2l0aW9uTWF0cml4ID0gdHJhbnNsYXRlNChwb3NpdGlvbk1hdHJpeCwgcG9zaXRpb24pO1xuXG4gIHJldHVybiBwb3NpdGlvbk1hdHJpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMoYW5nbGVzLCByZXZlcnNlT3JkZXIgPSBmYWxzZSkge1xuICBsZXQgcm90YXRpb25zTWF0cml4ID0gaWRlbnRpdHk0KCk7IC8vL1xuXG4gIGNvbnN0IGZpcnN0QW5nbGUgPSBmaXJzdChhbmdsZXMpLFxuICAgICAgICBzZWNvbmRBbmdsZSA9IHNlY29uZChhbmdsZXMpLFxuICAgICAgICB0aGlyZEFuZ2xlID0gdGhpcmQoYW5nbGVzKSxcbiAgICAgICAgeEFuZ2xlID0gZmlyc3RBbmdsZSwgIC8vLy9cbiAgICAgICAgeUFuZ2xlID0gc2Vjb25kQW5nbGUsIC8vL1xuICAgICAgICB6QW5nbGUgPSB0aGlyZEFuZ2xlLCAgLy8vXG4gICAgICAgIHhBeGlzID0gWyAxLCAwLCAwIF0sXG4gICAgICAgIHlBeGlzID0gWyAwLCAxLCAwIF0sXG4gICAgICAgIHpBeGlzID0gWyAwLCAwLCAxIF07XG5cbiAgaWYgKHJldmVyc2VPcmRlcikge1xuICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0ZTQocm90YXRpb25zTWF0cml4LCB6QW5nbGUsIHpBeGlzKTtcbiAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGU0KHJvdGF0aW9uc01hdHJpeCwgeUFuZ2xlLCB5QXhpcyk7XG4gICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRlNChyb3RhdGlvbnNNYXRyaXgsIHhBbmdsZSwgeEF4aXMpO1xuICB9IGVsc2Uge1xuICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0ZTQocm90YXRpb25zTWF0cml4LCB4QW5nbGUsIHhBeGlzKTtcbiAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGU0KHJvdGF0aW9uc01hdHJpeCwgeUFuZ2xlLCB5QXhpcyk7XG4gICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRlNChyb3RhdGlvbnNNYXRyaXgsIHpBbmdsZSwgekF4aXMpO1xuICB9XG5cbiAgcmV0dXJuIHJvdGF0aW9uc01hdHJpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0aW9uc01hdHJpeEZyb21Sb3RhdGlvbnMocm90YXRpb25zKSB7XG4gIGNvbnN0IHNjYWxhciA9IERFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSLCAvLy9cbiAgICAgICAgYW5nbGVzID0gc2NhbGUzKHJvdGF0aW9ucywgc2NhbGFyKSxcbiAgICAgICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyhhbmdsZXMpO1xuXG4gIHJldHVybiByb3RhdGlvbnNNYXRyaXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeChyb3RhdGlvbnNNYXRyaXgpIHtcbiAgbGV0IG5vcm1hbHNNYXRyaXggPSBpbnZlcnQ0KHJvdGF0aW9uc01hdHJpeCk7IC8vL1xuXG4gIG5vcm1hbHNNYXRyaXggPSB0cmFuc3Bvc2U0KG5vcm1hbHNNYXRyaXgpO1xuXG4gIHJldHVybiBub3JtYWxzTWF0cml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdGlvbk1hdHJpeEZyb21DYW1lcmFBbmRDYW52YXMoY2FtZXJhLCBjYW52YXMpIHtcbiAgY29uc3QgekZhciA9IGNhbWVyYS5nZXRaRmFyKCksXG4gICAgICAgIHpOZWFyID0gY2FtZXJhLmdldFpOZWFyKCksXG4gICAgICAgIHdpZHRoID0gY2FudmFzLmdldFdpZHRoKCksXG4gICAgICAgIGhlaWdodCA9IGNhbnZhcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgZmllbGRPZlZpZXcgPSBjYW1lcmEuZ2V0RmllbGRPZlZpZXcoKSxcbiAgICAgICAgYXNwZWN0UmF0aW8gPSAoIHdpZHRoIC8gaGVpZ2h0ICksXG4gICAgICAgIHByb2plY3Rpb25NYXRyaXggPSBwZXJzcGVjdGl2ZTQoZmllbGRPZlZpZXcsIGFzcGVjdFJhdGlvLCB6TmVhciwgekZhcik7XG5cbiAgcmV0dXJuIHByb2plY3Rpb25NYXRyaXg7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG11bHRpcGx5NCB9IGZyb20gXCIuLi9tYXRocy9tYXRyaXhcIjtcbmltcG9ydCB7IHRyYW5zZm9ybTQgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyBzY2FsZU1hdHJpeEZyb21TY2FsZSwgcG9zaXRpb25NYXRyaXhGcm9tUG9zaXRpb24sIHJvdGF0aW9uc01hdHJpeEZyb21Sb3RhdGlvbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL21hdHJpeFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY29tcG9zZVRyYW5zZm9ybShzY2FsZSwgcG9zaXRpb24sIHJvdGF0aW9ucykge1xuICBsZXQgbWF0cml4ID0gbnVsbDtcblxuICBpZiAoc2NhbGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBzY2FsZU1hdHJpeCA9IHNjYWxlTWF0cml4RnJvbVNjYWxlKHNjYWxlKTtcblxuICAgIG1hdHJpeCA9IChtYXRyaXggPT09IG51bGwpID9cbiAgICAgICAgICAgICAgIHNjYWxlTWF0cml4IDpcbiAgICAgICAgICAgICAgICAgbXVsdGlwbHk0KHNjYWxlTWF0cml4LCBtYXRyaXgpO1xuICB9XG5cbiAgaWYgKHJvdGF0aW9ucyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21Sb3RhdGlvbnMocm90YXRpb25zKTtcblxuICAgIG1hdHJpeCA9IChtYXRyaXggPT09IG51bGwpID9cbiAgICAgICAgICAgICAgIHJvdGF0aW9uc01hdHJpeCA6XG4gICAgICAgICAgICAgICAgIG11bHRpcGx5NChyb3RhdGlvbnNNYXRyaXgsIG1hdHJpeCk7XG5cbiAgfVxuXG4gIGlmIChwb3NpdGlvbiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHBvc2l0aW9uTWF0cml4ID0gcG9zaXRpb25NYXRyaXhGcm9tUG9zaXRpb24ocG9zaXRpb24pO1xuXG4gICAgbWF0cml4ID0gKG1hdHJpeCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uTWF0cml4IDpcbiAgICAgICAgICAgICAgICAgIG11bHRpcGx5NChwb3NpdGlvbk1hdHJpeCwgbWF0cml4KTtcbiAgfVxuXG4gIGNvbnN0IHRyYW5zZm9ybSA9IChtYXRyaXggPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAodmVjdG9yKSA9PiB2ZWN0b3IgOlxuICAgICAgICAgICAgICAgICAgICAgICAgKHZlY3RvcikgPT4gdHJhbnNmb3JtNChbIC4uLnZlY3RvciwgMSBdLCBtYXRyaXgpLnNsaWNlKDAsIDMpO1xuXG4gIHJldHVybiB0cmFuc2Zvcm07XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgTWFza2luZ0ZhY2V0IGZyb20gXCIuLi9wcmltaXRpdmUvbWFza2luZ0ZhY2V0XCI7XG5cbmltcG9ydCB7IGFkZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7Y29tcG9zZVRyYW5zZm9ybX0gZnJvbSBcIi4uL3V0aWxpdGllcy90cmFuc2Zvcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFzayBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihyZWZlcmVuY2UsIHRyYW5zZm9ybSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgICB0aGlzLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRUcmFuc2Zvcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtO1xuICB9XG5cbiAgcmV0cmlldmVNYXNraW5nRmFjZXRzKCkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKSxcbiAgICAgICAgICBmYWNldHMgPSByZXRyaWV2ZUZhY2V0cyhjaGlsZEVsZW1lbnRzKSxcbiAgICAgICAgICBtYXNraW5nRmFjZXRzID0gZmFjZXRzLm1hcCgoZmFjZXQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hc2tpbmdGYWNldCA9IE1hc2tpbmdGYWNldC5mcm9tRmFjZXQoZmFjZXQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gbWFza2luZ0ZhY2V0O1xuICAgICAgICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBtYXNraW5nRmFjZXRzOyAgICAgICAgICBcbiAgfVxuXG4gIG1hc2tFbGVtZW50KGVsZW1lbnQsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBtYXNraW5nRmFjZXRzID0gdGhpcy5yZXRyaWV2ZU1hc2tpbmdGYWNldHMoKSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudC5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBtYXNrRWxlbWVudChlbGVtZW50LCBtYXNraW5nRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgICBtYXNrRWxlbWVudChjaGlsZEVsZW1lbnQsIG1hc2tpbmdGYWNldHMsIG1hcmdpbk9mRXJyb3IpO1xuICAgIH0pO1xuICB9XG5cbiAgYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICAgIGNoaWxkRWxlbWVudC5hcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pO1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlRmFjZXRzKG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgICAgY2hpbGRFbGVtZW50LmNyZWF0ZUZhY2V0cyhtYXJnaW5PZkVycm9yKTtcbiAgICB9KTtcbiAgfVxuXG4gIG1hc2tGYWNldHMobWFza3MsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgICAgY2hpbGRFbGVtZW50Lm1hc2tGYWNldHMobWFza3MsIG1hcmdpbk9mRXJyb3IpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hcHBseVRyYW5zZm9ybSh0aGlzLnRyYW5zZm9ybSk7ICAvLy9cbiAgfVxuXG4gIGFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7fVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyByZWZlcmVuY2UsIHNjYWxlID0gbnVsbCwgcG9zaXRpb24gPSBudWxsLCByb3RhdGlvbnMgPSBudWxsIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRyYW5zZm9ybSA9IGNvbXBvc2VUcmFuc2Zvcm0oc2NhbGUsIHBvc2l0aW9uLCByb3RhdGlvbnMpLFxuICAgICAgICAgIG1hc2sgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKE1hc2ssIHByb3BlcnRpZXMsIHJlZmVyZW5jZSwgdHJhbnNmb3JtKTtcblxuICAgIHJldHVybiBtYXNrO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJldHJpZXZlRmFjZXRzKGNoaWxkRWxlbWVudHMsIGZhY2V0cyA9IFtdKSB7XG4gIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGNoaWxkRWxlbWVudCwgLy8vXG4gICAgICAgICAgZWxlbWVudEZhY2V0cyA9IGVsZW1lbnQuZ2V0RmFjZXRzKCksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnQuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgYWRkKGZhY2V0cywgZWxlbWVudEZhY2V0cyk7XG5cbiAgICByZXRyaWV2ZUZhY2V0cyhjaGlsZEVsZW1lbnRzLCBmYWNldHMpO1xuICB9KTtcblxuICByZXR1cm4gZmFjZXRzO1xufVxuXG5mdW5jdGlvbiBtYXNrRWxlbWVudChlbGVtZW50LCBtYXNraW5nRmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gIGxldCBmYWNldHMgPSBlbGVtZW50LmdldEZhY2V0cygpO1xuXG4gIG1hc2tpbmdGYWNldHMuZm9yRWFjaCgobWFza2luZ0ZhY2V0KSA9PiB7XG4gICAgY29uc3QgdW5tYXNrZWRGYWNldHMgPSBbXTtcblxuICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4ge1xuICAgICAgbWFza2luZ0ZhY2V0Lm1hc2tGYWNldChmYWNldCwgdW5tYXNrZWRGYWNldHMsIG1hcmdpbk9mRXJyb3IpO1xuICAgIH0pO1xuXG4gICAgZmFjZXRzID0gdW5tYXNrZWRGYWNldHM7ICAvLy9cbiAgfSk7XG5cbiAgZWxlbWVudC5zZXRGYWNldHMoZmFjZXRzKTtcblxuICBjb25zdCBjaGlsZEVsZW1lbnRzID0gZWxlbWVudC5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gY2hpbGRFbGVtZW50OyAvLy9cblxuICAgIG1hc2tFbGVtZW50KGVsZW1lbnQsIG1hc2tpbmdGYWNldHMsIG1hcmdpbk9mRXJyb3IpO1xuICB9KTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRzRnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cywgQ2xhc3MpIHtcbiAgY29uc3QgZWxlbWVudHMgPSBjaGlsZEVsZW1lbnRzLnJlZHVjZSgoZWxlbWVudHMsIGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIGlmIChjaGlsZEVsZW1lbnQgaW5zdGFuY2VvZiBDbGFzcykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGNoaWxkRWxlbWVudDsgIC8vL1xuXG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudHM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbGVtZW50RnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cywgQ2xhc3MpIHtcbiAgY29uc3QgZWxlbWVudCA9IGNoaWxkRWxlbWVudHMucmVkdWNlKChlbGVtZW50LCBjaGlsZEVsZW1lbnQpID0+IHtcbiAgICBpZiAoZWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgaWYgKGNoaWxkRWxlbWVudCBpbnN0YW5jZW9mIENsYXNzKSB7XG4gICAgICAgIGVsZW1lbnQgPSBjaGlsZEVsZW1lbnQ7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXNrIGZyb20gXCIuL21hc2tcIjtcbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmltcG9ydCB7IGNvbXBvc2VUcmFuc2Zvcm0gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3RyYW5zZm9ybVwiO1xuaW1wb3J0IHsgZWxlbWVudHNGcm9tQ2hpbGRFbGVtZW50cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXNFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKG1hc2tSZWZlcmVuY2UsIHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrcykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm1hc2tSZWZlcmVuY2UgPSBtYXNrUmVmZXJlbmNlO1xuICAgIHRoaXMudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgIHRoaXMuZmFjZXRzID0gZmFjZXRzO1xuICAgIHRoaXMubWFza3MgPSBtYXNrcztcbiAgfVxuXG4gIGdldE1hc2tSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFza1JlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFRyYW5zZm9ybSgpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm07XG4gIH1cblxuICBnZXRGYWNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmFjZXRzO1xuICB9XG5cbiAgZ2V0TWFza3MoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFza3M7XG4gIH1cblxuICBzZXRGYWNldHMoZmFjZXRzKSB7XG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7XG4gIH1cblxuICBhcHBseU1hc2sobWFza3MsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBpZiAodGhpcy5tYXNrUmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtYXNrID0gbWFza3MuZmluZCgobWFzaykgPT4ge1xuICAgICAgICBjb25zdCByZWZlcmVuY2UgPSBtYXNrLmdldFJlZmVyZW5jZSgpO1xuXG4gICAgICAgIGlmIChyZWZlcmVuY2UgPT09IHRoaXMubWFza1JlZmVyZW5jZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KSB8fCBudWxsOyAvLy9cblxuICAgICAgaWYgKG1hc2sgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgICAgIG1hc2subWFza0VsZW1lbnQoZWxlbWVudCwgbWFyZ2luT2ZFcnJvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgdGhpcy5mYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IHtcbiAgICAgIGZhY2V0LmFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSk7XG4gICAgfSk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgICAgY2hpbGRFbGVtZW50LmFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVGYWNldHMobWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgICBjaGlsZEVsZW1lbnQuY3JlYXRlRmFjZXRzKG1hcmdpbk9mRXJyb3IpO1xuICAgIH0pO1xuICB9XG5cbiAgbWFza0ZhY2V0cyhtYXNrcywgbWFyZ2luT2ZFcnJvcikge1xuICAgIG1hc2tzID0gWyAuLi5tYXNrcywgLi4udGhpcy5tYXNrcyBdOyAvLy9cblxuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgICBjaGlsZEVsZW1lbnQubWFza0ZhY2V0cyhtYXNrcywgbWFyZ2luT2ZFcnJvcik7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFwcGx5VHJhbnNmb3JtKHRoaXMudHJhbnNmb3JtKTsgIC8vL1xuXG4gICAgdGhpcy5hcHBseU1hc2sobWFza3MsIG1hcmdpbk9mRXJyb3IpO1xuICB9XG5cbiAgYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgICAgY2hpbGRFbGVtZW50LmFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyBjaGlsZEVsZW1lbnRzLCBzY2FsZSA9IG51bGwsIHBvc2l0aW9uID0gbnVsbCwgcm90YXRpb25zID0gbnVsbCwgbWFza1JlZmVyZW5jZSA9IG51bGwgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdHJhbnNmb3JtID0gY29tcG9zZVRyYW5zZm9ybShzY2FsZSwgcG9zaXRpb24sIHJvdGF0aW9ucyksXG4gICAgICAgICAgZmFjZXRzID0gW10sXG4gICAgICAgICAgbWFza3MgPSBlbGVtZW50c0Zyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMsIE1hc2spLFxuICAgICAgICAgIGNhbnZhc0VsZW1lbnQgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBtYXNrUmVmZXJlbmNlLCB0cmFuc2Zvcm0sIGZhY2V0cywgbWFza3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gY2FudmFzRWxlbWVudDtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ2FudmFzRWxlbWVudCBmcm9tIFwiLi4vLi4vZWxlbWVudC9jYW52YXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVuY3Rpb25DYW52YXNFbGVtZW50IGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgZnVuY3Rpb25DYW52YXNFbGVtZW50ID0gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhGdW5jdGlvbkNhbnZhc0VsZW1lbnQsIHByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uQ2FudmFzRWxlbWVudDtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRmFsc2V5RWxlbWVudHMoZWxlbWVudHMpIHtcbiAgZWxlbWVudHMgPSBlbGVtZW50cy5yZWR1Y2UoKGVsZW1lbnRzLCBlbGVtZW50KSA9PiB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi9lbGVtZW50XCI7XG5pbXBvcnQgRnVuY3Rpb25DYW52YXNFbGVtZW50IGZyb20gXCIuL2VsZW1lbnQvY2FudmFzL2Z1bmN0aW9uXCI7XG5cbmltcG9ydCB7IEZVTkNUSU9OIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBmbGF0dGVuLCBndWFyYW50ZWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHJlbW92ZUZhbHNleUVsZW1lbnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2VsZW1lbnRzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4uY2hpbGRFbGVtZW50cykge1xuICBwcm9wZXJ0aWVzID0gcHJvcGVydGllcyB8fCB7fTsgIC8vL1xuXG4gIGNoaWxkRWxlbWVudHMgPSBzYW5pdGlzZUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyk7IC8vL1xuXG4gIGxldCBlbGVtZW50O1xuXG4gIGlmIChpc1N1YmNsYXNzT2YoZmlyc3RBcmd1bWVudCwgRWxlbWVudCkpIHtcbiAgICBjb25zdCBDbGFzcyA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgIE9iamVjdC5hc3NpZ24ocHJvcGVydGllcywge1xuICAgICAgY2hpbGRFbGVtZW50c1xuICAgIH0pO1xuXG4gICAgZWxlbWVudCA9IENsYXNzLmZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSBGVU5DVElPTikge1xuICAgIGNvbnN0IGZ1bmMgPSBmaXJzdEFyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IGd1YXJhbnRlZShmdW5jKHByb3BlcnRpZXMpKTtcblxuICAgIE9iamVjdC5hc3NpZ24ocHJvcGVydGllcywge1xuICAgICAgY2hpbGRFbGVtZW50c1xuICAgIH0pO1xuXG4gICAgZWxlbWVudCA9IEZ1bmN0aW9uQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5jb25zdCBSZWFjdCA9IHtcbiAgY3JlYXRlRWxlbWVudFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3Q7XG5cbmZ1bmN0aW9uIGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpIHtcbiAgY29uc3Qgc3ViY2xhc3NPZiA9IChhcmd1bWVudC5wcm90b3R5cGUgaW5zdGFuY2VvZiBDbGFzcyk7XG5cbiAgcmV0dXJuIHN1YmNsYXNzT2Y7XG59XG5cbmZ1bmN0aW9uIHNhbml0aXNlQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSB7XG4gIGNoaWxkRWxlbWVudHMgPSBmbGF0dGVuKGNoaWxkRWxlbWVudHMpO1xuXG4gIGNoaWxkRWxlbWVudHMgPSByZW1vdmVGYWxzZXlFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcblxuICByZXR1cm4gY2hpbGRFbGVtZW50cztcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gXCIuL3JlYWN0XCI7XG5cbk9iamVjdC5hc3NpZ24oZ2xvYmFsVGhpcywge1xuICBSZWFjdFxufSk7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IERFRkFVTFRfREVQVEggfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcblxuZnVuY3Rpb24gY2xlYXJEZXB0aChkZXB0aCA9IERFRkFVTFRfREVQVEgpIHtcbiAgdGhpcy5jb250ZXh0LmNsZWFyRGVwdGgoZGVwdGgpOyBcbn1cblxuZnVuY3Rpb24gY2xlYXJEZXB0aEJ1ZmZlcigpIHtcbiAgY29uc3QgeyBERVBUSF9CVUZGRVJfQklUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIG1hc2sgPSBERVBUSF9CVUZGRVJfQklUO1xuXG4gIHRoaXMuY29udGV4dC5jbGVhcihtYXNrKTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlRGVwdGhUZXN0aW5nKCkge1xuICBjb25zdCB7IERFUFRIX1RFU1QsIExFUVVBTCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICBjYXBhY2l0eSA9IERFUFRIX1RFU1QsXG4gICAgICAgIGRlcHRoQ29tcGFyaXNvbkZ1bmN0aW9uID0gTEVRVUFMO1xuXG4gIHRoaXMuY29udGV4dC5lbmFibGUoY2FwYWNpdHkpO1xuXG4gIHRoaXMuY29udGV4dC5kZXB0aEZ1bmMoZGVwdGhDb21wYXJpc29uRnVuY3Rpb24pO1xufVxuXG5jb25zdCBkZXB0aE1peGlucyA9IHtcbiAgY2xlYXJEZXB0aCxcbiAgY2xlYXJEZXB0aEJ1ZmZlcixcbiAgZW5hYmxlRGVwdGhUZXN0aW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZXB0aE1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFNIQURFUl9FUlJPUiA9IFwiVW5hYmxlIHRvIGNyZWF0ZSB0aGUgc2hhZGVyLlwiO1xuZXhwb3J0IGNvbnN0IFdFQl9HTF9DT05URVhUX0VSUk9SID0gXCJVbmFibGUgdG8gZ2V0IHRoZSBXZWJHTCBjb250ZXh0LlwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBTSEFERVJfRVJST1IgfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNoYWRlcih0eXBlLCBzaGFkZXJTb3VyY2UpIHtcbiAgY29uc3QgeyBDT01QSUxFX1NUQVRVUyB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICBwbmFtZSA9IENPTVBJTEVfU1RBVFVTLFxuICAgICAgICBzaGFkZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlU2hhZGVyKHR5cGUpO1xuXG4gIHRoaXMuY29udGV4dC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzaGFkZXJTb3VyY2UpO1xuXG4gIHRoaXMuY29udGV4dC5jb21waWxlU2hhZGVyKHNoYWRlcik7XG5cbiAgY29uc3QgY29tcGlsZVN0YXR1cyA9IHRoaXMuY29udGV4dC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBwbmFtZSk7XG5cbiAgaWYgKCFjb21waWxlU3RhdHVzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFNIQURFUl9FUlJPUik7XG4gIH1cblxuICByZXR1cm4gc2hhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVWZXJ0ZXhTaGFkZXIodmVydGV4U2hhZGVyU291cmNlLCBjYW52YXMpIHtcbiAgY29uc3QgeyBWRVJURVhfU0hBREVSIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHR5cGUgPSBWRVJURVhfU0hBREVSLFxuICAgICAgICB2ZXJ0ZXhTaGFkZXIgPSB0aGlzLmNyZWF0ZVNoYWRlcih0eXBlLCB2ZXJ0ZXhTaGFkZXJTb3VyY2UpO1xuXG4gIHJldHVybiB2ZXJ0ZXhTaGFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyYWdtZW50U2hhZGVyKGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpIHtcbiAgY29uc3QgeyBGUkFHTUVOVF9TSEFERVIgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdHlwZSA9IEZSQUdNRU5UX1NIQURFUixcbiAgICAgICAgZnJhZ21lbnRTaGFkZXIgPSB0aGlzLmNyZWF0ZVNoYWRlcih0eXBlLCBmcmFnbWVudFNoYWRlclNvdXJjZSk7XG5cbiAgcmV0dXJuIGZyYWdtZW50U2hhZGVyO1xufVxuXG5jb25zdCBzaGFkZXJNaXhpbnMgPSB7XG4gIGNyZWF0ZVNoYWRlcixcbiAgY3JlYXRlVmVydGV4U2hhZGVyLFxuICBjcmVhdGVGcmFnbWVudFNoYWRlclxufTtcblxuZXhwb3J0IGRlZmF1bHQgc2hhZGVyTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50QnVmZmVyKGRhdGEpIHtcbiAgY29uc3QgeyBFTEVNRU5UX0FSUkFZX0JVRkZFUiwgU1RBVElDX0RSQVcgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdGFyZ2V0ID0gRUxFTUVOVF9BUlJBWV9CVUZGRVIsXG4gICAgICAgIHVzYWdlID0gU1RBVElDX0RSQVcsXG4gICAgICAgIHVpbnQxNkFycmF5ID0gbmV3IFVpbnQxNkFycmF5KGRhdGEpLFxuICAgICAgICBlbGVtZW50QnVmZmVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZUJ1ZmZlcigpO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRhcmdldCwgZWxlbWVudEJ1ZmZlcik7XG5cbiAgdGhpcy5jb250ZXh0LmJ1ZmZlckRhdGEodGFyZ2V0LCB1aW50MTZBcnJheSwgdXNhZ2UpO1xuXG4gIHJldHVybiBlbGVtZW50QnVmZmVyO1xufVxuXG5mdW5jdGlvbiBiaW5kRWxlbWVudEJ1ZmZlcihlbGVtZW50QnVmZmVyKSB7XG4gIGNvbnN0IHsgRUxFTUVOVF9BUlJBWV9CVUZGRVIgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdGFyZ2V0ID0gRUxFTUVOVF9BUlJBWV9CVUZGRVI7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGFyZ2V0LCBlbGVtZW50QnVmZmVyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnVmZmVyKGRhdGEpIHtcbiAgY29uc3QgeyBBUlJBWV9CVUZGRVIsIFNUQVRJQ19EUkFXIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHRhcmdldCA9IEFSUkFZX0JVRkZFUixcbiAgICAgICAgdXNhZ2UgPSBTVEFUSUNfRFJBVyxcbiAgICAgICAgYnVmZmVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZUJ1ZmZlcigpLFxuICAgICAgICBmbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KGRhdGEpO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRhcmdldCwgYnVmZmVyKTtcblxuICB0aGlzLmNvbnRleHQuYnVmZmVyRGF0YSh0YXJnZXQsIGZsb2F0MzJBcnJheSwgdXNhZ2UpO1xuXG4gIHJldHVybiBidWZmZXI7XG59XG5cbmZ1bmN0aW9uIGJpbmRCdWZmZXIoYnVmZmVyLCBhdHRyaWJ1dGVMb2NhdGlvbiwgY29tcG9uZW50cykge1xuICBjb25zdCB7IEFSUkFZX0JVRkZFUiwgRkxPQVQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdGFyZ2V0ID0gQVJSQVlfQlVGRkVSLFxuICAgICAgICB0eXBlID0gRkxPQVQsXG4gICAgICAgIG5vcm1hbGl6ZSA9IGZhbHNlLFxuICAgICAgICBzdHJpZGUgPSAwLFxuICAgICAgICBvZmZzZXQgPSAwO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRhcmdldCwgYnVmZmVyKTtcblxuICB0aGlzLmNvbnRleHQudmVydGV4QXR0cmliUG9pbnRlcihhdHRyaWJ1dGVMb2NhdGlvbiwgY29tcG9uZW50cywgdHlwZSwgbm9ybWFsaXplLCBzdHJpZGUsIG9mZnNldCk7XG5cbiAgdGhpcy5jb250ZXh0LmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGF0dHJpYnV0ZUxvY2F0aW9uKTtcbn1cblxuY29uc3QgYnVmZmVyTWl4aW5zID0ge1xuICBjcmVhdGVFbGVtZW50QnVmZmVyLFxuICBiaW5kRWxlbWVudEJ1ZmZlcixcbiAgY3JlYXRlQnVmZmVyLFxuICBiaW5kQnVmZmVyXG59O1xuXG5leHBvcnQgZGVmYXVsdCBidWZmZXJNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGNsZWFyQ29sb3VyKGNvbG91cikge1xuICBjb25zdCBbIHIsIGcsIGIsIGEgPSAxIF0gPSAgY29sb3VyO1xuXG4gIHRoaXMuY29udGV4dC5jbGVhckNvbG9yKHIsIGcsIGIsIGEpO1xufVxuXG5mdW5jdGlvbiBjbGVhckNvbG91ckJ1ZmZlcigpIHtcbiAgY29uc3QgeyBDT0xPUl9CVUZGRVJfQklUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIG1hc2sgPSBDT0xPUl9CVUZGRVJfQklUO1xuXG4gIHRoaXMuY29udGV4dC5jbGVhcihtYXNrKTtcbn1cblxuY29uc3QgY29sb3VyTWl4aW5zID0ge1xuICBjbGVhckNvbG91cixcbiAgY2xlYXJDb2xvdXJCdWZmZXJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbG91ck1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gYXBwbHlNYXRyaXgodW5pZm9ybUxvY2F0aW9uLCBtYXRyaXgpIHtcbiAgY29uc3QgdHJhbnNwb3NlID0gZmFsc2U7ICAvLy9cblxuICB0aGlzLmNvbnRleHQudW5pZm9ybU1hdHJpeDRmdih1bmlmb3JtTG9jYXRpb24sIHRyYW5zcG9zZSwgbWF0cml4KTtcbn1cblxuY29uc3QgbWF0cml4TWl4aW5zID0ge1xuICBhcHBseU1hdHJpeFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbWF0cml4TWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFWFRfVEVYVFVSRV9GSUxURVJfQU5JU09UUk9QSUMsXG4gICAgICAgICBNT1pfRVhUX1RFWFRVUkVfRklMVEVSX0FOSVNPVFJPUElDLFxuICAgICAgICAgV0VCS0lUX0VYVF9URVhUVVJFX0ZJTFRFUl9BTklTT1RST1BJQyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZnVuY3Rpb24gY3JlYXRlVGV4dHVyZShpbWFnZSwgaW5kZXgsIHJlcGVhdCkge1xuXHRjb25zdCB7IFJHQkEsIExJTkVBUiwgVU5TSUdORURfQllURSwgVEVYVFVSRTAsIFRFWFRVUkVfMkQsIFRFWFRVUkVfV1JBUF9TLCBURVhUVVJFX1dSQVBfVCwgVU5QQUNLX0ZMSVBfWV9XRUJHTCwgQ0xBTVBfVE9fRURHRSwgTkVBUkVTVCwgUkVQRUFULCBURVhUVVJFX01JTl9GSUxURVIgfSA9IHRoaXMuY29udGV4dCxcblx0XHRcdFx0dGFyZ2V0ID0gVEVYVFVSRTAgKyBpbmRleCxcblx0XHRcdFx0bGV2ZWwgPSAwLFxuXHRcdFx0XHRpbnRlcm5hbEZvcm1hdCA9IFJHQkEsXG5cdFx0XHRcdGZvcm1hdCA9IFJHQkEsXG5cdFx0XHRcdHR5cGUgPSBVTlNJR05FRF9CWVRFLFxuXHRcdFx0XHR0ZXh0dXJlID0gdGhpcy5jb250ZXh0LmNyZWF0ZVRleHR1cmUoKTtcblxuICB0aGlzLmNvbnRleHQuYWN0aXZlVGV4dHVyZSh0YXJnZXQpO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kVGV4dHVyZShURVhUVVJFXzJELCB0ZXh0dXJlKTtcblxuICB0aGlzLmNvbnRleHQucGl4ZWxTdG9yZWkoVU5QQUNLX0ZMSVBfWV9XRUJHTCwgdHJ1ZSk7XG5cbiAgdGhpcy5jb250ZXh0LnRleEltYWdlMkQoVEVYVFVSRV8yRCwgbGV2ZWwsIGludGVybmFsRm9ybWF0LCBmb3JtYXQsIHR5cGUsIGltYWdlKTtcblxuICBpZiAocmVwZWF0KSB7XG4gICAgdGhpcy5jb250ZXh0LnRleFBhcmFtZXRlcmkoVEVYVFVSRV8yRCwgVEVYVFVSRV9XUkFQX1MsIFJFUEVBVCk7XG4gICAgdGhpcy5jb250ZXh0LnRleFBhcmFtZXRlcmkoVEVYVFVSRV8yRCwgVEVYVFVSRV9XUkFQX1QsIFJFUEVBVCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5jb250ZXh0LnRleFBhcmFtZXRlcmkoVEVYVFVSRV8yRCwgVEVYVFVSRV9XUkFQX1MsIENMQU1QX1RPX0VER0UpO1xuICAgIHRoaXMuY29udGV4dC50ZXhQYXJhbWV0ZXJpKFRFWFRVUkVfMkQsIFRFWFRVUkVfV1JBUF9ULCBDTEFNUF9UT19FREdFKTtcbiAgfVxuXG5cdHRoaXMuY29udGV4dC50ZXhQYXJhbWV0ZXJpKFRFWFRVUkVfMkQsIFRFWFRVUkVfTUlOX0ZJTFRFUiwgTElORUFSKTtcblxuXHRyZXR1cm4gdGV4dHVyZTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlQW5pc290cm9waWNGaWx0ZXJpbmcoKSB7XG4gIGNvbnN0IGV4dGVuc2lvbiA9IChcbiAgICB0aGlzLmNvbnRleHQuZ2V0RXh0ZW5zaW9uKEVYVF9URVhUVVJFX0ZJTFRFUl9BTklTT1RST1BJQykgfHxcbiAgICB0aGlzLmNvbnRleHQuZ2V0RXh0ZW5zaW9uKE1PWl9FWFRfVEVYVFVSRV9GSUxURVJfQU5JU09UUk9QSUMpIHx8XG4gICAgdGhpcy5jb250ZXh0LmdldEV4dGVuc2lvbihXRUJLSVRfRVhUX1RFWFRVUkVfRklMVEVSX0FOSVNPVFJPUElDKVxuICApO1xuXG4gIGlmIChleHRlbnNpb24pIHtcbiAgICBjb25zdCB7IFRFWFRVUkVfMkQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICB7IE1BWF9URVhUVVJFX01BWF9BTklTT1RST1BZX0VYVCwgVEVYVFVSRV9NQVhfQU5JU09UUk9QWV9FWFQgfSA9IGV4dGVuc2lvbixcbiAgICAgICAgICBtYXhpbXVtID0gdGhpcy5jb250ZXh0LmdldFBhcmFtZXRlcihNQVhfVEVYVFVSRV9NQVhfQU5JU09UUk9QWV9FWFQpO1xuXG4gICAgdGhpcy5jb250ZXh0LnRleFBhcmFtZXRlcmYoVEVYVFVSRV8yRCwgVEVYVFVSRV9NQVhfQU5JU09UUk9QWV9FWFQsIG1heGltdW0pO1xuICB9XG59XG5cbmNvbnN0IHRleHR1cmVNaXhpbnMgPSB7XG4gIGNyZWF0ZVRleHR1cmUsXG4gIGVuYWJsZUFuaXNvdHJvcGljRmlsdGVyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCB0ZXh0dXJlTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIpIHtcbiAgY29uc3QgcHJvZ3JhbSA9IHRoaXMuY29udGV4dC5jcmVhdGVQcm9ncmFtKCk7XG5cbiAgdGhpcy5jb250ZXh0LmF0dGFjaFNoYWRlcihwcm9ncmFtLCB2ZXJ0ZXhTaGFkZXIpO1xuXG4gIHRoaXMuY29udGV4dC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgZnJhZ21lbnRTaGFkZXIpO1xuICBcbiAgdGhpcy5jb250ZXh0LmxpbmtQcm9ncmFtKHByb2dyYW0pO1xuICBcbiAgcmV0dXJuIHByb2dyYW07XG59XG5cbmZ1bmN0aW9uIHVzZVByb2dyYW0ocHJvZ3JhbSkge1xuICB0aGlzLmNvbnRleHQudXNlUHJvZ3JhbShwcm9ncmFtKTtcbn1cblxuY29uc3QgcHJvZ3JhbU1peGlucyA9IHtcbiAgY3JlYXRlUHJvZ3JhbSxcbiAgdXNlUHJvZ3JhbVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvZ3JhbU1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gZW5hYmxlQmxlbmRpbmcoKSB7XG4gIGNvbnN0IHsgQkxFTkQsIFNSQ19BTFBIQSwgT05FIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIGNhcGFjaXR5ID0gQkxFTkQsXG4gICAgICAgIHNvdXJjZUZhY3RvciA9IFNSQ19BTFBIQSxcbiAgICAgICAgZGVzdGluYXRpb25GYWN0b3IgPSBPTkU7XG5cbiAgdGhpcy5jb250ZXh0LmVuYWJsZShjYXBhY2l0eSk7XG5cbiAgdGhpcy5jb250ZXh0LmJsZW5kRnVuYyhzb3VyY2VGYWN0b3IsIGRlc3RpbmF0aW9uRmFjdG9yKTtcbn1cblxuY29uc3QgYmxlbmRpbmdNaXhpbnMgPSB7XG4gIGVuYWJsZUJsZW5kaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBibGVuZGluZ01peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSk7XG59XG5cbmZ1bmN0aW9uIGdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCBuYW1lKTtcbn1cblxuZnVuY3Rpb24gc2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKHVuaWZvcm1Mb2NhdGlvbiwgaW50ZWdlclZhbHVlKSB7XG4gIHRoaXMuY29udGV4dC51bmlmb3JtMWkodW5pZm9ybUxvY2F0aW9uLCBpbnRlZ2VyVmFsdWUpO1xufVxuXG5jb25zdCBsb2NhdGlvbk1peGlucyA9IHtcbiAgZ2V0VW5pZm9ybUxvY2F0aW9uLFxuICBnZXRBdHRyaWJ1dGVMb2NhdGlvbixcbiAgc2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2NhdGlvbk1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRlcHRoTWl4aW5zIGZyb20gXCIuL21peGlucy9kZXB0aFwiO1xuaW1wb3J0IHNoYWRlck1peGlucyBmcm9tIFwiLi9taXhpbnMvc2hhZGVyXCI7XG5pbXBvcnQgYnVmZmVyTWl4aW5zIGZyb20gXCIuL21peGlucy9idWZmZXJcIjtcbmltcG9ydCBjb2xvdXJNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2NvbG91clwiO1xuaW1wb3J0IG1hdHJpeE1peGlucyBmcm9tIFwiLi9taXhpbnMvbWF0cml4XCI7XG5pbXBvcnQgdGV4dHVyZU1peGlucyBmcm9tIFwiLi9taXhpbnMvdGV4dHVyZVwiO1xuaW1wb3J0IHByb2dyYW1NaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3Byb2dyYW1cIjtcbmltcG9ydCBibGVuZGluZ01peGlucyBmcm9tIFwiLi9taXhpbnMvYmxlbmRpbmdcIjtcbmltcG9ydCBsb2NhdGlvbk1peGlucyBmcm9tIFwiLi9taXhpbnMvbG9jYXRpb25cIjtcblxuaW1wb3J0IHsgV0VCX0dMX0NPTlRFWFRfRVJST1IgfSBmcm9tIFwiLi9lcnJvcnNcIjtcbmltcG9ydCB7IFdFQkdMLCBXSURUSCwgSEVJR0hULCBDQU5WQVMsIFNUUklORyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciA9IENBTlZBUykge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb21FbGVtZW50RnJvbVNlbGVjdG9yKHNlbGVjdG9yKSxcbiAgICAgICAgICBjb250ZXh0ID0gY29udGV4dEZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcblxuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICB0aGlzLmVuYWJsZURlcHRoVGVzdGluZygpOyAgLy8vXG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC53aWR0aDsgfVxuXG4gIGdldEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5oZWlnaHQ7IH1cblxuICBnZXRDbGllbnRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aDsgfVxuXG4gIGdldENsaWVudEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQ7IH1cblxuICBzZXRXaWR0aCh3aWR0aCkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKFdJRFRILCB3aWR0aCk7IH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoSEVJR0hULCBoZWlnaHQpOyB9XG5cbiAgcmVzaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICBjb25zdCB4ID0gMCxcbiAgICAgICAgICB5ID0gMDtcblxuICAgIHRoaXMuc2V0V2lkdGgod2lkdGgpO1xuXG4gICAgdGhpcy5zZXRIZWlnaHQoaGVpZ2h0KTtcblxuICAgIHRoaXMuY29udGV4dC52aWV3cG9ydCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIGNsZWFyKGNvbG91cikge1xuICAgIHRoaXMuY2xlYXJDb2xvdXIoY29sb3VyKTtcbiAgICB0aGlzLmNsZWFyRGVwdGgoKTtcbiAgICB0aGlzLmNsZWFyRGVwdGhCdWZmZXIoKTtcbiAgICB0aGlzLmNsZWFyQ29sb3VyQnVmZmVyKCk7XG4gIH1cblxuICByZW5kZXIocmVuZGVyZXIsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpIHtcbiAgICBjb25zdCBvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0T2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXROb3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldFJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXRQcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7XG5cbiAgICB0aGlzLmFwcGx5TWF0cml4KG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG9mZnNldHNNYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgobm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsc01hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgocm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbnNNYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgocHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeCk7XG4gIH1cblxuICBkcmF3RWxlbWVudHMoc3RhcnQsIGZpbmlzaCkge1xuICAgIGNvbnN0IHsgVFJJQU5HTEVTLCBVTlNJR05FRF9TSE9SVCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICAgIG1vZGUgPSBUUklBTkdMRVMsXG4gICAgICAgICAgdHlwZSA9IFVOU0lHTkVEX1NIT1JULFxuICAgICAgICAgIGNvdW50ID0gZmluaXNoIC0gc3RhcnQsXG4gICAgICAgICAgb2Zmc2V0ID0gc3RhcnQgKiAyOyAvLy9cblxuICAgIHRoaXMuY29udGV4dC5kcmF3RWxlbWVudHMobW9kZSwgY291bnQsIHR5cGUsIG9mZnNldClcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGRlcHRoTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgc2hhZGVyTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgYnVmZmVyTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgY29sb3VyTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgbWF0cml4TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgdGV4dHVyZU1peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIHByb2dyYW1NaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBibGVuZGluZ01peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGxvY2F0aW9uTWl4aW5zKTtcblxuZnVuY3Rpb24gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3Rvcikge1xuICBjb25zdCBkb21FbGVtZW50ID0gKHR5cGVvZiBzZWxlY3RvciA9PT0gU1RSSU5HKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpWzBdIDogIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOyAgLy8vXG5cbiAgcmV0dXJuIGRvbUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNvbnRleHRGcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gIGNvbnN0IGNvbnRleHQgPSBkb21FbGVtZW50LmdldENvbnRleHQoV0VCR0wpO1xuXG4gIGlmICghY29udGV4dCkge1xuICAgIHRocm93IG5ldyBFcnJvcihXRUJfR0xfQ09OVEVYVF9FUlJPUik7XG4gIH1cblxuICByZXR1cm4gY29udGV4dDtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYWRkIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKSB7XG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7XG4gICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcbiAgICB0aGlzLnJlbmRlcmVyRGF0YSA9IHJlbmRlcmVyRGF0YTtcbiAgICB0aGlzLnJlbmRlcmVyQnVmZmVycyA9IHJlbmRlcmVyQnVmZmVycztcbiAgICB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMgPSB1bmlmb3JtTG9jYXRpb25zO1xuICAgIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zID0gYXR0cmlidXRlTG9jYXRpb25zO1xuICB9XG5cbiAgZ2V0RmFjZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmZhY2V0cztcbiAgfVxuXG4gIGdldFByb2dyYW0oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZ3JhbTtcbiAgfVxuICBcbiAgZ2V0UmVuZGVyZXJEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnJlbmRlcmVyRGF0YTtcbiAgfVxuICBcbiAgZ2V0UmVuZGVyZXJCdWZmZXJzKCkge1xuICAgIHJldHVybiB0aGlzLnJlbmRlcmVyQnVmZmVycztcbiAgfVxuXG4gIGdldFVuaWZvcm1Mb2NhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucztcbiAgfVxuXG4gIGdldEF0dHJpYnV0ZUxvY2F0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnM7XG4gIH1cblxuICBnZXRDb3VudCgpIHsgcmV0dXJuIHRoaXMucmVuZGVyZXJEYXRhLmdldENvdW50KCk7IH1cblxuICBnZXRPZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldE9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldE5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0Tm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXRSb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zLmdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKTsgfVxuXG4gIGdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnMuZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKTsgfVxuXG4gIGFkZEZhY2V0cyhmYWNldHMpIHtcbiAgICBhZGQodGhpcy5mYWNldHMsIGZhY2V0cyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyU291cmNlLCBmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSB7XG4gIGNvbnN0IHZlcnRleFNoYWRlciA9IGNhbnZhcy5jcmVhdGVWZXJ0ZXhTaGFkZXIodmVydGV4U2hhZGVyU291cmNlKSxcbiAgICAgICAgZnJhZ21lbnRTaGFkZXIgPSBjYW52YXMuY3JlYXRlRnJhZ21lbnRTaGFkZXIoZnJhZ21lbnRTaGFkZXJTb3VyY2UpLFxuICAgICAgICBwcm9ncmFtID0gY2FudmFzLmNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcik7XG4gIFxuICByZXR1cm4gcHJvZ3JhbTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYWRkLCBmbGF0dGVuIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlckRhdGEge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEpIHtcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uc0RhdGEgPSB2ZXJ0ZXhQb3NpdGlvbnNEYXRhO1xuICAgIHRoaXMudmVydGV4Tm9ybWFsc0RhdGEgPSB2ZXJ0ZXhOb3JtYWxzRGF0YTtcbiAgICB0aGlzLnZlcnRleEluZGV4ZXNEYXRhID0gdmVydGV4SW5kZXhlc0RhdGE7XG4gIH1cblxuICBnZXRDb3VudCgpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbmRleGVzRGF0YUxlbmd0aCA9IHRoaXMudmVydGV4SW5kZXhlc0RhdGEubGVuZ3RoLFxuICAgICAgICAgIGNvdW50ID0gdmVydGV4SW5kZXhlc0RhdGFMZW5ndGg7ICAvLy9cblxuICAgIHJldHVybiBjb3VudDtcbiAgfVxuICBcbiAgZ2V0VmVydGV4UG9zaXRpb25zRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhQb3NpdGlvbnNEYXRhO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhOb3JtYWxzRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhOb3JtYWxzRGF0YTtcbiAgfVxuICBcbiAgZ2V0VmVydGV4SW5kZXhlc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4SW5kZXhlc0RhdGE7XG4gIH1cblxuICBhZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zRGF0YSA9IGZsYXR0ZW4odmVydGV4UG9zaXRpb25zKTtcblxuICAgIGFkZCh0aGlzLnZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleFBvc2l0aW9uc0RhdGEpO1xuICB9XG5cbiAgYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKSB7XG4gICAgY29uc3QgdmVydGV4Tm9ybWFsc0RhdGEgPSBmbGF0dGVuKHZlcnRleE5vcm1hbHMpO1xuXG4gICAgYWRkKHRoaXMudmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhKTtcbiAgfVxuXG4gIGFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcykge1xuICAgIGNvbnN0IHZlcnRleEluZGV4ZXNEYXRhID0gdmVydGV4SW5kZXhlczsgIC8vL1xuXG4gICAgYWRkKHRoaXMudmVydGV4SW5kZXhlc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zRGF0YSA9IFtdLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHNEYXRhID0gW10sXG4gICAgICAgICAgdmVydGV4SW5kZXhlc0RhdGEgPSBbXSxcbiAgICAgICAgICByZW5kZXJlckRhdGEgPSBuZXcgQ2xhc3ModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIFxuICAgIHJldHVybiByZW5kZXJlckRhdGE7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlbmRlcmVyRGF0YSBmcm9tIFwiLi4vLi4vcmVuZGVyZXIvZGF0YVwiO1xuXG5pbXBvcnQgeyBhZGQsIGZsYXR0ZW4gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG91clJlbmRlcmVyRGF0YSBleHRlbmRzIFJlbmRlcmVyRGF0YSB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4Q29sb3Vyc0RhdGEpIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEpO1xuXG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJzRGF0YSA9IHZlcnRleENvbG91cnNEYXRhO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhDb2xvdXJzRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhDb2xvdXJzRGF0YTtcbiAgfVxuXG4gIGFkZFZlcnRleENvbG91cnModmVydGV4Q29sb3Vycykge1xuICAgIGNvbnN0IHZlcnRleENvbG91cnNEYXRhID0gZmxhdHRlbih2ZXJ0ZXhDb2xvdXJzKTtcblxuICAgIGFkZCh0aGlzLnZlcnRleENvbG91cnNEYXRhLCB2ZXJ0ZXhDb2xvdXJzRGF0YSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IFxuICAgIGNvbnN0IHZlcnRleENvbG91cnNEYXRhID0gW10sXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXJEYXRhID0gUmVuZGVyZXJEYXRhLmZyb21Ob3RoaW5nKENvbG91clJlbmRlcmVyRGF0YSwgdmVydGV4Q29sb3Vyc0RhdGEpO1xuICAgIFxuICAgIHJldHVybiBjb2xvdXJSZW5kZXJlckRhdGE7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IG5vcm1hbHNNYXRyaXhOYW1lID0gXCJ1Tm9ybWFsc01hdHJpeFwiO1xuZXhwb3J0IGNvbnN0IHZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWUgPSBcImFWZXJ0ZXhOb3JtYWxcIjtcblxuY29uc3QgbGlnaHRpbmdTb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgXG4gICAgICAgIHVuaWZvcm0gbWF0NCAke25vcm1hbHNNYXRyaXhOYW1lfTtcblxuICAgICAgICBhdHRyaWJ1dGUgdmVjMyAke3ZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWV9O1xuXG4gICAgICAgIHZlYzMgZGlyZWN0aW9uYWxMaWdodENvbG91ciA9IHZlYzMoMSwgMSwgMSksXG4gICAgICAgICAgICAgZGlyZWN0aW9uYWxWZWN0b3IgPSBub3JtYWxpemUodmVjMygxLjAsIDEuMCwgMS4wKSk7XG4gICAgICAgICAgXG4gICAgICAgIHZlYzMgY2FsY3VsYXRlTGlnaHRpbmcoKSB7XG4gICAgICAgICAgdmVjNCB0cmFuc2Zvcm1lZE5vcm1hbCA9ICR7bm9ybWFsc01hdHJpeE5hbWV9ICogdmVjNCgke3ZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWV9LCAxLjApOyAgICAgICAgICAgIFxuXG4gICAgICAgICAgZmxvYXQgZGlyZWN0aW9uYWwgPSAoZG90KHRyYW5zZm9ybWVkTm9ybWFsLnh5eiwgZGlyZWN0aW9uYWxWZWN0b3IpICsgMS4wKSAvIDIuMDtcbiAgICAgICAgICBcbiAgICAgICAgICB2ZWMzIGxpZ2h0aW5nID0gKGRpcmVjdGlvbmFsTGlnaHRDb2xvdXIgKiBkaXJlY3Rpb25hbCk7XG4gICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIGxpZ2h0aW5nO1xuICAgICAgICB9XG5cbiAgICAgIGApO1xuXG5leHBvcnQgZGVmYXVsdCBsaWdodGluZ1NvdXJjZTsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBvZmZzZXRzTWF0cml4TmFtZSA9IFwidU9mZnNldHNNYXRyaXhcIjtcbmV4cG9ydCBjb25zdCBwb3NpdGlvbk1hdHJpeE5hbWUgPSBcInVQb3NpdGlvbk1hdHJpeFwiO1xuZXhwb3J0IGNvbnN0IHJvdGF0aW9uc01hdHJpeE5hbWUgPSBcInVSb3RhdGlvbnNNYXRyaXhcIjtcbmV4cG9ydCBjb25zdCBwcm9qZWN0aW9uTWF0cml4TmFtZSA9IFwidVBlcnNwZWN0aXZlTWF0cml4XCI7XG5leHBvcnQgY29uc3QgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lID0gXCJhVmVydGV4UG9zaXRpb25cIjtcblxuY29uc3QgcG9zaXRpb25Tb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgXG4gICAgICAgIHVuaWZvcm0gbWF0NCAke29mZnNldHNNYXRyaXhOYW1lfSxcbiAgICAgICAgICAgICAgICAgICAgICR7cm90YXRpb25zTWF0cml4TmFtZX0sXG4gICAgICAgICAgICAgICAgICAgICAke3Bvc2l0aW9uTWF0cml4TmFtZX0sXG4gICAgICAgICAgICAgICAgICAgICAke3Byb2plY3Rpb25NYXRyaXhOYW1lfTtcbiAgICAgICAgXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWM0ICR7dmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lfTtcblxuICAgICAgICB2ZWM0IGNhbGN1bGF0ZVBvc2l0aW9uKCkge1xuICAgICAgICAgIHZlYzQgcG9zaXRpb24gPSAke3Byb2plY3Rpb25NYXRyaXhOYW1lfSAqICR7cG9zaXRpb25NYXRyaXhOYW1lfSAqICR7cm90YXRpb25zTWF0cml4TmFtZX0gKiAke29mZnNldHNNYXRyaXhOYW1lfSAqICR7dmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lfTtcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gcG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgKTtcblxuZXhwb3J0IGRlZmF1bHQgcG9zaXRpb25Tb3VyY2U7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBsaWdodGluZ1NvdXJjZSBmcm9tIFwiLi4vLi4vc291cmNlL2xpZ2h0aW5nXCI7XG5pbXBvcnQgcG9zaXRpb25Tb3VyY2UgZnJvbSBcIi4uLy4uL3NvdXJjZS9wb3NpdGlvblwiO1xuXG5leHBvcnQgY29uc3QgdmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZSA9IFwiYVZlcnRleENvbG91clwiXG5cbmNvbnN0IHZlcnRleFNoYWRlclNvdXJjZSA9IG5ldyBTdHJpbmcoYFxuICAgIFxuICAgICAgICBhdHRyaWJ1dGUgdmVjNCAke3ZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWV9O1xuXG4gICAgICAgICR7bGlnaHRpbmdTb3VyY2V9XG4gICAgICBcbiAgICAgICAgJHtwb3NpdGlvblNvdXJjZX1cbiAgICBcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcbiAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgbG93cCB2ZWM0IHZDb2xvdXI7XG4gICAgICAgIFxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgdkxpZ2h0aW5nID0gY2FsY3VsYXRlTGlnaHRpbmcoKTtcblxuICAgICAgICAgIGdsX1Bvc2l0aW9uID0gY2FsY3VsYXRlUG9zaXRpb24oKTtcblxuICAgICAgICAgIHZDb2xvdXIgPSAke3ZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWV9OyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgKTtcblxuZXhwb3J0IGRlZmF1bHQgdmVydGV4U2hhZGVyU291cmNlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBmcmFnbWVudFNoYWRlclNvdXJjZSA9IG5ldyBTdHJpbmcoYFxuICAgICAgICBcbiAgICAgICAgdmFyeWluZyBsb3dwIHZlYzQgdkNvbG91cjtcbiAgICAgICAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG5cbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQodkNvbG91ci5yZ2IgKiB2TGlnaHRpbmcsIHZDb2xvdXIuYSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgKTtcblxuZXhwb3J0IGRlZmF1bHQgZnJhZ21lbnRTaGFkZXJTb3VyY2U7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IHZlcnRleE5vcm1hbENvbXBvbmVudHMgPSAzLFxuICAgICAgdmVydGV4UG9zaXRpb25Db21wb25lbnRzID0gMztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyZXJCdWZmZXJzIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcikge1xuICAgIHRoaXMudmVydGV4UG9zaXRpb25zQnVmZmVyID0gdmVydGV4UG9zaXRpb25zQnVmZmVyO1xuICAgIHRoaXMudmVydGV4Tm9ybWFsc0J1ZmZlciA9IHZlcnRleE5vcm1hbHNCdWZmZXI7XG4gICAgdGhpcy52ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciA9IHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyO1xuICB9XG5cbiAgY3JlYXRlVmVydGV4UG9zaXRpb25zQnVmZmVyKHZlcnRleFBvc2l0aW9uc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4UG9zaXRpb25zQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleE5vcm1hbHNCdWZmZXIodmVydGV4Tm9ybWFsc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4Tm9ybWFsc0J1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodmVydGV4Tm9ybWFsc0RhdGEpO1xuICB9XG5cbiAgY3JlYXRlVmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIodmVydGV4SW5kZXhlc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIgPSBjYW52YXMuY3JlYXRlRWxlbWVudEJ1ZmZlcih2ZXJ0ZXhJbmRleGVzRGF0YSk7XG4gIH1cblxuICBiaW5kVmVydGV4Tm9ybWFsc0J1ZmZlcih2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy52ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQ29tcG9uZW50cyk7XG4gIH1cblxuICBiaW5kVmVydGV4UG9zaXRpb25zQnVmZmVyKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkNvbXBvbmVudHMpO1xuICB9XG5cbiAgYmluZFZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kRWxlbWVudEJ1ZmZlcih0aGlzLnZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKTtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLmNyZWF0ZVZlcnRleFBvc2l0aW9uc0J1ZmZlcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCBjYW52YXMpO1xuICAgIHRoaXMuY3JlYXRlVmVydGV4Tm9ybWFsc0J1ZmZlcih2ZXJ0ZXhOb3JtYWxzRGF0YSwgY2FudmFzKTtcbiAgICB0aGlzLmNyZWF0ZVZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKHZlcnRleEluZGV4ZXNEYXRhLCBjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIHRoaXMuYmluZFZlcnRleE5vcm1hbHNCdWZmZXIodmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gICAgdGhpcy5iaW5kVmVydGV4UG9zaXRpb25zQnVmZmVyKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gICAgdGhpcy5iaW5kVmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIoY2FudmFzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zQnVmZmVyID0gbnVsbCwgLy8vXG4gICAgICAgICAgdmVydGV4Tm9ybWFsc0J1ZmZlciA9IG51bGwsIC8vL1xuICAgICAgICAgIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHJlbmRlcmVyQnVmZmVycyA9IG5ldyBDbGFzcyh2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHJlbmRlcmVyQnVmZmVycztcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVuZGVyZXJCdWZmZXJzIGZyb20gXCIuLi8uLi9yZW5kZXJlci9idWZmZXJzXCI7XG5cbmNvbnN0IHZlcnRleENvbG91ckNvbXBvbmVudHMgPSA0O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvdXJSZW5kZXJlckJ1ZmZlcnMgZXh0ZW5kcyBSZW5kZXJlckJ1ZmZlcnMge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyLCB2ZXJ0ZXhDb2xvdXJzQnVmZmVyKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcik7XG5cbiAgICB0aGlzLnZlcnRleENvbG91cnNCdWZmZXIgPSB2ZXJ0ZXhDb2xvdXJzQnVmZmVyO1xuICB9XG5cbiAgY3JlYXRlVmVydGV4Q29sb3Vyc0J1ZmZlcih2ZXJ0ZXhDb2xvdXJzRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJzQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih2ZXJ0ZXhDb2xvdXJzRGF0YSk7XG4gIH1cblxuICBiaW5kVmVydGV4Q29sb3Vyc0J1ZmZlcih2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy52ZXJ0ZXhDb2xvdXJzQnVmZmVyLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Q29sb3VyQ29tcG9uZW50cyk7XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4Q29sb3Vyc0RhdGEsIGNhbnZhcykge1xuICAgIHN1cGVyLmNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCBjYW52YXMpO1xuXG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhDb2xvdXJzQnVmZmVyKHZlcnRleENvbG91cnNEYXRhLCBjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBzdXBlci5iaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcblxuICAgIHRoaXMuYmluZFZlcnRleENvbG91cnNCdWZmZXIodmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgdmVydGV4Q29sb3Vyc0J1ZmZlciA9IG51bGwsIC8vL1xuICAgICAgICAgIGNvbG91clJlbmRlcmVyQnVmZmVycyA9IFJlbmRlcmVyQnVmZmVycy5mcm9tTm90aGluZyhDb2xvdXJSZW5kZXJlckJ1ZmZlcnMsIHZlcnRleENvbG91cnNCdWZmZXIpO1xuICAgIFxuICAgIHJldHVybiBjb2xvdXJSZW5kZXJlckJ1ZmZlcnM7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9ybWFsc01hdHJpeE5hbWUgfSBmcm9tIFwiLi4vc291cmNlL2xpZ2h0aW5nXCI7XG5cbmltcG9ydCB7IG9mZnNldHNNYXRyaXhOYW1lLCByb3RhdGlvbnNNYXRyaXhOYW1lLCBwb3NpdGlvbk1hdHJpeE5hbWUsIHByb2plY3Rpb25NYXRyaXhOYW1lIH0gZnJvbSBcIi4uL3NvdXJjZS9wb3NpdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbmlmb3JtTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3Iob2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbikge1xuICAgIHRoaXMub2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gICAgdGhpcy5ub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgICB0aGlzLnBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gICAgdGhpcy5yb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gICAgdGhpcy5wcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldE9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldE5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0Um90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShDbGFzcywgcHJvZ3JhbSwgY2FudmFzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBvZmZzZXRzTWF0cml4TmFtZSksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbm9ybWFsc01hdHJpeE5hbWUpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBwb3NpdGlvbk1hdHJpeE5hbWUpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgcm90YXRpb25zTWF0cml4TmFtZSksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgcHJvamVjdGlvbk1hdHJpeE5hbWUpLFxuICAgICAgICAgIHVuaWZvcm1Mb2NhdGlvbnMgPSBuZXcgQ2xhc3Mob2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICBcbiAgICByZXR1cm4gdW5pZm9ybUxvY2F0aW9uczsgICAgICAgXG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFVuaWZvcm1Mb2NhdGlvbnMgZnJvbSBcIi4uLy4uL2xvY2F0aW9ucy91bmlmb3JtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG91clVuaWZvcm1Mb2NhdGlvbnMgZXh0ZW5kcyBVbmlmb3JtTG9jYXRpb25zIHtcbiAgc3RhdGljIGZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcykgeyByZXR1cm4gVW5pZm9ybUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShDb2xvdXJVbmlmb3JtTG9jYXRpb25zLCBwcm9ncmFtLCBjYW52YXMpOyB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWUgfSBmcm9tIFwiLi4vc291cmNlL2xpZ2h0aW5nXCI7XG5pbXBvcnQgeyB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWUgfSBmcm9tIFwiLi4vc291cmNlL3Bvc2l0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF0dHJpYnV0ZUxvY2F0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKSB7XG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbjtcbiAgICB0aGlzLnZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIGdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShDbGFzcywgcHJvZ3JhbSwgY2FudmFzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZSksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZSksXG4gICAgICAgICAgYXR0cmlidXRlTG9jYXRpb25zID0gbmV3IENsYXNzKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZUxvY2F0aW9ucztcbiAgfSAgXG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBdHRyaWJ1dGVMb2NhdGlvbnMgZnJvbSBcIi4uLy4uL2xvY2F0aW9ucy9hdHRyaWJ1dGVcIjtcblxuaW1wb3J0IHsgdmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZSB9IGZyb20gXCIuLi8uLi9zb3VyY2UvY29sb3VyL3ZlcnRleFNoYWRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMgZXh0ZW5kcyBBdHRyaWJ1dGVMb2NhdGlvbnMge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24pIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbik7XG5cbiAgICB0aGlzLnZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uID0gdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb247XG4gIH1cblxuICBnZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcykge1xuICAgIGNvbnN0IHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWUpLFxuICAgICAgICAgIGNvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucyA9IEF0dHJpYnV0ZUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMsIHByb2dyYW0sIGNhbnZhcywgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24pO1xuXG4gICAgcmV0dXJuIGNvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucztcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVuZGVyZXIgZnJvbSBcIi4uL3JlbmRlcmVyXCI7XG5pbXBvcnQgQ29sb3VyUmVuZGVyZXJEYXRhIGZyb20gXCIuLi9yZW5kZXJlci9kYXRhL2NvbG91clwiO1xuaW1wb3J0IHZlcnRleFNoYWRlclNvdXJjZSBmcm9tIFwiLi9zb3VyY2UvY29sb3VyL3ZlcnRleFNoYWRlclwiO1xuaW1wb3J0IGZyYWdtZW50U2hhZGVyU291cmNlIGZyb20gXCIuL3NvdXJjZS9jb2xvdXIvZnJhZ21lbnRTaGFkZXJcIjtcbmltcG9ydCBDb2xvdXJSZW5kZXJlckJ1ZmZlcnMgZnJvbSBcIi4uL3JlbmRlcmVyL2J1ZmZlcnMvY29sb3VyXCI7XG5pbXBvcnQgQ29sb3VyVW5pZm9ybUxvY2F0aW9ucyBmcm9tIFwiLi9sb2NhdGlvbnMvY29sb3VyL3VuaWZvcm1cIjtcbmltcG9ydCBDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMgZnJvbSBcIi4vbG9jYXRpb25zL2NvbG91ci9hdHRyaWJ1dGVcIjtcblxuaW1wb3J0IHsgYWRkIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgY3JlYXRlUHJvZ3JhbSB9IGZyb20gXCIuLi9yZW5kZXJlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvdXJSZW5kZXJlciBleHRlbmRzIFJlbmRlcmVyIHtcbiAgZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgY29uc3QgYXR0cmlidXRlTG9jYXRpb25zID0gdGhpcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IGF0dHJpYnV0ZUxvY2F0aW9ucy5nZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbigpO1xuXG4gICAgcmV0dXJuIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gW10sXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zID0gW10sXG4gICAgICAgICAgdmVydGV4Q29sb3VycyA9IFtdO1xuXG4gICAgZmFjZXRzLmZvckVhY2goKGZhY2V0LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgY29sb3VyZWRGYWNldCA9IGZhY2V0LCAgLy8vXG4gICAgICAgICAgICBmYWNldFZlcnRleEluZGV4ZXMgPSBmYWNldC5nZXRWZXJ0ZXhJbmRleGVzKGluZGV4KSxcbiAgICAgICAgICAgIGZhY2V0VmVydGV4Tm9ybWFscyA9IGZhY2V0LmdldFZlcnRleE5vcm1hbHMoKSxcbiAgICAgICAgICAgIGZhY2V0VmVydGV4UG9zaXRpb25zID0gZmFjZXQuZ2V0VmVydGV4UG9zaXRpb25zKCksXG4gICAgICAgICAgICBjb2xvdXJlZEZhY2V0VmVydGV4Q29sb3VycyA9IGNvbG91cmVkRmFjZXQuZ2V0VmVydGV4Q29sb3VycygpO1xuXG4gICAgICBhZGQodmVydGV4SW5kZXhlcywgZmFjZXRWZXJ0ZXhJbmRleGVzKTtcbiAgICAgIGFkZCh2ZXJ0ZXhOb3JtYWxzLCBmYWNldFZlcnRleE5vcm1hbHMpO1xuICAgICAgYWRkKHZlcnRleFBvc2l0aW9ucywgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMpO1xuICAgICAgYWRkKHZlcnRleENvbG91cnMsIGNvbG91cmVkRmFjZXRWZXJ0ZXhDb2xvdXJzKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlbmRlcmVyRGF0YSA9IHRoaXMuZ2V0UmVuZGVyZXJEYXRhKCk7XG5cbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4Q29sb3Vycyh2ZXJ0ZXhDb2xvdXJzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4UG9zaXRpb25zKHZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICBjb25zdCByZW5kZXJlckJ1ZmZlcnMgPSB0aGlzLmdldFJlbmRlcmVyQnVmZmVycygpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4UG9zaXRpb25zRGF0YSgpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleE5vcm1hbHNEYXRhKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4SW5kZXhlc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhDb2xvdXJzRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJCdWZmZXJzLmNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhDb2xvdXJzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbigpO1xuICAgIFxuICAgIHJlbmRlcmVyQnVmZmVycy5iaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gIH1cblxuICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgY2FudmFzKSB7XG4gICAgY29uc3QgcHJvZ3JhbSA9IHRoaXMuZ2V0UHJvZ3JhbSgpO1xuXG4gICAgY2FudmFzLnVzZVByb2dyYW0ocHJvZ3JhbSk7XG5cbiAgICB0aGlzLmJpbmRCdWZmZXJzKGNhbnZhcyk7XG5cbiAgICBjb25zdCByZW5kZXJlciA9IHRoaXM7ICAvLy9cblxuICAgIGNhbnZhcy5yZW5kZXIocmVuZGVyZXIsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuXG4gICAgY29uc3QgY291bnQgPSB0aGlzLmdldENvdW50KCksXG4gICAgICAgICAgc3RhcnQgPSAwLFxuICAgICAgICAgIGZpbmlzaCA9IGNvdW50OyAvLy9cblxuICAgIGNhbnZhcy5kcmF3RWxlbWVudHMoc3RhcnQsIGZpbmlzaCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY2FudmFzKSB7XG4gICAgY29uc3QgZmFjZXRzID0gW10sXG4gICAgICAgICAgcHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyU291cmNlLCBmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlckRhdGEgPSBDb2xvdXJSZW5kZXJlckRhdGEuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlckJ1ZmZlcnMgPSBDb2xvdXJSZW5kZXJlckJ1ZmZlcnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBjb2xvdXJVbmlmb3JtTG9jYXRpb25zID0gQ29sb3VyVW5pZm9ybUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIGNvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucyA9IENvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIHJlbmRlcmVyRGF0YSA9IGNvbG91clJlbmRlcmVyRGF0YSwgIC8vL1xuICAgICAgICAgIHJlbmRlcmVyQnVmZmVycyA9IGNvbG91clJlbmRlcmVyQnVmZmVycywgIC8vL1xuICAgICAgICAgIHVuaWZvcm1Mb2NhdGlvbnMgPSBjb2xvdXJVbmlmb3JtTG9jYXRpb25zLCAgLy8vXG4gICAgICAgICAgYXR0cmlidXRlTG9jYXRpb25zID0gY29sb3VyQXR0cmlidXRlTG9jYXRpb25zLCAgLy8vXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXIgPSBuZXcgQ29sb3VyUmVuZGVyZXIoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKTtcbiAgICBcbiAgICByZXR1cm4gY29sb3VyUmVuZGVyZXI7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGxpZ2h0aW5nU291cmNlIGZyb20gXCIuLi8uLi9zb3VyY2UvbGlnaHRpbmdcIjtcbmltcG9ydCBwb3NpdGlvblNvdXJjZSBmcm9tIFwiLi4vLi4vc291cmNlL3Bvc2l0aW9uXCI7XG5cbmV4cG9ydCBjb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWUgPSBcImFUZXh0dXJlQ29vcmRpbmF0ZVwiO1xuXG5jb25zdCB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgICAgICAgXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWMyICR7dGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lfTtcbiAgICAgICAgXG4gICAgICAgICR7bGlnaHRpbmdTb3VyY2V9XG4gICAgICBcbiAgICAgICAgJHtwb3NpdGlvblNvdXJjZX1cblxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuICAgICAgICBcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMyIHZUZXh0dXJlQ29vcmRpbmF0ZTtcbiAgICAgICAgXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICB2TGlnaHRpbmcgPSBjYWxjdWxhdGVMaWdodGluZygpO1xuXG4gICAgICAgICAgZ2xfUG9zaXRpb24gPSBjYWxjdWxhdGVQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICB2VGV4dHVyZUNvb3JkaW5hdGUgPSAke3RleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZX07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgKTtcblxuZXhwb3J0IGRlZmF1bHQgdmVydGV4U2hhZGVyU291cmNlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVuZGVyZXJEYXRhIGZyb20gXCIuLi8uLi9yZW5kZXJlci9kYXRhXCI7XG5cbmltcG9ydCB7IGFkZCwgZmxhdHRlbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZVJlbmRlcmVyRGF0YSBleHRlbmRzIFJlbmRlcmVyRGF0YSB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSkge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSk7XG5cbiAgICB0aGlzLnZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEgPSB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhO1xuICB9XG5cbiAgZ2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhO1xuICB9XG5cbiAgYWRkVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhID0gZmxhdHRlbih2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhLCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgXG4gICAgY29uc3QgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSA9IFtdLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlckRhdGEgPSBSZW5kZXJlckRhdGEuZnJvbU5vdGhpbmcoVGV4dHVyZVJlbmRlcmVyRGF0YSwgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSk7XG4gICAgXG4gICAgcmV0dXJuIHRleHR1cmVSZW5kZXJlckRhdGE7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IHNhbXBsZXJOYW1lID0gXCJ1U2FtcGxlclwiO1xuXG5jb25zdCBmcmFnbWVudFNoYWRlclNvdXJjZSA9IG5ldyBTdHJpbmcoYFxuICAgICAgICBcbiAgICAgICAgdW5pZm9ybSBzYW1wbGVyMkQgJHtzYW1wbGVyTmFtZX07XG5cbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMyIHZUZXh0dXJlQ29vcmRpbmF0ZTtcbiAgICAgICAgXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICBoaWdocCB2ZWM0IHRleGVsQ29sb3VyID0gdGV4dHVyZTJEKCR7c2FtcGxlck5hbWV9LCB2VGV4dHVyZUNvb3JkaW5hdGUpO1xuICAgICAgICAgIFxuICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQodGV4ZWxDb2xvdXIucmdiICogdkxpZ2h0aW5nLCB0ZXhlbENvbG91ci5hKTsgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZyYWdtZW50U2hhZGVyU291cmNlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVuZGVyZXJCdWZmZXJzIGZyb20gXCIuLi8uLi9yZW5kZXJlci9idWZmZXJzXCI7XG5cbmNvbnN0IHRleHR1cmVDb29yZGluYXRlQ29tcG9uZW50cyA9IDI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHR1cmVSZW5kZXJlckJ1ZmZlcnMgZXh0ZW5kcyBSZW5kZXJlckJ1ZmZlcnMge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyLCB0ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIpIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKTtcblxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyID0gdGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyO1xuICB9XG5cbiAgY3JlYXRlVGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKHRleHR1cmVDb29yZGluYXRlc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih0ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKTtcbiAgfVxuXG4gIGJpbmRUZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIodGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIsIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQ29tcG9uZW50cyk7XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgdGV4dHVyZUNvb3JkaW5hdGVzRGF0YSwgY2FudmFzKSB7XG4gICAgc3VwZXIuY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIGNhbnZhcyk7XG5cbiAgICB0aGlzLmNyZWF0ZVRleHR1cmVDb29yZGluYXRlc0J1ZmZlcih0ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhLCBjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIHN1cGVyLmJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuXG4gICAgdGhpcy5iaW5kVGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHRleHR1cmVSZW5kZXJlckJ1ZmZlcnMgPSBSZW5kZXJlckJ1ZmZlcnMuZnJvbU5vdGhpbmcoVGV4dHVyZVJlbmRlcmVyQnVmZmVycywgdGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKTtcbiAgICBcbiAgICByZXR1cm4gdGV4dHVyZVJlbmRlcmVyQnVmZmVycztcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVW5pZm9ybUxvY2F0aW9ucyBmcm9tIFwiLi4vLi4vbG9jYXRpb25zL3VuaWZvcm1cIjtcblxuaW1wb3J0IHsgc2FtcGxlck5hbWUgfSBmcm9tIFwiLi4vLi4vc291cmNlL3RleHR1cmUvZnJhZ21lbnRTaGFkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMgZXh0ZW5kcyBVbmlmb3JtTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3Iob2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbikge1xuICAgIHN1cGVyKG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24pO1xuICAgIFxuICAgIHRoaXMuc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiA9IHNhbXBsZXJVbmlmb3JtTG9jYXRpb247XG4gIH1cbiAgXG4gIGdldFNhbXBsZXJVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2FtcGxlclVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpIHtcbiAgICBjb25zdCBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBzYW1wbGVyTmFtZSksXG4gICAgICAgICAgdGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMgPSBVbmlmb3JtTG9jYXRpb25zLmZyb21Qcm9ncmFtKFRleHR1cmVVbmlmb3JtTG9jYXRpb25zLCBwcm9ncmFtLCBjYW52YXMsIHNhbXBsZXJVbmlmb3JtTG9jYXRpb24pO1xuICAgIFxuICAgIHJldHVybiB0ZXh0dXJlVW5pZm9ybUxvY2F0aW9ucztcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXR0cmlidXRlTG9jYXRpb25zIGZyb20gXCIuLi8uLi9sb2NhdGlvbnMvYXR0cmlidXRlXCI7XG5cbmltcG9ydCB7IHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZSB9IGZyb20gXCIuLi8uLi9zb3VyY2UvdGV4dHVyZS92ZXJ0ZXhTaGFkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucyBleHRlbmRzIEF0dHJpYnV0ZUxvY2F0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24pO1xuICAgIFxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIGdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcykge1xuICAgIGNvbnN0IHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lKSxcbiAgICAgICAgICB0ZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zID0gQXR0cmlidXRlTG9jYXRpb25zLmZyb21Qcm9ncmFtKFRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMsIHByb2dyYW0sIGNhbnZhcywgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbik7XG4gICAgXG4gICAgcmV0dXJuIHRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnM7XG4gIH0gIFxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVuZGVyZXIgZnJvbSBcIi4uL3JlbmRlcmVyXCI7XG5pbXBvcnQgdmVydGV4U2hhZGVyU291cmNlIGZyb20gXCIuL3NvdXJjZS90ZXh0dXJlL3ZlcnRleFNoYWRlclwiO1xuaW1wb3J0IFRleHR1cmVSZW5kZXJlckRhdGEgZnJvbSBcIi4uL3JlbmRlcmVyL2RhdGEvdGV4dHVyZVwiO1xuaW1wb3J0IGZyYWdtZW50U2hhZGVyU291cmNlIGZyb20gXCIuL3NvdXJjZS90ZXh0dXJlL2ZyYWdtZW50U2hhZGVyXCI7XG5pbXBvcnQgVGV4dHVyZVJlbmRlcmVyQnVmZmVycyBmcm9tIFwiLi4vcmVuZGVyZXIvYnVmZmVycy90ZXh0dXJlXCI7XG5pbXBvcnQgVGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMgZnJvbSBcIi4vbG9jYXRpb25zL3RleHR1cmUvdW5pZm9ybVwiO1xuaW1wb3J0IFRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMgZnJvbSBcIi4vbG9jYXRpb25zL3RleHR1cmUvYXR0cmlidXRlXCI7XG5cbmltcG9ydCB7IGNyZWF0ZVByb2dyYW0gfSBmcm9tIFwiLi4vcmVuZGVyZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZVJlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuICBnZXRUZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZUxvY2F0aW9ucyA9IHRoaXMuZ2V0QXR0cmlidXRlTG9jYXRpb25zKCksXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IGF0dHJpYnV0ZUxvY2F0aW9ucy5nZXRUZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKCk7XG5cbiAgICByZXR1cm4gdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgcmVuZGVyZXJEYXRhID0gdGhpcy5nZXRSZW5kZXJlckRhdGEoKSxcbiAgICAgICAgICByZW5kZXJlckJ1ZmZlcnMgPSB0aGlzLmdldFJlbmRlcmVyQnVmZmVycygpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4UG9zaXRpb25zRGF0YSgpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleE5vcm1hbHNEYXRhKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4SW5kZXhlc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEoKTtcblxuICAgIHJlbmRlcmVyQnVmZmVycy5jcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKTtcblxuICAgIHJlbmRlcmVyQnVmZmVycy5iaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIHVzZVRleHR1cmUoaW5kZXgsIGNhbnZhcykge1xuICAgIGNvbnN0IHVuaWZvcm1Mb2NhdGlvbnMgPSB0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbnMoKSxcbiAgICAgICAgICBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uID0gdW5pZm9ybUxvY2F0aW9ucy5nZXRTYW1wbGVyVW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSA9IGluZGV4OyAvLy9cblxuICAgIGNhbnZhcy5zZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUoc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiwgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MsIGNhbnZhcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgZmFjZXRzID0gW10sXG4gICAgICAgICAgcHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyU291cmNlLCBmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSxcbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXJEYXRhID0gVGV4dHVyZVJlbmRlcmVyRGF0YS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlckJ1ZmZlcnMgPSBUZXh0dXJlUmVuZGVyZXJCdWZmZXJzLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMgPSBUZXh0dXJlVW5pZm9ybUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIHRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMgPSBUZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgcmVuZGVyZXJEYXRhID0gdGV4dHVyZVJlbmRlcmVyRGF0YSwgIC8vL1xuICAgICAgICAgIHJlbmRlcmVyQnVmZmVycyA9IHRleHR1cmVSZW5kZXJlckJ1ZmZlcnMsIC8vL1xuICAgICAgICAgIHVuaWZvcm1Mb2NhdGlvbnMgPSB0ZXh0dXJlVW5pZm9ybUxvY2F0aW9ucywgLy8vXG4gICAgICAgICAgYXR0cmlidXRlTG9jYXRpb25zID0gdGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucywgLy8vXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyID0gbmV3IENsYXNzKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIGNhbnZhcy5lbmFibGVBbmlzb3Ryb3BpY0ZpbHRlcmluZygpOyAgLy8vXG5cbiAgICByZXR1cm4gdGV4dHVyZVJlbmRlcmVyO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0dXJlUmVuZGVyZXIgZnJvbSBcIi4uLy4uL3JlbmRlcmVyL3RleHR1cmVcIjtcblxuaW1wb3J0IHsgYWRkLCBmaXJzdCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VzVGV4dHVyZVJlbmRlcmVyIGV4dGVuZHMgVGV4dHVyZVJlbmRlcmVyIHtcblx0Y29uc3RydWN0b3IoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zLCBpbWFnZU5hbWVzLCBmYWNldHNNYXAsIG9mZnNldHMpIHtcblx0XHRzdXBlcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMpO1xuXG5cdFx0dGhpcy5pbWFnZU5hbWVzID0gaW1hZ2VOYW1lcztcblxuXHRcdHRoaXMuZmFjZXRzTWFwID0gZmFjZXRzTWFwO1xuXG5cdFx0dGhpcy5vZmZzZXRzID0gb2Zmc2V0cztcblx0fVxuXG5cdGFkZEZhY2V0cyhmYWNldHMpIHtcblx0ICBjb25zdCB0ZXh0dXJlZEZhY2V0cyA9IGZhY2V0cywgIC8vL1xuICAgICAgICAgIHRleHR1cmVkRmFjZXRzTGVuZ3RoID0gdGV4dHVyZWRGYWNldHMubGVuZ3RoO1xuXG5cdCAgaWYgKHRleHR1cmVkRmFjZXRzTGVuZ3RoID4gMCkge1xuXHQgICAgY29uc3QgZmlyc3RUZXh0dXJlZEZhY2V0ID0gZmlyc3QodGV4dHVyZWRGYWNldHMpLFxuICAgICAgICAgICAgdGV4dHVyZWRGYWNldCA9IGZpcnN0VGV4dHVyZWRGYWNldCwgLy8vXG4gICAgICAgICAgICBpbWFnZU5hbWUgPSB0ZXh0dXJlZEZhY2V0LmdldEltYWdlTmFtZSgpLFxuICAgICAgICAgICAgZmFjZXRzID0gdGhpcy5mYWNldHNNYXBbaW1hZ2VOYW1lXTtcblxuXHQgICAgYWRkKGZhY2V0cywgdGV4dHVyZWRGYWNldHMpXG4gICAgfVxuICB9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbmRleGVzID0gW10sXG4gICAgICAgICAgdmVydGV4Tm9ybWFscyA9IFtdLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9ucyA9IFtdLFxuICAgICAgICAgIHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gW107XG5cbiAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgdGhpcy5pbWFnZU5hbWVzLmZvckVhY2goKGltYWdlTmFtZSkgPT4ge1xuICAgICAgY29uc3QgZmFjZXRzID0gdGhpcy5mYWNldHNNYXBbaW1hZ2VOYW1lXTtcblxuICAgICAgZmFjZXRzLmZvckVhY2goKGZhY2V0KSA9PiB7XG4gICAgICAgIGNvbnN0IHRleHR1cmVkRmFjZXQgPSBmYWNldCwgIC8vL1xuICAgICAgICAgICAgICBmYWNldFZlcnRleEluZGV4ZXMgPSBmYWNldC5nZXRWZXJ0ZXhJbmRleGVzKGluZGV4KSxcbiAgICAgICAgICAgICAgZmFjZXRWZXJ0ZXhOb3JtYWxzID0gZmFjZXQuZ2V0VmVydGV4Tm9ybWFscygpLFxuICAgICAgICAgICAgICBmYWNldFZlcnRleFBvc2l0aW9ucyA9IGZhY2V0LmdldFZlcnRleFBvc2l0aW9ucygpLFxuICAgICAgICAgICAgICB0ZXh0dXJlZEZhY2V0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlZEZhY2V0LmdldFRleHR1cmVDb29yZGluYXRlVHVwbGVzKCksXG4gICAgICAgICAgICAgIHRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVkRmFjZXRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlczsgIC8vL1xuXG4gICAgICAgIGFkZCh2ZXJ0ZXhJbmRleGVzLCBmYWNldFZlcnRleEluZGV4ZXMpO1xuICAgICAgICBhZGQodmVydGV4Tm9ybWFscywgZmFjZXRWZXJ0ZXhOb3JtYWxzKTtcbiAgICAgICAgYWRkKHZlcnRleFBvc2l0aW9ucywgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMpO1xuICAgICAgICBhZGQodmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIHRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG5cbiAgICAgICAgaW5kZXgrKztcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBvZmZzZXQgPSBpbmRleCAqIDM7ICAvLy9cblxuICAgICAgdGhpcy5vZmZzZXRzLnB1c2gob2Zmc2V0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlbmRlcmVyRGF0YSA9IHRoaXMuZ2V0UmVuZGVyZXJEYXRhKCk7XG5cbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4UG9zaXRpb25zKHZlcnRleFBvc2l0aW9ucyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcblxuICAgIHN1cGVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcbiAgfVxuXG4gIHJlbmRlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBjYW52YXMpIHtcbiAgICBjb25zdCBwcm9ncmFtID0gdGhpcy5nZXRQcm9ncmFtKCk7XG5cbiAgICBjYW52YXMudXNlUHJvZ3JhbShwcm9ncmFtKTtcblxuICAgIHRoaXMuYmluZEJ1ZmZlcnMoY2FudmFzKTtcblxuICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpczsgIC8vL1xuXG4gICAgY2FudmFzLnJlbmRlcihyZW5kZXJlciwgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7XG5cbiAgICBsZXQgc3RhcnQsXG4gICAgICAgIGZpbmlzaCA9IDA7ICAvLy9cblxuICAgIHRoaXMub2Zmc2V0cy5mb3JFYWNoKChvZmZzZXQsIGluZGV4KSA9PiB7XG4gICAgICBzdGFydCA9IGZpbmlzaDsgLy8vXG5cbiAgICAgIGZpbmlzaCA9IG9mZnNldDsgIC8vL1xuXG4gICAgICB0aGlzLnVzZVRleHR1cmUoaW5kZXgsIGNhbnZhcyk7XG5cbiAgICAgIGNhbnZhcy5kcmF3RWxlbWVudHMoc3RhcnQsIGZpbmlzaCk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUltYWdlc0ltYWdlTmFtZXNBbmRJbWFnZVRpbGluZyhpbWFnZXMsIGltYWdlTmFtZXMsIGltYWdlVGlsaW5nLCBjYW52YXMpIHtcbiAgICBjb25zdCBvZmZzZXRzID0gW10sXG4gICAgICAgICAgZmFjZXRzTWFwID0ge307XG5cbiAgICBpbWFnZXMuZm9yRWFjaCgoaW1hZ2UsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBmYWNldHMgPSBbXSxcbiAgICAgICAgICAgIHJlcGVhdCA9IGltYWdlVGlsaW5nLCAvLy9cbiAgICAgICAgICAgIGltYWdlTmFtZSA9IGltYWdlTmFtZXNbaW5kZXhdO1xuXG4gICAgICBmYWNldHNNYXBbaW1hZ2VOYW1lXSA9IGZhY2V0cztcblxuICAgICAgY2FudmFzLmNyZWF0ZVRleHR1cmUoaW1hZ2UsIGluZGV4LCByZXBlYXQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgaW1hZ2VzVGV4dHVyZVJlbmRlcmVyID0gVGV4dHVyZVJlbmRlcmVyLmZyb21Ob3RoaW5nKEltYWdlc1RleHR1cmVSZW5kZXJlciwgY2FudmFzLCBpbWFnZU5hbWVzLCBmYWNldHNNYXAsIG9mZnNldHMpO1xuXG4gICAgcmV0dXJuIGltYWdlc1RleHR1cmVSZW5kZXJlcjtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dHVyZVJlbmRlcmVyIGZyb20gXCIuLi8uLi9yZW5kZXJlci90ZXh0dXJlXCI7XG5cbmltcG9ydCB7IGFkZCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIgZXh0ZW5kcyBUZXh0dXJlUmVuZGVyZXIge1xuXHRjb25zdHJ1Y3RvcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMsIGltYWdlTWFwSlNPTikge1xuXHRcdHN1cGVyKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucyk7XG5cblx0XHR0aGlzLmltYWdlTWFwSlNPTiA9IGltYWdlTWFwSlNPTjtcblx0fVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzID0gW10sXG4gICAgICAgICAgdmVydGV4Tm9ybWFscyA9IFtdLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9ucyA9IFtdLFxuICAgICAgICAgIHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gW107XG5cbiAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCB0ZXh0dXJlZEZhY2V0ID0gZmFjZXQsICAvLy9cbiAgICAgICAgICAgIGZhY2V0VmVydGV4SW5kZXhlcyA9IGZhY2V0LmdldFZlcnRleEluZGV4ZXMoaW5kZXgpLFxuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhOb3JtYWxzID0gZmFjZXQuZ2V0VmVydGV4Tm9ybWFscygpLFxuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMgPSBmYWNldC5nZXRWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICAgIG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZWRGYWNldC5nZXRNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh0aGlzLmltYWdlTWFwSlNPTiksXG4gICAgICAgICAgICB0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlczsgLy8vXG5cbiAgICAgIGFkZCh2ZXJ0ZXhJbmRleGVzLCBmYWNldFZlcnRleEluZGV4ZXMpO1xuICAgICAgYWRkKHZlcnRleE5vcm1hbHMsIGZhY2V0VmVydGV4Tm9ybWFscyk7XG4gICAgICBhZGQodmVydGV4UG9zaXRpb25zLCBmYWNldFZlcnRleFBvc2l0aW9ucyk7XG4gICAgICBhZGQodmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIHRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZW5kZXJlckRhdGEgPSB0aGlzLmdldFJlbmRlcmVyRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG5cbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCByZW5kZXJlckJ1ZmZlcnMgPSB0aGlzLmdldFJlbmRlcmVyQnVmZmVycygpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRUZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKCk7XG5cbiAgICByZW5kZXJlckJ1ZmZlcnMuYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gIH1cblxuICB1c2VUZXh0dXJlKGluZGV4LCBjYW52YXMpIHtcbiAgICBjb25zdCB1bmlmb3JtTG9jYXRpb25zID0gdGhpcy5nZXRVbmlmb3JtTG9jYXRpb25zKCksXG4gICAgICAgICAgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiA9IHVuaWZvcm1Mb2NhdGlvbnMuZ2V0U2FtcGxlclVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUgPSBpbmRleDsgLy8vXG5cbiAgICBjYW52YXMuc2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKHNhbXBsZXJVbmlmb3JtTG9jYXRpb24sIHNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUpO1xuICB9XG5cbiAgcmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIGNhbnZhcykge1xuICAgIGNvbnN0IHByb2dyYW0gPSB0aGlzLmdldFByb2dyYW0oKTtcblxuICAgIGNhbnZhcy51c2VQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgdGhpcy5iaW5kQnVmZmVycyhjYW52YXMpO1xuXG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzOyAgLy8vXG5cbiAgICBjYW52YXMucmVuZGVyKHJlbmRlcmVyLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcblxuICAgIGNvbnN0IHJlbmRlcmVyRGF0YSA9IHRoaXMuZ2V0UmVuZGVyZXJEYXRhKCksXG4gICAgICAgICAgY291bnQgPSByZW5kZXJlckRhdGEuZ2V0Q291bnQoKSxcbiAgICAgICAgICBpbmRleCA9IDAsXG4gICAgICAgICAgc3RhcnQgPSAwLFxuICAgICAgICAgIGZpbmlzaCA9IGNvdW50OyAvLy9cblxuICAgIHRoaXMudXNlVGV4dHVyZShpbmRleCwgY2FudmFzKTtcblxuICAgIGNhbnZhcy5kcmF3RWxlbWVudHMoc3RhcnQsIGZpbmlzaCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUltYWdlTWFwQW5kSW1hZ2VNYXBKU09OKGltYWdlTWFwLCBpbWFnZU1hcEpTT04sIGNhbnZhcykge1xuICAgIGNvbnN0IGltYWdlID0gaW1hZ2VNYXAsIC8vL1xuICAgICAgICAgIGluZGV4ID0gMCxcbiAgICAgICAgICByZXBlYXQgPSBmYWxzZTtcblxuICAgIGNhbnZhcy5jcmVhdGVUZXh0dXJlKGltYWdlLCBpbmRleCwgcmVwZWF0KTtcblxuICAgIGNvbnN0IGltYWdlTWFwVGV4dHVyZVJlbmRlcmVyID0gVGV4dHVyZVJlbmRlcmVyLmZyb21Ob3RoaW5nKEltYWdlTWFwVGV4dHVyZVJlbmRlcmVyLCBjYW52YXMsIGltYWdlTWFwSlNPTik7XG5cbiAgICByZXR1cm4gaW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXI7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hc2sgZnJvbSBcIi4vbWFza1wiO1xuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcbmltcG9ydCBDb2xvdXJSZW5kZXJlciBmcm9tIFwiLi4vcmVuZGVyZXIvY29sb3VyXCI7XG5pbXBvcnQgSW1hZ2VzVGV4dHVyZVJlbmRlcmVyIGZyb20gXCIuLi9yZW5kZXJlci90ZXh0dXJlL2ltYWdlc1wiO1xuaW1wb3J0IEltYWdlTWFwVGV4dHVyZVJlbmRlcmVyIGZyb20gXCIuLi9yZW5kZXJlci90ZXh0dXJlL2ltYWdlTWFwXCI7XG5cbmltcG9ydCB7IGVsZW1lbnRzRnJvbUNoaWxkRWxlbWVudHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFydCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihpbWFnZXMsIGltYWdlTWFwLCBpbWFnZU5hbWVzLCBpbWFnZVRpbGluZywgaW1hZ2VNYXBKU09OLCBjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuaW1hZ2VzID0gaW1hZ2VzO1xuICAgIHRoaXMuaW1hZ2VNYXAgPSBpbWFnZU1hcDtcbiAgICB0aGlzLmltYWdlTmFtZXMgPSBpbWFnZU5hbWVzO1xuICAgIHRoaXMuaW1hZ2VUaWxpbmcgPSBpbWFnZVRpbGluZztcbiAgICB0aGlzLmltYWdlTWFwSlNPTiA9IGltYWdlTWFwSlNPTjtcbiAgICB0aGlzLmNvbG91clJlbmRlcmVyID0gY29sb3VyUmVuZGVyZXI7XG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIgPSB0ZXh0dXJlUmVuZGVyZXI7XG4gIH1cbiAgXG4gIGluaXRpYWxpc2UoY2FudmFzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgY29sb3VyUmVuZGVyZXIgPSBDb2xvdXJSZW5kZXJlci5mcm9tTm90aGluZyhjYW52YXMpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKSxcbiAgICAgICAgICBtYXNrcyA9IGVsZW1lbnRzRnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cywgTWFzayk7XG5cbiAgICBsZXQgdGV4dHVyZVJlbmRlcmVyID0gbnVsbDtcblxuICAgIGlmICh0aGlzLmltYWdlcyAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaW1hZ2VzVGV4dHVyZVJlbmRlcmVyID0gSW1hZ2VzVGV4dHVyZVJlbmRlcmVyLmZyb21JbWFnZXNJbWFnZU5hbWVzQW5kSW1hZ2VUaWxpbmcodGhpcy5pbWFnZXMsIHRoaXMuaW1hZ2VOYW1lcywgdGhpcy5pbWFnZVRpbGluZywgY2FudmFzKTtcblxuICAgICAgdGV4dHVyZVJlbmRlcmVyID0gaW1hZ2VzVGV4dHVyZVJlbmRlcmVyOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW1hZ2VNYXAgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGltYWdlTWFwVGV4dHVyZVJlbmRlcmVyID0gSW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIuZnJvbUltYWdlTWFwQW5kSW1hZ2VNYXBKU09OKHRoaXMuaW1hZ2VNYXAsIHRoaXMuaW1hZ2VNYXBKU09OLCBjYW52YXMpO1xuXG4gICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBpbWFnZU1hcFRleHR1cmVSZW5kZXJlcjsgIC8vL1xuICAgIH1cblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgICBjaGlsZEVsZW1lbnQuY3JlYXRlRmFjZXRzKG1hcmdpbk9mRXJyb3IpO1xuICAgIH0pO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICAgIGNoaWxkRWxlbWVudC5tYXNrRmFjZXRzKG1hc2tzLCBtYXJnaW5PZkVycm9yKTtcbiAgICB9KTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgICBjaGlsZEVsZW1lbnQuYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpO1xuICAgIH0pO1xuXG4gICAgaWYgKGNvbG91clJlbmRlcmVyICE9PSBudWxsKSB7XG4gICAgICBjb2xvdXJSZW5kZXJlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG4gICAgfVxuXG4gICAgaWYgKHRleHR1cmVSZW5kZXJlciAhPT0gbnVsbCkge1xuICAgICAgdGV4dHVyZVJlbmRlcmVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbG91clJlbmRlcmVyID0gY29sb3VyUmVuZGVyZXI7XG5cbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlciA9IHRleHR1cmVSZW5kZXJlcjtcbiAgfVxuXG4gIHJlbmRlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBjYW52YXMpIHtcbiAgICB0aGlzLmNvbG91clJlbmRlcmVyICYmIHRoaXMuY29sb3VyUmVuZGVyZXIucmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIGNhbnZhcyk7ICAvLy9cblxuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyICYmIHRoaXMudGV4dHVyZVJlbmRlcmVyLnJlbmRlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBjYW52YXMpOyAgLy8vXG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW1hZ2VzID0gbnVsbCwgaW1hZ2VNYXAgPSBudWxsLCBpbWFnZU5hbWVzID0gbnVsbCwgaW1hZ2VUaWxpbmcgPSBmYWxzZSwgaW1hZ2VNYXBKU09OID0gbnVsbCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlciA9IG51bGwsICAvLy9cbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBudWxsLCAvLy9cbiAgICAgICAgICBwYXJ0ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhQYXJ0LCBwcm9wZXJ0aWVzLCBpbWFnZXMsIGltYWdlTWFwLCBpbWFnZU5hbWVzLCBpbWFnZVRpbGluZywgaW1hZ2VNYXBKU09OLCBjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKTtcblxuICAgIHJldHVybiBwYXJ0O1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmltcG9ydCB7IERFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgREVGQVVMVF9aX0ZBUiwgREVGQVVMVF9aX05FQVIsIERFRkFVTFRfRklFTERfT0ZfVklFVyB9IGZyb20gXCIuLi9kZWZhdWx0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW1lcmEgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoekZhciwgek5lYXIsIGZpZWxkT2ZWaWV3KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuekZhciA9IHpGYXI7XG4gICAgdGhpcy56TmVhciA9IHpOZWFyO1xuICAgIHRoaXMuZmllbGRPZlZpZXcgPSBmaWVsZE9mVmlldztcbiAgfVxuXG4gIGdldFpGYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuekZhcjtcbiAgfVxuXG4gIGdldFpOZWFyKCkge1xuICAgIHJldHVybiB0aGlzLnpOZWFyO1xuICB9XG5cbiAgZ2V0RmllbGRPZlZpZXcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmllbGRPZlZpZXc7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB7IGZpZWxkT2ZWaWV3ID0gREVGQVVMVF9GSUVMRF9PRl9WSUVXIH0gPSBwcm9wZXJ0aWVzO1xuXG4gICAgZmllbGRPZlZpZXcgKj0gREVHUkVFU19UT19SQURJQU5TX01VTFRJUExJRVI7IC8vL1xuXG4gICAgY29uc3QgeyB6RmFyID0gREVGQVVMVF9aX0ZBUiwgek5lYXIgPSBERUZBVUxUX1pfTkVBUiB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjYW1lcmEgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCB6RmFyLCB6TmVhciwgZmllbGRPZlZpZXcsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gY2FtZXJhO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBXSEVFTF9FVkVOVF9UWVBFID0gXCJ3aGVlbFwiO1xuZXhwb3J0IGNvbnN0IEtFWVVQX0VWRU5UX1RZUEUgPSBcImtleXVwXCI7XG5leHBvcnQgY29uc3QgS0VZRE9XTl9FVkVOVF9UWVBFID0gXCJrZXlkb3duXCI7XG5leHBvcnQgY29uc3QgTU9VU0VVUF9FVkVOVF9UWVBFID0gXCJtb3VzZXVwXCI7XG5leHBvcnQgY29uc3QgTU9VU0VET1dOX0VWRU5UX1RZUEUgPSBcIm1vdXNlZG93blwiO1xuZXhwb3J0IGNvbnN0IE1PVVNFTU9WRV9FVkVOVF9UWVBFID0gXCJtb3VzZW1vdmVcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsga2V5Q29kZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IEtFWVVQX0VWRU5UX1RZUEUsIEtFWURPV05fRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmNvbnN0IHsgRVNDQVBFX0tFWV9DT0RFLCBTSElGVF9LRVlfQ09ERSB9ID0ga2V5Q29kZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleUV2ZW50cyB7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXJzLCBzaGlmdEtleURvd24pIHtcbiAgICB0aGlzLmhhbmRsZXJzID0gaGFuZGxlcnM7XG4gICAgdGhpcy5zaGlmdEtleURvd24gPSBzaGlmdEtleURvd247XG4gIH1cblxuICBnZXRIYW5kbGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVycztcbiAgfVxuXG4gIGlzU2hpZnRLZXlEb3duKCkge1xuICAgIHJldHVybiB0aGlzLnNoaWZ0S2V5RG93bjtcbiAgfVxuXG4gIGtleVVwRXZlbnRMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gU0hJRlRfS0VZX0NPREUpIHtcbiAgICAgIHRoaXMuc2hpZnRLZXlEb3duID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKHRoaXMuc2hpZnRLZXlEb3duKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGtleURvd25FdmVudExpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgIGlmIChrZXlDb2RlID09PSBTSElGVF9LRVlfQ09ERSkge1xuICAgICAgdGhpcy5zaGlmdEtleURvd24gPSB0cnVlO1xuXG4gICAgICB0aGlzLmhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlcih0aGlzLnNoaWZ0S2V5RG93bik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBhZGRTaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlIYW5kbGVyKSB7XG4gICAgY29uc3QgaGFuZGxlciA9IHNoaWZ0S2V5SGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5oYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICB9XG5cbiAgYWRkRXNjYXBlS2V5RG93bkhhbmRsZXIoZXNjYXBlS2V5RG93bkhhbmRsZXIpIHtcbiAgICBjb25zdCBkb2N1bWVudERPTUVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7ICAvLy9cblxuICAgIGRvY3VtZW50RE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKEtFWURPV05fRVZFTlRfVFlQRSwgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgICBpZiAoa2V5Q29kZSA9PT0gRVNDQVBFX0tFWV9DT0RFKSB7XG4gICAgICAgIGVzY2FwZUtleURvd25IYW5kbGVyKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIGNvbnN0IGRvY3VtZW50RE9NRWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDsgIC8vL1xuXG4gICAgZG9jdW1lbnRET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoS0VZVVBfRVZFTlRfVFlQRSwgdGhpcy5rZXlVcEV2ZW50TGlzdGVuZXIpO1xuXG4gICAgZG9jdW1lbnRET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoS0VZRE9XTl9FVkVOVF9UWVBFLCB0aGlzLmtleURvd25FdmVudExpc3RlbmVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IFtdLFxuICAgICAgICAgIHNoaWZ0S2V5RG93biA9IGZhbHNlLCAgLy8vXG4gICAgICAgICAga2V5RXZlbnRzID0gbmV3IEtleUV2ZW50cyhoYW5kbGVycywgc2hpZnRLZXlEb3duKTtcblxuICAgIHJldHVybiBrZXlFdmVudHM7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgV0hFRUxfRVZFTlRfVFlQRSwgTU9VU0VVUF9FVkVOVF9UWVBFLCBNT1VTRURPV05fRVZFTlRfVFlQRSwgTU9VU0VNT1ZFX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vZXZlbnRUeXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3VzZUV2ZW50cyB7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXJzTWFwLCBtb3VzZURvd24pIHtcbiAgICB0aGlzLmhhbmRsZXJzTWFwID0gaGFuZGxlcnNNYXA7XG4gICAgdGhpcy5tb3VzZURvd24gPSBtb3VzZURvd247XG4gIH1cblxuICB3aGVlbEV2ZW50TGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIFdIRUVMX0VWRU5UX1RZUEUgXSxcbiAgICAgICAgICBtb3VzZVdoZWVsRGVsdGEgPSBtb3VzZVdoZWVsRGVsdGFGcm9tRXZlbnQoZXZlbnQpO1xuXG4gICAgaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgaGFuZGxlcihtb3VzZVdoZWVsRGVsdGEpO1xuICAgIH0pO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIG1vdXNlRXZlbnRMaXN0ZW5lciA9IChldmVudCwgZXZlbnRUeXBlKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwW2V2ZW50VHlwZV0sXG4gICAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXNGcm9tRXZlbnQoZXZlbnQpO1xuXG4gICAgaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgaGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCB0aGlzLm1vdXNlRG93bik7XG4gICAgfSk7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgbW91c2VVcEV2ZW50TGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcbiAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIoZXZlbnQsIE1PVVNFVVBfRVZFTlRfVFlQRSk7XG4gIH1cblxuXHRtb3VzZURvd25FdmVudExpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIoZXZlbnQsIE1PVVNFRE9XTl9FVkVOVF9UWVBFKTtcbiAgfVxuXG5cdG1vdXNlTW92ZUV2ZW50TGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcbiAgICB0aGlzLm1vdXNlRXZlbnRMaXN0ZW5lcihldmVudCwgTU9VU0VNT1ZFX0VWRU5UX1RZUEUpO1xuICB9XG5cbiAgYWRkTW91c2VVcEhhbmRsZXIobW91c2VVcEhhbmRsZXIpIHtcbiAgICBjb25zdCBtb3VzZVVwSGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRVVQX0VWRU5UX1RZUEUgXTtcblxuICAgIG1vdXNlVXBIYW5kbGVycy5wdXNoKG1vdXNlVXBIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlRG93bkhhbmRsZXIobW91c2VEb3duSGFuZGxlcikge1xuICAgIGNvbnN0IG1vdXNlRG93bkhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VET1dOX0VWRU5UX1RZUEUgXTtcblxuICAgIG1vdXNlRG93bkhhbmRsZXJzLnB1c2gobW91c2VEb3duSGFuZGxlcik7XG4gIH1cblxuICBhZGRNb3VzZU1vdmVIYW5kbGVyKG1vdXNlTW92ZUhhbmRsZXIpIHtcbiAgICBjb25zdCBtb3VzZU1vdmVIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFTU9WRV9FVkVOVF9UWVBFIF07XG5cbiAgICBtb3VzZU1vdmVIYW5kbGVycy5wdXNoKG1vdXNlTW92ZUhhbmRsZXIpO1xuICB9XG5cbiAgYWRkTW91c2VXaGVlbEhhbmRsZXIobW91c2VXaGVlbEhhbmRsZXIpIHtcbiAgICBjb25zdCBtb3VzZVdoZWVsSGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwWyBXSEVFTF9FVkVOVF9UWVBFIF07XG5cbiAgICBtb3VzZVdoZWVsSGFuZGxlcnMucHVzaChtb3VzZVdoZWVsSGFuZGxlcik7XG4gIH1cblxuICBpbml0aWFsaXNlKGNhbnZhcykge1xuICAgICAgY29uc3QgY2FudmFzRE9NRWxlbWVudCA9IGNhbnZhcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICB0aGlzLmhhbmRsZXJzTWFwWyBXSEVFTF9FVkVOVF9UWVBFIF0gPSBbXTtcbiAgICB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRVVQX0VWRU5UX1RZUEUgXSA9IFtdO1xuICAgIHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFRE9XTl9FVkVOVF9UWVBFIF0gPSBbXTtcbiAgICB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRU1PVkVfRVZFTlRfVFlQRSBdID0gW107XG5cbiAgICBjYW52YXNET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoV0hFRUxfRVZFTlRfVFlQRSwgdGhpcy53aGVlbEV2ZW50TGlzdGVuZXIpO1xuICAgIGNhbnZhc0RPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihNT1VTRVVQX0VWRU5UX1RZUEUsIHRoaXMubW91c2VVcEV2ZW50TGlzdGVuZXIpO1xuICAgIGNhbnZhc0RPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihNT1VTRURPV05fRVZFTlRfVFlQRSwgdGhpcy5tb3VzZURvd25FdmVudExpc3RlbmVyKTtcbiAgICBjYW52YXNET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoTU9VU0VNT1ZFX0VWRU5UX1RZUEUsIHRoaXMubW91c2VNb3ZlRXZlbnRMaXN0ZW5lcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgaGFuZGxlcnNNYXAgPSB7fSxcbiAgICAgICAgICBtb3VzZURvd24gPSBmYWxzZSwgIC8vL1xuXHRcdFx0XHRcdG1vdXNlRXZlbnRzID0gbmV3IE1vdXNlRXZlbnRzKGhhbmRsZXJzTWFwLCBtb3VzZURvd24pO1xuXG4gICAgcmV0dXJuIG1vdXNlRXZlbnRzO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1vdXNlV2hlZWxEZWx0YUZyb21FdmVudChldmVudCkge1xuICBjb25zdCB7IHdoZWVsRGVsdGEgfSA9IGV2ZW50LFxuICAgICAgICBtb3VzZVdoZWVsRGVsdGEgPSBNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgd2hlZWxEZWx0YSkpOyAvLy9cblxuICByZXR1cm4gbW91c2VXaGVlbERlbHRhO1xufVxuXG5mdW5jdGlvbiBtb3VzZUNvb3JkaW5hdGVzRnJvbUV2ZW50KGV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0LCBjbGllbnRYLCBjbGllbnRZIH0gPSBldmVudCxcbiAgICAgICAgY2FudmFzRE9NRWxlbWVudCA9IHRhcmdldCwgIC8vL1xuICAgICAgICBib3VuZGluZ0NsaWVudFJlY3QgPSBjYW52YXNET01FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICB7IHRvcCwgbGVmdCB9ID0gYm91bmRpbmdDbGllbnRSZWN0LFxuICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gW1xuICAgICAgICAgIGNsaWVudFggLSBsZWZ0LFxuICAgICAgICAgIHRvcCAtIGNsaWVudFlcbiAgICAgICAgXTtcblxuICByZXR1cm4gbW91c2VDb29yZGluYXRlcztcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEtleUV2ZW50cyBmcm9tIFwiLi9rZXlFdmVudHNcIjtcbmltcG9ydCBNb3VzZUV2ZW50cyBmcm9tIFwiLi9tb3VzZUV2ZW50c1wiO1xuXG5pbXBvcnQgeyB6ZXJvMiwgc3VidHJhY3QyIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5wdXQge1xuICBjb25zdHJ1Y3RvcihoYW5kbGVycywga2V5RXZlbnRzLCBtb3VzZUV2ZW50cywgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5oYW5kbGVycyA9IGhhbmRsZXJzO1xuICAgIHRoaXMua2V5RXZlbnRzID0ga2V5RXZlbnRzO1xuICAgIHRoaXMubW91c2VFdmVudHMgPSBtb3VzZUV2ZW50cztcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgbW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCBtb3VzZURvd24sIGNhbnZhcykge1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gdGhpcy5tb3VzZUNvb3JkaW5hdGVzOyAgLy8vXG5cbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuXG4gICAgaWYgKHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG1vdXNlRG93bikge1xuICAgICAgY29uc3QgbW91c2VXaGVlbERlbHRhID0gMCwgIC8vL1xuICAgICAgICAgICAgc2hpZnRLZXlEb3duID0gdGhpcy5rZXlFdmVudHMuaXNTaGlmdEtleURvd24oKSxcbiAgICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHN1YnRyYWN0Mih0aGlzLm1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgICAgdGhpcy5oYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93bik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBtb3VzZVdoZWVsSGFuZGxlcihtb3VzZVdoZWVsRGVsdGEsIGNhbnZhcykge1xuICAgIGNvbnN0IHNoaWZ0S2V5RG93biA9IHRoaXMua2V5RXZlbnRzLmlzU2hpZnRLZXlEb3duKCksXG4gICAgICAgICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gemVybzIoKTtcblxuICAgIHRoaXMuaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgaGFuZGxlcihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZFVzZXJJbnB1dEhhbmRsZXIodXNlcklucHV0SGFuZGxlcikge1xuICAgIGNvbnN0IGhhbmRsZXIgPSB1c2VySW5wdXRIYW5kbGVyOyAvLy9cblxuICAgIHRoaXMuaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgfVxuXG4gIGFkZEVzY2FwZUtleURvd25IYW5kbGVyKGVzY2FwZUtleURvd25IYW5kbGVyKSB7IHRoaXMua2V5RXZlbnRzLmFkZEVzY2FwZUtleURvd25IYW5kbGVyKGVzY2FwZUtleURvd25IYW5kbGVyKTsgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzKSB7XG4gICAgY29uc3QgbW91c2VNb3ZlSGFuZGxlciA9IHRoaXMubW91c2VNb3ZlSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlV2hlZWxIYW5kbGVyID0gdGhpcy5tb3VzZVdoZWVsSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5rZXlFdmVudHMuaW5pdGlhbGlzZSgpO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50cy5pbml0aWFsaXNlKGNhbnZhcyk7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRzLmFkZE1vdXNlTW92ZUhhbmRsZXIobW91c2VNb3ZlSGFuZGxlcik7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRzLmFkZE1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IFtdLFxuICAgICAgICAgIGtleUV2ZW50cyA9IEtleUV2ZW50cy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG1vdXNlRXZlbnRzID0gTW91c2VFdmVudHMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IG51bGwsICAvLy9cbiAgICAgICAgICB1c2VySW5wdXQgPSBuZXcgVXNlcklucHV0KGhhbmRsZXJzLCBrZXlFdmVudHMsIG1vdXNlRXZlbnRzLCBtb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHVzZXJJbnB1dDtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGFydCBmcm9tIFwiLi4vZWxlbWVudC9wYXJ0XCI7XG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9lbGVtZW50L2NhbWVyYVwiO1xuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcbmltcG9ydCBVc2VySW5wdXQgZnJvbSBcIi4uL21pc2NlbGxhbmVvdXMvdXNlcklucHV0XCI7XG5cbmltcG9ydCB7IHplcm8yIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IsIERFRkFVTFRfQkFDS0dST1VORF9DT0xPVVIgfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcbmltcG9ydCB7IGVsZW1lbnRGcm9tQ2hpbGRFbGVtZW50cywgZWxlbWVudHNGcm9tQ2hpbGRFbGVtZW50cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihwYXJ0cywgY2FtZXJhLCBjYW52YXMsIGNvbG91cikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG4gICAgdGhpcy5jYW1lcmEgPSBjYW1lcmE7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jb2xvdXIgPSBjb2xvdXI7XG4gIH1cblxuICBnZXRQYXJ0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0cztcbiAgfVxuXG4gIGdldENhbWVyYSgpIHtcbiAgICByZXR1cm4gdGhpcy5jYW1lcmE7XG4gIH1cblxuICBnZXRDYW52YXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzO1xuICB9XG5cbiAgZ2V0Q29sb3VyKCkge1xuICAgIHJldHVybiB0aGlzLmNvbG91cjtcbiAgfVxuXG4gIGVzY2FwZUtleURvd25IYW5kbGVyID0gKCkgPT4ge1xuICAgIHRoaXMuY2FtZXJhLnJlc2V0KCk7XG5cbiAgICB0aGlzLndpbmRvd1Jlc2l6ZUhhbmRsZXIoKTsgLy8vXG4gIH1cblxuICB3aW5kb3dSZXNpemVIYW5kbGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGNsaWVudFdpZHRoID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50V2lkdGgoKSxcbiAgICAgICAgICBjbGllbnRIZWlnaHQgPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRIZWlnaHQoKSxcbiAgICAgICAgICB3aWR0aCA9IGNsaWVudFdpZHRoLCAgLy8vXG4gICAgICAgICAgaGVpZ2h0ID0gY2xpZW50SGVpZ2h0O1xuXG4gICAgdGhpcy5jYW52YXMucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgY29uc3QgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gemVybzIoKSwgLy8vXG4gICAgICAgICAgbW91c2VXaGVlbERlbHRhID0gMCwgIC8vL1xuICAgICAgICAgIHNoaWZ0S2V5RG93biA9IGZhbHNlOyAvLy9cblxuICAgIHRoaXMudXNlcklucHV0SGFuZGxlcihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duKTtcbiAgfVxuXG4gIHVzZXJJbnB1dEhhbmRsZXIgPSAocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93bikgPT4ge1xuICAgIGNvbnN0IHJlbmRlciA9IHRoaXMucmVuZGVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmNhbWVyYS51cGRhdGUocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93biwgdGhpcy5jYW52YXMsIHJlbmRlcik7XG4gIH1cblxuICBpbml0aWFsaXNlKGNhbnZhcywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IHVzZXJJbnB1dCA9IFVzZXJJbnB1dC5mcm9tTm90aGluZygpO1xuXG4gICAgdGhpcy5wYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiB7XG4gICAgICBwYXJ0LmluaXRpYWxpc2UoY2FudmFzLCBtYXJnaW5PZkVycm9yKTtcbiAgICB9KTtcblxuICAgIHVzZXJJbnB1dC5pbml0aWFsaXNlKGNhbnZhcyk7XG5cbiAgICB1c2VySW5wdXQuYWRkVXNlcklucHV0SGFuZGxlcih0aGlzLnVzZXJJbnB1dEhhbmRsZXIpO1xuXG4gICAgdXNlcklucHV0LmFkZEVzY2FwZUtleURvd25IYW5kbGVyKHRoaXMuZXNjYXBlS2V5RG93bkhhbmRsZXIpO1xuXG4gICAgd2luZG93Lm9ucmVzaXplID0gdGhpcy53aW5kb3dSZXNpemVIYW5kbGVyO1xuXG4gICAgdGhpcy53aW5kb3dSZXNpemVIYW5kbGVyKCk7IC8vL1xuICB9XG5cbiAgcmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpIHtcbiAgICB0aGlzLmNhbnZhcy5jbGVhcih0aGlzLmNvbG91cik7XG5cbiAgICB0aGlzLnBhcnRzLmZvckVhY2goKHBhcnQpID0+IHtcbiAgICAgIHBhcnQucmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIHRoaXMuY2FudmFzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBjYW52YXMsIGNoaWxkRWxlbWVudHMsIGJhY2tncm91bmRDb2xvdXIgPSBERUZBVUxUX0JBQ0tHUk9VTkRfQ09MT1VSIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHBhcnRzID0gZWxlbWVudHNGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzLCBQYXJ0KSxcbiAgICAgICAgICBjYW1lcmEgPSBlbGVtZW50RnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cywgQ2FtZXJhKSxcbiAgICAgICAgICBjb2xvdXIgPSBiYWNrZ3JvdW5kQ29sb3VyLCAgLy9cbiAgICAgICAgICBzY2VuZSA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoU2NlbmUsIHByb3BlcnRpZXMsIHBhcnRzLCBjYW1lcmEsIGNhbnZhcywgY29sb3VyKSxcbiAgICAgICAgICBtYXJnaW5PZkVycm9yID0gREVGQVVMVF9NQVJHSU5fT0ZfRVJST1I7XG5cbiAgICBzY2VuZS5pbml0aWFsaXNlKGNhbnZhcywgbWFyZ2luT2ZFcnJvcik7XG5cbiAgICByZXR1cm4gc2NlbmU7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbWF0cml4XCI7XG5pbXBvcnQgeyByZWZsZWN0MywgdHJ1bmNhdGU0LCB0cmFuc2Zvcm00IH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVsYXRpdmVPZmZzZXRzRnJvbUFuZ2xlc0FuZERpcmVjdGlvbnMoYW5nbGVzLCBkaXJlY3Rpb25zKSB7XG4gIGFuZ2xlcyA9IHJlZmxlY3QzKGFuZ2xlcyk7ICAvLy9cblxuICBjb25zdCByZXZlcnNlT3JkZXIgPSB0cnVlLFxuICAgICAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcywgcmV2ZXJzZU9yZGVyKTtcblxuICBsZXQgcmVsYXRpdmVPZmZzZXRzID0gdHJhbnNmb3JtNChkaXJlY3Rpb25zLCByb3RhdGlvbnNNYXRyaXgpO1xuXG4gIHJlbGF0aXZlT2Zmc2V0cyA9IHRydW5jYXRlNChyZWxhdGl2ZU9mZnNldHMpO1xuXG4gIHJldHVybiByZWxhdGl2ZU9mZnNldHM7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFkZDMsIHNjYWxlMiwgcmVmbGVjdDIgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyByZWxhdGl2ZU9mZnNldHNGcm9tQW5nbGVzQW5kRGlyZWN0aW9ucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvb2Zmc2V0c1wiO1xuaW1wb3J0IHsgTU9VU0VfV0hFRUxfREVMVEFfTVVMVElQTElFUiwgUkVMQVRJVkVfTU9VU0VfQ09PUkRJTkFURVNfTVVMVElQTElFUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuIHtcbiAgY29uc3RydWN0b3Iob2Zmc2V0cywgbW91c2VXaGVlbERlbHRhTXVsdGlwbGllciwgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllcikge1xuICAgIHRoaXMub2Zmc2V0cyA9IG9mZnNldHM7XG4gICAgdGhpcy5tb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyID0gbW91c2VXaGVlbERlbHRhTXVsdGlwbGllcjtcbiAgICB0aGlzLnJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIgPSByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyO1xuICB9XG5cbiAgZ2V0T2Zmc2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5vZmZzZXRzO1xuICB9XG5cbiAgZ2V0RGVsdGFNdWx0aXBsaWVyKCkge1xuICAgIHJldHVybiB0aGlzLm1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXI7XG4gIH1cblxuICBnZXRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyKCkge1xuICAgIHJldHVybiB0aGlzLnJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXI7XG4gIH1cblxuICB1cGRhdGVPZmZzZXRzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBhbmdsZXMpIHtcbiAgICBtb3VzZVdoZWVsRGVsdGEgPSBtb3VzZVdoZWVsRGVsdGEgKiB0aGlzLm1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXI7IC8vL1xuXG4gICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc2NhbGUyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgdGhpcy5yZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyKTsgLy8vXG5cbiAgICBjb25zdCBzY2FsZWRSZWZsZWN0ZWRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSByZWZsZWN0MihzY2FsZTIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCAxKSksXG4gICAgICAgICAgZGlyZWN0aW9ucyA9IFsgLi4uc2NhbGVkUmVmbGVjdGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIDAgXSxcbiAgICAgICAgICByZWxhdGl2ZU9mZnNldHMgPSByZWxhdGl2ZU9mZnNldHNGcm9tQW5nbGVzQW5kRGlyZWN0aW9ucyhhbmdsZXMsIGRpcmVjdGlvbnMsIDEpO1xuXG4gICAgdGhpcy5vZmZzZXRzID0gYWRkMyh0aGlzLm9mZnNldHMsIHJlbGF0aXZlT2Zmc2V0cyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxPZmZzZXRzTW91c2VTZW5zaXRpdml0eUFuZE1vdXNlV2hlZWxTZW5zaXRpdml0eShpbml0aWFsT2Zmc2V0cywgbW91c2VTZW5zaXRpdml0eSwgbW91c2VXaGVlbFNlbnNpdGl2aXR5KSB7XG4gICAgY29uc3Qgb2Zmc2V0cyA9IGluaXRpYWxPZmZzZXRzLCAvLy9cbiAgICAgICAgICBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyID0gTU9VU0VfV0hFRUxfREVMVEFfTVVMVElQTElFUiAqIG1vdXNlV2hlZWxTZW5zaXRpdml0eSxcbiAgICAgICAgICByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyID0gUkVMQVRJVkVfTU9VU0VfQ09PUkRJTkFURVNfTVVMVElQTElFUiAqIG1vdXNlU2Vuc2l0aXZpdHksXG4gICAgICAgICAgcGFuID0gbmV3IFBhbihvZmZzZXRzLCBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyLCByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyKTtcblxuICAgIHJldHVybiBwYW47XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQU5HTEVTX01VTFRJUExJRVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBhZGQzLCBzY2FsZTIsIHRyYW5zZm9ybTMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbHQge1xuICBjb25zdHJ1Y3RvcihhbmdsZXMsIGNsb2Nrd2lzZSkge1xuICAgIHRoaXMuYW5nbGVzID0gYW5nbGVzO1xuICAgIHRoaXMuY2xvY2t3aXNlID0gY2xvY2t3aXNlO1xuICB9XG5cbiAgZ2V0QW5nbGVzKCkge1xuICAgIHJldHVybiB0aGlzLmFuZ2xlcztcbiAgfVxuXG4gIGlzQ2xvY2t3aXNlKCkge1xuICAgIHJldHVybiB0aGlzLmNsb2Nrd2lzZTtcbiAgfVxuXG4gIHVwZGF0ZUFuZ2xlcyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSBzY2FsZTIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBBTkdMRVNfTVVMVElQTElFUik7IC8vL1xuXG4gICAgY29uc3QgbXVsdGlwbGllciA9IHRoaXMuY2xvY2t3aXNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICsxIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLTEsXG4gICAgICAgICAgbWF0cml4ID0gW1xuXG4gICAgICAgICAgICAgICAgICAgICAgMCwgK211bHRpcGxpZXIsIDAsXG4gICAgICAgICAgICAtbXVsdGlwbGllciwgICAgICAgICAgIDAsIDAsXG4gICAgICAgICAgICAgICAgICAgICAgMCwgICAgICAgICAgIDAsIDBcblxuICAgICAgICAgIF0sXG4gICAgICAgICAgcmVsYXRpdmVBbmdsZXMgPSB0cmFuc2Zvcm0zKFsgLi4ucmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCAwIF0sIG1hdHJpeCk7XG5cbiAgICB0aGlzLmFuZ2xlcyA9IGFkZDModGhpcy5hbmdsZXMsIHJlbGF0aXZlQW5nbGVzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5pdGlhbEFuZ2xlcyhpbml0aWFsQW5nbGVzKSB7XG4gICAgY29uc3QgYW5nbGVzID0gWyAuLi5pbml0aWFsQW5nbGVzLCAwIF0sXG4gICAgICAgICAgY2xvY2t3aXNlID0gZmFsc2UsXG4gICAgICAgICAgdGlsdCA9IG5ldyBUaWx0KGFuZ2xlcywgY2xvY2t3aXNlKTtcblxuICAgIHJldHVybiB0aWx0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Jbml0aWFsQW5nbGVzQW5kQ2xvY2t3aXNlKGluaXRpYWxBbmdsZXMsIGNsb2Nrd2lzZSkge1xuICAgIGNvbnN0IGFuZ2xlcyA9IFsgLi4uaW5pdGlhbEFuZ2xlcywgMCBdLFxuICAgICAgICAgIHRpbHQgPSBuZXcgVGlsdChhbmdsZXMsIGNsb2Nrd2lzZSk7XG5cbiAgICByZXR1cm4gdGlsdDtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SlNPTihrZXkpIHtcbiAgbGV0IGpzb24gPSBudWxsO1xuXG4gIGNvbnN0IHZhbHVlID0gZ2V0KGtleSk7XG5cbiAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAganNvbiA9IEpTT04ucGFyc2UodmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIGpzb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRKU09OKGtleSwganNvbikge1xuICBjb25zdCB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KGpzb24pO1xuXG4gIHNldChrZXksIHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUpTT04oa2V5KSB7XG4gIHJlbW92ZShrZXkpO1xufVxuXG5mdW5jdGlvbiBnZXQoa2F5KSB7XG4gIGNvbnN0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2F5KSB8fCBudWxsO1xuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gc2V0KGtheSwgdmFsdWUpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2F5LCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZShrZXkpIHtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbn0iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQYW4gZnJvbSBcIi4uLy4uL21pc2NlbGxhbmVvdXMvcGFuXCI7XG5pbXBvcnQgVGlsdCBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy90aWx0XCI7XG5cbmltcG9ydCBDYW1lcmEgZnJvbSBcIi4uL2NhbWVyYVwiO1xuXG5pbXBvcnQgeyBzY2FsZTIsIHNjYWxlMyB9IGZyb20gXCIuLi8uLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IGdldEpTT04sIHNldEpTT04sIHJlbW92ZUpTT04gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2xvY2FsU3RvcmFnZVwiO1xuaW1wb3J0IHsgR0FNSU5HX0NBTUVSQSwgSU5WRVJUX01VTFRJUExJRVIsIERFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgREVGQVVMVF9QRVJTSVNULFxuICAgICAgICAgREVGQVVMVF9JTklUSUFMX0FOR0xFUyxcbiAgICAgICAgIERFRkFVTFRfSU5JVElBTF9QT1NJVElPTixcbiAgICAgICAgIERFRkFVTFRfTU9VU0VfU0VOU0lUSVZJVFksXG4gICAgICAgICBERUZBVUxUX01PVVNFX1dIRUVMX1NFTlNJVElWSVRZIH0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzXCI7XG5pbXBvcnQgeyBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMsXG4gICAgICAgICByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzLFxuICAgICAgICAgcG9zaXRpb25NYXRyaXhGcm9tTm90aGluZyxcbiAgICAgICAgIG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4LFxuICAgICAgICAgcHJvamVjdGlvbk1hdHJpeEZyb21DYW1lcmFBbmRDYW52YXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL21hdHJpeFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1pbmdDYW1lcmEgZXh0ZW5kcyBDYW1lcmEge1xuICBjb25zdHJ1Y3Rvcih6RmFyLCB6TmVhciwgZmllbGRPZlZpZXcsIHBhbiwgdGlsdCwgcGVyc2lzdCkge1xuICAgIHN1cGVyKHpGYXIsIHpOZWFyLCBmaWVsZE9mVmlldyk7XG5cbiAgICB0aGlzLnBhbiA9IHBhbjtcbiAgICB0aGlzLnRpbHQgPSB0aWx0O1xuICAgIHRoaXMucGVyc2lzdCA9IHBlcnNpc3Q7XG4gIH1cblxuICBnZXRQYW4oKSB7XG4gICAgcmV0dXJuIHRoaXMucGFuO1xuICB9XG5cbiAgZ2V0VGlsdCgpIHtcbiAgICByZXR1cm4gdGhpcy50aWx0O1xuICB9XG5cbiAgZG9lc1BlcnNpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMucGVyc2lzdDtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIGNvbnN0IGtleSA9IEdBTUlOR19DQU1FUkE7ICAvLy9cblxuICAgIHJlbW92ZUpTT04oa2V5KTtcblxuICAgIHRoaXMucGFuID0gcGFuRnJvbVByb3BlcnRpZXModGhpcy5wcm9wZXJ0aWVzKTtcbiAgICB0aGlzLnRpbHQgPSB0aWx0RnJvbVByb3BlcnRpZXModGhpcy5wcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCBjYW52YXMsIHJlbmRlcikge1xuICAgIGNvbnN0IG1vdXNlV2hlZWxNb3ZlZCA9IChtb3VzZVdoZWVsRGVsdGEgIT09IDApO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHNoaWZ0S2V5RG93biB8fCBtb3VzZVdoZWVsTW92ZWQpIHtcbiAgICAgIGNvbnN0IGFuZ2xlcyA9IHRoaXMudGlsdC5nZXRBbmdsZXMoKTtcblxuICAgICAgdGhpcy5wYW4udXBkYXRlT2Zmc2V0cyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgYW5nbGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aWx0LnVwZGF0ZUFuZ2xlcyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbWVyYSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBhbmdsZXMgPSB0aGlzLnRpbHQuZ2V0QW5nbGVzKCksXG4gICAgICAgICAgcGVyc2lzdCA9IHRoaXMuZG9lc1BlcnNpc3QoKSxcbiAgICAgICAgICBvZmZzZXRzID0gdGhpcy5wYW4uZ2V0T2Zmc2V0cygpO1xuXG4gICAgaWYgKHBlcnNpc3QpIHtcbiAgICAgIGNvbnN0IGtleSA9IEdBTUlOR19DQU1FUkEsICAvLy9cbiAgICAgICAgICAgIGFuZ2xlcyA9IHRoaXMudGlsdC5nZXRBbmdsZXMoKSxcbiAgICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICAgIGFuZ2xlcyxcbiAgICAgICAgICAgICAgb2Zmc2V0c1xuICAgICAgICAgICAgfTtcblxuICAgICAgc2V0SlNPTihrZXksIGpzb24pO1xuICAgIH1cblxuICAgIGNvbnN0IG9mZnNldHNNYXRyaXggPSBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMob2Zmc2V0cyksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXggPSBwb3NpdGlvbk1hdHJpeEZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyhhbmdsZXMpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXggPSBwcm9qZWN0aW9uTWF0cml4RnJvbUNhbWVyYUFuZENhbnZhcyhjYW1lcmEsIGNhbnZhcyksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeCA9IG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4KHJvdGF0aW9uc01hdHJpeCk7XG5cbiAgICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgcGVyc2lzdCA9IERFRkFVTFRfUEVSU0lTVCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBwYW4gPSBwYW5Gcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSxcbiAgICAgICAgICB0aWx0ID0gdGlsdEZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpLFxuICAgICAgICAgIGdhbWluZ0NhbWVyYSA9IENhbWVyYS5mcm9tUHJvcGVydGllcyhHYW1pbmdDYW1lcmEsIHByb3BlcnRpZXMsIHBhbiwgdGlsdCwgcGVyc2lzdCk7XG5cbiAgICByZXR1cm4gZ2FtaW5nQ2FtZXJhO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhbkZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgY29uc3QgeyBwZXJzaXN0ID0gREVGQVVMVF9QRVJTSVNULFxuICAgICAgICAgIG1vdXNlU2Vuc2l0aXZpdHkgPSBERUZBVUxUX01PVVNFX1NFTlNJVElWSVRZLFxuICAgICAgICAgIG1vdXNlV2hlZWxTZW5zaXRpdml0eSA9IERFRkFVTFRfTU9VU0VfV0hFRUxfU0VOU0lUSVZJVFkgfSA9IHByb3BlcnRpZXM7XG5cbiAgbGV0ICB7IGluaXRpYWxQb3NpdGlvbiA9IERFRkFVTFRfSU5JVElBTF9QT1NJVElPTiB9ID0gcHJvcGVydGllcztcblxuICBsZXQgaW5pdGlhbE9mZnNldHMgPSBzY2FsZTMoaW5pdGlhbFBvc2l0aW9uLCBJTlZFUlRfTVVMVElQTElFUik7XG5cbiAgaWYgKHBlcnNpc3QpIHtcbiAgICBjb25zdCBrZXkgPSBHQU1JTkdfQ0FNRVJBLCAgLy8vXG4gICAgICAgICAganNvbiA9IGdldEpTT04oa2V5KTtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IG9mZnNldHMgfSA9IGpzb247XG5cbiAgICAgIGluaXRpYWxPZmZzZXRzID0gb2Zmc2V0czsgLy8vXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcGFuID0gUGFuLmZyb21Jbml0aWFsT2Zmc2V0c01vdXNlU2Vuc2l0aXZpdHlBbmRNb3VzZVdoZWVsU2Vuc2l0aXZpdHkoaW5pdGlhbE9mZnNldHMsIG1vdXNlU2Vuc2l0aXZpdHksIG1vdXNlV2hlZWxTZW5zaXRpdml0eSk7XG5cbiAgcmV0dXJuIHBhbjtcbn1cblxuZnVuY3Rpb24gdGlsdEZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgY29uc3QgeyBwZXJzaXN0ID0gREVGQVVMVF9QRVJTSVNUIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIGxldCAgeyBpbml0aWFsQW5nbGVzID0gREVGQVVMVF9JTklUSUFMX0FOR0xFUyB9ID0gcHJvcGVydGllcztcblxuICBpbml0aWFsQW5nbGVzID0gc2NhbGUyKGluaXRpYWxBbmdsZXMsIERFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSKTsgLy8vXG5cbiAgaWYgKHBlcnNpc3QpIHtcbiAgICBjb25zdCBrZXkgPSBHQU1JTkdfQ0FNRVJBLCAgLy8vXG4gICAgICAgICAganNvbiA9IGdldEpTT04oa2V5KTtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IGFuZ2xlcyB9ID0ganNvbjtcblxuICAgICAgaW5pdGlhbEFuZ2xlcyA9IGFuZ2xlczsgLy8vXG4gICAgfVxuICB9XG5cbiAgY29uc3QgY2xvY2t3aXNlID0gdHJ1ZSxcbiAgICAgICAgdGlsdCA9IFRpbHQuZnJvbUluaXRpYWxBbmdsZXNBbmRDbG9ja3dpc2UoaW5pdGlhbEFuZ2xlcywgY2xvY2t3aXNlKTtcblxuICByZXR1cm4gdGlsdDtcbn0iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE1JTklNVU1fRElTVEFOQ0UsIE1PVVNFX1dIRUVMX0RFTFRBX01VTFRJUExJRVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpvb20ge1xuICBjb25zdHJ1Y3RvcihkaXN0YW5jZSwgbWluaW11bURpc3RhbmNlLCBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyKSB7XG4gICAgdGhpcy5kaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgIHRoaXMubWluaW11bURpc3RhbmNlID0gbWluaW11bURpc3RhbmNlO1xuICAgIHRoaXMubW91c2VXaGVlbERlbHRhTXVsdGlwbGllciA9IG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXI7XG4gIH1cblxuICBnZXREaXN0YW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXN0YW5jZTtcbiAgfVxuXG4gIGdldE1pbmltdW1EaXN0YW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5taW5pbXVtRGlzdGFuY2U7XG4gIH1cblxuICBnZXREZWx0YU11bHRpcGxpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubW91c2VXaGVlbERlbHRhTXVsdGlwbGllcjtcbiAgfVxuXG4gIHVwZGF0ZURpc3RhbmNlKG1vdXNlV2hlZWxEZWx0YSkge1xuICAgIG1vdXNlV2hlZWxEZWx0YSA9IG1vdXNlV2hlZWxEZWx0YSAqIHRoaXMubW91c2VXaGVlbERlbHRhTXVsdGlwbGllcjsgLy8vXG5cbiAgICB0aGlzLmRpc3RhbmNlID0gdGhpcy5kaXN0YW5jZSAtIG1vdXNlV2hlZWxEZWx0YTtcblxuICAgIHRoaXMuZGlzdGFuY2UgPSBNYXRoLm1heCh0aGlzLm1pbmltdW1EaXN0YW5jZSwgdGhpcy5kaXN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxEaXN0YW5jZUFuZE1vdXNlV2hlZWxTZW5zaXRpdml0eShpbml0aWFsRGlzdGFuY2UsIG1vdXNlV2hlZWxTZW5zaXRpdml0eSkge1xuICAgIGNvbnN0IGRpc3RhbmNlID0gaW5pdGlhbERpc3RhbmNlLCAvLy9cbiAgICAgICAgICBtaW5pbXVtRGlzdGFuY2UgPSBNSU5JTVVNX0RJU1RBTkNFLFxuICAgICAgICAgIG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIgPSBNT1VTRV9XSEVFTF9ERUxUQV9NVUxUSVBMSUVSICogbW91c2VXaGVlbFNlbnNpdGl2aXR5LFxuICAgICAgICAgIHpvb20gPSBuZXcgWm9vbShkaXN0YW5jZSwgbWluaW11bURpc3RhbmNlLCBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyKTtcblxuICAgIHJldHVybiB6b29tO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQYW4gZnJvbSBcIi4uLy4uL21pc2NlbGxhbmVvdXMvcGFuXCI7XG5pbXBvcnQgVGlsdCBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy90aWx0XCI7XG5pbXBvcnQgWm9vbSBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy96b29tXCI7XG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9jYW1lcmFcIjtcblxuaW1wb3J0IHsgc2NhbGUyIH0gZnJvbSBcIi4uLy4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgZ2V0SlNPTiwgc2V0SlNPTiwgcmVtb3ZlSlNPTiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbG9jYWxTdG9yYWdlXCI7XG5pbXBvcnQgeyBERVNJR05fQ0FNRVJBLCBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUiB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IERFRkFVTFRfUEVSU0lTVCxcbiAgICAgICAgIERFRkFVTFRfSU5JVElBTF9BTkdMRVMsXG4gICAgICAgICBERUZBVUxUX0lOSVRJQUxfT0ZGU0VUUyxcbiAgICAgICAgIERFRkFVTFRfSU5JVElBTF9ESVNUQU5DRSxcbiAgICAgICAgIERFRkFVTFRfTU9VU0VfU0VOU0lUSVZJVFksXG4gICAgICAgICBERUZBVUxUX01PVVNFX1dIRUVMX1NFTlNJVElWSVRZIH0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzXCI7XG5pbXBvcnQgeyBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMsXG4gICAgICAgICByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzLFxuICAgICAgICAgcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UsXG4gICAgICAgICBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeCxcbiAgICAgICAgIHByb2plY3Rpb25NYXRyaXhGcm9tQ2FtZXJhQW5kQ2FudmFzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9tYXRyaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVzaWduQ2FtZXJhIGV4dGVuZHMgQ2FtZXJhIHtcbiAgY29uc3RydWN0b3IoekZhciwgek5lYXIsIGZpZWxkT2ZWaWV3LCBwYW4sIHRpbHQsIHpvb20sIHBlcnNpc3QpIHtcbiAgICBzdXBlcih6RmFyLCB6TmVhciwgZmllbGRPZlZpZXcpO1xuXG4gICAgdGhpcy5wYW4gPSBwYW47XG4gICAgdGhpcy50aWx0ID0gdGlsdDtcbiAgICB0aGlzLnpvb20gPSB6b29tO1xuICAgIHRoaXMucGVyc2lzdCA9IHBlcnNpc3Q7XG4gIH1cblxuICBnZXRQYW4oKSB7XG4gICAgcmV0dXJuIHRoaXMucGFuO1xuICB9XG5cbiAgZ2V0VGlsdCgpIHtcbiAgICByZXR1cm4gdGhpcy50aWx0O1xuICB9XG5cbiAgZ2V0Wm9vbSgpIHtcbiAgICByZXR1cm4gdGhpcy56b29tO1xuICB9XG5cbiAgZG9lc1BlcnNpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMucGVyc2lzdDtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIGNvbnN0IGtleSA9IERFU0lHTl9DQU1FUkE7ICAvLy9cblxuICAgIHJlbW92ZUpTT04oa2V5KTtcblxuICAgIHRoaXMucGFuID0gcGFuRnJvbVByb3BlcnRpZXModGhpcy5wcm9wZXJ0aWVzKTtcbiAgICB0aGlzLnRpbHQgPSB0aWx0RnJvbVByb3BlcnRpZXModGhpcy5wcm9wZXJ0aWVzKTtcbiAgICB0aGlzLnpvb20gPSB6b29tRnJvbVByb3BlcnRpZXModGhpcy5wcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCBjYW52YXMsIHJlbmRlcikge1xuICAgIGNvbnN0IG1vdXNlV2hlZWxNb3ZlZCA9IChtb3VzZVdoZWVsRGVsdGEgIT09IDApO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHNoaWZ0S2V5RG93bikge1xuICAgICAgY29uc3QgYW5nbGVzID0gdGhpcy50aWx0LmdldEFuZ2xlcygpO1xuXG4gICAgICB0aGlzLnBhbi51cGRhdGVPZmZzZXRzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBhbmdsZXMpO1xuICAgIH0gZWxzZSBpZiAobW91c2VXaGVlbE1vdmVkKSB7XG4gICAgICB0aGlzLnpvb20udXBkYXRlRGlzdGFuY2UobW91c2VXaGVlbERlbHRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aWx0LnVwZGF0ZUFuZ2xlcyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbWVyYSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBhbmdsZXMgPSB0aGlzLnRpbHQuZ2V0QW5nbGVzKCksXG4gICAgICAgICAgcGVyc2lzdCA9IHRoaXMuZG9lc1BlcnNpc3QoKSxcbiAgICAgICAgICBvZmZzZXRzID0gdGhpcy5wYW4uZ2V0T2Zmc2V0cygpLFxuICAgICAgICAgIGRpc3RhbmNlID0gdGhpcy56b29tLmdldERpc3RhbmNlKCk7XG5cbiAgICBpZiAocGVyc2lzdCkge1xuICAgICAgY29uc3Qga2V5ID0gREVTSUdOX0NBTUVSQSxcbiAgICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICAgIGFuZ2xlcyxcbiAgICAgICAgICAgICAgb2Zmc2V0cyxcbiAgICAgICAgICAgICAgZGlzdGFuY2VcbiAgICAgICAgICAgIH07XG5cbiAgICAgIHNldEpTT04oa2V5LCBqc29uKTtcbiAgICB9XG5cbiAgICBjb25zdCBvZmZzZXRzTWF0cml4ID0gb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzKG9mZnNldHMpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4ID0gcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UoZGlzdGFuY2UpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMoYW5nbGVzKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gcHJvamVjdGlvbk1hdHJpeEZyb21DYW1lcmFBbmRDYW52YXMoY2FtZXJhLCBjYW52YXMpLFxuICAgICAgICAgIG5vcm1hbHNNYXRyaXggPSBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeChyb3RhdGlvbnNNYXRyaXgpO1xuXG4gICAgcmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHBlcnNpc3QgPSBERUZBVUxUX1BFUlNJU1QgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgcGFuID0gcGFuRnJvbVByb3BlcnRpZXMocHJvcGVydGllcyksXG4gICAgICAgICAgdGlsdCA9IHRpbHRGcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSxcbiAgICAgICAgICB6b29tID0gem9vbUZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpLFxuICAgICAgICAgIGRlc2lnbkNhbWVyYSA9IENhbWVyYS5mcm9tUHJvcGVydGllcyhEZXNpZ25DYW1lcmEsIHByb3BlcnRpZXMsIHBhbiwgdGlsdCwgem9vbSwgcGVyc2lzdCk7XG5cbiAgICByZXR1cm4gZGVzaWduQ2FtZXJhO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhbkZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgY29uc3QgeyBwZXJzaXN0ID0gREVGQVVMVF9QRVJTSVNULFxuICAgICAgICAgIG1vdXNlU2Vuc2l0aXZpdHkgPSBERUZBVUxUX01PVVNFX1NFTlNJVElWSVRZLFxuICAgICAgICAgIG1vdXNlV2hlZWxTZW5zaXRpdml0eSA9IERFRkFVTFRfTU9VU0VfV0hFRUxfU0VOU0lUSVZJVFkgfSA9IHByb3BlcnRpZXM7XG5cbiAgbGV0IHsgaW5pdGlhbE9mZnNldHMgPSBERUZBVUxUX0lOSVRJQUxfT0ZGU0VUUyB9ID0gcHJvcGVydGllcztcblxuICBpZiAocGVyc2lzdCkge1xuICAgIGNvbnN0IGtleSA9IERFU0lHTl9DQU1FUkEsICAvLy9cbiAgICAgICAgICBqc29uID0gZ2V0SlNPTihrZXkpO1xuXG4gICAgaWYgKGpzb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgb2Zmc2V0cyB9ID0ganNvbjtcblxuICAgICAgaW5pdGlhbE9mZnNldHMgPSBvZmZzZXRzOyAvLy9cbiAgICB9XG4gIH1cblxuICBjb25zdCBwYW4gPSBQYW4uZnJvbUluaXRpYWxPZmZzZXRzTW91c2VTZW5zaXRpdml0eUFuZE1vdXNlV2hlZWxTZW5zaXRpdml0eShpbml0aWFsT2Zmc2V0cywgbW91c2VTZW5zaXRpdml0eSwgbW91c2VXaGVlbFNlbnNpdGl2aXR5KTtcblxuICByZXR1cm4gcGFuO1xufVxuXG5mdW5jdGlvbiB0aWx0RnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICBjb25zdCB7IHBlcnNpc3QgPSBERUZBVUxUX1BFUlNJU1QgfSA9IHByb3BlcnRpZXM7XG5cbiAgbGV0IHsgaW5pdGlhbEFuZ2xlcyA9IERFRkFVTFRfSU5JVElBTF9BTkdMRVMgfSA9IHByb3BlcnRpZXM7XG5cbiAgaW5pdGlhbEFuZ2xlcyA9IHNjYWxlMihpbml0aWFsQW5nbGVzLCBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUik7IC8vL1xuXG4gIGlmIChwZXJzaXN0KSB7XG4gICAgY29uc3Qga2V5ID0gREVTSUdOX0NBTUVSQSwgIC8vL1xuICAgICAgICAgIGpzb24gPSBnZXRKU09OKGtleSk7XG5cbiAgICBpZiAoanNvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBhbmdsZXMgfSA9IGpzb247XG5cbiAgICAgIGluaXRpYWxBbmdsZXMgPSBhbmdsZXM7IC8vL1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHRpbHQgPSBUaWx0LmZyb21Jbml0aWFsQW5nbGVzKGluaXRpYWxBbmdsZXMpO1xuXG4gIHJldHVybiB0aWx0O1xufVxuXG5mdW5jdGlvbiB6b29tRnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICBjb25zdCB7IHBlcnNpc3QgPSBERUZBVUxUX1BFUlNJU1QsIG1vdXNlV2hlZWxTZW5zaXRpdml0eSA9IERFRkFVTFRfTU9VU0VfV0hFRUxfU0VOU0lUSVZJVFkgfSA9IHByb3BlcnRpZXM7XG5cbiAgbGV0IHsgaW5pdGlhbERpc3RhbmNlID0gREVGQVVMVF9JTklUSUFMX0RJU1RBTkNFIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIGlmIChwZXJzaXN0KSB7XG4gICAgY29uc3Qga2V5ID0gREVTSUdOX0NBTUVSQSwgIC8vL1xuICAgICAgICAgIGpzb24gPSBnZXRKU09OKGtleSk7XG5cbiAgICBpZiAoanNvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBkaXN0YW5jZSB9ID0ganNvbjtcblxuICAgICAgaW5pdGlhbERpc3RhbmNlID0gZGlzdGFuY2U7IC8vL1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHpvb20gPSBab29tLmZyb21Jbml0aWFsRGlzdGFuY2VBbmRNb3VzZVdoZWVsU2Vuc2l0aXZpdHkoaW5pdGlhbERpc3RhbmNlLCBtb3VzZVdoZWVsU2Vuc2l0aXZpdHkpO1xuXG4gIHJldHVybiB6b29tO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IEFOT05ZTU9VUyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBmb3JFYWNoIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVsb2FkSW1hZ2VzKGhvc3QsIGltYWdlTmFtZXMsIGltYWdlRGlyZWN0b3J5VVJJLCBjYWxsYmFjaykge1xuICBjb25zdCBpbWFnZXMgPSBbXSxcbiAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICBpbWFnZXNcbiAgICAgICAgfTtcblxuICBmb3JFYWNoKGltYWdlTmFtZXMsIChpbWFnZU5hbWUsIG5leHQsIGRvbmUsIGNvbnRleHQpID0+IHtcbiAgICBjb25zdCBzcmMgPSBgJHtob3N0fSR7aW1hZ2VEaXJlY3RvcnlVUkl9LyR7aW1hZ2VOYW1lfWAsXG4gICAgICAgICAgaW1hZ2UgPSBuZXcgSW1hZ2UoKSxcbiAgICAgICAgICBjcm9zc09yaWdpbiA9IEFOT05ZTU9VUztcblxuICBPYmplY3QuYXNzaWduKGltYWdlLCB7XG4gICAgICBzcmMsXG4gICAgICBvbmxvYWQsXG4gICAgICBjcm9zc09yaWdpblxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gb25sb2FkKCkge1xuICAgICAgaW1hZ2VzLnB1c2goaW1hZ2UpO1xuXG4gICAgICBuZXh0KCk7XG4gICAgfVxuICB9LCBkb25lLCBjb250ZXh0KTtcblxuICBmdW5jdGlvbiBkb25lKCkge1xuICAgIGNvbnN0IHsgaW1hZ2VzIH0gPSBjb250ZXh0O1xuXG4gICAgY2FsbGJhY2soaW1hZ2VzLCBpbWFnZU5hbWVzKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlbG9hZEltYWdlTWFwKGhvc3QsIGltYWdlTWFwVVJJLCBpbWFnZU1hcEpTT04sIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHNyYyA9IGAke2hvc3R9JHtpbWFnZU1hcFVSSX1gLFxuICAgICAgICBpbWFnZU1hcCA9IG5ldyBJbWFnZSgpLFx0Ly8vXG4gICAgICAgIGNyb3NzT3JpZ2luID0gQU5PTllNT1VTOyAgLy8vXG5cbiAgT2JqZWN0LmFzc2lnbihpbWFnZU1hcCwge1xuICAgIHNyYyxcbiAgICBvbmxvYWQsXG4gICAgY3Jvc3NPcmlnaW5cbiAgfSk7XG5cbiAgZnVuY3Rpb24gb25sb2FkKGV2ZW50KSB7XG4gICAgY2FsbGJhY2soaW1hZ2VNYXAsIGltYWdlTWFwSlNPTik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcmVsb2FkSW1hZ2VzLFxuICBwcmVsb2FkSW1hZ2VNYXBcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9ybWFsaXNlMywgc3VidHJhY3QzLCBjcm9zczMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vcm1hbCB7XG4gIGNvbnN0cnVjdG9yKGV4dGVudCkge1xuICAgIHRoaXMuZXh0ZW50ID0gZXh0ZW50O1xuICB9XG5cbiAgZ2V0RXh0ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmV4dGVudDtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IGV4dGVudCA9IGNsb25lRXh0ZW50KHRoaXMuZXh0ZW50KSxcbiAgICAgICAgICBub3JtYWwgPSBuZXcgTm9ybWFsKGV4dGVudCk7XG5cbiAgICByZXR1cm4gbm9ybWFsO1xuICB9XG5cbiAgc3RhdGljIGZyb21WZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICAgIGNvbnN0IGZpcnN0VmVydGV4ID0gZmlyc3QodmVydGljZXMpLFxuICAgICAgICAgIHNlY29uZFZlcnRleCA9IHNlY29uZCh2ZXJ0aWNlcyksXG4gICAgICAgICAgdGhpcmRWZXJ0ZXggPSB0aGlyZCh2ZXJ0aWNlcyksXG4gICAgICAgICAgZmlyc3RQb3NpdGlvbiA9IGZpcnN0VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgc2Vjb25kUG9zaXRpb24gPSBzZWNvbmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICB0aGlyZFBvc2l0aW9uID0gdGhpcmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBmaXJzdEV4dGVudCA9IHN1YnRyYWN0MyhzZWNvbmRQb3NpdGlvbiwgZmlyc3RQb3NpdGlvbiksXG4gICAgICAgICAgc2Vjb25kRXh0ZW50ID0gc3VidHJhY3QzKHRoaXJkUG9zaXRpb24sIGZpcnN0UG9zaXRpb24pLFxuICAgICAgICAgIGV4dGVudCA9IG5vcm1hbGlzZTMoY3Jvc3MzKGZpcnN0RXh0ZW50LCBzZWNvbmRFeHRlbnQpKSxcbiAgICAgICAgICBub3JtYWwgPSBuZXcgTm9ybWFsKGV4dGVudCk7XG5cbiAgICByZXR1cm4gbm9ybWFsO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsb25lRXh0ZW50KGV4dGVudCkgeyByZXR1cm4gZXh0ZW50LnNsaWNlKCk7IH1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcm90YXRlUG9zaXRpb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3JvdGF0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlcnRleCB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb247XG4gIH1cblxuICByb3RhdGUocm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHJvdGF0ZVBvc2l0aW9uKHRoaXMucG9zaXRpb24sIHJvdGF0aW9uUXVhdGVybmlvbik7XG4gIH1cblxuICBhcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gdHJhbnNmb3JtKHRoaXMucG9zaXRpb24pO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLnNsaWNlKCksIC8vL1xuICAgICAgICAgIHZlcnRleCA9IG5ldyBWZXJ0ZXgocG9zaXRpb24pO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICBjb25zdCB2ZXJ0ZXggPSBuZXcgVmVydGV4KHBvc2l0aW9uKTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUNvb3JkaW5hdGVUdXBsZShjb29yZGluYXRlVHVwbGUpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IGNvb3JkaW5hdGVUdXBsZS5zbGljZSgpLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXggPSBuZXcgVmVydGV4KHBvc2l0aW9uKTtcblxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVkVSVElDRVNfTEVOR1RIIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCwgdGhpcmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBzdWJ0cmFjdDMsIGNyb3NzMywgbGVuZ3RoMyB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lRWRnZXMoZWRnZXMpIHtcbiAgZWRnZXMgPSBlZGdlcy5tYXAoKGVkZ2UpID0+IHtcbiAgICBlZGdlID0gZWRnZS5jbG9uZSgpOyAgLy8vXG5cbiAgICByZXR1cm4gZWRnZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGVkZ2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVOb3JtYWwobm9ybWFsKSB7XG4gIG5vcm1hbCA9IG5vcm1hbC5jbG9uZSgpO1xuICBcbiAgcmV0dXJuIG5vcm1hbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lVmVydGljZXModmVydGljZXMpIHtcbiAgdmVydGljZXMgPSB2ZXJ0aWNlcy5tYXAoKHZlcnRleCkgPT4ge1xuICAgIHZlcnRleCA9IHZlcnRleC5jbG9uZSgpOyAgLy8vXG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9KTtcblxuICByZXR1cm4gdmVydGljZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSkge1xuICBjb25zdCBlZGdlcyA9IHZlcnRpY2VzLm1hcCgodmVydGV4LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBpbmRleCwgLy8vXG4gICAgICAgICAgZW5kSW5kZXggPSAoc3RhcnRJbmRleCArIDEpICUgVkVSVElDRVNfTEVOR1RILFxuICAgICAgICAgIHN0YXJ0VmVydGV4ID0gdmVydGljZXNbc3RhcnRJbmRleF0sXG4gICAgICAgICAgZW5kVmVydGV4ID0gdmVydGljZXNbZW5kSW5kZXhdLFxuICAgICAgICAgIGVkZ2UgPSBFZGdlLmZyb21TdGFydFZlcnRleEFuZEVuZFZlcnRleChzdGFydFZlcnRleCwgZW5kVmVydGV4KTtcblxuICAgIHJldHVybiBlZGdlO1xuICB9KTtcblxuICByZXR1cm4gZWRnZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCkge1xuICBjb25zdCBub3JtYWwgPSBOb3JtYWwuZnJvbVZlcnRpY2VzKHZlcnRpY2VzKTtcblxuICByZXR1cm4gbm9ybWFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlQXJlYSh2ZXJ0aWNlcykge1xuICBjb25zdCBmaXJzdFZlcnRleCA9IGZpcnN0KHZlcnRpY2VzKSxcbiAgICAgICAgc2Vjb25kVmVydGV4ID0gc2Vjb25kKHZlcnRpY2VzKSxcbiAgICAgICAgdGhpcmRWZXJ0ZXggPSB0aGlyZCh2ZXJ0aWNlcyksXG4gICAgICAgIGZpcnN0VmVydGV4UG9zaXRpb24gPSBmaXJzdFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICBzZWNvbmRWZXJ0ZXhQb3NpdGlvbiA9IHNlY29uZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICB0aGlyZFZlcnRleFBvc2l0aW9uID0gdGhpcmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgZmlyc3RFeHRlbnQgPSBzdWJ0cmFjdDMoc2Vjb25kVmVydGV4UG9zaXRpb24sIGZpcnN0VmVydGV4UG9zaXRpb24pLFxuICAgICAgICBzZWNvbmRFeHRlbnQgPSBzdWJ0cmFjdDModGhpcmRWZXJ0ZXhQb3NpdGlvbiwgZmlyc3RWZXJ0ZXhQb3NpdGlvbiksXG4gICAgICAgIGFyZWEgPSBsZW5ndGgzKGNyb3NzMyhmaXJzdEV4dGVudCwgc2Vjb25kRXh0ZW50KSkgLyAyO1xuXG4gIHJldHVybiBhcmVhO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWRnZSBmcm9tIFwiLi9lZGdlXCI7XG5pbXBvcnQgTm9ybWFsIGZyb20gXCIuL25vcm1hbFwiO1xuaW1wb3J0IFZlcnRleCBmcm9tIFwiLi92ZXJ0ZXhcIjtcblxuaW1wb3J0IHsgYWRkLCBwZXJtdXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgVkVSVElDRVNfTEVOR1RIIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgY2FsY3VsYXRlRWRnZXMsIGNhbGN1bGF0ZU5vcm1hbCB9IGZyb20gXCIuLi91dGlsaXRpZXMvZmFjZXRcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZU1pZFBvaW50UG9zaXRpb24sIGlzTWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9taWRQb2ludFwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbnMsXG4gICAgICAgICBjYWxjdWxhdGVOdWxsSW50ZXJzZWN0aW9uSW5kZXgsXG4gICAgICAgICBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9uSW5kZXgsXG4gICAgICAgICBjYWxjdWxhdGVJbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbn0gZnJvbSBcIi4uL3V0aWxpdGllcy9pbnRlcnNlY3Rpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcykge1xuICAgIHRoaXMudmVydGljZXMgPSB2ZXJ0aWNlcztcbiAgICB0aGlzLm5vcm1hbCA9IG5vcm1hbDtcbiAgICB0aGlzLmVkZ2VzID0gZWRnZXM7XG4gIH1cblxuICBnZXRWZXJ0aWNlcygpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNlcztcbiAgfVxuXG4gIGdldE5vcm1hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5ub3JtYWw7XG4gIH1cblxuICBnZXRFZGdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5lZGdlcztcbiAgfVxuICBcbiAgZ2V0VmVydGV4UG9zaXRpb25zKCkge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9ucyA9IHRoaXMudmVydGljZXMubWFwKCh2ZXJ0ZXgpID0+IHtcbiAgICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uID0gdmVydGV4LmdldFBvc2l0aW9uKCk7XG5cbiAgICAgIHJldHVybiB2ZXJ0ZXhQb3NpdGlvbjtcbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4UG9zaXRpb25zO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhOb3JtYWxzKCkge1xuICAgIGNvbnN0IG5vcm1hbEV4dGVudCA9IHRoaXMubm9ybWFsLmdldEV4dGVudCgpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbCA9IG5vcm1hbEV4dGVudCwgIC8vL1xuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSBbXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwsXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwsXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwsXG4gICAgICAgICAgXTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4Tm9ybWFscztcbiAgfVxuICBcbiAgZ2V0VmVydGV4SW5kZXhlcyhpbmRleCkge1xuICAgIGNvbnN0IHZlcnRleEluZGV4ID0gaW5kZXggKiAzLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXMgPSBbXG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleCArIDAsXG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleCArIDEsXG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleCArIDIsXG4gICAgICAgICAgXTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4SW5kZXhlcztcbiAgfVxuXG4gIGlzTWFza2VkKG1hc2tpbmdGYWNldCkge1xuICAgIGNvbnN0IG1hc2tpbmdFZGdlcyA9IG1hc2tpbmdGYWNldC5nZXRNYXNraW5nRWRnZXMoKSxcbiAgICAgICAgICBtaWRQb2ludFBvc2l0aW9uID0gY2FsY3VsYXRlTWlkUG9pbnRQb3NpdGlvbih0aGlzLnZlcnRpY2VzKSxcbiAgICAgICAgICBtaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMgPSBpc01pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpLFxuICAgICAgICAgIG1hc2tlZCA9IG1pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlczsgIC8vL1xuICAgIFxuICAgIHJldHVybiBtYXNrZWQ7XG4gIH1cblxuICBwZXJtdXRlKHBsYWNlcykge1xuICAgIHRoaXMudmVydGljZXMgPSBwZXJtdXRlKHRoaXMudmVydGljZXMsIHBsYWNlcyk7XG5cbiAgICB0aGlzLm5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh0aGlzLnZlcnRpY2VzLCBOb3JtYWwpO1xuXG4gICAgdGhpcy5lZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHRoaXMudmVydGljZXMsIEVkZ2UpO1xuICB9XG5cbiAgcm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbikge1xuICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCgodmVydGV4KSA9PiB7XG4gICAgICB2ZXJ0ZXgucm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbik7XG4gICAgfSk7XG5cbiAgICB0aGlzLm5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh0aGlzLnZlcnRpY2VzLCBOb3JtYWwpO1xuXG4gICAgdGhpcy5lZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHRoaXMudmVydGljZXMsIEVkZ2UpO1xuICB9XG5cbiAgYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSB7XG4gICAgdGhpcy52ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgpID0+IHtcbiAgICAgIHZlcnRleC5hcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5ub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodGhpcy52ZXJ0aWNlcywgTm9ybWFsKTtcblxuICAgIHRoaXMuZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh0aGlzLnZlcnRpY2VzLCBFZGdlKTtcbiAgfVxuXG4gIHNwbGl0V2l0aEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IG5vbk51bGxJbnRlcnNlY3Rpb25zID0gY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgbm9uTnVsbEludGVyc2VjdGlvbnNMZW5ndGggPSBub25OdWxsSW50ZXJzZWN0aW9ucy5sZW5ndGg7XG5cbiAgICBzd2l0Y2ggKG5vbk51bGxJbnRlcnNlY3Rpb25zTGVuZ3RoKSB7XG4gICAgICBjYXNlIDIgOlxuICAgICAgICB0aGlzLnNwbGl0V2l0aFR3b05vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAxIDpcbiAgICAgICAgdGhpcy5zcGxpdFdpdGhPbmVOb25OdWxsSW50ZXJzZWN0aW9uKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAwIDpcbiAgICAgICAgdGhpcy5zcGxpdFdpdGhOb05vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgXG4gIHNwbGl0V2l0aFR3b05vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBudWxsSW50ZXJzZWN0aW9uSW5kZXggPSBjYWxjdWxhdGVOdWxsSW50ZXJzZWN0aW9uSW5kZXgoaW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgcGxhY2VzID0gKFZFUlRJQ0VTX0xFTkdUSCAtIG51bGxJbnRlcnNlY3Rpb25JbmRleCkgJSBWRVJUSUNFU19MRU5HVEg7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gcGVybXV0ZShpbnRlcnNlY3Rpb25zLCBwbGFjZXMpO1xuXG4gICAgaW50ZXJzZWN0aW9ucyA9IGludGVyc2VjdGlvbnMuc2xpY2UoMSk7IC8vL1xuXG4gICAgdGhpcy5wZXJtdXRlKHBsYWNlcyk7XG5cbiAgICBjb25zdCBzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcyA9IFsgMSwgMiBdLFxuICAgICAgICAgIGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlcyA9IFsgMiwgMCBdLFxuICAgICAgICAgIGluZGV4VHVwbGVzID0gW1xuXG4gICAgICAgICAgICBbIDAsIDEsIDMgXSxcbiAgICAgICAgICAgIFsgMywgNCwgMCBdLFxuICAgICAgICAgICAgWyAzLCAyLCA0IF0sXG5cbiAgICAgICAgICBdO1xuXG4gICAgdGhpcy5zcGxpdFdpdGhJbmRleFR1cGxlc0FuZEludGVyc2VjdGlvbnMoc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlcywgaW5kZXhUdXBsZXMsIGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpO1xuICB9XG5cbiAgc3BsaXRXaXRoT25lTm9uTnVsbEludGVyc2VjdGlvbihpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3Qgbm9uTnVsbEludGVyc2VjdGlvbkluZGV4ID0gY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbkluZGV4KGludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIHBsYWNlcyA9IChWRVJUSUNFU19MRU5HVEggLSBub25OdWxsSW50ZXJzZWN0aW9uSW5kZXgpICUgVkVSVElDRVNfTEVOR1RIO1xuXG4gICAgaW50ZXJzZWN0aW9ucyA9IHBlcm11dGUoaW50ZXJzZWN0aW9ucywgcGxhY2VzKTtcblxuICAgIGludGVyc2VjdGlvbnMgPSBpbnRlcnNlY3Rpb25zLnNsaWNlKDAsIDEpOyAgLy8vXG5cbiAgICB0aGlzLnBlcm11dGUocGxhY2VzKTtcblxuICAgIGNvbnN0IHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzID0gWyAwIF0sXG4gICAgICAgICAgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzID0gWyAxIF0sXG4gICAgICAgICAgaW5kZXhUdXBsZXMgPSBbXG5cbiAgICAgICAgICAgIFsgMCwgMywgMiBdLFxuICAgICAgICAgICAgWyAzLCAxLCAyIF0sXG5cbiAgICAgICAgICBdO1xuXG4gICAgdGhpcy5zcGxpdFdpdGhJbmRleFR1cGxlc0FuZEludGVyc2VjdGlvbnMoc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlcywgaW5kZXhUdXBsZXMsIGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpO1xuICB9XG5cbiAgc3BsaXRXaXRoTm9Ob25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3Qgc21hbGxlckZhY2V0ID0gdGhpcy5mcm9tVmVydGljZXNBbmRNYXJnaW5PZkVycm9yKHRoaXMudmVydGljZXMsIG1hcmdpbk9mRXJyb3IpOyAgLy8vXG5cbiAgICBzbWFsbGVyRmFjZXRzLnB1c2goc21hbGxlckZhY2V0KTtcbiAgfVxuXG4gIHNwbGl0V2l0aEluZGV4VHVwbGVzQW5kSW50ZXJzZWN0aW9ucyhzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcywgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzLCBpbmRleFR1cGxlcywgaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9ucyA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25zKCksXG4gICAgICAgICAgaW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb25zID0gaW50ZXJzZWN0aW9ucy5tYXAoKGludGVyc2VjdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleCA9IHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICAgIGVuZFZlcnRleFBvc2l0aW9uSW5kZXggPSBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgc3RhcnRWZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleFBvc2l0aW9uc1tzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhdLFxuICAgICAgICAgICAgICAgICAgZW5kVmVydGV4UG9zaXRpb24gPSB2ZXJ0ZXhQb3NpdGlvbnNbZW5kVmVydGV4UG9zaXRpb25JbmRleF0sXG4gICAgICAgICAgICAgICAgICBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbiA9IGNhbGN1bGF0ZUludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uKHN0YXJ0VmVydGV4UG9zaXRpb24sIGVuZFZlcnRleFBvc2l0aW9uLCBpbnRlcnNlY3Rpb24pO1xuXG4gICAgICAgICAgICByZXR1cm4gaW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb247XG4gICAgICAgICAgfSk7XG5cbiAgICBhZGQodmVydGV4UG9zaXRpb25zLCBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgaW5kZXhUdXBsZXMuZm9yRWFjaCgoaW5kZXhUdXBsZSkgPT4ge1xuICAgICAgY29uc3QgcG9zaXRpb25zID0gdmVydGV4UG9zaXRpb25zLCAgLy8vXG4gICAgICAgICAgICBpbmRleGVzID0gaW5kZXhUdXBsZSwgIC8vL1xuICAgICAgICAgICAgZmFjZXQgPSB0aGlzLCBcbiAgICAgICAgICAgIHNtYWxsZXJGYWNldCA9IHNtYWxsZXJGYWNldEZyb21Qb3NpdGlvbnNJbmRleGVzRmFjZXRBbmRNYXJnaW5PZkVycm9yKHBvc2l0aW9ucywgaW5kZXhlcywgZmFjZXQsIG1hcmdpbk9mRXJyb3IpO1xuXG4gICAgICBpZiAoc21hbGxlckZhY2V0ICE9PSBudWxsKSB7XG4gICAgICAgIHNtYWxsZXJGYWNldHMucHVzaChzbWFsbGVyRmFjZXQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNtYWxsZXJGYWNldEZyb21Qb3NpdGlvbnNJbmRleGVzRmFjZXRBbmRNYXJnaW5PZkVycm9yKHBvc2l0aW9ucywgaW5kZXhlcywgZmFjZXQsIG1hcmdpbk9mRXJyb3IpIHtcbiAgY29uc3QgdmVydGljZXMgPSBpbmRleGVzLm1hcCgoaW5kZXgpID0+IHtcbiAgICAgICAgICBsZXQgcG9zaXRpb24gPSBwb3NpdGlvbnNbaW5kZXhdO1xuICAgIFxuICAgICAgICAgIHBvc2l0aW9uID0gcG9zaXRpb24uc2xpY2UoKTsgLy8vXG4gICAgXG4gICAgICAgICAgY29uc3QgdmVydGV4ID0gVmVydGV4LmZyb21Qb3NpdGlvbihwb3NpdGlvbik7XG5cbiAgICAgICAgICByZXR1cm4gdmVydGV4O1xuICAgICAgICB9KSxcbiAgICAgICAgc21hbGxlckZhY2V0ID0gZmFjZXQuZnJvbVZlcnRpY2VzQW5kTWFyZ2luT2ZFcnJvcih2ZXJ0aWNlcywgbWFyZ2luT2ZFcnJvcik7XG5cbiAgcmV0dXJuIHNtYWxsZXJGYWNldDtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4uL2VkZ2VcIjtcbmltcG9ydCBGYWNldCBmcm9tIFwiLi4vZmFjZXRcIjtcbmltcG9ydCBOb3JtYWwgZnJvbSBcIi4uL25vcm1hbFwiO1xuaW1wb3J0IFZlcnRleCBmcm9tIFwiLi4vdmVydGV4XCI7XG5cbmltcG9ydCB7IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcHByb3hpbWF0ZVwiO1xuaW1wb3J0IHsgdmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3ZlcnRpY2VzXCI7XG5pbXBvcnQgeyBjbG9uZUVkZ2VzLCBjbG9uZU5vcm1hbCwgY2xvbmVWZXJ0aWNlcywgY2FsY3VsYXRlQXJlYSwgY2FsY3VsYXRlRWRnZXMsIGNhbGN1bGF0ZU5vcm1hbCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZmFjZXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3VyZWRGYWNldCBleHRlbmRzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIHJnYmEpIHtcbiAgICBzdXBlcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcyk7XG4gICAgXG4gICAgdGhpcy5yZ2JhID0gcmdiYTtcbiAgfVxuXG4gIGdldFZlcnRleENvbG91cnMoKSB7XG4gICAgY29uc3QgdmVydGV4Q29sb3VyID0gdGhpcy5yZ2JhLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzID0gW1xuICAgICAgICAgICAgdmVydGV4Q29sb3VyLFxuICAgICAgICAgICAgdmVydGV4Q29sb3VyLFxuICAgICAgICAgICAgdmVydGV4Q29sb3VyLFxuICAgICAgICAgIF07XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleENvbG91cnM7XG4gIH1cblxuICBmcm9tVmVydGljZXNBbmRNYXJnaW5PZkVycm9yKHZlcnRpY2VzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgbGV0IGNvbG91cmVkRmFjZXQgPSBudWxsO1xuXG4gICAgY29uc3QgYXJlYSA9IGNhbGN1bGF0ZUFyZWEodmVydGljZXMpLFxuICAgICAgICAgIGFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhhcmVhLCBtYXJnaW5PZkVycm9yKTtcblxuICAgIGlmICghYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybykge1xuICAgICAgY29uc3Qgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgICAgZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSk7XG5cbiAgICAgIGNvbG91cmVkRmFjZXQgPSBuZXcgQ29sb3VyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgdGhpcy5yZ2JhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3VyZWRGYWNldDtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGxldCB2ZXJ0aWNlcyA9IHRoaXMuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgbm9ybWFsID0gdGhpcy5nZXROb3JtYWwoKSxcbiAgICAgICAgZWRnZXMgPSB0aGlzLmdldEVkZ2VzKCk7XG5cbiAgICB2ZXJ0aWNlcyA9IGNsb25lVmVydGljZXModmVydGljZXMpO1xuICAgIG5vcm1hbCA9IGNsb25lTm9ybWFsKG5vcm1hbCk7XG4gICAgZWRnZXMgPSBjbG9uZUVkZ2VzKGVkZ2VzKTtcblxuICAgIGNvbnN0IGNvbG91cmVkRmFjZXQgPSBuZXcgQ29sb3VyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgdGhpcy5yZ2JhKTtcblxuICAgIHJldHVybiBjb2xvdXJlZEZhY2V0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Db29yZGluYXRlVHVwbGVzSW5kZXhUdXBsZUNvbG91ckFuZE1hcmdpbk9mRXJyb3IoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgY29sb3VyLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgbGV0IGNvbG91cmVkRmFjZXQgPSBudWxsO1xuXG4gICAgY29uc3QgdmVydGljZXMgPSB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZShjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCBWZXJ0ZXgpLFxuICAgICAgICAgIGFyZWEgPSBjYWxjdWxhdGVBcmVhKHZlcnRpY2VzKSxcbiAgICAgICAgICBhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8oYXJlYSwgbWFyZ2luT2ZFcnJvcik7XG5cbiAgICBpZiAoIWFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8pIHtcbiAgICAgIGNvbnN0IG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcywgTm9ybWFsKSxcbiAgICAgICAgICAgIGVkZ2VzID0gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpLFxuICAgICAgICAgICAgcmdiYSA9IFsgLi4uY29sb3VyLCAxIF07ICAvLy9cblxuICAgICAgY29sb3VyZWRGYWNldCA9IG5ldyBDb2xvdXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCByZ2JhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3VyZWRGYWNldDtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ2FudmFzRWxlbWVudCBmcm9tIFwiLi4vLi4vZWxlbWVudC9jYW52YXNcIjtcbmltcG9ydCBDb2xvdXJlZEZhY2V0IGZyb20gXCIuLi8uLi9wcmltaXRpdmUvZmFjZXQvY29sb3VyZWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3VyZWRDYW52YXNFbGVtZW50IGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKG1hc2tSZWZlcmVuY2UsIHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGNvbG91cikge1xuICAgIHN1cGVyKG1hc2tSZWZlcmVuY2UsIHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrcyk7XG5cbiAgICB0aGlzLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG4gICAgdGhpcy5pbmRleGVzID0gaW5kZXhlcztcbiAgICB0aGlzLmNvbG91ciA9IGNvbG91cjtcbiAgfVxuXG4gIGNyZWF0ZUZhY2V0cyhtYXJnaW5PZkVycm9yKSB7XG4gICAgc3VwZXIuY3JlYXRlRmFjZXRzKG1hcmdpbk9mRXJyb3IpO1xuXG4gICAgY29uc3QgaW5kZXhUdXBsZXMgPSB0aGlzLmluZGV4ZXMsICAvLy9cbiAgICAgICAgICBmYWNldHMgPSBpbmRleFR1cGxlcy5yZWR1Y2UoKGZhY2V0cywgaW5kZXhUdXBsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29vcmRpbmF0ZVR1cGxlcyA9IHRoaXMuY29vcmRpbmF0ZXMsIC8vL1xuICAgICAgICAgICAgICAgICAgY29sb3VyZWRGYWNldCA9IENvbG91cmVkRmFjZXQuZnJvbUNvb3JkaW5hdGVUdXBsZXNJbmRleFR1cGxlQ29sb3VyQW5kTWFyZ2luT2ZFcnJvcihjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCB0aGlzLmNvbG91ciwgbWFyZ2luT2ZFcnJvciksXG4gICAgICAgICAgICAgICAgICBmYWNldCA9IGNvbG91cmVkRmFjZXQ7ICAvLy9cblxuICAgICAgICAgICAgaWYgKGZhY2V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGZhY2V0cy5wdXNoKGZhY2V0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhY2V0cztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICB0aGlzLnNldEZhY2V0cyhmYWNldHMpO1xuICB9XG5cbiAgYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpO1xuXG4gICAgY29sb3VyUmVuZGVyZXIuYWRkRmFjZXRzKGZhY2V0cyk7XG5cbiAgICBzdXBlci5hZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBjb2xvdXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGNvbG91ciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTsgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyByb3RhdGVWZXJ0aWNlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmVydGljZXNcIjtcbmltcG9ydCB7IGludmVydDIsIGludmVydDMgfSBmcm9tIFwiLi4vbWF0aHMvbWF0cml4XCI7XG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZUFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVhdGVybmlvblwiO1xuaW1wb3J0IHsgYWRkMiwgbXVsdGlwbHkyLCB0cmFuc2Zvcm0yLCB0cmFuc2Zvcm0zIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcykge1xuICB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVDb29yZGluYXRlVHVwbGVzLm1hcCgodGV4dHVyZUNvb3JkaW5hdGVUdXBsZSkgPT4ge1xuICAgIHRleHR1cmVDb29yZGluYXRlVHVwbGUgPSB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlLnNsaWNlKCk7ICAvLy9cblxuICAgIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlO1xuICB9KTtcblxuICByZXR1cm4gdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgZXh0ZW50KSB7XG4gIGNvbnN0IHsgbGVmdCwgYm90dG9tLCB3aWR0aCwgaGVpZ2h0IH0gPSBleHRlbnQsXG4gICAgICAgIG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMubWFwKCh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlKSA9PiB7XG4gICAgICAgICAgY29uc3QgbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZSA9IGFkZDIobXVsdGlwbHkyKHRleHR1cmVDb29yZGluYXRlVHVwbGUsIFsgd2lkdGgsIGhlaWdodCBdICksIFsgbGVmdCwgYm90dG9tIF0pO1xuXG4gICAgICAgICAgcmV0dXJuIG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGU7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModmVydGljZXMsIG5vcm1hbCwgcGFyZW50VmVydGljZXMsIHRleHR1cmVDb29yZGluYXRlVHVwbGVzKSB7XG4gIGNvbnN0IGFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbihub3JtYWwpLFxuICAgICAgICByb3RhdGlvblF1YXRlcm5pb24gPSBhcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb247IC8vL1xuXG4gIGNvbnN0IHJvdGF0ZWRWZXJ0aWNlcyA9IHJvdGF0ZVZlcnRpY2VzKHZlcnRpY2VzLCByb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gIHBhcmVudFZlcnRpY2VzID0gcm90YXRlVmVydGljZXMocGFyZW50VmVydGljZXMsIHJvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgdmVydGljZXMgPSByb3RhdGVkVmVydGljZXM7ICAvLy9cblxuICBjb25zdCBmaXJzdFZlcnRleCA9IGZpcnN0KHZlcnRpY2VzKSxcbiAgICAgICAgc2Vjb25kVmVydGV4ID0gc2Vjb25kKHZlcnRpY2VzKSxcbiAgICAgICAgdGhpcmRWZXJ0ZXggPSB0aGlyZCh2ZXJ0aWNlcyksXG4gICAgICAgIGZpcnN0UGFyZW50VmVydGV4ID0gZmlyc3QocGFyZW50VmVydGljZXMpLFxuICAgICAgICBzZWNvbmRQYXJlbnRWZXJ0ZXggPSBzZWNvbmQocGFyZW50VmVydGljZXMpLFxuICAgICAgICB0aGlyZFBhcmVudFZlcnRleCA9IHRoaXJkKHBhcmVudFZlcnRpY2VzKSxcbiAgICAgICAgZmlyc3RUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlID0gZmlyc3QodGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpLFxuICAgICAgICBzZWNvbmRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlID0gc2Vjb25kKHRleHR1cmVDb29yZGluYXRlVHVwbGVzKSxcbiAgICAgICAgdGhpcmRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlID0gdGhpcmQodGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpLFxuICAgICAgICBmaXJzdFZlcnRleFBvc2l0aW9uID0gZmlyc3RWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgc2Vjb25kVmVydGV4UG9zaXRpb24gPSBzZWNvbmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgdGhpcmRWZXJ0ZXhQb3NpdGlvbiA9IHRoaXJkVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIGZpcnN0UGFyZW50VmVydGV4UG9zaXRpb24gPSBmaXJzdFBhcmVudFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICBzZWNvbmRQYXJlbnRWZXJ0ZXhQb3NpdGlvbiA9IHNlY29uZFBhcmVudFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICB0aGlyZFBhcmVudFZlcnRleFBvc2l0aW9uID0gdGhpcmRQYXJlbnRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgUjF4ID0gZmlyc3RWZXJ0ZXhQb3NpdGlvblswXSwgIC8vL1xuICAgICAgICBSMXkgPSBmaXJzdFZlcnRleFBvc2l0aW9uWzFdLCAgLy8vXG4gICAgICAgIFIyeCA9IHNlY29uZFZlcnRleFBvc2l0aW9uWzBdLCAvLy9cbiAgICAgICAgUjJ5ID0gc2Vjb25kVmVydGV4UG9zaXRpb25bMV0sIC8vL1xuICAgICAgICBSM3ggPSB0aGlyZFZlcnRleFBvc2l0aW9uWzBdLCAgLy8vXG4gICAgICAgIFIzeSA9IHRoaXJkVmVydGV4UG9zaXRpb25bMV0sICAvLy9cbiAgICAgICAgUDF4ID0gZmlyc3RQYXJlbnRWZXJ0ZXhQb3NpdGlvblswXSwgLy8vXG4gICAgICAgIFAyeCA9IHNlY29uZFBhcmVudFZlcnRleFBvc2l0aW9uWzBdLCAvLy9cbiAgICAgICAgUDN4ID0gdGhpcmRQYXJlbnRWZXJ0ZXhQb3NpdGlvblswXSwgLy8vXG4gICAgICAgIFAxeSA9IGZpcnN0UGFyZW50VmVydGV4UG9zaXRpb25bMV0sIC8vL1xuICAgICAgICBQMnkgPSBzZWNvbmRQYXJlbnRWZXJ0ZXhQb3NpdGlvblsxXSwgLy8vXG4gICAgICAgIFAzeSA9IHRoaXJkUGFyZW50VmVydGV4UG9zaXRpb25bMV0sIC8vL1xuICAgICAgICBQMXUgPSBmaXJzdFRleHR1cmVDb29yZGluYXRlVHVwbGVbMF0sIC8vL1xuICAgICAgICBQMXYgPSBmaXJzdFRleHR1cmVDb29yZGluYXRlVHVwbGVbMV0sIC8vL1xuICAgICAgICBQMnUgPSBzZWNvbmRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlWzBdLCAvLy9cbiAgICAgICAgUDJ2ID0gc2Vjb25kVGV4dHVyZUNvb3JkaW5hdGVUdXBsZVsxXSwgLy8vXG4gICAgICAgIFAzdSA9IHRoaXJkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZVswXSwgLy8vXG4gICAgICAgIFAzdiA9IHRoaXJkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZVsxXSwgLy8vXG4gICAgICAgIHRleHR1cmVDb29yZGluYXRlc01hdHJpeCA9IGludmVydDMoWyAxLCAxLCAxLCBQMXUsIFAydSwgUDN1LCBQMXYsIFAydiwgUDN2IF0pLFxuICAgICAgICBmaXJzdFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnQgPSB0cmFuc2Zvcm0zKFsgUDF4LCBQMngsIFAzeCBdLCB0ZXh0dXJlQ29vcmRpbmF0ZXNNYXRyaXgpLFxuICAgICAgICBzZWNvbmRUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50ID0gdHJhbnNmb3JtMyhbIFAxeSwgUDJ5LCBQM3kgXSwgdGV4dHVyZUNvb3JkaW5hdGVzTWF0cml4KSxcbiAgICAgICAgT3ggPSBmaXJzdFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnRbMF0sICAvLy9cbiAgICAgICAgVXggPSBmaXJzdFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnRbMV0sICAvLy9cbiAgICAgICAgVnggPSBmaXJzdFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnRbMl0sICAvLy9cbiAgICAgICAgT3kgPSBzZWNvbmRUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50WzBdLCAgLy8vXG4gICAgICAgIFV5ID0gc2Vjb25kVHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudFsxXSwgIC8vL1xuICAgICAgICBWeSA9IHNlY29uZFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnRbMl0sICAvLy9cbiAgICAgICAgdHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc01hdHJpeCA9IGludmVydDIoWyBVeCwgVXksIFZ4LCBWeSBdKSxcbiAgICAgICAgZmlyc3RBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlID0gdHJhbnNmb3JtMihbIFIxeCAtIE94LCBSMXkgLSBPeSBdLCB0cmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzTWF0cml4KSxcbiAgICAgICAgc2Vjb25kQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZSA9IHRyYW5zZm9ybTIoWyBSMnggLSBPeCwgUjJ5IC0gT3kgXSwgdHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc01hdHJpeCksXG4gICAgICAgIHRoaXJkQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZSA9IHRyYW5zZm9ybTIoWyBSM3ggLSBPeCwgUjN5IC0gT3kgXSwgdHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc01hdHJpeCksXG4gICAgICAgIGFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZSA9IFtcbiAgICAgICAgICBmaXJzdEFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGUsXG4gICAgICAgICAgc2Vjb25kQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZSxcbiAgICAgICAgICB0aGlyZEFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGUsXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIGFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4uL2VkZ2VcIjtcbmltcG9ydCBGYWNldCBmcm9tIFwiLi4vZmFjZXRcIjtcbmltcG9ydCBOb3JtYWwgZnJvbSBcIi4uL25vcm1hbFwiO1xuaW1wb3J0IFZlcnRleCBmcm9tIFwiLi4vdmVydGV4XCI7XG5cbmltcG9ydCB7IHBlcm11dGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXBwcm94aW1hdGVcIjtcbmltcG9ydCB7IHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy92ZXJ0aWNlc1wiO1xuaW1wb3J0IHsgY2xvbmVFZGdlcywgY2xvbmVOb3JtYWwsIGNsb25lVmVydGljZXMsIGNhbGN1bGF0ZUFyZWEsIGNhbGN1bGF0ZUVkZ2VzLCBjYWxjdWxhdGVOb3JtYWwgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2ZhY2V0XCI7XG5pbXBvcnQgeyBjbG9uZVRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBjYWxjdWxhdGVNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgY2FsY3VsYXRlQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdGV4dHVyZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlZEZhY2V0IGV4dGVuZHMgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcykge1xuICAgIHN1cGVyKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzKTtcblxuICAgIHRoaXMuaW1hZ2VOYW1lID0gaW1hZ2VOYW1lO1xuXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVDb29yZGluYXRlVHVwbGVzO1xuICB9XG5cbiAgZ2V0SW1hZ2VOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmltYWdlTmFtZTtcbiAgfVxuXG4gIGdldFRleHR1cmVDb29yZGluYXRlVHVwbGVzKCkge1xuICAgIHJldHVybiB0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzO1xuICB9XG5cbiAgZ2V0TWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMoaW1hZ2VNYXBKU09OKSB7XG4gICAgY29uc3QganNvbiA9IGltYWdlTWFwSlNPTlt0aGlzLmltYWdlTmFtZV0sXG4gICAgICAgICAgZXh0ZW50ID0ganNvbiwgIC8vL1xuICAgICAgICAgIG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gY2FsY3VsYXRlTWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgZXh0ZW50KTtcblxuICAgIHJldHVybiBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcbiAgfVxuXG4gIHBlcm11dGUocGxhY2VzKSB7XG4gICAgc3VwZXIucGVybXV0ZShwbGFjZXMpO1xuXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHBlcm11dGUodGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgcGxhY2VzKTtcbiAgfVxuXG4gIGZyb21WZXJ0aWNlc0FuZE1hcmdpbk9mRXJyb3IodmVydGljZXMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBsZXQgdGV4dHVyZWRGYWNldCA9IG51bGw7XG5cbiAgICBjb25zdCBhcmVhID0gY2FsY3VsYXRlQXJlYSh2ZXJ0aWNlcyksXG4gICAgICAgICAgYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybyA9IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKGFyZWEsIG1hcmdpbk9mRXJyb3IpO1xuXG4gICAgaWYgKCFhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKSB7XG4gICAgICBjb25zdCBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCksXG4gICAgICAgICAgICBwYXJlbnRWZXJ0aWNlcyA9IHRoaXMudmVydGljZXMsIC8vL1xuICAgICAgICAgICAgYWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlID0gY2FsY3VsYXRlQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh2ZXJ0aWNlcywgbm9ybWFsLCBwYXJlbnRWZXJ0aWNlcywgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyksXG4gICAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKSxcbiAgICAgICAgICAgIGltYWdlTmFtZSA9IHRoaXMuaW1hZ2VOYW1lLFxuICAgICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBhZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGU7ICAvLy9cblxuICAgICAgdGV4dHVyZWRGYWNldCA9IG5ldyBUZXh0dXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dHVyZWRGYWNldDtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGxldCB2ZXJ0aWNlcyA9IHRoaXMuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgbm9ybWFsID0gdGhpcy5nZXROb3JtYWwoKSxcbiAgICAgICAgZWRnZXMgPSB0aGlzLmdldEVkZ2VzKCk7XG5cbiAgICB2ZXJ0aWNlcyA9IGNsb25lVmVydGljZXModmVydGljZXMpO1xuICAgIG5vcm1hbCA9IGNsb25lTm9ybWFsKG5vcm1hbCk7XG4gICAgZWRnZXMgPSBjbG9uZUVkZ2VzKGVkZ2VzKTtcblxuICAgIGNvbnN0IGltYWdlTmFtZSA9IHRoaXMuaW1hZ2VOYW1lLCAvLy9cbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IGNsb25lVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyksXG4gICAgICAgICAgdGV4dHVyZWRGYWNldCA9IG5ldyBUZXh0dXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcblxuICAgIHJldHVybiB0ZXh0dXJlZEZhY2V0O1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXh0dXJlQ29vcmRpbmF0ZVR1cGxlc0Nvb3JkaW5hdGVzVHVwbGVzSW5kZXhUdXBsZUltYWdlTmFtZUFuZE1hcmdpbk9mRXJyb3IodGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIGltYWdlTmFtZSwgbWFyZ2luT2ZFcnJvcikge1xuICAgIGxldCB0ZXh0dXJlZEZhY2V0ID0gbnVsbDtcblxuICAgIGNvbnN0IHZlcnRpY2VzID0gdmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGUoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgVmVydGV4KSxcbiAgICAgICAgICBhcmVhID0gY2FsY3VsYXRlQXJlYSh2ZXJ0aWNlcyksXG4gICAgICAgICAgYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybyA9IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKGFyZWEsIG1hcmdpbk9mRXJyb3IpO1xuXG4gICAgaWYgKCFhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKSB7XG4gICAgICBjb25zdCBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCksXG4gICAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKTtcblxuICAgICAgdGV4dHVyZWRGYWNldCA9IG5ldyBUZXh0dXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dHVyZWRGYWNldDtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ2FudmFzRWxlbWVudCBmcm9tIFwiLi4vLi4vZWxlbWVudC9jYW52YXNcIjtcbmltcG9ydCBUZXh0dXJlZEZhY2V0IGZyb20gXCIuLi8uLi9wcmltaXRpdmUvZmFjZXQvdGV4dHVyZWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZWRDYW52YXNFbGVtZW50IGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKG1hc2tSZWZlcmVuY2UsIHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzKSB7XG4gICAgc3VwZXIobWFza1JlZmVyZW5jZSwgdHJhbnNmb3JtLCBmYWNldHMsIG1hc2tzKTtcblxuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcbiAgICB0aGlzLmluZGV4ZXMgPSBpbmRleGVzO1xuICAgIHRoaXMuaW1hZ2VOYW1lID0gaW1hZ2VOYW1lO1xuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzID0gdGV4dHVyZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgY3JlYXRlRmFjZXRzKG1hcmdpbk9mRXJyb3IpIHtcbiAgICBzdXBlci5jcmVhdGVGYWNldHMobWFyZ2luT2ZFcnJvcik7XG5cbiAgICBjb25zdCBpbmRleFR1cGxlcyA9IHRoaXMuaW5kZXhlcywgIC8vL1xuICAgICAgICAgIGZhY2V0cyA9IGluZGV4VHVwbGVzLnJlZHVjZSgoZmFjZXRzLCBpbmRleFR1cGxlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzW2luZGV4XSwgLy8vXG4gICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVUdXBsZXMgPSB0aGlzLmNvb3JkaW5hdGVzLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgdGV4dHVyZWRGYWNldCA9IFRleHR1cmVkRmFjZXQuZnJvbVRleHR1cmVDb29yZGluYXRlVHVwbGVzQ29vcmRpbmF0ZXNUdXBsZXNJbmRleFR1cGxlSW1hZ2VOYW1lQW5kTWFyZ2luT2ZFcnJvcih2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgdGhpcy5pbWFnZU5hbWUsIG1hcmdpbk9mRXJyb3IpLFxuICAgICAgICAgICAgICAgICAgICBmYWNldCA9IHRleHR1cmVkRmFjZXQ7ICAvLy9cblxuICAgICAgICAgICAgaWYgKGZhY2V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGZhY2V0cy5wdXNoKGZhY2V0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhY2V0cztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICB0aGlzLnNldEZhY2V0cyhmYWNldHMpO1xuICB9XG5cbiAgYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpO1xuXG4gICAgdGV4dHVyZVJlbmRlcmVyLmFkZEZhY2V0cyhmYWNldHMpO1xuXG4gICAgc3VwZXIuYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpOyB9XG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIENhbnZhcyB9IGZyb20gXCIuL2NhbnZhc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWFjdCB9IGZyb20gXCIuL3JlYWN0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hc2sgfSBmcm9tIFwiLi9lbGVtZW50L21hc2tcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGFydCB9IGZyb20gXCIuL2VsZW1lbnQvcGFydFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTY2VuZSB9IGZyb20gXCIuL2VsZW1lbnQvc2NlbmVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FtZXJhIH0gZnJvbSBcIi4vZWxlbWVudC9jYW1lcmFcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgR2FtaW5nQ2FtZXJhIH0gZnJvbSBcIi4vZWxlbWVudC9jYW1lcmEvZ2FtaW5nXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIERlc2lnbkNhbWVyYSB9IGZyb20gXCIuL2VsZW1lbnQvY2FtZXJhL2Rlc2lnblwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4vZWxlbWVudC9jYW52YXNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcHJlbG9hZFV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9wcmVsb2FkXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbG91cmVkQ2FudmFzRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnQvY2FudmFzL2NvbG91cmVkXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRleHR1cmVkQ2FudmFzRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnQvY2FudmFzL3RleHR1cmVkXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgdmVjdG9yTWF0aHMgfSBmcm9tIFwiLi9tYXRocy92ZWN0b3JcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWF0cml4TWF0aHMgfSBmcm9tIFwiLi9tYXRocy9tYXRyaXhcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ29sb3VyZWRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7IC8vL1xuXG5jb25zdCBjb29yZGluYXRlcyA9IFtcblxuICAgICAgICBbIDAsIDAsIDAgXSxcbiAgICAgICAgWyAxLCAwLCAwIF0sXG4gICAgICAgIFsgMCwgMSwgMCBdLFxuICAgICAgICBbIDEsIDEsIDAgXSxcblxuICAgICAgXSxcbiAgICAgIGluZGV4ZXMgPSBbXG5cbiAgICAgICAgWyAwLCAxLCAzIF0sXG4gICAgICAgIFsgMywgMiwgMCBdLFxuXG4gICAgICBdLFxuICAgICAgZGVmYXVsdENvbG91ciA9IFsgMSwgMCwgMCBdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvdXJlZFNxdWFyZSBleHRlbmRzIENvbG91cmVkQ2FudmFzRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gIFx0Y29uc3QgeyBjb2xvdXIgPSBkZWZhdWx0Q29sb3VyIH0gPSBwcm9wZXJ0aWVzLFxuXHRcdFx0ICAgIGNvbG91cmVkU3F1YXJlID0gQ29sb3VyZWRDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENvbG91cmVkU3F1YXJlLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgY29sb3VyKTtcblxuICBcdHJldHVybiBjb2xvdXJlZFNxdWFyZTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ29sb3VyZWRTcXVhcmUgZnJvbSBcIi4vY29sb3VyZWRTcXVhcmVcIjtcblxuY29uc3QgRmFjZSA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgY29sb3VyIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIHJldHVybiAoXG5cbiAgICA8Q29sb3VyZWRTcXVhcmUgY29sb3VyPXtjb2xvdXJ9IHBvc2l0aW9uPXtbIC0wLjUsIC0wLjUsICswLjUgXX0gLz5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmFjZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEZhY2UgZnJvbSBcIi4vZmFjZVwiO1xuXG5jb25zdCBkZWZhdWx0Q29sb3VyID0gWyAxLCAxLCAwIF07XG5cbmNvbnN0IEN1YmUgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IGNvbG91ciA9IGRlZmF1bHRDb2xvdXIgfSA9IHByb3BlcnRpZXM7XG5cbiAgcmV0dXJuIChbXG5cbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbICAgMCwgICAwLCAwIF19IC8+LFxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgKzkwLCAgIDAsIDAgXX0gLz4sXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAgIDAsICs5MCwgMCBdfSAvPixcblxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgMTgwLCAgIDAsIDAgXX0gLz4sXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAtOTAsICAgMCwgMCBdfSAvPixcbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbICAgMCwgLTkwLCAwIF19IC8+LFxuXG4gIF0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3ViZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ2FudmFzLCBTY2VuZSwgUGFydCwgRGVzaWduQ2FtZXJhIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IEN1YmUgZnJvbSBcIi4vZWxlbWVudC9jdWJlXCI7XG5cbmNvbnN0IGN1YmVFeGFtcGxlID0gKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbiAgcmV0dXJuIChcblxuICAgIDxTY2VuZSBjYW52YXM9e2NhbnZhc30gPlxuICAgICAgPFBhcnQ+XG4gICAgICAgIDxDdWJlIGNvbG91cj17WyAwLCAxLCAwIF19IC8+XG4gICAgICA8L1BhcnQ+XG4gICAgICA8RGVzaWduQ2FtZXJhIHBlcnNpc3QgLz5cbiAgICA8L1NjZW5lPlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjdWJlRXhhbXBsZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVGV4dHVyZWRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7IC8vL1xuXG5jb25zdCBjb29yZGluYXRlcyA9IFtcblxuICAgICAgICBbIDAsIDAsIDAgXSxcbiAgICAgICAgWyAxLCAwLCAwIF0sXG4gICAgICAgIFsgMCwgMSwgMCBdLFxuICAgICAgICBbIDEsIDEsIDAgXSxcblxuICAgICAgXSxcbiAgICAgIGluZGV4ZXMgPSBbXG5cbiAgICAgICAgWyAwLCAxLCAzIF0sXG4gICAgICAgIFsgMywgMiwgMCBdLFxuXG4gICAgICBdLFxuICAgICAgZGVmYXVsdEltYWdlTmFtZSA9IFwicGxhc3Rlci5qcGdcIixcbiAgICAgIGRlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXMgPSBbXG5cbiAgICAgICAgWyBbIDAsIDAgXSwgWyAyLCAwIF0sIFsgMiwgMiBdIF0sXG4gICAgICAgIFsgWyAyLCAyIF0sIFsgMCwgMiBdLCBbIDAsIDAgXSBdLFxuXG4gICAgICBdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlZFF1YWRyYW5nbGUgZXh0ZW5kcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW1hZ2VOYW1lID0gZGVmYXVsdEltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzID0gZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0ZXh0dXJlZFF1YWRyYW5nbGUgPSBUZXh0dXJlZENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoVGV4dHVyZWRRdWFkcmFuZ2xlLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVkUXVhZHJhbmdsZTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDYW52YXMsIFNjZW5lLCBQYXJ0LCBNYXNrLCBEZXNpZ25DYW1lcmEsIHByZWxvYWRVdGlsaXRpZXMgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgQ29sb3VyZWRTcXVhcmUgZnJvbSBcIi4vZWxlbWVudC9jb2xvdXJlZFNxdWFyZVwiO1xuaW1wb3J0IFRleHR1cmVkUXVhZHJhbmdsZSBmcm9tIFwiLi9lbGVtZW50L3RleHR1cmVkUXVhZHJhbmdsZVwiO1xuXG5jb25zdCB7IHByZWxvYWRJbWFnZXMgfSA9IHByZWxvYWRVdGlsaXRpZXMsXG4gICAgICB7IGhvc3QsIGltYWdlTmFtZXMsIGltYWdlRGlyZWN0b3J5VVJJIH0gPSBnbG9iYWxUaGlzO1xuXG5jb25zdCB0aWxpbmdFeGFtcGxlID0gKCkgPT4ge1xuICBwcmVsb2FkSW1hZ2VzKGhvc3QsIGltYWdlTmFtZXMsIGltYWdlRGlyZWN0b3J5VVJJLCAoaW1hZ2VzLCBpbWFnZU5hbWVzKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPFNjZW5lIGNhbnZhcz17Y2FudmFzfSA+XG4gICAgICAgIDxQYXJ0IGltYWdlcz17aW1hZ2VzfSBpbWFnZU5hbWVzPXtpbWFnZU5hbWVzfSBpbWFnZVRpbGluZyA+XG4gICAgICAgICAgPE1hc2sgcmVmZXJlbmNlPVwibWFza1wiPlxuICAgICAgICAgICAgPENvbG91cmVkU3F1YXJlIHNjYWxlPXtbIDAuMjUsIDAuMjUsIDEgXX0gcG9zaXRpb249e1sgMC4xMjUsIDAuMTI1LCAwLjEyNSBdfSAvPlxuICAgICAgICAgIDwvTWFzaz5cbiAgICAgICAgICA8VGV4dHVyZWRRdWFkcmFuZ2xlIHBvc2l0aW9uPXtbIDAsIDAsIDAgXX0gaW1hZ2VOYW1lPVwiZmxvb3Jib2FyZHMuanBnXCIgbWFza1JlZmVyZW5jZT1cIm1hc2tcIiAvPlxuICAgICAgICAgIDxUZXh0dXJlZFF1YWRyYW5nbGUgcG9zaXRpb249e1sgLTAuNSwgLTAuNSwgLTAuNSBdfSBpbWFnZU5hbWU9XCJwYXZpbmcuanBnXCIgbWFza1JlZmVyZW5jZT1cIm1hc2tcIiAvPlxuICAgICAgICA8L1BhcnQ+XG4gICAgICAgIDxEZXNpZ25DYW1lcmEvPlxuICAgICAgPC9TY2VuZT5cblxuICAgICk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdGlsaW5nRXhhbXBsZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ2FudmFzLCBTY2VuZSwgUGFydCwgRGVzaWduQ2FtZXJhIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IENvbG91cmVkU3F1YXJlIGZyb20gXCIuL2VsZW1lbnQvY29sb3VyZWRTcXVhcmVcIjtcblxuY29uc3Qgc2ltcGxlRXhhbXBsZSA9ICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gIHJldHVybiAoXG5cbiAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgICAgPFBhcnQ+XG4gICAgICAgIDxDb2xvdXJlZFNxdWFyZSBjb2xvdXI9e1sgMCwgMCwgMSBdfSAvPlxuICAgICAgPC9QYXJ0PlxuICAgICAgPERlc2lnbkNhbWVyYS8+XG4gICAgPC9TY2VuZT5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2ltcGxlRXhhbXBsZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ2FudmFzLCBTY2VuZSwgTWFzaywgUGFydCwgRGVzaWduQ2FtZXJhIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IEN1YmUgZnJvbSBcIi4vZWxlbWVudC9jdWJlXCI7XG5cbmNvbnN0IG1hc2tpbmdFeGFtcGxlID0gKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbiAgcmV0dXJuIChcblxuICAgIDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG4gICAgICA8UGFydD5cbiAgICAgICAgPE1hc2sgcmVmZXJlbmNlPVwicXVhcnRlci1zaXplZC1jdWJlXCI+XG4gICAgICAgICAgPEN1YmUgc2NhbGU9e1sgMS80LCAxLzQsIDEvNCBdfSAvPlxuICAgICAgICA8L01hc2s+XG4gICAgICAgIDxNYXNrIHJlZmVyZW5jZT1cImhhbGYtc2l6ZWQtY3ViZVwiPlxuICAgICAgICAgIDxDdWJlIHNjYWxlPXtbIDEvMiwgMS8yLCAxLzIgXX0gbWFza1JlZmVyZW5jZT1cInF1YXJ0ZXItc2l6ZWQtY3ViZVwiLz5cbiAgICAgICAgPC9NYXNrPlxuICAgICAgICA8Q3ViZSBtYXNrUmVmZXJlbmNlPVwiaGFsZi1zaXplZC1jdWJlXCIgLz5cbiAgICAgIDwvUGFydD5cbiAgICAgIDxEZXNpZ25DYW1lcmEvPlxuICAgIDwvU2NlbmU+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1hc2tpbmdFeGFtcGxlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBUZXh0dXJlZENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgLy8vXG5cbmNvbnN0IGNvb3JkaW5hdGVzID0gW1xuXG4gICAgICAgIFsgICAwLCAwLCAwIF0sXG4gICAgICAgIFsgICAxLCAwLCAwIF0sXG4gICAgICAgIFsgMC41LCAxLCAwIF0sXG5cbiAgICAgIF0sXG4gICAgICBpbmRleGVzID0gW1xuXG4gICAgICAgIFsgMCwgMSwgMiBdLFxuXG4gICAgICBdLFxuICAgICAgZGVmYXVsdEltYWdlTmFtZSA9IFwic3RyaXBlcy5qcGdcIixcbiAgICAgIGRlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXMgPSBbXG5cbiAgICAgICAgWyBbIDAsIDAgXSwgWyAxLCAwIF0sIFsgMC41LCAxIF0gXSxcblxuICAgICAgXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZWRUcmlhbmdsZSBleHRlbmRzIFRleHR1cmVkQ2FudmFzRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbWFnZU5hbWUgPSBkZWZhdWx0SW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSBkZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRleHR1cmVkVHJpYW5nbGUgPSBUZXh0dXJlZENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoVGV4dHVyZWRUcmlhbmdsZSwgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiB0ZXh0dXJlZFRyaWFuZ2xlO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0dXJlZFRyaWFuZ2xlIGZyb20gXCIuL3RleHR1cmVkVHJpYW5nbGVcIjtcblxuY29uc3QgU2lkZSA9IChwcm9wZXJ0aWVzKSA9PlxuXG4gIDxUZXh0dXJlZFRyaWFuZ2xlIHNjYWxlPXtbIDEsIDEvTWF0aC5zcXJ0KDIpLCAxIF19IHBvc2l0aW9uPXtbIC0wLjUsIDAsIDAuNSBdfSByb3RhdGlvbnM9e1sgLTQ1LCAwLCAwIF19IC8+XG5cbjtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNpZGUgZnJvbSBcIi4vc2lkZVwiO1xuXG5jb25zdCBQeXJhbWlkID0gKHByb3BlcnRpZXMpID0+IFtcblxuICA8U2lkZSAvPixcbiAgPFNpZGUgcm90YXRpb25zPXtbIDAsICA5MCwgMCBdfSAvPixcbiAgPFNpZGUgcm90YXRpb25zPXtbIDAsIDE4MCwgMCBdfSAvPixcbiAgPFNpZGUgcm90YXRpb25zPXtbIDAsIDI3MCwgMCBdfSAvPixcblxuXTtcblxuZXhwb3J0IGRlZmF1bHQgUHlyYW1pZDtcblxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBQYXJ0LCBTY2VuZSwgQ2FudmFzLCBHYW1pbmdDYW1lcmEsIHByZWxvYWRVdGlsaXRpZXMgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgUHlyYW1pZCBmcm9tIFwiLi9lbGVtZW50L3B5cmFtaWRcIjtcblxuY29uc3QgeyBwcmVsb2FkSW1hZ2VNYXAgfSA9IHByZWxvYWRVdGlsaXRpZXMsXG4gICAgICB7IGhvc3QsIGltYWdlTWFwVVJJLCBpbWFnZU1hcEpTT04gfSA9IGdsb2JhbFRoaXM7XG5cbmNvbnN0IHB5cmFtaWRFeGFtcGxlID0gKCkgPT4ge1xuICBwcmVsb2FkSW1hZ2VNYXAoaG9zdCwgaW1hZ2VNYXBVUkksIGltYWdlTWFwSlNPTiwgKGltYWdlTWFwLCBpbWFnZU1hcEpTT04pID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgICAgICA8UGFydCBpbWFnZU1hcD17aW1hZ2VNYXB9IGltYWdlTWFwSlNPTj17aW1hZ2VNYXBKU09OfT5cbiAgICAgICAgICA8UHlyYW1pZC8+XG4gICAgICAgIDwvUGFydD5cbiAgICAgICAgPEdhbWluZ0NhbWVyYS8+XG4gICAgICA8L1NjZW5lPlxuXG4gICAgKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBweXJhbWlkRXhhbXBsZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFwiLi94Z2xcIjtcblxuaW1wb3J0IGN1YmVFeGFtcGxlIGZyb20gXCIuL2V4YW1wbGUvY3ViZVwiO1xuaW1wb3J0IHRpbGluZ0V4YW1wbGUgZnJvbSBcIi4vZXhhbXBsZS90aWxpbmdcIjtcbmltcG9ydCBzaW1wbGVFeGFtcGxlIGZyb20gXCIuL2V4YW1wbGUvc2ltcGxlXCI7XG5pbXBvcnQgbWFza2luZ0V4YW1wbGUgZnJvbSBcIi4vZXhhbXBsZS9tYXNraW5nXCI7XG5pbXBvcnQgcHlyYW1pZEV4YW1wbGUgZnJvbSBcIi4vZXhhbXBsZS9weXJhbWlkXCI7XG5cbmNvbnN0IGV4YW1wbGUgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKTsgIC8vL1xuXG5zd2l0Y2ggKGV4YW1wbGUpIHtcbiAgY2FzZSBcImN1YmVcIjpcbiAgICBjdWJlRXhhbXBsZSgpO1xuXG4gICAgYnJlYWs7XG5cbiAgY2FzZSBcInRpbGluZ1wiOlxuICAgIHRpbGluZ0V4YW1wbGUoKTtcblxuICAgIGJyZWFrO1xuXG4gIGNhc2UgXCJzaW1wbGVcIjpcbiAgICBzaW1wbGVFeGFtcGxlKCk7XG5cbiAgICBicmVhaztcblxuICBjYXNlIFwibWFza2luZ1wiOlxuICAgIG1hc2tpbmdFeGFtcGxlKCk7XG5cbiAgICBicmVhaztcblxuICBjYXNlIFwicHlyYW1pZFwiOlxuICAgIHB5cmFtaWRFeGFtcGxlKCk7XG5cbiAgICBicmVhaztcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7QUFBQTs7Ozs7Ozs7Ozs7OztVQWNhLG9CQUFBO2VBQUE7O1VBTkEsWUFBQTtlQUFBOztVQUhBLFNBQUE7ZUFBQTs7VUFXQSxnQ0FBQTtlQUFBOztVQU5BLGdCQUFBO2VBQUE7O1VBT0EsaUNBQUE7ZUFBQTs7VUFWQSxXQUFBO2VBQUE7O1VBRUEsZ0JBQUE7ZUFBQTs7VUFMQSxTQUFBO2VBQUE7O1VBU0Esb0JBQUE7ZUFBQTs7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
