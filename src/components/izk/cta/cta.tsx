import {component$} from "@builder.io/qwik";
import styles from "./cta.module.css";

export default component$(() => {
    //ONE CONTAINER DIV WITH TWO CHILDREN EACH TAKING UP 50% OF THE WIDTH
    return (
        <div class={styles.grid}>
            <div class={[styles.grid, styles.flip, styles.brand]}>
                <div class={['center-center']}><h2 class={'hugetext'}>IZK</h2></div>
                {/*<div class={[styles.socialcontainer, 'container','container-flex-vertical']}>*/}
                {/*    <a href="">Social</a>*/}
                {/*    <a href="">Social</a>*/}
                {/*    <a href="">Social</a>*/}
                {/*</div>*/}
            </div>
            <div class={['center-center']}><a href="mailto:matty@hey.com" class={['hugetext', styles.special]}>Let's Chat</a></div>
        </div>
    );
});