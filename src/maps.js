// import _ from 'lodash'

// var conf = {
//   'tit': '\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}'
// }

// var latters = {
//   title: "字体表",
//   items: []
// }




// var config = [{
//   title: "求反关系运算符",
//   items: [{
//     title: "求反关系运算符",
//     values: [
//       "neq", "nless", "ngtr", "nleq", "ngeq", "nsim", "lneqq",
//       "gneqq", "nprec", "nsucc", "notin", "nsubseteq", "nsupseteq",
//       "subsetneq", "supsetneq", "lnsim", "gnsim", "precnsim",
//       "succnsim", "ntriangleleft", "ntriangleright", "ntrianglelefteq",
//       "ntrianglerighteq", "nmid", "nparallel", "nvdash", "nVdash",
//       "nvDash", "nVDash", "nexists"
//     ]
//   }]
// }, {
//   title: "字母类符号",
//   items: [{
//     "title": "字母类符号",
//     "values": [
//       "aleph", "beth", "daleth", "gimel", "complement", "ell", "eth", "hbar",
//       "hslash", "mho", "partial", "wp", "circledS", "Bbbk", "Finv", "Game",
//       "Im", "Re"
//     ]
//   }]
// }, {
//   title: "箭头",
//   items: [{
//     "title": "尖头",
//     "values": [
//       "gets", "to", "uparrow", "downarrow", "leftrightarrow", "updownarrow",
//       "Leftarrow", "Rightarrow", "Uparrow", "Downarrow", "Leftrightarrow",
//       "Updownarrow", "longleftarrow", "longrightarrow", "longleftrightarrow",
//       "Longleftarrow", "Longrightarrow", "Longleftrightarrow", "nearrow",
//       "nwarrow", "searrow", "swarrow", "nleftarrow", "nrightarrow",
//       "nLeftarrow", "nRightarrow", "nLeftrightarrow", "leftharpoonup",
//       "leftharpoondown", "rightharpoonup", "rightharpoondown", "upharpoonleft",
//       "upharpoonright", "downharpoonleft",
//       "downharpoonright", "leftrightharpoons", "rightleftharpoons", "leftleftarrows",
//       "rightrightarrows", "upuparrows", "downdownarrows", "leftrightarrows",
//       "rightleftarrows", "looparrowleft", "looparrowright", "leftarrowtail",
//       "rightarrowtail", "Lsh", "Rsh", "Lleftarrow", "Rrightarrow", "curvearrowleft",
//       "curvearrowright", "circlearrowleft", "circlearrowright", "multimap",
//       "leftrightsquigarrow", "twoheadleftarrow", "twoheadrightarrow", "rightsquigarrow"
//     ]
//   }]
// }, {
//   title: "手写体",
//   items: []
// }]


// _(config).forEach(function(cat) {
//   _(cat.items).forEach(function(item) {
//     _(item.values).forEach(function(v) {
//       console.log(v);
//     });
//   });
// });





// /**
//  * 为字符添加 \\ 
//  *
//  * @param {Object} obj
//  * @return {Object} obj
//  */

// function escapeLatex(obj){
// 	var items = obj.items

// 	_(items).forEach(function(it){
// 		_(it.values).forEach(function(v){
// 			console.log(v)
// 			v = '\\' + v
// 		})
// 	})
// 	console.log(obj)
// 	return obj
// }




// export default {
//   conf: conf,
//   latters: latters,
//   greekLatters: escapeLatex(greekLatters)
// }
