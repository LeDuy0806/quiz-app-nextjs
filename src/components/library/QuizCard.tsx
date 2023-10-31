'use client';

import Link from 'next/link';

import paths from 'src/constants/paths';
import { HiPencilAlt, HiPlay, HiTrash } from 'react-icons/hi';

//image
import Image from 'next/image';
import QuizType from 'src/app/types/quizType';

//routes
import { useRouter } from 'next/navigation';

//redux
import { useAppDispatch, useAppSelector } from 'src/app/redux/hooks';
import { useCreateGameMutation } from 'src/app/redux/services/gameApi';
import { useCreateLeaderBoardMutation } from 'src/app/redux/services/leaderBoardApi';
import { createGame } from 'src/app/redux/slices/gamesSlice';
import { createLeaderBoard } from 'src/app/redux/slices/leaderBoardSlice';
import { fetchQuiz } from 'src/app/redux/slices/quizSlice';

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

            const gameData = {
                host: props.quiz?.creator,
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

    const handleDelete = () => {
        dispatch(fetchQuiz(props.quiz));
        router.push('/game/solo');
    };

    return (
        <div className='flex h-52 w-full rounded-lg bg-white shadow-2xl transition-transform hover:scale-[1.005] dark:bg-gray-800'>
            {/* Image */}
            {/* <Link className='flex items-center justify-between max-md:hidden' href={paths.discover}>
                <img
                    className='m-auto h-full w-80 rounded-l-lg object-cover'
                    // src='https://plus.unsplash.com/premium_photo-1661637676151-ff1ad622ab7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    src='https://images.unsplash.com/photo-1678711267884-ae34ed9d4c29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
                    alt=''
                />
            </Link> */}
            <Image
                className='h-full w-80 rounded-l-lg object-cover'
                src={
                    'https://images.unsplash.com/photo-1678711267884-ae34ed9d4c29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
                }
                alt=''
                width={80}
                height={60}
            />

            {/* Content */}
            <div className='flex flex-col justify-between p-5'>
                <div>
                    <Link href={paths.discover}>
                        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 line-clamp-1 dark:text-white max-md:text-base'>
                            {props.quiz?.name}
                        </h5>
                    </Link>
                    <p className='mb-3 font-normal text-gray-700 line-clamp-2 dark:text-gray-400 max-md:text-sm'>{props.quiz?.description}</p>
                </div>
                <div className='flex w-6 justify-between gap-4'>
                    <button
                        onClick={handleOpenGame}
                        // href='/game/host'
                        className='inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
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
                        // href={paths.creator}
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
