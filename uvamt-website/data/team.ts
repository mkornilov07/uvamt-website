export interface TeamMember {
    name: string;
    role: string;
    imageSrc: string;
    bio?: string;
}

export const team: TeamMember[] = [
    { name: "Vincent Trang", role: "Organizer", imageSrc: "/team/vincent_trang.jpg", bio: "Test Bio. My name is Vincent." },
    { name: "Mikhail Kornilov", role: "Organizer", imageSrc: "/team/mikhail_kornilov.jpg", bio: "Testing a long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long bio." },
    { name: "Emma Ylagan", role: "Outreach Coordinator", imageSrc: "/team/emma_ylagan.jpg" },
    { name: "Isaac Assink", role: "Volunteer", imageSrc: "/team/isaac_assink.jpg" },
    { name: "Utkarsh Goyal", role: "Volunteer", imageSrc: "/team/utkarsh_goyal.jpg" },
    { name: "Brendan Malaugh", role: "Volunteer", imageSrc: "/team/brendan_malaugh.jpg" },
];