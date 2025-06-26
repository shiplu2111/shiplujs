'use client'
import React, { useEffect, useState } from 'react'

const RichText = ({ text }) => {
    const [html, setHtml] = useState('')

    useEffect(() => {
        // Only set innerHTML on client to avoid hydration mismatch
        setHtml(text)
    }, [text])

    return html ? (
        <div dangerouslySetInnerHTML={{ __html: html }} />
    ) : null
}
export default RichText
