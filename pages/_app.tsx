import '@upstart/patina-design-system/css-reset'
import { PatinaProvider } from '@upstart/patina-design-system'

import type { AppProps } from 'next/app'
import * as React from "react";

const App = ({ Component, pageProps }: AppProps): React.ReactElement => {
    return (
        <PatinaProvider>
            <Component {...pageProps} />
        </PatinaProvider>
    )
}

export default App