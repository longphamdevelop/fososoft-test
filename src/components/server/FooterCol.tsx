type Props = {
  title: string;
  body: React.ReactNode;
  extra?: React.ReactNode;
  titleClassName?: string;
};

function FooterCol({ title, body, extra = <></>, titleClassName = '' }: Props) {
  return (
    <div className="flex flex-col gap-8">
      <h5 className={`text-brand-800 text-2xl font-semibold ${titleClassName}`}>
        {title}
      </h5>
      <div className="text-secondary flex flex-col gap-3">{body}</div>
      {extra}
    </div>
  );
}

export default FooterCol;
