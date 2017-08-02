const getWidth = function(cols) {
  return 100.0/cols
}

const stringifiedPercent = function(val) {
  return val + '%';
}

const stringifiedWidth = function(cols) {
  return stringifiedPercent(
    getWidth(cols)
  );
}

const Util = {
  stringifiedWidth: stringifiedWidth
};

export default Util
