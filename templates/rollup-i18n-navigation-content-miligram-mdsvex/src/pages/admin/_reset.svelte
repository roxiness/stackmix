<!-- routify:options index=100 -->
<script>
  import { url } from '@roxi/routify'
</script>

<a href={$url('/')}>Back</a>
<slot><!-- optional fallback --></slot>
