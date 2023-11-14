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
                hostId: props.quiz?.creator?._id,
                quizId: props.quiz?._id,
                isLive: true,
                pin: String(Math.floor(Math.random() * 9000) + 1000),
                playerList: [],
                playerResultList: []
            };
            const newGameData: any = await InitGame({ newGame: gameData });
            const newGame = newGameData.data;
            dispatch(createGame(newGame));

            const leaderBoardData = {
                gameId: newGame._id,
                pin: newGame.pin,
                playerResultList: [],
                currentLeaderBoard: []
            };
            const newLeaderBoardData: any = await InitLeaderBoard({ newLeaderBoard: leaderBoardData });
            const newLeaderBoard = newLeaderBoardData.data;
            dispatch(createLeaderBoard(newLeaderBoard));

            router.push('/game/host');
            socket.emit('init-game', newGame, newLeaderBoard);
        }
    };

    return (
        <div className='flex sm:h-40 w-full rounded-lg bg-white shadow-2xl transition-transform hover:scale-[1.005] dark:bg-gray-800'>
            <div className='relative w-80  flex items-center justify-between max-md:hidden'>
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
                        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 line-clamp-1 dark:text-white max-md:text-base'>
                            {props.quiz?.name}
                        </h5>
                    </Link>
                    <p className='mb-3 font-normal text-gray-700 line-clamp-2 dark:text-gray-400 max-md:text-sm'>{props.quiz?.description}</p>
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
                        // href={paths.creator}
                        className='inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                    >
                        Edit
                        <HiPencilAlt className='ml-2 h-6 w-6 text-white' />
                    </button>
                    <button
                        // href='#'
                        className='inline-flex items-center rounded-lg bg-red-500 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
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
