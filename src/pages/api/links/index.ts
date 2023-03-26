import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({
    data: [
      {
        id: 1,
        title: "LinkedIn",
        description: "Here, you can find my professional profile.",
        url: "https://www.linkedin.com/in/djalmahenry",
        icon: "https://i.imgur.com/efweRw2.png",
        color: "#0077B5",
      },
      {
        id: 2,
        title: "GitHub",
        description: "Here, you can find my open source projects.",
        url: "https://github.com/DjalmaHenry",
        icon: "https://i.imgur.com/18e4363.png",
        color: "#181717",
      },
      {
        id: 3,
        title: "Instagram",
        description: "Here, you can find my personal profile.",
        url: "https://www.instagram.com/djalmahenry",
        icon: "https://i.imgur.com/7EP3jYA.png",
        color: "#E4405F",
      },
      {
        id: 4,
        title: "Portfólio",
        description: "Here, you can find my personal portfolio with more information about myself.",
        url: "https://portfolio.djalmahenry.com/",
        icon: "https://i.imgur.com/1tWjtpL.png",
        color: "#6F2DBD",
      }
    ],
  });
}
