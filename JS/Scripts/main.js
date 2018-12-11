/*
Практика:
1. Сделать кнопку, по нажатию на которую, аякс запросом загружается форма (отдельный файл).
    В начале всех аякс запросов на странице должна появлятся надпись "загрузка..."
    Учесть, что если отправлено сразу два запроса, плашка должна быть одна.
    После загрузки (с ошибкой или без), надпись "загрузка..." должна удаляться или скрываться.
    В загруженной форме должны быть поля: Имя, Возраст, Дата рождения, Пол
        Имя - текстовое поле от 2 до 15 символов
        Возраст - число от 1 до 99
        Дата рождения - формат d.m.Y (11.12.2018)
        Пол - select с двумя пунктами муж, жен
    На отправку формы сделать проверку введенных данных, $('form').on('submit', fun...)
    Если форма заполнена не верно, должно выходить сообщение "Данные не верны",
    если форма заполнена верно, то должен отправляться аякс запрос с данными формы.
    Во время отправки именно формы на странице должна появиться надпись "отправка данных"
    (вместо надписи "загрузка")
    После того как пришел ответ, очистить поля формы.
    При изменение(событие change) поля Имя на сервер должен отправляться запрос с этим именем.

*/


$('#load').on('click', function () {
    // $('#load').load('data.json')
    //$('#load').load('data.json', {name: ''})

    // $('#load').load('data.json', {name: ''}, function (data) {
    //     $('body').html(data)
    // }, 'json')

    $('#content').load('form.html', 'html')
    //xml, json, script, или html

    // $.ajax({
    //     type: 'GET',
    //     data: "name=John&location=Bosto&t=" + (new Date).getTime(),
    //     dataType: 'html',
    //     url: 'form.html',
    //     // beforeSend: function () {
    //     //     //
    //     // }, 
    //     error: function () {
    //         //
    //     }, 
    //     dataFilter: function (data) {
    //         // обработка данных data
    //         return data;
    //     }, 
    //     success: function (data) {
    //         $('#content').html(data)
    //     }
    // })

    // $.ajax({
    //     url: url,
    //     dataType: 'json',
    //     data: data,
    //     success: callback
    //   });
    // $.getJSON('form.html', {data: 1, data2: 2}, function (data) {
    //     // callback
    // });

    //  $.ajax({
    //     url: url,
    //     dataType: 'script',
    //     data: data,
    //     success: callback
    //   });
    // $.getScript('form.js', {data: 1, data2: 2}, function () {
    //     // callback
    // });
})

// $.ajaxSetup({
//     timeout: 1000,
//     beforeSend: function () {
//         $('body').append(
//             $('<div>').addClass('ajax-load').html('Загрузка...')
//         )
//     },
//     complete: function () {
//         setTimeout(function () {
//             $('.ajax-load').remove()
//         }, 1000)
//     },
//     statusCode: {
//         403: function () {
//             alert('access denied')
//         },
//         404: function() {
//           alert( "page not found" );
//         }
//     }
// })

$(document).ajaxStart(function () {
    $('body').append(
        $('<div>').addClass('ajax-load').html('Загрузка 2...')
    )
})
$(document).ajaxError(function () { // timeout
    $('body').append(
        $('<div>').addClass('ajax-load').html('Приозошла ошибка...')
    )
})
$(document).ajaxSend(function () {
    //
});
$(document).ajaxSuccess(function () {
    //
});
$(document).ajaxComplete(function () {
    //
});
$(document).ajaxStop(function () {
    //
});

$(document).ajaxComplete(function () { // timeout
    setTimeout(function () {
        $('.ajax-load').remove()
    }, 1000)    
})


$('#content').on('submit', '#button', function (e) {
    e.preventDefault();
    
    $.get('form.html', {id: 1}, function (data) {
        $('#content').html( data )
    })

    $.get(
        'form.html', 
        $.param([
            { name: "first", value: "Rick" },
            { name: "last", value: "Astley" },
            { name: "job", value: "Rock Star" }
        ])
      )
    $.get({
        url: 'form.html',
        beforeSend: function () {
            //
        }
    })

    $.get('form.html', function (data) {
        $('#content').html( data )
    }).done(function (data) {
        $('#content').html( data )
    }).fail(function () {
        $('body').append(
            $('<div>').addClass('ajax-load').html('Приозошла ошибка...')
        )
    }).always(function () {
        // Если произошла ошибка
    })

    $.post('form.html', $('form').serialize(), function (data) {
        //
    })

    $.post('form.html', $('form').serializeArray(), function (data) {
        //
    })

    // console.log ( $('form').serialize() )
    // console.log ( $('form').serializeArray() )

    $.post('form.html', {field: 'value', field2: 'value2'}, function (data) {
        //
    })

    return false;
})