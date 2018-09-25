function shortPath(beginWord,  endWord, wordList) {
  /*LIST*/ let lst = [] // new LinkedList<String>();
  lst.push(beginWord)
  let count = 1
  
  while (lst.length != 0) {
      let size = lst.length
      for (let j = 0; j < size; j++) {
          let word = lst.splice(0, 1)
          word = word.pop()
          if (word == endWord) return count;
          for(let i = 0; i < word.length; i++) {
              for(let c = 'a'.charCodeAt(0); c <= 'z'.charCodeAt(0); c++) {
                  if (String.fromCharCode(c) != word[i]) {
                      let s = word.replaceAt(i, String.fromCharCode(c))
                      if(wordList.includes(s)) {
                          lst.push(s)
                          wordList.splice(wordList.indexOf(s), 1)
                      }
                  }
              }
          }
      }
      count++;
  }
  return count;
}

String.prototype.replaceAt = function(index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

const length = shortPath('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log'])
console.log( 'el camino mas corto es: ' + length)
