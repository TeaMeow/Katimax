<template>
    <main>
        <nav-bar></nav-bar>
    
        <div class="ts narrow grid container">
            
            <!-- 全寬 -->
            <export-section v-show="pointer === 'export'"></export-section>
            <import-section v-show="pointer === 'import'"></import-section>
            <project-configuration v-show="pointer === 'configuration'"></project-configuration>
            <!-- / 全寬 -->
            
            <!-- 左側 -->
            <side-bar></side-bar>
            <!-- / 左側 -->
            
            <!-- 右側 -->
            <div class="eleven wide column">
                <presentation-creation v-show="pointer === 'presentation'"></presentation-creation>
                <security-creation     v-show="pointer === 'security'" ></security-creation>
                <method-creation       v-show="pointer === 'method'"  ></method-creation>
                <resource-creation     v-show="pointer === 'resource'" :resource="getResource"></resource-creation>
                <nothing-selected v-show="!pointer"></nothing-selected>
            </div>
            <!-- / 右側 -->
            
        </div>
        
    </main>
    
</template>

<script>
import NavBar               from "../components/Navbar"
import ExportSection        from "../components/Export"
import ImportSection        from "../components/Import"
import SideBar              from "../components/Sidebar"
import ResourceCreation     from "../components/ResourceCreation"
import MethodCreation       from "../components/MethodCreation"
import PresentationCreation from "../components/PresentationCreation"
import SecurityCreation     from "../components/SecurityCreation"
import ProjectConfiguration from "../components/ProjectConfiguration"
import NothingSelected      from "../components/Nothing"
import "../assets/jasper-min.js"
import "../assets/tocas.js"
import "../assets/util.js"


export default
{
    components:
    {
        NavBar,
        ExportSection,
        ImportSection,
        SideBar,
        ResourceCreation,
        MethodCreation,
        PresentationCreation,
        SecurityCreation,
        ProjectConfiguration,
        NothingSelected
    },
    data()
    {
        return { ...this.$store.state }
    },
    computed:
    {
        pointer()
        {
            return this.$store.state.pointer
        },
        getResource()
        {
            var res = this.project.resources[this.resourcePointer]

            return typeof res !== 'undefined' ? res : {}
        }
    }
}

jA(document).ready(() =>
{
    ts('.ts.dropdown:not(.basic)').dropdown()
})
</script>

<style>
@import "../assets/tocas.min.css";

.ts.form .field { margin-bottom: 1em !important; }
.ts.narrow.grid.container{ margin-top: 3em }
</style>