class CSSclass {
	name: string;
	properties: Map<string, string> = new Map();

	constructor(name: string) {
		this.name = name;
	}

	setProperty = (key: string, value: string) => this.properties.set(key, value);
}

function compile(cssClasses: CSSclass[]): string {
	// cssClasses.forEach((value, key) => tito += `<br />&emsp;${key}: ${value};`);
	let block: string = ``;

	cssClasses.forEach(cssClass => {
		block += `${cssClass.name} { `;
		cssClass.properties.forEach((value, key) => block += `${key}: ${value}; `);
		block += "}<br />";
	})

	// $("#page-view").append(`<p>${block}</p>`);
	return block;
}

const one: CSSclass = new CSSclass("#water")
one.setProperty("color", "white");
one.setProperty("height", "100px");

const two: CSSclass = new CSSclass("#canata");
two.setProperty("color", "red");
two.setProperty("height", "200px");

const ene = [one, two];

export const pp: string = compile(ene);

// const cssClasses: Map<string, string> = new Map([['display', 'flex'], ['height', '100px']]);
