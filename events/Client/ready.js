module.exports = async (client) => {
    console.log(`[LOGGED INTO CLIENT] : `.green, `Logged Into `.white + `${client.user.tag}`.green)
    console.log(`[COPYRIGHT] : `.green, `Tokyo Studio`.blue, `Slash Command Handler By @Ahmed1Dev`.red)
   client.user.setActivity('@Ahmed1Dev | Github', {type: 'PLAYING'});
    client.user.setPresence({
        status: 'online',
        activity: {
            name: '@Ahmed1Dev | Github',
            type: 'PLAYING'
        }
    });
}