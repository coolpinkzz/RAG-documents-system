/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./src/hooks/useAuth.tsx":
/*!*******************************!*\
  !*** ./src/hooks/useAuth.tsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/api */ \"(pages-dir-node)/./src/lib/api.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_api__WEBPACK_IMPORTED_MODULE_3__]);\n_lib_api__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nfunction AuthProvider({ children }) {\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // Check if user is logged in on initial load\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AuthProvider.useEffect\": ()=>{\n            const checkAuthStatus = {\n                \"AuthProvider.useEffect.checkAuthStatus\": async ()=>{\n                    try {\n                        setLoading(true);\n                        const response = await _lib_api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get('/api/user');\n                        setUser(response.data);\n                    } catch (error) {\n                        setUser(null);\n                    } finally{\n                        setLoading(false);\n                    }\n                }\n            }[\"AuthProvider.useEffect.checkAuthStatus\"];\n            checkAuthStatus();\n        }\n    }[\"AuthProvider.useEffect\"], []);\n    const login = async (credentials)=>{\n        try {\n            setLoading(true);\n            setError(null);\n            const response = await _lib_api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post('/api/login', credentials);\n            setUser(response.data);\n            router.push('/');\n        } catch (error) {\n            setError(error.response?.data?.error || 'Login failed');\n            throw error;\n        } finally{\n            setLoading(false);\n        }\n    };\n    const register = async (credentials)=>{\n        try {\n            setLoading(true);\n            setError(null);\n            const response = await _lib_api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post('/api/register', credentials);\n            setUser(response.data);\n            router.push('/');\n        } catch (error) {\n            setError(error.response?.data?.error || 'Registration failed');\n            throw error;\n        } finally{\n            setLoading(false);\n        }\n    };\n    const logout = async ()=>{\n        try {\n            setLoading(true);\n            await _lib_api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post('/api/logout');\n            setUser(null);\n            router.push('/auth');\n        } catch (error) {\n            setError(error.response?.data?.error || 'Logout failed');\n        } finally{\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            loading,\n            error,\n            login,\n            register,\n            logout,\n            isAuthenticated: !!user,\n            isAdmin: user?.role === 'admin'\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/runner/workspace/src/hooks/useAuth.tsx\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, this);\n}\nfunction useAuth() {\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n    if (context === undefined) {\n        throw new Error('useAuth must be used within an AuthProvider');\n    }\n    return context;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9ob29rcy91c2VBdXRoLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWtGO0FBQzFDO0FBQ1o7QUFjNUIsTUFBTU0sNEJBQWNILG9EQUFhQSxDQUE4Qkk7QUFFeEQsU0FBU0MsYUFBYSxFQUFFQyxRQUFRLEVBQTJCO0lBQ2hFLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHWCwrQ0FBUUEsQ0FBYztJQUM5QyxNQUFNLENBQUNZLFNBQVNDLFdBQVcsR0FBR2IsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDYyxPQUFPQyxTQUFTLEdBQUdmLCtDQUFRQSxDQUFnQjtJQUNsRCxNQUFNZ0IsU0FBU1osc0RBQVNBO0lBRXhCLDZDQUE2QztJQUM3Q0gsZ0RBQVNBO2tDQUFDO1lBQ1IsTUFBTWdCOzBEQUFrQjtvQkFDdEIsSUFBSTt3QkFDRkosV0FBVzt3QkFDWCxNQUFNSyxXQUFXLE1BQU1iLG9EQUFPLENBQUM7d0JBQy9CTSxRQUFRTyxTQUFTRSxJQUFJO29CQUN2QixFQUFFLE9BQU9OLE9BQU87d0JBQ2RILFFBQVE7b0JBQ1YsU0FBVTt3QkFDUkUsV0FBVztvQkFDYjtnQkFDRjs7WUFFQUk7UUFDRjtpQ0FBRyxFQUFFO0lBRUwsTUFBTUksUUFBUSxPQUFPQztRQUNuQixJQUFJO1lBQ0ZULFdBQVc7WUFDWEUsU0FBUztZQUNULE1BQU1HLFdBQVcsTUFBTWIscURBQVEsQ0FBQyxjQUFjaUI7WUFDOUNYLFFBQVFPLFNBQVNFLElBQUk7WUFDckJKLE9BQU9RLElBQUksQ0FBQztRQUNkLEVBQUUsT0FBT1YsT0FBWTtZQUNuQkMsU0FBU0QsTUFBTUksUUFBUSxFQUFFRSxNQUFNTixTQUFTO1lBQ3hDLE1BQU1BO1FBQ1IsU0FBVTtZQUNSRCxXQUFXO1FBQ2I7SUFDRjtJQUVBLE1BQU1ZLFdBQVcsT0FBT0g7UUFDdEIsSUFBSTtZQUNGVCxXQUFXO1lBQ1hFLFNBQVM7WUFDVCxNQUFNRyxXQUFXLE1BQU1iLHFEQUFRLENBQUMsaUJBQWlCaUI7WUFDakRYLFFBQVFPLFNBQVNFLElBQUk7WUFDckJKLE9BQU9RLElBQUksQ0FBQztRQUNkLEVBQUUsT0FBT1YsT0FBWTtZQUNuQkMsU0FBU0QsTUFBTUksUUFBUSxFQUFFRSxNQUFNTixTQUFTO1lBQ3hDLE1BQU1BO1FBQ1IsU0FBVTtZQUNSRCxXQUFXO1FBQ2I7SUFDRjtJQUVBLE1BQU1hLFNBQVM7UUFDYixJQUFJO1lBQ0ZiLFdBQVc7WUFDWCxNQUFNUixxREFBUSxDQUFDO1lBQ2ZNLFFBQVE7WUFDUkssT0FBT1EsSUFBSSxDQUFDO1FBQ2QsRUFBRSxPQUFPVixPQUFZO1lBQ25CQyxTQUFTRCxNQUFNSSxRQUFRLEVBQUVFLE1BQU1OLFNBQVM7UUFDMUMsU0FBVTtZQUNSRCxXQUFXO1FBQ2I7SUFDRjtJQUVBLHFCQUNFLDhEQUFDUCxZQUFZcUIsUUFBUTtRQUNuQkMsT0FBTztZQUNMbEI7WUFDQUU7WUFDQUU7WUFDQU87WUFDQUk7WUFDQUM7WUFDQUcsaUJBQWlCLENBQUMsQ0FBQ25CO1lBQ25Cb0IsU0FBU3BCLE1BQU1xQixTQUFTO1FBQzFCO2tCQUVDdEI7Ozs7OztBQUdQO0FBRU8sU0FBU3VCO0lBQ2QsTUFBTUMsVUFBVS9CLGlEQUFVQSxDQUFDSTtJQUMzQixJQUFJMkIsWUFBWTFCLFdBQVc7UUFDekIsTUFBTSxJQUFJMkIsTUFBTTtJQUNsQjtJQUNBLE9BQU9EO0FBQ1QiLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3Jrc3BhY2Uvc3JjL2hvb2tzL3VzZUF1dGgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBhcGkgZnJvbSAnQC9saWIvYXBpJztcbmltcG9ydCB7IFVzZXIsIExvZ2luQ3JlZGVudGlhbHMsIFJlZ2lzdGVyQ3JlZGVudGlhbHMgfSBmcm9tICdAL3R5cGVzJztcblxuaW50ZXJmYWNlIEF1dGhDb250ZXh0VHlwZSB7XG4gIHVzZXI6IFVzZXIgfCBudWxsO1xuICBsb2FkaW5nOiBib29sZWFuO1xuICBlcnJvcjogc3RyaW5nIHwgbnVsbDtcbiAgbG9naW46IChjcmVkZW50aWFsczogTG9naW5DcmVkZW50aWFscykgPT4gUHJvbWlzZTx2b2lkPjtcbiAgcmVnaXN0ZXI6IChjcmVkZW50aWFsczogUmVnaXN0ZXJDcmVkZW50aWFscykgPT4gUHJvbWlzZTx2b2lkPjtcbiAgbG9nb3V0OiAoKSA9PiBQcm9taXNlPHZvaWQ+O1xuICBpc0F1dGhlbnRpY2F0ZWQ6IGJvb2xlYW47XG4gIGlzQWRtaW46IGJvb2xlYW47XG59XG5cbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxBdXRoQ29udGV4dFR5cGUgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBBdXRoUHJvdmlkZXIoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdE5vZGUgfSkge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxVc2VyIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAvLyBDaGVjayBpZiB1c2VyIGlzIGxvZ2dlZCBpbiBvbiBpbml0aWFsIGxvYWRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjaGVja0F1dGhTdGF0dXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQoJy9hcGkvdXNlcicpO1xuICAgICAgICBzZXRVc2VyKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgc2V0VXNlcihudWxsKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjaGVja0F1dGhTdGF0dXMoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGxvZ2luID0gYXN5bmMgKGNyZWRlbnRpYWxzOiBMb2dpbkNyZWRlbnRpYWxzKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICBzZXRFcnJvcihudWxsKTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoJy9hcGkvbG9naW4nLCBjcmVkZW50aWFscyk7XG4gICAgICBzZXRVc2VyKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgcm91dGVyLnB1c2goJy8nKTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBzZXRFcnJvcihlcnJvci5yZXNwb25zZT8uZGF0YT8uZXJyb3IgfHwgJ0xvZ2luIGZhaWxlZCcpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZWdpc3RlciA9IGFzeW5jIChjcmVkZW50aWFsczogUmVnaXN0ZXJDcmVkZW50aWFscykgPT4ge1xuICAgIHRyeSB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgc2V0RXJyb3IobnVsbCk7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KCcvYXBpL3JlZ2lzdGVyJywgY3JlZGVudGlhbHMpO1xuICAgICAgc2V0VXNlcihyZXNwb25zZS5kYXRhKTtcbiAgICAgIHJvdXRlci5wdXNoKCcvJyk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgc2V0RXJyb3IoZXJyb3IucmVzcG9uc2U/LmRhdGE/LmVycm9yIHx8ICdSZWdpc3RyYXRpb24gZmFpbGVkJyk7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgIGF3YWl0IGFwaS5wb3N0KCcvYXBpL2xvZ291dCcpO1xuICAgICAgc2V0VXNlcihudWxsKTtcbiAgICAgIHJvdXRlci5wdXNoKCcvYXV0aCcpO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIHNldEVycm9yKGVycm9yLnJlc3BvbnNlPy5kYXRhPy5lcnJvciB8fCAnTG9nb3V0IGZhaWxlZCcpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIHVzZXIsXG4gICAgICAgIGxvYWRpbmcsXG4gICAgICAgIGVycm9yLFxuICAgICAgICBsb2dpbixcbiAgICAgICAgcmVnaXN0ZXIsXG4gICAgICAgIGxvZ291dCxcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkOiAhIXVzZXIsXG4gICAgICAgIGlzQWRtaW46IHVzZXI/LnJvbGUgPT09ICdhZG1pbicsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQXV0aCgpIHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VBdXRoIG11c3QgYmUgdXNlZCB3aXRoaW4gYW4gQXV0aFByb3ZpZGVyJyk7XG4gIH1cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZVJvdXRlciIsImFwaSIsIkF1dGhDb250ZXh0IiwidW5kZWZpbmVkIiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsInJvdXRlciIsImNoZWNrQXV0aFN0YXR1cyIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImxvZ2luIiwiY3JlZGVudGlhbHMiLCJwb3N0IiwicHVzaCIsInJlZ2lzdGVyIiwibG9nb3V0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImlzQXV0aGVudGljYXRlZCIsImlzQWRtaW4iLCJyb2xlIiwidXNlQXV0aCIsImNvbnRleHQiLCJFcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/hooks/useAuth.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./src/lib/api.ts":
/*!************************!*\
  !*** ./src/lib/api.ts ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   fetchWithAuth: () => (/* binding */ fetchWithAuth)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    baseURL: '/api',\n    headers: {\n        'Content-Type': 'application/json'\n    },\n    withCredentials: true\n});\napi.interceptors.response.use((response)=>response, (error)=>{\n    const { response } = error;\n    // Handle session expiration or unauthorized access\n    if (response && response.status === 401) {\n        if (window.location.pathname !== '/auth') {\n            window.location.href = '/auth';\n        }\n    }\n    return Promise.reject(error);\n});\nasync function fetchWithAuth(url, options = {}) {\n    try {\n        const response = await api.request({\n            url,\n            method: options.method || 'GET',\n            data: options.body ? JSON.parse(options.body) : undefined,\n            headers: options.headers\n        });\n        return {\n            success: true,\n            data: response.data\n        };\n    } catch (error) {\n        if (axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isAxiosError(error) && error.response) {\n            return {\n                success: false,\n                error: error.response.data.message || 'An error occurred'\n            };\n        }\n        return {\n            success: false,\n            error: 'Network error'\n        };\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9saWIvYXBpLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQjtBQUcxQixNQUFNQyxNQUFNRCxvREFBWSxDQUFDO0lBQ3ZCRyxTQUFTO0lBQ1RDLFNBQVM7UUFDUCxnQkFBZ0I7SUFDbEI7SUFDQUMsaUJBQWlCO0FBQ25CO0FBRUFKLElBQUlLLFlBQVksQ0FBQ0MsUUFBUSxDQUFDQyxHQUFHLENBQzNCLENBQUNELFdBQWFBLFVBQ2QsQ0FBQ0U7SUFDQyxNQUFNLEVBQUVGLFFBQVEsRUFBRSxHQUFHRTtJQUVyQixtREFBbUQ7SUFDbkQsSUFBSUYsWUFBWUEsU0FBU0csTUFBTSxLQUFLLEtBQUs7UUFDdkMsSUFBSUMsT0FBT0MsUUFBUSxDQUFDQyxRQUFRLEtBQUssU0FBUztZQUN4Q0YsT0FBT0MsUUFBUSxDQUFDRSxJQUFJLEdBQUc7UUFDekI7SUFDRjtJQUVBLE9BQU9DLFFBQVFDLE1BQU0sQ0FBQ1A7QUFDeEI7QUFHSyxlQUFlUSxjQUFpQkMsR0FBVyxFQUFFQyxVQUF1QixDQUFDLENBQUM7SUFDM0UsSUFBSTtRQUNGLE1BQU1aLFdBQVcsTUFBTU4sSUFBSW1CLE9BQU8sQ0FBQztZQUNqQ0Y7WUFDQUcsUUFBUUYsUUFBUUUsTUFBTSxJQUFJO1lBQzFCQyxNQUFNSCxRQUFRSSxJQUFJLEdBQUdDLEtBQUtDLEtBQUssQ0FBQ04sUUFBUUksSUFBSSxJQUFjRztZQUMxRHRCLFNBQVNlLFFBQVFmLE9BQU87UUFDMUI7UUFFQSxPQUFPO1lBQ0x1QixTQUFTO1lBQ1RMLE1BQU1mLFNBQVNlLElBQUk7UUFDckI7SUFDRixFQUFFLE9BQU9iLE9BQU87UUFDZCxJQUFJVCwwREFBa0IsQ0FBQ1MsVUFBVUEsTUFBTUYsUUFBUSxFQUFFO1lBQy9DLE9BQU87Z0JBQ0xvQixTQUFTO2dCQUNUbEIsT0FBT0EsTUFBTUYsUUFBUSxDQUFDZSxJQUFJLENBQUNPLE9BQU8sSUFBSTtZQUN4QztRQUNGO1FBRUEsT0FBTztZQUNMRixTQUFTO1lBQ1RsQixPQUFPO1FBQ1Q7SUFDRjtBQUNGO0FBRUEsaUVBQWVSLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3Jrc3BhY2Uvc3JjL2xpYi9hcGkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IEFwaVJlc3BvbnNlIH0gZnJvbSAnQC90eXBlcyc7XG5cbmNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6ICcvYXBpJyxcbiAgaGVhZGVyczoge1xuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gIH0sXG4gIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbn0pO1xuXG5hcGkuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShcbiAgKHJlc3BvbnNlKSA9PiByZXNwb25zZSxcbiAgKGVycm9yKSA9PiB7XG4gICAgY29uc3QgeyByZXNwb25zZSB9ID0gZXJyb3I7XG4gICAgXG4gICAgLy8gSGFuZGxlIHNlc3Npb24gZXhwaXJhdGlvbiBvciB1bmF1dGhvcml6ZWQgYWNjZXNzXG4gICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICE9PSAnL2F1dGgnKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9hdXRoJztcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgfVxuKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoV2l0aEF1dGg8VD4odXJsOiBzdHJpbmcsIG9wdGlvbnM6IFJlcXVlc3RJbml0ID0ge30pOiBQcm9taXNlPEFwaVJlc3BvbnNlPFQ+PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucmVxdWVzdCh7XG4gICAgICB1cmwsXG4gICAgICBtZXRob2Q6IG9wdGlvbnMubWV0aG9kIHx8ICdHRVQnLFxuICAgICAgZGF0YTogb3B0aW9ucy5ib2R5ID8gSlNPTi5wYXJzZShvcHRpb25zLmJvZHkgYXMgc3RyaW5nKSA6IHVuZGVmaW5lZCxcbiAgICAgIGhlYWRlcnM6IG9wdGlvbnMuaGVhZGVycyxcbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoYXhpb3MuaXNBeGlvc0Vycm9yKGVycm9yKSAmJiBlcnJvci5yZXNwb25zZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIGVycm9yOiBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UgfHwgJ0FuIGVycm9yIG9jY3VycmVkJyxcbiAgICAgIH07XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yOiAnTmV0d29yayBlcnJvcicsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhcGk7XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJhcGkiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaGVhZGVycyIsIndpdGhDcmVkZW50aWFscyIsImludGVyY2VwdG9ycyIsInJlc3BvbnNlIiwidXNlIiwiZXJyb3IiLCJzdGF0dXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiaHJlZiIsIlByb21pc2UiLCJyZWplY3QiLCJmZXRjaFdpdGhBdXRoIiwidXJsIiwib3B0aW9ucyIsInJlcXVlc3QiLCJtZXRob2QiLCJkYXRhIiwiYm9keSIsIkpTT04iLCJwYXJzZSIsInVuZGVmaW5lZCIsInN1Y2Nlc3MiLCJpc0F4aW9zRXJyb3IiLCJtZXNzYWdlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/lib/api.ts\n");

/***/ }),

/***/ "(pages-dir-node)/./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/useAuth */ \"(pages-dir-node)/./src/hooks/useAuth.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/globals.css */ \"(pages-dir-node)/./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__]);\n_hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // Simple loading indicator for page transitions\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"App.useEffect\": ()=>{\n            const handleStart = {\n                \"App.useEffect.handleStart\": ()=>setIsLoading(true)\n            }[\"App.useEffect.handleStart\"];\n            const handleComplete = {\n                \"App.useEffect.handleComplete\": ()=>setIsLoading(false)\n            }[\"App.useEffect.handleComplete\"];\n            router.events.on('routeChangeStart', handleStart);\n            router.events.on('routeChangeComplete', handleComplete);\n            router.events.on('routeChangeError', handleComplete);\n            return ({\n                \"App.useEffect\": ()=>{\n                    router.events.off('routeChangeStart', handleStart);\n                    router.events.off('routeChangeComplete', handleComplete);\n                    router.events.off('routeChangeError', handleComplete);\n                }\n            })[\"App.useEffect\"];\n        }\n    }[\"App.useEffect\"], [\n        router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__.AuthProvider, {\n        children: [\n            isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed top-0 left-0 w-full h-1 bg-blue-600 animate-pulse z-50\"\n            }, void 0, false, {\n                fileName: \"/home/runner/workspace/src/pages/_app.tsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/runner/workspace/src/pages/_app.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/runner/workspace/src/pages/_app.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUVKO0FBQ087QUFDakI7QUFFZixTQUFTSSxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQzVELE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNUyxTQUFTUCxzREFBU0E7SUFFeEIsZ0RBQWdEO0lBQ2hERCxnREFBU0E7eUJBQUM7WUFDUixNQUFNUzs2Q0FBYyxJQUFNRixhQUFhOztZQUN2QyxNQUFNRztnREFBaUIsSUFBTUgsYUFBYTs7WUFFMUNDLE9BQU9HLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLG9CQUFvQkg7WUFDckNELE9BQU9HLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLHVCQUF1QkY7WUFDeENGLE9BQU9HLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLG9CQUFvQkY7WUFFckM7aUNBQU87b0JBQ0xGLE9BQU9HLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLG9CQUFvQko7b0JBQ3RDRCxPQUFPRyxNQUFNLENBQUNFLEdBQUcsQ0FBQyx1QkFBdUJIO29CQUN6Q0YsT0FBT0csTUFBTSxDQUFDRSxHQUFHLENBQUMsb0JBQW9CSDtnQkFDeEM7O1FBQ0Y7d0JBQUc7UUFBQ0Y7S0FBTztJQUVYLHFCQUNFLDhEQUFDTix3REFBWUE7O1lBQ1ZJLDJCQUNDLDhEQUFDUTtnQkFBSUMsV0FBVTs7Ozs7OzBCQUVqQiw4REFBQ1g7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7O0FBRzlCIiwic291cmNlcyI6WyIvaG9tZS9ydW5uZXIvd29ya3NwYWNlL3NyYy9wYWdlcy9fYXBwLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gJ0AvaG9va3MvdXNlQXV0aCc7XG5pbXBvcnQgJ0Avc3R5bGVzL2dsb2JhbHMuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgLy8gU2ltcGxlIGxvYWRpbmcgaW5kaWNhdG9yIGZvciBwYWdlIHRyYW5zaXRpb25zXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU3RhcnQgPSAoKSA9PiBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgY29uc3QgaGFuZGxlQ29tcGxldGUgPSAoKSA9PiBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuXG4gICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVN0YXJ0KTtcbiAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlQ29tcGxldGUpO1xuICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlRXJyb3InLCBoYW5kbGVDb21wbGV0ZSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVTdGFydCk7XG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZUNvbXBsZXRlKTtcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUVycm9yJywgaGFuZGxlQ29tcGxldGUpO1xuICAgIH07XG4gIH0sIFtyb3V0ZXJdKTtcblxuICByZXR1cm4gKFxuICAgIDxBdXRoUHJvdmlkZXI+XG4gICAgICB7aXNMb2FkaW5nICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMCBsZWZ0LTAgdy1mdWxsIGgtMSBiZy1ibHVlLTYwMCBhbmltYXRlLXB1bHNlIHotNTBcIj48L2Rpdj5cbiAgICAgICl9XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9BdXRoUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJBdXRoUHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJyb3V0ZXIiLCJoYW5kbGVTdGFydCIsImhhbmRsZUNvbXBsZXRlIiwiZXZlbnRzIiwib24iLCJvZmYiLCJkaXYiLCJjbGFzc05hbWUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/pages/_app.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("(pages-dir-node)/./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();