import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import CommunityType, { InitCommunity } from 'src/app/types/communityType';

type InitialType = {
    community: CommunityType;
    communities: CommunityType[];
};

const initialState = {
    community: InitCommunity,
    communities: []
} as InitialType;

const communitySlice = createSlice({
    name: 'community',
    initialState,
    reducers: {
        fetchCommunity: (state, action: PayloadAction<CommunityType>) => {
            state.community = action.payload;
        },

        fetchCommunities: (state, action: PayloadAction<CommunityType[]>) => {
            state.communities = action.payload;
        },

        createCommunity: (state, action: PayloadAction<CommunityType>) => {
            state.communities.push(action.payload);
        },

        updateCommunity: (state, action: PayloadAction<CommunityType>) => {
            state.communities = state.communities.map((item) => {
                return item?._id === action.payload?._id ? action.payload : item;
            });
        },

        deleteCommunity: (state, action: PayloadAction<CommunityType>) => {
            state.communities = state.communities.filter((item) => {
                return item?._id !== action.payload?._id;
            });
        },
        addQuiz: (state, action) => {
            // state.communities = state.communities.map((item) => {
            //   if (item?._id === action.payload.id) {
            //     item.quizList.push(action.payload.quiz);
            //     return item;
            //   } else {
            //     return item;
            //   }
            // });
            // state.community.quizList.push(action.payload.quiz);
        },
        removeQuiz: (state, action) => {
            // console.log(action.payload.quiz._id);
            // state.communities = state.communities.map((item) => {
            //   if (item._id === action.payload.id) {
            //     item.quizList = item.quizList.filter(
            //       (item) => item._id !== action.payload.quiz._id
            //     );
            //     return item;
            //   } else {
            //     return item;
            //   }
            // });
            // state.community.quizList = state.community.quizList.filter((item) => {
            //   return item._id !== action.payload.quiz._id;
            // });
        },
        addMessageChat: (state, action: PayloadAction<CommunityType>) => {
            state.communities = state.communities.map((item) => {
                return item?._id === action.payload?._id ? action.payload : item;
            });
        }
    }
});

export const { fetchCommunity, fetchCommunities, createCommunity, deleteCommunity, addQuiz, removeQuiz, addMessageChat } = communitySlice.actions;

const communityReducer = communitySlice.reducer;
export default communityReducer;
