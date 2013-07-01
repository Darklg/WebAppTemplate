window.addEvent('domready', function() {
    var body = $(document.body);

    // Menu slide
    $$('.toggle-menu').addEvent('click', function(e) {
        e.preventDefault();
        body.toggleClass('is-main-menu-opened');
    });

    // iOS fixes
    setTimeout(function() {
        window.scrollTo(0, 1);
    }, 50);
    body.setStyles({
        '-webkit-text-size-adjust': 'none'
    });
});