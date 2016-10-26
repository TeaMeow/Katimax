<template>
    <div class="five wide column">
        <div class="ts segments">
            
            <!-- 標題 -->
            <div class="ts segment">
                <h1 class="ts massive header">
                    <span>Project name</span>
                </h1>
                <button class="ts small basic right floated circular compact icon button"><i class="setting icon"></i></button>
            </div>
            <!-- / 標題 -->
            
            
            <!-- 列表 -->
            <div class="ts segment">
                
                <!-- 安全模組 -->
                <sidebar-security></sidebar-security>
                <!-- / 安全模組 -->
                
                <div class="ts hidden divider"></div>
                
                <!-- 資源 -->
                <sidebar-resource></sidebar-resource>
                <!-- / 資源 -->
                
                <div class="ts hidden divider"></div>
                
                <!-- 描述檔 -->
                <sidebar-presentation></sidebar-presentation>
                <!-- / 描述檔 -->
                
            </div>
            <!-- / 列表 -->
            
        </div>
    </div>
</template>

<script>
import SidebarSecurity from "./SidebarSecurity"
import SidebarResource from "./SidebarResource"
import SidebarPresentation from "./SidebarPresentation"

export default
{
    name: 'Sidebar',
    components:
    {
        SidebarSecurity,
        SidebarResource,
        SidebarPresentation
    }
}
</script>

<style scoped>
.ts.massive.header
{
    display: inline;
}
</style>