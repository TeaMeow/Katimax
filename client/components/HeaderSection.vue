<template>
    <div>
        <h5 class="ts dividing header">HEADER</h5>
        <table class="ts selectable striped table">
            <tbody>
                <tr>
                    <td><strong>cv_token</strong></td>
                    <td>The token for credit card validation.</td>
                    <td class="collapsing">
                        <button class="ts small basic negative right floated circular compact icon button">
                            <i class="trash icon"></i>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <div class="two fields">
                            <div class="field">
                                <label>Name</label>
                                <input>
                            </div>
                                <div class="field">
                                <label>Type</label>
                                <select class="ts mini fluid basic dropdown">
                                    <option>String</option>
                                    <option>Integer</option>
                                    <option>Boolean</option>
                                    <option>Object</option>
                                    <option>Array</option>
                                </select>
                            </div>
                        </div>
                        <div class="fields">
                            <div class="fourteen wide field">
                                <label>Example</label>
                                <input>
                            </div>
                            <div class="two wide field">
                                <label>Required</label>
                                <div class="ts toggle checkbox">
                                    <input type="checkbox" id="required">
                                    <label for="required"></label>
                                </div>
                            </div>
                        </div>
                        <div class="field" style="margin-bottom: 0">
                            <label>Description</label>
                            <textarea></textarea>
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
    name: 'HeaderSection'
}
</script>