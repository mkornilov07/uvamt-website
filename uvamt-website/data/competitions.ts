export interface Competition {
    name: string;
    shortName: string;
    fullName: string;
    location: string;
    imageSrc: string;
    description: string;
    website: string;
    tags: string[];
}

export const competitions: Competition[] = [
    {
        name: "HMMT",
        shortName: "HMMT",
        fullName: "Harvard-MIT Mathematics Tournament",
        location: "Cambridge, MA",
        imageSrc: "/competitions/hmmt.jpg",
        description:
            "One of the most prestigious high school math competitions in the country, HMMT draws over 2,000 students to Harvard and MIT campuses each year. Featuring individual and team rounds, HMMT challenges competitors with some of the hardest problems in the competition circuit.",
        website: "https://www.hmmt.org",
        tags: ["Team", "Individual", "Guts Round"],
    },
    {
        name: "CMIMC",
        shortName: "CMIMC",
        fullName: "Carnegie Mellon Informatics and Mathematics Competition",
        location: "Pittsburgh, PA",
        imageSrc: "/competitions/cmimc.jpg",
        description:
            "Hosted annually at Carnegie Mellon University, CMIMC features both math and computer science tracks. The competition is known for its creative, out-of-the-box problems and collaborative team rounds that reward deep mathematical thinking.",
        website: "https://cmimc.math.cmu.edu",
        tags: ["Team", "Individual", "CS Track"],
    },
    {
        name: "PUMaC",
        shortName: "PUMaC",
        fullName: "Princeton University Mathematics Competition",
        location: "Princeton, NJ",
        imageSrc: "/competitions/pumac.jpg",
        description:
            "Princeton's student-run tournament brings together hundreds of competitors for a full day of math on one of the nation's most beautiful campuses. PUMaC features individual subject rounds, a team round, and a live power round with public proof presentation.",
        website: "https://pumac.princeton.edu",
        tags: ["Team", "Individual", "Power Round"],
    },
    {
        name: "Duke",
        shortName: "Duke",
        fullName: "Duke Math Meet",
        location: "Durham, NC",
        imageSrc: "/competitions/duke.jpg",
        description:
            "The Duke Math Meet is a regional favorite for students in the Southeast. Hosted on Duke University's beautiful campus, it features both individual and team rounds with problems spanning a wide range of topics, making it an excellent stepping stone for newer competitors.",
        website: "https://dukemathmeet.org/",
        tags: ["Team", "Individual", "Southeast"],
    },
    {
        name: "ARML",
        shortName: "ARML",
        fullName: "American Regions Mathematics League",
        location: "Multiple Sites Nationwide",
        imageSrc: "/competitions/arml.jpg",
        description:
            "ARML is one of the oldest and most celebrated team math competitions in the US. Students compete as part of large regional teams across multiple simultaneous sites. The relay and team rounds make ARML a uniquely social and energetic competition experience.",
        website: "https://arml.com",
        tags: ["Team", "Relay", "National"],
    },
];