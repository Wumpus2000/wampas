const {
  SlashCommandBuilder
} = require('@discordjs/builders');
const {
  MessageEmbed,
  MessageActionRow,
  MessageButton,
  MessageSelectMenu
} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Shows you a help menu!'),
  async execute(interaction, client) {

    const row2 = new MessageActionRow()
      .addComponents(
        new MessageButton()
        .setStyle('SECONDARY')
        .setEmoji('956032213009457202')
        .setCustomId('play'),
        new MessageButton()
        .setStyle('LINK')
        .setLabel('Website')
        .setURL('http://wampas.gg/')
        .setEmoji('957042683749208094'),
        new MessageButton()
        .setStyle('LINK')
        .setLabel('Invite')
        .setURL('https://discord.com/api/oauth2/authorize?client_id=970081902658744361&permissions=8&scope=bot%20applications.commands')
        .setEmoji('956378103603658802'),
        new MessageButton()
        .setLabel('Support')
        .setStyle('LINK')
        .setURL('https://discord.gg/CJ4HVZK2Za')
        .setEmoji('956378149875253290')
      )
    const embed = new MessageEmbed()
      .setColor('BLURPLE')
      .setAuthor({
        name: "Wampas's Help",
        iconURL: client.user.displayAvatarURL()
      })
      .setDescription("<:CircleMusic:955986717536563210> **Music**\n<:CircleBlank:955671552265965609><:CircleTrans:949786441716756500> **/arabic:** Plays arabic music / radio.\n<:CircleBlank:955671552265965609><:CircleTrans:949786441716756500> **/english:** plays english music / radio.\n<:CircleBlank:955671552265965609><:CircleLeave:957047495769337860> **/leave:** Stops and Leaves the voice channel.\n<:CircleBlank:955671552265965609><:CircleDJ:956373944313708584> **/lofi:** starts to play lofi hip hop.\n<:CircleBlank:955671552265965609><:CirclePlay:956032213009457202>  **/play:** start to play lofi / radio / relaxing / ect...\n<:CircleBlank:955671552265965609><:CircleTrans:949786441716756500> **/punjabi:** start to play punjabi / music / radio.\n<:CircleBlank:955671552265965609><:CircleTrans:949786441716756500> **/spanish** starts to play spanish music / radio.\n<:CircleBlank:955671552265965609>\n<:CirclePen:959538775317434449> **User**\n<:CircleBlank:955671552265965609><:CircleRole:949759672976547871>** /userinfo** shows about you info.\n<:CircleBlank:955671552265965609><:CircleServer:957045722778329158> **/serverinfo** shows the server info.\n<:CircleBlank:955671552265965609><:CircleSparkle:949759673291124806>** /avtart** displays your / user avatar.\n<:CircleBlank:955671552265965609><:bel:970469663584714832>** /reminder**  reminds you of what ever you put.\n<:CircleBlank:955671552265965609>\n<:question_mark:942191277963882527> **Info**\n<:CircleBlank:955671552265965609><:CircleTranscript:957402112122302524> **/help:** help center.\n<:CircleBlank:955671552265965609><:CircleBot:956378103603658802> **/invite:** shows the bot Invite link, to Invite to your server.\n<:CircleBlank:955671552265965609><:CircleSupport:956378149875253290> **/support:** if you need help / report-bugs, join our support server.\n<:CircleBlank:955671552265965609><:CircleThumbsUp:949765559703203841> **/vote:** shows wampas vote links.")

      .setTimestamp()
    interaction.reply({
      embeds: [embed],
      components: [row2]
    });

  }

}
