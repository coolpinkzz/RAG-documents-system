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

/***/ "(pages-dir-node)/./src/context/AuthContext.tsx":
/*!*************************************!*\
  !*** ./src/context/AuthContext.tsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/api */ \"(pages-dir-node)/./src/lib/api.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_api__WEBPACK_IMPORTED_MODULE_3__]);\n_lib_api__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nfunction AuthProvider({ children }) {\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AuthProvider.useEffect\": ()=>{\n            async function loadUserFromSession() {\n                try {\n                    const response = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_3__.fetchWithAuth)('/api/user');\n                    if (response.success && response.data) {\n                        setUser(response.data);\n                    }\n                } catch (error) {\n                    console.error('Failed to load user session', error);\n                } finally{\n                    setLoading(false);\n                }\n            }\n            loadUserFromSession();\n        }\n    }[\"AuthProvider.useEffect\"], []);\n    const login = async (credentials)=>{\n        setLoading(true);\n        setError(null);\n        try {\n            const response = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_3__.fetchWithAuth)('/api/login', {\n                method: 'POST',\n                body: JSON.stringify(credentials)\n            });\n            if (response.success && response.data) {\n                setUser(response.data);\n                router.push('/');\n            } else {\n                setError(response.error || 'Login failed');\n                throw new Error(response.error || 'Login failed');\n            }\n        } catch (error) {\n            if (error instanceof Error) {\n                setError(error.message);\n            } else {\n                setError('An unknown error occurred');\n            }\n            throw error;\n        } finally{\n            setLoading(false);\n        }\n    };\n    const register = async (credentials)=>{\n        setLoading(true);\n        setError(null);\n        try {\n            const response = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_3__.fetchWithAuth)('/api/register', {\n                method: 'POST',\n                body: JSON.stringify(credentials)\n            });\n            if (response.success && response.data) {\n                setUser(response.data);\n                router.push('/');\n            } else {\n                setError(response.error || 'Registration failed');\n                throw new Error(response.error || 'Registration failed');\n            }\n        } catch (error) {\n            if (error instanceof Error) {\n                setError(error.message);\n            } else {\n                setError('An unknown error occurred');\n            }\n            throw error;\n        } finally{\n            setLoading(false);\n        }\n    };\n    const logout = async ()=>{\n        setLoading(true);\n        try {\n            const response = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_3__.fetchWithAuth)('/api/logout', {\n                method: 'POST'\n            });\n            if (response.success) {\n                setUser(null);\n                router.push('/auth');\n            } else {\n                setError(response.error || 'Logout failed');\n            }\n        } catch (error) {\n            if (error instanceof Error) {\n                setError(error.message);\n            } else {\n                setError('An unknown error occurred');\n            }\n        } finally{\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            loading,\n            error,\n            login,\n            register,\n            logout,\n            isAuthenticated: !!user,\n            isAdmin: user?.role === 'admin'\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/runner/workspace/src/context/AuthContext.tsx\",\n        lineNumber: 126,\n        columnNumber: 5\n    }, this);\n}\nfunction useAuth() {\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n    if (context === undefined) {\n        throw new Error('useAuth must be used within an AuthProvider');\n    }\n    return context;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9jb250ZXh0L0F1dGhDb250ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWtGO0FBQzFDO0FBRUU7QUFhMUMsTUFBTU0sNEJBQWNOLG9EQUFhQSxDQUErQk87QUFFekQsU0FBU0MsYUFBYSxFQUFFQyxRQUFRLEVBQTJCO0lBQ2hFLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHVCwrQ0FBUUEsQ0FBYztJQUM5QyxNQUFNLENBQUNVLFNBQVNDLFdBQVcsR0FBR1gsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDWSxPQUFPQyxTQUFTLEdBQUdiLCtDQUFRQSxDQUFnQjtJQUNsRCxNQUFNYyxTQUFTWixzREFBU0E7SUFFeEJELGdEQUFTQTtrQ0FBQztZQUNSLGVBQWVjO2dCQUNiLElBQUk7b0JBQ0YsTUFBTUMsV0FBVyxNQUFNYix1REFBYUEsQ0FBTztvQkFDM0MsSUFBSWEsU0FBU0MsT0FBTyxJQUFJRCxTQUFTRSxJQUFJLEVBQUU7d0JBQ3JDVCxRQUFRTyxTQUFTRSxJQUFJO29CQUN2QjtnQkFDRixFQUFFLE9BQU9OLE9BQU87b0JBQ2RPLFFBQVFQLEtBQUssQ0FBQywrQkFBK0JBO2dCQUMvQyxTQUFVO29CQUNSRCxXQUFXO2dCQUNiO1lBQ0Y7WUFFQUk7UUFDRjtpQ0FBRyxFQUFFO0lBRUwsTUFBTUssUUFBUSxPQUFPQztRQUNuQlYsV0FBVztRQUNYRSxTQUFTO1FBRVQsSUFBSTtZQUNGLE1BQU1HLFdBQVcsTUFBTWIsdURBQWFBLENBQU8sY0FBYztnQkFDdkRtQixRQUFRO2dCQUNSQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNKO1lBQ3ZCO1lBRUEsSUFBSUwsU0FBU0MsT0FBTyxJQUFJRCxTQUFTRSxJQUFJLEVBQUU7Z0JBQ3JDVCxRQUFRTyxTQUFTRSxJQUFJO2dCQUNyQkosT0FBT1ksSUFBSSxDQUFDO1lBQ2QsT0FBTztnQkFDTGIsU0FBU0csU0FBU0osS0FBSyxJQUFJO2dCQUMzQixNQUFNLElBQUllLE1BQU1YLFNBQVNKLEtBQUssSUFBSTtZQUNwQztRQUNGLEVBQUUsT0FBT0EsT0FBTztZQUNkLElBQUlBLGlCQUFpQmUsT0FBTztnQkFDMUJkLFNBQVNELE1BQU1nQixPQUFPO1lBQ3hCLE9BQU87Z0JBQ0xmLFNBQVM7WUFDWDtZQUNBLE1BQU1EO1FBQ1IsU0FBVTtZQUNSRCxXQUFXO1FBQ2I7SUFDRjtJQUVBLE1BQU1rQixXQUFXLE9BQU9SO1FBQ3RCVixXQUFXO1FBQ1hFLFNBQVM7UUFFVCxJQUFJO1lBQ0YsTUFBTUcsV0FBVyxNQUFNYix1REFBYUEsQ0FBTyxpQkFBaUI7Z0JBQzFEbUIsUUFBUTtnQkFDUkMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDSjtZQUN2QjtZQUVBLElBQUlMLFNBQVNDLE9BQU8sSUFBSUQsU0FBU0UsSUFBSSxFQUFFO2dCQUNyQ1QsUUFBUU8sU0FBU0UsSUFBSTtnQkFDckJKLE9BQU9ZLElBQUksQ0FBQztZQUNkLE9BQU87Z0JBQ0xiLFNBQVNHLFNBQVNKLEtBQUssSUFBSTtnQkFDM0IsTUFBTSxJQUFJZSxNQUFNWCxTQUFTSixLQUFLLElBQUk7WUFDcEM7UUFDRixFQUFFLE9BQU9BLE9BQU87WUFDZCxJQUFJQSxpQkFBaUJlLE9BQU87Z0JBQzFCZCxTQUFTRCxNQUFNZ0IsT0FBTztZQUN4QixPQUFPO2dCQUNMZixTQUFTO1lBQ1g7WUFDQSxNQUFNRDtRQUNSLFNBQVU7WUFDUkQsV0FBVztRQUNiO0lBQ0Y7SUFFQSxNQUFNbUIsU0FBUztRQUNibkIsV0FBVztRQUVYLElBQUk7WUFDRixNQUFNSyxXQUFXLE1BQU1iLHVEQUFhQSxDQUFDLGVBQWU7Z0JBQ2xEbUIsUUFBUTtZQUNWO1lBRUEsSUFBSU4sU0FBU0MsT0FBTyxFQUFFO2dCQUNwQlIsUUFBUTtnQkFDUkssT0FBT1ksSUFBSSxDQUFDO1lBQ2QsT0FBTztnQkFDTGIsU0FBU0csU0FBU0osS0FBSyxJQUFJO1lBQzdCO1FBQ0YsRUFBRSxPQUFPQSxPQUFPO1lBQ2QsSUFBSUEsaUJBQWlCZSxPQUFPO2dCQUMxQmQsU0FBU0QsTUFBTWdCLE9BQU87WUFDeEIsT0FBTztnQkFDTGYsU0FBUztZQUNYO1FBQ0YsU0FBVTtZQUNSRixXQUFXO1FBQ2I7SUFDRjtJQUVBLHFCQUNFLDhEQUFDUCxZQUFZMkIsUUFBUTtRQUNuQkMsT0FBTztZQUNMeEI7WUFDQUU7WUFDQUU7WUFDQVE7WUFDQVM7WUFDQUM7WUFDQUcsaUJBQWlCLENBQUMsQ0FBQ3pCO1lBQ25CMEIsU0FBUzFCLE1BQU0yQixTQUFTO1FBQzFCO2tCQUVDNUI7Ozs7OztBQUdQO0FBRU8sU0FBUzZCO0lBQ2QsTUFBTUMsVUFBVXRDLGlEQUFVQSxDQUFDSztJQUUzQixJQUFJaUMsWUFBWWhDLFdBQVc7UUFDekIsTUFBTSxJQUFJc0IsTUFBTTtJQUNsQjtJQUVBLE9BQU9VO0FBQ1QiLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3Jrc3BhY2Uvc3JjL2NvbnRleHQvQXV0aENvbnRleHQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QsIFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IFVzZXIsIExvZ2luQ3JlZGVudGlhbHMsIFJlZ2lzdGVyQ3JlZGVudGlhbHMgfSBmcm9tICdAL3R5cGVzJztcbmltcG9ydCB7IGZldGNoV2l0aEF1dGggfSBmcm9tICdAL2xpYi9hcGknO1xuXG5pbnRlcmZhY2UgQXV0aENvbnRleHRQcm9wcyB7XG4gIHVzZXI6IFVzZXIgfCBudWxsO1xuICBsb2FkaW5nOiBib29sZWFuO1xuICBlcnJvcjogc3RyaW5nIHwgbnVsbDtcbiAgbG9naW46IChjcmVkZW50aWFsczogTG9naW5DcmVkZW50aWFscykgPT4gUHJvbWlzZTx2b2lkPjtcbiAgcmVnaXN0ZXI6IChjcmVkZW50aWFsczogUmVnaXN0ZXJDcmVkZW50aWFscykgPT4gUHJvbWlzZTx2b2lkPjtcbiAgbG9nb3V0OiAoKSA9PiBQcm9taXNlPHZvaWQ+O1xuICBpc0F1dGhlbnRpY2F0ZWQ6IGJvb2xlYW47XG4gIGlzQWRtaW46IGJvb2xlYW47XG59XG5cbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxBdXRoQ29udGV4dFByb3BzIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuXG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3ROb2RlIH0pIHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlciB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkVXNlckZyb21TZXNzaW9uKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaFdpdGhBdXRoPFVzZXI+KCcvYXBpL3VzZXInKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MgJiYgcmVzcG9uc2UuZGF0YSkge1xuICAgICAgICAgIHNldFVzZXIocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBsb2FkIHVzZXIgc2Vzc2lvbicsIGVycm9yKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxvYWRVc2VyRnJvbVNlc3Npb24oKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGxvZ2luID0gYXN5bmMgKGNyZWRlbnRpYWxzOiBMb2dpbkNyZWRlbnRpYWxzKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBzZXRFcnJvcihudWxsKTtcbiAgICBcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaFdpdGhBdXRoPFVzZXI+KCcvYXBpL2xvZ2luJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY3JlZGVudGlhbHMpLFxuICAgICAgfSk7XG4gICAgICBcbiAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzICYmIHJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgc2V0VXNlcihyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldEVycm9yKHJlc3BvbnNlLmVycm9yIHx8ICdMb2dpbiBmYWlsZWQnKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLmVycm9yIHx8ICdMb2dpbiBmYWlsZWQnKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgc2V0RXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRFcnJvcignQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZCcpO1xuICAgICAgfVxuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZWdpc3RlciA9IGFzeW5jIChjcmVkZW50aWFsczogUmVnaXN0ZXJDcmVkZW50aWFscykgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgc2V0RXJyb3IobnVsbCk7XG4gICAgXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hXaXRoQXV0aDxVc2VyPignL2FwaS9yZWdpc3RlcicsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNyZWRlbnRpYWxzKSxcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICBpZiAocmVzcG9uc2Uuc3VjY2VzcyAmJiByZXNwb25zZS5kYXRhKSB7XG4gICAgICAgIHNldFVzZXIocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRFcnJvcihyZXNwb25zZS5lcnJvciB8fCAnUmVnaXN0cmF0aW9uIGZhaWxlZCcpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2UuZXJyb3IgfHwgJ1JlZ2lzdHJhdGlvbiBmYWlsZWQnKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgc2V0RXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRFcnJvcignQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZCcpO1xuICAgICAgfVxuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBsb2dvdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaFdpdGhBdXRoKCcvYXBpL2xvZ291dCcsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgc2V0VXNlcihudWxsKTtcbiAgICAgICAgcm91dGVyLnB1c2goJy9hdXRoJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRFcnJvcihyZXNwb25zZS5lcnJvciB8fCAnTG9nb3V0IGZhaWxlZCcpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICBzZXRFcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldEVycm9yKCdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkJyk7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgdXNlcixcbiAgICAgICAgbG9hZGluZyxcbiAgICAgICAgZXJyb3IsXG4gICAgICAgIGxvZ2luLFxuICAgICAgICByZWdpc3RlcixcbiAgICAgICAgbG9nb3V0LFxuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6ICEhdXNlcixcbiAgICAgICAgaXNBZG1pbjogdXNlcj8ucm9sZSA9PT0gJ2FkbWluJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBdXRoKCkge1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG4gIFxuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VBdXRoIG11c3QgYmUgdXNlZCB3aXRoaW4gYW4gQXV0aFByb3ZpZGVyJyk7XG4gIH1cbiAgXG4gIHJldHVybiBjb250ZXh0O1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJmZXRjaFdpdGhBdXRoIiwiQXV0aENvbnRleHQiLCJ1bmRlZmluZWQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwicm91dGVyIiwibG9hZFVzZXJGcm9tU2Vzc2lvbiIsInJlc3BvbnNlIiwic3VjY2VzcyIsImRhdGEiLCJjb25zb2xlIiwibG9naW4iLCJjcmVkZW50aWFscyIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicHVzaCIsIkVycm9yIiwibWVzc2FnZSIsInJlZ2lzdGVyIiwibG9nb3V0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImlzQXV0aGVudGljYXRlZCIsImlzQWRtaW4iLCJyb2xlIiwidXNlQXV0aCIsImNvbnRleHQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/context/AuthContext.tsx\n");

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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/AuthContext */ \"(pages-dir-node)/./src/context/AuthContext.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/globals.css */ \"(pages-dir-node)/./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__]);\n_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // Simple loading indicator for page transitions\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"App.useEffect\": ()=>{\n            const handleStart = {\n                \"App.useEffect.handleStart\": ()=>setIsLoading(true)\n            }[\"App.useEffect.handleStart\"];\n            const handleComplete = {\n                \"App.useEffect.handleComplete\": ()=>setIsLoading(false)\n            }[\"App.useEffect.handleComplete\"];\n            router.events.on('routeChangeStart', handleStart);\n            router.events.on('routeChangeComplete', handleComplete);\n            router.events.on('routeChangeError', handleComplete);\n            return ({\n                \"App.useEffect\": ()=>{\n                    router.events.off('routeChangeStart', handleStart);\n                    router.events.off('routeChangeComplete', handleComplete);\n                    router.events.off('routeChangeError', handleComplete);\n                }\n            })[\"App.useEffect\"];\n        }\n    }[\"App.useEffect\"], [\n        router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.AuthProvider, {\n        children: [\n            isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed top-0 left-0 w-full h-1 bg-blue-600 animate-pulse z-50\"\n            }, void 0, false, {\n                fileName: \"/home/runner/workspace/src/pages/_app.tsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/runner/workspace/src/pages/_app.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/runner/workspace/src/pages/_app.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUVKO0FBQ2E7QUFDdkI7QUFFZixTQUFTSSxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQzVELE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNUyxTQUFTUCxzREFBU0E7SUFFeEIsZ0RBQWdEO0lBQ2hERCxnREFBU0E7eUJBQUM7WUFDUixNQUFNUzs2Q0FBYyxJQUFNRixhQUFhOztZQUN2QyxNQUFNRztnREFBaUIsSUFBTUgsYUFBYTs7WUFFMUNDLE9BQU9HLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLG9CQUFvQkg7WUFDckNELE9BQU9HLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLHVCQUF1QkY7WUFDeENGLE9BQU9HLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLG9CQUFvQkY7WUFFckM7aUNBQU87b0JBQ0xGLE9BQU9HLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLG9CQUFvQko7b0JBQ3RDRCxPQUFPRyxNQUFNLENBQUNFLEdBQUcsQ0FBQyx1QkFBdUJIO29CQUN6Q0YsT0FBT0csTUFBTSxDQUFDRSxHQUFHLENBQUMsb0JBQW9CSDtnQkFDeEM7O1FBQ0Y7d0JBQUc7UUFBQ0Y7S0FBTztJQUVYLHFCQUNFLDhEQUFDTiw4REFBWUE7O1lBQ1ZJLDJCQUNDLDhEQUFDUTtnQkFBSUMsV0FBVTs7Ozs7OzBCQUVqQiw4REFBQ1g7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7O0FBRzlCIiwic291cmNlcyI6WyIvaG9tZS9ydW5uZXIvd29ya3NwYWNlL3NyYy9wYWdlcy9fYXBwLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gJ0AvY29udGV4dC9BdXRoQ29udGV4dCc7XG5pbXBvcnQgJ0Avc3R5bGVzL2dsb2JhbHMuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgLy8gU2ltcGxlIGxvYWRpbmcgaW5kaWNhdG9yIGZvciBwYWdlIHRyYW5zaXRpb25zXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU3RhcnQgPSAoKSA9PiBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgY29uc3QgaGFuZGxlQ29tcGxldGUgPSAoKSA9PiBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuXG4gICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVN0YXJ0KTtcbiAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlQ29tcGxldGUpO1xuICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlRXJyb3InLCBoYW5kbGVDb21wbGV0ZSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVTdGFydCk7XG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZUNvbXBsZXRlKTtcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUVycm9yJywgaGFuZGxlQ29tcGxldGUpO1xuICAgIH07XG4gIH0sIFtyb3V0ZXJdKTtcblxuICByZXR1cm4gKFxuICAgIDxBdXRoUHJvdmlkZXI+XG4gICAgICB7aXNMb2FkaW5nICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMCBsZWZ0LTAgdy1mdWxsIGgtMSBiZy1ibHVlLTYwMCBhbmltYXRlLXB1bHNlIHotNTBcIj48L2Rpdj5cbiAgICAgICl9XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9BdXRoUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJBdXRoUHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJyb3V0ZXIiLCJoYW5kbGVTdGFydCIsImhhbmRsZUNvbXBsZXRlIiwiZXZlbnRzIiwib24iLCJvZmYiLCJkaXYiLCJjbGFzc05hbWUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/pages/_app.tsx\n");

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