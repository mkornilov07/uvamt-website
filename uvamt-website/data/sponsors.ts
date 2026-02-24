export type SponsorTier = "gold" | "silver" | "bronze" | "none";

export interface Sponsor {
    name: string;
    logoSrc: string;
    blurb?: string;
    tier: SponsorTier;
}

export const sponsors: Sponsor[] = [
    {
        name: "Jane Street",
        logoSrc: "/sponsors/janestreet_logo.png",
        tier: "gold",
        blurb:
            "Jane Street is a quantitative trading firm and liquidity provider with a unique focus on technology and collaborative problem solving. We look for smart people with curious minds from any background."
    },
    {
        name: "Hudson River Trading",
        logoSrc: "/sponsors/hrt_logo.png",
        tier: "silver",
        blurb:
            "HRT is first and foremost a math and technology company. We are engineers and researchers working as one team to solve difficult problems, and trading millions of shares a day on the world’s financial markets."
    },
    {
        name: "SPARC",
        logoSrc: "/sponsors/sparc.png",
        tier: "bronze",
        blurb:
            "A free program for talented high schoolers to develop quantitative skills and apply them to the world."
    },
    {
        name: "UVA Math",
        logoSrc: "/sponsors/uva_math_logo.png",
        tier: "none",
        blurb:
            "Mathematics at UVA provides excellent education and research opportunities to over 250 declared majors and houses world-class faculty.",
    },
];