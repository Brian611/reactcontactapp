import React from 'react';

const ErrorBlock = ({ errorList }) => {
    const List = Object.keys(errorList).map((error, index) => {
        return <div className="item" key={index}>{errorList[error]}</div>
    });
    return (
        <div className="ui form error">
            <div className="ui error message">
                <div className="header">We encounted some problems!</div>
                <div className="ui list">
                    {List}
                </div>
            </div>
        </div>
    );
}

export default ErrorBlock;