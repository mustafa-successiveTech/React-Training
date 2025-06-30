import DrawerLayout from './DrawerLayout';

export const metadata = {
  title: "Question 9",
};

export default function Layout({ children }) {
  return <DrawerLayout>{children}</DrawerLayout>;
}
