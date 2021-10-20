const { Listener } = require("discord-akairo")

class Ready extends Listener {
    constructor() {
        super('ready', {
            event: 'ready',
            emitter: 'client'
        });
    }

    exec() {
        this.client.user.setActivity('dp!help | Team Dude', { type: 'WATCHING' });
	console.log(`${this.client.user.tag} Bot is online!`);
    }
}

module.exports = Ready;
