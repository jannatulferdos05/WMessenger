import React, {useState} from "react";
import '../../css/message.css';


function Message() {


    const [phone, setPhone] = useState(
        {
            phone: "phone"
        }
    );


    const [message, setMessage] = useState({
        message: "message"
    
    });
    
    function handleSubmit(event) {
        return null;
    }



return (
<div>
<h1 className="head" >Send Messages</h1>
<form onChange={handleSubmit} method="post">

<label>Phone: <br/>
<input type="text" className="phonenumber" name="phone" placeholder="Enter receiver phone number"/><br/>
</label><br/>
<label>Message:<br/>
<input type="text" name="message" placeholder="Enter your message"/><br/>
</label>
<br/>
<button type="submit" >Send</button>
</form> 


</div>
);
} 
export default Message;