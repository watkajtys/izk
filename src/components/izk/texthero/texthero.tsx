import {component$} from "@builder.io/qwik";
import styles from "./texthero.module.scss";

export default component$(() => {
    return (
        <div class={['container', styles.textHeroContainer]}>

            <div class={styles.hugeContainer}>
                <h1 class={['massivetext']}>WHAT CAN WE DO TOGETHER</h1>
            </div>

        </div>
    )
});