$(".map__list-item").click(function(){
    $(this).toggleClass('selected');
});


//как только загрузится апи выполняется функция init
ymaps.ready(init);

//создание массива объектов меток
var placemarks = [
    {
       latitube: 54.710160,
       longitube: 20.510133,
       hintContent: "Ты навелся на метку",
       balloonContent: "Сюда пишем подробно описание при клике",
       iconImageHref: './img_maps/redMap.png',
       options: {color: 'red'}
    },
    {
        latitube: 54.720160,
        longitube: 20.510133,
        hintContent: "Ты навелся на метку",
        balloonContent: "Сюда пишем подробно описание при клике",
        iconImageHref: './img_maps/redMap.png',
        options: {color: 'red'}
     },
     {
        latitube: 54.730160,
        longitube: 20.510133,
        hintContent: "Ты навелся на метку",
        balloonContent: "Сюда пишем подробно описание при клике",
        iconImageHref: './img_maps/redMap.png',
        options: {color: 'red'}
     },
     {
        latitube: 54.740160,
        longitube: 20.510133,
        hintContent: "Ты навелся на метку",
        balloonContent: "Сюда пишем подробно описание при клике",
        iconImageHref: './img_maps/bluedarkestMap.png',
        options: {color: 'bluedarkest'}
     },
     {
        latitube: 54.750160,
        longitube: 20.510133,
        hintContent: "Ты навелся на метку",
        balloonContent: "Сюда пишем подробно описание при клике",
        iconImageHref: './img_maps/bluedarkestMap.png',
        options: {color: 'bluedarkest'}
     },
     {
        latitube: 54.760160,
        longitube: 20.510133,
        hintContent: "Ты навелся на метку",
        balloonContent: "Сюда пишем подробно описание при клике",
        iconImageHref: './img_maps/blackMap.png',
        options: {color: 'black'}
     }
];

//функция инициализации карты
function init() {
    var map = new ymaps.Map('map', {
        //стартовые координаты
        center: [54.710160, 20.510133], 
        //зум карты
        zoom: 10
    });


    placemarks.forEach(function(obj){
        var placemark = new ymaps.Placemark([obj.latitube, obj.longitube],{
            //свойство метки при наведении
            hintContent: obj.hintContent,
            //свойство при нажатии на метку (можно фигануть страничку)
            balloonContent: obj.balloonContent
        },
        {
            //что меняем
            iconLayout: 'default#image',
            //на что меняем
            iconImageHref: obj.iconImageHref,
            //размер иконки
            iconImageSize: [20, 20]
        }); 
        //инициализация метки
    map.geoObjects.add(placemark);
    });

    
}




