import { message } from 'antd';

export const SuccessMessage = (msg) => {
    message.success(msg)
}
export const ErrorMessage = (msg) => {
    message.error(msg)
}
export const ShowAlert = (alertType, msg) => {
    if (alertType === "success") {
        SuccessMessage(msg)
    }
    else {
        ErrorMessage(msg)
    }
};