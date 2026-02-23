export interface ScheduleItem {
    time: string;
    activity: string;
}

export const schedule: ScheduleItem[] = [
    { time: "9:00 AM", activity: "Check-In + Breakfast" },
    { time: "10:00 AM", activity: "Opening Ceremony" },
    { time: "10:30 AM", activity: "Individual Round" },
    { time: "11:30 AM", activity: "Team Round" },
    { time: "12:00 PM", activity: "Lunch" },
    { time: "1:15 PM", activity: "Optimization Round" },
    { time: "2:10 PM", activity: "Game Round" },
    { time: "3:00 PM", activity: "Awards, Closing Ceremony" },
    { time: "4:30 PM", activity: "Event Ends" },
];

