import _ from 'lodash'

var maths = {
  title: "数学字符",
  items: [{
    "title": "基础数学",
    "values": [
      "pm", "infty", "=", "sim", "times", "div", "!", "<", "ll", ">",
      "gg", "leq", "geq", "mp", "cong", "equiv", "propto", "approx",
      "forall", "partial", "surd", "cup", "cap", "varnothing", "%",
      "circ", "exists", "nexists", "in", "ni", "gets", "uparrow",
      "to", "downarrow", "leftrightarrow", "therefore", "because",
      "+", "-", "neg", "ast", "cdot", "vdots", /* "ddots",*/ "aleph",
      "beth", "blacksquare"
    ]
  }, {
    title: "求反关系运算符",
    values: [
      "neq", "nless", "ngtr", "nleq", "ngeq", "nsim", "lneqq",
      "gneqq", "nprec", "nsucc", "notin", "nsubseteq", "nsupseteq",
      "subsetneq", "supsetneq", "lnsim", "gnsim", "precnsim",
      "succnsim", "ntriangleleft", "ntriangleright", "ntrianglelefteq",
      "ntrianglerighteq", "nmid", "nparallel", "nvdash", "nVdash",
      "nvDash", "nVDash", "nexists"
    ]
  }, {
    "title": "字母类符号",
    "values": [
      "aleph", "beth", "daleth", "gimel", "complement", "ell", "eth", "hbar",
      "hslash", "mho", "partial", "wp", "circledS", "Bbbk", "Finv", "Game",
      "Im", "Re"
    ]
  }, {
    "title": "尖头",
    "values": [
      "gets", "to", "uparrow", "downarrow", "leftrightarrow", "updownarrow",
      "Leftarrow", "Rightarrow", "Uparrow", "Downarrow", "Leftrightarrow",
      "Updownarrow", "longleftarrow", "longrightarrow", "longleftrightarrow",
      "Longleftarrow", "Longrightarrow", "Longleftrightarrow", "nearrow",
      "nwarrow", "searrow", "swarrow", "nleftarrow", "nrightarrow",
      "nLeftarrow", "nRightarrow", "nLeftrightarrow", "leftharpoonup",
      "leftharpoondown", "rightharpoonup", "rightharpoondown", "upharpoonleft",
      "upharpoonright", "downharpoonleft",
      "downharpoonright", "leftrightharpoons", "rightleftharpoons", "leftleftarrows",
      "rightrightarrows", "upuparrows", "downdownarrows", "leftrightarrows",
      "rightleftarrows", "looparrowleft", "looparrowright", "leftarrowtail",
      "rightarrowtail", "Lsh", "Rsh", "Lleftarrow", "Rrightarrow", "curvearrowleft",
      "curvearrowright", "circlearrowleft", "circlearrowright", "multimap",
      "leftrightsquigarrow", "twoheadleftarrow", "twoheadrightarrow", "rightsquigarrow"
    ]
  }]
}



_.forEach(maths.items, function(item, ind) {

  _.forEach(item.values, function(v, index) {

    if (v.length > 1) {
      v = '\\' + v
    }

    item.values[index] = v

  })

})


export default maths
