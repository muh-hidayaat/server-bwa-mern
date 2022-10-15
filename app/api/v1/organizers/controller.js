const { createOrganizer } = require("../../../services/mongoose/users");

const { StatusCodes } = require("http-status-codes");

const createCMSOrganizer = async (req, res, next) => {
  try {
    const result = await createOrganizer(req);

    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (err) {
    console.log("err");
    console.log(err);
    next(err);
  }
};

module.exports = {
  createCMSOrganizer,
};