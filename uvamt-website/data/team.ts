export interface TeamMember {
    name: string;
    role: string;
    imageSrc: string;
    bio?: string;
}

export const team: TeamMember[] = [
    { name: "Vincent Trang", role: "Coordinator", imageSrc: "/team/vincent_trang.jpg", bio: "" },
    { name: "Mikhail Kornilov", role: "Coordinator", imageSrc: "/team/mikhail_kornilov.jpg", bio: "" },
    { name: "Utkarsh Goyal", role: "Coordinator", imageSrc: "/team/utkarsh_goyal.jpg" , bio:""},
    { name: "Emma Ylagan", role: "Social Media Manager", imageSrc: "/team/emma_ylagan.jpg" , bio:""},
    { name: "Isaac Assink", role: "Volunteer", imageSrc: "/team/isaac_assink.jpg" , bio:""},
    { name: "Brendan Malaugh", role: "Web Developer", imageSrc: "/team/brendan_malaugh.jpg" , bio:""},
    { name: "Eric Zeng", role: "Artist", imageSrc: "/team/eric_zeng.jpg", bio: ""}
];