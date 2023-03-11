import { useState } from "react";
import { XMarkIcon } from '@heroicons/react/24/solid';
// import MessageFormUI from "./MessageFormUI";

const StandardMessageForm = () => {
  const [message, setMessage] = useState('');
  const [attachment, setAttachment] = useState('');
  const [preview, setPreview] = useState('')

  const handleChange = (e) => {
    console.log(e.target.value)
    setMessage(e.target.value)
  }


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
      <div className='message-form'>
        <div className='message-form-input'>
          <input
            className='message-form-input'
            type='text'
            value={message}
            onChange={handleChange}
            placeholder='Send a message...'
          />
        </div>
      </div>
    </div>
  )
}

export default StandardMessageForm