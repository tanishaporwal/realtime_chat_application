
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation';
import extractTime from '../../utils/extractTime';
import Conversation from '../sidebar/Conversation';

const Message = ({message}) => {

    const {authUser}=useAuthContext();
    const {selectedConversation}=useConversation();
    const fromMe=message.senderId === authUser._id;
    const chatClassName= fromMe ? 'chat-end':'chat-start';
    
    const bubbleBgColor= fromMe ? 'bg-blue-500':"";
    const formattedTime= extractTime(message.createdAt)

    const shakeClass = message.shouldShake ? "shake" : "";
  return (
    <div className={`chat ${chatClassName}`}>
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div className={`chat-bubble text-[#e7c6ff] pb-2 ${bubbleBgColor} ${shakeClass}`}>{message.message}</div>
  <div className={`chat-footer opacity-50 text-xs flex gap-1 items-center`}>{formattedTime}</div>
 
</div>
  
  )
}

export default Message