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
      get OBJECT_OBJECT() {
        return OBJECT_OBJECT;
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
    var OBJECT_OBJECT = "[object Object]";
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
      get clone() {
        return clone;
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
      get each() {
        return each;
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
      get one() {
        return one;
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
      const arrayB = Array.isArray(elementOrArray2) ? elementOrArray2 : [
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
    function one(array, callback) {
      let found = false;
      const arrayLength = array.length;
      for (let index = 0; index < arrayLength; index++) {
        const element = array[index], passed = callback(element, index);
        if (passed) {
          if (!found) {
            found = true;
          } else {
            found = false;
            break;
          }
        }
      }
      return found;
    }
    function each(array, callback) {
      let found = false;
      const arrayLength = array.length;
      for (let index = 0; index < arrayLength; index++) {
        const element = array[index], passed = callback(element, index);
        if (passed) {
          found = true;
        } else {
          found = false;
          break;
        }
      }
      return found;
    }
    function find(array, callback) {
      const elements = [];
      array.forEach((element, index) => {
        const passed = callback(element, index);
        if (passed) {
          elements.push(element);
        }
      });
      return elements;
    }
    function clone(array) {
      array = [
        ...array
      ];
      return array;
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
      let indexB = 0, length = array.length;
      while (indexB < length) {
        const elementB = array[indexB];
        for (let indexA = length - 1; indexA > indexB; indexA--) {
          const elementA = array[indexA], passed = callback(elementA, elementB);
          if (!passed) {
            const start = indexA, deleteCount = 1;
            array.splice(start, deleteCount);
          }
        }
        indexB++;
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
      one,
      each,
      find,
      clone,
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
    var _constants = require_constants2();
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
      const object = Object.prototype.toString.call(json) === _constants.OBJECT_OBJECT;
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
      const length = arrayB.length;
      for (let index = 0; index < length; index++) {
        const elementB = arrayB[index];
        arrayA.push(elementB);
      }
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
      return Array.isArray(arrayOrElement) ? arrayOrElement : [
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
        if (Class.prototype.isPrototypeOf(childElement)) {
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
          if (Class.prototype.isPrototypeOf(childElement)) {
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
      if (_element.default.isPrototypeOf(firstArgument)) {
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
        const jsonString = value;
        json = JSON.parse(jsonString);
      }
      return json;
    }
    function setJSON(key, json) {
      const jsonString = JSON.stringify(json), value = jsonString;
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NvbnN0YW50cy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9sZXZlbHMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvbWV0aG9kcy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9oZWFkZXJzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2tleUNvZGVzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2VuY29kaW5ncy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9qc29uVHlwZXMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvY2hhcmFjdGVycy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9zdGF0dXNDb2Rlcy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9jb250ZW50VHlwZXMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvc3RhdHVzTWVzc2FnZXMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvY29uc3RhbnRzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9hcnJheS5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy91dGlsaXRpZXMvcGF0aC5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy91dGlsaXRpZXMvanNvbi5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy91dGlsaXRpZXMvaHR0cC5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy92ZXJzaW9uLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9hc3luY2hyb25vdXMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvdXRpbGl0aWVzL2FqYXguanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvYnJvd3Nlci5qcyIsICJzcmMvdXRpbGl0aWVzL2FycmF5LmpzIiwgInNyYy9lbGVtZW50LmpzIiwgInNyYy9tYXRocy92ZWN0b3IuanMiLCAic3JjL3ByaW1pdGl2ZS9lZGdlLmpzIiwgInNyYy91dGlsaXRpZXMvbWlkUG9pbnQuanMiLCAic3JjL3ByaW1pdGl2ZS9lZGdlL21hc2tpbmcuanMiLCAic3JjL2RlZmF1bHRzLmpzIiwgInNyYy91dGlsaXRpZXMvYXBwcm94aW1hdGUuanMiLCAic3JjL3V0aWxpdGllcy9hbmdsZS5qcyIsICJzcmMvdXRpbGl0aWVzL3F1YXRlcm5pb24uanMiLCAic3JjL3V0aWxpdGllcy9yb3RhdGlvbi5qcyIsICJzcmMvdXRpbGl0aWVzL2ludGVyc2VjdGlvbi5qcyIsICJzcmMvcHJpbWl0aXZlL3ZlcnRpY2FsTGluZS5qcyIsICJzcmMvdXRpbGl0aWVzL3ZlcnRpY2VzLmpzIiwgInNyYy9wcmltaXRpdmUvbWFza2luZ0ZhY2V0LmpzIiwgInNyYy9tYXRocy9tYXRyaXguanMiLCAic3JjL3V0aWxpdGllcy9tYXRyaXguanMiLCAic3JjL3V0aWxpdGllcy90cmFuc2Zvcm0uanMiLCAic3JjL2VsZW1lbnQvbWFzay5qcyIsICJzcmMvdXRpbGl0aWVzL2VsZW1lbnQuanMiLCAic3JjL2VsZW1lbnQvY2FudmFzLmpzIiwgInNyYy9lbGVtZW50L2NhbnZhcy9mdW5jdGlvbi5qcyIsICJzcmMvdXRpbGl0aWVzL2VsZW1lbnRzLmpzIiwgInNyYy9yZWFjdC5qcyIsICJzcmMveGdsLmpzIiwgInNyYy9taXhpbnMvZGVwdGguanMiLCAic3JjL2Vycm9ycy5qcyIsICJzcmMvbWl4aW5zL3NoYWRlci5qcyIsICJzcmMvbWl4aW5zL2J1ZmZlci5qcyIsICJzcmMvbWl4aW5zL2NvbG91ci5qcyIsICJzcmMvbWl4aW5zL21hdHJpeC5qcyIsICJzcmMvbWl4aW5zL3RleHR1cmUuanMiLCAic3JjL21peGlucy9wcm9ncmFtLmpzIiwgInNyYy9taXhpbnMvYmxlbmRpbmcuanMiLCAic3JjL21peGlucy9sb2NhdGlvbi5qcyIsICJzcmMvY2FudmFzLmpzIiwgInNyYy9yZW5kZXJlci5qcyIsICJzcmMvcmVuZGVyZXIvZGF0YS5qcyIsICJzcmMvcmVuZGVyZXIvZGF0YS9jb2xvdXIuanMiLCAic3JjL3JlbmRlcmVyL3NvdXJjZS9saWdodGluZy5qcyIsICJzcmMvcmVuZGVyZXIvc291cmNlL3Bvc2l0aW9uLmpzIiwgInNyYy9yZW5kZXJlci9zb3VyY2UvY29sb3VyL3ZlcnRleFNoYWRlci5qcyIsICJzcmMvcmVuZGVyZXIvc291cmNlL2NvbG91ci9mcmFnbWVudFNoYWRlci5qcyIsICJzcmMvcmVuZGVyZXIvYnVmZmVycy5qcyIsICJzcmMvcmVuZGVyZXIvYnVmZmVycy9jb2xvdXIuanMiLCAic3JjL3JlbmRlcmVyL2xvY2F0aW9ucy91bmlmb3JtLmpzIiwgInNyYy9yZW5kZXJlci9sb2NhdGlvbnMvY29sb3VyL3VuaWZvcm0uanMiLCAic3JjL3JlbmRlcmVyL2xvY2F0aW9ucy9hdHRyaWJ1dGUuanMiLCAic3JjL3JlbmRlcmVyL2xvY2F0aW9ucy9jb2xvdXIvYXR0cmlidXRlLmpzIiwgInNyYy9yZW5kZXJlci9jb2xvdXIuanMiLCAic3JjL3JlbmRlcmVyL3NvdXJjZS90ZXh0dXJlL3ZlcnRleFNoYWRlci5qcyIsICJzcmMvcmVuZGVyZXIvZGF0YS90ZXh0dXJlLmpzIiwgInNyYy9yZW5kZXJlci9zb3VyY2UvdGV4dHVyZS9mcmFnbWVudFNoYWRlci5qcyIsICJzcmMvcmVuZGVyZXIvYnVmZmVycy90ZXh0dXJlLmpzIiwgInNyYy9yZW5kZXJlci9sb2NhdGlvbnMvdGV4dHVyZS91bmlmb3JtLmpzIiwgInNyYy9yZW5kZXJlci9sb2NhdGlvbnMvdGV4dHVyZS9hdHRyaWJ1dGUuanMiLCAic3JjL3JlbmRlcmVyL3RleHR1cmUuanMiLCAic3JjL3JlbmRlcmVyL3RleHR1cmUvaW1hZ2VzLmpzIiwgInNyYy9yZW5kZXJlci90ZXh0dXJlL2ltYWdlTWFwLmpzIiwgInNyYy9lbGVtZW50L3BhcnQuanMiLCAic3JjL2VsZW1lbnQvY2FtZXJhLmpzIiwgInNyYy9ldmVudFR5cGVzLmpzIiwgInNyYy9taXNjZWxsYW5lb3VzL2tleUV2ZW50cy5qcyIsICJzcmMvbWlzY2VsbGFuZW91cy9tb3VzZUV2ZW50cy5qcyIsICJzcmMvbWlzY2VsbGFuZW91cy91c2VySW5wdXQuanMiLCAic3JjL2VsZW1lbnQvc2NlbmUuanMiLCAic3JjL3V0aWxpdGllcy9vZmZzZXRzLmpzIiwgInNyYy9taXNjZWxsYW5lb3VzL3Bhbi5qcyIsICJzcmMvbWlzY2VsbGFuZW91cy90aWx0LmpzIiwgInNyYy91dGlsaXRpZXMvbG9jYWxTdG9yYWdlLmpzIiwgInNyYy9lbGVtZW50L2NhbWVyYS9nYW1pbmcuanMiLCAic3JjL21pc2NlbGxhbmVvdXMvem9vbS5qcyIsICJzcmMvZWxlbWVudC9jYW1lcmEvZGVzaWduLmpzIiwgInNyYy91dGlsaXRpZXMvcHJlbG9hZC5qcyIsICJzcmMvcHJpbWl0aXZlL25vcm1hbC5qcyIsICJzcmMvcHJpbWl0aXZlL3ZlcnRleC5qcyIsICJzcmMvdXRpbGl0aWVzL2ZhY2V0LmpzIiwgInNyYy9wcmltaXRpdmUvZmFjZXQuanMiLCAic3JjL3ByaW1pdGl2ZS9mYWNldC9jb2xvdXJlZC5qcyIsICJzcmMvZWxlbWVudC9jYW52YXMvY29sb3VyZWQuanMiLCAic3JjL3V0aWxpdGllcy90ZXh0dXJlLmpzIiwgInNyYy9wcmltaXRpdmUvZmFjZXQvdGV4dHVyZWQuanMiLCAic3JjL2VsZW1lbnQvY2FudmFzL3RleHR1cmVkLmpzIiwgInNyYy9pbmRleC5qcyIsICJzcmMvZXhhbXBsZS9lbGVtZW50L2NvbG91cmVkU3F1YXJlLmpzIiwgInNyYy9leGFtcGxlL2VsZW1lbnQvZmFjZS5qcyIsICJzcmMvZXhhbXBsZS9lbGVtZW50L2N1YmUuanMiLCAic3JjL2V4YW1wbGUvY3ViZS5qcyIsICJzcmMvZXhhbXBsZS9lbGVtZW50L3RleHR1cmVkUXVhZHJhbmdsZS5qcyIsICJzcmMvZXhhbXBsZS90aWxpbmcuanMiLCAic3JjL2V4YW1wbGUvc2ltcGxlLmpzIiwgInNyYy9leGFtcGxlL21hc2tpbmcuanMiLCAic3JjL2V4YW1wbGUvZWxlbWVudC90ZXh0dXJlZFRyaWFuZ2xlLmpzIiwgInNyYy9leGFtcGxlL2VsZW1lbnQvc2lkZS5qcyIsICJzcmMvZXhhbXBsZS9lbGVtZW50L3B5cmFtaWQuanMiLCAic3JjL2V4YW1wbGUvcHlyYW1pZC5qcyIsICJzcmMvZXhhbXBsZS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBXRUJHTCA9IFwid2ViZ2xcIjtcbmV4cG9ydCBjb25zdCBXSURUSCA9IFwid2lkdGhcIjtcbmV4cG9ydCBjb25zdCBIRUlHSFQgPSBcImhlaWdodFwiO1xuZXhwb3J0IGNvbnN0IENBTlZBUyA9IFwiY2FudmFzXCI7XG5leHBvcnQgY29uc3QgU1RSSU5HID0gXCJzdHJpbmdcIjtcbmV4cG9ydCBjb25zdCBGVU5DVElPTiA9IFwiZnVuY3Rpb25cIjtcbmV4cG9ydCBjb25zdCBBTk9OWU1PVVMgPSBcImFub255bW91c1wiO1xuZXhwb3J0IGNvbnN0IEdBTUlOR19DQU1FUkEgPSBcImdhbWluZ19jYW1lcmFcIjtcbmV4cG9ydCBjb25zdCBERVNJR05fQ0FNRVJBID0gXCJkZXNpZ25fY2FtZXJhXCI7XG5leHBvcnQgY29uc3QgVkVSVElDRVNfTEVOR1RIID0gMztcbmV4cG9ydCBjb25zdCBNSU5JTVVNX0RJU1RBTkNFID0gMTtcbmV4cG9ydCBjb25zdCBJTlZFUlRfTVVMVElQTElFUiA9IC0xO1xuZXhwb3J0IGNvbnN0IEFOR0xFU19NVUxUSVBMSUVSID0gMC4wMTtcbmV4cG9ydCBjb25zdCBNT1VTRV9XSEVFTF9ERUxUQV9NVUxUSVBMSUVSID0gMC4yNTtcbmV4cG9ydCBjb25zdCBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUiA9IE1hdGguUEkgLyAxODA7XG5leHBvcnQgY29uc3QgRVhUX1RFWFRVUkVfRklMVEVSX0FOSVNPVFJPUElDID0gXCJFWFRfdGV4dHVyZV9maWx0ZXJfYW5pc290cm9waWNcIjtcbmV4cG9ydCBjb25zdCBNT1pfRVhUX1RFWFRVUkVfRklMVEVSX0FOSVNPVFJPUElDID0gXCJNT1pfRVhUX3RleHR1cmVfZmlsdGVyX2FuaXNvdHJvcGljXCI7XG5leHBvcnQgY29uc3QgV0VCS0lUX0VYVF9URVhUVVJFX0ZJTFRFUl9BTklTT1RST1BJQyA9IFwiV0VCS0lUX0VYVF90ZXh0dXJlX2ZpbHRlcl9hbmlzb3Ryb3BpY1wiO1xuZXhwb3J0IGNvbnN0IFJFTEFUSVZFX01PVVNFX0NPT1JESU5BVEVTX01VTFRJUExJRVIgPSAwLjAyNTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFRSQUNFX0xFVkVMID0gXCJ0cmFjZVwiO1xuZXhwb3J0IGNvbnN0IERFQlVHX0xFVkVMID0gXCJkZWJ1Z1wiO1xuZXhwb3J0IGNvbnN0IElORk9fTEVWRUwgPSBcImluZm9cIjtcbmV4cG9ydCBjb25zdCBXQVJOSU5HX0xFVkVMID0gXCJ3YXJuaW5nXCI7XG5leHBvcnQgY29uc3QgRVJST1JfTEVWRUwgPSBcImVycm9yXCI7XG5leHBvcnQgY29uc3QgRkFUQUxfTEVWRUwgPSBcImZhdGFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgVFJBQ0VfTEVWRUwsXG4gIERFQlVHX0xFVkVMLFxuICBJTkZPX0xFVkVMLFxuICBXQVJOSU5HX0xFVkVMLFxuICBFUlJPUl9MRVZFTCxcbiAgRkFUQUxfTEVWRUxcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBHRVRfTUVUSE9EID0gXCJHRVRcIjtcbmV4cG9ydCBjb25zdCBQT1NUX01FVEhPRCA9IFwiUE9TVFwiO1xuZXhwb3J0IGNvbnN0IFBBVENIX01FVEhPRCA9IFwiUEFUQ0hcIjtcbmV4cG9ydCBjb25zdCBERUxFVEVfTUVUSE9EID0gXCJERUxFVEVcIjtcbmV4cG9ydCBjb25zdCBPUFRJT05TX01FVEhPRCA9IFwiT1BUSU9OU1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIEdFVF9NRVRIT0QsXG4gIFBPU1RfTUVUSE9ELFxuICBQQVRDSF9NRVRIT0QsXG4gIERFTEVURV9NRVRIT0QsXG4gIE9QVElPTlNfTUVUSE9EXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgUFJBR01BX0hFQURFUiA9IFwicHJhZ21hXCI7XG5leHBvcnQgY29uc3QgQUNDRVBUX0hFQURFUiA9IFwiYWNjZXB0XCI7XG5leHBvcnQgY29uc3QgTE9DQVRJT05fSEVBREVSID0gXCJsb2NhdGlvblwiO1xuZXhwb3J0IGNvbnN0IFVTRVJfQUdFTlRfSEVBREVSID0gXCJ1c2VyLWFnZW50XCI7XG5leHBvcnQgY29uc3QgQ09OVEVOVF9UWVBFX0hFQURFUiA9IFwiY29udGVudC10eXBlXCI7XG5leHBvcnQgY29uc3QgQVVUSE9SSVpBVElPTl9IRUFERVIgPSBcImF1dGhvcml6YXRpb25cIjtcbmV4cG9ydCBjb25zdCBDQUNIRV9DT05UUk9MX0hFQURFUiA9IFwiY2FjaGUtY29udHJvbFwiO1xuZXhwb3J0IGNvbnN0IENPTlRFTlRfTEVOR1RIX0hFQURFUiA9IFwiY29udGVudC1sZW5ndGhcIjtcbmV4cG9ydCBjb25zdCBUUkFOU0ZFUl9FTkNPRElOR19IRUFERVIgPSBcInRyYW5zZmVyLWVuY29kaW5nXCI7XG5leHBvcnQgY29uc3QgQ09OVEVOVF9ESVNQT1NJVElPTl9IRUFERVIgPSBcImNvbnRlbnQtZGlzcG9zaXRpb25cIjtcbmV4cG9ydCBjb25zdCBBQ0NFU1NfQ09OVFJPTF9BTExPV19PUklHSU5fSEVBREVSID0gXCJhY2Nlc3MtY29udHJvbC1hbGxvdy1vcmlnaW5cIjtcbmV4cG9ydCBjb25zdCBBQ0NFU1NfQ09OVFJPTF9BTExPV19NRVRIT0RTX0hFQURFUiA9IFwiYWNjZXNzLWNvbnRyb2wtYWxsb3ctbWV0aG9kc1wiO1xuZXhwb3J0IGNvbnN0IEFDQ0VTU19DT05UUk9MX0FMTE9XX0hFQURFUlNfSEVBREVSID0gXCJhY2Nlc3MtY29udHJvbC1hbGxvdy1oZWFkZXJzXCI7XG5leHBvcnQgY29uc3QgQUNDRVNTX0NPTlRST0xfUkVRVUVTVF9NRVRIT0RfSEVBREVSID0gXCJhY2Nlc3MtY29udHJvbC1yZXF1ZXN0LW1ldGhvZFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFBSQUdNQV9IRUFERVIsXG4gIEFDQ0VQVF9IRUFERVIsXG4gIExPQ0FUSU9OX0hFQURFUixcbiAgVVNFUl9BR0VOVF9IRUFERVIsXG4gIENPTlRFTlRfVFlQRV9IRUFERVIsXG4gIEFVVEhPUklaQVRJT05fSEVBREVSLFxuICBDQUNIRV9DT05UUk9MX0hFQURFUixcbiAgQ09OVEVOVF9MRU5HVEhfSEVBREVSLFxuICBUUkFOU0ZFUl9FTkNPRElOR19IRUFERVIsXG4gIENPTlRFTlRfRElTUE9TSVRJT05fSEVBREVSLFxuICBBQ0NFU1NfQ09OVFJPTF9BTExPV19PUklHSU5fSEVBREVSLFxuICBBQ0NFU1NfQ09OVFJPTF9BTExPV19NRVRIT0RTX0hFQURFUixcbiAgQUNDRVNTX0NPTlRST0xfQUxMT1dfSEVBREVSU19IRUFERVIsXG4gIEFDQ0VTU19DT05UUk9MX1JFUVVFU1RfTUVUSE9EX0hFQURFUlxufTsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBUQUJfS0VZX0NPREUgPSA5O1xuZXhwb3J0IGNvbnN0IFNISUZUX0tFWV9DT0RFID0gMTY7XG5leHBvcnQgY29uc3QgRU5URVJfS0VZX0NPREUgPSAxMztcbmV4cG9ydCBjb25zdCBFU0NBUEVfS0VZX0NPREUgPSAyNztcbmV4cG9ydCBjb25zdCBERUxFVEVfS0VZX0NPREUgPSA0NjtcbmV4cG9ydCBjb25zdCBCQUNLU1BBQ0VfS0VZX0NPREUgPSA4O1xuZXhwb3J0IGNvbnN0IEFSUk9XX1VQX0tFWV9DT0RFID0gMzg7XG5leHBvcnQgY29uc3QgQVJST1dfRE9XTl9LRVlfQ09ERSA9IDQwO1xuZXhwb3J0IGNvbnN0IEFSUk9XX0xFRlRfS0VZX0NPREUgPSAzNztcbmV4cG9ydCBjb25zdCBBUlJPV19SSUdIVF9LRVlfQ09ERSA9IDM5O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFRBQl9LRVlfQ09ERSxcbiAgU0hJRlRfS0VZX0NPREUsXG4gIEVOVEVSX0tFWV9DT0RFLFxuICBFU0NBUEVfS0VZX0NPREUsXG4gIERFTEVURV9LRVlfQ09ERSxcbiAgQkFDS1NQQUNFX0tFWV9DT0RFLFxuICBBUlJPV19VUF9LRVlfQ09ERSxcbiAgQVJST1dfRE9XTl9LRVlfQ09ERSxcbiAgQVJST1dfTEVGVF9LRVlfQ09ERSxcbiAgQVJST1dfUklHSFRfS0VZX0NPREVcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBVVEY4X0VOQ09ESU5HID0gXCJ1dGY4XCI7XG5leHBvcnQgY29uc3QgVVRGXzhfRU5DT0RJTkcgPSBcInV0Zi04XCI7XG5leHBvcnQgY29uc3QgQkFTRTY0X0VOQ09ESU5HID0gXCJiYXNlNjRcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBVVEY4X0VOQ09ESU5HLFxuICBVVEZfOF9FTkNPRElORyxcbiAgQkFTRTY0X0VOQ09ESU5HXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgQVJSQVlfSlNPTl9UWVBFID0gXCJhcnJheVwiO1xuZXhwb3J0IGNvbnN0IE9CSkVDVF9KU09OX1RZUEUgPSBcIm9iamVjdFwiO1xuZXhwb3J0IGNvbnN0IFNUUklOR19KU09OX1RZUEUgPSBcInN0cmluZ1wiO1xuZXhwb3J0IGNvbnN0IE5VTUJFUl9KU09OX1RZUEUgPSBcIm51bWJlclwiO1xuZXhwb3J0IGNvbnN0IEJPT0xFQU5fSlNPTl9UWVBFID0gXCJib29sZWFuXCI7XG5leHBvcnQgY29uc3QgUFJJTUlUSVZFX0pTT05fVFlQRSA9IFwicHJpbWl0aXZlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgQVJSQVlfSlNPTl9UWVBFLFxuICBPQkpFQ1RfSlNPTl9UWVBFLFxuICBTVFJJTkdfSlNPTl9UWVBFLFxuICBOVU1CRVJfSlNPTl9UWVBFLFxuICBCT09MRUFOX0pTT05fVFlQRSxcbiAgUFJJTUlUSVZFX0pTT05fVFlQRVxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFVQX0NIQVJBQ1RFUiA9IFwiXHUwMDFiW0FcIjtcbmV4cG9ydCBjb25zdCBFVFhfQ0hBUkFDVEVSID0gXCJcXHUwMDAzXCI7XG5leHBvcnQgY29uc3QgQkFSX0NIQVJBQ1RFUiA9IFwifFwiO1xuZXhwb3J0IGNvbnN0IEhBVF9DSEFSQUNURVIgPSBcIl5cIjtcbmV4cG9ydCBjb25zdCBQTFVTX0NIQVJBQ1RFUiA9IFwiK1wiO1xuZXhwb3J0IGNvbnN0IERBU0hfQ0hBUkFDVEVSID0gXCItXCI7XG5leHBvcnQgY29uc3QgRE9XTl9DSEFSQUNURVIgPSBcIlx1MDAxYltCXCI7XG5leHBvcnQgY29uc3QgTEVGVF9DSEFSQUNURVIgPSBcIlx1MDAxYltEXCI7XG5leHBvcnQgY29uc3QgUklHSFRfQ0hBUkFDVEVSID0gXCJcdTAwMWJbQ1wiO1xuZXhwb3J0IGNvbnN0IFNQQUNFX0NIQVJBQ1RFUiA9IFwiIFwiO1xuZXhwb3J0IGNvbnN0IENPTU1BX0NIQVJBQ1RFUiA9IFwiLFwiO1xuZXhwb3J0IGNvbnN0IENPTE9OX0NIQVJBQ1RFUiA9IFwiOlwiO1xuZXhwb3J0IGNvbnN0IFBFUklPRF9DSEFSQUNURVIgPSBcIi5cIjtcbmV4cG9ydCBjb25zdCBET0xMQVJfQ0hBUkFDVEVSID0gXCIkXCI7XG5leHBvcnQgY29uc3QgQ1RSTF9DX0NIQVJBQ1RFUiA9IFwiXkNcIjtcbmV4cG9ydCBjb25zdCBFU0NBUEVfQ0hBUkFDVEVSID0gXCJcXHUwMDFiXCI7XG5leHBvcnQgY29uc3QgQVNURVJJU0tfQ0hBUkFDVEVSID0gXCIqXCI7XG5leHBvcnQgY29uc3QgV0lMRENBUkRfQ0hBUkFDVEVSID0gXCIqXCI7XG5leHBvcnQgY29uc3QgQkFDS1RJQ0tfREVMSU1JVEVSID0gXCJgXCI7XG5leHBvcnQgY29uc3QgTkVXX0xJTkVfQ0hBUkFDVEVSID0gXCJcXG5cIjtcbmV4cG9ydCBjb25zdCBBTVBFUlNBTkRfQ0hBUkFDVEVSID0gXCImXCI7XG5leHBvcnQgY29uc3QgQkFDS1NMQVNIX0NIQVJBQ1RFUiA9IFwiXFxcXFwiO1xuZXhwb3J0IGNvbnN0IEJBQ0tTUEFDRV9DSEFSQUNURVIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDEyNyk7XG5leHBvcnQgY29uc3QgUVVFU1RJT05fTUFSS19DSEFSQUNURVIgPSBcIj9cIjtcbmV4cG9ydCBjb25zdCBGT1JXQVJEX1NMQVNIX0NIQVJBQ1RFUiA9IFwiL1wiO1xuZXhwb3J0IGNvbnN0IE9QRU5JTkdfQlJBQ0tFVF9DSEFSQUNURVIgPSBcIihcIjtcbmV4cG9ydCBjb25zdCBDTE9TSU5HX0JSQUNLRVRfQ0hBUkFDVEVSID0gXCIpXCI7XG5leHBvcnQgY29uc3QgQ0FSUklBR0VfUkVUVVJOX0NIQVJBQ1RFUiA9IFwiXFxyXCI7XG5leHBvcnQgY29uc3QgRVhDTEFNQVRJT05fTUFSS19DSEFSQUNURVIgPSBcIiFcIjtcbmV4cG9ydCBjb25zdCBPUEVOSU5HX0NVUkxZX0JSQUNLRVRfQ0hBUkFDVEVSID0gXCJ7XCI7XG5leHBvcnQgY29uc3QgQ0xPU0lOR19DVVJMWV9CUkFDS0VUX0NIQVJBQ1RFUiA9IFwifVwiO1xuZXhwb3J0IGNvbnN0IE9QRU5JTkdfU1FVQVJFX0JSQUNLRVRfQ0hBUkFDVEVSID0gXCJbXCI7XG5leHBvcnQgY29uc3QgQ0xPU0lOR19TUVVBUkVfQlJBQ0tFVF9DSEFSQUNURVIgPSBcIl1cIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBVUF9DSEFSQUNURVIsXG4gIEVUWF9DSEFSQUNURVIsXG4gIEJBUl9DSEFSQUNURVIsXG4gIEhBVF9DSEFSQUNURVIsXG4gIFBMVVNfQ0hBUkFDVEVSLFxuICBEQVNIX0NIQVJBQ1RFUixcbiAgRE9XTl9DSEFSQUNURVIsXG4gIExFRlRfQ0hBUkFDVEVSLFxuICBSSUdIVF9DSEFSQUNURVIsXG4gIFNQQUNFX0NIQVJBQ1RFUixcbiAgQ09NTUFfQ0hBUkFDVEVSLFxuICBDT0xPTl9DSEFSQUNURVIsXG4gIFBFUklPRF9DSEFSQUNURVIsXG4gIERPTExBUl9DSEFSQUNURVIsXG4gIENUUkxfQ19DSEFSQUNURVIsXG4gIEVTQ0FQRV9DSEFSQUNURVIsXG4gIEFTVEVSSVNLX0NIQVJBQ1RFUixcbiAgV0lMRENBUkRfQ0hBUkFDVEVSLFxuICBCQUNLVElDS19ERUxJTUlURVIsXG4gIE5FV19MSU5FX0NIQVJBQ1RFUixcbiAgQU1QRVJTQU5EX0NIQVJBQ1RFUixcbiAgQkFDS1NMQVNIX0NIQVJBQ1RFUixcbiAgQkFDS1NQQUNFX0NIQVJBQ1RFUixcbiAgUVVFU1RJT05fTUFSS19DSEFSQUNURVIsXG4gIEZPUldBUkRfU0xBU0hfQ0hBUkFDVEVSLFxuICBPUEVOSU5HX0JSQUNLRVRfQ0hBUkFDVEVSLFxuICBDTE9TSU5HX0JSQUNLRVRfQ0hBUkFDVEVSLFxuICBDQVJSSUFHRV9SRVRVUk5fQ0hBUkFDVEVSLFxuICBFWENMQU1BVElPTl9NQVJLX0NIQVJBQ1RFUixcbiAgT1BFTklOR19DVVJMWV9CUkFDS0VUX0NIQVJBQ1RFUixcbiAgQ0xPU0lOR19DVVJMWV9CUkFDS0VUX0NIQVJBQ1RFUixcbiAgT1BFTklOR19TUVVBUkVfQlJBQ0tFVF9DSEFSQUNURVIsXG4gIENMT1NJTkdfU1FVQVJFX0JSQUNLRVRfQ0hBUkFDVEVSXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgWkVST18wX1NUQVRVU19DT0RFID0gMDtcbmV4cG9ydCBjb25zdCBPS18yMDBfU1RBVFVTX0NPREUgPSAyMDA7XG5leHBvcnQgY29uc3QgRk9VTkRfMzAyX1NUQVRVU19DT0RFID0gMzAyO1xuZXhwb3J0IGNvbnN0IENSRUFURURfMjAxX1NUQVRVU19DT0RFID0gMjAxO1xuZXhwb3J0IGNvbnN0IENPTkZMSUNUXzQwOV9TVEFUVVNfQ09ERSA9IDQwOTtcbmV4cG9ydCBjb25zdCBTRUVfT1RIRVJfMzAzX1NUQVRVU19DT0RFID0gMzAzO1xuZXhwb3J0IGNvbnN0IEZPUkJJRERFTl80MDNfU1RBVFVTX0NPREUgPSA0MDM7XG5leHBvcnQgY29uc3QgTk9UX0ZPVU5EXzQwNF9TVEFUVVNfQ09ERSA9IDQwNDtcbmV4cG9ydCBjb25zdCBOT19DT05URU5UXzIwNF9TVEFUVVNfQ09ERSA9IDIwNDtcbmV4cG9ydCBjb25zdCBCQURfR0FURVdBWV81MDJfU1RBVFVTX0NPREUgPSA1MDI7XG5leHBvcnQgY29uc3QgQkFEX1JFUVVFU1RfNDAwX1NUQVRVU19DT0RFID0gNDAwO1xuZXhwb3J0IGNvbnN0IFVOQVVUSE9SSVpFRF80MDFfU1RBVFVTX0NPREUgPSA0MDE7XG5leHBvcnQgY29uc3QgTk9UX0FDQ0VQVEFCTEVfNDA2X1NUQVRVU19DT0RFID0gNDA2O1xuZXhwb3J0IGNvbnN0IFJFUVVFU1RfVElNRU9VVF80MDhfU1RBVFVTX0NPREUgPSA0MDg7XG5leHBvcnQgY29uc3QgVE9PX01BTllfUkVRVUVTVFNfNDI5X1NUQVRVU19DT0RFID0gNDI5O1xuZXhwb3J0IGNvbnN0IE1FVEhPRF9OT1RfQUxMT1dFRF80MDVfU1RBVFVTX0NPREUgPSA0MDU7XG5leHBvcnQgY29uc3QgU0VSVklDRV9VTkFWQUlMQUJMRV81MDNfU1RBVFVTX0NPREUgPSA1MDM7XG5leHBvcnQgY29uc3QgVU5QUk9DRVNTQUJMRV9FTlRJVFlfNDIyX1NUQVRVU19DT0RFID0gNDIyO1xuZXhwb3J0IGNvbnN0IElOVEVSTkFMX1NFUlZFUl9FUlJPUl81MDBfU1RBVFVTX0NPREUgPSA1MDA7XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBaRVJPXzBfU1RBVFVTX0NPREUsXG4gIE9LXzIwMF9TVEFUVVNfQ09ERSxcbiAgRk9VTkRfMzAyX1NUQVRVU19DT0RFLFxuICBDUkVBVEVEXzIwMV9TVEFUVVNfQ09ERSxcbiAgQ09ORkxJQ1RfNDA5X1NUQVRVU19DT0RFLFxuICBTRUVfT1RIRVJfMzAzX1NUQVRVU19DT0RFLFxuICBGT1JCSURERU5fNDAzX1NUQVRVU19DT0RFLFxuICBOT1RfRk9VTkRfNDA0X1NUQVRVU19DT0RFLFxuICBOT19DT05URU5UXzIwNF9TVEFUVVNfQ09ERSxcbiAgQkFEX0dBVEVXQVlfNTAyX1NUQVRVU19DT0RFLFxuICBCQURfUkVRVUVTVF80MDBfU1RBVFVTX0NPREUsXG4gIFVOQVVUSE9SSVpFRF80MDFfU1RBVFVTX0NPREUsXG4gIE5PVF9BQ0NFUFRBQkxFXzQwNl9TVEFUVVNfQ09ERSxcbiAgUkVRVUVTVF9USU1FT1VUXzQwOF9TVEFUVVNfQ09ERSxcbiAgVE9PX01BTllfUkVRVUVTVFNfNDI5X1NUQVRVU19DT0RFLFxuICBNRVRIT0RfTk9UX0FMTE9XRURfNDA1X1NUQVRVU19DT0RFLFxuICBTRVJWSUNFX1VOQVZBSUxBQkxFXzUwM19TVEFUVVNfQ09ERSxcbiAgVU5QUk9DRVNTQUJMRV9FTlRJVFlfNDIyX1NUQVRVU19DT0RFLFxuICBJTlRFUk5BTF9TRVJWRVJfRVJST1JfNTAwX1NUQVRVU19DT0RFXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgVEVYVF9IVE1MX0NPTlRFTlRfVFlQRSA9IFwidGV4dC9odG1sXCI7XG5leHBvcnQgY29uc3QgVEVYVF9QTEFJTl9DT05URU5UX1RZUEUgPSBcInRleHQvcGxhaW5cIjtcbmV4cG9ydCBjb25zdCBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRSA9IFwiYXBwbGljYXRpb24vanNvblwiO1xuZXhwb3J0IGNvbnN0IFRFWFRfSFRNTF9DSEFSU0VUX1VURl84X0NPTlRFTlRfVFlQRSA9IFwidGV4dC9odG1sOyBjaGFyc2V0PXV0Zi04XCI7XG5leHBvcnQgY29uc3QgVEVYVF9QTEFJTl9DSEFSU0VUX1VURl84X0NPTlRFTlRfVFlQRSA9IFwidGV4dC9wbGFpbjsgY2hhcnNldD11dGYtOFwiO1xuZXhwb3J0IGNvbnN0IEFQUExJQ0FUSU9OX09DVEVUX1NUUkVBTV9DT05URU5UX1RZUEUgPSBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiO1xuZXhwb3J0IGNvbnN0IEFQUExJQ0FUSU9OX1hfV1dXX0ZPUk1fRU5DT0RFRF9DT05URU5UX1RZUEUgPSBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiO1xuZXhwb3J0IGNvbnN0IEFQUExJQ0FUSU9OX0pTT05fQ0hBUlNFVF9VVEZfOF9DT05URU5UX1RZUEUgPSBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIjtcbmV4cG9ydCBjb25zdCBBUFBMSUNBVElPTl9YX1dXV19GT1JNX0VOQ09ERURfQ0hBUlNFVF9VVEZfOF9DT05URU5UX1RZUEUgPSBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD11dGYtOFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFRFWFRfSFRNTF9DT05URU5UX1RZUEUsXG4gIFRFWFRfUExBSU5fQ09OVEVOVF9UWVBFLFxuICBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRSxcbiAgVEVYVF9IVE1MX0NIQVJTRVRfVVRGXzhfQ09OVEVOVF9UWVBFLFxuICBURVhUX1BMQUlOX0NIQVJTRVRfVVRGXzhfQ09OVEVOVF9UWVBFLFxuICBBUFBMSUNBVElPTl9PQ1RFVF9TVFJFQU1fQ09OVEVOVF9UWVBFLFxuICBBUFBMSUNBVElPTl9KU09OX0NIQVJTRVRfVVRGXzhfQ09OVEVOVF9UWVBFLFxuICBBUFBMSUNBVElPTl9YX1dXV19GT1JNX0VOQ09ERURfQ09OVEVOVF9UWVBFLFxuICBBUFBMSUNBVElPTl9YX1dXV19GT1JNX0VOQ09ERURfQ0hBUlNFVF9VVEZfOF9DT05URU5UX1RZUEVcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBaRVJPXzBfU1RBVFVTX01FU1NBR0UgPSBcIlwiO1xuZXhwb3J0IGNvbnN0IE9LXzIwMF9TVEFUVVNfTUVTU0FHRSA9IFwiT0tcIjtcbmV4cG9ydCBjb25zdCBGT1VORF8zMDJfU1RBVFVTX01FU1NBR0UgPSBcIkZvdW5kXCI7XG5leHBvcnQgY29uc3QgQ1JFQVRFRF8yMDFfU1RBVFVTX01FU1NBR0UgPSBcIkNyZWF0ZWRcIjtcbmV4cG9ydCBjb25zdCBDT05GTElDVF80MDlfU1RBVFVTX01FU1NBR0UgPSBcIkNvbmZsaWN0XCI7XG5leHBvcnQgY29uc3QgU0VFX09USEVSXzMwM19TVEFUVVNfTUVTU0FHRSA9IFwiU2VlIG90aGVyXCI7XG5leHBvcnQgY29uc3QgRk9SQklEREVOXzQwM19TVEFUVVNfTUVTU0FHRSA9IFwiRm9yYmlkZGVuXCI7XG5leHBvcnQgY29uc3QgTk9UX0ZPVU5EXzQwNF9TVEFUVVNfTUVTU0FHRSA9IFwiTm90IGZvdW5kXCI7XG5leHBvcnQgY29uc3QgTk9fQ09OVEVOVF8yMDRfU1RBVFVTX01FU1NBR0UgPSBcIk5vIGNvbnRlbnRcIjtcbmV4cG9ydCBjb25zdCBCQURfR0FURVdBWV81MDJfU1RBVFVTX01FU1NBR0UgPSBcIkJhZCBnYXRld2F5XCI7XG5leHBvcnQgY29uc3QgQkFEX1JFUVVFU1RfNDAwX1NUQVRVU19NRVNTQUdFID0gXCJCYWQgcmVxdWVzdFwiO1xuZXhwb3J0IGNvbnN0IFVOQVVUSE9SSVpFRF80MDFfU1RBVFVTX01FU1NBR0UgPSBcIlVuYXV0aG9yaXplZFwiO1xuZXhwb3J0IGNvbnN0IE5PVF9BQ0NFUFRBQkxFXzQwNl9TVEFUVVNfTUVTU0FHRSA9IFwiTm90IEFjY2VwdGFibGVcIjtcbmV4cG9ydCBjb25zdCBSRVFVRVNUX1RJTUVPVVRfNDA4X1NUQVRVU19NRVNTQUdFID0gXCJSZXF1ZXN0IHRpbWVvdXRcIjtcbmV4cG9ydCBjb25zdCBUT09fTUFOWV9SRVFVRVNUU180MjlfU1RBVFVTX01FU1NBR0UgPSBcIlRvbyBtYW55IHJlcXVlc3RzXCI7XG5leHBvcnQgY29uc3QgTUVUSE9EX05PVF9BTExPV0VEXzQwNV9TVEFUVVNfTUVTU0FHRSA9IFwiTWV0aG9kIG5vdCBhbGxvd2VkXCI7XG5leHBvcnQgY29uc3QgU0VSVklDRV9VTkFWQUlMQUJMRV81MDNfU1RBVFVTX01FU1NBR0UgPSBcIlNlcnZpY2UgdW5hdmFpbGFibGVcIjtcbmV4cG9ydCBjb25zdCBVTlBST0NFU1NBQkxFX0VOVElUWV80MjJfU1RBVFVTX01FU1NBR0UgPSBcIlVucHJvY2Vzc2FibGUgRW50aXR5XCI7XG5leHBvcnQgY29uc3QgSU5URVJOQUxfU0VSVkVSX0VSUk9SXzUwMF9TVEFUVVNfTUVTU0FHRSA9IFwiSW50ZXJuYWwgc2VydmVyIGVycm9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgWkVST18wX1NUQVRVU19NRVNTQUdFLFxuICBPS18yMDBfU1RBVFVTX01FU1NBR0UsXG4gIEZPVU5EXzMwMl9TVEFUVVNfTUVTU0FHRSxcbiAgQ1JFQVRFRF8yMDFfU1RBVFVTX01FU1NBR0UsXG4gIENPTkZMSUNUXzQwOV9TVEFUVVNfTUVTU0FHRSxcbiAgU0VFX09USEVSXzMwM19TVEFUVVNfTUVTU0FHRSxcbiAgRk9SQklEREVOXzQwM19TVEFUVVNfTUVTU0FHRSxcbiAgTk9UX0ZPVU5EXzQwNF9TVEFUVVNfTUVTU0FHRSxcbiAgTk9fQ09OVEVOVF8yMDRfU1RBVFVTX01FU1NBR0UsXG4gIEJBRF9HQVRFV0FZXzUwMl9TVEFUVVNfTUVTU0FHRSxcbiAgQkFEX1JFUVVFU1RfNDAwX1NUQVRVU19NRVNTQUdFLFxuICBVTkFVVEhPUklaRURfNDAxX1NUQVRVU19NRVNTQUdFLFxuICBOT1RfQUNDRVBUQUJMRV80MDZfU1RBVFVTX01FU1NBR0UsXG4gIFJFUVVFU1RfVElNRU9VVF80MDhfU1RBVFVTX01FU1NBR0UsXG4gIFRPT19NQU5ZX1JFUVVFU1RTXzQyOV9TVEFUVVNfTUVTU0FHRSxcbiAgTUVUSE9EX05PVF9BTExPV0VEXzQwNV9TVEFUVVNfTUVTU0FHRSxcbiAgU0VSVklDRV9VTkFWQUlMQUJMRV81MDNfU1RBVFVTX01FU1NBR0UsXG4gIFVOUFJPQ0VTU0FCTEVfRU5USVRZXzQyMl9TVEFUVVNfTUVTU0FHRSxcbiAgSU5URVJOQUxfU0VSVkVSX0VSUk9SXzUwMF9TVEFUVVNfTUVTU0FHRVxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFpFUk8gPSBcIjBcIjtcbmV4cG9ydCBjb25zdCBEQVRBID0gXCJkYXRhXCI7XG5leHBvcnQgY29uc3QgRVJST1IgPSBcImVycm9yXCI7XG5leHBvcnQgY29uc3QgU1RSSU5HID0gXCJzdHJpbmdcIjtcbmV4cG9ydCBjb25zdCBERUZBVUxUID0gXCJkZWZhdWx0XCI7XG5leHBvcnQgY29uc3QgRlVOQ1RJT04gPSBcImZ1bmN0aW9uXCI7XG5leHBvcnQgY29uc3QgRU5WSVJPTk1FTlQgPSBcIkVOVklST05NRU5UXCI7XG5leHBvcnQgY29uc3QgRU1QVFlfU1RSSU5HID0gXCJcIjtcbmV4cG9ydCBjb25zdCBQQUNLQUdFX0pTT04gPSBcInBhY2thZ2UuanNvblwiO1xuZXhwb3J0IGNvbnN0IE9CSkVDVF9PQkpFQ1QgPSBcIltvYmplY3QgT2JqZWN0XVwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdO31cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoaXJkKGFycmF5KSB7IHJldHVybiBhcnJheVsyXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZm91cnRoKGFycmF5KSB7IHJldHVybiBhcnJheVszXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZmlmdGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzRdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzaXh0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldmVudGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzZdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBlaWdodGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzddOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBuaW50aChhcnJheSkgeyByZXR1cm4gYXJyYXlbOF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlbnRoKGFycmF5KSB7IHJldHVybiBhcnJheVs5XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZmlyc3RMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gc2Vjb25kTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMl07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoaXJkTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gM107IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvdXJ0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDRdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWZ0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDVdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzaXh0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDZdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXZlbnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gN107IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGVpZ2h0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDhdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBuaW50aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDldOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gaGVhZChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMCwgMSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHRhaWwoYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKDEpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZShhcnJheS5sZW5ndGggLSAxKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZnJvbnQoYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKDAsIE1hdGgubWF4KDEsIGFycmF5Lmxlbmd0aCAtIDEpKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gcHVzaChhcnJheUEsIGFycmF5QikgeyBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcnJheUEsIGFycmF5Qik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2hpZnQoYXJyYXlBLCBhcnJheUIpIHsgQXJyYXkucHJvdG90eXBlLnVuc2hpZnQuYXBwbHkoYXJyYXlBLCBhcnJheUIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXQoYXJyYXlBLCBlbGVtZW50T3JBcnJheTIpIHtcbiAgY29uc3QgYXJyYXlCID0gQXJyYXkuaXNBcnJheShlbGVtZW50T3JBcnJheTIpID9cbiAgICAgICAgICAgICAgICAgICBlbGVtZW50T3JBcnJheTIgOlxuICAgICAgICAgICAgICAgICAgICBbIGVsZW1lbnRPckFycmF5MiBdO1xuICBcbiAgcHVzaChhcnJheUEsIGFycmF5Qik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhcihhcnJheSkge1xuICBjb25zdCBzdGFydCA9IDA7XG4gIFxuICByZXR1cm4gYXJyYXkuc3BsaWNlKHN0YXJ0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvcHkoYXJyYXlBLCBhcnJheUIpIHtcbiAgY29uc3Qgc3RhcnQgPSAwLFxuICAgICAgICBkZWxldGVDb3VudCA9IGFycmF5Qi5sZW5ndGg7ICAvLy9cbiAgXG4gIHNwbGljZShhcnJheUEsIHN0YXJ0LCBkZWxldGVDb3VudCwgYXJyYXlCKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlKGFycmF5QSwgYXJyYXlCKSB7IEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFycmF5QSwgYXJyYXlCKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2goYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGxldCBtYXRjaGVzID0gZmFsc2U7XG5cbiAgY29uc3QgYXJyYXlBTGVuZ3RoID0gYXJyYXlBLmxlbmd0aCxcbiAgICAgICAgYXJyYXlCTGVuZ3RoID0gYXJyYXlCLmxlbmd0aDtcblxuICBpZiAoYXJyYXlBTGVuZ3RoID09PSBhcnJheUJMZW5ndGgpIHtcbiAgICBtYXRjaGVzID0gYXJyYXlBLmV2ZXJ5KChlbGVtZW50QSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnRCID0gYXJyYXlCW2luZGV4XSxcbiAgICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnRBLCBlbGVtZW50QiwgaW5kZXgpO1xuXG4gICAgICBpZiAocGFzc2VkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG1hdGNoZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlKGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBsZXQgY291cGxlZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGFycmF5QUxlbmd0aCA9IGFycmF5QS5sZW5ndGgsXG4gICAgICAgIGFycmF5Qkxlbmd0aCA9IGFycmF5Qi5sZW5ndGg7XG5cbiAgaWYgKGFycmF5QUxlbmd0aCA9PT0gYXJyYXlCTGVuZ3RoKSB7XG4gICAgYXJyYXlCID0gWyAgLy8vXG4gICAgICAuLi5hcnJheUJcbiAgICBdO1xuXG4gICAgY291cGxlZCA9IGFycmF5QS5ldmVyeSgoZWxlbWVudEEsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50QiA9IGV4dHJhY3QoYXJyYXlCLCAoZWxlbWVudEIpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudEEsIGVsZW1lbnRCKTtcblxuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pIHx8IG51bGw7XG5cbiAgICAgIGlmIChlbGVtZW50QiAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBjb3VwbGVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29ycmVsYXRlKGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBhcnJheUIgPSBbICAvLy9cbiAgICAuLi5hcnJheUJcbiAgXTtcblxuICBjb25zdCBjb3JyZWxhdGVzID0gYXJyYXlBLmV2ZXJ5KChlbGVtZW50QSkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnRCID0gZXh0cmFjdChhcnJheUIsIChlbGVtZW50QikgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudEEsIGVsZW1lbnRCKTtcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKGVsZW1lbnRCICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjb3JyZWxhdGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZShhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgbGV0IHJlc29sdmVkO1xuXG4gIGFycmF5QSA9IFsgIC8vL1xuICAgIC4uLmFycmF5QVxuICBdO1xuXG4gIGZvciAoOzspIHtcbiAgICBjb25zdCBhcnJheUFMZW5ndGggPSBhcnJheUEubGVuZ3RoO1xuXG4gICAgaWYgKGFycmF5QUxlbmd0aCA9PT0gMCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgbGV0IHJlc29sdmVkID0gZmFsc2U7XG5cbiAgICBhcnJheUEuZm9yRWFjaCgoZWxlbWVudEEpID0+IHtcbiAgICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnRBKTtcblxuICAgICAgaWYgKHBhc3NlZCkge1xuICAgICAgICBjb25zdCBlbGVtZW50QiA9IGVsZW1lbnRBOyAgLy8vXG5cbiAgICAgICAgYXJyYXlCLnB1c2goZWxlbWVudEIpO1xuXG4gICAgICAgIHJlc29sdmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghcmVzb2x2ZWQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGZpbHRlcihhcnJheUEsIChlbGVtZW50QSkgPT4ge1xuICAgICAgY29uc3QgYXJyYXlCSW5jbHVkZXNFbGVtZW50QSA9IGFycmF5Qi5pbmNsdWRlcyhlbGVtZW50QSk7XG5cbiAgICAgIGlmICghYXJyYXlCSW5jbHVkZXNFbGVtZW50QSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGFycmF5QUxlbmd0aCA9IGFycmF5QS5sZW5ndGg7XG5cbiAgcmVzb2x2ZWQgPSAoYXJyYXlBTGVuZ3RoID09PSAwKTtcblxuICByZXR1cm4gcmVzb2x2ZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbmUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGxldCBmb3VuZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3VuZCA9IGZhbHNlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gIGxldCBmb3VuZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgZm91bmQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3VuZCA9IGZhbHNlO1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm91bmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBlbGVtZW50cyA9IFtdO1xuXG4gIGFycmF5LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKGFycmF5KSB7XG4gIGFycmF5ID0gWyAvLy9cbiAgICAuLi5hcnJheVxuICBdO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2UoYXJyYXksIGVsZW1lbnQsIGNhbGxiYWNrKSB7XG4gIGxldCBzdGFydDtcbiAgXG4gIGNvbnN0IGZvdW5kID0gYXJyYXkuc29tZSgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBzdGFydCA9IGluZGV4OyAgLy8vXG4gICAgICBcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIFxuICBpZiAoZm91bmQpIHtcbiAgICBjb25zdCBkZWxldGVDb3VudCA9IDE7XG5cbiAgICBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwbGljZShhcnJheUEsIHN0YXJ0LCBkZWxldGVDb3VudCA9IEluZmluaXR5LCBhcnJheUIgPSBbXSkge1xuICBjb25zdCBhcmdzID0gWyBzdGFydCwgZGVsZXRlQ291bnQsIC4uLmFycmF5QiBdLFxuICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KGFycmF5QSwgYXJncyk7XG5cbiAgcmV0dXJuIGRlbGV0ZWRFbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcihhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgZGVsZXRlZEVsZW1lbnRzID0gW107XG4gIFxuICBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxLFxuICAgICAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICBmaXJzdERlbGV0ZWRFbGVtZW50ID0gZmlyc3QoZGVsZXRlZEVsZW1lbnRzKTtcbiAgICAgIFxuICAgICAgZGVsZXRlZEVsZW1lbnRzLnVuc2hpZnQoZmlyc3REZWxldGVkRWxlbWVudCk7ICAvLy9cbiAgICB9XG4gIH0pO1xuICBcbiAgcmV0dXJuIGRlbGV0ZWRFbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBydW5lKGFycmF5LCBjYWxsYmFjaykge1xuICBsZXQgZGVsZXRlZEVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gIFxuICBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSxcbiAgICAgICAgICAgIGZpcnN0RGVsZXRlZEVsZW1lbnQgPSBmaXJzdChkZWxldGVkRWxlbWVudHMpO1xuICAgICAgXG4gICAgICBkZWxldGVkRWxlbWVudCA9IGZpcnN0RGVsZXRlZEVsZW1lbnQ7ICAvLy9cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbiAgXG4gIHJldHVybiBkZWxldGVkRWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3QoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGxldCBkZWxldGVkRWxlbWVudCA9IHVuZGVmaW5lZDtcblxuICBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMSxcbiAgICAgICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLFxuICAgICAgICAgICAgZmlyc3REZWxldGVkRWxlbWVudCA9IGZpcnN0KGRlbGV0ZWRFbGVtZW50cyk7XG5cbiAgICAgIGRlbGV0ZWRFbGVtZW50ID0gZmlyc3REZWxldGVkRWxlbWVudDsgIC8vL1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkZWxldGVkRWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoKGFycmF5LCBlbGVtZW50LCBjYWxsYmFjaykge1xuICBjb25zdCBmb3VuZCA9IGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuXG4gIGlmIChmb3VuZCkge1xuICAgIGFycmF5LnB1c2goZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZm91bmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wcmVzcyhhcnJheSwgY2FsbGJhY2spIHtcbiAgbGV0IGluZGV4QiA9IDAsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKGluZGV4QiA8IGxlbmd0aCkge1xuICAgIGNvbnN0IGVsZW1lbnRCID0gYXJyYXlbaW5kZXhCXTtcblxuICAgIGZvciAobGV0IGluZGV4QSA9IGxlbmd0aCAtIDE7IGluZGV4QSA+IGluZGV4QjsgaW5kZXhBLS0pIHtcbiAgICAgIGNvbnN0IGVsZW1lbnRBID0gYXJyYXlbaW5kZXhBXSxcbiAgICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnRBLCBlbGVtZW50Qik7XG5cbiAgICAgIGlmICghcGFzc2VkKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXhBLCAvLy9cbiAgICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICAgIGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGluZGV4QisrO1xuXG4gICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lKGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheSA9IFtcbiAgICAuLi5hcnJheUEsXG4gICAgLi4uYXJyYXlCXG4gIF07XG5cbiAgY29tcHJlc3MoYXJyYXksIGNhbGxiYWNrKTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXZlcnNlKGFycmF5KSB7XG4gIGFycmF5ID0gWyAvLy9cbiAgICAuLi5hcnJheVxuICBdLnJldmVyc2UoKTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdWdtZW50KGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBhcnJheUIuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBhcnJheUEucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VwYXJhdGUoYXJyYXksIGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBhcnJheS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIHBhc3NlZCA/XG4gICAgICBhcnJheUEucHVzaChlbGVtZW50KSA6XG4gICAgICAgIGFycmF5Qi5wdXNoKGVsZW1lbnQpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRmluZChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNGaW5kKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgICBcbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNFdmVyeShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRXZlcnkoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNSZWR1Y2UoYXJyYXksIGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgbGV0IHZhbHVlID0gaW5pdGlhbFZhbHVlOyAvLy9cblxuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgdmFsdWUgPSBjYWxsYmFjayh2YWx1ZSwgZWxlbWVudCwgaW5kZXgpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzUmVkdWNlKGFycmF5LCBjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gIGxldCB2YWx1ZSA9IGluaXRpYWxWYWx1ZTsgLy8vXG5cbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgdmFsdWUgPSBjYWxsYmFjayh2YWx1ZSwgZWxlbWVudCwgaW5kZXgpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRmluZEluZGV4KGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gLTE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNGaW5kSW5kZXgoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGZpcnN0LFxuICBzZWNvbmQsXG4gIHRoaXJkLFxuICBmb3VydGgsXG4gIGZpZnRoLFxuICBzaXh0aCxcbiAgc2V2ZW50aCxcbiAgZWlnaHRoLFxuICBuaW50aCxcbiAgZmlyc3RMYXN0LFxuICBzZWNvbmRMYXN0LFxuICB0aGlyZExhc3QsXG4gIGZvdXJ0aExhc3QsXG4gIGZpZnRoTGFzdCxcbiAgc2l4dGhMYXN0LFxuICBzZXZlbnRoTGFzdCxcbiAgZWlnaHRoTGFzdCxcbiAgbmludGhMYXN0LFxuICBsYXN0LFxuICBoZWFkLFxuICB0YWlsLFxuICBiYWNrLFxuICBmcm9udCxcbiAgcHVzaCxcbiAgdW5zaGlmdCxcbiAgY29uY2F0LFxuICBjbGVhcixcbiAgY29weSxcbiAgbWVyZ2UsXG4gIG1hdGNoLFxuICBjb21wYXJlLFxuICBjb3JyZWxhdGUsXG4gIHJlc29sdmUsXG4gIG9uZSxcbiAgZWFjaCxcbiAgZmluZCxcbiAgY2xvbmUsXG4gIHJlcGxhY2UsXG4gIHNwbGljZSxcbiAgZmlsdGVyLFxuICBwcnVuZSxcbiAgZXh0cmFjdCxcbiAgcGF0Y2gsXG4gIGNvbXByZXNzLFxuICBjb21iaW5lLFxuICByZXZlcnNlLFxuICBhdWdtZW50LFxuICBzZXBhcmF0ZSxcbiAgZm9yd2FyZHNGaW5kLFxuICBiYWNrd2FyZHNGaW5kLFxuICBmb3J3YXJkc1NvbWUsXG4gIGJhY2t3YXJkc1NvbWUsXG4gIGZvcndhcmRzRXZlcnksXG4gIGJhY2t3YXJkc0V2ZXJ5LFxuICBmb3J3YXJkc1JlZHVjZSxcbiAgYmFja3dhcmRzUmVkdWNlLFxuICBmb3J3YXJkc0ZvckVhY2gsXG4gIGJhY2t3YXJkc0ZvckVhY2gsXG4gIGZvcndhcmRzRmluZEluZGV4LFxuICBiYWNrd2FyZHNGaW5kSW5kZXhcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQsIGxhc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdGhOYW1lKHBhdGgpIHtcbiAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXlxcLy8sIEVNUFRZX1NUUklORykucmVwbGFjZSgvXFwvJC8sIEVNUFRZX1NUUklORyk7IC8vL1xuXG4gIGNvbnN0IHBhdGhOYW1lID0gKC9cXC8vLnRlc3QocGF0aCkgPT09IGZhbHNlKTtcblxuICByZXR1cm4gcGF0aE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdGhUb3Btb3N0TmFtZShwYXRoKSB7XG4gIGNvbnN0IHBhdGhOYW1lID0gaXNQYXRoTmFtZShwYXRoKSxcbiAgICAgICAgcGF0aEFic29sdXRlUGF0aCA9IGlzUGF0aEFic29sdXRlUGF0aChwYXRoKSxcbiAgICAgICAgcGF0aFRvcG1vc3ROYW1lID0gKHBhdGhOYW1lICYmIHBhdGhBYnNvbHV0ZVBhdGgpO1xuXG4gIHJldHVybiBwYXRoVG9wbW9zdE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdGhSZWxhdGl2ZVBhdGgocGF0aCkge1xuICBjb25zdCBwYXRoUmVsYXRpdmVQYXRoID0gIS9eXFwvLy50ZXN0KHBhdGgpO1xuXG4gIHJldHVybiBwYXRoUmVsYXRpdmVQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXRoQWJzb2x1dGVQYXRoKHBhdGgpIHtcbiAgY29uc3QgcGF0aEFic29sdXRlUGF0aCA9IC9eXFwvLy50ZXN0KHBhdGgpO1xuXG4gIHJldHVybiBwYXRoQWJzb2x1dGVQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUb3Btb3N0TmFtZUluQWJzb2x1dGVQYXRoKHRvcG1vc3ROYW1lLCBhYnNvbHV0ZVBhdGgpIHtcbiAgY29uc3QgcmVnRXhwID0gbmV3IFJlZ0V4cChgXiR7dG9wbW9zdE5hbWV9KD86XFxcXC8uKyk/JGApLFxuICAgICAgICB0b3Btb3N0TmFtZUluQWJzb2x1dGVQYXRoID0gcmVnRXhwLnRlc3QoYWJzb2x1dGVQYXRoKTtcblxuICByZXR1cm4gdG9wbW9zdE5hbWVJbkFic29sdXRlUGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZVBhdGhzKHBhdGgsIHJlbGF0aXZlUGF0aCkge1xuICBsZXQgY29tYmluZWRQYXRoID0gbnVsbDtcblxuICBjb25zdCBwYXRoTmFtZXMgPSBwYXRoLnNwbGl0KC9cXC8vKSxcbiAgICAgICAgcmVsYXRpdmVQYXRoTmFtZXMgPSByZWxhdGl2ZVBhdGguc3BsaXQoL1xcLy8pO1xuXG4gIGxldCBsYXN0UGF0aE5hbWUsXG4gICAgICBmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPSBmaXJzdChyZWxhdGl2ZVBhdGhOYW1lcyk7XG5cbiAgaWYgKGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9PT0gXCIuXCIpIHtcbiAgICByZWxhdGl2ZVBhdGhOYW1lcy5zaGlmdCgpO1xuICB9XG5cbiAgZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID0gZmlyc3QocmVsYXRpdmVQYXRoTmFtZXMpO1xuICBsYXN0UGF0aE5hbWUgPSBsYXN0KHBhdGhOYW1lcyk7XG5cbiAgd2hpbGUgKChmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPT09IFwiLi5cIikgJiYgKGxhc3RQYXRoTmFtZSAhPT0gdW5kZWZpbmVkKSkge1xuICAgIHJlbGF0aXZlUGF0aE5hbWVzLnNoaWZ0KCk7XG4gICAgcGF0aE5hbWVzLnBvcCgpO1xuXG4gICAgZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID0gZmlyc3QocmVsYXRpdmVQYXRoTmFtZXMpO1xuICAgIGxhc3RQYXRoTmFtZSA9IGxhc3QocGF0aE5hbWVzKTtcbiAgfVxuXG4gIGlmIChsYXN0UGF0aE5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGNvbWJpbmVkUGF0aE5hbWVzID0gW10uY29uY2F0KHBhdGhOYW1lcykuY29uY2F0KHJlbGF0aXZlUGF0aE5hbWVzKTtcblxuICAgIGNvbWJpbmVkUGF0aCA9IGNvbWJpbmVkUGF0aE5hbWVzLmpvaW4oXCIvXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNvbWJpbmVkUGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdGVuYXRlUGF0aHMocGF0aCwgcmVsYXRpdmVQYXRoLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgbGV0IGNvbmNhdGVuYXRlZFBhdGg7XG5cbiAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXFwvJC8sIEVNUFRZX1NUUklORyk7ICAvLy9cblxuICBjb25jYXRlbmF0ZWRQYXRoID0gYCR7cGF0aH0vJHtyZWxhdGl2ZVBhdGh9YDtcblxuICBjb25zdCByZW1haW5pbmdBQXJndW1lbnRzTGVuZ3RoID0gcmVtYWluaW5nQXJndW1lbnRzLmxlbmd0aDtcblxuICBpZiAocmVtYWluaW5nQUFyZ3VtZW50c0xlbmd0aCA+IDApIHtcbiAgICBjb25zdCBwYXRoID0gY29uY2F0ZW5hdGVkUGF0aCwgIC8vL1xuICAgICAgICAgIHJlbGF0aXZlUGF0aCA9IHJlbWFpbmluZ0FyZ3VtZW50cy5zaGlmdCgpO1xuXG4gICAgY29uY2F0ZW5hdGVkUGF0aCA9IGNvbmNhdGVuYXRlUGF0aHMocGF0aCwgcmVsYXRpdmVQYXRoLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICB9XG5cbiAgcmV0dXJuIGNvbmNhdGVuYXRlZFBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3R0b21tb3N0TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IGJvdHRvbW1vc3ROYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXi4qXFwvKFteXFwvXStcXC8/KSQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgYm90dG9tbW9zdE5hbWUgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIGJvdHRvbW1vc3ROYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aChwYXRoKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKC4rKVxcL1teXFwvXStcXC8/JC8pLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeVBhdGggPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14oW15cXC9dKylcXC8uKyQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKC4qKVxcL1teXFwvXStcXC8/JC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gc2Vjb25kTWF0Y2g7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL15bXlxcL10rXFwvKC4rKSQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHNlY29uZE1hdGNoO1xuICB9XG5cbiAgcmV0dXJuIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaXNQYXRoTmFtZSxcbiAgaXNQYXRoVG9wbW9zdE5hbWUsXG4gIGlzUGF0aFJlbGF0aXZlUGF0aCxcbiAgaXNQYXRoQWJzb2x1dGVQYXRoLFxuICBpc1RvcG1vc3ROYW1lSW5BYnNvbHV0ZVBhdGgsXG4gIGNvbWJpbmVQYXRocyxcbiAgY29uY2F0ZW5hdGVQYXRocyxcbiAgYm90dG9tbW9zdE5hbWVGcm9tUGF0aCxcbiAgdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aCxcbiAgdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCxcbiAgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoLFxuICBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGhcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE9CSkVDVF9PQkpFQ1QgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBBUlJBWV9KU09OX1RZUEUsXG4gICAgICAgICBPQkpFQ1RfSlNPTl9UWVBFLFxuICAgICAgICAgU1RSSU5HX0pTT05fVFlQRSxcbiAgICAgICAgIE5VTUJFUl9KU09OX1RZUEUsXG4gICAgICAgICBCT09MRUFOX0pTT05fVFlQRSxcbiAgICAgICAgIFBSSU1JVElWRV9KU09OX1RZUEUgfSBmcm9tIFwiLi4vanNvblR5cGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlT2YoanNvbikge1xuICBsZXQgdHlwZTtcblxuICBjb25zdCBhcnJheSA9IGlzQXJyYXkoanNvbiksXG4gICAgICAgIG9iamVjdCA9IGlzT2JqZWN0KGpzb24pLFxuICAgICAgICBwcmltaXRpdmUgPSBpc1ByaW1pdGl2ZShqc29uKTtcblxuICBpZiAoZmFsc2UpIHtcbiAgICAvLy9cbiAgfSBlbHNlIGlmIChhcnJheSkge1xuICAgIHR5cGUgPSBBUlJBWV9KU09OX1RZUEU7XG4gIH0gZWxzZSBpZiAob2JqZWN0KSB7XG4gICAgdHlwZSA9IE9CSkVDVF9KU09OX1RZUEU7XG4gIH0gZWxzZSBpZiAocHJpbWl0aXZlKSB7XG4gICAgdHlwZSA9IFBSSU1JVElWRV9KU09OX1RZUEU7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVsbChqc29uKSB7XG4gIGNvbnN0IF9udWxsID0gKGpzb24gPT09IG51bGwpO1xuXG4gIHJldHVybiBfbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXkoanNvbikge1xuICBjb25zdCBhcnJheSA9IEFycmF5LmlzQXJyYXkoanNvbik7XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QoanNvbikge1xuICBjb25zdCBvYmplY3QgPSAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGpzb24pID09PSBPQkpFQ1RfT0JKRUNUKTtcblxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcoanNvbikge1xuICBjb25zdCBzdHJpbmcgPSAodHlwZW9mIGpzb24gPT09IFNUUklOR19KU09OX1RZUEUpO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlcihqc29uKSB7XG4gIGNvbnN0IG51bWJlciA9ICh0eXBlb2YganNvbiA9PT0gTlVNQkVSX0pTT05fVFlQRSk7XG5cbiAgcmV0dXJuIG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQm9vbGVhbihqc29uKSB7XG4gIGNvbnN0IGJvb2xlYW4gPSAodHlwZW9mIGpzb24gPT09IEJPT0xFQU5fSlNPTl9UWVBFKTtcblxuICByZXR1cm4gYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJpbWl0aXZlKGpzb24pIHtcbiAgY29uc3QgX251bGwgPSBpc051bGwoanNvbiksXG4gICAgICAgIHN0cmluZyA9IGlzU3RyaW5nKGpzb24pLFxuICAgICAgICBudW1iZXIgPSBpc051bWJlcihqc29uKSxcbiAgICAgICAgYm9vbGVhbiA9IGlzQm9vbGVhbihqc29uKSxcbiAgICAgICAgcHJpbWl0aXZlID0gKF9udWxsIHx8IHN0cmluZyB8fCBudW1iZXIgfHwgYm9vbGVhbik7XG5cbiAgcmV0dXJuIHByaW1pdGl2ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICB0eXBlT2YsXG4gIGlzTnVsbCxcbiAgaXNBcnJheSxcbiAgaXNPYmplY3QsXG4gIGlzU3RyaW5nLFxuICBpc051bWJlcixcbiAgaXNCb29sZWFuLFxuICBpc1ByaW1pdGl2ZVxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc2Vjb25kIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgQ09MT05fQ0hBUkFDVEVSLCBBTVBFUlNBTkRfQ0hBUkFDVEVSIH0gZnJvbSBcIi4uL2NoYXJhY3RlcnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG92ZXJ3cml0ZShoZWFkZXJzLCBuYW1lLCB2YWx1ZSkge1xuICBjb25zdCBsb3dlckNhc2VOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICBleGlzdGluZ05hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGVhZGVycyksICAvLy9cbiAgICAgICAgZXhpc3RpbmdOYW1lID0gZXhpc3RpbmdOYW1lcy5maW5kKChleGlzdGluZ05hbWUpID0+IHtcbiAgICAgICAgICBjb25zdCBleGlzdGluZ0xvd2VyQ2FzZU5hbWUgPSBleGlzdGluZ05hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgIGlmIChleGlzdGluZ0xvd2VyQ2FzZU5hbWUgPT09IGxvd2VyQ2FzZU5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkgfHwgbnVsbDtcblxuICBpZiAoZXhpc3RpbmdOYW1lICE9PSBudWxsKSB7XG4gICAgaGVhZGVyc1tleGlzdGluZ05hbWVdID0gdmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuZGVyd3JpdGUoaGVhZGVycywgbmFtZSwgdmFsdWUpIHtcbiAgY29uc3QgbG93ZXJDYXNlTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgZXhpc3RpbmdOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhlYWRlcnMpLCAgLy8vXG4gICAgICAgIGV4aXN0aW5nTmFtZSA9IGV4aXN0aW5nTmFtZXMuZmluZCgoZXhpc3RpbmdOYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgZXhpc3RpbmdMb3dlckNhc2VOYW1lID0gZXhpc3RpbmdOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICBpZiAoZXhpc3RpbmdMb3dlckNhc2VOYW1lID09PSBsb3dlckNhc2VOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pIHx8IG51bGw7XG5cbiAgaWYgKGV4aXN0aW5nTmFtZSA9PT0gbnVsbCkge1xuICAgIGhlYWRlcnNbbmFtZV0gPSB2YWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9ydEZyb21Ib3N0KGhvc3QpIHtcbiAgbGV0IHBvcnQ7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IGhvc3QubWF0Y2goL15odHRwcz86XFwvXFwvKFteXFwvXSspLyksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICBpbmRleCA9IHNlY29uZE1hdGNoLmluZGV4T2YoQ09MT05fQ0hBUkFDVEVSKTtcblxuICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgY29uc3Qgc2VjdXJlID0gc2VjdXJlRnJvbUhvc3QoaG9zdCk7XG5cbiAgICBwb3J0ID0gc2VjdXJlID8gNDQzIDogODA7IC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXggKyAxLFxuICAgICAgICAgIHBvcnRTdHJpbmcgPSBzZWNvbmRNYXRjaC5zdWJzdHJpbmcoc3RhcnQpO1xuXG4gICAgcG9ydCA9IE51bWJlcihwb3J0U3RyaW5nKTtcbiAgfVxuXG4gIHJldHVybiBwb3J0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdXJlRnJvbUhvc3QoaG9zdCkge1xuICBjb25zdCBzZWN1cmUgPSAvXmh0dHBzOlxcL1xcLy8udGVzdChob3N0KTtcblxuICByZXR1cm4gc2VjdXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaG9zdG5hbWVGcm9tSG9zdChob3N0KSB7XG4gIGNvbnN0IG1hdGNoZXMgPSBob3N0Lm1hdGNoKC9eaHR0cHM/OlxcL1xcLyhbXjpcXC9dKykvKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgIGhvc3RuYW1lID0gc2Vjb25kTWF0Y2g7IC8vL1xuXG4gIHJldHVybiBob3N0bmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5U3RyaW5nRnJvbVF1ZXJ5KHF1ZXJ5KSB7XG4gIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMocXVlcnkpLFxuICAgICAgICBuYW1lc0xlbmd0aCA9IG5hbWVzLmxlbmd0aCxcbiAgICAgICAgbGFzdEluZGV4ID0gbmFtZXNMZW5ndGggLSAxLFxuICAgICAgICBxdWVyeVN0cmluZyA9IG5hbWVzLnJlZHVjZSgocXVlcnlTdHJpbmcsIG5hbWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBxdWVyeVtuYW1lXSxcbiAgICAgICAgICAgICAgICBlbmNvZGVkTmFtZSA9IGVuY29kZVVSSUNvbXBvbmVudChuYW1lKSxcbiAgICAgICAgICAgICAgICBlbmNvZGVkVmFsdWUgPSBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpLFxuICAgICAgICAgICAgICAgIGFtcGVyc2FuZE9yTm90aGluZyA9IChpbmRleCAhPT0gbGFzdEluZGV4KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBTVBFUlNBTkRfQ0hBUkFDVEVSIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HO1xuICBcbiAgICAgICAgICBxdWVyeVN0cmluZyArPSBgJHtlbmNvZGVkTmFtZX09JHtlbmNvZGVkVmFsdWV9JHthbXBlcnNhbmRPck5vdGhpbmd9YDtcbiAgXG4gICAgICAgICAgcmV0dXJuIHF1ZXJ5U3RyaW5nO1xuICAgICAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBxdWVyeVN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybEZyb21Ib3N0VVJJQW5kUXVlcnkoaG9zdCwgdXJpLCBxdWVyeSkge1xuICBjb25zdCBxdWVyeVN0cmluZyA9IHF1ZXJ5U3RyaW5nRnJvbVF1ZXJ5KHF1ZXJ5KSxcbiAgICAgICAgdXJsID0gKHF1ZXJ5U3RyaW5nID09PSBFTVBUWV9TVFJJTkcpID9cbiAgICAgICAgICAgICAgICBgJHtob3N0fSR7dXJpfWAgOlxuICAgICAgICAgICAgICAgICAgYCR7aG9zdH0ke3VyaX0/JHtxdWVyeVN0cmluZ31gO1xuXG4gIHJldHVybiB1cmw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgb3ZlcndyaXRlLFxuICB1bmRlcndyaXRlLFxuICBwb3J0RnJvbUhvc3QsXG4gIHNlY3VyZUZyb21Ib3N0LFxuICBob3N0bmFtZUZyb21Ib3N0LFxuICBxdWVyeVN0cmluZ0Zyb21RdWVyeSxcbiAgdXJsRnJvbUhvc3RVUklBbmRRdWVyeVxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmxlbihzdHJpbmcpIHtcbiAgbGV0IGxlbmd0aCA9IDA7XG5cbiAgZm9yIChjb25zdCBfIG9mIHN0cmluZykge1xuICAgIGxlbmd0aCsrO1xuICB9XG5cbiAgcmV0dXJuIGxlbmd0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmNtcChzdHJpbmdBLCBzdHJpbmdCKSB7XG4gIGxldCBkaWZmZXJlbmNlID0gMDtcblxuICBsZXQgbmFpdmVJbmRleEEgPSAwLFxuICAgICAgbmFpdmVJbmRleEIgPSAwO1xuXG4gIGNvbnN0IHN0cmluZ0FOYWl2ZUxlbmd0aCA9IHN0cmluZ0EubGVuZ3RoLFxuICAgICAgICBzdHJpbmdCTmFpdmVMZW5ndGggPSBzdHJpbmdCLmxlbmd0aDtcblxuICB3aGlsZSAoKG5haXZlSW5kZXhBIDwgc3RyaW5nQU5haXZlTGVuZ3RoKSB8fCAobmFpdmVJbmRleEIgPCBzdHJpbmdCTmFpdmVMZW5ndGgpKSB7XG4gICAgY29uc3QgY29kZVBvaW50QSA9IChuYWl2ZUluZGV4QSA8IHN0cmluZ0FOYWl2ZUxlbmd0aCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZ0EuY29kZVBvaW50QXQobmFpdmVJbmRleEEpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgY29kZVBvaW50QiA9IChuYWl2ZUluZGV4QiA8IHN0cmluZ0JOYWl2ZUxlbmd0aCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZ0IuY29kZVBvaW50QXQobmFpdmVJbmRleEIpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDA7XG5cbiAgICBkaWZmZXJlbmNlID0gKGNvZGVQb2ludEEgLSBjb2RlUG9pbnRCKTtcblxuICAgIGlmIChkaWZmZXJlbmNlICE9PSAwKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBuYWl2ZUluZGV4QSArPSAoY29kZVBvaW50QSA+IDB4RkZGRikgP1xuICAgICAgICAgICAgICAgIDIgOlxuICAgICAgICAgICAgICAgICAgMTtcblxuICAgIG5haXZlSW5kZXhCICs9IChjb2RlUG9pbnRCID4gMHhGRkZGKSA/XG4gICAgICAgICAgICAgICAgMiA6XG4gICAgICAgICAgICAgICAgICAxO1xuICB9XG5cbiAgcmV0dXJuIGRpZmZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmRleE9mKHN0cmluZywgc2VhcmNoU3RyaW5nKSB7XG4gIGxldCBpbmRleCA9IC0xO1xuXG4gIGNvbnN0IHNlYXJjaFN0cmluZ0xlbmd0aCA9IHNlYXJjaFN0cmluZy5sZW5ndGg7XG5cbiAgaWYgKHNlYXJjaFN0cmluZ0xlbmd0aCA+IDApIHtcbiAgICBjb25zdCBvdXRlck5haXZlSW5kZXggPSBzdHJpbmcuaW5kZXhPZihzZWFyY2hTdHJpbmcpO1xuXG4gICAgaWYgKG91dGVyTmFpdmVJbmRleCA+IC0xKSB7XG4gICAgICBpbmRleCA9IDA7XG5cbiAgICAgIGxldCBpbm5lck5haXZlSW5kZXggPSAwO1xuXG4gICAgICB3aGlsZSAoaW5uZXJOYWl2ZUluZGV4IDwgb3V0ZXJOYWl2ZUluZGV4KSB7XG4gICAgICAgIGNvbnN0IGNoYXJDb2RlID0gc3RyaW5nLmNoYXJDb2RlQXQoaW5uZXJOYWl2ZUluZGV4KTtcblxuICAgICAgICBpbm5lck5haXZlSW5kZXggKz0gKChjaGFyQ29kZSA+PSAweEQ4MDApICYmIChjaGFyQ29kZSA8PSAweERCRkYpKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDE7XG5cbiAgICAgICAgaW5kZXgrKztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW5kZXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzdHJpbmcoc3RyaW5nLCBzdGFydCwgZW5kID0gSW5maW5pdHkpIHtcbiAgY29uc3Qgc3RyaW5nTmFpdmVMZW5ndGggPSBzdHJpbmcubGVuZ3RoO1xuXG4gIGxldCBpbmRleCA9IDAsXG4gICAgICBuYWl2ZUluZGV4ID0gMCxcbiAgICAgIG5haXZlU3RhcnQgPSBzdHJpbmdOYWl2ZUxlbmd0aCwgLy8vXG4gICAgICBuYWl2ZUVuZCA9IHN0cmluZ05haXZlTGVuZ3RoOyAvLy9cblxuICB3aGlsZSAobmFpdmVJbmRleCA8IHN0cmluZ05haXZlTGVuZ3RoKSB7XG4gICAgaWYgKGluZGV4ID09PSBzdGFydCkge1xuICAgICAgbmFpdmVTdGFydCA9IG5haXZlSW5kZXg7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAoaW5kZXggPT09IGVuZCkge1xuICAgICAgbmFpdmVFbmQgPSBuYWl2ZUluZGV4OyAgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNvbnN0IGNoYXJDb2RlID0gc3RyaW5nLmNoYXJDb2RlQXQobmFpdmVJbmRleCk7XG5cbiAgICBuYWl2ZUluZGV4ICs9ICgoY2hhckNvZGUgPj0gMHhEODAwKSAmJiAoY2hhckNvZGUgPD0gMHhEQkZGKSkgP1xuICAgICAgICAgICAgICAgICAgICAyIDpcbiAgICAgICAgICAgICAgICAgICAgICAxO1xuXG4gICAgaW5kZXgrKztcbiAgfVxuXG4gIGlmIChpbmRleCA9PT0gc3RhcnQpIHtcbiAgICBuYWl2ZVN0YXJ0ID0gbmFpdmVJbmRleDsgIC8vL1xuICB9XG5cbiAgaWYgKGluZGV4ID09PSBlbmQpIHtcbiAgICBuYWl2ZUVuZCA9IG5haXZlSW5kZXg7ICAvLy9cbiAgfVxuXG4gIGNvbnN0IHN1YnN0cmluZyA9IHN0cmluZy5zdWJzdHJpbmcobmFpdmVTdGFydCwgbmFpdmVFbmQpO1xuXG4gIHJldHVybiBzdWJzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZ1VwcGVyQ2FzZShzdHJpbmcpIHtcbiAgY29uc3QgdXBwZXJDYXNlU3RyaW5nID0gc3RyaW5nLnRvVXBwZXJDYXNlKCksXG4gICAgICAgIHN0cmluZ1VwcGVyQ2FzZSA9IChzdHJpbmcgPT09IHVwcGVyQ2FzZVN0cmluZyk7XG5cbiAgcmV0dXJuIHN0cmluZ1VwcGVyQ2FzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBzdHJjbXAsXG4gIHN0cmxlbixcbiAgaW5kZXhPZixcbiAgc3Vic3RyaW5nLFxuICBpc1N0cmluZ1VwcGVyQ2FzZVxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1pZ3JhdGUoanNvbiwgbWlncmF0aW9uTWFwLCBsYXRlc3RWZXJzaW9uKSB7XG4gIGxldCB7IHZlcnNpb24gfSA9IGpzb247XG5cbiAgd2hpbGUgKHZlcnNpb24gIT09IGxhdGVzdFZlcnNpb24pIHtcbiAgICBjb25zdCBtaWdyYXRlRnVuY3Rpb24gPSBtaWdyYXRpb25NYXBbdmVyc2lvbl07XG5cbiAgICBqc29uID0gbWlncmF0ZUZ1bmN0aW9uKGpzb24pO1xuXG4gICAgKHsgdmVyc2lvbiB9ID0ganNvbik7XG4gIH1cblxuICByZXR1cm4ganNvbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBtaWdyYXRlXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdoaWxzdChvcGVyYXRpb24sIGRvbmUsIGNvbnRleHQpIHtcclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgaW5kZXggPSBjb3VudDsgIC8vL1xyXG5cclxuICAgIG9wZXJhdGlvbihuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JFYWNoKGFycmF5LCBvcGVyYXRpb24sIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICAgIG9wZXJhdGlvbihlbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXF1ZW5jZShvcGVyYXRpb25zLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gb3BlcmF0aW9ucy5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgb3BlcmF0aW9uID0gb3BlcmF0aW9uc1tpbmRleF07XHJcblxyXG4gICAgICBvcGVyYXRpb24obmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXZlbnR1YWxseShvcGVyYXRpb25zLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gb3BlcmF0aW9ucy5sZW5ndGg7ICAvLy9cclxuXHJcbiAgaWYgKGxlbmd0aCA9PT0gMCkge1xyXG4gICAgZG9uZSgpO1xyXG5cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGxldCBjb3VudCA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9wZXJhdGlvbnMuZm9yRWFjaCgob3BlcmF0aW9uLCBpbmRleCkgPT4ge1xyXG4gICAgb3BlcmF0aW9uKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGVhdGVkbHkob3BlcmF0aW9uLCBsZW5ndGgsIGRvbmUsIGNvbnRleHQpIHtcclxuICBpZiAobGVuZ3RoID09PSAwKSB7XHJcbiAgICBkb25lKCk7XHJcblxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgbGV0IGNvdW50ID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgb3BlcmF0aW9uKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0ZvckVhY2goYXJyYXksIG9wZXJhdGlvbiwgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgb3BlcmF0aW9uKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIG9wZXJhdGlvbiwgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSBsZW5ndGg7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudC0tO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gLTEpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgb3BlcmF0aW9uKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHdoaWxzdCxcclxuICBmb3JFYWNoLFxyXG4gIHNlcXVlbmNlLFxyXG4gIGV2ZW50dWFsbHksXHJcbiAgcmVwZWF0ZWRseSxcclxuICBmb3J3YXJkc0ZvckVhY2gsXHJcbiAgYmFja3dhcmRzRm9yRWFjaFxyXG59O1xyXG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNUUklORywgRlVOQ1RJT04gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBHRVRfTUVUSE9ELCBQT1NUX01FVEhPRCB9IGZyb20gXCIuLi9tZXRob2RzXCI7XG5pbXBvcnQgeyBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRSB9IGZyb20gXCIuLi9jb250ZW50VHlwZXNcIjtcbmltcG9ydCB7IEFDQ0VQVF9IRUFERVIsIENPTlRFTlRfVFlQRV9IRUFERVIgfSBmcm9tIFwiLi4vaGVhZGVyc1wiO1xuaW1wb3J0IHsgdW5kZXJ3cml0ZSwgdXJsRnJvbUhvc3RVUklBbmRRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvaHR0cFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0KGhvc3QsIHVyaSwgcXVlcnksIGhlYWRlcnMsIHJlc3BvbnNlVHlwZSwgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBoZWFkZXJzID09PSBGVU5DVElPTikge1xuICAgIGNhbGxiYWNrID0gaGVhZGVyczsgLy8vXG5cbiAgICByZXNwb25zZVR5cGUgPSBudWxsO1xuXG4gICAgaGVhZGVycyA9IHt9O1xuICB9XG5cbiAgaWYgKHR5cGVvZiByZXNwb25zZVR5cGUgPT09IEZVTkNUSU9OKSB7XG4gICAgY2FsbGJhY2sgPSByZXNwb25zZVR5cGU7ICAvLy9cblxuICAgIGlmICh0eXBlb2YgaGVhZGVycyA9PT0gU1RSSU5HKSB7XG4gICAgICByZXNwb25zZVR5cGUgPSBoZWFkZXJzOyAvLy9cblxuICAgICAgaGVhZGVycyA9IHt9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNwb25zZVR5cGUgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgY29uc3QgbWV0aG9kID0gR0VUX01FVEhPRCxcbiAgICAgICAgYWNjZXB0ID0gQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUsXG4gICAgICAgIGNvbnRlbnQgPSBudWxsO1xuXG4gIHVuZGVyd3JpdGVBY2NlcHRIZWFkZXIoaGVhZGVycywgYWNjZXB0KTtcblxuICByZXF1ZXN0KGhvc3QsIHVyaSwgcXVlcnksIG1ldGhvZCwgY29udGVudCwgaGVhZGVycywgcmVzcG9uc2VUeXBlLCBjYWxsYmFjayk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3N0KGhvc3QsIHVyaSwgcXVlcnksIGNvbnRlbnQsIGhlYWRlcnMsIHJlc3BvbnNlVHlwZSwgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBoZWFkZXJzID09PSBGVU5DVElPTikge1xuICAgIGNhbGxiYWNrID0gaGVhZGVyczsgLy8vXG5cbiAgICByZXNwb25zZVR5cGUgPSBudWxsO1xuXG4gICAgaGVhZGVycyA9IHt9O1xuICB9XG5cbiAgaWYgKHR5cGVvZiByZXNwb25zZVR5cGUgPT09IEZVTkNUSU9OKSB7XG4gICAgY2FsbGJhY2sgPSByZXNwb25zZVR5cGU7ICAvLy9cblxuICAgIGlmICh0eXBlb2YgaGVhZGVycyA9PT0gU1RSSU5HKSB7XG4gICAgICByZXNwb25zZVR5cGUgPSBoZWFkZXJzOyAvLy9cblxuICAgICAgaGVhZGVycyA9IHt9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNwb25zZVR5cGUgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgY29uc3QgbWV0aG9kID0gUE9TVF9NRVRIT0QsXG4gICAgICAgIGFjY2VwdCA9IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFLFxuICAgICAgICBjb250ZW50VHlwZSA9IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFO1xuXG4gIHVuZGVyd3JpdGVBY2NlcHRIZWFkZXIoaGVhZGVycywgYWNjZXB0KTtcblxuICB1bmRlcndyaXRlQ29udGVudFR5cGVIZWFkZXIoaGVhZGVycywgY29udGVudFR5cGUpO1xuXG4gIHJlcXVlc3QoaG9zdCwgdXJpLCBxdWVyeSwgbWV0aG9kLCBjb250ZW50LCBoZWFkZXJzLCByZXNwb25zZVR5cGUsIGNhbGxiYWNrKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3QoaG9zdCwgdXJpLCBxdWVyeSwgbWV0aG9kLCBjb250ZW50LCBoZWFkZXJzLCByZXNwb25zZVR5cGUsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHVybCA9IHVybEZyb21Ib3N0VVJJQW5kUXVlcnkoaG9zdCwgdXJpLCBxdWVyeSksXG4gICAgICAgIGFjY2VwdCA9IGhlYWRlcnNbQUNDRVBUX0hFQURFUl0gfHwgbnVsbCxcbiAgICAgICAgY29udGVudFR5cGUgPSBoZWFkZXJzW0NPTlRFTlRfVFlQRV9IRUFERVJdIHx8IG51bGwsXG4gICAgICAgIHhtbEh0dHBSZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgaWYgKGNvbnRlbnRUeXBlID09PSBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRSkge1xuICAgIGNvbnN0IGpzb24gPSBjb250ZW50LCAgLy8vXG4gICAgICAgICAganNvblN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGpzb24pO1xuXG4gICAgY29udGVudCA9IGpzb25TdHJpbmc7ICAvLy9cbiAgfVxuXG4gIGlmIChyZXNwb25zZVR5cGUgIT09IG51bGwpIHtcbiAgICBPYmplY3QuYXNzaWduKHhtbEh0dHBSZXF1ZXN0LCB7XG4gICAgICByZXNwb25zZVR5cGVcbiAgICB9KTtcbiAgfVxuXG4gIHhtbEh0dHBSZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IHJlYWR5U3RhdGUsIHN0YXR1cywgcmVzcG9uc2UgfSA9IHhtbEh0dHBSZXF1ZXN0LFxuICAgICAgICAgIHN0YXR1c0NvZGUgPSBzdGF0dXM7XG5cbiAgICBpZiAocmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICBsZXQgY29udGVudCA9IHJlc3BvbnNlO1xuXG4gICAgICBpZiAoYWNjZXB0ID09PSBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGpzb25TdHJpbmcgPSBjb250ZW50LCAgLy8vXG4gICAgICAgICAgICAgICAganNvbiA9IEpTT04ucGFyc2UoanNvblN0cmluZyk7XG5cbiAgICAgICAgICBjb250ZW50ID0ganNvbjsgIC8vL1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnRlbnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNhbGxiYWNrKGNvbnRlbnQsIHN0YXR1c0NvZGUpO1xuICAgIH1cbiAgfTtcblxuICB4bWxIdHRwUmVxdWVzdC5vcGVuKG1ldGhvZCwgdXJsKTtcblxuICBpZiAoYWNjZXB0ICE9PSBudWxsKSB7XG4gICAgeG1sSHR0cFJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihBQ0NFUFRfSEVBREVSLCBhY2NlcHQpO1xuICB9XG5cbiAgaWYgKGNvbnRlbnRUeXBlICE9PSBudWxsKSB7XG4gICAgeG1sSHR0cFJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihDT05URU5UX1RZUEVfSEVBREVSLCBjb250ZW50VHlwZSk7XG4gIH1cblxuICAoY29udGVudCAhPT0gbnVsbCkgP1xuICAgIHhtbEh0dHBSZXF1ZXN0LnNlbmQoY29udGVudCkgOlxuICAgICAgeG1sSHR0cFJlcXVlc3Quc2VuZCgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldCxcbiAgcG9zdCxcbiAgcmVxdWVzdFxufVxuXG5mdW5jdGlvbiB1bmRlcndyaXRlQWNjZXB0SGVhZGVyKGhlYWRlcnMsIGFjY2VwdCkge1xuICBjb25zdCBuYW1lID0gQUNDRVBUX0hFQURFUiwgIC8vL1xuICAgICAgICB2YWx1ZSA9IGFjY2VwdDsgLy8vXG5cbiAgdW5kZXJ3cml0ZShoZWFkZXJzLCBuYW1lLCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHVuZGVyd3JpdGVDb250ZW50VHlwZUhlYWRlcihoZWFkZXJzLCBjb250ZW50VFlwZSkge1xuICBjb25zdCBuYW1lID0gQ09OVEVOVF9UWVBFX0hFQURFUiwgIC8vL1xuICAgICAgICB2YWx1ZSA9IGNvbnRlbnRUWXBlOyAvLy9cblxuICB1bmRlcndyaXRlKGhlYWRlcnMsIG5hbWUsIHZhbHVlKTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBsZXZlbHMgfSBmcm9tIFwiLi9sZXZlbHNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWV0aG9kcyB9IGZyb20gXCIuL21ldGhvZHNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaGVhZGVycyB9IGZyb20gXCIuL2hlYWRlcnNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMga2V5Q29kZXMgfSBmcm9tIFwiLi9rZXlDb2Rlc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBlbmNvZGluZ3MgfSBmcm9tIFwiLi9lbmNvZGluZ3NcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMganNvblR5cGVzIH0gZnJvbSBcIi4vanNvblR5cGVzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNoYXJhY3RlcnMgfSBmcm9tIFwiLi9jaGFyYWN0ZXJzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHN0YXR1c0NvZGVzIH0gZnJvbSBcIi4vc3RhdHVzQ29kZXNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29udGVudFR5cGVzIH0gZnJvbSBcIi4vY29udGVudFR5cGVzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHN0YXR1c01lc3NhZ2VzIH0gZnJvbSBcIi4vc3RhdHVzTWVzc2FnZXNcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBwYXRoVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BhdGhcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMganNvblV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9qc29uXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGh0dHBVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvaHR0cFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzdHJpbmdVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHZlcnNpb25VdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvdmVyc2lvblwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXN5bmNocm9ub3VzXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWpheFV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9hamF4XCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5leHBvcnQgY29uc3QgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCwgZm91cnRoLCBwdXNoLCBzZXBhcmF0ZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQoYXJyYXlBLCBhcnJheUIpIHtcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXlCLmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudEIgPSBhcnJheUJbaW5kZXhdO1xuXG4gICAgYXJyYXlBLnB1c2goZWxlbWVudEIpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwZXJtdXRlKGFycmF5LCBwbGFjZXMpIHtcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgICBjdXQgPSBsZW5ndGggLSBwbGFjZXMsXG4gICAgICAgIGxlYWRpbmdFbGVtZW50cyA9IGFycmF5LnNsaWNlKDAsIGN1dCksXG4gICAgICAgIHRyYWlsaW5nRWxlbWVudHMgPSBhcnJheS5zbGljZShjdXQpO1xuXG4gIGFycmF5ID0gWyAuLi50cmFpbGluZ0VsZW1lbnRzLCAuLi5sZWFkaW5nRWxlbWVudHMgXTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuKGFycmF5cykge1xuICByZXR1cm4gYXJyYXlzLnJlZHVjZSgoZWxlbWVudHMsIGFycmF5KSA9PiB7XG4gICAgZWxlbWVudHMgPSBlbGVtZW50cy5jb25jYXQoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xuICB9LCBbXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBndWFyYW50ZWUoYXJyYXlPckVsZW1lbnQpIHtcbiAgYXJyYXlPckVsZW1lbnQgPSBhcnJheU9yRWxlbWVudCB8fCBbXTtcblxuICByZXR1cm4gQXJyYXkuaXNBcnJheShhcnJheU9yRWxlbWVudCkgP1xuICAgICAgICAgICBhcnJheU9yRWxlbWVudCA6XG4gICAgICAgICAgICBbIGFycmF5T3JFbGVtZW50IF07XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEZVTkNUSU9OIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmltcG9ydCB7IGd1YXJhbnRlZSB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbGVtZW50IHtcbiAgZ2V0UHJvcGVydGllcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wZXJ0aWVzO1xuICB9XG5cbiAgZ2V0Q2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgfVxuXG4gIHNldENoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cykge1xuICAgIHRoaXMuY2hpbGRFbGVtZW50cyA9IGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBuZXcgQ2xhc3MoLi4ucmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gKHR5cGVvZiBlbGVtZW50LmNoaWxkRWxlbWVudHMgPT09IEZVTkNUSU9OKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3VhcmFudGVlKGVsZW1lbnQuY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllcy5jaGlsZEVsZW1lbnRzIHx8IFtdO1xuXG4gICAgZWxlbWVudC5zZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuXG4gICAgZWxlbWVudC5zZXRDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHplcm8yKCkge1xuICByZXR1cm4gKFtcblxuICAgIDAsXG4gICAgMCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHplcm8zKCkge1xuICByZXR1cm4gKFtcblxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gemVybzQoKSB7XG4gIHJldHVybiAoW1xuXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlbmd0aDIodmVjdG9yKSB7XG4gIGNvbnN0IFsgeCwgeSBdID0gdmVjdG9yO1xuXG4gIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW5ndGgzKHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHksIHogXSA9IHZlY3RvcjtcblxuICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW5ndGg0KHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHksIHosIHcgXSA9IHZlY3RvcjtcblxuICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeiArIHcgKiB3KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvdDIodmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBbIGEwLCBhMSBdID0gdmVjdG9yQSxcbiAgICAgICAgWyBiMCwgYjEgXSA9IHZlY3RvckI7XG5cbiAgcmV0dXJuIChhMCAqIGIwICsgYTEgKiBiMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb3QzKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgY29uc3QgWyBhMCwgYTEsIGEyIF0gPSB2ZWN0b3JBLFxuICAgICAgICBbIGIwLCBiMSwgYjIgXSA9IHZlY3RvckI7XG5cbiAgcmV0dXJuIChhMCAqIGIwICsgYTEgKiBiMSArIGEyICogYjIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG90NCh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIGNvbnN0IFsgYTAsIGExLCBhMiwgYTMgXSA9IHZlY3RvckEsXG4gICAgICAgIFsgYjAsIGIxLCBiMiwgYjMgXSA9IHZlY3RvckI7XG5cbiAgcmV0dXJuIChhMCAqIGIwICsgYTEgKiBiMSArIGEyICogYjIgKyBhMyAqIGIzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyb3NzMyh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIGNvbnN0IFsgYTAsIGExLCBhMiBdID0gdmVjdG9yQSxcbiAgICAgICAgWyBiMCwgYjEsIGIyIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTEgKiBiMiAtIGEyICogYjEsXG4gICAgYTIgKiBiMCAtIGEwICogYjIsXG4gICAgYTAgKiBiMSAtIGExICogYjAsXG5cbiAgXSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGlzZTIodmVjdG9yKSB7XG4gIGNvbnN0IFsgeCwgeSBdID0gdmVjdG9yLFxuXG4gICAgICAgIGxlbmd0aCA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcblxuICByZXR1cm4gKFtcblxuICAgIHggLyBsZW5ndGgsXG4gICAgeSAvIGxlbmd0aCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGlzZTModmVjdG9yKSB7XG4gIGNvbnN0IFsgeCwgeSwgeiBdID0gdmVjdG9yLFxuXG4gICAgICAgIGxlbmd0aCA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHopO1xuXG4gIHJldHVybiAoW1xuXG4gICAgeCAvIGxlbmd0aCxcbiAgICB5IC8gbGVuZ3RoLFxuICAgIHogLyBsZW5ndGgsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpc2U0KHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHksIHosIHcgXSA9IHZlY3RvcixcblxuICAgICAgICBsZW5ndGggPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6ICsgdyAqIHcpO1xuXG4gIHJldHVybiAoW1xuXG4gICAgeCAvIGxlbmd0aCxcbiAgICB5IC8gbGVuZ3RoLFxuICAgIHogLyBsZW5ndGgsXG4gICAgdyAvIGxlbmd0aCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmxlY3QyKHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHkgXSA9IHZlY3RvcjtcblxuICByZXR1cm4gKFtcblxuICAgIC14LFxuICAgIC15LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmbGVjdDModmVjdG9yKSB7XG4gIGNvbnN0IFsgeCwgeSwgeiBdID0gdmVjdG9yO1xuXG4gIHJldHVybiAoW1xuXG4gICAgLXgsXG4gICAgLXksXG4gICAgLXosXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZsZWN0NCh2ZWN0b3IpIHtcbiAgY29uc3QgWyB4LCB5LCB6LCB3IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIChbXG5cbiAgICAteCxcbiAgICAteSxcbiAgICAteixcbiAgICAtdyxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRydW5jYXRlNCh2ZWN0b3IpIHtcbiAgY29uc3QgWyB4LCB5LCB6IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIChbXG5cbiAgICB4LFxuICAgIHksXG4gICAgeixcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZDIodmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBbIGEwLCBhMSBdID0gdmVjdG9yQSxcbiAgICAgICAgWyBiMCwgYjEgXSA9IHZlY3RvckI7XG5cbiAgcmV0dXJuIChbXG5cbiAgICBhMCArIGIwLFxuICAgIGExICsgYjEsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQzKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgY29uc3QgWyBhMCwgYTEsIGEyIF0gPSB2ZWN0b3JBLFxuICAgICAgICBbIGIwLCBiMSwgYjIgXSA9IHZlY3RvckI7XG5cbiAgcmV0dXJuIChbXG5cbiAgICBhMCArIGIwLFxuICAgIGExICsgYjEsXG4gICAgYTIgKyBiMixcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZDQodmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBbIGEwLCBhMSwgYTIsIGEzIF0gPSB2ZWN0b3JBLFxuICAgICAgICBbIGIwLCBiMSwgYjIsIGIzIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTAgKyBiMCxcbiAgICBhMSArIGIxLFxuICAgIGEyICsgYjIsXG4gICAgYTMgKyBiMyxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0Mih2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIGNvbnN0IFsgYTAsIGExIF0gPSB2ZWN0b3JBLFxuICAgICAgICBbIGIwLCBiMSBdID0gdmVjdG9yQjtcblxuICByZXR1cm4gKFtcblxuICAgIGEwIC0gYjAsXG4gICAgYTEgLSBiMSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0Myh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIGNvbnN0IFsgYTAsIGExLCBhMiBdID0gdmVjdG9yQSxcbiAgICAgICAgWyBiMCwgYjEsIGIyIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTAgLSBiMCxcbiAgICBhMSAtIGIxLFxuICAgIGEyIC0gYjIsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdDQodmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBbIGEwLCBhMSwgYTIsIGEzIF0gPSB2ZWN0b3JBLFxuICAgICAgICBbIGIwLCBiMSwgYjIsIGIzIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTAgLSBiMCxcbiAgICBhMSAtIGIxLFxuICAgIGEyIC0gYjIsXG4gICAgYTMgLSBiMyxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5Mih2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIGNvbnN0IFsgeDAsIHkwIF0gPSB2ZWN0b3JBLFxuICAgICAgICBbIHgxLCB5MSBdID0gdmVjdG9yQjtcblxuICByZXR1cm4gKFtcblxuICAgIHgwICogeDEsXG4gICAgeTAgKiB5MSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5Myh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIGNvbnN0IFsgeDAsIHkwLCB6MCBdID0gdmVjdG9yQSxcbiAgICAgICAgWyB4MSwgeTEsIHoxIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoW1xuXG4gICAgeDAgKiB4MSxcbiAgICB5MCAqIHkxLFxuICAgIHowICogejEsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseTQodmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBbIHgwLCB5MCwgejAsIHcwIF0gPSB2ZWN0b3JBLFxuICAgICAgICBbIHgxLCB5MSwgejEsIHcxIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoW1xuXG4gICAgeDAgKiB4MSxcbiAgICB5MCAqIHkxLFxuICAgIHowICogejEsXG4gICAgdzAgKiB3MSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpdmlkZTIodmVjdG9yLCBkaXZpc29yKSB7XG4gIGNvbnN0IFsgeCwgeSBdID0gdmVjdG9yO1xuXG4gIHJldHVybiAoW1xuXG4gICAgeCAvIGRpdmlzb3IsXG4gICAgeSAvIGRpdmlzb3IsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXZpZGUzKHZlY3RvciwgZGl2aXNvcikge1xuICBjb25zdCBbIHgsIHksIHogXSA9IHZlY3RvcjtcblxuICByZXR1cm4gKFtcblxuICAgIHggLyBkaXZpc29yLFxuICAgIHkgLyBkaXZpc29yLFxuICAgIHogLyBkaXZpc29yLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGl2aWRlNCh2ZWN0b3IsIGRpdmlzb3IpIHtcbiAgY29uc3QgWyB4LCB5LCB6LCB3IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIChbXG5cbiAgICB4IC8gZGl2aXNvcixcbiAgICB5IC8gZGl2aXNvcixcbiAgICB6IC8gZGl2aXNvcixcbiAgICB3IC8gZGl2aXNvcixcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlMih2ZWN0b3IsIHNjYWxhcikge1xuICBjb25zdCBbIHgsIHkgXSA9IHZlY3RvcjtcblxuICByZXR1cm4gKFtcblxuICAgIHggKiBzY2FsYXIsXG4gICAgeSAqIHNjYWxhcixcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlMyh2ZWN0b3IsIHNjYWxhcikge1xuICBjb25zdCBbIHgsIHksIHogXSA9IHZlY3RvcjtcblxuICByZXR1cm4gKFtcblxuICAgIHggKiBzY2FsYXIsXG4gICAgeSAqIHNjYWxhcixcbiAgICB6ICogc2NhbGFyLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGU0KHZlY3Rvciwgc2NhbGFyKSB7XG4gIGNvbnN0IFsgeCwgeSwgeiwgdyBdID0gdmVjdG9yO1xuXG4gIHJldHVybiAoW1xuXG4gICAgeCAqIHNjYWxhcixcbiAgICB5ICogc2NhbGFyLFxuICAgIHogKiBzY2FsYXIsXG4gICAgdyAqIHNjYWxhcixcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybTIodmVjdG9yLCBtYXRyaXgpIHtcbiAgY29uc3QgWyB4LCB5IF0gPSB2ZWN0b3IsXG5cbiAgICAgICAgWyBtMCwgbTEsIG0yLCBtMyBdID0gbWF0cml4O1xuXG4gIHJldHVybiAoW1xuXG4gICAgbTAgKiB4ICsgbTIgKiB5LFxuICAgIG0xICogeCArIG0zICogeSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybTModmVjdG9yLCBtYXRyaXgpIHtcbiAgY29uc3QgWyB4LCB5LCB6IF0gPSB2ZWN0b3IsXG5cbiAgICAgICAgWyBtMCwgbTEsIG0yLCBtMywgbTQsIG01LCBtNiwgbTcsIG04IF0gPSBtYXRyaXg7XG5cbiAgcmV0dXJuIChbXG5cbiAgICBtMCAqIHggKyBtMyAqIHkgKyBtNiAqIHosXG4gICAgbTEgKiB4ICsgbTQgKiB5ICsgbTcgKiB6LFxuICAgIG0yICogeCArIG01ICogeSArIG04ICogeixcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybTQodmVjdG9yLCBtYXRyaXgpIHtcbiAgY29uc3QgWyB4LCB5LCB6LCB3IF0gPSB2ZWN0b3IsXG5cbiAgICAgICAgWyBtMCwgbTEsIG0yLCBtMywgbTQsIG01LCBtNiwgbTcsIG04LCBtOSwgbTEwLCBtMTEsIG0xMiwgbTEzLCBtMTQsIG0xNSBdID0gbWF0cml4O1xuXG5cbiAgcmV0dXJuIChbXG5cbiAgICBtMCAqIHggKyBtNCAqIHkgKyBtOCAqIHogKyBtMTIgKiB3LFxuICAgIG0xICogeCArIG01ICogeSArIG05ICogeiArIG0xMyAqIHcsXG4gICAgbTIgKiB4ICsgbTYgKiB5ICsgbTEwICogeiArIG0xNCAqIHcsXG4gICAgbTMgKiB4ICsgbTcgKiB5ICsgbTExICogeiArIG0xNSAqIHcsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdW0yKC4uLnZlY3RvcnMpIHtcbiAgY29uc3QgemVybyA9IHplcm8yKCksXG4gICAgICAgIHN1bSA9IHZlY3RvcnMucmVkdWNlKChzdW0sIHZlY3RvcikgPT4ge1xuICAgICAgICAgIHN1bSA9IGFkZDIoc3VtLCB2ZWN0b3IpO1xuXG4gICAgICAgICAgcmV0dXJuIHN1bTtcbiAgICAgICAgfSwgemVybyk7XG5cbiAgcmV0dXJuIHN1bTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1bTMoLi4udmVjdG9ycykge1xuICBjb25zdCB6ZXJvID0gemVybzMoKSxcbiAgICAgICAgc3VtID0gdmVjdG9ycy5yZWR1Y2UoKHN1bSwgdmVjdG9yKSA9PiB7XG4gICAgICAgICAgc3VtID0gYWRkMyhzdW0sIHZlY3Rvcik7XG5cbiAgICAgICAgICByZXR1cm4gc3VtO1xuICAgICAgICB9LCB6ZXJvKTtcblxuICByZXR1cm4gc3VtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VtNCguLi52ZWN0b3JzKSB7XG4gIGNvbnN0IHplcm8gPSB6ZXJvNCgpLFxuICAgICAgICBzdW0gPSB2ZWN0b3JzLnJlZHVjZSgoc3VtLCB2ZWN0b3IpID0+IHtcbiAgICAgICAgICBzdW0gPSBhZGQ0KHN1bSwgdmVjdG9yKTtcblxuICAgICAgICAgIHJldHVybiBzdW07XG4gICAgICAgIH0sIHplcm8pO1xuXG4gIHJldHVybiBzdW07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZWFuMiguLi52ZWN0b3JzKSB7XG4gIGNvbnN0IGxlbmd0aCA9IHZlY3RvcnMubGVuZ3RoLFxuICAgICAgICBzdW0gPSBzdW0yKC4uLnZlY3RvcnMpLFxuICAgICAgICBtZWFuID0gZGl2aWRlMihzdW0sIGxlbmd0aCk7XG5cbiAgcmV0dXJuIG1lYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZWFuMyguLi52ZWN0b3JzKSB7XG4gIGNvbnN0IGxlbmd0aCA9IHZlY3RvcnMubGVuZ3RoLFxuICAgICAgICBzdW0gPSBzdW0zKC4uLnZlY3RvcnMpLFxuICAgICAgICBtZWFuID0gZGl2aWRlMyhzdW0sIGxlbmd0aCk7XG5cbiAgcmV0dXJuIG1lYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZWFuNCguLi52ZWN0b3JzKSB7XG4gIGNvbnN0IGxlbmd0aCA9IHZlY3RvcnMubGVuZ3RoLFxuICAgICAgICBzdW0gPSBzdW00KC4uLnZlY3RvcnMpLFxuICAgICAgICBtZWFuID0gZGl2aWRlNChzdW0sIGxlbmd0aCk7XG5cbiAgcmV0dXJuIG1lYW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgemVybzIsXG4gIHplcm8zLFxuICB6ZXJvNCxcbiAgbGVuZ3RoMixcbiAgbGVuZ3RoMyxcbiAgbGVuZ3RoNCxcbiAgZG90MixcbiAgZG90MyxcbiAgZG90NCxcbiAgY3Jvc3MzLFxuICBub3JtYWxpc2UyLFxuICBub3JtYWxpc2UzLFxuICBub3JtYWxpc2U0LFxuICByZWZsZWN0MixcbiAgcmVmbGVjdDMsXG4gIHJlZmxlY3Q0LFxuICB0cnVuY2F0ZTQsXG4gIGFkZDIsXG4gIGFkZDMsXG4gIGFkZDQsXG4gIHN1YnRyYWN0MixcbiAgc3VidHJhY3QzLFxuICBzdWJ0cmFjdDQsXG4gIG11bHRpcGx5MixcbiAgbXVsdGlwbHkzLFxuICBtdWx0aXBseTQsXG4gIGRpdmlkZTIsXG4gIGRpdmlkZTMsXG4gIGRpdmlkZTQsXG4gIHNjYWxlMixcbiAgc2NhbGUzLFxuICBzY2FsZTQsXG4gIHRyYW5zZm9ybTIsXG4gIHRyYW5zZm9ybTMsXG4gIHRyYW5zZm9ybTQsXG4gIHN1bTIsXG4gIHN1bTMsXG4gIHN1bTQsXG4gIG1lYW4yLFxuICBtZWFuMyxcbiAgbWVhbjRcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHN1YnRyYWN0MyB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRnZSB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBleHRlbnQpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgdGhpcy5leHRlbnQgPSBleHRlbnQ7XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcbiAgfVxuXG4gIGdldEV4dGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5leHRlbnQ7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uc2xpY2UoKSxcbiAgICAgICAgICBleHRlbnQgPSB0aGlzLmV4dGVudC5zbGljZSgpLFxuICAgICAgICAgIGVkZ2UgPSBuZXcgRWRnZShwb3NpdGlvbiwgZXh0ZW50KTtcblxuICAgIHJldHVybiBlZGdlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGFydFZlcnRleEFuZEVuZFZlcnRleChDbGFzcywgc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCkge1xuICAgIGlmIChlbmRWZXJ0ZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgZW5kVmVydGV4ID0gc3RhcnRWZXJ0ZXg7ICAvLy9cbiAgICAgIHN0YXJ0VmVydGV4ID0gQ2xhc3M7ICAvLy9cbiAgICAgIENsYXNzID0gRWRnZTsgLy8vXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHN0YXJ0UG9zaXRpb24gPSBzdGFydFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIGVuZFBvc2l0aW9uID0gZW5kVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgcG9zaXRpb24gPSBzdGFydFBvc2l0aW9uLnNsaWNlKCksIC8vL1xuICAgICAgICAgIGV4dGVudCA9IHN1YnRyYWN0MyhlbmRQb3NpdGlvbiwgc3RhcnRQb3NpdGlvbiksXG4gICAgICAgICAgZWRnZSA9IG5ldyBDbGFzcyhwb3NpdGlvbiwgZXh0ZW50KTtcblxuICAgIHJldHVybiBlZGdlO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFkZDMsIHNjYWxlMyB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZU1pZFBvaW50UG9zaXRpb24odmVydGljZXMpIHtcbiAgY29uc3QgbWlkUG9pbnRQb3NpdGlvbiA9IHZlcnRpY2VzLnJlZHVjZSgobWlkUG9pbnRQb3NpdGlvbiwgdmVydGV4KSA9PiB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb24gPSB2ZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBzY2FsZWRWZXJ0ZXhQb3NpdGlvbiA9IHNjYWxlMyh2ZXJ0ZXhQb3NpdGlvbiwgMS8zKTtcblxuICAgIG1pZFBvaW50UG9zaXRpb24gPSBhZGQzKG1pZFBvaW50UG9zaXRpb24sIHNjYWxlZFZlcnRleFBvc2l0aW9uKTtcblxuICAgIHJldHVybiBtaWRQb2ludFBvc2l0aW9uO1xuICB9LCBbIDAsIDAsIDAgXSk7XG5cbiAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0TWlkUG9pbnRQb3NpdGlvbk9udG9YWVBsYW5lKG1pZFBvaW50UG9zaXRpb24pIHtcbiAgbWlkUG9pbnRQb3NpdGlvbiA9IFsgLi4ubWlkUG9pbnRQb3NpdGlvbi5zbGljZSgwLCAyKSwgMCBdOyAgLy8vXG5cbiAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc01pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpIHtcbiAgY29uc3QgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzID0gaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMobWlkUG9pbnRQb3NpdGlvbiwgbWFza2luZ0VkZ2VzKSxcbiAgICAgICAgbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcyA9IGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpLFxuICAgICAgICBtaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMgPSBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMgfHwgbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlczsgLy8vXG5cbiAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcztcbn1cblxuZnVuY3Rpb24gaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMobWlkUG9pbnRQb3NpdGlvbiwgbWFza2luZ0VkZ2VzKSB7XG4gIGNvbnN0IG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcyA9IG1hc2tpbmdFZGdlcy5yZWR1Y2UoKG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcywgbWFza2luZ0VkZ2UpID0+IHtcbiAgICBpZiAobWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzKSB7XG4gICAgICBjb25zdCBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZSA9IG1hc2tpbmdFZGdlLmlzTWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdChtaWRQb2ludFBvc2l0aW9uKTtcblxuICAgICAgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzID0gbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcztcbiAgfSwgdHJ1ZSk7XG5cbiAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcztcbn1cblxuZnVuY3Rpb24gaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzKG1pZFBvaW50UG9zaXRpb24sIG1hc2tpbmdFZGdlcykge1xuICBjb25zdCBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzID0gbWFza2luZ0VkZ2VzLnJlZHVjZSgobWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcywgbWFza2luZ0VkZ2UpID0+IHtcbiAgICBpZiAobWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcykge1xuICAgICAgY29uc3QgbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlID0gbWFza2luZ0VkZ2UuaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodChtaWRQb2ludFBvc2l0aW9uKTtcblxuICAgICAgbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcyA9IG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcztcbiAgfSwgdHJ1ZSk7XG5cbiAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXM7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuLi9lZGdlXCI7XG5cbmltcG9ydCB7IHRoaXJkIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgc3VidHJhY3QzLCBjcm9zczMgfSBmcm9tIFwiLi4vLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyBwcm9qZWN0TWlkUG9pbnRQb3NpdGlvbk9udG9YWVBsYW5lIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9taWRQb2ludFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXNraW5nRWRnZSBleHRlbmRzIEVkZ2Uge1xuICBpc01pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQobWlkUG9pbnRQb3NpdGlvbikge1xuICAgIG1pZFBvaW50UG9zaXRpb24gPSBwcm9qZWN0TWlkUG9pbnRQb3NpdGlvbk9udG9YWVBsYW5lKG1pZFBvaW50UG9zaXRpb24pOyAgLy8vXG5cbiAgICBjb25zdCBleHRlbnQgPSB0aGlzLmdldEV4dGVudCgpLFxuICAgICAgICAgIHBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIG1pZFBvaW50UmVsYXRpdmVQb3NpdGlvbiA9IHN1YnRyYWN0MyhtaWRQb2ludFBvc2l0aW9uLCBwb3NpdGlvbiksXG4gICAgICAgICAgY3Jvc3NQcm9kdWN0Q29tcG9uZW50cyA9IGNyb3NzMyhleHRlbnQsIG1pZFBvaW50UmVsYXRpdmVQb3NpdGlvbiksIC8vL1xuICAgICAgICAgIHRoaXJkQ3Jvc3NQcm9kdWN0Q29tcG9uZW50ID0gdGhpcmQoY3Jvc3NQcm9kdWN0Q29tcG9uZW50cyksXG4gICAgICAgICAgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdCA9ICh0aGlyZENyb3NzUHJvZHVjdENvbXBvbmVudCA+IDApO1xuXG4gICAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQ7XG4gIH1cbiAgXG4gIGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHQobWlkUG9pbnRQb3NpdGlvbikge1xuICAgIGNvbnN0IG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQgPSB0aGlzLmlzTWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdChtaWRQb2ludFBvc2l0aW9uKSxcbiAgICAgICAgICBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodCA9ICFtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0O1xuICAgIFxuICAgIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodDtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21TdGFydFZlcnRleEFuZEVuZFZlcnRleChzdGFydFZlcnRleCwgZW5kVmVydGV4KSB7IHJldHVybiBFZGdlLmZyb21TdGFydFZlcnRleEFuZEVuZFZlcnRleChNYXNraW5nRWRnZSwgc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCk7IH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgemVybzIsIHplcm8zIH0gZnJvbSBcIi4vbWF0aHMvdmVjdG9yXCI7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0RFUFRIID0gMS4wO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfWl9GQVIgPSAxMDAwO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfWl9ORUFSID0gMTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX1BFUlNJU1QgPSBmYWxzZTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0ZJRUxEX09GX1ZJRVcgPSA0NTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0lOSVRJQUxfQU5HTEVTID0gemVybzIoKTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0lOSVRJQUxfT0ZGU0VUUyA9IHplcm8zKCk7XG5leHBvcnQgY29uc3QgREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IgPSAwLjAwMDAwMDE7XG5leHBvcnQgY29uc3QgREVGQVVMVF9JTklUSUFMX0RJU1RBTkNFID0gNTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0lOSVRJQUxfUE9TSVRJT04gPSBbIDAsIDAsIDUgXTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX01PVVNFX1NFTlNJVElWSVRZID0gMTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0JBQ0tHUk9VTkRfQ09MT1VSID0gWyAwLCAwLCAwIF07XG5leHBvcnQgY29uc3QgREVGQVVMVF9NT1VTRV9XSEVFTF9TRU5TSVRJVklUWSA9IDE7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IERFRkFVTFRfTUFSR0lOX09GX0VSUk9SIH0gZnJvbSBcIi4uL2RlZmF1bHRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FwcHJveGltYXRlbHlFcXVhbFRvT25lKHZhbHVlLCBtYXJnaW5PZkVycm9yID0gREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IpIHsgcmV0dXJuIGlzQXBwcm94aW1hdGVseUVxdWFsVG8odmFsdWUsIDEsIG1hcmdpbk9mRXJyb3IpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyh2YWx1ZSwgbWFyZ2luT2ZFcnJvciA9IERFRkFVTFRfTUFSR0lOX09GX0VSUk9SKSB7IHJldHVybiBpc0FwcHJveGltYXRlbHlFcXVhbFRvKHZhbHVlLCAwLCBtYXJnaW5PZkVycm9yKTsgfVxuXG5mdW5jdGlvbiBpc0FwcHJveGltYXRlbHlFcXVhbFRvKHZhbHVlQSwgdmFsdWVCLCBtYXJnaW5PZkVycm9yID0gREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IpIHtcbiAgY29uc3QgZGlmZmVyZW5jZSA9IHZhbHVlQSAtIHZhbHVlQixcbiAgICAgICAgYWJzb2x1dGVEaWZmZXJlbmNlID0gTWF0aC5hYnMoZGlmZmVyZW5jZSksXG4gICAgICAgIGFwcHJveGltYXRlbHlFcXVhbCA9IChhYnNvbHV0ZURpZmZlcmVuY2UgPCBtYXJnaW5PZkVycm9yKTtcblxuICByZXR1cm4gYXBwcm94aW1hdGVseUVxdWFsO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlSGFsZkFuZ2xlU2luZShhbmdsZUNvc2luZSkgeyByZXR1cm4gTWF0aC5zcXJ0KCgxIC0gYW5nbGVDb3NpbmUpIC8gMik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUhhbGZBbmdsZUNvc2luZShhbmdsZUNvc2luZSkgeyByZXR1cm4gTWF0aC5zcXJ0KCgxICsgYW5nbGVDb3NpbmUpIC8gMik7IH1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZG90MywgY3Jvc3MzLCBub3JtYWxpc2UzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb09uZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXBwcm94aW1hdGVcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkLCBmb3VydGggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVIYWxmQW5nbGVDb3NpbmUsIGNhbGN1bGF0ZUhhbGZBbmdsZVNpbmUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FuZ2xlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVJbWFnaW5hcnlRdWF0ZXJuaW9uKGltYWdpbmFyeVF1YXRlcm5pb24sIHJvdGF0aW9uUXVhdGVybmlvbiwgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbikgeyByZXR1cm4gaGFtaWx0b25Qcm9kdWN0KGhhbWlsdG9uUHJvZHVjdChyb3RhdGlvblF1YXRlcm5pb24sIGltYWdpbmFyeVF1YXRlcm5pb24pLCBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlSW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgY29uc3Qgcm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cyA9IHJvdGF0aW9uUXVhdGVybmlvbiwgIC8vL1xuICAgICAgICBmaXJzdFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCA9IGZpcnN0KHJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudHMpLFxuICAgICAgICBzZWNvbmRSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQgPSBzZWNvbmQocm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cyksXG4gICAgICAgIHRoaXJkUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50ID0gdGhpcmQocm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cyksXG4gICAgICAgIGZvdXJ0aFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCA9IGZvdXJ0aChyb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRzKSxcbiAgICAgICAgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbiA9IFtcbiAgICAgICAgICBmaXJzdFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCxcbiAgICAgICAgICAtc2Vjb25kUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50LFxuICAgICAgICAgIC10aGlyZFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCxcbiAgICAgICAgICAtZm91cnRoUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50XG4gICAgICAgIF07XG5cbiAgcmV0dXJuIGludmVyc2VSb3RhdGlvblF1YXRlcm5pb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgY29uc3QgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSByb3RhdGlvblF1YXRlcm5pb247ICAvLy9cblxuICByZXR1cm4gZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gIGNvbnN0IGludmVyc2VSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVJbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGludmVyc2VSb3RhdGlvblF1YXRlcm5pb247ICAvLy9cblxuICByZXR1cm4gYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVBcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24obm9ybWFsKSB7XG4gIGNvbnN0IGV4dGVudCA9IG5vcm1hbC5nZXRFeHRlbnQoKSxcbiAgICAgICAgdW5pdE5vcm1hbCA9IGV4dGVudCwgIC8vL1xuICAgICAgICB6QXhpcyA9IFsgMCwgMCwgMSBdLFxuICAgICAgICBkb3RQcm9kdWN0T2ZVbml0Tm9ybWFsQW5kWkF4aXMgPSBkb3QzKHVuaXROb3JtYWwsIHpBeGlzKSxcbiAgICAgICAgY3Jvc3NQcm9kdWN0T2ZVbml0Tm9ybWFsQW5kWkF4aXMgPSBjcm9zczModW5pdE5vcm1hbCwgekF4aXMpLFxuICAgICAgICBhbmdsZU9mUm90YXRpb25Db3NpbmUgPSBkb3RQcm9kdWN0T2ZVbml0Tm9ybWFsQW5kWkF4aXMsIC8vL1xuICAgICAgICBhbmdsZU9mUm90YXRpb25Db3NpbmVBYnNvbHV0ZVZhbHVlID0gTWF0aC5hYnMoYW5nbGVPZlJvdGF0aW9uQ29zaW5lKSxcbiAgICAgICAgYW5nbGVPZlJvdGF0aW9uQ29zaW5lQWJzb2x1dGVWYWx1ZUFwcHJveGltYXRlbHlFcXVhbFRvT25lID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb09uZShhbmdsZU9mUm90YXRpb25Db3NpbmVBYnNvbHV0ZVZhbHVlKSxcbiAgICAgICAgYXhpc09mUm90YXRpb24gPSBhbmdsZU9mUm90YXRpb25Db3NpbmVBYnNvbHV0ZVZhbHVlQXBwcm94aW1hdGVseUVxdWFsVG9PbmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBbIDEsIDAsIDAgXSA6IC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyb3NzUHJvZHVjdE9mVW5pdE5vcm1hbEFuZFpBeGlzLFxuICAgICAgICB1bml0QXhpc09mUm90YXRpb24gPSBub3JtYWxpc2UzKGF4aXNPZlJvdGF0aW9uKSxcbiAgICAgICAgaGFsZkFuZ2xlT2ZSb3RhdGlvbkNvc2luZSA9IGNhbGN1bGF0ZUhhbGZBbmdsZUNvc2luZShhbmdsZU9mUm90YXRpb25Db3NpbmUpLFxuICAgICAgICBoYWxmQW5nbGVPZlJvdGF0aW9uU2luZSA9IGNhbGN1bGF0ZUhhbGZBbmdsZVNpbmUoYW5nbGVPZlJvdGF0aW9uQ29zaW5lKSxcbiAgICAgICAgdW5pdEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50cyA9IHVuaXRBeGlzT2ZSb3RhdGlvbiwgIC8vL1xuICAgICAgICBmaXJzdEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50ID0gZmlyc3QodW5pdEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50cyksXG4gICAgICAgIHNlY29uZEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50ID0gc2Vjb25kKHVuaXRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICB0aGlyZEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50ID0gdGhpcmQodW5pdEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50cyksXG4gICAgICAgIGFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbiA9IFtcbiAgICAgICAgICBoYWxmQW5nbGVPZlJvdGF0aW9uQ29zaW5lLFxuICAgICAgICAgIGZpcnN0QXhpc09mUm90YXRpb25Db21wb25lbnQgKiBoYWxmQW5nbGVPZlJvdGF0aW9uU2luZSxcbiAgICAgICAgICBzZWNvbmRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudCAqIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lLFxuICAgICAgICAgIHRoaXJkQXhpc09mUm90YXRpb25Db21wb25lbnQgKiBoYWxmQW5nbGVPZlJvdGF0aW9uU2luZVxuICAgICAgICBdO1xuXG4gIHJldHVybiBhcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVSb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uKG1hc2tpbmdFZGdlKSB7XG4gIGNvbnN0IG1hc2tpbmdFZGdlRXh0ZW50ID0gbWFza2luZ0VkZ2UuZ2V0RXh0ZW50KCksXG4gICAgICAgIHVuaXRNYXNraW5nRWRnZUV4dGVudCA9IG5vcm1hbGlzZTMobWFza2luZ0VkZ2VFeHRlbnQpLFxuICAgICAgICB1bml0TWFza2luZ0VkZ2VFeHRlbnRDb21wb25lbnRzID0gdW5pdE1hc2tpbmdFZGdlRXh0ZW50LCAgLy8vXG4gICAgICAgIGZpcnN0VW5pdE1hc2tpbmdFZGdlRXh0ZW50Q29tcG9uZW50ID0gZmlyc3QodW5pdE1hc2tpbmdFZGdlRXh0ZW50Q29tcG9uZW50cyksXG4gICAgICAgIHNlY29uZFVuaXRNYXNraW5nRWRnZUV4dGVudENvbXBvbmVudCA9IHNlY29uZCh1bml0TWFza2luZ0VkZ2VFeHRlbnRDb21wb25lbnRzKSxcbiAgICAgICAgYW5nbGVPZlJvdGF0aW9uU2luZSA9IGZpcnN0VW5pdE1hc2tpbmdFZGdlRXh0ZW50Q29tcG9uZW50LCAgLy8vXG4gICAgICAgIGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSA9IHNlY29uZFVuaXRNYXNraW5nRWRnZUV4dGVudENvbXBvbmVudCwgIC8vL1xuICAgICAgICBoYWxmQW5nbGVPZlJvdGF0aW9uQ29zaW5lID0gY2FsY3VsYXRlSGFsZkFuZ2xlQ29zaW5lKGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSksXG4gICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lID0gKGFuZ2xlT2ZSb3RhdGlvblNpbmUgPiAwICkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArY2FsY3VsYXRlSGFsZkFuZ2xlU2luZShhbmdsZU9mUm90YXRpb25Db3NpbmUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtY2FsY3VsYXRlSGFsZkFuZ2xlU2luZShhbmdsZU9mUm90YXRpb25Db3NpbmUpLFxuICAgICAgICByb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uID0gW1xuICAgICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25Db3NpbmUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIHJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb247XG59XG5cbmZ1bmN0aW9uIGhhbWlsdG9uUHJvZHVjdChxdWF0ZXJuaW9uQSwgcXVhdGVybmlvbkIpIHtcbiAgY29uc3QgYTEgPSBxdWF0ZXJuaW9uQVswXSxcbiAgICAgICAgYjEgPSBxdWF0ZXJuaW9uQVsxXSxcbiAgICAgICAgYzEgPSBxdWF0ZXJuaW9uQVsyXSxcbiAgICAgICAgZDEgPSBxdWF0ZXJuaW9uQVszXSxcbiAgICAgICAgYTIgPSBxdWF0ZXJuaW9uQlswXSxcbiAgICAgICAgYjIgPSBxdWF0ZXJuaW9uQlsxXSxcbiAgICAgICAgYzIgPSBxdWF0ZXJuaW9uQlsyXSxcbiAgICAgICAgZDIgPSBxdWF0ZXJuaW9uQlszXSxcbiAgICAgICAgYSA9IGExICogYTIgLSBiMSAqIGIyIC0gYzEgKiBjMiAtIGQxICogZDIsXG4gICAgICAgIGIgPSBhMSAqIGIyICsgYjEgKiBhMiArIGMxICogZDIgLSBkMSAqIGMyLFxuICAgICAgICBjID0gYTEgKiBjMiAtIGIxICogZDIgKyBjMSAqIGEyICsgZDEgKiBiMixcbiAgICAgICAgZCA9IGExICogZDIgKyBiMSAqIGMyIC0gYzEgKiBiMiArIGQxICogYTIsXG4gICAgICAgIHF1YXRlcm5pb24gPSBbIGEsIGIsIGMsIGQgXTtcblxuICByZXR1cm4gcXVhdGVybmlvbjtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcm90YXRlSW1hZ2luYXJ5UXVhdGVybmlvbiwgY2FsY3VsYXRlSW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVhdGVybmlvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlUG9zaXRpb24ocG9zaXRpb24sIHJvdGF0aW9uUXVhdGVybmlvbikge1xuICBjb25zdCBpbWFnaW5hcnlRdWF0ZXJuaW9uID0gaW1hZ2luYXJ5UXVhdGVybmlvbkZyb21Qb3NpdGlvbihwb3NpdGlvbiksXG4gICAgICAgIGludmVyc2VSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVJbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgIHJvdGF0ZWRJbWFnaW5hcnlRdWF0ZXJuaW9uID0gcm90YXRlSW1hZ2luYXJ5UXVhdGVybmlvbihpbWFnaW5hcnlRdWF0ZXJuaW9uLCByb3RhdGlvblF1YXRlcm5pb24sIGludmVyc2VSb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gIHBvc2l0aW9uID0gcG9zaXRpb25Gcm9tSW1hZ2luYXJ5UXVhdGVybmlvbihyb3RhdGVkSW1hZ2luYXJ5UXVhdGVybmlvbik7XG5cbiAgcmV0dXJuIHBvc2l0aW9uO1xufVxuXG5mdW5jdGlvbiBpbWFnaW5hcnlRdWF0ZXJuaW9uRnJvbVBvc2l0aW9uKHBvc2l0aW9uKSB7IHJldHVybiBbMCwgLi4ucG9zaXRpb25dOyB9ICAvLy9cblxuZnVuY3Rpb24gcG9zaXRpb25Gcm9tSW1hZ2luYXJ5UXVhdGVybmlvbihpbWFnaW5hcnlRdWF0ZXJuaW9uKSB7IHJldHVybiBpbWFnaW5hcnlRdWF0ZXJuaW9uLnNsaWNlKDEpOyB9ICAvLy9cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGFkZDMsIHN1YnRyYWN0Mywgc2NhbGUzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FwcHJveGltYXRlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVJbnRlcnNlY3Rpb24oZWRnZSwgZmlyc3RQb3NpdGlvbkNvbXBvbmVudCkge1xuICBsZXQgaW50ZXJzZWN0aW9uID0gbnVsbDtcblxuICBjb25zdCBlZGdlTm9uUGFyYWxsZWwgPSBpc0VkZ2VOb25QYXJhbGxlbChlZGdlKTtcblxuICBpZiAoZWRnZU5vblBhcmFsbGVsKSB7XG4gICAgY29uc3QgZWRnZUludGVyc2VjdGlvbiA9IGNhbGN1bGF0ZUVkZ2VJbnRlcnNlY3Rpb24oZWRnZSwgZmlyc3RQb3NpdGlvbkNvbXBvbmVudCksXG4gICAgICAgICAgZWRnZUludGVyc2VjdGlvbk5vblRyaXZpYWwgPSAoKGVkZ2VJbnRlcnNlY3Rpb24gPiAwICkgJiYgKGVkZ2VJbnRlcnNlY3Rpb24gPCAxKSk7XG5cbiAgICBpZiAoZWRnZUludGVyc2VjdGlvbk5vblRyaXZpYWwpIHtcbiAgICAgIGludGVyc2VjdGlvbiA9IGVkZ2VJbnRlcnNlY3Rpb247ICAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW50ZXJzZWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucykge1xuICBjb25zdCBub25OdWxsSW50ZXJzZWN0aW9ucyA9IGludGVyc2VjdGlvbnMucmVkdWNlKChub25OdWxsSW50ZXJzZWN0aW9ucywgaW50ZXJzZWN0aW9uKSA9PiB7XG4gICAgaWYgKGludGVyc2VjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9uTnVsbEludGVyc2VjdGlvbiA9IGludGVyc2VjdGlvbjsgLy8vXG5cbiAgICAgIG5vbk51bGxJbnRlcnNlY3Rpb25zLnB1c2gobm9uTnVsbEludGVyc2VjdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vbk51bGxJbnRlcnNlY3Rpb25zO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIG5vbk51bGxJbnRlcnNlY3Rpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlTnVsbEludGVyc2VjdGlvbkluZGV4KGludGVyc2VjdGlvbnMpIHtcbiAgY29uc3QgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gaW50ZXJzZWN0aW9ucy5yZWR1Y2UoKG51bGxJbnRlcnNlY3Rpb25JbmRleCwgaW50ZXJzZWN0aW9uLCBpbmRleCkgPT4ge1xuICAgIGlmIChudWxsSW50ZXJzZWN0aW9uSW5kZXggPT09IG51bGwpIHtcbiAgICAgIGlmIChpbnRlcnNlY3Rpb24gPT09IG51bGwpIHtcbiAgICAgICAgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxJbnRlcnNlY3Rpb25JbmRleDtcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIG51bGxJbnRlcnNlY3Rpb25JbmRleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSB7XG4gIGNvbnN0IG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGludGVyc2VjdGlvbnMucmVkdWNlKChudWxsSW50ZXJzZWN0aW9uSW5kZXgsIGludGVyc2VjdGlvbiwgaW5kZXgpID0+IHtcbiAgICBpZiAobnVsbEludGVyc2VjdGlvbkluZGV4ID09PSBudWxsKSB7XG4gICAgICBpZiAoaW50ZXJzZWN0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGluZGV4O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsSW50ZXJzZWN0aW9uSW5kZXg7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBudWxsSW50ZXJzZWN0aW9uSW5kZXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVJbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbihzdGFydFZlcnRleFBvc2l0aW9uLCBlbmRWZXJ0ZXhQb3NpdGlvbiwgaW50ZXJzZWN0aW9uKSB7XG4gIGNvbnN0IGV4dGVudCA9IHN1YnRyYWN0MyhlbmRWZXJ0ZXhQb3NpdGlvbiwgc3RhcnRWZXJ0ZXhQb3NpdGlvbiksXG4gICAgICAgIG9mZnNldCA9IHNjYWxlMyhleHRlbnQsIGludGVyc2VjdGlvbiksXG4gICAgICAgIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uID0gYWRkMyhzdGFydFZlcnRleFBvc2l0aW9uLCBvZmZzZXQpO1xuXG4gIHJldHVybiBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbjtcbn1cblxuZnVuY3Rpb24gaXNFZGdlTm9uUGFyYWxsZWwoZWRnZSkge1xuICBjb25zdCBlZGdlRXh0ZW50ID0gZWRnZS5nZXRFeHRlbnQoKSxcbiAgICAgICAgZWRnZUV4dGVudENvbXBvbmVudHMgPSBlZGdlRXh0ZW50LCAvLy9cbiAgICAgICAgZmlyc3RFZGdlRXh0ZW50Q29tcG9uZW50ID0gZmlyc3QoZWRnZUV4dGVudENvbXBvbmVudHMpLFxuICAgICAgICBzZWNvbmRFZGdlRXh0ZW50Q29tcG9uZW50ID0gc2Vjb25kKGVkZ2VFeHRlbnRDb21wb25lbnRzKSxcbiAgICAgICAgZWRnZUFuZ2xlVGFuZ2VudCA9IGZpcnN0RWRnZUV4dGVudENvbXBvbmVudCAvIHNlY29uZEVkZ2VFeHRlbnRDb21wb25lbnQsXG4gICAgICAgIGVkZ2VBbmdsZVRhbmdlbnRBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhlZGdlQW5nbGVUYW5nZW50KSxcbiAgICAgICAgZWRnZVBhcmFsbGVsID0gZWRnZUFuZ2xlVGFuZ2VudEFwcHJveGltYXRlbHlFcXVhbFRvWmVybywgLy8vXG4gICAgICAgIGVkZ2VOb25QYXJhbGxlbCA9ICFlZGdlUGFyYWxsZWw7XG5cbiAgcmV0dXJuIGVkZ2VOb25QYXJhbGxlbDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlRWRnZUludGVyc2VjdGlvbihlZGdlLCBmaXJzdFBvc2l0aW9uQ29tcG9uZW50KSB7XG4gIGNvbnN0IGVkZ2VFeHRlbnQgPSBlZGdlLmdldEV4dGVudCgpLFxuICAgICAgICBlZGdlUG9zaXRpb24gPSBlZGdlLmdldFBvc2l0aW9uKCksXG4gICAgICAgIGVkZ2VFeHRlbnRDb21wb25lbnRzID0gZWRnZUV4dGVudCwgLy8vXG4gICAgICAgIGVkZ2VQb3NpdGlvbkNvbXBvbmVudHMgPSBlZGdlUG9zaXRpb24sIC8vL1xuICAgICAgICBmaXJzdEVkZ2VFeHRlbnRDb21wb25lbnQgPSBmaXJzdChlZGdlRXh0ZW50Q29tcG9uZW50cyksXG4gICAgICAgIGZpcnN0RWRnZVBvc2l0aW9uQ29tcG9uZW50ID0gZmlyc3QoZWRnZVBvc2l0aW9uQ29tcG9uZW50cyksXG4gICAgICAgIGVkZ2VJbnRlcnNlY3Rpb24gPSAoZmlyc3RQb3NpdGlvbkNvbXBvbmVudCAtIGZpcnN0RWRnZVBvc2l0aW9uQ29tcG9uZW50KSAvIGZpcnN0RWRnZUV4dGVudENvbXBvbmVudDtcblxuICByZXR1cm4gZWRnZUludGVyc2VjdGlvbjtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyByb3RhdGVQb3NpdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcm90YXRpb25cIjtcbmltcG9ydCB7IGNhbGN1bGF0ZUludGVyc2VjdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvaW50ZXJzZWN0aW9uXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVSb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uLCBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWF0ZXJuaW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlcnRpY2FsTGluZSB7XG4gIGNvbnN0cnVjdG9yKGZpcnN0UG9zaXRpb25Db21wb25lbnQsIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgICB0aGlzLmZpcnN0UG9zaXRpb25Db21wb25lbnQgPSBmaXJzdFBvc2l0aW9uQ29tcG9uZW50O1xuICAgIHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgICB0aGlzLmJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIGdldEZpcnN0UG9zaXRpb25Db21wb25lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlyc3RQb3NpdGlvbkNvbXBvbmVudDtcbiAgfVxuICBcbiAgZ2V0Rm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBnZXRCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgc3BsaXRGYWNldChmYWNldCwgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IGVkZ2VzID0gZmFjZXQuZ2V0RWRnZXMoKSxcbiAgICAgICAgICBpbnRlcnNlY3Rpb25zID0gZWRnZXMubWFwKChlZGdlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnNlY3Rpb24gPSBjYWxjdWxhdGVJbnRlcnNlY3Rpb24oZWRnZSwgdGhpcy5maXJzdFBvc2l0aW9uQ29tcG9uZW50KTtcblxuICAgICAgICAgICAgcmV0dXJuIGludGVyc2VjdGlvbjtcbiAgICAgICAgICB9KTtcblxuICAgIGZhY2V0LnNwbGl0V2l0aEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gIH1cblxuICBzcGxpdEZhY2V0cyhmYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBzbWFsbGVyRmFjZXRzID0gW107XG5cbiAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IHtcbiAgICAgIGZhY2V0LnJvdGF0ZSh0aGlzLmZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgICAgdGhpcy5zcGxpdEZhY2V0KGZhY2V0LCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcbiAgICB9KTtcblxuICAgIHNtYWxsZXJGYWNldHMuZm9yRWFjaCgoc21hbGxlckZhY2V0KSA9PiB7XG4gICAgICBzbWFsbGVyRmFjZXQucm90YXRlKHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzbWFsbGVyRmFjZXRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21NYXNraW5nRWRnZShtYXNraW5nRWRnZSkge1xuICAgIGNvbnN0IG1hc2tpbmdFZGdlUG9zaXRpb24gPSBtYXNraW5nRWRnZS5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24gPSBjYWxjdWxhdGVSb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uKG1hc2tpbmdFZGdlKSxcbiAgICAgICAgICByb3RhdGlvblF1YXRlcm5pb24gPSByb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uLCAgLy8vXG4gICAgICAgICAgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIHBvc2l0aW9uID0gcm90YXRlUG9zaXRpb24obWFza2luZ0VkZ2VQb3NpdGlvbiwgcm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBwb3NpdGlvbkNvbXBvbmVudHMgPSBwb3NpdGlvbiwgLy8vXG4gICAgICAgICAgZmlyc3RQb3NpdGlvbkNvbXBvbmVudCA9IGZpcnN0KHBvc2l0aW9uQ29tcG9uZW50cyksXG4gICAgICAgICAgdmVydGljYWxMaW5lID0gbmV3IFZlcnRpY2FsTGluZShmaXJzdFBvc2l0aW9uQ29tcG9uZW50LCBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgIHJldHVybiB2ZXJ0aWNhbExpbmU7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVZlcnRpY2VzKHZlcnRpY2VzLCByb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgY29uc3Qgcm90YXRlZFZlcnRpY2VzID0gdmVydGljZXMubWFwKCh2ZXJ0ZXgpID0+IHtcbiAgICBjb25zdCByb3RhdGVkVmVydGV4ID0gdmVydGV4LmNsb25lKCk7ICAvLy9cblxuICAgIHJvdGF0ZWRWZXJ0ZXgucm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICByZXR1cm4gcm90YXRlZFZlcnRleDtcbiAgfSk7XG5cbiAgcmV0dXJuIHJvdGF0ZWRWZXJ0aWNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlKGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIFZlcnRleCkgeyAgLy8vXG4gIGNvbnN0IGluZGV4ZXMgPSBpbmRleFR1cGxlLCAvLy9cbiAgICAgICAgdmVydGljZXMgPSBpbmRleGVzLm1hcCgoaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBjb29yZGluYXRlVHVwbGUgPSBjb29yZGluYXRlVHVwbGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICB2ZXJ0ZXggPSBWZXJ0ZXguZnJvbUNvb3JkaW5hdGVUdXBsZShjb29yZGluYXRlVHVwbGUpO1xuXG4gICAgICAgICAgcmV0dXJuIHZlcnRleDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHZlcnRpY2VzO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFza2luZ0VkZ2UgZnJvbSBcIi4vZWRnZS9tYXNraW5nXCI7XG5pbXBvcnQgVmVydGljYWxMaW5lIGZyb20gXCIuL3ZlcnRpY2FsTGluZVwiO1xuXG5pbXBvcnQgeyBhZGQsIHNlcGFyYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgcm90YXRlVmVydGljZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3ZlcnRpY2VzXCI7XG5pbXBvcnQgeyBWRVJUSUNFU19MRU5HVEggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgY2FsY3VsYXRlQXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uLCBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1YXRlcm5pb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFza2luZ0ZhY2V0IHtcbiAgY29uc3RydWN0b3IobWFza2luZ0VkZ2VzLCB2ZXJ0aWNhbExpbmVzLCBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gICAgdGhpcy5tYXNraW5nRWRnZXMgPSBtYXNraW5nRWRnZXM7XG4gICAgdGhpcy52ZXJ0aWNhbExpbmVzID0gdmVydGljYWxMaW5lcztcbiAgICB0aGlzLmZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gICAgdGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBnZXRNYXNraW5nRWRnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFza2luZ0VkZ2VzO1xuICB9XG5cbiAgZ2V0VmVydGljYWxMaW5lcygpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNhbExpbmVzO1xuICB9XG5cbiAgZ2V0Rm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBnZXRCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgbWFza0ZhY2V0KGZhY2V0LCB1bm1hc2tlZEZhY2V0cywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IHVubWFza2VkRmFjZXQgPSBmYWNldC5jbG9uZSgpOyAgLy8vXG5cbiAgICBmYWNldC5yb3RhdGUodGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICBjb25zdCBtYXNraW5nRmFjZXQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgc21hbGxlckZhY2V0cyA9IHRoaXMuc3BsaXRGYWNldChmYWNldCwgbWFyZ2luT2ZFcnJvciksXG4gICAgICAgICAgbWFza2VkU21hbGxlckZhY2V0cyA9IFtdLFxuICAgICAgICAgIHVubWFza2VkU21hbGxlckZhY2V0cyA9IFtdO1xuXG4gICAgc2VwYXJhdGUoc21hbGxlckZhY2V0cywgbWFza2VkU21hbGxlckZhY2V0cywgdW5tYXNrZWRTbWFsbGVyRmFjZXRzLCAoc21hbGxlckZhY2V0KSA9PiB7XG4gICAgICBjb25zdCBzbWFsbGVyRmFjZXRNYXNrZWQgPSBzbWFsbGVyRmFjZXQuaXNNYXNrZWQobWFza2luZ0ZhY2V0KTtcblxuICAgICAgcmV0dXJuIHNtYWxsZXJGYWNldE1hc2tlZDtcbiAgICB9KTtcblxuICAgIGNvbnN0IG1hc2tlZFNtYWxsZXJGYWNldHNMZW5ndGggPSBtYXNrZWRTbWFsbGVyRmFjZXRzLmxlbmd0aDtcblxuICAgIGlmIChtYXNrZWRTbWFsbGVyRmFjZXRzTGVuZ3RoID09PSAwKSB7XG4gICAgICB1bm1hc2tlZEZhY2V0cy5wdXNoKHVubWFza2VkRmFjZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1bm1hc2tlZFNtYWxsZXJGYWNldHMuZm9yRWFjaCgodW5tYXNrZWRTbWFsbGVyRmFjZXQpID0+IHtcbiAgICAgICAgdW5tYXNrZWRTbWFsbGVyRmFjZXQucm90YXRlKHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcbiAgICAgIH0pO1xuXG4gICAgICBhZGQodW5tYXNrZWRGYWNldHMsIHVubWFza2VkU21hbGxlckZhY2V0cyk7XG4gICAgfVxuICB9XG4gIFxuICBzcGxpdEZhY2V0KGZhY2V0LCBtYXJnaW5PZkVycm9yKSB7XG4gICAgbGV0IGZhY2V0cyA9IFtcbiAgICAgICAgICBmYWNldFxuICAgICAgICBdLFxuICAgICAgICBzbWFsbGVyRmFjZXRzID0gZmFjZXRzOyAvLy9cblxuICAgIHRoaXMudmVydGljYWxMaW5lcy5mb3JFYWNoKCh2ZXJ0aWNhbExpbmUpID0+IHtcbiAgICAgIHNtYWxsZXJGYWNldHMgPSB2ZXJ0aWNhbExpbmUuc3BsaXRGYWNldHMoZmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcblxuICAgICAgZmFjZXRzID0gc21hbGxlckZhY2V0czsgLy8vXG4gICAgfSk7XG5cbiAgICByZXR1cm4gc21hbGxlckZhY2V0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmFjZXQoZmFjZXQpIHtcbiAgICBjb25zdCBmYWNldE5vcm1hbCA9IGZhY2V0LmdldE5vcm1hbCgpLFxuICAgICAgICAgIGZhY2V0VmVydGljZXMgPSBmYWNldC5nZXRWZXJ0aWNlcygpLFxuICAgICAgICAgIG5vcm1hbCA9IGZhY2V0Tm9ybWFsLCAvLy9cbiAgICAgICAgICBhcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVBcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24obm9ybWFsKSxcbiAgICAgICAgICByb3RhdGlvblF1YXRlcm5pb24gPSBhcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24sIC8vL1xuICAgICAgICAgIHZlcnRpY2VzID0gcm90YXRlVmVydGljZXMoZmFjZXRWZXJ0aWNlcywgcm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBtYXNraW5nRWRnZXMgPSBjYWxjdWxhdGVNYXNraW5nRWRnZXModmVydGljZXMpLFxuICAgICAgICAgIHZlcnRpY2FsTGluZXMgPSBtYXNraW5nRWRnZXMubWFwKChtYXNraW5nRWRnZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmVydGljYWxMaW5lID0gVmVydGljYWxMaW5lLmZyb21NYXNraW5nRWRnZShtYXNraW5nRWRnZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB2ZXJ0aWNhbExpbmU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIG1hc2tpbmdGYWNldCA9IG5ldyBNYXNraW5nRmFjZXQobWFza2luZ0VkZ2VzLCB2ZXJ0aWNhbExpbmVzLCBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgIHJldHVybiBtYXNraW5nRmFjZXQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlTWFza2luZ0VkZ2VzKHZlcnRpY2VzKSB7XG4gIGNvbnN0IG1hc2tpbmdFZGdlcyA9IHZlcnRpY2VzLm1hcCgodmVydGV4LCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBpbmRleCxcbiAgICAgICAgICAgICAgICBlbmRJbmRleCA9IChzdGFydEluZGV4ICsgMSkgJSBWRVJUSUNFU19MRU5HVEgsXG4gICAgICAgICAgICAgICAgc3RhcnRWZXJ0ZXggPSB2ZXJ0aWNlc1tzdGFydEluZGV4XSxcbiAgICAgICAgICAgICAgICBlbmRWZXJ0ZXggPSB2ZXJ0aWNlc1tlbmRJbmRleF0sXG4gICAgICAgICAgICAgICAgbWFza2luZ0VkZ2UgPSBNYXNraW5nRWRnZS5mcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgoc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCk7XG5cbiAgICAgICAgICByZXR1cm4gbWFza2luZ0VkZ2U7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBtYXNraW5nRWRnZXM7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vcm1hbGlzZTMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eTIoKSB7XG4gIHJldHVybiAoW1xuXG4gICAgMSwgMCxcbiAgICAwLCAxLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkzKCkge1xuICByZXR1cm4gKFtcblxuICAgIDEsIDAsIDAsXG4gICAgMCwgMSwgMCxcbiAgICAwLCAwLCAxLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHk0KCkge1xuICByZXR1cm4gKFtcblxuICAgIDEsIDAsIDAsIDAsXG4gICAgMCwgMSwgMCwgMCxcbiAgICAwLCAwLCAxLCAwLFxuICAgIDAsIDAsIDAsIDEsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseTIobWF0cml4QSwgbWF0cml4Qikge1xuICBjb25zdCBbIGEwLCBhMSwgYTIsIGEzIF0gPSBtYXRyaXhBLFxuICAgICAgICBbIGIwLCBiMSwgYjIsIGIzIF0gPSBtYXRyaXhCO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTAgKiBiMCArIGEyICogYjEsXG4gICAgYTEgKiBiMCArIGEzICogYjEsXG5cbiAgICBhMCAqIGIyICsgYTIgKiBiMyxcbiAgICBhMSAqIGIyICsgYTMgKiBiMyxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5MyhtYXRyaXhBLCBtYXRyaXhCKSB7XG4gIGNvbnN0IFsgYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3LCBhOCBdID0gbWF0cml4QSxcbiAgICAgICAgWyBiMCwgYjEsIGIyLCBiMywgYjQsIGI1LCBiNiwgYjcsIGI4IF0gPSBtYXRyaXhCO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTAgKiBiMCArIGEzICogYjEgKyBhNiAqIGIyLFxuICAgIGExICogYjAgKyBhNCAqIGIxICsgYTcgKiBiMixcbiAgICBhMiAqIGIwICsgYTUgKiBiMSArIGE4ICogYjIsXG5cbiAgICBhMCAqIGIzICsgYTMgKiBiNCArIGE2ICogYjUsXG4gICAgYTEgKiBiMyArIGE0ICogYjQgKyBhNyAqIGI1LFxuICAgIGEyICogYjMgKyBhNSAqIGI0ICsgYTggKiBiNSxcblxuICAgIGEwICogYjYgKyBhMyAqIGI3ICsgYTYgKiBiOCxcbiAgICBhMSAqIGI2ICsgYTQgKiBiNyArIGE3ICogYjgsXG4gICAgYTIgKiBiNiArIGE1ICogYjcgKyBhOCAqIGI4LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHk0KG1hdHJpeEEsIG1hdHJpeEIpIHtcbiAgY29uc3QgIFsgYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3LCBhOCwgYTksIGExMCwgYTExLCBhMTIsIGExMywgYTE0LCBhMTUgXSA9IG1hdHJpeEEsXG4gICAgICAgICBbIGIwLCBiMSwgYjIsIGIzLCBiNCwgYjUsIGI2LCBiNywgYjgsIGI5LCBiMTAsIGIxMSwgYjEyLCBiMTMsIGIxNCwgYjE1IF0gPSBtYXRyaXhCO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTAgKiAgYjAgKyAgYTQgKiAgYjEgKyAgYTggKiAgYjIgKyBhMTIgKiAgYjMsXG4gICAgYTEgKiAgYjAgKyAgYTUgKiAgYjEgKyAgYTkgKiAgYjIgKyBhMTMgKiAgYjMsXG4gICAgYTIgKiAgYjAgKyAgYTYgKiAgYjEgKyBhMTAgKiAgYjIgKyBhMTQgKiAgYjMsXG4gICAgYTMgKiAgYjAgKyAgYTcgKiAgYjEgKyBhMTEgKiAgYjIgKyBhMTUgKiAgYjMsXG5cbiAgICBhMCAqICBiNCArICBhNCAqICBiNSArICBhOCAqICBiNiArIGExMiAqICBiNyxcbiAgICBhMSAqICBiNCArICBhNSAqICBiNSArICBhOSAqICBiNiArIGExMyAqICBiNyxcbiAgICBhMiAqICBiNCArICBhNiAqICBiNSArIGExMCAqICBiNiArIGExNCAqICBiNyxcbiAgICBhMyAqICBiNCArICBhNyAqICBiNSArIGExMSAqICBiNiArIGExNSAqICBiNyxcblxuICAgIGEwICogIGI4ICsgIGE0ICogIGI5ICsgIGE4ICogYjEwICsgYTEyICogYjExLFxuICAgIGExICogIGI4ICsgIGE1ICogIGI5ICsgIGE5ICogYjEwICsgYTEzICogYjExLFxuICAgIGEyICogIGI4ICsgIGE2ICogIGI5ICsgYTEwICogYjEwICsgYTE0ICogYjExLFxuICAgIGEzICogIGI4ICsgIGE3ICogIGI5ICsgYTExICogYjEwICsgYTE1ICogYjExLFxuXG4gICAgYTAgKiBiMTIgKyAgYTQgKiBiMTMgKyAgYTggKiBiMTQgKyBhMTIgKiBiMTUsXG4gICAgYTEgKiBiMTIgKyAgYTUgKiBiMTMgKyAgYTkgKiBiMTQgKyBhMTMgKiBiMTUsXG4gICAgYTIgKiBiMTIgKyAgYTYgKiBiMTMgKyBhMTAgKiBiMTQgKyBhMTQgKiBiMTUsXG4gICAgYTMgKiBiMTIgKyAgYTcgKiBiMTMgKyBhMTEgKiBiMTQgKyBhMTUgKiBiMTUsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXRlcm1pbmFudDIobWF0cml4KSB7XG4gIGNvbnN0IFsgbTAsIG0xLCBtMiwgbTMgXSA9IG1hdHJpeDtcblxuICByZXR1cm4gKCBtMCAqIG0zIC0gbTIgKiBtMSApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGV0ZXJtaW5hbnQzKG1hdHJpeCkge1xuICBjb25zdCBbIG0wLCBtMSwgbTIsIG0zLCBtNCwgbTUsIG02LCBtNywgbTggXSA9IG1hdHJpeCxcblxuICAgICAgICBiMDEgPSAgbTggKiBtNCAtIG01ICogbTcsXG4gICAgICAgIGIxMSA9IC1tOCAqIG0zICsgbTUgKiBtNixcbiAgICAgICAgYjIxID0gIG03ICogbTMgLSBtNCAqIG02O1xuXG4gIHJldHVybiAoIG0wICogYjAxICsgbTEgKiBiMTEgKyBtMiAqIGIyMSApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGV0ZXJtaW5hbnQ0KG1hdHJpeCkge1xuICBjb25zdCBbIG0wLCBtMSwgbTIsIG0zLCBtNCwgbTUsIG02LCBtNywgbTgsIG05LCBtMTAsIG0xMSwgbTEyLCBtMTMsIG0xNCwgbTE1IF0gPSBtYXRyaXgsXG5cbiAgICAgICAgYjAwID0gbTAgKiBtNSAtIG0xICogbTQsXG4gICAgICAgIGIwMSA9IG0wICogbTYgLSBtMiAqIG00LFxuICAgICAgICBiMDIgPSBtMCAqIG03IC0gbTMgKiBtNCxcbiAgICAgICAgYjAzID0gbTEgKiBtNiAtIG0yICogbTUsXG4gICAgICAgIGIwNCA9IG0xICogbTcgLSBtMyAqIG01LFxuICAgICAgICBiMDUgPSBtMiAqIG03IC0gbTMgKiBtNixcbiAgICAgICAgYjA2ID0gbTggKiBtMTMgLSBtOSAqIG0xMixcbiAgICAgICAgYjA3ID0gbTggKiBtMTQgLSBtMTAgKiBtMTIsXG4gICAgICAgIGIwOCA9IG04ICogbTE1IC0gbTExICogbTEyLFxuICAgICAgICBiMDkgPSBtOSAqIG0xNCAtIG0xMCAqIG0xMyxcbiAgICAgICAgYjEwID0gbTkgKiBtMTUgLSBtMTEgKiBtMTMsXG4gICAgICAgIGIxMSA9IG0xMCAqIG0xNSAtIG0xMSAqIG0xNDtcblxuICByZXR1cm4gKCBiMDAgKiBiMTEgLSBiMDEgKiBiMTAgKyBiMDIgKiBiMDkgKyBiMDMgKiBiMDggLSBiMDQgKiBiMDcgKyBiMDUgKiBiMDYgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zcG9zZTIobWF0cml4KSB7XG4gIGNvbnN0IFsgbTAsIG0xLCBtMiwgbTMgXSA9IG1hdHJpeDtcblxuICByZXR1cm4gKFtcblxuICAgIG0wLCBtMixcbiAgICBtMSwgbTMsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc3Bvc2UzKG1hdHJpeCkge1xuICBjb25zdCBbIG0wLCBtMSwgbTIsIG0zLCBtNCwgbTUsIG02LCBtNywgbTggXSA9IG1hdHJpeDtcblxuICByZXR1cm4gKFtcblxuICAgIG0wLCBtMywgbTYsXG4gICAgbTEsIG00LCBtNyxcbiAgICBtMiwgbTUsIG04LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNwb3NlNChtYXRyaXgpIHtcbiAgY29uc3QgWyBtMCwgbTEsIG0yLCBtMywgbTQsIG01LCBtNiwgbTcsIG04LCBtOSwgbTEwLCBtMTEsIG0xMiwgbTEzLCBtMTQsIG0xNSBdID0gbWF0cml4O1xuXG4gIHJldHVybiAoW1xuXG4gICAgbTAsIG00LCBtOCwgbTEyLFxuICAgIG0xLCBtNSwgbTksIG0xMyxcbiAgICBtMiwgbTYsIG0xMCwgbTE0LFxuICAgIG0zLCBtNywgbTExLCBtMTUsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQyKG1hdHJpeCkge1xuICBjb25zdCBbIG0wLCBtMSwgbTIsIG0zIF0gPSBtYXRyaXgsXG5cbiAgICAgICAgZGV0ZXJtaW5hbnQgPSBkZXRlcm1pbmFudDIobWF0cml4KTtcblxuICByZXR1cm4gKFtcblxuICAgICttMyAvIGRldGVybWluYW50LCAtbTEgLyBkZXRlcm1pbmFudCxcbiAgICAtbTIgLyBkZXRlcm1pbmFudCwgK20wIC8gZGV0ZXJtaW5hbnQsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQzKG1hdHJpeCkge1xuICBjb25zdCBbIG0wLCBtMSwgbTIsIG0zLCBtNCwgbTUsIG02LCBtNywgbTggXSA9IG1hdHJpeCxcblxuICAgICAgICBkZXRlcm1pbmFudCA9IGRldGVybWluYW50MyhtYXRyaXgpLFxuXG4gICAgICAgIGIwMSA9ICBtOCAqIG00IC0gbTUgKiBtNyxcbiAgICAgICAgYjExID0gLW04ICogbTMgKyBtNSAqIG02LFxuICAgICAgICBiMjEgPSAgbTcgKiBtMyAtIG00ICogbTY7XG5cbiAgcmV0dXJuIChbXG5cbiAgICBiMDEgLyBkZXRlcm1pbmFudCwgKC1tOCAqIG0xICsgbTIgKiBtNykgLyBkZXRlcm1pbmFudCwgKCBtNSAqIG0xIC0gbTIgKiBtNCkgLyBkZXRlcm1pbmFudCxcbiAgICBiMTEgLyBkZXRlcm1pbmFudCwgKCBtOCAqIG0wIC0gbTIgKiBtNikgLyBkZXRlcm1pbmFudCwgKC1tNSAqIG0wICsgbTIgKiBtMykgLyBkZXRlcm1pbmFudCxcbiAgICBiMjEgLyBkZXRlcm1pbmFudCwgKC1tNyAqIG0wICsgbTEgKiBtNikgLyBkZXRlcm1pbmFudCwgKCBtNCAqIG0wIC0gbTEgKiBtMykgLyBkZXRlcm1pbmFudCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGludmVydDQobWF0cml4KSB7XG4gIGNvbnN0IFsgbTAsIG0xLCBtMiwgbTMsIG00LCBtNSwgbTYsIG03LCBtOCwgbTksIG0xMCwgbTExLCBtMTIsIG0xMywgbTE0LCBtMTUgXSA9IG1hdHJpeCxcblxuICAgICAgICBkZXRlcm1pbmFudCA9IGRldGVybWluYW50NChtYXRyaXgpLFxuXG4gICAgICAgIGIwMCA9IG0wICogbTUgLSBtMSAqIG00LFxuICAgICAgICBiMDEgPSBtMCAqIG02IC0gbTIgKiBtNCxcbiAgICAgICAgYjAyID0gbTAgKiBtNyAtIG0zICogbTQsXG4gICAgICAgIGIwMyA9IG0xICogbTYgLSBtMiAqIG01LFxuICAgICAgICBiMDQgPSBtMSAqIG03IC0gbTMgKiBtNSxcbiAgICAgICAgYjA1ID0gbTIgKiBtNyAtIG0zICogbTYsXG4gICAgICAgIGIwNiA9IG04ICogbTEzIC0gbTkgKiBtMTIsXG4gICAgICAgIGIwNyA9IG04ICogbTE0IC0gbTEwICogbTEyLFxuICAgICAgICBiMDggPSBtOCAqIG0xNSAtIG0xMSAqIG0xMixcbiAgICAgICAgYjA5ID0gbTkgKiBtMTQgLSBtMTAgKiBtMTMsXG4gICAgICAgIGIxMCA9IG05ICogbTE1IC0gbTExICogbTEzLFxuICAgICAgICBiMTEgPSBtMTAgKiBtMTUgLSBtMTEgKiBtMTQ7XG5cbiAgcmV0dXJuIChbXG5cbiAgICAobTUgKiBiMTEgLSBtNiAqIGIxMCArIG03ICogYjA5KSAvIGRldGVybWluYW50LCAobTIgKiBiMTAgLSBtMSAqIGIxMSAtIG0zICogYjA5KSAvIGRldGVybWluYW50LCAobTEzICogYjA1IC0gbTE0ICogYjA0ICsgbTE1ICogYjAzKSAvIGRldGVybWluYW50LCAobTEwICogYjA0IC0gbTkgKiBiMDUgLSBtMTEgKiBiMDMpIC8gZGV0ZXJtaW5hbnQsXG4gICAgKG02ICogYjA4IC0gbTQgKiBiMTEgLSBtNyAqIGIwNykgLyBkZXRlcm1pbmFudCwgKG0wICogYjExIC0gbTIgKiBiMDggKyBtMyAqIGIwNykgLyBkZXRlcm1pbmFudCwgKG0xNCAqIGIwMiAtIG0xMiAqIGIwNSAtIG0xNSAqIGIwMSkgLyBkZXRlcm1pbmFudCwgKG04ICogYjA1IC0gbTEwICogYjAyICsgbTExICogYjAxKSAvIGRldGVybWluYW50LFxuICAgIChtNCAqIGIxMCAtIG01ICogYjA4ICsgbTcgKiBiMDYpIC8gZGV0ZXJtaW5hbnQsIChtMSAqIGIwOCAtIG0wICogYjEwIC0gbTMgKiBiMDYpIC8gZGV0ZXJtaW5hbnQsIChtMTIgKiBiMDQgLSBtMTMgKiBiMDIgKyBtMTUgKiBiMDApIC8gZGV0ZXJtaW5hbnQsIChtOSAqIGIwMiAtIG04ICogYjA0IC0gbTExICogYjAwKSAvIGRldGVybWluYW50LFxuICAgIChtNSAqIGIwNyAtIG00ICogYjA5IC0gbTYgKiBiMDYpIC8gZGV0ZXJtaW5hbnQsIChtMCAqIGIwOSAtIG0xICogYjA3ICsgbTIgKiBiMDYpIC8gZGV0ZXJtaW5hbnQsIChtMTMgKiBiMDEgLSBtMTIgKiBiMDMgLSBtMTQgKiBiMDApIC8gZGV0ZXJtaW5hbnQsIChtOCAqIGIwMyAtIG05ICogYjAxICsgbTEwICogYjAwKSAvIGRldGVybWluYW50LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGU0KG1hdHJpeCwgdmVjdG9yKSB7XG4gIGNvbnN0IFsgeCwgeSwgeiBdID0gdmVjdG9yLFxuXG4gICAgICAgIFsgbTAsIG0xLCBtMiwgbTMsIG00LCBtNSwgbTYsIG03LCBtOCwgbTksIG0xMCwgbTExLCBtMTIsIG0xMywgbTE0LCBtMTUgXSA9IG1hdHJpeDtcblxuICByZXR1cm4gKFtcblxuICAgIG0wICogeCwgbTEgKiB4LCBtMiAqIHgsIG0zICogeCxcbiAgICBtNCAqIHksIG01ICogeSwgbTYgKiB5LCBtNyAqIHksXG4gICAgbTggKiB6LCBtOSAqIHosIG0xMCAqIHosIG0xMSAqIHosXG4gICAgbTEyICogMSwgbTEzICogMSwgbTE0ICogMSwgbTE1ICogMSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZTQobWF0cml4LCBhbmdsZSwgdmVjdG9yKSB7XG4gIGNvbnN0IFsgeCwgeSwgeiBdID0gbm9ybWFsaXNlMyh2ZWN0b3IpLFxuXG4gICAgICAgIFsgbTAsIG0xLCBtMiwgbTMsIG00LCBtNSwgbTYsIG03LCBtOCwgbTksIG0xMCwgbTExLCBtMTIsIG0xMywgbTE0LCBtMTUgXSA9IG1hdHJpeCxcblxuICAgICAgICBzID0gTWF0aC5zaW4oYW5nbGUpLFxuICAgICAgICBjID0gTWF0aC5jb3MoYW5nbGUpLFxuICAgICAgICB0ID0gMSAtIGMsXG5cbiAgICAgICAgYjAwID0geCAqIHggKiB0ICsgYyxcbiAgICAgICAgYjAxID0geSAqIHggKiB0ICsgeiAqIHMsXG4gICAgICAgIGIwMiA9IHogKiB4ICogdCAtIHkgKiBzLFxuICAgICAgICBiMTAgPSB4ICogeSAqIHQgLSB6ICogcyxcbiAgICAgICAgYjExID0geSAqIHkgKiB0ICsgYyxcbiAgICAgICAgYjEyID0geiAqIHkgKiB0ICsgeCAqIHMsXG4gICAgICAgIGIyMCA9IHggKiB6ICogdCArIHkgKiBzLFxuICAgICAgICBiMjEgPSB5ICogeiAqIHQgLSB4ICogcyxcbiAgICAgICAgYjIyID0geiAqIHogKiB0ICsgYztcblxuICByZXR1cm4gKFtcblxuICAgIG0wICogYjAwICsgbTQgKiBiMDEgKyBtOCAqIGIwMiwgbTEgKiBiMDAgKyBtNSAqIGIwMSArIG05ICogYjAyLCBtMiAqIGIwMCArIG02ICogYjAxICsgbTEwICogYjAyLCBtMyAqIGIwMCArIG03ICogYjAxICsgbTExICogYjAyLFxuICAgIG0wICogYjEwICsgbTQgKiBiMTEgKyBtOCAqIGIxMiwgbTEgKiBiMTAgKyBtNSAqIGIxMSArIG05ICogYjEyLCBtMiAqIGIxMCArIG02ICogYjExICsgbTEwICogYjEyLCBtMyAqIGIxMCArIG03ICogYjExICsgbTExICogYjEyLFxuICAgIG0wICogYjIwICsgbTQgKiBiMjEgKyBtOCAqIGIyMiwgbTEgKiBiMjAgKyBtNSAqIGIyMSArIG05ICogYjIyLCBtMiAqIGIyMCArIG02ICogYjIxICsgbTEwICogYjIyLCBtMyAqIGIyMCArIG03ICogYjIxICsgbTExICogYjIyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0xMiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTEzLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTE0LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTE1LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlNChtYXRyaXgsIHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHksIHogXSA9IHZlY3RvcixcblxuICAgICAgICBbIG0wLCBtMSwgbTIsIG0zLCBtNCwgbTUsIG02LCBtNywgbTgsIG05LCBtMTAsIG0xMSwgbTEyLCBtMTMsIG0xNCwgbTE1IF0gPSBtYXRyaXg7XG5cbiAgcmV0dXJuIChbXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTAsICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTQsICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtNSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtNiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtNyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTgsICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtOSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0xMCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0xMSxcbiAgICBtMCAqIHggKyBtNCAqIHkgKyBtOCAqIHogKyBtMTIsIG0xICogeCArIG01ICogeSArIG05ICogeiArIG0xMywgbTIgKiB4ICsgbTYgKiB5ICsgbTEwICogeiArIG0xNCwgbTMgKiB4ICsgbTcgKiB5ICsgbTExICogeiArIG0xNSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcnNwZWN0aXZlNChmaWVsZE9mVmlldywgYXNwZWN0UmF0aW8sIHpOZWFyLCB6RmFyKSB7XG4gIGNvbnN0IGYgPSAxIC8gTWF0aC50YW4oZmllbGRPZlZpZXcgLyAyKSxcbiAgICAgICAgbmYgPSAxIC8gKHpOZWFyIC0gekZhcik7XG5cbiAgcmV0dXJuIChbXG5cbiAgICBmIC8gYXNwZWN0UmF0aW8sIDAsIDAsICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgIDAsICAgICAgICAgICAgICAgZiwgMCwgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgMCwgICAgICAgICAgICAgICAwLCAoekZhciArIHpOZWFyKSAqIG5mLCAgICAtMSxcbiAgICAwLCAgICAgICAgICAgICAgIDAsICgyICogekZhciAqIHpOZWFyKSAqIG5mLCAwLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGlkZW50aXR5MixcbiAgaWRlbnRpdHkzLFxuICBpZGVudGl0eTQsXG4gIG11bHRpcGx5MixcbiAgbXVsdGlwbHkzLFxuICBtdWx0aXBseTQsXG4gIGRldGVybWluYW50MixcbiAgZGV0ZXJtaW5hbnQzLFxuICBkZXRlcm1pbmFudDQsXG4gIHRyYW5zcG9zZTIsXG4gIHRyYW5zcG9zZTMsXG4gIHRyYW5zcG9zZTQsXG4gIGludmVydDIsXG4gIGludmVydDMsXG4gIGludmVydDQsXG4gIHNjYWxlNCxcbiAgcm90YXRlNCxcbiAgdHJhbnNsYXRlNCxcbiAgcGVyc3BlY3RpdmU0XG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzY2FsZTMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IERFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgaWRlbnRpdHk0LCBzY2FsZTQsIGludmVydDQsIHJvdGF0ZTQsIHRyYW5zbGF0ZTQsIHRyYW5zcG9zZTQsIHBlcnNwZWN0aXZlNCB9IGZyb20gXCIuLi9tYXRocy9tYXRyaXhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlTWF0cml4RnJvbVNjYWxlKHNjYWxlKSB7XG4gIGxldCBzY2FsZU1hdHJpeCA9IGlkZW50aXR5NCgpO1xuXG4gIHNjYWxlTWF0cml4ID0gc2NhbGU0KHNjYWxlTWF0cml4LCBzY2FsZSk7XG5cbiAgcmV0dXJuIHNjYWxlTWF0cml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzKG9mZnNldHMpIHtcbiAgbGV0IG9mZnNldHNNYXRyaXggPSBpZGVudGl0eTQoKTsgLy8vXG5cbiAgb2Zmc2V0c01hdHJpeCA9IHRyYW5zbGF0ZTQob2Zmc2V0c01hdHJpeCwgb2Zmc2V0cyk7XG5cbiAgcmV0dXJuIG9mZnNldHNNYXRyaXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3NpdGlvbk1hdHJpeEZyb21Ob3RoaW5nKCkge1xuICBsZXQgcG9zaXRpb25NYXRyaXggPSBpZGVudGl0eTQoKTsgLy8vXG5cbiAgcmV0dXJuIHBvc2l0aW9uTWF0cml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UoZGlzdGFuY2UpIHtcbiAgbGV0IHBvc2l0aW9uTWF0cml4ID0gaWRlbnRpdHk0KCk7IC8vL1xuXG4gIGNvbnN0IHggPSAwLFxuICAgICAgICB5ID0gMCxcbiAgICAgICAgeiA9IC1kaXN0YW5jZTtcblxuICBwb3NpdGlvbk1hdHJpeCA9IHRyYW5zbGF0ZTQocG9zaXRpb25NYXRyaXgsIFsgeCwgeSwgeiBdKTtcblxuICByZXR1cm4gcG9zaXRpb25NYXRyaXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3NpdGlvbk1hdHJpeEZyb21Qb3NpdGlvbihwb3NpdGlvbikge1xuICBsZXQgcG9zaXRpb25NYXRyaXggPSBpZGVudGl0eTQoKTsgLy8vXG5cbiAgcG9zaXRpb25NYXRyaXggPSB0cmFuc2xhdGU0KHBvc2l0aW9uTWF0cml4LCBwb3NpdGlvbik7XG5cbiAgcmV0dXJuIHBvc2l0aW9uTWF0cml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyhhbmdsZXMsIHJldmVyc2VPcmRlciA9IGZhbHNlKSB7XG4gIGxldCByb3RhdGlvbnNNYXRyaXggPSBpZGVudGl0eTQoKTsgLy8vXG5cbiAgY29uc3QgZmlyc3RBbmdsZSA9IGZpcnN0KGFuZ2xlcyksXG4gICAgICAgIHNlY29uZEFuZ2xlID0gc2Vjb25kKGFuZ2xlcyksXG4gICAgICAgIHRoaXJkQW5nbGUgPSB0aGlyZChhbmdsZXMpLFxuICAgICAgICB4QW5nbGUgPSBmaXJzdEFuZ2xlLCAgLy8vL1xuICAgICAgICB5QW5nbGUgPSBzZWNvbmRBbmdsZSwgLy8vXG4gICAgICAgIHpBbmdsZSA9IHRoaXJkQW5nbGUsICAvLy9cbiAgICAgICAgeEF4aXMgPSBbIDEsIDAsIDAgXSxcbiAgICAgICAgeUF4aXMgPSBbIDAsIDEsIDAgXSxcbiAgICAgICAgekF4aXMgPSBbIDAsIDAsIDEgXTtcblxuICBpZiAocmV2ZXJzZU9yZGVyKSB7XG4gICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRlNChyb3RhdGlvbnNNYXRyaXgsIHpBbmdsZSwgekF4aXMpO1xuICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0ZTQocm90YXRpb25zTWF0cml4LCB5QW5nbGUsIHlBeGlzKTtcbiAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGU0KHJvdGF0aW9uc01hdHJpeCwgeEFuZ2xlLCB4QXhpcyk7XG4gIH0gZWxzZSB7XG4gICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRlNChyb3RhdGlvbnNNYXRyaXgsIHhBbmdsZSwgeEF4aXMpO1xuICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0ZTQocm90YXRpb25zTWF0cml4LCB5QW5nbGUsIHlBeGlzKTtcbiAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGU0KHJvdGF0aW9uc01hdHJpeCwgekFuZ2xlLCB6QXhpcyk7XG4gIH1cblxuICByZXR1cm4gcm90YXRpb25zTWF0cml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRpb25zTWF0cml4RnJvbVJvdGF0aW9ucyhyb3RhdGlvbnMpIHtcbiAgY29uc3Qgc2NhbGFyID0gREVHUkVFU19UT19SQURJQU5TX01VTFRJUExJRVIsIC8vL1xuICAgICAgICBhbmdsZXMgPSBzY2FsZTMocm90YXRpb25zLCBzY2FsYXIpLFxuICAgICAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcyk7XG5cbiAgcmV0dXJuIHJvdGF0aW9uc01hdHJpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4KHJvdGF0aW9uc01hdHJpeCkge1xuICBsZXQgbm9ybWFsc01hdHJpeCA9IGludmVydDQocm90YXRpb25zTWF0cml4KTsgLy8vXG5cbiAgbm9ybWFsc01hdHJpeCA9IHRyYW5zcG9zZTQobm9ybWFsc01hdHJpeCk7XG5cbiAgcmV0dXJuIG5vcm1hbHNNYXRyaXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0aW9uTWF0cml4RnJvbUNhbWVyYUFuZENhbnZhcyhjYW1lcmEsIGNhbnZhcykge1xuICBjb25zdCB6RmFyID0gY2FtZXJhLmdldFpGYXIoKSxcbiAgICAgICAgek5lYXIgPSBjYW1lcmEuZ2V0Wk5lYXIoKSxcbiAgICAgICAgd2lkdGggPSBjYW52YXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgaGVpZ2h0ID0gY2FudmFzLmdldEhlaWdodCgpLFxuICAgICAgICBmaWVsZE9mVmlldyA9IGNhbWVyYS5nZXRGaWVsZE9mVmlldygpLFxuICAgICAgICBhc3BlY3RSYXRpbyA9ICggd2lkdGggLyBoZWlnaHQgKSxcbiAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IHBlcnNwZWN0aXZlNChmaWVsZE9mVmlldywgYXNwZWN0UmF0aW8sIHpOZWFyLCB6RmFyKTtcblxuICByZXR1cm4gcHJvamVjdGlvbk1hdHJpeDtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbXVsdGlwbHk0IH0gZnJvbSBcIi4uL21hdGhzL21hdHJpeFwiO1xuaW1wb3J0IHsgdHJhbnNmb3JtNCB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IHNjYWxlTWF0cml4RnJvbVNjYWxlLCBwb3NpdGlvbk1hdHJpeEZyb21Qb3NpdGlvbiwgcm90YXRpb25zTWF0cml4RnJvbVJvdGF0aW9ucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbWF0cml4XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wb3NlVHJhbnNmb3JtKHNjYWxlLCBwb3NpdGlvbiwgcm90YXRpb25zKSB7XG4gIGxldCBtYXRyaXggPSBudWxsO1xuXG4gIGlmIChzY2FsZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNjYWxlTWF0cml4ID0gc2NhbGVNYXRyaXhGcm9tU2NhbGUoc2NhbGUpO1xuXG4gICAgbWF0cml4ID0gKG1hdHJpeCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgc2NhbGVNYXRyaXggOlxuICAgICAgICAgICAgICAgICBtdWx0aXBseTQoc2NhbGVNYXRyaXgsIG1hdHJpeCk7XG4gIH1cblxuICBpZiAocm90YXRpb25zICE9PSBudWxsKSB7XG4gICAgY29uc3Qgcm90YXRpb25zTWF0cml4ID0gcm90YXRpb25zTWF0cml4RnJvbVJvdGF0aW9ucyhyb3RhdGlvbnMpO1xuXG4gICAgbWF0cml4ID0gKG1hdHJpeCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgcm90YXRpb25zTWF0cml4IDpcbiAgICAgICAgICAgICAgICAgbXVsdGlwbHk0KHJvdGF0aW9uc01hdHJpeCwgbWF0cml4KTtcblxuICB9XG5cbiAgaWYgKHBvc2l0aW9uICE9PSBudWxsKSB7XG4gICAgY29uc3QgcG9zaXRpb25NYXRyaXggPSBwb3NpdGlvbk1hdHJpeEZyb21Qb3NpdGlvbihwb3NpdGlvbik7XG5cbiAgICBtYXRyaXggPSAobWF0cml4ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgcG9zaXRpb25NYXRyaXggOlxuICAgICAgICAgICAgICAgICAgbXVsdGlwbHk0KHBvc2l0aW9uTWF0cml4LCBtYXRyaXgpO1xuICB9XG5cbiAgY29uc3QgdHJhbnNmb3JtID0gKG1hdHJpeCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICh2ZWN0b3IpID0+IHZlY3RvciA6XG4gICAgICAgICAgICAgICAgICAgICAgICAodmVjdG9yKSA9PiB0cmFuc2Zvcm00KFsgLi4udmVjdG9yLCAxIF0sIG1hdHJpeCkuc2xpY2UoMCwgMyk7XG5cbiAgcmV0dXJuIHRyYW5zZm9ybTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcbmltcG9ydCBNYXNraW5nRmFjZXQgZnJvbSBcIi4uL3ByaW1pdGl2ZS9tYXNraW5nRmFjZXRcIjtcblxuaW1wb3J0IHsgYWRkIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHtjb21wb3NlVHJhbnNmb3JtfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3RyYW5zZm9ybVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXNrIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlZmVyZW5jZSwgdHJhbnNmb3JtKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFRyYW5zZm9ybSgpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm07XG4gIH1cblxuICByZXRyaWV2ZU1hc2tpbmdGYWNldHMoKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpLFxuICAgICAgICAgIGZhY2V0cyA9IHJldHJpZXZlRmFjZXRzKGNoaWxkRWxlbWVudHMpLFxuICAgICAgICAgIG1hc2tpbmdGYWNldHMgPSBmYWNldHMubWFwKChmYWNldCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWFza2luZ0ZhY2V0ID0gTWFza2luZ0ZhY2V0LmZyb21GYWNldChmYWNldCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBtYXNraW5nRmFjZXQ7XG4gICAgICAgICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIG1hc2tpbmdGYWNldHM7ICAgICAgICAgIFxuICB9XG5cbiAgbWFza0VsZW1lbnQoZWxlbWVudCwgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IG1hc2tpbmdGYWNldHMgPSB0aGlzLnJldHJpZXZlTWFza2luZ0ZhY2V0cygpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIG1hc2tFbGVtZW50KGVsZW1lbnQsIG1hc2tpbmdGYWNldHMsIG1hcmdpbk9mRXJyb3IpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICAgIG1hc2tFbGVtZW50KGNoaWxkRWxlbWVudCwgbWFza2luZ0ZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gICAgfSk7XG4gIH1cblxuICBhcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgICAgY2hpbGRFbGVtZW50LmFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVGYWNldHMobWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgICBjaGlsZEVsZW1lbnQuY3JlYXRlRmFjZXRzKG1hcmdpbk9mRXJyb3IpO1xuICAgIH0pO1xuICB9XG5cbiAgbWFza0ZhY2V0cyhtYXNrcywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgICBjaGlsZEVsZW1lbnQubWFza0ZhY2V0cyhtYXNrcywgbWFyZ2luT2ZFcnJvcik7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFwcGx5VHJhbnNmb3JtKHRoaXMudHJhbnNmb3JtKTsgIC8vL1xuICB9XG5cbiAgYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHt9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHJlZmVyZW5jZSwgc2NhbGUgPSBudWxsLCBwb3NpdGlvbiA9IG51bGwsIHJvdGF0aW9ucyA9IG51bGwgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdHJhbnNmb3JtID0gY29tcG9zZVRyYW5zZm9ybShzY2FsZSwgcG9zaXRpb24sIHJvdGF0aW9ucyksXG4gICAgICAgICAgbWFzayA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoTWFzaywgcHJvcGVydGllcywgcmVmZXJlbmNlLCB0cmFuc2Zvcm0pO1xuXG4gICAgcmV0dXJuIG1hc2s7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmV0cmlldmVGYWNldHMoY2hpbGRFbGVtZW50cywgZmFjZXRzID0gW10pIHtcbiAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gY2hpbGRFbGVtZW50LCAvLy9cbiAgICAgICAgICBlbGVtZW50RmFjZXRzID0gZWxlbWVudC5nZXRGYWNldHMoKSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudC5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBhZGQoZmFjZXRzLCBlbGVtZW50RmFjZXRzKTtcblxuICAgIHJldHJpZXZlRmFjZXRzKGNoaWxkRWxlbWVudHMsIGZhY2V0cyk7XG4gIH0pO1xuXG4gIHJldHVybiBmYWNldHM7XG59XG5cbmZ1bmN0aW9uIG1hc2tFbGVtZW50KGVsZW1lbnQsIG1hc2tpbmdGYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgbGV0IGZhY2V0cyA9IGVsZW1lbnQuZ2V0RmFjZXRzKCk7XG5cbiAgbWFza2luZ0ZhY2V0cy5mb3JFYWNoKChtYXNraW5nRmFjZXQpID0+IHtcbiAgICBjb25zdCB1bm1hc2tlZEZhY2V0cyA9IFtdO1xuXG4gICAgZmFjZXRzLmZvckVhY2goKGZhY2V0KSA9PiB7XG4gICAgICBtYXNraW5nRmFjZXQubWFza0ZhY2V0KGZhY2V0LCB1bm1hc2tlZEZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gICAgfSk7XG5cbiAgICBmYWNldHMgPSB1bm1hc2tlZEZhY2V0czsgIC8vL1xuICB9KTtcblxuICBlbGVtZW50LnNldEZhY2V0cyhmYWNldHMpO1xuXG4gIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmdldENoaWxkRWxlbWVudHMoKTtcblxuICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBjaGlsZEVsZW1lbnQ7IC8vL1xuXG4gICAgbWFza0VsZW1lbnQoZWxlbWVudCwgbWFza2luZ0ZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gIH0pO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudHNGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzLCBDbGFzcykge1xuICBjb25zdCBlbGVtZW50cyA9IGNoaWxkRWxlbWVudHMucmVkdWNlKChlbGVtZW50cywgY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgaWYgKENsYXNzLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGNoaWxkRWxlbWVudCkpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBjaGlsZEVsZW1lbnQ7ICAvLy9cblxuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnRzO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudEZyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMsIENsYXNzKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBjaGlsZEVsZW1lbnRzLnJlZHVjZSgoZWxlbWVudCwgY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgaWYgKGVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgIGlmIChDbGFzcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihjaGlsZEVsZW1lbnQpKSB7XG4gICAgICAgIGVsZW1lbnQgPSBjaGlsZEVsZW1lbnQ7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXNrIGZyb20gXCIuL21hc2tcIjtcbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmltcG9ydCB7IGNvbXBvc2VUcmFuc2Zvcm0gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3RyYW5zZm9ybVwiO1xuaW1wb3J0IHsgZWxlbWVudHNGcm9tQ2hpbGRFbGVtZW50cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXNFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKG1hc2tSZWZlcmVuY2UsIHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrcykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm1hc2tSZWZlcmVuY2UgPSBtYXNrUmVmZXJlbmNlO1xuICAgIHRoaXMudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgIHRoaXMuZmFjZXRzID0gZmFjZXRzO1xuICAgIHRoaXMubWFza3MgPSBtYXNrcztcbiAgfVxuXG4gIGdldE1hc2tSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFza1JlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFRyYW5zZm9ybSgpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm07XG4gIH1cblxuICBnZXRGYWNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmFjZXRzO1xuICB9XG5cbiAgZ2V0TWFza3MoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFza3M7XG4gIH1cblxuICBzZXRGYWNldHMoZmFjZXRzKSB7XG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7XG4gIH1cblxuICBhcHBseU1hc2sobWFza3MsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBpZiAodGhpcy5tYXNrUmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtYXNrID0gbWFza3MuZmluZCgobWFzaykgPT4ge1xuICAgICAgICBjb25zdCByZWZlcmVuY2UgPSBtYXNrLmdldFJlZmVyZW5jZSgpO1xuXG4gICAgICAgIGlmIChyZWZlcmVuY2UgPT09IHRoaXMubWFza1JlZmVyZW5jZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KSB8fCBudWxsOyAvLy9cblxuICAgICAgaWYgKG1hc2sgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgICAgIG1hc2subWFza0VsZW1lbnQoZWxlbWVudCwgbWFyZ2luT2ZFcnJvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgdGhpcy5mYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IHtcbiAgICAgIGZhY2V0LmFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSk7XG4gICAgfSk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgICAgY2hpbGRFbGVtZW50LmFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVGYWNldHMobWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgICBjaGlsZEVsZW1lbnQuY3JlYXRlRmFjZXRzKG1hcmdpbk9mRXJyb3IpO1xuICAgIH0pO1xuICB9XG5cbiAgbWFza0ZhY2V0cyhtYXNrcywgbWFyZ2luT2ZFcnJvcikge1xuICAgIG1hc2tzID0gWyAuLi5tYXNrcywgLi4udGhpcy5tYXNrcyBdOyAvLy9cblxuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgICBjaGlsZEVsZW1lbnQubWFza0ZhY2V0cyhtYXNrcywgbWFyZ2luT2ZFcnJvcik7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFwcGx5VHJhbnNmb3JtKHRoaXMudHJhbnNmb3JtKTsgIC8vL1xuXG4gICAgdGhpcy5hcHBseU1hc2sobWFza3MsIG1hcmdpbk9mRXJyb3IpO1xuICB9XG5cbiAgYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgICAgY2hpbGRFbGVtZW50LmFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyBjaGlsZEVsZW1lbnRzLCBzY2FsZSA9IG51bGwsIHBvc2l0aW9uID0gbnVsbCwgcm90YXRpb25zID0gbnVsbCwgbWFza1JlZmVyZW5jZSA9IG51bGwgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdHJhbnNmb3JtID0gY29tcG9zZVRyYW5zZm9ybShzY2FsZSwgcG9zaXRpb24sIHJvdGF0aW9ucyksXG4gICAgICAgICAgZmFjZXRzID0gW10sXG4gICAgICAgICAgbWFza3MgPSBlbGVtZW50c0Zyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMsIE1hc2spLFxuICAgICAgICAgIGNhbnZhc0VsZW1lbnQgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBtYXNrUmVmZXJlbmNlLCB0cmFuc2Zvcm0sIGZhY2V0cywgbWFza3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gY2FudmFzRWxlbWVudDtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ2FudmFzRWxlbWVudCBmcm9tIFwiLi4vLi4vZWxlbWVudC9jYW52YXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVuY3Rpb25DYW52YXNFbGVtZW50IGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgZnVuY3Rpb25DYW52YXNFbGVtZW50ID0gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhGdW5jdGlvbkNhbnZhc0VsZW1lbnQsIHByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uQ2FudmFzRWxlbWVudDtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRmFsc2V5RWxlbWVudHMoZWxlbWVudHMpIHtcbiAgZWxlbWVudHMgPSBlbGVtZW50cy5yZWR1Y2UoKGVsZW1lbnRzLCBlbGVtZW50KSA9PiB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi9lbGVtZW50XCI7XG5pbXBvcnQgRnVuY3Rpb25DYW52YXNFbGVtZW50IGZyb20gXCIuL2VsZW1lbnQvY2FudmFzL2Z1bmN0aW9uXCI7XG5cbmltcG9ydCB7IEZVTkNUSU9OIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBmbGF0dGVuLCBndWFyYW50ZWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHJlbW92ZUZhbHNleUVsZW1lbnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2VsZW1lbnRzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4uY2hpbGRFbGVtZW50cykge1xuICBwcm9wZXJ0aWVzID0gcHJvcGVydGllcyB8fCB7fTsgIC8vL1xuXG4gIGNoaWxkRWxlbWVudHMgPSBzYW5pdGlzZUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyk7IC8vL1xuXG4gIGxldCBlbGVtZW50O1xuXG4gIGlmIChFbGVtZW50LmlzUHJvdG90eXBlT2YoZmlyc3RBcmd1bWVudCkpIHtcbiAgICBjb25zdCBDbGFzcyA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgIE9iamVjdC5hc3NpZ24ocHJvcGVydGllcywge1xuICAgICAgY2hpbGRFbGVtZW50c1xuICAgIH0pO1xuXG4gICAgZWxlbWVudCA9IENsYXNzLmZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSBGVU5DVElPTikge1xuICAgIGNvbnN0IGZ1bmMgPSBmaXJzdEFyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IGd1YXJhbnRlZShmdW5jKHByb3BlcnRpZXMpKTtcblxuICAgIE9iamVjdC5hc3NpZ24ocHJvcGVydGllcywge1xuICAgICAgY2hpbGRFbGVtZW50c1xuICAgIH0pO1xuXG4gICAgZWxlbWVudCA9IEZ1bmN0aW9uQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5jb25zdCBSZWFjdCA9IHtcbiAgY3JlYXRlRWxlbWVudFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3Q7XG5cbmZ1bmN0aW9uIHNhbml0aXNlQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSB7XG4gIGNoaWxkRWxlbWVudHMgPSBmbGF0dGVuKGNoaWxkRWxlbWVudHMpO1xuXG4gIGNoaWxkRWxlbWVudHMgPSByZW1vdmVGYWxzZXlFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcblxuICByZXR1cm4gY2hpbGRFbGVtZW50cztcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gXCIuL3JlYWN0XCI7XG5cbk9iamVjdC5hc3NpZ24oZ2xvYmFsVGhpcywge1xuICBSZWFjdFxufSk7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IERFRkFVTFRfREVQVEggfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcblxuZnVuY3Rpb24gY2xlYXJEZXB0aChkZXB0aCA9IERFRkFVTFRfREVQVEgpIHtcbiAgdGhpcy5jb250ZXh0LmNsZWFyRGVwdGgoZGVwdGgpOyBcbn1cblxuZnVuY3Rpb24gY2xlYXJEZXB0aEJ1ZmZlcigpIHtcbiAgY29uc3QgeyBERVBUSF9CVUZGRVJfQklUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIG1hc2sgPSBERVBUSF9CVUZGRVJfQklUO1xuXG4gIHRoaXMuY29udGV4dC5jbGVhcihtYXNrKTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlRGVwdGhUZXN0aW5nKCkge1xuICBjb25zdCB7IERFUFRIX1RFU1QsIExFUVVBTCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICBjYXBhY2l0eSA9IERFUFRIX1RFU1QsXG4gICAgICAgIGRlcHRoQ29tcGFyaXNvbkZ1bmN0aW9uID0gTEVRVUFMO1xuXG4gIHRoaXMuY29udGV4dC5lbmFibGUoY2FwYWNpdHkpO1xuXG4gIHRoaXMuY29udGV4dC5kZXB0aEZ1bmMoZGVwdGhDb21wYXJpc29uRnVuY3Rpb24pO1xufVxuXG5jb25zdCBkZXB0aE1peGlucyA9IHtcbiAgY2xlYXJEZXB0aCxcbiAgY2xlYXJEZXB0aEJ1ZmZlcixcbiAgZW5hYmxlRGVwdGhUZXN0aW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZXB0aE1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFNIQURFUl9FUlJPUiA9IFwiVW5hYmxlIHRvIGNyZWF0ZSB0aGUgc2hhZGVyLlwiO1xuZXhwb3J0IGNvbnN0IFdFQl9HTF9DT05URVhUX0VSUk9SID0gXCJVbmFibGUgdG8gZ2V0IHRoZSBXZWJHTCBjb250ZXh0LlwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBTSEFERVJfRVJST1IgfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNoYWRlcih0eXBlLCBzaGFkZXJTb3VyY2UpIHtcbiAgY29uc3QgeyBDT01QSUxFX1NUQVRVUyB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICBwbmFtZSA9IENPTVBJTEVfU1RBVFVTLFxuICAgICAgICBzaGFkZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlU2hhZGVyKHR5cGUpO1xuXG4gIHRoaXMuY29udGV4dC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzaGFkZXJTb3VyY2UpO1xuXG4gIHRoaXMuY29udGV4dC5jb21waWxlU2hhZGVyKHNoYWRlcik7XG5cbiAgY29uc3QgY29tcGlsZVN0YXR1cyA9IHRoaXMuY29udGV4dC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBwbmFtZSk7XG5cbiAgaWYgKCFjb21waWxlU3RhdHVzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFNIQURFUl9FUlJPUik7XG4gIH1cblxuICByZXR1cm4gc2hhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVWZXJ0ZXhTaGFkZXIodmVydGV4U2hhZGVyU291cmNlLCBjYW52YXMpIHtcbiAgY29uc3QgeyBWRVJURVhfU0hBREVSIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHR5cGUgPSBWRVJURVhfU0hBREVSLFxuICAgICAgICB2ZXJ0ZXhTaGFkZXIgPSB0aGlzLmNyZWF0ZVNoYWRlcih0eXBlLCB2ZXJ0ZXhTaGFkZXJTb3VyY2UpO1xuXG4gIHJldHVybiB2ZXJ0ZXhTaGFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyYWdtZW50U2hhZGVyKGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpIHtcbiAgY29uc3QgeyBGUkFHTUVOVF9TSEFERVIgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdHlwZSA9IEZSQUdNRU5UX1NIQURFUixcbiAgICAgICAgZnJhZ21lbnRTaGFkZXIgPSB0aGlzLmNyZWF0ZVNoYWRlcih0eXBlLCBmcmFnbWVudFNoYWRlclNvdXJjZSk7XG5cbiAgcmV0dXJuIGZyYWdtZW50U2hhZGVyO1xufVxuXG5jb25zdCBzaGFkZXJNaXhpbnMgPSB7XG4gIGNyZWF0ZVNoYWRlcixcbiAgY3JlYXRlVmVydGV4U2hhZGVyLFxuICBjcmVhdGVGcmFnbWVudFNoYWRlclxufTtcblxuZXhwb3J0IGRlZmF1bHQgc2hhZGVyTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50QnVmZmVyKGRhdGEpIHtcbiAgY29uc3QgeyBFTEVNRU5UX0FSUkFZX0JVRkZFUiwgU1RBVElDX0RSQVcgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdGFyZ2V0ID0gRUxFTUVOVF9BUlJBWV9CVUZGRVIsXG4gICAgICAgIHVzYWdlID0gU1RBVElDX0RSQVcsXG4gICAgICAgIHVpbnQxNkFycmF5ID0gbmV3IFVpbnQxNkFycmF5KGRhdGEpLFxuICAgICAgICBlbGVtZW50QnVmZmVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZUJ1ZmZlcigpO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRhcmdldCwgZWxlbWVudEJ1ZmZlcik7XG5cbiAgdGhpcy5jb250ZXh0LmJ1ZmZlckRhdGEodGFyZ2V0LCB1aW50MTZBcnJheSwgdXNhZ2UpO1xuXG4gIHJldHVybiBlbGVtZW50QnVmZmVyO1xufVxuXG5mdW5jdGlvbiBiaW5kRWxlbWVudEJ1ZmZlcihlbGVtZW50QnVmZmVyKSB7XG4gIGNvbnN0IHsgRUxFTUVOVF9BUlJBWV9CVUZGRVIgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdGFyZ2V0ID0gRUxFTUVOVF9BUlJBWV9CVUZGRVI7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGFyZ2V0LCBlbGVtZW50QnVmZmVyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnVmZmVyKGRhdGEpIHtcbiAgY29uc3QgeyBBUlJBWV9CVUZGRVIsIFNUQVRJQ19EUkFXIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHRhcmdldCA9IEFSUkFZX0JVRkZFUixcbiAgICAgICAgdXNhZ2UgPSBTVEFUSUNfRFJBVyxcbiAgICAgICAgYnVmZmVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZUJ1ZmZlcigpLFxuICAgICAgICBmbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KGRhdGEpO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRhcmdldCwgYnVmZmVyKTtcblxuICB0aGlzLmNvbnRleHQuYnVmZmVyRGF0YSh0YXJnZXQsIGZsb2F0MzJBcnJheSwgdXNhZ2UpO1xuXG4gIHJldHVybiBidWZmZXI7XG59XG5cbmZ1bmN0aW9uIGJpbmRCdWZmZXIoYnVmZmVyLCBhdHRyaWJ1dGVMb2NhdGlvbiwgY29tcG9uZW50cykge1xuICBjb25zdCB7IEFSUkFZX0JVRkZFUiwgRkxPQVQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdGFyZ2V0ID0gQVJSQVlfQlVGRkVSLFxuICAgICAgICB0eXBlID0gRkxPQVQsXG4gICAgICAgIG5vcm1hbGl6ZSA9IGZhbHNlLFxuICAgICAgICBzdHJpZGUgPSAwLFxuICAgICAgICBvZmZzZXQgPSAwO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRhcmdldCwgYnVmZmVyKTtcblxuICB0aGlzLmNvbnRleHQudmVydGV4QXR0cmliUG9pbnRlcihhdHRyaWJ1dGVMb2NhdGlvbiwgY29tcG9uZW50cywgdHlwZSwgbm9ybWFsaXplLCBzdHJpZGUsIG9mZnNldCk7XG5cbiAgdGhpcy5jb250ZXh0LmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGF0dHJpYnV0ZUxvY2F0aW9uKTtcbn1cblxuY29uc3QgYnVmZmVyTWl4aW5zID0ge1xuICBjcmVhdGVFbGVtZW50QnVmZmVyLFxuICBiaW5kRWxlbWVudEJ1ZmZlcixcbiAgY3JlYXRlQnVmZmVyLFxuICBiaW5kQnVmZmVyXG59O1xuXG5leHBvcnQgZGVmYXVsdCBidWZmZXJNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGNsZWFyQ29sb3VyKGNvbG91cikge1xuICBjb25zdCBbIHIsIGcsIGIsIGEgPSAxIF0gPSAgY29sb3VyO1xuXG4gIHRoaXMuY29udGV4dC5jbGVhckNvbG9yKHIsIGcsIGIsIGEpO1xufVxuXG5mdW5jdGlvbiBjbGVhckNvbG91ckJ1ZmZlcigpIHtcbiAgY29uc3QgeyBDT0xPUl9CVUZGRVJfQklUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIG1hc2sgPSBDT0xPUl9CVUZGRVJfQklUO1xuXG4gIHRoaXMuY29udGV4dC5jbGVhcihtYXNrKTtcbn1cblxuY29uc3QgY29sb3VyTWl4aW5zID0ge1xuICBjbGVhckNvbG91cixcbiAgY2xlYXJDb2xvdXJCdWZmZXJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbG91ck1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gYXBwbHlNYXRyaXgodW5pZm9ybUxvY2F0aW9uLCBtYXRyaXgpIHtcbiAgY29uc3QgdHJhbnNwb3NlID0gZmFsc2U7ICAvLy9cblxuICB0aGlzLmNvbnRleHQudW5pZm9ybU1hdHJpeDRmdih1bmlmb3JtTG9jYXRpb24sIHRyYW5zcG9zZSwgbWF0cml4KTtcbn1cblxuY29uc3QgbWF0cml4TWl4aW5zID0ge1xuICBhcHBseU1hdHJpeFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbWF0cml4TWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFWFRfVEVYVFVSRV9GSUxURVJfQU5JU09UUk9QSUMsXG4gICAgICAgICBNT1pfRVhUX1RFWFRVUkVfRklMVEVSX0FOSVNPVFJPUElDLFxuICAgICAgICAgV0VCS0lUX0VYVF9URVhUVVJFX0ZJTFRFUl9BTklTT1RST1BJQyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZnVuY3Rpb24gY3JlYXRlVGV4dHVyZShpbWFnZSwgaW5kZXgsIHJlcGVhdCkge1xuXHRjb25zdCB7IFJHQkEsIExJTkVBUiwgVU5TSUdORURfQllURSwgVEVYVFVSRTAsIFRFWFRVUkVfMkQsIFRFWFRVUkVfV1JBUF9TLCBURVhUVVJFX1dSQVBfVCwgVU5QQUNLX0ZMSVBfWV9XRUJHTCwgQ0xBTVBfVE9fRURHRSwgTkVBUkVTVCwgUkVQRUFULCBURVhUVVJFX01JTl9GSUxURVIgfSA9IHRoaXMuY29udGV4dCxcblx0XHRcdFx0dGFyZ2V0ID0gVEVYVFVSRTAgKyBpbmRleCxcblx0XHRcdFx0bGV2ZWwgPSAwLFxuXHRcdFx0XHRpbnRlcm5hbEZvcm1hdCA9IFJHQkEsXG5cdFx0XHRcdGZvcm1hdCA9IFJHQkEsXG5cdFx0XHRcdHR5cGUgPSBVTlNJR05FRF9CWVRFLFxuXHRcdFx0XHR0ZXh0dXJlID0gdGhpcy5jb250ZXh0LmNyZWF0ZVRleHR1cmUoKTtcblxuICB0aGlzLmNvbnRleHQuYWN0aXZlVGV4dHVyZSh0YXJnZXQpO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kVGV4dHVyZShURVhUVVJFXzJELCB0ZXh0dXJlKTtcblxuICB0aGlzLmNvbnRleHQucGl4ZWxTdG9yZWkoVU5QQUNLX0ZMSVBfWV9XRUJHTCwgdHJ1ZSk7XG5cbiAgdGhpcy5jb250ZXh0LnRleEltYWdlMkQoVEVYVFVSRV8yRCwgbGV2ZWwsIGludGVybmFsRm9ybWF0LCBmb3JtYXQsIHR5cGUsIGltYWdlKTtcblxuICBpZiAocmVwZWF0KSB7XG4gICAgdGhpcy5jb250ZXh0LnRleFBhcmFtZXRlcmkoVEVYVFVSRV8yRCwgVEVYVFVSRV9XUkFQX1MsIFJFUEVBVCk7XG4gICAgdGhpcy5jb250ZXh0LnRleFBhcmFtZXRlcmkoVEVYVFVSRV8yRCwgVEVYVFVSRV9XUkFQX1QsIFJFUEVBVCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5jb250ZXh0LnRleFBhcmFtZXRlcmkoVEVYVFVSRV8yRCwgVEVYVFVSRV9XUkFQX1MsIENMQU1QX1RPX0VER0UpO1xuICAgIHRoaXMuY29udGV4dC50ZXhQYXJhbWV0ZXJpKFRFWFRVUkVfMkQsIFRFWFRVUkVfV1JBUF9ULCBDTEFNUF9UT19FREdFKTtcbiAgfVxuXG5cdHRoaXMuY29udGV4dC50ZXhQYXJhbWV0ZXJpKFRFWFRVUkVfMkQsIFRFWFRVUkVfTUlOX0ZJTFRFUiwgTElORUFSKTtcblxuXHRyZXR1cm4gdGV4dHVyZTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlQW5pc290cm9waWNGaWx0ZXJpbmcoKSB7XG4gIGNvbnN0IGV4dGVuc2lvbiA9IChcbiAgICB0aGlzLmNvbnRleHQuZ2V0RXh0ZW5zaW9uKEVYVF9URVhUVVJFX0ZJTFRFUl9BTklTT1RST1BJQykgfHxcbiAgICB0aGlzLmNvbnRleHQuZ2V0RXh0ZW5zaW9uKE1PWl9FWFRfVEVYVFVSRV9GSUxURVJfQU5JU09UUk9QSUMpIHx8XG4gICAgdGhpcy5jb250ZXh0LmdldEV4dGVuc2lvbihXRUJLSVRfRVhUX1RFWFRVUkVfRklMVEVSX0FOSVNPVFJPUElDKVxuICApO1xuXG4gIGlmIChleHRlbnNpb24pIHtcbiAgICBjb25zdCB7IFRFWFRVUkVfMkQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICB7IE1BWF9URVhUVVJFX01BWF9BTklTT1RST1BZX0VYVCwgVEVYVFVSRV9NQVhfQU5JU09UUk9QWV9FWFQgfSA9IGV4dGVuc2lvbixcbiAgICAgICAgICBtYXhpbXVtID0gdGhpcy5jb250ZXh0LmdldFBhcmFtZXRlcihNQVhfVEVYVFVSRV9NQVhfQU5JU09UUk9QWV9FWFQpO1xuXG4gICAgdGhpcy5jb250ZXh0LnRleFBhcmFtZXRlcmYoVEVYVFVSRV8yRCwgVEVYVFVSRV9NQVhfQU5JU09UUk9QWV9FWFQsIG1heGltdW0pO1xuICB9XG59XG5cbmNvbnN0IHRleHR1cmVNaXhpbnMgPSB7XG4gIGNyZWF0ZVRleHR1cmUsXG4gIGVuYWJsZUFuaXNvdHJvcGljRmlsdGVyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCB0ZXh0dXJlTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIpIHtcbiAgY29uc3QgcHJvZ3JhbSA9IHRoaXMuY29udGV4dC5jcmVhdGVQcm9ncmFtKCk7XG5cbiAgdGhpcy5jb250ZXh0LmF0dGFjaFNoYWRlcihwcm9ncmFtLCB2ZXJ0ZXhTaGFkZXIpO1xuXG4gIHRoaXMuY29udGV4dC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgZnJhZ21lbnRTaGFkZXIpO1xuICBcbiAgdGhpcy5jb250ZXh0LmxpbmtQcm9ncmFtKHByb2dyYW0pO1xuICBcbiAgcmV0dXJuIHByb2dyYW07XG59XG5cbmZ1bmN0aW9uIHVzZVByb2dyYW0ocHJvZ3JhbSkge1xuICB0aGlzLmNvbnRleHQudXNlUHJvZ3JhbShwcm9ncmFtKTtcbn1cblxuY29uc3QgcHJvZ3JhbU1peGlucyA9IHtcbiAgY3JlYXRlUHJvZ3JhbSxcbiAgdXNlUHJvZ3JhbVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvZ3JhbU1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gZW5hYmxlQmxlbmRpbmcoKSB7XG4gIGNvbnN0IHsgQkxFTkQsIFNSQ19BTFBIQSwgT05FIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIGNhcGFjaXR5ID0gQkxFTkQsXG4gICAgICAgIHNvdXJjZUZhY3RvciA9IFNSQ19BTFBIQSxcbiAgICAgICAgZGVzdGluYXRpb25GYWN0b3IgPSBPTkU7XG5cbiAgdGhpcy5jb250ZXh0LmVuYWJsZShjYXBhY2l0eSk7XG5cbiAgdGhpcy5jb250ZXh0LmJsZW5kRnVuYyhzb3VyY2VGYWN0b3IsIGRlc3RpbmF0aW9uRmFjdG9yKTtcbn1cblxuY29uc3QgYmxlbmRpbmdNaXhpbnMgPSB7XG4gIGVuYWJsZUJsZW5kaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBibGVuZGluZ01peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSk7XG59XG5cbmZ1bmN0aW9uIGdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCBuYW1lKTtcbn1cblxuZnVuY3Rpb24gc2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKHVuaWZvcm1Mb2NhdGlvbiwgaW50ZWdlclZhbHVlKSB7XG4gIHRoaXMuY29udGV4dC51bmlmb3JtMWkodW5pZm9ybUxvY2F0aW9uLCBpbnRlZ2VyVmFsdWUpO1xufVxuXG5jb25zdCBsb2NhdGlvbk1peGlucyA9IHtcbiAgZ2V0VW5pZm9ybUxvY2F0aW9uLFxuICBnZXRBdHRyaWJ1dGVMb2NhdGlvbixcbiAgc2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2NhdGlvbk1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRlcHRoTWl4aW5zIGZyb20gXCIuL21peGlucy9kZXB0aFwiO1xuaW1wb3J0IHNoYWRlck1peGlucyBmcm9tIFwiLi9taXhpbnMvc2hhZGVyXCI7XG5pbXBvcnQgYnVmZmVyTWl4aW5zIGZyb20gXCIuL21peGlucy9idWZmZXJcIjtcbmltcG9ydCBjb2xvdXJNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2NvbG91clwiO1xuaW1wb3J0IG1hdHJpeE1peGlucyBmcm9tIFwiLi9taXhpbnMvbWF0cml4XCI7XG5pbXBvcnQgdGV4dHVyZU1peGlucyBmcm9tIFwiLi9taXhpbnMvdGV4dHVyZVwiO1xuaW1wb3J0IHByb2dyYW1NaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3Byb2dyYW1cIjtcbmltcG9ydCBibGVuZGluZ01peGlucyBmcm9tIFwiLi9taXhpbnMvYmxlbmRpbmdcIjtcbmltcG9ydCBsb2NhdGlvbk1peGlucyBmcm9tIFwiLi9taXhpbnMvbG9jYXRpb25cIjtcblxuaW1wb3J0IHsgV0VCX0dMX0NPTlRFWFRfRVJST1IgfSBmcm9tIFwiLi9lcnJvcnNcIjtcbmltcG9ydCB7IFdFQkdMLCBXSURUSCwgSEVJR0hULCBDQU5WQVMsIFNUUklORyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciA9IENBTlZBUykge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb21FbGVtZW50RnJvbVNlbGVjdG9yKHNlbGVjdG9yKSxcbiAgICAgICAgICBjb250ZXh0ID0gY29udGV4dEZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcblxuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICB0aGlzLmVuYWJsZURlcHRoVGVzdGluZygpOyAgLy8vXG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC53aWR0aDsgfVxuXG4gIGdldEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5oZWlnaHQ7IH1cblxuICBnZXRDbGllbnRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aDsgfVxuXG4gIGdldENsaWVudEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQ7IH1cblxuICBzZXRXaWR0aCh3aWR0aCkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKFdJRFRILCB3aWR0aCk7IH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoSEVJR0hULCBoZWlnaHQpOyB9XG5cbiAgcmVzaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICBjb25zdCB4ID0gMCxcbiAgICAgICAgICB5ID0gMDtcblxuICAgIHRoaXMuc2V0V2lkdGgod2lkdGgpO1xuXG4gICAgdGhpcy5zZXRIZWlnaHQoaGVpZ2h0KTtcblxuICAgIHRoaXMuY29udGV4dC52aWV3cG9ydCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIGNsZWFyKGNvbG91cikge1xuICAgIHRoaXMuY2xlYXJDb2xvdXIoY29sb3VyKTtcbiAgICB0aGlzLmNsZWFyRGVwdGgoKTtcbiAgICB0aGlzLmNsZWFyRGVwdGhCdWZmZXIoKTtcbiAgICB0aGlzLmNsZWFyQ29sb3VyQnVmZmVyKCk7XG4gIH1cblxuICByZW5kZXIocmVuZGVyZXIsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpIHtcbiAgICBjb25zdCBvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0T2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXROb3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldFJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXRQcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7XG5cbiAgICB0aGlzLmFwcGx5TWF0cml4KG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG9mZnNldHNNYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgobm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsc01hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgocm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbnNNYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgocHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeCk7XG4gIH1cblxuICBkcmF3RWxlbWVudHMoc3RhcnQsIGZpbmlzaCkge1xuICAgIGNvbnN0IHsgVFJJQU5HTEVTLCBVTlNJR05FRF9TSE9SVCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICAgIG1vZGUgPSBUUklBTkdMRVMsXG4gICAgICAgICAgdHlwZSA9IFVOU0lHTkVEX1NIT1JULFxuICAgICAgICAgIGNvdW50ID0gZmluaXNoIC0gc3RhcnQsXG4gICAgICAgICAgb2Zmc2V0ID0gc3RhcnQgKiAyOyAvLy9cblxuICAgIHRoaXMuY29udGV4dC5kcmF3RWxlbWVudHMobW9kZSwgY291bnQsIHR5cGUsIG9mZnNldClcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGRlcHRoTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgc2hhZGVyTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgYnVmZmVyTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgY29sb3VyTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgbWF0cml4TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgdGV4dHVyZU1peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIHByb2dyYW1NaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBibGVuZGluZ01peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGxvY2F0aW9uTWl4aW5zKTtcblxuZnVuY3Rpb24gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3Rvcikge1xuICBjb25zdCBkb21FbGVtZW50ID0gKHR5cGVvZiBzZWxlY3RvciA9PT0gU1RSSU5HKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpWzBdIDogIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOyAgLy8vXG5cbiAgcmV0dXJuIGRvbUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNvbnRleHRGcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gIGNvbnN0IGNvbnRleHQgPSBkb21FbGVtZW50LmdldENvbnRleHQoV0VCR0wpO1xuXG4gIGlmICghY29udGV4dCkge1xuICAgIHRocm93IG5ldyBFcnJvcihXRUJfR0xfQ09OVEVYVF9FUlJPUik7XG4gIH1cblxuICByZXR1cm4gY29udGV4dDtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYWRkIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKSB7XG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7XG4gICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcbiAgICB0aGlzLnJlbmRlcmVyRGF0YSA9IHJlbmRlcmVyRGF0YTtcbiAgICB0aGlzLnJlbmRlcmVyQnVmZmVycyA9IHJlbmRlcmVyQnVmZmVycztcbiAgICB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMgPSB1bmlmb3JtTG9jYXRpb25zO1xuICAgIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zID0gYXR0cmlidXRlTG9jYXRpb25zO1xuICB9XG5cbiAgZ2V0RmFjZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmZhY2V0cztcbiAgfVxuXG4gIGdldFByb2dyYW0oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZ3JhbTtcbiAgfVxuICBcbiAgZ2V0UmVuZGVyZXJEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnJlbmRlcmVyRGF0YTtcbiAgfVxuICBcbiAgZ2V0UmVuZGVyZXJCdWZmZXJzKCkge1xuICAgIHJldHVybiB0aGlzLnJlbmRlcmVyQnVmZmVycztcbiAgfVxuXG4gIGdldFVuaWZvcm1Mb2NhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucztcbiAgfVxuXG4gIGdldEF0dHJpYnV0ZUxvY2F0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnM7XG4gIH1cblxuICBnZXRDb3VudCgpIHsgcmV0dXJuIHRoaXMucmVuZGVyZXJEYXRhLmdldENvdW50KCk7IH1cblxuICBnZXRPZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldE9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldE5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0Tm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXRSb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zLmdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKTsgfVxuXG4gIGdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnMuZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKTsgfVxuXG4gIGFkZEZhY2V0cyhmYWNldHMpIHtcbiAgICBhZGQodGhpcy5mYWNldHMsIGZhY2V0cyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyU291cmNlLCBmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSB7XG4gIGNvbnN0IHZlcnRleFNoYWRlciA9IGNhbnZhcy5jcmVhdGVWZXJ0ZXhTaGFkZXIodmVydGV4U2hhZGVyU291cmNlKSxcbiAgICAgICAgZnJhZ21lbnRTaGFkZXIgPSBjYW52YXMuY3JlYXRlRnJhZ21lbnRTaGFkZXIoZnJhZ21lbnRTaGFkZXJTb3VyY2UpLFxuICAgICAgICBwcm9ncmFtID0gY2FudmFzLmNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcik7XG4gIFxuICByZXR1cm4gcHJvZ3JhbTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYWRkLCBmbGF0dGVuIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlckRhdGEge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEpIHtcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uc0RhdGEgPSB2ZXJ0ZXhQb3NpdGlvbnNEYXRhO1xuICAgIHRoaXMudmVydGV4Tm9ybWFsc0RhdGEgPSB2ZXJ0ZXhOb3JtYWxzRGF0YTtcbiAgICB0aGlzLnZlcnRleEluZGV4ZXNEYXRhID0gdmVydGV4SW5kZXhlc0RhdGE7XG4gIH1cblxuICBnZXRDb3VudCgpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbmRleGVzRGF0YUxlbmd0aCA9IHRoaXMudmVydGV4SW5kZXhlc0RhdGEubGVuZ3RoLFxuICAgICAgICAgIGNvdW50ID0gdmVydGV4SW5kZXhlc0RhdGFMZW5ndGg7ICAvLy9cblxuICAgIHJldHVybiBjb3VudDtcbiAgfVxuICBcbiAgZ2V0VmVydGV4UG9zaXRpb25zRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhQb3NpdGlvbnNEYXRhO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhOb3JtYWxzRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhOb3JtYWxzRGF0YTtcbiAgfVxuICBcbiAgZ2V0VmVydGV4SW5kZXhlc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4SW5kZXhlc0RhdGE7XG4gIH1cblxuICBhZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zRGF0YSA9IGZsYXR0ZW4odmVydGV4UG9zaXRpb25zKTtcblxuICAgIGFkZCh0aGlzLnZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleFBvc2l0aW9uc0RhdGEpO1xuICB9XG5cbiAgYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKSB7XG4gICAgY29uc3QgdmVydGV4Tm9ybWFsc0RhdGEgPSBmbGF0dGVuKHZlcnRleE5vcm1hbHMpO1xuXG4gICAgYWRkKHRoaXMudmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhKTtcbiAgfVxuXG4gIGFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcykge1xuICAgIGNvbnN0IHZlcnRleEluZGV4ZXNEYXRhID0gdmVydGV4SW5kZXhlczsgIC8vL1xuXG4gICAgYWRkKHRoaXMudmVydGV4SW5kZXhlc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zRGF0YSA9IFtdLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHNEYXRhID0gW10sXG4gICAgICAgICAgdmVydGV4SW5kZXhlc0RhdGEgPSBbXSxcbiAgICAgICAgICByZW5kZXJlckRhdGEgPSBuZXcgQ2xhc3ModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIFxuICAgIHJldHVybiByZW5kZXJlckRhdGE7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlbmRlcmVyRGF0YSBmcm9tIFwiLi4vLi4vcmVuZGVyZXIvZGF0YVwiO1xuXG5pbXBvcnQgeyBhZGQsIGZsYXR0ZW4gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG91clJlbmRlcmVyRGF0YSBleHRlbmRzIFJlbmRlcmVyRGF0YSB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4Q29sb3Vyc0RhdGEpIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEpO1xuXG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJzRGF0YSA9IHZlcnRleENvbG91cnNEYXRhO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhDb2xvdXJzRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhDb2xvdXJzRGF0YTtcbiAgfVxuXG4gIGFkZFZlcnRleENvbG91cnModmVydGV4Q29sb3Vycykge1xuICAgIGNvbnN0IHZlcnRleENvbG91cnNEYXRhID0gZmxhdHRlbih2ZXJ0ZXhDb2xvdXJzKTtcblxuICAgIGFkZCh0aGlzLnZlcnRleENvbG91cnNEYXRhLCB2ZXJ0ZXhDb2xvdXJzRGF0YSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IFxuICAgIGNvbnN0IHZlcnRleENvbG91cnNEYXRhID0gW10sXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXJEYXRhID0gUmVuZGVyZXJEYXRhLmZyb21Ob3RoaW5nKENvbG91clJlbmRlcmVyRGF0YSwgdmVydGV4Q29sb3Vyc0RhdGEpO1xuICAgIFxuICAgIHJldHVybiBjb2xvdXJSZW5kZXJlckRhdGE7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IG5vcm1hbHNNYXRyaXhOYW1lID0gXCJ1Tm9ybWFsc01hdHJpeFwiO1xuZXhwb3J0IGNvbnN0IHZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWUgPSBcImFWZXJ0ZXhOb3JtYWxcIjtcblxuY29uc3QgbGlnaHRpbmdTb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgXG4gICAgICAgIHVuaWZvcm0gbWF0NCAke25vcm1hbHNNYXRyaXhOYW1lfTtcblxuICAgICAgICBhdHRyaWJ1dGUgdmVjMyAke3ZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWV9O1xuXG4gICAgICAgIHZlYzMgZGlyZWN0aW9uYWxMaWdodENvbG91ciA9IHZlYzMoMSwgMSwgMSksXG4gICAgICAgICAgICAgZGlyZWN0aW9uYWxWZWN0b3IgPSBub3JtYWxpemUodmVjMygxLjAsIDEuMCwgMS4wKSk7XG4gICAgICAgICAgXG4gICAgICAgIHZlYzMgY2FsY3VsYXRlTGlnaHRpbmcoKSB7XG4gICAgICAgICAgdmVjNCB0cmFuc2Zvcm1lZE5vcm1hbCA9ICR7bm9ybWFsc01hdHJpeE5hbWV9ICogdmVjNCgke3ZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWV9LCAxLjApOyAgICAgICAgICAgIFxuXG4gICAgICAgICAgZmxvYXQgZGlyZWN0aW9uYWwgPSAoZG90KHRyYW5zZm9ybWVkTm9ybWFsLnh5eiwgZGlyZWN0aW9uYWxWZWN0b3IpICsgMS4wKSAvIDIuMDtcbiAgICAgICAgICBcbiAgICAgICAgICB2ZWMzIGxpZ2h0aW5nID0gKGRpcmVjdGlvbmFsTGlnaHRDb2xvdXIgKiBkaXJlY3Rpb25hbCk7XG4gICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIGxpZ2h0aW5nO1xuICAgICAgICB9XG5cbiAgICAgIGApO1xuXG5leHBvcnQgZGVmYXVsdCBsaWdodGluZ1NvdXJjZTsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBvZmZzZXRzTWF0cml4TmFtZSA9IFwidU9mZnNldHNNYXRyaXhcIjtcbmV4cG9ydCBjb25zdCBwb3NpdGlvbk1hdHJpeE5hbWUgPSBcInVQb3NpdGlvbk1hdHJpeFwiO1xuZXhwb3J0IGNvbnN0IHJvdGF0aW9uc01hdHJpeE5hbWUgPSBcInVSb3RhdGlvbnNNYXRyaXhcIjtcbmV4cG9ydCBjb25zdCBwcm9qZWN0aW9uTWF0cml4TmFtZSA9IFwidVBlcnNwZWN0aXZlTWF0cml4XCI7XG5leHBvcnQgY29uc3QgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lID0gXCJhVmVydGV4UG9zaXRpb25cIjtcblxuY29uc3QgcG9zaXRpb25Tb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgXG4gICAgICAgIHVuaWZvcm0gbWF0NCAke29mZnNldHNNYXRyaXhOYW1lfSxcbiAgICAgICAgICAgICAgICAgICAgICR7cm90YXRpb25zTWF0cml4TmFtZX0sXG4gICAgICAgICAgICAgICAgICAgICAke3Bvc2l0aW9uTWF0cml4TmFtZX0sXG4gICAgICAgICAgICAgICAgICAgICAke3Byb2plY3Rpb25NYXRyaXhOYW1lfTtcbiAgICAgICAgXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWM0ICR7dmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lfTtcblxuICAgICAgICB2ZWM0IGNhbGN1bGF0ZVBvc2l0aW9uKCkge1xuICAgICAgICAgIHZlYzQgcG9zaXRpb24gPSAke3Byb2plY3Rpb25NYXRyaXhOYW1lfSAqICR7cG9zaXRpb25NYXRyaXhOYW1lfSAqICR7cm90YXRpb25zTWF0cml4TmFtZX0gKiAke29mZnNldHNNYXRyaXhOYW1lfSAqICR7dmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lfTtcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gcG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgKTtcblxuZXhwb3J0IGRlZmF1bHQgcG9zaXRpb25Tb3VyY2U7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBsaWdodGluZ1NvdXJjZSBmcm9tIFwiLi4vLi4vc291cmNlL2xpZ2h0aW5nXCI7XG5pbXBvcnQgcG9zaXRpb25Tb3VyY2UgZnJvbSBcIi4uLy4uL3NvdXJjZS9wb3NpdGlvblwiO1xuXG5leHBvcnQgY29uc3QgdmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZSA9IFwiYVZlcnRleENvbG91clwiXG5cbmNvbnN0IHZlcnRleFNoYWRlclNvdXJjZSA9IG5ldyBTdHJpbmcoYFxuICAgIFxuICAgICAgICBhdHRyaWJ1dGUgdmVjNCAke3ZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWV9O1xuXG4gICAgICAgICR7bGlnaHRpbmdTb3VyY2V9XG4gICAgICBcbiAgICAgICAgJHtwb3NpdGlvblNvdXJjZX1cbiAgICBcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcbiAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgbG93cCB2ZWM0IHZDb2xvdXI7XG4gICAgICAgIFxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgdkxpZ2h0aW5nID0gY2FsY3VsYXRlTGlnaHRpbmcoKTtcblxuICAgICAgICAgIGdsX1Bvc2l0aW9uID0gY2FsY3VsYXRlUG9zaXRpb24oKTtcblxuICAgICAgICAgIHZDb2xvdXIgPSAke3ZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWV9OyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgKTtcblxuZXhwb3J0IGRlZmF1bHQgdmVydGV4U2hhZGVyU291cmNlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBmcmFnbWVudFNoYWRlclNvdXJjZSA9IG5ldyBTdHJpbmcoYFxuICAgICAgICBcbiAgICAgICAgdmFyeWluZyBsb3dwIHZlYzQgdkNvbG91cjtcbiAgICAgICAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG5cbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQodkNvbG91ci5yZ2IgKiB2TGlnaHRpbmcsIHZDb2xvdXIuYSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgKTtcblxuZXhwb3J0IGRlZmF1bHQgZnJhZ21lbnRTaGFkZXJTb3VyY2U7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IHZlcnRleE5vcm1hbENvbXBvbmVudHMgPSAzLFxuICAgICAgdmVydGV4UG9zaXRpb25Db21wb25lbnRzID0gMztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyZXJCdWZmZXJzIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcikge1xuICAgIHRoaXMudmVydGV4UG9zaXRpb25zQnVmZmVyID0gdmVydGV4UG9zaXRpb25zQnVmZmVyO1xuICAgIHRoaXMudmVydGV4Tm9ybWFsc0J1ZmZlciA9IHZlcnRleE5vcm1hbHNCdWZmZXI7XG4gICAgdGhpcy52ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciA9IHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyO1xuICB9XG5cbiAgY3JlYXRlVmVydGV4UG9zaXRpb25zQnVmZmVyKHZlcnRleFBvc2l0aW9uc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4UG9zaXRpb25zQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleE5vcm1hbHNCdWZmZXIodmVydGV4Tm9ybWFsc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4Tm9ybWFsc0J1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodmVydGV4Tm9ybWFsc0RhdGEpO1xuICB9XG5cbiAgY3JlYXRlVmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIodmVydGV4SW5kZXhlc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIgPSBjYW52YXMuY3JlYXRlRWxlbWVudEJ1ZmZlcih2ZXJ0ZXhJbmRleGVzRGF0YSk7XG4gIH1cblxuICBiaW5kVmVydGV4Tm9ybWFsc0J1ZmZlcih2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy52ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQ29tcG9uZW50cyk7XG4gIH1cblxuICBiaW5kVmVydGV4UG9zaXRpb25zQnVmZmVyKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkNvbXBvbmVudHMpO1xuICB9XG5cbiAgYmluZFZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kRWxlbWVudEJ1ZmZlcih0aGlzLnZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKTtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLmNyZWF0ZVZlcnRleFBvc2l0aW9uc0J1ZmZlcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCBjYW52YXMpO1xuICAgIHRoaXMuY3JlYXRlVmVydGV4Tm9ybWFsc0J1ZmZlcih2ZXJ0ZXhOb3JtYWxzRGF0YSwgY2FudmFzKTtcbiAgICB0aGlzLmNyZWF0ZVZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKHZlcnRleEluZGV4ZXNEYXRhLCBjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIHRoaXMuYmluZFZlcnRleE5vcm1hbHNCdWZmZXIodmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gICAgdGhpcy5iaW5kVmVydGV4UG9zaXRpb25zQnVmZmVyKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gICAgdGhpcy5iaW5kVmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIoY2FudmFzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zQnVmZmVyID0gbnVsbCwgLy8vXG4gICAgICAgICAgdmVydGV4Tm9ybWFsc0J1ZmZlciA9IG51bGwsIC8vL1xuICAgICAgICAgIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHJlbmRlcmVyQnVmZmVycyA9IG5ldyBDbGFzcyh2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHJlbmRlcmVyQnVmZmVycztcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVuZGVyZXJCdWZmZXJzIGZyb20gXCIuLi8uLi9yZW5kZXJlci9idWZmZXJzXCI7XG5cbmNvbnN0IHZlcnRleENvbG91ckNvbXBvbmVudHMgPSA0O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvdXJSZW5kZXJlckJ1ZmZlcnMgZXh0ZW5kcyBSZW5kZXJlckJ1ZmZlcnMge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyLCB2ZXJ0ZXhDb2xvdXJzQnVmZmVyKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcik7XG5cbiAgICB0aGlzLnZlcnRleENvbG91cnNCdWZmZXIgPSB2ZXJ0ZXhDb2xvdXJzQnVmZmVyO1xuICB9XG5cbiAgY3JlYXRlVmVydGV4Q29sb3Vyc0J1ZmZlcih2ZXJ0ZXhDb2xvdXJzRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJzQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih2ZXJ0ZXhDb2xvdXJzRGF0YSk7XG4gIH1cblxuICBiaW5kVmVydGV4Q29sb3Vyc0J1ZmZlcih2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy52ZXJ0ZXhDb2xvdXJzQnVmZmVyLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Q29sb3VyQ29tcG9uZW50cyk7XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4Q29sb3Vyc0RhdGEsIGNhbnZhcykge1xuICAgIHN1cGVyLmNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCBjYW52YXMpO1xuXG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhDb2xvdXJzQnVmZmVyKHZlcnRleENvbG91cnNEYXRhLCBjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBzdXBlci5iaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcblxuICAgIHRoaXMuYmluZFZlcnRleENvbG91cnNCdWZmZXIodmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgdmVydGV4Q29sb3Vyc0J1ZmZlciA9IG51bGwsIC8vL1xuICAgICAgICAgIGNvbG91clJlbmRlcmVyQnVmZmVycyA9IFJlbmRlcmVyQnVmZmVycy5mcm9tTm90aGluZyhDb2xvdXJSZW5kZXJlckJ1ZmZlcnMsIHZlcnRleENvbG91cnNCdWZmZXIpO1xuICAgIFxuICAgIHJldHVybiBjb2xvdXJSZW5kZXJlckJ1ZmZlcnM7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9ybWFsc01hdHJpeE5hbWUgfSBmcm9tIFwiLi4vc291cmNlL2xpZ2h0aW5nXCI7XG5cbmltcG9ydCB7IG9mZnNldHNNYXRyaXhOYW1lLCByb3RhdGlvbnNNYXRyaXhOYW1lLCBwb3NpdGlvbk1hdHJpeE5hbWUsIHByb2plY3Rpb25NYXRyaXhOYW1lIH0gZnJvbSBcIi4uL3NvdXJjZS9wb3NpdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbmlmb3JtTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3Iob2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbikge1xuICAgIHRoaXMub2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gICAgdGhpcy5ub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgICB0aGlzLnBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gICAgdGhpcy5yb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gICAgdGhpcy5wcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldE9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldE5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0Um90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShDbGFzcywgcHJvZ3JhbSwgY2FudmFzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBvZmZzZXRzTWF0cml4TmFtZSksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbm9ybWFsc01hdHJpeE5hbWUpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBwb3NpdGlvbk1hdHJpeE5hbWUpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgcm90YXRpb25zTWF0cml4TmFtZSksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgcHJvamVjdGlvbk1hdHJpeE5hbWUpLFxuICAgICAgICAgIHVuaWZvcm1Mb2NhdGlvbnMgPSBuZXcgQ2xhc3Mob2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICBcbiAgICByZXR1cm4gdW5pZm9ybUxvY2F0aW9uczsgICAgICAgXG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFVuaWZvcm1Mb2NhdGlvbnMgZnJvbSBcIi4uLy4uL2xvY2F0aW9ucy91bmlmb3JtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG91clVuaWZvcm1Mb2NhdGlvbnMgZXh0ZW5kcyBVbmlmb3JtTG9jYXRpb25zIHtcbiAgc3RhdGljIGZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcykgeyByZXR1cm4gVW5pZm9ybUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShDb2xvdXJVbmlmb3JtTG9jYXRpb25zLCBwcm9ncmFtLCBjYW52YXMpOyB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWUgfSBmcm9tIFwiLi4vc291cmNlL2xpZ2h0aW5nXCI7XG5pbXBvcnQgeyB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWUgfSBmcm9tIFwiLi4vc291cmNlL3Bvc2l0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF0dHJpYnV0ZUxvY2F0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKSB7XG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbjtcbiAgICB0aGlzLnZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIGdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShDbGFzcywgcHJvZ3JhbSwgY2FudmFzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZSksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZSksXG4gICAgICAgICAgYXR0cmlidXRlTG9jYXRpb25zID0gbmV3IENsYXNzKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZUxvY2F0aW9ucztcbiAgfSAgXG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBdHRyaWJ1dGVMb2NhdGlvbnMgZnJvbSBcIi4uLy4uL2xvY2F0aW9ucy9hdHRyaWJ1dGVcIjtcblxuaW1wb3J0IHsgdmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZSB9IGZyb20gXCIuLi8uLi9zb3VyY2UvY29sb3VyL3ZlcnRleFNoYWRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMgZXh0ZW5kcyBBdHRyaWJ1dGVMb2NhdGlvbnMge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24pIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbik7XG5cbiAgICB0aGlzLnZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uID0gdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb247XG4gIH1cblxuICBnZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcykge1xuICAgIGNvbnN0IHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWUpLFxuICAgICAgICAgIGNvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucyA9IEF0dHJpYnV0ZUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMsIHByb2dyYW0sIGNhbnZhcywgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24pO1xuXG4gICAgcmV0dXJuIGNvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucztcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVuZGVyZXIgZnJvbSBcIi4uL3JlbmRlcmVyXCI7XG5pbXBvcnQgQ29sb3VyUmVuZGVyZXJEYXRhIGZyb20gXCIuLi9yZW5kZXJlci9kYXRhL2NvbG91clwiO1xuaW1wb3J0IHZlcnRleFNoYWRlclNvdXJjZSBmcm9tIFwiLi9zb3VyY2UvY29sb3VyL3ZlcnRleFNoYWRlclwiO1xuaW1wb3J0IGZyYWdtZW50U2hhZGVyU291cmNlIGZyb20gXCIuL3NvdXJjZS9jb2xvdXIvZnJhZ21lbnRTaGFkZXJcIjtcbmltcG9ydCBDb2xvdXJSZW5kZXJlckJ1ZmZlcnMgZnJvbSBcIi4uL3JlbmRlcmVyL2J1ZmZlcnMvY29sb3VyXCI7XG5pbXBvcnQgQ29sb3VyVW5pZm9ybUxvY2F0aW9ucyBmcm9tIFwiLi9sb2NhdGlvbnMvY29sb3VyL3VuaWZvcm1cIjtcbmltcG9ydCBDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMgZnJvbSBcIi4vbG9jYXRpb25zL2NvbG91ci9hdHRyaWJ1dGVcIjtcblxuaW1wb3J0IHsgYWRkIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgY3JlYXRlUHJvZ3JhbSB9IGZyb20gXCIuLi9yZW5kZXJlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvdXJSZW5kZXJlciBleHRlbmRzIFJlbmRlcmVyIHtcbiAgZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgY29uc3QgYXR0cmlidXRlTG9jYXRpb25zID0gdGhpcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IGF0dHJpYnV0ZUxvY2F0aW9ucy5nZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbigpO1xuXG4gICAgcmV0dXJuIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gW10sXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zID0gW10sXG4gICAgICAgICAgdmVydGV4Q29sb3VycyA9IFtdO1xuXG4gICAgZmFjZXRzLmZvckVhY2goKGZhY2V0LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgY29sb3VyZWRGYWNldCA9IGZhY2V0LCAgLy8vXG4gICAgICAgICAgICBmYWNldFZlcnRleEluZGV4ZXMgPSBmYWNldC5nZXRWZXJ0ZXhJbmRleGVzKGluZGV4KSxcbiAgICAgICAgICAgIGZhY2V0VmVydGV4Tm9ybWFscyA9IGZhY2V0LmdldFZlcnRleE5vcm1hbHMoKSxcbiAgICAgICAgICAgIGZhY2V0VmVydGV4UG9zaXRpb25zID0gZmFjZXQuZ2V0VmVydGV4UG9zaXRpb25zKCksXG4gICAgICAgICAgICBjb2xvdXJlZEZhY2V0VmVydGV4Q29sb3VycyA9IGNvbG91cmVkRmFjZXQuZ2V0VmVydGV4Q29sb3VycygpO1xuXG4gICAgICBhZGQodmVydGV4SW5kZXhlcywgZmFjZXRWZXJ0ZXhJbmRleGVzKTtcbiAgICAgIGFkZCh2ZXJ0ZXhOb3JtYWxzLCBmYWNldFZlcnRleE5vcm1hbHMpO1xuICAgICAgYWRkKHZlcnRleFBvc2l0aW9ucywgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMpO1xuICAgICAgYWRkKHZlcnRleENvbG91cnMsIGNvbG91cmVkRmFjZXRWZXJ0ZXhDb2xvdXJzKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlbmRlcmVyRGF0YSA9IHRoaXMuZ2V0UmVuZGVyZXJEYXRhKCk7XG5cbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4Q29sb3Vycyh2ZXJ0ZXhDb2xvdXJzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4UG9zaXRpb25zKHZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICBjb25zdCByZW5kZXJlckJ1ZmZlcnMgPSB0aGlzLmdldFJlbmRlcmVyQnVmZmVycygpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4UG9zaXRpb25zRGF0YSgpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleE5vcm1hbHNEYXRhKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4SW5kZXhlc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhDb2xvdXJzRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJCdWZmZXJzLmNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhDb2xvdXJzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbigpO1xuICAgIFxuICAgIHJlbmRlcmVyQnVmZmVycy5iaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gIH1cblxuICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgY2FudmFzKSB7XG4gICAgY29uc3QgcHJvZ3JhbSA9IHRoaXMuZ2V0UHJvZ3JhbSgpO1xuXG4gICAgY2FudmFzLnVzZVByb2dyYW0ocHJvZ3JhbSk7XG5cbiAgICB0aGlzLmJpbmRCdWZmZXJzKGNhbnZhcyk7XG5cbiAgICBjb25zdCByZW5kZXJlciA9IHRoaXM7ICAvLy9cblxuICAgIGNhbnZhcy5yZW5kZXIocmVuZGVyZXIsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuXG4gICAgY29uc3QgY291bnQgPSB0aGlzLmdldENvdW50KCksXG4gICAgICAgICAgc3RhcnQgPSAwLFxuICAgICAgICAgIGZpbmlzaCA9IGNvdW50OyAvLy9cblxuICAgIGNhbnZhcy5kcmF3RWxlbWVudHMoc3RhcnQsIGZpbmlzaCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY2FudmFzKSB7XG4gICAgY29uc3QgZmFjZXRzID0gW10sXG4gICAgICAgICAgcHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyU291cmNlLCBmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlckRhdGEgPSBDb2xvdXJSZW5kZXJlckRhdGEuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlckJ1ZmZlcnMgPSBDb2xvdXJSZW5kZXJlckJ1ZmZlcnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBjb2xvdXJVbmlmb3JtTG9jYXRpb25zID0gQ29sb3VyVW5pZm9ybUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIGNvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucyA9IENvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIHJlbmRlcmVyRGF0YSA9IGNvbG91clJlbmRlcmVyRGF0YSwgIC8vL1xuICAgICAgICAgIHJlbmRlcmVyQnVmZmVycyA9IGNvbG91clJlbmRlcmVyQnVmZmVycywgIC8vL1xuICAgICAgICAgIHVuaWZvcm1Mb2NhdGlvbnMgPSBjb2xvdXJVbmlmb3JtTG9jYXRpb25zLCAgLy8vXG4gICAgICAgICAgYXR0cmlidXRlTG9jYXRpb25zID0gY29sb3VyQXR0cmlidXRlTG9jYXRpb25zLCAgLy8vXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXIgPSBuZXcgQ29sb3VyUmVuZGVyZXIoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKTtcbiAgICBcbiAgICByZXR1cm4gY29sb3VyUmVuZGVyZXI7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGxpZ2h0aW5nU291cmNlIGZyb20gXCIuLi8uLi9zb3VyY2UvbGlnaHRpbmdcIjtcbmltcG9ydCBwb3NpdGlvblNvdXJjZSBmcm9tIFwiLi4vLi4vc291cmNlL3Bvc2l0aW9uXCI7XG5cbmV4cG9ydCBjb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWUgPSBcImFUZXh0dXJlQ29vcmRpbmF0ZVwiO1xuXG5jb25zdCB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgICAgICAgXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWMyICR7dGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lfTtcbiAgICAgICAgXG4gICAgICAgICR7bGlnaHRpbmdTb3VyY2V9XG4gICAgICBcbiAgICAgICAgJHtwb3NpdGlvblNvdXJjZX1cblxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuICAgICAgICBcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMyIHZUZXh0dXJlQ29vcmRpbmF0ZTtcbiAgICAgICAgXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICB2TGlnaHRpbmcgPSBjYWxjdWxhdGVMaWdodGluZygpO1xuXG4gICAgICAgICAgZ2xfUG9zaXRpb24gPSBjYWxjdWxhdGVQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICB2VGV4dHVyZUNvb3JkaW5hdGUgPSAke3RleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZX07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgKTtcblxuZXhwb3J0IGRlZmF1bHQgdmVydGV4U2hhZGVyU291cmNlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVuZGVyZXJEYXRhIGZyb20gXCIuLi8uLi9yZW5kZXJlci9kYXRhXCI7XG5cbmltcG9ydCB7IGFkZCwgZmxhdHRlbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZVJlbmRlcmVyRGF0YSBleHRlbmRzIFJlbmRlcmVyRGF0YSB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSkge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSk7XG5cbiAgICB0aGlzLnZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEgPSB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhO1xuICB9XG5cbiAgZ2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhO1xuICB9XG5cbiAgYWRkVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhID0gZmxhdHRlbih2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhLCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgXG4gICAgY29uc3QgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSA9IFtdLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlckRhdGEgPSBSZW5kZXJlckRhdGEuZnJvbU5vdGhpbmcoVGV4dHVyZVJlbmRlcmVyRGF0YSwgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSk7XG4gICAgXG4gICAgcmV0dXJuIHRleHR1cmVSZW5kZXJlckRhdGE7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IHNhbXBsZXJOYW1lID0gXCJ1U2FtcGxlclwiO1xuXG5jb25zdCBmcmFnbWVudFNoYWRlclNvdXJjZSA9IG5ldyBTdHJpbmcoYFxuICAgICAgICBcbiAgICAgICAgdW5pZm9ybSBzYW1wbGVyMkQgJHtzYW1wbGVyTmFtZX07XG5cbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMyIHZUZXh0dXJlQ29vcmRpbmF0ZTtcbiAgICAgICAgXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICBoaWdocCB2ZWM0IHRleGVsQ29sb3VyID0gdGV4dHVyZTJEKCR7c2FtcGxlck5hbWV9LCB2VGV4dHVyZUNvb3JkaW5hdGUpO1xuICAgICAgICAgIFxuICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQodGV4ZWxDb2xvdXIucmdiICogdkxpZ2h0aW5nLCB0ZXhlbENvbG91ci5hKTsgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZyYWdtZW50U2hhZGVyU291cmNlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVuZGVyZXJCdWZmZXJzIGZyb20gXCIuLi8uLi9yZW5kZXJlci9idWZmZXJzXCI7XG5cbmNvbnN0IHRleHR1cmVDb29yZGluYXRlQ29tcG9uZW50cyA9IDI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHR1cmVSZW5kZXJlckJ1ZmZlcnMgZXh0ZW5kcyBSZW5kZXJlckJ1ZmZlcnMge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyLCB0ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIpIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKTtcblxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyID0gdGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyO1xuICB9XG5cbiAgY3JlYXRlVGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKHRleHR1cmVDb29yZGluYXRlc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih0ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKTtcbiAgfVxuXG4gIGJpbmRUZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIodGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIsIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQ29tcG9uZW50cyk7XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgdGV4dHVyZUNvb3JkaW5hdGVzRGF0YSwgY2FudmFzKSB7XG4gICAgc3VwZXIuY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIGNhbnZhcyk7XG5cbiAgICB0aGlzLmNyZWF0ZVRleHR1cmVDb29yZGluYXRlc0J1ZmZlcih0ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhLCBjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIHN1cGVyLmJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuXG4gICAgdGhpcy5iaW5kVGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHRleHR1cmVSZW5kZXJlckJ1ZmZlcnMgPSBSZW5kZXJlckJ1ZmZlcnMuZnJvbU5vdGhpbmcoVGV4dHVyZVJlbmRlcmVyQnVmZmVycywgdGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKTtcbiAgICBcbiAgICByZXR1cm4gdGV4dHVyZVJlbmRlcmVyQnVmZmVycztcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVW5pZm9ybUxvY2F0aW9ucyBmcm9tIFwiLi4vLi4vbG9jYXRpb25zL3VuaWZvcm1cIjtcblxuaW1wb3J0IHsgc2FtcGxlck5hbWUgfSBmcm9tIFwiLi4vLi4vc291cmNlL3RleHR1cmUvZnJhZ21lbnRTaGFkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMgZXh0ZW5kcyBVbmlmb3JtTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3Iob2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbikge1xuICAgIHN1cGVyKG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24pO1xuICAgIFxuICAgIHRoaXMuc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiA9IHNhbXBsZXJVbmlmb3JtTG9jYXRpb247XG4gIH1cbiAgXG4gIGdldFNhbXBsZXJVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2FtcGxlclVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpIHtcbiAgICBjb25zdCBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBzYW1wbGVyTmFtZSksXG4gICAgICAgICAgdGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMgPSBVbmlmb3JtTG9jYXRpb25zLmZyb21Qcm9ncmFtKFRleHR1cmVVbmlmb3JtTG9jYXRpb25zLCBwcm9ncmFtLCBjYW52YXMsIHNhbXBsZXJVbmlmb3JtTG9jYXRpb24pO1xuICAgIFxuICAgIHJldHVybiB0ZXh0dXJlVW5pZm9ybUxvY2F0aW9ucztcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXR0cmlidXRlTG9jYXRpb25zIGZyb20gXCIuLi8uLi9sb2NhdGlvbnMvYXR0cmlidXRlXCI7XG5cbmltcG9ydCB7IHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZSB9IGZyb20gXCIuLi8uLi9zb3VyY2UvdGV4dHVyZS92ZXJ0ZXhTaGFkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucyBleHRlbmRzIEF0dHJpYnV0ZUxvY2F0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24pO1xuICAgIFxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIGdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcykge1xuICAgIGNvbnN0IHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lKSxcbiAgICAgICAgICB0ZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zID0gQXR0cmlidXRlTG9jYXRpb25zLmZyb21Qcm9ncmFtKFRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMsIHByb2dyYW0sIGNhbnZhcywgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbik7XG4gICAgXG4gICAgcmV0dXJuIHRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnM7XG4gIH0gIFxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVuZGVyZXIgZnJvbSBcIi4uL3JlbmRlcmVyXCI7XG5pbXBvcnQgdmVydGV4U2hhZGVyU291cmNlIGZyb20gXCIuL3NvdXJjZS90ZXh0dXJlL3ZlcnRleFNoYWRlclwiO1xuaW1wb3J0IFRleHR1cmVSZW5kZXJlckRhdGEgZnJvbSBcIi4uL3JlbmRlcmVyL2RhdGEvdGV4dHVyZVwiO1xuaW1wb3J0IGZyYWdtZW50U2hhZGVyU291cmNlIGZyb20gXCIuL3NvdXJjZS90ZXh0dXJlL2ZyYWdtZW50U2hhZGVyXCI7XG5pbXBvcnQgVGV4dHVyZVJlbmRlcmVyQnVmZmVycyBmcm9tIFwiLi4vcmVuZGVyZXIvYnVmZmVycy90ZXh0dXJlXCI7XG5pbXBvcnQgVGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMgZnJvbSBcIi4vbG9jYXRpb25zL3RleHR1cmUvdW5pZm9ybVwiO1xuaW1wb3J0IFRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMgZnJvbSBcIi4vbG9jYXRpb25zL3RleHR1cmUvYXR0cmlidXRlXCI7XG5cbmltcG9ydCB7IGNyZWF0ZVByb2dyYW0gfSBmcm9tIFwiLi4vcmVuZGVyZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZVJlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuICBnZXRUZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZUxvY2F0aW9ucyA9IHRoaXMuZ2V0QXR0cmlidXRlTG9jYXRpb25zKCksXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IGF0dHJpYnV0ZUxvY2F0aW9ucy5nZXRUZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKCk7XG5cbiAgICByZXR1cm4gdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgcmVuZGVyZXJEYXRhID0gdGhpcy5nZXRSZW5kZXJlckRhdGEoKSxcbiAgICAgICAgICByZW5kZXJlckJ1ZmZlcnMgPSB0aGlzLmdldFJlbmRlcmVyQnVmZmVycygpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4UG9zaXRpb25zRGF0YSgpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleE5vcm1hbHNEYXRhKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4SW5kZXhlc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEoKTtcblxuICAgIHJlbmRlcmVyQnVmZmVycy5jcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKTtcblxuICAgIHJlbmRlcmVyQnVmZmVycy5iaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIHVzZVRleHR1cmUoaW5kZXgsIGNhbnZhcykge1xuICAgIGNvbnN0IHVuaWZvcm1Mb2NhdGlvbnMgPSB0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbnMoKSxcbiAgICAgICAgICBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uID0gdW5pZm9ybUxvY2F0aW9ucy5nZXRTYW1wbGVyVW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSA9IGluZGV4OyAvLy9cblxuICAgIGNhbnZhcy5zZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUoc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiwgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MsIGNhbnZhcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgZmFjZXRzID0gW10sXG4gICAgICAgICAgcHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyU291cmNlLCBmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSxcbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXJEYXRhID0gVGV4dHVyZVJlbmRlcmVyRGF0YS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlckJ1ZmZlcnMgPSBUZXh0dXJlUmVuZGVyZXJCdWZmZXJzLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMgPSBUZXh0dXJlVW5pZm9ybUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIHRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMgPSBUZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgcmVuZGVyZXJEYXRhID0gdGV4dHVyZVJlbmRlcmVyRGF0YSwgIC8vL1xuICAgICAgICAgIHJlbmRlcmVyQnVmZmVycyA9IHRleHR1cmVSZW5kZXJlckJ1ZmZlcnMsIC8vL1xuICAgICAgICAgIHVuaWZvcm1Mb2NhdGlvbnMgPSB0ZXh0dXJlVW5pZm9ybUxvY2F0aW9ucywgLy8vXG4gICAgICAgICAgYXR0cmlidXRlTG9jYXRpb25zID0gdGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucywgLy8vXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyID0gbmV3IENsYXNzKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIGNhbnZhcy5lbmFibGVBbmlzb3Ryb3BpY0ZpbHRlcmluZygpOyAgLy8vXG5cbiAgICByZXR1cm4gdGV4dHVyZVJlbmRlcmVyO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0dXJlUmVuZGVyZXIgZnJvbSBcIi4uLy4uL3JlbmRlcmVyL3RleHR1cmVcIjtcblxuaW1wb3J0IHsgYWRkLCBmaXJzdCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VzVGV4dHVyZVJlbmRlcmVyIGV4dGVuZHMgVGV4dHVyZVJlbmRlcmVyIHtcblx0Y29uc3RydWN0b3IoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zLCBpbWFnZU5hbWVzLCBmYWNldHNNYXAsIG9mZnNldHMpIHtcblx0XHRzdXBlcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMpO1xuXG5cdFx0dGhpcy5pbWFnZU5hbWVzID0gaW1hZ2VOYW1lcztcblx0XHR0aGlzLmZhY2V0c01hcCA9IGZhY2V0c01hcDtcblx0XHR0aGlzLm9mZnNldHMgPSBvZmZzZXRzO1xuXHR9XG5cblx0YWRkRmFjZXRzKGZhY2V0cykge1xuXHQgIGNvbnN0IHRleHR1cmVkRmFjZXRzID0gZmFjZXRzLCAgLy8vXG4gICAgICAgICAgdGV4dHVyZWRGYWNldHNMZW5ndGggPSB0ZXh0dXJlZEZhY2V0cy5sZW5ndGg7XG5cblx0ICBpZiAodGV4dHVyZWRGYWNldHNMZW5ndGggPiAwKSB7XG5cdCAgICBjb25zdCBmaXJzdFRleHR1cmVkRmFjZXQgPSBmaXJzdCh0ZXh0dXJlZEZhY2V0cyksXG4gICAgICAgICAgICB0ZXh0dXJlZEZhY2V0ID0gZmlyc3RUZXh0dXJlZEZhY2V0LCAvLy9cbiAgICAgICAgICAgIGltYWdlTmFtZSA9IHRleHR1cmVkRmFjZXQuZ2V0SW1hZ2VOYW1lKCksXG4gICAgICAgICAgICBmYWNldHMgPSB0aGlzLmZhY2V0c01hcFtpbWFnZU5hbWVdO1xuXG5cdCAgICBhZGQoZmFjZXRzLCB0ZXh0dXJlZEZhY2V0cylcbiAgICB9XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHZlcnRleEluZGV4ZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gW10sXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zID0gW10sXG4gICAgICAgICAgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBbXTtcblxuICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICB0aGlzLmltYWdlTmFtZXMuZm9yRWFjaCgoaW1hZ2VOYW1lKSA9PiB7XG4gICAgICBjb25zdCBmYWNldHMgPSB0aGlzLmZhY2V0c01hcFtpbWFnZU5hbWVdO1xuXG4gICAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IHtcbiAgICAgICAgY29uc3QgdGV4dHVyZWRGYWNldCA9IGZhY2V0LCAgLy8vXG4gICAgICAgICAgICAgIGZhY2V0VmVydGV4SW5kZXhlcyA9IGZhY2V0LmdldFZlcnRleEluZGV4ZXMoaW5kZXgpLFxuICAgICAgICAgICAgICBmYWNldFZlcnRleE5vcm1hbHMgPSBmYWNldC5nZXRWZXJ0ZXhOb3JtYWxzKCksXG4gICAgICAgICAgICAgIGZhY2V0VmVydGV4UG9zaXRpb25zID0gZmFjZXQuZ2V0VmVydGV4UG9zaXRpb25zKCksXG4gICAgICAgICAgICAgIHRleHR1cmVkRmFjZXRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVkRmFjZXQuZ2V0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMoKSxcbiAgICAgICAgICAgICAgdGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZWRGYWNldFRleHR1cmVDb29yZGluYXRlVHVwbGVzOyAgLy8vXG5cbiAgICAgICAgYWRkKHZlcnRleEluZGV4ZXMsIGZhY2V0VmVydGV4SW5kZXhlcyk7XG4gICAgICAgIGFkZCh2ZXJ0ZXhOb3JtYWxzLCBmYWNldFZlcnRleE5vcm1hbHMpO1xuICAgICAgICBhZGQodmVydGV4UG9zaXRpb25zLCBmYWNldFZlcnRleFBvc2l0aW9ucyk7XG4gICAgICAgIGFkZCh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgdGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcblxuICAgICAgICBpbmRleCsrO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IG9mZnNldCA9IGluZGV4ICogMzsgIC8vL1xuXG4gICAgICB0aGlzLm9mZnNldHMucHVzaChvZmZzZXQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVuZGVyZXJEYXRhID0gdGhpcy5nZXRSZW5kZXJlckRhdGEoKTtcblxuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuXG4gICAgc3VwZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuICB9XG5cbiAgcmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIGNhbnZhcykge1xuICAgIGNvbnN0IHByb2dyYW0gPSB0aGlzLmdldFByb2dyYW0oKTtcblxuICAgIGNhbnZhcy51c2VQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgdGhpcy5iaW5kQnVmZmVycyhjYW52YXMpO1xuXG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzOyAgLy8vXG5cbiAgICBjYW52YXMucmVuZGVyKHJlbmRlcmVyLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcblxuICAgIGxldCBzdGFydCxcbiAgICAgICAgZmluaXNoID0gMDsgIC8vL1xuXG4gICAgdGhpcy5vZmZzZXRzLmZvckVhY2goKG9mZnNldCwgaW5kZXgpID0+IHtcbiAgICAgIHN0YXJ0ID0gZmluaXNoOyAvLy9cblxuICAgICAgZmluaXNoID0gb2Zmc2V0OyAgLy8vXG5cbiAgICAgIHRoaXMudXNlVGV4dHVyZShpbmRleCwgY2FudmFzKTtcblxuICAgICAgY2FudmFzLmRyYXdFbGVtZW50cyhzdGFydCwgZmluaXNoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW1hZ2VzSW1hZ2VOYW1lc0FuZEltYWdlVGlsaW5nKGltYWdlcywgaW1hZ2VOYW1lcywgaW1hZ2VUaWxpbmcsIGNhbnZhcykge1xuICAgIGNvbnN0IG9mZnNldHMgPSBbXSxcbiAgICAgICAgICBmYWNldHNNYXAgPSB7fTtcblxuICAgIGltYWdlcy5mb3JFYWNoKChpbWFnZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGZhY2V0cyA9IFtdLFxuICAgICAgICAgICAgcmVwZWF0ID0gaW1hZ2VUaWxpbmcsIC8vL1xuICAgICAgICAgICAgaW1hZ2VOYW1lID0gaW1hZ2VOYW1lc1tpbmRleF07XG5cbiAgICAgIGZhY2V0c01hcFtpbWFnZU5hbWVdID0gZmFjZXRzO1xuXG4gICAgICBjYW52YXMuY3JlYXRlVGV4dHVyZShpbWFnZSwgaW5kZXgsIHJlcGVhdCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBpbWFnZXNUZXh0dXJlUmVuZGVyZXIgPSBUZXh0dXJlUmVuZGVyZXIuZnJvbU5vdGhpbmcoSW1hZ2VzVGV4dHVyZVJlbmRlcmVyLCBjYW52YXMsIGltYWdlTmFtZXMsIGZhY2V0c01hcCwgb2Zmc2V0cyk7XG5cbiAgICByZXR1cm4gaW1hZ2VzVGV4dHVyZVJlbmRlcmVyO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0dXJlUmVuZGVyZXIgZnJvbSBcIi4uLy4uL3JlbmRlcmVyL3RleHR1cmVcIjtcblxuaW1wb3J0IHsgYWRkIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZU1hcFRleHR1cmVSZW5kZXJlciBleHRlbmRzIFRleHR1cmVSZW5kZXJlciB7XG5cdGNvbnN0cnVjdG9yKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucywgaW1hZ2VNYXBKU09OKSB7XG5cdFx0c3VwZXIoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKTtcblxuXHRcdHRoaXMuaW1hZ2VNYXBKU09OID0gaW1hZ2VNYXBKU09OO1xuXHR9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gW10sXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zID0gW10sXG4gICAgICAgICAgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBbXTtcblxuICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHRleHR1cmVkRmFjZXQgPSBmYWNldCwgIC8vL1xuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhJbmRleGVzID0gZmFjZXQuZ2V0VmVydGV4SW5kZXhlcyhpbmRleCksXG4gICAgICAgICAgICBmYWNldFZlcnRleE5vcm1hbHMgPSBmYWNldC5nZXRWZXJ0ZXhOb3JtYWxzKCksXG4gICAgICAgICAgICBmYWNldFZlcnRleFBvc2l0aW9ucyA9IGZhY2V0LmdldFZlcnRleFBvc2l0aW9ucygpLFxuICAgICAgICAgICAgbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlZEZhY2V0LmdldE1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHRoaXMuaW1hZ2VNYXBKU09OKSxcbiAgICAgICAgICAgIHRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzOyAvLy9cblxuICAgICAgYWRkKHZlcnRleEluZGV4ZXMsIGZhY2V0VmVydGV4SW5kZXhlcyk7XG4gICAgICBhZGQodmVydGV4Tm9ybWFscywgZmFjZXRWZXJ0ZXhOb3JtYWxzKTtcbiAgICAgIGFkZCh2ZXJ0ZXhQb3NpdGlvbnMsIGZhY2V0VmVydGV4UG9zaXRpb25zKTtcbiAgICAgIGFkZCh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgdGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlbmRlcmVyRGF0YSA9IHRoaXMuZ2V0UmVuZGVyZXJEYXRhKCk7XG5cbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4UG9zaXRpb25zKHZlcnRleFBvc2l0aW9ucyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcblxuICAgIHN1cGVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKTtcblxuICAgIHJlbmRlcmVyQnVmZmVycy5iaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIHVzZVRleHR1cmUoaW5kZXgsIGNhbnZhcykge1xuICAgIGNvbnN0IHVuaWZvcm1Mb2NhdGlvbnMgPSB0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbnMoKSxcbiAgICAgICAgICBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uID0gdW5pZm9ybUxvY2F0aW9ucy5nZXRTYW1wbGVyVW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSA9IGluZGV4OyAvLy9cblxuICAgIGNhbnZhcy5zZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUoc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiwgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSk7XG4gIH1cblxuICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgY2FudmFzKSB7XG4gICAgY29uc3QgcHJvZ3JhbSA9IHRoaXMuZ2V0UHJvZ3JhbSgpO1xuXG4gICAgY2FudmFzLnVzZVByb2dyYW0ocHJvZ3JhbSk7XG5cbiAgICB0aGlzLmJpbmRCdWZmZXJzKGNhbnZhcyk7XG5cbiAgICBjb25zdCByZW5kZXJlciA9IHRoaXM7ICAvLy9cblxuICAgIGNhbnZhcy5yZW5kZXIocmVuZGVyZXIsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuXG4gICAgY29uc3QgcmVuZGVyZXJEYXRhID0gdGhpcy5nZXRSZW5kZXJlckRhdGEoKSxcbiAgICAgICAgICBjb3VudCA9IHJlbmRlcmVyRGF0YS5nZXRDb3VudCgpLFxuICAgICAgICAgIGluZGV4ID0gMCxcbiAgICAgICAgICBzdGFydCA9IDAsXG4gICAgICAgICAgZmluaXNoID0gY291bnQ7IC8vL1xuXG4gICAgdGhpcy51c2VUZXh0dXJlKGluZGV4LCBjYW52YXMpO1xuXG4gICAgY2FudmFzLmRyYXdFbGVtZW50cyhzdGFydCwgZmluaXNoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW1hZ2VNYXBBbmRJbWFnZU1hcEpTT04oaW1hZ2VNYXAsIGltYWdlTWFwSlNPTiwgY2FudmFzKSB7XG4gICAgY29uc3QgaW1hZ2UgPSBpbWFnZU1hcCwgLy8vXG4gICAgICAgICAgaW5kZXggPSAwLFxuICAgICAgICAgIHJlcGVhdCA9IGZhbHNlO1xuXG4gICAgY2FudmFzLmNyZWF0ZVRleHR1cmUoaW1hZ2UsIGluZGV4LCByZXBlYXQpO1xuXG4gICAgY29uc3QgaW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIgPSBUZXh0dXJlUmVuZGVyZXIuZnJvbU5vdGhpbmcoSW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIsIGNhbnZhcywgaW1hZ2VNYXBKU09OKTtcblxuICAgIHJldHVybiBpbWFnZU1hcFRleHR1cmVSZW5kZXJlcjtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFzayBmcm9tIFwiLi9tYXNrXCI7XG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IENvbG91clJlbmRlcmVyIGZyb20gXCIuLi9yZW5kZXJlci9jb2xvdXJcIjtcbmltcG9ydCBJbWFnZXNUZXh0dXJlUmVuZGVyZXIgZnJvbSBcIi4uL3JlbmRlcmVyL3RleHR1cmUvaW1hZ2VzXCI7XG5pbXBvcnQgSW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIgZnJvbSBcIi4uL3JlbmRlcmVyL3RleHR1cmUvaW1hZ2VNYXBcIjtcblxuaW1wb3J0IHsgZWxlbWVudHNGcm9tQ2hpbGRFbGVtZW50cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJ0IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGltYWdlcywgaW1hZ2VNYXAsIGltYWdlTmFtZXMsIGltYWdlVGlsaW5nLCBpbWFnZU1hcEpTT04sIGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5pbWFnZXMgPSBpbWFnZXM7XG4gICAgdGhpcy5pbWFnZU1hcCA9IGltYWdlTWFwO1xuICAgIHRoaXMuaW1hZ2VOYW1lcyA9IGltYWdlTmFtZXM7XG4gICAgdGhpcy5pbWFnZVRpbGluZyA9IGltYWdlVGlsaW5nO1xuICAgIHRoaXMuaW1hZ2VNYXBKU09OID0gaW1hZ2VNYXBKU09OO1xuICAgIHRoaXMuY29sb3VyUmVuZGVyZXIgPSBjb2xvdXJSZW5kZXJlcjtcbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlciA9IHRleHR1cmVSZW5kZXJlcjtcbiAgfVxuICBcbiAgaW5pdGlhbGlzZShjYW52YXMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBjb2xvdXJSZW5kZXJlciA9IENvbG91clJlbmRlcmVyLmZyb21Ob3RoaW5nKGNhbnZhcyksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpLFxuICAgICAgICAgIG1hc2tzID0gZWxlbWVudHNGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzLCBNYXNrKTtcblxuICAgIGxldCB0ZXh0dXJlUmVuZGVyZXIgPSBudWxsO1xuXG4gICAgaWYgKHRoaXMuaW1hZ2VzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbWFnZXNUZXh0dXJlUmVuZGVyZXIgPSBJbWFnZXNUZXh0dXJlUmVuZGVyZXIuZnJvbUltYWdlc0ltYWdlTmFtZXNBbmRJbWFnZVRpbGluZyh0aGlzLmltYWdlcywgdGhpcy5pbWFnZU5hbWVzLCB0aGlzLmltYWdlVGlsaW5nLCBjYW52YXMpO1xuXG4gICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBpbWFnZXNUZXh0dXJlUmVuZGVyZXI7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAodGhpcy5pbWFnZU1hcCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIgPSBJbWFnZU1hcFRleHR1cmVSZW5kZXJlci5mcm9tSW1hZ2VNYXBBbmRJbWFnZU1hcEpTT04odGhpcy5pbWFnZU1hcCwgdGhpcy5pbWFnZU1hcEpTT04sIGNhbnZhcyk7XG5cbiAgICAgIHRleHR1cmVSZW5kZXJlciA9IGltYWdlTWFwVGV4dHVyZVJlbmRlcmVyOyAgLy8vXG4gICAgfVxuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICAgIGNoaWxkRWxlbWVudC5jcmVhdGVGYWNldHMobWFyZ2luT2ZFcnJvcik7XG4gICAgfSk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgICAgY2hpbGRFbGVtZW50Lm1hc2tGYWNldHMobWFza3MsIG1hcmdpbk9mRXJyb3IpO1xuICAgIH0pO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICAgIGNoaWxkRWxlbWVudC5hZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcik7XG4gICAgfSk7XG5cbiAgICBpZiAoY29sb3VyUmVuZGVyZXIgIT09IG51bGwpIHtcbiAgICAgIGNvbG91clJlbmRlcmVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcbiAgICB9XG5cbiAgICBpZiAodGV4dHVyZVJlbmRlcmVyICE9PSBudWxsKSB7XG4gICAgICB0ZXh0dXJlUmVuZGVyZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuICAgIH1cblxuICAgIHRoaXMuY29sb3VyUmVuZGVyZXIgPSBjb2xvdXJSZW5kZXJlcjtcblxuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyID0gdGV4dHVyZVJlbmRlcmVyO1xuICB9XG5cbiAgcmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIGNhbnZhcykge1xuICAgIHRoaXMuY29sb3VyUmVuZGVyZXIgJiYgdGhpcy5jb2xvdXJSZW5kZXJlci5yZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgY2FudmFzKTsgIC8vL1xuXG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIgJiYgdGhpcy50ZXh0dXJlUmVuZGVyZXIucmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIGNhbnZhcyk7ICAvLy9cbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbWFnZXMgPSBudWxsLCBpbWFnZU1hcCA9IG51bGwsIGltYWdlTmFtZXMgPSBudWxsLCBpbWFnZVRpbGluZyA9IGZhbHNlLCBpbWFnZU1hcEpTT04gPSBudWxsIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHRleHR1cmVSZW5kZXJlciA9IG51bGwsIC8vL1xuICAgICAgICAgIHBhcnQgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFBhcnQsIHByb3BlcnRpZXMsIGltYWdlcywgaW1hZ2VNYXAsIGltYWdlTmFtZXMsIGltYWdlVGlsaW5nLCBpbWFnZU1hcEpTT04sIGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpO1xuXG4gICAgcmV0dXJuIHBhcnQ7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuaW1wb3J0IHsgREVHUkVFU19UT19SQURJQU5TX01VTFRJUExJRVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBERUZBVUxUX1pfRkFSLCBERUZBVUxUX1pfTkVBUiwgREVGQVVMVF9GSUVMRF9PRl9WSUVXIH0gZnJvbSBcIi4uL2RlZmF1bHRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbWVyYSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih6RmFyLCB6TmVhciwgZmllbGRPZlZpZXcpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy56RmFyID0gekZhcjtcbiAgICB0aGlzLnpOZWFyID0gek5lYXI7XG4gICAgdGhpcy5maWVsZE9mVmlldyA9IGZpZWxkT2ZWaWV3O1xuICB9XG5cbiAgZ2V0WkZhcigpIHtcbiAgICByZXR1cm4gdGhpcy56RmFyO1xuICB9XG5cbiAgZ2V0Wk5lYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuek5lYXI7XG4gIH1cblxuICBnZXRGaWVsZE9mVmlldygpIHtcbiAgICByZXR1cm4gdGhpcy5maWVsZE9mVmlldztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHsgZmllbGRPZlZpZXcgPSBERUZBVUxUX0ZJRUxEX09GX1ZJRVcgfSA9IHByb3BlcnRpZXM7XG5cbiAgICBmaWVsZE9mVmlldyAqPSBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUjsgLy8vXG5cbiAgICBjb25zdCB7IHpGYXIgPSBERUZBVUxUX1pfRkFSLCB6TmVhciA9IERFRkFVTFRfWl9ORUFSIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNhbWVyYSA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIHpGYXIsIHpOZWFyLCBmaWVsZE9mVmlldywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBjYW1lcmE7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFdIRUVMX0VWRU5UX1RZUEUgPSBcIndoZWVsXCI7XG5leHBvcnQgY29uc3QgS0VZVVBfRVZFTlRfVFlQRSA9IFwia2V5dXBcIjtcbmV4cG9ydCBjb25zdCBLRVlET1dOX0VWRU5UX1RZUEUgPSBcImtleWRvd25cIjtcbmV4cG9ydCBjb25zdCBNT1VTRVVQX0VWRU5UX1RZUEUgPSBcIm1vdXNldXBcIjtcbmV4cG9ydCBjb25zdCBNT1VTRURPV05fRVZFTlRfVFlQRSA9IFwibW91c2Vkb3duXCI7XG5leHBvcnQgY29uc3QgTU9VU0VNT1ZFX0VWRU5UX1RZUEUgPSBcIm1vdXNlbW92ZVwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBrZXlDb2RlcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgS0VZVVBfRVZFTlRfVFlQRSwgS0VZRE9XTl9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2V2ZW50VHlwZXNcIjtcblxuY29uc3QgeyBFU0NBUEVfS0VZX0NPREUsIFNISUZUX0tFWV9DT0RFIH0gPSBrZXlDb2RlcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5RXZlbnRzIHtcbiAgY29uc3RydWN0b3IoaGFuZGxlcnMsIHNoaWZ0S2V5RG93bikge1xuICAgIHRoaXMuaGFuZGxlcnMgPSBoYW5kbGVycztcbiAgICB0aGlzLnNoaWZ0S2V5RG93biA9IHNoaWZ0S2V5RG93bjtcbiAgfVxuXG4gIGdldEhhbmRsZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmhhbmRsZXJzO1xuICB9XG5cbiAgaXNTaGlmdEtleURvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hpZnRLZXlEb3duO1xuICB9XG5cbiAga2V5VXBFdmVudExpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgIGlmIChrZXlDb2RlID09PSBTSElGVF9LRVlfQ09ERSkge1xuICAgICAgdGhpcy5zaGlmdEtleURvd24gPSBmYWxzZTtcblxuICAgICAgdGhpcy5oYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIodGhpcy5zaGlmdEtleURvd24pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAga2V5RG93bkV2ZW50TGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgaWYgKGtleUNvZGUgPT09IFNISUZUX0tFWV9DT0RFKSB7XG4gICAgICB0aGlzLnNoaWZ0S2V5RG93biA9IHRydWU7XG5cbiAgICAgIHRoaXMuaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKHRoaXMuc2hpZnRLZXlEb3duKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFkZFNoaWZ0S2V5SGFuZGxlcihzaGlmdEtleUhhbmRsZXIpIHtcbiAgICBjb25zdCBoYW5kbGVyID0gc2hpZnRLZXlIYW5kbGVyOyAgLy8vXG5cbiAgICB0aGlzLmhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gIH1cblxuICBhZGRFc2NhcGVLZXlEb3duSGFuZGxlcihlc2NhcGVLZXlEb3duSGFuZGxlcikge1xuICAgIGNvbnN0IGRvY3VtZW50RE9NRWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDsgIC8vL1xuXG4gICAgZG9jdW1lbnRET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoS0VZRE9XTl9FVkVOVF9UWVBFLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICAgIGlmIChrZXlDb2RlID09PSBFU0NBUEVfS0VZX0NPREUpIHtcbiAgICAgICAgZXNjYXBlS2V5RG93bkhhbmRsZXIoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgY29uc3QgZG9jdW1lbnRET01FbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OyAgLy8vXG5cbiAgICBkb2N1bWVudERPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihLRVlVUF9FVkVOVF9UWVBFLCB0aGlzLmtleVVwRXZlbnRMaXN0ZW5lcik7XG5cbiAgICBkb2N1bWVudERPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihLRVlET1dOX0VWRU5UX1RZUEUsIHRoaXMua2V5RG93bkV2ZW50TGlzdGVuZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gW10sXG4gICAgICAgICAgc2hpZnRLZXlEb3duID0gZmFsc2UsICAvLy9cbiAgICAgICAgICBrZXlFdmVudHMgPSBuZXcgS2V5RXZlbnRzKGhhbmRsZXJzLCBzaGlmdEtleURvd24pO1xuXG4gICAgcmV0dXJuIGtleUV2ZW50cztcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBXSEVFTF9FVkVOVF9UWVBFLCBNT1VTRVVQX0VWRU5UX1RZUEUsIE1PVVNFRE9XTl9FVkVOVF9UWVBFLCBNT1VTRU1PVkVfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdXNlRXZlbnRzIHtcbiAgY29uc3RydWN0b3IoaGFuZGxlcnNNYXAsIG1vdXNlRG93bikge1xuICAgIHRoaXMuaGFuZGxlcnNNYXAgPSBoYW5kbGVyc01hcDtcbiAgICB0aGlzLm1vdXNlRG93biA9IG1vdXNlRG93bjtcbiAgfVxuXG4gIHdoZWVsRXZlbnRMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgV0hFRUxfRVZFTlRfVFlQRSBdLFxuICAgICAgICAgIG1vdXNlV2hlZWxEZWx0YSA9IG1vdXNlV2hlZWxEZWx0YUZyb21FdmVudChldmVudCk7XG5cbiAgICBoYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICBoYW5kbGVyKG1vdXNlV2hlZWxEZWx0YSk7XG4gICAgfSk7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgbW91c2VFdmVudExpc3RlbmVyID0gKGV2ZW50LCBldmVudFR5cGUpID0+IHtcbiAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbZXZlbnRUeXBlXSxcbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlc0Zyb21FdmVudChldmVudCk7XG5cbiAgICBoYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICBoYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMubW91c2VEb3duKTtcbiAgICB9KTtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBtb3VzZVVwRXZlbnRMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRMaXN0ZW5lcihldmVudCwgTU9VU0VVUF9FVkVOVF9UWVBFKTtcbiAgfVxuXG5cdG1vdXNlRG93bkV2ZW50TGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcbiAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRMaXN0ZW5lcihldmVudCwgTU9VU0VET1dOX0VWRU5UX1RZUEUpO1xuICB9XG5cblx0bW91c2VNb3ZlRXZlbnRMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgIHRoaXMubW91c2VFdmVudExpc3RlbmVyKGV2ZW50LCBNT1VTRU1PVkVfRVZFTlRfVFlQRSk7XG4gIH1cblxuICBhZGRNb3VzZVVwSGFuZGxlcihtb3VzZVVwSGFuZGxlcikge1xuICAgIGNvbnN0IG1vdXNlVXBIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFVVBfRVZFTlRfVFlQRSBdO1xuXG4gICAgbW91c2VVcEhhbmRsZXJzLnB1c2gobW91c2VVcEhhbmRsZXIpO1xuICB9XG5cbiAgYWRkTW91c2VEb3duSGFuZGxlcihtb3VzZURvd25IYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VEb3duSGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRURPV05fRVZFTlRfVFlQRSBdO1xuXG4gICAgbW91c2VEb3duSGFuZGxlcnMucHVzaChtb3VzZURvd25IYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlTW92ZUhhbmRsZXIobW91c2VNb3ZlSGFuZGxlcikge1xuICAgIGNvbnN0IG1vdXNlTW92ZUhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VNT1ZFX0VWRU5UX1RZUEUgXTtcblxuICAgIG1vdXNlTW92ZUhhbmRsZXJzLnB1c2gobW91c2VNb3ZlSGFuZGxlcik7XG4gIH1cblxuICBhZGRNb3VzZVdoZWVsSGFuZGxlcihtb3VzZVdoZWVsSGFuZGxlcikge1xuICAgIGNvbnN0IG1vdXNlV2hlZWxIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIFdIRUVMX0VWRU5UX1RZUEUgXTtcblxuICAgIG1vdXNlV2hlZWxIYW5kbGVycy5wdXNoKG1vdXNlV2hlZWxIYW5kbGVyKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzKSB7XG4gICAgICBjb25zdCBjYW52YXNET01FbGVtZW50ID0gY2FudmFzLmdldERPTUVsZW1lbnQoKTtcblxuICAgIHRoaXMuaGFuZGxlcnNNYXBbIFdIRUVMX0VWRU5UX1RZUEUgXSA9IFtdO1xuICAgIHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFVVBfRVZFTlRfVFlQRSBdID0gW107XG4gICAgdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VET1dOX0VWRU5UX1RZUEUgXSA9IFtdO1xuICAgIHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFTU9WRV9FVkVOVF9UWVBFIF0gPSBbXTtcblxuICAgIGNhbnZhc0RPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihXSEVFTF9FVkVOVF9UWVBFLCB0aGlzLndoZWVsRXZlbnRMaXN0ZW5lcik7XG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKE1PVVNFVVBfRVZFTlRfVFlQRSwgdGhpcy5tb3VzZVVwRXZlbnRMaXN0ZW5lcik7XG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKE1PVVNFRE9XTl9FVkVOVF9UWVBFLCB0aGlzLm1vdXNlRG93bkV2ZW50TGlzdGVuZXIpO1xuICAgIGNhbnZhc0RPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihNT1VTRU1PVkVfRVZFTlRfVFlQRSwgdGhpcy5tb3VzZU1vdmVFdmVudExpc3RlbmVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBoYW5kbGVyc01hcCA9IHt9LFxuICAgICAgICAgIG1vdXNlRG93biA9IGZhbHNlLCAgLy8vXG5cdFx0XHRcdFx0bW91c2VFdmVudHMgPSBuZXcgTW91c2VFdmVudHMoaGFuZGxlcnNNYXAsIG1vdXNlRG93bik7XG5cbiAgICByZXR1cm4gbW91c2VFdmVudHM7XG4gIH1cbn1cblxuZnVuY3Rpb24gbW91c2VXaGVlbERlbHRhRnJvbUV2ZW50KGV2ZW50KSB7XG4gIGNvbnN0IHsgd2hlZWxEZWx0YSB9ID0gZXZlbnQsXG4gICAgICAgIG1vdXNlV2hlZWxEZWx0YSA9IE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCB3aGVlbERlbHRhKSk7IC8vL1xuXG4gIHJldHVybiBtb3VzZVdoZWVsRGVsdGE7XG59XG5cbmZ1bmN0aW9uIG1vdXNlQ29vcmRpbmF0ZXNGcm9tRXZlbnQoZXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQsIGNsaWVudFgsIGNsaWVudFkgfSA9IGV2ZW50LFxuICAgICAgICBjYW52YXNET01FbGVtZW50ID0gdGFyZ2V0LCAgLy8vXG4gICAgICAgIGJvdW5kaW5nQ2xpZW50UmVjdCA9IGNhbnZhc0RPTUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIHsgdG9wLCBsZWZ0IH0gPSBib3VuZGluZ0NsaWVudFJlY3QsXG4gICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBbXG4gICAgICAgICAgY2xpZW50WCAtIGxlZnQsXG4gICAgICAgICAgdG9wIC0gY2xpZW50WVxuICAgICAgICBdO1xuXG4gIHJldHVybiBtb3VzZUNvb3JkaW5hdGVzO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgS2V5RXZlbnRzIGZyb20gXCIuL2tleUV2ZW50c1wiO1xuaW1wb3J0IE1vdXNlRXZlbnRzIGZyb20gXCIuL21vdXNlRXZlbnRzXCI7XG5cbmltcG9ydCB7IHplcm8yLCBzdWJ0cmFjdDIgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbnB1dCB7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXJzLCBrZXlFdmVudHMsIG1vdXNlRXZlbnRzLCBtb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLmhhbmRsZXJzID0gaGFuZGxlcnM7XG4gICAgdGhpcy5rZXlFdmVudHMgPSBrZXlFdmVudHM7XG4gICAgdGhpcy5tb3VzZUV2ZW50cyA9IG1vdXNlRXZlbnRzO1xuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBtb3VzZU1vdmVIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlRG93biwgY2FudmFzKSB7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSB0aGlzLm1vdXNlQ29vcmRpbmF0ZXM7ICAvLy9cblxuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG5cbiAgICBpZiAodGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobW91c2VEb3duKSB7XG4gICAgICBjb25zdCBtb3VzZVdoZWVsRGVsdGEgPSAwLCAgLy8vXG4gICAgICAgICAgICBzaGlmdEtleURvd24gPSB0aGlzLmtleUV2ZW50cy5pc1NoaWZ0S2V5RG93bigpLFxuICAgICAgICAgICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc3VidHJhY3QyKHRoaXMubW91c2VDb29yZGluYXRlcywgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgICB0aGlzLmhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlcihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxEZWx0YSwgY2FudmFzKSB7XG4gICAgY29uc3Qgc2hpZnRLZXlEb3duID0gdGhpcy5rZXlFdmVudHMuaXNTaGlmdEtleURvd24oKSxcbiAgICAgICAgICByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSB6ZXJvMigpO1xuXG4gICAgdGhpcy5oYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICBoYW5kbGVyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24pO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkVXNlcklucHV0SGFuZGxlcih1c2VySW5wdXRIYW5kbGVyKSB7XG4gICAgY29uc3QgaGFuZGxlciA9IHVzZXJJbnB1dEhhbmRsZXI7IC8vL1xuXG4gICAgdGhpcy5oYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICB9XG5cbiAgYWRkRXNjYXBlS2V5RG93bkhhbmRsZXIoZXNjYXBlS2V5RG93bkhhbmRsZXIpIHsgdGhpcy5rZXlFdmVudHMuYWRkRXNjYXBlS2V5RG93bkhhbmRsZXIoZXNjYXBlS2V5RG93bkhhbmRsZXIpOyB9XG5cbiAgaW5pdGlhbGlzZShjYW52YXMpIHtcbiAgICBjb25zdCBtb3VzZU1vdmVIYW5kbGVyID0gdGhpcy5tb3VzZU1vdmVIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VXaGVlbEhhbmRsZXIgPSB0aGlzLm1vdXNlV2hlZWxIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmtleUV2ZW50cy5pbml0aWFsaXNlKCk7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRzLmluaXRpYWxpc2UoY2FudmFzKTtcblxuICAgIHRoaXMubW91c2VFdmVudHMuYWRkTW91c2VNb3ZlSGFuZGxlcihtb3VzZU1vdmVIYW5kbGVyKTtcblxuICAgIHRoaXMubW91c2VFdmVudHMuYWRkTW91c2VXaGVlbEhhbmRsZXIobW91c2VXaGVlbEhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gW10sXG4gICAgICAgICAga2V5RXZlbnRzID0gS2V5RXZlbnRzLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbW91c2VFdmVudHMgPSBNb3VzZUV2ZW50cy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBudWxsLCAgLy8vXG4gICAgICAgICAgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHVzZXJJbnB1dCA9IG5ldyBVc2VySW5wdXQoaGFuZGxlcnMsIGtleUV2ZW50cywgbW91c2VFdmVudHMsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gdXNlcklucHV0O1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQYXJ0IGZyb20gXCIuLi9lbGVtZW50L3BhcnRcIjtcbmltcG9ydCBDYW1lcmEgZnJvbSBcIi4uL2VsZW1lbnQvY2FtZXJhXCI7XG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IFVzZXJJbnB1dCBmcm9tIFwiLi4vbWlzY2VsbGFuZW91cy91c2VySW5wdXRcIjtcblxuaW1wb3J0IHsgemVybzIgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyBERUZBVUxUX01BUkdJTl9PRl9FUlJPUiwgREVGQVVMVF9CQUNLR1JPVU5EX0NPTE9VUiB9IGZyb20gXCIuLi9kZWZhdWx0c1wiO1xuaW1wb3J0IHsgZWxlbWVudEZyb21DaGlsZEVsZW1lbnRzLCBlbGVtZW50c0Zyb21DaGlsZEVsZW1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzLCBjYW1lcmEsIGNhbnZhcywgY29sb3VyKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYTtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmNvbG91ciA9IGNvbG91cjtcbiAgfVxuXG4gIGdldFBhcnRzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnRzO1xuICB9XG5cbiAgZ2V0Q2FtZXJhKCkge1xuICAgIHJldHVybiB0aGlzLmNhbWVyYTtcbiAgfVxuXG4gIGdldENhbnZhcygpIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXM7XG4gIH1cblxuICBnZXRDb2xvdXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sb3VyO1xuICB9XG5cbiAgZXNjYXBlS2V5RG93bkhhbmRsZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5jYW1lcmEucmVzZXQoKTtcblxuICAgIHRoaXMud2luZG93UmVzaXplSGFuZGxlcigpOyAvLy9cbiAgfVxuXG4gIHdpbmRvd1Jlc2l6ZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY2xpZW50V2lkdGggPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRXaWR0aCgpLFxuICAgICAgICAgIGNsaWVudEhlaWdodCA9IHRoaXMuY2FudmFzLmdldENsaWVudEhlaWdodCgpLFxuICAgICAgICAgIHdpZHRoID0gY2xpZW50V2lkdGgsICAvLy9cbiAgICAgICAgICBoZWlnaHQgPSBjbGllbnRIZWlnaHQ7XG5cbiAgICB0aGlzLmNhbnZhcy5yZXNpemUod2lkdGgsIGhlaWdodCk7XG5cbiAgICBjb25zdCByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSB6ZXJvMigpLCAvLy9cbiAgICAgICAgICBtb3VzZVdoZWVsRGVsdGEgPSAwLCAgLy8vXG4gICAgICAgICAgc2hpZnRLZXlEb3duID0gZmFsc2U7IC8vL1xuXG4gICAgdGhpcy51c2VySW5wdXRIYW5kbGVyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24pO1xuICB9XG5cbiAgdXNlcklucHV0SGFuZGxlciA9IChyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duKSA9PiB7XG4gICAgY29uc3QgcmVuZGVyID0gdGhpcy5yZW5kZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuY2FtZXJhLnVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCB0aGlzLmNhbnZhcywgcmVuZGVyKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgdXNlcklucHV0ID0gVXNlcklucHV0LmZyb21Ob3RoaW5nKCk7XG5cbiAgICB0aGlzLnBhcnRzLmZvckVhY2goKHBhcnQpID0+IHtcbiAgICAgIHBhcnQuaW5pdGlhbGlzZShjYW52YXMsIG1hcmdpbk9mRXJyb3IpO1xuICAgIH0pO1xuXG4gICAgdXNlcklucHV0LmluaXRpYWxpc2UoY2FudmFzKTtcblxuICAgIHVzZXJJbnB1dC5hZGRVc2VySW5wdXRIYW5kbGVyKHRoaXMudXNlcklucHV0SGFuZGxlcik7XG5cbiAgICB1c2VySW5wdXQuYWRkRXNjYXBlS2V5RG93bkhhbmRsZXIodGhpcy5lc2NhcGVLZXlEb3duSGFuZGxlcik7XG5cbiAgICB3aW5kb3cub25yZXNpemUgPSB0aGlzLndpbmRvd1Jlc2l6ZUhhbmRsZXI7XG5cbiAgICB0aGlzLndpbmRvd1Jlc2l6ZUhhbmRsZXIoKTsgLy8vXG4gIH1cblxuICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkge1xuICAgIHRoaXMuY2FudmFzLmNsZWFyKHRoaXMuY29sb3VyKTtcblxuICAgIHRoaXMucGFydHMuZm9yRWFjaCgocGFydCkgPT4ge1xuICAgICAgcGFydC5yZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgdGhpcy5jYW52YXMpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGNhbnZhcywgY2hpbGRFbGVtZW50cywgYmFja2dyb3VuZENvbG91ciA9IERFRkFVTFRfQkFDS0dST1VORF9DT0xPVVIgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgcGFydHMgPSBlbGVtZW50c0Zyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMsIFBhcnQpLFxuICAgICAgICAgIGNhbWVyYSA9IGVsZW1lbnRGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzLCBDYW1lcmEpLFxuICAgICAgICAgIGNvbG91ciA9IGJhY2tncm91bmRDb2xvdXIsICAvL1xuICAgICAgICAgIHNjZW5lID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhTY2VuZSwgcHJvcGVydGllcywgcGFydHMsIGNhbWVyYSwgY2FudmFzLCBjb2xvdXIpLFxuICAgICAgICAgIG1hcmdpbk9mRXJyb3IgPSBERUZBVUxUX01BUkdJTl9PRl9FUlJPUjtcblxuICAgIHNjZW5lLmluaXRpYWxpc2UoY2FudmFzLCBtYXJnaW5PZkVycm9yKTtcblxuICAgIHJldHVybiBzY2VuZTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9tYXRyaXhcIjtcbmltcG9ydCB7IHJlZmxlY3QzLCB0cnVuY2F0ZTQsIHRyYW5zZm9ybTQgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWxhdGl2ZU9mZnNldHNGcm9tQW5nbGVzQW5kRGlyZWN0aW9ucyhhbmdsZXMsIGRpcmVjdGlvbnMpIHtcbiAgYW5nbGVzID0gcmVmbGVjdDMoYW5nbGVzKTsgIC8vL1xuXG4gIGNvbnN0IHJldmVyc2VPcmRlciA9IHRydWUsXG4gICAgICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMoYW5nbGVzLCByZXZlcnNlT3JkZXIpO1xuXG4gIGxldCByZWxhdGl2ZU9mZnNldHMgPSB0cmFuc2Zvcm00KGRpcmVjdGlvbnMsIHJvdGF0aW9uc01hdHJpeCk7XG5cbiAgcmVsYXRpdmVPZmZzZXRzID0gdHJ1bmNhdGU0KHJlbGF0aXZlT2Zmc2V0cyk7XG5cbiAgcmV0dXJuIHJlbGF0aXZlT2Zmc2V0cztcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYWRkMywgc2NhbGUyLCByZWZsZWN0MiB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IHJlbGF0aXZlT2Zmc2V0c0Zyb21BbmdsZXNBbmREaXJlY3Rpb25zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9vZmZzZXRzXCI7XG5pbXBvcnQgeyBNT1VTRV9XSEVFTF9ERUxUQV9NVUxUSVBMSUVSLCBSRUxBVElWRV9NT1VTRV9DT09SRElOQVRFU19NVUxUSVBMSUVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYW4ge1xuICBjb25zdHJ1Y3RvcihvZmZzZXRzLCBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyLCByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyKSB7XG4gICAgdGhpcy5vZmZzZXRzID0gb2Zmc2V0cztcbiAgICB0aGlzLm1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIgPSBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyO1xuICAgIHRoaXMucmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllciA9IHJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXI7XG4gIH1cblxuICBnZXRPZmZzZXRzKCkge1xuICAgIHJldHVybiB0aGlzLm9mZnNldHM7XG4gIH1cblxuICBnZXREZWx0YU11bHRpcGxpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubW91c2VXaGVlbERlbHRhTXVsdGlwbGllcjtcbiAgfVxuXG4gIGdldFJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllcjtcbiAgfVxuXG4gIHVwZGF0ZU9mZnNldHMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIGFuZ2xlcykge1xuICAgIG1vdXNlV2hlZWxEZWx0YSA9IG1vdXNlV2hlZWxEZWx0YSAqIHRoaXMubW91c2VXaGVlbERlbHRhTXVsdGlwbGllcjsgLy8vXG5cbiAgICByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSBzY2FsZTIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCB0aGlzLnJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIpOyAvLy9cblxuICAgIGNvbnN0IHNjYWxlZFJlZmxlY3RlZFJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHJlZmxlY3QyKHNjYWxlMihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIDEpKSxcbiAgICAgICAgICBkaXJlY3Rpb25zID0gWyAuLi5zY2FsZWRSZWZsZWN0ZWRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgMCBdLFxuICAgICAgICAgIHJlbGF0aXZlT2Zmc2V0cyA9IHJlbGF0aXZlT2Zmc2V0c0Zyb21BbmdsZXNBbmREaXJlY3Rpb25zKGFuZ2xlcywgZGlyZWN0aW9ucywgMSk7XG5cbiAgICB0aGlzLm9mZnNldHMgPSBhZGQzKHRoaXMub2Zmc2V0cywgcmVsYXRpdmVPZmZzZXRzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5pdGlhbE9mZnNldHNNb3VzZVNlbnNpdGl2aXR5QW5kTW91c2VXaGVlbFNlbnNpdGl2aXR5KGluaXRpYWxPZmZzZXRzLCBtb3VzZVNlbnNpdGl2aXR5LCBtb3VzZVdoZWVsU2Vuc2l0aXZpdHkpIHtcbiAgICBjb25zdCBvZmZzZXRzID0gaW5pdGlhbE9mZnNldHMsIC8vL1xuICAgICAgICAgIG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIgPSBNT1VTRV9XSEVFTF9ERUxUQV9NVUxUSVBMSUVSICogbW91c2VXaGVlbFNlbnNpdGl2aXR5LFxuICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIgPSBSRUxBVElWRV9NT1VTRV9DT09SRElOQVRFU19NVUxUSVBMSUVSICogbW91c2VTZW5zaXRpdml0eSxcbiAgICAgICAgICBwYW4gPSBuZXcgUGFuKG9mZnNldHMsIG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIsIHJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIpO1xuXG4gICAgcmV0dXJuIHBhbjtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBBTkdMRVNfTVVMVElQTElFUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGFkZDMsIHNjYWxlMiwgdHJhbnNmb3JtMyB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsdCB7XG4gIGNvbnN0cnVjdG9yKGFuZ2xlcywgY2xvY2t3aXNlKSB7XG4gICAgdGhpcy5hbmdsZXMgPSBhbmdsZXM7XG4gICAgdGhpcy5jbG9ja3dpc2UgPSBjbG9ja3dpc2U7XG4gIH1cblxuICBnZXRBbmdsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW5nbGVzO1xuICB9XG5cbiAgaXNDbG9ja3dpc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvY2t3aXNlO1xuICB9XG5cbiAgdXBkYXRlQW5nbGVzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcykge1xuICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHNjYWxlMihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIEFOR0xFU19NVUxUSVBMSUVSKTsgLy8vXG5cbiAgICBjb25zdCBtdWx0aXBsaWVyID0gdGhpcy5jbG9ja3dpc2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgKzEgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAtMSxcbiAgICAgICAgICBtYXRyaXggPSBbXG5cbiAgICAgICAgICAgICAgICAgICAgICAwLCArbXVsdGlwbGllciwgMCxcbiAgICAgICAgICAgIC1tdWx0aXBsaWVyLCAgICAgICAgICAgMCwgMCxcbiAgICAgICAgICAgICAgICAgICAgICAwLCAgICAgICAgICAgMCwgMFxuXG4gICAgICAgICAgXSxcbiAgICAgICAgICByZWxhdGl2ZUFuZ2xlcyA9IHRyYW5zZm9ybTMoWyAuLi5yZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIDAgXSwgbWF0cml4KTtcblxuICAgIHRoaXMuYW5nbGVzID0gYWRkMyh0aGlzLmFuZ2xlcywgcmVsYXRpdmVBbmdsZXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Jbml0aWFsQW5nbGVzKGluaXRpYWxBbmdsZXMpIHtcbiAgICBjb25zdCBhbmdsZXMgPSBbIC4uLmluaXRpYWxBbmdsZXMsIDAgXSxcbiAgICAgICAgICBjbG9ja3dpc2UgPSBmYWxzZSxcbiAgICAgICAgICB0aWx0ID0gbmV3IFRpbHQoYW5nbGVzLCBjbG9ja3dpc2UpO1xuXG4gICAgcmV0dXJuIHRpbHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxBbmdsZXNBbmRDbG9ja3dpc2UoaW5pdGlhbEFuZ2xlcywgY2xvY2t3aXNlKSB7XG4gICAgY29uc3QgYW5nbGVzID0gWyAuLi5pbml0aWFsQW5nbGVzLCAwIF0sXG4gICAgICAgICAgdGlsdCA9IG5ldyBUaWx0KGFuZ2xlcywgY2xvY2t3aXNlKTtcblxuICAgIHJldHVybiB0aWx0O1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRKU09OKGtleSkge1xuICBsZXQganNvbiA9IG51bGw7XG5cbiAgY29uc3QgdmFsdWUgPSBnZXQoa2V5KTtcblxuICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICBjb25zdCBqc29uU3RyaW5nID0gdmFsdWU7IC8vL1xuXG4gICAganNvbiA9IEpTT04ucGFyc2UoanNvblN0cmluZyk7XG4gIH1cblxuICByZXR1cm4ganNvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEpTT04oa2V5LCBqc29uKSB7XG4gIGNvbnN0IGpzb25TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShqc29uKSxcbiAgICAgICAgdmFsdWUgPSBqc29uU3RyaW5nOyAvLy9cblxuICBzZXQoa2V5LCB2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVKU09OKGtleSkge1xuICByZW1vdmUoa2V5KTtcbn1cblxuZnVuY3Rpb24gZ2V0KGtheSkge1xuICBjb25zdCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtheSkgfHwgbnVsbDtcblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHNldChrYXksIHZhbHVlKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtheSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmUoa2V5KSB7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG59IiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGFuIGZyb20gXCIuLi8uLi9taXNjZWxsYW5lb3VzL3BhblwiO1xuaW1wb3J0IFRpbHQgZnJvbSBcIi4uLy4uL21pc2NlbGxhbmVvdXMvdGlsdFwiO1xuXG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9jYW1lcmFcIjtcblxuaW1wb3J0IHsgc2NhbGUyLCBzY2FsZTMgfSBmcm9tIFwiLi4vLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyBnZXRKU09OLCBzZXRKU09OLCByZW1vdmVKU09OIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9sb2NhbFN0b3JhZ2VcIjtcbmltcG9ydCB7IEdBTUlOR19DQU1FUkEsIElOVkVSVF9NVUxUSVBMSUVSLCBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUiB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IERFRkFVTFRfUEVSU0lTVCxcbiAgICAgICAgIERFRkFVTFRfSU5JVElBTF9BTkdMRVMsXG4gICAgICAgICBERUZBVUxUX0lOSVRJQUxfUE9TSVRJT04sXG4gICAgICAgICBERUZBVUxUX01PVVNFX1NFTlNJVElWSVRZLFxuICAgICAgICAgREVGQVVMVF9NT1VTRV9XSEVFTF9TRU5TSVRJVklUWSB9IGZyb20gXCIuLi8uLi9kZWZhdWx0c1wiO1xuaW1wb3J0IHsgb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzLFxuICAgICAgICAgcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyxcbiAgICAgICAgIHBvc2l0aW9uTWF0cml4RnJvbU5vdGhpbmcsXG4gICAgICAgICBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeCxcbiAgICAgICAgIHByb2plY3Rpb25NYXRyaXhGcm9tQ2FtZXJhQW5kQ2FudmFzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9tYXRyaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtaW5nQ2FtZXJhIGV4dGVuZHMgQ2FtZXJhIHtcbiAgY29uc3RydWN0b3IoekZhciwgek5lYXIsIGZpZWxkT2ZWaWV3LCBwYW4sIHRpbHQsIHBlcnNpc3QpIHtcbiAgICBzdXBlcih6RmFyLCB6TmVhciwgZmllbGRPZlZpZXcpO1xuXG4gICAgdGhpcy5wYW4gPSBwYW47XG4gICAgdGhpcy50aWx0ID0gdGlsdDtcbiAgICB0aGlzLnBlcnNpc3QgPSBwZXJzaXN0O1xuICB9XG5cbiAgZ2V0UGFuKCkge1xuICAgIHJldHVybiB0aGlzLnBhbjtcbiAgfVxuXG4gIGdldFRpbHQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGlsdDtcbiAgfVxuXG4gIGRvZXNQZXJzaXN0KCkge1xuICAgIHJldHVybiB0aGlzLnBlcnNpc3Q7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICBjb25zdCBrZXkgPSBHQU1JTkdfQ0FNRVJBOyAgLy8vXG5cbiAgICByZW1vdmVKU09OKGtleSk7XG5cbiAgICB0aGlzLnBhbiA9IHBhbkZyb21Qcm9wZXJ0aWVzKHRoaXMucHJvcGVydGllcyk7XG4gICAgdGhpcy50aWx0ID0gdGlsdEZyb21Qcm9wZXJ0aWVzKHRoaXMucHJvcGVydGllcyk7XG4gIH1cblxuICB1cGRhdGUocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93biwgY2FudmFzLCByZW5kZXIpIHtcbiAgICBjb25zdCBtb3VzZVdoZWVsTW92ZWQgPSAobW91c2VXaGVlbERlbHRhICE9PSAwKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChzaGlmdEtleURvd24gfHwgbW91c2VXaGVlbE1vdmVkKSB7XG4gICAgICBjb25zdCBhbmdsZXMgPSB0aGlzLnRpbHQuZ2V0QW5nbGVzKCk7XG5cbiAgICAgIHRoaXMucGFuLnVwZGF0ZU9mZnNldHMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIGFuZ2xlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGlsdC51cGRhdGVBbmdsZXMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKTtcbiAgICB9XG5cbiAgICBjb25zdCBjYW1lcmEgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgYW5nbGVzID0gdGhpcy50aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIHBlcnNpc3QgPSB0aGlzLmRvZXNQZXJzaXN0KCksXG4gICAgICAgICAgb2Zmc2V0cyA9IHRoaXMucGFuLmdldE9mZnNldHMoKTtcblxuICAgIGlmIChwZXJzaXN0KSB7XG4gICAgICBjb25zdCBrZXkgPSBHQU1JTkdfQ0FNRVJBLCAgLy8vXG4gICAgICAgICAgICBhbmdsZXMgPSB0aGlzLnRpbHQuZ2V0QW5nbGVzKCksXG4gICAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgICBhbmdsZXMsXG4gICAgICAgICAgICAgIG9mZnNldHNcbiAgICAgICAgICAgIH07XG5cbiAgICAgIHNldEpTT04oa2V5LCBqc29uKTtcbiAgICB9XG5cbiAgICBjb25zdCBvZmZzZXRzTWF0cml4ID0gb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzKG9mZnNldHMpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4ID0gcG9zaXRpb25NYXRyaXhGcm9tTm90aGluZygpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMoYW5nbGVzKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gcHJvamVjdGlvbk1hdHJpeEZyb21DYW1lcmFBbmRDYW52YXMoY2FtZXJhLCBjYW52YXMpLFxuICAgICAgICAgIG5vcm1hbHNNYXRyaXggPSBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeChyb3RhdGlvbnNNYXRyaXgpO1xuXG4gICAgcmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHBlcnNpc3QgPSBERUZBVUxUX1BFUlNJU1QgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgcGFuID0gcGFuRnJvbVByb3BlcnRpZXMocHJvcGVydGllcyksXG4gICAgICAgICAgdGlsdCA9IHRpbHRGcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSxcbiAgICAgICAgICBnYW1pbmdDYW1lcmEgPSBDYW1lcmEuZnJvbVByb3BlcnRpZXMoR2FtaW5nQ2FtZXJhLCBwcm9wZXJ0aWVzLCBwYW4sIHRpbHQsIHBlcnNpc3QpO1xuXG4gICAgcmV0dXJuIGdhbWluZ0NhbWVyYTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYW5Gcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IHsgcGVyc2lzdCA9IERFRkFVTFRfUEVSU0lTVCxcbiAgICAgICAgICBtb3VzZVNlbnNpdGl2aXR5ID0gREVGQVVMVF9NT1VTRV9TRU5TSVRJVklUWSxcbiAgICAgICAgICBtb3VzZVdoZWVsU2Vuc2l0aXZpdHkgPSBERUZBVUxUX01PVVNFX1dIRUVMX1NFTlNJVElWSVRZIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIGxldCAgeyBpbml0aWFsUG9zaXRpb24gPSBERUZBVUxUX0lOSVRJQUxfUE9TSVRJT04gfSA9IHByb3BlcnRpZXM7XG5cbiAgbGV0IGluaXRpYWxPZmZzZXRzID0gc2NhbGUzKGluaXRpYWxQb3NpdGlvbiwgSU5WRVJUX01VTFRJUExJRVIpO1xuXG4gIGlmIChwZXJzaXN0KSB7XG4gICAgY29uc3Qga2V5ID0gR0FNSU5HX0NBTUVSQSwgIC8vL1xuICAgICAgICAgIGpzb24gPSBnZXRKU09OKGtleSk7XG5cbiAgICBpZiAoanNvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBvZmZzZXRzIH0gPSBqc29uO1xuXG4gICAgICBpbml0aWFsT2Zmc2V0cyA9IG9mZnNldHM7IC8vL1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHBhbiA9IFBhbi5mcm9tSW5pdGlhbE9mZnNldHNNb3VzZVNlbnNpdGl2aXR5QW5kTW91c2VXaGVlbFNlbnNpdGl2aXR5KGluaXRpYWxPZmZzZXRzLCBtb3VzZVNlbnNpdGl2aXR5LCBtb3VzZVdoZWVsU2Vuc2l0aXZpdHkpO1xuXG4gIHJldHVybiBwYW47XG59XG5cbmZ1bmN0aW9uIHRpbHRGcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IHsgcGVyc2lzdCA9IERFRkFVTFRfUEVSU0lTVCB9ID0gcHJvcGVydGllcztcblxuICBsZXQgIHsgaW5pdGlhbEFuZ2xlcyA9IERFRkFVTFRfSU5JVElBTF9BTkdMRVMgfSA9IHByb3BlcnRpZXM7XG5cbiAgaW5pdGlhbEFuZ2xlcyA9IHNjYWxlMihpbml0aWFsQW5nbGVzLCBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUik7IC8vL1xuXG4gIGlmIChwZXJzaXN0KSB7XG4gICAgY29uc3Qga2V5ID0gR0FNSU5HX0NBTUVSQSwgIC8vL1xuICAgICAgICAgIGpzb24gPSBnZXRKU09OKGtleSk7XG5cbiAgICBpZiAoanNvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBhbmdsZXMgfSA9IGpzb247XG5cbiAgICAgIGluaXRpYWxBbmdsZXMgPSBhbmdsZXM7IC8vL1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNsb2Nrd2lzZSA9IHRydWUsXG4gICAgICAgIHRpbHQgPSBUaWx0LmZyb21Jbml0aWFsQW5nbGVzQW5kQ2xvY2t3aXNlKGluaXRpYWxBbmdsZXMsIGNsb2Nrd2lzZSk7XG5cbiAgcmV0dXJuIHRpbHQ7XG59IiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBNSU5JTVVNX0RJU1RBTkNFLCBNT1VTRV9XSEVFTF9ERUxUQV9NVUxUSVBMSUVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBab29tIHtcbiAgY29uc3RydWN0b3IoZGlzdGFuY2UsIG1pbmltdW1EaXN0YW5jZSwgbW91c2VXaGVlbERlbHRhTXVsdGlwbGllcikge1xuICAgIHRoaXMuZGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgICB0aGlzLm1pbmltdW1EaXN0YW5jZSA9IG1pbmltdW1EaXN0YW5jZTtcbiAgICB0aGlzLm1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIgPSBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyO1xuICB9XG5cbiAgZ2V0RGlzdGFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzdGFuY2U7XG4gIH1cblxuICBnZXRNaW5pbXVtRGlzdGFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMubWluaW11bURpc3RhbmNlO1xuICB9XG5cbiAgZ2V0RGVsdGFNdWx0aXBsaWVyKCkge1xuICAgIHJldHVybiB0aGlzLm1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXI7XG4gIH1cblxuICB1cGRhdGVEaXN0YW5jZShtb3VzZVdoZWVsRGVsdGEpIHtcbiAgICBtb3VzZVdoZWVsRGVsdGEgPSBtb3VzZVdoZWVsRGVsdGEgKiB0aGlzLm1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXI7IC8vL1xuXG4gICAgdGhpcy5kaXN0YW5jZSA9IHRoaXMuZGlzdGFuY2UgLSBtb3VzZVdoZWVsRGVsdGE7XG5cbiAgICB0aGlzLmRpc3RhbmNlID0gTWF0aC5tYXgodGhpcy5taW5pbXVtRGlzdGFuY2UsIHRoaXMuZGlzdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Jbml0aWFsRGlzdGFuY2VBbmRNb3VzZVdoZWVsU2Vuc2l0aXZpdHkoaW5pdGlhbERpc3RhbmNlLCBtb3VzZVdoZWVsU2Vuc2l0aXZpdHkpIHtcbiAgICBjb25zdCBkaXN0YW5jZSA9IGluaXRpYWxEaXN0YW5jZSwgLy8vXG4gICAgICAgICAgbWluaW11bURpc3RhbmNlID0gTUlOSU1VTV9ESVNUQU5DRSxcbiAgICAgICAgICBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyID0gTU9VU0VfV0hFRUxfREVMVEFfTVVMVElQTElFUiAqIG1vdXNlV2hlZWxTZW5zaXRpdml0eSxcbiAgICAgICAgICB6b29tID0gbmV3IFpvb20oZGlzdGFuY2UsIG1pbmltdW1EaXN0YW5jZSwgbW91c2VXaGVlbERlbHRhTXVsdGlwbGllcik7XG5cbiAgICByZXR1cm4gem9vbTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGFuIGZyb20gXCIuLi8uLi9taXNjZWxsYW5lb3VzL3BhblwiO1xuaW1wb3J0IFRpbHQgZnJvbSBcIi4uLy4uL21pc2NlbGxhbmVvdXMvdGlsdFwiO1xuaW1wb3J0IFpvb20gZnJvbSBcIi4uLy4uL21pc2NlbGxhbmVvdXMvem9vbVwiO1xuaW1wb3J0IENhbWVyYSBmcm9tIFwiLi4vY2FtZXJhXCI7XG5cbmltcG9ydCB7IHNjYWxlMiB9IGZyb20gXCIuLi8uLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IGdldEpTT04sIHNldEpTT04sIHJlbW92ZUpTT04gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2xvY2FsU3RvcmFnZVwiO1xuaW1wb3J0IHsgREVTSUdOX0NBTUVSQSwgREVHUkVFU19UT19SQURJQU5TX01VTFRJUExJRVIgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBERUZBVUxUX1BFUlNJU1QsXG4gICAgICAgICBERUZBVUxUX0lOSVRJQUxfQU5HTEVTLFxuICAgICAgICAgREVGQVVMVF9JTklUSUFMX09GRlNFVFMsXG4gICAgICAgICBERUZBVUxUX0lOSVRJQUxfRElTVEFOQ0UsXG4gICAgICAgICBERUZBVUxUX01PVVNFX1NFTlNJVElWSVRZLFxuICAgICAgICAgREVGQVVMVF9NT1VTRV9XSEVFTF9TRU5TSVRJVklUWSB9IGZyb20gXCIuLi8uLi9kZWZhdWx0c1wiO1xuaW1wb3J0IHsgb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzLFxuICAgICAgICAgcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyxcbiAgICAgICAgIHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlLFxuICAgICAgICAgbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgsXG4gICAgICAgICBwcm9qZWN0aW9uTWF0cml4RnJvbUNhbWVyYUFuZENhbnZhcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbWF0cml4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlc2lnbkNhbWVyYSBleHRlbmRzIENhbWVyYSB7XG4gIGNvbnN0cnVjdG9yKHpGYXIsIHpOZWFyLCBmaWVsZE9mVmlldywgcGFuLCB0aWx0LCB6b29tLCBwZXJzaXN0KSB7XG4gICAgc3VwZXIoekZhciwgek5lYXIsIGZpZWxkT2ZWaWV3KTtcblxuICAgIHRoaXMucGFuID0gcGFuO1xuICAgIHRoaXMudGlsdCA9IHRpbHQ7XG4gICAgdGhpcy56b29tID0gem9vbTtcbiAgICB0aGlzLnBlcnNpc3QgPSBwZXJzaXN0O1xuICB9XG5cbiAgZ2V0UGFuKCkge1xuICAgIHJldHVybiB0aGlzLnBhbjtcbiAgfVxuXG4gIGdldFRpbHQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGlsdDtcbiAgfVxuXG4gIGdldFpvb20oKSB7XG4gICAgcmV0dXJuIHRoaXMuem9vbTtcbiAgfVxuXG4gIGRvZXNQZXJzaXN0KCkge1xuICAgIHJldHVybiB0aGlzLnBlcnNpc3Q7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICBjb25zdCBrZXkgPSBERVNJR05fQ0FNRVJBOyAgLy8vXG5cbiAgICByZW1vdmVKU09OKGtleSk7XG5cbiAgICB0aGlzLnBhbiA9IHBhbkZyb21Qcm9wZXJ0aWVzKHRoaXMucHJvcGVydGllcyk7XG4gICAgdGhpcy50aWx0ID0gdGlsdEZyb21Qcm9wZXJ0aWVzKHRoaXMucHJvcGVydGllcyk7XG4gICAgdGhpcy56b29tID0gem9vbUZyb21Qcm9wZXJ0aWVzKHRoaXMucHJvcGVydGllcyk7XG4gIH1cblxuICB1cGRhdGUocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93biwgY2FudmFzLCByZW5kZXIpIHtcbiAgICBjb25zdCBtb3VzZVdoZWVsTW92ZWQgPSAobW91c2VXaGVlbERlbHRhICE9PSAwKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChzaGlmdEtleURvd24pIHtcbiAgICAgIGNvbnN0IGFuZ2xlcyA9IHRoaXMudGlsdC5nZXRBbmdsZXMoKTtcblxuICAgICAgdGhpcy5wYW4udXBkYXRlT2Zmc2V0cyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgYW5nbGVzKTtcbiAgICB9IGVsc2UgaWYgKG1vdXNlV2hlZWxNb3ZlZCkge1xuICAgICAgdGhpcy56b29tLnVwZGF0ZURpc3RhbmNlKG1vdXNlV2hlZWxEZWx0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGlsdC51cGRhdGVBbmdsZXMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKTtcbiAgICB9XG5cbiAgICBjb25zdCBjYW1lcmEgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgYW5nbGVzID0gdGhpcy50aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIHBlcnNpc3QgPSB0aGlzLmRvZXNQZXJzaXN0KCksXG4gICAgICAgICAgb2Zmc2V0cyA9IHRoaXMucGFuLmdldE9mZnNldHMoKSxcbiAgICAgICAgICBkaXN0YW5jZSA9IHRoaXMuem9vbS5nZXREaXN0YW5jZSgpO1xuXG4gICAgaWYgKHBlcnNpc3QpIHtcbiAgICAgIGNvbnN0IGtleSA9IERFU0lHTl9DQU1FUkEsXG4gICAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgICBhbmdsZXMsXG4gICAgICAgICAgICAgIG9mZnNldHMsXG4gICAgICAgICAgICAgIGRpc3RhbmNlXG4gICAgICAgICAgICB9O1xuXG4gICAgICBzZXRKU09OKGtleSwganNvbik7XG4gICAgfVxuXG4gICAgY29uc3Qgb2Zmc2V0c01hdHJpeCA9IG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyhvZmZzZXRzKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA9IHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlKGRpc3RhbmNlKSxcbiAgICAgICAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcyksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IHByb2plY3Rpb25NYXRyaXhGcm9tQ2FtZXJhQW5kQ2FudmFzKGNhbWVyYSwgY2FudmFzKSxcbiAgICAgICAgICBub3JtYWxzTWF0cml4ID0gbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgocm90YXRpb25zTWF0cml4KTtcblxuICAgIHJlbmRlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBwZXJzaXN0ID0gREVGQVVMVF9QRVJTSVNUIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHBhbiA9IHBhbkZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpLFxuICAgICAgICAgIHRpbHQgPSB0aWx0RnJvbVByb3BlcnRpZXMocHJvcGVydGllcyksXG4gICAgICAgICAgem9vbSA9IHpvb21Gcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSxcbiAgICAgICAgICBkZXNpZ25DYW1lcmEgPSBDYW1lcmEuZnJvbVByb3BlcnRpZXMoRGVzaWduQ2FtZXJhLCBwcm9wZXJ0aWVzLCBwYW4sIHRpbHQsIHpvb20sIHBlcnNpc3QpO1xuXG4gICAgcmV0dXJuIGRlc2lnbkNhbWVyYTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYW5Gcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IHsgcGVyc2lzdCA9IERFRkFVTFRfUEVSU0lTVCxcbiAgICAgICAgICBtb3VzZVNlbnNpdGl2aXR5ID0gREVGQVVMVF9NT1VTRV9TRU5TSVRJVklUWSxcbiAgICAgICAgICBtb3VzZVdoZWVsU2Vuc2l0aXZpdHkgPSBERUZBVUxUX01PVVNFX1dIRUVMX1NFTlNJVElWSVRZIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIGxldCB7IGluaXRpYWxPZmZzZXRzID0gREVGQVVMVF9JTklUSUFMX09GRlNFVFMgfSA9IHByb3BlcnRpZXM7XG5cbiAgaWYgKHBlcnNpc3QpIHtcbiAgICBjb25zdCBrZXkgPSBERVNJR05fQ0FNRVJBLCAgLy8vXG4gICAgICAgICAganNvbiA9IGdldEpTT04oa2V5KTtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IG9mZnNldHMgfSA9IGpzb247XG5cbiAgICAgIGluaXRpYWxPZmZzZXRzID0gb2Zmc2V0czsgLy8vXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcGFuID0gUGFuLmZyb21Jbml0aWFsT2Zmc2V0c01vdXNlU2Vuc2l0aXZpdHlBbmRNb3VzZVdoZWVsU2Vuc2l0aXZpdHkoaW5pdGlhbE9mZnNldHMsIG1vdXNlU2Vuc2l0aXZpdHksIG1vdXNlV2hlZWxTZW5zaXRpdml0eSk7XG5cbiAgcmV0dXJuIHBhbjtcbn1cblxuZnVuY3Rpb24gdGlsdEZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgY29uc3QgeyBwZXJzaXN0ID0gREVGQVVMVF9QRVJTSVNUIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIGxldCB7IGluaXRpYWxBbmdsZXMgPSBERUZBVUxUX0lOSVRJQUxfQU5HTEVTIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIGluaXRpYWxBbmdsZXMgPSBzY2FsZTIoaW5pdGlhbEFuZ2xlcywgREVHUkVFU19UT19SQURJQU5TX01VTFRJUExJRVIpOyAvLy9cblxuICBpZiAocGVyc2lzdCkge1xuICAgIGNvbnN0IGtleSA9IERFU0lHTl9DQU1FUkEsICAvLy9cbiAgICAgICAgICBqc29uID0gZ2V0SlNPTihrZXkpO1xuXG4gICAgaWYgKGpzb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgYW5nbGVzIH0gPSBqc29uO1xuXG4gICAgICBpbml0aWFsQW5nbGVzID0gYW5nbGVzOyAvLy9cbiAgICB9XG4gIH1cblxuICBjb25zdCB0aWx0ID0gVGlsdC5mcm9tSW5pdGlhbEFuZ2xlcyhpbml0aWFsQW5nbGVzKTtcblxuICByZXR1cm4gdGlsdDtcbn1cblxuZnVuY3Rpb24gem9vbUZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgY29uc3QgeyBwZXJzaXN0ID0gREVGQVVMVF9QRVJTSVNULCBtb3VzZVdoZWVsU2Vuc2l0aXZpdHkgPSBERUZBVUxUX01PVVNFX1dIRUVMX1NFTlNJVElWSVRZIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIGxldCB7IGluaXRpYWxEaXN0YW5jZSA9IERFRkFVTFRfSU5JVElBTF9ESVNUQU5DRSB9ID0gcHJvcGVydGllcztcblxuICBpZiAocGVyc2lzdCkge1xuICAgIGNvbnN0IGtleSA9IERFU0lHTl9DQU1FUkEsICAvLy9cbiAgICAgICAgICBqc29uID0gZ2V0SlNPTihrZXkpO1xuXG4gICAgaWYgKGpzb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgZGlzdGFuY2UgfSA9IGpzb247XG5cbiAgICAgIGluaXRpYWxEaXN0YW5jZSA9IGRpc3RhbmNlOyAvLy9cbiAgICB9XG4gIH1cblxuICBjb25zdCB6b29tID0gWm9vbS5mcm9tSW5pdGlhbERpc3RhbmNlQW5kTW91c2VXaGVlbFNlbnNpdGl2aXR5KGluaXRpYWxEaXN0YW5jZSwgbW91c2VXaGVlbFNlbnNpdGl2aXR5KTtcblxuICByZXR1cm4gem9vbTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBBTk9OWU1PVVMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJlbG9hZEltYWdlcyhob3N0LCBpbWFnZU5hbWVzLCBpbWFnZURpcmVjdG9yeVVSSSwgY2FsbGJhY2spIHtcbiAgY29uc3QgaW1hZ2VzID0gW10sXG4gICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgaW1hZ2VzXG4gICAgICAgIH07XG5cbiAgZm9yRWFjaChpbWFnZU5hbWVzLCAoaW1hZ2VOYW1lLCBuZXh0LCBkb25lLCBjb250ZXh0KSA9PiB7XG4gICAgY29uc3Qgc3JjID0gYCR7aG9zdH0ke2ltYWdlRGlyZWN0b3J5VVJJfS8ke2ltYWdlTmFtZX1gLFxuICAgICAgICAgIGltYWdlID0gbmV3IEltYWdlKCksXG4gICAgICAgICAgY3Jvc3NPcmlnaW4gPSBBTk9OWU1PVVM7XG5cbiAgT2JqZWN0LmFzc2lnbihpbWFnZSwge1xuICAgICAgc3JjLFxuICAgICAgb25sb2FkLFxuICAgICAgY3Jvc3NPcmlnaW5cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIG9ubG9hZCgpIHtcbiAgICAgIGltYWdlcy5wdXNoKGltYWdlKTtcblxuICAgICAgbmV4dCgpO1xuICAgIH1cbiAgfSwgZG9uZSwgY29udGV4dCk7XG5cbiAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICBjb25zdCB7IGltYWdlcyB9ID0gY29udGV4dDtcblxuICAgIGNhbGxiYWNrKGltYWdlcywgaW1hZ2VOYW1lcyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWRJbWFnZU1hcChob3N0LCBpbWFnZU1hcFVSSSwgaW1hZ2VNYXBKU09OLCBjYWxsYmFjaykge1xuICBjb25zdCBzcmMgPSBgJHtob3N0fSR7aW1hZ2VNYXBVUkl9YCxcbiAgICAgICAgaW1hZ2VNYXAgPSBuZXcgSW1hZ2UoKSxcdC8vL1xuICAgICAgICBjcm9zc09yaWdpbiA9IEFOT05ZTU9VUzsgIC8vL1xuXG4gIE9iamVjdC5hc3NpZ24oaW1hZ2VNYXAsIHtcbiAgICBzcmMsXG4gICAgb25sb2FkLFxuICAgIGNyb3NzT3JpZ2luXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIG9ubG9hZChldmVudCkge1xuICAgIGNhbGxiYWNrKGltYWdlTWFwLCBpbWFnZU1hcEpTT04pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJlbG9hZEltYWdlcyxcbiAgcHJlbG9hZEltYWdlTWFwXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vcm1hbGlzZTMsIHN1YnRyYWN0MywgY3Jvc3MzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3JtYWwge1xuICBjb25zdHJ1Y3RvcihleHRlbnQpIHtcbiAgICB0aGlzLmV4dGVudCA9IGV4dGVudDtcbiAgfVxuXG4gIGdldEV4dGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5leHRlbnQ7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBleHRlbnQgPSBjbG9uZUV4dGVudCh0aGlzLmV4dGVudCksXG4gICAgICAgICAgbm9ybWFsID0gbmV3IE5vcm1hbChleHRlbnQpO1xuXG4gICAgcmV0dXJuIG5vcm1hbDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGljZXModmVydGljZXMpIHtcbiAgICBjb25zdCBmaXJzdFZlcnRleCA9IGZpcnN0KHZlcnRpY2VzKSxcbiAgICAgICAgICBzZWNvbmRWZXJ0ZXggPSBzZWNvbmQodmVydGljZXMpLFxuICAgICAgICAgIHRoaXJkVmVydGV4ID0gdGhpcmQodmVydGljZXMpLFxuICAgICAgICAgIGZpcnN0UG9zaXRpb24gPSBmaXJzdFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHNlY29uZFBvc2l0aW9uID0gc2Vjb25kVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgdGhpcmRQb3NpdGlvbiA9IHRoaXJkVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgZmlyc3RFeHRlbnQgPSBzdWJ0cmFjdDMoc2Vjb25kUG9zaXRpb24sIGZpcnN0UG9zaXRpb24pLFxuICAgICAgICAgIHNlY29uZEV4dGVudCA9IHN1YnRyYWN0Myh0aGlyZFBvc2l0aW9uLCBmaXJzdFBvc2l0aW9uKSxcbiAgICAgICAgICBleHRlbnQgPSBub3JtYWxpc2UzKGNyb3NzMyhmaXJzdEV4dGVudCwgc2Vjb25kRXh0ZW50KSksXG4gICAgICAgICAgbm9ybWFsID0gbmV3IE5vcm1hbChleHRlbnQpO1xuXG4gICAgcmV0dXJuIG5vcm1hbDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbG9uZUV4dGVudChleHRlbnQpIHsgcmV0dXJuIGV4dGVudC5zbGljZSgpOyB9XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHJvdGF0ZVBvc2l0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9yb3RhdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJ0ZXgge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbikge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xuICB9XG5cbiAgcm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbikge1xuICAgIHRoaXMucG9zaXRpb24gPSByb3RhdGVQb3NpdGlvbih0aGlzLnBvc2l0aW9uLCByb3RhdGlvblF1YXRlcm5pb24pO1xuICB9XG5cbiAgYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRyYW5zZm9ybSh0aGlzLnBvc2l0aW9uKTtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5zbGljZSgpLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXggPSBuZXcgVmVydGV4KHBvc2l0aW9uKTtcblxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgY29uc3QgdmVydGV4ID0gbmV3IFZlcnRleChwb3NpdGlvbik7XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Db29yZGluYXRlVHVwbGUoY29vcmRpbmF0ZVR1cGxlKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBjb29yZGluYXRlVHVwbGUuc2xpY2UoKSwgLy8vXG4gICAgICAgICAgdmVydGV4ID0gbmV3IFZlcnRleChwb3NpdGlvbik7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFZFUlRJQ0VTX0xFTkdUSCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgc3VidHJhY3QzLCBjcm9zczMsIGxlbmd0aDMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZUVkZ2VzKGVkZ2VzKSB7XG4gIGVkZ2VzID0gZWRnZXMubWFwKChlZGdlKSA9PiB7XG4gICAgZWRnZSA9IGVkZ2UuY2xvbmUoKTsgIC8vL1xuXG4gICAgcmV0dXJuIGVkZ2U7XG4gIH0pO1xuXG4gIHJldHVybiBlZGdlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lTm9ybWFsKG5vcm1hbCkge1xuICBub3JtYWwgPSBub3JtYWwuY2xvbmUoKTtcbiAgXG4gIHJldHVybiBub3JtYWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gIHZlcnRpY2VzID0gdmVydGljZXMubWFwKCh2ZXJ0ZXgpID0+IHtcbiAgICB2ZXJ0ZXggPSB2ZXJ0ZXguY2xvbmUoKTsgIC8vL1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfSk7XG5cbiAgcmV0dXJuIHZlcnRpY2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpIHtcbiAgY29uc3QgZWRnZXMgPSB2ZXJ0aWNlcy5tYXAoKHZlcnRleCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBzdGFydEluZGV4ID0gaW5kZXgsIC8vL1xuICAgICAgICAgIGVuZEluZGV4ID0gKHN0YXJ0SW5kZXggKyAxKSAlIFZFUlRJQ0VTX0xFTkdUSCxcbiAgICAgICAgICBzdGFydFZlcnRleCA9IHZlcnRpY2VzW3N0YXJ0SW5kZXhdLFxuICAgICAgICAgIGVuZFZlcnRleCA9IHZlcnRpY2VzW2VuZEluZGV4XSxcbiAgICAgICAgICBlZGdlID0gRWRnZS5mcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgoc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCk7XG5cbiAgICByZXR1cm4gZWRnZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGVkZ2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpIHtcbiAgY29uc3Qgbm9ybWFsID0gTm9ybWFsLmZyb21WZXJ0aWNlcyh2ZXJ0aWNlcyk7XG5cbiAgcmV0dXJuIG5vcm1hbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUFyZWEodmVydGljZXMpIHtcbiAgY29uc3QgZmlyc3RWZXJ0ZXggPSBmaXJzdCh2ZXJ0aWNlcyksXG4gICAgICAgIHNlY29uZFZlcnRleCA9IHNlY29uZCh2ZXJ0aWNlcyksXG4gICAgICAgIHRoaXJkVmVydGV4ID0gdGhpcmQodmVydGljZXMpLFxuICAgICAgICBmaXJzdFZlcnRleFBvc2l0aW9uID0gZmlyc3RWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgc2Vjb25kVmVydGV4UG9zaXRpb24gPSBzZWNvbmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgdGhpcmRWZXJ0ZXhQb3NpdGlvbiA9IHRoaXJkVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIGZpcnN0RXh0ZW50ID0gc3VidHJhY3QzKHNlY29uZFZlcnRleFBvc2l0aW9uLCBmaXJzdFZlcnRleFBvc2l0aW9uKSxcbiAgICAgICAgc2Vjb25kRXh0ZW50ID0gc3VidHJhY3QzKHRoaXJkVmVydGV4UG9zaXRpb24sIGZpcnN0VmVydGV4UG9zaXRpb24pLFxuICAgICAgICBhcmVhID0gbGVuZ3RoMyhjcm9zczMoZmlyc3RFeHRlbnQsIHNlY29uZEV4dGVudCkpIC8gMjtcblxuICByZXR1cm4gYXJlYTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4vZWRnZVwiO1xuaW1wb3J0IE5vcm1hbCBmcm9tIFwiLi9ub3JtYWxcIjtcbmltcG9ydCBWZXJ0ZXggZnJvbSBcIi4vdmVydGV4XCI7XG5cbmltcG9ydCB7IGFkZCwgcGVybXV0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFZFUlRJQ0VTX0xFTkdUSCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZUVkZ2VzLCBjYWxjdWxhdGVOb3JtYWwgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2ZhY2V0XCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVNaWRQb2ludFBvc2l0aW9uLCBpc01pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbWlkUG9pbnRcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25zLFxuICAgICAgICAgY2FsY3VsYXRlTnVsbEludGVyc2VjdGlvbkluZGV4LFxuICAgICAgICAgY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbkluZGV4LFxuICAgICAgICAgY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb259IGZyb20gXCIuLi91dGlsaXRpZXMvaW50ZXJzZWN0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMsIG5vcm1hbCwgZWRnZXMpIHtcbiAgICB0aGlzLnZlcnRpY2VzID0gdmVydGljZXM7XG4gICAgdGhpcy5ub3JtYWwgPSBub3JtYWw7XG4gICAgdGhpcy5lZGdlcyA9IGVkZ2VzO1xuICB9XG5cbiAgZ2V0VmVydGljZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGljZXM7XG4gIH1cblxuICBnZXROb3JtYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9ybWFsO1xuICB9XG5cbiAgZ2V0RWRnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWRnZXM7XG4gIH1cbiAgXG4gIGdldFZlcnRleFBvc2l0aW9ucygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnMgPSB0aGlzLnZlcnRpY2VzLm1hcCgodmVydGV4KSA9PiB7XG4gICAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleC5nZXRQb3NpdGlvbigpO1xuXG4gICAgICByZXR1cm4gdmVydGV4UG9zaXRpb247XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleFBvc2l0aW9ucztcbiAgfVxuICBcbiAgZ2V0VmVydGV4Tm9ybWFscygpIHtcbiAgICBjb25zdCBub3JtYWxFeHRlbnQgPSB0aGlzLm5vcm1hbC5nZXRFeHRlbnQoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWwgPSBub3JtYWxFeHRlbnQsICAvLy9cbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gW1xuICAgICAgICAgICAgdmVydGV4Tm9ybWFsLFxuICAgICAgICAgICAgdmVydGV4Tm9ybWFsLFxuICAgICAgICAgICAgdmVydGV4Tm9ybWFsLFxuICAgICAgICAgIF07XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleE5vcm1hbHM7XG4gIH1cbiAgXG4gIGdldFZlcnRleEluZGV4ZXMoaW5kZXgpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbmRleCA9IGluZGV4ICogMyxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzID0gW1xuICAgICAgICAgICAgdmVydGV4SW5kZXggKyAwLFxuICAgICAgICAgICAgdmVydGV4SW5kZXggKyAxLFxuICAgICAgICAgICAgdmVydGV4SW5kZXggKyAyLFxuICAgICAgICAgIF07XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleEluZGV4ZXM7XG4gIH1cblxuICBpc01hc2tlZChtYXNraW5nRmFjZXQpIHtcbiAgICBjb25zdCBtYXNraW5nRWRnZXMgPSBtYXNraW5nRmFjZXQuZ2V0TWFza2luZ0VkZ2VzKCksXG4gICAgICAgICAgbWlkUG9pbnRQb3NpdGlvbiA9IGNhbGN1bGF0ZU1pZFBvaW50UG9zaXRpb24odGhpcy52ZXJ0aWNlcyksXG4gICAgICAgICAgbWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzID0gaXNNaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMobWlkUG9pbnRQb3NpdGlvbiwgbWFza2luZ0VkZ2VzKSxcbiAgICAgICAgICBtYXNrZWQgPSBtaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXM7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gbWFza2VkO1xuICB9XG5cbiAgcGVybXV0ZShwbGFjZXMpIHtcbiAgICB0aGlzLnZlcnRpY2VzID0gcGVybXV0ZSh0aGlzLnZlcnRpY2VzLCBwbGFjZXMpO1xuXG4gICAgdGhpcy5ub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodGhpcy52ZXJ0aWNlcywgTm9ybWFsKTtcblxuICAgIHRoaXMuZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh0aGlzLnZlcnRpY2VzLCBFZGdlKTtcbiAgfVxuXG4gIHJvdGF0ZShyb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgICB0aGlzLnZlcnRpY2VzLmZvckVhY2goKHZlcnRleCkgPT4ge1xuICAgICAgdmVydGV4LnJvdGF0ZShyb3RhdGlvblF1YXRlcm5pb24pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5ub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodGhpcy52ZXJ0aWNlcywgTm9ybWFsKTtcblxuICAgIHRoaXMuZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh0aGlzLnZlcnRpY2VzLCBFZGdlKTtcbiAgfVxuXG4gIGFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCgodmVydGV4KSA9PiB7XG4gICAgICB2ZXJ0ZXguYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKTtcbiAgICB9KTtcblxuICAgIHRoaXMubm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHRoaXMudmVydGljZXMsIE5vcm1hbCk7XG5cbiAgICB0aGlzLmVkZ2VzID0gY2FsY3VsYXRlRWRnZXModGhpcy52ZXJ0aWNlcywgRWRnZSk7XG4gIH1cblxuICBzcGxpdFdpdGhJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBub25OdWxsSW50ZXJzZWN0aW9ucyA9IGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIG5vbk51bGxJbnRlcnNlY3Rpb25zTGVuZ3RoID0gbm9uTnVsbEludGVyc2VjdGlvbnMubGVuZ3RoO1xuXG4gICAgc3dpdGNoIChub25OdWxsSW50ZXJzZWN0aW9uc0xlbmd0aCkge1xuICAgICAgY2FzZSAyIDpcbiAgICAgICAgdGhpcy5zcGxpdFdpdGhUd29Ob25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMSA6XG4gICAgICAgIHRoaXMuc3BsaXRXaXRoT25lTm9uTnVsbEludGVyc2VjdGlvbihpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMCA6XG4gICAgICAgIHRoaXMuc3BsaXRXaXRoTm9Ob25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIFxuICBzcGxpdFdpdGhUd29Ob25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gY2FsY3VsYXRlTnVsbEludGVyc2VjdGlvbkluZGV4KGludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIHBsYWNlcyA9IChWRVJUSUNFU19MRU5HVEggLSBudWxsSW50ZXJzZWN0aW9uSW5kZXgpICUgVkVSVElDRVNfTEVOR1RIO1xuXG4gICAgaW50ZXJzZWN0aW9ucyA9IHBlcm11dGUoaW50ZXJzZWN0aW9ucywgcGxhY2VzKTtcblxuICAgIGludGVyc2VjdGlvbnMgPSBpbnRlcnNlY3Rpb25zLnNsaWNlKDEpOyAvLy9cblxuICAgIHRoaXMucGVybXV0ZShwbGFjZXMpO1xuXG4gICAgY29uc3Qgc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMgPSBbIDEsIDIgXSxcbiAgICAgICAgICBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMgPSBbIDIsIDAgXSxcbiAgICAgICAgICBpbmRleFR1cGxlcyA9IFtcblxuICAgICAgICAgICAgWyAwLCAxLCAzIF0sXG4gICAgICAgICAgICBbIDMsIDQsIDAgXSxcbiAgICAgICAgICAgIFsgMywgMiwgNCBdLFxuXG4gICAgICAgICAgXTtcblxuICAgIHRoaXMuc3BsaXRXaXRoSW5kZXhUdXBsZXNBbmRJbnRlcnNlY3Rpb25zKHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzLCBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGluZGV4VHVwbGVzLCBpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcbiAgfVxuXG4gIHNwbGl0V2l0aE9uZU5vbk51bGxJbnRlcnNlY3Rpb24oaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IG5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBwbGFjZXMgPSAoVkVSVElDRVNfTEVOR1RIIC0gbm9uTnVsbEludGVyc2VjdGlvbkluZGV4KSAlIFZFUlRJQ0VTX0xFTkdUSDtcblxuICAgIGludGVyc2VjdGlvbnMgPSBwZXJtdXRlKGludGVyc2VjdGlvbnMsIHBsYWNlcyk7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gaW50ZXJzZWN0aW9ucy5zbGljZSgwLCAxKTsgIC8vL1xuXG4gICAgdGhpcy5wZXJtdXRlKHBsYWNlcyk7XG5cbiAgICBjb25zdCBzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcyA9IFsgMCBdLFxuICAgICAgICAgIGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlcyA9IFsgMSBdLFxuICAgICAgICAgIGluZGV4VHVwbGVzID0gW1xuXG4gICAgICAgICAgICBbIDAsIDMsIDIgXSxcbiAgICAgICAgICAgIFsgMywgMSwgMiBdLFxuXG4gICAgICAgICAgXTtcblxuICAgIHRoaXMuc3BsaXRXaXRoSW5kZXhUdXBsZXNBbmRJbnRlcnNlY3Rpb25zKHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzLCBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGluZGV4VHVwbGVzLCBpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcbiAgfVxuXG4gIHNwbGl0V2l0aE5vTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IHNtYWxsZXJGYWNldCA9IHRoaXMuZnJvbVZlcnRpY2VzQW5kTWFyZ2luT2ZFcnJvcih0aGlzLnZlcnRpY2VzLCBtYXJnaW5PZkVycm9yKTsgIC8vL1xuXG4gICAgc21hbGxlckZhY2V0cy5wdXNoKHNtYWxsZXJGYWNldCk7XG4gIH1cblxuICBzcGxpdFdpdGhJbmRleFR1cGxlc0FuZEludGVyc2VjdGlvbnMoc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlcywgaW5kZXhUdXBsZXMsIGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnMgPSB0aGlzLmdldFZlcnRleFBvc2l0aW9ucygpLFxuICAgICAgICAgIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9ucyA9IGludGVyc2VjdGlvbnMubWFwKChpbnRlcnNlY3Rpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGFydFZlcnRleFBvc2l0aW9uSW5kZXggPSBzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgICBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ID0gZW5kVmVydGV4UG9zaXRpb25JbmRleGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICAgIHN0YXJ0VmVydGV4UG9zaXRpb24gPSB2ZXJ0ZXhQb3NpdGlvbnNbc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4XSxcbiAgICAgICAgICAgICAgICAgIGVuZFZlcnRleFBvc2l0aW9uID0gdmVydGV4UG9zaXRpb25zW2VuZFZlcnRleFBvc2l0aW9uSW5kZXhdLFxuICAgICAgICAgICAgICAgICAgaW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb24gPSBjYWxjdWxhdGVJbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbihzdGFydFZlcnRleFBvc2l0aW9uLCBlbmRWZXJ0ZXhQb3NpdGlvbiwgaW50ZXJzZWN0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uO1xuICAgICAgICAgIH0pO1xuXG4gICAgYWRkKHZlcnRleFBvc2l0aW9ucywgaW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb25zKTtcblxuICAgIGluZGV4VHVwbGVzLmZvckVhY2goKGluZGV4VHVwbGUpID0+IHtcbiAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IHZlcnRleFBvc2l0aW9ucywgIC8vL1xuICAgICAgICAgICAgaW5kZXhlcyA9IGluZGV4VHVwbGUsICAvLy9cbiAgICAgICAgICAgIGZhY2V0ID0gdGhpcywgXG4gICAgICAgICAgICBzbWFsbGVyRmFjZXQgPSBzbWFsbGVyRmFjZXRGcm9tUG9zaXRpb25zSW5kZXhlc0ZhY2V0QW5kTWFyZ2luT2ZFcnJvcihwb3NpdGlvbnMsIGluZGV4ZXMsIGZhY2V0LCBtYXJnaW5PZkVycm9yKTtcblxuICAgICAgaWYgKHNtYWxsZXJGYWNldCAhPT0gbnVsbCkge1xuICAgICAgICBzbWFsbGVyRmFjZXRzLnB1c2goc21hbGxlckZhY2V0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzbWFsbGVyRmFjZXRGcm9tUG9zaXRpb25zSW5kZXhlc0ZhY2V0QW5kTWFyZ2luT2ZFcnJvcihwb3NpdGlvbnMsIGluZGV4ZXMsIGZhY2V0LCBtYXJnaW5PZkVycm9yKSB7XG4gIGNvbnN0IHZlcnRpY2VzID0gaW5kZXhlcy5tYXAoKGluZGV4KSA9PiB7XG4gICAgICAgICAgbGV0IHBvc2l0aW9uID0gcG9zaXRpb25zW2luZGV4XTtcbiAgICBcbiAgICAgICAgICBwb3NpdGlvbiA9IHBvc2l0aW9uLnNsaWNlKCk7IC8vL1xuICAgIFxuICAgICAgICAgIGNvbnN0IHZlcnRleCA9IFZlcnRleC5mcm9tUG9zaXRpb24ocG9zaXRpb24pO1xuXG4gICAgICAgICAgcmV0dXJuIHZlcnRleDtcbiAgICAgICAgfSksXG4gICAgICAgIHNtYWxsZXJGYWNldCA9IGZhY2V0LmZyb21WZXJ0aWNlc0FuZE1hcmdpbk9mRXJyb3IodmVydGljZXMsIG1hcmdpbk9mRXJyb3IpO1xuXG4gIHJldHVybiBzbWFsbGVyRmFjZXQ7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuLi9lZGdlXCI7XG5pbXBvcnQgRmFjZXQgZnJvbSBcIi4uL2ZhY2V0XCI7XG5pbXBvcnQgTm9ybWFsIGZyb20gXCIuLi9ub3JtYWxcIjtcbmltcG9ydCBWZXJ0ZXggZnJvbSBcIi4uL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXBwcm94aW1hdGVcIjtcbmltcG9ydCB7IHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy92ZXJ0aWNlc1wiO1xuaW1wb3J0IHsgY2xvbmVFZGdlcywgY2xvbmVOb3JtYWwsIGNsb25lVmVydGljZXMsIGNhbGN1bGF0ZUFyZWEsIGNhbGN1bGF0ZUVkZ2VzLCBjYWxjdWxhdGVOb3JtYWwgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2ZhY2V0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG91cmVkRmFjZXQgZXh0ZW5kcyBGYWNldCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCByZ2JhKSB7XG4gICAgc3VwZXIodmVydGljZXMsIG5vcm1hbCwgZWRnZXMpO1xuICAgIFxuICAgIHRoaXMucmdiYSA9IHJnYmE7XG4gIH1cblxuICBnZXRWZXJ0ZXhDb2xvdXJzKCkge1xuICAgIGNvbnN0IHZlcnRleENvbG91ciA9IHRoaXMucmdiYSwgLy8vXG4gICAgICAgICAgdmVydGV4Q29sb3VycyA9IFtcbiAgICAgICAgICAgIHZlcnRleENvbG91cixcbiAgICAgICAgICAgIHZlcnRleENvbG91cixcbiAgICAgICAgICAgIHZlcnRleENvbG91cixcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXhDb2xvdXJzO1xuICB9XG5cbiAgZnJvbVZlcnRpY2VzQW5kTWFyZ2luT2ZFcnJvcih2ZXJ0aWNlcywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGxldCBjb2xvdXJlZEZhY2V0ID0gbnVsbDtcblxuICAgIGNvbnN0IGFyZWEgPSBjYWxjdWxhdGVBcmVhKHZlcnRpY2VzKSxcbiAgICAgICAgICBhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8oYXJlYSwgbWFyZ2luT2ZFcnJvcik7XG5cbiAgICBpZiAoIWFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8pIHtcbiAgICAgIGNvbnN0IG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcywgTm9ybWFsKSxcbiAgICAgICAgICAgIGVkZ2VzID0gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpO1xuXG4gICAgICBjb2xvdXJlZEZhY2V0ID0gbmV3IENvbG91cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIHRoaXMucmdiYSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbG91cmVkRmFjZXQ7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBsZXQgdmVydGljZXMgPSB0aGlzLmdldFZlcnRpY2VzKCksXG4gICAgICAgIG5vcm1hbCA9IHRoaXMuZ2V0Tm9ybWFsKCksXG4gICAgICAgIGVkZ2VzID0gdGhpcy5nZXRFZGdlcygpO1xuXG4gICAgdmVydGljZXMgPSBjbG9uZVZlcnRpY2VzKHZlcnRpY2VzKTtcbiAgICBub3JtYWwgPSBjbG9uZU5vcm1hbChub3JtYWwpO1xuICAgIGVkZ2VzID0gY2xvbmVFZGdlcyhlZGdlcyk7XG5cbiAgICBjb25zdCBjb2xvdXJlZEZhY2V0ID0gbmV3IENvbG91cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIHRoaXMucmdiYSk7XG5cbiAgICByZXR1cm4gY29sb3VyZWRGYWNldDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29vcmRpbmF0ZVR1cGxlc0luZGV4VHVwbGVDb2xvdXJBbmRNYXJnaW5PZkVycm9yKGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIGNvbG91ciwgbWFyZ2luT2ZFcnJvcikge1xuICAgIGxldCBjb2xvdXJlZEZhY2V0ID0gbnVsbDtcblxuICAgIGNvbnN0IHZlcnRpY2VzID0gdmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGUoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgVmVydGV4KSxcbiAgICAgICAgICBhcmVhID0gY2FsY3VsYXRlQXJlYSh2ZXJ0aWNlcyksXG4gICAgICAgICAgYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybyA9IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKGFyZWEsIG1hcmdpbk9mRXJyb3IpO1xuXG4gICAgaWYgKCFhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKSB7XG4gICAgICBjb25zdCBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCksXG4gICAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKSxcbiAgICAgICAgICAgIHJnYmEgPSBbIC4uLmNvbG91ciwgMSBdOyAgLy8vXG5cbiAgICAgIGNvbG91cmVkRmFjZXQgPSBuZXcgQ29sb3VyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgcmdiYSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbG91cmVkRmFjZXQ7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENhbnZhc0VsZW1lbnQgZnJvbSBcIi4uLy4uL2VsZW1lbnQvY2FudmFzXCI7XG5pbXBvcnQgQ29sb3VyZWRGYWNldCBmcm9tIFwiLi4vLi4vcHJpbWl0aXZlL2ZhY2V0L2NvbG91cmVkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG91cmVkQ2FudmFzRWxlbWVudCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihtYXNrUmVmZXJlbmNlLCB0cmFuc2Zvcm0sIGZhY2V0cywgbWFza3MsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBjb2xvdXIpIHtcbiAgICBzdXBlcihtYXNrUmVmZXJlbmNlLCB0cmFuc2Zvcm0sIGZhY2V0cywgbWFza3MpO1xuXG4gICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICAgIHRoaXMuaW5kZXhlcyA9IGluZGV4ZXM7XG4gICAgdGhpcy5jb2xvdXIgPSBjb2xvdXI7XG4gIH1cblxuICBjcmVhdGVGYWNldHMobWFyZ2luT2ZFcnJvcikge1xuICAgIHN1cGVyLmNyZWF0ZUZhY2V0cyhtYXJnaW5PZkVycm9yKTtcblxuICAgIGNvbnN0IGluZGV4VHVwbGVzID0gdGhpcy5pbmRleGVzLCAgLy8vXG4gICAgICAgICAgZmFjZXRzID0gaW5kZXhUdXBsZXMucmVkdWNlKChmYWNldHMsIGluZGV4VHVwbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGVUdXBsZXMgPSB0aGlzLmNvb3JkaW5hdGVzLCAvLy9cbiAgICAgICAgICAgICAgICAgIGNvbG91cmVkRmFjZXQgPSBDb2xvdXJlZEZhY2V0LmZyb21Db29yZGluYXRlVHVwbGVzSW5kZXhUdXBsZUNvbG91ckFuZE1hcmdpbk9mRXJyb3IoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgdGhpcy5jb2xvdXIsIG1hcmdpbk9mRXJyb3IpLFxuICAgICAgICAgICAgICAgICAgZmFjZXQgPSBjb2xvdXJlZEZhY2V0OyAgLy8vXG5cbiAgICAgICAgICAgIGlmIChmYWNldCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBmYWNldHMucHVzaChmYWNldCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWNldHM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgdGhpcy5zZXRGYWNldHMoZmFjZXRzKTtcbiAgfVxuXG4gIGFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKTtcblxuICAgIGNvbG91clJlbmRlcmVyLmFkZEZhY2V0cyhmYWNldHMpO1xuXG4gICAgc3VwZXIuYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgY29sb3VyLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBjb2xvdXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7IH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcm90YXRlVmVydGljZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3ZlcnRpY2VzXCI7XG5pbXBvcnQgeyBpbnZlcnQyLCBpbnZlcnQzIH0gZnJvbSBcIi4uL21hdGhzL21hdHJpeFwiO1xuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCwgdGhpcmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVBcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1YXRlcm5pb25cIjtcbmltcG9ydCB7IGFkZDIsIG11bHRpcGx5MiwgdHJhbnNmb3JtMiwgdHJhbnNmb3JtMyB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpIHtcbiAgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcy5tYXAoKHRleHR1cmVDb29yZGluYXRlVHVwbGUpID0+IHtcbiAgICB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlID0gdGV4dHVyZUNvb3JkaW5hdGVUdXBsZS5zbGljZSgpOyAgLy8vXG5cbiAgICByZXR1cm4gdGV4dHVyZUNvb3JkaW5hdGVUdXBsZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRleHR1cmVDb29yZGluYXRlVHVwbGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlTWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGV4dGVudCkge1xuICBjb25zdCB7IGxlZnQsIGJvdHRvbSwgd2lkdGgsIGhlaWdodCB9ID0gZXh0ZW50LFxuICAgICAgICBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVDb29yZGluYXRlVHVwbGVzLm1hcCgodGV4dHVyZUNvb3JkaW5hdGVUdXBsZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGUgPSBhZGQyKG11bHRpcGx5Mih0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlLCBbIHdpZHRoLCBoZWlnaHQgXSApLCBbIGxlZnQsIGJvdHRvbSBdKTtcblxuICAgICAgICAgIHJldHVybiBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHZlcnRpY2VzLCBub3JtYWwsIHBhcmVudFZlcnRpY2VzLCB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcykge1xuICBjb25zdCBhcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVBcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24obm9ybWFsKSxcbiAgICAgICAgcm90YXRpb25RdWF0ZXJuaW9uID0gYXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uOyAvLy9cblxuICBjb25zdCByb3RhdGVkVmVydGljZXMgPSByb3RhdGVWZXJ0aWNlcyh2ZXJ0aWNlcywgcm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICBwYXJlbnRWZXJ0aWNlcyA9IHJvdGF0ZVZlcnRpY2VzKHBhcmVudFZlcnRpY2VzLCByb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gIHZlcnRpY2VzID0gcm90YXRlZFZlcnRpY2VzOyAgLy8vXG5cbiAgY29uc3QgZmlyc3RWZXJ0ZXggPSBmaXJzdCh2ZXJ0aWNlcyksXG4gICAgICAgIHNlY29uZFZlcnRleCA9IHNlY29uZCh2ZXJ0aWNlcyksXG4gICAgICAgIHRoaXJkVmVydGV4ID0gdGhpcmQodmVydGljZXMpLFxuICAgICAgICBmaXJzdFBhcmVudFZlcnRleCA9IGZpcnN0KHBhcmVudFZlcnRpY2VzKSxcbiAgICAgICAgc2Vjb25kUGFyZW50VmVydGV4ID0gc2Vjb25kKHBhcmVudFZlcnRpY2VzKSxcbiAgICAgICAgdGhpcmRQYXJlbnRWZXJ0ZXggPSB0aGlyZChwYXJlbnRWZXJ0aWNlcyksXG4gICAgICAgIGZpcnN0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZSA9IGZpcnN0KHRleHR1cmVDb29yZGluYXRlVHVwbGVzKSxcbiAgICAgICAgc2Vjb25kVGV4dHVyZUNvb3JkaW5hdGVUdXBsZSA9IHNlY29uZCh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyksXG4gICAgICAgIHRoaXJkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZSA9IHRoaXJkKHRleHR1cmVDb29yZGluYXRlVHVwbGVzKSxcbiAgICAgICAgZmlyc3RWZXJ0ZXhQb3NpdGlvbiA9IGZpcnN0VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIHNlY29uZFZlcnRleFBvc2l0aW9uID0gc2Vjb25kVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIHRoaXJkVmVydGV4UG9zaXRpb24gPSB0aGlyZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICBmaXJzdFBhcmVudFZlcnRleFBvc2l0aW9uID0gZmlyc3RQYXJlbnRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgc2Vjb25kUGFyZW50VmVydGV4UG9zaXRpb24gPSBzZWNvbmRQYXJlbnRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgdGhpcmRQYXJlbnRWZXJ0ZXhQb3NpdGlvbiA9IHRoaXJkUGFyZW50VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIFIxeCA9IGZpcnN0VmVydGV4UG9zaXRpb25bMF0sICAvLy9cbiAgICAgICAgUjF5ID0gZmlyc3RWZXJ0ZXhQb3NpdGlvblsxXSwgIC8vL1xuICAgICAgICBSMnggPSBzZWNvbmRWZXJ0ZXhQb3NpdGlvblswXSwgLy8vXG4gICAgICAgIFIyeSA9IHNlY29uZFZlcnRleFBvc2l0aW9uWzFdLCAvLy9cbiAgICAgICAgUjN4ID0gdGhpcmRWZXJ0ZXhQb3NpdGlvblswXSwgIC8vL1xuICAgICAgICBSM3kgPSB0aGlyZFZlcnRleFBvc2l0aW9uWzFdLCAgLy8vXG4gICAgICAgIFAxeCA9IGZpcnN0UGFyZW50VmVydGV4UG9zaXRpb25bMF0sIC8vL1xuICAgICAgICBQMnggPSBzZWNvbmRQYXJlbnRWZXJ0ZXhQb3NpdGlvblswXSwgLy8vXG4gICAgICAgIFAzeCA9IHRoaXJkUGFyZW50VmVydGV4UG9zaXRpb25bMF0sIC8vL1xuICAgICAgICBQMXkgPSBmaXJzdFBhcmVudFZlcnRleFBvc2l0aW9uWzFdLCAvLy9cbiAgICAgICAgUDJ5ID0gc2Vjb25kUGFyZW50VmVydGV4UG9zaXRpb25bMV0sIC8vL1xuICAgICAgICBQM3kgPSB0aGlyZFBhcmVudFZlcnRleFBvc2l0aW9uWzFdLCAvLy9cbiAgICAgICAgUDF1ID0gZmlyc3RUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlWzBdLCAvLy9cbiAgICAgICAgUDF2ID0gZmlyc3RUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlWzFdLCAvLy9cbiAgICAgICAgUDJ1ID0gc2Vjb25kVGV4dHVyZUNvb3JkaW5hdGVUdXBsZVswXSwgLy8vXG4gICAgICAgIFAydiA9IHNlY29uZFRleHR1cmVDb29yZGluYXRlVHVwbGVbMV0sIC8vL1xuICAgICAgICBQM3UgPSB0aGlyZFRleHR1cmVDb29yZGluYXRlVHVwbGVbMF0sIC8vL1xuICAgICAgICBQM3YgPSB0aGlyZFRleHR1cmVDb29yZGluYXRlVHVwbGVbMV0sIC8vL1xuICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZXNNYXRyaXggPSBpbnZlcnQzKFsgMSwgMSwgMSwgUDF1LCBQMnUsIFAzdSwgUDF2LCBQMnYsIFAzdiBdKSxcbiAgICAgICAgZmlyc3RUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50ID0gdHJhbnNmb3JtMyhbIFAxeCwgUDJ4LCBQM3ggXSwgdGV4dHVyZUNvb3JkaW5hdGVzTWF0cml4KSxcbiAgICAgICAgc2Vjb25kVHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudCA9IHRyYW5zZm9ybTMoWyBQMXksIFAyeSwgUDN5IF0sIHRleHR1cmVDb29yZGluYXRlc01hdHJpeCksXG4gICAgICAgIE94ID0gZmlyc3RUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50WzBdLCAgLy8vXG4gICAgICAgIFV4ID0gZmlyc3RUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50WzFdLCAgLy8vXG4gICAgICAgIFZ4ID0gZmlyc3RUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50WzJdLCAgLy8vXG4gICAgICAgIE95ID0gc2Vjb25kVHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudFswXSwgIC8vL1xuICAgICAgICBVeSA9IHNlY29uZFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnRbMV0sICAvLy9cbiAgICAgICAgVnkgPSBzZWNvbmRUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50WzJdLCAgLy8vXG4gICAgICAgIHRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNNYXRyaXggPSBpbnZlcnQyKFsgVXgsIFV5LCBWeCwgVnkgXSksXG4gICAgICAgIGZpcnN0QWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZSA9IHRyYW5zZm9ybTIoWyBSMXggLSBPeCwgUjF5IC0gT3kgXSwgdHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc01hdHJpeCksXG4gICAgICAgIHNlY29uZEFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGUgPSB0cmFuc2Zvcm0yKFsgUjJ4IC0gT3gsIFIyeSAtIE95IF0sIHRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNNYXRyaXgpLFxuICAgICAgICB0aGlyZEFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGUgPSB0cmFuc2Zvcm0yKFsgUjN4IC0gT3gsIFIzeSAtIE95IF0sIHRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNNYXRyaXgpLFxuICAgICAgICBhZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGUgPSBbXG4gICAgICAgICAgZmlyc3RBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlLFxuICAgICAgICAgIHNlY29uZEFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGUsXG4gICAgICAgICAgdGhpcmRBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlLFxuICAgICAgICBdO1xuXG4gIHJldHVybiBhZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGU7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuLi9lZGdlXCI7XG5pbXBvcnQgRmFjZXQgZnJvbSBcIi4uL2ZhY2V0XCI7XG5pbXBvcnQgTm9ybWFsIGZyb20gXCIuLi9ub3JtYWxcIjtcbmltcG9ydCBWZXJ0ZXggZnJvbSBcIi4uL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyBwZXJtdXRlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FwcHJveGltYXRlXCI7XG5pbXBvcnQgeyB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdmVydGljZXNcIjtcbmltcG9ydCB7IGNsb25lRWRnZXMsIGNsb25lTm9ybWFsLCBjbG9uZVZlcnRpY2VzLCBjYWxjdWxhdGVBcmVhLCBjYWxjdWxhdGVFZGdlcywgY2FsY3VsYXRlTm9ybWFsIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9mYWNldFwiO1xuaW1wb3J0IHsgY2xvbmVUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgY2FsY3VsYXRlTWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGNhbGN1bGF0ZUFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3RleHR1cmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZWRGYWNldCBleHRlbmRzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpIHtcbiAgICBzdXBlcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcyk7XG5cbiAgICB0aGlzLmltYWdlTmFtZSA9IGltYWdlTmFtZTtcblxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcbiAgfVxuXG4gIGdldEltYWdlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbWFnZU5hbWU7XG4gIH1cblxuICBnZXRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcbiAgfVxuXG4gIGdldE1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzKGltYWdlTWFwSlNPTikge1xuICAgIGNvbnN0IGpzb24gPSBpbWFnZU1hcEpTT05bdGhpcy5pbWFnZU5hbWVdLFxuICAgICAgICAgIGV4dGVudCA9IGpzb24sICAvLy9cbiAgICAgICAgICBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IGNhbGN1bGF0ZU1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGV4dGVudCk7XG5cbiAgICByZXR1cm4gbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7XG4gIH1cblxuICBwZXJtdXRlKHBsYWNlcykge1xuICAgIHN1cGVyLnBlcm11dGUocGxhY2VzKTtcblxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBwZXJtdXRlKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIHBsYWNlcyk7XG4gIH1cblxuICBmcm9tVmVydGljZXNBbmRNYXJnaW5PZkVycm9yKHZlcnRpY2VzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgbGV0IHRleHR1cmVkRmFjZXQgPSBudWxsO1xuXG4gICAgY29uc3QgYXJlYSA9IGNhbGN1bGF0ZUFyZWEodmVydGljZXMpLFxuICAgICAgICAgIGFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhhcmVhLCBtYXJnaW5PZkVycm9yKTtcblxuICAgIGlmICghYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybykge1xuICAgICAgY29uc3Qgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgICAgcGFyZW50VmVydGljZXMgPSB0aGlzLnZlcnRpY2VzLCAvLy9cbiAgICAgICAgICAgIGFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZSA9IGNhbGN1bGF0ZUFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModmVydGljZXMsIG5vcm1hbCwgcGFyZW50VmVydGljZXMsIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpLFxuICAgICAgICAgICAgZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSksXG4gICAgICAgICAgICBpbWFnZU5hbWUgPSB0aGlzLmltYWdlTmFtZSxcbiAgICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gYWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlOyAgLy8vXG5cbiAgICAgIHRleHR1cmVkRmFjZXQgPSBuZXcgVGV4dHVyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBsZXQgdmVydGljZXMgPSB0aGlzLmdldFZlcnRpY2VzKCksXG4gICAgICAgIG5vcm1hbCA9IHRoaXMuZ2V0Tm9ybWFsKCksXG4gICAgICAgIGVkZ2VzID0gdGhpcy5nZXRFZGdlcygpO1xuXG4gICAgdmVydGljZXMgPSBjbG9uZVZlcnRpY2VzKHZlcnRpY2VzKTtcbiAgICBub3JtYWwgPSBjbG9uZU5vcm1hbChub3JtYWwpO1xuICAgIGVkZ2VzID0gY2xvbmVFZGdlcyhlZGdlcyk7XG5cbiAgICBjb25zdCBpbWFnZU5hbWUgPSB0aGlzLmltYWdlTmFtZSwgLy8vXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBjbG9uZVRleHR1cmVDb29yZGluYXRlVHVwbGVzKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpLFxuICAgICAgICAgIHRleHR1cmVkRmFjZXQgPSBuZXcgVGV4dHVyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG5cbiAgICByZXR1cm4gdGV4dHVyZWRGYWNldDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXNDb29yZGluYXRlc1R1cGxlc0luZGV4VHVwbGVJbWFnZU5hbWVBbmRNYXJnaW5PZkVycm9yKHRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCBpbWFnZU5hbWUsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBsZXQgdGV4dHVyZWRGYWNldCA9IG51bGw7XG5cbiAgICBjb25zdCB2ZXJ0aWNlcyA9IHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlKGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIFZlcnRleCksXG4gICAgICAgICAgYXJlYSA9IGNhbGN1bGF0ZUFyZWEodmVydGljZXMpLFxuICAgICAgICAgIGFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhhcmVhLCBtYXJnaW5PZkVycm9yKTtcblxuICAgIGlmICghYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybykge1xuICAgICAgY29uc3Qgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgICAgZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSk7XG5cbiAgICAgIHRleHR1cmVkRmFjZXQgPSBuZXcgVGV4dHVyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENhbnZhc0VsZW1lbnQgZnJvbSBcIi4uLy4uL2VsZW1lbnQvY2FudmFzXCI7XG5pbXBvcnQgVGV4dHVyZWRGYWNldCBmcm9tIFwiLi4vLi4vcHJpbWl0aXZlL2ZhY2V0L3RleHR1cmVkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHR1cmVkQ2FudmFzRWxlbWVudCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihtYXNrUmVmZXJlbmNlLCB0cmFuc2Zvcm0sIGZhY2V0cywgbWFza3MsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcykge1xuICAgIHN1cGVyKG1hc2tSZWZlcmVuY2UsIHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrcyk7XG5cbiAgICB0aGlzLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG4gICAgdGhpcy5pbmRleGVzID0gaW5kZXhlcztcbiAgICB0aGlzLmltYWdlTmFtZSA9IGltYWdlTmFtZTtcbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlcyA9IHRleHR1cmVDb29yZGluYXRlcztcbiAgfVxuXG4gIGNyZWF0ZUZhY2V0cyhtYXJnaW5PZkVycm9yKSB7XG4gICAgc3VwZXIuY3JlYXRlRmFjZXRzKG1hcmdpbk9mRXJyb3IpO1xuXG4gICAgY29uc3QgaW5kZXhUdXBsZXMgPSB0aGlzLmluZGV4ZXMsICAvLy9cbiAgICAgICAgICBmYWNldHMgPSBpbmRleFR1cGxlcy5yZWR1Y2UoKGZhY2V0cywgaW5kZXhUdXBsZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0aGlzLnRleHR1cmVDb29yZGluYXRlc1tpbmRleF0sIC8vL1xuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlVHVwbGVzID0gdGhpcy5jb29yZGluYXRlcywgLy8vXG4gICAgICAgICAgICAgICAgICAgIHRleHR1cmVkRmFjZXQgPSBUZXh0dXJlZEZhY2V0LmZyb21UZXh0dXJlQ29vcmRpbmF0ZVR1cGxlc0Nvb3JkaW5hdGVzVHVwbGVzSW5kZXhUdXBsZUltYWdlTmFtZUFuZE1hcmdpbk9mRXJyb3IodmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIHRoaXMuaW1hZ2VOYW1lLCBtYXJnaW5PZkVycm9yKSxcbiAgICAgICAgICAgICAgICAgICAgZmFjZXQgPSB0ZXh0dXJlZEZhY2V0OyAgLy8vXG5cbiAgICAgICAgICAgIGlmIChmYWNldCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBmYWNldHMucHVzaChmYWNldCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWNldHM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgdGhpcy5zZXRGYWNldHMoZmFjZXRzKTtcbiAgfVxuXG4gIGFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKTtcblxuICAgIHRleHR1cmVSZW5kZXJlci5hZGRGYWNldHMoZmFjZXRzKTtcblxuICAgIHN1cGVyLmFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTsgfVxufVxuIiwgIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYW52YXMgfSBmcm9tIFwiLi9jYW52YXNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmVhY3QgfSBmcm9tIFwiLi9yZWFjdFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXNrIH0gZnJvbSBcIi4vZWxlbWVudC9tYXNrXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBhcnQgfSBmcm9tIFwiLi9lbGVtZW50L3BhcnRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2NlbmUgfSBmcm9tIFwiLi9lbGVtZW50L3NjZW5lXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENhbWVyYSB9IGZyb20gXCIuL2VsZW1lbnQvY2FtZXJhXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEdhbWluZ0NhbWVyYSB9IGZyb20gXCIuL2VsZW1lbnQvY2FtZXJhL2dhbWluZ1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEZXNpZ25DYW1lcmEgfSBmcm9tIFwiLi9lbGVtZW50L2NhbWVyYS9kZXNpZ25cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FudmFzRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnQvY2FudmFzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHByZWxvYWRVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvcHJlbG9hZFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb2xvdXJlZENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50L2NhbnZhcy90ZXh0dXJlZFwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIHZlY3Rvck1hdGhzIH0gZnJvbSBcIi4vbWF0aHMvdmVjdG9yXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG1hdHJpeE1hdGhzIH0gZnJvbSBcIi4vbWF0aHMvbWF0cml4XCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENvbG91cmVkQ2FudmFzRWxlbWVudCB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAvLy9cblxuY29uc3QgY29vcmRpbmF0ZXMgPSBbXG5cbiAgICAgICAgWyAwLCAwLCAwIF0sXG4gICAgICAgIFsgMSwgMCwgMCBdLFxuICAgICAgICBbIDAsIDEsIDAgXSxcbiAgICAgICAgWyAxLCAxLCAwIF0sXG5cbiAgICAgIF0sXG4gICAgICBpbmRleGVzID0gW1xuXG4gICAgICAgIFsgMCwgMSwgMyBdLFxuICAgICAgICBbIDMsIDIsIDAgXSxcblxuICAgICAgXSxcbiAgICAgIGRlZmF1bHRDb2xvdXIgPSBbIDEsIDAsIDAgXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3VyZWRTcXVhcmUgZXh0ZW5kcyBDb2xvdXJlZENhbnZhc0VsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICBcdGNvbnN0IHsgY29sb3VyID0gZGVmYXVsdENvbG91ciB9ID0gcHJvcGVydGllcyxcblx0XHRcdCAgICBjb2xvdXJlZFNxdWFyZSA9IENvbG91cmVkQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDb2xvdXJlZFNxdWFyZSwgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGNvbG91cik7XG5cbiAgXHRyZXR1cm4gY29sb3VyZWRTcXVhcmU7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbG91cmVkU3F1YXJlIGZyb20gXCIuL2NvbG91cmVkU3F1YXJlXCI7XG5cbmNvbnN0IEZhY2UgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IGNvbG91ciB9ID0gcHJvcGVydGllcztcblxuICByZXR1cm4gKFxuXG4gICAgPENvbG91cmVkU3F1YXJlIGNvbG91cj17Y29sb3VyfSBwb3NpdGlvbj17WyAtMC41LCAtMC41LCArMC41IF19IC8+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZhY2U7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBGYWNlIGZyb20gXCIuL2ZhY2VcIjtcblxuY29uc3QgZGVmYXVsdENvbG91ciA9IFsgMSwgMSwgMCBdO1xuXG5jb25zdCBDdWJlID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBjb2xvdXIgPSBkZWZhdWx0Q29sb3VyIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIHJldHVybiAoW1xuXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAgIDAsICAgMCwgMCBdfSAvPixcbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbICs5MCwgICAwLCAwIF19IC8+LFxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgICAwLCArOTAsIDAgXX0gLz4sXG5cbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbIDE4MCwgICAwLCAwIF19IC8+LFxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgLTkwLCAgIDAsIDAgXX0gLz4sXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAgIDAsIC05MCwgMCBdfSAvPixcblxuICBdKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1YmU7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENhbnZhcywgU2NlbmUsIFBhcnQsIERlc2lnbkNhbWVyYSB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBDdWJlIGZyb20gXCIuL2VsZW1lbnQvY3ViZVwiO1xuXG5jb25zdCBjdWJlRXhhbXBsZSA9ICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gIHJldHVybiAoXG5cbiAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9ID5cbiAgICAgIDxQYXJ0PlxuICAgICAgICA8Q3ViZSBjb2xvdXI9e1sgMCwgMSwgMCBdfSAvPlxuICAgICAgPC9QYXJ0PlxuICAgICAgPERlc2lnbkNhbWVyYSBwZXJzaXN0IC8+XG4gICAgPC9TY2VuZT5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3ViZUV4YW1wbGU7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFRleHR1cmVkQ2FudmFzRWxlbWVudCB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAvLy9cblxuY29uc3QgY29vcmRpbmF0ZXMgPSBbXG5cbiAgICAgICAgWyAwLCAwLCAwIF0sXG4gICAgICAgIFsgMSwgMCwgMCBdLFxuICAgICAgICBbIDAsIDEsIDAgXSxcbiAgICAgICAgWyAxLCAxLCAwIF0sXG5cbiAgICAgIF0sXG4gICAgICBpbmRleGVzID0gW1xuXG4gICAgICAgIFsgMCwgMSwgMyBdLFxuICAgICAgICBbIDMsIDIsIDAgXSxcblxuICAgICAgXSxcbiAgICAgIGRlZmF1bHRJbWFnZU5hbWUgPSBcInBsYXN0ZXIuanBnXCIsXG4gICAgICBkZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzID0gW1xuXG4gICAgICAgIFsgWyAwLCAwIF0sIFsgMiwgMCBdLCBbIDIsIDIgXSBdLFxuICAgICAgICBbIFsgMiwgMiBdLCBbIDAsIDIgXSwgWyAwLCAwIF0gXSxcblxuICAgICAgXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZWRRdWFkcmFuZ2xlIGV4dGVuZHMgVGV4dHVyZWRDYW52YXNFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGltYWdlTmFtZSA9IGRlZmF1bHRJbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcyA9IGRlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdGV4dHVyZWRRdWFkcmFuZ2xlID0gVGV4dHVyZWRDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFRleHR1cmVkUXVhZHJhbmdsZSwgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiB0ZXh0dXJlZFF1YWRyYW5nbGU7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ2FudmFzLCBTY2VuZSwgUGFydCwgTWFzaywgRGVzaWduQ2FtZXJhLCBwcmVsb2FkVXRpbGl0aWVzIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IENvbG91cmVkU3F1YXJlIGZyb20gXCIuL2VsZW1lbnQvY29sb3VyZWRTcXVhcmVcIjtcbmltcG9ydCBUZXh0dXJlZFF1YWRyYW5nbGUgZnJvbSBcIi4vZWxlbWVudC90ZXh0dXJlZFF1YWRyYW5nbGVcIjtcblxuY29uc3QgeyBwcmVsb2FkSW1hZ2VzIH0gPSBwcmVsb2FkVXRpbGl0aWVzLFxuICAgICAgeyBob3N0LCBpbWFnZU5hbWVzLCBpbWFnZURpcmVjdG9yeVVSSSB9ID0gZ2xvYmFsVGhpcztcblxuY29uc3QgdGlsaW5nRXhhbXBsZSA9ICgpID0+IHtcbiAgcHJlbG9hZEltYWdlcyhob3N0LCBpbWFnZU5hbWVzLCBpbWFnZURpcmVjdG9yeVVSSSwgKGltYWdlcywgaW1hZ2VOYW1lcykgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxTY2VuZSBjYW52YXM9e2NhbnZhc30gPlxuICAgICAgICA8UGFydCBpbWFnZXM9e2ltYWdlc30gaW1hZ2VOYW1lcz17aW1hZ2VOYW1lc30gaW1hZ2VUaWxpbmcgPlxuICAgICAgICAgIDxNYXNrIHJlZmVyZW5jZT1cIm1hc2tcIj5cbiAgICAgICAgICAgIDxDb2xvdXJlZFNxdWFyZSBzY2FsZT17WyAwLjI1LCAwLjI1LCAxIF19IHBvc2l0aW9uPXtbIDAuMTI1LCAwLjEyNSwgMC4xMjUgXX0gLz5cbiAgICAgICAgICA8L01hc2s+XG4gICAgICAgICAgPFRleHR1cmVkUXVhZHJhbmdsZSBwb3NpdGlvbj17WyAwLCAwLCAwIF19IGltYWdlTmFtZT1cImZsb29yYm9hcmRzLmpwZ1wiIG1hc2tSZWZlcmVuY2U9XCJtYXNrXCIgLz5cbiAgICAgICAgICA8VGV4dHVyZWRRdWFkcmFuZ2xlIHBvc2l0aW9uPXtbIC0wLjUsIC0wLjUsIC0wLjUgXX0gaW1hZ2VOYW1lPVwicGF2aW5nLmpwZ1wiIG1hc2tSZWZlcmVuY2U9XCJtYXNrXCIgLz5cbiAgICAgICAgPC9QYXJ0PlxuICAgICAgICA8RGVzaWduQ2FtZXJhLz5cbiAgICAgIDwvU2NlbmU+XG5cbiAgICApO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRpbGluZ0V4YW1wbGU7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENhbnZhcywgU2NlbmUsIFBhcnQsIERlc2lnbkNhbWVyYSB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBDb2xvdXJlZFNxdWFyZSBmcm9tIFwiLi9lbGVtZW50L2NvbG91cmVkU3F1YXJlXCI7XG5cbmNvbnN0IHNpbXBsZUV4YW1wbGUgPSAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuICByZXR1cm4gKFxuXG4gICAgPFNjZW5lIGNhbnZhcz17Y2FudmFzfT5cbiAgICAgIDxQYXJ0PlxuICAgICAgICA8Q29sb3VyZWRTcXVhcmUgY29sb3VyPXtbIDAsIDAsIDEgXX0gLz5cbiAgICAgIDwvUGFydD5cbiAgICAgIDxEZXNpZ25DYW1lcmEvPlxuICAgIDwvU2NlbmU+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNpbXBsZUV4YW1wbGU7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENhbnZhcywgU2NlbmUsIE1hc2ssIFBhcnQsIERlc2lnbkNhbWVyYSB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBDdWJlIGZyb20gXCIuL2VsZW1lbnQvY3ViZVwiO1xuXG5jb25zdCBtYXNraW5nRXhhbXBsZSA9ICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gIHJldHVybiAoXG5cbiAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgICAgPFBhcnQ+XG4gICAgICAgIDxNYXNrIHJlZmVyZW5jZT1cInF1YXJ0ZXItc2l6ZWQtY3ViZVwiPlxuICAgICAgICAgIDxDdWJlIHNjYWxlPXtbIDEvNCwgMS80LCAxLzQgXX0gLz5cbiAgICAgICAgPC9NYXNrPlxuICAgICAgICA8TWFzayByZWZlcmVuY2U9XCJoYWxmLXNpemVkLWN1YmVcIj5cbiAgICAgICAgICA8Q3ViZSBzY2FsZT17WyAxLzIsIDEvMiwgMS8yIF19IG1hc2tSZWZlcmVuY2U9XCJxdWFydGVyLXNpemVkLWN1YmVcIi8+XG4gICAgICAgIDwvTWFzaz5cbiAgICAgICAgPEN1YmUgbWFza1JlZmVyZW5jZT1cImhhbGYtc2l6ZWQtY3ViZVwiIC8+XG4gICAgICA8L1BhcnQ+XG4gICAgICA8RGVzaWduQ2FtZXJhLz5cbiAgICA8L1NjZW5lPlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYXNraW5nRXhhbXBsZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVGV4dHVyZWRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7IC8vL1xuXG5jb25zdCBjb29yZGluYXRlcyA9IFtcblxuICAgICAgICBbICAgMCwgMCwgMCBdLFxuICAgICAgICBbICAgMSwgMCwgMCBdLFxuICAgICAgICBbIDAuNSwgMSwgMCBdLFxuXG4gICAgICBdLFxuICAgICAgaW5kZXhlcyA9IFtcblxuICAgICAgICBbIDAsIDEsIDIgXSxcblxuICAgICAgXSxcbiAgICAgIGRlZmF1bHRJbWFnZU5hbWUgPSBcInN0cmlwZXMuanBnXCIsXG4gICAgICBkZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzID0gW1xuXG4gICAgICAgIFsgWyAwLCAwIF0sIFsgMSwgMCBdLCBbIDAuNSwgMSBdIF0sXG5cbiAgICAgIF07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHR1cmVkVHJpYW5nbGUgZXh0ZW5kcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW1hZ2VOYW1lID0gZGVmYXVsdEltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzID0gZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0ZXh0dXJlZFRyaWFuZ2xlID0gVGV4dHVyZWRDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFRleHR1cmVkVHJpYW5nbGUsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gdGV4dHVyZWRUcmlhbmdsZTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dHVyZWRUcmlhbmdsZSBmcm9tIFwiLi90ZXh0dXJlZFRyaWFuZ2xlXCI7XG5cbmNvbnN0IFNpZGUgPSAocHJvcGVydGllcykgPT5cblxuICA8VGV4dHVyZWRUcmlhbmdsZSBzY2FsZT17WyAxLCAxL01hdGguc3FydCgyKSwgMSBdfSBwb3NpdGlvbj17WyAtMC41LCAwLCAwLjUgXX0gcm90YXRpb25zPXtbIC00NSwgMCwgMCBdfSAvPlxuXG47XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGU7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTaWRlIGZyb20gXCIuL3NpZGVcIjtcblxuY29uc3QgUHlyYW1pZCA9IChwcm9wZXJ0aWVzKSA9PiBbXG5cbiAgPFNpZGUgLz4sXG4gIDxTaWRlIHJvdGF0aW9ucz17WyAwLCAgOTAsIDAgXX0gLz4sXG4gIDxTaWRlIHJvdGF0aW9ucz17WyAwLCAxODAsIDAgXX0gLz4sXG4gIDxTaWRlIHJvdGF0aW9ucz17WyAwLCAyNzAsIDAgXX0gLz4sXG5cbl07XG5cbmV4cG9ydCBkZWZhdWx0IFB5cmFtaWQ7XG5cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUGFydCwgU2NlbmUsIENhbnZhcywgR2FtaW5nQ2FtZXJhLCBwcmVsb2FkVXRpbGl0aWVzIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IFB5cmFtaWQgZnJvbSBcIi4vZWxlbWVudC9weXJhbWlkXCI7XG5cbmNvbnN0IHsgcHJlbG9hZEltYWdlTWFwIH0gPSBwcmVsb2FkVXRpbGl0aWVzLFxuICAgICAgeyBob3N0LCBpbWFnZU1hcFVSSSwgaW1hZ2VNYXBKU09OIH0gPSBnbG9iYWxUaGlzO1xuXG5jb25zdCBweXJhbWlkRXhhbXBsZSA9ICgpID0+IHtcbiAgcHJlbG9hZEltYWdlTWFwKGhvc3QsIGltYWdlTWFwVVJJLCBpbWFnZU1hcEpTT04sIChpbWFnZU1hcCwgaW1hZ2VNYXBKU09OKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPFNjZW5lIGNhbnZhcz17Y2FudmFzfT5cbiAgICAgICAgPFBhcnQgaW1hZ2VNYXA9e2ltYWdlTWFwfSBpbWFnZU1hcEpTT049e2ltYWdlTWFwSlNPTn0+XG4gICAgICAgICAgPFB5cmFtaWQvPlxuICAgICAgICA8L1BhcnQ+XG4gICAgICAgIDxHYW1pbmdDYW1lcmEvPlxuICAgICAgPC9TY2VuZT5cblxuICAgICk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcHlyYW1pZEV4YW1wbGU7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBcIi4veGdsXCI7XG5cbmltcG9ydCBjdWJlRXhhbXBsZSBmcm9tIFwiLi9leGFtcGxlL2N1YmVcIjtcbmltcG9ydCB0aWxpbmdFeGFtcGxlIGZyb20gXCIuL2V4YW1wbGUvdGlsaW5nXCI7XG5pbXBvcnQgc2ltcGxlRXhhbXBsZSBmcm9tIFwiLi9leGFtcGxlL3NpbXBsZVwiO1xuaW1wb3J0IG1hc2tpbmdFeGFtcGxlIGZyb20gXCIuL2V4YW1wbGUvbWFza2luZ1wiO1xuaW1wb3J0IHB5cmFtaWRFeGFtcGxlIGZyb20gXCIuL2V4YW1wbGUvcHlyYW1pZFwiO1xuXG5jb25zdCBleGFtcGxlID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSk7ICAvLy9cblxuc3dpdGNoIChleGFtcGxlKSB7XG4gIGNhc2UgXCJjdWJlXCI6XG4gICAgY3ViZUV4YW1wbGUoKTtcblxuICAgIGJyZWFrO1xuXG4gIGNhc2UgXCJ0aWxpbmdcIjpcbiAgICB0aWxpbmdFeGFtcGxlKCk7XG5cbiAgICBicmVhaztcblxuICBjYXNlIFwic2ltcGxlXCI6XG4gICAgc2ltcGxlRXhhbXBsZSgpO1xuXG4gICAgYnJlYWs7XG5cbiAgY2FzZSBcIm1hc2tpbmdcIjpcbiAgICBtYXNraW5nRXhhbXBsZSgpO1xuXG4gICAgYnJlYWs7XG5cbiAgY2FzZSBcInB5cmFtaWRcIjpcbiAgICBweXJhbWlkRXhhbXBsZSgpO1xuXG4gICAgYnJlYWs7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7VUFjYSxvQkFBQTtlQUFBOztVQU5BLFlBQUE7ZUFBQTs7VUFIQSxTQUFBO2VBQUE7O1VBV0EsZ0NBQUE7ZUFBQTs7VUFOQSxnQkFBQTtlQUFBOztVQU9BLGlDQUFBO2VBQUE7O1VBVkEsV0FBQTtlQUFBOztVQUVBLGdCQUFBO2VBQUE7O1VBTEEsU0FBQTtlQUFBOztVQVNBLG9CQUFBO2VBQUE7O1VBREEsbUJBQUE7ZUFBQTs7VUFHQSwrQkFBQTtlQUFBOztVQUdBLHFDQUFBO2VBQUE7O1VBRUEsd0NBQUE7ZUFBQTs7VUFkQSxTQUFBO2VBQUE7O1VBS0Esa0JBQUE7ZUFBQTs7VUFUQSxRQUFBO2VBQUE7O1VBaUJBLHdDQUFBO2VBQUE7O1VBaEJBLFFBQUE7ZUFBQTs7O0FBRE4sUUFBTSxRQUFRO0FBQ2QsUUFBTSxRQUFRO0FBQ2QsUUFBTSxTQUFTO0FBQ2YsUUFBTSxTQUFTO0FBQ2YsUUFBTSxTQUFTO0FBQ2YsUUFBTSxXQUFXO0FBQ2pCLFFBQU0sWUFBWTtBQUNsQixRQUFNLGdCQUFnQjtBQUN0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UyxTQUFPO0FBQ3hDLFlBQU0sQ0FBRSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksTUFBTyxTQUN6QyxDQUFFLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxNQUFPO0FBRS9DLGFBQVE7UUFFTixLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUs7UUFDekIsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLO1FBQ3pCLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSztRQUV6QixLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUs7UUFDekIsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLO1FBQ3pCLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSztRQUV6QixLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUs7UUFDekIsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLO1FBQ3pCLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSzs7O0FBS3RCLHVCQUFtQixTQUFTLFNBQU87QUFDeEMsWUFBTyxDQUFFLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLE9BQVEsU0FDM0UsQ0FBRSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxPQUFRO0FBRWxGLGFBQVE7UUFFTixLQUFNLEtBQU0sS0FBTSxLQUFNLEtBQU0sS0FBSyxNQUFPO1FBQzFDLEtBQU0sS0FBTSxLQUFNLEtBQU0sS0FBTSxLQUFLLE1BQU87UUFDMUMsS0FBTSxLQUFNLEtBQU0sS0FBSyxNQUFPLEtBQUssTUFBTztRQUMxQyxLQUFNLEtBQU0sS0FBTSxLQUFLLE1BQU8sS0FBSyxNQUFPO1FBRTFDLEtBQU0sS0FBTSxLQUFNLEtBQU0sS0FBTSxLQUFLLE1BQU87UUFDMUMsS0FBTSxLQUFNLEtBQU0sS0FBTSxLQUFNLEtBQUssTUFBTztRQUMxQyxLQUFNLEtBQU0sS0FB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QUFLLEtBQUssS0FBSyxLQUFLLEtBQUssT0FBUSxRQUUzRSxJQUFJLEtBQUssSUFBSSxRQUNiLElBQUksS0FBSyxJQUFJLFFBQ2IsSUFBSSxJQUFJLEdBRVIsTUFBTSxJQUFJLElBQUksSUFBSSxHQUNsQixNQUFNLElBQUksSUFBSSxJQUFJLElBQUksR0FDdEIsTUFBTSxJQUFJLElBQUksSUFBSSxJQUFJLEdBQ3RCLE1BQU0sSUFBSSxJQUFJLElBQUksSUFBSSxHQUN0QixNQUFNLElBQUksSUFBSSxJQUFJLEdBQ2xCLE1BQU0sSUFBSSxJQUFJLElBQUksSUFBSSxHQUN0QixNQUFNLElBQUksSUFBSSxJQUFJLElBQUksR0FDdEIsTUFBTSxJQUFJLElBQUksSUFBSSxJQUFJLEdBQ3RCLE1BQU0sSUFBSSxJQUFJLElBQUk7QUFFeEIsYUFBUTtRQUVOLEtBQUssTUFBTSxLQUFLLE1BQU0sS0FBSztRQUFLLEtBQUssTUFBTSxLQUFLLE1BQU0sS0FBSztRQUFLLEtBQUssTUFBTSxLQUFLLE1BQU0sTUFBTTtRQUFLLEtBQUssTUFBTSxLQUFLLE1BQU0sTUFBTTtRQUM3SCxLQUFLLE1BQU0sS0FBSyxNQUFNLEtBQUs7UUFBSyxLQUFLLE1BQU0sS0FBSyxNQUFNLEtBQUs7UUFBSyxLQUFLLE1BQU0sS0FBSyxNQUFNLE1BQU07UUFBSyxLQUFLLE1BQU0sS0FBSyxNQUFNLE1BQU07UUFDN0gsS0FBSyxNQUFNLEtBQUssTUFBTSxLQUFLO1FBQUssS0FBSyxNQUFNLEtBQUssTUFBTSxLQUFLO1FBQUssS0FBSyxNQUFNLEtBQUssTUFBTSxNQUFNO1FBQUssS0FBSyxNQUFNLEtBQUssTUFBTSxNQUFNO1FBQ2xHO1FBQWdDO1FBQWlDO1FBQWlDOzs7QUFLMUgsd0JBQW9CLFFBQVEsUUFBTTtBQUN2QyxZQUFNLENBQUUsR0FBRyxHQUFHLEtBQU0sUUFFZCxDQUFFLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLE9BQVE7QUFFakYsYUFB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
