import {component$, useStore, useOnWindow, $, useVisibleTask$, useSignal} from "@builder.io/qwik";
import styles                                                             from "./services.module.scss";
import Image1                                                             from "~/media/img1.jpg?jsx";
import Image2                                                             from "~/media/img2.jpg?jsx";
import Image3                                                             from "~/media/img3.jpg?jsx";


interface ServiceArray extends Array<ServiceProps> {
}

interface ServiceProps {
    serviceTitle: string;
    serviceDescription: string;
    servicePoints: string[];
}

interface ServiceImageProps {
    src: string;
    position: number;
}

export const Item = component$<ServiceProps>((props) => {
    const visible = useSignal(false)

    useVisibleTask$(() => {
        visible.value = true;
        console.log('visible');
    });

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

export const ServiceImage = component$<ServiceImageProps>((props) => {
    let imageComponent;

    if (props.position > 2200) {
        imageComponent = <Image3 class={'activation'}/>
    } else if (props.position > 1400) {
        imageComponent = <Image2 class={'activation'}/>
    } else {
        imageComponent = <Image1 class={'activation'}/>
    }
    return (
        <div class={styles.serviceImage}>
            {props.position}
            {imageComponent}
        </div>
    )
})

function useScrollPosition() {
    const position = useStore({scrollY: 0, inner: 0});
    useOnWindow(
        "scroll",
        $((event) => {
            const window = event.currentTarget as Window;
            position.scrollY = window.scrollY;
            position.inner = window.innerHeight;
        })
    );
    return position;
}

export const Services = component$(() => {

    const array: ServiceArray = [
        {
            "serviceTitle"      : "Web Design & Development",
            "serviceDescription": "From simple landing pages to complex web applications, we design and develop digital experiences that are both beautiful, functional, and custom. We don't buy themes, we build them.",
            "servicePoints"     : [
                "UI and UX expertise",
                "Modern Javascript Engineering",
                "Wordpress Development & Design",
                "Shopify Theme Development",
                "Bring Your Own CMS"
            ]
        },
        {
            "serviceTitle"      : "Frictionless ECommerce",
            "serviceDescription": "Elevate your e-commerce experience with a custom solution that is tailored to your business.",
            "servicePoints"     : [
                "Results-Driven D2C",
                "Shopify Theme Development",
                "Custom E-Commerce Solutions",
                "Conversion-Driven Design",
                "Subscription and Membership Expertise",
                "Churn Reduction and Retention",
                "High Risk Merchandising",
            ]
        },
        {
            "serviceTitle"      : "Artificial Intelligence Advisory",
            "serviceDescription": "IZK uses Artificial Intelligence in an ethical way every single day. We can help guide you through in this changing space.",
            "servicePoints"     : [
                "Generative AI and LLM applications",
                "Autonomous Agents and Conversational Bots",
                "Training Custom GPT Agents",
                "AI Workflow and Efficiency Consulting",
                "Increasing Efficiency and Reducing Costs with AI",
                "",
                "lorem ipsum",
                "lorem ipsum"
            ]
        },
        {
            "serviceTitle"      : "Content Strategy, Creation, and Development",
            "serviceDescription": "Izk can help you become a content powerhouse. Be the Content Studio your Brands demands you to be.",
            "servicePoints"     : [
                "Develop Content that Tells Your Story",
                "Digital Media Planning",
                "Social Media Strategy and Automation",
                "Email Marketing and Automation (Klayvio, MailChimp, etc.)",
                "lorem ipsum",
                "lorem ipsum",
                "lorem ipsum",
                "lorem ipsum",
                "lorem ipsum"
            ]
        },
        {
            "serviceTitle"      : "High Risk Merchandising",
            "serviceDescription": "Every business is different. We can help you navigate the high risk world of CBD, Cannabis, and other high risk industries.",
            "servicePoints"     : [
                "Navigate the Limitations and Restrictions of High Risk Merchandising",
                "Social Media Strategy and Automation",
                "Digital Content Creation",
                "lorem ipsum",
                "lorem ipsum",
                "lorem ipsum",
                "lorem ipsum"
            ]

        },
        {
            "serviceTitle"      : "Search Engine Optimization",
            "serviceDescription": "",
            "servicePoints"     : [
                "lorem ipsum",
                "lorem ipsum",
                "lorem ipsum",
                "lorem ipsum",
                "lorem ipsum",
                "lorem ipsum",
                "lorem ipsum",
                "lorem ipsum"
            ]
        },
        {
            "serviceTitle"      : "Digital Products and Technology",
            "serviceDescription": "Our technology is data driven and iterative.",
            "servicePoints"     : [
                "Custom Content Management Solutions",
                "Interactive Filmmaking and Storytelling",
                "Training Custom GPT Agents",
                "AI Workflow and efficiency consulting",
                "lorem ipsum",
                "lorem ipsum",
                "lorem ipsum",
                "lorem ipsum"
            ]
        }
    ]
    const position = useScrollPosition();
    return (
        <div class={['section-wrapper']}>
            <h2 class={'highlight'}>What We Do</h2>
            <h3 class={['spacer', styles.caption]}>IZK uses design, storytelling, and technology to architect
                unforgettable digital experiences.</h3>
            <section class={[styles.servicesWrapper, 'spacer']}>
                <div class={styles.serviceImage}>
                    <ServiceImage src={'https://picsum.photos/600/600'} position={position.scrollY}/>
                </div>
                <div class={styles.serviceText}>
                    {array.map((item) => {
                        return (
                            <Item serviceTitle={item.serviceTitle} serviceDescription={item.serviceDescription}
                                  servicePoints={item.servicePoints} key={item.serviceTitle}/>
                        );
                    })}
                </div>
            </section>
        </div>
    )
});