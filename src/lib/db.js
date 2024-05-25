import mongoose from 'mongoose';

const connection = {};

async function connect() {
  if (connection.isConnected) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URL);

    connection.isConnected = true;
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

async function disconnect() {
  if (connection.isConnected) {
    try {
      await mongoose.disconnect();
      connection.isConnected = false;
      console.log('Disconnected from MongoDB');
    } catch (error) {
      console.error('Error disconnecting from MongoDB:', error);
      throw error;
    }
  }
}

const db = { connect, disconnect };
export default db;
