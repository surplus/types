type ToString = { toString(): string };

type AnyElement = HTMLElement | SVGElement;

export namespace Surplus {
	interface BaseElement {
		children: Children;
		style: string;
		fn: (e: this) => void;
		ref: this;
		class: string;
	}

	export type Element<T extends AnyElement = AnyElement> = Omit<
		T,
		keyof BaseElement
	> &
		BaseElement;

	export type Child<T extends AnyElement = AnyElement> =
		| ToString
		| Element<T>;

	export type Children<T extends AnyElement = AnyElement> =
		| Child<T>
		| Child<T>[];
}

export function jsx<P>(
	type: string,
	props: any,
	key?: string,
): Surplus.Element {
	throw new Error(
		"do not directly call this function; this library does nothing functional",
	);
}

type AllElements = HTMLElementTagNameMap & SVGElementTagNameMap;

export namespace JSX {
	export type Element = Surplus.Element;

	export type IntrinsicElements = {
		[K in keyof AllElements]: Partial<Surplus.Element<AllElements[K]>>;
	};

	export interface ElementChildrenAttribute {
		children?: Surplus.Children;
	}

	export interface IntrinsicAttributes {
		children?: Surplus.Children;
	}
}

throw new Error("this file should never be executed; it does nothing");
