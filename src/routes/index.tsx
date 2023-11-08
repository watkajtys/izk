import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Cta from "~/components/izk/cta/cta";
import Hero from "~/components/izk/hero/hero";
export default component$(() => {
  return (
    <>
      <Hero/>
      <Cta/>
    </>
  );
});

export const head: DocumentHead = {
  title: "IZK Digital - Web Development in Denver",
  meta: [
    {
      name: "description",
      content: "IZK Digital. Web Development in Denver, Colorado.",
    },
  ],
};
