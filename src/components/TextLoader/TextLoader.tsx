import { useEffect, useState } from "react";

export default function TextLoader({path} : {path: string}) {
    const [content, setContent] = useState<string>("");

    useEffect(() => {
        // Fetch the content of the static file
        fetch(path)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to load file.");
                }
                return response.text();
            })
            .then((data) => {
                setContent(data); // Save the file content to state
            })
            .catch((error) => {
                console.error("Error loading file:", error);
            });
    }, [path]); // Empty dependency array ensures this runs once after the component mounts

    return (<p>{content || "Loading..."}</p>);
};