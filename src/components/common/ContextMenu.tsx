import React, { useEffect, useRef } from 'react';

interface IProps {
    options: {
        name: string;
        to?: string;
        callback: () => void;
    }[];
    cordinates: {
        x: number;
        y: number;
    };
    contextMenu: {};
    setContextMenu: (prop: boolean) => void;
}

function ContextMenu({
    options,
    cordinates,
    contextMenu,
    setContextMenu
}: IProps) {
    const contextMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (e: any) => {
            if (e.target.id !== 'context-opener') {
                if (
                    contextMenuRef.current &&
                    !contextMenuRef.current.contains(e.target)
                ) {
                    setContextMenu(false);
                }
            }
        };
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);
    const handleClick = (
        e: React.MouseEvent<HTMLLIElement, MouseEvent>,
        callback: () => void
    ) => {
        e.stopPropagation();
        setContextMenu(false);
        callback();
    };
    return (
        <div
            className={`bg-dropdown-background fixed py-2 z-[100]  shadow-xl`}
            ref={contextMenuRef}
            style={{
                top: cordinates.y,
                left: cordinates.x
            }}
        >
            <ul>
                {options.map(({ name, callback }) => (
                    <li
                        className='px-5 py-2 cursor-pointer hover:bg-background-default-hover'
                        key={name}
                        onClick={(e) => handleClick(e, callback)}
                    >
                        <span className='text-white'>{name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ContextMenu;
