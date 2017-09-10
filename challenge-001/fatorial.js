const firstFactorial = (num) => {
  if (num === 1)
    return num;

  return num * firstFactorial(num - 1);
}
export default firstFactorial
