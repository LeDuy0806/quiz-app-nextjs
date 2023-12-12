'use client';

import Link from 'next/link';
import Image from 'next/image';

//icons
import { HiPencilAlt, HiPlay, HiTrash } from 'react-icons/hi';

//constants
import paths from 'src/constants/paths';

//types
import QuizType, { CreatorType } from 'src/app/types/quizType';
import { QuizType as CreatorQuizType } from 'src/app/types/creator';
import GameType from 'src/app/types/gameType';

//routes
import { useRouter } from 'next/navigation';

//redux
import { useAppDispatch, useAppSelector } from 'src/app/redux/hooks';
import { useCreateGameMutation } from 'src/app/redux/services/gameApi';
import { useCreateLeaderBoardMutation } from 'src/app/redux/services/leaderBoardApi';
import { createGame } from 'src/app/redux/slices/gamesSlice';
import { createLeaderBoard } from 'src/app/redux/slices/leaderBoardSlice';
import { fetchQuiz } from 'src/app/redux/slices/quizSlice';
import { setQuiz } from 'src/app/redux/slices/quizCreatorSlice';

interface QuizCardProps {
    quiz: QuizType;
}

const QuizCard = (props: QuizCardProps) => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const [InitGame, { isLoading }] = useCreateGameMutation();
    const [InitLeaderBoard] = useCreateLeaderBoardMutation();

    const socket = useAppSelector((state) => state.socket.socket);

    const handleOpenGame = async () => {
        if (props.quiz?.questionList.length === 0) {
            alert('Sorry , you can not open game without question');
        } else {
            dispatch(fetchQuiz(props.quiz));

            const gameData: Omit<GameType, '_id'> = {
                host: props.quiz?.creator as CreatorType,
                quiz: props.quiz,
                isLive: true,
                pin: String(Math.floor(Math.random() * 9000) + 1000),
                playerList: [],
                playerResultList: []
            };
            const game = await InitGame({ newGame: gameData }).unwrap();

            const leaderBoardData = {
                game,
                quiz: props.quiz,
                pin: game.pin,
                playerResultList: [],
                currentLeaderBoard: []
            };
            const leaderBoard = await InitLeaderBoard({ newLeaderBoard: leaderBoardData }).unwrap();

            if (game && leaderBoard) {
                dispatch(createGame(game));
                dispatch(createLeaderBoard(leaderBoard));
                router.push('/game/host');
                socket.emit('init-game', game, leaderBoard);
            }
        }
    };

    const handleEditQuiz = () => {
        // dispatch(setQuiz({}));
        router.push(`creator/${props.quiz._id}`);
    };

    const handleDelete = () => {
        // dispatch(fetchQuiz(props.quiz));
        // router.push('/game/solo');
    };

    return (
        <div className='flex w-full rounded-lg bg-white shadow-2xl transition-transform hover:scale-[1.005] dark:bg-gray-800 sm:h-40'>
            <div className='relative flex  w-80 items-center justify-between max-md:hidden'>
                <Image
                    className='h-full rounded-l-lg object-cover'
                    src={'https://cf.quizizz.com/game/img/share/quizizz_share1.png'}
                    alt=''
                    fill
                    quality={100}
                />
            </div>

            {/* Content */}
            <div className='flex flex-col justify-between p-5'>
                <div>
                    <Link href={paths.discover}>
                        <h5 className='mb-2 line-clamp-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white max-md:text-base'>
                            {props.quiz?.name}
                        </h5>
                    </Link>
                    <p className='mb-3 line-clamp-2 font-normal text-gray-700 dark:text-gray-400 max-md:text-sm'>{props.quiz?.description}</p>
                </div>
                <div className='flex w-6 justify-between gap-4'>
                    <button
                        onClick={handleOpenGame}
                        className='inline-flex items-center rounded-lg bg-teal-400 px-3 py-2 text-center text-sm font-medium text-white hover:bg-teal-600 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                    >
                        Play
                        {/* {isLoading ? (
                            <Image src={loadingImg} alt='' className='w-7 h-full self-center m-auto' />
                            ) : (
                                <HiPlay className='ml-2 h-6 w-6 text-white' />
                            )} */}
                        <HiPlay className='ml-2 h-6 w-6 text-white' />
                    </button>
                    <button
                        onClick={handleEditQuiz}
                        className='inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                    >
                        Edit
                        <HiPencilAlt className='ml-2 h-6 w-6 text-white' />
                    </button>
                    <button
                        onClick={handleDelete}
                        className='inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                    >
                        Delete
                        <HiTrash className='ml-1 h-6 w-6 text-white' />
                    </button>
                </div>
            </div>
        </div>
    );
};
export default QuizCard;
