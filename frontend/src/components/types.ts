interface Home {
	label: string;
	greeting: string;
	wave: string;
	prefix: string;
	name: string;
	typeOptions: string[];
	about: {
		heading: {
			text: string;
			focus: string;
		};
		paragraphs: {
			text: string[];
			focus: string[];
		}[];
	};
	skills: {
		heading: {
			text: string[];
			focus: string;
		};
		icons: string[];
	};
}

interface CV {
	label: string;
	"btn-label": string;
}

interface Projects {
	label: string;
	heading: {
		main: {
			text: string;
			focus: string;
		};
		sub: string;
	};
	projects: {
		title: string;
		description: string;
		demoLink?: string;
		githubLink: string;
	}[];
}

interface Contact {
	label: string;
	heading: string;
	"sub-heading": string;
}

interface Footer {
	text: string[];
	heart: string;
}

export default interface Data {
	home?: Home;
	cv?: CV;
	projects?: Projects;
	contact?: Contact;
	footer?: Footer;
}
