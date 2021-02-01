<script>
  __SCRIPT__;
  import Navbar from "../components/navigation/Navbar.svelte";
  import decorator from "../components/Decorator.svelte";
</script>

<header>__NAVIGATION__ __HEADER__</header>

<main>
  __HTML__
  <slot {decorator} scoped={{ SiblingIndexIsAncestor: true }} />
</main>

<footer>
  <Navbar />
  __FOOTER__
</footer>

<style>
  :global(body) {
    padding: 0;
  }
  main {
    bottom: 64px;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  :global(._posts_index) {
    background: #0bf5cc;
  }
  :global(._contact_index) {
    background: #a1fac3;
  }
  :global(._home) {
    background: #88f0d0;
  }
  :global(._introduction_index) {
    background: #7fc5bb;
  }
  :global(.post) {
    background: white;
  }
  :global(.page) {
    height: 100%;
    overflow-y: auto;
  }
  :global(.page>:last-child) {
    margin-bottom: 96px;
  }
  :global(.container) {
    padding-bottom: 32px;
    background: white;
  }
</style>
