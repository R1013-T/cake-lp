export const useTimeScript = () => {
  return {
    weekday: {
      name: ["月曜 - 金曜", "Monday - Friday"],
      time: ["午前 9:00 - 午後 9:00", "9:00 AM - 9:00 PM"],
    },
    Sat: {
      name: ["土曜", "Saturday"],
      time: ["午前 9:00 - 午後 6:00", "9:00 AM - 6:00 PM"],
    },
    Sun: {
      name: ["日曜", "Sunday"],
      time: ["休み", "Closed"],
    },
  };
};
