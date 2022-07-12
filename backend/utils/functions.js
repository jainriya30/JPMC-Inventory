
const removeSensitiveData = (data) => {
    data.password = undefined;
    data.tokens = undefined;
    data.createdAt = undefined;
    data.updatedAt = undefined;
    data.__v = undefined;
    return data;
  };

module.exports = {removeSensitiveData}