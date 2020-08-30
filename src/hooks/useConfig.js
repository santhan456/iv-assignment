import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getConfig} from "../store/config/configSelectors";
import { FETCH_CONFIG_ASYNC_STARTED } from "../store/config/configActions";

export function useConfig(){
    const dispatch = useDispatch();

    const config = useSelector(getConfig);

    React.useEffect(() => {
        if(!config){
            dispatch({type: FETCH_CONFIG_ASYNC_STARTED});
        }
    }, [config]);

    return config;
}