import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaBlog, FaYoutube } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

interface SNSProps {
  type: string;
  link: string;
}

const SNS = ({ type, link }: SNSProps): JSX.Element | null => {
  if (type === 'instagram')
    return (
      <Link
        to={link}
        className="flex items-center text-14 text-gray-8 "
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsInstagram className="mr-4 w-20 text-16" />
        <span className="text-14 text-blue-7 decoration-2 underline-offset-2 hover:underline max-md:text-12">
          인스타그램
        </span>
      </Link>
    );

  if (type === 'youtube')
    return (
      <Link
        to={link}
        className="flex items-center text-14 text-gray-8 "
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaYoutube className="mr-4 w-20 text-18" />
        <p className="text-14 text-blue-7 decoration-2 underline-offset-2 hover:underline max-md:text-12">
          유튜브
        </p>
      </Link>
    );

  if (type === 'naver')
    return (
      <Link
        to={link}
        className="flex items-center text-14 text-gray-8 "
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaBlog className="mr-4 w-20 text-16" />
        <p className="text-14 text-blue-7 decoration-2 underline-offset-2 hover:underline max-md:text-12">
          블로그
        </p>
      </Link>
    );

  return null;
};

export default SNS;
