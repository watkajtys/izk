import {component$} from "@builder.io/qwik";
import styles       from "./service.module.scss";

interface ServiceProps {
    serviceTitle: string;
    serviceDescription: string;
    servicePoints: string[];
}

export const Service = component$<ServiceProps>((props) => {
    return (
        <section class={styles.serviceSection}>
            <h4>{props.serviceTitle}</h4>
            <p>{props.serviceDescription}</p>
            <ul>
                {props.servicePoints.map((point: string) => (
                    <li key={point}>{point}</li>
                ))}
            </ul>
        </section>
    )
});