import image2b from '../assets/img/image2b.jpg';
import PropTypes from 'prop-types';

export const Image2b = ({className}) => {
    return (
        <div className={`image-container ${className}`}>
            <img src={image2b} alt="Municipal Waste Band" className="image" />
        </div>
    )
}

Image2b.propTypes = {
    className: PropTypes.string
}