const { Command } = require('discord-akairo');

class Help extends Command {
    constructor() {
        super('help', {
            aliases: ['help']
        });
    }

    exec(message) {

        message.reply('Hope you like this')

    }
}
