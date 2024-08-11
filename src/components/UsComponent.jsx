import PropTypes from 'prop-types';

export function UsComponent({ imageSrc, imageAlt, title, description, hasBorder }) {
  return (
    <div className={`flex border-[#2C5CA3] border-4 lg:border-0 rounded-[30px] lg:rounded-none py-[6vh] lg:py-[2vw] mb-4 w-full`}>
      <div className={`flex flex-row lg:flex-col ${hasBorder ? ' border-[#2C5CA3] lg:border-r-4 lg:border-t-0 lg:border-b-0 lg:border-l-0' : ''} w-full`}>
        <div className="flex-1 flex items-center sm:items-start justify-center">
          <div className="text-center justify-center">
            <img src={imageSrc} alt={imageAlt} className="mx-auto h-16 w-16" />
            <h2 className="font-bold text-[clamp(26px,_2.8vw,_3.438rem)]">{title}</h2>
          </div>
        </div>
        <div className="flex-1 lg:flex-none justify-start px-4  h-full">
          <p className=" lg:mx-4 mt-2  lg:text-[clamp(12px,_1.5vw,_2.66rem)]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

UsComponent.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  hasBorder: PropTypes.bool
};
