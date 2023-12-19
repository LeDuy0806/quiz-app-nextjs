const CreatorMessages = {
    SUCCESS: {
        ADD_QUESTION: 'Add question successfully!',
        DELETE_QUESTION: 'Delete question successfully!',
        DUPLICATE_QUESTION: 'Duplicate question successfully!',
        SAVE_QUIZ: 'Save quiz successfully!'
    },
    ERROR: {
        DELETE_LAST_QUESTION: 'You cannot delete the last question!',
        CHANGE_QUESTION_TYPE: 'You cannot change option question type for true/false question',
        TITLE_REQUIRED: 'Title is required!',
        DESCRIPTION_REQUIRED: 'Description is required!',
        CATEGORY_REQUIRED: 'Category is required!',
        GRADE_REQUIRED: 'Grade is required!',
        QUESTION_REQUIRED: 'Question is required!',
        ANSWER_REQUIRED: 'Answer is required!',
        CORRECT_ANSWER_REQUIRED: 'At least one correct answer is required!'
    }
};

const LibraryMessages = {
    SUCCESS: {
        ADD_QUIZ: 'Add quiz successfully!',
        DELETE_QUIZ: 'Delete quiz successfully!'
    },
    ERROR: {}
};

const UpdateProfileMessage = {
    SUCCESS: {
        UPDATE_PROFILE: 'Update Profile successfully!'
    },
    ERROR: {}
};

export { CreatorMessages, LibraryMessages, UpdateProfileMessage };
