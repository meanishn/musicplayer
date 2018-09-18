import React from 'react';

export default (props) => {
    return (
        <div className="row align-center" id="custom-search-input">
            <div class="input-group col-md-12">
                <input type="text" class="form-control input-lg" placeholder="Find your artist" />
                <span class="input-group-btn">
                    <button class="btn btn-info btn-lg" type="button">
                        {/* <span className="pr-2 d-none d-sm-inline-block">Search</span> */}
                        <i class="fa fa-search"></i>
                    </button>
                </span>
            </div>
        </div>
    );
}