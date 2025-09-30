import { NextResponse } from 'next/server';

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      message: 'API is working!',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
      hasMongoUri: !!process.env.MONGODB_URI,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'API test failed' },
      { status: 500 }
    );
  }
}
