import PageHead from "@/components/ui/page-head";
import { ReactNode, useState } from "react";
import DashboardLayoutSidebar from "./dashboard-layout-sidebar";
import { SIDEBAR_ADMIN, SIDEBAR_MEMBER } from "./dashboard-layout-constant";
import { Navbar, NavbarMenuToggle } from "@heroui/react";

interface PropTypes {
  title?: string;
  description?: string;
  children: ReactNode;
  type?: string;
}

const DashboardLayout = (props: PropTypes) => {
  const { children, title, type = "admin", description } = props;
  const [open, setOpen] = useState(false);
  return (
    <>
      <PageHead title={title}></PageHead>
      <div className="max-w-3xl flex">
        <DashboardLayoutSidebar
          sidebarItems={type === "admin" ? SIDEBAR_ADMIN : SIDEBAR_MEMBER}
          isOpen={open}
        />
        <div className="h-screen w-full overflow-y-auto p-8">
          <Navbar
            isBlurred={false}
            className="flex justify-between bg-transparent px-0"
            classNames={{ wrapper: "p-0" }}
            position="static"
          >
            <h1 className="text-3xl font-bold">{title}</h1>
            <NavbarMenuToggle
              aria-label={open ? "Close Menu" : "Open Menu"}
              onClick={() => setOpen(!open)}
              className="lg:hidden"
            />
          </Navbar>
          <p className="mb-4 text-small"> {description} </p>
          {children}
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
