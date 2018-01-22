import React from 'react';

export default (props) => {
    return (
        <div className="tag-container row">
            {
                props.tags.map(tag =>
                    <div className="search-tag">{tag}</div>
                )
            }
        </div>
    );
}