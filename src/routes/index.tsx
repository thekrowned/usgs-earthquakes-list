import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Header from "~/components/header/header";

export default component$(() => {
	return (
		<>
			<Header title="USGS Earthquakes List" />
			<main>
				<div>Todo: Add the list</div>
			</main>
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
