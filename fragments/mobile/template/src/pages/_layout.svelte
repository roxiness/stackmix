<script>
  __SCRIPT__;
  import Navbar from "../components/navigation/Navbar.svelte";
  import { TabsTransition } from "@roxi/routify/decorators";
</script>

<div id="app">
  <header>__NAVIGATION__ __HEADER__</header>
  <main>
    __HTML__
    <slot decorator={TabsTransition} scoped={{ SiblingIndexIsAncestor: true }} />
  </main>

  <footer>
    <Navbar />
    __FOOTER__
  </footer>
</div>

<style>
  #app {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  main {
    flex-grow: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }
  :global(._posts_index) {
    background: #0bf5cc;
  }
  :global(._contact_index) {
    background: #a1fac3;
  }
  :global(._home_index) {
    background: #88f0d0;
  }
  :global(._introduction_index) {
    background: #7fc5bb;
  }
  :global(.post) {
    background: white;
  }
  :global(.decorator) {
    overflow-y: auto;
  }
  :global(.page > :last-child) {
    margin-bottom: 96px;
  }
  :global(.container) {
    padding-top: 32px;
    padding-bottom: 32px;
  }
</style>
