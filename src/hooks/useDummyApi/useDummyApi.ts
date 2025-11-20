import { useState, useEffect } from 'react';

export function useDummyApi(userId: string) {

    const [user, setUser] = useState<{ id: string; name: string } | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(res => res.json())
            .then(data => setUser(data))
            .finally(() => setLoading(false));
    }, [userId]);

    return {
        user,
        loading
    };
}
