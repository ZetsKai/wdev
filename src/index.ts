import "./index.sass";
import { Tag, removeTag } from "./typescript/Tag";
import { Edit } from "./typescript/Edit";
import { pp } from "./typescript/CSSCompile";

let selected: Tag | undefined;

function deselect(e: JQuery.Event): void {
	e.stopPropagation();
	if (selected == undefined) return;

	$(".selected").removeClass("selected");
	selected = undefined;
	Edit.setClass();
	Edit.updateView();
}

$(function() {

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
	// function updateTags(): void {
	// 	const children: JQuery<HTMLElement> = $("#page-view").children();
	
	// 	children.each(function() {
	// 		const elementName = this.nodeName;
	// 		const index = $(`#page-view ${elementName}`).index($(this)) + 1;
	// 		$(this).children(".preview").html(`${elementName}#${index}`)
	// 	})
	// }

	function addNewtag(tagType: string): void {
		const newTag: Tag = new Tag(tagType);
		const nodeName: string = tagType.toLowerCase();

		if (selected !== undefined) {
			selected.addChild(newTag)
			newTag.setName(`${nodeName}#${selected.tag.children(`${nodeName}.tag-box`).length}`);
		}
		else {
			$("#page-view").append(newTag.tag);
			newTag.setName(`${nodeName}#${$("#page-view").children(nodeName).length}`);
		}

		function handleSelect(e: JQuery.Event): void {
			deselect(e);
			selected = newTag.select(e);
			Edit.setClass(selected);
			Edit.updateView();
		}

		$(".sidebar--list").append(newTag.listTag);
		newTag.tag.children(".preview").on("click",handleSelect);
		newTag.listTag.on("click", handleSelect);
	}

	$(".sidebar--list").on("click", deselect);
	$(".sidebar--tools__button").on("click", (e) => addNewtag(e.target.innerHTML));
	$($(".top__button")[2]).on("click", () => $(".css-property"))
	// $($(".top__button")[2]).on("click", (e) => );
		// removeTag();
		// deselect(e);
	// });
});
