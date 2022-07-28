// Component used to render a Link in solid style to open a link in same tab
// text and href are required, icon is optional

import { IconBaseProps } from "react-icons";
import Link from "next/link";

const SolidLinkButton = (props: { icon?: IconBaseProps; text: string; href: string }) => {
  return (
    <Link href={props.href} passHref>
      <button className="transition-colors px-4 py-2 font-bold text-white border rounded sm:visible bg-twitch-purple active:bg-twitch-purple hover:bg-twitch-purple-hover">
        <>
          {props.icon}
          {props.text}
        </>
      </button>
    </Link>
  );
};

export default SolidLinkButton;
