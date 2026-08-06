<script lang="ts">
    let { onclick, children } = $props()
</script>

<button {onclick} class="bg-[#f109f1] m-1 p-2 rounded-sm text-white">
    {@render children()}
</button>
