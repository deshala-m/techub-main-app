import { useEffect } from 'react';

export default function HRSuitePage() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.location.replace('http://localhost:5001/');
        }
    }, []);

    return (
        <div>
            <h1>HR Suite</h1>
        </div>
    );
}