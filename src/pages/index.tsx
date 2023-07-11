import React, { useEffect, useState } from 'react';
import style from "./style.module.scss";
import axios from 'axios';
import DefaultLayout from '@/layout/default';

export default function Home() {
    

    return (
        <DefaultLayout>
            <div className={`${style["home"]}`}>
                <div className={`${style["container"]}`}>
                </div>            
            </div>
        </DefaultLayout>
    );
}
