import './styles/index.scss';
import { classNames } from 'shared/lib/classnames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/SideBar';
import { Suspense } from 'react';
import { AppRouter } from './providers/router';

function App() {
    const { theme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />

                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
