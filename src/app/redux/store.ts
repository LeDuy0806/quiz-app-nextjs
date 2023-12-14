import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//api
import { apiAuth } from './services/authApi';
import { apiQuiz } from './services/quizApi';
import { apiUser } from './services/userApi';
import { apiGame } from './services/gameApi';
import { apiLeaderBoard } from './services/leaderBoardApi';
import { apiPlayerResult } from './services/playerResultApi';
import { apiCommunity } from './services/communityApi';

// Slices
import authReducer, { AuthSliceKey } from './slices/authSlice';
import searchReducer, { SearchSliceKey } from './slices/searchSlice';
import quizReducer, { QuizSliceKey } from './slices/quizSlice';
import quizCreatorReducer, { QuizCreatorSliceKey } from './slices/quizCreatorSlice';
import userReducer, { UserSliceKey } from './slices/usersSlice';
import socketReducer, { SocketSliceKey } from './slices/socketSlice';
import gameReducer, { GameSliceKey } from './slices/gamesSlice';
import leaderBoardReducer, { LeaderBoardSliceKey } from './slices/leaderBoardSlice';
import playerResultReducer, { PlayerResultSliceKey } from './slices/playerResultSlice';
import communityReducer, { CommunitySliceKey } from './slices/communitySlice';
import languageReducer, { LanguageSliceKey } from './slices/languageSlice';

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: [AuthSliceKey, LanguageSliceKey, SearchSliceKey, QuizSliceKey, UserSliceKey, CommunitySliceKey],
    blacklist: [QuizCreatorSliceKey, SocketSliceKey, GameSliceKey, LeaderBoardSliceKey, PlayerResultSliceKey]
};

const combinedReducer = combineReducers({
    [AuthSliceKey]: authReducer,
    [LanguageSliceKey]: languageReducer,
    [SearchSliceKey]: searchReducer,
    [QuizSliceKey]: quizReducer,
    [QuizCreatorSliceKey]: quizCreatorReducer,
    [UserSliceKey]: userReducer,
    [SocketSliceKey]: socketReducer,
    [GameSliceKey]: gameReducer,
    [LeaderBoardSliceKey]: leaderBoardReducer,
    [PlayerResultSliceKey]: playerResultReducer,
    [CommunitySliceKey]: communityReducer,

    [apiAuth.reducerPath]: apiAuth.reducer,
    [apiQuiz.reducerPath]: apiQuiz.reducer,
    [apiUser.reducerPath]: apiUser.reducer,
    [apiGame.reducerPath]: apiGame.reducer,
    [apiLeaderBoard.reducerPath]: apiLeaderBoard.reducer,
    [apiPlayerResult.reducerPath]: apiPlayerResult.reducer,
    [apiCommunity.reducerPath]: apiCommunity.reducer
});

const rootReducer = (state: any, action: any) => {
    return combinedReducer(state, action);
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, 'socket/createSocket', 'apiAuth/executeMutation/fulfilled'],
                ignoredActionPaths: ['socket.socket', 'payload', 'meta.baseQueryMeta.request', 'meta.baseQueryMeta.response'],
                ignoredPaths: ['socket', 'meta.baseQueryMeta.request', 'meta.baseQueryMeta.respone']
            },
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

export const persistor = persistStore(store);
