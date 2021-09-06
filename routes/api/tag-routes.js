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

// This is used to retrieve one tag by a particular id
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const searchedTag = await Tag.findByPk(id, {
      include: [{ model: Product }]
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
    res.status(200).json({message: "Tag is created!"});
  } catch (error) {
    res.status(500).json(error);
  }
});

// This is used to update the tag by using the details
router.put('/:id', async (req, res) => {
  try {   
    const updatedTag = await Tag.update(
      {
        tag_name: req.body.tag_name
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({message: "Tag is updated!"});
  } catch (error) {
    res.status(500).json(error);
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const deletedTag = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json({message: "Tag is deleted!"});
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
