const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const allTags = await Tag.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(allTags)
  } catch (err) {
    res.status(500).json(err)
  }
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }]
    })
    if (tagData) {
      res.status(200).json(tagData)
    } else {
      res.status(404).json({ message: `Tag id #${req.params.id} not found` })
    }
  } catch (err) {
    res.status(500).json(err)
  }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create({
      tag_name: req.body.tag_name,
    })
    res.status(200).json(newTag)
  } catch (err) {
    res.status(500).json(err)
  }
  // create a new tag
});

router.put('/:id', async (req, res) => {
  try {
    const updatedTag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    if (JSON.stringify(updatedTag) === "[0]") {
      res.status(404).json({ message: `Tag id #${req.params.id} not found`})
    } else {
      res.status(200).json({ message: `Tag id #${req.params.id} updated to ${req.body.tag_name}`})
    }
    // if (updatedTag) {
    //   res.status(200).json({ message: `Tag id #${req.params.id} updated to ${req.body.tag_name}`})
    // } else {
    //   res.status(404).json({ message: `Tag id #${req.params.id} not found`})
    // }
    
  } catch (err) {
    res.status(500).json(err)
  }
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedTag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: `Tag id #${req.params.id} has been deleted from the database` })
  } catch (err) {
    res.status(500).json(err)
  }
  // delete on tag by its `id` value
});

module.exports = router;
