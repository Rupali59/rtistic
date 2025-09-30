import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Connect to database
    const db = await getDatabase();
    const collection = db.collection('contacts');

    // Create contact document
    const contactDoc = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || '',
      service: service || '',
      message: message.trim(),
      createdAt: new Date(),
      status: 'new', // new, contacted, closed
      source: 'website',
    };

    // Insert into database
    const result = await collection.insertOne(contactDoc);

    // Log successful submission
    console.log('New contact form submission:', {
      id: result.insertedId,
      name,
      email,
      service,
      timestamp: contactDoc.createdAt,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message! We will get back to you within 24 hours.',
        id: result.insertedId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit message. Please try again.' },
      { status: 500 }
    );
  }
}

// Handle GET requests (optional - for testing)
export async function GET() {
  try {
    const db = await getDatabase();
    const collection = db.collection('contacts');
    const contacts = await collection.find({}).sort({ createdAt: -1 }).limit(10).toArray();
    
    return NextResponse.json({
      success: true,
      contacts: contacts.map(contact => ({
        id: contact._id,
        name: contact.name,
        email: contact.email,
        service: contact.service,
        createdAt: contact.createdAt,
        status: contact.status,
      })),
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contacts' },
      { status: 500 }
    );
  }
}
