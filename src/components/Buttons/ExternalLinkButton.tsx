// Component used to render an anchor tag to open a link in new tab

const SolidExternalLinkButton = (props: { text: string; href: string }) => {
  return (
    <a
      className="transition-colors px-4 py-2 font-bold text-white border rounded bg-twitch-purple hover:bg-twitch-purple-hover"
      href={props.href}
      target="_blank"
      rel="noreferrer"
    >
      {props.text}
    </a>
  );
};

export default SolidExternalLinkButton;
