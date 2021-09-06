const router = require('express').Router();
const { Category, Product } = require('../../models');

// Endpoints for api/categories
// #################################################

// This route is used to retrieve all the categories from the table
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(categoryData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// This route is used to find a category by its id
router.get('/:id', async (req, res) => {
  try {
    const  id  = req.params.id;
    const categoryData = await Category.findByPk(id, {
      include: [{ model: Product }]
    });
    res.status(200).json(categoryData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
