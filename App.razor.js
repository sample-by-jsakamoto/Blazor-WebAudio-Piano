export const init = (dotnetObj) => {
    const keyDownHandler = (ev) => {
        if (ev.repeat)
            return;
        dotnetObj.invokeMethodAsync("OnKeyDown", ev.code);
    };
    const keyUpHandler = (ev) => {
        dotnetObj.invokeMethodAsync("OnKeyUp", ev.code);
    };
    document.addEventListener("keydown", keyDownHandler);
    document.addEventListener("keyup", keyUpHandler);
    return {
        dispose: () => {
            document.removeEventListener("keydown", keyDownHandler);
            document.removeEventListener("keyup", keyUpHandler);
        }
    };
};
