<script lang="ts">
    import MainBanner from "$lib/components/MainBanner.svelte";
    import SidebarButton from "./SidebarButton.svelte";
</script>

<MainBanner />
<div class="flex items-start h-full w-full border-t-4 border-t-[#ffaaff] bg-[#ffaaff] text-[#9f0f33]">
    <div class="flex flex-col bg-[#ffaaff] h-full min-h-dvh w-20">
        <SidebarButton>
            Add text
        </SidebarButton>
        <SidebarButton>
            Add a pic
        </SidebarButton>
    </div>
</div>
