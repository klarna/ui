export default function getActiveElement (doc) {
  doc = doc || document

  if (typeof doc === 'undefined') {
    return null
  }

  try {
    return doc.activeElement || doc.body
  } catch (e) {
    return doc.body
  }
}
