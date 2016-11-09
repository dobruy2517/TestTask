var casper = require('casper').create({
    verbose: true,
    logLevel: "debug"
});

casper.start('https://www.facebook.com/');
casper.then(function () {
    this.capture('Image/MainPage.png');
    this.echo('Go to URL: "https://www.facebook.com/"', 'INFO')
});

casper.then(function () {
    this.waitForSelector('#login_form');
});

casper.then(function () {
    this.fillSelectors('#login_form', {
        '#email': 'test_task@i.ua',
        '#pass': 'p@$$word'
    }, true);
    this.capture('Image/2232.png');
    this.echo('Input email and password to login form', 'INFO')
});

casper.thenClick('#u_0_l');

casper.then(function () {
    this.echo('Click "Log In" button', 'INFO')
})

casper.then(function () {
    this.capture('Image/UserPage.png');
});

casper.then(function () {
    this.evaluate(function () {
        for (var i = 0; i < $('[aria-label="Добавить в друзья"]').length(); i++) {
            $('[aria-label="Добавить в друзья"]')[i].click();
        }
    })
    this.capture('Image/ClickOnButtons.png');
    this.echo('Click all "Add to friend" buttons', 'INFO')
});

casper.run(function () {
    this.echo('"End of test"', 'INFO').exit();
});