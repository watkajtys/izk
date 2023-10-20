import {component$} from "@builder.io/qwik";
import styles from "./header.module.css";

export default component$(() => {
   return (
       <header class={styles.header}>
           <div class={styles.wrapper}>
               <div style={styles.logowrap}>
                   <a href="/" title="IZK DIGITAL; WEB DEVELOPMENT IN DENVER">IZK</a>
               </div>

               <div class={styles.menu}>
                   <a href="/">Clients</a>
                   <a href="/">How we work</a>
               </div>
           </div>
       </header>
   )
});