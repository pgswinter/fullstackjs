webpackHotUpdate(0,{

/***/ "IxWO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__("U7vG");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("O27J");

var _App = __webpack_require__("JyrS");

var _App2 = _interopRequireDefault(_App);

var _axios = __webpack_require__("mtWM");

var _axios2 = _interopRequireDefault(_axios);

var _reactRedux = __webpack_require__("RH2O");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// let initialState = {
// 	todos:[{
// 		id: 0,
// 		completed: false,
// 		text: 'Hello World'
// 	}]
// }

// let store = configureStore(initialState)

// axios.get('/api/contests')
// 	.then(resp=>{
// 		render(
// 			<App initialContest={resp.data.contests}/>,
// 			document.getElementById('app')
// 		)
// 	})
// 	.catch(console.error)

(0, _reactDom.render)(
// **** before refactor
// <App initialContests={window.initialData.contests}/>,
// **** before refactor
// **** after refactor
_react2.default.createElement(_App2.default, { initialData: window.initialData }),
// **** after refactor
document.getElementById('app'));
// import configureStore from '../redux/store'

/***/ })

})
//# sourceMappingURL=modules.map