import React, { useEffect, useState } from 'react';

const UserProfile = () => {
    const [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
        const fetchHtml = async () => {
            try {
                const response = await fetch('C:\Users\dell\Downloads');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const text = await response.text();
                setHtmlContent(text);
            } catch (error) {
                console.error('Error fetching the HTML file:', error);
            }
        };

        fetchHtml();
    }, []);

    return (
        <div>
            <h2>User Profile</h2>
            <div
                dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
        </div>
    );
};

export default UserProfile;
