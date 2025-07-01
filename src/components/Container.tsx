interface ILayoutProps {
  children: React.ReactNode;
}

export default function Container({ children }: ILayoutProps) {
  return <div className="container mx-auto">{children}</div>;
}
