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

  // node_modules/necessary/lib/jsonTypes.js
  var require_jsonTypes = __commonJS((exports) => {
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
      get ARRAY_JSON_TYPE() {
        return ARRAY_JSON_TYPE;
      },
      get BOOLEAN_JSON_TYPE() {
        return BOOLEAN_JSON_TYPE;
      },
      get NUMBER_JSON_TYPE() {
        return NUMBER_JSON_TYPE;
      },
      get OBJECT_JSON_TYPE() {
        return OBJECT_JSON_TYPE;
      },
      get PRIMITIVE_JSON_TYPE() {
        return PRIMITIVE_JSON_TYPE;
      },
      get STRING_JSON_TYPE() {
        return STRING_JSON_TYPE;
      },
      get default() {
        return _default;
      }
    });
    var ARRAY_JSON_TYPE = "array";
    var OBJECT_JSON_TYPE = "object";
    var STRING_JSON_TYPE = "string";
    var NUMBER_JSON_TYPE = "number";
    var BOOLEAN_JSON_TYPE = "boolean";
    var PRIMITIVE_JSON_TYPE = "primitive";
    var _default = {
      ARRAY_JSON_TYPE,
      OBJECT_JSON_TYPE,
      STRING_JSON_TYPE,
      NUMBER_JSON_TYPE,
      BOOLEAN_JSON_TYPE,
      PRIMITIVE_JSON_TYPE
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
      get CONFLICT_409_STATUS_CODE() {
        return CONFLICT_409_STATUS_CODE;
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
      get METHOD_NOT_ALLOWED_405_STATUS_CODE() {
        return METHOD_NOT_ALLOWED_405_STATUS_CODE;
      },
      get NOT_ACCEPTABLE_406_STATUS_CODE() {
        return NOT_ACCEPTABLE_406_STATUS_CODE;
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
      get UNPROCESSABLE_ENTITY_422_STATUS_CODE() {
        return UNPROCESSABLE_ENTITY_422_STATUS_CODE;
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
    var CONFLICT_409_STATUS_CODE = 409;
    var SEE_OTHER_303_STATUS_CODE = 303;
    var FORBIDDEN_403_STATUS_CODE = 403;
    var NOT_FOUND_404_STATUS_CODE = 404;
    var NO_CONTENT_204_STATUS_CODE = 204;
    var BAD_GATEWAY_502_STATUS_CODE = 502;
    var BAD_REQUEST_400_STATUS_CODE = 400;
    var UNAUTHORIZED_401_STATUS_CODE = 401;
    var NOT_ACCEPTABLE_406_STATUS_CODE = 406;
    var REQUEST_TIMEOUT_408_STATUS_CODE = 408;
    var TOO_MANY_REQUESTS_429_STATUS_CODE = 429;
    var METHOD_NOT_ALLOWED_405_STATUS_CODE = 405;
    var SERVICE_UNAVAILABLE_503_STATUS_CODE = 503;
    var UNPROCESSABLE_ENTITY_422_STATUS_CODE = 422;
    var INTERNAL_SERVER_ERROR_500_STATUS_CODE = 500;
    var _default = {
      ZERO_0_STATUS_CODE,
      OK_200_STATUS_CODE,
      FOUND_302_STATUS_CODE,
      CREATED_201_STATUS_CODE,
      CONFLICT_409_STATUS_CODE,
      SEE_OTHER_303_STATUS_CODE,
      FORBIDDEN_403_STATUS_CODE,
      NOT_FOUND_404_STATUS_CODE,
      NO_CONTENT_204_STATUS_CODE,
      BAD_GATEWAY_502_STATUS_CODE,
      BAD_REQUEST_400_STATUS_CODE,
      UNAUTHORIZED_401_STATUS_CODE,
      NOT_ACCEPTABLE_406_STATUS_CODE,
      REQUEST_TIMEOUT_408_STATUS_CODE,
      TOO_MANY_REQUESTS_429_STATUS_CODE,
      METHOD_NOT_ALLOWED_405_STATUS_CODE,
      SERVICE_UNAVAILABLE_503_STATUS_CODE,
      UNPROCESSABLE_ENTITY_422_STATUS_CODE,
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
      get CONFLICT_409_STATUS_MESSAGE() {
        return CONFLICT_409_STATUS_MESSAGE;
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
      get METHOD_NOT_ALLOWED_405_STATUS_MESSAGE() {
        return METHOD_NOT_ALLOWED_405_STATUS_MESSAGE;
      },
      get NOT_ACCEPTABLE_406_STATUS_MESSAGE() {
        return NOT_ACCEPTABLE_406_STATUS_MESSAGE;
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
      get UNPROCESSABLE_ENTITY_422_STATUS_MESSAGE() {
        return UNPROCESSABLE_ENTITY_422_STATUS_MESSAGE;
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
    var CONFLICT_409_STATUS_MESSAGE = "Conflict";
    var SEE_OTHER_303_STATUS_MESSAGE = "See other";
    var FORBIDDEN_403_STATUS_MESSAGE = "Forbidden";
    var NOT_FOUND_404_STATUS_MESSAGE = "Not found";
    var NO_CONTENT_204_STATUS_MESSAGE = "No content";
    var BAD_GATEWAY_502_STATUS_MESSAGE = "Bad gateway";
    var BAD_REQUEST_400_STATUS_MESSAGE = "Bad request";
    var UNAUTHORIZED_401_STATUS_MESSAGE = "Unauthorized";
    var NOT_ACCEPTABLE_406_STATUS_MESSAGE = "Not Acceptable";
    var REQUEST_TIMEOUT_408_STATUS_MESSAGE = "Request timeout";
    var TOO_MANY_REQUESTS_429_STATUS_MESSAGE = "Too many requests";
    var METHOD_NOT_ALLOWED_405_STATUS_MESSAGE = "Method not allowed";
    var SERVICE_UNAVAILABLE_503_STATUS_MESSAGE = "Service unavailable";
    var UNPROCESSABLE_ENTITY_422_STATUS_MESSAGE = "Unprocessable Entity";
    var INTERNAL_SERVER_ERROR_500_STATUS_MESSAGE = "Internal server error";
    var _default = {
      ZERO_0_STATUS_MESSAGE,
      OK_200_STATUS_MESSAGE,
      FOUND_302_STATUS_MESSAGE,
      CREATED_201_STATUS_MESSAGE,
      CONFLICT_409_STATUS_MESSAGE,
      SEE_OTHER_303_STATUS_MESSAGE,
      FORBIDDEN_403_STATUS_MESSAGE,
      NOT_FOUND_404_STATUS_MESSAGE,
      NO_CONTENT_204_STATUS_MESSAGE,
      BAD_GATEWAY_502_STATUS_MESSAGE,
      BAD_REQUEST_400_STATUS_MESSAGE,
      UNAUTHORIZED_401_STATUS_MESSAGE,
      NOT_ACCEPTABLE_406_STATUS_MESSAGE,
      REQUEST_TIMEOUT_408_STATUS_MESSAGE,
      TOO_MANY_REQUESTS_429_STATUS_MESSAGE,
      METHOD_NOT_ALLOWED_405_STATUS_MESSAGE,
      SERVICE_UNAVAILABLE_503_STATUS_MESSAGE,
      UNPROCESSABLE_ENTITY_422_STATUS_MESSAGE,
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
      get DATA() {
        return DATA;
      },
      get DEFAULT() {
        return DEFAULT;
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
    var DEFAULT = "default";
    var FUNCTION = "function";
    var ENVIRONMENT = "ENVIRONMENT";
    var EMPTY_STRING = "";
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
      const arrayB = elementOrArray2 instanceof Array ? elementOrArray2 : [
        elementOrArray2
      ];
      push(arrayA, arrayB);
    }
    function clear(array) {
      const start = 0;
      return array.splice(start);
    }
    function copy(arrayA, arrayB) {
      const start = 0, deleteCount = arrayB.length;
      splice(arrayA, start, deleteCount, arrayB);
    }
    function merge(arrayA, arrayB) {
      Array.prototype.push.apply(arrayA, arrayB);
    }
    function match(arrayA, arrayB, callback) {
      let matches = false;
      const arrayALength = arrayA.length, arrayBLength = arrayB.length;
      if (arrayALength === arrayBLength) {
        matches = arrayA.every((elementA, index) => {
          const elementB = arrayB[index], passed = callback(elementA, elementB, index);
          if (passed) {
            return true;
          }
        });
      }
      return matches;
    }
    function compare(arrayA, arrayB, callback) {
      let coupled = false;
      const arrayALength = arrayA.length, arrayBLength = arrayB.length;
      if (arrayALength === arrayBLength) {
        arrayB = [
          ...arrayB
        ];
        coupled = arrayA.every((elementA, index) => {
          const elementB = extract(arrayB, (elementB2) => {
            const result = callback(elementA, elementB2);
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
      arrayB = [
        ...arrayB
      ];
      const correlates = arrayA.every((elementA) => {
        const elementB = extract(arrayB, (elementB2) => {
          const result = callback(elementA, elementB2);
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
      let resolved;
      arrayA = [
        ...arrayA
      ];
      for (; ; ) {
        const arrayALength2 = arrayA.length;
        if (arrayALength2 === 0) {
          break;
        }
        let resolved2 = false;
        arrayA.forEach((elementA) => {
          const passed = callback(elementA);
          if (passed) {
            const elementB = elementA;
            arrayB.push(elementB);
            resolved2 = true;
          }
        });
        if (!resolved2) {
          break;
        }
        filter(arrayA, (elementA) => {
          const arrayBIncludesElementA = arrayB.includes(elementA);
          if (!arrayBIncludesElementA) {
            return true;
          }
        });
      }
      const arrayALength = arrayA.length;
      resolved = arrayALength === 0;
      return resolved;
    }
    function find(array, callback) {
      const elements = [];
      forwardsForEach(array, (element, index) => {
        const passed = callback(element, index);
        if (passed) {
          elements.push(element);
        }
      });
      return elements;
    }
    function replace(array, element, callback) {
      let start;
      const found = array.some((element2, index) => {
        const passed = callback(element2, index);
        if (passed) {
          start = index;
          return true;
        }
      });
      if (found) {
        const deleteCount = 1;
        array.splice(start, deleteCount, element);
      }
      return found;
    }
    function splice(arrayA, start, deleteCount = Infinity, arrayB = []) {
      const args = [
        start,
        deleteCount,
        ...arrayB
      ], deletedElements = Array.prototype.splice.apply(arrayA, args);
      return deletedElements;
    }
    function filter(array, callback) {
      const deletedElements = [];
      backwardsForEach(array, (element, index) => {
        const passed = callback(element, index);
        if (!passed) {
          const start = index, deleteCount = 1, deletedElements2 = array.splice(start, deleteCount), firstDeletedElement = first(deletedElements2);
          deletedElements2.unshift(firstDeletedElement);
        }
      });
      return deletedElements;
    }
    function prune(array, callback) {
      let deletedElement = void 0;
      array.some((element, index) => {
        const passed = callback(element, index);
        if (!passed) {
          const start = index, deleteCount = 1, deletedElements = array.splice(start, deleteCount), firstDeletedElement = first(deletedElements);
          deletedElement = firstDeletedElement;
          return true;
        }
      });
      return deletedElement;
    }
    function extract(array, callback) {
      let deletedElement = void 0;
      array.some((element, index) => {
        const passed = callback(element, index);
        if (passed) {
          const start = index, deleteCount = 1, deletedElements = array.splice(start, deleteCount), firstDeletedElement = first(deletedElements);
          deletedElement = firstDeletedElement;
          return true;
        }
      });
      return deletedElement;
    }
    function patch(array, element, callback) {
      const found = array.some((element2, index) => {
        const passed = callback(element2, index);
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
      let index1 = 0, length = array.length;
      while (index1 < length) {
        const elementB = array[index1];
        for (let index2 = length - 1; index2 > index1; index2--) {
          const elementA = array[index2], passed = callback(elementA, elementB);
          if (!passed) {
            const start = index2, deleteCount = 1;
            array.splice(start, deleteCount);
          }
        }
        index1++;
        length = array.length;
      }
    }
    function combine(arrayA, arrayB, callback) {
      const array = [
        ...arrayA,
        ...arrayB
      ];
      compress(array, callback);
      return array;
    }
    function reverse(array) {
      array = [
        ...array
      ].reverse();
      return array;
    }
    function augment(arrayA, arrayB, callback) {
      arrayB.forEach((element, index) => {
        const passed = callback(element, index);
        if (passed) {
          arrayA.push(element);
        }
      });
    }
    function separate(array, arrayA, arrayB, callback) {
      array.forEach((element, index) => {
        const passed = callback(element, index);
        passed ? arrayA.push(element) : arrayB.push(element);
      });
    }
    function forwardsFind(array, callback) {
      const arrayLength = array.length;
      for (let index = 0; index < arrayLength; index++) {
        const element = array[index], passed = callback(element, index);
        if (passed) {
          return element;
        }
      }
      return false;
    }
    function backwardsFind(array, callback) {
      const arrayLength = array.length;
      for (let index = arrayLength - 1; index >= 0; index--) {
        const element = array[index], passed = callback(element, index);
        if (passed) {
          return element;
        }
      }
      return false;
    }
    function forwardsSome(array, callback) {
      const arrayLength = array.length;
      for (let index = 0; index < arrayLength; index++) {
        const element = array[index], passed = callback(element, index);
        if (passed) {
          return true;
        }
      }
      return false;
    }
    function backwardsSome(array, callback) {
      const arrayLength = array.length;
      for (let index = arrayLength - 1; index >= 0; index--) {
        const element = array[index], passed = callback(element, index);
        if (passed) {
          return true;
        }
      }
      return false;
    }
    function forwardsEvery(array, callback) {
      const arrayLength = array.length;
      for (let index = 0; index < arrayLength; index++) {
        const element = array[index], passed = callback(element, index);
        if (!passed) {
          return false;
        }
      }
      return true;
    }
    function backwardsEvery(array, callback) {
      const arrayLength = array.length;
      for (let index = arrayLength - 1; index >= 0; index--) {
        const element = array[index], passed = callback(element, index);
        if (!passed) {
          return false;
        }
      }
      return true;
    }
    function forwardsReduce(array, callback, initialValue) {
      let value = initialValue;
      const arrayLength = array.length;
      for (let index = 0; index < arrayLength; index++) {
        const element = array[index];
        value = callback(value, element, index);
      }
      return value;
    }
    function backwardsReduce(array, callback, initialValue) {
      let value = initialValue;
      const arrayLength = array.length;
      for (let index = arrayLength - 1; index >= 0; index--) {
        const element = array[index];
        value = callback(value, element, index);
      }
      return value;
    }
    function forwardsForEach(array, callback) {
      const arrayLength = array.length;
      for (let index = 0; index < arrayLength; index++) {
        const element = array[index];
        callback(element, index);
      }
    }
    function backwardsForEach(array, callback) {
      const arrayLength = array.length;
      for (let index = arrayLength - 1; index >= 0; index--) {
        const element = array[index];
        callback(element, index);
      }
    }
    function forwardsFindIndex(array, callback) {
      const arrayLength = array.length;
      for (let index = 0; index < arrayLength; index++) {
        const element = array[index], passed = callback(element, index);
        if (passed) {
          return index;
        }
      }
      return -1;
    }
    function backwardsFindIndex(array, callback) {
      const arrayLength = array.length;
      for (let index = arrayLength - 1; index >= 0; index--) {
        const element = array[index], passed = callback(element, index);
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
    function isPathName(path) {
      path = path.replace(/^\//, _constants.EMPTY_STRING).replace(/\/$/, _constants.EMPTY_STRING);
      const pathName = /\//.test(path) === false;
      return pathName;
    }
    function isPathTopmostName(path) {
      const pathName = isPathName(path), pathAbsolutePath = isPathAbsolutePath(path), pathTopmostName = pathName && pathAbsolutePath;
      return pathTopmostName;
    }
    function isPathRelativePath(path) {
      const pathRelativePath = !/^\//.test(path);
      return pathRelativePath;
    }
    function isPathAbsolutePath(path) {
      const pathAbsolutePath = /^\//.test(path);
      return pathAbsolutePath;
    }
    function isTopmostNameInAbsolutePath(topmostName, absolutePath) {
      const regExp = new RegExp(`^${topmostName}(?:\\/.+)?$`), topmostNameInAbsolutePath = regExp.test(absolutePath);
      return topmostNameInAbsolutePath;
    }
    function combinePaths(path, relativePath) {
      let combinedPath = null;
      const pathNames = path.split(/\//), relativePathNames = relativePath.split(/\//);
      let lastPathName, firstRelativePathName = (0, _array.first)(relativePathNames);
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
        const combinedPathNames = [].concat(pathNames).concat(relativePathNames);
        combinedPath = combinedPathNames.join("/");
      }
      return combinedPath;
    }
    function concatenatePaths(path, relativePath, ...remainingArguments) {
      let concatenatedPath;
      path = path.replace(/\/$/, _constants.EMPTY_STRING);
      concatenatedPath = `${path}/${relativePath}`;
      const remainingAArgumentsLength = remainingArguments.length;
      if (remainingAArgumentsLength > 0) {
        const path2 = concatenatedPath, relativePath2 = remainingArguments.shift();
        concatenatedPath = concatenatePaths(path2, relativePath2, ...remainingArguments);
      }
      return concatenatedPath;
    }
    function bottommostNameFromPath(path) {
      let bottommostName = null;
      const matches = path.match(/^.*\/([^\/]+\/?)$/);
      if (matches !== null) {
        const secondMatch = (0, _array.second)(matches);
        bottommostName = secondMatch;
      }
      return bottommostName;
    }
    function topmostDirectoryPathFromPath(path) {
      const matches = path.match(/^(.+)\/[^\/]+\/?$/), secondMatch = (0, _array.second)(matches), topmostDirectoryPath = secondMatch;
      return topmostDirectoryPath;
    }
    function topmostDirectoryNameFromPath(path) {
      let topmostDirectoryName = null;
      const matches = path.match(/^([^\/]+)\/.+$/);
      if (matches !== null) {
        const secondMatch = (0, _array.second)(matches);
        topmostDirectoryName = secondMatch;
      }
      return topmostDirectoryName;
    }
    function pathWithoutBottommostNameFromPath(path) {
      let pathWithoutBottommostName = null;
      const matches = path.match(/^(.*)\/[^\/]+\/?$/);
      if (matches !== null) {
        const secondMatch = (0, _array.second)(matches);
        pathWithoutBottommostName = secondMatch;
      }
      return pathWithoutBottommostName;
    }
    function pathWithoutTopmostDirectoryNameFromPath(path) {
      let pathWithoutTopmostDirectoryName = null;
      const matches = path.match(/^[^\/]+\/(.+)$/);
      if (matches !== null) {
        const secondMatch = (0, _array.second)(matches);
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

  // node_modules/necessary/lib/utilities/json.js
  var require_json = __commonJS((exports) => {
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
      get isArray() {
        return isArray;
      },
      get isBoolean() {
        return isBoolean;
      },
      get isNull() {
        return isNull;
      },
      get isNumber() {
        return isNumber;
      },
      get isObject() {
        return isObject;
      },
      get isPrimitive() {
        return isPrimitive;
      },
      get isString() {
        return isString;
      },
      get typeOf() {
        return typeOf;
      }
    });
    var _jsonTypes = require_jsonTypes();
    function typeOf(json) {
      let type;
      const array = isArray(json), object = isObject(json), primitive = isPrimitive(json);
      if (false) {
      } else if (array) {
        type = _jsonTypes.ARRAY_JSON_TYPE;
      } else if (object) {
        type = _jsonTypes.OBJECT_JSON_TYPE;
      } else if (primitive) {
        type = _jsonTypes.PRIMITIVE_JSON_TYPE;
      }
      return type;
    }
    function isNull(json) {
      const _null = json === null;
      return _null;
    }
    function isArray(json) {
      const array = Array.isArray(json);
      return array;
    }
    function isObject(json) {
      const array = isArray(json), primitive = isPrimitive(json), object = !array && !primitive;
      return object;
    }
    function isString(json) {
      const string = typeof json === _jsonTypes.STRING_JSON_TYPE;
      return string;
    }
    function isNumber(json) {
      const number = typeof json === _jsonTypes.NUMBER_JSON_TYPE;
      return number;
    }
    function isBoolean(json) {
      const boolean = typeof json === _jsonTypes.BOOLEAN_JSON_TYPE;
      return boolean;
    }
    function isPrimitive(json) {
      const _null = isNull(json), string = isString(json), number = isNumber(json), boolean = isBoolean(json), primitive = _null || string || number || boolean;
      return primitive;
    }
    var _default = {
      typeOf,
      isNull,
      isArray,
      isObject,
      isString,
      isNumber,
      isBoolean,
      isPrimitive
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
      const lowerCaseName = name.toLowerCase(), existingNames = Object.getOwnPropertyNames(headers), existingName = existingNames.find((existingName2) => {
        const existingLowerCaseName = existingName2.toLowerCase();
        if (existingLowerCaseName === lowerCaseName) {
          return true;
        }
      }) || null;
      if (existingName !== null) {
        headers[existingName] = value;
      }
    }
    function underwrite(headers, name, value) {
      const lowerCaseName = name.toLowerCase(), existingNames = Object.getOwnPropertyNames(headers), existingName = existingNames.find((existingName2) => {
        const existingLowerCaseName = existingName2.toLowerCase();
        if (existingLowerCaseName === lowerCaseName) {
          return true;
        }
      }) || null;
      if (existingName === null) {
        headers[name] = value;
      }
    }
    function portFromHost(host) {
      let port;
      const matches = host.match(/^https?:\/\/([^\/]+)/), secondMatch = (0, _array.second)(matches), index = secondMatch.indexOf(_characters.COLON_CHARACTER);
      if (index === -1) {
        const secure = secureFromHost(host);
        port = secure ? 443 : 80;
      } else {
        const start = index + 1, portString = secondMatch.substring(start);
        port = Number(portString);
      }
      return port;
    }
    function secureFromHost(host) {
      const secure = /^https:\/\//.test(host);
      return secure;
    }
    function hostnameFromHost(host) {
      const matches = host.match(/^https?:\/\/([^:\/]+)/), secondMatch = (0, _array.second)(matches), hostname = secondMatch;
      return hostname;
    }
    function queryStringFromQuery(query) {
      const names = Object.keys(query), namesLength = names.length, lastIndex = namesLength - 1, queryString = names.reduce((queryString2, name, index) => {
        const value = query[name], encodedName = encodeURIComponent(name), encodedValue = encodeURIComponent(value), ampersandOrNothing = index !== lastIndex ? _characters.AMPERSAND_CHARACTER : _constants.EMPTY_STRING;
        queryString2 += `${encodedName}=${encodedValue}${ampersandOrNothing}`;
        return queryString2;
      }, _constants.EMPTY_STRING);
      return queryString;
    }
    function urlFromHostURIAndQuery(host, uri, query) {
      const queryString = queryStringFromQuery(query), url = queryString === _constants.EMPTY_STRING ? `${host}${uri}` : `${host}${uri}?${queryString}`;
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
      get isStringUpperCase() {
        return isStringUpperCase;
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
    function strlen(string) {
      let length = 0;
      for (const _ of string) {
        length++;
      }
      return length;
    }
    function strcmp(stringA, stringB) {
      let difference = 0;
      let naiveIndexA = 0, naiveIndexB = 0;
      const stringANaiveLength = stringA.length, stringBNaiveLength = stringB.length;
      while (naiveIndexA < stringANaiveLength || naiveIndexB < stringBNaiveLength) {
        const codePointA = naiveIndexA < stringANaiveLength ? stringA.codePointAt(naiveIndexA) : 0, codePointB = naiveIndexB < stringBNaiveLength ? stringB.codePointAt(naiveIndexB) : 0;
        difference = codePointA - codePointB;
        if (difference !== 0) {
          break;
        }
        naiveIndexA += codePointA > 65535 ? 2 : 1;
        naiveIndexB += codePointB > 65535 ? 2 : 1;
      }
      return difference;
    }
    function indexOf(string, searchString) {
      let index = -1;
      const searchStringLength = searchString.length;
      if (searchStringLength > 0) {
        const outerNaiveIndex = string.indexOf(searchString);
        if (outerNaiveIndex > -1) {
          index = 0;
          let innerNaiveIndex = 0;
          while (innerNaiveIndex < outerNaiveIndex) {
            const charCode = string.charCodeAt(innerNaiveIndex);
            innerNaiveIndex += charCode >= 55296 && charCode <= 56319 ? 2 : 1;
            index++;
          }
        }
      }
      return index;
    }
    function substring(string, start, end = Infinity) {
      const stringNaiveLength = string.length;
      let index = 0, naiveIndex = 0, naiveStart = stringNaiveLength, naiveEnd = stringNaiveLength;
      while (naiveIndex < stringNaiveLength) {
        if (index === start) {
          naiveStart = naiveIndex;
        }
        if (index === end) {
          naiveEnd = naiveIndex;
          break;
        }
        const charCode = string.charCodeAt(naiveIndex);
        naiveIndex += charCode >= 55296 && charCode <= 56319 ? 2 : 1;
        index++;
      }
      if (index === start) {
        naiveStart = naiveIndex;
      }
      if (index === end) {
        naiveEnd = naiveIndex;
      }
      const substring1 = string.substring(naiveStart, naiveEnd);
      return substring1;
    }
    function isStringUpperCase(string) {
      const upperCaseString = string.toUpperCase(), stringUpperCase = string === upperCaseString;
      return stringUpperCase;
    }
    var _default = {
      strcmp,
      strlen,
      indexOf,
      substring,
      isStringUpperCase
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
      let {version} = json;
      while (version !== latestVersion) {
        const migrateFunction = migrationMap[version];
        json = migrateFunction(json);
        ({version} = json);
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
      let count = -1;
      function next() {
        count++;
        const index = count;
        operation(next, done, context, index);
      }
      next();
    }
    function forEach(array, operation, done, context) {
      const length = array.length;
      let count = -1;
      function next() {
        count++;
        const terminate = count === length;
        if (terminate) {
          done();
        } else {
          const index = count, element = array[index];
          operation(element, next, done, context, index);
        }
      }
      next();
    }
    function sequence(operations, done, context) {
      const length = operations.length;
      let count = -1;
      function next() {
        count++;
        const terminate = count === length;
        if (terminate) {
          done();
        } else {
          const index = count, operation = operations[index];
          operation(next, done, context, index);
        }
      }
      next();
    }
    function eventually(operations, done, context) {
      const length = operations.length;
      if (length === 0) {
        done();
        return;
      }
      let count = 0;
      function next() {
        count++;
        const terminate = count === length;
        if (terminate) {
          done();
        }
      }
      operations.forEach((operation, index) => {
        operation(next, done, context, index);
      });
    }
    function repeatedly(operation, length, done, context) {
      if (length === 0) {
        done();
        return;
      }
      let count = 0;
      function next() {
        count++;
        const terminate = count === length;
        if (terminate) {
          done();
        }
      }
      for (let index = 0; index < length; index++) {
        operation(next, done, context, index);
      }
    }
    function forwardsForEach(array, operation, done, context) {
      const length = array.length;
      let count = -1;
      function next() {
        count++;
        const terminate = count === length;
        if (terminate) {
          done();
        } else {
          const index = count, element = array[index];
          operation(element, next, done, context, index);
        }
      }
      next();
    }
    function backwardsForEach(array, operation, done, context) {
      const length = array.length;
      let count = length;
      function next() {
        count--;
        const terminate = count === -1;
        if (terminate) {
          done();
        } else {
          const index = count, element = array[index];
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
    function get(host, uri, query, headers, responseType, callback) {
      if (typeof headers === _constants.FUNCTION) {
        callback = headers;
        responseType = null;
        headers = {};
      }
      if (typeof responseType === _constants.FUNCTION) {
        callback = responseType;
        if (typeof headers === _constants.STRING) {
          responseType = headers;
          headers = {};
        } else {
          responseType = null;
        }
      }
      const method = _methods.GET_METHOD, accept = _contentTypes.APPLICATION_JSON_CONTENT_TYPE, content = null;
      underwriteAcceptHeader(headers, accept);
      request(host, uri, query, method, content, headers, responseType, callback);
    }
    function post(host, uri, query, content, headers, responseType, callback) {
      if (typeof headers === _constants.FUNCTION) {
        callback = headers;
        responseType = null;
        headers = {};
      }
      if (typeof responseType === _constants.FUNCTION) {
        callback = responseType;
        if (typeof headers === _constants.STRING) {
          responseType = headers;
          headers = {};
        } else {
          responseType = null;
        }
      }
      const method = _methods.POST_METHOD, accept = _contentTypes.APPLICATION_JSON_CONTENT_TYPE, contentType = _contentTypes.APPLICATION_JSON_CONTENT_TYPE;
      underwriteAcceptHeader(headers, accept);
      underwriteContentTypeHeader(headers, contentType);
      request(host, uri, query, method, content, headers, responseType, callback);
    }
    function request(host, uri, query, method, content, headers, responseType, callback) {
      const url = (0, _http.urlFromHostURIAndQuery)(host, uri, query), accept = headers[_headers.ACCEPT_HEADER] || null, contentType = headers[_headers.CONTENT_TYPE_HEADER] || null, xmlHttpRequest = new XMLHttpRequest();
      if (contentType === _contentTypes.APPLICATION_JSON_CONTENT_TYPE) {
        const json = content, jsonString = JSON.stringify(json);
        content = jsonString;
      }
      if (responseType !== null) {
        Object.assign(xmlHttpRequest, {
          responseType
        });
      }
      xmlHttpRequest.onreadystatechange = () => {
        const {readyState, status, response} = xmlHttpRequest, statusCode = status;
        if (readyState == 4) {
          let content2 = response;
          if (accept === _contentTypes.APPLICATION_JSON_CONTENT_TYPE) {
            try {
              const jsonString = content2, json = JSON.parse(jsonString);
              content2 = json;
            } catch (error) {
              content2 = null;
            }
          }
          callback(content2, statusCode);
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
      const name = _headers.ACCEPT_HEADER, value = accept;
      (0, _http.underwrite)(headers, name, value);
    }
    function underwriteContentTypeHeader(headers, contentTYpe) {
      const name = _headers.CONTENT_TYPE_HEADER, value = contentTYpe;
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
      get jsonTypes() {
        return _jsonTypes.default;
      },
      get jsonUtilities() {
        return _json.default;
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
    var _jsonTypes = /* @__PURE__ */ _interop_require_default(require_jsonTypes());
    var _characters = /* @__PURE__ */ _interop_require_default(require_characters());
    var _statusCodes = /* @__PURE__ */ _interop_require_default(require_statusCodes());
    var _contentTypes = /* @__PURE__ */ _interop_require_default(require_contentTypes());
    var _statusMessages = /* @__PURE__ */ _interop_require_default(require_statusMessages());
    var _path = /* @__PURE__ */ _interop_require_default(require_path());
    var _json = /* @__PURE__ */ _interop_require_default(require_json());
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
    var {first, second, third, fourth, push, separate} = _necessary.arrayUtilities;
    function add(arrayA, arrayB) {
      arrayB.forEach((elementB) => {
        arrayA.push(elementB);
      });
    }
    function permute(array, places) {
      const length = array.length, cut = length - places, leadingElements = array.slice(0, cut), trailingElements = array.slice(cut);
      array = [
        ...trailingElements,
        ...leadingElements
      ];
      return array;
    }
    function flatten(arrays) {
      return arrays.reduce((elements, array) => {
        elements = elements.concat(array);
        return elements;
      }, []);
    }
    function guarantee(arrayOrElement) {
      arrayOrElement = arrayOrElement || [];
      return arrayOrElement instanceof Array ? arrayOrElement : [
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
    var Element = class {
      getProperties() {
        return this.properties;
      }
      getChildElements() {
        return this.childElements;
      }
      setProperties(properties) {
        this.properties = properties;
      }
      setChildElements(childElements) {
        this.childElements = childElements;
      }
      static fromProperties(Class, properties, ...remainingArguments) {
        const element = new Class(...remainingArguments), childElements = typeof element.childElements === _constants.FUNCTION ? (0, _array.guarantee)(element.childElements(properties)) : properties.childElements || [];
        element.setProperties(properties);
        element.setChildElements(childElements);
        return element;
      }
    };
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
      const [x, y] = vector;
      return Math.sqrt(x * x + y * y);
    }
    function length3(vector) {
      const [x, y, z] = vector;
      return Math.sqrt(x * x + y * y + z * z);
    }
    function length4(vector) {
      const [x, y, z, w] = vector;
      return Math.sqrt(x * x + y * y + z * z + w * w);
    }
    function dot2(vectorA, vectorB) {
      const [a0, a1] = vectorA, [b0, b1] = vectorB;
      return a0 * b0 + a1 * b1;
    }
    function dot3(vectorA, vectorB) {
      const [a0, a1, a2] = vectorA, [b0, b1, b2] = vectorB;
      return a0 * b0 + a1 * b1 + a2 * b2;
    }
    function dot4(vectorA, vectorB) {
      const [a0, a1, a2, a3] = vectorA, [b0, b1, b2, b3] = vectorB;
      return a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3;
    }
    function cross3(vectorA, vectorB) {
      const [a0, a1, a2] = vectorA, [b0, b1, b2] = vectorB;
      return [
        a1 * b2 - a2 * b1,
        a2 * b0 - a0 * b2,
        a0 * b1 - a1 * b0
      ];
    }
    function normalise2(vector) {
      const [x, y] = vector, length = Math.sqrt(x * x + y * y);
      return [
        x / length,
        y / length
      ];
    }
    function normalise3(vector) {
      const [x, y, z] = vector, length = Math.sqrt(x * x + y * y + z * z);
      return [
        x / length,
        y / length,
        z / length
      ];
    }
    function normalise4(vector) {
      const [x, y, z, w] = vector, length = Math.sqrt(x * x + y * y + z * z + w * w);
      return [
        x / length,
        y / length,
        z / length,
        w / length
      ];
    }
    function reflect2(vector) {
      const [x, y] = vector;
      return [
        -x,
        -y
      ];
    }
    function reflect3(vector) {
      const [x, y, z] = vector;
      return [
        -x,
        -y,
        -z
      ];
    }
    function reflect4(vector) {
      const [x, y, z, w] = vector;
      return [
        -x,
        -y,
        -z,
        -w
      ];
    }
    function truncate4(vector) {
      const [x, y, z] = vector;
      return [
        x,
        y,
        z
      ];
    }
    function add2(vectorA, vectorB) {
      const [a0, a1] = vectorA, [b0, b1] = vectorB;
      return [
        a0 + b0,
        a1 + b1
      ];
    }
    function add3(vectorA, vectorB) {
      const [a0, a1, a2] = vectorA, [b0, b1, b2] = vectorB;
      return [
        a0 + b0,
        a1 + b1,
        a2 + b2
      ];
    }
    function add4(vectorA, vectorB) {
      const [a0, a1, a2, a3] = vectorA, [b0, b1, b2, b3] = vectorB;
      return [
        a0 + b0,
        a1 + b1,
        a2 + b2,
        a3 + b3
      ];
    }
    function subtract2(vectorA, vectorB) {
      const [a0, a1] = vectorA, [b0, b1] = vectorB;
      return [
        a0 - b0,
        a1 - b1
      ];
    }
    function subtract3(vectorA, vectorB) {
      const [a0, a1, a2] = vectorA, [b0, b1, b2] = vectorB;
      return [
        a0 - b0,
        a1 - b1,
        a2 - b2
      ];
    }
    function subtract4(vectorA, vectorB) {
      const [a0, a1, a2, a3] = vectorA, [b0, b1, b2, b3] = vectorB;
      return [
        a0 - b0,
        a1 - b1,
        a2 - b2,
        a3 - b3
      ];
    }
    function multiply2(vectorA, vectorB) {
      const [x0, y0] = vectorA, [x1, y1] = vectorB;
      return [
        x0 * x1,
        y0 * y1
      ];
    }
    function multiply3(vectorA, vectorB) {
      const [x0, y0, z0] = vectorA, [x1, y1, z1] = vectorB;
      return [
        x0 * x1,
        y0 * y1,
        z0 * z1
      ];
    }
    function multiply4(vectorA, vectorB) {
      const [x0, y0, z0, w0] = vectorA, [x1, y1, z1, w1] = vectorB;
      return [
        x0 * x1,
        y0 * y1,
        z0 * z1,
        w0 * w1
      ];
    }
    function divide2(vector, divisor) {
      const [x, y] = vector;
      return [
        x / divisor,
        y / divisor
      ];
    }
    function divide3(vector, divisor) {
      const [x, y, z] = vector;
      return [
        x / divisor,
        y / divisor,
        z / divisor
      ];
    }
    function divide4(vector, divisor) {
      const [x, y, z, w] = vector;
      return [
        x / divisor,
        y / divisor,
        z / divisor,
        w / divisor
      ];
    }
    function scale2(vector, scalar) {
      const [x, y] = vector;
      return [
        x * scalar,
        y * scalar
      ];
    }
    function scale3(vector, scalar) {
      const [x, y, z] = vector;
      return [
        x * scalar,
        y * scalar,
        z * scalar
      ];
    }
    function scale4(vector, scalar) {
      const [x, y, z, w] = vector;
      return [
        x * scalar,
        y * scalar,
        z * scalar,
        w * scalar
      ];
    }
    function transform2(vector, matrix) {
      const [x, y] = vector, [m0, m1, m2, m3] = matrix;
      return [
        m0 * x + m2 * y,
        m1 * x + m3 * y
      ];
    }
    function transform3(vector, matrix) {
      const [x, y, z] = vector, [m0, m1, m2, m3, m4, m5, m6, m7, m8] = matrix;
      return [
        m0 * x + m3 * y + m6 * z,
        m1 * x + m4 * y + m7 * z,
        m2 * x + m5 * y + m8 * z
      ];
    }
    function transform4(vector, matrix) {
      const [x, y, z, w] = vector, [m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15] = matrix;
      return [
        m0 * x + m4 * y + m8 * z + m12 * w,
        m1 * x + m5 * y + m9 * z + m13 * w,
        m2 * x + m6 * y + m10 * z + m14 * w,
        m3 * x + m7 * y + m11 * z + m15 * w
      ];
    }
    function sum2(...vectors) {
      const zero = zero2(), sum = vectors.reduce((sum5, vector) => {
        sum5 = add2(sum5, vector);
        return sum5;
      }, zero);
      return sum;
    }
    function sum3(...vectors) {
      const zero = zero3(), sum = vectors.reduce((sum5, vector) => {
        sum5 = add3(sum5, vector);
        return sum5;
      }, zero);
      return sum;
    }
    function sum4(...vectors) {
      const zero = zero4(), sum = vectors.reduce((sum5, vector) => {
        sum5 = add4(sum5, vector);
        return sum5;
      }, zero);
      return sum;
    }
    function mean2(...vectors) {
      const length = vectors.length, sum = sum2(...vectors), mean = divide2(sum, length);
      return mean;
    }
    function mean3(...vectors) {
      const length = vectors.length, sum = sum3(...vectors), mean = divide3(sum, length);
      return mean;
    }
    function mean4(...vectors) {
      const length = vectors.length, sum = sum4(...vectors), mean = divide4(sum, length);
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
    var Edge = class {
      constructor(position, extent) {
        this.position = position;
        this.extent = extent;
      }
      getPosition() {
        return this.position;
      }
      getExtent() {
        return this.extent;
      }
      clone() {
        const position = this.position.slice(), extent = this.extent.slice(), edge = new Edge(position, extent);
        return edge;
      }
      static fromStartVertexAndEndVertex(Class, startVertex, endVertex) {
        if (endVertex === void 0) {
          endVertex = startVertex;
          startVertex = Class;
          Class = Edge;
        }
        const startPosition = startVertex.getPosition(), endPosition = endVertex.getPosition(), position = startPosition.slice(), extent = (0, _vector.subtract3)(endPosition, startPosition), edge = new Class(position, extent);
        return edge;
      }
    };
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
    function calculateMidPointPosition(vertices) {
      const midPointPosition = vertices.reduce((midPointPosition2, vertex) => {
        const vertexPosition = vertex.getPosition(), scaledVertexPosition = (0, _vector.scale3)(vertexPosition, 1 / 3);
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
      midPointPosition = [
        ...midPointPosition.slice(0, 2),
        0
      ];
      return midPointPosition;
    }
    function isMidPointPositionToOneSideOfMaskingEdges(midPointPosition, maskingEdges) {
      const midPointPositionToTheLeftOfMaskingEdges = isMidPointPositionToTheLeftOfMaskingEdges(midPointPosition, maskingEdges), midPointPositionToTheRightOfMaskingEdges = isMidPointPositionToTheRightOfMaskingEdges(midPointPosition, maskingEdges), midPointPositionToOneSideOfMaskingEdges = midPointPositionToTheLeftOfMaskingEdges || midPointPositionToTheRightOfMaskingEdges;
      return midPointPositionToOneSideOfMaskingEdges;
    }
    function isMidPointPositionToTheLeftOfMaskingEdges(midPointPosition, maskingEdges) {
      const midPointPositionToTheLeftOfMaskingEdges = maskingEdges.reduce((midPointPositionToTheLeftOfMaskingEdges2, maskingEdge) => {
        if (midPointPositionToTheLeftOfMaskingEdges2) {
          const midPointPositionToTheLeftOfMaskingEdge = maskingEdge.isMidPointPositionToTheLeft(midPointPosition);
          midPointPositionToTheLeftOfMaskingEdges2 = midPointPositionToTheLeftOfMaskingEdge;
        }
        return midPointPositionToTheLeftOfMaskingEdges2;
      }, true);
      return midPointPositionToTheLeftOfMaskingEdges;
    }
    function isMidPointPositionToTheRightOfMaskingEdges(midPointPosition, maskingEdges) {
      const midPointPositionToTheRightOfMaskingEdges = maskingEdges.reduce((midPointPositionToTheRightOfMaskingEdges2, maskingEdge) => {
        if (midPointPositionToTheRightOfMaskingEdges2) {
          const midPointPositionToTheRightOfMaskingEdge = maskingEdge.isMidPointPositionToTheRight(midPointPosition);
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
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var MaskingEdge = class extends _edge.default {
      isMidPointPositionToTheLeft(midPointPosition) {
        midPointPosition = (0, _midPoint.projectMidPointPositionOntoXYPlane)(midPointPosition);
        const extent = this.getExtent(), position = this.getPosition(), midPointRelativePosition = (0, _vector.subtract3)(midPointPosition, position), crossProductComponents = (0, _vector.cross3)(extent, midPointRelativePosition), thirdCrossProductComponent = (0, _array.third)(crossProductComponents), midPointPositionToTheLeft = thirdCrossProductComponent > 0;
        return midPointPositionToTheLeft;
      }
      isMidPointPositionToTheRight(midPointPosition) {
        const midPointPositionToTheLeft = this.isMidPointPositionToTheLeft(midPointPosition), midPointPositionToTheRight = !midPointPositionToTheLeft;
        return midPointPositionToTheRight;
      }
      static fromStartVertexAndEndVertex(startVertex, endVertex) {
        return _edge.default.fromStartVertexAndEndVertex(MaskingEdge, startVertex, endVertex);
      }
    };
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
    function isApproximatelyEqualToOne(value, marginOfError = _defaults.DEFAULT_MARGIN_OF_ERROR) {
      return isApproximatelyEqualTo(value, 1, marginOfError);
    }
    function isApproximatelyEqualToZero(value, marginOfError = _defaults.DEFAULT_MARGIN_OF_ERROR) {
      return isApproximatelyEqualTo(value, 0, marginOfError);
    }
    function isApproximatelyEqualTo(valueA, valueB, marginOfError = _defaults.DEFAULT_MARGIN_OF_ERROR) {
      const difference = valueA - valueB, absoluteDifference = Math.abs(difference), approximatelyEqual = absoluteDifference < marginOfError;
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
      const rotationQuaternionComponents = rotationQuaternion, firstRotationQuaternionComponent = (0, _array.first)(rotationQuaternionComponents), secondRotationQuaternionComponent = (0, _array.second)(rotationQuaternionComponents), thirdRotationQuaternionComponent = (0, _array.third)(rotationQuaternionComponents), fourthRotationQuaternionComponent = (0, _array.fourth)(rotationQuaternionComponents), inverseRotationQuaternion = [
        firstRotationQuaternionComponent,
        -secondRotationQuaternionComponent,
        -thirdRotationQuaternionComponent,
        -fourthRotationQuaternionComponent
      ];
      return inverseRotationQuaternion;
    }
    function calculateForwardsRotationQuaternion(rotationQuaternion) {
      const forwardsRotationQuaternion = rotationQuaternion;
      return forwardsRotationQuaternion;
    }
    function calculateBackwardsRotationQuaternion(rotationQuaternion) {
      const inverseRotationQuaternion = calculateInverseRotationQuaternion(rotationQuaternion), backwardsRotationQuaternion = inverseRotationQuaternion;
      return backwardsRotationQuaternion;
    }
    function calculateArbitraryRotationQuaternion(normal) {
      const extent = normal.getExtent(), unitNormal = extent, zAxis = [
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
      const maskingEdgeExtent = maskingEdge.getExtent(), unitMaskingEdgeExtent = (0, _vector.normalise3)(maskingEdgeExtent), unitMaskingEdgeExtentComponents = unitMaskingEdgeExtent, firstUnitMaskingEdgeExtentComponent = (0, _array.first)(unitMaskingEdgeExtentComponents), secondUnitMaskingEdgeExtentComponent = (0, _array.second)(unitMaskingEdgeExtentComponents), angleOfRotationSine = firstUnitMaskingEdgeExtentComponent, angleOfRotationCosine = secondUnitMaskingEdgeExtentComponent, halfAngleOfRotationCosine = (0, _angle.calculateHalfAngleCosine)(angleOfRotationCosine), halfAngleOfRotationSine = angleOfRotationSine > 0 ? +(0, _angle.calculateHalfAngleSine)(angleOfRotationCosine) : -(0, _angle.calculateHalfAngleSine)(angleOfRotationCosine), rotationAboutZAxisQuaternion = [
        halfAngleOfRotationCosine,
        0,
        0,
        halfAngleOfRotationSine
      ];
      return rotationAboutZAxisQuaternion;
    }
    function hamiltonProduct(quaternionA, quaternionB) {
      const a1 = quaternionA[0], b1 = quaternionA[1], c1 = quaternionA[2], d1 = quaternionA[3], a2 = quaternionB[0], b2 = quaternionB[1], c2 = quaternionB[2], d2 = quaternionB[3], a = a1 * a2 - b1 * b2 - c1 * c2 - d1 * d2, b = a1 * b2 + b1 * a2 + c1 * d2 - d1 * c2, c = a1 * c2 - b1 * d2 + c1 * a2 + d1 * b2, d = a1 * d2 + b1 * c2 - c1 * b2 + d1 * a2, quaternion = [
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
    function rotatePosition(position, rotationQuaternion) {
      const imaginaryQuaternion = imaginaryQuaternionFromPosition(position), inverseRotationQuaternion = (0, _quaternion.calculateInverseRotationQuaternion)(rotationQuaternion), rotatedImaginaryQuaternion = (0, _quaternion.rotateImaginaryQuaternion)(imaginaryQuaternion, rotationQuaternion, inverseRotationQuaternion);
      position = positionFromImaginaryQuaternion(rotatedImaginaryQuaternion);
      return position;
    }
    function imaginaryQuaternionFromPosition(position) {
      return [
        0,
        ...position
      ];
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
      let intersection = null;
      const edgeNonParallel = isEdgeNonParallel(edge);
      if (edgeNonParallel) {
        const edgeIntersection = calculateEdgeIntersection(edge, firstPositionComponent), edgeIntersectionNonTrivial = edgeIntersection > 0 && edgeIntersection < 1;
        if (edgeIntersectionNonTrivial) {
          intersection = edgeIntersection;
        }
      }
      return intersection;
    }
    function calculateNonNullIntersections(intersections) {
      const nonNullIntersections = intersections.reduce((nonNullIntersections2, intersection) => {
        if (intersection !== null) {
          const nonNullIntersection = intersection;
          nonNullIntersections2.push(nonNullIntersection);
        }
        return nonNullIntersections2;
      }, []);
      return nonNullIntersections;
    }
    function calculateNullIntersectionIndex(intersections) {
      const nullIntersectionIndex = intersections.reduce((nullIntersectionIndex2, intersection, index) => {
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
      const nullIntersectionIndex = intersections.reduce((nullIntersectionIndex2, intersection, index) => {
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
      const extent = (0, _vector.subtract3)(endVertexPosition, startVertexPosition), offset = (0, _vector.scale3)(extent, intersection), intermediateVertexPosition = (0, _vector.add3)(startVertexPosition, offset);
      return intermediateVertexPosition;
    }
    function isEdgeNonParallel(edge) {
      const edgeExtent = edge.getExtent(), edgeExtentComponents = edgeExtent, firstEdgeExtentComponent = (0, _array.first)(edgeExtentComponents), secondEdgeExtentComponent = (0, _array.second)(edgeExtentComponents), edgeAngleTangent = firstEdgeExtentComponent / secondEdgeExtentComponent, edgeAngleTangentApproximatelyEqualToZero = (0, _approximate.isApproximatelyEqualToZero)(edgeAngleTangent), edgeParallel = edgeAngleTangentApproximatelyEqualToZero, edgeNonParallel = !edgeParallel;
      return edgeNonParallel;
    }
    function calculateEdgeIntersection(edge, firstPositionComponent) {
      const edgeExtent = edge.getExtent(), edgePosition = edge.getPosition(), edgeExtentComponents = edgeExtent, edgePositionComponents = edgePosition, firstEdgeExtentComponent = (0, _array.first)(edgeExtentComponents), firstEdgePositionComponent = (0, _array.first)(edgePositionComponents), edgeIntersection = (firstPositionComponent - firstEdgePositionComponent) / firstEdgeExtentComponent;
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
    var VerticalLine = class {
      constructor(firstPositionComponent, forwardsRotationQuaternion, backwardsRotationQuaternion) {
        this.firstPositionComponent = firstPositionComponent;
        this.forwardsRotationQuaternion = forwardsRotationQuaternion;
        this.backwardsRotationQuaternion = backwardsRotationQuaternion;
      }
      getFirstPositionComponent() {
        return this.firstPositionComponent;
      }
      getForwardsRotationQuaternion() {
        return this.forwardsRotationQuaternion;
      }
      getBackwardsRotationQuaternion() {
        return this.backwardsRotationQuaternion;
      }
      splitFacet(facet, smallerFacets, marginOfError) {
        const edges = facet.getEdges(), intersections = edges.map((edge) => {
          const intersection = (0, _intersection.calculateIntersection)(edge, this.firstPositionComponent);
          return intersection;
        });
        facet.splitWithIntersections(intersections, smallerFacets, marginOfError);
      }
      splitFacets(facets, marginOfError) {
        const smallerFacets = [];
        facets.forEach((facet) => {
          facet.rotate(this.forwardsRotationQuaternion);
          this.splitFacet(facet, smallerFacets, marginOfError);
        });
        smallerFacets.forEach((smallerFacet) => {
          smallerFacet.rotate(this.backwardsRotationQuaternion);
        });
        return smallerFacets;
      }
      static fromMaskingEdge(maskingEdge) {
        const maskingEdgePosition = maskingEdge.getPosition(), rotationAboutZAxisQuaternion = (0, _quaternion.calculateRotationAboutZAxisQuaternion)(maskingEdge), rotationQuaternion = rotationAboutZAxisQuaternion, forwardsRotationQuaternion = (0, _quaternion.calculateForwardsRotationQuaternion)(rotationQuaternion), backwardsRotationQuaternion = (0, _quaternion.calculateBackwardsRotationQuaternion)(rotationQuaternion), position = (0, _rotation.rotatePosition)(maskingEdgePosition, rotationQuaternion), positionComponents = position, firstPositionComponent = (0, _array.first)(positionComponents), verticalLine = new VerticalLine(firstPositionComponent, forwardsRotationQuaternion, backwardsRotationQuaternion);
        return verticalLine;
      }
    };
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
      const rotatedVertices = vertices.map((vertex) => {
        const rotatedVertex = vertex.clone();
        rotatedVertex.rotate(rotationQuaternion);
        return rotatedVertex;
      });
      return rotatedVertices;
    }
    function verticesFromCoordinateTuplesAndIndexTuple(coordinateTuples, indexTuple, Vertex) {
      const indexes = indexTuple, vertices = indexes.map((index) => {
        const coordinateTuple = coordinateTuples[index], vertex = Vertex.fromCoordinateTuple(coordinateTuple);
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
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var MaskingFacet = class {
      constructor(maskingEdges, verticalLines, forwardsRotationQuaternion, backwardsRotationQuaternion) {
        this.maskingEdges = maskingEdges;
        this.verticalLines = verticalLines;
        this.forwardsRotationQuaternion = forwardsRotationQuaternion;
        this.backwardsRotationQuaternion = backwardsRotationQuaternion;
      }
      getMaskingEdges() {
        return this.maskingEdges;
      }
      getVerticalLines() {
        return this.verticalLines;
      }
      getForwardsRotationQuaternion() {
        return this.forwardsRotationQuaternion;
      }
      getBackwardsRotationQuaternion() {
        return this.backwardsRotationQuaternion;
      }
      maskFacet(facet, unmaskedFacets, marginOfError) {
        const unmaskedFacet = facet.clone();
        facet.rotate(this.forwardsRotationQuaternion);
        const maskingFacet = this, smallerFacets = this.splitFacet(facet, marginOfError), maskedSmallerFacets = [], unmaskedSmallerFacets = [];
        (0, _array.separate)(smallerFacets, maskedSmallerFacets, unmaskedSmallerFacets, (smallerFacet) => {
          const smallerFacetMasked = smallerFacet.isMasked(maskingFacet);
          return smallerFacetMasked;
        });
        const maskedSmallerFacetsLength = maskedSmallerFacets.length;
        if (maskedSmallerFacetsLength === 0) {
          unmaskedFacets.push(unmaskedFacet);
        } else {
          unmaskedSmallerFacets.forEach((unmaskedSmallerFacet) => {
            unmaskedSmallerFacet.rotate(this.backwardsRotationQuaternion);
          });
          (0, _array.add)(unmaskedFacets, unmaskedSmallerFacets);
        }
      }
      splitFacet(facet, marginOfError) {
        let facets = [
          facet
        ], smallerFacets = facets;
        this.verticalLines.forEach((verticalLine) => {
          smallerFacets = verticalLine.splitFacets(facets, marginOfError);
          facets = smallerFacets;
        });
        return smallerFacets;
      }
      static fromFacet(facet) {
        const facetNormal = facet.getNormal(), facetVertices = facet.getVertices(), normal = facetNormal, arbitraryRotationQuaternion = (0, _quaternion.calculateArbitraryRotationQuaternion)(normal), rotationQuaternion = arbitraryRotationQuaternion, vertices = (0, _vertices.rotateVertices)(facetVertices, rotationQuaternion), maskingEdges = calculateMaskingEdges(vertices), verticalLines = maskingEdges.map((maskingEdge) => {
          const verticalLine = _verticalLine.default.fromMaskingEdge(maskingEdge);
          return verticalLine;
        }), forwardsRotationQuaternion = (0, _quaternion.calculateForwardsRotationQuaternion)(rotationQuaternion), backwardsRotationQuaternion = (0, _quaternion.calculateBackwardsRotationQuaternion)(rotationQuaternion), maskingFacet = new MaskingFacet(maskingEdges, verticalLines, forwardsRotationQuaternion, backwardsRotationQuaternion);
        return maskingFacet;
      }
    };
    function calculateMaskingEdges(vertices) {
      const maskingEdges = vertices.map((vertex, index) => {
        const startIndex = index, endIndex = (startIndex + 1) % _constants.VERTICES_LENGTH, startVertex = vertices[startIndex], endVertex = vertices[endIndex], maskingEdge = _masking.default.fromStartVertexAndEndVertex(startVertex, endVertex);
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
      const [a0, a1, a2, a3] = matrixA, [b0, b1, b2, b3] = matrixB;
      return [
        a0 * b0 + a2 * b1,
        a1 * b0 + a3 * b1,
        a0 * b2 + a2 * b3,
        a1 * b2 + a3 * b3
      ];
    }
    function multiply3(matrixA, matrixB) {
      const [a0, a1, a2, a3, a4, a5, a6, a7, a8] = matrixA, [b0, b1, b2, b3, b4, b5, b6, b7, b8] = matrixB;
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
      const [a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15] = matrixA, [b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15] = matrixB;
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
      const [m0, m1, m2, m3] = matrix;
      return m0 * m3 - m2 * m1;
    }
    function determinant3(matrix) {
      const [m0, m1, m2, m3, m4, m5, m6, m7, m8] = matrix, b01 = m8 * m4 - m5 * m7, b11 = -m8 * m3 + m5 * m6, b21 = m7 * m3 - m4 * m6;
      return m0 * b01 + m1 * b11 + m2 * b21;
    }
    function determinant4(matrix) {
      const [m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15] = matrix, b00 = m0 * m5 - m1 * m4, b01 = m0 * m6 - m2 * m4, b02 = m0 * m7 - m3 * m4, b03 = m1 * m6 - m2 * m5, b04 = m1 * m7 - m3 * m5, b05 = m2 * m7 - m3 * m6, b06 = m8 * m13 - m9 * m12, b07 = m8 * m14 - m10 * m12, b08 = m8 * m15 - m11 * m12, b09 = m9 * m14 - m10 * m13, b10 = m9 * m15 - m11 * m13, b11 = m10 * m15 - m11 * m14;
      return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    }
    function transpose2(matrix) {
      const [m0, m1, m2, m3] = matrix;
      return [
        m0,
        m2,
        m1,
        m3
      ];
    }
    function transpose3(matrix) {
      const [m0, m1, m2, m3, m4, m5, m6, m7, m8] = matrix;
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
      const [m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15] = matrix;
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
      const [m0, m1, m2, m3] = matrix, determinant = determinant2(matrix);
      return [
        +m3 / determinant,
        -m1 / determinant,
        -m2 / determinant,
        +m0 / determinant
      ];
    }
    function invert3(matrix) {
      const [m0, m1, m2, m3, m4, m5, m6, m7, m8] = matrix, determinant = determinant3(matrix), b01 = m8 * m4 - m5 * m7, b11 = -m8 * m3 + m5 * m6, b21 = m7 * m3 - m4 * m6;
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
      const [m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15] = matrix, determinant = determinant4(matrix), b00 = m0 * m5 - m1 * m4, b01 = m0 * m6 - m2 * m4, b02 = m0 * m7 - m3 * m4, b03 = m1 * m6 - m2 * m5, b04 = m1 * m7 - m3 * m5, b05 = m2 * m7 - m3 * m6, b06 = m8 * m13 - m9 * m12, b07 = m8 * m14 - m10 * m12, b08 = m8 * m15 - m11 * m12, b09 = m9 * m14 - m10 * m13, b10 = m9 * m15 - m11 * m13, b11 = m10 * m15 - m11 * m14;
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
      const [x, y, z] = vector, [m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15] = matrix;
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
      const [x, y, z] = (0, _vector.normalise3)(vector), [m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15] = matrix, s = Math.sin(angle), c = Math.cos(angle), t = 1 - c, b00 = x * x * t + c, b01 = y * x * t + z * s, b02 = z * x * t - y * s, b10 = x * y * t - z * s, b11 = y * y * t + c, b12 = z * y * t + x * s, b20 = x * z * t + y * s, b21 = y * z * t - x * s, b22 = z * z * t + c;
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
      const [x, y, z] = vector, [m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15] = matrix;
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
      const f = 1 / Math.tan(fieldOfView / 2), nf = 1 / (zNear - zFar);
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
      let scaleMatrix = (0, _matrix.identity4)();
      scaleMatrix = (0, _matrix.scale4)(scaleMatrix, scale);
      return scaleMatrix;
    }
    function offsetsMatrixFromOffsets(offsets) {
      let offsetsMatrix = (0, _matrix.identity4)();
      offsetsMatrix = (0, _matrix.translate4)(offsetsMatrix, offsets);
      return offsetsMatrix;
    }
    function positionMatrixFromNothing() {
      let positionMatrix = (0, _matrix.identity4)();
      return positionMatrix;
    }
    function positionMatrixFromDistance(distance) {
      let positionMatrix = (0, _matrix.identity4)();
      const x = 0, y = 0, z = -distance;
      positionMatrix = (0, _matrix.translate4)(positionMatrix, [
        x,
        y,
        z
      ]);
      return positionMatrix;
    }
    function positionMatrixFromPosition(position) {
      let positionMatrix = (0, _matrix.identity4)();
      positionMatrix = (0, _matrix.translate4)(positionMatrix, position);
      return positionMatrix;
    }
    function rotationsMatrixFromAngles(angles, reverseOrder = false) {
      let rotationsMatrix = (0, _matrix.identity4)();
      const firstAngle = (0, _array.first)(angles), secondAngle = (0, _array.second)(angles), thirdAngle = (0, _array.third)(angles), xAngle = firstAngle, yAngle = secondAngle, zAngle = thirdAngle, xAxis = [
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
      const scalar = _constants.DEGREES_TO_RADIANS_MULTIPLIER, angles = (0, _vector.scale3)(rotations, scalar), rotationsMatrix = rotationsMatrixFromAngles(angles);
      return rotationsMatrix;
    }
    function normalsMatrixFromRotationsMatrix(rotationsMatrix) {
      let normalsMatrix = (0, _matrix.invert4)(rotationsMatrix);
      normalsMatrix = (0, _matrix.transpose4)(normalsMatrix);
      return normalsMatrix;
    }
    function projectionMatrixFromCameraAndCanvas(camera, canvas) {
      const zFar = camera.getZFar(), zNear = camera.getZNear(), width = canvas.getWidth(), height = canvas.getHeight(), fieldOfView = camera.getFieldOfView(), aspectRatio = width / height, projectionMatrix = (0, _matrix.perspective4)(fieldOfView, aspectRatio, zNear, zFar);
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
    function composeTransform(scale, position, rotations) {
      let matrix = null;
      if (scale !== null) {
        const scaleMatrix = (0, _matrix1.scaleMatrixFromScale)(scale);
        matrix = matrix === null ? scaleMatrix : (0, _matrix.multiply4)(scaleMatrix, matrix);
      }
      if (rotations !== null) {
        const rotationsMatrix = (0, _matrix1.rotationsMatrixFromRotations)(rotations);
        matrix = matrix === null ? rotationsMatrix : (0, _matrix.multiply4)(rotationsMatrix, matrix);
      }
      if (position !== null) {
        const positionMatrix = (0, _matrix1.positionMatrixFromPosition)(position);
        matrix = matrix === null ? positionMatrix : (0, _matrix.multiply4)(positionMatrix, matrix);
      }
      const transform = matrix === null ? (vector) => vector : (vector) => (0, _vector.transform4)([
        ...vector,
        1
      ], matrix).slice(0, 3);
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
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var Mask = class extends _element.default {
      constructor(reference, transform) {
        super();
        this.reference = reference;
        this.transform = transform;
      }
      getReference() {
        return this.reference;
      }
      getTransform() {
        return this.transform;
      }
      retrieveMaskingFacets() {
        const childElements = this.getChildElements(), facets = retrieveFacets(childElements), maskingFacets = facets.map((facet) => {
          const maskingFacet = _maskingFacet.default.fromFacet(facet);
          return maskingFacet;
        });
        return maskingFacets;
      }
      maskElement(element, marginOfError) {
        const maskingFacets = this.retrieveMaskingFacets(), childElements = element.getChildElements();
        maskElement(element, maskingFacets, marginOfError);
        childElements.forEach((childElement) => {
          maskElement(childElement, maskingFacets, marginOfError);
        });
      }
      applyTransform(transform) {
        const childElements = this.getChildElements();
        childElements.forEach((childElement) => {
          childElement.applyTransform(transform);
        });
      }
      createFacets(marginOfError) {
        const childElements = this.getChildElements();
        childElements.forEach((childElement) => {
          childElement.createFacets(marginOfError);
        });
      }
      maskFacets(masks, marginOfError) {
        const childElements = this.getChildElements();
        childElements.forEach((childElement) => {
          childElement.maskFacets(masks, marginOfError);
        });
        this.applyTransform(this.transform);
      }
      addFacets(colourRenderer, textureRenderer) {
      }
      static fromProperties(properties) {
        const {reference, scale = null, position = null, rotations = null} = properties, transform = (0, _transform.composeTransform)(scale, position, rotations), mask = _element.default.fromProperties(Mask, properties, reference, transform);
        return mask;
      }
    };
    function retrieveFacets(childElements, facets = []) {
      childElements.forEach((childElement) => {
        const element = childElement, elementFacets = element.getFacets(), childElements2 = element.getChildElements();
        (0, _array.add)(facets, elementFacets);
        retrieveFacets(childElements2, facets);
      });
      return facets;
    }
    function maskElement(element, maskingFacets, marginOfError) {
      let facets = element.getFacets();
      maskingFacets.forEach((maskingFacet) => {
        const unmaskedFacets = [];
        facets.forEach((facet) => {
          maskingFacet.maskFacet(facet, unmaskedFacets, marginOfError);
        });
        facets = unmaskedFacets;
      });
      element.setFacets(facets);
      const childElements = element.getChildElements();
      childElements.forEach((childElement) => {
        const element2 = childElement;
        maskElement(element2, maskingFacets, marginOfError);
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
    function elementsFromChildElements(childElements, Class) {
      const elements = childElements.reduce((elements2, childElement) => {
        if (childElement instanceof Class) {
          const element = childElement;
          elements2.push(element);
        }
        return elements2;
      }, []);
      return elements;
    }
    function elementFromChildElements(childElements, Class) {
      const element = childElements.reduce((element2, childElement) => {
        if (element2 === null) {
          if (childElement instanceof Class) {
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
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var CanvasElement = class extends _element.default {
      constructor(maskReference, transform, facets, masks) {
        super();
        this.maskReference = maskReference;
        this.transform = transform;
        this.facets = facets;
        this.masks = masks;
      }
      getMaskReference() {
        return this.maskReference;
      }
      getTransform() {
        return this.transform;
      }
      getFacets() {
        return this.facets;
      }
      getMasks() {
        return this.masks;
      }
      setFacets(facets) {
        this.facets = facets;
      }
      applyMask(masks, marginOfError) {
        if (this.maskReference !== null) {
          const mask = masks.find((mask2) => {
            const reference = mask2.getReference();
            if (reference === this.maskReference) {
              return true;
            }
          }) || null;
          if (mask !== null) {
            const element = this;
            mask.maskElement(element, marginOfError);
          }
        }
      }
      applyTransform(transform) {
        const childElements = this.getChildElements();
        this.facets.forEach((facet) => {
          facet.applyTransform(transform);
        });
        childElements.forEach((childElement) => {
          childElement.applyTransform(transform);
        });
      }
      createFacets(marginOfError) {
        const childElements = this.getChildElements();
        childElements.forEach((childElement) => {
          childElement.createFacets(marginOfError);
        });
      }
      maskFacets(masks, marginOfError) {
        masks = [
          ...masks,
          ...this.masks
        ];
        const childElements = this.getChildElements();
        childElements.forEach((childElement) => {
          childElement.maskFacets(masks, marginOfError);
        });
        this.applyTransform(this.transform);
        this.applyMask(masks, marginOfError);
      }
      addFacets(colourRenderer, textureRenderer) {
        const childElements = this.getChildElements();
        childElements.forEach((childElement) => {
          childElement.addFacets(colourRenderer, textureRenderer);
        });
      }
      static fromProperties(Class, properties, ...remainingArguments) {
        const {childElements, scale = null, position = null, rotations = null, maskReference = null} = properties, transform = (0, _transform.composeTransform)(scale, position, rotations), facets = [], masks = (0, _element1.elementsFromChildElements)(childElements, _mask.default), canvasElement = _element.default.fromProperties(Class, properties, maskReference, transform, facets, masks, ...remainingArguments);
        return canvasElement;
      }
    };
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
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var FunctionCanvasElement = class extends _canvas.default {
      static fromProperties(properties) {
        const functionCanvasElement = _canvas.default.fromProperties(FunctionCanvasElement, properties);
        return functionCanvasElement;
      }
    };
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
      elements = elements.reduce((elements2, element) => {
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
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function createElement(firstArgument, properties, ...childElements) {
      properties = properties || {};
      childElements = sanitiseChildElements(childElements);
      let element;
      if (isSubclassOf(firstArgument, _element.default)) {
        const Class = firstArgument;
        Object.assign(properties, {
          childElements
        });
        element = Class.fromProperties(properties);
      } else if (typeof firstArgument === _constants.FUNCTION) {
        const func = firstArgument, childElements2 = (0, _array.guarantee)(func(properties));
        Object.assign(properties, {
          childElements: childElements2
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
      const subclassOf = argument.prototype instanceof Class;
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
    function clearDepth(depth = _defaults.DEFAULT_DEPTH) {
      this.context.clearDepth(depth);
    }
    function clearDepthBuffer() {
      const {DEPTH_BUFFER_BIT} = this.context, mask = DEPTH_BUFFER_BIT;
      this.context.clear(mask);
    }
    function enableDepthTesting() {
      const {DEPTH_TEST, LEQUAL} = this.context, capacity = DEPTH_TEST, depthComparisonFunction = LEQUAL;
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
      const {COMPILE_STATUS} = this.context, pname = COMPILE_STATUS, shader = this.context.createShader(type);
      this.context.shaderSource(shader, shaderSource);
      this.context.compileShader(shader);
      const compileStatus = this.context.getShaderParameter(shader, pname);
      if (!compileStatus) {
        throw new Error(_errors.SHADER_ERROR);
      }
      return shader;
    }
    function createVertexShader(vertexShaderSource, canvas) {
      const {VERTEX_SHADER} = this.context, type = VERTEX_SHADER, vertexShader = this.createShader(type, vertexShaderSource);
      return vertexShader;
    }
    function createFragmentShader(fragmentShaderSource, canvas) {
      const {FRAGMENT_SHADER} = this.context, type = FRAGMENT_SHADER, fragmentShader = this.createShader(type, fragmentShaderSource);
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
      const {ELEMENT_ARRAY_BUFFER, STATIC_DRAW} = this.context, target = ELEMENT_ARRAY_BUFFER, usage = STATIC_DRAW, uint16Array = new Uint16Array(data), elementBuffer = this.context.createBuffer();
      this.context.bindBuffer(target, elementBuffer);
      this.context.bufferData(target, uint16Array, usage);
      return elementBuffer;
    }
    function bindElementBuffer(elementBuffer) {
      const {ELEMENT_ARRAY_BUFFER} = this.context, target = ELEMENT_ARRAY_BUFFER;
      this.context.bindBuffer(target, elementBuffer);
    }
    function createBuffer(data) {
      const {ARRAY_BUFFER, STATIC_DRAW} = this.context, target = ARRAY_BUFFER, usage = STATIC_DRAW, buffer = this.context.createBuffer(), float32Array = new Float32Array(data);
      this.context.bindBuffer(target, buffer);
      this.context.bufferData(target, float32Array, usage);
      return buffer;
    }
    function bindBuffer(buffer, attributeLocation, components) {
      const {ARRAY_BUFFER, FLOAT} = this.context, target = ARRAY_BUFFER, type = FLOAT, normalize = false, stride = 0, offset = 0;
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
    function clearColour(colour) {
      const [r, g, b, a = 1] = colour;
      this.context.clearColor(r, g, b, a);
    }
    function clearColourBuffer() {
      const {COLOR_BUFFER_BIT} = this.context, mask = COLOR_BUFFER_BIT;
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
      const transpose = false;
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
      const {RGBA, LINEAR, UNSIGNED_BYTE, TEXTURE0, TEXTURE_2D, TEXTURE_WRAP_S, TEXTURE_WRAP_T, UNPACK_FLIP_Y_WEBGL, CLAMP_TO_EDGE, NEAREST, REPEAT, TEXTURE_MIN_FILTER} = this.context, target = TEXTURE0 + index, level = 0, internalFormat = RGBA, format = RGBA, type = UNSIGNED_BYTE, texture = this.context.createTexture();
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
      const extension = this.context.getExtension(_constants.EXT_TEXTURE_FILTER_ANISOTROPIC) || this.context.getExtension(_constants.MOZ_EXT_TEXTURE_FILTER_ANISOTROPIC) || this.context.getExtension(_constants.WEBKIT_EXT_TEXTURE_FILTER_ANISOTROPIC);
      if (extension) {
        const {TEXTURE_2D} = this.context, {MAX_TEXTURE_MAX_ANISOTROPY_EXT, TEXTURE_MAX_ANISOTROPY_EXT} = extension, maximum = this.context.getParameter(MAX_TEXTURE_MAX_ANISOTROPY_EXT);
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
      const program = this.context.createProgram();
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
      const {BLEND, SRC_ALPHA, ONE} = this.context, capacity = BLEND, sourceFactor = SRC_ALPHA, destinationFactor = ONE;
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
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var Canvas = class {
      constructor(selector = _constants.CANVAS) {
        const domElement = domElementFromSelector(selector), context = contextFromDOMElement(domElement);
        this.domElement = domElement;
        this.context = context;
        this.enableDepthTesting();
      }
      getDOMElement() {
        return this.domElement;
      }
      getContext() {
        return this.context;
      }
      getWidth() {
        return this.domElement.width;
      }
      getHeight() {
        return this.domElement.height;
      }
      getClientWidth() {
        return this.domElement.clientWidth;
      }
      getClientHeight() {
        return this.domElement.clientHeight;
      }
      setWidth(width) {
        this.domElement.setAttribute(_constants.WIDTH, width);
      }
      setHeight(height) {
        this.domElement.setAttribute(_constants.HEIGHT, height);
      }
      resize(width, height) {
        const x = 0, y = 0;
        this.setWidth(width);
        this.setHeight(height);
        this.context.viewport(x, y, width, height);
      }
      clear(colour) {
        this.clearColour(colour);
        this.clearDepth();
        this.clearDepthBuffer();
        this.clearColourBuffer();
      }
      render(renderer, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
        const offsetsMatrixUniformLocation = renderer.getOffsetsMatrixUniformLocation(), normalsMatrixUniformLocation = renderer.getNormalsMatrixUniformLocation(), positionMatrixUniformLocation = renderer.getPositionMatrixUniformLocation(), rotationsMatrixUniformLocation = renderer.getRotationsMatrixUniformLocation(), projectionMatrixUniformLocation = renderer.getProjectionMatrixUniformLocation();
        this.applyMatrix(offsetsMatrixUniformLocation, offsetsMatrix);
        this.applyMatrix(normalsMatrixUniformLocation, normalsMatrix);
        this.applyMatrix(positionMatrixUniformLocation, positionMatrix);
        this.applyMatrix(rotationsMatrixUniformLocation, rotationsMatrix);
        this.applyMatrix(projectionMatrixUniformLocation, projectionMatrix);
      }
      drawElements(start, finish) {
        const {TRIANGLES, UNSIGNED_SHORT} = this.context, mode = TRIANGLES, type = UNSIGNED_SHORT, count = finish - start, offset = start * 2;
        this.context.drawElements(mode, count, type, offset);
      }
    };
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
      const domElement = typeof selector === _constants.STRING ? document.querySelectorAll(selector)[0] : selector;
      return domElement;
    }
    function contextFromDOMElement(domElement) {
      const context = domElement.getContext(_constants.WEBGL);
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
    var Renderer = class {
      constructor(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations) {
        this.facets = facets;
        this.program = program;
        this.rendererData = rendererData;
        this.rendererBuffers = rendererBuffers;
        this.uniformLocations = uniformLocations;
        this.attributeLocations = attributeLocations;
      }
      getFacets() {
        return this.facets;
      }
      getProgram() {
        return this.program;
      }
      getRendererData() {
        return this.rendererData;
      }
      getRendererBuffers() {
        return this.rendererBuffers;
      }
      getUniformLocations() {
        return this.uniformLocations;
      }
      getAttributeLocations() {
        return this.attributeLocations;
      }
      getCount() {
        return this.rendererData.getCount();
      }
      getOffsetsMatrixUniformLocation() {
        return this.uniformLocations.getOffsetsMatrixUniformLocation();
      }
      getNormalsMatrixUniformLocation() {
        return this.uniformLocations.getNormalsMatrixUniformLocation();
      }
      getPositionMatrixUniformLocation() {
        return this.uniformLocations.getPositionMatrixUniformLocation();
      }
      getRotationsMatrixUniformLocation() {
        return this.uniformLocations.getRotationsMatrixUniformLocation();
      }
      getProjectionMatrixUniformLocation() {
        return this.uniformLocations.getProjectionMatrixUniformLocation();
      }
      getVertexPositionAttributeLocation() {
        return this.attributeLocations.getVertexPositionAttributeLocation();
      }
      getVertexNormalAttributeLocation() {
        return this.attributeLocations.getVertexNormalAttributeLocation();
      }
      addFacets(facets) {
        (0, _array.add)(this.facets, facets);
      }
    };
    function createProgram(vertexShaderSource, fragmentShaderSource, canvas) {
      const vertexShader = canvas.createVertexShader(vertexShaderSource), fragmentShader = canvas.createFragmentShader(fragmentShaderSource), program = canvas.createProgram(vertexShader, fragmentShader);
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
    var RendererData = class {
      constructor(vertexPositionsData, vertexNormalsData, vertexIndexesData) {
        this.vertexPositionsData = vertexPositionsData;
        this.vertexNormalsData = vertexNormalsData;
        this.vertexIndexesData = vertexIndexesData;
      }
      getCount() {
        const vertexIndexesDataLength = this.vertexIndexesData.length, count = vertexIndexesDataLength;
        return count;
      }
      getVertexPositionsData() {
        return this.vertexPositionsData;
      }
      getVertexNormalsData() {
        return this.vertexNormalsData;
      }
      getVertexIndexesData() {
        return this.vertexIndexesData;
      }
      addVertexPositions(vertexPositions) {
        const vertexPositionsData = (0, _array.flatten)(vertexPositions);
        (0, _array.add)(this.vertexPositionsData, vertexPositionsData);
      }
      addVertexNormals(vertexNormals) {
        const vertexNormalsData = (0, _array.flatten)(vertexNormals);
        (0, _array.add)(this.vertexNormalsData, vertexNormalsData);
      }
      addVertexIndexes(vertexIndexes) {
        const vertexIndexesData = vertexIndexes;
        (0, _array.add)(this.vertexIndexesData, vertexIndexesData);
      }
      static fromNothing(Class, ...remainingArguments) {
        const vertexPositionsData = [], vertexNormalsData = [], vertexIndexesData = [], rendererData = new Class(vertexPositionsData, vertexNormalsData, vertexIndexesData, ...remainingArguments);
        return rendererData;
      }
    };
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
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var ColourRendererData = class extends _data.default {
      constructor(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexColoursData) {
        super(vertexPositionsData, vertexNormalsData, vertexIndexesData);
        this.vertexColoursData = vertexColoursData;
      }
      getVertexColoursData() {
        return this.vertexColoursData;
      }
      addVertexColours(vertexColours) {
        const vertexColoursData = (0, _array.flatten)(vertexColours);
        (0, _array.add)(this.vertexColoursData, vertexColoursData);
      }
      static fromNothing() {
        const vertexColoursData = [], colourRendererData = _data.default.fromNothing(ColourRendererData, vertexColoursData);
        return colourRendererData;
      }
    };
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
    var lightingSource = new String(`
  
        uniform mat4 ${normalsMatrixName};

        attribute vec3 ${vertexNormalAttributeName};

        vec3 directionalLightColour = vec3(1, 1, 1),
             directionalVector = normalize(vec3(1.0, 1.0, 1.0));
          
        vec3 calculateLighting() {
          vec4 transformedNormal = ${normalsMatrixName} * vec4(${vertexNormalAttributeName}, 1.0);            

          float directional = (dot(transformedNormal.xyz, directionalVector) + 1.0) / 2.0;
          
          vec3 lighting = (directionalLightColour * directional);
          
          return lighting;
        }

      `);
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
    var positionSource = new String(`
  
        uniform mat4 ${offsetsMatrixName},
                     ${rotationsMatrixName},
                     ${positionMatrixName},
                     ${projectionMatrixName};
        
        attribute vec4 ${vertexPositionAttributeName};

        vec4 calculatePosition() {
          vec4 position = ${projectionMatrixName} * ${positionMatrixName} * ${rotationsMatrixName} * ${offsetsMatrixName} * ${vertexPositionAttributeName};
          
          return position;
        }
        
      `);
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
    var vertexShaderSource = new String(`
    
        attribute vec4 ${vertexColourAttributeName};

        ${_lighting.default}
      
        ${_position.default}
    
        varying highp vec3 vLighting;
        
        varying lowp vec4 vColour;
        
        void main() {
          vLighting = calculateLighting();

          gl_Position = calculatePosition();

          vColour = ${vertexColourAttributeName};                    
        }
        
      `);
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
    var fragmentShaderSource = new String(`
        
        varying lowp vec4 vColour;
              
        varying highp vec3 vLighting;

        void main() {
          gl_FragColor = vec4(vColour.rgb * vLighting, vColour.a);
        }
        
      `);
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
    var vertexNormalComponents = 3;
    var vertexPositionComponents = 3;
    var RendererBuffers = class {
      constructor(vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer) {
        this.vertexPositionsBuffer = vertexPositionsBuffer;
        this.vertexNormalsBuffer = vertexNormalsBuffer;
        this.vertexIndexesElementBuffer = vertexIndexesElementBuffer;
      }
      createVertexPositionsBuffer(vertexPositionsData, canvas) {
        this.vertexPositionsBuffer = canvas.createBuffer(vertexPositionsData);
      }
      createVertexNormalsBuffer(vertexNormalsData, canvas) {
        this.vertexNormalsBuffer = canvas.createBuffer(vertexNormalsData);
      }
      createVertexIndexesElementBuffer(vertexIndexesData, canvas) {
        this.vertexIndexesElementBuffer = canvas.createElementBuffer(vertexIndexesData);
      }
      bindVertexNormalsBuffer(vertexNormalAttributeLocation, canvas) {
        canvas.bindBuffer(this.vertexNormalsBuffer, vertexNormalAttributeLocation, vertexNormalComponents);
      }
      bindVertexPositionsBuffer(vertexPositionAttributeLocation, canvas) {
        canvas.bindBuffer(this.vertexPositionsBuffer, vertexPositionAttributeLocation, vertexPositionComponents);
      }
      bindVertexIndexesElementBuffer(canvas) {
        canvas.bindElementBuffer(this.vertexIndexesElementBuffer);
      }
      createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, canvas) {
        this.createVertexPositionsBuffer(vertexPositionsData, canvas);
        this.createVertexNormalsBuffer(vertexNormalsData, canvas);
        this.createVertexIndexesElementBuffer(vertexIndexesData, canvas);
      }
      bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, canvas) {
        this.bindVertexNormalsBuffer(vertexNormalAttributeLocation, canvas);
        this.bindVertexPositionsBuffer(vertexPositionAttributeLocation, canvas);
        this.bindVertexIndexesElementBuffer(canvas);
      }
      static fromNothing(Class, ...remainingArguments) {
        const vertexPositionsBuffer = null, vertexNormalsBuffer = null, vertexIndexesElementBuffer = null, rendererBuffers = new Class(vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer, ...remainingArguments);
        return rendererBuffers;
      }
    };
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
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var vertexColourComponents = 4;
    var ColourRendererBuffers = class extends _buffers.default {
      constructor(vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer, vertexColoursBuffer) {
        super(vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer);
        this.vertexColoursBuffer = vertexColoursBuffer;
      }
      createVertexColoursBuffer(vertexColoursData, canvas) {
        this.vertexColoursBuffer = canvas.createBuffer(vertexColoursData);
      }
      bindVertexColoursBuffer(vertexColourAttributeLocation, canvas) {
        canvas.bindBuffer(this.vertexColoursBuffer, vertexColourAttributeLocation, vertexColourComponents);
      }
      createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexColoursData, canvas) {
        super.createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, canvas);
        this.createVertexColoursBuffer(vertexColoursData, canvas);
      }
      bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, vertexColourAttributeLocation, canvas) {
        super.bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, canvas);
        this.bindVertexColoursBuffer(vertexColourAttributeLocation, canvas);
      }
      static fromNothing() {
        const vertexColoursBuffer = null, colourRendererBuffers = _buffers.default.fromNothing(ColourRendererBuffers, vertexColoursBuffer);
        return colourRendererBuffers;
      }
    };
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
    var UniformLocations = class {
      constructor(offsetsMatrixUniformLocation, normalsMatrixUniformLocation, positionMatrixUniformLocation, rotationsMatrixUniformLocation, projectionMatrixUniformLocation) {
        this.offsetsMatrixUniformLocation = offsetsMatrixUniformLocation;
        this.normalsMatrixUniformLocation = normalsMatrixUniformLocation;
        this.positionMatrixUniformLocation = positionMatrixUniformLocation;
        this.rotationsMatrixUniformLocation = rotationsMatrixUniformLocation;
        this.projectionMatrixUniformLocation = projectionMatrixUniformLocation;
      }
      getOffsetsMatrixUniformLocation() {
        return this.offsetsMatrixUniformLocation;
      }
      getNormalsMatrixUniformLocation() {
        return this.normalsMatrixUniformLocation;
      }
      getPositionMatrixUniformLocation() {
        return this.positionMatrixUniformLocation;
      }
      getRotationsMatrixUniformLocation() {
        return this.rotationsMatrixUniformLocation;
      }
      getProjectionMatrixUniformLocation() {
        return this.projectionMatrixUniformLocation;
      }
      static fromProgram(Class, program, canvas, ...remainingArguments) {
        const offsetsMatrixUniformLocation = canvas.getUniformLocation(program, _position.offsetsMatrixName), normalsMatrixUniformLocation = canvas.getUniformLocation(program, _lighting.normalsMatrixName), positionMatrixUniformLocation = canvas.getUniformLocation(program, _position.positionMatrixName), rotationsMatrixUniformLocation = canvas.getUniformLocation(program, _position.rotationsMatrixName), projectionMatrixUniformLocation = canvas.getUniformLocation(program, _position.projectionMatrixName), uniformLocations = new Class(offsetsMatrixUniformLocation, normalsMatrixUniformLocation, positionMatrixUniformLocation, rotationsMatrixUniformLocation, projectionMatrixUniformLocation, ...remainingArguments);
        return uniformLocations;
      }
    };
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
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var ColourUniformLocations = class extends _uniform.default {
      static fromProgram(program, canvas) {
        return _uniform.default.fromProgram(ColourUniformLocations, program, canvas);
      }
    };
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
    var AttributeLocations = class {
      constructor(vertexPositionAttributeLocation, vertexNormalAttributeLocation) {
        this.vertexPositionAttributeLocation = vertexPositionAttributeLocation;
        this.vertexNormalAttributeLocation = vertexNormalAttributeLocation;
      }
      getVertexPositionAttributeLocation() {
        return this.vertexPositionAttributeLocation;
      }
      getVertexNormalAttributeLocation() {
        return this.vertexNormalAttributeLocation;
      }
      static fromProgram(Class, program, canvas, ...remainingArguments) {
        const vertexPositionAttributeLocation = canvas.getAttributeLocation(program, _position.vertexPositionAttributeName), vertexNormalAttributeLocation = canvas.getAttributeLocation(program, _lighting.vertexNormalAttributeName), attributeLocations = new Class(vertexPositionAttributeLocation, vertexNormalAttributeLocation, ...remainingArguments);
        return attributeLocations;
      }
    };
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
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var ColourAttributeLocations = class extends _attribute.default {
      constructor(vertexPositionAttributeLocation, vertexNormalAttributeLocation, vertexColourAttributeLocation) {
        super(vertexPositionAttributeLocation, vertexNormalAttributeLocation);
        this.vertexColourAttributeLocation = vertexColourAttributeLocation;
      }
      getVertexColourAttributeLocation() {
        return this.vertexColourAttributeLocation;
      }
      static fromProgram(program, canvas) {
        const vertexColourAttributeLocation = canvas.getAttributeLocation(program, _vertexShader.vertexColourAttributeName), colourAttributeLocations = _attribute.default.fromProgram(ColourAttributeLocations, program, canvas, vertexColourAttributeLocation);
        return colourAttributeLocations;
      }
    };
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
    var ColourRenderer = class extends _renderer.default {
      getVertexColourAttributeLocation() {
        const attributeLocations = this.getAttributeLocations(), vertexColourAttributeLocation = attributeLocations.getVertexColourAttributeLocation();
        return vertexColourAttributeLocation;
      }
      createBuffers(canvas) {
        const facets = this.getFacets(), vertexIndexes = [], vertexNormals = [], vertexPositions = [], vertexColours = [];
        facets.forEach((facet, index) => {
          const colouredFacet = facet, facetVertexIndexes = facet.getVertexIndexes(index), facetVertexNormals = facet.getVertexNormals(), facetVertexPositions = facet.getVertexPositions(), colouredFacetVertexColours = colouredFacet.getVertexColours();
          (0, _array.add)(vertexIndexes, facetVertexIndexes);
          (0, _array.add)(vertexNormals, facetVertexNormals);
          (0, _array.add)(vertexPositions, facetVertexPositions);
          (0, _array.add)(vertexColours, colouredFacetVertexColours);
        });
        const rendererData = this.getRendererData();
        rendererData.addVertexIndexes(vertexIndexes);
        rendererData.addVertexNormals(vertexNormals);
        rendererData.addVertexColours(vertexColours);
        rendererData.addVertexPositions(vertexPositions);
        const rendererBuffers = this.getRendererBuffers(), vertexPositionsData = rendererData.getVertexPositionsData(), vertexNormalsData = rendererData.getVertexNormalsData(), vertexIndexesData = rendererData.getVertexIndexesData(), vertexColoursData = rendererData.getVertexColoursData();
        rendererBuffers.createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexColoursData, canvas);
      }
      bindBuffers(canvas) {
        const rendererBuffers = this.getRendererBuffers(), vertexNormalAttributeLocation = this.getVertexNormalAttributeLocation(), vertexPositionAttributeLocation = this.getVertexPositionAttributeLocation(), vertexColourAttributeLocation = this.getVertexColourAttributeLocation();
        rendererBuffers.bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, vertexColourAttributeLocation, canvas);
      }
      render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, canvas) {
        const program = this.getProgram();
        canvas.useProgram(program);
        this.bindBuffers(canvas);
        const renderer = this;
        canvas.render(renderer, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
        const count = this.getCount(), start = 0, finish = count;
        canvas.drawElements(start, finish);
      }
      static fromNothing(canvas) {
        const facets = [], program = (0, _renderer.createProgram)(_vertexShader.default, _fragmentShader.default, canvas), colourRendererData = _colour.default.fromNothing(), colourRendererBuffers = _colour1.default.fromNothing(), colourUniformLocations = _uniform.default.fromProgram(program, canvas), colourAttributeLocations = _attribute.default.fromProgram(program, canvas), rendererData = colourRendererData, rendererBuffers = colourRendererBuffers, uniformLocations = colourUniformLocations, attributeLocations = colourAttributeLocations, colourRenderer = new ColourRenderer(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations);
        return colourRenderer;
      }
    };
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
    var vertexShaderSource = new String(`
        
        attribute vec2 ${textureCoordinateAttributeName};
        
        ${_lighting.default}
      
        ${_position.default}

        varying highp vec3 vLighting;
        
        varying highp vec2 vTextureCoordinate;
        
        void main() {
          vLighting = calculateLighting();

          gl_Position = calculatePosition();
                    
          vTextureCoordinate = ${textureCoordinateAttributeName};
        }
        
      `);
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
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var TextureRendererData = class extends _data.default {
      constructor(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexTextureCoordinatesData) {
        super(vertexPositionsData, vertexNormalsData, vertexIndexesData);
        this.vertexTextureCoordinatesData = vertexTextureCoordinatesData;
      }
      getVertexTextureCoordinatesData() {
        return this.vertexTextureCoordinatesData;
      }
      addVertexTextureCoordinateTuples(vertexTextureCoordinateTuples) {
        const vertexTextureCoordinatesData = (0, _array.flatten)(vertexTextureCoordinateTuples);
        (0, _array.add)(this.vertexTextureCoordinatesData, vertexTextureCoordinatesData);
      }
      static fromNothing() {
        const vertexTextureCoordinatesData = [], textureRendererData = _data.default.fromNothing(TextureRendererData, vertexTextureCoordinatesData);
        return textureRendererData;
      }
    };
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
    var fragmentShaderSource = new String(`
        
        uniform sampler2D ${samplerName};

        varying highp vec3 vLighting;
                   
        varying highp vec2 vTextureCoordinate;
        
        void main() {
          highp vec4 texelColour = texture2D(${samplerName}, vTextureCoordinate);
          
          gl_FragColor = vec4(texelColour.rgb * vLighting, texelColour.a);  
        }
        
      `);
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
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var textureCoordinateComponents = 2;
    var TextureRendererBuffers = class extends _buffers.default {
      constructor(vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer, textureCoordinatesBuffer) {
        super(vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer);
        this.textureCoordinatesBuffer = textureCoordinatesBuffer;
      }
      createTextureCoordinatesBuffer(textureCoordinatesData, canvas) {
        this.textureCoordinatesBuffer = canvas.createBuffer(textureCoordinatesData);
      }
      bindTextureCoordinatesBuffer(textureCoordinateAttributeLocation, canvas) {
        canvas.bindBuffer(this.textureCoordinatesBuffer, textureCoordinateAttributeLocation, textureCoordinateComponents);
      }
      createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, textureCoordinatesData, canvas) {
        super.createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, canvas);
        this.createTextureCoordinatesBuffer(textureCoordinatesData, canvas);
      }
      bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, textureCoordinateAttributeLocation, canvas) {
        super.bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, canvas);
        this.bindTextureCoordinatesBuffer(textureCoordinateAttributeLocation, canvas);
      }
      static fromNothing() {
        const textureCoordinatesBuffer = null, textureRendererBuffers = _buffers.default.fromNothing(TextureRendererBuffers, textureCoordinatesBuffer);
        return textureRendererBuffers;
      }
    };
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
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var TextureUniformLocations = class extends _uniform.default {
      constructor(offsetsMatrixUniformLocation, normalsMatrixUniformLocation, positionMatrixUniformLocation, rotationsMatrixUniformLocation, projectionMatrixUniformLocation, samplerUniformLocation) {
        super(offsetsMatrixUniformLocation, normalsMatrixUniformLocation, positionMatrixUniformLocation, rotationsMatrixUniformLocation, projectionMatrixUniformLocation);
        this.samplerUniformLocation = samplerUniformLocation;
      }
      getSamplerUniformLocation() {
        return this.samplerUniformLocation;
      }
      static fromProgram(program, canvas) {
        const samplerUniformLocation = canvas.getUniformLocation(program, _fragmentShader.samplerName), textureUniformLocations = _uniform.default.fromProgram(TextureUniformLocations, program, canvas, samplerUniformLocation);
        return textureUniformLocations;
      }
    };
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
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var TextureAttributeLocations = class extends _attribute.default {
      constructor(vertexPositionAttributeLocation, vertexNormalAttributeLocation, textureCoordinateAttributeLocation) {
        super(vertexPositionAttributeLocation, vertexNormalAttributeLocation);
        this.textureCoordinateAttributeLocation = textureCoordinateAttributeLocation;
      }
      getTextureCoordinateAttributeLocation() {
        return this.textureCoordinateAttributeLocation;
      }
      static fromProgram(program, canvas) {
        const textureCoordinateAttributeLocation = canvas.getAttributeLocation(program, _vertexShader.textureCoordinateAttributeName), textureAttributeLocations = _attribute.default.fromProgram(TextureAttributeLocations, program, canvas, textureCoordinateAttributeLocation);
        return textureAttributeLocations;
      }
    };
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
    var TextureRenderer = class extends _renderer.default {
      getTextureCoordinateAttributeLocation() {
        const attributeLocations = this.getAttributeLocations(), textureCoordinateAttributeLocation = attributeLocations.getTextureCoordinateAttributeLocation();
        return textureCoordinateAttributeLocation;
      }
      createBuffers(canvas) {
        const rendererData = this.getRendererData(), rendererBuffers = this.getRendererBuffers(), vertexPositionsData = rendererData.getVertexPositionsData(), vertexNormalsData = rendererData.getVertexNormalsData(), vertexIndexesData = rendererData.getVertexIndexesData(), vertexTextureCoordinatesData = rendererData.getVertexTextureCoordinatesData();
        rendererBuffers.createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexTextureCoordinatesData, canvas);
      }
      bindBuffers(canvas) {
        const rendererBuffers = this.getRendererBuffers(), vertexNormalAttributeLocation = this.getVertexNormalAttributeLocation(), vertexPositionAttributeLocation = this.getVertexPositionAttributeLocation(), textureCoordinateAttributeLocation = this.getTextureCoordinateAttributeLocation();
        rendererBuffers.bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, textureCoordinateAttributeLocation, canvas);
      }
      useTexture(index, canvas) {
        const uniformLocations = this.getUniformLocations(), samplerUniformLocation = uniformLocations.getSamplerUniformLocation(), samplerUniformLocationIntegerValue = index;
        canvas.setUniformLocationIntegerValue(samplerUniformLocation, samplerUniformLocationIntegerValue);
      }
      static fromNothing(Class, canvas, ...remainingArguments) {
        const facets = [], program = (0, _renderer.createProgram)(_vertexShader.default, _fragmentShader.default, canvas), textureRendererData = _texture.default.fromNothing(), textureRendererBuffers = _texture1.default.fromNothing(), textureUniformLocations = _uniform.default.fromProgram(program, canvas), textureAttributeLocations = _attribute.default.fromProgram(program, canvas), rendererData = textureRendererData, rendererBuffers = textureRendererBuffers, uniformLocations = textureUniformLocations, attributeLocations = textureAttributeLocations, textureRenderer = new Class(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations, ...remainingArguments);
        canvas.enableAnisotropicFiltering();
        return textureRenderer;
      }
    };
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
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var ImagesTextureRenderer = class extends _texture.default {
      constructor(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations, imageNames, facetsMap, offsets) {
        super(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations);
        this.imageNames = imageNames;
        this.facetsMap = facetsMap;
        this.offsets = offsets;
      }
      addFacets(facets) {
        const texturedFacets = facets, texturedFacetsLength = texturedFacets.length;
        if (texturedFacetsLength > 0) {
          const firstTexturedFacet = (0, _array.first)(texturedFacets), texturedFacet = firstTexturedFacet, imageName = texturedFacet.getImageName(), facets2 = this.facetsMap[imageName];
          (0, _array.add)(facets2, texturedFacets);
        }
      }
      createBuffers(canvas) {
        const vertexIndexes = [], vertexNormals = [], vertexPositions = [], vertexTextureCoordinateTuples = [];
        let index = 0;
        this.imageNames.forEach((imageName) => {
          const facets = this.facetsMap[imageName];
          facets.forEach((facet) => {
            const texturedFacet = facet, facetVertexIndexes = facet.getVertexIndexes(index), facetVertexNormals = facet.getVertexNormals(), facetVertexPositions = facet.getVertexPositions(), texturedFacetTextureCoordinateTuples = texturedFacet.getTextureCoordinateTuples(), texturedFacetVertexTextureCoordinateTuples = texturedFacetTextureCoordinateTuples;
            (0, _array.add)(vertexIndexes, facetVertexIndexes);
            (0, _array.add)(vertexNormals, facetVertexNormals);
            (0, _array.add)(vertexPositions, facetVertexPositions);
            (0, _array.add)(vertexTextureCoordinateTuples, texturedFacetVertexTextureCoordinateTuples);
            index++;
          });
          const offset = index * 3;
          this.offsets.push(offset);
        });
        const rendererData = this.getRendererData();
        rendererData.addVertexIndexes(vertexIndexes);
        rendererData.addVertexNormals(vertexNormals);
        rendererData.addVertexPositions(vertexPositions);
        rendererData.addVertexTextureCoordinateTuples(vertexTextureCoordinateTuples);
        super.createBuffers(canvas);
      }
      render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, canvas) {
        const program = this.getProgram();
        canvas.useProgram(program);
        this.bindBuffers(canvas);
        const renderer = this;
        canvas.render(renderer, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
        let start, finish = 0;
        this.offsets.forEach((offset, index) => {
          start = finish;
          finish = offset;
          this.useTexture(index, canvas);
          canvas.drawElements(start, finish);
        });
      }
      static fromImagesImageNamesAndImageTiling(images, imageNames, imageTiling, canvas) {
        const offsets = [], facetsMap = {};
        images.forEach((image, index) => {
          const facets = [], repeat = imageTiling, imageName = imageNames[index];
          facetsMap[imageName] = facets;
          canvas.createTexture(image, index, repeat);
        });
        const imagesTextureRenderer = _texture.default.fromNothing(ImagesTextureRenderer, canvas, imageNames, facetsMap, offsets);
        return imagesTextureRenderer;
      }
    };
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
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var ImageMapTextureRenderer = class extends _texture.default {
      constructor(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations, imageMapJSON) {
        super(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations);
        this.imageMapJSON = imageMapJSON;
      }
      createBuffers(canvas) {
        const facets = this.getFacets(), vertexIndexes = [], vertexNormals = [], vertexPositions = [], vertexTextureCoordinateTuples = [];
        facets.forEach((facet, index) => {
          const texturedFacet = facet, facetVertexIndexes = facet.getVertexIndexes(index), facetVertexNormals = facet.getVertexNormals(), facetVertexPositions = facet.getVertexPositions(), mappedTextureCoordinateTuples = texturedFacet.getMappedTextureCoordinateTuples(this.imageMapJSON), texturedFacetVertexTextureCoordinateTuples = mappedTextureCoordinateTuples;
          (0, _array.add)(vertexIndexes, facetVertexIndexes);
          (0, _array.add)(vertexNormals, facetVertexNormals);
          (0, _array.add)(vertexPositions, facetVertexPositions);
          (0, _array.add)(vertexTextureCoordinateTuples, texturedFacetVertexTextureCoordinateTuples);
        });
        const rendererData = this.getRendererData();
        rendererData.addVertexIndexes(vertexIndexes);
        rendererData.addVertexNormals(vertexNormals);
        rendererData.addVertexPositions(vertexPositions);
        rendererData.addVertexTextureCoordinateTuples(vertexTextureCoordinateTuples);
        super.createBuffers(canvas);
      }
      bindBuffers(canvas) {
        const rendererBuffers = this.getRendererBuffers(), vertexNormalAttributeLocation = this.getVertexNormalAttributeLocation(), vertexPositionAttributeLocation = this.getVertexPositionAttributeLocation(), textureCoordinateAttributeLocation = this.getTextureCoordinateAttributeLocation();
        rendererBuffers.bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, textureCoordinateAttributeLocation, canvas);
      }
      useTexture(index, canvas) {
        const uniformLocations = this.getUniformLocations(), samplerUniformLocation = uniformLocations.getSamplerUniformLocation(), samplerUniformLocationIntegerValue = index;
        canvas.setUniformLocationIntegerValue(samplerUniformLocation, samplerUniformLocationIntegerValue);
      }
      render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, canvas) {
        const program = this.getProgram();
        canvas.useProgram(program);
        this.bindBuffers(canvas);
        const renderer = this;
        canvas.render(renderer, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
        const rendererData = this.getRendererData(), count = rendererData.getCount(), index = 0, start = 0, finish = count;
        this.useTexture(index, canvas);
        canvas.drawElements(start, finish);
      }
      static fromImageMapAndImageMapJSON(imageMap, imageMapJSON, canvas) {
        const image = imageMap, index = 0, repeat = false;
        canvas.createTexture(image, index, repeat);
        const imageMapTextureRenderer = _texture.default.fromNothing(ImageMapTextureRenderer, canvas, imageMapJSON);
        return imageMapTextureRenderer;
      }
    };
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
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var Part = class extends _element.default {
      constructor(images, imageMap, imageNames, imageTiling, imageMapJSON, colourRenderer, textureRenderer) {
        super();
        this.images = images;
        this.imageMap = imageMap;
        this.imageNames = imageNames;
        this.imageTiling = imageTiling;
        this.imageMapJSON = imageMapJSON;
        this.colourRenderer = colourRenderer;
        this.textureRenderer = textureRenderer;
      }
      initialise(canvas, marginOfError) {
        const colourRenderer = _colour.default.fromNothing(canvas), childElements = this.getChildElements(), masks = (0, _element1.elementsFromChildElements)(childElements, _mask.default);
        let textureRenderer = null;
        if (this.images !== null) {
          const imagesTextureRenderer = _images.default.fromImagesImageNamesAndImageTiling(this.images, this.imageNames, this.imageTiling, canvas);
          textureRenderer = imagesTextureRenderer;
        }
        if (this.imageMap !== null) {
          const imageMapTextureRenderer = _imageMap.default.fromImageMapAndImageMapJSON(this.imageMap, this.imageMapJSON, canvas);
          textureRenderer = imageMapTextureRenderer;
        }
        childElements.forEach((childElement) => {
          childElement.createFacets(marginOfError);
        });
        childElements.forEach((childElement) => {
          childElement.maskFacets(masks, marginOfError);
        });
        childElements.forEach((childElement) => {
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
      render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, canvas) {
        this.colourRenderer && this.colourRenderer.render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, canvas);
        this.textureRenderer && this.textureRenderer.render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, canvas);
      }
      static fromProperties(properties) {
        const {images = null, imageMap = null, imageNames = null, imageTiling = false, imageMapJSON = null} = properties, colourRenderer = null, textureRenderer = null, part = _element.default.fromProperties(Part, properties, images, imageMap, imageNames, imageTiling, imageMapJSON, colourRenderer, textureRenderer);
        return part;
      }
    };
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
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var Camera = class extends _element.default {
      constructor(zFar, zNear, fieldOfView) {
        super();
        this.zFar = zFar;
        this.zNear = zNear;
        this.fieldOfView = fieldOfView;
      }
      getZFar() {
        return this.zFar;
      }
      getZNear() {
        return this.zNear;
      }
      getFieldOfView() {
        return this.fieldOfView;
      }
      static fromProperties(Class, properties, ...remainingArguments) {
        let {fieldOfView = _defaults.DEFAULT_FIELD_OF_VIEW} = properties;
        fieldOfView *= _constants.DEGREES_TO_RADIANS_MULTIPLIER;
        const {zFar = _defaults.DEFAULT_Z_FAR, zNear = _defaults.DEFAULT_Z_NEAR} = properties, camera = _element.default.fromProperties(Class, properties, zFar, zNear, fieldOfView, ...remainingArguments);
        return camera;
      }
    };
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
    var {ESCAPE_KEY_CODE, SHIFT_KEY_CODE} = _necessary.keyCodes;
    var KeyEvents = class {
      constructor(handlers, shiftKeyDown) {
        this.handlers = handlers;
        this.shiftKeyDown = shiftKeyDown;
      }
      getHandlers() {
        return this.handlers;
      }
      isShiftKeyDown() {
        return this.shiftKeyDown;
      }
      keyUpEventListener = (event) => {
        const {keyCode} = event;
        if (keyCode === SHIFT_KEY_CODE) {
          this.shiftKeyDown = false;
          this.handlers.forEach((handler) => {
            handler(this.shiftKeyDown);
          });
        }
      };
      keyDownEventListener = (event) => {
        const {keyCode} = event;
        if (keyCode === SHIFT_KEY_CODE) {
          this.shiftKeyDown = true;
          this.handlers.forEach((handler) => {
            handler(this.shiftKeyDown);
          });
        }
      };
      addShiftKeyHandler(shiftKeyHandler) {
        const handler = shiftKeyHandler;
        this.handlers.push(handler);
      }
      addEscapeKeyDownHandler(escapeKeyDownHandler) {
        const documentDOMElement = document.documentElement;
        documentDOMElement.addEventListener(_eventTypes.KEYDOWN_EVENT_TYPE, (event) => {
          const {keyCode} = event;
          if (keyCode === ESCAPE_KEY_CODE) {
            escapeKeyDownHandler();
          }
        });
      }
      initialise() {
        const documentDOMElement = document.documentElement;
        documentDOMElement.addEventListener(_eventTypes.KEYUP_EVENT_TYPE, this.keyUpEventListener);
        documentDOMElement.addEventListener(_eventTypes.KEYDOWN_EVENT_TYPE, this.keyDownEventListener);
      }
      static fromNothing() {
        const handlers = [], shiftKeyDown = false, keyEvents = new KeyEvents(handlers, shiftKeyDown);
        return keyEvents;
      }
    };
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
    var MouseEvents = class {
      constructor(handlersMap, mouseDown) {
        this.handlersMap = handlersMap;
        this.mouseDown = mouseDown;
      }
      wheelEventListener = (event) => {
        const handlers = this.handlersMap[_eventTypes.WHEEL_EVENT_TYPE], mouseWheelDelta = mouseWheelDeltaFromEvent(event);
        handlers.forEach((handler) => {
          handler(mouseWheelDelta);
        });
        event.preventDefault();
      };
      mouseEventListener = (event, eventType) => {
        const handlers = this.handlersMap[eventType], mouseCoordinates = mouseCoordinatesFromEvent(event);
        handlers.forEach((handler) => {
          handler(mouseCoordinates, this.mouseDown);
        });
        event.preventDefault();
      };
      mouseUpEventListener = (event) => {
        this.mouseDown = false;
        this.mouseEventListener(event, _eventTypes.MOUSEUP_EVENT_TYPE);
      };
      mouseDownEventListener = (event) => {
        this.mouseDown = true;
        this.mouseEventListener(event, _eventTypes.MOUSEDOWN_EVENT_TYPE);
      };
      mouseMoveEventListener = (event) => {
        this.mouseEventListener(event, _eventTypes.MOUSEMOVE_EVENT_TYPE);
      };
      addMouseUpHandler(mouseUpHandler) {
        const mouseUpHandlers = this.handlersMap[_eventTypes.MOUSEUP_EVENT_TYPE];
        mouseUpHandlers.push(mouseUpHandler);
      }
      addMouseDownHandler(mouseDownHandler) {
        const mouseDownHandlers = this.handlersMap[_eventTypes.MOUSEDOWN_EVENT_TYPE];
        mouseDownHandlers.push(mouseDownHandler);
      }
      addMouseMoveHandler(mouseMoveHandler) {
        const mouseMoveHandlers = this.handlersMap[_eventTypes.MOUSEMOVE_EVENT_TYPE];
        mouseMoveHandlers.push(mouseMoveHandler);
      }
      addMouseWheelHandler(mouseWheelHandler) {
        const mouseWheelHandlers = this.handlersMap[_eventTypes.WHEEL_EVENT_TYPE];
        mouseWheelHandlers.push(mouseWheelHandler);
      }
      initialise(canvas) {
        const canvasDOMElement = canvas.getDOMElement();
        this.handlersMap[_eventTypes.WHEEL_EVENT_TYPE] = [];
        this.handlersMap[_eventTypes.MOUSEUP_EVENT_TYPE] = [];
        this.handlersMap[_eventTypes.MOUSEDOWN_EVENT_TYPE] = [];
        this.handlersMap[_eventTypes.MOUSEMOVE_EVENT_TYPE] = [];
        canvasDOMElement.addEventListener(_eventTypes.WHEEL_EVENT_TYPE, this.wheelEventListener);
        canvasDOMElement.addEventListener(_eventTypes.MOUSEUP_EVENT_TYPE, this.mouseUpEventListener);
        canvasDOMElement.addEventListener(_eventTypes.MOUSEDOWN_EVENT_TYPE, this.mouseDownEventListener);
        canvasDOMElement.addEventListener(_eventTypes.MOUSEMOVE_EVENT_TYPE, this.mouseMoveEventListener);
      }
      static fromNothing() {
        const handlersMap = {}, mouseDown = false, mouseEvents = new MouseEvents(handlersMap, mouseDown);
        return mouseEvents;
      }
    };
    function mouseWheelDeltaFromEvent(event) {
      const {wheelDelta} = event, mouseWheelDelta = Math.max(-1, Math.min(1, wheelDelta));
      return mouseWheelDelta;
    }
    function mouseCoordinatesFromEvent(event) {
      const {target, clientX, clientY} = event, canvasDOMElement = target, boundingClientRect = canvasDOMElement.getBoundingClientRect(), {top, left} = boundingClientRect, mouseCoordinates = [
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
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var UserInput = class {
      constructor(handlers, keyEvents, mouseEvents, mouseCoordinates, previousMouseCoordinates) {
        this.handlers = handlers;
        this.keyEvents = keyEvents;
        this.mouseEvents = mouseEvents;
        this.mouseCoordinates = mouseCoordinates;
        this.previousMouseCoordinates = previousMouseCoordinates;
      }
      mouseMoveHandler(mouseCoordinates, mouseDown, canvas) {
        this.previousMouseCoordinates = this.mouseCoordinates;
        this.mouseCoordinates = mouseCoordinates;
        if (this.previousMouseCoordinates === null) {
          return;
        }
        if (mouseDown) {
          const mouseWheelDelta = 0, shiftKeyDown = this.keyEvents.isShiftKeyDown(), relativeMouseCoordinates = (0, _vector.subtract2)(this.mouseCoordinates, this.previousMouseCoordinates);
          this.handlers.forEach((handler) => {
            handler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown);
          });
        }
      }
      mouseWheelHandler(mouseWheelDelta, canvas) {
        const shiftKeyDown = this.keyEvents.isShiftKeyDown(), relativeMouseCoordinates = (0, _vector.zero2)();
        this.handlers.forEach((handler) => {
          handler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown);
        });
      }
      addUserInputHandler(userInputHandler) {
        const handler = userInputHandler;
        this.handlers.push(handler);
      }
      addEscapeKeyDownHandler(escapeKeyDownHandler) {
        this.keyEvents.addEscapeKeyDownHandler(escapeKeyDownHandler);
      }
      initialise(canvas) {
        const mouseMoveHandler = this.mouseMoveHandler.bind(this), mouseWheelHandler = this.mouseWheelHandler.bind(this);
        this.keyEvents.initialise();
        this.mouseEvents.initialise(canvas);
        this.mouseEvents.addMouseMoveHandler(mouseMoveHandler);
        this.mouseEvents.addMouseWheelHandler(mouseWheelHandler);
      }
      static fromNothing() {
        const handlers = [], keyEvents = _keyEvents.default.fromNothing(), mouseEvents = _mouseEvents.default.fromNothing(), mouseCoordinates = null, previousMouseCoordinates = null, userInput = new UserInput(handlers, keyEvents, mouseEvents, mouseCoordinates, previousMouseCoordinates);
        return userInput;
      }
    };
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
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var Scene = class extends _element.default {
      constructor(parts, camera, canvas, colour) {
        super();
        this.parts = parts;
        this.camera = camera;
        this.canvas = canvas;
        this.colour = colour;
      }
      getParts() {
        return this.parts;
      }
      getCamera() {
        return this.camera;
      }
      getCanvas() {
        return this.canvas;
      }
      getColour() {
        return this.colour;
      }
      escapeKeyDownHandler = () => {
        this.camera.reset();
        this.windowResizeHandler();
      };
      windowResizeHandler = () => {
        const clientWidth = this.canvas.getClientWidth(), clientHeight = this.canvas.getClientHeight(), width = clientWidth, height = clientHeight;
        this.canvas.resize(width, height);
        const relativeMouseCoordinates = (0, _vector.zero2)(), mouseWheelDelta = 0, shiftKeyDown = false;
        this.userInputHandler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown);
      };
      userInputHandler = (relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown) => {
        const render = this.render.bind(this);
        this.camera.update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, this.canvas, render);
      };
      initialise(canvas, marginOfError) {
        const userInput = _userInput.default.fromNothing();
        this.parts.forEach((part) => {
          part.initialise(canvas, marginOfError);
        });
        userInput.initialise(canvas);
        userInput.addUserInputHandler(this.userInputHandler);
        userInput.addEscapeKeyDownHandler(this.escapeKeyDownHandler);
        window.onresize = this.windowResizeHandler;
        this.windowResizeHandler();
      }
      render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
        this.canvas.clear(this.colour);
        this.parts.forEach((part) => {
          part.render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, this.canvas);
        });
      }
      static fromProperties(properties) {
        const {canvas, childElements, backgroundColour = _defaults.DEFAULT_BACKGROUND_COLOUR} = properties, parts = (0, _element1.elementsFromChildElements)(childElements, _part.default), camera = (0, _element1.elementFromChildElements)(childElements, _camera.default), colour = backgroundColour, scene = _element.default.fromProperties(Scene, properties, parts, camera, canvas, colour), marginOfError = _defaults.DEFAULT_MARGIN_OF_ERROR;
        scene.initialise(canvas, marginOfError);
        return scene;
      }
    };
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
      const reverseOrder = true, rotationsMatrix = (0, _matrix.rotationsMatrixFromAngles)(angles, reverseOrder);
      let relativeOffsets = (0, _vector.transform4)(directions, rotationsMatrix);
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
    var Pan = class {
      constructor(offsets, mouseWheelDeltaMultiplier, relativeMouseCoordinatesMultiplier) {
        this.offsets = offsets;
        this.mouseWheelDeltaMultiplier = mouseWheelDeltaMultiplier;
        this.relativeMouseCoordinatesMultiplier = relativeMouseCoordinatesMultiplier;
      }
      getOffsets() {
        return this.offsets;
      }
      getDeltaMultiplier() {
        return this.mouseWheelDeltaMultiplier;
      }
      getRelativeMouseCoordinatesMultiplier() {
        return this.relativeMouseCoordinatesMultiplier;
      }
      updateOffsets(relativeMouseCoordinates, mouseWheelDelta, angles) {
        mouseWheelDelta = mouseWheelDelta * this.mouseWheelDeltaMultiplier;
        relativeMouseCoordinates = (0, _vector.scale2)(relativeMouseCoordinates, this.relativeMouseCoordinatesMultiplier);
        const scaledReflectedRelativeMouseCoordinates = (0, _vector.reflect2)((0, _vector.scale2)(relativeMouseCoordinates, 1)), directions = [
          ...scaledReflectedRelativeMouseCoordinates,
          mouseWheelDelta,
          0
        ], relativeOffsets = (0, _offsets.relativeOffsetsFromAnglesAndDirections)(angles, directions, 1);
        this.offsets = (0, _vector.add3)(this.offsets, relativeOffsets);
      }
      static fromInitialOffsetsMouseSensitivityAndMouseWheelSensitivity(initialOffsets, mouseSensitivity, mouseWheelSensitivity) {
        const offsets = initialOffsets, mouseWheelDeltaMultiplier = _constants.MOUSE_WHEEL_DELTA_MULTIPLIER * mouseWheelSensitivity, relativeMouseCoordinatesMultiplier = _constants.RELATIVE_MOUSE_COORDINATES_MULTIPLIER * mouseSensitivity, pan = new Pan(offsets, mouseWheelDeltaMultiplier, relativeMouseCoordinatesMultiplier);
        return pan;
      }
    };
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
    var Tilt = class {
      constructor(angles, clockwise) {
        this.angles = angles;
        this.clockwise = clockwise;
      }
      getAngles() {
        return this.angles;
      }
      isClockwise() {
        return this.clockwise;
      }
      updateAngles(relativeMouseCoordinates) {
        relativeMouseCoordinates = (0, _vector.scale2)(relativeMouseCoordinates, _constants.ANGLES_MULTIPLIER);
        const multiplier = this.clockwise ? 1 : -1, matrix = [
          0,
          +multiplier,
          0,
          -multiplier,
          0,
          0,
          0,
          0,
          0
        ], relativeAngles = (0, _vector.transform3)([
          ...relativeMouseCoordinates,
          0
        ], matrix);
        this.angles = (0, _vector.add3)(this.angles, relativeAngles);
      }
      static fromInitialAngles(initialAngles) {
        const angles = [
          ...initialAngles,
          0
        ], clockwise = false, tilt = new Tilt(angles, clockwise);
        return tilt;
      }
      static fromInitialAnglesAndClockwise(initialAngles, clockwise) {
        const angles = [
          ...initialAngles,
          0
        ], tilt = new Tilt(angles, clockwise);
        return tilt;
      }
    };
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
      let json = null;
      const value = get(key);
      if (value !== null) {
        json = JSON.parse(value);
      }
      return json;
    }
    function setJSON(key, json) {
      const value = JSON.stringify(json);
      set(key, value);
    }
    function removeJSON(key) {
      remove(key);
    }
    function get(kay) {
      const value = localStorage.getItem(kay) || null;
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
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var GamingCamera = class extends _camera.default {
      constructor(zFar, zNear, fieldOfView, pan, tilt, persist) {
        super(zFar, zNear, fieldOfView);
        this.pan = pan;
        this.tilt = tilt;
        this.persist = persist;
      }
      getPan() {
        return this.pan;
      }
      getTilt() {
        return this.tilt;
      }
      doesPersist() {
        return this.persist;
      }
      reset() {
        const key = _constants.GAMING_CAMERA;
        (0, _localStorage.removeJSON)(key);
        this.pan = panFromProperties(this.properties);
        this.tilt = tiltFromProperties(this.properties);
      }
      update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, canvas, render) {
        const mouseWheelMoved = mouseWheelDelta !== 0;
        if (false) {
        } else if (shiftKeyDown || mouseWheelMoved) {
          const angles2 = this.tilt.getAngles();
          this.pan.updateOffsets(relativeMouseCoordinates, mouseWheelDelta, angles2);
        } else {
          this.tilt.updateAngles(relativeMouseCoordinates);
        }
        const camera = this, angles = this.tilt.getAngles(), persist = this.doesPersist(), offsets = this.pan.getOffsets();
        if (persist) {
          const key = _constants.GAMING_CAMERA, angles2 = this.tilt.getAngles(), json = {
            angles: angles2,
            offsets
          };
          (0, _localStorage.setJSON)(key, json);
        }
        const offsetsMatrix = (0, _matrix.offsetsMatrixFromOffsets)(offsets), positionMatrix = (0, _matrix.positionMatrixFromNothing)(), rotationsMatrix = (0, _matrix.rotationsMatrixFromAngles)(angles), projectionMatrix = (0, _matrix.projectionMatrixFromCameraAndCanvas)(camera, canvas), normalsMatrix = (0, _matrix.normalsMatrixFromRotationsMatrix)(rotationsMatrix);
        render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
      }
      static fromProperties(properties) {
        const {persist = _defaults.DEFAULT_PERSIST} = properties, pan = panFromProperties(properties), tilt = tiltFromProperties(properties), gamingCamera = _camera.default.fromProperties(GamingCamera, properties, pan, tilt, persist);
        return gamingCamera;
      }
    };
    function panFromProperties(properties) {
      const {persist = _defaults.DEFAULT_PERSIST, mouseSensitivity = _defaults.DEFAULT_MOUSE_SENSITIVITY, mouseWheelSensitivity = _defaults.DEFAULT_MOUSE_WHEEL_SENSITIVITY} = properties;
      let {initialPosition = _defaults.DEFAULT_INITIAL_POSITION} = properties;
      let initialOffsets = (0, _vector.scale3)(initialPosition, _constants.INVERT_MULTIPLIER);
      if (persist) {
        const key = _constants.GAMING_CAMERA, json = (0, _localStorage.getJSON)(key);
        if (json !== null) {
          const {offsets} = json;
          initialOffsets = offsets;
        }
      }
      const pan = _pan.default.fromInitialOffsetsMouseSensitivityAndMouseWheelSensitivity(initialOffsets, mouseSensitivity, mouseWheelSensitivity);
      return pan;
    }
    function tiltFromProperties(properties) {
      const {persist = _defaults.DEFAULT_PERSIST} = properties;
      let {initialAngles = _defaults.DEFAULT_INITIAL_ANGLES} = properties;
      initialAngles = (0, _vector.scale2)(initialAngles, _constants.DEGREES_TO_RADIANS_MULTIPLIER);
      if (persist) {
        const key = _constants.GAMING_CAMERA, json = (0, _localStorage.getJSON)(key);
        if (json !== null) {
          const {angles} = json;
          initialAngles = angles;
        }
      }
      const clockwise = true, tilt = _tilt.default.fromInitialAnglesAndClockwise(initialAngles, clockwise);
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
    var Zoom = class {
      constructor(distance, minimumDistance, mouseWheelDeltaMultiplier) {
        this.distance = distance;
        this.minimumDistance = minimumDistance;
        this.mouseWheelDeltaMultiplier = mouseWheelDeltaMultiplier;
      }
      getDistance() {
        return this.distance;
      }
      getMinimumDistance() {
        return this.minimumDistance;
      }
      getDeltaMultiplier() {
        return this.mouseWheelDeltaMultiplier;
      }
      updateDistance(mouseWheelDelta) {
        mouseWheelDelta = mouseWheelDelta * this.mouseWheelDeltaMultiplier;
        this.distance = this.distance - mouseWheelDelta;
        this.distance = Math.max(this.minimumDistance, this.distance);
      }
      static fromInitialDistanceAndMouseWheelSensitivity(initialDistance, mouseWheelSensitivity) {
        const distance = initialDistance, minimumDistance = _constants.MINIMUM_DISTANCE, mouseWheelDeltaMultiplier = _constants.MOUSE_WHEEL_DELTA_MULTIPLIER * mouseWheelSensitivity, zoom = new Zoom(distance, minimumDistance, mouseWheelDeltaMultiplier);
        return zoom;
      }
    };
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
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var DesignCamera = class extends _camera.default {
      constructor(zFar, zNear, fieldOfView, pan, tilt, zoom, persist) {
        super(zFar, zNear, fieldOfView);
        this.pan = pan;
        this.tilt = tilt;
        this.zoom = zoom;
        this.persist = persist;
      }
      getPan() {
        return this.pan;
      }
      getTilt() {
        return this.tilt;
      }
      getZoom() {
        return this.zoom;
      }
      doesPersist() {
        return this.persist;
      }
      reset() {
        const key = _constants.DESIGN_CAMERA;
        (0, _localStorage.removeJSON)(key);
        this.pan = panFromProperties(this.properties);
        this.tilt = tiltFromProperties(this.properties);
        this.zoom = zoomFromProperties(this.properties);
      }
      update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, canvas, render) {
        const mouseWheelMoved = mouseWheelDelta !== 0;
        if (false) {
        } else if (shiftKeyDown) {
          const angles2 = this.tilt.getAngles();
          this.pan.updateOffsets(relativeMouseCoordinates, mouseWheelDelta, angles2);
        } else if (mouseWheelMoved) {
          this.zoom.updateDistance(mouseWheelDelta);
        } else {
          this.tilt.updateAngles(relativeMouseCoordinates);
        }
        const camera = this, angles = this.tilt.getAngles(), persist = this.doesPersist(), offsets = this.pan.getOffsets(), distance = this.zoom.getDistance();
        if (persist) {
          const key = _constants.DESIGN_CAMERA, json = {
            angles,
            offsets,
            distance
          };
          (0, _localStorage.setJSON)(key, json);
        }
        const offsetsMatrix = (0, _matrix.offsetsMatrixFromOffsets)(offsets), positionMatrix = (0, _matrix.positionMatrixFromDistance)(distance), rotationsMatrix = (0, _matrix.rotationsMatrixFromAngles)(angles), projectionMatrix = (0, _matrix.projectionMatrixFromCameraAndCanvas)(camera, canvas), normalsMatrix = (0, _matrix.normalsMatrixFromRotationsMatrix)(rotationsMatrix);
        render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
      }
      static fromProperties(properties) {
        const {persist = _defaults.DEFAULT_PERSIST} = properties, pan = panFromProperties(properties), tilt = tiltFromProperties(properties), zoom = zoomFromProperties(properties), designCamera = _camera.default.fromProperties(DesignCamera, properties, pan, tilt, zoom, persist);
        return designCamera;
      }
    };
    function panFromProperties(properties) {
      const {persist = _defaults.DEFAULT_PERSIST, mouseSensitivity = _defaults.DEFAULT_MOUSE_SENSITIVITY, mouseWheelSensitivity = _defaults.DEFAULT_MOUSE_WHEEL_SENSITIVITY} = properties;
      let {initialOffsets = _defaults.DEFAULT_INITIAL_OFFSETS} = properties;
      if (persist) {
        const key = _constants.DESIGN_CAMERA, json = (0, _localStorage.getJSON)(key);
        if (json !== null) {
          const {offsets} = json;
          initialOffsets = offsets;
        }
      }
      const pan = _pan.default.fromInitialOffsetsMouseSensitivityAndMouseWheelSensitivity(initialOffsets, mouseSensitivity, mouseWheelSensitivity);
      return pan;
    }
    function tiltFromProperties(properties) {
      const {persist = _defaults.DEFAULT_PERSIST} = properties;
      let {initialAngles = _defaults.DEFAULT_INITIAL_ANGLES} = properties;
      initialAngles = (0, _vector.scale2)(initialAngles, _constants.DEGREES_TO_RADIANS_MULTIPLIER);
      if (persist) {
        const key = _constants.DESIGN_CAMERA, json = (0, _localStorage.getJSON)(key);
        if (json !== null) {
          const {angles} = json;
          initialAngles = angles;
        }
      }
      const tilt = _tilt.default.fromInitialAngles(initialAngles);
      return tilt;
    }
    function zoomFromProperties(properties) {
      const {persist = _defaults.DEFAULT_PERSIST, mouseWheelSensitivity = _defaults.DEFAULT_MOUSE_WHEEL_SENSITIVITY} = properties;
      let {initialDistance = _defaults.DEFAULT_INITIAL_DISTANCE} = properties;
      if (persist) {
        const key = _constants.DESIGN_CAMERA, json = (0, _localStorage.getJSON)(key);
        if (json !== null) {
          const {distance} = json;
          initialDistance = distance;
        }
      }
      const zoom = _zoom.default.fromInitialDistanceAndMouseWheelSensitivity(initialDistance, mouseWheelSensitivity);
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
    var {forEach} = _necessary.asynchronousUtilities;
    function preloadImages(host, imageNames, imageDirectoryURI, callback) {
      const images = [], context = {
        images
      };
      forEach(imageNames, (imageName, next, done2, context2) => {
        const src = `${host}${imageDirectoryURI}/${imageName}`, image = new Image(), crossOrigin = _constants.ANONYMOUS;
        Object.assign(image, {
          src,
          onload,
          crossOrigin
        });
        function onload() {
          images.push(image);
          next();
        }
      }, done, context);
      function done() {
        const {images: images2} = context;
        callback(images2, imageNames);
      }
    }
    function preloadImageMap(host, imageMapURI, imageMapJSON, callback) {
      const src = `${host}${imageMapURI}`, imageMap = new Image(), crossOrigin = _constants.ANONYMOUS;
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
    var Normal = class {
      constructor(extent) {
        this.extent = extent;
      }
      getExtent() {
        return this.extent;
      }
      clone() {
        const extent = cloneExtent(this.extent), normal = new Normal(extent);
        return normal;
      }
      static fromVertices(vertices) {
        const firstVertex = (0, _array.first)(vertices), secondVertex = (0, _array.second)(vertices), thirdVertex = (0, _array.third)(vertices), firstPosition = firstVertex.getPosition(), secondPosition = secondVertex.getPosition(), thirdPosition = thirdVertex.getPosition(), firstExtent = (0, _vector.subtract3)(secondPosition, firstPosition), secondExtent = (0, _vector.subtract3)(thirdPosition, firstPosition), extent = (0, _vector.normalise3)((0, _vector.cross3)(firstExtent, secondExtent)), normal = new Normal(extent);
        return normal;
      }
    };
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
    var Vertex = class {
      constructor(position) {
        this.position = position;
      }
      getPosition() {
        return this.position;
      }
      rotate(rotationQuaternion) {
        this.position = (0, _rotation.rotatePosition)(this.position, rotationQuaternion);
      }
      applyTransform(transform) {
        this.position = transform(this.position);
      }
      clone() {
        const position = this.position.slice(), vertex = new Vertex(position);
        return vertex;
      }
      static fromPosition(position) {
        const vertex = new Vertex(position);
        return vertex;
      }
      static fromCoordinateTuple(coordinateTuple) {
        const position = coordinateTuple.slice(), vertex = new Vertex(position);
        return vertex;
      }
    };
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
      edges = edges.map((edge) => {
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
      vertices = vertices.map((vertex) => {
        vertex = vertex.clone();
        return vertex;
      });
      return vertices;
    }
    function calculateEdges(vertices, Edge) {
      const edges = vertices.map((vertex, index) => {
        const startIndex = index, endIndex = (startIndex + 1) % _constants.VERTICES_LENGTH, startVertex = vertices[startIndex], endVertex = vertices[endIndex], edge = Edge.fromStartVertexAndEndVertex(startVertex, endVertex);
        return edge;
      });
      return edges;
    }
    function calculateNormal(vertices, Normal) {
      const normal = Normal.fromVertices(vertices);
      return normal;
    }
    function calculateArea(vertices) {
      const firstVertex = (0, _array.first)(vertices), secondVertex = (0, _array.second)(vertices), thirdVertex = (0, _array.third)(vertices), firstVertexPosition = firstVertex.getPosition(), secondVertexPosition = secondVertex.getPosition(), thirdVertexPosition = thirdVertex.getPosition(), firstExtent = (0, _vector.subtract3)(secondVertexPosition, firstVertexPosition), secondExtent = (0, _vector.subtract3)(thirdVertexPosition, firstVertexPosition), area = (0, _vector.length3)((0, _vector.cross3)(firstExtent, secondExtent)) / 2;
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
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var Facet = class {
      constructor(vertices, normal, edges) {
        this.vertices = vertices;
        this.normal = normal;
        this.edges = edges;
      }
      getVertices() {
        return this.vertices;
      }
      getNormal() {
        return this.normal;
      }
      getEdges() {
        return this.edges;
      }
      getVertexPositions() {
        const vertexPositions = this.vertices.map((vertex) => {
          const vertexPosition = vertex.getPosition();
          return vertexPosition;
        });
        return vertexPositions;
      }
      getVertexNormals() {
        const normalExtent = this.normal.getExtent(), vertexNormal = normalExtent, vertexNormals = [
          vertexNormal,
          vertexNormal,
          vertexNormal
        ];
        return vertexNormals;
      }
      getVertexIndexes(index) {
        const vertexIndex = index * 3, vertexIndexes = [
          vertexIndex + 0,
          vertexIndex + 1,
          vertexIndex + 2
        ];
        return vertexIndexes;
      }
      isMasked(maskingFacet) {
        const maskingEdges = maskingFacet.getMaskingEdges(), midPointPosition = (0, _midPoint.calculateMidPointPosition)(this.vertices), midPointPositionToOneSideOfMaskingEdges = (0, _midPoint.isMidPointPositionToOneSideOfMaskingEdges)(midPointPosition, maskingEdges), masked = midPointPositionToOneSideOfMaskingEdges;
        return masked;
      }
      permute(places) {
        this.vertices = (0, _array.permute)(this.vertices, places);
        this.normal = (0, _facet.calculateNormal)(this.vertices, _normal.default);
        this.edges = (0, _facet.calculateEdges)(this.vertices, _edge.default);
      }
      rotate(rotationQuaternion) {
        this.vertices.forEach((vertex) => {
          vertex.rotate(rotationQuaternion);
        });
        this.normal = (0, _facet.calculateNormal)(this.vertices, _normal.default);
        this.edges = (0, _facet.calculateEdges)(this.vertices, _edge.default);
      }
      applyTransform(transform) {
        this.vertices.forEach((vertex) => {
          vertex.applyTransform(transform);
        });
        this.normal = (0, _facet.calculateNormal)(this.vertices, _normal.default);
        this.edges = (0, _facet.calculateEdges)(this.vertices, _edge.default);
      }
      splitWithIntersections(intersections, smallerFacets, marginOfError) {
        const nonNullIntersections = (0, _intersection.calculateNonNullIntersections)(intersections), nonNullIntersectionsLength = nonNullIntersections.length;
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
      splitWithTwoNonNullIntersections(intersections, smallerFacets, marginOfError) {
        const nullIntersectionIndex = (0, _intersection.calculateNullIntersectionIndex)(intersections), places = (_constants.VERTICES_LENGTH - nullIntersectionIndex) % _constants.VERTICES_LENGTH;
        intersections = (0, _array.permute)(intersections, places);
        intersections = intersections.slice(1);
        this.permute(places);
        const startVertexPositionIndexes = [
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
      splitWithOneNonNullIntersection(intersections, smallerFacets, marginOfError) {
        const nonNullIntersectionIndex = (0, _intersection.calculateNonNullIntersectionIndex)(intersections), places = (_constants.VERTICES_LENGTH - nonNullIntersectionIndex) % _constants.VERTICES_LENGTH;
        intersections = (0, _array.permute)(intersections, places);
        intersections = intersections.slice(0, 1);
        this.permute(places);
        const startVertexPositionIndexes = [
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
      splitWithNoNonNullIntersections(intersections, smallerFacets, marginOfError) {
        const smallerFacet = this.fromVerticesAndMarginOfError(this.vertices, marginOfError);
        smallerFacets.push(smallerFacet);
      }
      splitWithIndexTuplesAndIntersections(startVertexPositionIndexes, endVertexPositionIndexes, indexTuples, intersections, smallerFacets, marginOfError) {
        const vertexPositions = this.getVertexPositions(), intermediateVertexPositions = intersections.map((intersection, index) => {
          const startVertexPositionIndex = startVertexPositionIndexes[index], endVertexPositionIndex = endVertexPositionIndexes[index], startVertexPosition = vertexPositions[startVertexPositionIndex], endVertexPosition = vertexPositions[endVertexPositionIndex], intermediateVertexPosition = (0, _intersection.calculateIntermediateVertexPosition)(startVertexPosition, endVertexPosition, intersection);
          return intermediateVertexPosition;
        });
        (0, _array.add)(vertexPositions, intermediateVertexPositions);
        indexTuples.forEach((indexTuple) => {
          const positions = vertexPositions, indexes = indexTuple, facet = this, smallerFacet = smallerFacetFromPositionsIndexesFacetAndMarginOfError(positions, indexes, facet, marginOfError);
          if (smallerFacet !== null) {
            smallerFacets.push(smallerFacet);
          }
        });
      }
    };
    function smallerFacetFromPositionsIndexesFacetAndMarginOfError(positions, indexes, facet, marginOfError) {
      const vertices = indexes.map((index) => {
        let position = positions[index];
        position = position.slice();
        const vertex = _vertex.default.fromPosition(position);
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
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var ColouredFacet = class extends _facet.default {
      constructor(vertices, normal, edges, rgba) {
        super(vertices, normal, edges);
        this.rgba = rgba;
      }
      getVertexColours() {
        const vertexColour = this.rgba, vertexColours = [
          vertexColour,
          vertexColour,
          vertexColour
        ];
        return vertexColours;
      }
      fromVerticesAndMarginOfError(vertices, marginOfError) {
        let colouredFacet = null;
        const area = (0, _facet1.calculateArea)(vertices), areaApproximatelyEqualToZero = (0, _approximate.isApproximatelyEqualToZero)(area, marginOfError);
        if (!areaApproximatelyEqualToZero) {
          const normal = (0, _facet1.calculateNormal)(vertices, _normal.default), edges = (0, _facet1.calculateEdges)(vertices, _edge.default);
          colouredFacet = new ColouredFacet(vertices, normal, edges, this.rgba);
        }
        return colouredFacet;
      }
      clone() {
        let vertices = this.getVertices(), normal = this.getNormal(), edges = this.getEdges();
        vertices = (0, _facet1.cloneVertices)(vertices);
        normal = (0, _facet1.cloneNormal)(normal);
        edges = (0, _facet1.cloneEdges)(edges);
        const colouredFacet = new ColouredFacet(vertices, normal, edges, this.rgba);
        return colouredFacet;
      }
      static fromCoordinateTuplesIndexTupleColourAndMarginOfError(coordinateTuples, indexTuple, colour, marginOfError) {
        let colouredFacet = null;
        const vertices = (0, _vertices.verticesFromCoordinateTuplesAndIndexTuple)(coordinateTuples, indexTuple, _vertex.default), area = (0, _facet1.calculateArea)(vertices), areaApproximatelyEqualToZero = (0, _approximate.isApproximatelyEqualToZero)(area, marginOfError);
        if (!areaApproximatelyEqualToZero) {
          const normal = (0, _facet1.calculateNormal)(vertices, _normal.default), edges = (0, _facet1.calculateEdges)(vertices, _edge.default), rgba = [
            ...colour,
            1
          ];
          colouredFacet = new ColouredFacet(vertices, normal, edges, rgba);
        }
        return colouredFacet;
      }
    };
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
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var ColouredCanvasElement = class extends _canvas.default {
      constructor(maskReference, transform, facets, masks, coordinates, indexes, colour) {
        super(maskReference, transform, facets, masks);
        this.coordinates = coordinates;
        this.indexes = indexes;
        this.colour = colour;
      }
      createFacets(marginOfError) {
        super.createFacets(marginOfError);
        const indexTuples = this.indexes, facets = indexTuples.reduce((facets2, indexTuple) => {
          const coordinateTuples = this.coordinates, colouredFacet = _coloured.default.fromCoordinateTuplesIndexTupleColourAndMarginOfError(coordinateTuples, indexTuple, this.colour, marginOfError), facet = colouredFacet;
          if (facet !== null) {
            facets2.push(facet);
          }
          return facets2;
        }, []);
        this.setFacets(facets);
      }
      addFacets(colourRenderer, textureRenderer) {
        const facets = this.getFacets();
        colourRenderer.addFacets(facets);
        super.addFacets(colourRenderer, textureRenderer);
      }
      static fromProperties(Class, properties, coordinates, indexes, colour, ...remainingArguments) {
        return _canvas.default.fromProperties(Class, properties, coordinates, indexes, colour, ...remainingArguments);
      }
    };
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
      textureCoordinateTuples = textureCoordinateTuples.map((textureCoordinateTuple) => {
        textureCoordinateTuple = textureCoordinateTuple.slice();
        return textureCoordinateTuple;
      });
      return textureCoordinateTuples;
    }
    function calculateMappedTextureCoordinateTuples(textureCoordinateTuples, extent) {
      const {left, bottom, width, height} = extent, mappedTextureCoordinateTuples = textureCoordinateTuples.map((textureCoordinateTuple) => {
        const mappedTextureCoordinateTuple = (0, _vector.add2)((0, _vector.multiply2)(textureCoordinateTuple, [
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
      const arbitraryRotationQuaternion = (0, _quaternion.calculateArbitraryRotationQuaternion)(normal), rotationQuaternion = arbitraryRotationQuaternion;
      const rotatedVertices = (0, _vertices.rotateVertices)(vertices, rotationQuaternion);
      parentVertices = (0, _vertices.rotateVertices)(parentVertices, rotationQuaternion);
      vertices = rotatedVertices;
      const firstVertex = (0, _array.first)(vertices), secondVertex = (0, _array.second)(vertices), thirdVertex = (0, _array.third)(vertices), firstParentVertex = (0, _array.first)(parentVertices), secondParentVertex = (0, _array.second)(parentVertices), thirdParentVertex = (0, _array.third)(parentVertices), firstTextureCoordinateTuple = (0, _array.first)(textureCoordinateTuples), secondTextureCoordinateTuple = (0, _array.second)(textureCoordinateTuples), thirdTextureCoordinateTuple = (0, _array.third)(textureCoordinateTuples), firstVertexPosition = firstVertex.getPosition(), secondVertexPosition = secondVertex.getPosition(), thirdVertexPosition = thirdVertex.getPosition(), firstParentVertexPosition = firstParentVertex.getPosition(), secondParentVertexPosition = secondParentVertex.getPosition(), thirdParentVertexPosition = thirdParentVertex.getPosition(), R1x = firstVertexPosition[0], R1y = firstVertexPosition[1], R2x = secondVertexPosition[0], R2y = secondVertexPosition[1], R3x = thirdVertexPosition[0], R3y = thirdVertexPosition[1], P1x = firstParentVertexPosition[0], P2x = secondParentVertexPosition[0], P3x = thirdParentVertexPosition[0], P1y = firstParentVertexPosition[1], P2y = secondParentVertexPosition[1], P3y = thirdParentVertexPosition[1], P1u = firstTextureCoordinateTuple[0], P1v = firstTextureCoordinateTuple[1], P2u = secondTextureCoordinateTuple[0], P2v = secondTextureCoordinateTuple[1], P3u = thirdTextureCoordinateTuple[0], P3v = thirdTextureCoordinateTuple[1], textureCoordinatesMatrix = (0, _matrix.invert3)([
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
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var TexturedFacet = class extends _facet.default {
      constructor(vertices, normal, edges, imageName, textureCoordinateTuples) {
        super(vertices, normal, edges);
        this.imageName = imageName;
        this.textureCoordinateTuples = textureCoordinateTuples;
      }
      getImageName() {
        return this.imageName;
      }
      getTextureCoordinateTuples() {
        return this.textureCoordinateTuples;
      }
      getMappedTextureCoordinateTuples(imageMapJSON) {
        const json = imageMapJSON[this.imageName], extent = json, mappedTextureCoordinateTuples = (0, _texture.calculateMappedTextureCoordinateTuples)(this.textureCoordinateTuples, extent);
        return mappedTextureCoordinateTuples;
      }
      permute(places) {
        super.permute(places);
        this.textureCoordinateTuples = (0, _array.permute)(this.textureCoordinateTuples, places);
      }
      fromVerticesAndMarginOfError(vertices, marginOfError) {
        let texturedFacet = null;
        const area = (0, _facet1.calculateArea)(vertices), areaApproximatelyEqualToZero = (0, _approximate.isApproximatelyEqualToZero)(area, marginOfError);
        if (!areaApproximatelyEqualToZero) {
          const normal = (0, _facet1.calculateNormal)(vertices, _normal.default), parentVertices = this.vertices, adjustedTextureCoordinateTuple = (0, _texture.calculateAdjustedTextureCoordinateTuples)(vertices, normal, parentVertices, this.textureCoordinateTuples), edges = (0, _facet1.calculateEdges)(vertices, _edge.default), imageName = this.imageName, textureCoordinateTuples = adjustedTextureCoordinateTuple;
          texturedFacet = new TexturedFacet(vertices, normal, edges, imageName, textureCoordinateTuples);
        }
        return texturedFacet;
      }
      clone() {
        let vertices = this.getVertices(), normal = this.getNormal(), edges = this.getEdges();
        vertices = (0, _facet1.cloneVertices)(vertices);
        normal = (0, _facet1.cloneNormal)(normal);
        edges = (0, _facet1.cloneEdges)(edges);
        const imageName = this.imageName, textureCoordinateTuples = (0, _texture.cloneTextureCoordinateTuples)(this.textureCoordinateTuples), texturedFacet = new TexturedFacet(vertices, normal, edges, imageName, textureCoordinateTuples);
        return texturedFacet;
      }
      static fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleImageNameAndMarginOfError(textureCoordinateTuples, coordinateTuples, indexTuple, imageName, marginOfError) {
        let texturedFacet = null;
        const vertices = (0, _vertices.verticesFromCoordinateTuplesAndIndexTuple)(coordinateTuples, indexTuple, _vertex.default), area = (0, _facet1.calculateArea)(vertices), areaApproximatelyEqualToZero = (0, _approximate.isApproximatelyEqualToZero)(area, marginOfError);
        if (!areaApproximatelyEqualToZero) {
          const normal = (0, _facet1.calculateNormal)(vertices, _normal.default), edges = (0, _facet1.calculateEdges)(vertices, _edge.default);
          texturedFacet = new TexturedFacet(vertices, normal, edges, imageName, textureCoordinateTuples);
        }
        return texturedFacet;
      }
    };
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
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var TexturedCanvasElement = class extends _canvas.default {
      constructor(maskReference, transform, facets, masks, coordinates, indexes, imageName, textureCoordinates) {
        super(maskReference, transform, facets, masks);
        this.coordinates = coordinates;
        this.indexes = indexes;
        this.imageName = imageName;
        this.textureCoordinates = textureCoordinates;
      }
      createFacets(marginOfError) {
        super.createFacets(marginOfError);
        const indexTuples = this.indexes, facets = indexTuples.reduce((facets2, indexTuple, index) => {
          const vertexTextureCoordinateTuples = this.textureCoordinates[index], coordinateTuples = this.coordinates, texturedFacet = _textured.default.fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleImageNameAndMarginOfError(vertexTextureCoordinateTuples, coordinateTuples, indexTuple, this.imageName, marginOfError), facet = texturedFacet;
          if (facet !== null) {
            facets2.push(facet);
          }
          return facets2;
        }, []);
        this.setFacets(facets);
      }
      addFacets(colourRenderer, textureRenderer) {
        const facets = this.getFacets();
        textureRenderer.addFacets(facets);
        super.addFacets(colourRenderer, textureRenderer);
      }
      static fromProperties(Class, properties, coordinates, indexes, imageName, textureCoordinates, ...remainingArguments) {
        return _canvas.default.fromProperties(Class, properties, coordinates, indexes, imageName, textureCoordinates, ...remainingArguments);
      }
    };
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
    var ColouredSquare = class extends _index.ColouredCanvasElement {
      static fromProperties(properties) {
        const {colour = defaultColour} = properties, colouredSquare = _index.ColouredCanvasElement.fromProperties(ColouredSquare, properties, coordinates, indexes, colour);
        return colouredSquare;
      }
    };
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
    var Face = (properties) => {
      const {colour} = properties;
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
    var Cube = (properties) => {
      const {colour = defaultColour} = properties;
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
    var cubeExample = () => {
      const canvas = new _index.Canvas();
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
    var TexturedQuadrangle = class extends _index.TexturedCanvasElement {
      static fromProperties(properties) {
        const {imageName = defaultImageName, textureCoordinates = defaultTextureCoordinates} = properties, texturedQuadrangle = _index.TexturedCanvasElement.fromProperties(TexturedQuadrangle, properties, coordinates, indexes, imageName, textureCoordinates);
        return texturedQuadrangle;
      }
    };
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
    var {preloadImages} = _index.preloadUtilities;
    var {host, imageNames, imageDirectoryURI} = globalThis;
    var tilingExample = () => {
      preloadImages(host, imageNames, imageDirectoryURI, (images, imageNames2) => {
        const canvas = new _index.Canvas();
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
    var simpleExample = () => {
      const canvas = new _index.Canvas();
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
    var maskingExample = () => {
      const canvas = new _index.Canvas();
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
    var TexturedTriangle = class extends _index.TexturedCanvasElement {
      static fromProperties(properties) {
        const {imageName = defaultImageName, textureCoordinates = defaultTextureCoordinates} = properties, texturedTriangle = _index.TexturedCanvasElement.fromProperties(TexturedTriangle, properties, coordinates, indexes, imageName, textureCoordinates);
        return texturedTriangle;
      }
    };
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
    var Side = (properties) => /* @__PURE__ */ React.createElement(_texturedTriangle.default, {
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
    var Pyramid = (properties) => [
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
    var {preloadImageMap} = _index.preloadUtilities;
    var {host, imageMapURI, imageMapJSON} = globalThis;
    var pyramidExample = () => {
      preloadImageMap(host, imageMapURI, imageMapJSON, (imageMap, imageMapJSON2) => {
        const canvas = new _index.Canvas();
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NvbnN0YW50cy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9sZXZlbHMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvbWV0aG9kcy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9oZWFkZXJzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2tleUNvZGVzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2VuY29kaW5ncy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9qc29uVHlwZXMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvY2hhcmFjdGVycy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9zdGF0dXNDb2Rlcy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9jb250ZW50VHlwZXMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvc3RhdHVzTWVzc2FnZXMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvY29uc3RhbnRzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9hcnJheS5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy91dGlsaXRpZXMvcGF0aC5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy91dGlsaXRpZXMvanNvbi5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy91dGlsaXRpZXMvaHR0cC5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy92ZXJzaW9uLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9hc3luY2hyb25vdXMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvdXRpbGl0aWVzL2FqYXguanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvYnJvd3Nlci5qcyIsICJzcmMvdXRpbGl0aWVzL2FycmF5LmpzIiwgInNyYy9lbGVtZW50LmpzIiwgInNyYy9tYXRocy92ZWN0b3IuanMiLCAic3JjL3ByaW1pdGl2ZS9lZGdlLmpzIiwgInNyYy91dGlsaXRpZXMvbWlkUG9pbnQuanMiLCAic3JjL3ByaW1pdGl2ZS9lZGdlL21hc2tpbmcuanMiLCAic3JjL2RlZmF1bHRzLmpzIiwgInNyYy91dGlsaXRpZXMvYXBwcm94aW1hdGUuanMiLCAic3JjL3V0aWxpdGllcy9hbmdsZS5qcyIsICJzcmMvdXRpbGl0aWVzL3F1YXRlcm5pb24uanMiLCAic3JjL3V0aWxpdGllcy9yb3RhdGlvbi5qcyIsICJzcmMvdXRpbGl0aWVzL2ludGVyc2VjdGlvbi5qcyIsICJzcmMvcHJpbWl0aXZlL3ZlcnRpY2FsTGluZS5qcyIsICJzcmMvdXRpbGl0aWVzL3ZlcnRpY2VzLmpzIiwgInNyYy9wcmltaXRpdmUvbWFza2luZ0ZhY2V0LmpzIiwgInNyYy9tYXRocy9tYXRyaXguanMiLCAic3JjL3V0aWxpdGllcy9tYXRyaXguanMiLCAic3JjL3V0aWxpdGllcy90cmFuc2Zvcm0uanMiLCAic3JjL2VsZW1lbnQvbWFzay5qcyIsICJzcmMvdXRpbGl0aWVzL2VsZW1lbnQuanMiLCAic3JjL2VsZW1lbnQvY2FudmFzLmpzIiwgInNyYy9lbGVtZW50L2NhbnZhcy9mdW5jdGlvbi5qcyIsICJzcmMvdXRpbGl0aWVzL2VsZW1lbnRzLmpzIiwgInNyYy9yZWFjdC5qcyIsICJzcmMveGdsLmpzIiwgInNyYy9taXhpbnMvZGVwdGguanMiLCAic3JjL2Vycm9ycy5qcyIsICJzcmMvbWl4aW5zL3NoYWRlci5qcyIsICJzcmMvbWl4aW5zL2J1ZmZlci5qcyIsICJzcmMvbWl4aW5zL2NvbG91ci5qcyIsICJzcmMvbWl4aW5zL21hdHJpeC5qcyIsICJzcmMvbWl4aW5zL3RleHR1cmUuanMiLCAic3JjL21peGlucy9wcm9ncmFtLmpzIiwgInNyYy9taXhpbnMvYmxlbmRpbmcuanMiLCAic3JjL21peGlucy9sb2NhdGlvbi5qcyIsICJzcmMvY2FudmFzLmpzIiwgInNyYy9yZW5kZXJlci5qcyIsICJzcmMvcmVuZGVyZXIvZGF0YS5qcyIsICJzcmMvcmVuZGVyZXIvZGF0YS9jb2xvdXIuanMiLCAic3JjL3JlbmRlcmVyL3NvdXJjZS9saWdodGluZy5qcyIsICJzcmMvcmVuZGVyZXIvc291cmNlL3Bvc2l0aW9uLmpzIiwgInNyYy9yZW5kZXJlci9zb3VyY2UvY29sb3VyL3ZlcnRleFNoYWRlci5qcyIsICJzcmMvcmVuZGVyZXIvc291cmNlL2NvbG91ci9mcmFnbWVudFNoYWRlci5qcyIsICJzcmMvcmVuZGVyZXIvYnVmZmVycy5qcyIsICJzcmMvcmVuZGVyZXIvYnVmZmVycy9jb2xvdXIuanMiLCAic3JjL3JlbmRlcmVyL2xvY2F0aW9ucy91bmlmb3JtLmpzIiwgInNyYy9yZW5kZXJlci9sb2NhdGlvbnMvY29sb3VyL3VuaWZvcm0uanMiLCAic3JjL3JlbmRlcmVyL2xvY2F0aW9ucy9hdHRyaWJ1dGUuanMiLCAic3JjL3JlbmRlcmVyL2xvY2F0aW9ucy9jb2xvdXIvYXR0cmlidXRlLmpzIiwgInNyYy9yZW5kZXJlci9jb2xvdXIuanMiLCAic3JjL3JlbmRlcmVyL3NvdXJjZS90ZXh0dXJlL3ZlcnRleFNoYWRlci5qcyIsICJzcmMvcmVuZGVyZXIvZGF0YS90ZXh0dXJlLmpzIiwgInNyYy9yZW5kZXJlci9zb3VyY2UvdGV4dHVyZS9mcmFnbWVudFNoYWRlci5qcyIsICJzcmMvcmVuZGVyZXIvYnVmZmVycy90ZXh0dXJlLmpzIiwgInNyYy9yZW5kZXJlci9sb2NhdGlvbnMvdGV4dHVyZS91bmlmb3JtLmpzIiwgInNyYy9yZW5kZXJlci9sb2NhdGlvbnMvdGV4dHVyZS9hdHRyaWJ1dGUuanMiLCAic3JjL3JlbmRlcmVyL3RleHR1cmUuanMiLCAic3JjL3JlbmRlcmVyL3RleHR1cmUvaW1hZ2VzLmpzIiwgInNyYy9yZW5kZXJlci90ZXh0dXJlL2ltYWdlTWFwLmpzIiwgInNyYy9lbGVtZW50L3BhcnQuanMiLCAic3JjL2VsZW1lbnQvY2FtZXJhLmpzIiwgInNyYy9ldmVudFR5cGVzLmpzIiwgInNyYy9taXNjZWxsYW5lb3VzL2tleUV2ZW50cy5qcyIsICJzcmMvbWlzY2VsbGFuZW91cy9tb3VzZUV2ZW50cy5qcyIsICJzcmMvbWlzY2VsbGFuZW91cy91c2VySW5wdXQuanMiLCAic3JjL2VsZW1lbnQvc2NlbmUuanMiLCAic3JjL3V0aWxpdGllcy9vZmZzZXRzLmpzIiwgInNyYy9taXNjZWxsYW5lb3VzL3Bhbi5qcyIsICJzcmMvbWlzY2VsbGFuZW91cy90aWx0LmpzIiwgInNyYy91dGlsaXRpZXMvbG9jYWxTdG9yYWdlLmpzIiwgInNyYy9lbGVtZW50L2NhbWVyYS9nYW1pbmcuanMiLCAic3JjL21pc2NlbGxhbmVvdXMvem9vbS5qcyIsICJzcmMvZWxlbWVudC9jYW1lcmEvZGVzaWduLmpzIiwgInNyYy91dGlsaXRpZXMvcHJlbG9hZC5qcyIsICJzcmMvcHJpbWl0aXZlL25vcm1hbC5qcyIsICJzcmMvcHJpbWl0aXZlL3ZlcnRleC5qcyIsICJzcmMvdXRpbGl0aWVzL2ZhY2V0LmpzIiwgInNyYy9wcmltaXRpdmUvZmFjZXQuanMiLCAic3JjL3ByaW1pdGl2ZS9mYWNldC9jb2xvdXJlZC5qcyIsICJzcmMvZWxlbWVudC9jYW52YXMvY29sb3VyZWQuanMiLCAic3JjL3V0aWxpdGllcy90ZXh0dXJlLmpzIiwgInNyYy9wcmltaXRpdmUvZmFjZXQvdGV4dHVyZWQuanMiLCAic3JjL2VsZW1lbnQvY2FudmFzL3RleHR1cmVkLmpzIiwgInNyYy9pbmRleC5qcyIsICJzcmMvZXhhbXBsZS9lbGVtZW50L2NvbG91cmVkU3F1YXJlLmpzIiwgInNyYy9leGFtcGxlL2VsZW1lbnQvZmFjZS5qcyIsICJzcmMvZXhhbXBsZS9lbGVtZW50L2N1YmUuanMiLCAic3JjL2V4YW1wbGUvY3ViZS5qcyIsICJzcmMvZXhhbXBsZS9lbGVtZW50L3RleHR1cmVkUXVhZHJhbmdsZS5qcyIsICJzcmMvZXhhbXBsZS90aWxpbmcuanMiLCAic3JjL2V4YW1wbGUvc2ltcGxlLmpzIiwgInNyYy9leGFtcGxlL21hc2tpbmcuanMiLCAic3JjL2V4YW1wbGUvZWxlbWVudC90ZXh0dXJlZFRyaWFuZ2xlLmpzIiwgInNyYy9leGFtcGxlL2VsZW1lbnQvc2lkZS5qcyIsICJzcmMvZXhhbXBsZS9lbGVtZW50L3B5cmFtaWQuanMiLCAic3JjL2V4YW1wbGUvcHlyYW1pZC5qcyIsICJzcmMvZXhhbXBsZS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBXRUJHTCA9IFwid2ViZ2xcIjtcbmV4cG9ydCBjb25zdCBXSURUSCA9IFwid2lkdGhcIjtcbmV4cG9ydCBjb25zdCBIRUlHSFQgPSBcImhlaWdodFwiO1xuZXhwb3J0IGNvbnN0IENBTlZBUyA9IFwiY2FudmFzXCI7XG5leHBvcnQgY29uc3QgU1RSSU5HID0gXCJzdHJpbmdcIjtcbmV4cG9ydCBjb25zdCBGVU5DVElPTiA9IFwiZnVuY3Rpb25cIjtcbmV4cG9ydCBjb25zdCBBTk9OWU1PVVMgPSBcImFub255bW91c1wiO1xuZXhwb3J0IGNvbnN0IEdBTUlOR19DQU1FUkEgPSBcImdhbWluZ19jYW1lcmFcIjtcbmV4cG9ydCBjb25zdCBERVNJR05fQ0FNRVJBID0gXCJkZXNpZ25fY2FtZXJhXCI7XG5leHBvcnQgY29uc3QgVkVSVElDRVNfTEVOR1RIID0gMztcbmV4cG9ydCBjb25zdCBNSU5JTVVNX0RJU1RBTkNFID0gMTtcbmV4cG9ydCBjb25zdCBJTlZFUlRfTVVMVElQTElFUiA9IC0xO1xuZXhwb3J0IGNvbnN0IEFOR0xFU19NVUxUSVBMSUVSID0gMC4wMTtcbmV4cG9ydCBjb25zdCBNT1VTRV9XSEVFTF9ERUxUQV9NVUxUSVBMSUVSID0gMC4yNTtcbmV4cG9ydCBjb25zdCBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUiA9IE1hdGguUEkgLyAxODA7XG5leHBvcnQgY29uc3QgRVhUX1RFWFRVUkVfRklMVEVSX0FOSVNPVFJPUElDID0gXCJFWFRfdGV4dHVyZV9maWx0ZXJfYW5pc290cm9waWNcIjtcbmV4cG9ydCBjb25zdCBNT1pfRVhUX1RFWFRVUkVfRklMVEVSX0FOSVNPVFJPUElDID0gXCJNT1pfRVhUX3RleHR1cmVfZmlsdGVyX2FuaXNvdHJvcGljXCI7XG5leHBvcnQgY29uc3QgV0VCS0lUX0VYVF9URVhUVVJFX0ZJTFRFUl9BTklTT1RST1BJQyA9IFwiV0VCS0lUX0VYVF90ZXh0dXJlX2ZpbHRlcl9hbmlzb3Ryb3BpY1wiO1xuZXhwb3J0IGNvbnN0IFJFTEFUSVZFX01PVVNFX0NPT1JESU5BVEVTX01VTFRJUExJRVIgPSAwLjAyNTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFRSQUNFX0xFVkVMID0gXCJ0cmFjZVwiO1xuZXhwb3J0IGNvbnN0IERFQlVHX0xFVkVMID0gXCJkZWJ1Z1wiO1xuZXhwb3J0IGNvbnN0IElORk9fTEVWRUwgPSBcImluZm9cIjtcbmV4cG9ydCBjb25zdCBXQVJOSU5HX0xFVkVMID0gXCJ3YXJuaW5nXCI7XG5leHBvcnQgY29uc3QgRVJST1JfTEVWRUwgPSBcImVycm9yXCI7XG5leHBvcnQgY29uc3QgRkFUQUxfTEVWRUwgPSBcImZhdGFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgVFJBQ0VfTEVWRUwsXG4gIERFQlVHX0xFVkVMLFxuICBJTkZPX0xFVkVMLFxuICBXQVJOSU5HX0xFVkVMLFxuICBFUlJPUl9MRVZFTCxcbiAgRkFUQUxfTEVWRUxcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBHRVRfTUVUSE9EID0gXCJHRVRcIjtcbmV4cG9ydCBjb25zdCBQT1NUX01FVEhPRCA9IFwiUE9TVFwiO1xuZXhwb3J0IGNvbnN0IFBBVENIX01FVEhPRCA9IFwiUEFUQ0hcIjtcbmV4cG9ydCBjb25zdCBERUxFVEVfTUVUSE9EID0gXCJERUxFVEVcIjtcbmV4cG9ydCBjb25zdCBPUFRJT05TX01FVEhPRCA9IFwiT1BUSU9OU1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIEdFVF9NRVRIT0QsXG4gIFBPU1RfTUVUSE9ELFxuICBQQVRDSF9NRVRIT0QsXG4gIERFTEVURV9NRVRIT0QsXG4gIE9QVElPTlNfTUVUSE9EXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgUFJBR01BX0hFQURFUiA9IFwicHJhZ21hXCI7XG5leHBvcnQgY29uc3QgQUNDRVBUX0hFQURFUiA9IFwiYWNjZXB0XCI7XG5leHBvcnQgY29uc3QgTE9DQVRJT05fSEVBREVSID0gXCJsb2NhdGlvblwiO1xuZXhwb3J0IGNvbnN0IFVTRVJfQUdFTlRfSEVBREVSID0gXCJ1c2VyLWFnZW50XCI7XG5leHBvcnQgY29uc3QgQ09OVEVOVF9UWVBFX0hFQURFUiA9IFwiY29udGVudC10eXBlXCI7XG5leHBvcnQgY29uc3QgQVVUSE9SSVpBVElPTl9IRUFERVIgPSBcImF1dGhvcml6YXRpb25cIjtcbmV4cG9ydCBjb25zdCBDQUNIRV9DT05UUk9MX0hFQURFUiA9IFwiY2FjaGUtY29udHJvbFwiO1xuZXhwb3J0IGNvbnN0IENPTlRFTlRfTEVOR1RIX0hFQURFUiA9IFwiY29udGVudC1sZW5ndGhcIjtcbmV4cG9ydCBjb25zdCBUUkFOU0ZFUl9FTkNPRElOR19IRUFERVIgPSBcInRyYW5zZmVyLWVuY29kaW5nXCI7XG5leHBvcnQgY29uc3QgQ09OVEVOVF9ESVNQT1NJVElPTl9IRUFERVIgPSBcImNvbnRlbnQtZGlzcG9zaXRpb25cIjtcbmV4cG9ydCBjb25zdCBBQ0NFU1NfQ09OVFJPTF9BTExPV19PUklHSU5fSEVBREVSID0gXCJhY2Nlc3MtY29udHJvbC1hbGxvdy1vcmlnaW5cIjtcbmV4cG9ydCBjb25zdCBBQ0NFU1NfQ09OVFJPTF9BTExPV19NRVRIT0RTX0hFQURFUiA9IFwiYWNjZXNzLWNvbnRyb2wtYWxsb3ctbWV0aG9kc1wiO1xuZXhwb3J0IGNvbnN0IEFDQ0VTU19DT05UUk9MX0FMTE9XX0hFQURFUlNfSEVBREVSID0gXCJhY2Nlc3MtY29udHJvbC1hbGxvdy1oZWFkZXJzXCI7XG5leHBvcnQgY29uc3QgQUNDRVNTX0NPTlRST0xfUkVRVUVTVF9NRVRIT0RfSEVBREVSID0gXCJhY2Nlc3MtY29udHJvbC1yZXF1ZXN0LW1ldGhvZFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFBSQUdNQV9IRUFERVIsXG4gIEFDQ0VQVF9IRUFERVIsXG4gIExPQ0FUSU9OX0hFQURFUixcbiAgVVNFUl9BR0VOVF9IRUFERVIsXG4gIENPTlRFTlRfVFlQRV9IRUFERVIsXG4gIEFVVEhPUklaQVRJT05fSEVBREVSLFxuICBDQUNIRV9DT05UUk9MX0hFQURFUixcbiAgQ09OVEVOVF9MRU5HVEhfSEVBREVSLFxuICBUUkFOU0ZFUl9FTkNPRElOR19IRUFERVIsXG4gIENPTlRFTlRfRElTUE9TSVRJT05fSEVBREVSLFxuICBBQ0NFU1NfQ09OVFJPTF9BTExPV19PUklHSU5fSEVBREVSLFxuICBBQ0NFU1NfQ09OVFJPTF9BTExPV19NRVRIT0RTX0hFQURFUixcbiAgQUNDRVNTX0NPTlRST0xfQUxMT1dfSEVBREVSU19IRUFERVIsXG4gIEFDQ0VTU19DT05UUk9MX1JFUVVFU1RfTUVUSE9EX0hFQURFUlxufTsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBUQUJfS0VZX0NPREUgPSA5O1xuZXhwb3J0IGNvbnN0IFNISUZUX0tFWV9DT0RFID0gMTY7XG5leHBvcnQgY29uc3QgRU5URVJfS0VZX0NPREUgPSAxMztcbmV4cG9ydCBjb25zdCBFU0NBUEVfS0VZX0NPREUgPSAyNztcbmV4cG9ydCBjb25zdCBERUxFVEVfS0VZX0NPREUgPSA0NjtcbmV4cG9ydCBjb25zdCBCQUNLU1BBQ0VfS0VZX0NPREUgPSA4O1xuZXhwb3J0IGNvbnN0IEFSUk9XX1VQX0tFWV9DT0RFID0gMzg7XG5leHBvcnQgY29uc3QgQVJST1dfRE9XTl9LRVlfQ09ERSA9IDQwO1xuZXhwb3J0IGNvbnN0IEFSUk9XX0xFRlRfS0VZX0NPREUgPSAzNztcbmV4cG9ydCBjb25zdCBBUlJPV19SSUdIVF9LRVlfQ09ERSA9IDM5O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFRBQl9LRVlfQ09ERSxcbiAgU0hJRlRfS0VZX0NPREUsXG4gIEVOVEVSX0tFWV9DT0RFLFxuICBFU0NBUEVfS0VZX0NPREUsXG4gIERFTEVURV9LRVlfQ09ERSxcbiAgQkFDS1NQQUNFX0tFWV9DT0RFLFxuICBBUlJPV19VUF9LRVlfQ09ERSxcbiAgQVJST1dfRE9XTl9LRVlfQ09ERSxcbiAgQVJST1dfTEVGVF9LRVlfQ09ERSxcbiAgQVJST1dfUklHSFRfS0VZX0NPREVcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBVVEY4X0VOQ09ESU5HID0gXCJ1dGY4XCI7XG5leHBvcnQgY29uc3QgVVRGXzhfRU5DT0RJTkcgPSBcInV0Zi04XCI7XG5leHBvcnQgY29uc3QgQkFTRTY0X0VOQ09ESU5HID0gXCJiYXNlNjRcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBVVEY4X0VOQ09ESU5HLFxuICBVVEZfOF9FTkNPRElORyxcbiAgQkFTRTY0X0VOQ09ESU5HXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgQVJSQVlfSlNPTl9UWVBFID0gXCJhcnJheVwiO1xuZXhwb3J0IGNvbnN0IE9CSkVDVF9KU09OX1RZUEUgPSBcIm9iamVjdFwiO1xuZXhwb3J0IGNvbnN0IFNUUklOR19KU09OX1RZUEUgPSBcInN0cmluZ1wiO1xuZXhwb3J0IGNvbnN0IE5VTUJFUl9KU09OX1RZUEUgPSBcIm51bWJlclwiO1xuZXhwb3J0IGNvbnN0IEJPT0xFQU5fSlNPTl9UWVBFID0gXCJib29sZWFuXCI7XG5leHBvcnQgY29uc3QgUFJJTUlUSVZFX0pTT05fVFlQRSA9IFwicHJpbWl0aXZlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgQVJSQVlfSlNPTl9UWVBFLFxuICBPQkpFQ1RfSlNPTl9UWVBFLFxuICBTVFJJTkdfSlNPTl9UWVBFLFxuICBOVU1CRVJfSlNPTl9UWVBFLFxuICBCT09MRUFOX0pTT05fVFlQRSxcbiAgUFJJTUlUSVZFX0pTT05fVFlQRVxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFVQX0NIQVJBQ1RFUiA9IFwiXHUwMDFiW0FcIjtcbmV4cG9ydCBjb25zdCBFVFhfQ0hBUkFDVEVSID0gXCJcXHUwMDAzXCI7XG5leHBvcnQgY29uc3QgQkFSX0NIQVJBQ1RFUiA9IFwifFwiO1xuZXhwb3J0IGNvbnN0IEhBVF9DSEFSQUNURVIgPSBcIl5cIjtcbmV4cG9ydCBjb25zdCBQTFVTX0NIQVJBQ1RFUiA9IFwiK1wiO1xuZXhwb3J0IGNvbnN0IERBU0hfQ0hBUkFDVEVSID0gXCItXCI7XG5leHBvcnQgY29uc3QgRE9XTl9DSEFSQUNURVIgPSBcIlx1MDAxYltCXCI7XG5leHBvcnQgY29uc3QgTEVGVF9DSEFSQUNURVIgPSBcIlx1MDAxYltEXCI7XG5leHBvcnQgY29uc3QgUklHSFRfQ0hBUkFDVEVSID0gXCJcdTAwMWJbQ1wiO1xuZXhwb3J0IGNvbnN0IFNQQUNFX0NIQVJBQ1RFUiA9IFwiIFwiO1xuZXhwb3J0IGNvbnN0IENPTU1BX0NIQVJBQ1RFUiA9IFwiLFwiO1xuZXhwb3J0IGNvbnN0IENPTE9OX0NIQVJBQ1RFUiA9IFwiOlwiO1xuZXhwb3J0IGNvbnN0IFBFUklPRF9DSEFSQUNURVIgPSBcIi5cIjtcbmV4cG9ydCBjb25zdCBET0xMQVJfQ0hBUkFDVEVSID0gXCIkXCI7XG5leHBvcnQgY29uc3QgQ1RSTF9DX0NIQVJBQ1RFUiA9IFwiXkNcIjtcbmV4cG9ydCBjb25zdCBFU0NBUEVfQ0hBUkFDVEVSID0gXCJcXHUwMDFiXCI7XG5leHBvcnQgY29uc3QgQVNURVJJU0tfQ0hBUkFDVEVSID0gXCIqXCI7XG5leHBvcnQgY29uc3QgV0lMRENBUkRfQ0hBUkFDVEVSID0gXCIqXCI7XG5leHBvcnQgY29uc3QgQkFDS1RJQ0tfREVMSU1JVEVSID0gXCJgXCI7XG5leHBvcnQgY29uc3QgTkVXX0xJTkVfQ0hBUkFDVEVSID0gXCJcXG5cIjtcbmV4cG9ydCBjb25zdCBBTVBFUlNBTkRfQ0hBUkFDVEVSID0gXCImXCI7XG5leHBvcnQgY29uc3QgQkFDS1NMQVNIX0NIQVJBQ1RFUiA9IFwiXFxcXFwiO1xuZXhwb3J0IGNvbnN0IEJBQ0tTUEFDRV9DSEFSQUNURVIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDEyNyk7XG5leHBvcnQgY29uc3QgUVVFU1RJT05fTUFSS19DSEFSQUNURVIgPSBcIj9cIjtcbmV4cG9ydCBjb25zdCBGT1JXQVJEX1NMQVNIX0NIQVJBQ1RFUiA9IFwiL1wiO1xuZXhwb3J0IGNvbnN0IE9QRU5JTkdfQlJBQ0tFVF9DSEFSQUNURVIgPSBcIihcIjtcbmV4cG9ydCBjb25zdCBDTE9TSU5HX0JSQUNLRVRfQ0hBUkFDVEVSID0gXCIpXCI7XG5leHBvcnQgY29uc3QgQ0FSUklBR0VfUkVUVVJOX0NIQVJBQ1RFUiA9IFwiXFxyXCI7XG5leHBvcnQgY29uc3QgRVhDTEFNQVRJT05fTUFSS19DSEFSQUNURVIgPSBcIiFcIjtcbmV4cG9ydCBjb25zdCBPUEVOSU5HX0NVUkxZX0JSQUNLRVRfQ0hBUkFDVEVSID0gXCJ7XCI7XG5leHBvcnQgY29uc3QgQ0xPU0lOR19DVVJMWV9CUkFDS0VUX0NIQVJBQ1RFUiA9IFwifVwiO1xuZXhwb3J0IGNvbnN0IE9QRU5JTkdfU1FVQVJFX0JSQUNLRVRfQ0hBUkFDVEVSID0gXCJbXCI7XG5leHBvcnQgY29uc3QgQ0xPU0lOR19TUVVBUkVfQlJBQ0tFVF9DSEFSQUNURVIgPSBcIl1cIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBVUF9DSEFSQUNURVIsXG4gIEVUWF9DSEFSQUNURVIsXG4gIEJBUl9DSEFSQUNURVIsXG4gIEhBVF9DSEFSQUNURVIsXG4gIFBMVVNfQ0hBUkFDVEVSLFxuICBEQVNIX0NIQVJBQ1RFUixcbiAgRE9XTl9DSEFSQUNURVIsXG4gIExFRlRfQ0hBUkFDVEVSLFxuICBSSUdIVF9DSEFSQUNURVIsXG4gIFNQQUNFX0NIQVJBQ1RFUixcbiAgQ09NTUFfQ0hBUkFDVEVSLFxuICBDT0xPTl9DSEFSQUNURVIsXG4gIFBFUklPRF9DSEFSQUNURVIsXG4gIERPTExBUl9DSEFSQUNURVIsXG4gIENUUkxfQ19DSEFSQUNURVIsXG4gIEVTQ0FQRV9DSEFSQUNURVIsXG4gIEFTVEVSSVNLX0NIQVJBQ1RFUixcbiAgV0lMRENBUkRfQ0hBUkFDVEVSLFxuICBCQUNLVElDS19ERUxJTUlURVIsXG4gIE5FV19MSU5FX0NIQVJBQ1RFUixcbiAgQU1QRVJTQU5EX0NIQVJBQ1RFUixcbiAgQkFDS1NMQVNIX0NIQVJBQ1RFUixcbiAgQkFDS1NQQUNFX0NIQVJBQ1RFUixcbiAgUVVFU1RJT05fTUFSS19DSEFSQUNURVIsXG4gIEZPUldBUkRfU0xBU0hfQ0hBUkFDVEVSLFxuICBPUEVOSU5HX0JSQUNLRVRfQ0hBUkFDVEVSLFxuICBDTE9TSU5HX0JSQUNLRVRfQ0hBUkFDVEVSLFxuICBDQVJSSUFHRV9SRVRVUk5fQ0hBUkFDVEVSLFxuICBFWENMQU1BVElPTl9NQVJLX0NIQVJBQ1RFUixcbiAgT1BFTklOR19DVVJMWV9CUkFDS0VUX0NIQVJBQ1RFUixcbiAgQ0xPU0lOR19DVVJMWV9CUkFDS0VUX0NIQVJBQ1RFUixcbiAgT1BFTklOR19TUVVBUkVfQlJBQ0tFVF9DSEFSQUNURVIsXG4gIENMT1NJTkdfU1FVQVJFX0JSQUNLRVRfQ0hBUkFDVEVSXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgWkVST18wX1NUQVRVU19DT0RFID0gMDtcbmV4cG9ydCBjb25zdCBPS18yMDBfU1RBVFVTX0NPREUgPSAyMDA7XG5leHBvcnQgY29uc3QgRk9VTkRfMzAyX1NUQVRVU19DT0RFID0gMzAyO1xuZXhwb3J0IGNvbnN0IENSRUFURURfMjAxX1NUQVRVU19DT0RFID0gMjAxO1xuZXhwb3J0IGNvbnN0IENPTkZMSUNUXzQwOV9TVEFUVVNfQ09ERSA9IDQwOTtcbmV4cG9ydCBjb25zdCBTRUVfT1RIRVJfMzAzX1NUQVRVU19DT0RFID0gMzAzO1xuZXhwb3J0IGNvbnN0IEZPUkJJRERFTl80MDNfU1RBVFVTX0NPREUgPSA0MDM7XG5leHBvcnQgY29uc3QgTk9UX0ZPVU5EXzQwNF9TVEFUVVNfQ09ERSA9IDQwNDtcbmV4cG9ydCBjb25zdCBOT19DT05URU5UXzIwNF9TVEFUVVNfQ09ERSA9IDIwNDtcbmV4cG9ydCBjb25zdCBCQURfR0FURVdBWV81MDJfU1RBVFVTX0NPREUgPSA1MDI7XG5leHBvcnQgY29uc3QgQkFEX1JFUVVFU1RfNDAwX1NUQVRVU19DT0RFID0gNDAwO1xuZXhwb3J0IGNvbnN0IFVOQVVUSE9SSVpFRF80MDFfU1RBVFVTX0NPREUgPSA0MDE7XG5leHBvcnQgY29uc3QgTk9UX0FDQ0VQVEFCTEVfNDA2X1NUQVRVU19DT0RFID0gNDA2O1xuZXhwb3J0IGNvbnN0IFJFUVVFU1RfVElNRU9VVF80MDhfU1RBVFVTX0NPREUgPSA0MDg7XG5leHBvcnQgY29uc3QgVE9PX01BTllfUkVRVUVTVFNfNDI5X1NUQVRVU19DT0RFID0gNDI5O1xuZXhwb3J0IGNvbnN0IE1FVEhPRF9OT1RfQUxMT1dFRF80MDVfU1RBVFVTX0NPREUgPSA0MDU7XG5leHBvcnQgY29uc3QgU0VSVklDRV9VTkFWQUlMQUJMRV81MDNfU1RBVFVTX0NPREUgPSA1MDM7XG5leHBvcnQgY29uc3QgVU5QUk9DRVNTQUJMRV9FTlRJVFlfNDIyX1NUQVRVU19DT0RFID0gNDIyO1xuZXhwb3J0IGNvbnN0IElOVEVSTkFMX1NFUlZFUl9FUlJPUl81MDBfU1RBVFVTX0NPREUgPSA1MDA7XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBaRVJPXzBfU1RBVFVTX0NPREUsXG4gIE9LXzIwMF9TVEFUVVNfQ09ERSxcbiAgRk9VTkRfMzAyX1NUQVRVU19DT0RFLFxuICBDUkVBVEVEXzIwMV9TVEFUVVNfQ09ERSxcbiAgQ09ORkxJQ1RfNDA5X1NUQVRVU19DT0RFLFxuICBTRUVfT1RIRVJfMzAzX1NUQVRVU19DT0RFLFxuICBGT1JCSURERU5fNDAzX1NUQVRVU19DT0RFLFxuICBOT1RfRk9VTkRfNDA0X1NUQVRVU19DT0RFLFxuICBOT19DT05URU5UXzIwNF9TVEFUVVNfQ09ERSxcbiAgQkFEX0dBVEVXQVlfNTAyX1NUQVRVU19DT0RFLFxuICBCQURfUkVRVUVTVF80MDBfU1RBVFVTX0NPREUsXG4gIFVOQVVUSE9SSVpFRF80MDFfU1RBVFVTX0NPREUsXG4gIE5PVF9BQ0NFUFRBQkxFXzQwNl9TVEFUVVNfQ09ERSxcbiAgUkVRVUVTVF9USU1FT1VUXzQwOF9TVEFUVVNfQ09ERSxcbiAgVE9PX01BTllfUkVRVUVTVFNfNDI5X1NUQVRVU19DT0RFLFxuICBNRVRIT0RfTk9UX0FMTE9XRURfNDA1X1NUQVRVU19DT0RFLFxuICBTRVJWSUNFX1VOQVZBSUxBQkxFXzUwM19TVEFUVVNfQ09ERSxcbiAgVU5QUk9DRVNTQUJMRV9FTlRJVFlfNDIyX1NUQVRVU19DT0RFLFxuICBJTlRFUk5BTF9TRVJWRVJfRVJST1JfNTAwX1NUQVRVU19DT0RFXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgVEVYVF9IVE1MX0NPTlRFTlRfVFlQRSA9IFwidGV4dC9odG1sXCI7XG5leHBvcnQgY29uc3QgVEVYVF9QTEFJTl9DT05URU5UX1RZUEUgPSBcInRleHQvcGxhaW5cIjtcbmV4cG9ydCBjb25zdCBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRSA9IFwiYXBwbGljYXRpb24vanNvblwiO1xuZXhwb3J0IGNvbnN0IFRFWFRfSFRNTF9DSEFSU0VUX1VURl84X0NPTlRFTlRfVFlQRSA9IFwidGV4dC9odG1sOyBjaGFyc2V0PXV0Zi04XCI7XG5leHBvcnQgY29uc3QgVEVYVF9QTEFJTl9DSEFSU0VUX1VURl84X0NPTlRFTlRfVFlQRSA9IFwidGV4dC9wbGFpbjsgY2hhcnNldD11dGYtOFwiO1xuZXhwb3J0IGNvbnN0IEFQUExJQ0FUSU9OX09DVEVUX1NUUkVBTV9DT05URU5UX1RZUEUgPSBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiO1xuZXhwb3J0IGNvbnN0IEFQUExJQ0FUSU9OX1hfV1dXX0ZPUk1fRU5DT0RFRF9DT05URU5UX1RZUEUgPSBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiO1xuZXhwb3J0IGNvbnN0IEFQUExJQ0FUSU9OX0pTT05fQ0hBUlNFVF9VVEZfOF9DT05URU5UX1RZUEUgPSBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIjtcbmV4cG9ydCBjb25zdCBBUFBMSUNBVElPTl9YX1dXV19GT1JNX0VOQ09ERURfQ0hBUlNFVF9VVEZfOF9DT05URU5UX1RZUEUgPSBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD11dGYtOFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFRFWFRfSFRNTF9DT05URU5UX1RZUEUsXG4gIFRFWFRfUExBSU5fQ09OVEVOVF9UWVBFLFxuICBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRSxcbiAgVEVYVF9IVE1MX0NIQVJTRVRfVVRGXzhfQ09OVEVOVF9UWVBFLFxuICBURVhUX1BMQUlOX0NIQVJTRVRfVVRGXzhfQ09OVEVOVF9UWVBFLFxuICBBUFBMSUNBVElPTl9PQ1RFVF9TVFJFQU1fQ09OVEVOVF9UWVBFLFxuICBBUFBMSUNBVElPTl9KU09OX0NIQVJTRVRfVVRGXzhfQ09OVEVOVF9UWVBFLFxuICBBUFBMSUNBVElPTl9YX1dXV19GT1JNX0VOQ09ERURfQ09OVEVOVF9UWVBFLFxuICBBUFBMSUNBVElPTl9YX1dXV19GT1JNX0VOQ09ERURfQ0hBUlNFVF9VVEZfOF9DT05URU5UX1RZUEVcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBaRVJPXzBfU1RBVFVTX01FU1NBR0UgPSBcIlwiO1xuZXhwb3J0IGNvbnN0IE9LXzIwMF9TVEFUVVNfTUVTU0FHRSA9IFwiT0tcIjtcbmV4cG9ydCBjb25zdCBGT1VORF8zMDJfU1RBVFVTX01FU1NBR0UgPSBcIkZvdW5kXCI7XG5leHBvcnQgY29uc3QgQ1JFQVRFRF8yMDFfU1RBVFVTX01FU1NBR0UgPSBcIkNyZWF0ZWRcIjtcbmV4cG9ydCBjb25zdCBDT05GTElDVF80MDlfU1RBVFVTX01FU1NBR0UgPSBcIkNvbmZsaWN0XCI7XG5leHBvcnQgY29uc3QgU0VFX09USEVSXzMwM19TVEFUVVNfTUVTU0FHRSA9IFwiU2VlIG90aGVyXCI7XG5leHBvcnQgY29uc3QgRk9SQklEREVOXzQwM19TVEFUVVNfTUVTU0FHRSA9IFwiRm9yYmlkZGVuXCI7XG5leHBvcnQgY29uc3QgTk9UX0ZPVU5EXzQwNF9TVEFUVVNfTUVTU0FHRSA9IFwiTm90IGZvdW5kXCI7XG5leHBvcnQgY29uc3QgTk9fQ09OVEVOVF8yMDRfU1RBVFVTX01FU1NBR0UgPSBcIk5vIGNvbnRlbnRcIjtcbmV4cG9ydCBjb25zdCBCQURfR0FURVdBWV81MDJfU1RBVFVTX01FU1NBR0UgPSBcIkJhZCBnYXRld2F5XCI7XG5leHBvcnQgY29uc3QgQkFEX1JFUVVFU1RfNDAwX1NUQVRVU19NRVNTQUdFID0gXCJCYWQgcmVxdWVzdFwiO1xuZXhwb3J0IGNvbnN0IFVOQVVUSE9SSVpFRF80MDFfU1RBVFVTX01FU1NBR0UgPSBcIlVuYXV0aG9yaXplZFwiO1xuZXhwb3J0IGNvbnN0IE5PVF9BQ0NFUFRBQkxFXzQwNl9TVEFUVVNfTUVTU0FHRSA9IFwiTm90IEFjY2VwdGFibGVcIjtcbmV4cG9ydCBjb25zdCBSRVFVRVNUX1RJTUVPVVRfNDA4X1NUQVRVU19NRVNTQUdFID0gXCJSZXF1ZXN0IHRpbWVvdXRcIjtcbmV4cG9ydCBjb25zdCBUT09fTUFOWV9SRVFVRVNUU180MjlfU1RBVFVTX01FU1NBR0UgPSBcIlRvbyBtYW55IHJlcXVlc3RzXCI7XG5leHBvcnQgY29uc3QgTUVUSE9EX05PVF9BTExPV0VEXzQwNV9TVEFUVVNfTUVTU0FHRSA9IFwiTWV0aG9kIG5vdCBhbGxvd2VkXCI7XG5leHBvcnQgY29uc3QgU0VSVklDRV9VTkFWQUlMQUJMRV81MDNfU1RBVFVTX01FU1NBR0UgPSBcIlNlcnZpY2UgdW5hdmFpbGFibGVcIjtcbmV4cG9ydCBjb25zdCBVTlBST0NFU1NBQkxFX0VOVElUWV80MjJfU1RBVFVTX01FU1NBR0UgPSBcIlVucHJvY2Vzc2FibGUgRW50aXR5XCI7XG5leHBvcnQgY29uc3QgSU5URVJOQUxfU0VSVkVSX0VSUk9SXzUwMF9TVEFUVVNfTUVTU0FHRSA9IFwiSW50ZXJuYWwgc2VydmVyIGVycm9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgWkVST18wX1NUQVRVU19NRVNTQUdFLFxuICBPS18yMDBfU1RBVFVTX01FU1NBR0UsXG4gIEZPVU5EXzMwMl9TVEFUVVNfTUVTU0FHRSxcbiAgQ1JFQVRFRF8yMDFfU1RBVFVTX01FU1NBR0UsXG4gIENPTkZMSUNUXzQwOV9TVEFUVVNfTUVTU0FHRSxcbiAgU0VFX09USEVSXzMwM19TVEFUVVNfTUVTU0FHRSxcbiAgRk9SQklEREVOXzQwM19TVEFUVVNfTUVTU0FHRSxcbiAgTk9UX0ZPVU5EXzQwNF9TVEFUVVNfTUVTU0FHRSxcbiAgTk9fQ09OVEVOVF8yMDRfU1RBVFVTX01FU1NBR0UsXG4gIEJBRF9HQVRFV0FZXzUwMl9TVEFUVVNfTUVTU0FHRSxcbiAgQkFEX1JFUVVFU1RfNDAwX1NUQVRVU19NRVNTQUdFLFxuICBVTkFVVEhPUklaRURfNDAxX1NUQVRVU19NRVNTQUdFLFxuICBOT1RfQUNDRVBUQUJMRV80MDZfU1RBVFVTX01FU1NBR0UsXG4gIFJFUVVFU1RfVElNRU9VVF80MDhfU1RBVFVTX01FU1NBR0UsXG4gIFRPT19NQU5ZX1JFUVVFU1RTXzQyOV9TVEFUVVNfTUVTU0FHRSxcbiAgTUVUSE9EX05PVF9BTExPV0VEXzQwNV9TVEFUVVNfTUVTU0FHRSxcbiAgU0VSVklDRV9VTkFWQUlMQUJMRV81MDNfU1RBVFVTX01FU1NBR0UsXG4gIFVOUFJPQ0VTU0FCTEVfRU5USVRZXzQyMl9TVEFUVVNfTUVTU0FHRSxcbiAgSU5URVJOQUxfU0VSVkVSX0VSUk9SXzUwMF9TVEFUVVNfTUVTU0FHRVxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFpFUk8gPSBcIjBcIjtcbmV4cG9ydCBjb25zdCBEQVRBID0gXCJkYXRhXCI7XG5leHBvcnQgY29uc3QgRVJST1IgPSBcImVycm9yXCI7XG5leHBvcnQgY29uc3QgU1RSSU5HID0gXCJzdHJpbmdcIjtcbmV4cG9ydCBjb25zdCBERUZBVUxUID0gXCJkZWZhdWx0XCI7XG5leHBvcnQgY29uc3QgRlVOQ1RJT04gPSBcImZ1bmN0aW9uXCI7XG5leHBvcnQgY29uc3QgRU5WSVJPTk1FTlQgPSBcIkVOVklST05NRU5UXCI7XG5leHBvcnQgY29uc3QgRU1QVFlfU1RSSU5HID0gXCJcIjtcbmV4cG9ydCBjb25zdCBQQUNLQUdFX0pTT04gPSBcInBhY2thZ2UuanNvblwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdO31cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoaXJkKGFycmF5KSB7IHJldHVybiBhcnJheVsyXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZm91cnRoKGFycmF5KSB7IHJldHVybiBhcnJheVszXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZmlmdGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzRdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzaXh0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldmVudGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzZdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBlaWdodGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzddOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBuaW50aChhcnJheSkgeyByZXR1cm4gYXJyYXlbOF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlbnRoKGFycmF5KSB7IHJldHVybiBhcnJheVs5XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZmlyc3RMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gc2Vjb25kTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMl07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoaXJkTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gM107IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvdXJ0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDRdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWZ0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDVdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzaXh0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDZdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXZlbnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gN107IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGVpZ2h0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDhdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBuaW50aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDldOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gaGVhZChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMCwgMSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHRhaWwoYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKDEpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZShhcnJheS5sZW5ndGggLSAxKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZnJvbnQoYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKDAsIE1hdGgubWF4KDEsIGFycmF5Lmxlbmd0aCAtIDEpKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gcHVzaChhcnJheUEsIGFycmF5QikgeyBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcnJheUEsIGFycmF5Qik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2hpZnQoYXJyYXlBLCBhcnJheUIpIHsgQXJyYXkucHJvdG90eXBlLnVuc2hpZnQuYXBwbHkoYXJyYXlBLCBhcnJheUIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXQoYXJyYXlBLCBlbGVtZW50T3JBcnJheTIpIHtcbiAgY29uc3QgYXJyYXlCID0gKGVsZW1lbnRPckFycmF5MiBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRPckFycmF5MiA6XG4gICAgICAgICAgICAgICAgICAgICBbIGVsZW1lbnRPckFycmF5MiBdO1xuICBcbiAgcHVzaChhcnJheUEsIGFycmF5Qik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhcihhcnJheSkge1xuICBjb25zdCBzdGFydCA9IDA7XG4gIFxuICByZXR1cm4gYXJyYXkuc3BsaWNlKHN0YXJ0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvcHkoYXJyYXlBLCBhcnJheUIpIHtcbiAgY29uc3Qgc3RhcnQgPSAwLFxuICAgICAgICBkZWxldGVDb3VudCA9IGFycmF5Qi5sZW5ndGg7ICAvLy9cbiAgXG4gIHNwbGljZShhcnJheUEsIHN0YXJ0LCBkZWxldGVDb3VudCwgYXJyYXlCKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlKGFycmF5QSwgYXJyYXlCKSB7IEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFycmF5QSwgYXJyYXlCKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2goYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGxldCBtYXRjaGVzID0gZmFsc2U7XG5cbiAgY29uc3QgYXJyYXlBTGVuZ3RoID0gYXJyYXlBLmxlbmd0aCxcbiAgICAgICAgYXJyYXlCTGVuZ3RoID0gYXJyYXlCLmxlbmd0aDtcblxuICBpZiAoYXJyYXlBTGVuZ3RoID09PSBhcnJheUJMZW5ndGgpIHtcbiAgICBtYXRjaGVzID0gYXJyYXlBLmV2ZXJ5KChlbGVtZW50QSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnRCID0gYXJyYXlCW2luZGV4XSxcbiAgICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnRBLCBlbGVtZW50QiwgaW5kZXgpO1xuXG4gICAgICBpZiAocGFzc2VkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG1hdGNoZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlKGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBsZXQgY291cGxlZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGFycmF5QUxlbmd0aCA9IGFycmF5QS5sZW5ndGgsXG4gICAgICAgIGFycmF5Qkxlbmd0aCA9IGFycmF5Qi5sZW5ndGg7XG5cbiAgaWYgKGFycmF5QUxlbmd0aCA9PT0gYXJyYXlCTGVuZ3RoKSB7XG4gICAgYXJyYXlCID0gWyAgLy8vXG4gICAgICAuLi5hcnJheUJcbiAgICBdO1xuXG4gICAgY291cGxlZCA9IGFycmF5QS5ldmVyeSgoZWxlbWVudEEsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50QiA9IGV4dHJhY3QoYXJyYXlCLCAoZWxlbWVudEIpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudEEsIGVsZW1lbnRCKTtcblxuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pIHx8IG51bGw7XG5cbiAgICAgIGlmIChlbGVtZW50QiAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBjb3VwbGVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29ycmVsYXRlKGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBhcnJheUIgPSBbICAvLy9cbiAgICAuLi5hcnJheUJcbiAgXTtcblxuICBjb25zdCBjb3JyZWxhdGVzID0gYXJyYXlBLmV2ZXJ5KChlbGVtZW50QSkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnRCID0gZXh0cmFjdChhcnJheUIsIChlbGVtZW50QikgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudEEsIGVsZW1lbnRCKTtcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKGVsZW1lbnRCICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjb3JyZWxhdGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZShhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgbGV0IHJlc29sdmVkO1xuXG4gIGFycmF5QSA9IFsgIC8vL1xuICAgIC4uLmFycmF5QVxuICBdO1xuXG4gIGZvciAoOzspIHtcbiAgICBjb25zdCBhcnJheUFMZW5ndGggPSBhcnJheUEubGVuZ3RoO1xuXG4gICAgaWYgKGFycmF5QUxlbmd0aCA9PT0gMCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgbGV0IHJlc29sdmVkID0gZmFsc2U7XG5cbiAgICBhcnJheUEuZm9yRWFjaCgoZWxlbWVudEEpID0+IHtcbiAgICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnRBKTtcblxuICAgICAgaWYgKHBhc3NlZCkge1xuICAgICAgICBjb25zdCBlbGVtZW50QiA9IGVsZW1lbnRBOyAgLy8vXG5cbiAgICAgICAgYXJyYXlCLnB1c2goZWxlbWVudEIpO1xuXG4gICAgICAgIHJlc29sdmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghcmVzb2x2ZWQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGZpbHRlcihhcnJheUEsIChlbGVtZW50QSkgPT4ge1xuICAgICAgY29uc3QgYXJyYXlCSW5jbHVkZXNFbGVtZW50QSA9IGFycmF5Qi5pbmNsdWRlcyhlbGVtZW50QSk7XG5cbiAgICAgIGlmICghYXJyYXlCSW5jbHVkZXNFbGVtZW50QSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGFycmF5QUxlbmd0aCA9IGFycmF5QS5sZW5ndGg7XG5cbiAgcmVzb2x2ZWQgPSAoYXJyYXlBTGVuZ3RoID09PSAwKTtcblxuICByZXR1cm4gcmVzb2x2ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBlbGVtZW50cyA9IFtdO1xuXG4gIGZvcndhcmRzRm9yRWFjaChhcnJheSwgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2UoYXJyYXksIGVsZW1lbnQsIGNhbGxiYWNrKSB7XG4gIGxldCBzdGFydDtcbiAgXG4gIGNvbnN0IGZvdW5kID0gYXJyYXkuc29tZSgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBzdGFydCA9IGluZGV4OyAgLy8vXG4gICAgICBcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIFxuICBpZiAoZm91bmQpIHtcbiAgICBjb25zdCBkZWxldGVDb3VudCA9IDE7XG5cbiAgICBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwbGljZShhcnJheUEsIHN0YXJ0LCBkZWxldGVDb3VudCA9IEluZmluaXR5LCBhcnJheUIgPSBbXSkge1xuICBjb25zdCBhcmdzID0gWyBzdGFydCwgZGVsZXRlQ291bnQsIC4uLmFycmF5QiBdLFxuICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KGFycmF5QSwgYXJncyk7XG5cbiAgcmV0dXJuIGRlbGV0ZWRFbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcihhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgZGVsZXRlZEVsZW1lbnRzID0gW107XG4gIFxuICBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxLFxuICAgICAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICBmaXJzdERlbGV0ZWRFbGVtZW50ID0gZmlyc3QoZGVsZXRlZEVsZW1lbnRzKTtcbiAgICAgIFxuICAgICAgZGVsZXRlZEVsZW1lbnRzLnVuc2hpZnQoZmlyc3REZWxldGVkRWxlbWVudCk7ICAvLy9cbiAgICB9XG4gIH0pO1xuICBcbiAgcmV0dXJuIGRlbGV0ZWRFbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBydW5lKGFycmF5LCBjYWxsYmFjaykge1xuICBsZXQgZGVsZXRlZEVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gIFxuICBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSxcbiAgICAgICAgICAgIGZpcnN0RGVsZXRlZEVsZW1lbnQgPSBmaXJzdChkZWxldGVkRWxlbWVudHMpO1xuICAgICAgXG4gICAgICBkZWxldGVkRWxlbWVudCA9IGZpcnN0RGVsZXRlZEVsZW1lbnQ7ICAvLy9cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbiAgXG4gIHJldHVybiBkZWxldGVkRWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3QoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGxldCBkZWxldGVkRWxlbWVudCA9IHVuZGVmaW5lZDtcblxuICBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMSxcbiAgICAgICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLFxuICAgICAgICAgICAgZmlyc3REZWxldGVkRWxlbWVudCA9IGZpcnN0KGRlbGV0ZWRFbGVtZW50cyk7XG5cbiAgICAgIGRlbGV0ZWRFbGVtZW50ID0gZmlyc3REZWxldGVkRWxlbWVudDsgIC8vL1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkZWxldGVkRWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoKGFycmF5LCBlbGVtZW50LCBjYWxsYmFjaykge1xuICBjb25zdCBmb3VuZCA9IGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuXG4gIGlmIChmb3VuZCkge1xuICAgIGFycmF5LnB1c2goZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZm91bmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wcmVzcyhhcnJheSwgY2FsbGJhY2spIHtcbiAgbGV0IGluZGV4MSA9IDAsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKGluZGV4MSA8IGxlbmd0aCkge1xuICAgIGNvbnN0IGVsZW1lbnRCID0gYXJyYXlbaW5kZXgxXTtcblxuICAgIGZvciAobGV0IGluZGV4MiA9IGxlbmd0aCAtIDE7IGluZGV4MiA+IGluZGV4MTsgaW5kZXgyLS0pIHtcbiAgICAgIGNvbnN0IGVsZW1lbnRBID0gYXJyYXlbaW5kZXgyXSxcbiAgICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnRBLCBlbGVtZW50Qik7XG5cbiAgICAgIGlmICghcGFzc2VkKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgyLCAvLy9cbiAgICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICAgIGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGluZGV4MSsrO1xuXG4gICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lKGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheSA9IFtcbiAgICAuLi5hcnJheUEsXG4gICAgLi4uYXJyYXlCXG4gIF07XG5cbiAgY29tcHJlc3MoYXJyYXksIGNhbGxiYWNrKTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXZlcnNlKGFycmF5KSB7XG4gIGFycmF5ID0gWyAvLy9cbiAgICAuLi5hcnJheVxuICBdLnJldmVyc2UoKTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdWdtZW50KGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBhcnJheUIuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBhcnJheUEucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VwYXJhdGUoYXJyYXksIGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBhcnJheS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIHBhc3NlZCA/XG4gICAgICBhcnJheUEucHVzaChlbGVtZW50KSA6XG4gICAgICAgIGFycmF5Qi5wdXNoKGVsZW1lbnQpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRmluZChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNGaW5kKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgICBcbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNFdmVyeShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRXZlcnkoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNSZWR1Y2UoYXJyYXksIGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgbGV0IHZhbHVlID0gaW5pdGlhbFZhbHVlOyAvLy9cblxuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgdmFsdWUgPSBjYWxsYmFjayh2YWx1ZSwgZWxlbWVudCwgaW5kZXgpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzUmVkdWNlKGFycmF5LCBjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gIGxldCB2YWx1ZSA9IGluaXRpYWxWYWx1ZTsgLy8vXG5cbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgdmFsdWUgPSBjYWxsYmFjayh2YWx1ZSwgZWxlbWVudCwgaW5kZXgpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRmluZEluZGV4KGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gLTE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNGaW5kSW5kZXgoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGZpcnN0LFxuICBzZWNvbmQsXG4gIHRoaXJkLFxuICBmb3VydGgsXG4gIGZpZnRoLFxuICBzaXh0aCxcbiAgc2V2ZW50aCxcbiAgZWlnaHRoLFxuICBuaW50aCxcbiAgZmlyc3RMYXN0LFxuICBzZWNvbmRMYXN0LFxuICB0aGlyZExhc3QsXG4gIGZvdXJ0aExhc3QsXG4gIGZpZnRoTGFzdCxcbiAgc2l4dGhMYXN0LFxuICBzZXZlbnRoTGFzdCxcbiAgZWlnaHRoTGFzdCxcbiAgbmludGhMYXN0LFxuICBsYXN0LFxuICBoZWFkLFxuICB0YWlsLFxuICBiYWNrLFxuICBmcm9udCxcbiAgcHVzaCxcbiAgdW5zaGlmdCxcbiAgY29uY2F0LFxuICBjbGVhcixcbiAgY29weSxcbiAgbWVyZ2UsXG4gIG1hdGNoLFxuICBjb21wYXJlLFxuICBjb3JyZWxhdGUsXG4gIHJlc29sdmUsXG4gIGZpbmQsXG4gIHJlcGxhY2UsXG4gIHNwbGljZSxcbiAgZmlsdGVyLFxuICBwcnVuZSxcbiAgZXh0cmFjdCxcbiAgcGF0Y2gsXG4gIGNvbXByZXNzLFxuICBjb21iaW5lLFxuICByZXZlcnNlLFxuICBhdWdtZW50LFxuICBzZXBhcmF0ZSxcbiAgZm9yd2FyZHNGaW5kLFxuICBiYWNrd2FyZHNGaW5kLFxuICBmb3J3YXJkc1NvbWUsXG4gIGJhY2t3YXJkc1NvbWUsXG4gIGZvcndhcmRzRXZlcnksXG4gIGJhY2t3YXJkc0V2ZXJ5LFxuICBmb3J3YXJkc1JlZHVjZSxcbiAgYmFja3dhcmRzUmVkdWNlLFxuICBmb3J3YXJkc0ZvckVhY2gsXG4gIGJhY2t3YXJkc0ZvckVhY2gsXG4gIGZvcndhcmRzRmluZEluZGV4LFxuICBiYWNrd2FyZHNGaW5kSW5kZXhcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQsIGxhc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdGhOYW1lKHBhdGgpIHtcbiAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXlxcLy8sIEVNUFRZX1NUUklORykucmVwbGFjZSgvXFwvJC8sIEVNUFRZX1NUUklORyk7IC8vL1xuXG4gIGNvbnN0IHBhdGhOYW1lID0gKC9cXC8vLnRlc3QocGF0aCkgPT09IGZhbHNlKTtcblxuICByZXR1cm4gcGF0aE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdGhUb3Btb3N0TmFtZShwYXRoKSB7XG4gIGNvbnN0IHBhdGhOYW1lID0gaXNQYXRoTmFtZShwYXRoKSxcbiAgICAgICAgcGF0aEFic29sdXRlUGF0aCA9IGlzUGF0aEFic29sdXRlUGF0aChwYXRoKSxcbiAgICAgICAgcGF0aFRvcG1vc3ROYW1lID0gKHBhdGhOYW1lICYmIHBhdGhBYnNvbHV0ZVBhdGgpO1xuXG4gIHJldHVybiBwYXRoVG9wbW9zdE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdGhSZWxhdGl2ZVBhdGgocGF0aCkge1xuICBjb25zdCBwYXRoUmVsYXRpdmVQYXRoID0gIS9eXFwvLy50ZXN0KHBhdGgpO1xuXG4gIHJldHVybiBwYXRoUmVsYXRpdmVQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXRoQWJzb2x1dGVQYXRoKHBhdGgpIHtcbiAgY29uc3QgcGF0aEFic29sdXRlUGF0aCA9IC9eXFwvLy50ZXN0KHBhdGgpO1xuXG4gIHJldHVybiBwYXRoQWJzb2x1dGVQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUb3Btb3N0TmFtZUluQWJzb2x1dGVQYXRoKHRvcG1vc3ROYW1lLCBhYnNvbHV0ZVBhdGgpIHtcbiAgY29uc3QgcmVnRXhwID0gbmV3IFJlZ0V4cChgXiR7dG9wbW9zdE5hbWV9KD86XFxcXC8uKyk/JGApLFxuICAgICAgICB0b3Btb3N0TmFtZUluQWJzb2x1dGVQYXRoID0gcmVnRXhwLnRlc3QoYWJzb2x1dGVQYXRoKTtcblxuICByZXR1cm4gdG9wbW9zdE5hbWVJbkFic29sdXRlUGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZVBhdGhzKHBhdGgsIHJlbGF0aXZlUGF0aCkge1xuICBsZXQgY29tYmluZWRQYXRoID0gbnVsbDtcblxuICBjb25zdCBwYXRoTmFtZXMgPSBwYXRoLnNwbGl0KC9cXC8vKSxcbiAgICAgICAgcmVsYXRpdmVQYXRoTmFtZXMgPSByZWxhdGl2ZVBhdGguc3BsaXQoL1xcLy8pO1xuXG4gIGxldCBsYXN0UGF0aE5hbWUsXG4gICAgICBmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPSBmaXJzdChyZWxhdGl2ZVBhdGhOYW1lcyk7XG5cbiAgaWYgKGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9PT0gXCIuXCIpIHtcbiAgICByZWxhdGl2ZVBhdGhOYW1lcy5zaGlmdCgpO1xuICB9XG5cbiAgZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID0gZmlyc3QocmVsYXRpdmVQYXRoTmFtZXMpO1xuICBsYXN0UGF0aE5hbWUgPSBsYXN0KHBhdGhOYW1lcyk7XG5cbiAgd2hpbGUgKChmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPT09IFwiLi5cIikgJiYgKGxhc3RQYXRoTmFtZSAhPT0gdW5kZWZpbmVkKSkge1xuICAgIHJlbGF0aXZlUGF0aE5hbWVzLnNoaWZ0KCk7XG4gICAgcGF0aE5hbWVzLnBvcCgpO1xuXG4gICAgZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID0gZmlyc3QocmVsYXRpdmVQYXRoTmFtZXMpO1xuICAgIGxhc3RQYXRoTmFtZSA9IGxhc3QocGF0aE5hbWVzKTtcbiAgfVxuXG4gIGlmIChsYXN0UGF0aE5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGNvbWJpbmVkUGF0aE5hbWVzID0gW10uY29uY2F0KHBhdGhOYW1lcykuY29uY2F0KHJlbGF0aXZlUGF0aE5hbWVzKTtcblxuICAgIGNvbWJpbmVkUGF0aCA9IGNvbWJpbmVkUGF0aE5hbWVzLmpvaW4oXCIvXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNvbWJpbmVkUGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdGVuYXRlUGF0aHMocGF0aCwgcmVsYXRpdmVQYXRoLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgbGV0IGNvbmNhdGVuYXRlZFBhdGg7XG5cbiAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXFwvJC8sIEVNUFRZX1NUUklORyk7ICAvLy9cblxuICBjb25jYXRlbmF0ZWRQYXRoID0gYCR7cGF0aH0vJHtyZWxhdGl2ZVBhdGh9YDtcblxuICBjb25zdCByZW1haW5pbmdBQXJndW1lbnRzTGVuZ3RoID0gcmVtYWluaW5nQXJndW1lbnRzLmxlbmd0aDtcblxuICBpZiAocmVtYWluaW5nQUFyZ3VtZW50c0xlbmd0aCA+IDApIHtcbiAgICBjb25zdCBwYXRoID0gY29uY2F0ZW5hdGVkUGF0aCwgIC8vL1xuICAgICAgICAgIHJlbGF0aXZlUGF0aCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5zaGlmdCgpO1xuXG4gICAgY29uY2F0ZW5hdGVkUGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocGF0aCwgcmVsYXRpdmVQYXRoLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICB9XG5cbiAgcmV0dXJuIGNvbmNhdGVuYXRlZFBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3R0b21tb3N0TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IGJvdHRvbW1vc3ROYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXi4qXFwvKFteXFwvXStcXC8/KSQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgYm90dG9tbW9zdE5hbWUgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIGJvdHRvbW1vc3ROYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aChwYXRoKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKC4rKVxcL1teXFwvXStcXC8/JC8pLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeVBhdGggPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14oW15cXC9dKylcXC8uKyQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKC4qKVxcL1teXFwvXStcXC8/JC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gc2Vjb25kTWF0Y2g7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL15bXlxcL10rXFwvKC4rKSQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHNlY29uZE1hdGNoO1xuICB9XG5cbiAgcmV0dXJuIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaXNQYXRoTmFtZSxcbiAgaXNQYXRoVG9wbW9zdE5hbWUsXG4gIGlzUGF0aFJlbGF0aXZlUGF0aCxcbiAgaXNQYXRoQWJzb2x1dGVQYXRoLFxuICBpc1RvcG1vc3ROYW1lSW5BYnNvbHV0ZVBhdGgsXG4gIGNvbWJpbmVQYXRocyxcbiAgY29uY2F0ZW5hdGVQYXRocyxcbiAgYm90dG9tbW9zdE5hbWVGcm9tUGF0aCxcbiAgdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aCxcbiAgdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCxcbiAgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoLFxuICBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGhcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEFSUkFZX0pTT05fVFlQRSxcbiAgICAgICAgIE9CSkVDVF9KU09OX1RZUEUsXG4gICAgICAgICBTVFJJTkdfSlNPTl9UWVBFLFxuICAgICAgICAgTlVNQkVSX0pTT05fVFlQRSxcbiAgICAgICAgIEJPT0xFQU5fSlNPTl9UWVBFLFxuICAgICAgICAgUFJJTUlUSVZFX0pTT05fVFlQRSB9IGZyb20gXCIuLi9qc29uVHlwZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVPZihqc29uKSB7XG4gIGxldCB0eXBlO1xuXG4gIGNvbnN0IGFycmF5ID0gaXNBcnJheShqc29uKSxcbiAgICAgICAgb2JqZWN0ID0gaXNPYmplY3QoanNvbiksXG4gICAgICAgIHByaW1pdGl2ZSA9IGlzUHJpbWl0aXZlKGpzb24pO1xuXG4gIGlmIChmYWxzZSkge1xuICAgIC8vL1xuICB9IGVsc2UgaWYgKGFycmF5KSB7XG4gICAgdHlwZSA9IEFSUkFZX0pTT05fVFlQRTtcbiAgfSBlbHNlIGlmIChvYmplY3QpIHtcbiAgICB0eXBlID0gT0JKRUNUX0pTT05fVFlQRTtcbiAgfSBlbHNlIGlmIChwcmltaXRpdmUpIHtcbiAgICB0eXBlID0gUFJJTUlUSVZFX0pTT05fVFlQRTtcbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdWxsKGpzb24pIHtcbiAgY29uc3QgX251bGwgPSAoanNvbiA9PT0gbnVsbCk7XG5cbiAgcmV0dXJuIF9udWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheShqc29uKSB7XG4gIGNvbnN0IGFycmF5ID0gQXJyYXkuaXNBcnJheShqc29uKTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdChqc29uKSB7XG4gIGNvbnN0IGFycmF5ID0gaXNBcnJheShqc29uKSxcbiAgICAgICAgcHJpbWl0aXZlID0gaXNQcmltaXRpdmUoanNvbiksXG4gICAgICAgIG9iamVjdCA9ICghYXJyYXkgJiYgIXByaW1pdGl2ZSk7XG5cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKGpzb24pIHtcbiAgY29uc3Qgc3RyaW5nID0gKCh0eXBlb2YganNvbikgPT09IFNUUklOR19KU09OX1RZUEUpO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlcihqc29uKSB7XG4gIGNvbnN0IG51bWJlciA9ICgodHlwZW9mIGpzb24pID09PSBOVU1CRVJfSlNPTl9UWVBFKTtcblxuICByZXR1cm4gbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNCb29sZWFuKGpzb24pIHtcbiAgY29uc3QgYm9vbGVhbiA9ICgodHlwZW9mIGpzb24pID09PSBCT09MRUFOX0pTT05fVFlQRSk7XG5cbiAgcmV0dXJuIGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1ByaW1pdGl2ZShqc29uKSB7XG4gIGNvbnN0IF9udWxsID0gaXNOdWxsKGpzb24pLFxuICAgICAgICBzdHJpbmcgPSBpc1N0cmluZyhqc29uKSxcbiAgICAgICAgbnVtYmVyID0gaXNOdW1iZXIoanNvbiksXG4gICAgICAgIGJvb2xlYW4gPSBpc0Jvb2xlYW4oanNvbiksXG4gICAgICAgIHByaW1pdGl2ZSA9IChfbnVsbCB8fCBzdHJpbmcgfHwgbnVtYmVyIHx8IGJvb2xlYW4pO1xuXG4gIHJldHVybiBwcmltaXRpdmU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdHlwZU9mLFxuICBpc051bGwsXG4gIGlzQXJyYXksXG4gIGlzT2JqZWN0LFxuICBpc1N0cmluZyxcbiAgaXNOdW1iZXIsXG4gIGlzQm9vbGVhbixcbiAgaXNQcmltaXRpdmVcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IENPTE9OX0NIQVJBQ1RFUiwgQU1QRVJTQU5EX0NIQVJBQ1RFUiB9IGZyb20gXCIuLi9jaGFyYWN0ZXJzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvdmVyd3JpdGUoaGVhZGVycywgbmFtZSwgdmFsdWUpIHtcbiAgY29uc3QgbG93ZXJDYXNlTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgZXhpc3RpbmdOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhlYWRlcnMpLCAgLy8vXG4gICAgICAgIGV4aXN0aW5nTmFtZSA9IGV4aXN0aW5nTmFtZXMuZmluZCgoZXhpc3RpbmdOYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgZXhpc3RpbmdMb3dlckNhc2VOYW1lID0gZXhpc3RpbmdOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICBpZiAoZXhpc3RpbmdMb3dlckNhc2VOYW1lID09PSBsb3dlckNhc2VOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pIHx8IG51bGw7XG5cbiAgaWYgKGV4aXN0aW5nTmFtZSAhPT0gbnVsbCkge1xuICAgIGhlYWRlcnNbZXhpc3RpbmdOYW1lXSA9IHZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmRlcndyaXRlKGhlYWRlcnMsIG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IGxvd2VyQ2FzZU5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCksXG4gICAgICAgIGV4aXN0aW5nTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoZWFkZXJzKSwgIC8vL1xuICAgICAgICBleGlzdGluZ05hbWUgPSBleGlzdGluZ05hbWVzLmZpbmQoKGV4aXN0aW5nTmFtZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGV4aXN0aW5nTG93ZXJDYXNlTmFtZSA9IGV4aXN0aW5nTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgaWYgKGV4aXN0aW5nTG93ZXJDYXNlTmFtZSA9PT0gbG93ZXJDYXNlTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSB8fCBudWxsO1xuXG4gIGlmIChleGlzdGluZ05hbWUgPT09IG51bGwpIHtcbiAgICBoZWFkZXJzW25hbWVdID0gdmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcnRGcm9tSG9zdChob3N0KSB7XG4gIGxldCBwb3J0O1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBob3N0Lm1hdGNoKC9eaHR0cHM/OlxcL1xcLyhbXlxcL10rKS8pLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgaW5kZXggPSBzZWNvbmRNYXRjaC5pbmRleE9mKENPTE9OX0NIQVJBQ1RFUik7XG5cbiAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgIGNvbnN0IHNlY3VyZSA9IHNlY3VyZUZyb21Ib3N0KGhvc3QpO1xuXG4gICAgcG9ydCA9IHNlY3VyZSA/IDQ0MyA6IDgwOyAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzdGFydCA9IGluZGV4ICsgMSxcbiAgICAgICAgICBwb3J0U3RyaW5nID0gc2Vjb25kTWF0Y2guc3Vic3RyaW5nKHN0YXJ0KTtcblxuICAgIHBvcnQgPSBOdW1iZXIocG9ydFN0cmluZyk7XG4gIH1cblxuICByZXR1cm4gcG9ydDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY3VyZUZyb21Ib3N0KGhvc3QpIHtcbiAgY29uc3Qgc2VjdXJlID0gL15odHRwczpcXC9cXC8vLnRlc3QoaG9zdCk7XG5cbiAgcmV0dXJuIHNlY3VyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhvc3RuYW1lRnJvbUhvc3QoaG9zdCkge1xuICBjb25zdCBtYXRjaGVzID0gaG9zdC5tYXRjaCgvXmh0dHBzPzpcXC9cXC8oW146XFwvXSspLyksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICBob3N0bmFtZSA9IHNlY29uZE1hdGNoOyAvLy9cblxuICByZXR1cm4gaG9zdG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeVN0cmluZ0Zyb21RdWVyeShxdWVyeSkge1xuICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKHF1ZXJ5KSxcbiAgICAgICAgbmFtZXNMZW5ndGggPSBuYW1lcy5sZW5ndGgsXG4gICAgICAgIGxhc3RJbmRleCA9IG5hbWVzTGVuZ3RoIC0gMSxcbiAgICAgICAgcXVlcnlTdHJpbmcgPSBuYW1lcy5yZWR1Y2UoKHF1ZXJ5U3RyaW5nLCBuYW1lLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gcXVlcnlbbmFtZV0sXG4gICAgICAgICAgICAgICAgZW5jb2RlZE5hbWUgPSBlbmNvZGVVUklDb21wb25lbnQobmFtZSksXG4gICAgICAgICAgICAgICAgZW5jb2RlZFZhbHVlID0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSxcbiAgICAgICAgICAgICAgICBhbXBlcnNhbmRPck5vdGhpbmcgPSAoaW5kZXggIT09IGxhc3RJbmRleCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQU1QRVJTQU5EX0NIQVJBQ1RFUiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORztcbiAgXG4gICAgICAgICAgcXVlcnlTdHJpbmcgKz0gYCR7ZW5jb2RlZE5hbWV9PSR7ZW5jb2RlZFZhbHVlfSR7YW1wZXJzYW5kT3JOb3RoaW5nfWA7XG4gIFxuICAgICAgICAgIHJldHVybiBxdWVyeVN0cmluZztcbiAgICAgICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gcXVlcnlTdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxGcm9tSG9zdFVSSUFuZFF1ZXJ5KGhvc3QsIHVyaSwgcXVlcnkpIHtcbiAgY29uc3QgcXVlcnlTdHJpbmcgPSBxdWVyeVN0cmluZ0Zyb21RdWVyeShxdWVyeSksXG4gICAgICAgIHVybCA9IChxdWVyeVN0cmluZyA9PT0gRU1QVFlfU1RSSU5HKSA/XG4gICAgICAgICAgICAgICAgYCR7aG9zdH0ke3VyaX1gIDpcbiAgICAgICAgICAgICAgICAgIGAke2hvc3R9JHt1cml9PyR7cXVlcnlTdHJpbmd9YDtcblxuICByZXR1cm4gdXJsO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG92ZXJ3cml0ZSxcbiAgdW5kZXJ3cml0ZSxcbiAgcG9ydEZyb21Ib3N0LFxuICBzZWN1cmVGcm9tSG9zdCxcbiAgaG9zdG5hbWVGcm9tSG9zdCxcbiAgcXVlcnlTdHJpbmdGcm9tUXVlcnksXG4gIHVybEZyb21Ib3N0VVJJQW5kUXVlcnlcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJsZW4oc3RyaW5nKSB7XG4gIGxldCBsZW5ndGggPSAwO1xuXG4gIGZvciAoY29uc3QgXyBvZiBzdHJpbmcpIHtcbiAgICBsZW5ndGgrKztcbiAgfVxuXG4gIHJldHVybiBsZW5ndGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJjbXAoc3RyaW5nQSwgc3RyaW5nQikge1xuICBsZXQgZGlmZmVyZW5jZSA9IDA7XG5cbiAgbGV0IG5haXZlSW5kZXhBID0gMCxcbiAgICAgIG5haXZlSW5kZXhCID0gMDtcblxuICBjb25zdCBzdHJpbmdBTmFpdmVMZW5ndGggPSBzdHJpbmdBLmxlbmd0aCxcbiAgICAgICAgc3RyaW5nQk5haXZlTGVuZ3RoID0gc3RyaW5nQi5sZW5ndGg7XG5cbiAgd2hpbGUgKChuYWl2ZUluZGV4QSA8IHN0cmluZ0FOYWl2ZUxlbmd0aCkgfHwgKG5haXZlSW5kZXhCIDwgc3RyaW5nQk5haXZlTGVuZ3RoKSkge1xuICAgIGNvbnN0IGNvZGVQb2ludEEgPSAobmFpdmVJbmRleEEgPCBzdHJpbmdBTmFpdmVMZW5ndGgpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmdBLmNvZGVQb2ludEF0KG5haXZlSW5kZXhBKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgIGNvZGVQb2ludEIgPSAobmFpdmVJbmRleEIgPCBzdHJpbmdCTmFpdmVMZW5ndGgpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmdCLmNvZGVQb2ludEF0KG5haXZlSW5kZXhCKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAwO1xuXG4gICAgZGlmZmVyZW5jZSA9IChjb2RlUG9pbnRBIC0gY29kZVBvaW50Qik7XG5cbiAgICBpZiAoZGlmZmVyZW5jZSAhPT0gMCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgbmFpdmVJbmRleEEgKz0gKGNvZGVQb2ludEEgPiAweEZGRkYpID9cbiAgICAgICAgICAgICAgICAyIDpcbiAgICAgICAgICAgICAgICAgIDE7XG5cbiAgICBuYWl2ZUluZGV4QiArPSAoY29kZVBvaW50QiA+IDB4RkZGRikgP1xuICAgICAgICAgICAgICAgIDIgOlxuICAgICAgICAgICAgICAgICAgMTtcbiAgfVxuXG4gIHJldHVybiBkaWZmZXJlbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhPZihzdHJpbmcsIHNlYXJjaFN0cmluZykge1xuICBsZXQgaW5kZXggPSAtMTtcblxuICBjb25zdCBzZWFyY2hTdHJpbmdMZW5ndGggPSBzZWFyY2hTdHJpbmcubGVuZ3RoO1xuXG4gIGlmIChzZWFyY2hTdHJpbmdMZW5ndGggPiAwKSB7XG4gICAgY29uc3Qgb3V0ZXJOYWl2ZUluZGV4ID0gc3RyaW5nLmluZGV4T2Yoc2VhcmNoU3RyaW5nKTtcblxuICAgIGlmIChvdXRlck5haXZlSW5kZXggPiAtMSkge1xuICAgICAgaW5kZXggPSAwO1xuXG4gICAgICBsZXQgaW5uZXJOYWl2ZUluZGV4ID0gMDtcblxuICAgICAgd2hpbGUgKGlubmVyTmFpdmVJbmRleCA8IG91dGVyTmFpdmVJbmRleCkge1xuICAgICAgICBjb25zdCBjaGFyQ29kZSA9IHN0cmluZy5jaGFyQ29kZUF0KGlubmVyTmFpdmVJbmRleCk7XG5cbiAgICAgICAgaW5uZXJOYWl2ZUluZGV4ICs9ICgoY2hhckNvZGUgPj0gMHhEODAwKSAmJiAoY2hhckNvZGUgPD0gMHhEQkZGKSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxO1xuXG4gICAgICAgIGluZGV4Kys7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGluZGV4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Vic3RyaW5nKHN0cmluZywgc3RhcnQsIGVuZCA9IEluZmluaXR5KSB7XG4gIGNvbnN0IHN0cmluZ05haXZlTGVuZ3RoID0gc3RyaW5nLmxlbmd0aDtcblxuICBsZXQgaW5kZXggPSAwLFxuICAgICAgbmFpdmVJbmRleCA9IDAsXG4gICAgICBuYWl2ZVN0YXJ0ID0gc3RyaW5nTmFpdmVMZW5ndGgsIC8vL1xuICAgICAgbmFpdmVFbmQgPSBzdHJpbmdOYWl2ZUxlbmd0aDsgLy8vXG5cbiAgd2hpbGUgKG5haXZlSW5kZXggPCBzdHJpbmdOYWl2ZUxlbmd0aCkge1xuICAgIGlmIChpbmRleCA9PT0gc3RhcnQpIHtcbiAgICAgIG5haXZlU3RhcnQgPSBuYWl2ZUluZGV4OyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKGluZGV4ID09PSBlbmQpIHtcbiAgICAgIG5haXZlRW5kID0gbmFpdmVJbmRleDsgIC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb25zdCBjaGFyQ29kZSA9IHN0cmluZy5jaGFyQ29kZUF0KG5haXZlSW5kZXgpO1xuXG4gICAgbmFpdmVJbmRleCArPSAoKGNoYXJDb2RlID49IDB4RDgwMCkgJiYgKGNoYXJDb2RlIDw9IDB4REJGRikpID9cbiAgICAgICAgICAgICAgICAgICAgMiA6XG4gICAgICAgICAgICAgICAgICAgICAgMTtcblxuICAgIGluZGV4Kys7XG4gIH1cblxuICBpZiAoaW5kZXggPT09IHN0YXJ0KSB7XG4gICAgbmFpdmVTdGFydCA9IG5haXZlSW5kZXg7ICAvLy9cbiAgfVxuXG4gIGlmIChpbmRleCA9PT0gZW5kKSB7XG4gICAgbmFpdmVFbmQgPSBuYWl2ZUluZGV4OyAgLy8vXG4gIH1cblxuICBjb25zdCBzdWJzdHJpbmcgPSBzdHJpbmcuc3Vic3RyaW5nKG5haXZlU3RhcnQsIG5haXZlRW5kKTtcblxuICByZXR1cm4gc3Vic3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmdVcHBlckNhc2Uoc3RyaW5nKSB7XG4gIGNvbnN0IHVwcGVyQ2FzZVN0cmluZyA9IHN0cmluZy50b1VwcGVyQ2FzZSgpLFxuICAgICAgICBzdHJpbmdVcHBlckNhc2UgPSAoc3RyaW5nID09PSB1cHBlckNhc2VTdHJpbmcpO1xuXG4gIHJldHVybiBzdHJpbmdVcHBlckNhc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc3RyY21wLFxuICBzdHJsZW4sXG4gIGluZGV4T2YsXG4gIHN1YnN0cmluZyxcbiAgaXNTdHJpbmdVcHBlckNhc2Vcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtaWdyYXRlKGpzb24sIG1pZ3JhdGlvbk1hcCwgbGF0ZXN0VmVyc2lvbikge1xuICBsZXQgeyB2ZXJzaW9uIH0gPSBqc29uO1xuXG4gIHdoaWxlICh2ZXJzaW9uICE9PSBsYXRlc3RWZXJzaW9uKSB7XG4gICAgY29uc3QgbWlncmF0ZUZ1bmN0aW9uID0gbWlncmF0aW9uTWFwW3ZlcnNpb25dO1xuXG4gICAganNvbiA9IG1pZ3JhdGVGdW5jdGlvbihqc29uKTtcblxuICAgICh7IHZlcnNpb24gfSA9IGpzb24pO1xuICB9XG5cbiAgcmV0dXJuIGpzb247XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWlncmF0ZVxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3aGlsc3Qob3BlcmF0aW9uLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IGluZGV4ID0gY291bnQ7ICAvLy9cclxuXHJcbiAgICBvcGVyYXRpb24obmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9yRWFjaChhcnJheSwgb3BlcmF0aW9uLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcblxyXG4gICAgICBvcGVyYXRpb24oZWxlbWVudCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VxdWVuY2Uob3BlcmF0aW9ucywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IG9wZXJhdGlvbnMubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIG9wZXJhdGlvbiA9IG9wZXJhdGlvbnNbaW5kZXhdO1xyXG5cclxuICAgICAgb3BlcmF0aW9uKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50dWFsbHkob3BlcmF0aW9ucywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IG9wZXJhdGlvbnMubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGlmIChsZW5ndGggPT09IDApIHtcclxuICAgIGRvbmUoKTtcclxuXHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBsZXQgY291bnQgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvcGVyYXRpb25zLmZvckVhY2goKG9wZXJhdGlvbiwgaW5kZXgpID0+IHtcclxuICAgIG9wZXJhdGlvbihuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXBlYXRlZGx5KG9wZXJhdGlvbiwgbGVuZ3RoLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgaWYgKGxlbmd0aCA9PT0gMCkge1xyXG4gICAgZG9uZSgpO1xyXG5cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGxldCBjb3VudCA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcclxuICAgIG9wZXJhdGlvbihuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNGb3JFYWNoKGFycmF5LCBvcGVyYXRpb24sIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICAgIG9wZXJhdGlvbihlbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBvcGVyYXRpb24sIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gbGVuZ3RoO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQtLTtcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IC0xKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICAgIG9wZXJhdGlvbihlbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICB3aGlsc3QsXHJcbiAgZm9yRWFjaCxcclxuICBzZXF1ZW5jZSxcclxuICBldmVudHVhbGx5LFxyXG4gIHJlcGVhdGVkbHksXHJcbiAgZm9yd2FyZHNGb3JFYWNoLFxyXG4gIGJhY2t3YXJkc0ZvckVhY2hcclxufTtcclxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBTVFJJTkcsIEZVTkNUSU9OIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgR0VUX01FVEhPRCwgUE9TVF9NRVRIT0QgfSBmcm9tIFwiLi4vbWV0aG9kc1wiO1xuaW1wb3J0IHsgQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUgfSBmcm9tIFwiLi4vY29udGVudFR5cGVzXCI7XG5pbXBvcnQgeyBBQ0NFUFRfSEVBREVSLCBDT05URU5UX1RZUEVfSEVBREVSIH0gZnJvbSBcIi4uL2hlYWRlcnNcIjtcbmltcG9ydCB7IHVuZGVyd3JpdGUsIHVybEZyb21Ib3N0VVJJQW5kUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2h0dHBcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldChob3N0LCB1cmksIHF1ZXJ5LCBoZWFkZXJzLCByZXNwb25zZVR5cGUsIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2YgaGVhZGVycyA9PT0gRlVOQ1RJT04pIHtcbiAgICBjYWxsYmFjayA9IGhlYWRlcnM7IC8vL1xuXG4gICAgcmVzcG9uc2VUeXBlID0gbnVsbDtcblxuICAgIGhlYWRlcnMgPSB7fTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcmVzcG9uc2VUeXBlID09PSBGVU5DVElPTikge1xuICAgIGNhbGxiYWNrID0gcmVzcG9uc2VUeXBlOyAgLy8vXG5cbiAgICBpZiAodHlwZW9mIGhlYWRlcnMgPT09IFNUUklORykge1xuICAgICAgcmVzcG9uc2VUeXBlID0gaGVhZGVyczsgLy8vXG5cbiAgICAgIGhlYWRlcnMgPSB7fTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzcG9uc2VUeXBlID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG1ldGhvZCA9IEdFVF9NRVRIT0QsXG4gICAgICAgIGFjY2VwdCA9IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFLFxuICAgICAgICBjb250ZW50ID0gbnVsbDtcblxuICB1bmRlcndyaXRlQWNjZXB0SGVhZGVyKGhlYWRlcnMsIGFjY2VwdCk7XG5cbiAgcmVxdWVzdChob3N0LCB1cmksIHF1ZXJ5LCBtZXRob2QsIGNvbnRlbnQsIGhlYWRlcnMsIHJlc3BvbnNlVHlwZSwgY2FsbGJhY2spO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9zdChob3N0LCB1cmksIHF1ZXJ5LCBjb250ZW50LCBoZWFkZXJzLCByZXNwb25zZVR5cGUsIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2YgaGVhZGVycyA9PT0gRlVOQ1RJT04pIHtcbiAgICBjYWxsYmFjayA9IGhlYWRlcnM7IC8vL1xuXG4gICAgcmVzcG9uc2VUeXBlID0gbnVsbDtcblxuICAgIGhlYWRlcnMgPSB7fTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcmVzcG9uc2VUeXBlID09PSBGVU5DVElPTikge1xuICAgIGNhbGxiYWNrID0gcmVzcG9uc2VUeXBlOyAgLy8vXG5cbiAgICBpZiAodHlwZW9mIGhlYWRlcnMgPT09IFNUUklORykge1xuICAgICAgcmVzcG9uc2VUeXBlID0gaGVhZGVyczsgLy8vXG5cbiAgICAgIGhlYWRlcnMgPSB7fTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzcG9uc2VUeXBlID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG1ldGhvZCA9IFBPU1RfTUVUSE9ELFxuICAgICAgICBhY2NlcHQgPSBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRSxcbiAgICAgICAgY29udGVudFR5cGUgPSBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRTtcblxuICB1bmRlcndyaXRlQWNjZXB0SGVhZGVyKGhlYWRlcnMsIGFjY2VwdCk7XG5cbiAgdW5kZXJ3cml0ZUNvbnRlbnRUeXBlSGVhZGVyKGhlYWRlcnMsIGNvbnRlbnRUeXBlKTtcblxuICByZXF1ZXN0KGhvc3QsIHVyaSwgcXVlcnksIG1ldGhvZCwgY29udGVudCwgaGVhZGVycywgcmVzcG9uc2VUeXBlLCBjYWxsYmFjayk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXF1ZXN0KGhvc3QsIHVyaSwgcXVlcnksIG1ldGhvZCwgY29udGVudCwgaGVhZGVycywgcmVzcG9uc2VUeXBlLCBjYWxsYmFjaykge1xuICBjb25zdCB1cmwgPSB1cmxGcm9tSG9zdFVSSUFuZFF1ZXJ5KGhvc3QsIHVyaSwgcXVlcnkpLFxuICAgICAgICBhY2NlcHQgPSBoZWFkZXJzW0FDQ0VQVF9IRUFERVJdIHx8IG51bGwsXG4gICAgICAgIGNvbnRlbnRUeXBlID0gaGVhZGVyc1tDT05URU5UX1RZUEVfSEVBREVSXSB8fCBudWxsLFxuICAgICAgICB4bWxIdHRwUmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gIGlmIChjb250ZW50VHlwZSA9PT0gQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUpIHtcbiAgICBjb25zdCBqc29uID0gY29udGVudCwgIC8vL1xuICAgICAgICAgIGpzb25TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShqc29uKTtcblxuICAgIGNvbnRlbnQgPSBqc29uU3RyaW5nOyAgLy8vXG4gIH1cblxuICBpZiAocmVzcG9uc2VUeXBlICE9PSBudWxsKSB7XG4gICAgT2JqZWN0LmFzc2lnbih4bWxIdHRwUmVxdWVzdCwge1xuICAgICAgcmVzcG9uc2VUeXBlXG4gICAgfSk7XG4gIH1cblxuICB4bWxIdHRwUmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgeyByZWFkeVN0YXRlLCBzdGF0dXMsIHJlc3BvbnNlIH0gPSB4bWxIdHRwUmVxdWVzdCxcbiAgICAgICAgICBzdGF0dXNDb2RlID0gc3RhdHVzO1xuXG4gICAgaWYgKHJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgbGV0IGNvbnRlbnQgPSByZXNwb25zZTtcblxuICAgICAgaWYgKGFjY2VwdCA9PT0gQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBqc29uU3RyaW5nID0gY29udGVudCwgIC8vL1xuICAgICAgICAgICAgICAgIGpzb24gPSBKU09OLnBhcnNlKGpzb25TdHJpbmcpO1xuXG4gICAgICAgICAgY29udGVudCA9IGpzb247ICAvLy9cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb250ZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjYWxsYmFjayhjb250ZW50LCBzdGF0dXNDb2RlKTtcbiAgICB9XG4gIH07XG5cbiAgeG1sSHR0cFJlcXVlc3Qub3BlbihtZXRob2QsIHVybCk7XG5cbiAgaWYgKGFjY2VwdCAhPT0gbnVsbCkge1xuICAgIHhtbEh0dHBSZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoQUNDRVBUX0hFQURFUiwgYWNjZXB0KTtcbiAgfVxuXG4gIGlmIChjb250ZW50VHlwZSAhPT0gbnVsbCkge1xuICAgIHhtbEh0dHBSZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoQ09OVEVOVF9UWVBFX0hFQURFUiwgY29udGVudFR5cGUpO1xuICB9XG5cbiAgKGNvbnRlbnQgIT09IG51bGwpID9cbiAgICB4bWxIdHRwUmVxdWVzdC5zZW5kKGNvbnRlbnQpIDpcbiAgICAgIHhtbEh0dHBSZXF1ZXN0LnNlbmQoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXQsXG4gIHBvc3QsXG4gIHJlcXVlc3Rcbn1cblxuZnVuY3Rpb24gdW5kZXJ3cml0ZUFjY2VwdEhlYWRlcihoZWFkZXJzLCBhY2NlcHQpIHtcbiAgY29uc3QgbmFtZSA9IEFDQ0VQVF9IRUFERVIsICAvLy9cbiAgICAgICAgdmFsdWUgPSBhY2NlcHQ7IC8vL1xuXG4gIHVuZGVyd3JpdGUoaGVhZGVycywgbmFtZSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiB1bmRlcndyaXRlQ29udGVudFR5cGVIZWFkZXIoaGVhZGVycywgY29udGVudFRZcGUpIHtcbiAgY29uc3QgbmFtZSA9IENPTlRFTlRfVFlQRV9IRUFERVIsICAvLy9cbiAgICAgICAgdmFsdWUgPSBjb250ZW50VFlwZTsgLy8vXG5cbiAgdW5kZXJ3cml0ZShoZWFkZXJzLCBuYW1lLCB2YWx1ZSk7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgbGV2ZWxzIH0gZnJvbSBcIi4vbGV2ZWxzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG1ldGhvZHMgfSBmcm9tIFwiLi9tZXRob2RzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGhlYWRlcnMgfSBmcm9tIFwiLi9oZWFkZXJzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGtleUNvZGVzIH0gZnJvbSBcIi4va2V5Q29kZXNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZW5jb2RpbmdzIH0gZnJvbSBcIi4vZW5jb2RpbmdzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGpzb25UeXBlcyB9IGZyb20gXCIuL2pzb25UeXBlc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjaGFyYWN0ZXJzIH0gZnJvbSBcIi4vY2hhcmFjdGVyc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzdGF0dXNDb2RlcyB9IGZyb20gXCIuL3N0YXR1c0NvZGVzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbnRlbnRUeXBlcyB9IGZyb20gXCIuL2NvbnRlbnRUeXBlc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzdGF0dXNNZXNzYWdlcyB9IGZyb20gXCIuL3N0YXR1c01lc3NhZ2VzXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGF0aFV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9wYXRoXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGpzb25VdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvanNvblwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBodHRwVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2h0dHBcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc3RyaW5nVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB2ZXJzaW9uVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3ZlcnNpb25cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FzeW5jaHJvbm91c1wiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFqYXhVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvYWpheFwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuZXhwb3J0IGNvbnN0IHsgZmlyc3QsIHNlY29uZCwgdGhpcmQsIGZvdXJ0aCwgcHVzaCwgc2VwYXJhdGUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkKGFycmF5QSwgYXJyYXlCKSB7XG4gIGFycmF5Qi5mb3JFYWNoKChlbGVtZW50QikgPT4ge1xuICAgIGFycmF5QS5wdXNoKGVsZW1lbnRCKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwZXJtdXRlKGFycmF5LCBwbGFjZXMpIHtcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgICBjdXQgPSBsZW5ndGggLSBwbGFjZXMsXG4gICAgICAgIGxlYWRpbmdFbGVtZW50cyA9IGFycmF5LnNsaWNlKDAsIGN1dCksXG4gICAgICAgIHRyYWlsaW5nRWxlbWVudHMgPSBhcnJheS5zbGljZShjdXQpO1xuXG4gIGFycmF5ID0gWyAuLi50cmFpbGluZ0VsZW1lbnRzLCAuLi5sZWFkaW5nRWxlbWVudHMgXTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuKGFycmF5cykge1xuICByZXR1cm4gYXJyYXlzLnJlZHVjZSgoZWxlbWVudHMsIGFycmF5KSA9PiB7XG4gICAgZWxlbWVudHMgPSBlbGVtZW50cy5jb25jYXQoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xuICB9LCBbXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBndWFyYW50ZWUoYXJyYXlPckVsZW1lbnQpIHtcbiAgYXJyYXlPckVsZW1lbnQgPSBhcnJheU9yRWxlbWVudCB8fCBbXTtcblxuICByZXR1cm4gKGFycmF5T3JFbGVtZW50IGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgIGFycmF5T3JFbGVtZW50IDpcbiAgICAgICAgICAgICBbIGFycmF5T3JFbGVtZW50IF07XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEZVTkNUSU9OIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmltcG9ydCB7IGd1YXJhbnRlZSB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbGVtZW50IHtcbiAgZ2V0UHJvcGVydGllcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wZXJ0aWVzO1xuICB9XG5cbiAgZ2V0Q2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgfVxuXG4gIHNldENoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cykge1xuICAgIHRoaXMuY2hpbGRFbGVtZW50cyA9IGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBuZXcgQ2xhc3MoLi4ucmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gKHR5cGVvZiBlbGVtZW50LmNoaWxkRWxlbWVudHMgPT09IEZVTkNUSU9OKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3VhcmFudGVlKGVsZW1lbnQuY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllcy5jaGlsZEVsZW1lbnRzIHx8IFtdO1xuXG4gICAgZWxlbWVudC5zZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuXG4gICAgZWxlbWVudC5zZXRDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHplcm8yKCkge1xuICByZXR1cm4gKFtcblxuICAgIDAsXG4gICAgMCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHplcm8zKCkge1xuICByZXR1cm4gKFtcblxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gemVybzQoKSB7XG4gIHJldHVybiAoW1xuXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlbmd0aDIodmVjdG9yKSB7XG4gIGNvbnN0IFsgeCwgeSBdID0gdmVjdG9yO1xuXG4gIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW5ndGgzKHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHksIHogXSA9IHZlY3RvcjtcblxuICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW5ndGg0KHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHksIHosIHcgXSA9IHZlY3RvcjtcblxuICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeiArIHcgKiB3KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvdDIodmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBbIGEwLCBhMSBdID0gdmVjdG9yQSxcbiAgICAgICAgWyBiMCwgYjEgXSA9IHZlY3RvckI7XG5cbiAgcmV0dXJuIChhMCAqIGIwICsgYTEgKiBiMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb3QzKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgY29uc3QgWyBhMCwgYTEsIGEyIF0gPSB2ZWN0b3JBLFxuICAgICAgICBbIGIwLCBiMSwgYjIgXSA9IHZlY3RvckI7XG5cbiAgcmV0dXJuIChhMCAqIGIwICsgYTEgKiBiMSArIGEyICogYjIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG90NCh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIGNvbnN0IFsgYTAsIGExLCBhMiwgYTMgXSA9IHZlY3RvckEsXG4gICAgICAgIFsgYjAsIGIxLCBiMiwgYjMgXSA9IHZlY3RvckI7XG5cbiAgcmV0dXJuIChhMCAqIGIwICsgYTEgKiBiMSArIGEyICogYjIgKyBhMyAqIGIzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyb3NzMyh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIGNvbnN0IFsgYTAsIGExLCBhMiBdID0gdmVjdG9yQSxcbiAgICAgICAgWyBiMCwgYjEsIGIyIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTEgKiBiMiAtIGEyICogYjEsXG4gICAgYTIgKiBiMCAtIGEwICogYjIsXG4gICAgYTAgKiBiMSAtIGExICogYjAsXG5cbiAgXSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGlzZTIodmVjdG9yKSB7XG4gIGNvbnN0IFsgeCwgeSBdID0gdmVjdG9yLFxuXG4gICAgICAgIGxlbmd0aCA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcblxuICByZXR1cm4gKFtcblxuICAgIHggLyBsZW5ndGgsXG4gICAgeSAvIGxlbmd0aCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGlzZTModmVjdG9yKSB7XG4gIGNvbnN0IFsgeCwgeSwgeiBdID0gdmVjdG9yLFxuXG4gICAgICAgIGxlbmd0aCA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHopO1xuXG4gIHJldHVybiAoW1xuXG4gICAgeCAvIGxlbmd0aCxcbiAgICB5IC8gbGVuZ3RoLFxuICAgIHogLyBsZW5ndGgsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpc2U0KHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHksIHosIHcgXSA9IHZlY3RvcixcblxuICAgICAgICBsZW5ndGggPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6ICsgdyAqIHcpO1xuXG4gIHJldHVybiAoW1xuXG4gICAgeCAvIGxlbmd0aCxcbiAgICB5IC8gbGVuZ3RoLFxuICAgIHogLyBsZW5ndGgsXG4gICAgdyAvIGxlbmd0aCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmxlY3QyKHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHkgXSA9IHZlY3RvcjtcblxuICByZXR1cm4gKFtcblxuICAgIC14LFxuICAgIC15LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmbGVjdDModmVjdG9yKSB7XG4gIGNvbnN0IFsgeCwgeSwgeiBdID0gdmVjdG9yO1xuXG4gIHJldHVybiAoW1xuXG4gICAgLXgsXG4gICAgLXksXG4gICAgLXosXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZsZWN0NCh2ZWN0b3IpIHtcbiAgY29uc3QgWyB4LCB5LCB6LCB3IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIChbXG5cbiAgICAteCxcbiAgICAteSxcbiAgICAteixcbiAgICAtdyxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRydW5jYXRlNCh2ZWN0b3IpIHtcbiAgY29uc3QgWyB4LCB5LCB6IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIChbXG5cbiAgICB4LFxuICAgIHksXG4gICAgeixcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZDIodmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBbIGEwLCBhMSBdID0gdmVjdG9yQSxcbiAgICAgICAgWyBiMCwgYjEgXSA9IHZlY3RvckI7XG5cbiAgcmV0dXJuIChbXG5cbiAgICBhMCArIGIwLFxuICAgIGExICsgYjEsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQzKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgY29uc3QgWyBhMCwgYTEsIGEyIF0gPSB2ZWN0b3JBLFxuICAgICAgICBbIGIwLCBiMSwgYjIgXSA9IHZlY3RvckI7XG5cbiAgcmV0dXJuIChbXG5cbiAgICBhMCArIGIwLFxuICAgIGExICsgYjEsXG4gICAgYTIgKyBiMixcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZDQodmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBbIGEwLCBhMSwgYTIsIGEzIF0gPSB2ZWN0b3JBLFxuICAgICAgICBbIGIwLCBiMSwgYjIsIGIzIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTAgKyBiMCxcbiAgICBhMSArIGIxLFxuICAgIGEyICsgYjIsXG4gICAgYTMgKyBiMyxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0Mih2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIGNvbnN0IFsgYTAsIGExIF0gPSB2ZWN0b3JBLFxuICAgICAgICBbIGIwLCBiMSBdID0gdmVjdG9yQjtcblxuICByZXR1cm4gKFtcblxuICAgIGEwIC0gYjAsXG4gICAgYTEgLSBiMSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0Myh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIGNvbnN0IFsgYTAsIGExLCBhMiBdID0gdmVjdG9yQSxcbiAgICAgICAgWyBiMCwgYjEsIGIyIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTAgLSBiMCxcbiAgICBhMSAtIGIxLFxuICAgIGEyIC0gYjIsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdDQodmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBbIGEwLCBhMSwgYTIsIGEzIF0gPSB2ZWN0b3JBLFxuICAgICAgICBbIGIwLCBiMSwgYjIsIGIzIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTAgLSBiMCxcbiAgICBhMSAtIGIxLFxuICAgIGEyIC0gYjIsXG4gICAgYTMgLSBiMyxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5Mih2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIGNvbnN0IFsgeDAsIHkwIF0gPSB2ZWN0b3JBLFxuICAgICAgICBbIHgxLCB5MSBdID0gdmVjdG9yQjtcblxuICByZXR1cm4gKFtcblxuICAgIHgwICogeDEsXG4gICAgeTAgKiB5MSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5Myh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIGNvbnN0IFsgeDAsIHkwLCB6MCBdID0gdmVjdG9yQSxcbiAgICAgICAgWyB4MSwgeTEsIHoxIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoW1xuXG4gICAgeDAgKiB4MSxcbiAgICB5MCAqIHkxLFxuICAgIHowICogejEsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseTQodmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBbIHgwLCB5MCwgejAsIHcwIF0gPSB2ZWN0b3JBLFxuICAgICAgICBbIHgxLCB5MSwgejEsIHcxIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoW1xuXG4gICAgeDAgKiB4MSxcbiAgICB5MCAqIHkxLFxuICAgIHowICogejEsXG4gICAgdzAgKiB3MSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpdmlkZTIodmVjdG9yLCBkaXZpc29yKSB7XG4gIGNvbnN0IFsgeCwgeSBdID0gdmVjdG9yO1xuXG4gIHJldHVybiAoW1xuXG4gICAgeCAvIGRpdmlzb3IsXG4gICAgeSAvIGRpdmlzb3IsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXZpZGUzKHZlY3RvciwgZGl2aXNvcikge1xuICBjb25zdCBbIHgsIHksIHogXSA9IHZlY3RvcjtcblxuICByZXR1cm4gKFtcblxuICAgIHggLyBkaXZpc29yLFxuICAgIHkgLyBkaXZpc29yLFxuICAgIHogLyBkaXZpc29yLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGl2aWRlNCh2ZWN0b3IsIGRpdmlzb3IpIHtcbiAgY29uc3QgWyB4LCB5LCB6LCB3IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIChbXG5cbiAgICB4IC8gZGl2aXNvcixcbiAgICB5IC8gZGl2aXNvcixcbiAgICB6IC8gZGl2aXNvcixcbiAgICB3IC8gZGl2aXNvcixcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlMih2ZWN0b3IsIHNjYWxhcikge1xuICBjb25zdCBbIHgsIHkgXSA9IHZlY3RvcjtcblxuICByZXR1cm4gKFtcblxuICAgIHggKiBzY2FsYXIsXG4gICAgeSAqIHNjYWxhcixcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlMyh2ZWN0b3IsIHNjYWxhcikge1xuICBjb25zdCBbIHgsIHksIHogXSA9IHZlY3RvcjtcblxuICByZXR1cm4gKFtcblxuICAgIHggKiBzY2FsYXIsXG4gICAgeSAqIHNjYWxhcixcbiAgICB6ICogc2NhbGFyLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGU0KHZlY3Rvciwgc2NhbGFyKSB7XG4gIGNvbnN0IFsgeCwgeSwgeiwgdyBdID0gdmVjdG9yO1xuXG4gIHJldHVybiAoW1xuXG4gICAgeCAqIHNjYWxhcixcbiAgICB5ICogc2NhbGFyLFxuICAgIHogKiBzY2FsYXIsXG4gICAgdyAqIHNjYWxhcixcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybTIodmVjdG9yLCBtYXRyaXgpIHtcbiAgY29uc3QgWyB4LCB5IF0gPSB2ZWN0b3IsXG5cbiAgICAgICAgWyBtMCwgbTEsIG0yLCBtMyBdID0gbWF0cml4O1xuXG4gIHJldHVybiAoW1xuXG4gICAgbTAgKiB4ICsgbTIgKiB5LFxuICAgIG0xICogeCArIG0zICogeSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybTModmVjdG9yLCBtYXRyaXgpIHtcbiAgY29uc3QgWyB4LCB5LCB6IF0gPSB2ZWN0b3IsXG5cbiAgICAgICAgWyBtMCwgbTEsIG0yLCBtMywgbTQsIG01LCBtNiwgbTcsIG04IF0gPSBtYXRyaXg7XG5cbiAgcmV0dXJuIChbXG5cbiAgICBtMCAqIHggKyBtMyAqIHkgKyBtNiAqIHosXG4gICAgbTEgKiB4ICsgbTQgKiB5ICsgbTcgKiB6LFxuICAgIG0yICogeCArIG01ICogeSArIG04ICogeixcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybTQodmVjdG9yLCBtYXRyaXgpIHtcbiAgY29uc3QgWyB4LCB5LCB6LCB3IF0gPSB2ZWN0b3IsXG5cbiAgICAgICAgWyBtMCwgbTEsIG0yLCBtMywgbTQsIG01LCBtNiwgbTcsIG04LCBtOSwgbTEwLCBtMTEsIG0xMiwgbTEzLCBtMTQsIG0xNSBdID0gbWF0cml4O1xuXG5cbiAgcmV0dXJuIChbXG5cbiAgICBtMCAqIHggKyBtNCAqIHkgKyBtOCAqIHogKyBtMTIgKiB3LFxuICAgIG0xICogeCArIG01ICogeSArIG05ICogeiArIG0xMyAqIHcsXG4gICAgbTIgKiB4ICsgbTYgKiB5ICsgbTEwICogeiArIG0xNCAqIHcsXG4gICAgbTMgKiB4ICsgbTcgKiB5ICsgbTExICogeiArIG0xNSAqIHcsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdW0yKC4uLnZlY3RvcnMpIHtcbiAgY29uc3QgemVybyA9IHplcm8yKCksXG4gICAgICAgIHN1bSA9IHZlY3RvcnMucmVkdWNlKChzdW0sIHZlY3RvcikgPT4ge1xuICAgICAgICAgIHN1bSA9IGFkZDIoc3VtLCB2ZWN0b3IpO1xuXG4gICAgICAgICAgcmV0dXJuIHN1bTtcbiAgICAgICAgfSwgemVybyk7XG5cbiAgcmV0dXJuIHN1bTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1bTMoLi4udmVjdG9ycykge1xuICBjb25zdCB6ZXJvID0gemVybzMoKSxcbiAgICAgICAgc3VtID0gdmVjdG9ycy5yZWR1Y2UoKHN1bSwgdmVjdG9yKSA9PiB7XG4gICAgICAgICAgc3VtID0gYWRkMyhzdW0sIHZlY3Rvcik7XG5cbiAgICAgICAgICByZXR1cm4gc3VtO1xuICAgICAgICB9LCB6ZXJvKTtcblxuICByZXR1cm4gc3VtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VtNCguLi52ZWN0b3JzKSB7XG4gIGNvbnN0IHplcm8gPSB6ZXJvNCgpLFxuICAgICAgICBzdW0gPSB2ZWN0b3JzLnJlZHVjZSgoc3VtLCB2ZWN0b3IpID0+IHtcbiAgICAgICAgICBzdW0gPSBhZGQ0KHN1bSwgdmVjdG9yKTtcblxuICAgICAgICAgIHJldHVybiBzdW07XG4gICAgICAgIH0sIHplcm8pO1xuXG4gIHJldHVybiBzdW07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZWFuMiguLi52ZWN0b3JzKSB7XG4gIGNvbnN0IGxlbmd0aCA9IHZlY3RvcnMubGVuZ3RoLFxuICAgICAgICBzdW0gPSBzdW0yKC4uLnZlY3RvcnMpLFxuICAgICAgICBtZWFuID0gZGl2aWRlMihzdW0sIGxlbmd0aCk7XG5cbiAgcmV0dXJuIG1lYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZWFuMyguLi52ZWN0b3JzKSB7XG4gIGNvbnN0IGxlbmd0aCA9IHZlY3RvcnMubGVuZ3RoLFxuICAgICAgICBzdW0gPSBzdW0zKC4uLnZlY3RvcnMpLFxuICAgICAgICBtZWFuID0gZGl2aWRlMyhzdW0sIGxlbmd0aCk7XG5cbiAgcmV0dXJuIG1lYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZWFuNCguLi52ZWN0b3JzKSB7XG4gIGNvbnN0IGxlbmd0aCA9IHZlY3RvcnMubGVuZ3RoLFxuICAgICAgICBzdW0gPSBzdW00KC4uLnZlY3RvcnMpLFxuICAgICAgICBtZWFuID0gZGl2aWRlNChzdW0sIGxlbmd0aCk7XG5cbiAgcmV0dXJuIG1lYW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgemVybzIsXG4gIHplcm8zLFxuICB6ZXJvNCxcbiAgbGVuZ3RoMixcbiAgbGVuZ3RoMyxcbiAgbGVuZ3RoNCxcbiAgZG90MixcbiAgZG90MyxcbiAgZG90NCxcbiAgY3Jvc3MzLFxuICBub3JtYWxpc2UyLFxuICBub3JtYWxpc2UzLFxuICBub3JtYWxpc2U0LFxuICByZWZsZWN0MixcbiAgcmVmbGVjdDMsXG4gIHJlZmxlY3Q0LFxuICB0cnVuY2F0ZTQsXG4gIGFkZDIsXG4gIGFkZDMsXG4gIGFkZDQsXG4gIHN1YnRyYWN0MixcbiAgc3VidHJhY3QzLFxuICBzdWJ0cmFjdDQsXG4gIG11bHRpcGx5MixcbiAgbXVsdGlwbHkzLFxuICBtdWx0aXBseTQsXG4gIGRpdmlkZTIsXG4gIGRpdmlkZTMsXG4gIGRpdmlkZTQsXG4gIHNjYWxlMixcbiAgc2NhbGUzLFxuICBzY2FsZTQsXG4gIHRyYW5zZm9ybTIsXG4gIHRyYW5zZm9ybTMsXG4gIHRyYW5zZm9ybTQsXG4gIHN1bTIsXG4gIHN1bTMsXG4gIHN1bTQsXG4gIG1lYW4yLFxuICBtZWFuMyxcbiAgbWVhbjRcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHN1YnRyYWN0MyB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRnZSB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBleHRlbnQpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgdGhpcy5leHRlbnQgPSBleHRlbnQ7XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcbiAgfVxuXG4gIGdldEV4dGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5leHRlbnQ7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uc2xpY2UoKSxcbiAgICAgICAgICBleHRlbnQgPSB0aGlzLmV4dGVudC5zbGljZSgpLFxuICAgICAgICAgIGVkZ2UgPSBuZXcgRWRnZShwb3NpdGlvbiwgZXh0ZW50KTtcblxuICAgIHJldHVybiBlZGdlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGFydFZlcnRleEFuZEVuZFZlcnRleChDbGFzcywgc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCkge1xuICAgIGlmIChlbmRWZXJ0ZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgZW5kVmVydGV4ID0gc3RhcnRWZXJ0ZXg7ICAvLy9cbiAgICAgIHN0YXJ0VmVydGV4ID0gQ2xhc3M7ICAvLy9cbiAgICAgIENsYXNzID0gRWRnZTsgLy8vXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHN0YXJ0UG9zaXRpb24gPSBzdGFydFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIGVuZFBvc2l0aW9uID0gZW5kVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgcG9zaXRpb24gPSBzdGFydFBvc2l0aW9uLnNsaWNlKCksIC8vL1xuICAgICAgICAgIGV4dGVudCA9IHN1YnRyYWN0MyhlbmRQb3NpdGlvbiwgc3RhcnRQb3NpdGlvbiksXG4gICAgICAgICAgZWRnZSA9IG5ldyBDbGFzcyhwb3NpdGlvbiwgZXh0ZW50KTtcblxuICAgIHJldHVybiBlZGdlO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFkZDMsIHNjYWxlMyB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZU1pZFBvaW50UG9zaXRpb24odmVydGljZXMpIHtcbiAgY29uc3QgbWlkUG9pbnRQb3NpdGlvbiA9IHZlcnRpY2VzLnJlZHVjZSgobWlkUG9pbnRQb3NpdGlvbiwgdmVydGV4KSA9PiB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb24gPSB2ZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBzY2FsZWRWZXJ0ZXhQb3NpdGlvbiA9IHNjYWxlMyh2ZXJ0ZXhQb3NpdGlvbiwgMS8zKTtcblxuICAgIG1pZFBvaW50UG9zaXRpb24gPSBhZGQzKG1pZFBvaW50UG9zaXRpb24sIHNjYWxlZFZlcnRleFBvc2l0aW9uKTtcblxuICAgIHJldHVybiBtaWRQb2ludFBvc2l0aW9uO1xuICB9LCBbIDAsIDAsIDAgXSk7XG5cbiAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0TWlkUG9pbnRQb3NpdGlvbk9udG9YWVBsYW5lKG1pZFBvaW50UG9zaXRpb24pIHtcbiAgbWlkUG9pbnRQb3NpdGlvbiA9IFsgLi4ubWlkUG9pbnRQb3NpdGlvbi5zbGljZSgwLCAyKSwgMCBdOyAgLy8vXG5cbiAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc01pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpIHtcbiAgY29uc3QgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzID0gaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMobWlkUG9pbnRQb3NpdGlvbiwgbWFza2luZ0VkZ2VzKSxcbiAgICAgICAgbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcyA9IGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpLFxuICAgICAgICBtaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMgPSBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMgfHwgbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlczsgLy8vXG5cbiAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcztcbn1cblxuZnVuY3Rpb24gaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMobWlkUG9pbnRQb3NpdGlvbiwgbWFza2luZ0VkZ2VzKSB7XG4gIGNvbnN0IG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcyA9IG1hc2tpbmdFZGdlcy5yZWR1Y2UoKG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcywgbWFza2luZ0VkZ2UpID0+IHtcbiAgICBpZiAobWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzKSB7XG4gICAgICBjb25zdCBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZSA9IG1hc2tpbmdFZGdlLmlzTWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdChtaWRQb2ludFBvc2l0aW9uKTtcblxuICAgICAgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzID0gbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcztcbiAgfSwgdHJ1ZSk7XG5cbiAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcztcbn1cblxuZnVuY3Rpb24gaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzKG1pZFBvaW50UG9zaXRpb24sIG1hc2tpbmdFZGdlcykge1xuICBjb25zdCBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzID0gbWFza2luZ0VkZ2VzLnJlZHVjZSgobWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcywgbWFza2luZ0VkZ2UpID0+IHtcbiAgICBpZiAobWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcykge1xuICAgICAgY29uc3QgbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlID0gbWFza2luZ0VkZ2UuaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodChtaWRQb2ludFBvc2l0aW9uKTtcblxuICAgICAgbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcyA9IG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcztcbiAgfSwgdHJ1ZSk7XG5cbiAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXM7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuLi9lZGdlXCI7XG5cbmltcG9ydCB7IHRoaXJkIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgc3VidHJhY3QzLCBjcm9zczMgfSBmcm9tIFwiLi4vLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyBwcm9qZWN0TWlkUG9pbnRQb3NpdGlvbk9udG9YWVBsYW5lIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9taWRQb2ludFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXNraW5nRWRnZSBleHRlbmRzIEVkZ2Uge1xuICBpc01pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQobWlkUG9pbnRQb3NpdGlvbikge1xuICAgIG1pZFBvaW50UG9zaXRpb24gPSBwcm9qZWN0TWlkUG9pbnRQb3NpdGlvbk9udG9YWVBsYW5lKG1pZFBvaW50UG9zaXRpb24pOyAgLy8vXG5cbiAgICBjb25zdCBleHRlbnQgPSB0aGlzLmdldEV4dGVudCgpLFxuICAgICAgICAgIHBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIG1pZFBvaW50UmVsYXRpdmVQb3NpdGlvbiA9IHN1YnRyYWN0MyhtaWRQb2ludFBvc2l0aW9uLCBwb3NpdGlvbiksXG4gICAgICAgICAgY3Jvc3NQcm9kdWN0Q29tcG9uZW50cyA9IGNyb3NzMyhleHRlbnQsIG1pZFBvaW50UmVsYXRpdmVQb3NpdGlvbiksIC8vL1xuICAgICAgICAgIHRoaXJkQ3Jvc3NQcm9kdWN0Q29tcG9uZW50ID0gdGhpcmQoY3Jvc3NQcm9kdWN0Q29tcG9uZW50cyksXG4gICAgICAgICAgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdCA9ICh0aGlyZENyb3NzUHJvZHVjdENvbXBvbmVudCA+IDApO1xuXG4gICAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQ7XG4gIH1cbiAgXG4gIGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHQobWlkUG9pbnRQb3NpdGlvbikge1xuICAgIGNvbnN0IG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQgPSB0aGlzLmlzTWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdChtaWRQb2ludFBvc2l0aW9uKSxcbiAgICAgICAgICBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodCA9ICFtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0O1xuICAgIFxuICAgIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodDtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21TdGFydFZlcnRleEFuZEVuZFZlcnRleChzdGFydFZlcnRleCwgZW5kVmVydGV4KSB7IHJldHVybiBFZGdlLmZyb21TdGFydFZlcnRleEFuZEVuZFZlcnRleChNYXNraW5nRWRnZSwgc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCk7IH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgemVybzIsIHplcm8zIH0gZnJvbSBcIi4vbWF0aHMvdmVjdG9yXCI7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0RFUFRIID0gMS4wO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfWl9GQVIgPSAxMDAwO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfWl9ORUFSID0gMTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX1BFUlNJU1QgPSBmYWxzZTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0ZJRUxEX09GX1ZJRVcgPSA0NTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0lOSVRJQUxfQU5HTEVTID0gemVybzIoKTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0lOSVRJQUxfT0ZGU0VUUyA9IHplcm8zKCk7XG5leHBvcnQgY29uc3QgREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IgPSAwLjAwMDAwMDE7XG5leHBvcnQgY29uc3QgREVGQVVMVF9JTklUSUFMX0RJU1RBTkNFID0gNTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0lOSVRJQUxfUE9TSVRJT04gPSBbIDAsIDAsIDUgXTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX01PVVNFX1NFTlNJVElWSVRZID0gMTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0JBQ0tHUk9VTkRfQ09MT1VSID0gWyAwLCAwLCAwIF07XG5leHBvcnQgY29uc3QgREVGQVVMVF9NT1VTRV9XSEVFTF9TRU5TSVRJVklUWSA9IDE7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IERFRkFVTFRfTUFSR0lOX09GX0VSUk9SIH0gZnJvbSBcIi4uL2RlZmF1bHRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FwcHJveGltYXRlbHlFcXVhbFRvT25lKHZhbHVlLCBtYXJnaW5PZkVycm9yID0gREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IpIHsgcmV0dXJuIGlzQXBwcm94aW1hdGVseUVxdWFsVG8odmFsdWUsIDEsIG1hcmdpbk9mRXJyb3IpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyh2YWx1ZSwgbWFyZ2luT2ZFcnJvciA9IERFRkFVTFRfTUFSR0lOX09GX0VSUk9SKSB7IHJldHVybiBpc0FwcHJveGltYXRlbHlFcXVhbFRvKHZhbHVlLCAwLCBtYXJnaW5PZkVycm9yKTsgfVxuXG5mdW5jdGlvbiBpc0FwcHJveGltYXRlbHlFcXVhbFRvKHZhbHVlQSwgdmFsdWVCLCBtYXJnaW5PZkVycm9yID0gREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IpIHtcbiAgY29uc3QgZGlmZmVyZW5jZSA9IHZhbHVlQSAtIHZhbHVlQixcbiAgICAgICAgYWJzb2x1dGVEaWZmZXJlbmNlID0gTWF0aC5hYnMoZGlmZmVyZW5jZSksXG4gICAgICAgIGFwcHJveGltYXRlbHlFcXVhbCA9IChhYnNvbHV0ZURpZmZlcmVuY2UgPCBtYXJnaW5PZkVycm9yKTtcblxuICByZXR1cm4gYXBwcm94aW1hdGVseUVxdWFsO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlSGFsZkFuZ2xlU2luZShhbmdsZUNvc2luZSkgeyByZXR1cm4gTWF0aC5zcXJ0KCgxIC0gYW5nbGVDb3NpbmUpIC8gMik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUhhbGZBbmdsZUNvc2luZShhbmdsZUNvc2luZSkgeyByZXR1cm4gTWF0aC5zcXJ0KCgxICsgYW5nbGVDb3NpbmUpIC8gMik7IH1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZG90MywgY3Jvc3MzLCBub3JtYWxpc2UzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb09uZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXBwcm94aW1hdGVcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkLCBmb3VydGggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVIYWxmQW5nbGVDb3NpbmUsIGNhbGN1bGF0ZUhhbGZBbmdsZVNpbmUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FuZ2xlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVJbWFnaW5hcnlRdWF0ZXJuaW9uKGltYWdpbmFyeVF1YXRlcm5pb24sIHJvdGF0aW9uUXVhdGVybmlvbiwgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbikgeyByZXR1cm4gaGFtaWx0b25Qcm9kdWN0KGhhbWlsdG9uUHJvZHVjdChyb3RhdGlvblF1YXRlcm5pb24sIGltYWdpbmFyeVF1YXRlcm5pb24pLCBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlSW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgY29uc3Qgcm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cyA9IHJvdGF0aW9uUXVhdGVybmlvbiwgIC8vL1xuICAgICAgICBmaXJzdFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCA9IGZpcnN0KHJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudHMpLFxuICAgICAgICBzZWNvbmRSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQgPSBzZWNvbmQocm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cyksXG4gICAgICAgIHRoaXJkUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50ID0gdGhpcmQocm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cyksXG4gICAgICAgIGZvdXJ0aFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCA9IGZvdXJ0aChyb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRzKSxcbiAgICAgICAgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbiA9IFtcbiAgICAgICAgICBmaXJzdFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCxcbiAgICAgICAgICAtc2Vjb25kUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50LFxuICAgICAgICAgIC10aGlyZFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCxcbiAgICAgICAgICAtZm91cnRoUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50XG4gICAgICAgIF07XG5cbiAgcmV0dXJuIGludmVyc2VSb3RhdGlvblF1YXRlcm5pb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgY29uc3QgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSByb3RhdGlvblF1YXRlcm5pb247ICAvLy9cblxuICByZXR1cm4gZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gIGNvbnN0IGludmVyc2VSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVJbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGludmVyc2VSb3RhdGlvblF1YXRlcm5pb247ICAvLy9cblxuICByZXR1cm4gYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVBcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24obm9ybWFsKSB7XG4gIGNvbnN0IGV4dGVudCA9IG5vcm1hbC5nZXRFeHRlbnQoKSxcbiAgICAgICAgdW5pdE5vcm1hbCA9IGV4dGVudCwgIC8vL1xuICAgICAgICB6QXhpcyA9IFsgMCwgMCwgMSBdLFxuICAgICAgICBkb3RQcm9kdWN0T2ZVbml0Tm9ybWFsQW5kWkF4aXMgPSBkb3QzKHVuaXROb3JtYWwsIHpBeGlzKSxcbiAgICAgICAgY3Jvc3NQcm9kdWN0T2ZVbml0Tm9ybWFsQW5kWkF4aXMgPSBjcm9zczModW5pdE5vcm1hbCwgekF4aXMpLFxuICAgICAgICBhbmdsZU9mUm90YXRpb25Db3NpbmUgPSBkb3RQcm9kdWN0T2ZVbml0Tm9ybWFsQW5kWkF4aXMsIC8vL1xuICAgICAgICBhbmdsZU9mUm90YXRpb25Db3NpbmVBYnNvbHV0ZVZhbHVlID0gTWF0aC5hYnMoYW5nbGVPZlJvdGF0aW9uQ29zaW5lKSxcbiAgICAgICAgYW5nbGVPZlJvdGF0aW9uQ29zaW5lQWJzb2x1dGVWYWx1ZUFwcHJveGltYXRlbHlFcXVhbFRvT25lID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb09uZShhbmdsZU9mUm90YXRpb25Db3NpbmVBYnNvbHV0ZVZhbHVlKSxcbiAgICAgICAgYXhpc09mUm90YXRpb24gPSBhbmdsZU9mUm90YXRpb25Db3NpbmVBYnNvbHV0ZVZhbHVlQXBwcm94aW1hdGVseUVxdWFsVG9PbmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBbIDEsIDAsIDAgXSA6IC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyb3NzUHJvZHVjdE9mVW5pdE5vcm1hbEFuZFpBeGlzLFxuICAgICAgICB1bml0QXhpc09mUm90YXRpb24gPSBub3JtYWxpc2UzKGF4aXNPZlJvdGF0aW9uKSxcbiAgICAgICAgaGFsZkFuZ2xlT2ZSb3RhdGlvbkNvc2luZSA9IGNhbGN1bGF0ZUhhbGZBbmdsZUNvc2luZShhbmdsZU9mUm90YXRpb25Db3NpbmUpLFxuICAgICAgICBoYWxmQW5nbGVPZlJvdGF0aW9uU2luZSA9IGNhbGN1bGF0ZUhhbGZBbmdsZVNpbmUoYW5nbGVPZlJvdGF0aW9uQ29zaW5lKSxcbiAgICAgICAgdW5pdEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50cyA9IHVuaXRBeGlzT2ZSb3RhdGlvbiwgIC8vL1xuICAgICAgICBmaXJzdEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50ID0gZmlyc3QodW5pdEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50cyksXG4gICAgICAgIHNlY29uZEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50ID0gc2Vjb25kKHVuaXRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICB0aGlyZEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50ID0gdGhpcmQodW5pdEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50cyksXG4gICAgICAgIGFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbiA9IFtcbiAgICAgICAgICBoYWxmQW5nbGVPZlJvdGF0aW9uQ29zaW5lLFxuICAgICAgICAgIGZpcnN0QXhpc09mUm90YXRpb25Db21wb25lbnQgKiBoYWxmQW5nbGVPZlJvdGF0aW9uU2luZSxcbiAgICAgICAgICBzZWNvbmRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudCAqIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lLFxuICAgICAgICAgIHRoaXJkQXhpc09mUm90YXRpb25Db21wb25lbnQgKiBoYWxmQW5nbGVPZlJvdGF0aW9uU2luZVxuICAgICAgICBdO1xuXG4gIHJldHVybiBhcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVSb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uKG1hc2tpbmdFZGdlKSB7XG4gIGNvbnN0IG1hc2tpbmdFZGdlRXh0ZW50ID0gbWFza2luZ0VkZ2UuZ2V0RXh0ZW50KCksXG4gICAgICAgIHVuaXRNYXNraW5nRWRnZUV4dGVudCA9IG5vcm1hbGlzZTMobWFza2luZ0VkZ2VFeHRlbnQpLFxuICAgICAgICB1bml0TWFza2luZ0VkZ2VFeHRlbnRDb21wb25lbnRzID0gdW5pdE1hc2tpbmdFZGdlRXh0ZW50LCAgLy8vXG4gICAgICAgIGZpcnN0VW5pdE1hc2tpbmdFZGdlRXh0ZW50Q29tcG9uZW50ID0gZmlyc3QodW5pdE1hc2tpbmdFZGdlRXh0ZW50Q29tcG9uZW50cyksXG4gICAgICAgIHNlY29uZFVuaXRNYXNraW5nRWRnZUV4dGVudENvbXBvbmVudCA9IHNlY29uZCh1bml0TWFza2luZ0VkZ2VFeHRlbnRDb21wb25lbnRzKSxcbiAgICAgICAgYW5nbGVPZlJvdGF0aW9uU2luZSA9IGZpcnN0VW5pdE1hc2tpbmdFZGdlRXh0ZW50Q29tcG9uZW50LCAgLy8vXG4gICAgICAgIGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSA9IHNlY29uZFVuaXRNYXNraW5nRWRnZUV4dGVudENvbXBvbmVudCwgIC8vL1xuICAgICAgICBoYWxmQW5nbGVPZlJvdGF0aW9uQ29zaW5lID0gY2FsY3VsYXRlSGFsZkFuZ2xlQ29zaW5lKGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSksXG4gICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lID0gKGFuZ2xlT2ZSb3RhdGlvblNpbmUgPiAwICkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArY2FsY3VsYXRlSGFsZkFuZ2xlU2luZShhbmdsZU9mUm90YXRpb25Db3NpbmUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtY2FsY3VsYXRlSGFsZkFuZ2xlU2luZShhbmdsZU9mUm90YXRpb25Db3NpbmUpLFxuICAgICAgICByb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uID0gW1xuICAgICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25Db3NpbmUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIHJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb247XG59XG5cbmZ1bmN0aW9uIGhhbWlsdG9uUHJvZHVjdChxdWF0ZXJuaW9uQSwgcXVhdGVybmlvbkIpIHtcbiAgY29uc3QgYTEgPSBxdWF0ZXJuaW9uQVswXSxcbiAgICAgICAgYjEgPSBxdWF0ZXJuaW9uQVsxXSxcbiAgICAgICAgYzEgPSBxdWF0ZXJuaW9uQVsyXSxcbiAgICAgICAgZDEgPSBxdWF0ZXJuaW9uQVszXSxcbiAgICAgICAgYTIgPSBxdWF0ZXJuaW9uQlswXSxcbiAgICAgICAgYjIgPSBxdWF0ZXJuaW9uQlsxXSxcbiAgICAgICAgYzIgPSBxdWF0ZXJuaW9uQlsyXSxcbiAgICAgICAgZDIgPSBxdWF0ZXJuaW9uQlszXSxcbiAgICAgICAgYSA9IGExICogYTIgLSBiMSAqIGIyIC0gYzEgKiBjMiAtIGQxICogZDIsXG4gICAgICAgIGIgPSBhMSAqIGIyICsgYjEgKiBhMiArIGMxICogZDIgLSBkMSAqIGMyLFxuICAgICAgICBjID0gYTEgKiBjMiAtIGIxICogZDIgKyBjMSAqIGEyICsgZDEgKiBiMixcbiAgICAgICAgZCA9IGExICogZDIgKyBiMSAqIGMyIC0gYzEgKiBiMiArIGQxICogYTIsXG4gICAgICAgIHF1YXRlcm5pb24gPSBbIGEsIGIsIGMsIGQgXTtcblxuICByZXR1cm4gcXVhdGVybmlvbjtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcm90YXRlSW1hZ2luYXJ5UXVhdGVybmlvbiwgY2FsY3VsYXRlSW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVhdGVybmlvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlUG9zaXRpb24ocG9zaXRpb24sIHJvdGF0aW9uUXVhdGVybmlvbikge1xuICBjb25zdCBpbWFnaW5hcnlRdWF0ZXJuaW9uID0gaW1hZ2luYXJ5UXVhdGVybmlvbkZyb21Qb3NpdGlvbihwb3NpdGlvbiksXG4gICAgICAgIGludmVyc2VSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVJbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgIHJvdGF0ZWRJbWFnaW5hcnlRdWF0ZXJuaW9uID0gcm90YXRlSW1hZ2luYXJ5UXVhdGVybmlvbihpbWFnaW5hcnlRdWF0ZXJuaW9uLCByb3RhdGlvblF1YXRlcm5pb24sIGludmVyc2VSb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gIHBvc2l0aW9uID0gcG9zaXRpb25Gcm9tSW1hZ2luYXJ5UXVhdGVybmlvbihyb3RhdGVkSW1hZ2luYXJ5UXVhdGVybmlvbik7XG5cbiAgcmV0dXJuIHBvc2l0aW9uO1xufVxuXG5mdW5jdGlvbiBpbWFnaW5hcnlRdWF0ZXJuaW9uRnJvbVBvc2l0aW9uKHBvc2l0aW9uKSB7IHJldHVybiBbMCwgLi4ucG9zaXRpb25dOyB9ICAvLy9cblxuZnVuY3Rpb24gcG9zaXRpb25Gcm9tSW1hZ2luYXJ5UXVhdGVybmlvbihpbWFnaW5hcnlRdWF0ZXJuaW9uKSB7IHJldHVybiBpbWFnaW5hcnlRdWF0ZXJuaW9uLnNsaWNlKDEpOyB9ICAvLy9cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGFkZDMsIHN1YnRyYWN0Mywgc2NhbGUzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FwcHJveGltYXRlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVJbnRlcnNlY3Rpb24oZWRnZSwgZmlyc3RQb3NpdGlvbkNvbXBvbmVudCkge1xuICBsZXQgaW50ZXJzZWN0aW9uID0gbnVsbDtcblxuICBjb25zdCBlZGdlTm9uUGFyYWxsZWwgPSBpc0VkZ2VOb25QYXJhbGxlbChlZGdlKTtcblxuICBpZiAoZWRnZU5vblBhcmFsbGVsKSB7XG4gICAgY29uc3QgZWRnZUludGVyc2VjdGlvbiA9IGNhbGN1bGF0ZUVkZ2VJbnRlcnNlY3Rpb24oZWRnZSwgZmlyc3RQb3NpdGlvbkNvbXBvbmVudCksXG4gICAgICAgICAgZWRnZUludGVyc2VjdGlvbk5vblRyaXZpYWwgPSAoKGVkZ2VJbnRlcnNlY3Rpb24gPiAwICkgJiYgKGVkZ2VJbnRlcnNlY3Rpb24gPCAxKSk7XG5cbiAgICBpZiAoZWRnZUludGVyc2VjdGlvbk5vblRyaXZpYWwpIHtcbiAgICAgIGludGVyc2VjdGlvbiA9IGVkZ2VJbnRlcnNlY3Rpb247ICAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW50ZXJzZWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucykge1xuICBjb25zdCBub25OdWxsSW50ZXJzZWN0aW9ucyA9IGludGVyc2VjdGlvbnMucmVkdWNlKChub25OdWxsSW50ZXJzZWN0aW9ucywgaW50ZXJzZWN0aW9uKSA9PiB7XG4gICAgaWYgKGludGVyc2VjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9uTnVsbEludGVyc2VjdGlvbiA9IGludGVyc2VjdGlvbjsgLy8vXG5cbiAgICAgIG5vbk51bGxJbnRlcnNlY3Rpb25zLnB1c2gobm9uTnVsbEludGVyc2VjdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vbk51bGxJbnRlcnNlY3Rpb25zO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIG5vbk51bGxJbnRlcnNlY3Rpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlTnVsbEludGVyc2VjdGlvbkluZGV4KGludGVyc2VjdGlvbnMpIHtcbiAgY29uc3QgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gaW50ZXJzZWN0aW9ucy5yZWR1Y2UoKG51bGxJbnRlcnNlY3Rpb25JbmRleCwgaW50ZXJzZWN0aW9uLCBpbmRleCkgPT4ge1xuICAgIGlmIChudWxsSW50ZXJzZWN0aW9uSW5kZXggPT09IG51bGwpIHtcbiAgICAgIGlmIChpbnRlcnNlY3Rpb24gPT09IG51bGwpIHtcbiAgICAgICAgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxJbnRlcnNlY3Rpb25JbmRleDtcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIG51bGxJbnRlcnNlY3Rpb25JbmRleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSB7XG4gIGNvbnN0IG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGludGVyc2VjdGlvbnMucmVkdWNlKChudWxsSW50ZXJzZWN0aW9uSW5kZXgsIGludGVyc2VjdGlvbiwgaW5kZXgpID0+IHtcbiAgICBpZiAobnVsbEludGVyc2VjdGlvbkluZGV4ID09PSBudWxsKSB7XG4gICAgICBpZiAoaW50ZXJzZWN0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGluZGV4O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsSW50ZXJzZWN0aW9uSW5kZXg7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBudWxsSW50ZXJzZWN0aW9uSW5kZXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVJbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbihzdGFydFZlcnRleFBvc2l0aW9uLCBlbmRWZXJ0ZXhQb3NpdGlvbiwgaW50ZXJzZWN0aW9uKSB7XG4gIGNvbnN0IGV4dGVudCA9IHN1YnRyYWN0MyhlbmRWZXJ0ZXhQb3NpdGlvbiwgc3RhcnRWZXJ0ZXhQb3NpdGlvbiksXG4gICAgICAgIG9mZnNldCA9IHNjYWxlMyhleHRlbnQsIGludGVyc2VjdGlvbiksXG4gICAgICAgIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uID0gYWRkMyhzdGFydFZlcnRleFBvc2l0aW9uLCBvZmZzZXQpO1xuXG4gIHJldHVybiBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbjtcbn1cblxuZnVuY3Rpb24gaXNFZGdlTm9uUGFyYWxsZWwoZWRnZSkge1xuICBjb25zdCBlZGdlRXh0ZW50ID0gZWRnZS5nZXRFeHRlbnQoKSxcbiAgICAgICAgZWRnZUV4dGVudENvbXBvbmVudHMgPSBlZGdlRXh0ZW50LCAvLy9cbiAgICAgICAgZmlyc3RFZGdlRXh0ZW50Q29tcG9uZW50ID0gZmlyc3QoZWRnZUV4dGVudENvbXBvbmVudHMpLFxuICAgICAgICBzZWNvbmRFZGdlRXh0ZW50Q29tcG9uZW50ID0gc2Vjb25kKGVkZ2VFeHRlbnRDb21wb25lbnRzKSxcbiAgICAgICAgZWRnZUFuZ2xlVGFuZ2VudCA9IGZpcnN0RWRnZUV4dGVudENvbXBvbmVudCAvIHNlY29uZEVkZ2VFeHRlbnRDb21wb25lbnQsXG4gICAgICAgIGVkZ2VBbmdsZVRhbmdlbnRBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhlZGdlQW5nbGVUYW5nZW50KSxcbiAgICAgICAgZWRnZVBhcmFsbGVsID0gZWRnZUFuZ2xlVGFuZ2VudEFwcHJveGltYXRlbHlFcXVhbFRvWmVybywgLy8vXG4gICAgICAgIGVkZ2VOb25QYXJhbGxlbCA9ICFlZGdlUGFyYWxsZWw7XG5cbiAgcmV0dXJuIGVkZ2VOb25QYXJhbGxlbDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlRWRnZUludGVyc2VjdGlvbihlZGdlLCBmaXJzdFBvc2l0aW9uQ29tcG9uZW50KSB7XG4gIGNvbnN0IGVkZ2VFeHRlbnQgPSBlZGdlLmdldEV4dGVudCgpLFxuICAgICAgICBlZGdlUG9zaXRpb24gPSBlZGdlLmdldFBvc2l0aW9uKCksXG4gICAgICAgIGVkZ2VFeHRlbnRDb21wb25lbnRzID0gZWRnZUV4dGVudCwgLy8vXG4gICAgICAgIGVkZ2VQb3NpdGlvbkNvbXBvbmVudHMgPSBlZGdlUG9zaXRpb24sIC8vL1xuICAgICAgICBmaXJzdEVkZ2VFeHRlbnRDb21wb25lbnQgPSBmaXJzdChlZGdlRXh0ZW50Q29tcG9uZW50cyksXG4gICAgICAgIGZpcnN0RWRnZVBvc2l0aW9uQ29tcG9uZW50ID0gZmlyc3QoZWRnZVBvc2l0aW9uQ29tcG9uZW50cyksXG4gICAgICAgIGVkZ2VJbnRlcnNlY3Rpb24gPSAoZmlyc3RQb3NpdGlvbkNvbXBvbmVudCAtIGZpcnN0RWRnZVBvc2l0aW9uQ29tcG9uZW50KSAvIGZpcnN0RWRnZUV4dGVudENvbXBvbmVudDtcblxuICByZXR1cm4gZWRnZUludGVyc2VjdGlvbjtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyByb3RhdGVQb3NpdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcm90YXRpb25cIjtcbmltcG9ydCB7IGNhbGN1bGF0ZUludGVyc2VjdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvaW50ZXJzZWN0aW9uXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVSb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uLCBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWF0ZXJuaW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlcnRpY2FsTGluZSB7XG4gIGNvbnN0cnVjdG9yKGZpcnN0UG9zaXRpb25Db21wb25lbnQsIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgICB0aGlzLmZpcnN0UG9zaXRpb25Db21wb25lbnQgPSBmaXJzdFBvc2l0aW9uQ29tcG9uZW50O1xuICAgIHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgICB0aGlzLmJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIGdldEZpcnN0UG9zaXRpb25Db21wb25lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlyc3RQb3NpdGlvbkNvbXBvbmVudDtcbiAgfVxuICBcbiAgZ2V0Rm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBnZXRCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgc3BsaXRGYWNldChmYWNldCwgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IGVkZ2VzID0gZmFjZXQuZ2V0RWRnZXMoKSxcbiAgICAgICAgICBpbnRlcnNlY3Rpb25zID0gZWRnZXMubWFwKChlZGdlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnNlY3Rpb24gPSBjYWxjdWxhdGVJbnRlcnNlY3Rpb24oZWRnZSwgdGhpcy5maXJzdFBvc2l0aW9uQ29tcG9uZW50KTtcblxuICAgICAgICAgICAgcmV0dXJuIGludGVyc2VjdGlvbjtcbiAgICAgICAgICB9KTtcblxuICAgIGZhY2V0LnNwbGl0V2l0aEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gIH1cblxuICBzcGxpdEZhY2V0cyhmYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBzbWFsbGVyRmFjZXRzID0gW107XG5cbiAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IHtcbiAgICAgIGZhY2V0LnJvdGF0ZSh0aGlzLmZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgICAgdGhpcy5zcGxpdEZhY2V0KGZhY2V0LCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcbiAgICB9KTtcblxuICAgIHNtYWxsZXJGYWNldHMuZm9yRWFjaCgoc21hbGxlckZhY2V0KSA9PiB7XG4gICAgICBzbWFsbGVyRmFjZXQucm90YXRlKHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzbWFsbGVyRmFjZXRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21NYXNraW5nRWRnZShtYXNraW5nRWRnZSkge1xuICAgIGNvbnN0IG1hc2tpbmdFZGdlUG9zaXRpb24gPSBtYXNraW5nRWRnZS5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24gPSBjYWxjdWxhdGVSb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uKG1hc2tpbmdFZGdlKSxcbiAgICAgICAgICByb3RhdGlvblF1YXRlcm5pb24gPSByb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uLCAgLy8vXG4gICAgICAgICAgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIHBvc2l0aW9uID0gcm90YXRlUG9zaXRpb24obWFza2luZ0VkZ2VQb3NpdGlvbiwgcm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBwb3NpdGlvbkNvbXBvbmVudHMgPSBwb3NpdGlvbiwgLy8vXG4gICAgICAgICAgZmlyc3RQb3NpdGlvbkNvbXBvbmVudCA9IGZpcnN0KHBvc2l0aW9uQ29tcG9uZW50cyksXG4gICAgICAgICAgdmVydGljYWxMaW5lID0gbmV3IFZlcnRpY2FsTGluZShmaXJzdFBvc2l0aW9uQ29tcG9uZW50LCBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgIHJldHVybiB2ZXJ0aWNhbExpbmU7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVZlcnRpY2VzKHZlcnRpY2VzLCByb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgY29uc3Qgcm90YXRlZFZlcnRpY2VzID0gdmVydGljZXMubWFwKCh2ZXJ0ZXgpID0+IHtcbiAgICBjb25zdCByb3RhdGVkVmVydGV4ID0gdmVydGV4LmNsb25lKCk7ICAvLy9cblxuICAgIHJvdGF0ZWRWZXJ0ZXgucm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICByZXR1cm4gcm90YXRlZFZlcnRleDtcbiAgfSk7XG5cbiAgcmV0dXJuIHJvdGF0ZWRWZXJ0aWNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlKGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIFZlcnRleCkgeyAgLy8vXG4gIGNvbnN0IGluZGV4ZXMgPSBpbmRleFR1cGxlLCAvLy9cbiAgICAgICAgdmVydGljZXMgPSBpbmRleGVzLm1hcCgoaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBjb29yZGluYXRlVHVwbGUgPSBjb29yZGluYXRlVHVwbGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICB2ZXJ0ZXggPSBWZXJ0ZXguZnJvbUNvb3JkaW5hdGVUdXBsZShjb29yZGluYXRlVHVwbGUpO1xuXG4gICAgICAgICAgcmV0dXJuIHZlcnRleDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHZlcnRpY2VzO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFza2luZ0VkZ2UgZnJvbSBcIi4vZWRnZS9tYXNraW5nXCI7XG5pbXBvcnQgVmVydGljYWxMaW5lIGZyb20gXCIuL3ZlcnRpY2FsTGluZVwiO1xuXG5pbXBvcnQgeyBhZGQsIHNlcGFyYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgcm90YXRlVmVydGljZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3ZlcnRpY2VzXCI7XG5pbXBvcnQgeyBWRVJUSUNFU19MRU5HVEggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgY2FsY3VsYXRlQXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uLCBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1YXRlcm5pb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFza2luZ0ZhY2V0IHtcbiAgY29uc3RydWN0b3IobWFza2luZ0VkZ2VzLCB2ZXJ0aWNhbExpbmVzLCBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gICAgdGhpcy5tYXNraW5nRWRnZXMgPSBtYXNraW5nRWRnZXM7XG4gICAgdGhpcy52ZXJ0aWNhbExpbmVzID0gdmVydGljYWxMaW5lcztcbiAgICB0aGlzLmZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gICAgdGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBnZXRNYXNraW5nRWRnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFza2luZ0VkZ2VzO1xuICB9XG5cbiAgZ2V0VmVydGljYWxMaW5lcygpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNhbExpbmVzO1xuICB9XG5cbiAgZ2V0Rm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBnZXRCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgbWFza0ZhY2V0KGZhY2V0LCB1bm1hc2tlZEZhY2V0cywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IHVubWFza2VkRmFjZXQgPSBmYWNldC5jbG9uZSgpOyAgLy8vXG5cbiAgICBmYWNldC5yb3RhdGUodGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICBjb25zdCBtYXNraW5nRmFjZXQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgc21hbGxlckZhY2V0cyA9IHRoaXMuc3BsaXRGYWNldChmYWNldCwgbWFyZ2luT2ZFcnJvciksXG4gICAgICAgICAgbWFza2VkU21hbGxlckZhY2V0cyA9IFtdLFxuICAgICAgICAgIHVubWFza2VkU21hbGxlckZhY2V0cyA9IFtdO1xuXG4gICAgc2VwYXJhdGUoc21hbGxlckZhY2V0cywgbWFza2VkU21hbGxlckZhY2V0cywgdW5tYXNrZWRTbWFsbGVyRmFjZXRzLCAoc21hbGxlckZhY2V0KSA9PiB7XG4gICAgICBjb25zdCBzbWFsbGVyRmFjZXRNYXNrZWQgPSBzbWFsbGVyRmFjZXQuaXNNYXNrZWQobWFza2luZ0ZhY2V0KTtcblxuICAgICAgcmV0dXJuIHNtYWxsZXJGYWNldE1hc2tlZDtcbiAgICB9KTtcblxuICAgIGNvbnN0IG1hc2tlZFNtYWxsZXJGYWNldHNMZW5ndGggPSBtYXNrZWRTbWFsbGVyRmFjZXRzLmxlbmd0aDtcblxuICAgIGlmIChtYXNrZWRTbWFsbGVyRmFjZXRzTGVuZ3RoID09PSAwKSB7XG4gICAgICB1bm1hc2tlZEZhY2V0cy5wdXNoKHVubWFza2VkRmFjZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1bm1hc2tlZFNtYWxsZXJGYWNldHMuZm9yRWFjaCgodW5tYXNrZWRTbWFsbGVyRmFjZXQpID0+IHtcbiAgICAgICAgdW5tYXNrZWRTbWFsbGVyRmFjZXQucm90YXRlKHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcbiAgICAgIH0pO1xuXG4gICAgICBhZGQodW5tYXNrZWRGYWNldHMsIHVubWFza2VkU21hbGxlckZhY2V0cyk7XG4gICAgfVxuICB9XG4gIFxuICBzcGxpdEZhY2V0KGZhY2V0LCBtYXJnaW5PZkVycm9yKSB7XG4gICAgbGV0IGZhY2V0cyA9IFtcbiAgICAgICAgICBmYWNldFxuICAgICAgICBdLFxuICAgICAgICBzbWFsbGVyRmFjZXRzID0gZmFjZXRzOyAvLy9cblxuICAgIHRoaXMudmVydGljYWxMaW5lcy5mb3JFYWNoKCh2ZXJ0aWNhbExpbmUpID0+IHtcbiAgICAgIHNtYWxsZXJGYWNldHMgPSB2ZXJ0aWNhbExpbmUuc3BsaXRGYWNldHMoZmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcblxuICAgICAgZmFjZXRzID0gc21hbGxlckZhY2V0czsgLy8vXG4gICAgfSk7XG5cbiAgICByZXR1cm4gc21hbGxlckZhY2V0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmFjZXQoZmFjZXQpIHtcbiAgICBjb25zdCBmYWNldE5vcm1hbCA9IGZhY2V0LmdldE5vcm1hbCgpLFxuICAgICAgICAgIGZhY2V0VmVydGljZXMgPSBmYWNldC5nZXRWZXJ0aWNlcygpLFxuICAgICAgICAgIG5vcm1hbCA9IGZhY2V0Tm9ybWFsLCAvLy9cbiAgICAgICAgICBhcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVBcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24obm9ybWFsKSxcbiAgICAgICAgICByb3RhdGlvblF1YXRlcm5pb24gPSBhcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24sIC8vL1xuICAgICAgICAgIHZlcnRpY2VzID0gcm90YXRlVmVydGljZXMoZmFjZXRWZXJ0aWNlcywgcm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBtYXNraW5nRWRnZXMgPSBjYWxjdWxhdGVNYXNraW5nRWRnZXModmVydGljZXMpLFxuICAgICAgICAgIHZlcnRpY2FsTGluZXMgPSBtYXNraW5nRWRnZXMubWFwKChtYXNraW5nRWRnZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmVydGljYWxMaW5lID0gVmVydGljYWxMaW5lLmZyb21NYXNraW5nRWRnZShtYXNraW5nRWRnZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB2ZXJ0aWNhbExpbmU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIG1hc2tpbmdGYWNldCA9IG5ldyBNYXNraW5nRmFjZXQobWFza2luZ0VkZ2VzLCB2ZXJ0aWNhbExpbmVzLCBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgIHJldHVybiBtYXNraW5nRmFjZXQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlTWFza2luZ0VkZ2VzKHZlcnRpY2VzKSB7XG4gIGNvbnN0IG1hc2tpbmdFZGdlcyA9IHZlcnRpY2VzLm1hcCgodmVydGV4LCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBpbmRleCxcbiAgICAgICAgICAgICAgICBlbmRJbmRleCA9IChzdGFydEluZGV4ICsgMSkgJSBWRVJUSUNFU19MRU5HVEgsXG4gICAgICAgICAgICAgICAgc3RhcnRWZXJ0ZXggPSB2ZXJ0aWNlc1tzdGFydEluZGV4XSxcbiAgICAgICAgICAgICAgICBlbmRWZXJ0ZXggPSB2ZXJ0aWNlc1tlbmRJbmRleF0sXG4gICAgICAgICAgICAgICAgbWFza2luZ0VkZ2UgPSBNYXNraW5nRWRnZS5mcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgoc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCk7XG5cbiAgICAgICAgICByZXR1cm4gbWFza2luZ0VkZ2U7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBtYXNraW5nRWRnZXM7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vcm1hbGlzZTMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eTIoKSB7XG4gIHJldHVybiAoW1xuXG4gICAgMSwgMCxcbiAgICAwLCAxLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkzKCkge1xuICByZXR1cm4gKFtcblxuICAgIDEsIDAsIDAsXG4gICAgMCwgMSwgMCxcbiAgICAwLCAwLCAxLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHk0KCkge1xuICByZXR1cm4gKFtcblxuICAgIDEsIDAsIDAsIDAsXG4gICAgMCwgMSwgMCwgMCxcbiAgICAwLCAwLCAxLCAwLFxuICAgIDAsIDAsIDAsIDEsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseTIobWF0cml4QSwgbWF0cml4Qikge1xuICBjb25zdCBbIGEwLCBhMSwgYTIsIGEzIF0gPSBtYXRyaXhBLFxuICAgICAgICBbIGIwLCBiMSwgYjIsIGIzIF0gPSBtYXRyaXhCO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTAgKiBiMCArIGEyICogYjEsXG4gICAgYTEgKiBiMCArIGEzICogYjEsXG5cbiAgICBhMCAqIGIyICsgYTIgKiBiMyxcbiAgICBhMSAqIGIyICsgYTMgKiBiMyxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5MyhtYXRyaXhBLCBtYXRyaXhCKSB7XG4gIGNvbnN0IFsgYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3LCBhOCBdID0gbWF0cml4QSxcbiAgICAgICAgWyBiMCwgYjEsIGIyLCBiMywgYjQsIGI1LCBiNiwgYjcsIGI4IF0gPSBtYXRyaXhCO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTAgKiBiMCArIGEzICogYjEgKyBhNiAqIGIyLFxuICAgIGExICogYjAgKyBhNCAqIGIxICsgYTcgKiBiMixcbiAgICBhMiAqIGIwICsgYTUgKiBiMSArIGE4ICogYjIsXG5cbiAgICBhMCAqIGIzICsgYTMgKiBiNCArIGE2ICogYjUsXG4gICAgYTEgKiBiMyArIGE0ICogYjQgKyBhNyAqIGI1LFxuICAgIGEyICogYjMgKyBhNSAqIGI0ICsgYTggKiBiNSxcblxuICAgIGEwICogYjYgKyBhMyAqIGI3ICsgYTYgKiBiOCxcbiAgICBhMSAqIGI2ICsgYTQgKiBiNyArIGE3ICogYjgsXG4gICAgYTIgKiBiNiArIGE1ICogYjcgKyBhOCAqIGI4LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHk0KG1hdHJpeEEsIG1hdHJpeEIpIHtcbiAgY29uc3QgIFsgYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3LCBhOCwgYTksIGExMCwgYTExLCBhMTIsIGExMywgYTE0LCBhMTUgXSA9IG1hdHJpeEEsXG4gICAgICAgICBbIGIwLCBiMSwgYjIsIGIzLCBiNCwgYjUsIGI2LCBiNywgYjgsIGI5LCBiMTAsIGIxMSwgYjEyLCBiMTMsIGIxNCwgYjE1IF0gPSBtYXRyaXhCO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTAgKiAgYjAgKyAgYTQgKiAgYjEgKyAgYTggKiAgYjIgKyBhMTIgKiAgYjMsXG4gICAgYTEgKiAgYjAgKyAgYTUgKiAgYjEgKyAgYTkgKiAgYjIgKyBhMTMgKiAgYjMsXG4gICAgYTIgKiAgYjAgKyAgYTYgKiAgYjEgKyBhMTAgKiAgYjIgKyBhMTQgKiAgYjMsXG4gICAgYTMgKiAgYjAgKyAgYTcgKiAgYjEgKyBhMTEgKiAgYjIgKyBhMTUgKiAgYjMsXG5cbiAgICBhMCAqICBiNCArICBhNCAqICBiNSArICBhOCAqICBiNiArIGExMiAqICBiNyxcbiAgICBhMSAqICBiNCArICBhNSAqICBiNSArICBhOSAqICBiNiArIGExMyAqICBiNyxcbiAgICBhMiAqICBiNCArICBhNiAqICBiNSArIGExMCAqICBiNiArIGExNCAqICBiNyxcbiAgICBhMyAqICBiNCArICBhNyAqICBiNSArIGExMSAqICBiNiArIGExNSAqICBiNyxcblxuICAgIGEwICogIGI4ICsgIGE0ICogIGI5ICsgIGE4ICogYjEwICsgYTEyICogYjExLFxuICAgIGExICogIGI4ICsgIGE1ICogIGI5ICsgIGE5ICogYjEwICsgYTEzICogYjExLFxuICAgIGEyICogIGI4ICsgIGE2ICogIGI5ICsgYTEwICogYjEwICsgYTE0ICogYjExLFxuICAgIGEzICogIGI4ICsgIGE3ICogIGI5ICsgYTExICogYjEwICsgYTE1ICogYjExLFxuXG4gICAgYTAgKiBiMTIgKyAgYTQgKiBiMTMgKyAgYTggKiBiMTQgKyBhMTIgKiBiMTUsXG4gICAgYTEgKiBiMTIgKyAgYTUgKiBiMTMgKyAgYTkgKiBiMTQgKyBhMTMgKiBiMTUsXG4gICAgYTIgKiBiMTIgKyAgYTYgKiBiMTMgKyBhMTAgKiBiMTQgKyBhMTQgKiBiMTUsXG4gICAgYTMgKiBiMTIgKyAgYTcgKiBiMTMgKyBhMTEgKiBiMTQgKyBhMTUgKiBiMTUsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXRlcm1pbmFudDIobWF0cml4KSB7XG4gIGNvbnN0IFsgbTAsIG0xLCBtMiwgbTMgXSA9IG1hdHJpeDtcblxuICByZXR1cm4gKCBtMCAqIG0zIC0gbTIgKiBtMSApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGV0ZXJtaW5hbnQzKG1hdHJpeCkge1xuICBjb25zdCBbIG0wLCBtMSwgbTIsIG0zLCBtNCwgbTUsIG02LCBtNywgbTggXSA9IG1hdHJpeCxcblxuICAgICAgICBiMDEgPSAgbTggKiBtNCAtIG01ICogbTcsXG4gICAgICAgIGIxMSA9IC1tOCAqIG0zICsgbTUgKiBtNixcbiAgICAgICAgYjIxID0gIG03ICogbTMgLSBtNCAqIG02O1xuXG4gIHJldHVybiAoIG0wICogYjAxICsgbTEgKiBiMTEgKyBtMiAqIGIyMSApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGV0ZXJtaW5hbnQ0KG1hdHJpeCkge1xuICBjb25zdCBbIG0wLCBtMSwgbTIsIG0zLCBtNCwgbTUsIG02LCBtNywgbTgsIG05LCBtMTAsIG0xMSwgbTEyLCBtMTMsIG0xNCwgbTE1IF0gPSBtYXRyaXgsXG5cbiAgICAgICAgYjAwID0gbTAgKiBtNSAtIG0xICogbTQsXG4gICAgICAgIGIwMSA9IG0wICogbTYgLSBtMiAqIG00LFxuICAgICAgICBiMDIgPSBtMCAqIG03IC0gbTMgKiBtNCxcbiAgICAgICAgYjAzID0gbTEgKiBtNiAtIG0yICogbTUsXG4gICAgICAgIGIwNCA9IG0xICogbTcgLSBtMyAqIG01LFxuICAgICAgICBiMDUgPSBtMiAqIG03IC0gbTMgKiBtNixcbiAgICAgICAgYjA2ID0gbTggKiBtMTMgLSBtOSAqIG0xMixcbiAgICAgICAgYjA3ID0gbTggKiBtMTQgLSBtMTAgKiBtMTIsXG4gICAgICAgIGIwOCA9IG04ICogbTE1IC0gbTExICogbTEyLFxuICAgICAgICBiMDkgPSBtOSAqIG0xNCAtIG0xMCAqIG0xMyxcbiAgICAgICAgYjEwID0gbTkgKiBtMTUgLSBtMTEgKiBtMTMsXG4gICAgICAgIGIxMSA9IG0xMCAqIG0xNSAtIG0xMSAqIG0xNDtcblxuICByZXR1cm4gKCBiMDAgKiBiMTEgLSBiMDEgKiBiMTAgKyBiMDIgKiBiMDkgKyBiMDMgKiBiMDggLSBiMDQgKiBiMDcgKyBiMDUgKiBiMDYgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zcG9zZTIobWF0cml4KSB7XG4gIGNvbnN0IFsgbTAsIG0xLCBtMiwgbTMgXSA9IG1hdHJpeDtcblxuICByZXR1cm4gKFtcblxuICAgIG0wLCBtMixcbiAgICBtMSwgbTMsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc3Bvc2UzKG1hdHJpeCkge1xuICBjb25zdCBbIG0wLCBtMSwgbTIsIG0zLCBtNCwgbTUsIG02LCBtNywgbTggXSA9IG1hdHJpeDtcblxuICByZXR1cm4gKFtcblxuICAgIG0wLCBtMywgbTYsXG4gICAgbTEsIG00LCBtNyxcbiAgICBtMiwgbTUsIG04LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNwb3NlNChtYXRyaXgpIHtcbiAgY29uc3QgWyBtMCwgbTEsIG0yLCBtMywgbTQsIG01LCBtNiwgbTcsIG04LCBtOSwgbTEwLCBtMTEsIG0xMiwgbTEzLCBtMTQsIG0xNSBdID0gbWF0cml4O1xuXG4gIHJldHVybiAoW1xuXG4gICAgbTAsIG00LCBtOCwgbTEyLFxuICAgIG0xLCBtNSwgbTksIG0xMyxcbiAgICBtMiwgbTYsIG0xMCwgbTE0LFxuICAgIG0zLCBtNywgbTExLCBtMTUsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQyKG1hdHJpeCkge1xuICBjb25zdCBbIG0wLCBtMSwgbTIsIG0zIF0gPSBtYXRyaXgsXG5cbiAgICAgICAgZGV0ZXJtaW5hbnQgPSBkZXRlcm1pbmFudDIobWF0cml4KTtcblxuICByZXR1cm4gKFtcblxuICAgICttMyAvIGRldGVybWluYW50LCAtbTEgLyBkZXRlcm1pbmFudCxcbiAgICAtbTIgLyBkZXRlcm1pbmFudCwgK20wIC8gZGV0ZXJtaW5hbnQsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQzKG1hdHJpeCkge1xuICBjb25zdCBbIG0wLCBtMSwgbTIsIG0zLCBtNCwgbTUsIG02LCBtNywgbTggXSA9IG1hdHJpeCxcblxuICAgICAgICBkZXRlcm1pbmFudCA9IGRldGVybWluYW50MyhtYXRyaXgpLFxuXG4gICAgICAgIGIwMSA9ICBtOCAqIG00IC0gbTUgKiBtNyxcbiAgICAgICAgYjExID0gLW04ICogbTMgKyBtNSAqIG02LFxuICAgICAgICBiMjEgPSAgbTcgKiBtMyAtIG00ICogbTY7XG5cbiAgcmV0dXJuIChbXG5cbiAgICBiMDEgLyBkZXRlcm1pbmFudCwgKC1tOCAqIG0xICsgbTIgKiBtNykgLyBkZXRlcm1pbmFudCwgKCBtNSAqIG0xIC0gbTIgKiBtNCkgLyBkZXRlcm1pbmFudCxcbiAgICBiMTEgLyBkZXRlcm1pbmFudCwgKCBtOCAqIG0wIC0gbTIgKiBtNikgLyBkZXRlcm1pbmFudCwgKC1tNSAqIG0wICsgbTIgKiBtMykgLyBkZXRlcm1pbmFudCxcbiAgICBiMjEgLyBkZXRlcm1pbmFudCwgKC1tNyAqIG0wICsgbTEgKiBtNikgLyBkZXRlcm1pbmFudCwgKCBtNCAqIG0wIC0gbTEgKiBtMykgLyBkZXRlcm1pbmFudCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGludmVydDQobWF0cml4KSB7XG4gIGNvbnN0IFsgbTAsIG0xLCBtMiwgbTMsIG00LCBtNSwgbTYsIG03LCBtOCwgbTksIG0xMCwgbTExLCBtMTIsIG0xMywgbTE0LCBtMTUgXSA9IG1hdHJpeCxcblxuICAgICAgICBkZXRlcm1pbmFudCA9IGRldGVybWluYW50NChtYXRyaXgpLFxuXG4gICAgICAgIGIwMCA9IG0wICogbTUgLSBtMSAqIG00LFxuICAgICAgICBiMDEgPSBtMCAqIG02IC0gbTIgKiBtNCxcbiAgICAgICAgYjAyID0gbTAgKiBtNyAtIG0zICogbTQsXG4gICAgICAgIGIwMyA9IG0xICogbTYgLSBtMiAqIG01LFxuICAgICAgICBiMDQgPSBtMSAqIG03IC0gbTMgKiBtNSxcbiAgICAgICAgYjA1ID0gbTIgKiBtNyAtIG0zICogbTYsXG4gICAgICAgIGIwNiA9IG04ICogbTEzIC0gbTkgKiBtMTIsXG4gICAgICAgIGIwNyA9IG04ICogbTE0IC0gbTEwICogbTEyLFxuICAgICAgICBiMDggPSBtOCAqIG0xNSAtIG0xMSAqIG0xMixcbiAgICAgICAgYjA5ID0gbTkgKiBtMTQgLSBtMTAgKiBtMTMsXG4gICAgICAgIGIxMCA9IG05ICogbTE1IC0gbTExICogbTEzLFxuICAgICAgICBiMTEgPSBtMTAgKiBtMTUgLSBtMTEgKiBtMTQ7XG5cbiAgcmV0dXJuIChbXG5cbiAgICAobTUgKiBiMTEgLSBtNiAqIGIxMCArIG03ICogYjA5KSAvIGRldGVybWluYW50LCAobTIgKiBiMTAgLSBtMSAqIGIxMSAtIG0zICogYjA5KSAvIGRldGVybWluYW50LCAobTEzICogYjA1IC0gbTE0ICogYjA0ICsgbTE1ICogYjAzKSAvIGRldGVybWluYW50LCAobTEwICogYjA0IC0gbTkgKiBiMDUgLSBtMTEgKiBiMDMpIC8gZGV0ZXJtaW5hbnQsXG4gICAgKG02ICogYjA4IC0gbTQgKiBiMTEgLSBtNyAqIGIwNykgLyBkZXRlcm1pbmFudCwgKG0wICogYjExIC0gbTIgKiBiMDggKyBtMyAqIGIwNykgLyBkZXRlcm1pbmFudCwgKG0xNCAqIGIwMiAtIG0xMiAqIGIwNSAtIG0xNSAqIGIwMSkgLyBkZXRlcm1pbmFudCwgKG04ICogYjA1IC0gbTEwICogYjAyICsgbTExICogYjAxKSAvIGRldGVybWluYW50LFxuICAgIChtNCAqIGIxMCAtIG01ICogYjA4ICsgbTcgKiBiMDYpIC8gZGV0ZXJtaW5hbnQsIChtMSAqIGIwOCAtIG0wICogYjEwIC0gbTMgKiBiMDYpIC8gZGV0ZXJtaW5hbnQsIChtMTIgKiBiMDQgLSBtMTMgKiBiMDIgKyBtMTUgKiBiMDApIC8gZGV0ZXJtaW5hbnQsIChtOSAqIGIwMiAtIG04ICogYjA0IC0gbTExICogYjAwKSAvIGRldGVybWluYW50LFxuICAgIChtNSAqIGIwNyAtIG00ICogYjA5IC0gbTYgKiBiMDYpIC8gZGV0ZXJtaW5hbnQsIChtMCAqIGIwOSAtIG0xICogYjA3ICsgbTIgKiBiMDYpIC8gZGV0ZXJtaW5hbnQsIChtMTMgKiBiMDEgLSBtMTIgKiBiMDMgLSBtMTQgKiBiMDApIC8gZGV0ZXJtaW5hbnQsIChtOCAqIGIwMyAtIG05ICogYjAxICsgbTEwICogYjAwKSAvIGRldGVybWluYW50LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGU0KG1hdHJpeCwgdmVjdG9yKSB7XG4gIGNvbnN0IFsgeCwgeSwgeiBdID0gdmVjdG9yLFxuXG4gICAgICAgIFsgbTAsIG0xLCBtMiwgbTMsIG00LCBtNSwgbTYsIG03LCBtOCwgbTksIG0xMCwgbTExLCBtMTIsIG0xMywgbTE0LCBtMTUgXSA9IG1hdHJpeDtcblxuICByZXR1cm4gKFtcblxuICAgIG0wICogeCwgbTEgKiB4LCBtMiAqIHgsIG0zICogeCxcbiAgICBtNCAqIHksIG01ICogeSwgbTYgKiB5LCBtNyAqIHksXG4gICAgbTggKiB6LCBtOSAqIHosIG0xMCAqIHosIG0xMSAqIHosXG4gICAgbTEyICogMSwgbTEzICogMSwgbTE0ICogMSwgbTE1ICogMSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZTQobWF0cml4LCBhbmdsZSwgdmVjdG9yKSB7XG4gIGNvbnN0IFsgeCwgeSwgeiBdID0gbm9ybWFsaXNlMyh2ZWN0b3IpLFxuXG4gICAgICAgIFsgbTAsIG0xLCBtMiwgbTMsIG00LCBtNSwgbTYsIG03LCBtOCwgbTksIG0xMCwgbTExLCBtMTIsIG0xMywgbTE0LCBtMTUgXSA9IG1hdHJpeCxcblxuICAgICAgICBzID0gTWF0aC5zaW4oYW5nbGUpLFxuICAgICAgICBjID0gTWF0aC5jb3MoYW5nbGUpLFxuICAgICAgICB0ID0gMSAtIGMsXG5cbiAgICAgICAgYjAwID0geCAqIHggKiB0ICsgYyxcbiAgICAgICAgYjAxID0geSAqIHggKiB0ICsgeiAqIHMsXG4gICAgICAgIGIwMiA9IHogKiB4ICogdCAtIHkgKiBzLFxuICAgICAgICBiMTAgPSB4ICogeSAqIHQgLSB6ICogcyxcbiAgICAgICAgYjExID0geSAqIHkgKiB0ICsgYyxcbiAgICAgICAgYjEyID0geiAqIHkgKiB0ICsgeCAqIHMsXG4gICAgICAgIGIyMCA9IHggKiB6ICogdCArIHkgKiBzLFxuICAgICAgICBiMjEgPSB5ICogeiAqIHQgLSB4ICogcyxcbiAgICAgICAgYjIyID0geiAqIHogKiB0ICsgYztcblxuICByZXR1cm4gKFtcblxuICAgIG0wICogYjAwICsgbTQgKiBiMDEgKyBtOCAqIGIwMiwgbTEgKiBiMDAgKyBtNSAqIGIwMSArIG05ICogYjAyLCBtMiAqIGIwMCArIG02ICogYjAxICsgbTEwICogYjAyLCBtMyAqIGIwMCArIG03ICogYjAxICsgbTExICogYjAyLFxuICAgIG0wICogYjEwICsgbTQgKiBiMTEgKyBtOCAqIGIxMiwgbTEgKiBiMTAgKyBtNSAqIGIxMSArIG05ICogYjEyLCBtMiAqIGIxMCArIG02ICogYjExICsgbTEwICogYjEyLCBtMyAqIGIxMCArIG03ICogYjExICsgbTExICogYjEyLFxuICAgIG0wICogYjIwICsgbTQgKiBiMjEgKyBtOCAqIGIyMiwgbTEgKiBiMjAgKyBtNSAqIGIyMSArIG05ICogYjIyLCBtMiAqIGIyMCArIG02ICogYjIxICsgbTEwICogYjIyLCBtMyAqIGIyMCArIG03ICogYjIxICsgbTExICogYjIyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0xMiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTEzLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTE0LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTE1LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlNChtYXRyaXgsIHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHksIHogXSA9IHZlY3RvcixcblxuICAgICAgICBbIG0wLCBtMSwgbTIsIG0zLCBtNCwgbTUsIG02LCBtNywgbTgsIG05LCBtMTAsIG0xMSwgbTEyLCBtMTMsIG0xNCwgbTE1IF0gPSBtYXRyaXg7XG5cbiAgcmV0dXJuIChbXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTAsICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTQsICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtNSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtNiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtNyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTgsICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtOSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0xMCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0xMSxcbiAgICBtMCAqIHggKyBtNCAqIHkgKyBtOCAqIHogKyBtMTIsIG0xICogeCArIG01ICogeSArIG05ICogeiArIG0xMywgbTIgKiB4ICsgbTYgKiB5ICsgbTEwICogeiArIG0xNCwgbTMgKiB4ICsgbTcgKiB5ICsgbTExICogeiArIG0xNSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcnNwZWN0aXZlNChmaWVsZE9mVmlldywgYXNwZWN0UmF0aW8sIHpOZWFyLCB6RmFyKSB7XG4gIGNvbnN0IGYgPSAxIC8gTWF0aC50YW4oZmllbGRPZlZpZXcgLyAyKSxcbiAgICAgICAgbmYgPSAxIC8gKHpOZWFyIC0gekZhcik7XG5cbiAgcmV0dXJuIChbXG5cbiAgICBmIC8gYXNwZWN0UmF0aW8sIDAsIDAsICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgIDAsICAgICAgICAgICAgICAgZiwgMCwgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgMCwgICAgICAgICAgICAgICAwLCAoekZhciArIHpOZWFyKSAqIG5mLCAgICAtMSxcbiAgICAwLCAgICAgICAgICAgICAgIDAsICgyICogekZhciAqIHpOZWFyKSAqIG5mLCAwLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGlkZW50aXR5MixcbiAgaWRlbnRpdHkzLFxuICBpZGVudGl0eTQsXG4gIG11bHRpcGx5MixcbiAgbXVsdGlwbHkzLFxuICBtdWx0aXBseTQsXG4gIGRldGVybWluYW50MixcbiAgZGV0ZXJtaW5hbnQzLFxuICBkZXRlcm1pbmFudDQsXG4gIHRyYW5zcG9zZTIsXG4gIHRyYW5zcG9zZTMsXG4gIHRyYW5zcG9zZTQsXG4gIGludmVydDIsXG4gIGludmVydDMsXG4gIGludmVydDQsXG4gIHNjYWxlNCxcbiAgcm90YXRlNCxcbiAgdHJhbnNsYXRlNCxcbiAgcGVyc3BlY3RpdmU0XG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzY2FsZTMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IERFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgaWRlbnRpdHk0LCBzY2FsZTQsIGludmVydDQsIHJvdGF0ZTQsIHRyYW5zbGF0ZTQsIHRyYW5zcG9zZTQsIHBlcnNwZWN0aXZlNCB9IGZyb20gXCIuLi9tYXRocy9tYXRyaXhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlTWF0cml4RnJvbVNjYWxlKHNjYWxlKSB7XG4gIGxldCBzY2FsZU1hdHJpeCA9IGlkZW50aXR5NCgpO1xuXG4gIHNjYWxlTWF0cml4ID0gc2NhbGU0KHNjYWxlTWF0cml4LCBzY2FsZSk7XG5cbiAgcmV0dXJuIHNjYWxlTWF0cml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzKG9mZnNldHMpIHtcbiAgbGV0IG9mZnNldHNNYXRyaXggPSBpZGVudGl0eTQoKTsgLy8vXG5cbiAgb2Zmc2V0c01hdHJpeCA9IHRyYW5zbGF0ZTQob2Zmc2V0c01hdHJpeCwgb2Zmc2V0cyk7XG5cbiAgcmV0dXJuIG9mZnNldHNNYXRyaXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3NpdGlvbk1hdHJpeEZyb21Ob3RoaW5nKCkge1xuICBsZXQgcG9zaXRpb25NYXRyaXggPSBpZGVudGl0eTQoKTsgLy8vXG5cbiAgcmV0dXJuIHBvc2l0aW9uTWF0cml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UoZGlzdGFuY2UpIHtcbiAgbGV0IHBvc2l0aW9uTWF0cml4ID0gaWRlbnRpdHk0KCk7IC8vL1xuXG4gIGNvbnN0IHggPSAwLFxuICAgICAgICB5ID0gMCxcbiAgICAgICAgeiA9IC1kaXN0YW5jZTtcblxuICBwb3NpdGlvbk1hdHJpeCA9IHRyYW5zbGF0ZTQocG9zaXRpb25NYXRyaXgsIFsgeCwgeSwgeiBdKTtcblxuICByZXR1cm4gcG9zaXRpb25NYXRyaXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3NpdGlvbk1hdHJpeEZyb21Qb3NpdGlvbihwb3NpdGlvbikge1xuICBsZXQgcG9zaXRpb25NYXRyaXggPSBpZGVudGl0eTQoKTsgLy8vXG5cbiAgcG9zaXRpb25NYXRyaXggPSB0cmFuc2xhdGU0KHBvc2l0aW9uTWF0cml4LCBwb3NpdGlvbik7XG5cbiAgcmV0dXJuIHBvc2l0aW9uTWF0cml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyhhbmdsZXMsIHJldmVyc2VPcmRlciA9IGZhbHNlKSB7XG4gIGxldCByb3RhdGlvbnNNYXRyaXggPSBpZGVudGl0eTQoKTsgLy8vXG5cbiAgY29uc3QgZmlyc3RBbmdsZSA9IGZpcnN0KGFuZ2xlcyksXG4gICAgICAgIHNlY29uZEFuZ2xlID0gc2Vjb25kKGFuZ2xlcyksXG4gICAgICAgIHRoaXJkQW5nbGUgPSB0aGlyZChhbmdsZXMpLFxuICAgICAgICB4QW5nbGUgPSBmaXJzdEFuZ2xlLCAgLy8vL1xuICAgICAgICB5QW5nbGUgPSBzZWNvbmRBbmdsZSwgLy8vXG4gICAgICAgIHpBbmdsZSA9IHRoaXJkQW5nbGUsICAvLy9cbiAgICAgICAgeEF4aXMgPSBbIDEsIDAsIDAgXSxcbiAgICAgICAgeUF4aXMgPSBbIDAsIDEsIDAgXSxcbiAgICAgICAgekF4aXMgPSBbIDAsIDAsIDEgXTtcblxuICBpZiAocmV2ZXJzZU9yZGVyKSB7XG4gICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRlNChyb3RhdGlvbnNNYXRyaXgsIHpBbmdsZSwgekF4aXMpO1xuICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0ZTQocm90YXRpb25zTWF0cml4LCB5QW5nbGUsIHlBeGlzKTtcbiAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGU0KHJvdGF0aW9uc01hdHJpeCwgeEFuZ2xlLCB4QXhpcyk7XG4gIH0gZWxzZSB7XG4gICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRlNChyb3RhdGlvbnNNYXRyaXgsIHhBbmdsZSwgeEF4aXMpO1xuICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0ZTQocm90YXRpb25zTWF0cml4LCB5QW5nbGUsIHlBeGlzKTtcbiAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGU0KHJvdGF0aW9uc01hdHJpeCwgekFuZ2xlLCB6QXhpcyk7XG4gIH1cblxuICByZXR1cm4gcm90YXRpb25zTWF0cml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRpb25zTWF0cml4RnJvbVJvdGF0aW9ucyhyb3RhdGlvbnMpIHtcbiAgY29uc3Qgc2NhbGFyID0gREVHUkVFU19UT19SQURJQU5TX01VTFRJUExJRVIsIC8vL1xuICAgICAgICBhbmdsZXMgPSBzY2FsZTMocm90YXRpb25zLCBzY2FsYXIpLFxuICAgICAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcyk7XG5cbiAgcmV0dXJuIHJvdGF0aW9uc01hdHJpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4KHJvdGF0aW9uc01hdHJpeCkge1xuICBsZXQgbm9ybWFsc01hdHJpeCA9IGludmVydDQocm90YXRpb25zTWF0cml4KTsgLy8vXG5cbiAgbm9ybWFsc01hdHJpeCA9IHRyYW5zcG9zZTQobm9ybWFsc01hdHJpeCk7XG5cbiAgcmV0dXJuIG5vcm1hbHNNYXRyaXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0aW9uTWF0cml4RnJvbUNhbWVyYUFuZENhbnZhcyhjYW1lcmEsIGNhbnZhcykge1xuICBjb25zdCB6RmFyID0gY2FtZXJhLmdldFpGYXIoKSxcbiAgICAgICAgek5lYXIgPSBjYW1lcmEuZ2V0Wk5lYXIoKSxcbiAgICAgICAgd2lkdGggPSBjYW52YXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgaGVpZ2h0ID0gY2FudmFzLmdldEhlaWdodCgpLFxuICAgICAgICBmaWVsZE9mVmlldyA9IGNhbWVyYS5nZXRGaWVsZE9mVmlldygpLFxuICAgICAgICBhc3BlY3RSYXRpbyA9ICggd2lkdGggLyBoZWlnaHQgKSxcbiAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IHBlcnNwZWN0aXZlNChmaWVsZE9mVmlldywgYXNwZWN0UmF0aW8sIHpOZWFyLCB6RmFyKTtcblxuICByZXR1cm4gcHJvamVjdGlvbk1hdHJpeDtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbXVsdGlwbHk0IH0gZnJvbSBcIi4uL21hdGhzL21hdHJpeFwiO1xuaW1wb3J0IHsgdHJhbnNmb3JtNCB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IHNjYWxlTWF0cml4RnJvbVNjYWxlLCBwb3NpdGlvbk1hdHJpeEZyb21Qb3NpdGlvbiwgcm90YXRpb25zTWF0cml4RnJvbVJvdGF0aW9ucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbWF0cml4XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wb3NlVHJhbnNmb3JtKHNjYWxlLCBwb3NpdGlvbiwgcm90YXRpb25zKSB7XG4gIGxldCBtYXRyaXggPSBudWxsO1xuXG4gIGlmIChzY2FsZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNjYWxlTWF0cml4ID0gc2NhbGVNYXRyaXhGcm9tU2NhbGUoc2NhbGUpO1xuXG4gICAgbWF0cml4ID0gKG1hdHJpeCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgc2NhbGVNYXRyaXggOlxuICAgICAgICAgICAgICAgICBtdWx0aXBseTQoc2NhbGVNYXRyaXgsIG1hdHJpeCk7XG4gIH1cblxuICBpZiAocm90YXRpb25zICE9PSBudWxsKSB7XG4gICAgY29uc3Qgcm90YXRpb25zTWF0cml4ID0gcm90YXRpb25zTWF0cml4RnJvbVJvdGF0aW9ucyhyb3RhdGlvbnMpO1xuXG4gICAgbWF0cml4ID0gKG1hdHJpeCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgcm90YXRpb25zTWF0cml4IDpcbiAgICAgICAgICAgICAgICAgbXVsdGlwbHk0KHJvdGF0aW9uc01hdHJpeCwgbWF0cml4KTtcblxuICB9XG5cbiAgaWYgKHBvc2l0aW9uICE9PSBudWxsKSB7XG4gICAgY29uc3QgcG9zaXRpb25NYXRyaXggPSBwb3NpdGlvbk1hdHJpeEZyb21Qb3NpdGlvbihwb3NpdGlvbik7XG5cbiAgICBtYXRyaXggPSAobWF0cml4ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgcG9zaXRpb25NYXRyaXggOlxuICAgICAgICAgICAgICAgICAgbXVsdGlwbHk0KHBvc2l0aW9uTWF0cml4LCBtYXRyaXgpO1xuICB9XG5cbiAgY29uc3QgdHJhbnNmb3JtID0gKG1hdHJpeCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICh2ZWN0b3IpID0+IHZlY3RvciA6XG4gICAgICAgICAgICAgICAgICAgICAgICAodmVjdG9yKSA9PiB0cmFuc2Zvcm00KFsgLi4udmVjdG9yLCAxIF0sIG1hdHJpeCkuc2xpY2UoMCwgMyk7XG5cbiAgcmV0dXJuIHRyYW5zZm9ybTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcbmltcG9ydCBNYXNraW5nRmFjZXQgZnJvbSBcIi4uL3ByaW1pdGl2ZS9tYXNraW5nRmFjZXRcIjtcblxuaW1wb3J0IHsgYWRkIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHtjb21wb3NlVHJhbnNmb3JtfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3RyYW5zZm9ybVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXNrIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlZmVyZW5jZSwgdHJhbnNmb3JtKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFRyYW5zZm9ybSgpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm07XG4gIH1cblxuICByZXRyaWV2ZU1hc2tpbmdGYWNldHMoKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpLFxuICAgICAgICAgIGZhY2V0cyA9IHJldHJpZXZlRmFjZXRzKGNoaWxkRWxlbWVudHMpLFxuICAgICAgICAgIG1hc2tpbmdGYWNldHMgPSBmYWNldHMubWFwKChmYWNldCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWFza2luZ0ZhY2V0ID0gTWFza2luZ0ZhY2V0LmZyb21GYWNldChmYWNldCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBtYXNraW5nRmFjZXQ7XG4gICAgICAgICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIG1hc2tpbmdGYWNldHM7ICAgICAgICAgIFxuICB9XG5cbiAgbWFza0VsZW1lbnQoZWxlbWVudCwgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IG1hc2tpbmdGYWNldHMgPSB0aGlzLnJldHJpZXZlTWFza2luZ0ZhY2V0cygpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIG1hc2tFbGVtZW50KGVsZW1lbnQsIG1hc2tpbmdGYWNldHMsIG1hcmdpbk9mRXJyb3IpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICAgIG1hc2tFbGVtZW50KGNoaWxkRWxlbWVudCwgbWFza2luZ0ZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gICAgfSk7XG4gIH1cblxuICBhcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgICAgY2hpbGRFbGVtZW50LmFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVGYWNldHMobWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgICBjaGlsZEVsZW1lbnQuY3JlYXRlRmFjZXRzKG1hcmdpbk9mRXJyb3IpO1xuICAgIH0pO1xuICB9XG5cbiAgbWFza0ZhY2V0cyhtYXNrcywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgICBjaGlsZEVsZW1lbnQubWFza0ZhY2V0cyhtYXNrcywgbWFyZ2luT2ZFcnJvcik7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFwcGx5VHJhbnNmb3JtKHRoaXMudHJhbnNmb3JtKTsgIC8vL1xuICB9XG5cbiAgYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHt9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHJlZmVyZW5jZSwgc2NhbGUgPSBudWxsLCBwb3NpdGlvbiA9IG51bGwsIHJvdGF0aW9ucyA9IG51bGwgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdHJhbnNmb3JtID0gY29tcG9zZVRyYW5zZm9ybShzY2FsZSwgcG9zaXRpb24sIHJvdGF0aW9ucyksXG4gICAgICAgICAgbWFzayA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoTWFzaywgcHJvcGVydGllcywgcmVmZXJlbmNlLCB0cmFuc2Zvcm0pO1xuXG4gICAgcmV0dXJuIG1hc2s7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmV0cmlldmVGYWNldHMoY2hpbGRFbGVtZW50cywgZmFjZXRzID0gW10pIHtcbiAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gY2hpbGRFbGVtZW50LCAvLy9cbiAgICAgICAgICBlbGVtZW50RmFjZXRzID0gZWxlbWVudC5nZXRGYWNldHMoKSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudC5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBhZGQoZmFjZXRzLCBlbGVtZW50RmFjZXRzKTtcblxuICAgIHJldHJpZXZlRmFjZXRzKGNoaWxkRWxlbWVudHMsIGZhY2V0cyk7XG4gIH0pO1xuXG4gIHJldHVybiBmYWNldHM7XG59XG5cbmZ1bmN0aW9uIG1hc2tFbGVtZW50KGVsZW1lbnQsIG1hc2tpbmdGYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgbGV0IGZhY2V0cyA9IGVsZW1lbnQuZ2V0RmFjZXRzKCk7XG5cbiAgbWFza2luZ0ZhY2V0cy5mb3JFYWNoKChtYXNraW5nRmFjZXQpID0+IHtcbiAgICBjb25zdCB1bm1hc2tlZEZhY2V0cyA9IFtdO1xuXG4gICAgZmFjZXRzLmZvckVhY2goKGZhY2V0KSA9PiB7XG4gICAgICBtYXNraW5nRmFjZXQubWFza0ZhY2V0KGZhY2V0LCB1bm1hc2tlZEZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gICAgfSk7XG5cbiAgICBmYWNldHMgPSB1bm1hc2tlZEZhY2V0czsgIC8vL1xuICB9KTtcblxuICBlbGVtZW50LnNldEZhY2V0cyhmYWNldHMpO1xuXG4gIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmdldENoaWxkRWxlbWVudHMoKTtcblxuICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBjaGlsZEVsZW1lbnQ7IC8vL1xuXG4gICAgbWFza0VsZW1lbnQoZWxlbWVudCwgbWFza2luZ0ZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gIH0pO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudHNGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzLCBDbGFzcykge1xuICBjb25zdCBlbGVtZW50cyA9IGNoaWxkRWxlbWVudHMucmVkdWNlKChlbGVtZW50cywgY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgaWYgKGNoaWxkRWxlbWVudCBpbnN0YW5jZW9mIENsYXNzKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gY2hpbGRFbGVtZW50OyAgLy8vXG5cbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50cztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzLCBDbGFzcykge1xuICBjb25zdCBlbGVtZW50ID0gY2hpbGRFbGVtZW50cy5yZWR1Y2UoKGVsZW1lbnQsIGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIGlmIChlbGVtZW50ID09PSBudWxsKSB7XG4gICAgICBpZiAoY2hpbGRFbGVtZW50IGluc3RhbmNlb2YgQ2xhc3MpIHtcbiAgICAgICAgZWxlbWVudCA9IGNoaWxkRWxlbWVudDsgIC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gZWxlbWVudDtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hc2sgZnJvbSBcIi4vbWFza1wiO1xuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuaW1wb3J0IHsgY29tcG9zZVRyYW5zZm9ybSB9IGZyb20gXCIuLi91dGlsaXRpZXMvdHJhbnNmb3JtXCI7XG5pbXBvcnQgeyBlbGVtZW50c0Zyb21DaGlsZEVsZW1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IobWFza1JlZmVyZW5jZSwgdHJhbnNmb3JtLCBmYWNldHMsIG1hc2tzKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMubWFza1JlZmVyZW5jZSA9IG1hc2tSZWZlcmVuY2U7XG4gICAgdGhpcy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7XG4gICAgdGhpcy5tYXNrcyA9IG1hc2tzO1xuICB9XG5cbiAgZ2V0TWFza1JlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXNrUmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0VHJhbnNmb3JtKCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybTtcbiAgfVxuXG4gIGdldEZhY2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5mYWNldHM7XG4gIH1cblxuICBnZXRNYXNrcygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXNrcztcbiAgfVxuXG4gIHNldEZhY2V0cyhmYWNldHMpIHtcbiAgICB0aGlzLmZhY2V0cyA9IGZhY2V0cztcbiAgfVxuXG4gIGFwcGx5TWFzayhtYXNrcywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGlmICh0aGlzLm1hc2tSZWZlcmVuY2UgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1hc2sgPSBtYXNrcy5maW5kKChtYXNrKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IG1hc2suZ2V0UmVmZXJlbmNlKCk7XG5cbiAgICAgICAgaWYgKHJlZmVyZW5jZSA9PT0gdGhpcy5tYXNrUmVmZXJlbmNlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pIHx8IG51bGw7IC8vL1xuXG4gICAgICBpZiAobWFzayAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICAgICAgbWFzay5tYXNrRWxlbWVudChlbGVtZW50LCBtYXJnaW5PZkVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICB0aGlzLmZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4ge1xuICAgICAgZmFjZXQuYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKTtcbiAgICB9KTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgICBjaGlsZEVsZW1lbnQuYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUZhY2V0cyhtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICAgIGNoaWxkRWxlbWVudC5jcmVhdGVGYWNldHMobWFyZ2luT2ZFcnJvcik7XG4gICAgfSk7XG4gIH1cblxuICBtYXNrRmFjZXRzKG1hc2tzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgbWFza3MgPSBbIC4uLm1hc2tzLCAuLi50aGlzLm1hc2tzIF07IC8vL1xuXG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICAgIGNoaWxkRWxlbWVudC5tYXNrRmFjZXRzKG1hc2tzLCBtYXJnaW5PZkVycm9yKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXBwbHlUcmFuc2Zvcm0odGhpcy50cmFuc2Zvcm0pOyAgLy8vXG5cbiAgICB0aGlzLmFwcGx5TWFzayhtYXNrcywgbWFyZ2luT2ZFcnJvcik7XG4gIH1cblxuICBhZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgICBjaGlsZEVsZW1lbnQuYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IGNoaWxkRWxlbWVudHMsIHNjYWxlID0gbnVsbCwgcG9zaXRpb24gPSBudWxsLCByb3RhdGlvbnMgPSBudWxsLCBtYXNrUmVmZXJlbmNlID0gbnVsbCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0cmFuc2Zvcm0gPSBjb21wb3NlVHJhbnNmb3JtKHNjYWxlLCBwb3NpdGlvbiwgcm90YXRpb25zKSxcbiAgICAgICAgICBmYWNldHMgPSBbXSxcbiAgICAgICAgICBtYXNrcyA9IGVsZW1lbnRzRnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cywgTWFzayksXG4gICAgICAgICAgY2FudmFzRWxlbWVudCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIG1hc2tSZWZlcmVuY2UsIHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBjYW52YXNFbGVtZW50O1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDYW52YXNFbGVtZW50IGZyb20gXCIuLi8uLi9lbGVtZW50L2NhbnZhc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdW5jdGlvbkNhbnZhc0VsZW1lbnQgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBmdW5jdGlvbkNhbnZhc0VsZW1lbnQgPSBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKEZ1bmN0aW9uQ2FudmFzRWxlbWVudCwgcHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb25DYW52YXNFbGVtZW50O1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGYWxzZXlFbGVtZW50cyhlbGVtZW50cykge1xuICBlbGVtZW50cyA9IGVsZW1lbnRzLnJlZHVjZSgoZWxlbWVudHMsIGVsZW1lbnQpID0+IHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudHM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuL2VsZW1lbnRcIjtcbmltcG9ydCBGdW5jdGlvbkNhbnZhc0VsZW1lbnQgZnJvbSBcIi4vZWxlbWVudC9jYW52YXMvZnVuY3Rpb25cIjtcblxuaW1wb3J0IHsgRlVOQ1RJT04gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGZsYXR0ZW4sIGd1YXJhbnRlZSB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgcmVtb3ZlRmFsc2V5RWxlbWVudHMgfSBmcm9tIFwiLi91dGlsaXRpZXMvZWxlbWVudHNcIjtcblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZEVsZW1lbnRzKSB7XG4gIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzIHx8IHt9OyAgLy8vXG5cbiAgY2hpbGRFbGVtZW50cyA9IHNhbml0aXNlQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTsgLy8vXG5cbiAgbGV0IGVsZW1lbnQ7XG5cbiAgaWYgKGlzU3ViY2xhc3NPZihmaXJzdEFyZ3VtZW50LCBFbGVtZW50KSkge1xuICAgIGNvbnN0IENsYXNzID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgT2JqZWN0LmFzc2lnbihwcm9wZXJ0aWVzLCB7XG4gICAgICBjaGlsZEVsZW1lbnRzXG4gICAgfSk7XG5cbiAgICBlbGVtZW50ID0gQ2xhc3MuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09IEZVTkNUSU9OKSB7XG4gICAgY29uc3QgZnVuYyA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gZ3VhcmFudGVlKGZ1bmMocHJvcGVydGllcykpO1xuXG4gICAgT2JqZWN0LmFzc2lnbihwcm9wZXJ0aWVzLCB7XG4gICAgICBjaGlsZEVsZW1lbnRzXG4gICAgfSk7XG5cbiAgICBlbGVtZW50ID0gRnVuY3Rpb25DYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmNvbnN0IFJlYWN0ID0ge1xuICBjcmVhdGVFbGVtZW50XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdDtcblxuZnVuY3Rpb24gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcykge1xuICBjb25zdCBzdWJjbGFzc09mID0gKGFyZ3VtZW50LnByb3RvdHlwZSBpbnN0YW5jZW9mIENsYXNzKTtcblxuICByZXR1cm4gc3ViY2xhc3NPZjtcbn1cblxuZnVuY3Rpb24gc2FuaXRpc2VDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpIHtcbiAgY2hpbGRFbGVtZW50cyA9IGZsYXR0ZW4oY2hpbGRFbGVtZW50cyk7XG5cbiAgY2hpbGRFbGVtZW50cyA9IHJlbW92ZUZhbHNleUVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuXG4gIHJldHVybiBjaGlsZEVsZW1lbnRzO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcIi4vcmVhY3RcIjtcblxuT2JqZWN0LmFzc2lnbihnbG9iYWxUaGlzLCB7XG4gIFJlYWN0XG59KTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgREVGQVVMVF9ERVBUSCB9IGZyb20gXCIuLi9kZWZhdWx0c1wiO1xuXG5mdW5jdGlvbiBjbGVhckRlcHRoKGRlcHRoID0gREVGQVVMVF9ERVBUSCkge1xuICB0aGlzLmNvbnRleHQuY2xlYXJEZXB0aChkZXB0aCk7IFxufVxuXG5mdW5jdGlvbiBjbGVhckRlcHRoQnVmZmVyKCkge1xuICBjb25zdCB7IERFUFRIX0JVRkZFUl9CSVQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgbWFzayA9IERFUFRIX0JVRkZFUl9CSVQ7XG5cbiAgdGhpcy5jb250ZXh0LmNsZWFyKG1hc2spO1xufVxuXG5mdW5jdGlvbiBlbmFibGVEZXB0aFRlc3RpbmcoKSB7XG4gIGNvbnN0IHsgREVQVEhfVEVTVCwgTEVRVUFMIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIGNhcGFjaXR5ID0gREVQVEhfVEVTVCxcbiAgICAgICAgZGVwdGhDb21wYXJpc29uRnVuY3Rpb24gPSBMRVFVQUw7XG5cbiAgdGhpcy5jb250ZXh0LmVuYWJsZShjYXBhY2l0eSk7XG5cbiAgdGhpcy5jb250ZXh0LmRlcHRoRnVuYyhkZXB0aENvbXBhcmlzb25GdW5jdGlvbik7XG59XG5cbmNvbnN0IGRlcHRoTWl4aW5zID0ge1xuICBjbGVhckRlcHRoLFxuICBjbGVhckRlcHRoQnVmZmVyLFxuICBlbmFibGVEZXB0aFRlc3Rpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlcHRoTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgU0hBREVSX0VSUk9SID0gXCJVbmFibGUgdG8gY3JlYXRlIHRoZSBzaGFkZXIuXCI7XG5leHBvcnQgY29uc3QgV0VCX0dMX0NPTlRFWFRfRVJST1IgPSBcIlVuYWJsZSB0byBnZXQgdGhlIFdlYkdMIGNvbnRleHQuXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNIQURFUl9FUlJPUiB9IGZyb20gXCIuLi9lcnJvcnNcIjtcblxuZnVuY3Rpb24gY3JlYXRlU2hhZGVyKHR5cGUsIHNoYWRlclNvdXJjZSkge1xuICBjb25zdCB7IENPTVBJTEVfU1RBVFVTIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHBuYW1lID0gQ09NUElMRV9TVEFUVVMsXG4gICAgICAgIHNoYWRlciA9IHRoaXMuY29udGV4dC5jcmVhdGVTaGFkZXIodHlwZSk7XG5cbiAgdGhpcy5jb250ZXh0LnNoYWRlclNvdXJjZShzaGFkZXIsIHNoYWRlclNvdXJjZSk7XG5cbiAgdGhpcy5jb250ZXh0LmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcblxuICBjb25zdCBjb21waWxlU3RhdHVzID0gdGhpcy5jb250ZXh0LmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIHBuYW1lKTtcblxuICBpZiAoIWNvbXBpbGVTdGF0dXMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoU0hBREVSX0VSUk9SKTtcbiAgfVxuXG4gIHJldHVybiBzaGFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVZlcnRleFNoYWRlcih2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGNhbnZhcykge1xuICBjb25zdCB7IFZFUlRFWF9TSEFERVIgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdHlwZSA9IFZFUlRFWF9TSEFERVIsXG4gICAgICAgIHZlcnRleFNoYWRlciA9IHRoaXMuY3JlYXRlU2hhZGVyKHR5cGUsIHZlcnRleFNoYWRlclNvdXJjZSk7XG5cbiAgcmV0dXJuIHZlcnRleFNoYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRnJhZ21lbnRTaGFkZXIoZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcykge1xuICBjb25zdCB7IEZSQUdNRU5UX1NIQURFUiB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0eXBlID0gRlJBR01FTlRfU0hBREVSLFxuICAgICAgICBmcmFnbWVudFNoYWRlciA9IHRoaXMuY3JlYXRlU2hhZGVyKHR5cGUsIGZyYWdtZW50U2hhZGVyU291cmNlKTtcblxuICByZXR1cm4gZnJhZ21lbnRTaGFkZXI7XG59XG5cbmNvbnN0IHNoYWRlck1peGlucyA9IHtcbiAgY3JlYXRlU2hhZGVyLFxuICBjcmVhdGVWZXJ0ZXhTaGFkZXIsXG4gIGNyZWF0ZUZyYWdtZW50U2hhZGVyXG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaGFkZXJNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRCdWZmZXIoZGF0YSkge1xuICBjb25zdCB7IEVMRU1FTlRfQVJSQVlfQlVGRkVSLCBTVEFUSUNfRFJBVyB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0YXJnZXQgPSBFTEVNRU5UX0FSUkFZX0JVRkZFUixcbiAgICAgICAgdXNhZ2UgPSBTVEFUSUNfRFJBVyxcbiAgICAgICAgdWludDE2QXJyYXkgPSBuZXcgVWludDE2QXJyYXkoZGF0YSksXG4gICAgICAgIGVsZW1lbnRCdWZmZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlQnVmZmVyKCk7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGFyZ2V0LCBlbGVtZW50QnVmZmVyKTtcblxuICB0aGlzLmNvbnRleHQuYnVmZmVyRGF0YSh0YXJnZXQsIHVpbnQxNkFycmF5LCB1c2FnZSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRCdWZmZXI7XG59XG5cbmZ1bmN0aW9uIGJpbmRFbGVtZW50QnVmZmVyKGVsZW1lbnRCdWZmZXIpIHtcbiAgY29uc3QgeyBFTEVNRU5UX0FSUkFZX0JVRkZFUiB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0YXJnZXQgPSBFTEVNRU5UX0FSUkFZX0JVRkZFUjtcblxuICB0aGlzLmNvbnRleHQuYmluZEJ1ZmZlcih0YXJnZXQsIGVsZW1lbnRCdWZmZXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCdWZmZXIoZGF0YSkge1xuICBjb25zdCB7IEFSUkFZX0JVRkZFUiwgU1RBVElDX0RSQVcgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdGFyZ2V0ID0gQVJSQVlfQlVGRkVSLFxuICAgICAgICB1c2FnZSA9IFNUQVRJQ19EUkFXLFxuICAgICAgICBidWZmZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlQnVmZmVyKCksXG4gICAgICAgIGZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoZGF0YSk7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGFyZ2V0LCBidWZmZXIpO1xuXG4gIHRoaXMuY29udGV4dC5idWZmZXJEYXRhKHRhcmdldCwgZmxvYXQzMkFycmF5LCB1c2FnZSk7XG5cbiAgcmV0dXJuIGJ1ZmZlcjtcbn1cblxuZnVuY3Rpb24gYmluZEJ1ZmZlcihidWZmZXIsIGF0dHJpYnV0ZUxvY2F0aW9uLCBjb21wb25lbnRzKSB7XG4gIGNvbnN0IHsgQVJSQVlfQlVGRkVSLCBGTE9BVCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0YXJnZXQgPSBBUlJBWV9CVUZGRVIsXG4gICAgICAgIHR5cGUgPSBGTE9BVCxcbiAgICAgICAgbm9ybWFsaXplID0gZmFsc2UsXG4gICAgICAgIHN0cmlkZSA9IDAsXG4gICAgICAgIG9mZnNldCA9IDA7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGFyZ2V0LCBidWZmZXIpO1xuXG4gIHRoaXMuY29udGV4dC52ZXJ0ZXhBdHRyaWJQb2ludGVyKGF0dHJpYnV0ZUxvY2F0aW9uLCBjb21wb25lbnRzLCB0eXBlLCBub3JtYWxpemUsIHN0cmlkZSwgb2Zmc2V0KTtcblxuICB0aGlzLmNvbnRleHQuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoYXR0cmlidXRlTG9jYXRpb24pO1xufVxuXG5jb25zdCBidWZmZXJNaXhpbnMgPSB7XG4gIGNyZWF0ZUVsZW1lbnRCdWZmZXIsXG4gIGJpbmRFbGVtZW50QnVmZmVyLFxuICBjcmVhdGVCdWZmZXIsXG4gIGJpbmRCdWZmZXJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJ1ZmZlck1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gY2xlYXJDb2xvdXIoY29sb3VyKSB7XG4gIGNvbnN0IFsgciwgZywgYiwgYSA9IDEgXSA9ICBjb2xvdXI7XG5cbiAgdGhpcy5jb250ZXh0LmNsZWFyQ29sb3IociwgZywgYiwgYSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ29sb3VyQnVmZmVyKCkge1xuICBjb25zdCB7IENPTE9SX0JVRkZFUl9CSVQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgbWFzayA9IENPTE9SX0JVRkZFUl9CSVQ7XG5cbiAgdGhpcy5jb250ZXh0LmNsZWFyKG1hc2spO1xufVxuXG5jb25zdCBjb2xvdXJNaXhpbnMgPSB7XG4gIGNsZWFyQ29sb3VyLFxuICBjbGVhckNvbG91ckJ1ZmZlclxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29sb3VyTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBhcHBseU1hdHJpeCh1bmlmb3JtTG9jYXRpb24sIG1hdHJpeCkge1xuICBjb25zdCB0cmFuc3Bvc2UgPSBmYWxzZTsgIC8vL1xuXG4gIHRoaXMuY29udGV4dC51bmlmb3JtTWF0cml4NGZ2KHVuaWZvcm1Mb2NhdGlvbiwgdHJhbnNwb3NlLCBtYXRyaXgpO1xufVxuXG5jb25zdCBtYXRyaXhNaXhpbnMgPSB7XG4gIGFwcGx5TWF0cml4XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYXRyaXhNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVYVF9URVhUVVJFX0ZJTFRFUl9BTklTT1RST1BJQyxcbiAgICAgICAgIE1PWl9FWFRfVEVYVFVSRV9GSUxURVJfQU5JU09UUk9QSUMsXG4gICAgICAgICBXRUJLSVRfRVhUX1RFWFRVUkVfRklMVEVSX0FOSVNPVFJPUElDIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVUZXh0dXJlKGltYWdlLCBpbmRleCwgcmVwZWF0KSB7XG5cdGNvbnN0IHsgUkdCQSwgTElORUFSLCBVTlNJR05FRF9CWVRFLCBURVhUVVJFMCwgVEVYVFVSRV8yRCwgVEVYVFVSRV9XUkFQX1MsIFRFWFRVUkVfV1JBUF9ULCBVTlBBQ0tfRkxJUF9ZX1dFQkdMLCBDTEFNUF9UT19FREdFLCBORUFSRVNULCBSRVBFQVQsIFRFWFRVUkVfTUlOX0ZJTFRFUiB9ID0gdGhpcy5jb250ZXh0LFxuXHRcdFx0XHR0YXJnZXQgPSBURVhUVVJFMCArIGluZGV4LFxuXHRcdFx0XHRsZXZlbCA9IDAsXG5cdFx0XHRcdGludGVybmFsRm9ybWF0ID0gUkdCQSxcblx0XHRcdFx0Zm9ybWF0ID0gUkdCQSxcblx0XHRcdFx0dHlwZSA9IFVOU0lHTkVEX0JZVEUsXG5cdFx0XHRcdHRleHR1cmUgPSB0aGlzLmNvbnRleHQuY3JlYXRlVGV4dHVyZSgpO1xuXG4gIHRoaXMuY29udGV4dC5hY3RpdmVUZXh0dXJlKHRhcmdldCk7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRUZXh0dXJlKFRFWFRVUkVfMkQsIHRleHR1cmUpO1xuXG4gIHRoaXMuY29udGV4dC5waXhlbFN0b3JlaShVTlBBQ0tfRkxJUF9ZX1dFQkdMLCB0cnVlKTtcblxuICB0aGlzLmNvbnRleHQudGV4SW1hZ2UyRChURVhUVVJFXzJELCBsZXZlbCwgaW50ZXJuYWxGb3JtYXQsIGZvcm1hdCwgdHlwZSwgaW1hZ2UpO1xuXG4gIGlmIChyZXBlYXQpIHtcbiAgICB0aGlzLmNvbnRleHQudGV4UGFyYW1ldGVyaShURVhUVVJFXzJELCBURVhUVVJFX1dSQVBfUywgUkVQRUFUKTtcbiAgICB0aGlzLmNvbnRleHQudGV4UGFyYW1ldGVyaShURVhUVVJFXzJELCBURVhUVVJFX1dSQVBfVCwgUkVQRUFUKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmNvbnRleHQudGV4UGFyYW1ldGVyaShURVhUVVJFXzJELCBURVhUVVJFX1dSQVBfUywgQ0xBTVBfVE9fRURHRSk7XG4gICAgdGhpcy5jb250ZXh0LnRleFBhcmFtZXRlcmkoVEVYVFVSRV8yRCwgVEVYVFVSRV9XUkFQX1QsIENMQU1QX1RPX0VER0UpO1xuICB9XG5cblx0dGhpcy5jb250ZXh0LnRleFBhcmFtZXRlcmkoVEVYVFVSRV8yRCwgVEVYVFVSRV9NSU5fRklMVEVSLCBMSU5FQVIpO1xuXG5cdHJldHVybiB0ZXh0dXJlO1xufVxuXG5mdW5jdGlvbiBlbmFibGVBbmlzb3Ryb3BpY0ZpbHRlcmluZygpIHtcbiAgY29uc3QgZXh0ZW5zaW9uID0gKFxuICAgIHRoaXMuY29udGV4dC5nZXRFeHRlbnNpb24oRVhUX1RFWFRVUkVfRklMVEVSX0FOSVNPVFJPUElDKSB8fFxuICAgIHRoaXMuY29udGV4dC5nZXRFeHRlbnNpb24oTU9aX0VYVF9URVhUVVJFX0ZJTFRFUl9BTklTT1RST1BJQykgfHxcbiAgICB0aGlzLmNvbnRleHQuZ2V0RXh0ZW5zaW9uKFdFQktJVF9FWFRfVEVYVFVSRV9GSUxURVJfQU5JU09UUk9QSUMpXG4gICk7XG5cbiAgaWYgKGV4dGVuc2lvbikge1xuICAgIGNvbnN0IHsgVEVYVFVSRV8yRCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICAgIHsgTUFYX1RFWFRVUkVfTUFYX0FOSVNPVFJPUFlfRVhULCBURVhUVVJFX01BWF9BTklTT1RST1BZX0VYVCB9ID0gZXh0ZW5zaW9uLFxuICAgICAgICAgIG1heGltdW0gPSB0aGlzLmNvbnRleHQuZ2V0UGFyYW1ldGVyKE1BWF9URVhUVVJFX01BWF9BTklTT1RST1BZX0VYVCk7XG5cbiAgICB0aGlzLmNvbnRleHQudGV4UGFyYW1ldGVyZihURVhUVVJFXzJELCBURVhUVVJFX01BWF9BTklTT1RST1BZX0VYVCwgbWF4aW11bSk7XG4gIH1cbn1cblxuY29uc3QgdGV4dHVyZU1peGlucyA9IHtcbiAgY3JlYXRlVGV4dHVyZSxcbiAgZW5hYmxlQW5pc290cm9waWNGaWx0ZXJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRleHR1cmVNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcikge1xuICBjb25zdCBwcm9ncmFtID0gdGhpcy5jb250ZXh0LmNyZWF0ZVByb2dyYW0oKTtcblxuICB0aGlzLmNvbnRleHQuYXR0YWNoU2hhZGVyKHByb2dyYW0sIHZlcnRleFNoYWRlcik7XG5cbiAgdGhpcy5jb250ZXh0LmF0dGFjaFNoYWRlcihwcm9ncmFtLCBmcmFnbWVudFNoYWRlcik7XG4gIFxuICB0aGlzLmNvbnRleHQubGlua1Byb2dyYW0ocHJvZ3JhbSk7XG4gIFxuICByZXR1cm4gcHJvZ3JhbTtcbn1cblxuZnVuY3Rpb24gdXNlUHJvZ3JhbShwcm9ncmFtKSB7XG4gIHRoaXMuY29udGV4dC51c2VQcm9ncmFtKHByb2dyYW0pO1xufVxuXG5jb25zdCBwcm9ncmFtTWl4aW5zID0ge1xuICBjcmVhdGVQcm9ncmFtLFxuICB1c2VQcm9ncmFtXG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcm9ncmFtTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBlbmFibGVCbGVuZGluZygpIHtcbiAgY29uc3QgeyBCTEVORCwgU1JDX0FMUEhBLCBPTkUgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgY2FwYWNpdHkgPSBCTEVORCxcbiAgICAgICAgc291cmNlRmFjdG9yID0gU1JDX0FMUEhBLFxuICAgICAgICBkZXN0aW5hdGlvbkZhY3RvciA9IE9ORTtcblxuICB0aGlzLmNvbnRleHQuZW5hYmxlKGNhcGFjaXR5KTtcblxuICB0aGlzLmNvbnRleHQuYmxlbmRGdW5jKHNvdXJjZUZhY3RvciwgZGVzdGluYXRpb25GYWN0b3IpO1xufVxuXG5jb25zdCBibGVuZGluZ01peGlucyA9IHtcbiAgZW5hYmxlQmxlbmRpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJsZW5kaW5nTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBnZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSkge1xuICByZXR1cm4gdGhpcy5jb250ZXh0LmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBuYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSkge1xuICByZXR1cm4gdGhpcy5jb250ZXh0LmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIG5hbWUpO1xufVxuXG5mdW5jdGlvbiBzZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUodW5pZm9ybUxvY2F0aW9uLCBpbnRlZ2VyVmFsdWUpIHtcbiAgdGhpcy5jb250ZXh0LnVuaWZvcm0xaSh1bmlmb3JtTG9jYXRpb24sIGludGVnZXJWYWx1ZSk7XG59XG5cbmNvbnN0IGxvY2F0aW9uTWl4aW5zID0ge1xuICBnZXRVbmlmb3JtTG9jYXRpb24sXG4gIGdldEF0dHJpYnV0ZUxvY2F0aW9uLFxuICBzZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvY2F0aW9uTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZGVwdGhNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2RlcHRoXCI7XG5pbXBvcnQgc2hhZGVyTWl4aW5zIGZyb20gXCIuL21peGlucy9zaGFkZXJcIjtcbmltcG9ydCBidWZmZXJNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2J1ZmZlclwiO1xuaW1wb3J0IGNvbG91ck1peGlucyBmcm9tIFwiLi9taXhpbnMvY29sb3VyXCI7XG5pbXBvcnQgbWF0cml4TWl4aW5zIGZyb20gXCIuL21peGlucy9tYXRyaXhcIjtcbmltcG9ydCB0ZXh0dXJlTWl4aW5zIGZyb20gXCIuL21peGlucy90ZXh0dXJlXCI7XG5pbXBvcnQgcHJvZ3JhbU1peGlucyBmcm9tIFwiLi9taXhpbnMvcHJvZ3JhbVwiO1xuaW1wb3J0IGJsZW5kaW5nTWl4aW5zIGZyb20gXCIuL21peGlucy9ibGVuZGluZ1wiO1xuaW1wb3J0IGxvY2F0aW9uTWl4aW5zIGZyb20gXCIuL21peGlucy9sb2NhdGlvblwiO1xuXG5pbXBvcnQgeyBXRUJfR0xfQ09OVEVYVF9FUlJPUiB9IGZyb20gXCIuL2Vycm9yc1wiO1xuaW1wb3J0IHsgV0VCR0wsIFdJRFRILCBIRUlHSFQsIENBTlZBUywgU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yID0gQ0FOVkFTKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpLFxuICAgICAgICAgIGNvbnRleHQgPSBjb250ZXh0RnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuXG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMuZW5hYmxlRGVwdGhUZXN0aW5nKCk7ICAvLy9cbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LndpZHRoOyB9XG5cbiAgZ2V0SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmhlaWdodDsgfVxuXG4gIGdldENsaWVudFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoOyB9XG5cbiAgZ2V0Q2xpZW50SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDsgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoV0lEVEgsIHdpZHRoKTsgfVxuXG4gIHNldEhlaWdodChoZWlnaHQpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShIRUlHSFQsIGhlaWdodCk7IH1cblxuICByZXNpemUod2lkdGgsIGhlaWdodCkge1xuICAgIGNvbnN0IHggPSAwLFxuICAgICAgICAgIHkgPSAwO1xuXG4gICAgdGhpcy5zZXRXaWR0aCh3aWR0aCk7XG5cbiAgICB0aGlzLnNldEhlaWdodChoZWlnaHQpO1xuXG4gICAgdGhpcy5jb250ZXh0LnZpZXdwb3J0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgY2xlYXIoY29sb3VyKSB7XG4gICAgdGhpcy5jbGVhckNvbG91cihjb2xvdXIpO1xuICAgIHRoaXMuY2xlYXJEZXB0aCgpO1xuICAgIHRoaXMuY2xlYXJEZXB0aEJ1ZmZlcigpO1xuICAgIHRoaXMuY2xlYXJDb2xvdXJCdWZmZXIoKTtcbiAgfVxuXG4gIHJlbmRlcihyZW5kZXJlciwgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkge1xuICAgIGNvbnN0IG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXRPZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldE5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgcm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0Um90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKTtcblxuICAgIHRoaXMuYXBwbHlNYXRyaXgob2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgb2Zmc2V0c01hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBub3JtYWxzTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChyb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uc01hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwcm9qZWN0aW9uTWF0cml4KTtcbiAgfVxuXG4gIGRyYXdFbGVtZW50cyhzdGFydCwgZmluaXNoKSB7XG4gICAgY29uc3QgeyBUUklBTkdMRVMsIFVOU0lHTkVEX1NIT1JUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgbW9kZSA9IFRSSUFOR0xFUyxcbiAgICAgICAgICB0eXBlID0gVU5TSUdORURfU0hPUlQsXG4gICAgICAgICAgY291bnQgPSBmaW5pc2ggLSBzdGFydCxcbiAgICAgICAgICBvZmZzZXQgPSBzdGFydCAqIDI7IC8vL1xuXG4gICAgdGhpcy5jb250ZXh0LmRyYXdFbGVtZW50cyhtb2RlLCBjb3VudCwgdHlwZSwgb2Zmc2V0KVxuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgZGVwdGhNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBzaGFkZXJNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBidWZmZXJNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBjb2xvdXJNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBtYXRyaXhNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCB0ZXh0dXJlTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgcHJvZ3JhbU1peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGJsZW5kaW5nTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgbG9jYXRpb25NaXhpbnMpO1xuXG5mdW5jdGlvbiBkb21FbGVtZW50RnJvbVNlbGVjdG9yKHNlbGVjdG9yKSB7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSAodHlwZW9mIHNlbGVjdG9yID09PSBTVFJJTkcpID9cbiAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilbMF0gOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I7ICAvLy9cblxuICByZXR1cm4gZG9tRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY29udGV4dEZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgY29uc3QgY29udGV4dCA9IGRvbUVsZW1lbnQuZ2V0Q29udGV4dChXRUJHTCk7XG5cbiAgaWYgKCFjb250ZXh0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFdFQl9HTF9DT05URVhUX0VSUk9SKTtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0O1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhZGQgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyZXIge1xuICBjb25zdHJ1Y3RvcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMpIHtcbiAgICB0aGlzLmZhY2V0cyA9IGZhY2V0cztcbiAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xuICAgIHRoaXMucmVuZGVyZXJEYXRhID0gcmVuZGVyZXJEYXRhO1xuICAgIHRoaXMucmVuZGVyZXJCdWZmZXJzID0gcmVuZGVyZXJCdWZmZXJzO1xuICAgIHRoaXMudW5pZm9ybUxvY2F0aW9ucyA9IHVuaWZvcm1Mb2NhdGlvbnM7XG4gICAgdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnMgPSBhdHRyaWJ1dGVMb2NhdGlvbnM7XG4gIH1cblxuICBnZXRGYWNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmFjZXRzO1xuICB9XG5cbiAgZ2V0UHJvZ3JhbSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9ncmFtO1xuICB9XG4gIFxuICBnZXRSZW5kZXJlckRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyZXJEYXRhO1xuICB9XG4gIFxuICBnZXRSZW5kZXJlckJ1ZmZlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyZXJCdWZmZXJzO1xuICB9XG5cbiAgZ2V0VW5pZm9ybUxvY2F0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zO1xuICB9XG5cbiAgZ2V0QXR0cmlidXRlTG9jYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZUxvY2F0aW9ucztcbiAgfVxuXG4gIGdldENvdW50KCkgeyByZXR1cm4gdGhpcy5yZW5kZXJlckRhdGEuZ2V0Q291bnQoKTsgfVxuXG4gIGdldE9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0T2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0Tm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXROb3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7IH1cblxuICBnZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0Um90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldFJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXRQcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7IH1cblxuICBnZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnMuZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpOyB9XG5cbiAgZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLmF0dHJpYnV0ZUxvY2F0aW9ucy5nZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpOyB9XG5cbiAgYWRkRmFjZXRzKGZhY2V0cykge1xuICAgIGFkZCh0aGlzLmZhY2V0cywgZmFjZXRzKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpIHtcbiAgY29uc3QgdmVydGV4U2hhZGVyID0gY2FudmFzLmNyZWF0ZVZlcnRleFNoYWRlcih2ZXJ0ZXhTaGFkZXJTb3VyY2UpLFxuICAgICAgICBmcmFnbWVudFNoYWRlciA9IGNhbnZhcy5jcmVhdGVGcmFnbWVudFNoYWRlcihmcmFnbWVudFNoYWRlclNvdXJjZSksXG4gICAgICAgIHByb2dyYW0gPSBjYW52YXMuY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKTtcbiAgXG4gIHJldHVybiBwcm9ncmFtO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhZGQsIGZsYXR0ZW4gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyRGF0YSB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSkge1xuICAgIHRoaXMudmVydGV4UG9zaXRpb25zRGF0YSA9IHZlcnRleFBvc2l0aW9uc0RhdGE7XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxzRGF0YSA9IHZlcnRleE5vcm1hbHNEYXRhO1xuICAgIHRoaXMudmVydGV4SW5kZXhlc0RhdGEgPSB2ZXJ0ZXhJbmRleGVzRGF0YTtcbiAgfVxuXG4gIGdldENvdW50KCkge1xuICAgIGNvbnN0IHZlcnRleEluZGV4ZXNEYXRhTGVuZ3RoID0gdGhpcy52ZXJ0ZXhJbmRleGVzRGF0YS5sZW5ndGgsXG4gICAgICAgICAgY291bnQgPSB2ZXJ0ZXhJbmRleGVzRGF0YUxlbmd0aDsgIC8vL1xuXG4gICAgcmV0dXJuIGNvdW50O1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhQb3NpdGlvbnNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleFBvc2l0aW9uc0RhdGE7XG4gIH1cbiAgXG4gIGdldFZlcnRleE5vcm1hbHNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleE5vcm1hbHNEYXRhO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhJbmRleGVzRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhJbmRleGVzRGF0YTtcbiAgfVxuXG4gIGFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gZmxhdHRlbih2ZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgYWRkKHRoaXMudmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4UG9zaXRpb25zRGF0YSk7XG4gIH1cblxuICBhZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOb3JtYWxzRGF0YSA9IGZsYXR0ZW4odmVydGV4Tm9ybWFscyk7XG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEpO1xuICB9XG5cbiAgYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXhlc0RhdGEgPSB2ZXJ0ZXhJbmRleGVzOyAgLy8vXG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gW10sXG4gICAgICAgICAgdmVydGV4Tm9ybWFsc0RhdGEgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzRGF0YSA9IFtdLFxuICAgICAgICAgIHJlbmRlcmVyRGF0YSA9IG5ldyBDbGFzcyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgXG4gICAgcmV0dXJuIHJlbmRlcmVyRGF0YTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVuZGVyZXJEYXRhIGZyb20gXCIuLi8uLi9yZW5kZXJlci9kYXRhXCI7XG5cbmltcG9ydCB7IGFkZCwgZmxhdHRlbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3VyUmVuZGVyZXJEYXRhIGV4dGVuZHMgUmVuZGVyZXJEYXRhIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhDb2xvdXJzRGF0YSkge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSk7XG5cbiAgICB0aGlzLnZlcnRleENvbG91cnNEYXRhID0gdmVydGV4Q29sb3Vyc0RhdGE7XG4gIH1cbiAgXG4gIGdldFZlcnRleENvbG91cnNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleENvbG91cnNEYXRhO1xuICB9XG5cbiAgYWRkVmVydGV4Q29sb3Vycyh2ZXJ0ZXhDb2xvdXJzKSB7XG4gICAgY29uc3QgdmVydGV4Q29sb3Vyc0RhdGEgPSBmbGF0dGVuKHZlcnRleENvbG91cnMpO1xuXG4gICAgYWRkKHRoaXMudmVydGV4Q29sb3Vyc0RhdGEsIHZlcnRleENvbG91cnNEYXRhKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgXG4gICAgY29uc3QgdmVydGV4Q29sb3Vyc0RhdGEgPSBbXSxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlckRhdGEgPSBSZW5kZXJlckRhdGEuZnJvbU5vdGhpbmcoQ29sb3VyUmVuZGVyZXJEYXRhLCB2ZXJ0ZXhDb2xvdXJzRGF0YSk7XG4gICAgXG4gICAgcmV0dXJuIGNvbG91clJlbmRlcmVyRGF0YTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3Qgbm9ybWFsc01hdHJpeE5hbWUgPSBcInVOb3JtYWxzTWF0cml4XCI7XG5leHBvcnQgY29uc3QgdmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZSA9IFwiYVZlcnRleE5vcm1hbFwiO1xuXG5jb25zdCBsaWdodGluZ1NvdXJjZSA9IG5ldyBTdHJpbmcoYFxuICBcbiAgICAgICAgdW5pZm9ybSBtYXQ0ICR7bm9ybWFsc01hdHJpeE5hbWV9O1xuXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWMzICR7dmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZX07XG5cbiAgICAgICAgdmVjMyBkaXJlY3Rpb25hbExpZ2h0Q29sb3VyID0gdmVjMygxLCAxLCAxKSxcbiAgICAgICAgICAgICBkaXJlY3Rpb25hbFZlY3RvciA9IG5vcm1hbGl6ZSh2ZWMzKDEuMCwgMS4wLCAxLjApKTtcbiAgICAgICAgICBcbiAgICAgICAgdmVjMyBjYWxjdWxhdGVMaWdodGluZygpIHtcbiAgICAgICAgICB2ZWM0IHRyYW5zZm9ybWVkTm9ybWFsID0gJHtub3JtYWxzTWF0cml4TmFtZX0gKiB2ZWM0KCR7dmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZX0sIDEuMCk7ICAgICAgICAgICAgXG5cbiAgICAgICAgICBmbG9hdCBkaXJlY3Rpb25hbCA9IChkb3QodHJhbnNmb3JtZWROb3JtYWwueHl6LCBkaXJlY3Rpb25hbFZlY3RvcikgKyAxLjApIC8gMi4wO1xuICAgICAgICAgIFxuICAgICAgICAgIHZlYzMgbGlnaHRpbmcgPSAoZGlyZWN0aW9uYWxMaWdodENvbG91ciAqIGRpcmVjdGlvbmFsKTtcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gbGlnaHRpbmc7XG4gICAgICAgIH1cblxuICAgICAgYCk7XG5cbmV4cG9ydCBkZWZhdWx0IGxpZ2h0aW5nU291cmNlOyIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IG9mZnNldHNNYXRyaXhOYW1lID0gXCJ1T2Zmc2V0c01hdHJpeFwiO1xuZXhwb3J0IGNvbnN0IHBvc2l0aW9uTWF0cml4TmFtZSA9IFwidVBvc2l0aW9uTWF0cml4XCI7XG5leHBvcnQgY29uc3Qgcm90YXRpb25zTWF0cml4TmFtZSA9IFwidVJvdGF0aW9uc01hdHJpeFwiO1xuZXhwb3J0IGNvbnN0IHByb2plY3Rpb25NYXRyaXhOYW1lID0gXCJ1UGVyc3BlY3RpdmVNYXRyaXhcIjtcbmV4cG9ydCBjb25zdCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWUgPSBcImFWZXJ0ZXhQb3NpdGlvblwiO1xuXG5jb25zdCBwb3NpdGlvblNvdXJjZSA9IG5ldyBTdHJpbmcoYFxuICBcbiAgICAgICAgdW5pZm9ybSBtYXQ0ICR7b2Zmc2V0c01hdHJpeE5hbWV9LFxuICAgICAgICAgICAgICAgICAgICAgJHtyb3RhdGlvbnNNYXRyaXhOYW1lfSxcbiAgICAgICAgICAgICAgICAgICAgICR7cG9zaXRpb25NYXRyaXhOYW1lfSxcbiAgICAgICAgICAgICAgICAgICAgICR7cHJvamVjdGlvbk1hdHJpeE5hbWV9O1xuICAgICAgICBcbiAgICAgICAgYXR0cmlidXRlIHZlYzQgJHt2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWV9O1xuXG4gICAgICAgIHZlYzQgY2FsY3VsYXRlUG9zaXRpb24oKSB7XG4gICAgICAgICAgdmVjNCBwb3NpdGlvbiA9ICR7cHJvamVjdGlvbk1hdHJpeE5hbWV9ICogJHtwb3NpdGlvbk1hdHJpeE5hbWV9ICogJHtyb3RhdGlvbnNNYXRyaXhOYW1lfSAqICR7b2Zmc2V0c01hdHJpeE5hbWV9ICogJHt2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWV9O1xuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGApO1xuXG5leHBvcnQgZGVmYXVsdCBwb3NpdGlvblNvdXJjZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGxpZ2h0aW5nU291cmNlIGZyb20gXCIuLi8uLi9zb3VyY2UvbGlnaHRpbmdcIjtcbmltcG9ydCBwb3NpdGlvblNvdXJjZSBmcm9tIFwiLi4vLi4vc291cmNlL3Bvc2l0aW9uXCI7XG5cbmV4cG9ydCBjb25zdCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lID0gXCJhVmVydGV4Q29sb3VyXCJcblxuY29uc3QgdmVydGV4U2hhZGVyU291cmNlID0gbmV3IFN0cmluZyhgXG4gICAgXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWM0ICR7dmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZX07XG5cbiAgICAgICAgJHtsaWdodGluZ1NvdXJjZX1cbiAgICAgIFxuICAgICAgICAke3Bvc2l0aW9uU291cmNlfVxuICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuICAgICAgICBcbiAgICAgICAgdmFyeWluZyBsb3dwIHZlYzQgdkNvbG91cjtcbiAgICAgICAgXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICB2TGlnaHRpbmcgPSBjYWxjdWxhdGVMaWdodGluZygpO1xuXG4gICAgICAgICAgZ2xfUG9zaXRpb24gPSBjYWxjdWxhdGVQb3NpdGlvbigpO1xuXG4gICAgICAgICAgdkNvbG91ciA9ICR7dmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZX07ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGApO1xuXG5leHBvcnQgZGVmYXVsdCB2ZXJ0ZXhTaGFkZXJTb3VyY2U7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGZyYWdtZW50U2hhZGVyU291cmNlID0gbmV3IFN0cmluZyhgXG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGxvd3AgdmVjNCB2Q29sb3VyO1xuICAgICAgICAgICAgICBcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcblxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCh2Q29sb3VyLnJnYiAqIHZMaWdodGluZywgdkNvbG91ci5hKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGApO1xuXG5leHBvcnQgZGVmYXVsdCBmcmFnbWVudFNoYWRlclNvdXJjZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgdmVydGV4Tm9ybWFsQ29tcG9uZW50cyA9IDMsXG4gICAgICB2ZXJ0ZXhQb3NpdGlvbkNvbXBvbmVudHMgPSAzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlckJ1ZmZlcnMge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKSB7XG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIgPSB2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXI7XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxzQnVmZmVyID0gdmVydGV4Tm9ybWFsc0J1ZmZlcjtcbiAgICB0aGlzLnZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyID0gdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXI7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhQb3NpdGlvbnNCdWZmZXIodmVydGV4UG9zaXRpb25zRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHZlcnRleFBvc2l0aW9uc0RhdGEpO1xuICB9XG5cbiAgY3JlYXRlVmVydGV4Tm9ybWFsc0J1ZmZlcih2ZXJ0ZXhOb3JtYWxzRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxzQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih2ZXJ0ZXhOb3JtYWxzRGF0YSk7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcih2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy52ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciA9IGNhbnZhcy5jcmVhdGVFbGVtZW50QnVmZmVyKHZlcnRleEluZGV4ZXNEYXRhKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhOb3JtYWxzQnVmZmVyKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxDb21wb25lbnRzKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhQb3NpdGlvbnNCdWZmZXIodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy52ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQ29tcG9uZW50cyk7XG4gIH1cblxuICBiaW5kVmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIoY2FudmFzKSB7XG4gICAgY2FudmFzLmJpbmRFbGVtZW50QnVmZmVyKHRoaXMudmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIpO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMuY3JlYXRlVmVydGV4UG9zaXRpb25zQnVmZmVyKHZlcnRleFBvc2l0aW9uc0RhdGEsIGNhbnZhcyk7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhOb3JtYWxzQnVmZmVyKHZlcnRleE5vcm1hbHNEYXRhLCBjYW52YXMpO1xuICAgIHRoaXMuY3JlYXRlVmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIodmVydGV4SW5kZXhlc0RhdGEsIGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgdGhpcy5iaW5kVmVydGV4Tm9ybWFsc0J1ZmZlcih2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgICB0aGlzLmJpbmRWZXJ0ZXhQb3NpdGlvbnNCdWZmZXIodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgICB0aGlzLmJpbmRWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcihjYW52YXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIgPSBudWxsLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzQnVmZmVyID0gbnVsbCwgLy8vXG4gICAgICAgICAgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIgPSBudWxsLCAgLy8vXG4gICAgICAgICAgcmVuZGVyZXJCdWZmZXJzID0gbmV3IENsYXNzKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gcmVuZGVyZXJCdWZmZXJzO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZW5kZXJlckJ1ZmZlcnMgZnJvbSBcIi4uLy4uL3JlbmRlcmVyL2J1ZmZlcnNcIjtcblxuY29uc3QgdmVydGV4Q29sb3VyQ29tcG9uZW50cyA9IDQ7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG91clJlbmRlcmVyQnVmZmVycyBleHRlbmRzIFJlbmRlcmVyQnVmZmVycyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIsIHZlcnRleENvbG91cnNCdWZmZXIpIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKTtcblxuICAgIHRoaXMudmVydGV4Q29sb3Vyc0J1ZmZlciA9IHZlcnRleENvbG91cnNCdWZmZXI7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhDb2xvdXJzQnVmZmVyKHZlcnRleENvbG91cnNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleENvbG91cnNCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHZlcnRleENvbG91cnNEYXRhKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhDb2xvdXJzQnVmZmVyKHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleENvbG91cnNCdWZmZXIsIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhDb2xvdXJDb21wb25lbnRzKTtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhDb2xvdXJzRGF0YSwgY2FudmFzKSB7XG4gICAgc3VwZXIuY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIGNhbnZhcyk7XG5cbiAgICB0aGlzLmNyZWF0ZVZlcnRleENvbG91cnNCdWZmZXIodmVydGV4Q29sb3Vyc0RhdGEsIGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIHN1cGVyLmJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuXG4gICAgdGhpcy5iaW5kVmVydGV4Q29sb3Vyc0J1ZmZlcih2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJzQnVmZmVyID0gbnVsbCwgLy8vXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXJCdWZmZXJzID0gUmVuZGVyZXJCdWZmZXJzLmZyb21Ob3RoaW5nKENvbG91clJlbmRlcmVyQnVmZmVycywgdmVydGV4Q29sb3Vyc0J1ZmZlcik7XG4gICAgXG4gICAgcmV0dXJuIGNvbG91clJlbmRlcmVyQnVmZmVycztcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub3JtYWxzTWF0cml4TmFtZSB9IGZyb20gXCIuLi9zb3VyY2UvbGlnaHRpbmdcIjtcblxuaW1wb3J0IHsgb2Zmc2V0c01hdHJpeE5hbWUsIHJvdGF0aW9uc01hdHJpeE5hbWUsIHBvc2l0aW9uTWF0cml4TmFtZSwgcHJvamVjdGlvbk1hdHJpeE5hbWUgfSBmcm9tIFwiLi4vc291cmNlL3Bvc2l0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVuaWZvcm1Mb2NhdGlvbnMge1xuICBjb25zdHJ1Y3RvcihvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKSB7XG4gICAgdGhpcy5vZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gb2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgICB0aGlzLm5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICAgIHRoaXMucG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgICB0aGlzLnJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgICB0aGlzLnByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0T2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5vZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0Tm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5ub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXRSb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9ncmFtKENsYXNzLCBwcm9ncmFtLCBjYW52YXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG9mZnNldHNNYXRyaXhOYW1lKSxcbiAgICAgICAgICBub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBub3JtYWxzTWF0cml4TmFtZSksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHBvc2l0aW9uTWF0cml4TmFtZSksXG4gICAgICAgICAgcm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCByb3RhdGlvbnNNYXRyaXhOYW1lKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBwcm9qZWN0aW9uTWF0cml4TmFtZSksXG4gICAgICAgICAgdW5pZm9ybUxvY2F0aW9ucyA9IG5ldyBDbGFzcyhvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIFxuICAgIHJldHVybiB1bmlmb3JtTG9jYXRpb25zOyAgICAgICBcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVW5pZm9ybUxvY2F0aW9ucyBmcm9tIFwiLi4vLi4vbG9jYXRpb25zL3VuaWZvcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3VyVW5pZm9ybUxvY2F0aW9ucyBleHRlbmRzIFVuaWZvcm1Mb2NhdGlvbnMge1xuICBzdGF0aWMgZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSB7IHJldHVybiBVbmlmb3JtTG9jYXRpb25zLmZyb21Qcm9ncmFtKENvbG91clVuaWZvcm1Mb2NhdGlvbnMsIHByb2dyYW0sIGNhbnZhcyk7IH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgdmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZSB9IGZyb20gXCIuLi9zb3VyY2UvbGlnaHRpbmdcIjtcbmltcG9ydCB7IHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZSB9IGZyb20gXCIuLi9zb3VyY2UvcG9zaXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXR0cmlidXRlTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24pIHtcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uO1xuICAgIHRoaXMudmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Qcm9ncmFtKENsYXNzLCBwcm9ncmFtLCBjYW52YXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lKSxcbiAgICAgICAgICBhdHRyaWJ1dGVMb2NhdGlvbnMgPSBuZXcgQ2xhc3ModmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlTG9jYXRpb25zO1xuICB9ICBcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEF0dHJpYnV0ZUxvY2F0aW9ucyBmcm9tIFwiLi4vLi4vbG9jYXRpb25zL2F0dHJpYnV0ZVwiO1xuXG5pbXBvcnQgeyB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uLy4uL3NvdXJjZS9jb2xvdXIvdmVydGV4U2hhZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucyBleHRlbmRzIEF0dHJpYnV0ZUxvY2F0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbikge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKTtcblxuICAgIHRoaXMudmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24gPSB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuXG4gIGdldFZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSB7XG4gICAgY29uc3QgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZSksXG4gICAgICAgICAgY29sb3VyQXR0cmlidXRlTG9jYXRpb25zID0gQXR0cmlidXRlTG9jYXRpb25zLmZyb21Qcm9ncmFtKENvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucywgcHJvZ3JhbSwgY2FudmFzLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbik7XG5cbiAgICByZXR1cm4gY29sb3VyQXR0cmlidXRlTG9jYXRpb25zO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZW5kZXJlciBmcm9tIFwiLi4vcmVuZGVyZXJcIjtcbmltcG9ydCBDb2xvdXJSZW5kZXJlckRhdGEgZnJvbSBcIi4uL3JlbmRlcmVyL2RhdGEvY29sb3VyXCI7XG5pbXBvcnQgdmVydGV4U2hhZGVyU291cmNlIGZyb20gXCIuL3NvdXJjZS9jb2xvdXIvdmVydGV4U2hhZGVyXCI7XG5pbXBvcnQgZnJhZ21lbnRTaGFkZXJTb3VyY2UgZnJvbSBcIi4vc291cmNlL2NvbG91ci9mcmFnbWVudFNoYWRlclwiO1xuaW1wb3J0IENvbG91clJlbmRlcmVyQnVmZmVycyBmcm9tIFwiLi4vcmVuZGVyZXIvYnVmZmVycy9jb2xvdXJcIjtcbmltcG9ydCBDb2xvdXJVbmlmb3JtTG9jYXRpb25zIGZyb20gXCIuL2xvY2F0aW9ucy9jb2xvdXIvdW5pZm9ybVwiO1xuaW1wb3J0IENvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucyBmcm9tIFwiLi9sb2NhdGlvbnMvY29sb3VyL2F0dHJpYnV0ZVwiO1xuXG5pbXBvcnQgeyBhZGQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9ncmFtIH0gZnJvbSBcIi4uL3JlbmRlcmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG91clJlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuICBnZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVMb2NhdGlvbnMgPSB0aGlzLmdldEF0dHJpYnV0ZUxvY2F0aW9ucygpLFxuICAgICAgICAgIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uID0gYXR0cmlidXRlTG9jYXRpb25zLmdldFZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKCk7XG5cbiAgICByZXR1cm4gdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb247XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IGZhY2V0cyA9IHRoaXMuZ2V0RmFjZXRzKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlcyA9IFtdLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzID0gW107XG5cbiAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBjb2xvdXJlZEZhY2V0ID0gZmFjZXQsICAvLy9cbiAgICAgICAgICAgIGZhY2V0VmVydGV4SW5kZXhlcyA9IGZhY2V0LmdldFZlcnRleEluZGV4ZXMoaW5kZXgpLFxuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhOb3JtYWxzID0gZmFjZXQuZ2V0VmVydGV4Tm9ybWFscygpLFxuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMgPSBmYWNldC5nZXRWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICAgIGNvbG91cmVkRmFjZXRWZXJ0ZXhDb2xvdXJzID0gY29sb3VyZWRGYWNldC5nZXRWZXJ0ZXhDb2xvdXJzKCk7XG5cbiAgICAgIGFkZCh2ZXJ0ZXhJbmRleGVzLCBmYWNldFZlcnRleEluZGV4ZXMpO1xuICAgICAgYWRkKHZlcnRleE5vcm1hbHMsIGZhY2V0VmVydGV4Tm9ybWFscyk7XG4gICAgICBhZGQodmVydGV4UG9zaXRpb25zLCBmYWNldFZlcnRleFBvc2l0aW9ucyk7XG4gICAgICBhZGQodmVydGV4Q29sb3VycywgY29sb3VyZWRGYWNldFZlcnRleENvbG91cnMpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVuZGVyZXJEYXRhID0gdGhpcy5nZXRSZW5kZXJlckRhdGEoKTtcblxuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhDb2xvdXJzKHZlcnRleENvbG91cnMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKTtcblxuICAgIGNvbnN0IHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhQb3NpdGlvbnNEYXRhKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4Tm9ybWFsc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhJbmRleGVzRGF0YSgpLFxuICAgICAgICAgIHZlcnRleENvbG91cnNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleENvbG91cnNEYXRhKCk7XG5cbiAgICByZW5kZXJlckJ1ZmZlcnMuY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIHZlcnRleENvbG91cnNEYXRhLCBjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgcmVuZGVyZXJCdWZmZXJzID0gdGhpcy5nZXRSZW5kZXJlckJ1ZmZlcnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKCk7XG4gICAgXG4gICAgcmVuZGVyZXJCdWZmZXJzLmJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIHJlbmRlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBjYW52YXMpIHtcbiAgICBjb25zdCBwcm9ncmFtID0gdGhpcy5nZXRQcm9ncmFtKCk7XG5cbiAgICBjYW52YXMudXNlUHJvZ3JhbShwcm9ncmFtKTtcblxuICAgIHRoaXMuYmluZEJ1ZmZlcnMoY2FudmFzKTtcblxuICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpczsgIC8vL1xuXG4gICAgY2FudmFzLnJlbmRlcihyZW5kZXJlciwgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7XG5cbiAgICBjb25zdCBjb3VudCA9IHRoaXMuZ2V0Q291bnQoKSxcbiAgICAgICAgICBzdGFydCA9IDAsXG4gICAgICAgICAgZmluaXNoID0gY291bnQ7IC8vL1xuXG4gICAgY2FudmFzLmRyYXdFbGVtZW50cyhzdGFydCwgZmluaXNoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjYW52YXMpIHtcbiAgICBjb25zdCBmYWNldHMgPSBbXSxcbiAgICAgICAgICBwcm9ncmFtID0gY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyRGF0YSA9IENvbG91clJlbmRlcmVyRGF0YS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyQnVmZmVycyA9IENvbG91clJlbmRlcmVyQnVmZmVycy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGNvbG91clVuaWZvcm1Mb2NhdGlvbnMgPSBDb2xvdXJVbmlmb3JtTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgY29sb3VyQXR0cmlidXRlTG9jYXRpb25zID0gQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgcmVuZGVyZXJEYXRhID0gY29sb3VyUmVuZGVyZXJEYXRhLCAgLy8vXG4gICAgICAgICAgcmVuZGVyZXJCdWZmZXJzID0gY29sb3VyUmVuZGVyZXJCdWZmZXJzLCAgLy8vXG4gICAgICAgICAgdW5pZm9ybUxvY2F0aW9ucyA9IGNvbG91clVuaWZvcm1Mb2NhdGlvbnMsICAvLy9cbiAgICAgICAgICBhdHRyaWJ1dGVMb2NhdGlvbnMgPSBjb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMsICAvLy9cbiAgICAgICAgICBjb2xvdXJSZW5kZXJlciA9IG5ldyBDb2xvdXJSZW5kZXJlcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMpO1xuICAgIFxuICAgIHJldHVybiBjb2xvdXJSZW5kZXJlcjtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgbGlnaHRpbmdTb3VyY2UgZnJvbSBcIi4uLy4uL3NvdXJjZS9saWdodGluZ1wiO1xuaW1wb3J0IHBvc2l0aW9uU291cmNlIGZyb20gXCIuLi8uLi9zb3VyY2UvcG9zaXRpb25cIjtcblxuZXhwb3J0IGNvbnN0IHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZSA9IFwiYVRleHR1cmVDb29yZGluYXRlXCI7XG5cbmNvbnN0IHZlcnRleFNoYWRlclNvdXJjZSA9IG5ldyBTdHJpbmcoYFxuICAgICAgICBcbiAgICAgICAgYXR0cmlidXRlIHZlYzIgJHt0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWV9O1xuICAgICAgICBcbiAgICAgICAgJHtsaWdodGluZ1NvdXJjZX1cbiAgICAgIFxuICAgICAgICAke3Bvc2l0aW9uU291cmNlfVxuXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzIgdlRleHR1cmVDb29yZGluYXRlO1xuICAgICAgICBcbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIHZMaWdodGluZyA9IGNhbGN1bGF0ZUxpZ2h0aW5nKCk7XG5cbiAgICAgICAgICBnbF9Qb3NpdGlvbiA9IGNhbGN1bGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgIHZUZXh0dXJlQ29vcmRpbmF0ZSA9ICR7dGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lfTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGApO1xuXG5leHBvcnQgZGVmYXVsdCB2ZXJ0ZXhTaGFkZXJTb3VyY2U7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZW5kZXJlckRhdGEgZnJvbSBcIi4uLy4uL3JlbmRlcmVyL2RhdGFcIjtcblxuaW1wb3J0IHsgYWRkLCBmbGF0dGVuIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlUmVuZGVyZXJEYXRhIGV4dGVuZHMgUmVuZGVyZXJEYXRhIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhKTtcblxuICAgIHRoaXMudmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSA9IHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGE7XG4gIH1cblxuICBnZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGE7XG4gIH1cblxuICBhZGRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcykge1xuICAgIGNvbnN0IHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEgPSBmbGF0dGVuKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcblxuICAgIGFkZCh0aGlzLnZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEsIHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyBcbiAgICBjb25zdCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhID0gW10sXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyRGF0YSA9IFJlbmRlcmVyRGF0YS5mcm9tTm90aGluZyhUZXh0dXJlUmVuZGVyZXJEYXRhLCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKTtcbiAgICBcbiAgICByZXR1cm4gdGV4dHVyZVJlbmRlcmVyRGF0YTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3Qgc2FtcGxlck5hbWUgPSBcInVTYW1wbGVyXCI7XG5cbmNvbnN0IGZyYWdtZW50U2hhZGVyU291cmNlID0gbmV3IFN0cmluZyhgXG4gICAgICAgIFxuICAgICAgICB1bmlmb3JtIHNhbXBsZXIyRCAke3NhbXBsZXJOYW1lfTtcblxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzIgdlRleHR1cmVDb29yZGluYXRlO1xuICAgICAgICBcbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIGhpZ2hwIHZlYzQgdGV4ZWxDb2xvdXIgPSB0ZXh0dXJlMkQoJHtzYW1wbGVyTmFtZX0sIHZUZXh0dXJlQ29vcmRpbmF0ZSk7XG4gICAgICAgICAgXG4gICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCh0ZXhlbENvbG91ci5yZ2IgKiB2TGlnaHRpbmcsIHRleGVsQ29sb3VyLmEpOyAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgKTtcblxuZXhwb3J0IGRlZmF1bHQgZnJhZ21lbnRTaGFkZXJTb3VyY2U7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZW5kZXJlckJ1ZmZlcnMgZnJvbSBcIi4uLy4uL3JlbmRlcmVyL2J1ZmZlcnNcIjtcblxuY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVDb21wb25lbnRzID0gMjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZVJlbmRlcmVyQnVmZmVycyBleHRlbmRzIFJlbmRlcmVyQnVmZmVycyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIsIHRleHR1cmVDb29yZGluYXRlc0J1ZmZlcikge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIpO1xuXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIgPSB0ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXI7XG4gIH1cblxuICBjcmVhdGVUZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIodGV4dHVyZUNvb3JkaW5hdGVzRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHRleHR1cmVDb29yZGluYXRlc0RhdGEpO1xuICB9XG5cbiAgYmluZFRleHR1cmVDb29yZGluYXRlc0J1ZmZlcih0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnRleHR1cmVDb29yZGluYXRlc0J1ZmZlciwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVDb21wb25lbnRzKTtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB0ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhLCBjYW52YXMpIHtcbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKTtcblxuICAgIHRoaXMuY3JlYXRlVGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKHRleHR1cmVDb29yZGluYXRlc0RhdGEsIGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgc3VwZXIuYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG5cbiAgICB0aGlzLmJpbmRUZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIodGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIgPSBudWxsLCAgLy8vXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyQnVmZmVycyA9IFJlbmRlcmVyQnVmZmVycy5mcm9tTm90aGluZyhUZXh0dXJlUmVuZGVyZXJCdWZmZXJzLCB0ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIpO1xuICAgIFxuICAgIHJldHVybiB0ZXh0dXJlUmVuZGVyZXJCdWZmZXJzO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBVbmlmb3JtTG9jYXRpb25zIGZyb20gXCIuLi8uLi9sb2NhdGlvbnMvdW5pZm9ybVwiO1xuXG5pbXBvcnQgeyBzYW1wbGVyTmFtZSB9IGZyb20gXCIuLi8uLi9zb3VyY2UvdGV4dHVyZS9mcmFnbWVudFNoYWRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlVW5pZm9ybUxvY2F0aW9ucyBleHRlbmRzIFVuaWZvcm1Mb2NhdGlvbnMge1xuICBjb25zdHJ1Y3RvcihvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uKSB7XG4gICAgc3VwZXIob2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbik7XG4gICAgXG4gICAgdGhpcy5zYW1wbGVyVW5pZm9ybUxvY2F0aW9uID0gc2FtcGxlclVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuICBcbiAgZ2V0U2FtcGxlclVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zYW1wbGVyVW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcykge1xuICAgIGNvbnN0IHNhbXBsZXJVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHNhbXBsZXJOYW1lKSxcbiAgICAgICAgICB0ZXh0dXJlVW5pZm9ybUxvY2F0aW9ucyA9IFVuaWZvcm1Mb2NhdGlvbnMuZnJvbVByb2dyYW0oVGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMsIHByb2dyYW0sIGNhbnZhcywgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbik7XG4gICAgXG4gICAgcmV0dXJuIHRleHR1cmVVbmlmb3JtTG9jYXRpb25zO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBdHRyaWJ1dGVMb2NhdGlvbnMgZnJvbSBcIi4uLy4uL2xvY2F0aW9ucy9hdHRyaWJ1dGVcIjtcblxuaW1wb3J0IHsgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uLy4uL3NvdXJjZS90ZXh0dXJlL3ZlcnRleFNoYWRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zIGV4dGVuZHMgQXR0cmlidXRlTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24pIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbik7XG4gICAgXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSB7XG4gICAgY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWUpLFxuICAgICAgICAgIHRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMgPSBBdHRyaWJ1dGVMb2NhdGlvbnMuZnJvbVByb2dyYW0oVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucywgcHJvZ3JhbSwgY2FudmFzLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKTtcbiAgICBcbiAgICByZXR1cm4gdGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucztcbiAgfSAgXG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZW5kZXJlciBmcm9tIFwiLi4vcmVuZGVyZXJcIjtcbmltcG9ydCB2ZXJ0ZXhTaGFkZXJTb3VyY2UgZnJvbSBcIi4vc291cmNlL3RleHR1cmUvdmVydGV4U2hhZGVyXCI7XG5pbXBvcnQgVGV4dHVyZVJlbmRlcmVyRGF0YSBmcm9tIFwiLi4vcmVuZGVyZXIvZGF0YS90ZXh0dXJlXCI7XG5pbXBvcnQgZnJhZ21lbnRTaGFkZXJTb3VyY2UgZnJvbSBcIi4vc291cmNlL3RleHR1cmUvZnJhZ21lbnRTaGFkZXJcIjtcbmltcG9ydCBUZXh0dXJlUmVuZGVyZXJCdWZmZXJzIGZyb20gXCIuLi9yZW5kZXJlci9idWZmZXJzL3RleHR1cmVcIjtcbmltcG9ydCBUZXh0dXJlVW5pZm9ybUxvY2F0aW9ucyBmcm9tIFwiLi9sb2NhdGlvbnMvdGV4dHVyZS91bmlmb3JtXCI7XG5pbXBvcnQgVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucyBmcm9tIFwiLi9sb2NhdGlvbnMvdGV4dHVyZS9hdHRyaWJ1dGVcIjtcblxuaW1wb3J0IHsgY3JlYXRlUHJvZ3JhbSB9IGZyb20gXCIuLi9yZW5kZXJlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gIGdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgY29uc3QgYXR0cmlidXRlTG9jYXRpb25zID0gdGhpcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbnMoKSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gYXR0cmlidXRlTG9jYXRpb25zLmdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKTtcblxuICAgIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCByZW5kZXJlckRhdGEgPSB0aGlzLmdldFJlbmRlcmVyRGF0YSgpLFxuICAgICAgICAgIHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhQb3NpdGlvbnNEYXRhKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4Tm9ybWFsc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhJbmRleGVzRGF0YSgpLFxuICAgICAgICAgIHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJCdWZmZXJzLmNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhLCBjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgcmVuZGVyZXJCdWZmZXJzID0gdGhpcy5nZXRSZW5kZXJlckJ1ZmZlcnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpO1xuXG4gICAgcmVuZGVyZXJCdWZmZXJzLmJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICB9XG5cbiAgdXNlVGV4dHVyZShpbmRleCwgY2FudmFzKSB7XG4gICAgY29uc3QgdW5pZm9ybUxvY2F0aW9ucyA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9ucygpLFxuICAgICAgICAgIHNhbXBsZXJVbmlmb3JtTG9jYXRpb24gPSB1bmlmb3JtTG9jYXRpb25zLmdldFNhbXBsZXJVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlID0gaW5kZXg7IC8vL1xuXG4gICAgY2FudmFzLnNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZShzYW1wbGVyVW5pZm9ybUxvY2F0aW9uLCBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcywgY2FudmFzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBmYWNldHMgPSBbXSxcbiAgICAgICAgICBwcm9ncmFtID0gY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlckRhdGEgPSBUZXh0dXJlUmVuZGVyZXJEYXRhLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyQnVmZmVycyA9IFRleHR1cmVSZW5kZXJlckJ1ZmZlcnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB0ZXh0dXJlVW5pZm9ybUxvY2F0aW9ucyA9IFRleHR1cmVVbmlmb3JtTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgdGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucyA9IFRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMuZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSxcbiAgICAgICAgICByZW5kZXJlckRhdGEgPSB0ZXh0dXJlUmVuZGVyZXJEYXRhLCAgLy8vXG4gICAgICAgICAgcmVuZGVyZXJCdWZmZXJzID0gdGV4dHVyZVJlbmRlcmVyQnVmZmVycywgLy8vXG4gICAgICAgICAgdW5pZm9ybUxvY2F0aW9ucyA9IHRleHR1cmVVbmlmb3JtTG9jYXRpb25zLCAvLy9cbiAgICAgICAgICBhdHRyaWJ1dGVMb2NhdGlvbnMgPSB0ZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zLCAvLy9cbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBuZXcgQ2xhc3MoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgY2FudmFzLmVuYWJsZUFuaXNvdHJvcGljRmlsdGVyaW5nKCk7ICAvLy9cblxuICAgIHJldHVybiB0ZXh0dXJlUmVuZGVyZXI7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHR1cmVSZW5kZXJlciBmcm9tIFwiLi4vLi4vcmVuZGVyZXIvdGV4dHVyZVwiO1xuXG5pbXBvcnQgeyBhZGQsIGZpcnN0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZXNUZXh0dXJlUmVuZGVyZXIgZXh0ZW5kcyBUZXh0dXJlUmVuZGVyZXIge1xuXHRjb25zdHJ1Y3RvcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMsIGltYWdlTmFtZXMsIGZhY2V0c01hcCwgb2Zmc2V0cykge1xuXHRcdHN1cGVyKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucyk7XG5cblx0XHR0aGlzLmltYWdlTmFtZXMgPSBpbWFnZU5hbWVzO1xuXG5cdFx0dGhpcy5mYWNldHNNYXAgPSBmYWNldHNNYXA7XG5cblx0XHR0aGlzLm9mZnNldHMgPSBvZmZzZXRzO1xuXHR9XG5cblx0YWRkRmFjZXRzKGZhY2V0cykge1xuXHQgIGNvbnN0IHRleHR1cmVkRmFjZXRzID0gZmFjZXRzLCAgLy8vXG4gICAgICAgICAgdGV4dHVyZWRGYWNldHNMZW5ndGggPSB0ZXh0dXJlZEZhY2V0cy5sZW5ndGg7XG5cblx0ICBpZiAodGV4dHVyZWRGYWNldHNMZW5ndGggPiAwKSB7XG5cdCAgICBjb25zdCBmaXJzdFRleHR1cmVkRmFjZXQgPSBmaXJzdCh0ZXh0dXJlZEZhY2V0cyksXG4gICAgICAgICAgICB0ZXh0dXJlZEZhY2V0ID0gZmlyc3RUZXh0dXJlZEZhY2V0LCAvLy9cbiAgICAgICAgICAgIGltYWdlTmFtZSA9IHRleHR1cmVkRmFjZXQuZ2V0SW1hZ2VOYW1lKCksXG4gICAgICAgICAgICBmYWNldHMgPSB0aGlzLmZhY2V0c01hcFtpbWFnZU5hbWVdO1xuXG5cdCAgICBhZGQoZmFjZXRzLCB0ZXh0dXJlZEZhY2V0cylcbiAgICB9XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHZlcnRleEluZGV4ZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gW10sXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zID0gW10sXG4gICAgICAgICAgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBbXTtcblxuICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICB0aGlzLmltYWdlTmFtZXMuZm9yRWFjaCgoaW1hZ2VOYW1lKSA9PiB7XG4gICAgICBjb25zdCBmYWNldHMgPSB0aGlzLmZhY2V0c01hcFtpbWFnZU5hbWVdO1xuXG4gICAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IHtcbiAgICAgICAgY29uc3QgdGV4dHVyZWRGYWNldCA9IGZhY2V0LCAgLy8vXG4gICAgICAgICAgICAgIGZhY2V0VmVydGV4SW5kZXhlcyA9IGZhY2V0LmdldFZlcnRleEluZGV4ZXMoaW5kZXgpLFxuICAgICAgICAgICAgICBmYWNldFZlcnRleE5vcm1hbHMgPSBmYWNldC5nZXRWZXJ0ZXhOb3JtYWxzKCksXG4gICAgICAgICAgICAgIGZhY2V0VmVydGV4UG9zaXRpb25zID0gZmFjZXQuZ2V0VmVydGV4UG9zaXRpb25zKCksXG4gICAgICAgICAgICAgIHRleHR1cmVkRmFjZXRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVkRmFjZXQuZ2V0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMoKSxcbiAgICAgICAgICAgICAgdGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZWRGYWNldFRleHR1cmVDb29yZGluYXRlVHVwbGVzOyAgLy8vXG5cbiAgICAgICAgYWRkKHZlcnRleEluZGV4ZXMsIGZhY2V0VmVydGV4SW5kZXhlcyk7XG4gICAgICAgIGFkZCh2ZXJ0ZXhOb3JtYWxzLCBmYWNldFZlcnRleE5vcm1hbHMpO1xuICAgICAgICBhZGQodmVydGV4UG9zaXRpb25zLCBmYWNldFZlcnRleFBvc2l0aW9ucyk7XG4gICAgICAgIGFkZCh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgdGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcblxuICAgICAgICBpbmRleCsrO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IG9mZnNldCA9IGluZGV4ICogMzsgIC8vL1xuXG4gICAgICB0aGlzLm9mZnNldHMucHVzaChvZmZzZXQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVuZGVyZXJEYXRhID0gdGhpcy5nZXRSZW5kZXJlckRhdGEoKTtcblxuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuXG4gICAgc3VwZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuICB9XG5cbiAgcmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIGNhbnZhcykge1xuICAgIGNvbnN0IHByb2dyYW0gPSB0aGlzLmdldFByb2dyYW0oKTtcblxuICAgIGNhbnZhcy51c2VQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgdGhpcy5iaW5kQnVmZmVycyhjYW52YXMpO1xuXG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzOyAgLy8vXG5cbiAgICBjYW52YXMucmVuZGVyKHJlbmRlcmVyLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcblxuICAgIGxldCBzdGFydCxcbiAgICAgICAgZmluaXNoID0gMDsgIC8vL1xuXG4gICAgdGhpcy5vZmZzZXRzLmZvckVhY2goKG9mZnNldCwgaW5kZXgpID0+IHtcbiAgICAgIHN0YXJ0ID0gZmluaXNoOyAvLy9cblxuICAgICAgZmluaXNoID0gb2Zmc2V0OyAgLy8vXG5cbiAgICAgIHRoaXMudXNlVGV4dHVyZShpbmRleCwgY2FudmFzKTtcblxuICAgICAgY2FudmFzLmRyYXdFbGVtZW50cyhzdGFydCwgZmluaXNoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW1hZ2VzSW1hZ2VOYW1lc0FuZEltYWdlVGlsaW5nKGltYWdlcywgaW1hZ2VOYW1lcywgaW1hZ2VUaWxpbmcsIGNhbnZhcykge1xuICAgIGNvbnN0IG9mZnNldHMgPSBbXSxcbiAgICAgICAgICBmYWNldHNNYXAgPSB7fTtcblxuICAgIGltYWdlcy5mb3JFYWNoKChpbWFnZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGZhY2V0cyA9IFtdLFxuICAgICAgICAgICAgcmVwZWF0ID0gaW1hZ2VUaWxpbmcsIC8vL1xuICAgICAgICAgICAgaW1hZ2VOYW1lID0gaW1hZ2VOYW1lc1tpbmRleF07XG5cbiAgICAgIGZhY2V0c01hcFtpbWFnZU5hbWVdID0gZmFjZXRzO1xuXG4gICAgICBjYW52YXMuY3JlYXRlVGV4dHVyZShpbWFnZSwgaW5kZXgsIHJlcGVhdCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBpbWFnZXNUZXh0dXJlUmVuZGVyZXIgPSBUZXh0dXJlUmVuZGVyZXIuZnJvbU5vdGhpbmcoSW1hZ2VzVGV4dHVyZVJlbmRlcmVyLCBjYW52YXMsIGltYWdlTmFtZXMsIGZhY2V0c01hcCwgb2Zmc2V0cyk7XG5cbiAgICByZXR1cm4gaW1hZ2VzVGV4dHVyZVJlbmRlcmVyO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0dXJlUmVuZGVyZXIgZnJvbSBcIi4uLy4uL3JlbmRlcmVyL3RleHR1cmVcIjtcblxuaW1wb3J0IHsgYWRkIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZU1hcFRleHR1cmVSZW5kZXJlciBleHRlbmRzIFRleHR1cmVSZW5kZXJlciB7XG5cdGNvbnN0cnVjdG9yKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucywgaW1hZ2VNYXBKU09OKSB7XG5cdFx0c3VwZXIoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKTtcblxuXHRcdHRoaXMuaW1hZ2VNYXBKU09OID0gaW1hZ2VNYXBKU09OO1xuXHR9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gW10sXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zID0gW10sXG4gICAgICAgICAgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBbXTtcblxuICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHRleHR1cmVkRmFjZXQgPSBmYWNldCwgIC8vL1xuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhJbmRleGVzID0gZmFjZXQuZ2V0VmVydGV4SW5kZXhlcyhpbmRleCksXG4gICAgICAgICAgICBmYWNldFZlcnRleE5vcm1hbHMgPSBmYWNldC5nZXRWZXJ0ZXhOb3JtYWxzKCksXG4gICAgICAgICAgICBmYWNldFZlcnRleFBvc2l0aW9ucyA9IGZhY2V0LmdldFZlcnRleFBvc2l0aW9ucygpLFxuICAgICAgICAgICAgbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlZEZhY2V0LmdldE1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHRoaXMuaW1hZ2VNYXBKU09OKSxcbiAgICAgICAgICAgIHRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzOyAvLy9cblxuICAgICAgYWRkKHZlcnRleEluZGV4ZXMsIGZhY2V0VmVydGV4SW5kZXhlcyk7XG4gICAgICBhZGQodmVydGV4Tm9ybWFscywgZmFjZXRWZXJ0ZXhOb3JtYWxzKTtcbiAgICAgIGFkZCh2ZXJ0ZXhQb3NpdGlvbnMsIGZhY2V0VmVydGV4UG9zaXRpb25zKTtcbiAgICAgIGFkZCh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgdGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlbmRlcmVyRGF0YSA9IHRoaXMuZ2V0UmVuZGVyZXJEYXRhKCk7XG5cbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4UG9zaXRpb25zKHZlcnRleFBvc2l0aW9ucyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcblxuICAgIHN1cGVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKTtcblxuICAgIHJlbmRlcmVyQnVmZmVycy5iaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIHVzZVRleHR1cmUoaW5kZXgsIGNhbnZhcykge1xuICAgIGNvbnN0IHVuaWZvcm1Mb2NhdGlvbnMgPSB0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbnMoKSxcbiAgICAgICAgICBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uID0gdW5pZm9ybUxvY2F0aW9ucy5nZXRTYW1wbGVyVW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSA9IGluZGV4OyAvLy9cblxuICAgIGNhbnZhcy5zZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUoc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiwgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSk7XG4gIH1cblxuICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgY2FudmFzKSB7XG4gICAgY29uc3QgcHJvZ3JhbSA9IHRoaXMuZ2V0UHJvZ3JhbSgpO1xuXG4gICAgY2FudmFzLnVzZVByb2dyYW0ocHJvZ3JhbSk7XG5cbiAgICB0aGlzLmJpbmRCdWZmZXJzKGNhbnZhcyk7XG5cbiAgICBjb25zdCByZW5kZXJlciA9IHRoaXM7ICAvLy9cblxuICAgIGNhbnZhcy5yZW5kZXIocmVuZGVyZXIsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuXG4gICAgY29uc3QgcmVuZGVyZXJEYXRhID0gdGhpcy5nZXRSZW5kZXJlckRhdGEoKSxcbiAgICAgICAgICBjb3VudCA9IHJlbmRlcmVyRGF0YS5nZXRDb3VudCgpLFxuICAgICAgICAgIGluZGV4ID0gMCxcbiAgICAgICAgICBzdGFydCA9IDAsXG4gICAgICAgICAgZmluaXNoID0gY291bnQ7IC8vL1xuXG4gICAgdGhpcy51c2VUZXh0dXJlKGluZGV4LCBjYW52YXMpO1xuXG4gICAgY2FudmFzLmRyYXdFbGVtZW50cyhzdGFydCwgZmluaXNoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW1hZ2VNYXBBbmRJbWFnZU1hcEpTT04oaW1hZ2VNYXAsIGltYWdlTWFwSlNPTiwgY2FudmFzKSB7XG4gICAgY29uc3QgaW1hZ2UgPSBpbWFnZU1hcCwgLy8vXG4gICAgICAgICAgaW5kZXggPSAwLFxuICAgICAgICAgIHJlcGVhdCA9IGZhbHNlO1xuXG4gICAgY2FudmFzLmNyZWF0ZVRleHR1cmUoaW1hZ2UsIGluZGV4LCByZXBlYXQpO1xuXG4gICAgY29uc3QgaW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIgPSBUZXh0dXJlUmVuZGVyZXIuZnJvbU5vdGhpbmcoSW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIsIGNhbnZhcywgaW1hZ2VNYXBKU09OKTtcblxuICAgIHJldHVybiBpbWFnZU1hcFRleHR1cmVSZW5kZXJlcjtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFzayBmcm9tIFwiLi9tYXNrXCI7XG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IENvbG91clJlbmRlcmVyIGZyb20gXCIuLi9yZW5kZXJlci9jb2xvdXJcIjtcbmltcG9ydCBJbWFnZXNUZXh0dXJlUmVuZGVyZXIgZnJvbSBcIi4uL3JlbmRlcmVyL3RleHR1cmUvaW1hZ2VzXCI7XG5pbXBvcnQgSW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIgZnJvbSBcIi4uL3JlbmRlcmVyL3RleHR1cmUvaW1hZ2VNYXBcIjtcblxuaW1wb3J0IHsgZWxlbWVudHNGcm9tQ2hpbGRFbGVtZW50cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJ0IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGltYWdlcywgaW1hZ2VNYXAsIGltYWdlTmFtZXMsIGltYWdlVGlsaW5nLCBpbWFnZU1hcEpTT04sIGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5pbWFnZXMgPSBpbWFnZXM7XG4gICAgdGhpcy5pbWFnZU1hcCA9IGltYWdlTWFwO1xuICAgIHRoaXMuaW1hZ2VOYW1lcyA9IGltYWdlTmFtZXM7XG4gICAgdGhpcy5pbWFnZVRpbGluZyA9IGltYWdlVGlsaW5nO1xuICAgIHRoaXMuaW1hZ2VNYXBKU09OID0gaW1hZ2VNYXBKU09OO1xuICAgIHRoaXMuY29sb3VyUmVuZGVyZXIgPSBjb2xvdXJSZW5kZXJlcjtcbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlciA9IHRleHR1cmVSZW5kZXJlcjtcbiAgfVxuICBcbiAgaW5pdGlhbGlzZShjYW52YXMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBjb2xvdXJSZW5kZXJlciA9IENvbG91clJlbmRlcmVyLmZyb21Ob3RoaW5nKGNhbnZhcyksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpLFxuICAgICAgICAgIG1hc2tzID0gZWxlbWVudHNGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzLCBNYXNrKTtcblxuICAgIGxldCB0ZXh0dXJlUmVuZGVyZXIgPSBudWxsO1xuXG4gICAgaWYgKHRoaXMuaW1hZ2VzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbWFnZXNUZXh0dXJlUmVuZGVyZXIgPSBJbWFnZXNUZXh0dXJlUmVuZGVyZXIuZnJvbUltYWdlc0ltYWdlTmFtZXNBbmRJbWFnZVRpbGluZyh0aGlzLmltYWdlcywgdGhpcy5pbWFnZU5hbWVzLCB0aGlzLmltYWdlVGlsaW5nLCBjYW52YXMpO1xuXG4gICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBpbWFnZXNUZXh0dXJlUmVuZGVyZXI7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAodGhpcy5pbWFnZU1hcCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIgPSBJbWFnZU1hcFRleHR1cmVSZW5kZXJlci5mcm9tSW1hZ2VNYXBBbmRJbWFnZU1hcEpTT04odGhpcy5pbWFnZU1hcCwgdGhpcy5pbWFnZU1hcEpTT04sIGNhbnZhcyk7XG5cbiAgICAgIHRleHR1cmVSZW5kZXJlciA9IGltYWdlTWFwVGV4dHVyZVJlbmRlcmVyOyAgLy8vXG4gICAgfVxuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICAgIGNoaWxkRWxlbWVudC5jcmVhdGVGYWNldHMobWFyZ2luT2ZFcnJvcik7XG4gICAgfSk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgICAgY2hpbGRFbGVtZW50Lm1hc2tGYWNldHMobWFza3MsIG1hcmdpbk9mRXJyb3IpO1xuICAgIH0pO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICAgIGNoaWxkRWxlbWVudC5hZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcik7XG4gICAgfSk7XG5cbiAgICBpZiAoY29sb3VyUmVuZGVyZXIgIT09IG51bGwpIHtcbiAgICAgIGNvbG91clJlbmRlcmVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcbiAgICB9XG5cbiAgICBpZiAodGV4dHVyZVJlbmRlcmVyICE9PSBudWxsKSB7XG4gICAgICB0ZXh0dXJlUmVuZGVyZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuICAgIH1cblxuICAgIHRoaXMuY29sb3VyUmVuZGVyZXIgPSBjb2xvdXJSZW5kZXJlcjtcblxuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyID0gdGV4dHVyZVJlbmRlcmVyO1xuICB9XG5cbiAgcmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIGNhbnZhcykge1xuICAgIHRoaXMuY29sb3VyUmVuZGVyZXIgJiYgdGhpcy5jb2xvdXJSZW5kZXJlci5yZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgY2FudmFzKTsgIC8vL1xuXG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIgJiYgdGhpcy50ZXh0dXJlUmVuZGVyZXIucmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIGNhbnZhcyk7ICAvLy9cbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbWFnZXMgPSBudWxsLCBpbWFnZU1hcCA9IG51bGwsIGltYWdlTmFtZXMgPSBudWxsLCBpbWFnZVRpbGluZyA9IGZhbHNlLCBpbWFnZU1hcEpTT04gPSBudWxsIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHRleHR1cmVSZW5kZXJlciA9IG51bGwsIC8vL1xuICAgICAgICAgIHBhcnQgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFBhcnQsIHByb3BlcnRpZXMsIGltYWdlcywgaW1hZ2VNYXAsIGltYWdlTmFtZXMsIGltYWdlVGlsaW5nLCBpbWFnZU1hcEpTT04sIGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpO1xuXG4gICAgcmV0dXJuIHBhcnQ7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuaW1wb3J0IHsgREVHUkVFU19UT19SQURJQU5TX01VTFRJUExJRVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBERUZBVUxUX1pfRkFSLCBERUZBVUxUX1pfTkVBUiwgREVGQVVMVF9GSUVMRF9PRl9WSUVXIH0gZnJvbSBcIi4uL2RlZmF1bHRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbWVyYSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih6RmFyLCB6TmVhciwgZmllbGRPZlZpZXcpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy56RmFyID0gekZhcjtcbiAgICB0aGlzLnpOZWFyID0gek5lYXI7XG4gICAgdGhpcy5maWVsZE9mVmlldyA9IGZpZWxkT2ZWaWV3O1xuICB9XG5cbiAgZ2V0WkZhcigpIHtcbiAgICByZXR1cm4gdGhpcy56RmFyO1xuICB9XG5cbiAgZ2V0Wk5lYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuek5lYXI7XG4gIH1cblxuICBnZXRGaWVsZE9mVmlldygpIHtcbiAgICByZXR1cm4gdGhpcy5maWVsZE9mVmlldztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHsgZmllbGRPZlZpZXcgPSBERUZBVUxUX0ZJRUxEX09GX1ZJRVcgfSA9IHByb3BlcnRpZXM7XG5cbiAgICBmaWVsZE9mVmlldyAqPSBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUjsgLy8vXG5cbiAgICBjb25zdCB7IHpGYXIgPSBERUZBVUxUX1pfRkFSLCB6TmVhciA9IERFRkFVTFRfWl9ORUFSIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNhbWVyYSA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIHpGYXIsIHpOZWFyLCBmaWVsZE9mVmlldywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBjYW1lcmE7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFdIRUVMX0VWRU5UX1RZUEUgPSBcIndoZWVsXCI7XG5leHBvcnQgY29uc3QgS0VZVVBfRVZFTlRfVFlQRSA9IFwia2V5dXBcIjtcbmV4cG9ydCBjb25zdCBLRVlET1dOX0VWRU5UX1RZUEUgPSBcImtleWRvd25cIjtcbmV4cG9ydCBjb25zdCBNT1VTRVVQX0VWRU5UX1RZUEUgPSBcIm1vdXNldXBcIjtcbmV4cG9ydCBjb25zdCBNT1VTRURPV05fRVZFTlRfVFlQRSA9IFwibW91c2Vkb3duXCI7XG5leHBvcnQgY29uc3QgTU9VU0VNT1ZFX0VWRU5UX1RZUEUgPSBcIm1vdXNlbW92ZVwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBrZXlDb2RlcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgS0VZVVBfRVZFTlRfVFlQRSwgS0VZRE9XTl9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2V2ZW50VHlwZXNcIjtcblxuY29uc3QgeyBFU0NBUEVfS0VZX0NPREUsIFNISUZUX0tFWV9DT0RFIH0gPSBrZXlDb2RlcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5RXZlbnRzIHtcbiAgY29uc3RydWN0b3IoaGFuZGxlcnMsIHNoaWZ0S2V5RG93bikge1xuICAgIHRoaXMuaGFuZGxlcnMgPSBoYW5kbGVycztcbiAgICB0aGlzLnNoaWZ0S2V5RG93biA9IHNoaWZ0S2V5RG93bjtcbiAgfVxuXG4gIGdldEhhbmRsZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmhhbmRsZXJzO1xuICB9XG5cbiAgaXNTaGlmdEtleURvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hpZnRLZXlEb3duO1xuICB9XG5cbiAga2V5VXBFdmVudExpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgIGlmIChrZXlDb2RlID09PSBTSElGVF9LRVlfQ09ERSkge1xuICAgICAgdGhpcy5zaGlmdEtleURvd24gPSBmYWxzZTtcblxuICAgICAgdGhpcy5oYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIodGhpcy5zaGlmdEtleURvd24pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAga2V5RG93bkV2ZW50TGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgaWYgKGtleUNvZGUgPT09IFNISUZUX0tFWV9DT0RFKSB7XG4gICAgICB0aGlzLnNoaWZ0S2V5RG93biA9IHRydWU7XG5cbiAgICAgIHRoaXMuaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKHRoaXMuc2hpZnRLZXlEb3duKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFkZFNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleUhhbmRsZXIpIHtcbiAgICBjb25zdCBoYW5kbGVyID0gc2hpZnRLZXlIYW5kbGVyOyAgLy8vXG5cbiAgICB0aGlzLmhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gIH1cblxuICBhZGRFc2NhcGVLZXlEb3duSGFuZGxlcihlc2NhcGVLZXlEb3duSGFuZGxlcikge1xuICAgIGNvbnN0IGRvY3VtZW50RE9NRWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDsgIC8vL1xuXG4gICAgZG9jdW1lbnRET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoS0VZRE9XTl9FVkVOVF9UWVBFLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICAgIGlmIChrZXlDb2RlID09PSBFU0NBUEVfS0VZX0NPREUpIHtcbiAgICAgICAgZXNjYXBlS2V5RG93bkhhbmRsZXIoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgY29uc3QgZG9jdW1lbnRET01FbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OyAgLy8vXG5cbiAgICBkb2N1bWVudERPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihLRVlVUF9FVkVOVF9UWVBFLCB0aGlzLmtleVVwRXZlbnRMaXN0ZW5lcik7XG5cbiAgICBkb2N1bWVudERPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihLRVlET1dOX0VWRU5UX1RZUEUsIHRoaXMua2V5RG93bkV2ZW50TGlzdGVuZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gW10sXG4gICAgICAgICAgc2hpZnRLZXlEb3duID0gZmFsc2UsICAvLy9cbiAgICAgICAgICBrZXlFdmVudHMgPSBuZXcgS2V5RXZlbnRzKGhhbmRsZXJzLCBzaGlmdEtleURvd24pO1xuXG4gICAgcmV0dXJuIGtleUV2ZW50cztcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBXSEVFTF9FVkVOVF9UWVBFLCBNT1VTRVVQX0VWRU5UX1RZUEUsIE1PVVNFRE9XTl9FVkVOVF9UWVBFLCBNT1VTRU1PVkVfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdXNlRXZlbnRzIHtcbiAgY29uc3RydWN0b3IoaGFuZGxlcnNNYXAsIG1vdXNlRG93bikge1xuICAgIHRoaXMuaGFuZGxlcnNNYXAgPSBoYW5kbGVyc01hcDtcbiAgICB0aGlzLm1vdXNlRG93biA9IG1vdXNlRG93bjtcbiAgfVxuXG4gIHdoZWVsRXZlbnRMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgV0hFRUxfRVZFTlRfVFlQRSBdLFxuICAgICAgICAgIG1vdXNlV2hlZWxEZWx0YSA9IG1vdXNlV2hlZWxEZWx0YUZyb21FdmVudChldmVudCk7XG5cbiAgICBoYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICBoYW5kbGVyKG1vdXNlV2hlZWxEZWx0YSk7XG4gICAgfSk7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgbW91c2VFdmVudExpc3RlbmVyID0gKGV2ZW50LCBldmVudFR5cGUpID0+IHtcbiAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbZXZlbnRUeXBlXSxcbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlc0Zyb21FdmVudChldmVudCk7XG5cbiAgICBoYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICBoYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMubW91c2VEb3duKTtcbiAgICB9KTtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBtb3VzZVVwRXZlbnRMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRMaXN0ZW5lcihldmVudCwgTU9VU0VVUF9FVkVOVF9UWVBFKTtcbiAgfVxuXG5cdG1vdXNlRG93bkV2ZW50TGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcbiAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRMaXN0ZW5lcihldmVudCwgTU9VU0VET1dOX0VWRU5UX1RZUEUpO1xuICB9XG5cblx0bW91c2VNb3ZlRXZlbnRMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgIHRoaXMubW91c2VFdmVudExpc3RlbmVyKGV2ZW50LCBNT1VTRU1PVkVfRVZFTlRfVFlQRSk7XG4gIH1cblxuICBhZGRNb3VzZVVwSGFuZGxlcihtb3VzZVVwSGFuZGxlcikge1xuICAgIGNvbnN0IG1vdXNlVXBIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFVVBfRVZFTlRfVFlQRSBdO1xuXG4gICAgbW91c2VVcEhhbmRsZXJzLnB1c2gobW91c2VVcEhhbmRsZXIpO1xuICB9XG5cbiAgYWRkTW91c2VEb3duSGFuZGxlcihtb3VzZURvd25IYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VEb3duSGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRURPV05fRVZFTlRfVFlQRSBdO1xuXG4gICAgbW91c2VEb3duSGFuZGxlcnMucHVzaChtb3VzZURvd25IYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlTW92ZUhhbmRsZXIobW91c2VNb3ZlSGFuZGxlcikge1xuICAgIGNvbnN0IG1vdXNlTW92ZUhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VNT1ZFX0VWRU5UX1RZUEUgXTtcblxuICAgIG1vdXNlTW92ZUhhbmRsZXJzLnB1c2gobW91c2VNb3ZlSGFuZGxlcik7XG4gIH1cblxuICBhZGRNb3VzZVdoZWVsSGFuZGxlcihtb3VzZVdoZWVsSGFuZGxlcikge1xuICAgIGNvbnN0IG1vdXNlV2hlZWxIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIFdIRUVMX0VWRU5UX1RZUEUgXTtcblxuICAgIG1vdXNlV2hlZWxIYW5kbGVycy5wdXNoKG1vdXNlV2hlZWxIYW5kbGVyKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzKSB7XG4gICAgICBjb25zdCBjYW52YXNET01FbGVtZW50ID0gY2FudmFzLmdldERPTUVsZW1lbnQoKTtcblxuICAgIHRoaXMuaGFuZGxlcnNNYXBbIFdIRUVMX0VWRU5UX1RZUEUgXSA9IFtdO1xuICAgIHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFVVBfRVZFTlRfVFlQRSBdID0gW107XG4gICAgdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VET1dOX0VWRU5UX1RZUEUgXSA9IFtdO1xuICAgIHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFTU9WRV9FVkVOVF9UWVBFIF0gPSBbXTtcblxuICAgIGNhbnZhc0RPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihXSEVFTF9FVkVOVF9UWVBFLCB0aGlzLndoZWVsRXZlbnRMaXN0ZW5lcik7XG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKE1PVVNFVVBfRVZFTlRfVFlQRSwgdGhpcy5tb3VzZVVwRXZlbnRMaXN0ZW5lcik7XG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKE1PVVNFRE9XTl9FVkVOVF9UWVBFLCB0aGlzLm1vdXNlRG93bkV2ZW50TGlzdGVuZXIpO1xuICAgIGNhbnZhc0RPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihNT1VTRU1PVkVfRVZFTlRfVFlQRSwgdGhpcy5tb3VzZU1vdmVFdmVudExpc3RlbmVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBoYW5kbGVyc01hcCA9IHt9LFxuICAgICAgICAgIG1vdXNlRG93biA9IGZhbHNlLCAgLy8vXG5cdFx0XHRcdFx0bW91c2VFdmVudHMgPSBuZXcgTW91c2VFdmVudHMoaGFuZGxlcnNNYXAsIG1vdXNlRG93bik7XG5cbiAgICByZXR1cm4gbW91c2VFdmVudHM7XG4gIH1cbn1cblxuZnVuY3Rpb24gbW91c2VXaGVlbERlbHRhRnJvbUV2ZW50KGV2ZW50KSB7XG4gIGNvbnN0IHsgd2hlZWxEZWx0YSB9ID0gZXZlbnQsXG4gICAgICAgIG1vdXNlV2hlZWxEZWx0YSA9IE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCB3aGVlbERlbHRhKSk7IC8vL1xuXG4gIHJldHVybiBtb3VzZVdoZWVsRGVsdGE7XG59XG5cbmZ1bmN0aW9uIG1vdXNlQ29vcmRpbmF0ZXNGcm9tRXZlbnQoZXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQsIGNsaWVudFgsIGNsaWVudFkgfSA9IGV2ZW50LFxuICAgICAgICBjYW52YXNET01FbGVtZW50ID0gdGFyZ2V0LCAgLy8vXG4gICAgICAgIGJvdW5kaW5nQ2xpZW50UmVjdCA9IGNhbnZhc0RPTUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIHsgdG9wLCBsZWZ0IH0gPSBib3VuZGluZ0NsaWVudFJlY3QsXG4gICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBbXG4gICAgICAgICAgY2xpZW50WCAtIGxlZnQsXG4gICAgICAgICAgdG9wIC0gY2xpZW50WVxuICAgICAgICBdO1xuXG4gIHJldHVybiBtb3VzZUNvb3JkaW5hdGVzO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgS2V5RXZlbnRzIGZyb20gXCIuL2tleUV2ZW50c1wiO1xuaW1wb3J0IE1vdXNlRXZlbnRzIGZyb20gXCIuL21vdXNlRXZlbnRzXCI7XG5cbmltcG9ydCB7IHplcm8yLCBzdWJ0cmFjdDIgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbnB1dCB7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXJzLCBrZXlFdmVudHMsIG1vdXNlRXZlbnRzLCBtb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLmhhbmRsZXJzID0gaGFuZGxlcnM7XG4gICAgdGhpcy5rZXlFdmVudHMgPSBrZXlFdmVudHM7XG4gICAgdGhpcy5tb3VzZUV2ZW50cyA9IG1vdXNlRXZlbnRzO1xuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBtb3VzZU1vdmVIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlRG93biwgY2FudmFzKSB7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSB0aGlzLm1vdXNlQ29vcmRpbmF0ZXM7ICAvLy9cblxuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG5cbiAgICBpZiAodGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobW91c2VEb3duKSB7XG4gICAgICBjb25zdCBtb3VzZVdoZWVsRGVsdGEgPSAwLCAgLy8vXG4gICAgICAgICAgICBzaGlmdEtleURvd24gPSB0aGlzLmtleUV2ZW50cy5pc1NoaWZ0S2V5RG93bigpLFxuICAgICAgICAgICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc3VidHJhY3QyKHRoaXMubW91c2VDb29yZGluYXRlcywgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgICB0aGlzLmhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlcihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxEZWx0YSwgY2FudmFzKSB7XG4gICAgY29uc3Qgc2hpZnRLZXlEb3duID0gdGhpcy5rZXlFdmVudHMuaXNTaGlmdEtleURvd24oKSxcbiAgICAgICAgICByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSB6ZXJvMigpO1xuXG4gICAgdGhpcy5oYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICBoYW5kbGVyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24pO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkVXNlcklucHV0SGFuZGxlcih1c2VySW5wdXRIYW5kbGVyKSB7XG4gICAgY29uc3QgaGFuZGxlciA9IHVzZXJJbnB1dEhhbmRsZXI7IC8vL1xuXG4gICAgdGhpcy5oYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICB9XG5cbiAgYWRkRXNjYXBlS2V5RG93bkhhbmRsZXIoZXNjYXBlS2V5RG93bkhhbmRsZXIpIHsgdGhpcy5rZXlFdmVudHMuYWRkRXNjYXBlS2V5RG93bkhhbmRsZXIoZXNjYXBlS2V5RG93bkhhbmRsZXIpOyB9XG5cbiAgaW5pdGlhbGlzZShjYW52YXMpIHtcbiAgICBjb25zdCBtb3VzZU1vdmVIYW5kbGVyID0gdGhpcy5tb3VzZU1vdmVIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VXaGVlbEhhbmRsZXIgPSB0aGlzLm1vdXNlV2hlZWxIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmtleUV2ZW50cy5pbml0aWFsaXNlKCk7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRzLmluaXRpYWxpc2UoY2FudmFzKTtcblxuICAgIHRoaXMubW91c2VFdmVudHMuYWRkTW91c2VNb3ZlSGFuZGxlcihtb3VzZU1vdmVIYW5kbGVyKTtcblxuICAgIHRoaXMubW91c2VFdmVudHMuYWRkTW91c2VXaGVlbEhhbmRsZXIobW91c2VXaGVlbEhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gW10sXG4gICAgICAgICAga2V5RXZlbnRzID0gS2V5RXZlbnRzLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbW91c2VFdmVudHMgPSBNb3VzZUV2ZW50cy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBudWxsLCAgLy8vXG4gICAgICAgICAgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHVzZXJJbnB1dCA9IG5ldyBVc2VySW5wdXQoaGFuZGxlcnMsIGtleUV2ZW50cywgbW91c2VFdmVudHMsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gdXNlcklucHV0O1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQYXJ0IGZyb20gXCIuLi9lbGVtZW50L3BhcnRcIjtcbmltcG9ydCBDYW1lcmEgZnJvbSBcIi4uL2VsZW1lbnQvY2FtZXJhXCI7XG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IFVzZXJJbnB1dCBmcm9tIFwiLi4vbWlzY2VsbGFuZW91cy91c2VySW5wdXRcIjtcblxuaW1wb3J0IHsgemVybzIgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyBERUZBVUxUX01BUkdJTl9PRl9FUlJPUiwgREVGQVVMVF9CQUNLR1JPVU5EX0NPTE9VUiB9IGZyb20gXCIuLi9kZWZhdWx0c1wiO1xuaW1wb3J0IHsgZWxlbWVudEZyb21DaGlsZEVsZW1lbnRzLCBlbGVtZW50c0Zyb21DaGlsZEVsZW1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzLCBjYW1lcmEsIGNhbnZhcywgY29sb3VyKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYTtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmNvbG91ciA9IGNvbG91cjtcbiAgfVxuXG4gIGdldFBhcnRzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnRzO1xuICB9XG5cbiAgZ2V0Q2FtZXJhKCkge1xuICAgIHJldHVybiB0aGlzLmNhbWVyYTtcbiAgfVxuXG4gIGdldENhbnZhcygpIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXM7XG4gIH1cblxuICBnZXRDb2xvdXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sb3VyO1xuICB9XG5cbiAgZXNjYXBlS2V5RG93bkhhbmRsZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5jYW1lcmEucmVzZXQoKTtcblxuICAgIHRoaXMud2luZG93UmVzaXplSGFuZGxlcigpOyAvLy9cbiAgfVxuXG4gIHdpbmRvd1Jlc2l6ZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY2xpZW50V2lkdGggPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRXaWR0aCgpLFxuICAgICAgICAgIGNsaWVudEhlaWdodCA9IHRoaXMuY2FudmFzLmdldENsaWVudEhlaWdodCgpLFxuICAgICAgICAgIHdpZHRoID0gY2xpZW50V2lkdGgsICAvLy9cbiAgICAgICAgICBoZWlnaHQgPSBjbGllbnRIZWlnaHQ7XG5cbiAgICB0aGlzLmNhbnZhcy5yZXNpemUod2lkdGgsIGhlaWdodCk7XG5cbiAgICBjb25zdCByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSB6ZXJvMigpLCAvLy9cbiAgICAgICAgICBtb3VzZVdoZWVsRGVsdGEgPSAwLCAgLy8vXG4gICAgICAgICAgc2hpZnRLZXlEb3duID0gZmFsc2U7IC8vL1xuXG4gICAgdGhpcy51c2VySW5wdXRIYW5kbGVyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24pO1xuICB9XG5cbiAgdXNlcklucHV0SGFuZGxlciA9IChyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duKSA9PiB7XG4gICAgY29uc3QgcmVuZGVyID0gdGhpcy5yZW5kZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuY2FtZXJhLnVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCB0aGlzLmNhbnZhcywgcmVuZGVyKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgdXNlcklucHV0ID0gVXNlcklucHV0LmZyb21Ob3RoaW5nKCk7XG5cbiAgICB0aGlzLnBhcnRzLmZvckVhY2goKHBhcnQpID0+IHtcbiAgICAgIHBhcnQuaW5pdGlhbGlzZShjYW52YXMsIG1hcmdpbk9mRXJyb3IpO1xuICAgIH0pO1xuXG4gICAgdXNlcklucHV0LmluaXRpYWxpc2UoY2FudmFzKTtcblxuICAgIHVzZXJJbnB1dC5hZGRVc2VySW5wdXRIYW5kbGVyKHRoaXMudXNlcklucHV0SGFuZGxlcik7XG5cbiAgICB1c2VySW5wdXQuYWRkRXNjYXBlS2V5RG93bkhhbmRsZXIodGhpcy5lc2NhcGVLZXlEb3duSGFuZGxlcik7XG5cbiAgICB3aW5kb3cub25yZXNpemUgPSB0aGlzLndpbmRvd1Jlc2l6ZUhhbmRsZXI7XG5cbiAgICB0aGlzLndpbmRvd1Jlc2l6ZUhhbmRsZXIoKTsgLy8vXG4gIH1cblxuICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkge1xuICAgIHRoaXMuY2FudmFzLmNsZWFyKHRoaXMuY29sb3VyKTtcblxuICAgIHRoaXMucGFydHMuZm9yRWFjaCgocGFydCkgPT4ge1xuICAgICAgcGFydC5yZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgdGhpcy5jYW52YXMpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGNhbnZhcywgY2hpbGRFbGVtZW50cywgYmFja2dyb3VuZENvbG91ciA9IERFRkFVTFRfQkFDS0dST1VORF9DT0xPVVIgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgcGFydHMgPSBlbGVtZW50c0Zyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMsIFBhcnQpLFxuICAgICAgICAgIGNhbWVyYSA9IGVsZW1lbnRGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzLCBDYW1lcmEpLFxuICAgICAgICAgIGNvbG91ciA9IGJhY2tncm91bmRDb2xvdXIsICAvL1xuICAgICAgICAgIHNjZW5lID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhTY2VuZSwgcHJvcGVydGllcywgcGFydHMsIGNhbWVyYSwgY2FudmFzLCBjb2xvdXIpLFxuICAgICAgICAgIG1hcmdpbk9mRXJyb3IgPSBERUZBVUxUX01BUkdJTl9PRl9FUlJPUjtcblxuICAgIHNjZW5lLmluaXRpYWxpc2UoY2FudmFzLCBtYXJnaW5PZkVycm9yKTtcblxuICAgIHJldHVybiBzY2VuZTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9tYXRyaXhcIjtcbmltcG9ydCB7IHJlZmxlY3QzLCB0cnVuY2F0ZTQsIHRyYW5zZm9ybTQgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWxhdGl2ZU9mZnNldHNGcm9tQW5nbGVzQW5kRGlyZWN0aW9ucyhhbmdsZXMsIGRpcmVjdGlvbnMpIHtcbiAgYW5nbGVzID0gcmVmbGVjdDMoYW5nbGVzKTsgIC8vL1xuXG4gIGNvbnN0IHJldmVyc2VPcmRlciA9IHRydWUsXG4gICAgICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMoYW5nbGVzLCByZXZlcnNlT3JkZXIpO1xuXG4gIGxldCByZWxhdGl2ZU9mZnNldHMgPSB0cmFuc2Zvcm00KGRpcmVjdGlvbnMsIHJvdGF0aW9uc01hdHJpeCk7XG5cbiAgcmVsYXRpdmVPZmZzZXRzID0gdHJ1bmNhdGU0KHJlbGF0aXZlT2Zmc2V0cyk7XG5cbiAgcmV0dXJuIHJlbGF0aXZlT2Zmc2V0cztcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYWRkMywgc2NhbGUyLCByZWZsZWN0MiB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IHJlbGF0aXZlT2Zmc2V0c0Zyb21BbmdsZXNBbmREaXJlY3Rpb25zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9vZmZzZXRzXCI7XG5pbXBvcnQgeyBNT1VTRV9XSEVFTF9ERUxUQV9NVUxUSVBMSUVSLCBSRUxBVElWRV9NT1VTRV9DT09SRElOQVRFU19NVUxUSVBMSUVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYW4ge1xuICBjb25zdHJ1Y3RvcihvZmZzZXRzLCBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyLCByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyKSB7XG4gICAgdGhpcy5vZmZzZXRzID0gb2Zmc2V0cztcbiAgICB0aGlzLm1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIgPSBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyO1xuICAgIHRoaXMucmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllciA9IHJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXI7XG4gIH1cblxuICBnZXRPZmZzZXRzKCkge1xuICAgIHJldHVybiB0aGlzLm9mZnNldHM7XG4gIH1cblxuICBnZXREZWx0YU11bHRpcGxpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubW91c2VXaGVlbERlbHRhTXVsdGlwbGllcjtcbiAgfVxuXG4gIGdldFJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllcjtcbiAgfVxuXG4gIHVwZGF0ZU9mZnNldHMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIGFuZ2xlcykge1xuICAgIG1vdXNlV2hlZWxEZWx0YSA9IG1vdXNlV2hlZWxEZWx0YSAqIHRoaXMubW91c2VXaGVlbERlbHRhTXVsdGlwbGllcjsgLy8vXG5cbiAgICByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSBzY2FsZTIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCB0aGlzLnJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIpOyAvLy9cblxuICAgIGNvbnN0IHNjYWxlZFJlZmxlY3RlZFJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHJlZmxlY3QyKHNjYWxlMihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIDEpKSxcbiAgICAgICAgICBkaXJlY3Rpb25zID0gWyAuLi5zY2FsZWRSZWZsZWN0ZWRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgMCBdLFxuICAgICAgICAgIHJlbGF0aXZlT2Zmc2V0cyA9IHJlbGF0aXZlT2Zmc2V0c0Zyb21BbmdsZXNBbmREaXJlY3Rpb25zKGFuZ2xlcywgZGlyZWN0aW9ucywgMSk7XG5cbiAgICB0aGlzLm9mZnNldHMgPSBhZGQzKHRoaXMub2Zmc2V0cywgcmVsYXRpdmVPZmZzZXRzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5pdGlhbE9mZnNldHNNb3VzZVNlbnNpdGl2aXR5QW5kTW91c2VXaGVlbFNlbnNpdGl2aXR5KGluaXRpYWxPZmZzZXRzLCBtb3VzZVNlbnNpdGl2aXR5LCBtb3VzZVdoZWVsU2Vuc2l0aXZpdHkpIHtcbiAgICBjb25zdCBvZmZzZXRzID0gaW5pdGlhbE9mZnNldHMsIC8vL1xuICAgICAgICAgIG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIgPSBNT1VTRV9XSEVFTF9ERUxUQV9NVUxUSVBMSUVSICogbW91c2VXaGVlbFNlbnNpdGl2aXR5LFxuICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIgPSBSRUxBVElWRV9NT1VTRV9DT09SRElOQVRFU19NVUxUSVBMSUVSICogbW91c2VTZW5zaXRpdml0eSxcbiAgICAgICAgICBwYW4gPSBuZXcgUGFuKG9mZnNldHMsIG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIsIHJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIpO1xuXG4gICAgcmV0dXJuIHBhbjtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBBTkdMRVNfTVVMVElQTElFUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGFkZDMsIHNjYWxlMiwgdHJhbnNmb3JtMyB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsdCB7XG4gIGNvbnN0cnVjdG9yKGFuZ2xlcywgY2xvY2t3aXNlKSB7XG4gICAgdGhpcy5hbmdsZXMgPSBhbmdsZXM7XG4gICAgdGhpcy5jbG9ja3dpc2UgPSBjbG9ja3dpc2U7XG4gIH1cblxuICBnZXRBbmdsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW5nbGVzO1xuICB9XG5cbiAgaXNDbG9ja3dpc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvY2t3aXNlO1xuICB9XG5cbiAgdXBkYXRlQW5nbGVzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcykge1xuICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHNjYWxlMihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIEFOR0xFU19NVUxUSVBMSUVSKTsgLy8vXG5cbiAgICBjb25zdCBtdWx0aXBsaWVyID0gdGhpcy5jbG9ja3dpc2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgKzEgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAtMSxcbiAgICAgICAgICBtYXRyaXggPSBbXG5cbiAgICAgICAgICAgICAgICAgICAgICAwLCArbXVsdGlwbGllciwgMCxcbiAgICAgICAgICAgIC1tdWx0aXBsaWVyLCAgICAgICAgICAgMCwgMCxcbiAgICAgICAgICAgICAgICAgICAgICAwLCAgICAgICAgICAgMCwgMFxuXG4gICAgICAgICAgXSxcbiAgICAgICAgICByZWxhdGl2ZUFuZ2xlcyA9IHRyYW5zZm9ybTMoWyAuLi5yZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIDAgXSwgbWF0cml4KTtcblxuICAgIHRoaXMuYW5nbGVzID0gYWRkMyh0aGlzLmFuZ2xlcywgcmVsYXRpdmVBbmdsZXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Jbml0aWFsQW5nbGVzKGluaXRpYWxBbmdsZXMpIHtcbiAgICBjb25zdCBhbmdsZXMgPSBbIC4uLmluaXRpYWxBbmdsZXMsIDAgXSxcbiAgICAgICAgICBjbG9ja3dpc2UgPSBmYWxzZSxcbiAgICAgICAgICB0aWx0ID0gbmV3IFRpbHQoYW5nbGVzLCBjbG9ja3dpc2UpO1xuXG4gICAgcmV0dXJuIHRpbHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxBbmdsZXNBbmRDbG9ja3dpc2UoaW5pdGlhbEFuZ2xlcywgY2xvY2t3aXNlKSB7XG4gICAgY29uc3QgYW5nbGVzID0gWyAuLi5pbml0aWFsQW5nbGVzLCAwIF0sXG4gICAgICAgICAgdGlsdCA9IG5ldyBUaWx0KGFuZ2xlcywgY2xvY2t3aXNlKTtcblxuICAgIHJldHVybiB0aWx0O1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRKU09OKGtleSkge1xuICBsZXQganNvbiA9IG51bGw7XG5cbiAgY29uc3QgdmFsdWUgPSBnZXQoa2V5KTtcblxuICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICBqc29uID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4ganNvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEpTT04oa2V5LCBqc29uKSB7XG4gIGNvbnN0IHZhbHVlID0gSlNPTi5zdHJpbmdpZnkoanNvbik7XG5cbiAgc2V0KGtleSwgdmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlSlNPTihrZXkpIHtcbiAgcmVtb3ZlKGtleSk7XG59XG5cbmZ1bmN0aW9uIGdldChrYXkpIHtcbiAgY29uc3QgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrYXkpIHx8IG51bGw7XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBzZXQoa2F5LCB2YWx1ZSkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrYXksIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlKGtleSkge1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xufSIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFBhbiBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy9wYW5cIjtcbmltcG9ydCBUaWx0IGZyb20gXCIuLi8uLi9taXNjZWxsYW5lb3VzL3RpbHRcIjtcblxuaW1wb3J0IENhbWVyYSBmcm9tIFwiLi4vY2FtZXJhXCI7XG5cbmltcG9ydCB7IHNjYWxlMiwgc2NhbGUzIH0gZnJvbSBcIi4uLy4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgZ2V0SlNPTiwgc2V0SlNPTiwgcmVtb3ZlSlNPTiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbG9jYWxTdG9yYWdlXCI7XG5pbXBvcnQgeyBHQU1JTkdfQ0FNRVJBLCBJTlZFUlRfTVVMVElQTElFUiwgREVHUkVFU19UT19SQURJQU5TX01VTFRJUExJRVIgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBERUZBVUxUX1BFUlNJU1QsXG4gICAgICAgICBERUZBVUxUX0lOSVRJQUxfQU5HTEVTLFxuICAgICAgICAgREVGQVVMVF9JTklUSUFMX1BPU0lUSU9OLFxuICAgICAgICAgREVGQVVMVF9NT1VTRV9TRU5TSVRJVklUWSxcbiAgICAgICAgIERFRkFVTFRfTU9VU0VfV0hFRUxfU0VOU0lUSVZJVFkgfSBmcm9tIFwiLi4vLi4vZGVmYXVsdHNcIjtcbmltcG9ydCB7IG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyxcbiAgICAgICAgIHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMsXG4gICAgICAgICBwb3NpdGlvbk1hdHJpeEZyb21Ob3RoaW5nLFxuICAgICAgICAgbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgsXG4gICAgICAgICBwcm9qZWN0aW9uTWF0cml4RnJvbUNhbWVyYUFuZENhbnZhcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbWF0cml4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWluZ0NhbWVyYSBleHRlbmRzIENhbWVyYSB7XG4gIGNvbnN0cnVjdG9yKHpGYXIsIHpOZWFyLCBmaWVsZE9mVmlldywgcGFuLCB0aWx0LCBwZXJzaXN0KSB7XG4gICAgc3VwZXIoekZhciwgek5lYXIsIGZpZWxkT2ZWaWV3KTtcblxuICAgIHRoaXMucGFuID0gcGFuO1xuICAgIHRoaXMudGlsdCA9IHRpbHQ7XG4gICAgdGhpcy5wZXJzaXN0ID0gcGVyc2lzdDtcbiAgfVxuXG4gIGdldFBhbigpIHtcbiAgICByZXR1cm4gdGhpcy5wYW47XG4gIH1cblxuICBnZXRUaWx0KCkge1xuICAgIHJldHVybiB0aGlzLnRpbHQ7XG4gIH1cblxuICBkb2VzUGVyc2lzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5wZXJzaXN0O1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgY29uc3Qga2V5ID0gR0FNSU5HX0NBTUVSQTsgIC8vL1xuXG4gICAgcmVtb3ZlSlNPTihrZXkpO1xuXG4gICAgdGhpcy5wYW4gPSBwYW5Gcm9tUHJvcGVydGllcyh0aGlzLnByb3BlcnRpZXMpO1xuICAgIHRoaXMudGlsdCA9IHRpbHRGcm9tUHJvcGVydGllcyh0aGlzLnByb3BlcnRpZXMpO1xuICB9XG5cbiAgdXBkYXRlKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24sIGNhbnZhcywgcmVuZGVyKSB7XG4gICAgY29uc3QgbW91c2VXaGVlbE1vdmVkID0gKG1vdXNlV2hlZWxEZWx0YSAhPT0gMCk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoc2hpZnRLZXlEb3duIHx8IG1vdXNlV2hlZWxNb3ZlZCkge1xuICAgICAgY29uc3QgYW5nbGVzID0gdGhpcy50aWx0LmdldEFuZ2xlcygpO1xuXG4gICAgICB0aGlzLnBhbi51cGRhdGVPZmZzZXRzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBhbmdsZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRpbHQudXBkYXRlQW5nbGVzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyk7XG4gICAgfVxuXG4gICAgY29uc3QgY2FtZXJhID0gdGhpcywgIC8vL1xuICAgICAgICAgIGFuZ2xlcyA9IHRoaXMudGlsdC5nZXRBbmdsZXMoKSxcbiAgICAgICAgICBwZXJzaXN0ID0gdGhpcy5kb2VzUGVyc2lzdCgpLFxuICAgICAgICAgIG9mZnNldHMgPSB0aGlzLnBhbi5nZXRPZmZzZXRzKCk7XG5cbiAgICBpZiAocGVyc2lzdCkge1xuICAgICAgY29uc3Qga2V5ID0gR0FNSU5HX0NBTUVSQSwgIC8vL1xuICAgICAgICAgICAgYW5nbGVzID0gdGhpcy50aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgICAgYW5nbGVzLFxuICAgICAgICAgICAgICBvZmZzZXRzXG4gICAgICAgICAgICB9O1xuXG4gICAgICBzZXRKU09OKGtleSwganNvbik7XG4gICAgfVxuXG4gICAgY29uc3Qgb2Zmc2V0c01hdHJpeCA9IG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyhvZmZzZXRzKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA9IHBvc2l0aW9uTWF0cml4RnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcyksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IHByb2plY3Rpb25NYXRyaXhGcm9tQ2FtZXJhQW5kQ2FudmFzKGNhbWVyYSwgY2FudmFzKSxcbiAgICAgICAgICBub3JtYWxzTWF0cml4ID0gbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgocm90YXRpb25zTWF0cml4KTtcblxuICAgIHJlbmRlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBwZXJzaXN0ID0gREVGQVVMVF9QRVJTSVNUIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHBhbiA9IHBhbkZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpLFxuICAgICAgICAgIHRpbHQgPSB0aWx0RnJvbVByb3BlcnRpZXMocHJvcGVydGllcyksXG4gICAgICAgICAgZ2FtaW5nQ2FtZXJhID0gQ2FtZXJhLmZyb21Qcm9wZXJ0aWVzKEdhbWluZ0NhbWVyYSwgcHJvcGVydGllcywgcGFuLCB0aWx0LCBwZXJzaXN0KTtcblxuICAgIHJldHVybiBnYW1pbmdDYW1lcmE7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFuRnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICBjb25zdCB7IHBlcnNpc3QgPSBERUZBVUxUX1BFUlNJU1QsXG4gICAgICAgICAgbW91c2VTZW5zaXRpdml0eSA9IERFRkFVTFRfTU9VU0VfU0VOU0lUSVZJVFksXG4gICAgICAgICAgbW91c2VXaGVlbFNlbnNpdGl2aXR5ID0gREVGQVVMVF9NT1VTRV9XSEVFTF9TRU5TSVRJVklUWSB9ID0gcHJvcGVydGllcztcblxuICBsZXQgIHsgaW5pdGlhbFBvc2l0aW9uID0gREVGQVVMVF9JTklUSUFMX1BPU0lUSU9OIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIGxldCBpbml0aWFsT2Zmc2V0cyA9IHNjYWxlMyhpbml0aWFsUG9zaXRpb24sIElOVkVSVF9NVUxUSVBMSUVSKTtcblxuICBpZiAocGVyc2lzdCkge1xuICAgIGNvbnN0IGtleSA9IEdBTUlOR19DQU1FUkEsICAvLy9cbiAgICAgICAgICBqc29uID0gZ2V0SlNPTihrZXkpO1xuXG4gICAgaWYgKGpzb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgb2Zmc2V0cyB9ID0ganNvbjtcblxuICAgICAgaW5pdGlhbE9mZnNldHMgPSBvZmZzZXRzOyAvLy9cbiAgICB9XG4gIH1cblxuICBjb25zdCBwYW4gPSBQYW4uZnJvbUluaXRpYWxPZmZzZXRzTW91c2VTZW5zaXRpdml0eUFuZE1vdXNlV2hlZWxTZW5zaXRpdml0eShpbml0aWFsT2Zmc2V0cywgbW91c2VTZW5zaXRpdml0eSwgbW91c2VXaGVlbFNlbnNpdGl2aXR5KTtcblxuICByZXR1cm4gcGFuO1xufVxuXG5mdW5jdGlvbiB0aWx0RnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICBjb25zdCB7IHBlcnNpc3QgPSBERUZBVUxUX1BFUlNJU1QgfSA9IHByb3BlcnRpZXM7XG5cbiAgbGV0ICB7IGluaXRpYWxBbmdsZXMgPSBERUZBVUxUX0lOSVRJQUxfQU5HTEVTIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIGluaXRpYWxBbmdsZXMgPSBzY2FsZTIoaW5pdGlhbEFuZ2xlcywgREVHUkVFU19UT19SQURJQU5TX01VTFRJUExJRVIpOyAvLy9cblxuICBpZiAocGVyc2lzdCkge1xuICAgIGNvbnN0IGtleSA9IEdBTUlOR19DQU1FUkEsICAvLy9cbiAgICAgICAgICBqc29uID0gZ2V0SlNPTihrZXkpO1xuXG4gICAgaWYgKGpzb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgYW5nbGVzIH0gPSBqc29uO1xuXG4gICAgICBpbml0aWFsQW5nbGVzID0gYW5nbGVzOyAvLy9cbiAgICB9XG4gIH1cblxuICBjb25zdCBjbG9ja3dpc2UgPSB0cnVlLFxuICAgICAgICB0aWx0ID0gVGlsdC5mcm9tSW5pdGlhbEFuZ2xlc0FuZENsb2Nrd2lzZShpbml0aWFsQW5nbGVzLCBjbG9ja3dpc2UpO1xuXG4gIHJldHVybiB0aWx0O1xufSIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTUlOSU1VTV9ESVNUQU5DRSwgTU9VU0VfV0hFRUxfREVMVEFfTVVMVElQTElFUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWm9vbSB7XG4gIGNvbnN0cnVjdG9yKGRpc3RhbmNlLCBtaW5pbXVtRGlzdGFuY2UsIG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIpIHtcbiAgICB0aGlzLmRpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgdGhpcy5taW5pbXVtRGlzdGFuY2UgPSBtaW5pbXVtRGlzdGFuY2U7XG4gICAgdGhpcy5tb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyID0gbW91c2VXaGVlbERlbHRhTXVsdGlwbGllcjtcbiAgfVxuXG4gIGdldERpc3RhbmNlKCkge1xuICAgIHJldHVybiB0aGlzLmRpc3RhbmNlO1xuICB9XG5cbiAgZ2V0TWluaW11bURpc3RhbmNlKCkge1xuICAgIHJldHVybiB0aGlzLm1pbmltdW1EaXN0YW5jZTtcbiAgfVxuXG4gIGdldERlbHRhTXVsdGlwbGllcigpIHtcbiAgICByZXR1cm4gdGhpcy5tb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyO1xuICB9XG5cbiAgdXBkYXRlRGlzdGFuY2UobW91c2VXaGVlbERlbHRhKSB7XG4gICAgbW91c2VXaGVlbERlbHRhID0gbW91c2VXaGVlbERlbHRhICogdGhpcy5tb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyOyAvLy9cblxuICAgIHRoaXMuZGlzdGFuY2UgPSB0aGlzLmRpc3RhbmNlIC0gbW91c2VXaGVlbERlbHRhO1xuXG4gICAgdGhpcy5kaXN0YW5jZSA9IE1hdGgubWF4KHRoaXMubWluaW11bURpc3RhbmNlLCB0aGlzLmRpc3RhbmNlKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5pdGlhbERpc3RhbmNlQW5kTW91c2VXaGVlbFNlbnNpdGl2aXR5KGluaXRpYWxEaXN0YW5jZSwgbW91c2VXaGVlbFNlbnNpdGl2aXR5KSB7XG4gICAgY29uc3QgZGlzdGFuY2UgPSBpbml0aWFsRGlzdGFuY2UsIC8vL1xuICAgICAgICAgIG1pbmltdW1EaXN0YW5jZSA9IE1JTklNVU1fRElTVEFOQ0UsXG4gICAgICAgICAgbW91c2VXaGVlbERlbHRhTXVsdGlwbGllciA9IE1PVVNFX1dIRUVMX0RFTFRBX01VTFRJUExJRVIgKiBtb3VzZVdoZWVsU2Vuc2l0aXZpdHksXG4gICAgICAgICAgem9vbSA9IG5ldyBab29tKGRpc3RhbmNlLCBtaW5pbXVtRGlzdGFuY2UsIG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIpO1xuXG4gICAgcmV0dXJuIHpvb207XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFBhbiBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy9wYW5cIjtcbmltcG9ydCBUaWx0IGZyb20gXCIuLi8uLi9taXNjZWxsYW5lb3VzL3RpbHRcIjtcbmltcG9ydCBab29tIGZyb20gXCIuLi8uLi9taXNjZWxsYW5lb3VzL3pvb21cIjtcbmltcG9ydCBDYW1lcmEgZnJvbSBcIi4uL2NhbWVyYVwiO1xuXG5pbXBvcnQgeyBzY2FsZTIgfSBmcm9tIFwiLi4vLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyBnZXRKU09OLCBzZXRKU09OLCByZW1vdmVKU09OIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9sb2NhbFN0b3JhZ2VcIjtcbmltcG9ydCB7IERFU0lHTl9DQU1FUkEsIERFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgREVGQVVMVF9QRVJTSVNULFxuICAgICAgICAgREVGQVVMVF9JTklUSUFMX0FOR0xFUyxcbiAgICAgICAgIERFRkFVTFRfSU5JVElBTF9PRkZTRVRTLFxuICAgICAgICAgREVGQVVMVF9JTklUSUFMX0RJU1RBTkNFLFxuICAgICAgICAgREVGQVVMVF9NT1VTRV9TRU5TSVRJVklUWSxcbiAgICAgICAgIERFRkFVTFRfTU9VU0VfV0hFRUxfU0VOU0lUSVZJVFkgfSBmcm9tIFwiLi4vLi4vZGVmYXVsdHNcIjtcbmltcG9ydCB7IG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyxcbiAgICAgICAgIHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMsXG4gICAgICAgICBwb3NpdGlvbk1hdHJpeEZyb21EaXN0YW5jZSxcbiAgICAgICAgIG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4LFxuICAgICAgICAgcHJvamVjdGlvbk1hdHJpeEZyb21DYW1lcmFBbmRDYW52YXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL21hdHJpeFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXNpZ25DYW1lcmEgZXh0ZW5kcyBDYW1lcmEge1xuICBjb25zdHJ1Y3Rvcih6RmFyLCB6TmVhciwgZmllbGRPZlZpZXcsIHBhbiwgdGlsdCwgem9vbSwgcGVyc2lzdCkge1xuICAgIHN1cGVyKHpGYXIsIHpOZWFyLCBmaWVsZE9mVmlldyk7XG5cbiAgICB0aGlzLnBhbiA9IHBhbjtcbiAgICB0aGlzLnRpbHQgPSB0aWx0O1xuICAgIHRoaXMuem9vbSA9IHpvb207XG4gICAgdGhpcy5wZXJzaXN0ID0gcGVyc2lzdDtcbiAgfVxuXG4gIGdldFBhbigpIHtcbiAgICByZXR1cm4gdGhpcy5wYW47XG4gIH1cblxuICBnZXRUaWx0KCkge1xuICAgIHJldHVybiB0aGlzLnRpbHQ7XG4gIH1cblxuICBnZXRab29tKCkge1xuICAgIHJldHVybiB0aGlzLnpvb207XG4gIH1cblxuICBkb2VzUGVyc2lzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5wZXJzaXN0O1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgY29uc3Qga2V5ID0gREVTSUdOX0NBTUVSQTsgIC8vL1xuXG4gICAgcmVtb3ZlSlNPTihrZXkpO1xuXG4gICAgdGhpcy5wYW4gPSBwYW5Gcm9tUHJvcGVydGllcyh0aGlzLnByb3BlcnRpZXMpO1xuICAgIHRoaXMudGlsdCA9IHRpbHRGcm9tUHJvcGVydGllcyh0aGlzLnByb3BlcnRpZXMpO1xuICAgIHRoaXMuem9vbSA9IHpvb21Gcm9tUHJvcGVydGllcyh0aGlzLnByb3BlcnRpZXMpO1xuICB9XG5cbiAgdXBkYXRlKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24sIGNhbnZhcywgcmVuZGVyKSB7XG4gICAgY29uc3QgbW91c2VXaGVlbE1vdmVkID0gKG1vdXNlV2hlZWxEZWx0YSAhPT0gMCk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoc2hpZnRLZXlEb3duKSB7XG4gICAgICBjb25zdCBhbmdsZXMgPSB0aGlzLnRpbHQuZ2V0QW5nbGVzKCk7XG5cbiAgICAgIHRoaXMucGFuLnVwZGF0ZU9mZnNldHMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIGFuZ2xlcyk7XG4gICAgfSBlbHNlIGlmIChtb3VzZVdoZWVsTW92ZWQpIHtcbiAgICAgIHRoaXMuem9vbS51cGRhdGVEaXN0YW5jZShtb3VzZVdoZWVsRGVsdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRpbHQudXBkYXRlQW5nbGVzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyk7XG4gICAgfVxuXG4gICAgY29uc3QgY2FtZXJhID0gdGhpcywgIC8vL1xuICAgICAgICAgIGFuZ2xlcyA9IHRoaXMudGlsdC5nZXRBbmdsZXMoKSxcbiAgICAgICAgICBwZXJzaXN0ID0gdGhpcy5kb2VzUGVyc2lzdCgpLFxuICAgICAgICAgIG9mZnNldHMgPSB0aGlzLnBhbi5nZXRPZmZzZXRzKCksXG4gICAgICAgICAgZGlzdGFuY2UgPSB0aGlzLnpvb20uZ2V0RGlzdGFuY2UoKTtcblxuICAgIGlmIChwZXJzaXN0KSB7XG4gICAgICBjb25zdCBrZXkgPSBERVNJR05fQ0FNRVJBLFxuICAgICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgICAgYW5nbGVzLFxuICAgICAgICAgICAgICBvZmZzZXRzLFxuICAgICAgICAgICAgICBkaXN0YW5jZVxuICAgICAgICAgICAgfTtcblxuICAgICAgc2V0SlNPTihrZXksIGpzb24pO1xuICAgIH1cblxuICAgIGNvbnN0IG9mZnNldHNNYXRyaXggPSBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMob2Zmc2V0cyksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXggPSBwb3NpdGlvbk1hdHJpeEZyb21EaXN0YW5jZShkaXN0YW5jZSksXG4gICAgICAgICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyhhbmdsZXMpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXggPSBwcm9qZWN0aW9uTWF0cml4RnJvbUNhbWVyYUFuZENhbnZhcyhjYW1lcmEsIGNhbnZhcyksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeCA9IG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4KHJvdGF0aW9uc01hdHJpeCk7XG5cbiAgICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgcGVyc2lzdCA9IERFRkFVTFRfUEVSU0lTVCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBwYW4gPSBwYW5Gcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSxcbiAgICAgICAgICB0aWx0ID0gdGlsdEZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpLFxuICAgICAgICAgIHpvb20gPSB6b29tRnJvbVByb3BlcnRpZXMocHJvcGVydGllcyksXG4gICAgICAgICAgZGVzaWduQ2FtZXJhID0gQ2FtZXJhLmZyb21Qcm9wZXJ0aWVzKERlc2lnbkNhbWVyYSwgcHJvcGVydGllcywgcGFuLCB0aWx0LCB6b29tLCBwZXJzaXN0KTtcblxuICAgIHJldHVybiBkZXNpZ25DYW1lcmE7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFuRnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICBjb25zdCB7IHBlcnNpc3QgPSBERUZBVUxUX1BFUlNJU1QsXG4gICAgICAgICAgbW91c2VTZW5zaXRpdml0eSA9IERFRkFVTFRfTU9VU0VfU0VOU0lUSVZJVFksXG4gICAgICAgICAgbW91c2VXaGVlbFNlbnNpdGl2aXR5ID0gREVGQVVMVF9NT1VTRV9XSEVFTF9TRU5TSVRJVklUWSB9ID0gcHJvcGVydGllcztcblxuICBsZXQgeyBpbml0aWFsT2Zmc2V0cyA9IERFRkFVTFRfSU5JVElBTF9PRkZTRVRTIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIGlmIChwZXJzaXN0KSB7XG4gICAgY29uc3Qga2V5ID0gREVTSUdOX0NBTUVSQSwgIC8vL1xuICAgICAgICAgIGpzb24gPSBnZXRKU09OKGtleSk7XG5cbiAgICBpZiAoanNvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBvZmZzZXRzIH0gPSBqc29uO1xuXG4gICAgICBpbml0aWFsT2Zmc2V0cyA9IG9mZnNldHM7IC8vL1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHBhbiA9IFBhbi5mcm9tSW5pdGlhbE9mZnNldHNNb3VzZVNlbnNpdGl2aXR5QW5kTW91c2VXaGVlbFNlbnNpdGl2aXR5KGluaXRpYWxPZmZzZXRzLCBtb3VzZVNlbnNpdGl2aXR5LCBtb3VzZVdoZWVsU2Vuc2l0aXZpdHkpO1xuXG4gIHJldHVybiBwYW47XG59XG5cbmZ1bmN0aW9uIHRpbHRGcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IHsgcGVyc2lzdCA9IERFRkFVTFRfUEVSU0lTVCB9ID0gcHJvcGVydGllcztcblxuICBsZXQgeyBpbml0aWFsQW5nbGVzID0gREVGQVVMVF9JTklUSUFMX0FOR0xFUyB9ID0gcHJvcGVydGllcztcblxuICBpbml0aWFsQW5nbGVzID0gc2NhbGUyKGluaXRpYWxBbmdsZXMsIERFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSKTsgLy8vXG5cbiAgaWYgKHBlcnNpc3QpIHtcbiAgICBjb25zdCBrZXkgPSBERVNJR05fQ0FNRVJBLCAgLy8vXG4gICAgICAgICAganNvbiA9IGdldEpTT04oa2V5KTtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IGFuZ2xlcyB9ID0ganNvbjtcblxuICAgICAgaW5pdGlhbEFuZ2xlcyA9IGFuZ2xlczsgLy8vXG4gICAgfVxuICB9XG5cbiAgY29uc3QgdGlsdCA9IFRpbHQuZnJvbUluaXRpYWxBbmdsZXMoaW5pdGlhbEFuZ2xlcyk7XG5cbiAgcmV0dXJuIHRpbHQ7XG59XG5cbmZ1bmN0aW9uIHpvb21Gcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IHsgcGVyc2lzdCA9IERFRkFVTFRfUEVSU0lTVCwgbW91c2VXaGVlbFNlbnNpdGl2aXR5ID0gREVGQVVMVF9NT1VTRV9XSEVFTF9TRU5TSVRJVklUWSB9ID0gcHJvcGVydGllcztcblxuICBsZXQgeyBpbml0aWFsRGlzdGFuY2UgPSBERUZBVUxUX0lOSVRJQUxfRElTVEFOQ0UgfSA9IHByb3BlcnRpZXM7XG5cbiAgaWYgKHBlcnNpc3QpIHtcbiAgICBjb25zdCBrZXkgPSBERVNJR05fQ0FNRVJBLCAgLy8vXG4gICAgICAgICAganNvbiA9IGdldEpTT04oa2V5KTtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IGRpc3RhbmNlIH0gPSBqc29uO1xuXG4gICAgICBpbml0aWFsRGlzdGFuY2UgPSBkaXN0YW5jZTsgLy8vXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgem9vbSA9IFpvb20uZnJvbUluaXRpYWxEaXN0YW5jZUFuZE1vdXNlV2hlZWxTZW5zaXRpdml0eShpbml0aWFsRGlzdGFuY2UsIG1vdXNlV2hlZWxTZW5zaXRpdml0eSk7XG5cbiAgcmV0dXJuIHpvb207XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgQU5PTllNT1VTIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IGZvckVhY2ggfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWRJbWFnZXMoaG9zdCwgaW1hZ2VOYW1lcywgaW1hZ2VEaXJlY3RvcnlVUkksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGltYWdlcyA9IFtdLFxuICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgIGltYWdlc1xuICAgICAgICB9O1xuXG4gIGZvckVhY2goaW1hZ2VOYW1lcywgKGltYWdlTmFtZSwgbmV4dCwgZG9uZSwgY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHNyYyA9IGAke2hvc3R9JHtpbWFnZURpcmVjdG9yeVVSSX0vJHtpbWFnZU5hbWV9YCxcbiAgICAgICAgICBpbWFnZSA9IG5ldyBJbWFnZSgpLFxuICAgICAgICAgIGNyb3NzT3JpZ2luID0gQU5PTllNT1VTO1xuXG4gIE9iamVjdC5hc3NpZ24oaW1hZ2UsIHtcbiAgICAgIHNyYyxcbiAgICAgIG9ubG9hZCxcbiAgICAgIGNyb3NzT3JpZ2luXG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBvbmxvYWQoKSB7XG4gICAgICBpbWFnZXMucHVzaChpbWFnZSk7XG5cbiAgICAgIG5leHQoKTtcbiAgICB9XG4gIH0sIGRvbmUsIGNvbnRleHQpO1xuXG4gIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgY29uc3QgeyBpbWFnZXMgfSA9IGNvbnRleHQ7XG5cbiAgICBjYWxsYmFjayhpbWFnZXMsIGltYWdlTmFtZXMpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVsb2FkSW1hZ2VNYXAoaG9zdCwgaW1hZ2VNYXBVUkksIGltYWdlTWFwSlNPTiwgY2FsbGJhY2spIHtcbiAgY29uc3Qgc3JjID0gYCR7aG9zdH0ke2ltYWdlTWFwVVJJfWAsXG4gICAgICAgIGltYWdlTWFwID0gbmV3IEltYWdlKCksXHQvLy9cbiAgICAgICAgY3Jvc3NPcmlnaW4gPSBBTk9OWU1PVVM7ICAvLy9cblxuICBPYmplY3QuYXNzaWduKGltYWdlTWFwLCB7XG4gICAgc3JjLFxuICAgIG9ubG9hZCxcbiAgICBjcm9zc09yaWdpblxuICB9KTtcblxuICBmdW5jdGlvbiBvbmxvYWQoZXZlbnQpIHtcbiAgICBjYWxsYmFjayhpbWFnZU1hcCwgaW1hZ2VNYXBKU09OKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByZWxvYWRJbWFnZXMsXG4gIHByZWxvYWRJbWFnZU1hcFxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCwgdGhpcmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub3JtYWxpc2UzLCBzdWJ0cmFjdDMsIGNyb3NzMyB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9ybWFsIHtcbiAgY29uc3RydWN0b3IoZXh0ZW50KSB7XG4gICAgdGhpcy5leHRlbnQgPSBleHRlbnQ7XG4gIH1cblxuICBnZXRFeHRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW50O1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgZXh0ZW50ID0gY2xvbmVFeHRlbnQodGhpcy5leHRlbnQpLFxuICAgICAgICAgIG5vcm1hbCA9IG5ldyBOb3JtYWwoZXh0ZW50KTtcblxuICAgIHJldHVybiBub3JtYWw7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gICAgY29uc3QgZmlyc3RWZXJ0ZXggPSBmaXJzdCh2ZXJ0aWNlcyksXG4gICAgICAgICAgc2Vjb25kVmVydGV4ID0gc2Vjb25kKHZlcnRpY2VzKSxcbiAgICAgICAgICB0aGlyZFZlcnRleCA9IHRoaXJkKHZlcnRpY2VzKSxcbiAgICAgICAgICBmaXJzdFBvc2l0aW9uID0gZmlyc3RWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBzZWNvbmRQb3NpdGlvbiA9IHNlY29uZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHRoaXJkUG9zaXRpb24gPSB0aGlyZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIGZpcnN0RXh0ZW50ID0gc3VidHJhY3QzKHNlY29uZFBvc2l0aW9uLCBmaXJzdFBvc2l0aW9uKSxcbiAgICAgICAgICBzZWNvbmRFeHRlbnQgPSBzdWJ0cmFjdDModGhpcmRQb3NpdGlvbiwgZmlyc3RQb3NpdGlvbiksXG4gICAgICAgICAgZXh0ZW50ID0gbm9ybWFsaXNlMyhjcm9zczMoZmlyc3RFeHRlbnQsIHNlY29uZEV4dGVudCkpLFxuICAgICAgICAgIG5vcm1hbCA9IG5ldyBOb3JtYWwoZXh0ZW50KTtcblxuICAgIHJldHVybiBub3JtYWw7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xvbmVFeHRlbnQoZXh0ZW50KSB7IHJldHVybiBleHRlbnQuc2xpY2UoKTsgfVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyByb3RhdGVQb3NpdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcm90YXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVydGV4IHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcbiAgfVxuXG4gIHJvdGF0ZShyb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcm90YXRlUG9zaXRpb24odGhpcy5wb3NpdGlvbiwgcm90YXRpb25RdWF0ZXJuaW9uKTtcbiAgfVxuXG4gIGFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICAgIHRoaXMucG9zaXRpb24gPSB0cmFuc2Zvcm0odGhpcy5wb3NpdGlvbik7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uc2xpY2UoKSwgLy8vXG4gICAgICAgICAgdmVydGV4ID0gbmV3IFZlcnRleChwb3NpdGlvbik7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qb3NpdGlvbihwb3NpdGlvbikge1xuICAgIGNvbnN0IHZlcnRleCA9IG5ldyBWZXJ0ZXgocG9zaXRpb24pO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tQ29vcmRpbmF0ZVR1cGxlKGNvb3JkaW5hdGVUdXBsZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gY29vcmRpbmF0ZVR1cGxlLnNsaWNlKCksIC8vL1xuICAgICAgICAgIHZlcnRleCA9IG5ldyBWZXJ0ZXgocG9zaXRpb24pO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBWRVJUSUNFU19MRU5HVEggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHN1YnRyYWN0MywgY3Jvc3MzLCBsZW5ndGgzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVFZGdlcyhlZGdlcykge1xuICBlZGdlcyA9IGVkZ2VzLm1hcCgoZWRnZSkgPT4ge1xuICAgIGVkZ2UgPSBlZGdlLmNsb25lKCk7ICAvLy9cblxuICAgIHJldHVybiBlZGdlO1xuICB9KTtcblxuICByZXR1cm4gZWRnZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZU5vcm1hbChub3JtYWwpIHtcbiAgbm9ybWFsID0gbm9ybWFsLmNsb25lKCk7XG4gIFxuICByZXR1cm4gbm9ybWFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVWZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICB2ZXJ0aWNlcyA9IHZlcnRpY2VzLm1hcCgodmVydGV4KSA9PiB7XG4gICAgdmVydGV4ID0gdmVydGV4LmNsb25lKCk7ICAvLy9cblxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH0pO1xuXG4gIHJldHVybiB2ZXJ0aWNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKSB7XG4gIGNvbnN0IGVkZ2VzID0gdmVydGljZXMubWFwKCh2ZXJ0ZXgsIGluZGV4KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRJbmRleCA9IGluZGV4LCAvLy9cbiAgICAgICAgICBlbmRJbmRleCA9IChzdGFydEluZGV4ICsgMSkgJSBWRVJUSUNFU19MRU5HVEgsXG4gICAgICAgICAgc3RhcnRWZXJ0ZXggPSB2ZXJ0aWNlc1tzdGFydEluZGV4XSxcbiAgICAgICAgICBlbmRWZXJ0ZXggPSB2ZXJ0aWNlc1tlbmRJbmRleF0sXG4gICAgICAgICAgZWRnZSA9IEVkZ2UuZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4KHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpO1xuXG4gICAgcmV0dXJuIGVkZ2U7XG4gIH0pO1xuXG4gIHJldHVybiBlZGdlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcywgTm9ybWFsKSB7XG4gIGNvbnN0IG5vcm1hbCA9IE5vcm1hbC5mcm9tVmVydGljZXModmVydGljZXMpO1xuXG4gIHJldHVybiBub3JtYWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVBcmVhKHZlcnRpY2VzKSB7XG4gIGNvbnN0IGZpcnN0VmVydGV4ID0gZmlyc3QodmVydGljZXMpLFxuICAgICAgICBzZWNvbmRWZXJ0ZXggPSBzZWNvbmQodmVydGljZXMpLFxuICAgICAgICB0aGlyZFZlcnRleCA9IHRoaXJkKHZlcnRpY2VzKSxcbiAgICAgICAgZmlyc3RWZXJ0ZXhQb3NpdGlvbiA9IGZpcnN0VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIHNlY29uZFZlcnRleFBvc2l0aW9uID0gc2Vjb25kVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIHRoaXJkVmVydGV4UG9zaXRpb24gPSB0aGlyZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICBmaXJzdEV4dGVudCA9IHN1YnRyYWN0MyhzZWNvbmRWZXJ0ZXhQb3NpdGlvbiwgZmlyc3RWZXJ0ZXhQb3NpdGlvbiksXG4gICAgICAgIHNlY29uZEV4dGVudCA9IHN1YnRyYWN0Myh0aGlyZFZlcnRleFBvc2l0aW9uLCBmaXJzdFZlcnRleFBvc2l0aW9uKSxcbiAgICAgICAgYXJlYSA9IGxlbmd0aDMoY3Jvc3MzKGZpcnN0RXh0ZW50LCBzZWNvbmRFeHRlbnQpKSAvIDI7XG5cbiAgcmV0dXJuIGFyZWE7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuL2VkZ2VcIjtcbmltcG9ydCBOb3JtYWwgZnJvbSBcIi4vbm9ybWFsXCI7XG5pbXBvcnQgVmVydGV4IGZyb20gXCIuL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyBhZGQsIHBlcm11dGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBWRVJUSUNFU19MRU5HVEggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVFZGdlcywgY2FsY3VsYXRlTm9ybWFsIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9mYWNldFwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlTWlkUG9pbnRQb3NpdGlvbiwgaXNNaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL21pZFBvaW50XCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9ucyxcbiAgICAgICAgIGNhbGN1bGF0ZU51bGxJbnRlcnNlY3Rpb25JbmRleCxcbiAgICAgICAgIGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCxcbiAgICAgICAgIGNhbGN1bGF0ZUludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9ufSBmcm9tIFwiLi4vdXRpbGl0aWVzL2ludGVyc2VjdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWNldCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzKSB7XG4gICAgdGhpcy52ZXJ0aWNlcyA9IHZlcnRpY2VzO1xuICAgIHRoaXMubm9ybWFsID0gbm9ybWFsO1xuICAgIHRoaXMuZWRnZXMgPSBlZGdlcztcbiAgfVxuXG4gIGdldFZlcnRpY2VzKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRpY2VzO1xuICB9XG5cbiAgZ2V0Tm9ybWFsKCkge1xuICAgIHJldHVybiB0aGlzLm5vcm1hbDtcbiAgfVxuXG4gIGdldEVkZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLmVkZ2VzO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhQb3NpdGlvbnMoKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zID0gdGhpcy52ZXJ0aWNlcy5tYXAoKHZlcnRleCkgPT4ge1xuICAgICAgY29uc3QgdmVydGV4UG9zaXRpb24gPSB2ZXJ0ZXguZ2V0UG9zaXRpb24oKTtcblxuICAgICAgcmV0dXJuIHZlcnRleFBvc2l0aW9uO1xuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXhQb3NpdGlvbnM7XG4gIH1cbiAgXG4gIGdldFZlcnRleE5vcm1hbHMoKSB7XG4gICAgY29uc3Qgbm9ybWFsRXh0ZW50ID0gdGhpcy5ub3JtYWwuZ2V0RXh0ZW50KCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsID0gbm9ybWFsRXh0ZW50LCAgLy8vXG4gICAgICAgICAgdmVydGV4Tm9ybWFscyA9IFtcbiAgICAgICAgICAgIHZlcnRleE5vcm1hbCxcbiAgICAgICAgICAgIHZlcnRleE5vcm1hbCxcbiAgICAgICAgICAgIHZlcnRleE5vcm1hbCxcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXhOb3JtYWxzO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhJbmRleGVzKGluZGV4KSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXggPSBpbmRleCAqIDMsXG4gICAgICAgICAgdmVydGV4SW5kZXhlcyA9IFtcbiAgICAgICAgICAgIHZlcnRleEluZGV4ICsgMCxcbiAgICAgICAgICAgIHZlcnRleEluZGV4ICsgMSxcbiAgICAgICAgICAgIHZlcnRleEluZGV4ICsgMixcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXhJbmRleGVzO1xuICB9XG5cbiAgaXNNYXNrZWQobWFza2luZ0ZhY2V0KSB7XG4gICAgY29uc3QgbWFza2luZ0VkZ2VzID0gbWFza2luZ0ZhY2V0LmdldE1hc2tpbmdFZGdlcygpLFxuICAgICAgICAgIG1pZFBvaW50UG9zaXRpb24gPSBjYWxjdWxhdGVNaWRQb2ludFBvc2l0aW9uKHRoaXMudmVydGljZXMpLFxuICAgICAgICAgIG1pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyA9IGlzTWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzKG1pZFBvaW50UG9zaXRpb24sIG1hc2tpbmdFZGdlcyksXG4gICAgICAgICAgbWFza2VkID0gbWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIG1hc2tlZDtcbiAgfVxuXG4gIHBlcm11dGUocGxhY2VzKSB7XG4gICAgdGhpcy52ZXJ0aWNlcyA9IHBlcm11dGUodGhpcy52ZXJ0aWNlcywgcGxhY2VzKTtcblxuICAgIHRoaXMubm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHRoaXMudmVydGljZXMsIE5vcm1hbCk7XG5cbiAgICB0aGlzLmVkZ2VzID0gY2FsY3VsYXRlRWRnZXModGhpcy52ZXJ0aWNlcywgRWRnZSk7XG4gIH1cblxuICByb3RhdGUocm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gICAgdGhpcy52ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgpID0+IHtcbiAgICAgIHZlcnRleC5yb3RhdGUocm90YXRpb25RdWF0ZXJuaW9uKTtcbiAgICB9KTtcblxuICAgIHRoaXMubm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHRoaXMudmVydGljZXMsIE5vcm1hbCk7XG5cbiAgICB0aGlzLmVkZ2VzID0gY2FsY3VsYXRlRWRnZXModGhpcy52ZXJ0aWNlcywgRWRnZSk7XG4gIH1cblxuICBhcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgICB0aGlzLnZlcnRpY2VzLmZvckVhY2goKHZlcnRleCkgPT4ge1xuICAgICAgdmVydGV4LmFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh0aGlzLnZlcnRpY2VzLCBOb3JtYWwpO1xuXG4gICAgdGhpcy5lZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHRoaXMudmVydGljZXMsIEVkZ2UpO1xuICB9XG5cbiAgc3BsaXRXaXRoSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3Qgbm9uTnVsbEludGVyc2VjdGlvbnMgPSBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBub25OdWxsSW50ZXJzZWN0aW9uc0xlbmd0aCA9IG5vbk51bGxJbnRlcnNlY3Rpb25zLmxlbmd0aDtcblxuICAgIHN3aXRjaCAobm9uTnVsbEludGVyc2VjdGlvbnNMZW5ndGgpIHtcbiAgICAgIGNhc2UgMiA6XG4gICAgICAgIHRoaXMuc3BsaXRXaXRoVHdvTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDEgOlxuICAgICAgICB0aGlzLnNwbGl0V2l0aE9uZU5vbk51bGxJbnRlcnNlY3Rpb24oaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDAgOlxuICAgICAgICB0aGlzLnNwbGl0V2l0aE5vTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBcbiAgc3BsaXRXaXRoVHdvTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGNhbGN1bGF0ZU51bGxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBwbGFjZXMgPSAoVkVSVElDRVNfTEVOR1RIIC0gbnVsbEludGVyc2VjdGlvbkluZGV4KSAlIFZFUlRJQ0VTX0xFTkdUSDtcblxuICAgIGludGVyc2VjdGlvbnMgPSBwZXJtdXRlKGludGVyc2VjdGlvbnMsIHBsYWNlcyk7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gaW50ZXJzZWN0aW9ucy5zbGljZSgxKTsgLy8vXG5cbiAgICB0aGlzLnBlcm11dGUocGxhY2VzKTtcblxuICAgIGNvbnN0IHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzID0gWyAxLCAyIF0sXG4gICAgICAgICAgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzID0gWyAyLCAwIF0sXG4gICAgICAgICAgaW5kZXhUdXBsZXMgPSBbXG5cbiAgICAgICAgICAgIFsgMCwgMSwgMyBdLFxuICAgICAgICAgICAgWyAzLCA0LCAwIF0sXG4gICAgICAgICAgICBbIDMsIDIsIDQgXSxcblxuICAgICAgICAgIF07XG5cbiAgICB0aGlzLnNwbGl0V2l0aEluZGV4VHVwbGVzQW5kSW50ZXJzZWN0aW9ucyhzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcywgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzLCBpbmRleFR1cGxlcywgaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gIH1cblxuICBzcGxpdFdpdGhPbmVOb25OdWxsSW50ZXJzZWN0aW9uKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBub25OdWxsSW50ZXJzZWN0aW9uSW5kZXggPSBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9uSW5kZXgoaW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgcGxhY2VzID0gKFZFUlRJQ0VTX0xFTkdUSCAtIG5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCkgJSBWRVJUSUNFU19MRU5HVEg7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gcGVybXV0ZShpbnRlcnNlY3Rpb25zLCBwbGFjZXMpO1xuXG4gICAgaW50ZXJzZWN0aW9ucyA9IGludGVyc2VjdGlvbnMuc2xpY2UoMCwgMSk7ICAvLy9cblxuICAgIHRoaXMucGVybXV0ZShwbGFjZXMpO1xuXG4gICAgY29uc3Qgc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMgPSBbIDAgXSxcbiAgICAgICAgICBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMgPSBbIDEgXSxcbiAgICAgICAgICBpbmRleFR1cGxlcyA9IFtcblxuICAgICAgICAgICAgWyAwLCAzLCAyIF0sXG4gICAgICAgICAgICBbIDMsIDEsIDIgXSxcblxuICAgICAgICAgIF07XG5cbiAgICB0aGlzLnNwbGl0V2l0aEluZGV4VHVwbGVzQW5kSW50ZXJzZWN0aW9ucyhzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcywgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzLCBpbmRleFR1cGxlcywgaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gIH1cblxuICBzcGxpdFdpdGhOb05vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBzbWFsbGVyRmFjZXQgPSB0aGlzLmZyb21WZXJ0aWNlc0FuZE1hcmdpbk9mRXJyb3IodGhpcy52ZXJ0aWNlcywgbWFyZ2luT2ZFcnJvcik7ICAvLy9cblxuICAgIHNtYWxsZXJGYWNldHMucHVzaChzbWFsbGVyRmFjZXQpO1xuICB9XG5cbiAgc3BsaXRXaXRoSW5kZXhUdXBsZXNBbmRJbnRlcnNlY3Rpb25zKHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzLCBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGluZGV4VHVwbGVzLCBpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbnMgPSBpbnRlcnNlY3Rpb25zLm1hcCgoaW50ZXJzZWN0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ID0gc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgZW5kVmVydGV4UG9zaXRpb25JbmRleCA9IGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgICBzdGFydFZlcnRleFBvc2l0aW9uID0gdmVydGV4UG9zaXRpb25zW3N0YXJ0VmVydGV4UG9zaXRpb25JbmRleF0sXG4gICAgICAgICAgICAgICAgICBlbmRWZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleFBvc2l0aW9uc1tlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4XSxcbiAgICAgICAgICAgICAgICAgIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uID0gY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb24oc3RhcnRWZXJ0ZXhQb3NpdGlvbiwgZW5kVmVydGV4UG9zaXRpb24sIGludGVyc2VjdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbjtcbiAgICAgICAgICB9KTtcblxuICAgIGFkZCh2ZXJ0ZXhQb3NpdGlvbnMsIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICBpbmRleFR1cGxlcy5mb3JFYWNoKChpbmRleFR1cGxlKSA9PiB7XG4gICAgICBjb25zdCBwb3NpdGlvbnMgPSB2ZXJ0ZXhQb3NpdGlvbnMsICAvLy9cbiAgICAgICAgICAgIGluZGV4ZXMgPSBpbmRleFR1cGxlLCAgLy8vXG4gICAgICAgICAgICBmYWNldCA9IHRoaXMsIFxuICAgICAgICAgICAgc21hbGxlckZhY2V0ID0gc21hbGxlckZhY2V0RnJvbVBvc2l0aW9uc0luZGV4ZXNGYWNldEFuZE1hcmdpbk9mRXJyb3IocG9zaXRpb25zLCBpbmRleGVzLCBmYWNldCwgbWFyZ2luT2ZFcnJvcik7XG5cbiAgICAgIGlmIChzbWFsbGVyRmFjZXQgIT09IG51bGwpIHtcbiAgICAgICAgc21hbGxlckZhY2V0cy5wdXNoKHNtYWxsZXJGYWNldCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc21hbGxlckZhY2V0RnJvbVBvc2l0aW9uc0luZGV4ZXNGYWNldEFuZE1hcmdpbk9mRXJyb3IocG9zaXRpb25zLCBpbmRleGVzLCBmYWNldCwgbWFyZ2luT2ZFcnJvcikge1xuICBjb25zdCB2ZXJ0aWNlcyA9IGluZGV4ZXMubWFwKChpbmRleCkgPT4ge1xuICAgICAgICAgIGxldCBwb3NpdGlvbiA9IHBvc2l0aW9uc1tpbmRleF07XG4gICAgXG4gICAgICAgICAgcG9zaXRpb24gPSBwb3NpdGlvbi5zbGljZSgpOyAvLy9cbiAgICBcbiAgICAgICAgICBjb25zdCB2ZXJ0ZXggPSBWZXJ0ZXguZnJvbVBvc2l0aW9uKHBvc2l0aW9uKTtcblxuICAgICAgICAgIHJldHVybiB2ZXJ0ZXg7XG4gICAgICAgIH0pLFxuICAgICAgICBzbWFsbGVyRmFjZXQgPSBmYWNldC5mcm9tVmVydGljZXNBbmRNYXJnaW5PZkVycm9yKHZlcnRpY2VzLCBtYXJnaW5PZkVycm9yKTtcblxuICByZXR1cm4gc21hbGxlckZhY2V0O1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWRnZSBmcm9tIFwiLi4vZWRnZVwiO1xuaW1wb3J0IEZhY2V0IGZyb20gXCIuLi9mYWNldFwiO1xuaW1wb3J0IE5vcm1hbCBmcm9tIFwiLi4vbm9ybWFsXCI7XG5pbXBvcnQgVmVydGV4IGZyb20gXCIuLi92ZXJ0ZXhcIjtcblxuaW1wb3J0IHsgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FwcHJveGltYXRlXCI7XG5pbXBvcnQgeyB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdmVydGljZXNcIjtcbmltcG9ydCB7IGNsb25lRWRnZXMsIGNsb25lTm9ybWFsLCBjbG9uZVZlcnRpY2VzLCBjYWxjdWxhdGVBcmVhLCBjYWxjdWxhdGVFZGdlcywgY2FsY3VsYXRlTm9ybWFsIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9mYWNldFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvdXJlZEZhY2V0IGV4dGVuZHMgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgcmdiYSkge1xuICAgIHN1cGVyKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzKTtcbiAgICBcbiAgICB0aGlzLnJnYmEgPSByZ2JhO1xuICB9XG5cbiAgZ2V0VmVydGV4Q29sb3VycygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXIgPSB0aGlzLnJnYmEsIC8vL1xuICAgICAgICAgIHZlcnRleENvbG91cnMgPSBbXG4gICAgICAgICAgICB2ZXJ0ZXhDb2xvdXIsXG4gICAgICAgICAgICB2ZXJ0ZXhDb2xvdXIsXG4gICAgICAgICAgICB2ZXJ0ZXhDb2xvdXIsXG4gICAgICAgICAgXTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4Q29sb3VycztcbiAgfVxuXG4gIGZyb21WZXJ0aWNlc0FuZE1hcmdpbk9mRXJyb3IodmVydGljZXMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBsZXQgY29sb3VyZWRGYWNldCA9IG51bGw7XG5cbiAgICBjb25zdCBhcmVhID0gY2FsY3VsYXRlQXJlYSh2ZXJ0aWNlcyksXG4gICAgICAgICAgYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybyA9IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKGFyZWEsIG1hcmdpbk9mRXJyb3IpO1xuXG4gICAgaWYgKCFhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKSB7XG4gICAgICBjb25zdCBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCksXG4gICAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKTtcblxuICAgICAgY29sb3VyZWRGYWNldCA9IG5ldyBDb2xvdXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCB0aGlzLnJnYmEpO1xuICAgIH1cblxuICAgIHJldHVybiBjb2xvdXJlZEZhY2V0O1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgbGV0IHZlcnRpY2VzID0gdGhpcy5nZXRWZXJ0aWNlcygpLFxuICAgICAgICBub3JtYWwgPSB0aGlzLmdldE5vcm1hbCgpLFxuICAgICAgICBlZGdlcyA9IHRoaXMuZ2V0RWRnZXMoKTtcblxuICAgIHZlcnRpY2VzID0gY2xvbmVWZXJ0aWNlcyh2ZXJ0aWNlcyk7XG4gICAgbm9ybWFsID0gY2xvbmVOb3JtYWwobm9ybWFsKTtcbiAgICBlZGdlcyA9IGNsb25lRWRnZXMoZWRnZXMpO1xuXG4gICAgY29uc3QgY29sb3VyZWRGYWNldCA9IG5ldyBDb2xvdXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCB0aGlzLnJnYmEpO1xuXG4gICAgcmV0dXJuIGNvbG91cmVkRmFjZXQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvb3JkaW5hdGVUdXBsZXNJbmRleFR1cGxlQ29sb3VyQW5kTWFyZ2luT2ZFcnJvcihjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCBjb2xvdXIsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBsZXQgY29sb3VyZWRGYWNldCA9IG51bGw7XG5cbiAgICBjb25zdCB2ZXJ0aWNlcyA9IHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlKGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIFZlcnRleCksXG4gICAgICAgICAgYXJlYSA9IGNhbGN1bGF0ZUFyZWEodmVydGljZXMpLFxuICAgICAgICAgIGFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhhcmVhLCBtYXJnaW5PZkVycm9yKTtcblxuICAgIGlmICghYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybykge1xuICAgICAgY29uc3Qgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgICAgZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSksXG4gICAgICAgICAgICByZ2JhID0gWyAuLi5jb2xvdXIsIDEgXTsgIC8vL1xuXG4gICAgICBjb2xvdXJlZEZhY2V0ID0gbmV3IENvbG91cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIHJnYmEpO1xuICAgIH1cblxuICAgIHJldHVybiBjb2xvdXJlZEZhY2V0O1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDYW52YXNFbGVtZW50IGZyb20gXCIuLi8uLi9lbGVtZW50L2NhbnZhc1wiO1xuaW1wb3J0IENvbG91cmVkRmFjZXQgZnJvbSBcIi4uLy4uL3ByaW1pdGl2ZS9mYWNldC9jb2xvdXJlZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvdXJlZENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY29uc3RydWN0b3IobWFza1JlZmVyZW5jZSwgdHJhbnNmb3JtLCBmYWNldHMsIG1hc2tzLCBjb29yZGluYXRlcywgaW5kZXhlcywgY29sb3VyKSB7XG4gICAgc3VwZXIobWFza1JlZmVyZW5jZSwgdHJhbnNmb3JtLCBmYWNldHMsIG1hc2tzKTtcblxuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcbiAgICB0aGlzLmluZGV4ZXMgPSBpbmRleGVzO1xuICAgIHRoaXMuY29sb3VyID0gY29sb3VyO1xuICB9XG5cbiAgY3JlYXRlRmFjZXRzKG1hcmdpbk9mRXJyb3IpIHtcbiAgICBzdXBlci5jcmVhdGVGYWNldHMobWFyZ2luT2ZFcnJvcik7XG5cbiAgICBjb25zdCBpbmRleFR1cGxlcyA9IHRoaXMuaW5kZXhlcywgIC8vL1xuICAgICAgICAgIGZhY2V0cyA9IGluZGV4VHVwbGVzLnJlZHVjZSgoZmFjZXRzLCBpbmRleFR1cGxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb29yZGluYXRlVHVwbGVzID0gdGhpcy5jb29yZGluYXRlcywgLy8vXG4gICAgICAgICAgICAgICAgICBjb2xvdXJlZEZhY2V0ID0gQ29sb3VyZWRGYWNldC5mcm9tQ29vcmRpbmF0ZVR1cGxlc0luZGV4VHVwbGVDb2xvdXJBbmRNYXJnaW5PZkVycm9yKGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIHRoaXMuY29sb3VyLCBtYXJnaW5PZkVycm9yKSxcbiAgICAgICAgICAgICAgICAgIGZhY2V0ID0gY29sb3VyZWRGYWNldDsgIC8vL1xuXG4gICAgICAgICAgICBpZiAoZmFjZXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgZmFjZXRzLnB1c2goZmFjZXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFjZXRzO1xuICAgICAgICAgIH0sIFtdKTtcblxuICAgIHRoaXMuc2V0RmFjZXRzKGZhY2V0cyk7XG4gIH1cblxuICBhZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikge1xuICAgIGNvbnN0IGZhY2V0cyA9IHRoaXMuZ2V0RmFjZXRzKCk7XG5cbiAgICBjb2xvdXJSZW5kZXJlci5hZGRGYWNldHMoZmFjZXRzKTtcblxuICAgIHN1cGVyLmFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGNvbG91ciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7IHJldHVybiBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgY29sb3VyLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpOyB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHJvdGF0ZVZlcnRpY2VzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy92ZXJ0aWNlc1wiO1xuaW1wb3J0IHsgaW52ZXJ0MiwgaW52ZXJ0MyB9IGZyb20gXCIuLi9tYXRocy9tYXRyaXhcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlQXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWF0ZXJuaW9uXCI7XG5pbXBvcnQgeyBhZGQyLCBtdWx0aXBseTIsIHRyYW5zZm9ybTIsIHRyYW5zZm9ybTMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZVRleHR1cmVDb29yZGluYXRlVHVwbGVzKHRleHR1cmVDb29yZGluYXRlVHVwbGVzKSB7XG4gIHRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMubWFwKCh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlKSA9PiB7XG4gICAgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZSA9IHRleHR1cmVDb29yZGluYXRlVHVwbGUuc2xpY2UoKTsgIC8vL1xuXG4gICAgcmV0dXJuIHRleHR1cmVDb29yZGluYXRlVHVwbGU7XG4gIH0pO1xuXG4gIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZU1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBleHRlbnQpIHtcbiAgY29uc3QgeyBsZWZ0LCBib3R0b20sIHdpZHRoLCBoZWlnaHQgfSA9IGV4dGVudCxcbiAgICAgICAgbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcy5tYXAoKHRleHR1cmVDb29yZGluYXRlVHVwbGUpID0+IHtcbiAgICAgICAgICBjb25zdCBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlID0gYWRkMihtdWx0aXBseTIodGV4dHVyZUNvb3JkaW5hdGVUdXBsZSwgWyB3aWR0aCwgaGVpZ2h0IF0gKSwgWyBsZWZ0LCBib3R0b20gXSk7XG5cbiAgICAgICAgICByZXR1cm4gbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh2ZXJ0aWNlcywgbm9ybWFsLCBwYXJlbnRWZXJ0aWNlcywgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpIHtcbiAgY29uc3QgYXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlQXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uKG5vcm1hbCksXG4gICAgICAgIHJvdGF0aW9uUXVhdGVybmlvbiA9IGFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbjsgLy8vXG5cbiAgY29uc3Qgcm90YXRlZFZlcnRpY2VzID0gcm90YXRlVmVydGljZXModmVydGljZXMsIHJvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgcGFyZW50VmVydGljZXMgPSByb3RhdGVWZXJ0aWNlcyhwYXJlbnRWZXJ0aWNlcywgcm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICB2ZXJ0aWNlcyA9IHJvdGF0ZWRWZXJ0aWNlczsgIC8vL1xuXG4gIGNvbnN0IGZpcnN0VmVydGV4ID0gZmlyc3QodmVydGljZXMpLFxuICAgICAgICBzZWNvbmRWZXJ0ZXggPSBzZWNvbmQodmVydGljZXMpLFxuICAgICAgICB0aGlyZFZlcnRleCA9IHRoaXJkKHZlcnRpY2VzKSxcbiAgICAgICAgZmlyc3RQYXJlbnRWZXJ0ZXggPSBmaXJzdChwYXJlbnRWZXJ0aWNlcyksXG4gICAgICAgIHNlY29uZFBhcmVudFZlcnRleCA9IHNlY29uZChwYXJlbnRWZXJ0aWNlcyksXG4gICAgICAgIHRoaXJkUGFyZW50VmVydGV4ID0gdGhpcmQocGFyZW50VmVydGljZXMpLFxuICAgICAgICBmaXJzdFRleHR1cmVDb29yZGluYXRlVHVwbGUgPSBmaXJzdCh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyksXG4gICAgICAgIHNlY29uZFRleHR1cmVDb29yZGluYXRlVHVwbGUgPSBzZWNvbmQodGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpLFxuICAgICAgICB0aGlyZFRleHR1cmVDb29yZGluYXRlVHVwbGUgPSB0aGlyZCh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyksXG4gICAgICAgIGZpcnN0VmVydGV4UG9zaXRpb24gPSBmaXJzdFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICBzZWNvbmRWZXJ0ZXhQb3NpdGlvbiA9IHNlY29uZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICB0aGlyZFZlcnRleFBvc2l0aW9uID0gdGhpcmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgZmlyc3RQYXJlbnRWZXJ0ZXhQb3NpdGlvbiA9IGZpcnN0UGFyZW50VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIHNlY29uZFBhcmVudFZlcnRleFBvc2l0aW9uID0gc2Vjb25kUGFyZW50VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIHRoaXJkUGFyZW50VmVydGV4UG9zaXRpb24gPSB0aGlyZFBhcmVudFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICBSMXggPSBmaXJzdFZlcnRleFBvc2l0aW9uWzBdLCAgLy8vXG4gICAgICAgIFIxeSA9IGZpcnN0VmVydGV4UG9zaXRpb25bMV0sICAvLy9cbiAgICAgICAgUjJ4ID0gc2Vjb25kVmVydGV4UG9zaXRpb25bMF0sIC8vL1xuICAgICAgICBSMnkgPSBzZWNvbmRWZXJ0ZXhQb3NpdGlvblsxXSwgLy8vXG4gICAgICAgIFIzeCA9IHRoaXJkVmVydGV4UG9zaXRpb25bMF0sICAvLy9cbiAgICAgICAgUjN5ID0gdGhpcmRWZXJ0ZXhQb3NpdGlvblsxXSwgIC8vL1xuICAgICAgICBQMXggPSBmaXJzdFBhcmVudFZlcnRleFBvc2l0aW9uWzBdLCAvLy9cbiAgICAgICAgUDJ4ID0gc2Vjb25kUGFyZW50VmVydGV4UG9zaXRpb25bMF0sIC8vL1xuICAgICAgICBQM3ggPSB0aGlyZFBhcmVudFZlcnRleFBvc2l0aW9uWzBdLCAvLy9cbiAgICAgICAgUDF5ID0gZmlyc3RQYXJlbnRWZXJ0ZXhQb3NpdGlvblsxXSwgLy8vXG4gICAgICAgIFAyeSA9IHNlY29uZFBhcmVudFZlcnRleFBvc2l0aW9uWzFdLCAvLy9cbiAgICAgICAgUDN5ID0gdGhpcmRQYXJlbnRWZXJ0ZXhQb3NpdGlvblsxXSwgLy8vXG4gICAgICAgIFAxdSA9IGZpcnN0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZVswXSwgLy8vXG4gICAgICAgIFAxdiA9IGZpcnN0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZVsxXSwgLy8vXG4gICAgICAgIFAydSA9IHNlY29uZFRleHR1cmVDb29yZGluYXRlVHVwbGVbMF0sIC8vL1xuICAgICAgICBQMnYgPSBzZWNvbmRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlWzFdLCAvLy9cbiAgICAgICAgUDN1ID0gdGhpcmRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlWzBdLCAvLy9cbiAgICAgICAgUDN2ID0gdGhpcmRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlWzFdLCAvLy9cbiAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVzTWF0cml4ID0gaW52ZXJ0MyhbIDEsIDEsIDEsIFAxdSwgUDJ1LCBQM3UsIFAxdiwgUDJ2LCBQM3YgXSksXG4gICAgICAgIGZpcnN0VHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudCA9IHRyYW5zZm9ybTMoWyBQMXgsIFAyeCwgUDN4IF0sIHRleHR1cmVDb29yZGluYXRlc01hdHJpeCksXG4gICAgICAgIHNlY29uZFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnQgPSB0cmFuc2Zvcm0zKFsgUDF5LCBQMnksIFAzeSBdLCB0ZXh0dXJlQ29vcmRpbmF0ZXNNYXRyaXgpLFxuICAgICAgICBPeCA9IGZpcnN0VHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudFswXSwgIC8vL1xuICAgICAgICBVeCA9IGZpcnN0VHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudFsxXSwgIC8vL1xuICAgICAgICBWeCA9IGZpcnN0VHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudFsyXSwgIC8vL1xuICAgICAgICBPeSA9IHNlY29uZFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnRbMF0sICAvLy9cbiAgICAgICAgVXkgPSBzZWNvbmRUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50WzFdLCAgLy8vXG4gICAgICAgIFZ5ID0gc2Vjb25kVHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudFsyXSwgIC8vL1xuICAgICAgICB0cmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzTWF0cml4ID0gaW52ZXJ0MihbIFV4LCBVeSwgVngsIFZ5IF0pLFxuICAgICAgICBmaXJzdEFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGUgPSB0cmFuc2Zvcm0yKFsgUjF4IC0gT3gsIFIxeSAtIE95IF0sIHRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNNYXRyaXgpLFxuICAgICAgICBzZWNvbmRBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlID0gdHJhbnNmb3JtMihbIFIyeCAtIE94LCBSMnkgLSBPeSBdLCB0cmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzTWF0cml4KSxcbiAgICAgICAgdGhpcmRBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlID0gdHJhbnNmb3JtMihbIFIzeCAtIE94LCBSM3kgLSBPeSBdLCB0cmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzTWF0cml4KSxcbiAgICAgICAgYWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlID0gW1xuICAgICAgICAgIGZpcnN0QWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZSxcbiAgICAgICAgICBzZWNvbmRBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlLFxuICAgICAgICAgIHRoaXJkQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZSxcbiAgICAgICAgXTtcblxuICByZXR1cm4gYWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWRnZSBmcm9tIFwiLi4vZWRnZVwiO1xuaW1wb3J0IEZhY2V0IGZyb20gXCIuLi9mYWNldFwiO1xuaW1wb3J0IE5vcm1hbCBmcm9tIFwiLi4vbm9ybWFsXCI7XG5pbXBvcnQgVmVydGV4IGZyb20gXCIuLi92ZXJ0ZXhcIjtcblxuaW1wb3J0IHsgcGVybXV0ZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcHByb3hpbWF0ZVwiO1xuaW1wb3J0IHsgdmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3ZlcnRpY2VzXCI7XG5pbXBvcnQgeyBjbG9uZUVkZ2VzLCBjbG9uZU5vcm1hbCwgY2xvbmVWZXJ0aWNlcywgY2FsY3VsYXRlQXJlYSwgY2FsY3VsYXRlRWRnZXMsIGNhbGN1bGF0ZU5vcm1hbCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZmFjZXRcIjtcbmltcG9ydCB7IGNsb25lVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGNhbGN1bGF0ZU1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBjYWxjdWxhdGVBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy90ZXh0dXJlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHR1cmVkRmFjZXQgZXh0ZW5kcyBGYWNldCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlVHVwbGVzKSB7XG4gICAgc3VwZXIodmVydGljZXMsIG5vcm1hbCwgZWRnZXMpO1xuXG4gICAgdGhpcy5pbWFnZU5hbWUgPSBpbWFnZU5hbWU7XG5cbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7XG4gIH1cblxuICBnZXRJbWFnZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW1hZ2VOYW1lO1xuICB9XG5cbiAgZ2V0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7XG4gIH1cblxuICBnZXRNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyhpbWFnZU1hcEpTT04pIHtcbiAgICBjb25zdCBqc29uID0gaW1hZ2VNYXBKU09OW3RoaXMuaW1hZ2VOYW1lXSxcbiAgICAgICAgICBleHRlbnQgPSBqc29uLCAgLy8vXG4gICAgICAgICAgbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBjYWxjdWxhdGVNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBleHRlbnQpO1xuXG4gICAgcmV0dXJuIG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzO1xuICB9XG5cbiAgcGVybXV0ZShwbGFjZXMpIHtcbiAgICBzdXBlci5wZXJtdXRlKHBsYWNlcyk7XG5cbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gcGVybXV0ZSh0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBwbGFjZXMpO1xuICB9XG5cbiAgZnJvbVZlcnRpY2VzQW5kTWFyZ2luT2ZFcnJvcih2ZXJ0aWNlcywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGxldCB0ZXh0dXJlZEZhY2V0ID0gbnVsbDtcblxuICAgIGNvbnN0IGFyZWEgPSBjYWxjdWxhdGVBcmVhKHZlcnRpY2VzKSxcbiAgICAgICAgICBhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8oYXJlYSwgbWFyZ2luT2ZFcnJvcik7XG5cbiAgICBpZiAoIWFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8pIHtcbiAgICAgIGNvbnN0IG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcywgTm9ybWFsKSxcbiAgICAgICAgICAgIHBhcmVudFZlcnRpY2VzID0gdGhpcy52ZXJ0aWNlcywgLy8vXG4gICAgICAgICAgICBhZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGUgPSBjYWxjdWxhdGVBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHZlcnRpY2VzLCBub3JtYWwsIHBhcmVudFZlcnRpY2VzLCB0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzKSxcbiAgICAgICAgICAgIGVkZ2VzID0gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpLFxuICAgICAgICAgICAgaW1hZ2VOYW1lID0gdGhpcy5pbWFnZU5hbWUsXG4gICAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IGFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZTsgIC8vL1xuXG4gICAgICB0ZXh0dXJlZEZhY2V0ID0gbmV3IFRleHR1cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXh0dXJlZEZhY2V0O1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgbGV0IHZlcnRpY2VzID0gdGhpcy5nZXRWZXJ0aWNlcygpLFxuICAgICAgICBub3JtYWwgPSB0aGlzLmdldE5vcm1hbCgpLFxuICAgICAgICBlZGdlcyA9IHRoaXMuZ2V0RWRnZXMoKTtcblxuICAgIHZlcnRpY2VzID0gY2xvbmVWZXJ0aWNlcyh2ZXJ0aWNlcyk7XG4gICAgbm9ybWFsID0gY2xvbmVOb3JtYWwobm9ybWFsKTtcbiAgICBlZGdlcyA9IGNsb25lRWRnZXMoZWRnZXMpO1xuXG4gICAgY29uc3QgaW1hZ2VOYW1lID0gdGhpcy5pbWFnZU5hbWUsIC8vL1xuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gY2xvbmVUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzKSxcbiAgICAgICAgICB0ZXh0dXJlZEZhY2V0ID0gbmV3IFRleHR1cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRleHR1cmVDb29yZGluYXRlVHVwbGVzQ29vcmRpbmF0ZXNUdXBsZXNJbmRleFR1cGxlSW1hZ2VOYW1lQW5kTWFyZ2luT2ZFcnJvcih0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgaW1hZ2VOYW1lLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgbGV0IHRleHR1cmVkRmFjZXQgPSBudWxsO1xuXG4gICAgY29uc3QgdmVydGljZXMgPSB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZShjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCBWZXJ0ZXgpLFxuICAgICAgICAgIGFyZWEgPSBjYWxjdWxhdGVBcmVhKHZlcnRpY2VzKSxcbiAgICAgICAgICBhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8oYXJlYSwgbWFyZ2luT2ZFcnJvcik7XG5cbiAgICBpZiAoIWFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8pIHtcbiAgICAgIGNvbnN0IG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcywgTm9ybWFsKSxcbiAgICAgICAgICAgIGVkZ2VzID0gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpO1xuXG4gICAgICB0ZXh0dXJlZEZhY2V0ID0gbmV3IFRleHR1cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXh0dXJlZEZhY2V0O1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDYW52YXNFbGVtZW50IGZyb20gXCIuLi8uLi9lbGVtZW50L2NhbnZhc1wiO1xuaW1wb3J0IFRleHR1cmVkRmFjZXQgZnJvbSBcIi4uLy4uL3ByaW1pdGl2ZS9mYWNldC90ZXh0dXJlZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY29uc3RydWN0b3IobWFza1JlZmVyZW5jZSwgdHJhbnNmb3JtLCBmYWNldHMsIG1hc2tzLCBjb29yZGluYXRlcywgaW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMpIHtcbiAgICBzdXBlcihtYXNrUmVmZXJlbmNlLCB0cmFuc2Zvcm0sIGZhY2V0cywgbWFza3MpO1xuXG4gICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICAgIHRoaXMuaW5kZXhlcyA9IGluZGV4ZXM7XG4gICAgdGhpcy5pbWFnZU5hbWUgPSBpbWFnZU5hbWU7XG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBjcmVhdGVGYWNldHMobWFyZ2luT2ZFcnJvcikge1xuICAgIHN1cGVyLmNyZWF0ZUZhY2V0cyhtYXJnaW5PZkVycm9yKTtcblxuICAgIGNvbnN0IGluZGV4VHVwbGVzID0gdGhpcy5pbmRleGVzLCAgLy8vXG4gICAgICAgICAgZmFjZXRzID0gaW5kZXhUdXBsZXMucmVkdWNlKChmYWNldHMsIGluZGV4VHVwbGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXNbaW5kZXhdLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZVR1cGxlcyA9IHRoaXMuY29vcmRpbmF0ZXMsIC8vL1xuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlZEZhY2V0ID0gVGV4dHVyZWRGYWNldC5mcm9tVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXNDb29yZGluYXRlc1R1cGxlc0luZGV4VHVwbGVJbWFnZU5hbWVBbmRNYXJnaW5PZkVycm9yKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCB0aGlzLmltYWdlTmFtZSwgbWFyZ2luT2ZFcnJvciksXG4gICAgICAgICAgICAgICAgICAgIGZhY2V0ID0gdGV4dHVyZWRGYWNldDsgIC8vL1xuXG4gICAgICAgICAgICBpZiAoZmFjZXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgZmFjZXRzLnB1c2goZmFjZXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFjZXRzO1xuICAgICAgICAgIH0sIFtdKTtcblxuICAgIHRoaXMuc2V0RmFjZXRzKGZhY2V0cyk7XG4gIH1cblxuICBhZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikge1xuICAgIGNvbnN0IGZhY2V0cyA9IHRoaXMuZ2V0RmFjZXRzKCk7XG5cbiAgICB0ZXh0dXJlUmVuZGVyZXIuYWRkRmFjZXRzKGZhY2V0cyk7XG5cbiAgICBzdXBlci5hZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7IHJldHVybiBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7IH1cbn1cbiIsICIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FudmFzIH0gZnJvbSBcIi4vY2FudmFzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlYWN0IH0gZnJvbSBcIi4vcmVhY3RcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFzayB9IGZyb20gXCIuL2VsZW1lbnQvbWFza1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQYXJ0IH0gZnJvbSBcIi4vZWxlbWVudC9wYXJ0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNjZW5lIH0gZnJvbSBcIi4vZWxlbWVudC9zY2VuZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYW1lcmEgfSBmcm9tIFwiLi9lbGVtZW50L2NhbWVyYVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBHYW1pbmdDYW1lcmEgfSBmcm9tIFwiLi9lbGVtZW50L2NhbWVyYS9nYW1pbmdcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGVzaWduQ2FtZXJhIH0gZnJvbSBcIi4vZWxlbWVudC9jYW1lcmEvZGVzaWduXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50L2NhbnZhc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwcmVsb2FkVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3ByZWxvYWRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29sb3VyZWRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4vZWxlbWVudC9jYW52YXMvY29sb3VyZWRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGV4dHVyZWRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4vZWxlbWVudC9jYW52YXMvdGV4dHVyZWRcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyB2ZWN0b3JNYXRocyB9IGZyb20gXCIuL21hdGhzL3ZlY3RvclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtYXRyaXhNYXRocyB9IGZyb20gXCIuL21hdGhzL21hdHJpeFwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDb2xvdXJlZENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgLy8vXG5cbmNvbnN0IGNvb3JkaW5hdGVzID0gW1xuXG4gICAgICAgIFsgMCwgMCwgMCBdLFxuICAgICAgICBbIDEsIDAsIDAgXSxcbiAgICAgICAgWyAwLCAxLCAwIF0sXG4gICAgICAgIFsgMSwgMSwgMCBdLFxuXG4gICAgICBdLFxuICAgICAgaW5kZXhlcyA9IFtcblxuICAgICAgICBbIDAsIDEsIDMgXSxcbiAgICAgICAgWyAzLCAyLCAwIF0sXG5cbiAgICAgIF0sXG4gICAgICBkZWZhdWx0Q29sb3VyID0gWyAxLCAwLCAwIF07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG91cmVkU3F1YXJlIGV4dGVuZHMgQ29sb3VyZWRDYW52YXNFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgXHRjb25zdCB7IGNvbG91ciA9IGRlZmF1bHRDb2xvdXIgfSA9IHByb3BlcnRpZXMsXG5cdFx0XHQgICAgY29sb3VyZWRTcXVhcmUgPSBDb2xvdXJlZENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ29sb3VyZWRTcXVhcmUsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBjb2xvdXIpO1xuXG4gIFx0cmV0dXJuIGNvbG91cmVkU3F1YXJlO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDb2xvdXJlZFNxdWFyZSBmcm9tIFwiLi9jb2xvdXJlZFNxdWFyZVwiO1xuXG5jb25zdCBGYWNlID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBjb2xvdXIgfSA9IHByb3BlcnRpZXM7XG5cbiAgcmV0dXJuIChcblxuICAgIDxDb2xvdXJlZFNxdWFyZSBjb2xvdXI9e2NvbG91cn0gcG9zaXRpb249e1sgLTAuNSwgLTAuNSwgKzAuNSBdfSAvPlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGYWNlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRmFjZSBmcm9tIFwiLi9mYWNlXCI7XG5cbmNvbnN0IGRlZmF1bHRDb2xvdXIgPSBbIDEsIDEsIDAgXTtcblxuY29uc3QgQ3ViZSA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgY29sb3VyID0gZGVmYXVsdENvbG91ciB9ID0gcHJvcGVydGllcztcblxuICByZXR1cm4gKFtcblxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgICAwLCAgIDAsIDAgXX0gLz4sXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyArOTAsICAgMCwgMCBdfSAvPixcbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbICAgMCwgKzkwLCAwIF19IC8+LFxuXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAxODAsICAgMCwgMCBdfSAvPixcbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbIC05MCwgICAwLCAwIF19IC8+LFxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgICAwLCAtOTAsIDAgXX0gLz4sXG5cbiAgXSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDdWJlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDYW52YXMsIFNjZW5lLCBQYXJ0LCBEZXNpZ25DYW1lcmEgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgQ3ViZSBmcm9tIFwiLi9lbGVtZW50L2N1YmVcIjtcblxuY29uc3QgY3ViZUV4YW1wbGUgPSAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuICByZXR1cm4gKFxuXG4gICAgPFNjZW5lIGNhbnZhcz17Y2FudmFzfSA+XG4gICAgICA8UGFydD5cbiAgICAgICAgPEN1YmUgY29sb3VyPXtbIDAsIDEsIDAgXX0gLz5cbiAgICAgIDwvUGFydD5cbiAgICAgIDxEZXNpZ25DYW1lcmEgcGVyc2lzdCAvPlxuICAgIDwvU2NlbmU+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGN1YmVFeGFtcGxlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBUZXh0dXJlZENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgLy8vXG5cbmNvbnN0IGNvb3JkaW5hdGVzID0gW1xuXG4gICAgICAgIFsgMCwgMCwgMCBdLFxuICAgICAgICBbIDEsIDAsIDAgXSxcbiAgICAgICAgWyAwLCAxLCAwIF0sXG4gICAgICAgIFsgMSwgMSwgMCBdLFxuXG4gICAgICBdLFxuICAgICAgaW5kZXhlcyA9IFtcblxuICAgICAgICBbIDAsIDEsIDMgXSxcbiAgICAgICAgWyAzLCAyLCAwIF0sXG5cbiAgICAgIF0sXG4gICAgICBkZWZhdWx0SW1hZ2VOYW1lID0gXCJwbGFzdGVyLmpwZ1wiLFxuICAgICAgZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyA9IFtcblxuICAgICAgICBbIFsgMCwgMCBdLCBbIDIsIDAgXSwgWyAyLCAyIF0gXSxcbiAgICAgICAgWyBbIDIsIDIgXSwgWyAwLCAyIF0sIFsgMCwgMCBdIF0sXG5cbiAgICAgIF07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHR1cmVkUXVhZHJhbmdsZSBleHRlbmRzIFRleHR1cmVkQ2FudmFzRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbWFnZU5hbWUgPSBkZWZhdWx0SW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSBkZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRleHR1cmVkUXVhZHJhbmdsZSA9IFRleHR1cmVkQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhUZXh0dXJlZFF1YWRyYW5nbGUsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gdGV4dHVyZWRRdWFkcmFuZ2xlO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENhbnZhcywgU2NlbmUsIFBhcnQsIE1hc2ssIERlc2lnbkNhbWVyYSwgcHJlbG9hZFV0aWxpdGllcyB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBDb2xvdXJlZFNxdWFyZSBmcm9tIFwiLi9lbGVtZW50L2NvbG91cmVkU3F1YXJlXCI7XG5pbXBvcnQgVGV4dHVyZWRRdWFkcmFuZ2xlIGZyb20gXCIuL2VsZW1lbnQvdGV4dHVyZWRRdWFkcmFuZ2xlXCI7XG5cbmNvbnN0IHsgcHJlbG9hZEltYWdlcyB9ID0gcHJlbG9hZFV0aWxpdGllcyxcbiAgICAgIHsgaG9zdCwgaW1hZ2VOYW1lcywgaW1hZ2VEaXJlY3RvcnlVUkkgfSA9IGdsb2JhbFRoaXM7XG5cbmNvbnN0IHRpbGluZ0V4YW1wbGUgPSAoKSA9PiB7XG4gIHByZWxvYWRJbWFnZXMoaG9zdCwgaW1hZ2VOYW1lcywgaW1hZ2VEaXJlY3RvcnlVUkksIChpbWFnZXMsIGltYWdlTmFtZXMpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9ID5cbiAgICAgICAgPFBhcnQgaW1hZ2VzPXtpbWFnZXN9IGltYWdlTmFtZXM9e2ltYWdlTmFtZXN9IGltYWdlVGlsaW5nID5cbiAgICAgICAgICA8TWFzayByZWZlcmVuY2U9XCJtYXNrXCI+XG4gICAgICAgICAgICA8Q29sb3VyZWRTcXVhcmUgc2NhbGU9e1sgMC4yNSwgMC4yNSwgMSBdfSBwb3NpdGlvbj17WyAwLjEyNSwgMC4xMjUsIDAuMTI1IF19IC8+XG4gICAgICAgICAgPC9NYXNrPlxuICAgICAgICAgIDxUZXh0dXJlZFF1YWRyYW5nbGUgcG9zaXRpb249e1sgMCwgMCwgMCBdfSBpbWFnZU5hbWU9XCJmbG9vcmJvYXJkcy5qcGdcIiBtYXNrUmVmZXJlbmNlPVwibWFza1wiIC8+XG4gICAgICAgICAgPFRleHR1cmVkUXVhZHJhbmdsZSBwb3NpdGlvbj17WyAtMC41LCAtMC41LCAtMC41IF19IGltYWdlTmFtZT1cInBhdmluZy5qcGdcIiBtYXNrUmVmZXJlbmNlPVwibWFza1wiIC8+XG4gICAgICAgIDwvUGFydD5cbiAgICAgICAgPERlc2lnbkNhbWVyYS8+XG4gICAgICA8L1NjZW5lPlxuXG4gICAgKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0aWxpbmdFeGFtcGxlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDYW52YXMsIFNjZW5lLCBQYXJ0LCBEZXNpZ25DYW1lcmEgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgQ29sb3VyZWRTcXVhcmUgZnJvbSBcIi4vZWxlbWVudC9jb2xvdXJlZFNxdWFyZVwiO1xuXG5jb25zdCBzaW1wbGVFeGFtcGxlID0gKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbiAgcmV0dXJuIChcblxuICAgIDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG4gICAgICA8UGFydD5cbiAgICAgICAgPENvbG91cmVkU3F1YXJlIGNvbG91cj17WyAwLCAwLCAxIF19IC8+XG4gICAgICA8L1BhcnQ+XG4gICAgICA8RGVzaWduQ2FtZXJhLz5cbiAgICA8L1NjZW5lPlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaW1wbGVFeGFtcGxlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDYW52YXMsIFNjZW5lLCBNYXNrLCBQYXJ0LCBEZXNpZ25DYW1lcmEgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgQ3ViZSBmcm9tIFwiLi9lbGVtZW50L2N1YmVcIjtcblxuY29uc3QgbWFza2luZ0V4YW1wbGUgPSAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuICByZXR1cm4gKFxuXG4gICAgPFNjZW5lIGNhbnZhcz17Y2FudmFzfT5cbiAgICAgIDxQYXJ0PlxuICAgICAgICA8TWFzayByZWZlcmVuY2U9XCJxdWFydGVyLXNpemVkLWN1YmVcIj5cbiAgICAgICAgICA8Q3ViZSBzY2FsZT17WyAxLzQsIDEvNCwgMS80IF19IC8+XG4gICAgICAgIDwvTWFzaz5cbiAgICAgICAgPE1hc2sgcmVmZXJlbmNlPVwiaGFsZi1zaXplZC1jdWJlXCI+XG4gICAgICAgICAgPEN1YmUgc2NhbGU9e1sgMS8yLCAxLzIsIDEvMiBdfSBtYXNrUmVmZXJlbmNlPVwicXVhcnRlci1zaXplZC1jdWJlXCIvPlxuICAgICAgICA8L01hc2s+XG4gICAgICAgIDxDdWJlIG1hc2tSZWZlcmVuY2U9XCJoYWxmLXNpemVkLWN1YmVcIiAvPlxuICAgICAgPC9QYXJ0PlxuICAgICAgPERlc2lnbkNhbWVyYS8+XG4gICAgPC9TY2VuZT5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFza2luZ0V4YW1wbGU7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFRleHR1cmVkQ2FudmFzRWxlbWVudCB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAvLy9cblxuY29uc3QgY29vcmRpbmF0ZXMgPSBbXG5cbiAgICAgICAgWyAgIDAsIDAsIDAgXSxcbiAgICAgICAgWyAgIDEsIDAsIDAgXSxcbiAgICAgICAgWyAwLjUsIDEsIDAgXSxcblxuICAgICAgXSxcbiAgICAgIGluZGV4ZXMgPSBbXG5cbiAgICAgICAgWyAwLCAxLCAyIF0sXG5cbiAgICAgIF0sXG4gICAgICBkZWZhdWx0SW1hZ2VOYW1lID0gXCJzdHJpcGVzLmpwZ1wiLFxuICAgICAgZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyA9IFtcblxuICAgICAgICBbIFsgMCwgMCBdLCBbIDEsIDAgXSwgWyAwLjUsIDEgXSBdLFxuXG4gICAgICBdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlZFRyaWFuZ2xlIGV4dGVuZHMgVGV4dHVyZWRDYW52YXNFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGltYWdlTmFtZSA9IGRlZmF1bHRJbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcyA9IGRlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdGV4dHVyZWRUcmlhbmdsZSA9IFRleHR1cmVkQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhUZXh0dXJlZFRyaWFuZ2xlLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVkVHJpYW5nbGU7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHR1cmVkVHJpYW5nbGUgZnJvbSBcIi4vdGV4dHVyZWRUcmlhbmdsZVwiO1xuXG5jb25zdCBTaWRlID0gKHByb3BlcnRpZXMpID0+XG5cbiAgPFRleHR1cmVkVHJpYW5nbGUgc2NhbGU9e1sgMSwgMS9NYXRoLnNxcnQoMiksIDEgXX0gcG9zaXRpb249e1sgLTAuNSwgMCwgMC41IF19IHJvdGF0aW9ucz17WyAtNDUsIDAsIDAgXX0gLz5cblxuO1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU2lkZSBmcm9tIFwiLi9zaWRlXCI7XG5cbmNvbnN0IFB5cmFtaWQgPSAocHJvcGVydGllcykgPT4gW1xuXG4gIDxTaWRlIC8+LFxuICA8U2lkZSByb3RhdGlvbnM9e1sgMCwgIDkwLCAwIF19IC8+LFxuICA8U2lkZSByb3RhdGlvbnM9e1sgMCwgMTgwLCAwIF19IC8+LFxuICA8U2lkZSByb3RhdGlvbnM9e1sgMCwgMjcwLCAwIF19IC8+LFxuXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBQeXJhbWlkO1xuXG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFBhcnQsIFNjZW5lLCBDYW52YXMsIEdhbWluZ0NhbWVyYSwgcHJlbG9hZFV0aWxpdGllcyB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBQeXJhbWlkIGZyb20gXCIuL2VsZW1lbnQvcHlyYW1pZFwiO1xuXG5jb25zdCB7IHByZWxvYWRJbWFnZU1hcCB9ID0gcHJlbG9hZFV0aWxpdGllcyxcbiAgICAgIHsgaG9zdCwgaW1hZ2VNYXBVUkksIGltYWdlTWFwSlNPTiB9ID0gZ2xvYmFsVGhpcztcblxuY29uc3QgcHlyYW1pZEV4YW1wbGUgPSAoKSA9PiB7XG4gIHByZWxvYWRJbWFnZU1hcChob3N0LCBpbWFnZU1hcFVSSSwgaW1hZ2VNYXBKU09OLCAoaW1hZ2VNYXAsIGltYWdlTWFwSlNPTikgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG4gICAgICAgIDxQYXJ0IGltYWdlTWFwPXtpbWFnZU1hcH0gaW1hZ2VNYXBKU09OPXtpbWFnZU1hcEpTT059PlxuICAgICAgICAgIDxQeXJhbWlkLz5cbiAgICAgICAgPC9QYXJ0PlxuICAgICAgICA8R2FtaW5nQ2FtZXJhLz5cbiAgICAgIDwvU2NlbmU+XG5cbiAgICApO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHB5cmFtaWRFeGFtcGxlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuL3hnbFwiO1xuXG5pbXBvcnQgY3ViZUV4YW1wbGUgZnJvbSBcIi4vZXhhbXBsZS9jdWJlXCI7XG5pbXBvcnQgdGlsaW5nRXhhbXBsZSBmcm9tIFwiLi9leGFtcGxlL3RpbGluZ1wiO1xuaW1wb3J0IHNpbXBsZUV4YW1wbGUgZnJvbSBcIi4vZXhhbXBsZS9zaW1wbGVcIjtcbmltcG9ydCBtYXNraW5nRXhhbXBsZSBmcm9tIFwiLi9leGFtcGxlL21hc2tpbmdcIjtcbmltcG9ydCBweXJhbWlkRXhhbXBsZSBmcm9tIFwiLi9leGFtcGxlL3B5cmFtaWRcIjtcblxuY29uc3QgZXhhbXBsZSA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpOyAgLy8vXG5cbnN3aXRjaCAoZXhhbXBsZSkge1xuICBjYXNlIFwiY3ViZVwiOlxuICAgIGN1YmVFeGFtcGxlKCk7XG5cbiAgICBicmVhaztcblxuICBjYXNlIFwidGlsaW5nXCI6XG4gICAgdGlsaW5nRXhhbXBsZSgpO1xuXG4gICAgYnJlYWs7XG5cbiAgY2FzZSBcInNpbXBsZVwiOlxuICAgIHNpbXBsZUV4YW1wbGUoKTtcblxuICAgIGJyZWFrO1xuXG4gIGNhc2UgXCJtYXNraW5nXCI6XG4gICAgbWFza2luZ0V4YW1wbGUoKTtcblxuICAgIGJyZWFrO1xuXG4gIGNhc2UgXCJweXJhbWlkXCI6XG4gICAgcHlyYW1pZEV4YW1wbGUoKTtcblxuICAgIGJyZWFrO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7OztBQUFBOzs7Ozs7Ozs7Ozs7O1VBY2Esb0JBQUE7ZUFBQTs7VUFOQSxZQUFBO2VBQUE7O1VBSEEsU0FBQTtlQUFBOztVQVdBLGdDQUFBO2VBQUE7O1VBTkEsZ0JBQUE7ZUFBQTs7VUFPQSxpQ0FBQTtlQUFBOztVQVZBLFdBQUE7ZUFBQTs7VUFFQSxnQkFBQTtlQUFBOztVQUxBLFNBQUE7ZUFBQTs7VUFTQSxvQkFBQTtlQUFBOztVQURBLG1CQUFBO2VBQUE7O1VBR0EsK0JBQUE7ZUFBQTs7VUFHQSxxQ0FBQTtlQUFBOztVQUVBLHdDQUFBO2VBQUE7O1VBZEEsU0FBQTtlQUFBOztVQUtBLGtCQUFBO2VBQUE7O1VBVEEsUUFBQTtlQUFBOztVQWlCQSx3Q0FBQTtlQUFBOztVQWhCQSxRQUFBO2VBQUE7OztBQUROLFFBQU0sUUFBUTtBQUNkLFFBQU0sUUFBUTtBQUNkLFFBQU0sU0FBUztBQUNmLFFBQU0sU0FBUztBQUNmLFFBQU0sU0FBUztBQUNmLFFBQU0sV0FBVztBQUNqQixRQUFNLFlBQVk7QUFDbEIsUUFBTSxnQkFBZ0I7QUFDdEIsUUFBTSxnQkFBZ0I7QUFDdEIsUUFBTSxrQkFBa0I7QUFDeEIsUUFBTSxtQkFBbUI7QUFDekIsUUFBTSxvQkFBb0I7QUFDMUIsUUFBTSxvQkFBb0I7QUFDMUIs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
