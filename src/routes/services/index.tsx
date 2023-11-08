import {component$}        from "@builder.io/qwik";
import type {DocumentHead} from "@builder.io/qwik-city";
import TextHero            from "~/components/izk/texthero/texthero";
import Services            from "~/components/izk/services/services";

export default component$(() => {
    return (
        <>
            <TextHero/>
            <Services/>
        </>
    );
});

export const head: DocumentHead = {
    title: "IZK Digital - Web Development in Denver",
    meta : [
        {
            name   : "description",
            content: "IZK Digital. Web Development in Denver, Colorado.",
        },
    ],
};
