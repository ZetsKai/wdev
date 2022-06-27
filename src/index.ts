import "./index.sass";
import { EditingSidebar } from "./typescript/Edit"
import { ListTag } from "./typescript/ListTag";
import { PageTag } from "./typescript/PageTag";

$(function() {

	function addNewTag(tagType: string) {
		const newPageTag: PageTag = new PageTag(tagType);
		$("#page-view").append(newPageTag.tag);
		newPageTag.newName();

		const newListTag: ListTag = new ListTag("div", newPageTag);
		newListTag.tag.on("click", () => {
			newListTag.handleSelect();
			EditingSidebar.updateView();
		})
		$(".sidebar--list").append(newListTag.tag);

	}

	/**
	** A JQuery each loop that loops through "children"
	** and updates the text that shows what index number they are.
	* 
	* Get the current selected tag's nodeName
	* Get the index of that element's type of the ones that are inside "#page-view" and add "+1" to it
	* Set it's name to be equal to it's type and index number.
	* 
	* Example: the "div" number 2 inside "page-view"
	* will be named to: "DIV#2";
 	*/
	// ! - WARNING: NOT IN USE ATM!!!!
	const setElementName = (tag: JQuery<HTMLElement>, newName: string) => tag.children(".preview").html(newName);
	function updateTags(): void {
		const children: JQuery<HTMLElement> = $("#page-view").children();
	
		children.each(function() {
			const elementName = this.nodeName;
			const index = $(`#page-view ${elementName}`).index($(this)) + 1;
			setElementName($(this),`${elementName}#${index}`);
		})
	}

	$(".sidebar--tools__button").on("click", (e) => addNewTag(e.target.innerHTML));
	$($(".top__button")[3]).on("click", updateTags);
	$($(".top__button")[2]).on("click", EditingSidebar.updateView);
})
