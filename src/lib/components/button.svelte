<script lang="ts">
	import type { HTMLActionArray } from '$lib/hooks/use-actions';
	import type { SupportedAs } from '$lib/internal/elements';
	import { forwardEventsBuilder } from '$lib/internal/forwardEventsBuilder';
	import type { CSSMap, TButtonType, TStyleable, TVariant } from '$lib/types';
	import Styleable from '$lib/utils/Styleable.svelte';
	import { get_current_component } from 'svelte/internal';

	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let variant: TVariant = 'utility';
	export let type: TButtonType = 'button';
	export let sx: CSSMap = {};
	export let as: SupportedAs = 'button';
	export let use: HTMLActionArray = [];

	const base: CSSMap = {
		boxSizing: 'border-box',
		color: `var(--${variant}-color, #333333)`,
		b: `1px solid var(--${variant}-bgc,#cccccc)`,
		bgc: `var(--${variant}-bgc, #cccccc)`,
		transition: 'all 0.39s ease-in-out',
		r: '6px',
		p: '8px 16px',
		shadow: '0px 1px 2px rgba(0 0 0 / 40%)',
		cursor: 'pointer',
		'&:hover': {
			filter: 'brightness(85%)',
			shadow: 'none'
		}
	};
	const styleableProps: TStyleable = { variant, base, sx };

	$: slotProps = {};
</script>

<Styleable
	name={'Button'}
	{slotProps}
	{type}
	{as}
	{styleableProps}
	{...$$restProps}
	use={[...use, forwardEvents]}
>
	<slot {...slotProps} />
</Styleable>
