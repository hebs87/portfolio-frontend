import {useEffect} from "react";
import './FlashMessage.styles.css'

const FlashMessage = ({setShowFlashMessage}) => {
  const showFlashMessage = () => {
    let flashMessage = document.getElementById('flash_message');
    // Add show class
    flashMessage.className += " show";
    // Remove show class after 3 seconds and hide the message
    setTimeout(function () {
      flashMessage.className.replace(/\bshow\b/g, "");
      setShowFlashMessage(false);
    }, 4000);
  }

  // Trigger showFlashMessage on render
  useEffect(() => showFlashMessage());

  return (
    <div id="flash_message" className="flash-message">
      <span>
        Thanks, I'll be in touch soon. Please check your inbox for the confirmation email.
      </span>
    </div>
  )
}

export default FlashMessage;
