$('#divContainer').on({
   mouseover: function(){
       $(this).css({
           'cursor': 'pointer',
           'border-color': 'red'
       });
   }, 
    
    mouseout: function(){
       $(this).css({
           'cursor': 'default',
           'border-color': 'gray'
       });
    },
    
    click: function () {
        var imgageUrl = $(this).attr('src');
        var effect = $('#selectImgRffect').val();
        var duration = $('#selectImgDuration').val() * 1000;
        if (effect == 'fade') {
            $('#Glavna').fadeOut(duration, function () {
                $(this).attr('src', imgageUrl);
            }).fadeIn(duration)

        } else {
            $('#Glavna').slideUp(duration, function () {
                $(this).attr('src', imgageUrl);
            }).slideDown(duration)
        }

    }
}, 'img');

/*Smanji i povecaj*/

var glvnaSlika = $('#Glavna');
var height = parseInt(glvnaSlika.attr('height')); 
var width = parseInt(glvnaSlika.attr('width'));

$('#btnEnlarge').click(function(){
    height += 100;
    width += 100;
    glvnaSlika.animate({
        'height': height,
        'width': width
    });
})

$('#btnShrink').click(function(){
    height -= 100;
    width -= 100;
    glvnaSlika.animate({
        'height': height,
        'width': width
    });
})