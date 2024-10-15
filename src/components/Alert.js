import React from 'react';

export default function Alert(props) {
    // Function to capitalize the first letter of the word
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1); // Use + instead of =
    };

    return (
        props.alert && (
            <div className="alert alert-success alert-dismissible fade show" role="alert">
                <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
                
            </div>
        )
    );
}
