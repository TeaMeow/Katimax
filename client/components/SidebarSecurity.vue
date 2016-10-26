<template>
    <div>
        <h2 class="ts large header">
            Security schemes
        </h2>
        <button class="ts mini right floated circular very compact icon button"><i class="plus icon"></i></button>
        
        <single-security></single-security>
    </div>     
</template>

<script>
import SingleSecurity from "./SidebarSingleSecurity"

export default
{
    name: 'SecurityList',
    components:
    {
        SingleSecurity
    }
}
</script>

<style scoped>
.ts.large.header
{
    display: inline;
}
</style>