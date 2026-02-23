export interface Sponsor {
    name: string;
    logoSrc: string;
    blurb?: string;
}

export const sponsors: Sponsor[] = [
    {
        name: "SPARC",
        logoSrc: "/sponsors/sparc.png",
        blurb:
            "A free program for talented high schoolers to develop quantitative skills and apply them to the world."
    },
    {
        name: "UVA Math",
        logoSrc: "/sponsors/uva_math_logo.png",
        blurb:
            "Mathematics at UVA provides excellent education and research opportunities to over 250 declared majors and houses world-class faculty.",
    },
];
