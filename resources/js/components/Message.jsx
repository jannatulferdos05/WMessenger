import React, {useState} from "react";
import '../../css/message.css';


function Message() {


    const [phone, setPhone] = useState("");


    const [message, setMessage] = useState("");
    

    function handlePhone(event) {
        setPhone(event.target.value);
    }

    function handleMessage(event) {
        setMessage(event.target.value);
    }

    function handleSubmit(event) {
        const data={phone,message};
        fetch("http://bulksmsbd.net/api/smsapi?api_key=cQcIRLoSoBKMBwL9jIVR&type=text&number=8801516009099&senderid=8809617614158&message=TestSMS ",{
            method: "POST",
            body:JSON.stringify(data)
        }).then(response=>response.json())
        .then(data=>{console.log(data); })
        .catch((error)=>{console.error(error)});
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
<button type="submit" >Send</button>
</form> 


</div>
);
} 
export default Message;