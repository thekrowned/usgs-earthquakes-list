import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";

export default component$(({ title }: { title: string }) => {
	return (
		<header class={styles.header}>
			<h1 class={styles["header-title"]}>{title}</h1>
		</header>
	);
});
