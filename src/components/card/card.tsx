import { component$, Slot } from "@builder.io/qwik";
import styles from "./card.module.css";

export default component$(({ title, description }: { title?: string; description?: string }) => {
	return (
		<div class={styles.card}>
			{title && <div class={styles["card-title"]}>{title}</div>}
			{description && <div class={styles["card-description"]}>{description}</div>}
			<Slot />
		</div>
	);
});
