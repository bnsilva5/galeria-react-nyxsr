import image4b from '../assets/img/image4b.jpg'
import PropTypes from 'prop-types';

export const Image4b = ({className}) => {
    return (
        <div className={`image-container ${className}`}>
            <img src={image4b} alt="Venemous Band" className="image" />
        </div>
    )
}

Image4b.propTypes = {
    className: PropTypes.string
}