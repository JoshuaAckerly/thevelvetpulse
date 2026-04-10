<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    /**
     * Handle contact form submission
     */
    public function store(Request $request)
    {
        // Validate the request
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string|min:10|max:5000',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Prepare email
        $contactData = [
            'name' => $request->name,
            'email' => $request->email,
            'subject' => $request->subject,
            'message' => $request->message,
        ];

        try {
            // Send email to admin (if mail is configured)
            if (config('mail.mailer') !== 'log') {
                Mail::send('emails.contact', $contactData, function ($message) use ($contactData) {
                    $message->to('contact@thevelvetpulse.com')
                        ->from($contactData['email'], $contactData['name'])
                        ->subject('New Contact Form Submission: '.$contactData['subject']);
                });
            }

            return response()->json([
                'success' => true,
                'message' => 'Your message has been sent successfully.',
            ], 200);
        } catch (\Exception $e) {
            \Log::error('Contact form error: '.$e->getMessage());

            return response()->json([
                'success' => false,
                'message' => 'There was an error sending your message. Please try again.',
            ], 500);
        }
    }
}
