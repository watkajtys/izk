import {component$} from "@builder.io/qwik";
import styles       from "./hero.module.css";

export default component$(() => {
    return (
        <div class={['container', styles.herocontainer]}>

            <div class={styles.hugeContainer}>
                <h1 class={['massivetext']}>IZK <span>DIGITAL</span></h1>
            </div>

            <div class={styles.vertText}>
                <h2>Web Design & Development
                    <br/>Brand Storytelling
                    <br/>Creative</h2>
            </div>
        </div>
    )
});