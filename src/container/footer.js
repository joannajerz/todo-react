import React from 'react';
import FilterButton from '../components/filterButton'
import {AVAILABLE_FILTERS} from '../action/todo.actions'
const Footer = () => {
    return (
        <footer>
            <FilterButton filter={AVAILABLE_FILTERS.SHOW_ALL}>ALL</FilterButton>
            <FilterButton filter={AVAILABLE_FILTERS.SHOW_ACTIVE}>ACTIVE</FilterButton>
            <FilterButton filter={AVAILABLE_FILTERS.SHOW_COMPLETE}>COMPLETED</FilterButton>
        </footer>
    )
    };
    export default Footer;