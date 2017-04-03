let counter = 0;

function collatz(num) { 
  
  if (num == 1) {
    console.log(counter);
    return;
  } else if (num % 2 == 0) {
    counter++;
    collatz(num/2);
  } else {
    counter++;
    collatz(3*num+1);
  }  
}

collatz(71);