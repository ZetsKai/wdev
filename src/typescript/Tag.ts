export class Tag {
	tag: JQuery<HTMLElement>;
	name!: string;

	constructor(tagType: string, classo: string) {
		this.tag = $(`<${tagType} class="${classo}"></${tagType}>`);
	}

	setName(newName: string) {
		this.name = newName
	}
	select() {
		this.tag.parent().children().removeClass("selected");
		this.tag.addClass("selected");
	}
}
