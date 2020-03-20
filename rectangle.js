function roundFractional(x, n) {
    return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
}
$(function(){
    var $width = $('#width'),
        $height = $('#height'),
        $btnCal = $('#calculate'),
        $perimeter = $('#perimeter'),
        $area = $('#area'),
        $widthValidate = $('#width-validate-message'),
        $heightValidate = $('#height-validate-message'),
        isPassValidate = false;
    
    $width.focusout(function(){
        var result = validate($width.val());
        isPassValidate = result.isOK;
        if(!result.isOK){
            $widthValidate.html('宽度' + result.reason);
            $width.select(); 
        }
    });

    $height.focusout(function(){
        var result = validate($height.val());
        isPassValidate = result.isOK;
        if(!result.isOK){
            $heightValidate.html('高度' + result.reason);
            $height.select(); 
        }
    });
    /*calc button click event*/
    $btnCal.click(function(){
        
        if(!isPassValidate){
            return;
        }
        //get value
        var w = $width.val(),       
            h = $height.val();
        var r = new Rectangle(w, h);
        $perimeter.val(r.perimeter());
        $area.val(r.area());
    })
});