function produceDrivingRange(blockrange){
  return function(str1, str2){
    let num1 = parseInt(str1)
    let num2 = parseInt(str2)
    let distance = Math.abs(num1-num2)
    let diff = distance - blockrange
    if (diff > 0){
      return `${diff} blocks out of range`
    }else {
      return `within range by ${Math.abs(diff)}`
    }
  }
}
function produceTipCalculator(percent) {
  return function(fare){
    return fare * percent
  }

}
