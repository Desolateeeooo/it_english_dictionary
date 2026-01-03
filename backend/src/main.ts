import dotenv from 'dotenv';

dotenv.config();

import app from './app';

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Auth server running on port ${PORT}`);
	console.log(`Environment: ${process.env.NODE_ENV}`);
});
