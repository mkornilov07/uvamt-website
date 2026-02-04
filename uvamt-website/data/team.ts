export interface TeamMember {
    name: string;
    role: string;
    imageSrc: string;
};

export const team: TeamMember[] = [
    { name: "Vincent Trang", role: "Organizer", imageSrc: "/team/vincent_trang.jpg" },
    { name: "Mikhail Kornilov", role: "Organizer", imageSrc: "/team/mikhail_kornilov.jpg" },
    { name: "Emma Ylagan", role: "Outreach Coordinator", imageSrc: "/team/emma_ylagan.jpg" },
    { name: "Isaac Assink", role: "Volunteer", imageSrc: "/team/isaac_assink.jpg" },
    { name: "Utkarsh Goyal", role: "Volunteer", imageSrc: "/team/utkarsh_goyal.jpg" },
    { name: "Brendan Malaugh", role: "Volunteer", imageSrc: "/team/brendan_malaugh.jpg" },
];