import image3b from '../assets/img/image3b.webp'
import PropTypes from 'prop-types';


export const Image3b = ({className}) => {
    return (
        <div className={`image-container ${className}`}>
            <img src={image3b} alt="Iron/Reagan Band" className="image" />
        </div>
    )
}

Image3b.propTypes = {
    className: PropTypes.string
}