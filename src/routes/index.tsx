import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
	return (
		<>
			<h1>USGS Earthquakes List</h1>
			<div>Todo: Add the list</div>
		</>
	);
});

export const head: DocumentHead = {
	title: "USGS Earthquakes List",
	meta: [
		{
			name: "USGS Earthquakes List",
			content: "USGS Earthquakes List",
		},
	],
};
