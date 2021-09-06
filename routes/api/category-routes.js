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

// This route is used to create a new category with the given category name
router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (error) {
    res.status(500).json(error);
  }
});

// This route is used to update the category name of a given category id
router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update(
      {category_name: req.body.category_name},
      {
        where: {
          id: req.params.id
        }
      }
    );
    res.status(200).json({message: "Category is updated!"});
  } catch (error) {
    res.status(500).json(error);
  }
});

// This route is to delete a category based on the given id
router.delete('/:id', async (req, res) => {
  try {
    const deletedCategory = await Category.destroy(
      {
        where: {
          id: req.params.id
        }
      }
    );
    res.status(200).json({message: "Category is Deleted!"});
  } catch (error) {
    res.status(500).json(error);
  }
  
});

module.exports = router;
