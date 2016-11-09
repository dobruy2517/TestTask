var casper = require('casper').create({
    verbose: true,
    logLevel: "debug"
});

casper.start('https://www.facebook.com/');
casper.then(function () {
    this.capture('Image/MainPage.png');
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
});

casper.thenClick('#u_0_l');

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
});

casper.run(function () {
    this.echo('"End of test"', 'INFO').exit();
});