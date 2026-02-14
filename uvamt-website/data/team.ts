export interface TeamMember {
    name: string;
    role: string;
    imageSrc: string;
    bio?: string;
}

export const team: TeamMember[] = [
    { name: "Vincent Trang", role: "Organizer", imageSrc: "/team/vincent_trang.jpg", bio: "" },
    { name: "Mikhail Kornilov", role: "Organizer", imageSrc: "/team/mikhail_kornilov.jpg", bio: "" },
    { name: "Utkarsh Goyal", role: "Organizer", imageSrc: "/team/utkarsh_goyal.jpg" },
    //{ name: "Emma Ylagan", role: "Outreach Coordinator", imageSrc: "/team/emma_ylagan.jpg" },
    //{ name: "Isaac Assink", role: "Volunteer", imageSrc: "/team/isaac_assink.jpg" },
    //{ name: "Brendan Malaugh", role: "Volunteer", imageSrc: "/team/brendan_malaugh.jpg" },
];