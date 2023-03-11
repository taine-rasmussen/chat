import { ChatBubbleleftRighticon, PhoneIcon } from '@heroicons/react/24/solid'

const Header = (props) => {

  const {
    title,
    description
  } = props;
  return (
    <div className='chat-header'>
      <div className='flexbetween'>
        <ChatBubbleleftRighticon className='icon-chat' />
        <h3 className='header-text'>{title}</h3>
      </div>
      <div className='flexbetween'>
        <PhoneIcon className='icon-phone' />
        <p className='header-text'>{description}</p>

      </div>
    </div>
  )
}

export default Header
