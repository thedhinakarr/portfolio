import React from 'react';
import { IoShareOutline } from "react-icons/io5";
import copy from 'clipboard-copy';

const ShareButton = ({ url }) => {
    const handleCopyToClipboard = async () => {
        try {
            await copy(`https://dhinakarr.in/blog/${url}`);
            alert("URL Copied to clip board.");
        } catch (error) {
            console.error('Error copying to clipboard:', error.message);
        }
    };


    return (
        <div>
            <button className='pr-10 hover:text-[#FADEBD]' onClick={handleCopyToClipboard}>
                <IoShareOutline size={32} />
            </button>
        </div>
    );
};


export default ShareButton;
