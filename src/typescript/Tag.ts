/**
 * This is a Tag class.
 * 
 * When invoked, it creates two JQuery elements.
 * @class Tag
 * @module Tag
 */
export class Tag {
	public tag: JQuery<HTMLElement>;
	public listTag: JQuery<HTMLElement>;

	/** @param {string} tagType */
	constructor(tagType: string) {
		const nodeName = tagType.toLowerCase();
		this.tag = $(`<${nodeName} class="tag-box"><div class="preview"></div></${nodeName}>`);
		this.listTag = $(`<div class="blue sidebar--list__tag"></div>`);
	}

	/**
	 * @param {JQuery.Event} event
	 * @returns {Tag}
	 */
	public select = (event: JQuery.Event): Tag => {
		event.stopPropagation();

		this.tag.addClass("selected");
		this.listTag.addClass("selected");
		return this;
	}

	/** @param {Tag} newChild */
	public addChild = (newChild: Tag) => this.tag.append(newChild.tag);

	/** @param {string} newName */
	public setName = (newName: string): void => {
		this.tag.children(".preview").html(newName);
		this.listTag.html(newName);
	}
}

/** @module removeTag */
export const removeTag = () => $(".selected").remove();
