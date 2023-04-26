  let n = 11;
  let count = 0;
  for (let i = 1; i < n; i++) {
    if (n % i == 0) {
      count++;
    }
  }
  if (count == 2) {                          //resolved
    console.log('it is  a prime number');
  } else {
    print('it is not a prime number');          //resolved
  }
}