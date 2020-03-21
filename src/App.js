import React, {Suspense} from 'react';
import PageComponent from "./components/page/pageComponent";

function App() {
    return (
        <React.Fragment>
            <Suspense fallback={<div className="loader"/>}>
                <PageComponent/>
            </Suspense>
        </React.Fragment>
    );
}

export default App;
