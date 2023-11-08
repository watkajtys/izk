import {component$} from "@builder.io/qwik";
import styles       from "./services.module.css";

export default component$(() => {
    return (
        <div class={['section-wrapper']}>
            <h2 class={'highlight'}>What We Do</h2>
            <h3 class={['spacer', styles.caption]}>IZK uses design, storytelling, and technology to architect
                unforgettable digital experiences.</h3>

            <section class={[styles.servicesWrapper, 'spacer']}>
                <div class={styles.serviceImage}>
                    <img src="https://picsum.photos/600/600" alt="bs" height={600} width={600}/>
                </div>
                <div class={styles.serviceText}>
                    <section class={styles.serviceSection}>
                        <h4>Web Design & Development</h4>
                        <p>From simple landing pages to complex web applications, we design and develop digital
                            experiences that are both beautiful and functional.</p>
                        <ul>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                        </ul>
                    </section>
                    <section class={styles.serviceSection}>
                        <h4>Frictionless ECommerce</h4>
                        <p></p>
                        <ul>
                            <li>Results-Driven D2C</li>
                            <li>Technology and Implementation</li>
                            <li>Product Marketing Strategies</li>
                            <li>Conversion-Driven Design</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                        </ul>
                    </section>

                    <section class={styles.serviceSection}>
                        <h4>Frictionless ECommerce</h4>
                        <ul>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                        </ul>
                    </section>

                    <section class={styles.serviceSection}>
                        <h4>Frictionless ECommerce</h4>
                        <ul>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                        </ul>
                    </section>

                </div>
            </section>
        </div>
    )
});