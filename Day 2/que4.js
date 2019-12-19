function createSlideShow()
{
    console.log("Inside interval function");
    var $active=$('#slider IMG.ACTIVE');
    console.log($active)
    var $next=$active.next();

    $next.addClass('active');
    $active.removeClass('active');
}
$(function() {
    setInterval( "createSlideShow()", 5000 );
});
// $(document).ready(function() {
//     console.log("Inside function");
//     setInterval("createSlideShow()",5000);
//   });