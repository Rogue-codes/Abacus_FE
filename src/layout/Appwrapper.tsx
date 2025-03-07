import { SnackbarProvider } from 'notistack'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

interface IAppwrapper {
    children: React.ReactNode
}

export default function Appwrapper({ children }: IAppwrapper) {
    return (
        <div>
            <SnackbarProvider />
            <BrowserRouter>
                {children}
            </BrowserRouter>
        </div>
    )
}
