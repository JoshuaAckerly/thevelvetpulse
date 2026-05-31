<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\ContactRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Mail\Message;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    /**
     * Handle contact form submission
     */
    public function store(ContactRequest $request): JsonResponse
    {
        /** @var array{name: string, email: string, subject: string, message: string} $contactData */
        $contactData = [
            'name'    => $request->string('name')->value(),
            'email'   => $request->string('email')->value(),
            'subject' => $request->string('subject')->value(),
            'message' => $request->string('message')->value(),
        ];

        try {
            // Send email to admin (if mail is configured)
            if (config('mail.mailer') !== 'log') {
                Mail::send('emails.contact', $contactData, function (Message $message) use ($contactData) {
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
