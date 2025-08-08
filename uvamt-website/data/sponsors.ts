export interface Sponsor {
    name: string;
    logoSrc: string;
    blurb?: string;
}

export const sponsors: Sponsor[] = [
    {
        name: "MathDash",
        logoSrc: "/sponsors/mathdash_logo.png",
        blurb:
            "MathDash is a personalized math training platform that meets students where they are at, while keeping them motivated through rating, gamified streaks, and small prizes. The most common feedback they get from parents is \"Thank you for making my child excited about math.\"",
    },
    {
        name: "UVA Math",
        logoSrc: "/sponsors/uva_math_logo.png",
        blurb:
            "Mathematics at UVA provides excellent education and research opportunities to over 250 declared majors and houses world-class faculty.",
    },
];
