const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const allCategories = await Category.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(allCategories)
  } catch (err) {
    res.status(500).json(err)
  }
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  try {
    const thisCategory = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    })
    if (thisCategory) {
      res.status(200).json(thisCategory)
    } else {
      res.status(404).json({ message: `Category id #${req.params.id} not found` })
    }
  } catch (err) {
    res.status(500).json(err)
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create({
      category_name: req.body.category_name
    })
    res.status(200).json(newCategory)
  } catch (err) {
    res.status(500).json(err)
  }
  // create a new category
});

router.put('/:id', async (req, res) => {
  try {
    const updatedCategory = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    if (JSON.stringify(updatedCategory) === "[0]") {
      res.status(404).json({ message: `Category id #${req.params.id} not found` })
    } else {
      res.status(200).json({ message: `Category id #${req.params.id} updated to ${req.body.category_name}` })
    }
  } catch (err) {
    res.status(500).json(err);
  }
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedCategory = await Category.destroy({
      where: {
        id: req.params.id
      }
    })
    if (deletedCategory) {
      res.status(200).json({ message: `Category id #${req.params.id} has been deleted` })
    } else {
      res.status(404).json({ message: `Category id #${req.params.id} not found` })
    }
  } catch (err) {
    res.status(500).json(err)
  }
  // delete a category by its `id` value
});

module.exports = router;

// const libraryCardData = await LibraryCard.destroy({
//   where: {
//     id: req.params.id,
//   },
// });