$(".target").on("click", function () {
        let $button = $(this);
        let oldVal = parseInt($button.parent().find("input").val());
        let newVal = 0;

        if ($button.text() == '+') {
            newVal = oldVal + 1;
        }
        else {
            if (oldVal > 0) {
                newVal = oldVal - 1;
            }
            else {
                newVal = 0;
            }
        }

        $button.parent().find("input").val(newVal);
    });
$('.addToCart').on("click", function (event) {
    if ($(this).prev().prev().prev().find("input").val() == '0') {
        event.preventDefault();
        $(this).next().next().next().html("please select at least one book");
        $(this).next().next().next().css("display", "block");
        $(this).next().next().next().delay(3000).slideUp();
    }

    if ($(this).prev().val() == "0") {
        event.preventDefault();
        $(this).next().next().next().html("Please log in order to purchase");
        $(this).next().next().next().css("display", "block");
        $(this).next().next().next().delay(3000).slideUp();
    }
});

$(".flashMessage").delay(3000).slideUp();
