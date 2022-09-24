import type { CSSMap } from '$lib/types';

const memo = (key: string) =>
	({
		display: 'display',
		maxw: 'max-width',
		maxh: 'max-height',
		gap: 'gap',
		rgap: 'row-gap',
		cgap: 'column-gap',
		w: 'width',
		h: 'height',
		bgc: 'background-color',
		bg: 'background',
		color: 'color',
		shadow: 'box-shadow',
		filter: 'filter',
		gradient: 'gradient',
		transition: 'transition',
		transform: 'transform',
		overflow: 'overflow',
		cursor: 'cursor',
		outline: 'outline',
		font: 'font-family',
		size: 'font-size',
		weight: 'font-weight',
		content: 'justify-content',
		items: 'align-items',
		p: 'padding',
		px: 'padding-inline',
		py: 'padding-block',
		pt: 'padding-top',
		pr: 'padding-right',
		pl: 'padding-left',
		pb: 'padding-bottom:',
		m: 'margin',
		mx: 'margin-inline',
		my: 'margin-block',
		mt: 'margin-top',
		mr: 'margin-right',
		ml: 'margin-left',
		mb: 'margin-bottom',
		b: 'border',
		bt: 'border-top',
		bb: 'border-bottom',
		br: 'border-right',
		bl: 'border-left',
		bw: 'border-width',
		bc: 'border-color',
		bs: 'border-style',
		r: 'border-radius',
		rtl: 'border-top-left-radius',
		rtr: 'border-top-right-radius',
		rbl: 'border-bottom-left-radius',
		rbr: 'border-bottom-right-radius'
	}[key] ?? '');

const hyphenate = (camel: string): string => camel.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());
const addStyle = (id: string) => {
	const element = document.createElement('style');
	element.setAttribute('id', id);
	// Append style element to head
	document.head.appendChild(element);
	// Reference to the stylesheet
	return element.sheet;
};
const appendStyleSheet = (id: string, styles: string[]): void => {
	let sheet = (document.querySelector('#' + id) as HTMLStyleElement)?.sheet;
	if (sheet) return;
	// if (!sheet) {
	sheet = addStyle(id);

	// }

	const rules = sheet?.rules || sheet?.cssRules;
	styles.forEach((sty) => sheet?.insertRule(sty, rules?.length));
};

const getStyles = (
	styleObject: CSSMap,
	selector: string,
	collector: Array<Array<string>> = []
): Array<string> => {
	const stage = [selector];
	collector.push(stage);

	for (let [key, value] of Object.entries(styleObject)) {
		const _memo = memo(key);
		if (typeof value === 'string' || typeof value === 'number') {
			const item = _memo ? `${_memo}:${value};` : `${hyphenate(key)}:${value};`;
			stage.push(item);
		} else {
			const nextSelector = key.replace('&', selector);
			getStyles(value, nextSelector, collector);
		}
	}
	return collector.map((stage: string[]) => {
		const [first, ...rest] = stage;
		return `${first} {${rest.join('')}}`;
	});
};
export const removeStyle = (id: string): void => {
	const style = document.querySelector('#' + id);
	style && style.remove();
};
export const styleMe = (componentId: string, sx: CSSMap): void => {
	const selector = `.${componentId}`;
	const styles: string[] = getStyles(sx, selector);
	if (componentId) {
		appendStyleSheet(componentId, styles);
	}
};

export const mergePropsTo =
	(base: CSSMap) =>
	(extension: CSSMap): CSSMap => {
		for (let [key, value] of Object.entries(extension)) {
			if (typeof value === 'string' || typeof value === 'number') {
				base[key] = value;
			} else {
				const target = base[key];
				if (!target || typeof target === 'string' || typeof value === 'number') {
					base[key] = value;
				} else {
					base[key] = { ...target, ...value };
				}
			}
		}
		return base;
	};
