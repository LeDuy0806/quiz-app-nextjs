import WithAuth from 'src/components/common/WithAuth';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return <WithAuth>{children}</WithAuth>;
}
