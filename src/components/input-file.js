import Image from 'next/image';
import React, { useState } from 'react';

import styleInput from '../styles/modules/input.module.scss';

const InputFile = ({ className }) => {
  const [file, setFile] = useState('/images/user-plug.png');

  const handleChange = event => {
    const image = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      if (!reader.result) {
        return;
      } else {
        setFile(reader.result);
      }
    };
    reader.readAsDataURL(image);
  };
  return (
    <>
      <input
        type="file"
        placeholder="Photo"
        name="photo"
        className={styleInput.input}
        id="photo"
        //   {...field}
        onChange={handleChange}
      />

      <div className={className}>
        <Image src={file} alt="User" width={223} height={223} />
      </div>

      <label htmlFor="photo">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.0918 4.41421L24.9203 7.24264C25.7013 8.02369 25.7013 9.29002 24.9203 10.0711L11.4852 23.5061C11.1102 23.8812 10.6014 24.0919 10.071 24.0919H7.24258C6.13801 24.0919 5.24258 23.1965 5.24258 22.0919L5.24258 19.2635C5.24258 18.733 5.4533 18.2243 5.82837 17.8492L19.2634 4.41421C20.0444 3.63316 21.3108 3.63316 22.0918 4.41421ZM17.5459 8.96016L7.24258 19.2635V22.0919H10.071L20.3743 11.7886L17.5459 8.96016ZM18.9601 7.54594L21.7885 10.3744L23.506 8.65685L20.6776 5.82843L18.9601 7.54594Z"
            fill="black"
          />
          <mask
            id="mask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="5"
            y="3"
            width="21"
            height="22"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22.0918 4.41421L24.9203 7.24264C25.7013 8.02369 25.7013 9.29002 24.9203 10.0711L11.4852 23.5061C11.1102 23.8812 10.6014 24.0919 10.071 24.0919H7.24258C6.13801 24.0919 5.24258 23.1965 5.24258 22.0919L5.24258 19.2635C5.24258 18.733 5.4533 18.2243 5.82837 17.8492L19.2634 4.41421C20.0444 3.63316 21.3108 3.63316 22.0918 4.41421ZM17.5459 8.96016L7.24258 19.2635V22.0919H10.071L20.3743 11.7886L17.5459 8.96016ZM18.9601 7.54594L21.7885 10.3744L23.506 8.65685L20.6776 5.82843L18.9601 7.54594Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0)">
            <rect width="30" height="30" fill="white" />
          </g>
        </svg>
      </label>
    </>
  );
};

export default InputFile;
