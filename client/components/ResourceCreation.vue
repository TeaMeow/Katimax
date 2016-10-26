<template>
    <div class="ts segments">
        
        <!-- 標題區塊 -->
        <div class="ts inverted segment">
            
            <!-- 標題 -->
            <h4 class="ts inverted big header">
                <span v-show="!resource.path">UNNAMED RESOURCE</span>
                <span v-show="resource.path" v-text="resource.path"></span>
            </h4>
            <!-- / 標題 -->
            
            <!-- 移除按鈕 -->
            <button @click="remove" class="ts small basic negative right floated circular compact icon button">
                <i class="trash icon"></i>
            </button>
            <!-- / 移除按鈕 -->
            
        </div>
        <!-- / 標題區塊 -->
        
        
        <!-- 內容區塊 -->
        <div class="ts segment">
            
            <!-- 表單 -->
            <form class="ts small form">
                
                <!-- 路徑 -->
                <div class="field">
                    <label>Path</label>
                    <input v-model="resource.path">
                </div>
                <!-- / 路徑 -->
                
                <!-- 註釋 -->
                <div class="field">
                    <label>Description</label>
                    <textarea v-model="resource.description"></textarea>
                </div>
                <!-- / 註釋 -->
                
                <!-- 網址參數 -->
                <query-section :querys="resource.uriParameters"></query-section>
                <!-- / 網址參數 -->
                
            </form>
            <!-- / 表單 -->
            
        </div>
        <!-- / 內容區塊 -->
        
    </div>
</template>

<script>
import SecuritySection from "./SecuritySection"
import HeaderSection   from "./HeaderSection"
import QuerySection    from "./QuerySection"
import ResponseSection from "./ResponseSection"

export default
{
    name: 'ResourceCreation',
    components:
    {
        SecuritySection,
        HeaderSection,
        QuerySection,
        ResponseSection
    },
    props:
    {
        resource: { }
    },
    methods:
    {
        remove()
        {
            var s = this.$store.state
            
            delete s.projects[s.resourcePointer]
            
            s.resourcePointer     = null
            s.methodPointer       = null
            s.queryPointer        = null
            s.presentationPointer = null
            s.securityPinter      = null
            s.pointer             = null
        }
    }
}
</script>

<style scoped>
.ts.big.header
{
    display: inline
}
</style>