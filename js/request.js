const TOKEN = "6012022444:AAH-CrlrXLPmfg9jf7GJk2_B1bCJpMhvIFw";
const CHAT_ID = "-1001592599340";
const URL_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;

document.getElementById('footer-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let message = `<b>Application from the site!</b>\n`;

    message += `<b>Gmail: </b> ${ this.email.value }`;

    axios.post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message,
    });
});