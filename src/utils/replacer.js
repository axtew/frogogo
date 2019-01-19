export const summReplacer = summ => {
  return summ.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
};
