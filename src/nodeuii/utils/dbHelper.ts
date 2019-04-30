/* eslint-disable no-console */
import mongoose from 'mongoose';

const DbHelper = {
  connect(): mongoose.Mongoose {
    mongoose.connect('mongodb://localhost/test', {
      useNewUrlParser: true
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, '连接mongodb失败。'));
    db.once(
      'open',
      (): void => {
        console.warn('连接mongodb成功。');
      }
    );
    return mongoose;
  }
};

export default DbHelper;
