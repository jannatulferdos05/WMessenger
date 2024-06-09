import React, {useState} from "react";
import '../../css/message.css';


function Message() {


    const [phone, setPhone] = useState("");


    const [message, setMessage] = useState("");

    const [status,setStatus]=useState(null);

    function handlePhone(event) {
        setPhone(event.target.value);
    }

    function handleMessage(event) {
        setMessage(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const data={phone,message};
        //http://bulksmsbd.net/api/smsapi?api_key=cQcIRLoSoBKMBwL9jIVR&type=text&number=8801516009099&senderid=8809617614158&message=TestSMS
        fetch("/api/sendMessage",{
            method: "POST",
            body:JSON.stringify(data)
        }).then(response=>response.json())
        .then(data=>{
            setStatus(data['message']);
        })
        .catch((error)=>{console.error(error)});
    }



return (
<div>
<h1 className="head" >Send Messages to: {phone}</h1>
    Message: {message}
<form onSubmit={handleSubmit} >

<label>Phone: <br/>
<input value={phone}  onChange={handlePhone} type="text" className="phonenumber" name="phone" placeholder="Enter receiver phone number"/><br/>
</label><br/>
<label>Message:<br/>
<input value={message} onChange={handleMessage} type="text" name="message" placeholder="Enter your message"/><br/>
</label>
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
