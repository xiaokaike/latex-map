import _ from 'lodash'

var latters = {
  title: "字体表",
  items: []
}

// 字体表格
;(function() {

  var items = [{
    title: "手写体",
    values: [
      "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
      "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X",
      "Y", "Z"
    ]
  }, {
    title: "花体",
    values: [
      "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
      "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X",
      "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
      "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
      "w", "x", "y", "z"
    ]
  }, {
    title: "双线",
    values: [
      "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
      "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X",
      "Y", "Z"
    ]
  }, {
    title: "罗马",
    values: [
      "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
      "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X",
      "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
      "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
      "w", "x", "y", "z"
    ]
  }]

  _.forEach(items[0].values, function(item, index) {

    items[0].values[index] = "\\mathcal{" + item + "}";

  })

  _.forEach(items[1].values, function(item, index) {

    items[1].values[index] = "\\mathfrak{" + item + "}";

  })

  _.forEach(items[2].values, function(item, index) {

    items[2].values[index] = "\\mathbb{" + item + "}";

  })

  _.forEach(items[3].values, function(item, index) {

    items[3].values[index] = "\\mathrm{" + item + "}";

  })

  latters.items = items

})()



export default latters