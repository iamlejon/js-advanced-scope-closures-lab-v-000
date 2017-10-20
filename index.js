function produceDrivingRange(blockRange){
    return function (a, b) {
      let start = a.replace(/[^0-9]+/ig,"");
      let end =  b.replace(/[^0-9]+/ig,"");
      let distance = Math.abs(end - start);
      let difference = blockRange - distance;

      if(difference > 0 ){
        return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}


function produceTipCalculator(tip) {
  return function (amount) {
    return tip * amount
  }
}
