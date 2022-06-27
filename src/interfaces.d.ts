interface elementInterface {
	element: JQuery<HTMLElement>
	backgroundColor: any;
	children: JQuery<HTMLElement>[];

	removeElement();
	pushChild(child: JQuery<HTMLElement>): void;
}

interface editingInterface {
	setDisplayColor(): void;
	setCurrentTagName(): void;
}

// * - whatsupbaby.
// interface HTMLComponentInterface {
// 	element: HTMLElement | JQuery<HTMLElement>;
// 	container: HTMLElement | JQuery<HTMLElement>;
// 	state: string | object;
// 	outerState: string | object;
// 	// main(): void;
// 	render(): void;
// 	updateState(property: string, value: string): void;
// }

interface caca {
	list: HTMLTag[];
	updateList(exclude: number): void;
}

interface tag {
	element: JQuery<HTMLElement>
	changeSelectedTag(): void;
}
