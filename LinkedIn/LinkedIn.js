var casper = require('casper').create({
    verbose: true,
    logLevel: "debug"
});

casper.options.timeout = 8000;
casper.start('https://www.linkedin.com/uas/login', function () {
    this.waitForSelector('#control_gen_2');
}).wait(5000);

casper.then(function () {
    this.waitForSelector('#control_gen_2');
    console.log('"Wait for log in form"', 'INFO');
});

casper.then(function () {
    this.capture('ScreenShots/loginPageWithoutEmail.png');

});


casper.then(function () {
    this.fillSelectors('#control_gen_2', {
        '#session_key-login': 'agat91@i.ua',
        '#session_password-login': 'dobrya4ek'
    }, true);
    this.capture('ScreenShots/111.png')
});

casper.thenClick('#btn-primary').wait(5000);
casper.then(function () {
    this.capture('ScreenShots/222.png');
});

casper.then(function(){
    this.evaluate(function () {
       for (var i=0; i<$('[class="connect add-btn block"]').length(); i++){
           $('[class="connect add-btn block"]')[i].click();
           this.captere('ScreenShots/4444.png');
       }
    });

});

casper.run(function () {
    this.echo('"End of test"', 'INFO').exit();
});