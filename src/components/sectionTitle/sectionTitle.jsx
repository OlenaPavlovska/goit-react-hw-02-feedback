import { Component } from "react";
import PropTypes from 'prop-types'
import css from './sectionTitle.module.css'



export class Section extends Component{
    render() {
        const { title, children } = this.props;
        return (
            <div>
                <h2 className={css.title}>{title}</h2>
                {children}
            </div>
        )
    }
}
Section.propTypes = {
    title: PropTypes.string.isRequired
}