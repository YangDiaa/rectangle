function roundFractional(x, n) {
    return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
}
$(function(){
    var $width = $('#width'),
        $height = $('#height'),
        $btnCal = $('#calculate'),
        $perimeter = $('#perimeter'),
        $area = $('#area');
    /*calc button click event*/
    $btnCal.click(function(){
        //get value
        var w = Number($width.val()),
            h = Number($height.val());
        //calculate
        var p = roundFractional(w*2 + h*2, 4);
            a = roundFractional(w * h, 10);
        //output
        $perimeter.val(p);
        $area.val(a);
    })
});