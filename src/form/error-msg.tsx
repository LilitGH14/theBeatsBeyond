import React from 'react';

const ErrorMsg = ({ error }: any) => {
    return (
        <>
            <p style={{ color: 'red', fontSize: "12px" }}>{error}</p>
        </>
    );
};

export default ErrorMsg;