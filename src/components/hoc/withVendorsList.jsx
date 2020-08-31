import * as React from "react";
import {getVendors, isVendorCallFailed} from "../../store/vendors/vendorSelectors";
import {FETCH_VENDOR_ASYNC_STARTED} from "../../store/vendors/vendorActions";
import {useSelector, useDispatch} from "react-redux";

export function withVendorsList(Component){
    return function (componentProps){

        const hasConfig = componentProps.config;  
        const vendors = useSelector(getVendors);
        const hasError = useSelector(isVendorCallFailed);

        const dispatch = useDispatch();

        React.useEffect(()=>{
            if(hasConfig && !vendors && !hasError){
                dispatch({type: FETCH_VENDOR_ASYNC_STARTED})
            }
        }, [hasConfig, vendors, dispatch, hasError]);

        const propsFromHoc = {
            vendors
        }

        const props = {
            ...componentProps,
            ...propsFromHoc
        }

        return <Component {...props} />;
    }
}