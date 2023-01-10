import Container from "../../../../shared/composers/container";

const ModalService = ({
  title,
  description1,
  description2,
  description3,
  description4,
  description5,
  setShowModal,
}) => {
  const svg = `<svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_1_6796)">
  <path d="M29.046 29.0459C34.3187 23.7733 34.3187 15.2267 29.046 9.95406C23.7734 4.68142 15.2268 4.68142 9.95414 9.95406C4.6815 15.2267 4.6815 23.7733 9.95414 29.0459C15.2268 34.3186 23.7734 34.3186 29.046 29.0459ZM21.8866 23.6763L19.5001 21.2899L17.1136 23.6763C16.6177 24.1723 15.8197 24.1723 15.3237 23.6763C14.8278 23.1804 14.8278 22.3824 15.3237 21.8865L17.7102 19.5L15.3237 17.1135C14.8278 16.6176 14.8278 15.8196 15.3237 15.3237C15.8197 14.8277 16.6177 14.8277 17.1136 15.3237L19.5001 17.7101L21.8866 15.3237C22.3825 14.8277 23.1805 14.8277 23.6764 15.3237C24.1724 15.8196 24.1724 16.6176 23.6764 17.1135L21.2899 19.5L23.6764 21.8865C24.1724 22.3824 24.1724 23.1804 23.6764 23.6763C23.1805 24.1723 22.3825 24.1723 21.8866 23.6763Z" fill="black"/>
  </g>
  <defs>
  <clipPath id="clip0_1_6796">
  <rect width="27" height="27" fill="white" transform="translate(0.408203 19.5) rotate(-45)"/>
  </clipPath>
  </defs>
  </svg>`;

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className='mx-[50px] font-bold space-y-[25px] mt-[100px]'>
        <p className='text-black text-[38px]'>{title}</p>
        <p>{description1}</p>
        <p>{description2}</p>
        <p>{description3}</p>
        <p>{description4}</p>
        <p>{description5}</p>
      </div>
      <div className='absolute h-[27px] w-[27px] top-[25px] left-[25px] '>
        <div
          onClick={handleCloseModal}
          dangerouslySetInnerHTML={{
            __html: svg,
          }}
        />
      </div>
    </div>
  );
};

export default ModalService;
