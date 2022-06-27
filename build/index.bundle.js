class Edit {
    tag = $(".sidebar--edit");
    changeSelectedTag = (property, value) => $(".selected").css(property, value);
    updateView = () => {
        $(".tag-name").html($(".selected").children(".preview").html());
        $(".colors__selected").css("background-color", $("#page-view > .selected").css("background-color"));
    };
}
const EditingSidebar = new Edit();
$(".colors__input").on("change", function (e) {
    e.stopPropagation();
    EditingSidebar.changeSelectedTag("background-color", $(this).val());
    EditingSidebar.updateView();
});

class Tag {
    tag;
    name;
    constructor(tagType, classo) {
        this.tag = $(`<${tagType} class="${classo}"></${tagType}>`);
    }
    setName(newName) {
        this.name = newName;
    }
    select() {
        this.tag.parent().children().removeClass("selected");
        this.tag.addClass("selected");
    }
}

class ListTag extends Tag {
    PageTagClass;
    constructor(tagName, PageTagClass) {
        super(tagName, "sidebar--list__tag");
        this.PageTagClass = PageTagClass;
        this.newName(PageTagClass.name);
    }
    newName = (newName = `${this.tag[0].nodeName}#${this.tag.index(`#page-view ${this.tag[0].nodeName}`) + 1}`) => {
        super.setName(newName);
        this.tag.html(this.name);
    };
    handleSelect = () => {
        super.select();
        this.PageTagClass.select();
    };
}

class PageTag extends Tag {
    constructor(tagType) {
        super(tagType, "tag-box");
        this.tag.append(`<div class="blue preview"></div>`);
        this.newName();
    }
    newName = (newName = `${this.tag[0].nodeName}#${this.tag.index(`#page-view > ${this.tag[0].nodeName}`) + 1}`) => {
        super.setName(newName);
        this.tag.children(".preview").html(this.name);
    };
}

$(function () {
    function addNewTag(tagType) {
        const newPageTag = new PageTag(tagType);
        $("#page-view").append(newPageTag.tag);
        newPageTag.newName();
        const newListTag = new ListTag("div", newPageTag);
        newListTag.tag.on("click", () => {
            newListTag.handleSelect();
            EditingSidebar.updateView();
        });
        $(".sidebar--list").append(newListTag.tag);
    }
    const setElementName = (tag, newName) => tag.children(".preview").html(newName);
    function updateTags() {
        const children = $("#page-view").children();
        children.each(function () {
            const elementName = this.nodeName;
            const index = $(`#page-view ${elementName}`).index($(this)) + 1;
            setElementName($(this), `${elementName}#${index}`);
        });
    }
    $(".sidebar--tools__button").on("click", (e) => addNewTag(e.target.innerHTML));
    $($(".top__button")[3]).on("click", updateTags);
    $($(".top__button")[2]).on("click", EditingSidebar.updateView);
});
//# sourceMappingURL=index.bundle.js.map
