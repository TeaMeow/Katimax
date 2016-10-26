<template>
    <div class="sixteen wide column">
        <div class="ts segments">
            
            <!-- 標題 -->
            <div class="ts segment">
                <h1 class="ts massive header" style="display: inline">
                    <span>Import your RAML 1.0</span>
                </h1>
            </div>
            <!-- / 標題 -->
            

            <div class="ts right aligned segment">
                <div class="ts fluid resizable input">
                    <textarea rows="12"></textarea>
                </div>
                <button class="ts labeled icon primary button">
                    <i class="checkmark icon"></i>
                    Import
                </button>
            </div>
            
        </div>
    </div>
</template>

<script>
export default
{
    name: 'Import'
}
</script>

<style scoped>
.ts.fluid.resizable.input
{
    margin-bottom: 1em;
}
</style>