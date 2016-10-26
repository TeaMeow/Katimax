<template>
    <div class="ts segments">
        <div class="ts segment">
            <h4 class="ts big header">
                <span class="ts large horizontal primary label">POST</span> <span>/user</span>
            </h4>
            <button class="ts small basic negative right floated circular compact icon button">
                <i class="trash icon"></i>
            </button>
        </div>
        <div class="ts segment">
            <form class="ts small form">
                <div class="field">
                    <label>Method</label>
                    <select class="ts mini fluid basic dropdown">
                        <option>POST</option>
                        <option>GET</option>
                        <option>PATCH</option>
                        <option>PUT</option>
                        <option>DELETE</option>
                        <option>OPTIONS</option>
                    </select>
                </div>
                
                <div class="field">
                    <label>Description</label>
                    <textarea></textarea>
                </div>
                
                <!-- 保護機制 -->
                <security-section></security-section>
                <!-- / 保護機制 -->
                
                <!-- 標頭 -->
                <header-section></header-section>
                <!-- / 標頭 -->
                   
                <!-- 身體 -->
                <body-section></body-section>
                <!-- / 身體 -->
                
                <!-- 回應 -->
                <response-section></response-section>
                <!-- / 回應 -->
                
                <button class="ts button">Save</button>
            </form>
        </div>
    </div>
</template>

<script>
import SecuritySection from "./SecuritySection"
import HeaderSection   from "./HeaderSection"
import BodySection     from "./BodySection"
import ResponseSection from "./ResponseSection"

export default
{
    name: 'MethodCreation',
    components:
    {
        SecuritySection,
        HeaderSection,
        BodySection,
        ResponseSection
    }
}
</script>

<style scoped>
.ts.big.header
{
    display: inline
}
</style>