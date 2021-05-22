import React, { useEffect, useState } from 'react';
import { FiLink } from 'react-icons/fi';
import ButtonIcon from '../../components/ButtonIcon';
import { useMedia } from '../../hooks/useMedia';
import { convertDate } from '../../utils';

import './Media.scss';

export const Media = () => {
  const { media } = useMedia();
  const [copySuccess, setCopySuccess] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopySuccess('');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleCopy = (e) => {
    var aux = document.createElement('input');
    aux.setAttribute('value', media.url);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand('copy');
    document.body.removeChild(aux);
    setCopySuccess('Copy');
  };

  const tags = media?.tags?.length ? media.tags.join(', ') : 'No tags found';
  const date = convertDate(media?.createdAt);

  return (
    <section className='section-media'>
      <div className='media-slider'>
        <div className='media-slider__item'>
          <div className='media-slider__img'>
            <div className='media-slider__link'>
              <ButtonIcon event={handleCopy}>
                <FiLink
                  value={{
                    style: { fontSize: '30px', color: 'rgb(0, 123, 255)' },
                  }}
                />
              </ButtonIcon>
              {copySuccess && <span>Copy!</span>}
            </div>
            <img src={media.url} alt='' />
          </div>
          <div className='media-slider__content'>
            <span className='media-slider__title'>{tags}</span>
            <span className='media-slider__text'>
              {media?.user?.username ?? 'Anonymous'}
            </span>
            <span className='media-slider__date'>{date ?? 'Anonymous'}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
