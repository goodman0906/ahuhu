function kiem_tra_snt(n) {
  var number = true;

  if (n < 2) {
    number = false;
  } else if (n == 2) {
    number = true;
  } else if (n % 2 == 0) {
    number = false;
  } else {
    for (var i = 3; i < n - 1; i += 2) {
      if (n % i == 0) {
        number = false;
        break;
      }
    }
  }

 