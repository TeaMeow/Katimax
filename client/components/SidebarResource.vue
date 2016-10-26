<template>
    <div>
        <h2 class="ts large header">
            Resources
        </h2>
        <button @click="create" class="ts mini right floated circular very compact icon button">
            <i class="plus icon"></i>
        </button>
        
        <single-resource v-for="resource in resources" :resource="resource"></single-resource>
    </div>
</template>

<script>
import SingleResource from "./SidebarSingleResource"

export default
{
    name: 'ResourceList',
    props:
    {
        resources: {}
    },
    components:
    {
        SingleResource
    },
    data()
    {
        return { ...this.$store.state }
    },
    methods:
    {
        create()
        {
            this.$store.state.resources.push
            ({
                path       : null,
                description: null,
                variables  : [],
                methods    : []
            })
        }
    }
}
</script>

<style scoped>
.ts.large.header
{
    display: inline;
}
</style>