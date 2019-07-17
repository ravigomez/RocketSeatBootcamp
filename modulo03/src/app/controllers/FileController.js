class FileControlller {
  async store(req, res) {
    return res.json(req.file);
  }
}

export default new FileControlller();
