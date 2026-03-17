export interface Competition {
    name: string;
    shortName: string;
    fullName: string;
    location: string;
    imageSrc: string;
    description: string;
    website: string;
}

export const competitions: Competition[] = [
    {
        name: "HMMT",
        shortName: "HMMT",
        fullName: "Harvard-MIT Mathematics Tournament",
        location: "Cambridge, MA",
        imageSrc: "/competitions/hmmt.jpg",
        description:
            "Founded in 1998, HMMT is one of the largest and most prestigious high school competitions in the world. Each tournament draws close to 1000 students from around the globe, including top scorers at national and international olympiads. HMMT is entirely student-organized, by students at Harvard, MIT, and nearby schools, many of whom are HMMT alumni themselves.",
        website: "https://www.hmmt.org",
    },
    {
        name: "CMIMC",
        shortName: "CMIMC",
        fullName: "Carnegie Mellon Informatics and Mathematics Competition",
        location: "Pittsburgh, PA",
        imageSrc: "/competitions/cmimc.jpg",
        description:
            "The Carnegie Mellon Informatics and Mathematics Competition (CMIMC) is an entirely student-run organization that hosts math and computer science competitions for high school students around the world.",
        website: "https://cmimc.math.cmu.edu",
    },
    {
        name: "PUMaC",
        shortName: "PUMaC",
        fullName: "Princeton University Mathematics Competition",
        location: "Princeton, NJ",
        imageSrc: "/competitions/pumac.jpg",
        description:
            "The Princeton University Mathematics Competition (PUMaC) is an annual competition run by the Princeton University Math Club. PUMaC is an entirely student-run competition; Math Club volunteers have organized PUMaC since 2006.",
        website: "https://pumac.princeton.edu",
    },
    {
        name: "Duke",
        shortName: "Duke",
        fullName: "Duke Math Meet",
        location: "Durham, NC",
        imageSrc: "/competitions/duke.jpg",
        description:
            "The Duke Math Meet (DMM) is a regional mathematics competition for high school students hosted by Duke University each year during the fall. The contest is organized by the members of the Duke University Mathematics Union (DUMU) and is sponsored by the Duke Mathematics Department.",
        website: "https://dukemathmeet.org/",
    },
    {
        name: "ARML",
        shortName: "ARML",
        fullName: "American Regions Mathematics League",
        location: "Multiple Sites Nationwide",
        imageSrc: "/competitions/arml.jpg",
        description:
            "\n" +
            "ARML is one of the oldest and most celebrated team math competitions in the US. Students compete as part of large regional teams across multiple simultaneous sites. Its nationwide presence makes ARML a uniquely social and energetic competition experience.",
        website: "https://arml.com",
    },
];