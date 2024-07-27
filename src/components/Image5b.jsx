import image5b from '../assets/img/image5b.jpg'
import PropTypes from 'prop-types';

export const Image5b = ({className}) => {
    return (
        <div className={`image-container ${className}`}>
            <img src={image5b} alt="Lost Society Band" className="image" />
        </div>
    )
}

Image5b.propTypes = {
    className: PropTypes.string
}