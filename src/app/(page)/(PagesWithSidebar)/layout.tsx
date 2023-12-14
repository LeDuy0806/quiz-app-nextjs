'use client';
import SideBar from 'src/components/common/SideBar';
import WithAuth from 'src/components/common/WithAuth';

export default function PagesWithSidebarLayout({ children }: { children: React.ReactNode }) {
    return <SideBar>{children}</SideBar>;
}
