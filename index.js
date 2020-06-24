const axios = require('axios')

module.exports = class Discord {
    constructor(webhook){
        if(!webhook) throw new Error('Must supply webhook URL as first parameter when constructing Discord instance.')
        this.webhook = webhook
    }

    async log(messageOrOptions){
        if(typeof messageOrOptions == 'string'){
            return this.send({
                username: 'discord.log',
                content: messageOrOptions
            })
        } else if(typeof messageOrOptions == 'object'){
            let options = messageOrOptions
            return this.send({
                username: options.username,
                content: options.message
            })
        } else {
            throw new Error('discord.log: The first argument to discord.log must be a string or an options object.')
        }
    }

    async send(options){
        return axios.post(options.webhook || this.webhook, {
            username: options.username,
			content: options.content
		})
    }
}