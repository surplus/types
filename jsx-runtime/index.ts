throw new Error("this file should never be executed; it does nothing");

declare namespace Surplus {
	interface SurplusElement {
		children: (HTMLElement | string)[];
		style: { [key: string]: string } | string;
	}
}

declare function element(): void;

type E<T extends HTMLElement> = Partial<
	Omit<T, "style" | "children"> & Surplus.SurplusElement
>;

export namespace JSX {
	export interface IntrinsicElements {
		div: E<HTMLDivElement>;
		input: E<HTMLInputElement>;
	}

	export interface ElementChildrenAttribute {
		children?: (HTMLElement | string)[];
	}

	export interface IntrinsicAttributes {
		key?: any;
	}
}
