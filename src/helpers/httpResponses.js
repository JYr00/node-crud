exports.status200 = (res, data) => {
    res.status(200).json({
        status: 'success',
        data: data,
    });
};

exports.status201 = (res, data) => {
    res.status(201).json({
        status: 'success',
        data: data,
    });
};

exports.status400 = (res, error) => {
    res.status(400).json({
        status: 'error',
        message: error.message,
    });
};

exports.status404 = (res, error) => {
    res.status(404).json({
        status: 'error',
        message: error,
    });
};

exports.status500 = (res, error) => {
    res.status(500).json({
        status: 'error',
        message: error.message,
    });
};
