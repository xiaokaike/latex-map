import _ from 'lodash'

var greekLatters = {
  title: "希腊字母",
  items: [{
    title: "小写",
    values: ["alpha", "beta", "gamma", "delta", "epsilon", "zeta", "eta", "theta", "iota", "kappa", "lambda", "mu", "nu", "xi", "omicron", "pi", "rho", "sigma", "tau", "upsilon", "phi", "chi", "psi", "omega"]
  }, {
    title: "大写",
    values: ["Alpha", "Beta", "Gamma", "Delta", "Epsilon", "Zeta", "Eta", "Theta", "Iota", "Kappa", "Lambda", "Mu", "Nu", "Xi", "Omicron", "Pi", "Rho", "Sigma", "Tau", "Upsilon", "Phi", "Chi", "Psi", "Omega"]
  }, {
    title: "变体",
    values: ["digamma", "varepsilon", "varkappa", "varphi", "varpi", "varrho", "varsigma", "vartheta"]
  }]
};


/**
 * 为字符添加 \\ 
 *
 * @param {Object} obj
 * @return {Object} obj
 */

function escapeLatex(items){

  _(items).forEach(function(it, ind){
    _(it.values).forEach(function(v, index){
      items[ind].values[index] = '\\' + v
    })
  })

  return items;
}

greekLatters.items = escapeLatex(greekLatters.items)
console.log(greekLatters);

export default greekLatters