import * as Constants from './MyComponentConstants';

export function setName(value) {
    return {
        type: Constants.SET_NAME,
        value: value ? value.trim() : null,
    };
}
