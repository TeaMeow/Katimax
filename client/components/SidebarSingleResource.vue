<template>
    <div class="ts flatted segment">
        <!-- 標題 -->
        <h3 @click="pointer(resource.path)" class="ts small header">
            <i class="cube icon"></i> {{ resource.path }}
            <div class="sub header" v-text="resource.description"></div>
        </h3>
        <!-- / 標題 -->
        
        <div class="ts middle aligned selection list">
            <div v-for="method in resource.methods" class="item">
                    <span :class="{'primary' : method.method === 'POST', 
                                   'positive': method.method === 'GET',
                                   'info'    : method.method === 'PATCH',
                                   'inverted': method.method === 'PUT',
                                   'negative': method.method === 'DELETE'}" class="ts horizontal label" 
                                                                            v-text="method.method"></span>
                    <span v-text="method.description"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default
{
    name: 'SingleResource',
    props:
    {
        resource: { default: null }
    },
    methods:
    {
        pointer(pathName)
        {
            var resIdx = null
            
            var modifyObj = this.$store.state.resources.find((el, i) =>
            {
                resIdx = i
                
                return el.path === pathName
            })
            
            this.$store.state.pointer = 'resource'
            this.$store.state.resourcePointer = resIdx
        }
    }
}
</script>

<style scoped>
h3.ts.small.header
{
    margin: 0 0 0.2em;
}
i.cube.icon
{
    display: inline;
    margin-right: 8px;
    margin-left: 4px;
}
.ts.list .item
{
    flex-wrap: nowrap;
}
.ts.list .item .ts.label
{
    flex-shrink: 0;
}
.ts.list .item span:not(.ts)
{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>