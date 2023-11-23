'use client';

import ContentEditor from 'src/components/Creator/ContentEditor';
import CreatorNavbar from 'src/components/Creator/CreatorNavbar';
import CreatorSidebar from 'src/components/Creator/CreatorSidebar';

import QuestionSettingSidebar from 'src/components/Creator/QuestionSettingSidebar';

function CreatorPage() {
    return (
        <main>
            <CreatorNavbar />
            <CreatorSidebar />
            <ContentEditor />
            <QuestionSettingSidebar />
        </main>
    );
}

export default CreatorPage;
