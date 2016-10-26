<template>
    <div>
        <h5 class="ts dividing header">BODY</h5>
        <div class="field">
            <label>Choose from the exists presentations...</label>
            <select class="ts mini fluid basic dropdown">
                <option>X-jwt</option>
                <option>Basic Authorzation</option>
            </select>
        </div>
        <div class="ts horizontal divider">Or create the properitoes ...</div>
        <table class="ts selectable striped table">
            <tbody>
                <tr>
                    <td><strong>cv_token<span>?</span><span>*</span></strong></td>
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
                                <input>
                            </div>
                        </div>
                        <div class="fields">
                            <div class="ten wide field">
                                <label>Pattern</label>
                                <input>
                            </div>
                            <div class="six wide field">
                                <label>Default Value</label>
                                <input>
                            </div>
                        </div>
                        <div class="two fields">
                            <div class="field">
                                <label>Minimum</label>
                                <input>
                            </div>
                            <div class="field">
                                <label>Maximum</label>
                                <input>
                            </div>
                        </div>
                        <div class="fields">
                            <div class="seven wide field">
                                <label>Minimum Items</label>
                                <input>
                            </div>
                            <div class="seven wide field">
                                <label>Maximum Items</label>
                                <input>
                            </div>
                            <div class="two wide field">
                                <label>Unique Item</label>
                                <div class="ts toggle checkbox">
                                    <input type="checkbox" id="unique_item">
                                    <label for="unique_item"></label>
                                </div>
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
                                    <input type="checkbox" checked="checked" id="required_field">
                                    <label for="required_field"></label>
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
    name: 'BodySection'
}
</script>