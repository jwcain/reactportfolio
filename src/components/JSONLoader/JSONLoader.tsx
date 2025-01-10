import './JSONLoader.css';
import React, { useEffect, useState, ReactNode, Fragment, useRef } from 'react';

type JSONLoaderProps<T> = {
    paths: string[]; // Array of JSON file paths
    render: (data: T) => ReactNode; // Render function for each parsed object
}

 function JSONLoader<T>({paths, render}: JSONLoaderProps<T>) : React.ReactElement {
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState<string | null>(null);
     const cache = useRef<Record<string, T | undefined>>({}); // Cache for loaded JSON data
     const [data, setData] = useState<T[]>([]);

     useEffect(() => {
         const loadData = async () => {
             setLoading(true);

             try {
                 const results = await Promise.all(
                     paths.map(async (path) => {
                         if (cache.current[path]) {
                             return cache.current[path]; // Return cached data if available
                         }
                         const response = await fetch(path);
                         if (!response.ok) throw new Error(`Failed to fetch ${path}`);
                         const json = await response.json();
                         cache.current[path] = json; // Cache the loaded data
                         return json;
                     })
                 );

                 setData(results as T[]);
             } catch (err) {
                 console.error(err);
                 setError('Failed to load JSON data.');
             } finally {
                 setLoading(false);
             }
         };

         loadData().catch((err) => console.error(err));
     }, [paths]);

     if (loading) return <></>;
     if (error) return <span>Error: {error}</span>;

     return <div className={'col centered'}>{data.map((item, index) => <Fragment key={index}>{render(item)}</Fragment>)}</div>;


}
export default JSONLoader;