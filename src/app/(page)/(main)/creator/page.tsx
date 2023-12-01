'use client';

import ContentEditor from 'src/components/Creator/ContentEditor';
import CreatorNavbar from 'src/components/Creator/CreatorNavbar';
import CreatorSidebar from 'src/components/Creator/CreatorSidebar';

import { useState } from 'react';
import Modal from 'react-modal';
import QuizSettingModal from 'src/components/Creator/QuizSettingModal';

function CreatorPage() {
    Modal.setAppElement('body');

    const [isOpenModal, setIsOpenModal] = useState(false);

    return (
        <>
            <main>
                <CreatorNavbar setIsOpenModal={setIsOpenModal} />
                <CreatorSidebar />
                <ContentEditor />
            </main>
            <QuizSettingModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
        </>
    );
}

export default CreatorPage;
