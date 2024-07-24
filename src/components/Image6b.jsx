import image6b from '../assets/img/image6b.webp'
import PropTypes from 'prop-types';

export const Image6b = ({className}) => {
    return (
        <div className={`image-container ${className}`}>
            <img src={image6b} alt="ST Band" className="image" />
        </div>
    )
}

Image6b.propTypes = {
    className: PropTypes.string
}