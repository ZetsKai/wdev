import { Tag } from "./Tag";

interface EditInterface {
	selectedClass: Tag | undefined;
	changeTag(property: string, value: any): void;
	updateView(classo: Tag): void;
}

class EditingSidebar implements EditInterface {
	selectedClass: Tag | undefined;

	changeTag = (property: string, value: any): void => {
		if (this.selectedClass == undefined) return;
		this.selectedClass.tag.css(property, value);
	}
	updateView = (): void => {
		let name: string;
		let background: string;

		if (this.selectedClass !== undefined) {
			name = this.selectedClass.tag.children(".preview").html();
			background = $("#page-view .selected").css("background-color");
		}
		else {
			name = "None";
			background = "transparent";
		}

		$(".tag-name").val(name);
		$(".colors__selected").css("background-color", background);
	}
	setClass = (classo: Tag | undefined = undefined) => this.selectedClass = classo;
}

export const Edit: EditingSidebar = new EditingSidebar();

$(".colors__input").on("change", function(e) {
	e.stopPropagation();
	Edit.changeTag("background-color", $(this).val());
	Edit.updateView();
});
$(".tag-name").on("keydown", function(e: JQuery.Event) {
	if (e.key !== "Enter") return
	const newName: any = $(this).val();
	Edit.selectedClass?.setName(newName);
});
