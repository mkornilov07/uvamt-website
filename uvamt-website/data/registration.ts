export type RegistrationMode = "open" | "closed";

type RegistrationBase = {
    title: string;
    description: string;
    buttonLabel: string;
};

export type RegistrationState =
    | ({ mode: "open"; href: string } & RegistrationBase)
    | ({ mode: "closed"; href?: never } & RegistrationBase);

export const registration = {
    /*
    switch between open and closed as necessary
     */

    //mode: "open" as RegistrationMode,
    mode: "closed" as RegistrationMode,

    /*
    Make sure the text actually makes sense for the given year/situation!
     */
    open: {
        title: "Secure Your Spot",
        description:
            "On-time registration closed on February 21, 2026. Late registration will be open until February 28, 2026.",
        buttonLabel: "Register Now",
        href: "https://forms.gle/9zDSLsvp2Hu9XgFWA",
    },

    closed: {
        title: "Registration Closed",
        description:
            "Registration for UVAMT 2026 has closed. Stay tuned for updates about future years!",
        buttonLabel: "Registration Closed",
    },
} as const;

export function getRegistrationContent(): RegistrationState {
    return registration.mode === "open"
        ? { mode: "open", ...registration.open }
        : { mode: "closed", ...registration.closed };
}