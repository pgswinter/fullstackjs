webpackHotUpdate(0,{

/***/ "n5Qe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.addName = exports.fetchNames = exports.fetchContestList = exports.fetchContest = undefined;

var _axios = __webpack_require__("mtWM");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetchContest = exports.fetchContest = function fetchContest(contestId) {
	return _axios2.default.get('/api/contests/' + contestId).then(function (resp) {
		return resp.data;
	});
};

var fetchContestList = exports.fetchContestList = function fetchContestList() {
	return _axios2.default.get('/api/contests').then(function (resp) {
		return resp.data.contests;
	});
};

var fetchNames = exports.fetchNames = function fetchNames(nameIds) {
	return _axios2.default.get('/api/names/' + nameIds.join(',')).then(function (resp) {
		return resp.data.names;
	});
};

var addName = exports.addName = function addName(newName, contestId) {
	return _axios2.default.post('/api/names', { newName: newName, contestId: contestId }).then(function (resp) {
		return resp.data;
	});
};

/***/ })

})
//# sourceMappingURL=modules.map