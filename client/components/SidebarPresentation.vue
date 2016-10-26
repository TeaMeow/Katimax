<template>
    <div>
        <h2 class="ts large header">Presentations</h2>
        
        <single-presentation></single-presentation>
    </div>
</template>

<script>
import SinglePresentation from "./SidebarSinglePresentation"

export default
{
    name: 'PresentationList',
    components:
    {
        SinglePresentation
    }
}
</script>