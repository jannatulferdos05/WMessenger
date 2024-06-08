<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <title>Messenger</title>

        @viteReactRefresh
        @vite(['resources/css/app.css','resources/js/app.jsx'])
     

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">

</head>
<body>
<h1 style="justify-content: center;
align-items: center;
text-align: center; 

color:crimson; " >Send Messages</h1>

<div style="" id="app" class="MessageForm"> 
<!--- {{url('/sending_message')}} --->
<form action="{{url('/sending_message')}}" method="post">
@csrf

<input type="text" class="phonenumber" name="phone" placeholder="Enter receiver phone number">
</br>
<input type="text" name="message" placeholder="Enter your message">
<button type="submit">Send</button>
</form> 
</div> 
</body>
</html>
