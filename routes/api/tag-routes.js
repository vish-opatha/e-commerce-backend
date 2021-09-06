const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// Endpoints for /api/tags
// #################################################

// This is used to retrieve all the tags
router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(tags);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const searchedTag = await Product.findByPk(id, {
      include: [{ model: Category }]
    });
    res.status(200).json(searchedTag);
  } catch (error) {
    res.status(500).json(error);
  }
});

// This is used to create a new tag by using the details
router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create({
      tag_name: req.body.tag_name
    });
    res.status(200).json(newTag);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedTag = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json({message: "Tag is Deleted!"});
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
