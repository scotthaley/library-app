interface IPurpleBarProps {
  title: string;
  children?: React.ReactNode;
}

function PurpleBar({ title, children }: IPurpleBarProps) {
  return (
    <div className="my-16 bg-gradient-to-r from-violet-600 to-fuchsia-400 lg:rounded-xl p-8">
      <h2 className="text-white text-2xl font-bold">{title}</h2>
      {children}
    </div>
  );
}

export default PurpleBar;
