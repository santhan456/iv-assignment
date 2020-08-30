import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getConfig} from "../store/config/configSelectors";

export function useConfig(){
    const dispatch = useDispatch();

    // dispatch();

    return useSelector(getConfig);
}