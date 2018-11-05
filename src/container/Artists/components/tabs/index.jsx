import React from 'react';
import classnames from 'classnames';

import './styles.scss';

export default (props) => {
    return (
        <div className="tab-nav">
            {props.tabItems.map(item => 
                <div 
                    className={classnames("tab-nav-item", {'active': props.activeTab===item.tabId})}
                    onClick={() => props.onClickTab(item.tabId)}
                >
                {item.title}
                </div>
            )}
        </div>
    )
}
