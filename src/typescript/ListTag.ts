import { Tag } from "./Tag"
import { PageTag } from "./PageTag";

export class ListTag extends Tag {
	PageTagClass: PageTag;

	constructor(tagName: string, PageTagClass: PageTag) {
		super(tagName, "sidebar--list__tag");
		this.PageTagClass = PageTagClass;
		this.newName(PageTagClass.name);

		// this.tag.on("click", this.handleSelect);
	}

	newName = (newName: string = `${this.tag[0].nodeName}#${this.tag.index(`#page-view ${this.tag[0].nodeName}`)+1}`) => {
		super.setName(newName)
		this.tag.html(this.name);
	}

	handleSelect = () => {
		super.select();
		this.PageTagClass.select();
	}
}
