<script>
  import { components, beforeUrlChange, afterPageLoad, page } from "@roxi/routify";
  __SCRIPT__;

  

  __IMPORTS__;

  __CONSTANTS__;

  __LOGIC__;

  // we want smooth scrolling when navigating (hash links) within the same page
  $beforeUrlChange(
    (event, newRoute) => (document.documentElement.style["scrollBehavior"] = newRoute === $page ? "smooth" : "auto")
  );

  __FUNCTIONS__;
</script>

__HTML__

<main>
  <slot />
</main>

<nav>
  __NAVIGATION__
  {#each $components.find((n) => n.path === "/frontpage").children as node}
    <a href="/#{node.title}">{node.title}</a>
  {/each}
  <a href="/guide">guide</a>
</nav>

<style>
  main {
    padding-top: 50px;
  }
  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    text-align: center;
    padding: 8px;
  }
  nav a {
    margin: 0 8px;
    font-size: 20px;
  }
</style>
