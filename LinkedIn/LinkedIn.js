/**
 * Created by ihor on 01.11.16.
 */
var casper = require('casper').create();

casper.start('https://www.linkedin.com/uas/login', function() {
    this.fillLabels('input#session_key-login', {Email: 'ihor.dobrovolskyi@gmail.com'}, true);
    casper.capture('ScreenShots/loginPage.png');
    this.echo('Load login page is successfully', 'INFO');
});

casper.then( function() {

    this.echo("E-mail is ok",'INFO');
    casper.capture('ScreenShots/loginPageWithEmail.png');
});

casper.then(function() {
    this.fillLabels('#login-password', {password: 'dobrya4ek' }, true);
});

casper.then(function() {
    this.echo('password is ok');
});


casper.run();