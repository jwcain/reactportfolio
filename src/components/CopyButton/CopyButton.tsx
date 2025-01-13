import './CopyButton.css';
import {useEffect, useState} from 'react';

type CopyButtonProps = {
    textToCopy: string; // Defining the type of the 'textToCopy' prop
}

export default function CopyButton({ textToCopy } : CopyButtonProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Hide notification after 2 seconds
        } catch (error) {
            console.error('Failed to copy text:', error);
        }
    };
    useEffect(() => {}, [copied]);
    return (
        <div className={'holder'}>
            <button className={'copy-button row centered'} onClick={handleCopy}>
                <img className={'icon'} src={copied? '/ok.svg' : 'copy.svg'} alt={'copy icon'}/>
                {textToCopy}
            </button>
        </div>
    );
}