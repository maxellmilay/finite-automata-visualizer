import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { LEGEND } from '../constants/legend';
import { GUIDELINES } from '../constants/guidelines';

interface PropsInterface {
    show: boolean;
}

function LegendPanel(props: PropsInterface) {
    const { show } = props;
    return (
        <div className="legend-panel">
            <CSSTransition
                in={show}
                timeout={300}
                classNames="slide"
                unmountOnExit
            >
                <div className="flex flex-col gap-5 absolute top-0 right-0 py-2 px-3 rounded-md w-[20rem] h-full bg-gray-50 z-10">
                    <div className="flex flex-col items-center justify-center w-full gap-2 mt-10 px-5">
                        {LEGEND.map((content, index) => (
                            <div
                                className="flex flex-1 items-center w-full justify-center"
                                key={index}
                            >
                                <div
                                    className={`size-[2rem] w-[10%] flex items-center justify-center text-center ${content.bgClass} ${content.borderClass} border-2`}
                                >
                                    {content.description}
                                </div>
                                <h1 className="text-sm w-[90%] text-gray-500 pl-2">
                                    {content.title}
                                </h1>
                            </div>
                        ))}
                    </div>

                    <div className="grow flex flex-col items-start pb-2 justify-start px-5">
                        <h1 className="text-sky-500 text-md">Guidelines:</h1>
                        <div className="mt-[1rem] flex flex-col items-start justify-center gap-2">
                            {GUIDELINES.map((guides, index) => (
                                <div className="flex gap-2 text-gray-500 text-sm">
                                    <p>{index + 1}.</p>
                                    <p>{guides}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </div>
    );
}

export default LegendPanel;