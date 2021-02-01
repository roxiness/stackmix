<script>
  import NavBar from "../components/Navbar/Bar.svelte";
  __SCRIPT__;
</script>

<div id="app">
  <aside>
    __NAVIGATION__
    <NavBar />
    __NAVIGATION_RIGHT__
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
    grid-template-columns: 196px auto;
    height: 100%;
    width: 100%;
    position: absolute;
  }
  main {
    padding-top: 64px;
  }
  aside {
    padding: 16px;
    box-shadow: 0 0 16px rgba(0,0,0,0.2);
    height: 100%;
  }
</style>
