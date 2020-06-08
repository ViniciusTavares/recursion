let counter = 0;

const inception = () => {
  console.log(counter);
  if (counter > 3) {
    return;
  }
  counter++
  inception();
}

inception();