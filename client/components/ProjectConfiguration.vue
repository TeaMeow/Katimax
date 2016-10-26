<template>
    <div class="sixteen wide column">
        <div class="ts segments">
            
            <!-- 標題 -->
            <div class="ts segment">
                <h1 class="ts massive header">
                    <span>Project configuration</span>
                </h1>
            </div>
            <!-- / 標題 -->
            

            <div class="ts segment">
                <form class="ts form">
                    <div class="fields">
                        <div class="eleven wide field">
                            <label>Project name</label>
                            <input>
                        </div>
                        <div class="five wide field">
                            <label>Version</label>
                            <input placeholder="1.0.0">
                        </div>
                    </div>
                    <div class="field">
                        <label>Base URL</label>
                        <input placeholder="http://www.example.com">
                    </div>
                    <div class="field">
                        <label>Description</label>
                        <div class="ts fluid resizable input">
                            <textarea rows="12"></textarea>
                        </div>
                    </div>
                </form>
            </div>
            
        </div>
</template>

<script>
export default
{
    name: 'ProjectConfiguration'
}
</script>

<style>
.ts.massive.header
{
    display: inline
}
</style>