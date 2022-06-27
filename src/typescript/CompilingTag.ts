<!-- ! - WARNING: NOT IN USE YET!!!! -->
export class Tag {
	element: string;
	children?: string[];

	constructor(elementName: string) {
		this.element = elementName;
	}

	addChild = (child: string) => this.children.push(child);
}
