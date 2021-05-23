<script>
    __SCRIPT__
    import Navbar from '../components/navigation/Navbar.svelte'
    import { TabsTransition } from '@roxi/routify/decorators'
    // import decorator from "../components/Decorator.svelte";
</script>

<div id="app">
    <header>__NAVIGATION__ __HEADER__</header>
    <main>
        __HTML__
        <slot
            decorator={TabsTransition}
            scoped={{ SiblingIndexIsAncestor: true }} />
    </main>

    <footer>
        <Navbar />
        __FOOTER__
    </footer>
</div>

<style>
  __STYLE__
</style>
