import BasicLayout from "../ui/components/basicLayout";

// TODO R laytou tyope
interface Props {
  children: React.ReactNode;
}

export default function ({ children }: Props) {
  return <BasicLayout>{children}</BasicLayout>;
}
