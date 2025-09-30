#!/bin/bash

# Stop All Next.js Instances Script
# This script kills all running Next.js development servers and related processes

echo "🛑 Stopping all Next.js instances..."

# Kill all next dev processes
echo "Killing 'next dev' processes..."
pkill -f "next dev" 2>/dev/null

# Kill all next-server processes
echo "Killing 'next-server' processes..."
pkill -f "next-server" 2>/dev/null

# Kill any node processes running Next.js
echo "Killing Node.js Next.js processes..."
pkill -f "node.*next" 2>/dev/null

# Wait a moment for processes to terminate
sleep 2

# Check if any Next.js processes are still running
REMAINING=$(ps aux | grep -E "(next dev|next-server|node.*next)" | grep -v grep | wc -l)

if [ "$REMAINING" -eq 0 ]; then
    echo "✅ All Next.js instances stopped successfully!"
else
    echo "⚠️  Some processes may still be running. Remaining processes:"
    ps aux | grep -E "(next dev|next-server|node.*next)" | grep -v grep
    echo ""
    echo "You may need to kill them manually with:"
    echo "pkill -f 'next'"
fi

echo ""
echo "🚀 You can now start a fresh development server with:"
echo "npm run dev"
