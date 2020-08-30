export function getConfig(state){
    return state.config.data;
}

export function isConfigCallInProgress(state){
    return state.config.isCallInProgress;
}

export function getTableConfig(state){
    return getConfig(state).tableConfig;
} 

export function getApiConfig(state){
    return getConfig(state).apis;
} 