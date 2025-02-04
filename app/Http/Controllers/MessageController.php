<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class MessageController extends Controller
{
    public function sendMessage(Request $request){
        $data=$request->json()->all();
        $phone=$data['phone'];
        $message=$data['message'];

        $url="http://bulksmsbd.net/api/smsapi?api_key=cQcIRLoSoBKMBwL9jIVR&type=text&number={$phone}&senderid=8809617614158&message={$message} ";
       
        $response = Http::get($url);
        var_dump($response->json( ));

        return response()->json(
                [
                    'status'=>'success',
                    'message'=>'Message Sent!'
                ]
        );
         

}

}
