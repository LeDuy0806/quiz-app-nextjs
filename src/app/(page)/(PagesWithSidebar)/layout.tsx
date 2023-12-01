'use client';
import SideBar from 'src/components/common/SideBar';

export default function PagesWithSidebarLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body>
                <SideBar>{children}</SideBar>
            </body>
        </html>
    );
}
