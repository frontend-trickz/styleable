import { mergePropsTo, removeStyle, styleMe } from './styler';
import type { TStyleable } from '../types';
import { useId } from '$lib/hooks/use-id';

const styleable = (node: HTMLElement, styProps: TStyleable) => {
	const update = (styleProps: TStyleable) => {
		const { variant = 'utility', base = {}, sx = {}, as } = styleProps;

		//This is for old svelte which prepends svelte-* classes to components
		const id = [].slice.call(node.classList).find((next: string) => next.indexOf('svelte-') === 0);
		const componentId = id ?? `styleable-${variant}-${as}${useId()}`;
		const styles = mergePropsTo(base)(sx);

		styleMe(componentId, styles);
		node.classList.add(componentId);
		return () => removeStyle(componentId);
	};

	let cleanStyle = update(styProps);
	return {
		update(nustyProps: TStyleable) {
			cleanStyle();
			cleanStyle = update(nustyProps);
			console.log('updated!');
		},
		destroy() {
			cleanStyle();
		}
	};
};

export default styleable;
