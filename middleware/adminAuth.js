import jwt from 'jsonwebtoken';

const adminAuth = (req, res, next) => {
  try {
   
    const token = req.headers.token || req.headers['x-auth-token'] || (req.headers.authorization && req.headers.authorization.split(' ')[1]);
    if (!token) {
      return res.json({ success: false, message: 'Not Authorized. Login Again' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded || decoded.email !== process.env.ADMIN_EMAIL) {
      return res.json({ success: false, message: 'Not Authorized. Login Again' });
    }

    req.admin = decoded;
    next();

  } catch (error) {
    console.error('adminAuth error:', error && error.message);
    return res.json({ success: false, message: 'Not Authorized. Login Again' });
  }
};

export default adminAuth;
