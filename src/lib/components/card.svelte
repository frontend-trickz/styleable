<script lang="ts">
	import { get_current_component } from 'svelte/internal';
	import type { HTMLActionArray } from '$lib/hooks/use-actions';
	import type { SupportedAs } from '$lib/internal/elements';
	import { forwardEventsBuilder } from '$lib/internal/forwardEventsBuilder';
	import type { CSSMap, TCardType, TStyleable } from '$lib/types';
	import Styleable from '$lib/utils/Styleable.svelte';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let type: TCardType = 'block';
	export let sx: CSSMap = {};
	export let as: SupportedAs = 'section';
	export let use: HTMLActionArray = [];

	let base: CSSMap = {
		display: 'block',
		boxSizing: 'border-box'
	};
	switch (type) {
		case 'row':
			base = { ...base, display: 'flex', flexDirection: 'row' };
			break;
		case 'column':
			base = { ...base, display: 'flex', flexDirection: 'column' };
			break;
		case 'grid':
			base = { ...base, display: 'grid' };
			break;
	}
	const styleableProps: TStyleable = { variant: type, base, sx, as };

	$: slotProps = {};
</script>

<Styleable
	name={'Card'}
	{...$$restProps}
	{as}
	{slotProps}
	use={[...use, forwardEvents]}
	{styleableProps}
>
	<slot {...slotProps} />
</Styleable>
