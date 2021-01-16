<script>
  import NavBar from "../components/Navbar/Bar.svelte";
  __SCRIPT__;
</script>

<div id="app">
  <aside>
      __NAVIGATION__
    <NavBar />
  </aside>
  <section>
    <header>__HEADER__</header>
    <main class="container">
      __HTML__
      <slot />
    </main>
    <footer>__FOOTER__</footer>
  </section>
</div>

<style>
    #app {
        display: grid;
        grid-template-columns: 140px auto;
    }
    main {
      padding-top: 64px;
    }
</style>
