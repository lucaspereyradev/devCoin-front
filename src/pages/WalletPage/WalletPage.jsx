import React, { useState, useContext, useEffect } from 'react';
import { AppWrap } from '../../wrapper';
import { sessionContext } from '../../context';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Balance, History, Transfer, Deposit } from '../../components';

const Wallet = (props) => {
    const { user } = useContext(sessionContext);

    const [selectedView, setSelectedView] = useState('Historial');

    function setView(e) {
        setSelectedView(e.target.textContent);
    }
    let view;

    switch (selectedView) {
        case 'Balance':
            view = <Balance />;
            break;
        case 'Historial':
            view = <History />;
            break;
    }

    if (user && user.verified_user) {
        return (
            <>
                <h1 className="mr-auto text-2xl font-bold">Wallet</h1>
                <div className="flex w-full flex-col items-center gap-y-[3rem] overflow-visible lg:grid lg:h-[70vh] lg:grid-cols-[420px,_1fr] lg:grid-rows-[10rem,_1fr] lg:gap-y-[2rem] lg:gap-x-5">
                    <Deposit update={props.props.update} />
                    <hr className="hidden w-full rounded-md border-black/30 dark:border-white/30 max-lg:flex" />
                    <div className="lg:items-left flex h-fit w-full flex-col items-center lg:col-span-2 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:h-[50vh] lg:-translate-y-[7rem] lg:justify-items-center">
                        <ul className="flex gap-6 text-sm font-bold text-white transition-colors dark:text-black">
                            <li
                                className={`rounded-md  px-12 py-2 hover:cursor-pointer ${
                                    selectedView == 'Balance'
                                        ? 'bg-secondary/90 text-white'
                                        : 'bg-[#242631] dark:bg-white/90'
                                }`}
                                onClick={setView}
                                id="view-btn"
                            >
                                Balance
                            </li>
                            <li
                                className={`rounded-md px-12 py-2 hover:cursor-pointer ${
                                    selectedView == 'Historial'
                                        ? 'bg-secondary/90 text-white'
                                        : 'bg-[#242631] dark:bg-white/90'
                                }`}
                                onClick={setView}
                                id="view-btn"
                            >
                                Historial
                            </li>
                        </ul>
                        {view}
                    </div>
                    <hr className="hidden w-full rounded-md border-black/30 dark:border-white/30 max-lg:flex" />
                    <Transfer className="lg:col-start-2" update={props.props.update} />
                </div>
            </>
        );
    } else {
        return <Navigate to="/" replace={true} />;
    }
};

export default AppWrap(Wallet);
