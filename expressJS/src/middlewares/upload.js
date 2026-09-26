import sharp from 'sharp';
import path from 'path';

const createThumbnail = async (req, res, next) => {
  if (!req.file) {
    next();
    return;
  }
  console.log(req.file.path);

  const thumbnailPath = path.join('uploads', req.file.filename + '_thumb');

  try {
    await sharp(req.file.path).resize(160, 160).png().toFile(thumbnailPath);
    next();
  } catch (err) {
    next(err);
  }
};

export { createThumbnail };
