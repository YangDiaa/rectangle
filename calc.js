/* exported Rectangle */
function roundFractional(x, n) {
    return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
}
function Rectangle(width, height) {
    var w = Number(width),
        h = Number(height);
  
    this.area = function() {
      return roundFractional(w * h, 10);
    };
  
    this.perimeter = function() {
      return roundFractional(w*2 + h*2, 4);;
    };
}