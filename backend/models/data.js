const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
	{
		home: {
			label: String,
			greeting: String,
			wave: String,
			prefix: String,
			name: String,
			typeOptions: [String],
			about: {
				heading: {
					text: String,
					focus: String,
				},
				paragraphs: [
					{
						text: [String],
						focus: [String],
					},
					{
						text: [String],
						focus: [String],
					},
				],
			},
			skills: {
				heading: {
					text: [String],
					focus: String,
				},
				icons: [String],
			},
		},
		cv: {
			label: String,
			btnLabel: String,
		},
		projects: {
			label: String,
			heading: {
				main: {
					text: String,
					focus: String,
				},
				sub: String,
			},
			projects: [
				{
					title: String,
					description: String,
					demoLink: String,
					githubLink: String,
				},
				{
					title: String,
					description: String,
					demoLink: String,
					githubLink: String,
				},
				{
					title: String,
					description: String,
					demoLink: String,
					githubLink: String,
				},
				{
					title: String,
					description: String,
					demoLink: String,
					githubLink: String,
				},
			],
		},
		contact: {
			label: String,
			heading: String,
			"sub-heading": String,
		},
		footer: {
			text: [String],
			heart: String,
		},
	},
	{ collection: "data" }
);

module.exports = mongoose.model("Data", dataSchema);
