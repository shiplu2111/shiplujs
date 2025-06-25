"use client";
import React from 'react';
import Image from 'next/image';
import { useEffect } from 'react';
import { getApi } from "@/utils/api";


const Loading = () => {

    return (
        <>
            <div className="preloader-wrapper-two">
                <Image src={"/assets/images/preloader.gif"} alt="Loading..." className="preloader-image-two" width={64} height={64} />
            </div>
        </>
    );
};

export default Loading;