<script>
  import NavBar from '../components/Navbar/Bar.svelte'
  import Lang from '../components/Lang.svelte'
</script>

<div id="app">
  <aside>
    <div><Lang /></div>
    <NavBar />
  </aside>
  <section>
    <header></header>
    <main class="container">
      <slot />
    </main>
    <footer></footer>
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
