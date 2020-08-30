import * as React from "react";
import {getVendors} from "../../store/vendors/vendorSelectors";
import {useSelector} from "react-redux";

export function withVendorsList(Component){
    return function (componentProps){

        const hasConfig = componentProps.config;  
        const vendors = useSelector(getVendors);

        React.useEffect(()=>{
            if(hasConfig){
                // dispatch action here
            }
        }, [hasConfig]);

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