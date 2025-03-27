interface IDotNetObjectRef {
    invokeMethodAsync: (...args: any[]) => Promise<any>;
}

export const init = (dotnetObj: IDotNetObjectRef) => {

    const keyDownHandler = (ev: KeyboardEvent) => {
        if (ev.repeat) return;
        dotnetObj.invokeMethodAsync("OnKeyDown", ev.code)
    };

    const keyUpHandler = (ev: KeyboardEvent) => {
        dotnetObj.invokeMethodAsync("OnKeyUp", ev.code)
    };

    document.addEventListener("keydown", keyDownHandler);
    document.addEventListener("keyup", keyUpHandler);

    return {
        dispose: () => {
            document.removeEventListener("keydown", keyDownHandler);
            document.removeEventListener("keyup", keyUpHandler);
        }
    };
}