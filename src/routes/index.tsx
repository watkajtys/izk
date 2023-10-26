import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Cta from "~/components/izk/cta/cta";
export default component$(() => {
  return (
    <>
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
