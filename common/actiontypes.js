function createRequestType (name) {
    return {
        REQUESTED: `${name}_REQUESTED`,
        SUCCEEDED: `${name}_SUCCEEDED`,
        FAILED: `${name}_FAILED`,
    }
}

const AUTH_WITH_GOOGLE = createRequestType('AUTH_WITH_GOOGLE')
const SIGN_OUT = createRequestType('SIGN_OUT')
const ActionTypes = {
    AUTH_WITH_GOOGLE,
    SIGN_OUT,
}

export default ActionTypes
