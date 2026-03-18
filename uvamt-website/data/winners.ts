// data/winners.ts

export interface IndividualResult {
    place: number;
    name: string;
    imageSrc?: string;
}

export interface TeamResult {
    place: number;
    members: string[];
    imageSrc?: string; // group photo
}

export interface YearResults {
    year: number;
    team: TeamResult[];
    individual: IndividualResult[];
}

export const winners: YearResults[] = [
    {
        year: 2025,
        team: [
            {
                place: 1,
                members: ["Alex Chen", "Andrew Wang", "Eric Chen", "Michael Znachonok", "Nate Paul"],
                imageSrc: "/winners/2025/team1.jpg",
            },
        ],
        individual: [
            { place: 1, name: "Nate Paul",          imageSrc: "/winners/2025/individual1.jpg" },
            { place: 2, name: "Alex Chen",           imageSrc: "/winners/2025/individual2.jpg" },
            { place: 3, name: "Daron Chen",          imageSrc: "/winners/2025/individual3.jpg" },
            { place: 4, name: "Michael Znachonok",   imageSrc: "/winners/2025/individual4.jpg" },
        ],
    },
    {
        year: 2026,
        team: [
            {
                place: 1,
                members: ["Nate Paul", "Audrey Chen", "Andrew Wang", "Eshaan Mital", "Alex Chen", "Philippe Deur"],
                imageSrc: "/winners/2026/team1.jpg",
            },
            {
                place: 2,
                members: ["Ryan Chan", "Rudy Khanwalkar", "Wilson Cao", "Aryan Raj", "Victor Moldoveanu"],
                imageSrc: "/winners/2026/team2.jpg",
            },
            {
                place: 3,
                members: ["Anish Thota", "Aarush Gupta", "Srinandasai Ari", "Kossara Tabakova", "Ashvik Mahapatra", "Vincent Chu"],
                imageSrc: "/winners/2026/team3.jpg",
            },
        ],
        individual: [
            { place: 1, name: "Aryan Raj",    imageSrc: "/winners/2026/individual1.jpg" },
            { place: 2, name: "Alex Chen",    imageSrc: "/winners/2026/individual2.jpg" },
            { place: 3, name: "Nate Paul",    imageSrc: "/winners/2026/individual3.jpg" },
            { place: 4, name: "Ryan Chan",    imageSrc: "/winners/2026/individual4.jpg" },
            { place: 5, name: "Anish Thota",  imageSrc: "/winners/2026/individual5.jpg" },
        ],
    },
];