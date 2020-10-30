import 'jquery'

var $range = $(".js-range-slider"),
    $inputFrom = $(".js-input-from"),
    $inputTo = $(".js-input-to"),
    instance,
    min = 500,
    max = 15000,
    from = 0,
    to = 0;

$range.ionRangeSlider({
	skin: "round",
    type: "double",
    min: min,
    max: max,
    from: 5000,
    to: 10000,
    prettify_enabled: true,
    prettify_separator: " ",
    decorate_both: true,
    hide_min_max: true,
    hide_from_to: true,
    extra_classes: 'my-class',
    onStart: updateInputs,
    onChange: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs (data) {
    from = data.from + ' ₽';
    to = data.to + ' ₽';

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);

 //$priceRange.val(`${new Intl.NumberFormat('ru-RU').format(from)}₽ - ${new Intl.NumberFormat('ru-RU').format(to)}₽`)
}

$inputFrom.on("input", function () {
    var val = $(this).prop("value");

    // validate
    if (val < min) {
        val = min;
    } else if (val > to) {
        val = to;
    }

    instance.update({
        from: val
    });
});

$inputTo.on("input", function () {
    var val = $(this).prop("value");

    // validate
    if (val < from) {
        val = from;
    } else if (val > max) {
        val = max;
    }

    instance.update({
        to: val
    });
});


// стилизация согласно макету
const myClassSlider = document.getElementsByClassName('my-class')

Array.from(myClassSlider).forEach((element) => {

    Array.from(element.children).forEach((child) => {

        if(child.className == 'irs-line'){
            child.firstElementChild.classList.add('line-all')
        }

        if(child.className === 'irs-handle from'){
            child.classList.add('left-toddler')
        }

        if(child.className === 'irs-handle to type_last'){
            child.classList.add('right-toddler')
        }

        if(child.className === 'irs-bar'){
            child.classList.add('toddler')
        }
    })
})

