// import { ListTag } from "./ListTag";
// import { PageTag } from "./PageTag";

class Edit {
	tag: JQuery<HTMLElement> = $(".sidebar--edit");

	changeSelectedTag = (property: string, value: any) => $(".selected").css(property, value);
	updateView = () => {
		$(".tag-name").html($(".selected").children(".preview").html());
		$(".colors__selected").css("background-color", $("#page-view > .selected").css("background-color"));
	}
}

export const EditingSidebar: Edit = new Edit();

$(".colors__input").on("change", function(e) {
	e.stopPropagation();
	EditingSidebar.changeSelectedTag("background-color", $(this).val());
	EditingSidebar.updateView();
});
