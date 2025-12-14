import { paths } from '@/config/paths';
import { HomeContainer } from '@/features/home/components/home/HomeContainer';
import { useRoutes } from 'react-router-dom';


export const appRouter = [
    {
        path: paths.home.path,
        element: <HomeContainer />
    },
]

export const AppRouter = () => {

    const router = useRoutes(appRouter);

    return router;
};