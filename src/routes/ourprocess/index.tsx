import {component$}        from "@builder.io/qwik";
import type {DocumentHead} from "@builder.io/qwik-city";
import styles              from "~/components/izk/texthero/texthero.module.scss";

export default component$(() => {
    return (
        <>
            <div class={['container', styles.textHeroContainerSwapped]}>

                <div class={styles.hugeContainer}>
                    <h1 class={['massivetext']}>Don't Let Dreams be Dreams</h1>
                </div>
            </div>

            <div>
                <h2>Dreams deserve to be more than dreams</h2>
                <p>At IZK we deliver results.</p>

                <div>
                    <div>
                        <h3>We know code.</h3>
                        <p>We're technical experts so you don't have to be. We don't buy themes for you. We build
                            websites.</p>
                    </div>

                    <div>
                        <h3>We know design.</h3>
                        <p></p>
                    </div>

                    <div>
                        <h3>We Lead</h3>
                        <p>We build product teams, we build technical teams, we build </p>
                    </div>
                </div>

                <div>
                    <div>
                        <h2>Tech First</h2>
                        <p>Agency work is rife with page builders and repurposed themes that are resold to you.</p>
                    </div>

                    <div>
                        <h2>Speed First</h2>
                        <p>Agency work is rife with page builders and purchased themes. We ensure custom engineering
                            with modern Javascript so you load faster than anyone else, guranteed.</p>
                    </div>

                    <div><h2>Why Does Speed Matter?</h2>
                        <p>Every 100ms of additional time waiting leads to a 1% loss in revenue</p>
                        <p>Most agencies buy a theme and repurpose it. Or use a consumer page builder to design your
                            website.
                            Page Builders are bogged down with dozens of lines of code</p>
                    </div>
                </div>

                <div>
                    <h2>Our Capabilities</h2>
                    <div>
                        <h3>Digital Services</h3>

                    </div>

                    <div>
                        <h3>Creative Services</h3>

                    </div>

                    <div>
                        <h3>Marketing and Communication</h3>
                    </div>
                </div>
            </div>
        </>
    );
});

export const head: DocumentHead = {
    title: "Don't Let Dreams Be Dreams",
    meta : [
        {
            name   : "description",
            content: "IZK Digital. Don't .",
        }
    ]
}