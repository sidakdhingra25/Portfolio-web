"use client";

type FormData = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

export async function sendContactEmail(formData: FormData) {
  try {
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: 'Failed to send email' };
  }
}

