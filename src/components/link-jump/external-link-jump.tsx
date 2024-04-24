export default function ExternalLinkJump(props: IExternalLinkJump) {
  const { href = '', className = '', children } = props;
  if (!href || !children) return;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}
