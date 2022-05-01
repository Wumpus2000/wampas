const {
  MessageEmbed
} = require('discord.js');

module.exports = {
  name: 'interactionCreate',
  async execute(interaction, client, player) {
    
    // if the command is ran in a DM, ignore it
    // you can make it send nothing but that will create "interaction failed" error message
    if (!interaction.inGuild()) return interaction.reply({content: "Nice try :smirk:", ephemeral: true});

    // button response in the help menu
    if (interaction.isButton()) {
      if (interaction.customId === 'play') {
        client.func.play(interaction, Date.now() % 2 === 0 ? process.env.LOFI_1 : process.env.LOFI_2, 'Lo-fi Beats')
      } else return;
    }

    // select menu response
    if (interaction.isSelectMenu) {

      if (interaction.customId === 'select') {
        let desc
        switch (interaction.values[0]) {
          case 'play':
            desc = ['Starts to play Lo-fi radio station!']
            break;
          case 'forceplay':
            desc = ['Allows you to force play the given radio station', 'station', 'The name of the station to play', false]
            break;
          case 'stop':
            desc = ['Stops the current Voice session']
            break;
          case 'lofi':
            desc = ['Starts to play lofi hip hop!']
            break;
          case 'english':
            desc = ['Starts to play english music / radio!']
            break;
          case 'arabic ':
            desc = ['Starts to play arabic music / radio!']
            break;
          case 'punjabi':
            desc = ['Starts to play punjabi music / radio!']
            break;
          case 'spanish':
            desc = ['Starts to play spanish music / radio!']
            break;
        }
        const embed = new MessageEmbed()
          .setColor('BLURPLE')
          .setAuthor({
            name: "Wampas's Help Menu",
            iconURL: client.user.displayAvatarURL()
          })
          .setTitle(`/${interaction.values[0]}`)
          .setDescription(`${desc[0]}\n\n**Options**\n${desc.length == 1 ? "*Does not contain any options*" : `\`${desc[1]}\` - ${desc[2]} - ${desc[3] ? "Required" : "Optional"}`}`)
          .setFooter({
            text: 'Wampas',
            iconURL: client.user.displayAvatarURL()
          })
          .setTimestamp()
        interaction.reply({
          embeds: [embed],
          ephemeral: true
        })
      }

    }

    // if not a slash command, return
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    // execution and error handling
    try {
      await command.execute(interaction, client, player);
    } catch (error) {
      console.error(error);
      await interaction.reply({
        content: 'There was an error while executing this command!',
        ephemeral: true
      });
    }
  },
};