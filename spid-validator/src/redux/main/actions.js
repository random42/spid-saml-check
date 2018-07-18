export const SET_REQUEST_XML = "SET_REQUEST_XML";
export const SET_METADATA_SP_URL = "SET_METADATA_SP_URL";
export const SET_METADATA_SP_XML = "SET_METADATA_SP_XML";

class Actions {

    static setRequestXML(value) {
        return {
            type: SET_REQUEST_XML,
            value: value
        }        
    }

    static setMetadataSpURL(value) {
        return {
            type: SET_METADATA_SP_URL,
            value: value
        }        
    }

    static setMetadataSpXML(value) {
        return {
            type: SET_METADATA_SP_XML,
            value: value
        }        
    }
}

export default Actions;
