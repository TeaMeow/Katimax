import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 0,
    pointer: 'resource',
    resourcePointer: '/authorization/{user}',
    methodPointer: null,
    queryPointer: null,
    presentationPointer: null,
    securityPointer: null,
    presentations: [],
    
    project:
    {
        title: 'TeaMeow API',
        version: 'v1',
        baseUri: 'http://localhost:8080',
        protocols: ['HTTP', 'HTTPS'],
        mediaType: ['application/json'],
        securitySchemes:
        {
            jwt:
            {
                type: 'x-jwt',
                description: 'Authorization with jwt usage header "Authorization" with token',
                describedBy:
                {
                    headers:
                    {
                        Authorization:
                        {
                            description: 'Valid jwt token',
                            example: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ'
                        }
                    },
                    responses:
                    {
                        401:
                        {
                            description: 'Bad or expired token.'
                        },
                        403:
                        {
                            description: 'Access denied not valid privilege in resurces.'
                        }
                    }
                }
            }
        },
        resources:
        {
            '/authorization/{user}':
            {
                uriParameters:
                {
                    user:
                    {
                        type: 'string',
                        required: false
                    }
                },
                description: "Authorization.",
                post:
                {
                    description: "Get the authorization token.",
                    responses:
                    {
                        201:
                        {
                            description: 'Logged in successfully and the new token is generated.',
                            body:
                            {
                                'application/json':
                                {
                                    example:
                                    {
                                        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ'
                                    }
                                }
                            }
                        },
                        401:
                        {
                            description: 'The password doesn\'t match with the account which you trying to log in with.'
                        },
                        404:
                        {
                            description: 'Account not found.'
                        }
                    },
                    body:
                    {
                        'application/json':
                        {
                            type: 'object',
                            properties: 
                            {
                                username: 
                                {
                                    type: 'string',
                                    required: true,
                                    minLength: 6,
                                    maxLength: 24,
                                    pattern: '^[A-Za-z0-9_]+$'
                                },
                                password:
                                {
                                    type: 'string',
                                    required: true,
                                    minLength: 8,
                                    maxLength: 80  
                                }
                            },
                            example:
                            {
                                username: "YamiOdymel",
                                password: "yamiodymel"
                            }
                        }
                    }
                },
                delete:
                {
                    description: "Destroy authorization token.",
                    securedBy: ['jwt'],
                    responses:
                    {
                        204:
                        {
                            description: 'The token has been deleted successfully.'
                        },
                        401:
                        {
                            description: 'The Authorization header was incorrect.'
                        }
                    }
                }
            }
        }
    }
    
    
    
    
    
    
    
    
    
}

const mutations =
{
    INCREMENT(state)
    {
        state.count++
    }
}

const actions =
{
    INCREMENT({commit})
    {
        commit('INCREMENT')
    },
    INCREMENT_ASYNC({commit})
    {
        setTimeout(() =>
        {
            commit('INCREMENT')
        }, 1000)
    }
}

const store = new Vuex.Store({
    state,
    mutations,
    actions
})

export default store