export interface Sponsor {
    name: string;
    logoSrc: string;
    blurb?: string;
}

export const sponsors: Sponsor[] = [
    {
        name: "UVA Math",
        logoSrc: "/sponsors/uva_math_logo.png",
        blurb:
            "Mathematics at UVA provides excellent education and research opportunities to over 250 declared majors and houses world-class faculty.",
    },
];
