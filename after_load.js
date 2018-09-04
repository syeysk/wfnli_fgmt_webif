var cp = ColorPicker(
    document.getElementById('slide'),
    document.getElementById('picker'),
                     function(hex, hsv, rgb) {var input = document.getElementById('managing_btn_color'); input.value = hex; set_color(input);}
);

document.getElementById('managing_btn_turn').addEventListener('click', function(e) {
    var input = e.target;
    sendform(input, 'turn', {data:{
        turn:input.dataset.value=='0'?'1':'0',
    },func_success: function(res, input) {
        input.dataset.value=input.dataset.value=='0'?'1':'0';
    }, arg_func_success:input});
});

document.getElementById('managing_btn_color').addEventListener('change', function(e) {
    var input = e.target;
    set_color(input);
});

document.getElementById('managing_btn_brightness').addEventListener('change', function(e) {
    var input = e.target;
    console.log(input.value);
    sendform(input, 'set_brightness', {data:{
        brightness:input.value,
    },func_success: function(res, input) {
        input.dataset.value = res.data.brightness;
    }, arg_func_success:input});
});

var cs = new ContentShower({
    navpanel: document.querySelector('.navpanel'),
    content_prefix: 'content_',
    content_active: 'managing',
    func_after_show: update_data
});

update_data('all', true);