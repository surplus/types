type ToString = { toString(): string };

export namespace Surplus {
	interface BaseElement {
		children: Children;
		style: string;
		fn: (e: this) => void;
		ref: this;
		class: string;
	}

	export type Element<T extends HTMLElement = HTMLElement> = Omit<
		T,
		keyof BaseElement
	> &
		BaseElement;

	export type Child<T extends HTMLElement = HTMLElement> =
		| ToString
		| Element<T>;

	export type Children<T extends HTMLElement = HTMLElement> =
		| Child<T>
		| Child<T>[];
}

export function jsx<P>(
	type: string,
	props: any,
	key?: string,
): Surplus.Element<HTMLInputElement> {
	throw new Error(
		"do not directly call this function; this library does nothing functional",
	);
}

export namespace JSX {
	export type Element = Surplus.Element;

	export type IntrinsicElements = {
		[K in keyof HTMLElementTagNameMap]: Partial<
			Surplus.Element<HTMLElementTagNameMap[K]>
		>;
	};

	export interface ElementChildrenAttribute {
		children?: Surplus.Children;
	}

	export interface IntrinsicAttributes {
		children?: Surplus.Children;
	}
}

throw new Error("this file should never be executed; it does nothing");
