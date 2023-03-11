import { useState } from "react";
import { XMarkIcon } from '@heroicons/react/24/solid';
// import MessageFormUI from "./MessageFormUI";

const StandardMessageForm = () => {
  const [message, setMessage] = useState('');
  const [attachment, setAttachment] = useState('');
  const [preview, setPreview] = useState('')


  return (
    <div className='message-form-container'>
      {preview && (
        <div className='message-form-preview'>
          <img
            className='message-form-preview-image'
            src={preview}
            onLoad={() => URL.revokeObjectURL(preview)}
          />
          <XMarkIcon
            className='message-form-icon-x'
            onClick={() => {
              setPreview('')
              setAttachment('')
            }}
          />
        </div>
      )}
    </div>
  )
}

export default StandardMessageForm
