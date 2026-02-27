import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_PATH = path.join(process.cwd(), 'src', 'data', 'inquiries.json');

// Ensure the directory exists
const ensureDir = () => {
    const dir = path.dirname(DATA_PATH);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    if (!fs.existsSync(DATA_PATH)) {
        fs.writeFileSync(DATA_PATH, JSON.stringify([]));
    }
};

export async function GET() {
    try {
        ensureDir();
        const fileContent = fs.readFileSync(DATA_PATH, 'utf-8');
        const inquiries = JSON.parse(fileContent);
        return NextResponse.json(inquiries, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch inquiries' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const data = await request.json();
        ensureDir();

        const fileContent = fs.readFileSync(DATA_PATH, 'utf-8');
        const inquiries = JSON.parse(fileContent);

        const newInquiry = {
            id: Date.now().toString(),
            ...data,
            timestamp: new Date().toISOString(),
            status: 'Pending'
        };

        inquiries.unshift(newInquiry); // Add to beginning
        fs.writeFileSync(DATA_PATH, JSON.stringify(inquiries, null, 2));

        console.log('--- NEW INQUIRY RECEIVED & SAVED ---');
        console.log(`Name: ${data.firstName} ${data.lastName}`);
        console.log('----------------------------');

        return NextResponse.json(
            { success: true, message: 'Inquiry received and saved successfully.' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error processing inquiry API:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to process inquiry' },
            { status: 500 }
        );
    }
}
