'use strict';
const slugify = require('slugify');

/**
 * Lifecycle callbacks for the `article` model.
 */
module.exports = {
  beforeSave: async (model, attrs, options) => {
    if (options.method === 'insert' && attrs.title) {
      model.set('slug', slugify(attrs.title, {lower: true, remove: /[*+~.()'"!:@]/g}));
    } else if (options.method === 'update' && attrs.title) {
      attrs.slug = slugify(attrs.title, {lower: true, remove: /[*+~.()'"!:@]/g});
    }
  },
};