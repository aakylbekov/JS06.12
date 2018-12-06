

$('#button').on('click', function ()
{
    $('#ul1').append(
        $('<li>').append('#field').val()).append(
        $('<button>').html('delete').addClass('btn-danger').on('click', function () {
            $(this).parents('li').remove();
             
        })
   )
})

//var el = $('<li>').html().on('click', function () {
   
//});
//el).append('<button>').append($('<p>'))