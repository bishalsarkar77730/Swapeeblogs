import Blog from "../models/Blogs.js";
import multer from "multer";

// img storage path
const imgconfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads");
  },
  filename: (req, file, callback) => {
    callback(null, `imgae-${Date.now()}. ${file.originalname}`);
  },
});

// img filter
const isImage = (req, file, callback) => {
  if (file.mimetype.startsWith("image")) {
    callback(null, true);
  } else {
    callback(new Error("only images is allowd"));
  }
};

export const upload = multer({
  storage: imgconfig,
  fileFilter: isImage,
});

// new Blog

export const Newblog = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    const { filename } = req.file;

    const { fname } = req.body;

    if (!fname || !filename) {
      res.status(401).json({ status: 401, message: "fill all the data" });
    }
    try {
      const newBlogdata = {
        title: req.body.title,
        content: req.body.content,
        image: filename,
        author: req.user._id,
      };
      const newBlog = new Blog({ ...newBlogdata });
      await newBlog.save();
      res.status(200).send("Blog is Uploded");
    } catch (error) {
      next(error);
    }
  } else {
    return res.status(400).json({
      message: "You can update only your account!",
      success: false,
    });
  }
};
