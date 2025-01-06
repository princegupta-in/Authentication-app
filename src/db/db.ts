import mongoose from 'mongoose';

export async function connect() {
    try {
        // Connect to MongoDB
        console.log(process.env.MONGO_URI)
        await mongoose.connect(process.env.MONGO_URI!);

        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('Connected to MongoDB');
        });

        connection.on('error', (err) => {
            console.error('Error connecting to MongoDB:', err);
        });

    } catch (error) {
        console.error('Error during MongoDB connection setup:', error);
        process.exit(1); // Exit process with failure code
    }
}
