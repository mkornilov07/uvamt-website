export interface ArchiveEntry {
    year: number;
    files: { name: string; href: string }[];
}

export const archive: ArchiveEntry[] = [
    {
        year: 2026,
        files: [
            { name: "Individual Round Problems", href: "/archive/2026/individual_problems_2026.pdf" },
            { name: "Individual Round Solutions", href: "/archive/2026/individual_solutions_2026.pdf" },
            { name: "Team Round Problems", href: "/archive/2026/team_problems_2026.pdf" },
            { name: "Team Round Solutions", href: "/archive/2026/team_solutions_2026.pdf" },
            { name: "Optimization Round Problems", href: "/archive/2026/optimization_2026.pdf" },
            { name: "Opening/Closing Ceremony Slides", href: "/archive/2026/opening_closing_ceremony_2026.pdf" },
        ],
    },
    {
        year: 2025,
        files: [
            { name: "Individual Round Problems", href: "/archive/2025/individual_problems_2025.pdf" },
            { name: "Individual Round Solutions", href: "/archive/2025/individual_solutions_2025.pdf" },
            { name: "Team Round Problems", href: "/archive/2025/team_problems_2025.pdf" },
            { name: "Team Round Solutions", href: "/archive/2025/team_solutions_2025.pdf" },
            { name: "Optimization Round Problems", href: "/archive/2025/optimization_2025.pdf" },
            { name: "Game Round Problems & Solutions", href: "/archive/2025/game_2025.pdf" },
            { name: "Opening/Closing Ceremony Slides", href: "/archive/2025/opening_closing_ceremony_2025.pptx" },
        ],
    },
];