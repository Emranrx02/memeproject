import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return <section className="max-w-[70rem] mx-auto">{children}</section>;
}
