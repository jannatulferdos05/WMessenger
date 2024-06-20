import React, {useState} from "react";
import '../../css/message.css';


function Message() {


    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
    

    function handlePhone(event) {
        setPhone(event.target.value);
    }

    function handleMessage(event) {
        setMessage(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const data={phone,message};
        fetch("/api/sendMessage",{
            method: "POST",
            body:JSON.stringify(data)
        }).then(response=>response.json())
        .then(data=>{setStatus(data['message']); })
        .catch();
    }



return (
<div>
<h1 className="head" >Send Messages</h1>
<form onSubmit={handleSubmit} >

<label>Phone: <br/>
<input value={phone}  onChange={handlePhone} type="text" className="phonenumber" name="phone" placeholder="Enter receiver phone number"/><br/>
</label><br/>
<label>Message:<br/>
<input value={message} onChange={handleMessage} type="text" name="message" placeholder="Enter your message"/><br/>
</label>
<br/>
Message to send: {message}
<br/>
Phone : {phone}
<br/>
<button type="submit" >Send</button>
</form> 

{
        status?status:"No status"
    }

</div>
);
} 
export default Message;