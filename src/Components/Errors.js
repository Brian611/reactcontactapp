import React from 'react';

const ErrorBlock = ({ errorList }) => {
    let x = 0;
    const List = Object.keys(errorList).map((error, index) => {
        x++;
        return <li key={index}>{errorList[error]}</li>
    });
    return (
        <div className="ui form error">
            <div className="ui error message">
                <div className="header">We encounted some problems!</div>
                <ul className="list">
                    {List}
                </ul>
            </div>
        </div>
    );
}

export default ErrorBlock;