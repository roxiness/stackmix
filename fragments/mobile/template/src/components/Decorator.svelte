<script>
    /** This file is not used. */
    import { TabsTransition } from '@roxi/routify/decorators'
    export let scoped
</script>

<TabsTransition {scoped}>
    <div class="page">
        <slot />
    </div>
</TabsTransition>
