

const TelegramBot = require('node-telegram-bot-api');
const botToken = '5884700257:AAGI-qH1V4z-lCTwe9aASW5GXdwYjnH346g';
const bot = new TelegramBot(botToken, { polling: true });
const axios = require('axios');


const myId = 5483816259;
const vikash = 5051993301;
const krishna = 1619739119;
const group = -973018906;

bot.sendMessage(group, 'Hello all')
bot.on('message', (msg) => {
    console.log({msg});
    const chatId = msg.chat.id;
    const messageText = msg.text;
    console.log({chatId});
    // Process the message and respond accordingly
    // Example: echo the received message
    

    switch (messageText.toLowerCase()) {

        case '/start':
            bot.sendMessage(chatId, `Welcome ${msg.chat.first_name} \n I am a bot.`);
            break;
    
        case 'wfh': 
                bot.sendMessage(chatId, 'Sorry wfh not allowed');
            break;
        case 'leave': 
            bot.sendMessage(chatId, 'Sorry leave not allowed');
        break;

        case 'advice': 
            advice(chatId);
        break;

        default:
            wikipediaSearch(messageText, chatId)
            break;
    }
});

// Handle callback queries from inline keyboard
bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;
    const selectedOption = query.data;
  
    // Handle the selected option
    if (selectedOption === 'option1') {
      bot.sendMessage(chatId, 'You selected Option 1');
    } else if (selectedOption === 'option2') {
      bot.sendMessage(chatId, 'You selected Option 2');
    }
});

function sendMenu(chatId) {
    const options = [
      [{ text: 'Option 1', callback_data: 'option1' }],
      [{ text: 'Option 2', callback_data: 'option2' }]
    ];
  
    const replyMarkup = {
      inline_keyboard: options
    };
  
    bot.sendMessage(chatId, 'Please select an option:', { reply_markup: replyMarkup });
}

sendMenu(myId);
// bot.sendMessage(myId, `Bot started`);




const advice = (chatId) => {

    axios.get('https://api.adviceslip.com/advice')
    .then(response => {
        console.log('Response:', response.data);
        bot.sendMessage(chatId, response.data.slip.advice);
        return response.data.slip.advice;
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
}


const wikipediaSearch = (messageText, chatId) => {
    const { convert } = require('html-to-text');

// Make a GET request to the Wikipedia Search API
axios.get('https://en.wikipedia.org/w/api.php', {
  params: {
    action: 'query',
    list: 'search',
    srsearch: messageText,
    format: 'json'
  }
})
  .then(response => {
    // Access the search results
    const searchResults = response.data.query.search;
    bot.sendMessage(chatId, convert(searchResults[0].snippet));
    bot.sendMessage(chatId, convert(searchResults[1].snippet));
  })
  .catch(error => {
    console.error('Error:', error.message);
  });

}
