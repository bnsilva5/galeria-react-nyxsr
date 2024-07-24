import image1b from '../assets/img/image1b.jpg' 
import PropTypes from 'prop-types';

export const Image1b = ({className}) => {
    return (
        <div className={`image-container ${className}`}>
            <img src={image1b} alt="PowerTrip Band" className="image" />
        </div>
    )
}

Image1b.propTypes = {
    className: PropTypes.string
};