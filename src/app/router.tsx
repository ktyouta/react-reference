import App from '@/App';
import { paths } from '@/config/paths';
import { useRoutes } from 'react-router-dom';


export const appRouter = [
    {
        path: paths.home.path,
        element: <App />
    },
]

export const AppRouter = () => {

    const router = useRoutes(appRouter);

    return router;
};