import type { JSX } from "react";

interface iAppProps {
  name: string;
  title: string;
  image: JSX.Element;
  description: string;
  id: number;
}

export const categoryItems: iAppProps[] = [
  {
    id: 0,
    name: "larksuite",
    title: "Lark Base Templates",
    image: <img className="max-w-20" src="/lark.png" alt="Lark Logo" />,
    description:
      "Template file quản lý cho Lark Base",
  },
  {
    id:1,
    name: "n8n",
    title: "n8n Templates",
    image: <img className="max-w-20" src="/n8n.png" alt="n8n Logo" />,
    description: "Template workflows tự động hoá cho n8n"
  },
  {
    id: 2,
    name: "wordpress",
    title: "WordPress Themes",
    image: <img className="max-w-20" src="/wordpress.png" alt="Wordpress Logo" />,
    description: "Template cho website WordPress"
  }
];
