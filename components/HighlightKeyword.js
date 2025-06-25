import React from "react";
const HighlightKeyword = ({ text, keyword }) => {

    if (!keyword) return text;
    const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const parts = text.split(new RegExp(`(${escapedKeyword})`, 'gi'));
    return (
        <>
            {parts.map((part, index) => {
                const isMatch = part.toLowerCase() === keyword.trim().toLowerCase();
                return isMatch ? (
                    <span key={index} className="text-blue-600 font-semibold">{part}</span>
                ) : (
                    <React.Fragment key={index}>{part}</React.Fragment>
                );
            })}
        </>
    );
};
export default HighlightKeyword;