$(document).ready(function(){
    $('#attending').click(function() {
        if ($(this).is(':checked')) {
            $('#attending-form').slideDown();
        } else {
            $('#attending-form').slideUp();
        }
    });

    $('#not-attending').click(function() {
        if ($(this).is(':checked')) {
            $('#attending-form').slideUp();
        } else {
            $('#attending-form').slideDown();
        }
    });

    $('#bringing-a-plus-one').click(function() {
        if ($(this).is(':checked')) {
            $('#plus-one-form').slideDown();
            $('#plus-one-full-name').attr('required', true);
        } else {
            $('#plus-one-form').slideUp();
            $('#plus-one-full-name').removeAttr('required');
        }
    });

    $('#bringing-children').click(function() {
        if ($(this).is(':checked')) {
            $('#children-form').slideDown();
            $('#children-full-names').attr('required', true);
        } else {
            $('#children-form').slideUp();
            $('#children-full-names').removeAttr('required');
        }
    });

    $('reset-rsvp-form').click(function() {
        $('#attending-form').slideUp();
        $('#plus-one-form').slideUp();
        $('#children-form').slideUp();
        $('#plus-one-full-name').removeAttr('required');
        $('#children-full-names').removeAttr('required');
    });
});
