<script lang="ts">
    import type { PageData } from './$types';
    import Icon from '@iconify/svelte';
    import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
    export let data: PageData;
    let tabSet: number = 0;
</script>

<section class="mt-5">

    <TabGroup justify="justify-center">
        <Tab bind:group={tabSet} name="tab1" value={0}>
            <span>Profile</span>
        </Tab>
        <Tab bind:group={tabSet} name="tab2" value={1}>Addresses</Tab>
        <Tab bind:group={tabSet} name="tab3" value={2}>Orders</Tab>
        <!-- Tab Panels --->
        <svelte:fragment slot="panel">
            {#if tabSet === 0}
                (tab panel 1 contents)
            {:else if tabSet === 1}
                (tab panel 2 contents)
            {:else if tabSet === 2}
                (tab panel 3 contents)
            {/if}
        </svelte:fragment>
        <form method="post" action="?/logout">
            <input type="submit" value="Log out"/>
        </form>
    </TabGroup>
                
</section>