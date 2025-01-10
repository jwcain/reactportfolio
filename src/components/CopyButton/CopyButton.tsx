import './CopyButton.css';
import { useState } from 'react';

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

    return (
        <div className={'holder'}>
            <button className={'copy-button'} onClick={handleCopy}>{textToCopy}</button>
            {copied && <span className={'copied-tag'}>Copied!</span>}
        </div>
    );
}