module.exports = async (client, interaction) => {
	
	if (!interaction.isCommand()) return;
	
	let args = interaction.options.data;

	let cmd = interaction.commandName.toLowerCase();

	let commandfile = client.commandes.get(cmd) || client.commandes.get(client.aliases.get(cmd));
	if (commandfile) {
		commandfile.run(client, interaction, args, cmd);
	}

};