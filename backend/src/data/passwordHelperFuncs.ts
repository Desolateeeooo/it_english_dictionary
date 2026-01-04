import bcrypt from 'bcryptjs';

export const passwordHash = async (password: string, saltRounds: number) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(password, salt);
  } catch (err) {
    console.log(err);
  }
  return null;
};

export const comparePasswords = async (password: string, hash: string) => {
  try {
    const matchFound = await bcrypt.compare(password, hash);
    return matchFound;
  } catch (err) {
    console.log(err);
  }
  return false;
};


