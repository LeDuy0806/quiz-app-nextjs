'use client';

import ContentEditor from 'src/components/Creator/ContentEditor';
import CreatorNavbar from 'src/components/Creator/CreatorNavbar';
import CreatorSidebar from 'src/components/Creator/CreatorSidebar';

function CreatorPage() {
    return (
        <main>
            <CreatorNavbar />
            <CreatorSidebar />
            <ContentEditor />
        </main>
    );
}

export default CreatorPage;
