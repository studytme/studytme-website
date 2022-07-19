// Component used to render a Link in outlined style to open a link in same tab
// text and href are required, icon is optional

import { IconBaseProps } from "react-icons";
import Link from "next/link";

const OutlinedLinkButton = (props: { icon?: IconBaseProps; text: string; href: string }) => {
  return (
    <Link href={props.href} passHref>
      <button className="transition-colors gap-2 flex items-center px-4 py-2 font-semibold bg-transparent border rounded text-twitch-purple border-twitch-purple hover:bg-twitch-purple hover:text-white">
        <>
          {props.icon}
          {props.text}
        </>
      </button>
    </Link>
  );
};

export default OutlinedLinkButton;
