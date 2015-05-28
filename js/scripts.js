function romanNum(number) {
  var numberString = "";

  var input = number.split("").reverse();

/*
  if (input.length < 2) {
    return ones[number];
  } else if (input.length < 3){
    numberString.push(ones[input[0]])
    numberString.push(ones[input[1]])
    return numberString;
  }
 */


  var ones = {"0" : "", "1" : "I", "2" : "II", "3" : "III", "4" : "IV", "5" : "V", "6" : "VI", "7" : "VII", "8" : "VIII", "9" : "IX"};

  var tens = {"1" : "X", "2" :"XX", "3" : "XXX", "4" : "XL", "5" : "L", "6" :
  "LX", "7" : "LXX", "8" : "LXXX", "9" : "XC"};

  var hundreds = {"1" : "C", "2" : "CC", "3" : "CCC", "4" : "CD", "5" : "D", "6" :
   "DC", "7" : "DCC", "8" : "DCCC", "9" : "CM"};

  var thousands = {"1" : "M", "2" : "MM", "3" : "MMM"}

  input.forEach(function(number, index) {
    if (index === 0) {
      numberString = ones[number];
    }
    else if (index === 1) {
      numberString = tens[number] + numberString;
    }
    else if (index === 2) {
      numberString = hundreds[number] + numberString;
    }
    else if (index === 3) {
      numberString = thousands[number] + numberString;
      if (number > 3) {
        numberString = "is not a roman numeral"
      };
    }
    //debugger
  })
  return numberString;
}
