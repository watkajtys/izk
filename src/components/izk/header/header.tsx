import {component$} from "@builder.io/qwik";
import styles from "./header.module.css";


export default component$(() => {
   return (
       <header class={styles.header}>
           <div class={styles.wrapper}>

               <a href="/" title="IZK DIGITAL; WEB DEVELOPMENT IN DENVER">IZK</a>

               {/*<div class={styles.menu}>*/}
               {/*    <a href="/services">What we Do</a>*/}
               {/*    <a href="/">Clients</a>*/}
               {/*    <a href="/ourprocess">How we work</a>*/}
               {/*</div>*/}
           </div>
       </header>
   )
});