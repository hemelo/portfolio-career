export type Setup = {
    notebook: SetupComponent;
    monitor: SetupComponent[]
    microphone: SetupComponent,
    headphone: SetupComponent[],
    keyboard: SetupComponent,
    mouse: SetupComponent,
    chair: SetupComponent,
    webcam: SetupComponent,
    extras: SetupComponent[]
}

type SetupComponent = {
    specs?: string;
    description: string;
    resume: string;
    link?: string;
}