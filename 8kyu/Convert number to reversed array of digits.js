function digitize(n) {
    return  n.toString(10).replace(/\D/g, '0').split('').reverse().map(Number);
  }