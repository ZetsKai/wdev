$(function () {
class Tag {
    tag;
    listTag;
    constructor(tagType) {
        const nodeName = tagType.toLowerCase();
        this.tag = $(`<${nodeName} class="tag-box"><div class="preview"></div></${nodeName}>`);
        this.listTag = $(`<div class="blue sidebar--list__tag"></div>`);
    }
    select = (event) => {
        event.stopPropagation();
        this.tag.addClass("selected");
        this.listTag.addClass("selected");
        return this;
    };
    addChild = (newChild) => this.tag.append(newChild.tag);
    setName = (newName) => {
        this.tag.children(".preview").html(newName);
        this.listTag.html(newName);
    };
}

class EditingSidebar {
    selectedClass;
    changeTag = (property, value) => {
        if (this.selectedClass == undefined)
            return;
        this.selectedClass.tag.css(property, value);
    };
    updateView = () => {
        let name;
        let background;
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
    };
    setClass = (classo = undefined) => this.selectedClass = classo;
}
const Edit = new EditingSidebar();
$(".colors__input").on("change", function (e) {
    e.stopPropagation();
    Edit.changeTag("background-color", $(this).val());
    Edit.updateView();
});
$(".tag-name").on("keydown", function (e) {
    if (e.key !== "Enter")
        return;
    const newName = $(this).val();
    Edit.selectedClass?.setName(newName);
});

let selected;
function deselect(e) {
    e.stopPropagation();
    if (selected == undefined)
        return;
    $(".selected").removeClass("selected");
    selected = undefined;
    Edit.setClass();
    Edit.updateView();
}
    function addNewtag(tagType) {
        const newTag = new Tag(tagType);
        const nodeName = tagType.toLowerCase();
        if (selected !== undefined) {
            selected.addChild(newTag);
            newTag.setName(`${nodeName}#${selected.tag.children(`${nodeName}.tag-box`).length}`);
        }
        else {
            $("#page-view").append(newTag.tag);
            newTag.setName(`${nodeName}#${$("#page-view").children(nodeName).length}`);
        }
        function handleSelect(e) {
            deselect(e);
            selected = newTag.select(e);
            Edit.setClass(selected);
            Edit.updateView();
        }
        $(".sidebar--list").append(newTag.listTag);
        newTag.tag.children(".preview").on("click", handleSelect);
        newTag.listTag.on("click", handleSelect);
    }
    $(".sidebar--list").on("click", deselect);
    $(".sidebar--tools__button").on("click", (e) => addNewtag(e.target.innerHTML));
    $($(".top__button")[2]).on("click", () => $(".css-property"));
});
//# sourceMappingURL=index.bundle.js.map
