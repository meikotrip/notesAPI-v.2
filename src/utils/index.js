/* eslint-disable camelcase */
const mapDBToModel = ({
  id,
  title,
  body,
  tags,
  created_at,
  update_at,
  username,
}) => ({
  id,
  title,
  body,
  tags,
  createdAt: created_at,
  updatedAt: update_at,
  username,
});

module.exports = { mapDBToModel };
