import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiUpload } from 'react-icons/fi';
import ReactTagInput from '@pathofdev/react-tag-input';
import { ROUTES } from '../../router';

import Button from '../../components/Button';
import { uploadMedia } from '../../services/cloudinary';
import mediaService from '../../services/mediaService';
import { Spinner } from '../../components/Spinner/Spinner';

import '@pathofdev/react-tag-input/build/index.css';
import './Upload.scss';

export const Upload = () => {
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);
  const [mediaPreview, setMediaPreview] = useState(null);
  const [mediaFile, setMediaFile] = useState(null);
  const [tags, setTags] = useState([]);

  const handleUploadMedias = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const uploadedMedia = await uploadMedia(mediaFile);
    await mediaService.upload(uploadedMedia, tags);
    history.push(ROUTES.HOME);
  };

  const handlePreviewImg = (e) => {
    const mediaFile = e.target.files[0];
    console.log(mediaFile);
    const mediaUrl = URL.createObjectURL(mediaFile);
    setMediaFile(mediaFile);
    setMediaPreview(mediaUrl);
  };

  return (
    <>
      <section className='section-upload'>
        <h1 className='text-h1'>Upload Media</h1>
        {!mediaPreview ? (
          <>
            <input
              type='file'
              name='file'
              id='file'
              className='input-file'
              onChange={handlePreviewImg}
            />
            <label
              htmlFor='file'
              className='section-upload-label input-file-text'
            >
              <FiUpload />
              <span className='input-file-span'>Choose a file</span>
            </label>
          </>
        ) : (
          <form className='section-preview' onSubmit={handleUploadMedias}>
            {isLoading ? (
              <Spinner />
            ) : (
              <>
                <div className='section-preview-media'>
                  <img src={mediaPreview} alt='preview-media' />
                </div>
                <ReactTagInput
                  tags={tags}
                  onChange={(newTags) => setTags(newTags)}
                  placeholder='Add your tags and push enter'
                />
                <Button text='UPLOAD GIF' type='submit' size='m' />
              </>
            )}
          </form>
        )}
      </section>
    </>
  );
};
