'use client'


import {NextUIProvider} from "@nextui-org/react";

import exp from "constants";


export default function Providers({children}) {
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    )
}