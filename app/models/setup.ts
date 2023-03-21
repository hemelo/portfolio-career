export type Setup = {
    notebook: SetupComponent;
    desktop: SetupComponent;
    monitor: SetupComponent[]
    microphone: SetupComponent,
    headphone: SetupComponent[],
    keyboard: SetupComponent,
    mouse: SetupComponent,
    chair: SetupComponent,
    webcam: SetupComponent,
    eReader: SetupComponent,
    drawingTable: SetupComponent,
    lightBar: SetupComponent,
    usbHub: SetupComponent,
}

export type SetupComponent = {
    specs?: string;
    description?: string;
    resume?: string;
    link?: string;
}