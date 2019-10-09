module.exports = function check(str, bracketsConfig) {
  // your solution
  let bracketsArray = str.split("");
  let brConfig = bracketsConfig;

  for(let i = 0; i < bracketsArray.length; i++) {
      for(let j = 0; j < brConfig.length; j++) {
        if(bracketsArray[i] === brConfig[j][0] && bracketsArray[i + 1] === brConfig[j][1]) {
            bracketsArray.splice(i, 2);

            if( bracketsArray.length === 0) {
                return true;
            }

            i = -1;
        }
      }
  }
  return false
}
