declare global {
	namespace Surplus {
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
		export type Children<T extends HTMLElement = HTMLElement> =
			| string
			| Element
			| (string | Element<T>)[];
	}
}

export function jsx<P>(
	type: string,
	props: any,
	key?: string,
): Surplus.Element<HTMLInputElement> {
	return null as unknown as any;
}

export namespace JSX {
	export type Element = Surplus.Element;

	export type IntrinsicElements = {
		[K in keyof HTMLElementTagNameMap]: Partial<
			Surplus.Element<HTMLElementTagNameMap[K]>
		>;
	};

	export interface ElementChildrenAttribute {
		children?: (string | Surplus.Element)[];
	}

	export interface IntrinsicAttributes {
		key?: any;
	}
}

throw new Error("this file should never be executed; it does nothing");
