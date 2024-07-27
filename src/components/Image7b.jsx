import image7b from '../assets/img/image7b.webp'
import PropTypes from 'prop-types';

export const Image7b = ({className}) => {
    return (
        <div className={`image-container ${className}`}>
            <img src={image7b} alt="Poison The Preacher Band" className="image" />
        </div>
    )
}

Image7b.propTypes = {
    className: PropTypes.string
}