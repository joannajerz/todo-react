import React from 'react';
import {connect} from 'react-redux'


const FilterButton = ({onClick, active, children}) => {
    return (
            <button onClick={onClick} disabled={active}>{children}</button>
    )
    };
    const mapStatetoProps=(state, ownProps)=>({
      active: state.filter === ownProps.filter
    })

    const mapDispatchtoProps=(dispatch, ownProps)=>({
        onClick:() =>  dispatch({
            type: 'FILTER_TODO',
            filter: ownProps.filter
        })
    });
    export default connect(mapStatetoProps, mapDispatchtoProps)(FilterButton);