import {component$} from "@builder.io/qwik";
import styles       from "./hero.module.css";

export default component$(() => {
    return (
        <div class={['container', styles.herocontainer]}>

            <div class={styles.hugeContainer}>
                <h1 class={['massivetext']}>IZK <span>DIGITAL</span></h1>
            </div>

            <div class={styles.vertText}>
                <h2>AI Impact & Culture
                    <br/>Web Development
                    <br/>Full Service</h2>
            </div>
        </div>
    )
});