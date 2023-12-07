import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
// import { persistReducer } from 'redux-persist';

//api
import { apiAuth } from './services/authApi';
import { apiQuiz } from './services/quizApi';
import { apiUser } from './services/userApi';
import { apiGame } from './services/gameApi';
import { apiLeaderBoard } from './services/leaderBoardApi';
import { apiPlayerResult } from './services/playerResultApi';
import { apiCommunity } from './services/communityApi';

// Slices
import authReducer from './slices/authSlice';
import searchReducer from './slices/searchSlice';
import quizReducer from './slices/quizSlice';
import quizCreatorReducer from './slices/quizCreatorSlice';
import userReducer from './slices/usersSlice';
import socketReducer from './slices/socketSlice';
import gameReducer from './slices/gamesSlice';
import leaderBoardReducer from './slices/leaderBoardSlice';
import playerResultReducer from './slices/playerResultSlice';
import communityReducer from './slices/communitySlice';

const store = configureStore({
    reducer: {
        [apiAuth.reducerPath]: apiAuth.reducer,
        [apiQuiz.reducerPath]: apiQuiz.reducer,
        [apiUser.reducerPath]: apiUser.reducer,
        [apiGame.reducerPath]: apiGame.reducer,
        [apiLeaderBoard.reducerPath]: apiLeaderBoard.reducer,
        [apiPlayerResult.reducerPath]: apiPlayerResult.reducer,
        [apiCommunity.reducerPath]: apiCommunity.reducer,

        auth: authReducer,
        quiz: quizReducer,
        quizCreator: quizCreatorReducer,
        user: userReducer,
        socket: socketReducer,
        game: gameReducer,
        search: searchReducer,
        leaderBoard: leaderBoardReducer,
        playerResult: playerResultReducer,
        community: communityReducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: {
                ignoredPaths: ['ignoredPath', 'ignoredNested.one', 'ignoredNested.two', 'items.data']
            }
        }).concat([
            apiAuth.middleware,
            apiQuiz.middleware,
            apiUser.middleware,
            apiGame.middleware,
            apiLeaderBoard.middleware,
            apiPlayerResult.middleware,
            apiCommunity.middleware
        ])
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
