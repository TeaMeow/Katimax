<template>
    <div>
        <h5 class="ts dividing header">RESPONSES</h5>
        <table class="ts selectable striped table">
            <tbody>
                <tr>
                    <td><strong>201 - Created</strong></td>
                    <td>Logged in successfully and the new token is generated.</td>
                    <td class="collapsing">
                        <button class="ts small basic negative right floated circular compact icon button">
                            <i class="trash icon"></i>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <div class="fields">
                            <div class="ten wide field">
                                <label>Status</label>
                                <select class="ts mini fluid basic dropdown">
                                    <option>200 - OK</option>
                                    <option>201 - Created</option>
                                </select>
                            </div>
                            <div class="six wide field">
                                <label>Type</label>
                                <select class="ts mini fluid basic dropdown">
                                    <option>200 - OK</option>
                                    <option>201 - Created</option>
                                </select>
                            </div>
                        </div>
                        <div class="field">
                            <label>Description</label>
                            <textarea></textarea>
                        </div>
                        <h6 class="ts dividing header">Example</h6>
                        <div class="field">
                            <label>username<span>?</span><span>*</span></label>
                            <input placeholder="(string)">
                        </div>
                    </td>
                    <td class="collapsing top aligned">
                        <button class="ts small basic right floated circular compact icon button">
                            <i class="plus icon"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default
{
    name: 'ResponseSection'
}
</script>