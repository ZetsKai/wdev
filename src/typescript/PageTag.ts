import { Tag } from "./Tag"

export class PageTag extends Tag {
	constructor(tagType: string) {
		super(tagType, "tag-box");
		this.tag.append(`<div class="blue preview"></div>`);
		this.newName();
	}

	newName = (newName: string = `${this.tag[0].nodeName}#${this.tag.index(`#page-view > ${this.tag[0].nodeName}`)+1}`) => {
		super.setName(newName)
		this.tag.children(".preview").html(this.name);
	}
}
