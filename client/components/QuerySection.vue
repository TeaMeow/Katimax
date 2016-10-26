<template>
    <div>
        
        <!-- 標題 -->
        <h5 class="ts dividing header">PATH VARIABLES</h5>
        <!-- / 標題 -->
        
        <!-- 資訊表格 -->
        <table class="ts table">
            <tbody>
                
                <!-- 單個欄位 -->
                <tr v-for="(query, name) in querys">
                    <td>
                        <strong>
                            {{ name }}
                            <span v-show="!query.required">?</span>
                        </strong>
                    </td>
                    <td v-text="query.description"></td>
                    <td class="collapsing">
                        <button style="display: inline" @click="load(name)" class="ts small basic circular compact icon button">
                            <i class="edit icon"></i>
                        </button>
                        <button style="display: inline" @click="remove(name)" class="ts small basic negative circular compact icon button">
                            <i class="trash icon"></i>
                        </button>
                    </td>
                </tr>
                <!-- / 單個欄位 -->
            </tbody>
            
            <tfoot>
                
                <!-- 展開欄位 -->
                <tr v-show="!expanded">
                    <th colspan="3" :class="{'empty section': !hasQuery}">
                        <a @click="toggle"><i class="plus icon"></i> Add a new variable</a>
                    </th>
                </tr>   
                <!-- 展開欄位 -->
                
                <!-- 設定欄位 -->
                <tr v-show="expanded">
                    <th colspan="2" :class="{'empty section': !hasQuery}">
                        
                        <!-- 欄位群組 -->
                        <div class="two fields">
                            
                            <!-- 變數名稱 -->
                            <div class="field">
                                <label>Name</label>
                                <input v-model="name">
                            </div>
                            <!-- / 變數名稱 -->
                            
                            <!-- 變數類型 -->
                            <div class="field">
                                <label>Type</label>
                                <select v-model="type" class="ts mini fluid basic dropdown">
                                    <option value="string">String</option>
                                    <option value="integer">Integer</option>
                                    <option value="boolean">Boolean</option>
                                </select>
                            </div>
                            <!-- / 變數類型 -->
                            
                        </div>
                        <!-- / 欄位群組 -->
                        
                        <!-- 欄位群組 -->
                        <div class="fields" v-show="type === 'string'">
                            <div class="six wide field">
                                <label>Minimum length</label>
                                <input v-model="minimumLength">
                            </div>
                            <div class="six wide field">
                                <label>Maximum length</label>
                                <input v-model="maximumLength">
                            </div>
                            <div class="four wide field">
                                <label>Pattern</label>
                                <input v-model="pattern">
                            </div>
                        </div>
                        <!-- / 欄位群組 -->
                        
                        <!-- 欄位群組 -->
                        <div class="two fields" v-show="type === 'integer'">
                            <div class="field">
                                <label>Minimum</label>
                                <input v-model="minimum">
                            </div>
                            <div class="field">
                                <label>Maximum</label>
                                <input v-model="maximum">
                            </div>
                        </div>
                        <!-- / 欄位群組 -->
                        
                        <!-- 欄位群組 -->
                        <div class="fields">
                            <div class="nine wide field">
                                <label>Example</label>
                                <input v-model="example">
                            </div>
                            <div class="four wide field">
                                <label>Default value</label>
                                <input v-model="defaultValue">
                            </div>
                            <div class="two wide field">
                                <label>Required</label>
                                <div class="ts toggle checkbox">
                                    <input type="checkbox" v-model="required" id="required_field">
                                    <label for="required_field"></label>
                                </div>
                            </div>
                        </div>
                        <!-- / 欄位群組 -->
                        
                        <!-- 註釋欄位 -->
                        <div class="field" style="margin-bottom: 0">
                            <label>Description</label>
                            <textarea v-model="description"></textarea>
                        </div>
                        <!-- / 註釋欄位 -->
                        
                    </th>
                    <th class="collapsing top aligned">
                        <button class="ts primary small right floated circular compact icon button" @click="confirm">
                            <i class="check mark icon"></i>
                        </button>
                        <br>
                        <br>
                        <button class="ts small right floated circular compact icon button" @click="cancel">
                            <i class="remove icon"></i>
                        </button>
                    </th>
                </tr>
                <!-- / 設定欄位 -->
                
            </tfoot>
        </table>
        <!-- / 資訊表格 -->
        
    </div>
</template>

<script>
export default
{
    name: 'QuerySection',
    props:
    {
        querys: {}
    },
    data()
    {
        var s   = this.$store.state,
            poi = s.resourcePointer
        
        return {
            store        : this.$store.state,
            expanded     : false, 
            type         : 'string', 
            hasQuery     : s.project.resources[poi].uriParameters.length != 0,
            name         : null,
            minimumLength: null,
            maximumLength: null,
            minimum      : null,
            maximum      : null,
            example      : null,
            defaultValue : null,
            description  : null,
            required     : true,
            pattern      : null
        }  
    },
    methods:
    {
        clean()
        {
            this.name          = null
            this.type          = 'string'
            this.required      = true
            this.description   = null
            this.minimumLength = null
            this.maximumLength = null
            this.minimum       = null
            this.maximum       = null
            this.example       = null
            this.defaultValue  = null
            this.pattern       = null
            this.expanded      = false
        },
        toggle()
        {
            this.expanded = this.expanded ? false : true
        },
        cancel()
        {
            this.clean()
        },
        confirm()
        {
            var resPoi   = this.store.resourcePointer
            var varIdx   = null
            var queryPoi = this.store.queryPointer
            var querys   = this.store.project.resources[resPoi].uriParameters
            var query    = typeof querys[queryPoi] !== 'undefined' ? querys[queryPoi] : false

            if(query)
            {
                if(queryPoi !== this.name)
                {
                    querys[this.name] = querys[queryPoi]
                    console.log(this.name, queryPoi)
                    console.log(querys)
                    delete querys[queryPoi]
                    query = querys[this.name]
                }
                
                
                
                query.type          = this.type
                query.required      = this.required
                query.description   = this.description
                query.minimumLength = this.minimumLength
                query.maximumLength = this.maximumLength
                query.minimum       = this.minimum
                query.maximum       = this.maximum
                query.example       = this.example
                query.defaultValue  = this.defaultValue
                query.pattern       = this.pattern
            }
            else
            {
                querys[this.name] =
                {
                    type         : this.type,
                    required     : this.required,
                    description  : this.description,
                    minimumLength: this.minimumLength,
                    maximumLength: this.maximumLength,
                    minimum      : this.minimum,
                    maximum      : this.maximum,
                    example      : this.example,
                    defaultValue : this.defaultValue,
                    pattern      : this.pattern
                }
            }
            
            this.clean()
        },
        remove(name)
        {
            var resPoi = this.store.resourcePointer
            var querys = this.store.project.resources[resPoi].uriParameters
            delete this.$store.state.project.resources[resPoi].uriParameters[name]
            this.hasQuery = querys.length != 0
        },
        load(name)
        {
            this.store.queryPointer = name
            
            var resPoi   = this.store.resourcePointer,
                queryPoi = this.store.queryPointer,
                obj      = this.store.project.resources[resPoi].uriParameters[queryPoi]

            this.name          = name
            this.type          = typeof obj.type          !== 'undefined' ? obj.type          : 'string'
            this.required      = typeof obj.required      !== 'undefined' ? obj.required      : true
            this.description   = typeof obj.description   !== 'undefined' ? obj.description   : null
            this.minimumLength = typeof obj.minimumLength !== 'undefined' ? obj.minimumLength : null
            this.maximumLength = typeof obj.maximumLength !== 'undefined' ? obj.maximumLength : null
            this.minimum       = typeof obj.minimum       !== 'undefined' ? obj.minimum       : null
            this.maximum       = typeof obj.maximum       !== 'undefined' ? obj.maximum       : null
            this.example       = typeof obj.example       !== 'undefined' ? obj.example       : null
            this.defaultValue  = typeof obj.defaultValue  !== 'undefined' ? obj.defaultValue  : null
            this.pattern       = typeof obj.pattern       !== 'undefined' ? obj.pattern       : null
            
            this.expanded = true
        }
    }
}
</script>

<style>
.ts.dividing.header
{
    margin-top: 1.5em;
}
.add
{
    color    : #666;
    float    : right;
    font-size: .8em;
    cursor   : pointer;
}

.add i.icon
{
    margin-right: 0;
}

.empty.section
{
    border-top: 0 !important;
}
</style>