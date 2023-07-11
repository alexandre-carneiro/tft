import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '@/components/Header';
import style from "./style.module.scss";
import Footer from '@/components/Footer';

type defaultProps = {
    children: React.ReactNode,
}

export default function DefaultLayout( {children}: defaultProps ) {

    return (
        <main className={`${style["main"]}`}>
            <Header />

            {children}

            <Footer />
        </main>
    );
}
