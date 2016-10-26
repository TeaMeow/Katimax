<template>
    <div>
        <h5 class="ts dividing header">SECURED BY</h5>
        <table class="ts selectable striped table">
            <tbody>
                <tr>
                    <td><strong>X-jwt</strong></td>
                    <td>The JSON Web Token.</td>
                    <td class="collapsing">
                        <button class="ts small basic negative right floated circular compact icon button">
                            <i class="trash icon"></i>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <select class="ts mini fluid basic dropdown">
                            <option>X-jwt</option>
                            <option>Basic Authorzation</option>
                        </select>
                    </td>
                    <td class="collapsing">
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
    name: 'SecuritySection'
}
</script>