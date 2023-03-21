import {NextApiRequest, NextApiResponse} from "next";
import {Setup} from "../../app/models/setup";

export default function handler(req: NextApiRequest, res: NextApiResponse<Setup>) {
    res.status(200).json(setup);
}

const setup: Setup = {
    notebook: {
        specs: "Intel i7 7500U, Nvidia 940MX, 8GB DDR4 2133MHz, WD 240GB NVMe, 2TB HD | Model: F5-573G-75A3",
        description: "Acer Aspire",
        resume: "For coding on simple projects and lighter IDEs. Also I use as a home server for small services.",
    },
    desktop: {
        specs: "Ryzen 5 5600X, Nvidia RTX 3060 12GB, XPG 16GB DDR4 3600MHz, XPG 1TB NVMe, Asus Tuf B550M-Plus",
        description: "Gamer",
        resume: "The best part is that I don't need to worry with loadings with my XPG Gammix S70 which has an incredible perform of 7.5GBs when reading data due PCIe gen4.",
    },
    monitor: [
        {
            specs: "IPS, HDR, FreeSync, GSync, 5ms, 75hz, Full HD, 2.5K | Model: 29WK600",
            description: "LG Ultrawide 29\'",
            resume: "Perfect for coding."
        }
    ],
    microphone: {
        specs: undefined,
        description: "HyperX QuadCast S",
        resume: undefined,
    },
    headphone: [
        {
            specs: "40mm, 7.1, Dolby Surround",
            description: "Logitech G733",
            resume: "Great wireless headset. Battery lasts all day (sometimes three with an avg. of 8h usage per day)."
        }
    ],
    keyboard: {
        specs: "Red Switch",
        description: "Sharkoon SGK3 White",
        resume: undefined,
        link: undefined
    },
    mouse: {
        specs: undefined,
        description: undefined,
        resume: undefined,
        link: undefined
    },
    chair: {
        specs: undefined,
        description: undefined,
        resume: undefined,
        link: undefined
    },
    webcam: {
        specs: "1080p30, 720p60",
        description: "C922 PRO HD STREAM",
        resume: "It's a very basic webcam, but it suits me well everyday",
    },
    eReader: {
        specs: "Paperwhite 11",
        description: "Kindle",
        resume: "I use my kindle to read technical books and consult about Engineering, Networks, Systems, Architecture and Design, as well as, of couse, programming languages"
    },
    drawingTable: {
        specs: "Model: CTL472",
        description: "Wacom One",
        resume: "Basic drawing table which helps me a lot for writing abstracts"
    },
    lightBar: {
        specs: "Model: BW-CML2",
        description: "Blitzwolf",
        resume: "This light bar is simply one of the most perfect things on my desktop because it helps a lot with my night vision when I have to spend longer hours in front of the computer. I reduce the brightness of the monitor and turn it on to light up my setup and feel more comfortable while programming in the middle of its warm light (among several white light temperature options it offers)",
    },
    usbHub: {
        description: "TP Link USB3.0",
        specs: "7-Port Data Hub & 3 Fast Charge Outputs",
        resume: "To enhance cable management on my desk"
    }
}

