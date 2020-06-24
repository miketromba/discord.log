# discord.log

### Install
```bash
npm i discord.log
```

### Usage
```js
import Discord from 'discord.log'
const discord = new Discord(/* discord webhook URL */)
```
```js
discord.log('Hello world!') // returns promise (see axios docs)
```

### Customize the bot's username
```js
discord.log({
	username: 'Mr. Bot',
	message: 'Hello world!'
})
```

### Why?
Logging stuff to discord can be a really useful way of alerting yourself about certain events.
E.g. incoming user feedback, a new purchase, errors, etc. 
Writing the same webhook post code over and over gets annoying, so this module aims to make it easy.

### How do I create a webhook?
1) Find the text channel you want to create the webhook for and click the gear icon.

![Discord Channel](https://i.imgur.com/ODnbCvn.png)

2) Click on the "Webhooks" tab and click "Create Webhook"

![Discord Channel Settings](https://i.imgur.com/DhcKjXM.png)

3) Copy the Webhook URL

![Discord Webhook](https://i.imgur.com/ahDPpqw.png)